<template>
    <div v-for="item in footerInfo">
        {{ item.name }}
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