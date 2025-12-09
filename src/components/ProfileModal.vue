<template>
  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="close">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ $t('auth.edit_profile') }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="save" color="primary">
            <strong>{{ $t('auth.save') }}</strong>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="profile-content">
      <div class="profile-header">
        <ion-avatar class="profile-avatar">
          <img :src="form.pic || 'assets/images/avatar.jpg'" alt="avatar" />
        </ion-avatar>
        <ion-button fill="clear" color="primary" @click="changePicture">
          เปลี่ยนรูปโปรไฟล์
        </ion-button>
      </div>
      <ion-list lines="full" class="profile-list">
        <ion-item>
          <ion-label position="stacked">{{ $t('profile.name') }}</ion-label>
          <ion-input v-model="form.name" placeholder="ชื่อของคุณ" />
        </ion-item>
        <ion-item>
          <ion-label position="stacked">{{ $t('profile.pic') }} URL</ion-label>
          <ion-input v-model="form.pic" placeholder="https://..." />
        </ion-item>
        <ion-item button @click="signOut">
          <ion-label color="danger">{{ $t('auth.sign_out') }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</template>

<script>
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput, IonAvatar, IonIcon } from '@ionic/vue';
import { arrowBack } from 'ionicons/icons';
import { mapGetters } from 'vuex';

export default {
  components: { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput, IonAvatar, IonIcon },
  data() {
    return {
      isOpen: false,
      form: { name: '', pic: '' },
      arrowBack,
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    open() {
      this.form = { name: this.user?.name || '', pic: this.user?.pic || '' };
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    save() {
      this.$emit('save', { name: this.form.name, pic: this.form.pic });
      this.close();
    },
    changePicture() {
      // TODO: implement image picker
      alert('เลือกรูปภาพ (ยังไม่พร้อมใช้งาน)');
    },
    signOut() {
      this.$store.dispatch('signOut');
      this.close();
    },
  },
};
</script>

<style scoped>
.profile-content {
  --background: #f0f2f5;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  background: #ffffff;
  margin-bottom: 8px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  margin-bottom: 16px;
  border: 3px solid #0084ff;
}

.profile-list {
  background: #ffffff;
}

ion-item {
  --background: #ffffff;
}
</style>
