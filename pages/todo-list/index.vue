<template>
  <div :class="[$style.component, 'page leading-loose bg-grey-lighter']">
    <h1>Add a Todo</h1>

    <input
      type="text"
      v-model="todoItem"
      @keyup.enter="addItemToList"
      :class="$style.input" />

    <celebrate-good-times v-show="isCelebrating" />

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
import faker from 'faker';
import CelebrateGoodTimes from '~/components/todo-list/celebrate-good-times.vue';
import TodoList from '~/components/todo-list/todo-list.vue';

export default {
  components: {
    CelebrateGoodTimes,
    TodoList,
  },

  data() {
    return {
      isCelebrating: false,
      todoItem: '',
      todoItems: [
        { name: "Blow people's minds 💥", completed: true },
        { name: "Make a baller presentation 🏈🏀🎱", completed: true },
        { name: "Feel accomplished 🏋🏽‍♂️", completed: true },
        { name: "Remind Yong this presentation counts for 1pt of my grade 🤓", completed: false },
      ],
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

    potentiallyCelebrateGoodTimesForALittleWhile(newVal, oldVal) {
      if (oldVal > 0 && newVal === 0) {
        this.isCelebrating = true;

        setTimeout(this.resetAndSeed, 10000);
      } else {
        this.isCelebrating = false;
      }
    },

    resetAndSeed() {
      this.isCelebrating = false;
      [...Array(50).keys()].forEach(() => {
        this.todoItems.push({ name: faker.lorem.sentence(), completed: false });
      });
    }
  },

  watch: {
    'incompleteTodos.length': 'potentiallyCelebrateGoodTimesForALittleWhile'
  }
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

