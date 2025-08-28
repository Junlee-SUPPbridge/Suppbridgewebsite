import React from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Innovation Support',
      description: 'Dedicated support for 0-1 innovative enterprises and startups'
    },
    {
      icon: Award,
      title: 'Market Validation',
      description: 'Proven methodologies for testing new products and market fit'
    },
    {
      icon: Clock,
      title: 'Rapid Testing',
      description: 'Quick turnaround times for product testing and validation'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Strategic guidance to minimize risks in new product launches'
    }
  ]

  const services = [
    {
      title: 'Product Testing',
      description: 'Comprehensive testing solutions for new products and innovations',
      image: '/images/product-testing.jpg'
    },
    {
      title: 'Market Validation',
      description: 'Data-driven market research and validation services',
      image: '/images/market-validation.jpg'
    },
    {
      title: 'Innovation Consulting',
      description: 'Strategic guidance for innovative enterprises and startups',
      image: '/images/innovation-consulting.jpg'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6">
              Empowering
              <span className="text-gradient block">Innovation</span>
              & Growth
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Supporting 0-1 innovative enterprises and helping businesses test new products with confidence. 
              We bridge the gap between innovation and market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary text-lg px-8 py-4">
                Explore Solutions
                <ArrowRight className="ml-2 inline" size={20} />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Testing
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Why Choose SuppBridge?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We specialize in supporting innovative enterprises from concept to market success, with proven methodologies for product validation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-soft transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive solutions for innovative enterprises and product testing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {service.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
                          <Link href="/services" className="btn-primary text-lg px-8 py-4">
                View All Solutions
                <ArrowRight className="ml-2 inline" size={20} />
              </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Test Your Innovation?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Let's discuss how we can help validate your new product and bring your innovation to market. 
              Get in touch with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Start Testing Now
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
