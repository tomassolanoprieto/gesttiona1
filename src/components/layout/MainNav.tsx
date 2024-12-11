import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from '../../data/contact';
import { images } from '../../lib/images';

export function MainNav() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        if (currentScrollY > heroHeight) {
          setIsVisible(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
        }}
        transition={{ 
          y: { type: "tween", duration: 0.3 }
        }}
        className="fixed w-full z-50 bg-black/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-12 lg:px-16">
          <div className="flex justify-between items-center h-28">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/"
                  className={`text-white hover:text-orange-400 transition-colors text-lg ${isActive('/') ? 'text-orange-400' : ''}`}
                >
                  Inicio
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/propiedades"
                  className={`text-white hover:text-orange-400 transition-colors text-lg ${isActive('/propiedades') ? 'text-orange-400' : ''}`}
                >
                  Propiedades
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/servicios"
                  className={`text-white hover:text-orange-400 transition-colors text-lg ${isActive('/servicios') ? 'text-orange-400' : ''}`}
                >
                  Servicios
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/nosotros"
                  className={`text-white hover:text-orange-400 transition-colors text-lg ${isActive('/nosotros') ? 'text-orange-400' : ''}`}
                >
                  Nosotros
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Center Logo */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <motion.img 
                src={images.logo}
                alt="Gesttiona"
                className="h-28"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              />
            </Link>

            {/* Right Section */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/blog"
                  className={`text-white hover:text-orange-400 transition-colors text-lg ${isActive('/blog') ? 'text-orange-400' : ''}`}
                >
                  Blog
                </Link>
              </motion.div>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-white hover:text-orange-400 transition-colors"
              >
                <span className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {contactInfo.phone}
                </span>
              </a>
              <Link
                to="/contacto"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/80 backdrop-blur-sm"
            >
              <nav className="container mx-auto px-8 py-6">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className={`block text-white hover:text-orange-400 transition-colors text-lg ${isActive('/') ? 'text-orange-400' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/propiedades"
                      className={`block text-white hover:text-orange-400 transition-colors text-lg ${isActive('/propiedades') ? 'text-orange-400' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Propiedades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios"
                      className={`block text-white hover:text-orange-400 transition-colors text-lg ${isActive('/servicios') ? 'text-orange-400' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/nosotros"
                      className={`block text-white hover:text-orange-400 transition-colors text-lg ${isActive('/nosotros') ? 'text-orange-400' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className={`block text-white hover:text-orange-400 transition-colors text-lg ${isActive('/blog') ? 'text-orange-400' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contacto"
                      className={`block text-white hover:text-orange-400 transition-colors text-lg ${isActive('/contacto') ? 'text-orange-400' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}