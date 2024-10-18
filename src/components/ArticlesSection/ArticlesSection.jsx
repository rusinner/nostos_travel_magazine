import { getArticles } from "@/lib/contentful";

const ArticlesSection = async () => {
  const articles = await getArticles();
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <h1>{article.title}</h1>
            <p>{article.text.content[0].content[0].value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesSection;
