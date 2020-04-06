<template>
  <v-app>
    <head></head>
    <v-content>
      <testbar />
      <header>
        <div>
          <h1>Cheque Management</h1>
        </div>
      </header>
      <test />
      <div>{{ info }}</div>
      <!-- <btab /> -->
    </v-content>
  </v-app>
</template>
<style>
body {
  font-family: "Nunito", sans-serif;
}

header {
  /* border: 5px solid black; */
  font-size: 2.5em;
  font-family: "Nunito", sans-serif;
  text-align: center;
  margin: 75px auto 75px auto;
}
</style>
<script>
import test from "@/components/staff_list";
import testbar from "@/components/Nav";

import axios from "axios";

export default {
  name: "Staff",

  components: {
    test,
    testbar,
  },

  data: () => ({
    info: null,
    //
  }),
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
};
</script>
