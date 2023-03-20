<template>
  <v-app>
    <v-main>
      
      <v-app-bar app color="primary" dark>
        <v-toolbar-title to="/"><router-link to="/" style="text-decoration: none; color: inherit;">SelfExplorer</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn   text><router-link to="/Privacy" style="text-decoration: none; color: inherit;">Privacy</router-link></v-btn>
        <v-btn  text><router-link to="/Contact" style="text-decoration: none; color: inherit;">Contact</router-link></v-btn>
        <v-btn   text><router-link to="/AboutUs" style="text-decoration: none; color: inherit;">About</router-link></v-btn>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>
