/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import socketio from "socket.io-client";
import VueSocketIO from 'vue-socket.io';
import socketStore from './store/socket.js'

Vue.config.productionTip = false;

const vm = this;
const hostname = window.location.hostname;
const port = parseInt(window.location.port) + 1;

export const SocketInstance = socketio(`ws://${hostname}:${port}`, {
  transports: ["websocket"],
});

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance
}), socketStore)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
