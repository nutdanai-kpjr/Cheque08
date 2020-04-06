<template>
  <v-app>
    <head></head>
    <v-content>
      <testbar />
      <header>
        <div>
          <h1>Cash a Cheque</h1>
        </div>
      </header>
      <test />
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
  margin: 50px auto 25px auto;
}
</style>
<script>
import test from "@/components/user_list";
import testbar from "@/components/Nav";

export default {
  name: "cheque_usermenu",

  components: {
    test,
    testbar,
  },

  data: () => ({
    //
  }),
};
</script>
