export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h1>📰 NewsHub</h1>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        style={styles.button}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}

const styles = {
  button: {
    background: "var(--button-bg)",
    color: "var(--button-text)",
    border: "none",
    padding: "8px 14px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};
