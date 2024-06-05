<template>
  <v-app>
    <v-main>
      <LoginMatricula/>
      <EstatMatricules/>
    </v-main>
  </v-app>
</template>

<script>
import EstatMatricules from './components/Status.vue'
import LoginMatricula from './components/LoginMatricula.vue';

export default {
  name: 'App',

  components: {
    EstatMatricules,
    LoginMatricula
  },

  data: () => ({
    }),
}
</script>
