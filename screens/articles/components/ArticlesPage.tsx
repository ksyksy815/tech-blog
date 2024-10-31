"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import useArticleList from "../hooks/useArtliceList";
import useTagList from "../hooks/useTagList";
import ArticleCard from "./ArticleCard";
import TagList from "./TagList";

export default function ArticlesPage() {
  const { allArticles } = useArticleList();
  const { allTags } = useTagList();

  const [articles, setArticles] = useState(allArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const articlesPerPage = 10;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  useEffect(() => {
    const filtered = allArticles.filter(
      (article) =>
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => article.tags.includes(tag)))
    );
    setArticles(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedTags]);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <Search className="w-6 h-6" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-black p-2 bg-white text-black w-full md:w-auto flex-grow"
          />
        </div>
        <TagList
          tags={allTags}
          selectedTags={selectedTags}
          onClick={toggleTag}
        />
      </div>

      <main className="space-y-8">
        {paginatedArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </main>

      <div className="mt-8 flex justify-between items-center border-4 border-black p-4 bg-white">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="border-2 border-black p-2 disabled:opacity-50 hover:bg-black hover:text-yellow-300 transition-colors"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="border-2 border-black p-2 disabled:opacity-50 hover:bg-black hover:text-yellow-300 transition-colors"
        >
          Next
        </button>
      </div>
    </>
  );
}
