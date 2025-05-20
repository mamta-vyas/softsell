# 🛍️ SoftSell – Modern SaaS Landing Page with Dark Mode & Chatbot

Welcome to **SoftSell**, a modern and responsive SaaS product landing page built using **React.js**, **Tailwind CSS**, and **Vite**. This project showcases a clean, user-centric design with smooth transitions, dark mode support, and an interactive chatbot.

### 🌐 Live Demo

👉 [View Live on Netlify](https://softsell-webapp.netlify.app/)

---

## 📁 Project Structure

.
├── README.md
├── dist/ # Production build output
├── public/ # Static files (_redirects for Netlify, assets)
├── src/
│ ├── App.jsx # Main app component
│ ├── App.css
│ ├── index.css
│ ├── main.jsx
│ ├── assets/ # Images and logos
│ ├── components/ # UI components (Hero, Footer, etc.)
│ └── context/ # Dark mode context provider
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── package-lock.json


---

## 🚀 Features

- ⚡ **Built with Vite** – Lightning-fast development and build tool
- 🎨 **Tailwind CSS** – Utility-first styling for rapid UI development
- 🌙 **Dark Mode** – Toggle theme seamlessly
- 🤖 **Chatbot** – Custom floating chatbot component with dynamic behavior
- 📱 **Responsive Design** – Works great on all devices
- 🧩 **Component-based architecture** – Easy to maintain and scale
- 🔗 **Deployed on Netlify** – Fast, global CDN hosting

---

## 🛠️ Installation & Setup

To run this project locally:

### 1. Clone the repository

```bash
git clone https://github.com/mamta-vyas/softsell.git
cd softsell

2. Install dependencies
npm install

3. Start the development server
npm run dev

4. Build for production
npm run build

🌗 Dark Mode
Implemented using React Context API (DarkModeProvider)

Toggle available via the DarkModeToggle component

Fully styled for both light and dark themes using Tailwind's dark: variant

💬 Chatbot
Included in components/ChatBot.jsx and uses a reusable Button.jsx component

Positioned with floating/fixed styles

Styled for both light and dark themes

📦 Deployment
This app is deployed on Netlify with proper routing support via the _redirects file.

🔗 Live URL: https://softsell-webapp.netlify.app/

To deploy your own fork:

Push your repo to GitHub

Connect your GitHub repo on Netlify

Set Build command: npm run build

Set Publish directory: dist/

🧠 Learnings
React component composition

Tailwind theming and dark mode

State management using React Context

Vite project setup and optimization

Responsive layout design

Deploying SPAs on Netlify with proper routing

🙌 Acknowledgements
React.js

Vite

Tailwind CSS

Netlify


📬 Contact
Built with ❤️ by Mamta Vyas

Got feedback? Open an issue or reach out via GitHub Issues
