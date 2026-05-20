'use client';
import Link from 'next/link';
import { MedicalHeader, MedicalFooter } from '../components';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MedicalHeader />
      <ProductsHero />
      <ProductCategories />
      <FeaturedProducts />
      <MedicalFooter />
    </main>
  );
}

// Products Hero
function ProductsHero() {
  return (
    <section className="relative pt-20 pb-24 medical-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="display-3 text-white mb-6">
            Premium Diagnostic Imaging Films & Supplies
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            High-quality medical imaging films, consumables, and accessories from trusted manufacturers to ensure clear, reliable diagnostic images for optimal patient care.
          </p>
        </div>
      </div>
    </section>
  );
}

// Product Categories
function ProductCategories() {
  const categories = [
    {
      title: 'X-Ray Films',
      description: 'High-resolution films for general radiography, dental imaging, and specialized applications',
      icon: '📻',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
    },
    {
      title: 'CT Scan Films',
      description: 'Specialized films for computed tomography imaging with exceptional detail reproduction',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1581090700227-48b00a1d93e3?w=400',
    },
    {
      title: 'MRI Films',
      description: 'Premium films for magnetic resonance imaging with superior contrast and clarity',
      icon: '🧲',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    },
    {
      title: 'Ultrasound Supplies',
      description: 'Gels, probes, and accessories for diagnostic ultrasound procedures',
      icon: '💧',
      image: 'https://images.unsplash.com/photo-1590340436969-287eef4165b5?w=400',
    },
    {
      title: 'Mammography Films',
      description: 'High-detail films specifically designed for breast cancer screening and diagnosis',
      icon: '🎗️',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba99aef?w=400',
    },
    {
      title: 'Dental Imaging Films',
      description: 'Intraoral and extraoral films for dental radiography and orthodontic applications',
      icon: '🦷',
      image: 'https://images.unsplash.com/photo-1590558293071-89299a907973?w=400',
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Product Range
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Comprehensive selection of diagnostic imaging films and supplies to meet diverse healthcare facility needs.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Products
function FeaturedProducts() {
  const products = [
    {
      name: 'Kodak MIN-R 2000',
      type: 'X-Ray Film',
      description: 'High-speed panoramic film for dental imaging with excellent detail reproduction',
      features: [
        'High D-max for superior image quality',
        'Excellent latitude for exposure flexibility',
        'Compatible with most dental X-ray units',
        'Available in various sizes'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300',
    },
    {
      name: 'Fujifilm FCR PRIMA',
      type: 'CR Imaging Plate',
      description: 'Computed radiography imaging plate for digital X-ray systems',
      features: [
        'High sensitivity for reduced patient dose',
        'Excellent spatial resolution',
        'Durable construction for long-term use',
        'Compatible with Fujifilm FCR systems'
      ],
      image: 'https://images.unsplash.com/photo-1581090700227-48b00a1d93e3?w=300',
    },
    {
      name: 'Agfa HealthCare MRI Film',
      type: 'MRI Film',
      description: 'High-detail film for magnetic resonance imaging applications',
      features: [
        'Superior contrast resolution',
        'Excellent spatial detail',
        'Consistent quality and performance',
        'Optimized for 1.5T and 3T MRI systems'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300',
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Selected premium products known for their quality, reliability, and performance in clinical environments.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 medical-card hover:medical-glow transition-all duration-300"
            >
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-3">{product.type}</p>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {product.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-medical-blue hover:text-medical-blue/80"
              >
                View Details
                <span className="material-icons ml-1">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}