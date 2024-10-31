import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export type PageHeaderProps = {
  pageTitle: string;
  goBackLink: string;
  goBackText: string;
};

const PageHeader = ({
  pageTitle = "",
  goBackLink = "",
  goBackText = "",
}: PageHeaderProps) => {
  return (
    <header className="border-4 border-black p-4 mb-8">
      <h1 className="text-6xl font-bold">{pageTitle}</h1>
      <Link
        href={goBackLink}
        className="text-xl mt-2 inline-flex items-center hover:underline"
      >
        <ArrowLeft className="mr-2" /> {goBackText}
      </Link>
    </header>
  );
};

export default PageHeader;
