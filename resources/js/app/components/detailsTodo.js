import UpdateTodo from './UpdateTodo.vue'

export default {
  components: {
    UpdateTodo
  },
  props: {
    todo: {
      default: function () {
        return {}
      }
    }
  },

  data() {
    return {
      dialog: false
    }
  },

  methods: {
    update(todo) {
      this.$emit('update', todo);
    }
  }

}