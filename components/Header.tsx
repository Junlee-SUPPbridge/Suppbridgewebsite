import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocale } from '../hooks/useLocale';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:info@suppbridge.com" className="text-gray-600 hover:text-primary-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info@suppbridge.com
            </a>
            <a href="tel:+8618573103006" className="text-gray-600 hover:text-primary-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +86 18573103006
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com/suppbridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a href="https://twitter.com/suppbridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/suppbridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className={`py-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold">
                <span className="text-primary-600">Supp</span>
                <span className="text-secondary-600">Bridge</span>
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`text-gray-800 hover:text-primary-600 font-medium ${router.pathname === '/' ? 'text-primary-600' : ''}`}>
                {t('navigation.home')}
              </span>
            </Link>
            <Link href="/about">
              <span className={`text-gray-800 hover:text-primary-600 font-medium ${router.pathname === '/about' ? 'text-primary-600' : ''}`}>
                {t('navigation.about')}
              </span>
            </Link>
            <Link href="/services">
              <span className={`text-gray-800 hover:text-primary-600 font-medium ${router.pathname === '/services' ? 'text-primary-600' : ''}`}>
                {t('navigation.services')}
              </span>
            </Link>
            <Link href="/blog">
              <span className={`text-gray-800 hover:text-primary-600 font-medium ${router.pathname === '/blog' ? 'text-primary-600' : ''}`}>
                {t('navigation.blog')}
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-gray-800 hover:text-primary-600 font-medium ${router.pathname === '/contact' ? 'text-primary-600' : ''}`}>
                {t('navigation.contact')}
              </span>
            </Link>
            <LanguageSwitcher />
            <Link href="/contact">
              <span className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
                {t('navigation.getStarted')}
              </span>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button 
              onClick={toggleMobileMenu}
              className="ml-4 text-gray-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="/">
                <span 
                  className={`block py-2 px-4 ${router.pathname === '/' ? 'text-primary-600 bg-gray-100' : 'text-gray-800'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.home')}
                </span>
              </Link>
              <Link href="/about">
                <span 
                  className={`block py-2 px-4 ${router.pathname === '/about' ? 'text-primary-600 bg-gray-100' : 'text-gray-800'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.about')}
                </span>
              </Link>
              <Link href="/services">
                <span 
                  className={`block py-2 px-4 ${router.pathname === '/services' ? 'text-primary-600 bg-gray-100' : 'text-gray-800'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.services')}
                </span>
              </Link>
              <Link href="/blog">
                <span 
                  className={`block py-2 px-4 ${router.pathname === '/blog' ? 'text-primary-600 bg-gray-100' : 'text-gray-800'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.blog')}
                </span>
              </Link>
              <Link href="/contact">
                <span 
                  className={`block py-2 px-4 ${router.pathname === '/contact' ? 'text-primary-600 bg-gray-100' : 'text-gray-800'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.contact')}
                </span>
              </Link>
              <Link href="/contact">
                <span 
                  className="block py-2 px-4 bg-primary-600 text-white text-center rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.getStarted')}
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;