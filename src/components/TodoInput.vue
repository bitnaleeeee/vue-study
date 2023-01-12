<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">추가</button>
  </div>
</template>

<script>

    export default {
      data() {
        return {
          newTodoItem: ''
        }
      },
      methods: {
        addTodo() {
          if (this.newTodoItme !== "") {
            let value = this.newTodoItem && this.newTodoItem.trim();
            localStorage.setItem(value, value);
            this.celarInput();
          }
        },
        clearInput() {
          this.newTodoItme = '';
        }  
      }
    }
</script>

<style>
</style>