<script setup>
import { ref, onMounted } from 'vue'
import DOMPurify from 'dompurify'

const storedComments = ref([]) 
const userInput = ref('')

function postComment() {
    storedComments.value.push(userInput.value)
    userInput.value = ''
}

onMounted(() => {
storedComments.value = [
        'test',
      'aaa<img src="x" onerror="alert(\'Stored XSS!\')" />'
]
// sanitize
// storedComments.value = rawComments.map(c => DOMPurify.sanitize(c))
});
</script>

<template>
    <div style="max-width: 600px; margin: auto">
        <h2>เขียนคอมเมนต์</h2>
        <input v-model="userInput" placeholder="เขียนความคิดเห็น..." />
        <button @click="postComment">โพสต์</button>

        <h3>คอมเมนต์ทั้งหมด</h3>
        <ul>
            <li v-for="(comment, index) in storedComments" :key="index">
                <div v-html="comment"></div>
            </li>
        </ul>
    </div>
    <!-- <img src="x" onerror="alert('Stored XSS!')" /> -->
</template>


<!-- <script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
// import DOMPurify from 'dompurify'

const storedComments = ref([]) // สร้างตัวแปรเก็บคอมเมนต์
const userInput = ref('')

function postComment() {
    // เพิ่มคอมเมนต์ใหม่
    storedComments.value.push(userInput.value)
    userInput.value = ''
}

// ดึงข้อมูลจาก API เมื่อ component ถูก mount
onMounted(async () => {
    try {
        // const response = await fetch('https://christmas-backend.vercel.app/api/test01')  // แทนที่ URL ด้วย API จริง
        // const data = await response.json()
        
        // // ใช้ DOMPurify เพื่อ sanitize ข้อมูลก่อนแสดง
        // // storedComments.value = data.message ? [DOMPurify.sanitize(data.message)] : []
        // storedComments.value = data.message

            axios.get('https://christmas-backend.vercel.app/api/test01') // URL ที่จำลอง
        .then(response => {
        storedComments.value = [
            response.data.message01 // ดึงคอมเมนต์จาก API response
        ]
        })
        .catch(error => {
        console.error('Error loading data:', error)
        })
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error)
    }
})
</script>

<template>
    <div style="max-width: 600px; margin: auto">
        <h2>เขียนคอมเมนต์</h2>
        <input v-model="userInput" placeholder="เขียนความคิดเห็น..." />
        <button @click="postComment">โพสต์</button>

        <h3>คอมเมนต์ทั้งหมด</h3>
        <ul>
            <li v-for="(comment, index) in storedComments" :key="index">
                <div v-html="comment"></div> 
            </li>
        </ul>
    </div>
</template> -->