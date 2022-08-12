<template>
  <h1>Todo List Page</h1>

  <ul class="todoUL">
    <li v-for="todo in dataRef" v-bind:key="todo.id">
        {{todo.id}} -- {{todo.title}} <a :href="`/todo/read/${todo.id}`">READ</a>
    </li>
  </ul>

</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";
import {ref} from "vue";

const getServerList = async(pageParam) => {
  const res = await axios.get('http://localhost/todos', {params:pageParam})

  return res.data
}

const router = useRouter()
const route = useRoute()

console.log(router)
//querystring
console.log(route.query)

const query = route.query

const pageParam = {page: query.page ||1, size: query.size||10 }

//console.log("AFTER ", pageParam)

const dataRef = ref([])

getServerList(pageParam).then(data => {
  console.log(data)
  dataRef.value = data

  console.log(dataRef.value)
})




</script>

<style scoped>

.todoUL {
  list-style: none;
}


</style>