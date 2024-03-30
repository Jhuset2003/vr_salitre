<script setup>
import '@/style/AllVR.css'
import { RouterLink} from 'vue-router'
</script>

<template>
  <main>
    <div id="vr_container">
      <div v-for="(item, index) in jsonDataR" :key="index" id="vr_item">
        <RouterLink id="img_container" :to="`/VR/${item.id}`">          
          <img :src="`/Backs/${item.back}`" id="img_back">   
          <img src="../assets/icons/remove.png" @click="eliminarElemento(item.id)" id="btn_remove">
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script>
import jsonData from '@/assets/data.json';
export default {  
  data() {
    return {
      jsonDataR: jsonData // Aquí irá tu JSON
    };
  },
  methods: {
    abrirNuevaPestana(id) {      
      window.open('VR/'+id, '_blank'); // Abre una nueva pestaña      
    },
    eliminarElemento(id) {
      // Encuentra el índice del elemento en el array
      const index = this.jsonDataR.findIndex(item => item.id === id);
      // Si se encontró el elemento
      if (index !== -1) {
        // Elimina el elemento del array JSON
        this.jsonDataR.splice(index, 1);
      }
    }
  } 
}
</script>
