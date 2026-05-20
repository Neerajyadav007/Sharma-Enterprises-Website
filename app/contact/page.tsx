'use client';
import Link from 'next/link';
import { MedicalHeader, MedicalFooter } from '../components';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MedicalFooter />
    </main>
  );
}

// Contact Hero
function ContactHero() {
  return (
    <section className="relative pt-20 pb-24 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Get in Touch with Our Expert Team
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to help you with your healthcare imaging needs. Whether you have questions about our services, need technical support, or want to request a quote, our team is ready to assist.
          </p>
        </div>
      </div>
    </section>
  );
}

// Contact Info
function ContactInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contact Information
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Multiple ways to reach Sharma Enterprises for inquiries, support, or service requests.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            key="office"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">🏢</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Office Address</h3>
                <p className="text-muted-foreground">
                  59, Sharma Enterprises, Gandhi Nagar Tonk Road, Jaipur-302015 (Rajasthan)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="phone"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone Numbers</h3>
                <p className="text-muted-foreground">
                  978395727 / 931931332
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Available 24/7 for emergency support
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="whatsapp"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">💬</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground">
                  Send us a message for quick inquiries
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Click to chat: +91 978395727
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="email"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: -20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">📧</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">
                  info@sharmaenterprises.com
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  For general inquiries and service requests
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="hours"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: -20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">🕐</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM IST
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Emergency support available 24/7
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="map"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: -20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-6 medical-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 flex items-center justify-center bg-medical-blue/10 rounded-lg">
                <span className="text-medical-blue">🗺️</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">
                  View our location on Google Maps
                </p>
              </div>
            </div>
            <div className="mt-3">
              <a
                href="https://maps.google.com/?q=59,+Sharma+Enterprises,+Gandhi+Nagar+Tonk+Road,+Jaipur-302015+(Rajasthan)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-medical-blue hover:text-medical-blue/80"
              >
                View on Map
                <span className="material-icons ml-1">open_in_new</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact Form
function ContactForm() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Send Us a Message
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 medical-card"
        >
          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-medical-blue focus:border-medical-blue/50 sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-medical-blue focus:border-medical-blue/50 sm:text-base"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-medical-blue focus:border-medical-blue/50 sm:text-base"
                placeholder="Enter your phone number"
              />
              </div>
            <div>
              <label htmlFor="facility" className="block text-sm font-medium text-foreground mb-2">
                Healthcare Facility / Organization
              </label>
              <input
                type="text"
                id="facility"
                name="facility"
                className="w-full px-4 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-medical-blue focus:border-medical-blue/50 sm:text-base"
                placeholder="Enter your facility name"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-medical-blue focus:border-medical-blue/50 sm:text-base"
              >
                <option value="">Select a service</option>
                <option value="printer-installation">Medical Printer Installation</option>
                <option value="film-supply">Diagnostic Imaging Film Supply</option>
                <option value="technical-support">Technical Support & Maintenance</option>
                <option value="equipment-solutions">Imaging Equipment Solutions</option>
                <option value="other">Other Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-medical-blue focus:border-medical-blue/50 sm:text-base"
                placeholder="How can we help you today?"
              />
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-medical-blue text-white font-medium rounded-md hover:bg-medical-blue/90 transition-colors duration-300 flex items-center gap-2"
              >
                Send Message
                <span className="material-icons">send</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}