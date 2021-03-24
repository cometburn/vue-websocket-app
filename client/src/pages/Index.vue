<template>
  <div>
    <p v-if="$socket.connected">We're connected to the server!</p>
    <input type="text" v-model="message">
    <button type="button" @click="sendMessage">Send</button>
    <button type="button" @click="broadcastMessage">Send To All</button>
    <button type="button" @click="onTestApiCall">API CALL</button>
  </div>
</template>

<script>
import { TEST_REQUEST } from "@/store/test/action";
export default {
    methods: {
        async onTestApiCall() {
            var x = await this.$store.dispatch(TEST_REQUEST, {
                clientId: this.$socket.id,
            });
        },
        broadcastMessage() {
            this.$socket.emit("broadcast", this.message);
        },
        sendMessage() {
            this.$socket.emit("message", this.message);
        },
    },
    mounted() {
        this.sockets.subscribe("message", function (data) {
            this.socketMessage = data;
        });
    },

    sockets: {
        connect() {
            this.isConnected = this.$socket.connected;
            console.log(this.$socket);
        },

        disconnect() {
            this.isConnected = this.$socket.connected;
        },
    },

    data() {
        return {
            isConnected: false,
            socketMessage: "",
            message: null,
        };
    },
};
</script>