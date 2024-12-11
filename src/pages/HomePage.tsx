import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { PropertySearch } from '../components/ui/PropertySearch';
import { PropertyCategories } from '../components/PropertyCategories';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { About } from '../components/About';
import { BlogPreview } from '../components/BlogPreview';
import { ContactCallToAction } from '../components/ContactCallToAction';

const WaveDivider = ({ color = 'white', flip = false }) => (
  <div className={`absolute left-0 right-0 ${flip ? '-bottom-1' : '-top-1'} w-full overflow-hidden leading-0 transform ${flip ? 'rotate-180' : ''}`}>
    <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill={color} />
    </svg>
  </div>
);

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="relative bg-white">
        <PropertySearch />
        <PropertyCategories />
      </div>
      
      <div className="relative bg-gray-50">
        <WaveDivider color="#f9fafb" />
        <FeaturedProperties />
        <WaveDivider color="#f9fafb" flip />
      </div>

      <div className="relative bg-white">
        <WaveDivider color="#ffffff" />
        <Services />
        <WaveDivider color="#ffffff" flip />
      </div>

      <div className="relative bg-orange-600">
        <WaveDivider color="#ea580c" />
        <Testimonials />
        <WaveDivider color="#ea580c" flip />
      </div>

      <div className="relative bg-gray-50">
        <WaveDivider color="#f9fafb" />
        <WhyChooseUs />
        <WaveDivider color="#f9fafb" flip />
      </div>

      <div className="relative bg-white">
        <WaveDivider color="#ffffff" />
        <About />
        <WaveDivider color="#ffffff" flip />
      </div>

      <div className="relative bg-gray-50">
        <WaveDivider color="#f9fafb" />
        <BlogPreview />
        <WaveDivider color="#f9fafb" flip />
      </div>

      <div className="relative bg-orange-600">
        <WaveDivider color="#ea580c" />
        <ContactCallToAction />
      </div>
    </motion.div>
  );
}