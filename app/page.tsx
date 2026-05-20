'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <SupportSection />
      <ContactSection />
      <MedicalFooter />
    </main>
  );
}

// Header Component
function MedicalHeader() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <span className="h-8 w-8 flex items-center justify-center bg-medical-blue/20 rounded-lg">
                <span className="text-medical-blue font-bold">S</span>
              </span>
              <span className="text-xl font-bold text-foreground">Sharma Enterprises</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-between md:order-2">
            <nav className="flex space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/industries" className="text-muted-foreground hover:text-foreground transition-colors">
                Industries
              </Link>
              <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-3 md:order-1">
            <a href="tel:+91978395727" className="p-2 rounded-lg hover:bg-medical-blue/10">
              <span className="text-medical-blue">📞</span>
            </a>
            <a href="https://wa.me/91978395727" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-medical-blue/10">
              <span className="text-medical-blue">💬</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="relative pt-20 pb-24 medical-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Advanced Medical Imaging Solutions<br />
            <span className="block text-2xl font-light">for Hospitals & Diagnostic Centers</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            32+ Years of Trusted Excellence in Diagnostic Imaging, Printer Installation & Film Supply
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex-1 sm:flex-none px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Service
              <span className="material-icons">arrow_forward</span>
            </Link>
            <Link
              href="/services"
              className="flex-1 sm:flex-none px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/20 rounded-lg hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Solutions
              <span className="material-icons">search</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Trust Section
function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Healthcare Institutions Nationwide
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center space-x-4 p-6 medical-card">
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg">
              <span className="text-medical-blue">🏆</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">32+ Years Experience</h3>
              <p className="text-muted-foreground">
                Serving healthcare industry since 1992
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 medical-card">
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg">
              <span className="text-medical-blue">🏥</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">500+ Hospitals Served</h3>
              <p className="text-muted-foreground">
                Across India and international markets
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 medical-card">
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg">
              <span className="text-medical-blue">⚡</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">24/7 Technical Support</h3>
              <p className="text-muted-foreground">
                Rapid response for critical equipment
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 medical-card">
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg">
              <span className="text-medical-blue">📦</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Quality Assured Products</h3>
              <p className="text-muted-foreground">
                Certified films and supplies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: 'Medical Printer Installation',
      description: 'Expert installation and calibration of X-ray, CT scan, and MRI printers for optimal diagnostic image quality.',
      icon: '🖨️',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Diagnostic Imaging Film Supply',
      description: 'High-quality X-ray, CT, and MRI films from trusted manufacturers for clear, reliable diagnostic images.',
      icon: '📄',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Technical Support & Maintenance',
      description: 'Comprehensive troubleshooting, preventive maintenance, and repair services for all imaging equipment.',
      icon: '🔧',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Imaging Equipment Solutions',
      description: 'Complete solutions for upgrading, replacing, or expanding your diagnostic imaging capabilities.',
      icon: '💡',
      bgColor: 'bg-medical-blue/5'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Comprehensive Services
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Specialized healthcare imaging solutions designed to meet the demanding needs of modern medical facilities.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 medical-card hover:medical-glow transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-medical-blue/10">
                  <span className="text-medical-blue">{service.icon}</span>
                </div>
                <h3 className="font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="text-muted-foreground line-clamp-4">
                {service.description}
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center text-sm font-medium text-medical-blue hover:text-medical-blue/80"
              >
                Learn More
                <span className="material-icons ml-1">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industries Section
function IndustriesSection() {
  const industries = [
    'Hospitals',
    'Diagnostic Centers',
    'Imaging Centers',
    'Radiology Departments',
    'Medical Facilities',
    'Healthcare Procurement Teams',
    'Veterinary Hospitals',
    'Research Laboratories'
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Industries We Serve
        </h2>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="p-6 text-center medical-card"
            >
              <h3 className="font-semibold text-foreground">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio Section
function PortfolioSection() {
  const projects = [
    {
      title: 'City Hospital MRI Printer Installation',
      category: 'Printer Installation',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500',
    },
    {
      title: 'Diagnostic Center Film Supply Contract',
      category: 'Film Supply',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500',
    },
    {
      title: 'Radiology Department Equipment Upgrade',
      category: 'Equipment Solutions',
      image: 'https://images.unsplash.com/photo-1581090700227-48b00a1d93e3?w=500',
    },
    {
      title: 'Emergency Clinic Technical Support',
      category: 'Technical Support',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba99aef?w=500',
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Proven Portfolio
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Successful projects across healthcare facilities demonstrating our expertise and reliability.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Support Section
function SupportSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Expert Support When You Need It Most
            </h2>
            <p className="text-muted-foreground mb-8">
              Our dedicated technical support team ensures your imaging equipment operates at peak performance, minimizing downtime and maximizing diagnostic accuracy.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                  <span className="text-medical-blue">⏱️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Rapid Response</h3>
                  <p className="text-muted-foreground">
                    24/7 emergency support for critical imaging equipment failures
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                  <span className="text-medical-blue">🔧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Preventive Maintenance</h3>
                  <p className="text-muted-foreground">
                    Scheduled maintenance to prevent unexpected equipment downtime
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                  <span className="text-medical-blue">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Dedicated Hotline</h3>
                  <p className="text-muted-foreground">
                    Direct access to senior technical specialists
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                <span className="text-medical-blue">📊</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Performance Monitoring</h3>
                <p className="text-muted-foreground">
                  Advanced diagnostics to optimize equipment performance and image quality
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                <span className="text-medical-blue">📚</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Training & Documentation</h3>
                <p className="text-muted-foreground">
                  Comprehensive training programs and detailed documentation for your staff
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                <span className="text-medical-blue">🛡️</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Parts & Consumables</h3>
                <p className="text-muted-foreground">
                  Genuine replacement parts and certified consumables for all equipment brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section className="py-20 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Enhance Your Imaging Capabilities?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Contact our team of experts to discuss your specific requirements and discover how we can support your healthcare facility's imaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex-1 sm:flex-none px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request a Consultation
              <span className="material-icons">arrow_forward</span>
            </Link>
            <a
              href="tel:+91978395727"
              className="flex-1 sm:flex-none px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/20 rounded-lg hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Call Now: 978395727
              <span className="material-icons">call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function MedicalFooter() {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-4">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Sharma Enterprises</h3>
            <p className="text-muted-foreground">
              59, Sharma Enterprises, Gandhi Nagar Tonk Road, Jaipur-302015 (Rajasthan)
            </p>
            <p className="text-muted-foreground mt-2">
              Phone: 978395727 / 931931332
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://wa.me/91978395727" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-medical-blue/10">
                <span className="text-medical-blue">💬</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-foreground transition-colors">Industries</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services Overview</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Printer Installation</li>
              <li className="text-muted-foreground">Film Supply</li>
              <li className="text-muted-foreground">Technical Support</li>
              <li className="text-muted-foreground">Equipment Solutions</li>
              <li className="text-muted-foreground">Maintenance Contracts</li>
              <li className="text-muted-foreground">Emergency Response</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Connected</h3>
            <p className="text-muted-foreground">
              We're committed to providing reliable, professional imaging solutions that healthcare providers can trust.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sharma Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper classes for typography