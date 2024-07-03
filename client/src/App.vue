<template>
  <v-app>
    <app-bar />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import AppBar from './components/ui/app-bar/app-bar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
  },
});
</script>
