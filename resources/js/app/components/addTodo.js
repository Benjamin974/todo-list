
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
      selectRules: [(v) => !!v || "Item requis"],
      error: null
    }
  },

  created() {
    this.getPriorites();
  },

  methods: {

    async addTodoBdd(todo) {
      await axios.post('/graphql', {
        query: `
            mutation {
                createTodo(
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
          this.$emit('createTodo', data.data.createTodo);

        }
      })
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