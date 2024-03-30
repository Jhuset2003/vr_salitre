<script setup>
  import MindarViewer from '@/components/MindarViewer.vue'  
</script>

<script>
import jsonData from '@/assets/data.json';

export default {
  data() {
    return {      
      jsonDataR: jsonData.find(objeto => objeto.id === parseInt(this.$route.params.id)) // Aquí irá tu JSON
    };
  },mounted(){
    
  }

}
</script>

<template>
  
  <div class="app">       
    <h1>{{ jsonDataR.id }}</h1>
    <div class="container">
      <mindar-viewer :imagen="`${jsonDataR.target}`" :back="`${jsonDataR.back}`" :asset_3d="`${jsonDataR.asset_3d}`" :scale="`${jsonDataR.scale}`"/>
    </div>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
}

.container {
  margin: 20px auto;
  position: relative;
  height: 400px;
  width: 600px;
  overflow: hidden;
}
</style>
