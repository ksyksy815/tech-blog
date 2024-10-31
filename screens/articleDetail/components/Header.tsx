import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Article } from "../types";

type Props = {
  article: Article;
};
const Header = ({ article }: Props) => {
  return (
    <header className="border-4 border-black p-4 mb-8">
      <Link
        href="/articles"
        className="text-xl inline-flex items-center hover:underline mb-4"
      >
        <ArrowLeft className="mr-2" /> Back to Articles
      </Link>
      <h1 className="text-4xl md:text-6xl font-bold">{article.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span className="text-lg">{article.date}</span>
        <span className="text-lg">By {article.author}</span>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-black p-1 text-sm bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
