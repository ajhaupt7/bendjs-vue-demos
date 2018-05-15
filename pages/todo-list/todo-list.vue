<template>
  <div :class="[$style.component, 'page leading-loose bg-grey-lighter']">
    <h1>TodoList Component</h1>

    <todo-list
      title="Vue Talk Todos"
      :todos="todoItems"
      @click-todo-item="toggleItemCompleted" />

    <nuxt-link class="block py-2" to="/todo-list">TodoList App</nuxt-link>
  </div>
</template>

<script>
import TodoList from '~/components/todo-list/todo-list.vue';

export default {
  components: {
    TodoList,
  },

  data() {
    return {
      todoItems: [
        { name: "Pretend to what I'm talking about", completed: false },
        { name: "Look smart", completed: false },
        { name: "Or at least look smarter than Andrew...", completed: true },
      ],
    }
  },

  methods: {
    addItemToList() {
      if (this.todoItem !== '') {
        this.todoItems.push({ name: this.todoItem, completed: false });
        this.todoItem = '';
      }
    },

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

