import { createI18n } from 'vue-i18n';

const messages = {
  th: {
    brand: { logo: 'Backcat' },
    status: {
      placeholder: 'คิดอะไรอยู่หรือเปล่า?',
      live: 'ถ่ายทอดสด',
      photo: 'รูปภาพ',
      room: 'สร้างห้อง',
    },
    reactions: {
      like: 'ถูกใจ',
      comment: 'ความเห็น',
      share: 'แชร์',
    },
    auth: {
      sign_in: 'เข้าสู่ระบบ',
      sign_in_google: 'Sign in with Google',
      sign_out: 'Sign out',
      edit_profile: 'แก้ไขโปรไฟล์',
      save: 'บันทึก',
      close: 'ปิด'
    },
    profile: {
      name: 'ชื่อ',
      pic: 'URL รูปโปรไฟล์'
    },
    chat: {
      send: 'ส่ง'
    },
  },
  en: {
    brand: { logo: 'Backcat' },
    status: {
      placeholder: "What's on your mind?",
      live: 'Live',
      photo: 'Photo',
      room: 'Room',
    },
    reactions: {
      like: 'Like',
      comment: 'Comment',
      share: 'Share',
    },
    auth: {
      sign_in: 'Sign in',
      sign_in_google: 'Sign in with Google',
      sign_out: 'Sign out',
      edit_profile: 'Edit profile',
      save: 'Save',
      close: 'Close'
    },
    profile: {
      name: 'Name',
      pic: 'Profile pic URL'
    },
    chat: {
      send: 'Send'
    },
  },
};

const i18n = createI18n({
  legacy: true, // use global $t in templates for simplicity with Options API
  locale: 'th',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
