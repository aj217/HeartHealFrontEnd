# HeartHeal Frontend 💖

A mental wellness web application built with React, helping users heal emotionally through journaling, music, daily quotes, and gamification.

## 🌐 Live Demo

- **Frontend:** https://heart-heal-front-end.vercel.app
- **Backend:** https://hearthealbackend.onrender.com

---

## ✨ Features

- 📝 **Daily Journaling** — Write and track emotional journal entries with mood tagging and image uploads
- 🎵 **Music & Quotes** — Mood-based music recommendations and daily inspirational quotes
- 📊 **Healing Dashboard** — Visualize mood stats, streaks, and journal counts with charts
- 🏆 **Gamification** — Earn XP, level up, unlock achievements and milestones
- 🎯 **Daily Challenges** — Complete wellness challenges to earn XP
- 💬 **Daily Affirmations** — Auto-refreshing motivational affirmations every 10 seconds
- 👤 **User Profile** — View and update profile, achievements, and favourite quotes
- 🔐 **Authentication** — Secure signup, login, forgot password, and reset password

---

## 🛠 Tech Stack

- **React** (via CDN, in-browser Babel)
- **Tailwind CSS** (via CDN)
- **Chart.js** — Mood tracker bar chart
- **Quill.js** — Rich text editor for journal entries
- **Toastify** — Toast notifications
- **SweetAlert2** — Confirmation dialogs
- **Howler.js** — Music preview playback

---

## 📁 Folder Structure

```
HeartHealFrontEnd/
│
├── index.html        → Main HTML entry point
├── script.js         → All React components and app logic
├── style.css         → Custom styles
└── README.md         → Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Backend running at https://hearthealbackend.onrender.com

### Run Locally

1. Clone the repository:
```bash
git clone https://github.com/aj217/HeartHealFrontEnd.git
```

2. Open the project folder:
```bash
cd HeartHealFrontEnd
```

3. Open `index.html` in your browser or use Live Server in VS Code

4. Make sure the backend is running and `base_url` in `script.js` points to the correct backend URL:
```js
const base_url = "https://hearthealbackend.onrender.com";
```

---

## 🔗 Backend

The backend repository is available here:
👉 https://github.com/aj217/HeartHealBackEnd

It is built with Node.js, Express, and MongoDB and handles:
- User authentication (JWT)
- Journal entries and image uploads
- Progress tracking
- Quotes and affirmations
- Daily challenges and achievements
- Spotify music integration

---

## 🌍 Deployment

| Service | Platform |
|---|---|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Render](https://render.com) |
| Database | [MongoDB Atlas](https://cloud.mongodb.com) |

---

## 📸 Pages

| Page | Description |
|---|---|
| Home | Landing page with key features |
| Login | User authentication |
| Signup | New user registration |
| Dashboard | Mood chart, streaks, and daily widgets |
| Journal | Write, view, and download journal entries |
| Music & Quotes | Mood-based music and inspirational quotes |
| Profile | User info, achievements, and favourite quotes |

---

## 🔐 Authentication

- Passwords must be **8+ characters** with at least **1 number** and **1 special character**
- JWT tokens stored in `localStorage`
- Token-based protected routes

---

## 👤 Contributors

- **aj217** — Full Stack Developer

---

## 📄 License

This project is licensed under the MIT License.
