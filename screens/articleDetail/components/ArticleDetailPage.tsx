import { Article, RelatedArticle } from "../types";
import Contents from "./Contents";
import Header from "./Header";
import RelatedArticles from "./RelatedArticles";

type Props = {
  article: Article;
  relatedArticles: RelatedArticle[];
};
export default function ArticleDetailPage({ article, relatedArticles }: Props) {
  return (
    <>
      <Header article={article} />
      <Contents article={article} />
      <RelatedArticles relatedArticles={relatedArticles} />
    </>
  );
}
