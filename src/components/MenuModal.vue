<template>
  <ion-modal :is-open="isOpen" @didDismiss="close">
    <ion-header>
      <ion-toolbar>
        <ion-title>เมนู</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="close">
            <ion-icon :icon="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-list>
        <ion-item button @click="handleSettings">
          <ion-icon :icon="settings" slot="start" color="primary"></ion-icon>
          <ion-label>ตั้งค่า</ion-label>
        </ion-item>
        
        <ion-item button @click="handleProfile">
          <ion-icon :icon="person" slot="start" color="primary"></ion-icon>
          <ion-label>โปรไฟล์</ion-label>
        </ion-item>
        
        <ion-item button @click="handleNotifications">
          <ion-icon :icon="notifications" slot="start" color="primary"></ion-icon>
          <ion-label>การแจ้งเตือน</ion-label>
        </ion-item>
        
        <ion-item button @click="handlePrivacy">
          <ion-icon :icon="lockClosed" slot="start" color="primary"></ion-icon>
          <ion-label>ความเป็นส่วนตัว</ion-label>
        </ion-item>
        
        <ion-item button @click="handleHelp">
          <ion-icon :icon="helpCircle" slot="start" color="primary"></ion-icon>
          <ion-label>ความช่วยเหลือ</ion-label>
        </ion-item>
        
        <ion-item button @click="handleAbout">
          <ion-icon :icon="informationCircle" slot="start" color="primary"></ion-icon>
          <ion-label>เกี่ยวกับ</ion-label>
        </ion-item>
        
        <ion-item v-if="user" button @click="handleSignOut" lines="none">
          <ion-icon :icon="logOut" slot="start" color="danger"></ion-icon>
          <ion-label color="danger">ออกจากระบบ</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</template>

<script>
import { 
  IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, 
  IonContent, IonList, IonItem, IonLabel, IonIcon 
} from '@ionic/vue';
import { 
  closeOutline, settings, person, notifications, lockClosed, 
  helpCircle, informationCircle, logOut 
} from 'ionicons/icons';
import { mapGetters } from 'vuex';

export default {
  components: { 
    IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, 
    IonContent, IonList, IonItem, IonLabel, IonIcon 
  },
  
  data() {
    return {
      isOpen: false,
      close: closeOutline,
      settings,
      person,
      notifications,
      lockClosed,
      helpCircle,
      informationCircle,
      logOut
    };
  },
  
  computed: {
    ...mapGetters(['user'])
  },
  
  methods: {
    open() {
      this.isOpen = true;
    },
    
    close() {
      this.isOpen = false;
    },
    
    handleSettings() {
      console.log('Settings clicked');
      this.$emit('settings');
      this.close();
    },
    
    handleProfile() {
      console.log('Profile clicked');
      this.$emit('profile');
      this.close();
    },
    
    handleNotifications() {
      console.log('Notifications clicked');
      this.$emit('notifications');
      this.close();
    },
    
    handlePrivacy() {
      console.log('Privacy clicked');
      this.$emit('privacy');
      this.close();
    },
    
    handleHelp() {
      console.log('Help clicked');
      this.$emit('help');
      this.close();
    },
    
    handleAbout() {
      console.log('About clicked');
      this.$emit('about');
      this.close();
    },
    
    handleSignOut() {
      this.$store.dispatch('signOut');
      this.close();
    }
  }
};
</script>

<style scoped>
ion-toolbar {
  --background: var(--ion-color-light);
}

ion-list {
  background: transparent;
}

ion-item {
  --background: var(--ion-color-light);
  margin-bottom: 1px;
}

ion-item:hover {
  --background: rgba(255, 255, 255, 0.05);
}
</style>
