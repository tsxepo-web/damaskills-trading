import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Let's Discuss Your Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Contact us today for a free consultation and estimate. We'll help
            bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-amber-100 p-3 text-amber-600">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">Call Us</h3>
            <a
              href="tel:+1234567890"
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              083 574 1216
            </a>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-amber-100 p-3 text-amber-600">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">Email Us</h3>
            <a
              href="mailto:info@eliteconstruction.com"
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              damaskills.general@gmail.com
            </a>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-amber-100 p-3 text-amber-600">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">Visit Us</h3>
            <p className="text-gray-600">
              Joe Slovo
              <br />
              <br />
              Mobeni Heights, Durban, South Africa
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="rounded-md bg-amber-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-amber-500 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
