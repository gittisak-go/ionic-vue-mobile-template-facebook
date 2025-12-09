<template>
  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="close">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>
          <div style="display: flex; align-items: center; gap: 8px;">
            <ion-avatar style="width: 32px; height: 32px;">
              <img :src="user?.pic || 'assets/images/avatar.jpg'" />
            </ion-avatar>
            <div>
              <div style="font-size: 16px; font-weight: 600;">{{ user?.name || 'แชท' }}</div>
              <div style="font-size: 12px; color: #65b95f;">ออนไลน์</div>
            </div>
          </div>
        </ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="call"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="videocam"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="informationCircle"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="chat-content">
      <div class="messages">
        <div v-for="msg in messages" :key="msg.id" :class="['message-bubble', msg.isMe ? 'message-sent' : 'message-received']">
          <div class="bubble">
            <div class="bubble-text">{{ msg.text }}</div>
          </div>
          <div class="message-time">{{ msg.timestamp }}</div>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar class="composer-toolbar">
        <div class="composer">
          <ion-button fill="clear" class="composer-btn">
            <ion-icon :icon="add" color="primary"></ion-icon>
          </ion-button>
          <ion-button fill="clear" class="composer-btn">
            <ion-icon :icon="camera" color="primary"></ion-icon>
          </ion-button>
          <ion-button fill="clear" class="composer-btn">
            <ion-icon :icon="image" color="primary"></ion-icon>
          </ion-button>
          <ion-button fill="clear" class="composer-btn">
            <ion-icon :icon="mic" color="primary"></ion-icon>
          </ion-button>
          <div class="input-wrapper">
            <ion-input 
              v-model="text" 
              placeholder="Aa" 
              class="message-input"
              @keyup.enter="send"
            ></ion-input>
            <ion-button fill="clear" class="emoji-btn">
              <ion-icon :icon="happyOutline" color="primary"></ion-icon>
            </ion-button>
          </div>
          <ion-button 
            v-if="text" 
            @click="send" 
            fill="clear" 
            class="send-btn"
          >
            <ion-icon :icon="send" color="primary"></ion-icon>
          </ion-button>
          <ion-button 
            v-else
            fill="clear" 
            class="composer-btn"
          >
            <ion-icon :icon="thumbsUp" color="primary"></ion-icon>
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-modal>
</template>

<script>
import { 
  IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, 
  IonContent, IonInput, IonFooter, IonAvatar, IonIcon 
} from '@ionic/vue';
import { 
  arrowBack, call, videocam, informationCircle, add, camera, 
  image, mic, happyOutline, send, thumbsUp 
} from 'ionicons/icons';
import { mapGetters } from 'vuex';

export default {
  components: { 
    IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, 
    IonContent, IonInput, IonFooter, IonAvatar, IonIcon 
  },
  data() {
    return { 
      isOpen: false, 
      text: '',
      arrowBack,
      call,
      videocam,
      informationCircle,
      add,
      camera,
      image,
      mic,
      happyOutline,
      send,
      thumbsUp,
      user: null
    };
  },
  computed: {
    ...mapGetters(['chatMessages', 'user']),
    messages() {
      return this.chatMessages.map((msg, idx) => ({
        ...msg,
        isMe: idx % 2 === 0
      }));
    },
  },
  methods: {
    open() { 
      this.isOpen = true;
      this.user = this.$store.getters.user || { name: 'แชท', pic: 'assets/images/avatar.jpg' };
    },
    close() { this.isOpen = false; },
    send() {
      if (!this.text.trim()) return;
      this.$store.dispatch('addChatMessage', this.text);
      this.text = '';
    },
  },
};
</script>

<style scoped>
.chat-content {
  --background: #ffffff;
}

.messages { 
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.message-bubble {
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin-bottom: 2px;
}

.message-received {
  align-items: flex-start;
}

.message-sent {
  align-items: flex-end;
  align-self: flex-end;
}

.bubble {
  padding: 8px 12px;
  border-radius: 18px;
  word-wrap: break-word;
}

.message-received .bubble {
  background: #e4e6eb;
  color: #050505;
}

.message-sent .bubble {
  background: #0084ff;
  color: #ffffff;
}

.bubble-text {
  font-size: 15px;
  line-height: 1.3;
}

.message-time {
  font-size: 11px;
  color: #65676b;
  margin-top: 2px;
  padding: 0 4px;
}

.composer-toolbar {
  --background: #ffffff;
  --border-width: 1px 0 0 0;
  --border-color: #e4e6eb;
  --padding-top: 8px;
  --padding-bottom: 8px;
}

.composer {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  width: 100%;
}

.composer-btn {
  --padding-start: 8px;
  --padding-end: 8px;
  margin: 0;
  height: 36px;
  width: 36px;
}

.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f0f2f5;
  border-radius: 20px;
  padding: 0 12px;
  min-height: 36px;
}

.message-input {
  --padding-start: 0;
  --padding-end: 0;
  font-size: 15px;
}

.emoji-btn {
  --padding-start: 4px;
  --padding-end: 4px;
  margin: 0;
  height: 28px;
  width: 28px;
}

.send-btn {
  --padding-start: 8px;
  --padding-end: 8px;
  margin: 0;
  height: 36px;
  width: 36px;
}

ion-icon {
  font-size: 20px;
}
</style>
