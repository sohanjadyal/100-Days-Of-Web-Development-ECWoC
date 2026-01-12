import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { getTopHeadlines, searchNews } from "../services/newsApi";


export default function Home({ theme, setTheme }) {

  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
  setLoading(true);
  setError("");

  try {
    const data = await searchNews(query);
    setArticles(data.articles);
  } catch (err) {
    setError("Search failed");
  } finally {
    setLoading(false);
  }
    };


  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getTopHeadlines(category);
        console.log("API RESPONSE:", data); // 👈 ADD THIS
      setArticles(data.articles || []);
      } catch (err) {
        setError("Unable to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
  <>
   <Navbar theme={theme} setTheme={setTheme} />

    <main style={{ padding: "20px" }}>
      <h2>Latest News</h2>
      {/* ✅ ADD SEARCH BAR HERE */}
      <SearchBar onSearch={handleSearch} />

      {/* ✅ CATEGORY FILTER BELOW SEARCH */}
      <CategoryFilter selected={category} onSelect={setCategory} />

      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}

      {!loading && articles.length === 0 && (
        <p>No articles found for this category.</p>
      )}

      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </main>
  </>
);
}
