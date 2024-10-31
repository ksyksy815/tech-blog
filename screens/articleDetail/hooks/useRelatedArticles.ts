import { RelatedArticle } from "../types";

const useRelatedArticles = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      id: 2,
      title: "Understanding the Shadow DOM",
      tags: ["Web Components", "DOM", "JavaScript"],
      url: "/articles/understading-the-shadow-dom",
    },
    {
      id: 3,
      title: "Custom Elements: The Building Blocks of Web Components",
      tags: ["Web Components", "JavaScript", "HTML"],
      url: "/articles/custom-elements-the-building-blocks-of-web-components",
    },
    {
      id: 4,
      title: "Styling Web Components with CSS",
      tags: ["Web Components", "CSS", "Design"],
      url: "/articles/styling-web-components-with-css",
    },
  ];

  return {
    relatedArticles,
  };
};

export default useRelatedArticles;
