import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PropertyCard } from './ui/PropertyCard';

const featuredProperties = [
  {
    id: '1',
    title: 'Villa de Lujo en La Eliana',
    price: 750000,
    location: 'La Eliana, Valencia',
    description: 'Espectacular villa con piscina y jardín',
    bedrooms: 5,
    bathrooms: 4,
    size: 450,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    tags: ['Piscina', 'Jardín', 'Garaje'],
    type: 'venta' as const,
    featured: true
  },
  {
    id: '2',
    title: 'Ático Moderno en Ciudad',
    price: 320000,
    location: 'Valencia Centro',
    description: 'Ático reformado con terraza panorámica',
    bedrooms: 3,
    bathrooms: 2,
    size: 120,
    images: ['https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    tags: ['Terraza', 'Reformado', 'Vistas'],
    type: 'venta' as const,
    featured: true
  },
  {
    id: '3',
    title: 'Chalet en Zona Residencial',
    price: 495000,
    location: 'Bétera, Valencia',
    description: 'Amplio chalet con zona deportiva',
    bedrooms: 4,
    bathrooms: 3,
    size: 300,
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    tags: ['Piscina', 'Jardín', 'Zona deportiva'],
    type: 'venta' as const,
    featured: true
  }
];

export function FeaturedProperties() {
  return (
    <section id="featured-properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Propiedades Destacadas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de propiedades más exclusivas en las mejores zonas de Valencia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} featured />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/propiedades"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Ver Todas las Propiedades
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}