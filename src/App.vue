<script setup>
import { ref, onMounted } from 'vue';

const userInput = ref('')
const userInput2 = ref('')
const postedComment = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  userInput2.value = params.get('name') || 'Guest';
});

function postComment() {
  console.log(userInput2.value)
  postedComment.value = userInput2.value // เสี่ยง XSS ตรงนี้
}
</script>

<template>
  <div id="app">
    <router-view />
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
