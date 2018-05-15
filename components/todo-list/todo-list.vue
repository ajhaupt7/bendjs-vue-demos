<template>
  <div :class="$style.component">
    <h3>{{ title }}</h3>

    <ul>
      <todo-item
        v-on="$listeners"
        v-for="(item, index) in todos"
        :key="index"
        :todo-item="item" />
    </ul>
  </div>
</template>

<script>
import TodoItem from './todo-item.vue';

export default {
  name: 'todo-list',

  props: {
    title: String,
    todos: Array,
  },

  components: {
    TodoItem,
  },
}
</script>

<style lang="scss" module>
  .component {
    margin-bottom: 15px;
  }
</style>

