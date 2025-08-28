import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  image?: string
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'SuppBridge - Professional Bridge Solutions',
  description = 'Professional bridge engineering and consulting services for infrastructure projects worldwide.',
  image = '/og-image.jpg'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
