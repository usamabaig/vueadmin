<template>
  <div>
    <v-toolbar
     class="myStyle"
     >
      <v-toolbar-title
      >Adalytica</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <!-- <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items> -->

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn href='/#/client/list' text small>My Client List</v-btn>
        <v-btn href='/#/my/agency' text small>My Agency</v-btn>
        <v-btn href='/#/user/list' text small>My Users</v-btn>
        <v-btn href='/#/performance/estimator' text small>Estimator</v-btn>

        <!-- <v-btn icon>
          <v-icon>mdi-account</v-icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn> -->

              <v-menu
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="purplee"
          color="transparent"
          dark
          v-on="on"
        >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Noman Kabeer
        <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>


      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
         
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


      </template>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>


<style>
.myStyle{
  background-color:#1d1d68  !important;
}
.myStyle div {
  color: white !important;
}
.v-btn{
  color: white  !important;
}
</style>