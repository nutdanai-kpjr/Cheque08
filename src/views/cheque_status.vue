<template>
  <v-app>
    <v-content>
      <navbar />
      <h1>Status</h1>
    </v-content>
  </v-app>
</template>
<style></style>
<script>
import navbar from "@/components/Nav";

export default {
  name: "cheque_status",

  components: {
    navbar,
  },

  data: () => ({}),
};
</script>
