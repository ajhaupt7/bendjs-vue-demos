<template>
  <div :class="[$style.component, 'page leading-loose bg-grey-lighter']">
    <h1>A Single TodoItem</h1>

    <todo-item
      :todo-item="todoItemToPassToComponent"
      @click-todo-item="toggleItemCompleted" />

    <nuxt-link class="block py-2" to="/todo-list/todo-list">TodoList Component</nuxt-link>
  </div>
</template>

<script>
import TodoItem from '~/components/todo-list/todo-item.vue';

export default {
  components: {
    TodoItem,
  },

  data() {
    return {
      todoItemToPassToComponent: { name: "Play it cool", completed: false },
    }
  },

  methods: {
    toggleItemCompleted(todoItem) {
      todoItem.completed = !todoItem.completed;
    },
  },
}
</script>

<style lang="scss" module>
.component {
  padding: 150px;
}

.input {
  padding: 5px 7.5px;
  outline: 0 none;
  min-width: 100%;
  margin-bottom: 25px;
}
</style>

