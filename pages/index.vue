<template>
  <section class="page bg-grey-lightest flex flex-col justify-center items-center">
    <div class="py-4">
      <h1 class="title">
        Different Points of Vue
      </h1>
    </div>
    <div class="links py-4 flex justify-between">
      <div class="px-8 text-right">
        <h2>Animations</h2>
        <div class="py-2">
          <nuxt-link class="block py-2" to="/animations/transitions-none">No Transitions</nuxt-link>
          <nuxt-link class="block py-2" to="/animations/transitions-basic">Basic Transitions</nuxt-link>
          <nuxt-link class="block py-2" to="/animations/transitions-animations">Basic Animations</nuxt-link>
          <nuxt-link class="block py-2" to="/animations/transitions-mode">Transition Modes</nuxt-link>
          <nuxt-link class="block py-2" to="/animations/transitions-state">Transitioning State</nuxt-link>
          <nuxt-link class="block py-2" to="/animations/transitions-groups">Transition Groups</nuxt-link>
        </div>
      </div>
      <div class="px-8">
        <h2>Whack a Gopher</h2>
        <div class="py-2">
          <nuxt-link class="block py-2" to="/whack-a-gopher">Play</nuxt-link>
        </div>
      </div>
      <div>
        <h2>TodoList</h2>
        <div class="py-2">
          <nuxt-link class="block py-2" to="/todo-list">Todo List App</nuxt-link>
          <nuxt-link class="block py-2" to="/todo-list/todo-list">Todo List</nuxt-link>
          <nuxt-link class="block py-2" to="/todo-list/todo-item">Todo Item</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style>

</style>
