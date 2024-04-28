<template>
  <v-app>
    <v-main>
      <EstatMatricules/>
    </v-main>
  </v-app>
</template>

<script>
import EstatMatricules from './components/Status.vue'

export default {
  name: 'App',

  components: {
    EstatMatricules,
  },

  data: () => ({
    }),
}
</script>
