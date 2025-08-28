import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useLocale } from '../hooks/useLocale';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'SuppBridge - Premium Nutrition Supplement Solutions',
  description = 'SuppBridge offers high-quality nutrition supplement manufacturing, packaging, and branding solutions for businesses worldwide.'
}) => {
  const { t } = useLocale();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;