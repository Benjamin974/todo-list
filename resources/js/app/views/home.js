import axios from "axios"
import DetailsTodo from '../components/DetailsTodo.vue'
import AddTodo from '../components/AddTodo.vue'
export default {
  components: {
    DetailsTodo,
    AddTodo
  },
  data() {
    return {
      todos: [],
      priorites: ['liste complete'],
      priorite: {},

    }
  },

  created() {
    this.getTodos();
    this.getPriorites();
  },
  methods: {
    async getTodos() {
      await axios.post('/graphql', {
        query: `
            {
                todos(orderBy: [{ column: DATE_EXECUTION, order: ASC }]) {
                    id,
                    titre,
                    description,
                    date_execution,
                    is_check,
                    priorite {
                      id
                      priorite
                    }
                }
            }
        `
      }).then(({ data }) => {
        data.data.todos.forEach(_data => {
          this.todos.push(_data);
        })
      })
    },

    async isCheck(check, todo) {
      await axios.post('/graphql', {
        query: `
            mutation {
                updateTodoCheck(
                  id: ` + todo.id + `
                  is_check: ` + check + `
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
      })
    },

    async getPriorite() {
      this.todos = []

      if (this.priorite == "liste complete") {
        this.getTodos();
      } else {


        await axios.post('/graphql', {
          query: `
        {
          todos_priorite(priorite_id: `+ this.priorite.id + `) {
            id,
            titre,
            description,
            date_execution,
            is_check
            priorite {
              id
              priorite
            }
          }
        }
        `
        }).then(({ data }) => {
          data.data.todos_priorite.forEach(_data => {
            this.todos.push(_data)
          })
        })
      }
    },


    update(todo) {
      const index = _.findIndex(this.todos, { id: todo.id });
      this.todos.splice(index, 1, todo);
    },

    add(todo) {
      this.todos.push(todo);
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
  }
}