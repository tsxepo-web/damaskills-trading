import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Elite Construction completely transformed our kitchen. The team was professional, on time, and the quality is exceptional. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "They built our new office space from the ground up. Communication was great throughout the entire process. Couldn't be happier with the result.",
  },
  {
    id: 3,
    name: "Robert Thompson",
    role: "Property Developer",
    content:
      "We've worked with Elite Construction on multiple projects. Their attention to detail and ability to stay within budget is unmatched.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
            Client Testimonials
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-gray-300">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
