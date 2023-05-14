<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { defineComponent } from 'vue';
// import { useRoute } from 'vue-router';
import BaseLayout from './layouts/BaseLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    BaseLayout,
    AuthLayout,
    DashboardLayout
  },
  computed: {
    layout() {
      const route = this.$route
      console.log("route.meta.layout - "+route.meta.layout);
      if(route)
        return route.meta.layout

      return 'AuthLayout'
    }
  }

});
</script>
