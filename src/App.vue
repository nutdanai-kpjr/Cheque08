<template>
  <v-app>
    <v-content>
      <!-- <navuser class="mt-12" /> -->
      <center>
        <div style="font-size:1.2em;">
          Cheque 08 : TO DO LIST

          <router-link style=" margin-right: 25px;" to="/">Home</router-link>

          <router-link style=" margin-right: 25px;" to="/cheque_staffmenu"
            >Nut1
          </router-link>
          <router-link style=" margin-right: 25px;" to="/cheque_usermenu"
            >Nut2
          </router-link>
          <router-link style=" margin-right: 25px;" to="/cheque_submit"
            >Fluke
          </router-link>
          <router-link style=" margin-right: 25px;" to="/cheque_status"
            >Moth
          </router-link>
          <router-link style=" margin-right: 25px;" to="/cheque_approve"
            >Mek
          </router-link>
          <router-link style=" margin-right: 25px;" to="/cheque_verify"
            >Bun
          </router-link>
        </div>
      </center>
      <router-view></router-view>

      <!-- <HelloWorld /> -->
    </v-content>
  </v-app>
</template>
<style></style>
<script>
// import HelloWorld from "./components/HelloWorld";
// import navuser from "@/components/Nav";
export default {
  name: "App",

  components: {
    // navuser,
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
