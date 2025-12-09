import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        name: "Snoop Dogg",
        image: "assets/images/snoop-dogg-wine-01.jpeg",
        pic: "assets/images/snoop.png",
        id: 1,
        likes: 22349,
        timestamp: "18m ago",
        description:
          "All about Brazil, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor.",
      },
      {
        name: "Brooke Shaden",
        image: "assets/images/shaden21.jpeg",
        pic: "assets/images/Brooke-Shaden.jpeg",
        id: 3,
        timestamp: "45m ago",
      },
      {
        name: "Makazole Mapimpi",
        image: "assets/images/makazole-am.jpeg",
        pic: "assets/images/makazole.png",
        id: 2,
        likes: 390,
        timestamp: "1h ago",
        description:
          "Vestibulum cursus quis eget orci. Aenean faucibus faucibus.",
      },
      {
        name: "Lewis Hamilton",
        slug: "jamaica",
        image: "assets/images/lewis-angela.jpg",
        pic: "assets/images/lewis.png",
        timestamp: "3h ago",
        id: 4,
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
