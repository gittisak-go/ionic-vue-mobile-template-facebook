<template>
  <div class="auth">
    <ion-button v-if="!user" @click="signIn" fill="clear" class="sign-in-btn">
      <ion-icon slot="start" :icon="logoGoogle"></ion-icon>
      {{ $t('auth.sign_in_google') }}
    </ion-button>

    <div v-else class="user-profile" @click="openProfile">
      <ion-avatar class="user-avatar">
        <img :src="user.pic" alt="avatar" />
      </ion-avatar>
    </div>

    <ProfileModal ref="profileModal" @save="onProfileSave" />
  </div>
</template>

<script>
import { IonButton, IonIcon, IonAvatar } from '@ionic/vue';
import { logoGoogle } from 'ionicons/icons';
import { mapGetters } from 'vuex';
import ProfileModal from './ProfileModal.vue';
import { signInWithGoogle as googleSignIn } from '../services/googleAuth';

export default {
  components: { IonButton, IonIcon, IonAvatar, ProfileModal },
  computed: {
    ...mapGetters(['user']),
  },
  setup() {
    return { logoGoogle };
  },
  methods: {
    async signIn() {
      // Try real Google sign-in when VITE_GOOGLE_CLIENT_ID is provided;
      // otherwise fall back to the mock sign-in in Vuex.
      try {
        const user = await googleSignIn();
        if (user) {
          this.$store.commit('SIGN_IN', user);
          return;
        }
      } catch (e) {
        // ignore and fallback
      }
      // fallback mock
      this.$store.dispatch('signInWithGoogle');
    },
    signOut() {
      this.$store.dispatch('signOut');
    },
    openProfile() {
      this.$refs.profileModal.open();
    },
    onProfileSave(payload) {
      this.$store.dispatch('updateProfile', payload);
    },
  },
};
</script>

<style scoped>
.auth { 
  display: flex; 
  align-items: center; 
}

.sign-in-btn {
  --color: #fff;
  font-size: 14px;
}

.user-profile {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border: 2px solid #0084ff;
}
</style>
