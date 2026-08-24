import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Building2 } from "lucide-react";

// Project data - you can move this to a separate file later
const projects = [
  {
    id: 1,
    title: "Joe Slovo Bridge",
    category: "Commercial",
    location: "Mobeni Heights, Durban",
    year: "2024",
    description:
      "Built a community bridge for government, ensuring structural integrity and safety for pedestrians.",
    image: "/images/projects/project-14.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Umlazi Township",
    category: "Residential",
    location: "Umlazi, Durban",
    year: "2023",
    description:
      "Installed custom aluminium railings for a client, with attention to durability and finish.",
    image: "/images/projects/project-38.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Umlazi Township",
    category: "Residential",
    location: "Umlazi, Durban",
    year: "2023",
    description:
      "Building a strong perimeter fence involves several sequential stages, starting with setting the foundation and finishing with specialized panels to enhance security.",
    image: "/images/projects/project-41.jpeg",
    featured: true,
  },
  {
    id: 4,
    title: "Ndwedwe Project",
    category: "Residential",
    location: "Umlazi, Durban",
    year: "2024",
    description:
      "Completed the installation of aluminium gates for a client, ensuring all fittings and alignments were securely in place.",
    image: "/images/projects/project-45.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "Ndwedwe Project",
    category: "Residential",
    location: "Umlazi, Durban",
    year: "2024",
    description:
      "Installation of aluminium railings for a client, ensuring all fittings and alignments were securely in place.",
    image: "/images/projects/project-46.jpeg",
    featured: false,
  },
  {
    id: 6,
    title: "Umbilo",
    category: "Residential",
    location: "Umbilo, Durban",
    year: "2023",
    description:
      "Aluminium door installation for a residential property, ensuring security and aesthetic appeal.",
    image: "/images/projects/project-44.jpeg",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center text-white lg:px-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Projects</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Explore our portfolio of completed projects showcasing our
            commitment to quality craftsmanship and client satisfaction.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-500 transition-colors">
              All Projects
            </button>
            <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              Commercial
            </button>
            <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              Residential
            </button>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2 text-sm text-amber-600">
                    <Building2 className="h-4 w-4" />
                    <span className="font-semibold">{project.category}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    View Details
                    <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
