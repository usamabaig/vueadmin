<template>
  <v-app>
    <v-content>
       <nav-bar></nav-bar>
       <br>
      <PerformanceEstimator/>
    </v-content>
  </v-app>
</template>

<script>
import PerformanceEstimator from './components/dashboard/PerformanceEstimator';
import NavBar from './components/includes/NavBar';

export default {
  name: 'App',
  components: {
    PerformanceEstimator,
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
