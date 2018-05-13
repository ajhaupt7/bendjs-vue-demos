<template>
  <section class="page flex flex-col justify-center items-center">
    <div class="py-4">
      <h1 class="title">
        Different Points of Vue
      </h1>
    </div>
    <div class="links py-4">
      <div
        v-for = "route in $router.options.routes"
        :key  = "route.name"
        class = "p-2"
      >
      <nuxt-link
        v-if  = "route.name !== 'index'"
        :to   = "route.path"
      >
        {{route.name}}
      </nuxt-link>
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
