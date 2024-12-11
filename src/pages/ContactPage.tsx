import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Building2, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { contactInfo } from '../data/contact';
import { HeroSection } from '../components/ui/HeroSection';

const contactMethods = [
  {
    icon: Phone,
    title: 'Llámanos',
    description: 'Disponibles para atenderte en horario de oficina',
    action: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    color: 'bg-blue-50'
  },
  {
    icon: Mail,
    title: 'Escríbenos',
    description: 'Te responderemos lo antes posible',
    action: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: 'bg-green-50'
  },
  {
    icon: MapPin,
    title: 'Visítanos',
    description: 'Ven a conocernos personalmente',
    action: contactInfo.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
    color: 'bg-purple-50'
  }
];

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contacta con Nosotros"
        subtitle="Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de expertos"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Building2 className="w-6 h-6 text-orange-600" />
                </div>
                <h1 className="text-3xl font-bold">Gesttiona Inmobiliaria</h1>
              </div>

              <p className="text-lg text-gray-600">
                Estamos comprometidos en ayudarte a encontrar la propiedad perfecta. 
                Nuestro equipo de expertos está disponible para responder todas tus preguntas.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.icon === MapPin ? '_blank' : undefined}
                    rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className={`${method.color} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-full">
                        <method.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{method.description}</p>
                        <div className="flex items-center text-orange-600 font-medium">
                          {method.action}
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-600" />
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Atención al Cliente: {contactInfo.officeHours}</p>
                  <p>Horario de Oficina: {contactInfo.businessHours}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}