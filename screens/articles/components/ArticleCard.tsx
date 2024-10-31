import { ArrowRight, Link } from "lucide-react";

type Props = {
  article: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
  };
};
const ArticleCard = ({ article }: Props) => {
  return (
    <article className="border-4 border-black p-4 bg-white">
      <h2 className="text-2xl font-bold">{article.title}</h2>
      <p className="mt-2">{article.excerpt}</p>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="border-2 border-black p-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm">{article.date}</span>
      </div>
      <Link
        href={`/articles/${article.id}`}
        className="inline-flex items-center mt-4 text-lg hover:underline"
      >
        Read More <ArrowRight className="ml-2" />
      </Link>
    </article>
  );
};

export default ArticleCard;
