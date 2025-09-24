# 🏋️‍♂️ Athletica AI

Athletica AI is a personalized fitness and nutrition platform powered by **AI, real-time program generation, and voice assistance**.  
It leverages **Next.js, Clerk, Convex, Prisma, TailwindCSS, Shadcn UI, and Gemini AI** to provide users with **custom workout and diet plans**.

---

## ✨ Features

- 🚀 **Tech Stack**: Next.js, React, TailwindCSS, Shadcn UI
- 🎙️ **Voice AI Assistant** (Vapi)
- 🧠 **LLM Integration** (Google Gemini AI)
- 🏋️ **Personalized Workout Plans** generated dynamically
- 🥗 **Custom Diet Programs** tailored to user preferences & restrictions
- 🔒 **Authentication & Authorization** (Clerk)
- 💾 **Database** powered by Convex
- 🎬 **Real-time Program Generation**
- 💻 **Modular Layouts** with Next.js App Router
- 🎭 **Client & Server Components** for optimal performance

---

## 📂 Project Structure

```
src/
├── app/
│   ├── (auth)/        # Authentication pages (Clerk)
│   ├── generate-program/ # Program generation page
│   ├── profile/       # User profile page
│   ├── layout.tsx     # Global layout
│   ├── page.tsx       # Landing page
│
├── components/        # UI components (Shadcn + custom)
├── constants/         # Constants used across the app
├── lib/               # Utility functions
├── providers/         # Context providers
├── middleware.ts      # Middleware (auth, etc.)
│
├── globals.css        # Global styles (Tailwind)
└── favicon.ico
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/KushagraJadiya24/athletica-ai.git
cd athletica-ai
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env.local` file in the root and add:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Convex
CONVEX_DEPLOYMENT=your_convex_url
CONVEX_AUTH_SECRET=your_convex_secret

# Gemini
GEMINI_API_KEY=your_gemini_api_key

# VAPI
VAPI_KEY=your_vapi_key
```

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, Shadcn UI
- **Backend**: Convex, Prisma
- **Authentication**: Clerk
- **AI/LLM**: Gemini AI
- **Voice AI**: Vapi
- **Styling**: TailwindCSS, Shadcn components

---

## 📌 Roadmap

- [ ] Add AI-driven progress tracking
- [ ] Enhance real-time coaching with voice interactions
- [ ] Mobile app (React Native / Expo)
- [ ] Add social/community features

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a PR.

---

## 📜 License

MIT License © 2025 Athletica AI
