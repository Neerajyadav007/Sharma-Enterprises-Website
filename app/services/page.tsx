'use client';
import Link from 'next/link';
import { MedicalHeader, MedicalFooter } from '../components';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <ServicesHero />
      <ServiceDetails />
      <ServiceProcess />
      <WhyChooseUs />
      <MedicalFooter />
    </main>
  );
}

// Services Hero
function ServicesHero() {
  return (
    <section className="relative pt-20 pb-24 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Comprehensive Healthcare Imaging Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            End-to-end solutions for medical printer installation, diagnostic film supply, technical support, and equipment solutions tailored to healthcare facilities' specific needs.
          </p>
        </div>
      </div>
    </section>
  );
}

// Service Details
function ServiceDetails() {
  const services = [
    {
      title: 'Medical Printer Installation & Calibration',
      description: 'Professional installation, configuration, and calibration of diagnostic imaging printers to ensure optimal image quality and reliable performance.',
      benefits: [
        'Expert setup of X-ray, CT, and MRI printers',
        'Color calibration and quality assurance',
        'Network integration with PACS systems',
        'Performance testing and validation',
        'User training for hospital staff'
      ],
      icon: '🖨️',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Diagnostic Imaging Film Supply',
      description: 'Consistent supply of high-quality medical imaging films from certified manufacturers, ensuring clear and reliable diagnostic images.',
      benefits: [
        'Multiple film types and sizes available',
        'Consistent quality and performance',
        'Just-in-time delivery options',
        'Inventory management support',
        'Technical guidance on film selection'
      ],
      icon: '📄',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Technical Support & Maintenance',
      description: 'Comprehensive 24/7 technical support, preventive maintenance, and repair services for all diagnostic imaging equipment.',
      benefits: [
        'Round-the-clock emergency support',
        'Preventive maintenance programs',
        'On-site repair services',
        'Remote diagnostics and troubleshooting',
        'Spare parts inventory management'
      ],
      icon: '🔧',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Imaging Equipment Solutions',
      description: 'Complete solutions for upgrading, replacing, or expanding diagnostic imaging capabilities with the latest technology.',
      benefits: [
        'Needs assessment and planning',
        'Equipment selection guidance',
        'Installation and integration',
        'Staff training and documentation',
        'Trade-in and upgrade programs'
      ],
      icon: '💡',
      bgColor: 'bg-medical-blue/5'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Specialized Services
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Each service is designed to address specific needs of healthcare facilities while maintaining the highest standards of quality and reliability.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {service.description}
              </p>
              <div className="space-y-3">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start space-x-2 text-sm">
                    <span className="flex-shrink-0 text-medical-blue">•</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                href="#"
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

// Service Process
function ServiceProcess() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          Our Service Delivery Process
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          A proven process designed to ensure seamless implementation and ongoing support for your healthcare imaging needs.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            key="assessment"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">1</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Needs Assessment</h3>
            <p className="text-muted-foreground">
              Comprehensive evaluation of your facility's imaging requirements and existing infrastructure
            </p>
          </motion.div>

          <motion.div
            key="planning"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">2</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Solution Planning</h3>
            <p className="text-muted-foreground">
              Customized solution design based on your specific needs, budget, and timeline
            </p>
          </motion.div>

          <motion.div
            key="implementation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">3</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Professional Implementation</h3>
            <p className="text-muted-foreground">
              Expert installation, configuration, and integration with minimal disruption to operations
            </p>
          </motion.div>

          <motion.div
            key="training"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">4</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Staff Training</h3>
            <p className="text-muted-foreground">
              Comprehensive training for your team to ensure optimal utilization of the equipment
            </p>
          </motion.div>

          <motion.div
            key="support"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">5</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Ongoing Support</h3>
            <p className="text-muted-foreground">
              Continuous technical support, maintenance, and optimization services
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us
function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          Why Healthcare Facilities Choose Sharma Enterprises
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            key="expertise"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">🎓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Deep Expertise</h3>
                <p className="text-muted-foreground">
                  32+ years specialized experience in healthcare imaging solutions
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="reliability"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Unmatched Reliability</h3>
                <p className="text-muted-foreground">
                  98% customer satisfaction rate with proven track record of excellence
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="support"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  24/7 technical support with rapid response times for critical issues
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="quality"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">🛡️</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Certified products and services that meet international healthcare standards
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="value"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">💰</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Competitive Value</h3>
                <p className="text-muted-foreground">
                  Transparent pricing with no hidden costs and flexible payment options
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="partnership"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">🤝</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Long-term Partnership</h3>
                <p className="text-muted-foreground">
                  Focus on building lasting relationships rather than just transactional interactions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}