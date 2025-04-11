 # HeartHeal Frontend 💖

This is the frontend part of the HeartHeal web platform – a gamified app built to support post-breakup healing and emotional recovery. The application offers features like journaling, motivational affirmations, music, and milestone tracking, all with an interactive UI to encourage positivity and progress.

---

## Live Link

https://aj217.github.io/HeartHealFrontEnd/

---

## Features

- Clean and responsive UI using React and Tailwind CSS
- Daily motivational affirmations (auto-refresh every 10 seconds)
- Journal page with mood selection and Quill rich text editor
- Media uploads (images) supported via backend
- Mood-based music recommendations + Spotify search
- Daily challenges with XP and badge system
- User profile with XP, progress tracking, and quote history
- Save favorite quotes and you can delete it too

---

## Tech Stack

- React (via CDN)
- Tailwind CSS
- Quill.js for text editing
- Toastify for toast notifications
- SweetAleart2 for aleart messages
- Axios for API integration
- GitHub Pages for deployment

---

## Project Structure

frontend
│
├── index.html           --> Main HTML file, includes React and Babel
├── script.js            --> React components using JSX (via Babel)
├── style.css            --> Custom styles with Tailwind
└── favicon.ico          --> Favicon icon

---

## Running Locally

1. Clone the repo:

   git clone https://github.com/aj217/HeartHealFrontEnd.git

2. Open the folder in VS Code or any IDE.

3. Launch `index.html` using Live Server or directly in browser.

4. Also run it locally using http-server -p 5500

> No extra setup needed since it's built with CDN-based React and Tailwind.

---

## API Integration

Backend is running and update API base URL inside `script.js`:

- const BASE_URL = 'https://growstrong.duckdns.org/';
- To run it locally change the BASE_URL to http://localhost:5000

---

## Deployment

The frontend is deployed via GitHub Pages. It works seamlessly with the HTTPS-secured backend hosted on AWS EC2.

---

## License

This project is licensed under the MIT License.

