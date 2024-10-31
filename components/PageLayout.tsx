import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-yellow-300 text-black font-mono p-4">
      {children}
    </div>
  );
};

export default PageLayout;
