const useArticleList = () => {
  const allArticles = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Article ${i + 1}`,
    excerpt: `This is a brief excerpt for Article ${i + 1}...`,
    date: new Date(Date.now() - i * 86400000).toISOString().split("T")[0],
    tags: ["React", "Next.js", "TypeScript", "CSS"]
      .sort(() => 0.5 - Math.random())
      .slice(0, 2),
  }));

  return {
    allArticles,
  };
};

export default useArticleList;
