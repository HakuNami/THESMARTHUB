"use client"
import { Phone, Mail, Globe, MapPin, ArrowRight, ChevronDown, Shield, Target } from "lucide-react"

export default function SmartHubPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold">
              <span className="text-emerald-400">SmartHub</span>
              <span className="text-white">Enterprises</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white text-sm transition">
                About
              </a>
              <a href="#services" className="text-gray-300 hover:text-white text-sm transition flex items-center gap-1">
                <span className="bg-slate-700 px-3 py-1 rounded-full">Services</span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white text-sm transition">
                Contact
              </a>
              <a
                href="#contact"
                className="text-emerald-400 hover:text-emerald-300 text-sm transition underline underline-offset-2"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex flex-col">
        <div className="absolute top-32 left-8 w-4 h-4 rounded-full bg-blue-400/60 z-10" />
        <div className="absolute top-48 right-12 w-3 h-3 rounded-full bg-emerald-400 z-10" />

        <div className="flex-1 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] flex items-center justify-center relative overflow-hidden">
          {/* Decorative diagonal shape */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#0a1628] clip-diagonal" />

          <div className="max-w-4xl mx-auto text-center px-6 py-20 relative z-10">
            {/* Three dots */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="w-3 h-3 rounded-full bg-cyan-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-balance">
              <span className="text-emerald-400 italic">SmartHub</span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">Enterprises</h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 text-balance">
              Next-generation telecommunications and cybersecurity solutions with{" "}
              <span className="font-semibold text-white">performance</span>,{" "}
              <span className="font-semibold text-white">security</span>, and{" "}
              <span className="font-semibold text-white">scalability</span> at the core.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-gray-100 transition flex items-center gap-2 justify-center"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition flex items-center gap-2 justify-center"
              >
                Get in Touch
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Floating badge */}
            <div className="absolute right-4 bottom-20 md:right-20 bg-white rounded-lg shadow-lg p-4 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900 text-sm">Certified Experts</p>
                <p className="text-gray-500 text-xs">HCIE, HCIP, HCIA certified</p>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative -mt-1">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
              fill="#0f172a"
            />
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="50%" stopColor="#1e3a5f" />
                <stop offset="100%" stopColor="#134e4a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 bg-white">
        <div className="absolute top-24 left-6 w-5 h-5 rounded-full bg-blue-400/60 z-10" />
        <div className="absolute bottom-32 right-10 w-3 h-3 rounded-full bg-emerald-400 z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-blue-600 text-sm uppercase tracking-wider font-medium mb-4">
                ABOUT SMARTHUB ENTERPRISES
              </p>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                <span className="text-emerald-500 underline decoration-emerald-500 underline-offset-4">
                  Telecommunications
                </span>{" "}
                Infrastructure
                <br />
                Redefined
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SmartHub Enterprises is a leading specialized partner for end-to-end telecommunications and network
                  implementation, providing comprehensive IT infrastructure and cybersecurity solutions.
                </p>
                <p>
                  Our certified engineers bring deep expertise in deploying and optimizing critical network elements
                  including Huawei CSR routers, microwave transmission systems, and high-capacity fiber optic backhaul
                  networks.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="mt-8 bg-white border-l-4 border-emerald-500 pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-semibold text-slate-900">Our Mission Statement</h3>
                </div>
                <p className="text-emerald-600 leading-relaxed">
                  To deliver exceptional network solutions that drive digital transformation while maintaining the
                  highest standards of security, reliability, and performance.
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#0f172a] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Contact Us</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">+27 82-261-9591</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">tsm@smarthubent.co.za</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">www.smarthubent.co.za</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">3929 Pioneer Street, Riverside View, Fourways, 2191</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 z-0" />

        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold">200+</p>
                <p className="text-sm text-white/80">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm text-white/80">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold">24/7</p>
                <p className="text-sm text-white/80">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6 bg-white">
        <div className="absolute top-48 left-6 w-5 h-5 rounded-full bg-blue-400/60 z-10" />
        <div className="absolute bottom-40 right-8 w-3 h-3 rounded-full bg-emerald-400 z-10" />
        <div className="absolute bottom-24 left-1/2 w-4 h-4 rounded-full bg-purple-400 z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-4 h-4 rounded-full bg-orange-400" />
          </div>
          <p className="text-blue-600 text-sm uppercase tracking-wider text-center mb-2">OUR EXPERTISE</p>
          <h2 className="text-4xl font-bold text-center mb-2 text-slate-900">
            Comprehensive{" "}
            <span className="text-emerald-500 underline decoration-emerald-500 underline-offset-4">
              Network Solutions
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            We provide end-to-end networking services that keep your business connected and protected.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Telecom Network Services</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Full lifecycle services including planning, deployment, and optimization of core networks, microwave
                links, and fiber optic infrastructure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Enterprise Networking</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                High-performance network architecture design and implementation using cutting-edge technologies from
                Huawei, Cisco, and Juniper.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hybrid and multi-cloud solutions with seamless integration to your existing network infrastructure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Data Center Solutions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Comprehensive data center services including server management, virtualization, and storage solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Advanced threat protection, network security assessments, and compliance consulting services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Managed Services</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                24/7 monitoring, maintenance, and support to ensure optimal network performance and uptime.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
            >
              Request Custom Solution
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-[#0f172a] text-white">
        <div className="absolute top-32 left-8 w-4 h-4 rounded-full bg-blue-400/60 z-10" />
        <div className="absolute bottom-40 right-10 w-3 h-3 rounded-full bg-emerald-400 z-10" />
        <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-purple-400 z-10" />

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+27 82-261-9591</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-white mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">tsm@smarthubent.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-gray-400">3929 Pioneer Street, Riverside View, Fourways, 2191</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="w-5 h-5 text-white mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Website</h3>
                  <p className="text-gray-400">www.smarthubent.co.za</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-[#0a1628] border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 SmartHub Enterprises. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  )
}
