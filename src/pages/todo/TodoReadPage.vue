<template>
  <h1>Todo Read Page</h1>
  <h2> {{ $route.params.id }}</h2>
</template>

<script setup>

import {useRouter} from "vue-router/dist/vue-router";

const router = useRouter()

console.log(router)

</script>

<style scoped>

</style>