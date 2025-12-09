
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <div class="logo">{{ $t('brand.logo') }}</div>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="search"></ion-icon>
          </ion-button>
          <ion-button @click.prevent="openChat">
            <ion-icon :icon="chatbubbleOutline"></ion-icon>
          </ion-button>
          <AuthButton />
        </ion-buttons>
      </ion-toolbar>
      <div class="menu">
        <ion-button v-for="(i, idx) in menu" :key="idx">
          <ion-icon :icon="i"></ion-icon>
        </ion-button>
      </div>
    </ion-header>

    <ion-content :fullscreen="true">
      <StatusInput />
      <!-- <Stories :data="stories" /> -->
      <Posts :data="posts" />
      <ChatModal ref="chatModal" />
    </ion-content>
  </ion-page>
</template>

<script>
// import Stories from "../components/Stories.vue";
import StatusInput from "../components/StatusInput.vue";
import Posts from "../components/Posts.vue";
import AuthButton from "../components/AuthButton.vue";
import ChatModal from "../components/ChatModal.vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/vue";

import {
  home,
  peopleCircleOutline,
  tvOutline,
  storefrontOutline,
  search,
  notificationsOutline,
  chatbubbleOutline,
  menuOutline,
} from "ionicons/icons";

export default {
  name: "Explorer",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    // Stories,
    StatusInput,
    Posts,
    AuthButton,
    ChatModal,
  },
  setup() {
    const menu = [
      home,
      peopleCircleOutline,
      tvOutline,
      storefrontOutline,
      notificationsOutline,
      menuOutline,
    ];
    return {
      search,
      chatbubbleOutline,
      menu,
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    stories() {
      return this.$store.getters.stories;
    },
  },
  methods: {
    openChat() {
      this.$refs.chatModal.open();
    },
  },
};
</script>

<style lang="scss" scoped>
ion-toolbar,
ion-header {
  --background: var(--ion-color-light);
  color: #ffffff;
  padding: 0;
  margin: 0;
}

.logo {
  padding: 10px 0 0 10px;
  font-weight: bolder;
  font-size: 26px;
  display: inline-block;
  white-space: nowrap;
  letter-spacing: normal;
}

.menu {
  background: var(--ion-color-light);
  ion-button {
    --background: none;
    font-size: 20px;

    &::part(native) {
      padding: 10px;
      margin: 0 5px;
      // background: blue;
    }

    ion-icon {
      --background: blue;
      padding: 0;
      margin: 0;
    }
  }
}

.post-author {
  margin: 10px;
  color: #ffffff;
  font-weight: 500;
  text-transform: lowercase;
  ion-icon {
    margin-bottom: -10px;
    font-size: 30px;
  }
  span {
    font-size: 16px;
    margin: 0 0 0 5px;
  }
}
.card-image {
  width: 100%;
}

ion-card {
  --background: var(--ion-color-light);
  margin: 10px 0;
}

ion-card-header {
  padding: 10px;
}

ion-card-subtitle.likes {
  text-transform: lowercase;
  color: #fff;
  font-size: 15px;
}

.author {
  text-transform: lowercase;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  span {
    font-weight: initial;
    text-transform: initial;
  }
}
</style>
  