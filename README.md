HeartHeal Frontend 💖
A mental wellness web application built with React, helping users heal emotionally through journaling, music, daily quotes, and gamification.
🌐 Live Demo

Frontend: https://heart-heal-front-end.vercel.app
Backend: https://hearthealbackend.onrender.com


✨ Features

📝 Daily Journaling — Write and track emotional journal entries with mood tagging and image uploads
🎵 Music & Quotes — Mood-based music recommendations and daily inspirational quotes
📊 Healing Dashboard — Visualize mood stats, streaks, and journal counts with charts
🏆 Gamification — Earn XP, level up, unlock achievements and milestones
🎯 Daily Challenges — Complete wellness challenges to earn XP
💬 Daily Affirmations — Auto-refreshing motivational affirmations every 10 seconds
👤 User Profile — View and update profile, achievements, and favourite quotes
🔐 Authentication — Secure signup, login, forgot password, and reset password


🛠 Tech Stack

React (via CDN, in-browser Babel)
Tailwind CSS (via CDN)
Chart.js — Mood tracker bar chart
Quill.js — Rich text editor for journal entries
Toastify — Toast notifications
SweetAlert2 — Confirmation dialogs
Howler.js — Music preview playback


📁 Folder Structure
HeartHealFrontEnd/
│
├── index.html        → Main HTML entry point
├── script.js         → All React components and app logic
├── style.css         → Custom styles
└── README.md         → Project documentation

🚀 Getting Started

Clone the repository:

bashgit clone https://github.com/aj217/HeartHealFrontEnd.git

Open index.html in your browser or use Live Server in VS Code
Make sure base_url in script.js points to the backend:

jsconst base_url = "https://hearthealbackend.onrender.com";

🔗 Backend
👉 https://github.com/aj217/HeartHealBackEnd
Built with Node.js, Express, and MongoDB — handles auth, journals, music, quotes, challenges, and achievements.

🌍 Deployment
ServicePlatformFrontendVercelBackendRenderDatabaseMongoDB Atlas

🔐 Authentication

Passwords must be 8+ characters with at least 1 number and 1 special character
JWT tokens stored in localStorage


👤 Contributors

aj217 — Full Stack Developer


📄 License
MIT License
