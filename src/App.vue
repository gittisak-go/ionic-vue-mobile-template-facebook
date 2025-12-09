<template>
  <ion-app>
    <!-- PWA Install Prompt -->
    <div v-if="showInstallPrompt" class="pwa-install-banner">
      <div class="install-content">
        <div class="install-text">
          <strong>Backcat</strong>
          <span>ติดตั้งเป็นแอป</span>
        </div>
        <div class="install-actions">
          <button @click="installPWA" class="btn-install">ติดตั้ง</button>
          <button @click="dismissPrompt" class="btn-dismiss">ไว้ทีหลัง</button>
        </div>
      </div>
    </div>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { ref, onMounted } from 'vue';

const showInstallPrompt = ref(false);
let deferredPrompt = null;

onMounted(() => {
  // Listen for beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt.value = true;
  });

  // Hide prompt if already installed
  window.addEventListener('appinstalled', () => {
    showInstallPrompt.value = false;
    deferredPrompt = null;
  });
});

const installPWA = async () => {
  if (!deferredPrompt) return;
  
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  
  console.log(`User response: ${outcome}`);
  deferredPrompt = null;
  showInstallPrompt.value = false;
};

const dismissPrompt = () => {
  showInstallPrompt.value = false;
  // Store dismissal in localStorage
  localStorage.setItem('pwa-install-dismissed', Date.now().toString());
};
</script>

<style scoped>
.pwa-install-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1c1e21;
  border-top: 1px solid #3e4042;
  padding: 12px 16px;
  z-index: 9999;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.install-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.install-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.install-text strong {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}

.install-text span {
  color: #b0b3b8;
  font-size: 13px;
}

.install-actions {
  display: flex;
  gap: 8px;
}

.btn-install,
.btn-dismiss {
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-install {
  background: #0084ff;
  color: #ffffff;
}

.btn-install:active {
  background: #0073e6;
}

.btn-dismiss {
  background: transparent;
  color: #b0b3b8;
  border: 1px solid #3e4042;
}

.btn-dismiss:active {
  background: #2a2d30;
}
</style>

