import PageLayout from "@/components/PageLayout";
import ArticleDetailPage from "@/screens/articleDetail/components/ArticleDetailPage";
import { article, relatedArticles } from "@/screens/articleDetail/constants";

const Page = () => {
  return (
    <PageLayout>
      <ArticleDetailPage article={article} relatedArticles={relatedArticles} />
    </PageLayout>
  );
};

export default Page;
