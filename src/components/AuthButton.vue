<template>
  <div class="auth">
    <ion-button v-if="!user" @click="signIn">
      <ion-icon slot="start" :icon="logoGoogle"></ion-icon>
      {{ $t('auth.sign_in_google') }}
    </ion-button>

    <div v-else class="user">
      <img :src="user.pic" alt="avatar" class="avatar" />
      <span class="name">{{ user.name }}</span>
      <ion-button size="small" @click="openProfile">{{ $t('auth.edit_profile') }}</ion-button>
      <ion-button size="small" fill="clear" @click="signOut">{{ $t('auth.sign_out') }}</ion-button>
    </div>

    <ProfileModal ref="profileModal" @save="onProfileSave" />
  </div>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { logoGoogle } from 'ionicons/icons';
import { mapGetters } from 'vuex';
import ProfileModal from './ProfileModal.vue';
import { signInWithGoogle as googleSignIn } from '../services/googleAuth';

export default {
  components: { IonButton, IonIcon, ProfileModal },
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
.auth { display:flex; align-items:center; gap:8px }
.avatar { width:32px; height:32px; border-radius:50%; }
.name { color:#fff; margin-left:6px; font-weight:600; }
</style>
