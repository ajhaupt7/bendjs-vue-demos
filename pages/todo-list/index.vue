<template>
  <div :class="[$style.component, 'page leading-loose bg-grey-lighter']">
    <h1>Add a Todo</h1>

    <input
      type="text"
      v-model="todoItem"
      @keyup.enter="addItemToList"
      :class="$style.input" />

    <todo-list
      v-show="hasIncompleteTodos"
      title="Incomplete Todos"
      :todos="incompleteTodos"
      @click-todo-item="toggleItemCompleted" />

    <todo-list
      v-show="hasCompletedTodos"
      title="Completed Todos"
      :todos="completedTodos"
      @click-todo-item="toggleItemCompleted" />
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
      todoItem: '',
      todoItems: [],
    }
  },

  computed: {
    hasCompletedTodos() {
      return this.completedTodos.length > 0;
    },

    hasIncompleteTodos() {
      return this.incompleteTodos.length > 0;
    },

    completedTodos() {
      return this.todoItems.filter(todo => todo.completed);
    },

    incompleteTodos() {
      return this.todoItems.filter(todo => !todo.completed);
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

