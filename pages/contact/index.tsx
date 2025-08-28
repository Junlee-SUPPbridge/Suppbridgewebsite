import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react'

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message anytime',
      contact: 'info@suppbridge.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our experts',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant support',
      contact: 'Available 24/7',
      action: 'Start Chat'
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Main Office',
      description: '123 Innovation Street, Tech City, TC 12345'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
    }
  ]

  return (
    <Layout
      title="Contact Us - SuppBridge"
      description="Get in touch with our team to discuss your innovation needs and start testing your new products. We're here to support your success."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
              Let's Discuss Your Innovation
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to validate your new product or get support for your innovative enterprise? 
              Our expert team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl border border-secondary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {method.description}
                </p>
                <p className="text-lg font-medium text-primary-600 mb-4">
                  {method.contact}
                </p>
                <button className="btn-primary">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="product-testing">Product Testing</option>
                    <option value="market-validation">Market Validation</option>
                    <option value="innovation-consulting">Innovation Consulting</option>
                    <option value="startup-support">Startup Support</option>
                    <option value="prototype-development">Prototype Development</option>
                    <option value="launch-support">Launch Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Tell Us About Your Innovation *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Describe your innovation, what you're looking to achieve, and how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Send Message
                  <ArrowRight className="ml-2 inline" size={20} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Whether you're a startup with a groundbreaking idea or an established company looking to test new products, 
                we're here to support your innovation journey. Let's discuss how we can help bring your vision to life.
              </p>

              <div className="space-y-6 mb-8">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-secondary-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border border-secondary-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  Why Choose SuppBridge?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-600">Specialized in 0-1 innovation support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-600">Proven methodologies for product validation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-600">Rapid turnaround times for testing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-600">Expert team with startup experience</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
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
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Don't wait to bring your innovative ideas to market. Our team is ready to help you validate, 
              test, and launch your next big thing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Download Innovation Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
