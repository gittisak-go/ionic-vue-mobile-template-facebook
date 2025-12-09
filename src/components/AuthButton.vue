<template>
  <div class="auth">
    <ion-button v-if="!user" @click="signIn" class="sign-in-btn">
      {{ $t('auth.sign_in') }}
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
import { IonButton, IonAvatar } from '@ionic/vue';
import { mapGetters } from 'vuex';
import ProfileModal from './ProfileModal.vue';
import { signInWithGoogle as googleSignIn } from '../services/googleAuth';

export default {
  components: { IonButton, IonAvatar, ProfileModal },
  computed: {
    ...mapGetters(['user']),
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
  --background: #0084ff;
  --color: #fff;
  --border-radius: 16px;
  --padding-start: 12px;
  --padding-end: 12px;
  --padding-top: 4px;
  --padding-bottom: 4px;
  font-size: 13px;
  font-weight: 500;
  text-transform: none;
  height: 28px;
  min-width: auto;
  margin-right: 8px;
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
