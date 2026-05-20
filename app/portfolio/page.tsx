'use client';
import Link from 'next/link';
import { MedicalHeader, MedicalFooter } from '../components';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <PortfolioHero />
      <FeaturedProjects />
      <ClientTestimonials />
      <MedicalFooter />
    </main>
  );
}

// Portfolio Hero
function PortfolioHero() {
  return (
    <section className="relative pt-20 pb-24 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Our Proven Track Record
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Successful projects across healthcare facilities demonstrating our expertise, reliability, and commitment to excellence in diagnostic imaging solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

// Featured Projects
function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'City General Hospital Printer Network',
      location: 'Jaipur, Rajasthan',
      category: 'Printer Installation',
      description: 'Complete installation and networking of 15 diagnostic printers across multiple departments',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600',
      year: '2023',
      impact: 'Reduced film processing time by 40% and improved departmental workflow efficiency'
    },
    {
      id: 2,
      title: 'State Diagnostic Center Film Supply',
      location: 'Delhi, NCR',
      category: 'Film Supply',
      description: 'Annual supply contract for high-volume diagnostic imaging films',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600',
      year: '2022-2024',
      impact: 'Consistent 99.8% on-time delivery rate maintaining optimal inventory levels'
    },
    {
      id: 3,
      title: 'Apollo Radiology Department Upgrade',
      location: 'Hyderabad, Telangana',
      category: 'Equipment Solutions',
      description: 'Complete radiology department modernization with latest imaging technology',
      image: 'https://images.unsplash.com/photo-1581090700227-48b00a1d93e3?w=600',
      year: '2023',
      impact: 'Enhanced diagnostic capabilities leading to 25% increase in early detection rates'
    },
    {
      id: 4,
      title: 'Emergency Clinic Technical Support',
      location: 'Mumbai, Maharashtra',
      category: 'Technical Support',
      description: '24/7 emergency support contract for critical care imaging equipment',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba99aef?w=600',
      year: '2022-2024',
      impact: '99.5% uptime achievement with average response time under 2 hours for critical issues'
    },
    {
      id: 5,
      title: 'Fortis Hospital Mammography Suite',
      location: 'Bangalore, Karnataka',
      category: 'Equipment Solutions',
      description: 'Specialized mammography equipment installation and calibration',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba99aef?w=600',
      year: '2023',
      impact: 'Optimized for breast cancer screening with improved image quality and reduced recall rates'
    },
    {
      id: 6,
      title: 'Rural Health Network Film Supply',
      location: 'Various Locations',
      category: 'Film Supply',
      description: 'Distributed film supply network serving 50+ rural healthcare facilities',
      image: 'https://images.unsplash.com/photo-1590340436969-287eef4165b5?w=600',
      year: '2022-2024',
      impact: 'Improved access to quality imaging supplies in underserved regions'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Selected case studies showcasing our ability to deliver results across diverse healthcare environments.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
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
                  <p className="text-sm">{project.location} • {project.year}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-2">
                  <span className="text-medical-blue">📍</span> {project.location} | <span className="text-medical-blue">📅</span> {project.year}
                </p>
                <p className="text-muted-foreground mb-3 line-clamp-3">
                  {project.description}
                </p>
                <p className="text-sm font-medium text-medical-blue">
                  {project.impact}
                </p>
                <Link
                  href="/portfolio"
                  className="mt-3 inline-flex items-center text-sm font-medium text-medical-blue hover:text-medical-blue/80"
                >
                  View Details
                  <span className="material-icons ml-1">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Client Testimonials
function ClientTestimonials() {
  const testimonials = [
    {
      name: 'Dr. S. Patel',
      title: 'Chief Radiologist',
      facility: 'City General Hospital',
      quote: 'Sharma Enterprises has been our trusted partner for over 10 years. Their technical expertise and rapid response times have been invaluable in maintaining our imaging capabilities.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    },
    {
      name: 'Priya Sharma',
      title: 'Hospital Administrator',
      facility: 'State Diagnostic Center',
      quote: 'The professionalism and reliability of Sharma Enterprises\' team have made them an essential part of our healthcare operations. We consistently receive high-quality products and expert support.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    {
      name: 'Dr. Amit Kumar',
      title: 'Radiology Department Head',
      facility: 'Apollo Hospitals',
      quote: 'Their expertise in imaging equipment solutions helped us modernize our entire radiology department with minimal disruption to services.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100',
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Genuine feedback from healthcare facilities that have partnered with Sharma Enterprises for their imaging needs.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 medical-card hover:medical-glow transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-medical-blue/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-italic text-muted-foreground mb-3 line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3 mt-2">
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.facility}
                    </p>
                    <div className="flex space-x-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < testimonial.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}