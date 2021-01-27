<template>
  <div class="chat-page">
    <b-container fluid>
      <b-row>
        <b-col sm="3">
          <SideBar class="ml-4 mt-5" />
          <!-- <Profile v-if="chat == 'profile'" /> -->
        </b-col>
        <b-col sm="9">
          <RoomChat />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// import { mapGetters, mapActions } from 'vuex'
import SideBar from '../components/SideBar'
import RoomChat from '../components/RoomChat'
// import io from 'socket.io-client'
export default {
  name: 'Chat',
  data() {
    return {
      chatMode: ''
    }
  },
  //   created() {
  //     this.getChatList()
  //     this.getChatList
  //     this.chatMode = this.chat
  //   },
  //   computed: {
  //     ...mapGetters({ chat: 'getChatMode', chatList: 'getChatList' })
  //   },
  //   methods: {
  //     ...mapActions(['getRoomChat']),
  //     ...mapActions(['getChatList'])
  //   },
  components: {
    SideBar,
    RoomChat
  }
}
</script>

<style scoped></style>
