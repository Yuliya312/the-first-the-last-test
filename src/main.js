import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/dist/swiper-bundle.css";
import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
