import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "WATER SAFETY ADVOCACY GROUP",
    role: "BUSINESS OFFICE",
    content: "Upgraded our office furnisher, canteen area and boardroom",
  },
  {
    id: 2,
    name: "Sakhile Mkhize",
    role: "Home Owner",
    content:
      "They built ceiling from my house. They delivered on time and within budget. I would highly recommend them for any construction project.",
  },
  {
    id: 3,
    name: "Njabulo Dlamini",
    role: "Business Owner",
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
