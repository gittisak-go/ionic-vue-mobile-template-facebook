## backcat

เว็บแอปพลิเคชันมือถือสร้างด้วย `Ionic Vue` และ `Vue 3`.

![Netlify Status](https://api.netlify.com/api/v1/badges/fc2b8d51-2242-440c-8f6c-f283e77154c4/deploy-status)

ตัวอย่างเดโม (ถ้ามีพรีวิว): https://ionic-vue-mobile-template-facebook.netlify.app

## การติดตั้งโปรเจกต์

รันคำสั่งต่อไปนี้เพื่อดาวน์โหลด dependency:

```bash
npm install
```

### รันบนเบราว์เซอร์ (โหมดพัฒนา)

เริ่มเซิร์ฟเวอร์พัฒนา (Vite):

```bash
npm run dev
```

ค่าเริ่มต้น Vite จะให้ URL ท้องถิ่น เช่น `http://localhost:5173/` — เปิด URL นั้นในเบราว์เซอร์เพื่อตรวจดูหน้าแรก

## การออกแบบ (Design)

ภาพหน้าจอตัวอย่าง: `design.jpg` (ถ้ามี)  

## เวอร์ชันแบบ Native (Capacitor)

โปรเจกต์ใช้ [Capacitor](https://capacitorjs.com/docs/getting-started) สำหรับแพ็กแอปเป็น native

### เตรียม native builds (สรุป)

ตัวอย่างคำสั่งสำหรับ iOS:

```bash
npm run build
npx cap add ios
npx cap copy
npx cap open ios
```

สำหรับ Android ใช้คำสั่งแทน `ios` เป็น `android`:

```bash
npm run build
npx cap add android
npx cap copy
npx cap open android
```

หมายเหตุ: Xcode/Android Studio อาจใช้เวลาสักครู่ในการ index โครงการ

## เอกสารอย่างเป็นทางการ

- Getting started (Ionic Vue): https://ionicframework.com/vue

## แหล่งข้อมูล (Resources)

- Newsletter: https://mailchi.mp/b9133e120ccf/sqan8ggx22
- YouTube: https://www.youtube.com/channel/UC5jZ6srZuLwt3O3ZtuM1Dsg
- Ionic Vue Templates: https://tinyurl.com/y2gl39dk
- Ionic Vue VSCode Snippets (extension): https://marketplace.visualstudio.com/items?itemName=dlodeprojuicer.ionicvuesnippets

## คำแนะนำสำหรับการพัฒนา (Quick tips)

- จุดบูตแอป: `src/main.js` — ลงทะเบียน `IonicVue`, `router`, `store` และ import ไฟล์ CSS ของ Ionic
- หน้าเริ่มต้น: `src/views/Timeline.vue` (route `/`)
- สตอร์ (seed data): `src/store/index.js` — แก้ `posts`/`stories` ที่นี่เพื่อเปลี่ยนเนื้อหา
- สไตล์: `src/theme/variables.css` และการ import CSS ของ Ionic ต้องอยู่ใน `src/main.js`

## ทดสอบ

- Unit tests (Vitest):

```bash
npm run test:unit
```

- E2E tests (Cypress headless):

```bash
npm run test:e2e
```

## ข้อควรระวัง

- โปรเจกต์ผสม `script setup` และ `export default` ใน SFC — ให้แก้ไฟล์ตามสไตล์ที่ไฟล์นั้นใช้
- หากรันสคริปต์ใน PowerShell เจอปัญหาเรื่อง execution policy ให้รันโดยใช้ `cmd` หรือปรับ `ExecutionPolicy` ของ PowerShell
- พบตัวอักษรเพี้ยน `5;` ที่ท้าย `src/router/index.js` — ควรลบเมื่อแก้ไฟล์นั้น

## ผู้เขียน / เครดิต

- โค้ดตัวอย่างและเอกสารต้นฉบับจากผู้เขียนเดิม

## การตั้งค่า Google OAuth / Supabase (scaffold)

- หากต้องการเปิดใช้งาน Google Sign-in จริง ให้สร้างไฟล์ `.env` ที่ตั้งค่าต่อไปนี้ (ดู `.env.example`):

```bash
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
VITE_SUPABASE_URL=https://<project>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

- การเปลี่ยนแปลงที่ผมเพิ่มไฟล์สเต็บไว้ให้:
	- `src/services/googleAuth.js` — โหลด Google Identity SDK แบบไดนามิก และคืนค่า user object เมื่อสำเร็จ
	- `src/services/supabaseStub.js` — stub สำหรับตรวจว่ามีค่า Supabase หรือไม่ (ยังไม่เชื่อมต่อจริง)

- เมื่อตั้งค่า `VITE_GOOGLE_CLIENT_ID` อยู่ใน `.env` แล้ว รีสตาร์ท dev server เพื่อให้ค่า env โหลดใหม่

## ปรับใช้บน Netlify

ไฟล์ `netlify.toml` และ `public/_redirects` ถูกเพิ่มไว้แล้วในโปรเจกต์ เพื่อรองรับการ deploy แบบ Single Page App (SPA).

ขั้นตอนสรุปการ deploy บน Netlify (วิธีง่ายที่สุด):

1. Push โค้ดขึ้น GitHub (หรือ Git provider ที่ Netlify รองรับ).
2. เข้าไปที่ https://app.netlify.com → สร้าง New site → เลือก "Import from Git" → เลือกรีโปของคุณ
3. ตรวจสอบค่าการตั้งค่า build:
	- Build command: `npm run build`
	- Publish directory: `dist`
4. ตั้งค่า Environment variables ใน Netlify site settings (หากต้องการ):
	- `VITE_GOOGLE_CLIENT_ID` (ถ้าต้องการเปิด Google Sign-in จริง)
	- `VITE_SUPABASE_URL` และ `VITE_SUPABASE_ANON_KEY` (เมื่อพร้อมเชื่อม Supabase)
5. กด Deploy — Netlify จะรัน `npm install` และ `npm run build` ตามที่กำหนด และเผยแพร่ `dist` เป็น static site

ทางเลือก: ใช้ Netlify CLI เพื่อตรวจสอบก่อน deploy จริงจากเครื่องของคุณ:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --dir=dist --prod
```

หมายเหตุ:
- หากคุณต้องการให้ผมสร้าง site บน Netlify, ทำการ deploy ครั้งแรก หรือเปิดให้ผมใช้ Netlify access token (แนะนำว่าปลอดภัยกว่าถ้าเจ้าของ repo ทำเชื่อมด้วยตัวเอง) ให้บอกผม — ผมสามารถช่วยขั้นตอนวิธีกรนและแนะนำการตั้งค่าได้


