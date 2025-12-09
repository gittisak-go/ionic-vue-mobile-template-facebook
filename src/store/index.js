import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        name: "9huaw",
        image: "assets/images/9huaw_Blueamy3_1.jpg",
        pic: "assets/images/9huaw.jpg",
        id: 5,
        likes: 0,
        timestamp: "เมื่อสักครู่",
        description: "สวัสดีครับนาย",
      },
      {
        name: "Snoop Dogg",
        image: "assets/images/snoop-dogg-wine-01.jpeg",
        pic: "assets/images/snoop.png",
        id: 1,
        likes: 22349,
        timestamp: "18 นาทีที่แล้ว",
        description:
          "ทริปบราซิลสุดเจ๋ง! บรรยากาศดีมากครับ ได้ลองไวน์ดีๆ เพลิดเพลินกับวิวทะเล อากาศดี คนดี 🍷🌴",
      },
      {
        name: "Brooke Shaden",
        image: "assets/images/shaden21.jpeg",
        pic: "assets/images/Brooke-Shaden.jpeg",
        id: 3,
        timestamp: "45 นาทีที่แล้ว",
        description: "ภาพถ่ายศิลปะชุดใหม่ เล่นกับแสงและเงา สร้างสรรค์อะไรใหม่ๆ ตลอด 📸✨",
      },
      {
        name: "Makazole Mapimpi",
        image: "assets/images/makazole-am.jpeg",
        pic: "assets/images/makazole.png",
        id: 2,
        likes: 390,
        timestamp: "1 ชั่วโมงที่แล้ว",
        description:
          "ฝึกซ้อมหนักๆ เตรียมพร้อมสำหรับเกมใหม่ 🏉 มุ่งมั่นทุกวันเพื่อความสำเร็จ!",
      },
      {
        name: "Lewis Hamilton",
        slug: "jamaica",
        image: "assets/images/lewis-angela.jpg",
        pic: "assets/images/lewis.png",
        timestamp: "3 ชั่วโมงที่แล้ว",
        id: 4,
        description: "พักผ่อนที่จาไมก้า บรรยากาศชิลๆ ได้เวลาชาร์จพลังแล้ว 🇯🇲☀️",
      },
    ],
    stories: [
      {
        name: "makazole",
        image: "assets/images/makazole.png",
      },
      {
        name: "jay-z",
        image: "assets/images/jay-z.jpg",
      },
      {
        name: "lewis",
        image: "assets/images/lewis.png",
      },
      {
        name: "snoop",
        image: "assets/images/snoop.png",
      },
      {
        name: "max",
        image: "assets/images/max.png",
      },
    ],
    auth: {
      user: null,
    },
    chat: {
      messages: [
        // example message
        { id: 1, from: 'System', text: 'ยินดีต้อนรับสู่แชทสด', timestamp: 'now' },
      ],
    },
  },

  getters: {
    posts({ posts }) {
      return posts;
    },
    stories({ stories }) {
      return stories;
    },
    user({ auth }) {
      return auth.user;
    },
    chatMessages({ chat }) {
      return chat.messages;
    },
  },
  mutations: {
    SIGN_IN(state, user) {
      state.auth.user = user;
    },
    SIGN_OUT(state) {
      state.auth.user = null;
    },
    UPDATE_PROFILE(state, payload) {
      if (state.auth.user) {
        state.auth.user.name = payload.name || state.auth.user.name;
        state.auth.user.pic = payload.pic || state.auth.user.pic;
      }
    },
    ADD_CHAT_MESSAGE(state, message) {
      state.chat.messages.push(message);
    },
  },
  actions: {
    signInWithGoogle({ commit }) {
      // Mock sign-in: in future replace with Supabase/Firebase OAuth
      const mockUser = {
        id: Date.now(),
        name: 'ผู้ใช้ตัวอย่าง',
        pic: 'assets/images/max.png',
        provider: 'google',
      };
      commit('SIGN_IN', mockUser);
      return mockUser;
    },
    signOut({ commit }) {
      commit('SIGN_OUT');
    },
    updateProfile({ commit }, payload) {
      commit('UPDATE_PROFILE', payload);
    },
    addChatMessage({ commit }, text) {
      const message = {
        id: Date.now(),
        from: this.getters.user ? this.getters.user.name : 'คุณ',
        text,
        timestamp: new Date().toLocaleTimeString(),
      };
      commit('ADD_CHAT_MESSAGE', message);
    },
  },
});

export default store;
