# backcat — แอปโซเชียลมือถือสไตล์ Messenger

> 🚀 **แอปพลิเคชันมือถือ (Mobile-First PWA)** สร้างด้วย Ionic Vue 7 + Vue 3  
> 💬 ออกแบบ UI/UX ให้เหมือน Facebook Messenger 99%  
> 🌏 รองรับภาษาไทย 80% + English 20%  
> 📱 **95% ของผู้ใช้งานเข้าผ่านมือถือ** — พร้อมสร้าง Android/iOS builds ด้วย Capacitor

![Netlify Status](https://api.netlify.com/api/v1/badges/bdf56aa3-96f8-41c4-a8e8-3a620b85197e/deploy-status)

**🌐 ดูเดโมสด:** https://back-cat.netlify.app

---

## 🎯 ฟีเจอร์หลัก

- ✅ **โพสต์ (Posts)** — ฟีดข่าวสารแบบเรียลไทม์ พร้อมรูปภาพ, ข้อความภาษาไทย, timestamp
- ✅ **สตอรี่ (Stories)** — แบบวงกลมเหมือน Facebook, ปัดแนวนอน
- ✅ **แชทสด (Live Chat Modal)** — UI เหมือน Messenger 99% (ฟองแชท, สี, ปุ่มโทร/วิดีโอ, อิโมจิ)
- ✅ **โปรไฟล์ (Profile Modal)** — แก้ไขชื่อ, รูปโปรไฟล์, ออกจากระบบ (Messenger-style)
- ✅ **ล็อกอินด้วย Google** — Mock authentication (พร้อมขยายเป็น OAuth จริงได้)
- ✅ **ธีมมืด (Dark Theme)** — Ionic CSS variables ปรับแต่งแล้ว
- ✅ **i18n (vue-i18n)** — ไทย 80% (UI หลัก), English 20% (คำศัพท์เทคนิค)
- ✅ **Responsive** — ออกแบบสำหรับมือถือเป็นหลัก (320px+), รองรับแท็บเล็ต/เดสก์ท็อป

---

## 📦 Tech Stack

| เทคโนโลยี | เวอร์ชัน | รายละเอียด |
|-----------|---------|-----------|
| **Vue** | 3.5.13 | Composition + Options API (mixed) |
| **Ionic Vue** | 7.8.6 | Mobile UI framework (iOS/Android styles) |
| **Vuex** | 4.1.0 | State management (posts, stories, user, chat) |
| **Vue Router** | 4.4.5 | SPA routing |
| **vue-i18n** | 9.15.1 | Internationalization (Thai/English) |
| **Vite** | 4.5.14 | Build tool & dev server |
| **Capacitor** | 5.7.8 | Native mobile packaging |
| **Vitest** | 1.3.1 | Unit testing |
| **Cypress** | 13.6.6 | E2E testing |
| **Netlify** | — | Production hosting (PWA) |

---

## 📱 การใช้งานบนมือถือ (Mobile-First)

โปรเจกต์นี้ออกแบบโดยมีข้อมูลว่า **95% ของผู้ใช้งานเข้าจากมือถือ**  
ดังนั้น UX และ performance ถูกปรับแต่งสำหรับ:
- Viewport มือถือ (320px - 428px)
- Touch interactions (swipe, tap, long-press)
- Capacitor native features (Camera, Haptics, App, StatusBar, Keyboard)

### ทดสอบบนมือถือจริง (ผ่าน browser)

1. รันเซิร์ฟเวอร์พัฒนา:
```bash
npm run dev
```

2. หา IP ของเครื่อง (Windows):
```powershell
ipconfig
# หา IPv4 Address (เช่น 192.168.1.100)
```

3. เปิดบนมือถือ:
```
http://192.168.1.100:5173/
```

หรือใช้ **ngrok**/**localtunnel** เพื่อเปิด public URL ชั่วคราว

---

---

## 🚀 เริ่มต้นพัฒนา

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. รันบนเบราว์เซอร์ (โหมดพัฒนา)

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:5173/` และกด **F12** เปิด DevTools → เลือก **Device Toolbar** (มือถือโหมด)

### 3. Build สำหรับ Production

```bash
npm run build
```

ผลลัพธ์จะอยู่ใน `dist/` folder (ใช้สำหรับ deploy บน Netlify หรือ hosting อื่นๆ)

---

## 📲 สร้าง Native App (Android/iOS)

เมื่อลูกค้าอนุมัติเดโม เราพร้อมผลิต **Android APK/AAB** และ **iOS IPA** ผ่าน Capacitor

### เตรียมสภาพแวดล้อม

- **Android:** ต้องติดตั้ง [Android Studio](https://developer.android.com/studio)
- **iOS:** ต้องใช้ Mac + [Xcode](https://developer.apple.com/xcode/) (iOS development ต้องใช้ macOS)

### คำสั่ง Android

```bash
# Build web assets
npm run build

# เพิ่มแพลตฟอร์ม Android (ครั้งแรก)
npx cap add android

# Copy web build ไปยัง native project
npx cap copy

# เปิด Android Studio
npx cap open android
```

ใน Android Studio:
1. รอให้ Gradle sync เสร็จ
2. เลือก device/emulator
3. กด **Run** (▶) เพื่อติดตั้งบนมือถือ

### คำสั่ง iOS

```bash
# Build web assets
npm run build

# เพิ่มแพลตฟอร์ม iOS (ครั้งแรก)
npx cap add ios

# Copy web build ไปยัง native project
npx cap copy

# เปิด Xcode
npx cap open ios
```

ใน Xcode:
1. เลือก Team/Signing (ต้องมี Apple Developer Account)
2. เลือก target device (iPhone จริงหรือ Simulator)
3. กด **Build & Run** (⌘R)

**หมายเหตุ:**
- ต้อง `npm run build` ใหม่ทุกครั้งที่แก้โค้ด web แล้วจึง `cap copy` และรัน native
- การ sync ครั้งแรกอาจใช้เวลานานเพราะ Android Studio/Xcode ต้อง index project

---

## 🎨 โครงสร้างโค้ด (Code Architecture)

```
src/
├── main.js              # จุดเริ่มต้น — ลงทะเบียน IonicVue, Router, Store, i18n
├── App.vue              # Root component (script setup style)
├── router/
│   └── index.js         # Vue Router — route `/` → Timeline.vue
├── store/
│   └── index.js         # Vuex Store — posts, stories, user, chat messages
├── views/
│   └── Timeline.vue     # หน้าหลัก (ฟีด) — ใช้ Options API + setup()
├── components/
│   ├── Posts.vue        # แสดง posts list
│   ├── Stories.vue      # แสดง stories carousel
│   ├── StatusInput.vue  # ช่องพิมพ์สถานะ
│   ├── Reactions.vue    # ปุ่ม Like/Comment/Share
│   ├── ChatModal.vue    # แชทสด (Messenger-style)
│   ├── ProfileModal.vue # แก้ไขโปรไฟล์ (Messenger-style)
│   └── AuthButton.vue   # แสดงอวาตาร์/เข้าสู่ระบบ
├── i18n/
│   └── index.js         # vue-i18n config (th, en)
├── services/
│   ├── googleAuth.js    # Google OAuth stub
│   └── supabaseStub.js  # Supabase placeholder
└── theme/
    └── variables.css    # Ionic CSS custom properties (dark theme)
```

**Pattern หลัก:**
- Mixed **Composition API** (`setup()`) + **Options API** (`computed`, `methods`)
- `Timeline.vue` ใช้ `setup()` สำหรับ icons/menu, `computed` สำหรับ `$store.getters.posts`
- Vuex getters: `this.$store.getters.posts`, `this.$store.getters.stories`, `this.$store.state.user`
- i18n: `$t('key')` ในเทมเพลต, legacy mode เพื่อใช้กับ Options API

---

## 🧪 การทดสอบ (Testing)

### Unit Tests (Vitest)

```bash
npm run test:unit
```

ไฟล์ทดสอบอยู่ใน `tests/unit/`

### E2E Tests (Cypress)

```bash
npm run test:e2e
```

รัน Cypress แบบ headless (CI-friendly)

### Lint

```bash
npm run lint
```

---

## 🌐 ปรับใช้ (Deployment)

### ปรับใช้บน Netlify (Production)

โปรเจกต์นี้ใช้ **Netlify** สำหรับ hosting PWA  
URL สด: **https://back-cat.netlify.app**

**วิธีที่ 1: Netlify CLI (Manual)**

```bash
# Build production
npm run build

# Deploy (ต้อง login ก่อน)
npx netlify login
npx netlify deploy --prod --dir=dist
```

**วิธีที่ 2: GitHub Actions (Automatic CI/CD)**

Push code ขึ้น GitHub → Netlify จะ auto-deploy ผ่าน workflow `.github/workflows/netlify-deploy.yml`

**ขั้นตอนการตั้งค่า GitHub Secrets:**
1. ไปที่ repository บน GitHub
2. คลิก **Settings** → **Secrets and variables** → **Actions**
3. คลิก **New repository secret** และเพิ่ม:
   - **Name:** `NETLIFY_AUTH_TOKEN`  
     **Value:** Personal access token จาก [Netlify User Settings → Applications](https://app.netlify.com/user/applications)
   - **Name:** `NETLIFY_SITE_ID`  
     **Value:** Site ID จาก Netlify dashboard (ดูได้จาก Site settings → General → Site details)

**ไฟล์ที่เกี่ยวข้อง:**
- `netlify.toml` — กำหนด build command และ redirects สำหรับ SPA routing
- `.github/workflows/netlify-deploy.yml` — GitHub Actions workflow สำหรับ automated deployment

---

## ⚙️ การตั้งค่า Environment Variables (Optional)

สร้างไฟล์ `.env` ใน root folder (ดูตัวอย่างจาก `.env.example`):

```bash
# Google OAuth (จริง)
VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com

# Supabase (ถ้าใช้ Realtime Database)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**หมายเหตุ:**
- ตอนนี้ใช้ **stub services** (mock) — ไม่ต้องตั้งค่า env ก็รันได้
- ถ้าต้องการ OAuth/Supabase จริง ต้องแก้ `src/services/googleAuth.js` และ `supabaseStub.js`

---

## 🐛 Troubleshooting

### PowerShell Execution Policy

ถ้ารัน `npm run ...` เจอ error เรื่อง execution policy:

```powershell
# วิธีที่ 1: ใช้ cmd wrapper
cmd /c "npm run dev"

# วิธีที่ 2: เปลี่ยน policy (ไม่แนะนำ)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Vite Sass Deprecation Warnings

Warnings เกี่ยวกับ `[legacy-js-api]` ไม่กระทบการทำงาน (Ionic ใช้ Sass เวอร์ชันเก่า)

### Capacitor Sync Issues

ถ้า `cap sync` หรือ `cap copy` ไม่ work:

```bash
# ลบแพลตฟอร์มแล้วเพิ่มใหม่
npx cap remove android  # หรือ ios
npx cap add android     # หรือ ios
npx cap sync
```

---

## 📚 เอกสารอ้างอิง

- [Ionic Vue Documentation](https://ionicframework.com/docs/vue/overview)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vuex 4 Documentation](https://vuex.vuejs.org/)
- [vue-i18n Documentation](https://vue-i18n.intlify.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

## 🤝 Contributing & Roadmap

**เมื่อลูกค้าอนุมัติเดโม เราจะพัฒนา Full-Stack Version:**

- [ ] เชื่อม **Supabase Realtime** สำหรับ live chat จริง
- [ ] เพิ่ม **Google OAuth** ที่ทำงานได้จริง (ต้อง Client ID)
- [ ] อัปโหลดรูป **Camera API** + **Capacitor Filesystem**
- [ ] ระบบ **Reactions** (Like, Love, Haha, Wow, Sad, Angry)
- [ ] ระบบ **Comments** + nested replies
- [ ] ระบบ **Friends** + Friend Requests
- [ ] **Push Notifications** (Capacitor Push + Firebase)
- [ ] **Offline Mode** (Service Worker + IndexedDB)
- [ ] **Video Posts** (แชร์วิดีโอสั้น TikTok-style)

---

## 👨‍💻 ผู้พัฒนา

**โปรเจกต์นี้พัฒนาโดย:**  
- GtsAlpha (gittisakwannakeeree@gmail.com)  
- GitHub: [@gittisak-go](https://github.com/gittisak-go)

**เทมเพลตต้นฉบับ:**  
- [Ionic Vue Mobile Templates](https://tinyurl.com/y2gl39dk)

---

## 📄 License

MIT License — ใช้ได้อย่างอิสระ (ดู `LICENSE` file)

---

## 🎯 สรุปสำหรับลูกค้า

✅ **แอปพร้อมใช้งานแล้ว:** https://back-cat.netlify.app  
✅ **รองรับมือถือ 95%** — ทดสอบได้ทันทีบนสมาร์ทโฟนของคุณ  
✅ **ฟีเจอร์ครบ:** แชท, โปรไฟล์, โพสต์, สตอรี่, ภาษาไทย  
✅ **พร้อมผลิตแอปจริง:** สามารถสร้าง Android APK + iOS IPA ได้ทันที

**ติดต่อเพื่อผลิตเป็น Full-Stack App พร้อม Backend จริง!** 🚀


