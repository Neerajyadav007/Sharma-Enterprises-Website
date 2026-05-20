'use client';
import Link from 'next/link';
import { MedicalHeader, MedicalFooter } from '../components';
import { motion } from 'framer-motion';

export default function IndustriesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <IndustriesHero />
      <IndustryDetails />
      <SolutionsByIndustry />
      <MedicalFooter />
    </main>
  );
}

// Industries Hero
function IndustriesHero() {
  return (
    <section className="relative pt-20 pb-24 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Serving Diverse Healthcare Facilities
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Specialized imaging solutions tailored to the unique needs of different healthcare facilities, from small clinics to large hospital networks.
          </p>
        </div>
      </div>
    </section>
  );
}

// Industry Details
function IndustryDetails() {
  const industries = [
    {
      title: 'Hospitals',
      description: 'Comprehensive imaging solutions for large medical facilities with diverse departmental needs',
      solutions: [
        'Multi-department printer network management',
        'Centralized film supply and inventory control',
        '24/7 technical support for critical care areas',
        'Preventive maintenance for equipment uptime',
        'Training programs for radiology technologists'
      ],
      icon: '🏥',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Diagnostic Centers',
      description: 'Specialized solutions for outpatient diagnostic facilities focusing on efficiency and throughput',
      solutions: [
        'High-volume film supply management',
        'Rapid response technical support',
        'Cost-effective maintenance programs',
        'Workflow optimization consulting',
        'Quick installation and setup services'
      ],
      icon: '🏥',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Imaging Centers',
      description: 'Focused solutions for specialized imaging facilities requiring precision and reliability',
      solutions: [
        'Precision calibration for diagnostic accuracy',
        'Specialty film and consumable management',
        'Equipment performance optimization',
        'Quality assurance and audit support',
        'Technology upgrade planning'
      ],
      icon: '🏥',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Radiology Departments',
      description: 'Targeted solutions for hospital radiology departments handling high-stakes diagnostic work',
      solutions: [
        'Critical equipment priority support',
        'Regulatory compliance assistance',
        'Peer review and quality control support',
        'PACS and RIS integration support',
        'Continuing education and training'
      ],
      icon: '🏥',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Medical Facilities',
      description: 'Adaptable solutions for clinics, nursing homes, and specialized treatment centers',
      solutions: [
        'Scalable solutions that grow with your facility',
        'Simplified maintenance and support',
        'Cost-effective film and supply options',
        'User-friendly equipment and supplies',
        'Flexible service agreements'
      ],
      icon: '🏥',
      bgColor: 'bg-medical-blue/5'
    },
    {
      title: 'Healthcare Procurement Teams',
      description: 'Streamlined solutions for purchasing departments managing medical equipment budgets',
      solutions: [
        'Transparent pricing and detailed quotations',
        'Volume discount programs',
        'Supplier consolidation opportunities',
        'Performance reporting and analytics',
        'Contract management and renewal support'
      ],
      icon: '💼',
      bgColor: 'bg-medical-blue/5'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Industries We Serve
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Specialized expertise in addressing the unique imaging needs of different healthcare facility types.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 medical-card hover:medical-glow transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-medical-blue/10">
                  <span className="text-medical-blue">{industry.icon}</span>
                </div>
                <h3 className="font-semibold text-foreground">{industry.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {industry.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground mb-2">Our Solutions Include:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex}>{solution}</li>
                  ))}
                </ul>
              </div>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center text-sm font-medium text-medical-blue hover:text-medical-blue/80"
              >
                Learn More About Services
                <span className="material-icons ml-1">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solutions by Industry
function SolutionsByIndustry() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          Tailored Solutions for Every Healthcare Setting
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            key="small-clinic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 medical-card"
          >
            <h3 className="font-semibold text-foreground mb-3">Small Clinics & Nursing Homes</h3>
            <p className="text-muted-foreground">
              Cost-effective solutions with simplified maintenance and reliable supply chains perfect for smaller healthcare facilities.
            </p>
          </motion.div>

          <motion.div
            key="medium-hospital"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <h3 className="font-semibold text-foreground mb-3">Medium Hospitals</h3>
            <p className="text-muted-foreground">
              Balanced solutions combining comprehensive support with efficient operations for regional medical centers.
            </p>
          </motion.div>

          <motion.div
            key="large-hospital"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <h3 className="font-semibold text-foreground mb-3">Large Hospital Networks</h3>
            <p className="text-muted-foreground">
              Enterprise-level solutions with centralized management, volume discounts, and dedicated support teams.
            </p>
          </motion.div>

          <motion.div
            key="research-facility"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <h3 className="font-semibold text-foreground mb-3">Research & Teaching Facilities</h3>
            <p className="text-muted-foreground">
              Specialized support for advanced imaging applications in academic and research environments.
            </p>
          </motion.div>

          <motion.div
            key="veterinary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <h3 className="font-semibold text-foreground mb-3">Veterinary Hospitals</h3>
            <p className="text-muted-foreground">
              Specialized imaging solutions adapted for animal healthcare facilities and veterinary medical centers.
            </p>
          </motion.div>

          <motion.div
            key="mobile-unit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <h3 className="font-semibold text-foreground mb-3">Mobile & Field Units</h3>
            <p className="text-muted-foreground">
              Portable solutions and ruggedized supplies designed for field hospitals, disaster response, and mobile clinics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}