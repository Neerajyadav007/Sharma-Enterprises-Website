'use client';
import Link from 'next/link';
import { useState } from 'react';

export function MedicalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-medical-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">SE</span>
            </div>
            <span className="font-bold text-foreground">Sharma Enterprises</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</Link>
            <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Services</Link>
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Products</Link>
            <Link href="/industries" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Industries</Link>
            <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Portfolio</Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Support</Link>
            <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-medical-blue text-white text-sm font-medium hover:bg-medical-blue/90 transition-colors">Contact Us</Link>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-foreground"></span>
              <span className="block h-0.5 w-5 bg-foreground"></span>
              <span className="block h-0.5 w-5 bg-foreground"></span>
            </div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Link href="/" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-muted-foreground hover:text-foreground">About</Link>
            <Link href="/services" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Services</Link>
            <Link href="/products" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Products</Link>
            <Link href="/industries" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Industries</Link>
            <Link href="/portfolio" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Portfolio</Link>
            <Link href="/support" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Support</Link>
            <Link href="/contact" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export function MedicalFooter() {
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
              We&apos;re committed to providing reliable, professional imaging solutions that healthcare providers can trust.
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
