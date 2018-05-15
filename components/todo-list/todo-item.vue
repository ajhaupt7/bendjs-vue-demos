<template>
  <li
    :class="$style.component"
    @click="$emit('click-todo-item', todoItem)">

    <input
      type="checkbox"
      :class="$style.checkbox"
      :checked="todoItem.completed" />

    <span
      :class="{ [$style.completed] : todoItem.completed }"
      v-text="todoItem.name" />
  </li>
</template>

<script>
  export default {
    props: {
      todoItem: {
        type: Object,
        default() {
          return { name: '', completed: false };
        }
      }
    },
  }
</script>

<style lang="scss" module>
  .component {
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .checkbox {
    margin-right: 5px;
  }

  .completed {
    text-decoration: line-through;
    color: red;
  }
</style>
