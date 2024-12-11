import React, { useEffect, useState } from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { PropertySearch } from '../components/ui/PropertySearch';
import { PropertyCard } from '../components/ui/PropertyCard';
import { getProperties } from '../lib/cms';
import type { Property } from '../types/property';

export function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      const fetchedProperties = await getProperties();
      setProperties(fetchedProperties);
      setLoading(false);
    };

    loadProperties();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-16">Loading...</div>;
  }

  return (
    <div>
      <HeroSection
        title="Descubre Tu Próximo Hogar"
        subtitle="Explora nuestra selección de propiedades exclusivas en las mejores zonas de Valencia"
        backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <div className="container mx-auto px-4">
        <PropertySearch />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}