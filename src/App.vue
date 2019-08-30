<template>
  <master>
    <!-- <PerformanceEstimator/> -->
    <!-- <client-list></client-list> -->
<router-view></router-view>
  </master> 
</template>

<script>


// import PerformanceEstimator from './components/dashboard/PerformanceEstimator';
// import ClientList from './components/dashboard/ClientList';
import Master from './components/layouts/Master';



export default {
  name: 'App',
  components: {
    // PerformanceEstimator,
    // ClientList,
    Master
  },
  data: () => ({
    
  }),
};
</script>
