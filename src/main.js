import Vue from "vue";
import User from "./User.vue"; // เอา app มาใช้่
import Staff from "./Staff.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(Staff)
}).$mount("#app"); // เอามาใส้ไว้ใน ใน id app
