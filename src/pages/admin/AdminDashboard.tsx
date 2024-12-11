import React from 'react';
import { Link } from 'react-router-dom';
import { Building, FileText, Plus } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Propiedades</h2>
              <Building className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-gray-600 mb-4">Gestiona las propiedades disponibles</p>
            <div className="space-y-2">
              <Link
                to="/admin/properties/new"
                className="flex items-center text-orange-600 hover:text-orange-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nueva Propiedad
              </Link>
              <Link
                to="/admin/properties"
                className="block text-gray-600 hover:text-gray-700"
              >
                Ver todas las propiedades
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Blog</h2>
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-gray-600 mb-4">Gestiona los artículos del blog</p>
            <div className="space-y-2">
              <Link
                to="/admin/blog/new"
                className="flex items-center text-orange-600 hover:text-orange-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Artículo
              </Link>
              <Link
                to="/admin/blog"
                className="block text-gray-600 hover:text-gray-700"
              >
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}