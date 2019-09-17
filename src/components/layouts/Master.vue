<template>
  <v-app>
    <v-content>
       <nav-bar></nav-bar>
       <br>
      <slot></slot>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '../includes/NavBar';

export default {
  name: 'MAsterLayout',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
#app {
  background-color: #EAEFF7 !important;
}
</style>
