import { Article } from "../types";

type Props = {
  article: Article;
};
const Contents = ({ article }: Props) => {
  return (
    <main className="mb-12 ">
      <article className="border-4 border-black p-4 bg-white">
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:border-b-2 prose-headings:border-black prose-headings:pb-2 prose-h2:text-3xl prose-h3:text-2xl prose-p:my-4 prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4 prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded"
        />
      </article>
    </main>
  );
};

export default Contents;
