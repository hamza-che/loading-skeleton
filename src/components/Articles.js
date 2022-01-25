import React, { useState, useEffect } from "react";
import SkeletonArticle from "../skeleton/SkeletonArticle";

function Articles() {
  const [ articles, setArticles ] = useState(null);

  const fetchArticles = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  });

  return (
    <div>
      <h2>Articles</h2>
      {!articles ? (
        [ 1, 2, 3, 4, 5 ].map(item => (
          <SkeletonArticle key={item} theme="light" />
        ))
      ) : (
        articles.map(article => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Articles;
