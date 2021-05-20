<template>
  <v-app dark>
    <!-- Barra de Navegación -->
    <v-app-bar fixed app>
      <!-- Home -->
      <v-toolbar-title class="me-5"><NuxtLink style="color:white; text-decoration:none" to="/">Home</NuxtLink></v-toolbar-title>
      <!-- Desafio -->
      <v-toolbar-title><NuxtLink style="color:white; text-decoration:none" to="cards">Desafio</NuxtLink></v-toolbar-title>
    </v-app-bar>
    <!-- Contenido pages -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- Footer -->
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>
