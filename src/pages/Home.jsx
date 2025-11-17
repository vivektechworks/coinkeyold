import articles from "../articles.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Tutorials</h1>

      {articles.map((a) => (
        <div key={a.slug} style={{
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px"
        }}>
          <h3>{a.title}</h3>
          <Link to={`/article/${a.slug}`}>Read Article</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
