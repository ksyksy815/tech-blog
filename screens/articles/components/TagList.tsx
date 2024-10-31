import { Tag as TagIcon } from "lucide-react";
type Props = {
  tags: string[];
  selectedTags: string[];
  onClick: (tag: string) => void;
};

const TagList = ({ tags = [], selectedTags = [], onClick }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <TagIcon className="w-6 h-6" />
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onClick(tag)}
          className={`border-2 border-black p-2 ${
            selectedTags.includes(tag)
              ? "bg-black text-yellow-300"
              : "bg-white text-black"
          } hover:bg-black hover:text-yellow-300 transition-colors`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;
