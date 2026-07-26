import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16">
      <div className="relative h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg2.jpg"
            alt="Construction site with crane and workers"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline */}
            <p className="mb-4 text-lg font-semibold text-amber-400">
              Building Excellence Since 2016
            </p>

            {/* Decorative Line */}
            <div className="mx-auto mb-6 h-0.5 w-16 bg-amber-400/50" />

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building Your Vision,
              <br />
              <span className="text-amber-400">One Project at a Time</span>
            </h1>

            {/* Subtext */}
            <p className="mb-8 text-lg text-gray-200 md:text-xl">
              Premium construction services for residential and commercial
              properties. Quality craftsmanship, on time, and within budget.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-amber-500 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/projects"
                className="rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-300">
              <span className="text-amber-400">⭐</span>
              <span>100% Client Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
