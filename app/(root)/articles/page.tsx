import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import ArticlesPage from "@/screens/articles/components/ArticlesPage";

const page = () => {
  return (
    <PageLayout>
      <PageHeader
        pageTitle="Articles"
        goBackLink="/"
        goBackText="Go back home"
      />
      <ArticlesPage />
    </PageLayout>
  );
};

export default page;
