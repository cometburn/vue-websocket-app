import axios from "axios";

import {
  TEST_REQUEST,
} from "./action";


const state = {};

const getters = {};

const mutations = {};

const actions = {
  [TEST_REQUEST]: ({ commit, dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://127.0.0.1:9021/api/test?clientId=${payload.clientId}`
        )
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log(err)
        });
    })
  },
};



export default {
  state,
  getters,
  actions,
  mutations
};
