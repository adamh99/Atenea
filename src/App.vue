<template>
  <v-app>
    <v-main>
      <Login/>
      <EstatMatricules/>
    </v-main>
  </v-app>
</template>

<script>
import EstatMatricules from './components/Status.vue'
import Login from './components/Login.vue';

export default {
  name: 'App',

  components: {
    EstatMatricules,
    Login
  },

  data: () => ({
    }),
}
</script>
