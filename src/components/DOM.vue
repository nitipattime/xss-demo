<script setup>
import { ref, onMounted } from 'vue'
import DOMPurify from 'dompurify'

const storedData = ref('')

onMounted(() => {
  storedData.value = localStorage.getItem('userData')
  // sanitize
  // storedData.value = DOMPurify.sanitize(localStorage.getItem('userData'))
})
</script>

<template>
  <div>
    <h1>ข้อมูลของคุณ</h1>
    <div v-html="storedData"></div>
    <!-- set localStorage -->
    <!-- localStorage.setItem('userData', '<img src=x onerror="alert(\'XSS\')" />') -->
  </div>
</template>