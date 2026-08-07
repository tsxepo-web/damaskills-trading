import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Award,
  Building2,
  Users,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  BadgeCheck,
  Shield,
  Star,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 text-center text-white lg:px-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About Damaskills Trading
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Building excellence through quality, integrity, and client
            satisfaction since 2016.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
                About Our Company
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Building Trust Since 2016
              </h2>
              <p className="mb-4 text-gray-600">
                Damaskills Trading was established in 2016, specializing in
                construction, supply of tools, and maintenance services across
                Kwazulu-Natal. We are a B-BBEE Level 1 contributor with 100%
                black ownership, committed to delivering outstanding services to
                our clients.
              </p>
              <p className="mb-6 text-gray-600">
                Our mission is to serve our clients to the best of our ability
                while providing professional service with client satisfaction.
                We take customer satisfaction seriously and are committed to
                protecting our environment and natural resources.
              </p>

              {/* Accreditation Badges */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-amber-50 p-4 text-center">
                  <Award className="mx-auto mb-2 h-8 w-8 text-amber-600" />
                  <p className="text-sm font-semibold text-gray-900">
                    B-BBEE Level 1
                  </p>
                  <p className="text-xs text-gray-500">135% Recognition</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 text-center">
                  <BadgeCheck className="mx-auto mb-2 h-8 w-8 text-amber-600" />
                  <p className="text-sm font-semibold text-gray-900">
                    CIDB Grade 1
                  </p>
                  <p className="text-xs text-gray-500">GB &amp; ME</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 text-center">
                  <FileCheck className="mx-auto mb-2 h-8 w-8 text-amber-600" />
                  <p className="text-sm font-semibold text-gray-900">
                    Tax Compliant
                  </p>
                  <p className="text-xs text-gray-500">SARS Good Standing</p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/hero-bg.jpeg"
                alt="Damaskills Trading Team"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-600">
                We want to provide our clients and customers with outstanding
                services. We want to support them to pursue their goals and
                achieve their projected results. We intend to build long and
                healthy business relationships with all our customers, partners,
                and the community we serve.
              </p>
              <p className="mt-4 text-gray-600">
                We are committed to providing superior value in our services on
                a continuous basis. We are also committed to protecting our
                environment and natural resources.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Integrity",
                  "Responsibility",
                  "Respect",
                  "Accountability",
                ].map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Info Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Company Information
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="mb-2 font-semibold text-gray-900">Registration</h4>
              <p className="text-sm text-gray-600">2016/497690/07</p>
              <p className="text-sm text-gray-600">
                Registered: 16 November 2016
              </p>
              <p className="text-sm text-gray-600">Private Company</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="mb-2 font-semibold text-gray-900">
                B-BBEE Status
              </h4>
              <p className="text-sm font-bold text-amber-600">
                Level 1 Contributor
              </p>
              <p className="text-sm text-gray-600">100% Black Ownership</p>
              <p className="text-sm text-gray-600">
                135% Procurement Recognition
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="mb-2 font-semibold text-gray-900">
                Accreditations
              </h4>
              <p className="text-sm text-gray-600">
                CIDB Grade 1 (GB &amp; ME)
              </p>
              <p className="text-sm text-gray-600">SARS Tax Compliant</p>
              <p className="text-sm text-gray-600">CSD No: MAAA 0376276</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-amber-50 p-6 text-center">
            <p className="text-sm font-semibold text-amber-600">
              ⭐ B-BBEE Level 1 Contributor with 135% Procurement Recognition
            </p>
            <p className="text-sm text-amber-700">
              Damaskills Trading is your ideal partner for government and
              corporate contracts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-amber-600" />
              <p className="mt-2 font-semibold">Phone</p>
              <a
                href="tel:+2731400469"
                className="text-gray-600 hover:text-amber-600"
              >
                031 400 469
              </a>
              <a
                href="tel:+27835741216"
                className="text-gray-600 hover:text-amber-600"
              >
                083 574 1216
              </a>
            </div>

            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-amber-600" />
              <p className="mt-2 font-semibold">Email</p>
              <a
                href="mailto:damaskills.general@gmail.com"
                className="text-gray-600 hover:text-amber-600"
              >
                damaskills.general@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-amber-600" />
              <p className="mt-2 font-semibold">Address</p>
              <p className="text-gray-600">
                100 Joe Slovo
                <br />
                Lamontville, Durban, 4027
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
