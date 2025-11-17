import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import articles from "../articles.json";
import { marked } from "marked";

function ArticleViewer() {
  const { slug } = useParams();
  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    const article = articles.find(a => a.slug === slug);

    if (!article) {
      setContent("Article not found");
      console.log("Article not found");
      
      return;
    }

    fetch(article.file)
      .then(res => res.text())
      .then(md => {
        setContent(marked(md));
        console.log(marked(md));
      });
  }, [slug]);

  return (
    <div style={{ padding: "20px" }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ArticleViewer;
