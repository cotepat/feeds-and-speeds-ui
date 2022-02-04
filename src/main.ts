import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueKatex from "vue-katex";
import "katex/dist/katex.min.css";
Vue.config.productionTip = false;

Vue.use(VueKatex);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


