import Link from "next/link";
import { RelatedArticle } from "../types";

type Props = {
  relatedArticles: RelatedArticle[];
};
const RelatedArticles = ({ relatedArticles = [] }: Props) => {
  return (
    <section className="border-4 border-black p-4 bg-red-500 text-white">
      <h2 className="text-3xl font-bold mb-4">RELATED ARTICLES</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block border-2 border-white p-4 hover:bg-white hover:text-red-500 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-sm border border-current p-1">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
