import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap gap-4">
        {["About", "Articles", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className="border-2 border-black p-2 hover:bg-black hover:text-yellow-300 transition-colors"
          >
            <Link href={`/${item.toLowerCase()}`}>{item.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
