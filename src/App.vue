<template>
  <v-app>
    <v-main>
      <EstatMatricules/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login.vue';
import EstatMatricules from './components/Status.vue'

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
