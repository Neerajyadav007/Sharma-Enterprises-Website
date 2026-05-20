'use client';
import Link from 'next/link';
import { MedicalHeader, MedicalFooter } from '../components';
import { motion } from 'framer-motion';

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <SupportHero />
      <SupportServices />
      <SupportProcess />
      <ContactCTA />
      <MedicalFooter />
    </main>
  );
}

// Support Hero
function SupportHero() {
  return (
    <section className="relative pt-20 pb-24 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Expert Technical Support When You Need It Most
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            24/7 technical support, preventive maintenance, and rapid response services to ensure your imaging equipment operates at peak performance with minimal downtime.
          </p>
        </div>
      </div>
    </section>
  );
}

// Support Services
function SupportServices() {
  const services = [
    {
      title: 'Emergency Technical Support',
      description: 'Round-the-clock emergency support for critical imaging equipment failures that impact patient care.',
      features: [
        '24/7 availability including holidays and weekends',
        'Average response time under 2 hours for critical issues',
        'Remote diagnostics and troubleshooting capabilities',
        'On-site repair services when remote resolution isn\'t possible',
        'Direct access to senior technical specialists'
      ],
      icon: '🚨',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Preventive Maintenance Programs',
      description: 'Scheduled maintenance services designed to prevent equipment failures and extend equipment lifespan.',
      features: [
        'Customizable maintenance schedules based on equipment usage',
        'Comprehensive inspection and calibration services',
        'Wear and tear prediction and parts replacement',
        'Performance optimization and efficiency improvements',
        'Documentation and compliance reporting'
      ],
      icon: '🔧',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Remote Monitoring & Diagnostics',
      description: 'Advanced remote monitoring capabilities to detect and address issues before they impact operations.',
      features: [
        'Real-time equipment performance monitoring',
        'Predictive failure detection using AI analytics',
        'Automated alerts for potential issues',
        'Remote firmware updates and configuration changes',
        'Monthly performance reports and recommendations'
      ],
      icon: '💻',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Training & Documentation',
      description: 'Comprehensive training programs and documentation to empower your staff with equipment knowledge.',
      features: [
        'On-site and virtual training sessions',
        'Equipment operation and safety training',
        'Maintenance procedure training for technical staff',
        'Quick reference guides and troubleshooting manuals',
        'Training records and certification programs'
      ],
      icon: '📚',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Spare Parts Management',
      description: 'Efficient spare parts inventory management to minimize downtime during repairs.',
      features: [
        'Critical parts inventory held locally for rapid access',
        'Expedited shipping for non-stock items',
        'Parts compatibility verification and sourcing',
        'Warranty tracking and management',
        'Cost-effective alternatives when available'
      ],
      icon: '📦',
      bgColor: 'bg-medical-blue/5'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Comprehensive Support Services
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Multiple layers of support designed to address every aspect of your imaging equipment lifecycle.
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
              <p className="text-muted-foreground mb-4 line-clamp-4">
                {service.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
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

// Support Process
function SupportProcess() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          How Our Support Process Works
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          A streamlined process designed to resolve issues quickly and efficiently while keeping you informed every step of the way.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">1</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Issue Reporting</h3>
            <p className="text-muted-foreground">
              Contact our support hotline, email, or portal with detailed issue description
            </p>
          </motion.div>

          <motion.div
            key="assessment"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">2</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Initial Assessment</h3>
            <p className="text-muted-foreground">
              Our technical team evaluates the issue severity and determines the appropriate response
            </p>
          </motion.div>

          <motion.div
            key="response"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">3</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Response Dispatch</h3>
            <p className="text-muted-foreground">
              Remote troubleshooting initiated or on-site technician dispatched based on assessment
            </p>
          </motion.div>

          <motion.div
            key="resolution"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">4</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Issue Resolution</h3>
            <p className="text-muted-foreground">
              Problem diagnosed and resolved with testing to confirm proper equipment function
            </p>
          </motion.div>

          <motion.div
            key="followup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 text-center medical-card"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-medical-blue/10 rounded-lg mb-4">
              <span className="text-medical-blue text-2xl">5</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">Follow-up & Documentation</h3>
            <p className="text-muted-foreground">
              Service completion documented with preventive recommendations and follow-up scheduling
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact CTA
function ContactCTA() {
  return (
    <section className="py-20 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Immediate Technical Support?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Our expert team is available 24/7 to assist with any imaging equipment issues you may be experiencing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex-1 sm:flex-none px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Support
              <span className="material-icons">arrow_forward</span>
            </Link>
            <a
              href="tel:+91978395727"
              className="flex-1 sm:flex-none px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/20 rounded-lg hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Call Emergency Support: 978395727
              <span className="material-icons">call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}