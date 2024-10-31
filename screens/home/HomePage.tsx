import { ArrowRight, Code, Cpu, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section className="border-4 border-black p-4 bg-white">
        <h2 className="text-4xl font-bold mb-4">LATEST POST</h2>
        <article>
          <h3 className="text-2xl font-bold">The Rise of Web Components</h3>
          <p className="mt-2">
            Exploring the future of modular web development...
          </p>
          <Link
            href="/articles/web-components"
            className="inline-flex items-center mt-4 text-lg hover:underline"
          >
            Read More <ArrowRight className="ml-2" />
          </Link>
        </article>
      </section>

      <section className="border-4 border-black p-4 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">FEATURED PROJECT</h2>
        <div>
          <h3 className="text-2xl font-bold">Brutalist Weather App</h3>
          <p className="mt-2">A weather application with a brutalist UI...</p>
          <Link
            href="/projects/brutalist-weather"
            className="inline-flex items-center mt-4 text-lg hover:underline"
          >
            View Project <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="col-span-full border-4 border-black p-4 bg-red-500 text-white">
        <h2 className="text-4xl font-bold mb-4">TECH STACK</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "React", icon: Code },
            { name: "Next.js", icon: Zap },
            { name: "TypeScript", icon: Cpu },
            { name: "Tailwind", icon: Globe },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex items-center border-2 border-white p-2"
            >
              <tech.icon className="mr-2" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
