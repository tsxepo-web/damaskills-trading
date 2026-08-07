import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Downtown Office Tower",
    category: "Commercial",
    image: "/images/project-1.jpeg",
  },
  {
    id: 2,
    title: "Lakeside Modern Home",
    category: "Residential",
    image: "/images/project-2.jpeg",
  },
  {
    id: 3,
    title: "Riverside Retail Center",
    category: "Commercial",
    image: "/images/project-3.jpeg",
  },
];

export default function Projects() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
            Our Portfolio
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Take a look at some of our recent work and see the quality we
            deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-gray-100"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-semibold uppercase text-amber-400">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-md border-2 border-amber-600 px-6 py-3 font-semibold text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
