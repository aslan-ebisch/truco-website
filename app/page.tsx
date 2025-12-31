'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

// Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Services', 'Process', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
        isScrolled ? 'py-1 shadow-sm' : 'py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/truco-logo.svg"
            alt="TruCo Painting"
            className="h-32 w-auto -my-4"
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base text-gray-600 hover:text-black transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Desktop Schedule Button */}
        <motion.a
          href="https://form.jotform.com/253238851265057"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#004aad] text-white px-6 py-2 text-sm font-medium hover:bg-[#003580] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Estimate
        </motion.a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-gray-700 hover:text-[#004aad] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="https://form.jotform.com/253238851265057"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#004aad] text-white text-center px-6 py-3 font-medium hover:bg-[#003580] transition-colors"
            >
              Schedule Estimate
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for opacity effect */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-white text-sm font-medium tracking-[0.3em] uppercase">
            Professional Painting Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-6 text-white"
        >
          Quality in every coat.
          <br />
          <span className="text-[#3d8eff]">Lasting results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
        >
          TruCo Painting delivers professional interior and exterior painting services with attention to detail and a commitment to excellence. Transform your space with a team you can trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://form.jotform.com/253238851265057"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#004aad] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#003580] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SCHEDULE ESTIMATE
          </motion.a>
          <motion.a
            href="#gallery"
            className="border border-white/50 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW OUR WORK
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Stats Section
function Stats() {
  const stats = [
    { value: '26', label: 'Houses Painted' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: '24hr', label: 'Quote Response' },
  ];

  return (
    <section className="py-20 border-y border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#004aad] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
              <img
                src="/brayden-tricep.png"
                alt="TruCo Painting Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#004aad]/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#004aad]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#004aad] text-sm font-medium tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your trusted painting
              <br />
              <span className="text-gray-500">professionals.</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At TruCo Painting, we believe every home deserves a flawless finish. We&apos;re a full-service painting company dedicated to delivering exceptional results on every project, big or small.
              </p>
              <p>
                Our team combines skilled craftsmanship with premium materials to ensure your paint job looks beautiful and lasts for years. From initial consultation to final walkthrough, we handle every detail so you don&apos;t have to.
              </p>
              <p>
                We take pride in clear communication, honest pricing, and showing up when we say we will. When you work with TruCo, you&apos;re getting a team that treats your home with the care and respect it deserves.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-black/10">
              <div className="text-2xl font-bold">TruCo Painting</div>
              <div className="text-[#004aad] text-sm">Quality You Can Trust</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      title: 'Exterior Painting',
      description: 'Complete exterior transformations. Siding, trim, doors, shutters. Weather-resistant finishes that last.',
      icon: '01',
    },
    {
      title: 'Deck Finishing',
      description: 'Decks, fences, and pergolas. Proper prep, premium stains, and lasting protection for your outdoor wood.',
      icon: '02',
    },
    {
      title: 'Interior Painting',
      description: 'Walls, ceilings, trim, and doors. Clean lines, smooth finishes, and attention to detail in every room.',
      icon: '03',
    },
    {
      title: 'Pressure Washing',
      description: 'Thorough exterior cleaning to prep your home for paint. Remove dirt, mold, and grime for a flawless finish.',
      icon: '04',
    },
  ];

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#004aad] text-sm font-medium tracking-[0.3em] uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Complete painting solutions
            <br />
            <span className="text-gray-500">for your home.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white border border-black/10 hover:border-[#004aad]/50 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#004aad]/20 group-hover:text-[#004aad]/40 transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function Process() {
  const steps = [
    { step: '01', title: 'Contact', description: 'Reach out for a free estimate. We respond within 24 hours.' },
    { step: '02', title: 'Inspect', description: 'We visit your property, assess the scope, and provide a detailed quote.' },
    { step: '03', title: 'Prepare', description: 'Thorough prep work. Cleaning, sanding, priming. No shortcuts.' },
    { step: '04', title: 'Paint', description: 'Premium paints applied with precision. Multiple coats for lasting results.' },
    { step: '05', title: 'Perfect', description: 'Final walkthrough together. We don\'t leave until you\'re thrilled.' },
  ];

  return (
    <section id="process" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#004aad] text-sm font-medium tracking-[0.3em] uppercase">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Simple. Professional. Thorough.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="text-[#004aad] text-sm font-medium mb-2">{step.step}</div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
              <div className="hidden md:flex w-4 h-4 bg-[#004aad] rounded-full relative z-10" />
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const projects = [
    '/IMG_1164.JPG',
    '/pic1.PNG',
    '/pic2.PNG',
    '/pic3.jpg',
    '/pic4.PNG',
    '/pic5.png',
    '/IMG_1260.JPEG',
    '/IMG_1273.JPG',
    '/IMG_1355.JPG',
  ];

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  return (
    <>
      <section id="gallery" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#004aad] text-sm font-medium tracking-[0.3em] uppercase">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              See the TruCo difference.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedIndex(i)}
                className="group relative aspect-[4/3] bg-gray-200 overflow-hidden cursor-pointer"
              >
                <img
                  src={project}
                  alt="Completed painting project"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Navigation */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-[#004aad] transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <motion.img
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={projects[selectedIndex]}
            alt="Enlarged project photo"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedIndex + 1} / {projects.length}
          </div>
        </motion.div>
      )}
    </>
  );
}

// Testimonials Section
function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      quote: "They painted our entire bathroom in just a few hours. Looks great and the guys were super respectful of our space.",
      name: "Karen P.",
    },
    {
      quote: "Finally found painters who actually show up when they say they will! The bedroom looks perfect.",
      name: "Julie O.",
    },
    {
      quote: "Got three quotes and TruCo was the most reasonable. Happy we went with them.",
      name: "Amy T.",
    },
    {
      quote: "Did our deck and it turned out way better than expected. Neighbors keep asking who we used lol",
      name: "Michael R.",
    },
    {
      quote: "Quick, clean, no complaints. Will call them again for the garage.",
      name: "David S.",
    },
    {
      quote: "Wasn't sure about the color I picked but they helped me choose something better. Love it!",
      name: "Jennifer M.",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / 3);
  const currentTestimonials = testimonials.slice(currentPage * 3, currentPage * 3 + 3);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="testimonials" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#004aad] text-sm font-medium tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What our customers say.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, i) => (
              <motion.div
                key={`${currentPage}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 bg-gray-50 border border-black/10"
              >
                <div className="text-4xl text-[#004aad] mb-4">&ldquo;</div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="font-bold">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prevPage}
              className="w-12 h-12 border border-black/20 flex items-center justify-center hover:border-[#004aad] hover:text-[#004aad] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-sm text-gray-500">
              {currentPage + 1} / {totalPages}
            </div>
            <button
              onClick={nextPage}
              className="w-12 h-12 border border-black/20 flex items-center justify-center hover:border-[#004aad] hover:text-[#004aad] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#004aad] text-sm font-medium tracking-[0.3em] uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Have questions? Reach out.
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Want to talk through your project or have a specific question? Feel free to give me a call or send an email. I&apos;m happy to help however I can.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="p-8 bg-white border border-black/10">
            <div className="w-14 h-14 bg-[#004aad]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#004aad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-sm text-gray-500 mb-1">Call or text</div>
            <div className="font-bold text-lg">(417) 818-3616</div>
          </div>

          <div className="p-8 bg-white border border-black/10">
            <div className="w-14 h-14 bg-[#004aad]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#004aad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-sm text-gray-500 mb-1">Email</div>
            <div className="font-bold text-lg">info@trucopaint.com</div>
          </div>

          <div className="p-8 bg-white border border-black/10">
            <div className="w-14 h-14 bg-[#004aad]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#004aad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-sm text-gray-500 mb-1">Service area</div>
            <div className="font-bold text-lg">Springfield & surrounding</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-gray-500 mb-4">Ready to get started?</p>
          <motion.a
            href="https://form.jotform.com/253238851265057"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#004aad] text-white px-8 py-4 font-medium tracking-wide hover:bg-[#003580] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SCHEDULE YOUR ESTIMATE
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src="/truco-logo.svg"
            alt="TruCo Painting"
            className="h-12 w-auto"
          />
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TruCo Painting. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=61581862051113" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#004aad] transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
