import Vue from "vue"

const hostname = window.location.hostname;
const port = parseInt(window.location.port) + 1;
const socket = new WebSocket(`ws://${hostname}:${port}/ws`);

const emitter = new Vue({
  methods: {
    send(message) {
      if (1 === socket.readyState)
        socket.send(message)
    }
  }
})

socket.onmessage = (msg) => {
  emitter.$emit("message", msg.data)
}

socket.onerror = (err) => {
  emitter.$emit("error", err)
}

export default emitter