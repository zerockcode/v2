<template>
  <h1>Todo Input Page</h1>
  <div>
    <p>
      <input type="text" v-model="todo.title" >
    </p>
    <p>
      <input type="date" v-model="todo.dueDate" >
    </p>
    <p>
      <button @click="addServer">ADD</button>
    </p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {reactive} from "vue";
import axios from "axios";

const router = useRouter()

const todo = reactive({title:'Sample', dueDate:'2022-10-10'})

const addServer =  () => {

  console.log(todo.title, todo.dueDate)

  const param = {title:todo.title, dueDate: todo.dueDate, complete:false}

  axios.post("http://localhost/todos/", param).then(res => {
    console.log(res.data)

    const newTodoId = res.data.id

    alert("NEW TO DO " + newTodoId)

    router.push('/todo/list')
  })

}

</script>

<style scoped>

</style>