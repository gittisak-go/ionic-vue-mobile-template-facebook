<template>
  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title>แชทสด</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="close">{{ $t('auth.close') }}</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="messages">
        <div v-for="msg in messages" :key="msg.id" class="message">
          <strong>{{ msg.from }}:</strong> <span>{{ msg.text }}</span>
          <div class="ts">{{ msg.timestamp }}</div>
        </div>
      </div>
      <div class="composer">
        <ion-input v-model="text" placeholder="พิมพ์ข้อความ..."></ion-input>
        <ion-button @click="send">{{ $t('chat.send') }}</ion-button>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script>
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonInput } from '@ionic/vue';
import { mapGetters } from 'vuex';

export default {
  components: { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonInput },
  data() {
    return { isOpen: false, text: '' };
  },
  computed: {
    ...mapGetters(['chatMessages']),
    messages() {
      return this.chatMessages;
    },
  },
  methods: {
    open() { this.isOpen = true; },
    close() { this.isOpen = false; },
    send() {
      if (!this.text) return;
      this.$store.dispatch('addChatMessage', this.text);
      this.text = '';
    },
  },
};
</script>

<style scoped>
.messages { padding: 12px; }
.message { margin-bottom: 8px; color:#fff }
.ts { font-size:11px; color:#cfcfcf }
.composer { display:flex; gap:8px; padding:12px }
ion-input { flex:1 }
</style>
