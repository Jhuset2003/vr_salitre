<script setup>
import { RouterLink, RouterView } from 'vue-router'
import('@/style/nav.css');
</script>

<template>
  <header>    
    <div class="wrapper">
      <nav id="nav_container">
        <RouterLink to="/">All VR</RouterLink> |
        <RouterLink to="/create">Create</RouterLink>
        <RouterLink to="/VR/1">Prueba</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
