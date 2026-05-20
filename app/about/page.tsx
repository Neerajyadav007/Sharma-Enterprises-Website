'use client';
import Link from 'next/link';
import { MedicalHeader, MedicalFooter } from '../components';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <AboutHero />
      <AboutStory />
      <MissionValues />
      <HistoryTimeline />
      <TeamSection />
      <MedicalFooter />
    </main>
  );
}

// About Hero
function AboutHero() {
  return (
    <section className="relative pt-20 pb-24 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Our Journey in Healthcare Imaging Excellence
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            For over three decades, Sharma Enterprises has been at the forefront of providing reliable diagnostic imaging solutions to healthcare facilities across India.
          </p>
        </div>
      </div>
    </section>
  );
}

// About Story
function AboutStory() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            key="story"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground">
              Founded in 1992 by a team of dedicated healthcare technology professionals, Sharma Enterprises began with a simple mission: to provide reliable, high-quality diagnostic imaging solutions to hospitals and medical facilities that needed them most.
            </p>
            <p className="text-muted-foreground">
              What started as a small service provider in Jaipur has grown into a trusted partner for over 500 healthcare institutions nationwide. Our journey has been defined by our unwavering commitment to quality, technical excellence, and genuine partnership with our clients.
            </p>
          </motion.div>

          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="flex items-center space-x-4 p-4 medical-card">
              <div className="h-10 w-10 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">32+</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Years of Experience</h3>
                <p className="text-muted-foreground text-sm">Serving healthcare since 1992</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 medical-card">
              <div className="h-10 w-10 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">500+</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Healthcare Partners</h3>
                <p className="text-muted-foreground text-sm">Hospitals, clinics, and diagnostic centers</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 medical-card">
              <div className="h-10 w-10 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">98%</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Customer Satisfaction</h3>
                <p className="text-muted-foreground text-sm">Based on client feedback and retention</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 medical-card">
              <div className="h-10 w-10 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">24/7</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Support Availability</h3>
                <p className="text-muted-foreground text-sm">Round-the-clock technical assistance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Mission & Values
function MissionValues() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          Our Mission & Values
        </h2>
        <div className="grid gap-12 sm:grid-cols-2">
          <motion.div
            key="mission"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 medical-card"
          >
            <h3 className="font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower healthcare facilities with reliable, cutting-edge diagnostic imaging solutions that enhance patient care, improve diagnostic accuracy, and support medical professionals in their life-saving work.
            </p>
          </motion.div>

          <motion.div
            key="values"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground mb-4">Our Core Values</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                  <span className="text-medical-blue">🎯</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Excellence</h4>
                  <p className="text-muted-foreground text-sm">
                    Delivering the highest quality products and services in every interaction
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                  <span className="text-medical-blue">🤝</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Integrity</h4>
                  <p className="text-muted-foreground text-sm">
                    Building trust through transparency, honesty, and ethical practices
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                  <span className="text-medical-blue">💡</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Innovation</h4>
                  <p className="text-muted-foreground text-sm">
                    Continuously adopting new technologies to better serve our clients
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 flex items-center justify-center bg-medical-blue/10 rounded-lg shrink-0">
                  <span className="text-medical-blue">🏥</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Healthcare Focus</h4>
                  <p className="text-muted-foreground text-sm">
                    Dedicated exclusively to serving the medical imaging community
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// History Timeline
function HistoryTimeline() {
  const milestones = [
    { year: '1992', title: 'Company Founded', description: 'Established in Jaipur with a vision to provide quality imaging solutions' },
    { year: '2000', title: 'Expanded Service Range', description: 'Added technical support and maintenance services to complement product offerings' },
    { year: '2008', title: 'National Presence', description: 'Expanded service network to cover major cities across India' },
    { year: '2015', title: 'Digital Transformation', description: 'Implemented digital solutions for better service tracking and customer management' },
    { year: '2020', title: 'COVID-19 Response', description: 'Provided critical support to healthcare facilities during the pandemic' },
    { year: '2024', title: '32 Years Milestone', description: 'Celebrating three decades of service excellence and innovation' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          Our Evolution Over Three Decades
        </h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 flex items-center justify-center bg-medical-blue rounded-lg text-white font-bold">
                  {milestone.year}
                </div>
              </div>
              <div className="flex-1 ml-6 space-y-2">
                <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Founder & Chairman',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    {
      name: 'Priya Sharma',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Chief Technical Officer',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200',
    },
    {
      name: 'Sunita Reddy',
      role: 'Head of Customer Service',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200',
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          Our Leadership Team
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          Experienced professionals dedicated to advancing healthcare imaging solutions
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="relative h-36 w-36 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full rounded-full object-cover border-4 border-medical-blue/20"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-medical-blue/90 text-white text-sm px-2 py-1 rounded">
                  {member.role}
                </div>
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}