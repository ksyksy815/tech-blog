export type Article = {
  id: number;
  title: string;
  content: string;
  date: string;
  tags: string[];
  author: string;
};

export type RelatedArticle = {
  id: number;
  title: string;
  tags: string[];
  url: string;
};
