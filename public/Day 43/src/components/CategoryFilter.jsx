const categories = [
  "general",
  "technology",
  "sports",
  "business",
  "entertainment",
  "health",
  "science",
];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div style={styles.container}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            ...styles.button,
            backgroundColor: selected === cat ? "#111" : "#eee",
            color: selected === cat ? "#fff" : "#000",
          }}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    margin: "16px 0 24px",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    background: "var(--pill-bg)",
    color: "var(--text-color)",
  },
};

