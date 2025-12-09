<template>
  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $t('auth.edit_profile') }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="close">{{ $t('auth.close') }}</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="stacked">{{ $t('profile.name') }}</ion-label>
          <ion-input v-model="form.name" />
        </ion-item>
        <ion-item>
          <ion-label position="stacked">{{ $t('profile.pic') }}</ion-label>
          <ion-input v-model="form.pic" />
        </ion-item>
      </ion-list>
      <div style="padding:16px">
        <ion-button expand="block" @click="save">{{ $t('auth.save') }}</ion-button>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script>
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput } from '@ionic/vue';
import { mapGetters } from 'vuex';

export default {
  components: { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput },
  data() {
    return {
      isOpen: false,
      form: { name: '', pic: '' },
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
  },
};
</script>

<style scoped>
ion-modal { --background: var(--ion-color-light); }
</style>
