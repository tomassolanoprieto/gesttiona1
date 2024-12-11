import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { Services } from '../components/Services';
import { BuyingSellingProcess } from '../components/BuyingSellingSectionProcess';

export function ServicesPage() {
  return (
    <div>
      <HeroSection
        title="Nuestros Servicios"
        subtitle="Soluciones inmobiliarias integrales adaptadas a tus necesidades"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <Services />
      <BuyingSellingProcess />
    </div>
  );
}