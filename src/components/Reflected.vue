<script setup>
import { ref, onMounted } from 'vue'

const query = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  query.value = params.get('q') || ''
})
</script>

<template>
  <div style="padding: 20px">
    <h1>🔎 Search Page (Reflected XSS Demo)</h1>

    <p>ลองค้นหาด้วย query string เช่น:</p>
    <code>?q=Vue</code>

    <h3>ผลลัพธ์ที่สะท้อน:</h3>
    <div v-html="query"></div>
    <!-- /?q=<img%20src=x%20onerror=alert(%27XSS%27)> -->
  </div>
</template>

 <!-- <script setup>
import { ref, onMounted } from 'vue';

// npm install dompurify
// import DOMPurify from 'dompurify';
// userInput.value = DOMPurify.sanitize(params.get('name') || 'Guest');

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
    <h2>DOM-Based XSS in Vue.js</h2>
    <p>ลองใส่ใน URL เช่น <code>?name=Guest</code></p>

    <div>
      ⚠️ ช่องโหว่ DOM XSS อยู่ตรงนี้ 
      <strong>Result:</strong>
      <div v-html="userInput2"></div>
    </div>
    <hr>

    <h2>ใส่คอมเมนต์</h2>
    <input v-model="userInput" placeholder="พิมพ์อะไรก็ได้" />
    <button @click="postComment">โพสต์</button>

    <h3>แสดงคอมเมนต์:</h3>
    ‼ <img src=x onerror="alert('XSS')">
    <div v-html="postedComment"></div> จุดเสี่ยง XSS 
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
 -->
