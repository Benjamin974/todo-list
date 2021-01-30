
export default {
  props: {
    todo: {
      default: function () {
        return {}
      }
    }
  },

  data() {
    return {
      titre: '',
      description: '',
      date_execution: '',
      priorite: {},
      priorites: [],
      lazy: false,
      valid: true,
      rules: [
        v => !!v || "champ requis",
      ],
      error: null

    }
  },

  created() {
    this.getPriorites();
  },

  methods: {

    async updateTodoBdd(todo) {
      // console.log(todo);
      // console.log(this.priorite.id);
      await axios.post('/graphql', {
        query: `
            mutation {
                updateTodo(
                  id: ` + this.todo.id + `
                  titre: "` + this.titre + `"
                  description: "` + this.description + `"
                  date_execution: "` + this.date_execution + `"
                  is_check: false
                  priorite_id: ` + this.priorite.id + `
                ) {
                      id
                      titre
                      description
                      date_execution
                      is_check
                      priorite {
                        id
                        priorite
                      }
                }
            }
        `
      }).then(({ data }) => {
        if (data.errors && data.errors.length != 0) {
          this.error = 'choisissez une prioriter'

        } else {
          this.$emit('updateTodo', data.data.updateTodo);
        }
      })
    },
    update() {
      this.titre = this.todo.titre;
      this.description = this.todo.description;
      this.date_execution = this.todo.date_execution;
      this.priorite = this.todo.priorite;
    },

    async getPriorites() {
      await axios.post('/graphql', {
        query: `
            {
                priorites {
                      id
                      priorite
                }
            }
        `
      }).then(({ data }) => {
        data.data.priorites.forEach(_data => {
          this.priorites.push(_data);
        })
      })
    }
  },




}