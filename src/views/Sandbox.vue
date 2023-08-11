<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const count = ref(0)
function increment() {
   count.value++
}
onMounted(() => {
   console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
   <div class="wrapper">
      <button @click="count++">Count is {{ count }}</button>
      <br />
      <button @click="increment">Count is {{ count }}</button>
   </div>
</template>

<style scoped>
.wrapper {
   height: auto;
   border: 1px solid white;
   border-radius: 3px;
   padding: 20px;
}
</style>