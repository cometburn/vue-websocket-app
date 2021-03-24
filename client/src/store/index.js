import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import socket from "./socket";
import test from "./test/module";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    socket,
    test
  },
});
