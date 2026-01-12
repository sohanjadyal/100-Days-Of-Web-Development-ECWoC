export default function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.urlToImage && (
        <img src={article.urlToImage} alt="news" />
      )}

      <h3>{article.title}</h3>
      <p>{article.description}</p>

      <a href={article.url} target="_blank" rel="noreferrer">
        Read more →
      </a>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
    marginBottom: "10px",
  },
};
