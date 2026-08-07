import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 text-center text-white lg:px-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Get in touch with us for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
              <p className="text-gray-600">
                We'd love to hear from you! Whether you have a project in mind,
                need a quote, or just want to learn more about our services.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:+2731400469"
                      className="text-gray-600 hover:text-amber-600 block"
                    >
                      031 400 469
                    </a>
                    <a
                      href="tel:+27835741216"
                      className="text-gray-600 hover:text-amber-600 block"
                    >
                      083 574 1216
                    </a>
                    <a
                      href="tel:+27720649970"
                      className="text-gray-600 hover:text-amber-600 block"
                    >
                      072 064 9970
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:damaskills.general@gmail.com"
                      className="text-gray-600 hover:text-amber-600"
                    >
                      damaskills.general@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      100 Joe Slovo
                      <br />
                      Lamontville, Durban, 4027
                    </p>
                    <a
                      href="https://www.google.com/maps/dir//100+Joe+Slovo,+Lamontville,+Durban,+4027"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-1 mt-1"
                    >
                      Get Directions
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Business Hours
                    </p>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* Quick Links to Documents */}
              <div className="rounded-lg bg-amber-50 p-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Our Credentials
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    B-BBEE Level 1 Contributor
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    CIDB Grade 1 (GB &amp; ME)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    SARS Tax Compliant
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Send a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="083 574 1216"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-amber-600 px-4 py-3 font-semibold text-white hover:bg-amber-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - NEW */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Find Us Here</h2>
            <p className="text-gray-600 mt-2">
              100 Joe Slovo, Lamontville, Durban, 4027
            </p>
          </div>

          <div className="relative h-100 w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27660.68821626105!2d30.924576701321968!3d-29.933817898655622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7abaa09199827%3A0xd95c098c979a259f!2sMobeni%20Heights%20Civic%20Association!5e0!3m2!1sen!2sza!4v1786095720969!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Damaskills Trading Location"
              className="absolute inset-0"
            />
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/dir//100+Joe+Slovo,+Lamontville,+Durban,+4027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              <MapPin className="h-5 w-5" />
              Open in Google Maps
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
