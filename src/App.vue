<script setup>
import { ref } from 'vue';

const userInput = ref('')
const postedComment = ref('')

function postComment() {
  console.log(userInput.value)
  postedComment.value = userInput.value // เสี่ยง XSS ตรงนี้
}
</script>

<template>
  <div id="app">
    <h2>ใส่คอมเมนต์</h2>
    <input v-model="userInput" placeholder="พิมพ์อะไรก็ได้" />
    <button @click="postComment">โพสต์</button>

    <h3>แสดงคอมเมนต์:</h3>
    <!-- ‼ <img src=x onerror="alert('XSS')"> -->
    <div v-html="postedComment"></div> <!-- จุดเสี่ยง XSS -->
  </div>
</template>

<style scoped>
#app {
  max-width: 600px;
  margin: 50px auto;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
button {
  padding: 8px 16px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
