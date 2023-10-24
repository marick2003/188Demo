<template>
    <div class="flex justify-center items-center h-300">
        <img src="`src/assets/images/footer/footer.png`" alt="" class="w-auto h-auto">
    </div>
</template>
  
<script  setup>
import { ref, reactive } from 'vue'

const footerInfo = reactive([
    { id: '',name: '',text: ''},
]);

</script>
<style scoped>

</style>