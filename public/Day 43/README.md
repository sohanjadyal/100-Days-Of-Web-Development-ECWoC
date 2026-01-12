# 📰 NewsHub — News Aggregator Web App

NewsHub is a modern, responsive **news aggregator web application** built using React.  
It fetches real-time news from multiple sources using the NewsAPI and provides users with an intuitive interface to browse, search, and filter news articles.

---

## 🚀 Features

- 🗞️ Live top headlines from trusted news sources
- 🔍 Search news by keywords
- 🧭 Category-based filtering (Technology, Sports, Business, etc.)
- 🌙 Dark Mode with persistent theme preference
- 📱 Fully responsive grid layout
- ⚡ Fast and lightweight (Vite + React)

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS (CSS Variables for theming)
- **API:** NewsAPI
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Deployment:** Netlify / Vercel (ready)

---

## 📂 Project Structure

```txt
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ NewsCard.jsx
 │   ├─ CategoryFilter.jsx
 │   └─ SearchBar.jsx
 ├─ pages/
 │   └─ Home.jsx
 ├─ services/
 │   └─ newsApi.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
⚙️ Setup & Installation
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/your-username/newshub.git
cd newshub
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create environment variables
Create a .env file in the root directory:

env
Copy code
VITE_NEWS_API_KEY=your_newsapi_key_here
Get your API key from https://newsapi.org

4️⃣ Run the app
bash
Copy code
npm run dev
🌐 API Used
NewsAPI

top-headlines endpoint for categories

everything endpoint for search

🎯 Future Enhancements
🔖 Bookmark articles using localStorage

⏳ Skeleton loaders

🌍 Multiple country support

🧠 AI-based news summarization