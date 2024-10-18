import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};
const client = createContentClient();

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getArticles = async () => {
  const results = await getEntriesByType("articles");
  const articles = results.map((event) => event.fields);
  console.log(articles[0].text.content[0].content[0].value);

  return articles;
};
