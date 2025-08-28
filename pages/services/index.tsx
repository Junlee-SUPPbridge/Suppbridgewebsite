import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Calculator, Users, Shield, Clock, Award } from 'lucide-react'
import Link from 'next/link'

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Product Testing',
      description: 'Comprehensive testing solutions for new products and innovations',
      icon: Calculator,
      features: [
        'User experience testing',
        'Performance validation',
        'Quality assurance testing',
        'Market readiness assessment'
      ],
      href: '/services/product-testing'
    },
    {
      title: 'Market Validation',
      description: 'Data-driven market research and validation services',
      icon: Shield,
      features: [
        'Customer research and surveys',
        'Competitive analysis',
        'Market size assessment',
        'Pricing strategy validation'
      ],
      href: '/services/market-validation'
    },
    {
      title: 'Innovation Consulting',
      description: 'Strategic guidance for innovative enterprises and startups',
      icon: Users,
      features: [
        'Business model validation',
        'Go-to-market strategy',
        'Innovation roadmap planning',
        'Risk assessment and mitigation'
      ],
      href: '/services/innovation-consulting'
    },
    {
      title: 'Startup Support',
      description: 'Comprehensive support for 0-1 innovative enterprises',
      icon: Award,
      features: [
        'Business plan development',
        'Funding strategy guidance',
        'Team building support',
        'Growth acceleration'
      ],
      href: '/services/startup-support'
    },
    {
      title: 'Prototype Development',
      description: 'Rapid prototyping and MVP development services',
      icon: Clock,
      features: [
        'Concept to prototype',
        'MVP development',
        'Iterative testing',
        'User feedback integration'
      ],
      href: '/services/prototype-development'
    },
    {
      title: 'Launch Support',
      description: 'End-to-end support for product launches',
      icon: CheckCircle,
      features: [
        'Launch strategy planning',
        'Marketing support',
        'Customer acquisition',
        'Post-launch optimization'
      ],
      href: '/services/launch-support'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Ideation',
      description: 'We begin by understanding your innovation concept and market opportunity'
    },
    {
      step: '02',
      title: 'Validation & Testing',
      description: 'Our experts validate your concept through market research and user testing'
    },
    {
      step: '03',
      title: 'Refinement & Optimization',
      description: 'We help refine your product based on feedback and market insights'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'We support your product launch and help accelerate market growth'
    }
  ]

  return (
    <Layout
      title="Our Services - SuppBridge"
      description="Professional bridge engineering services including design, analysis, consulting, and inspection. Expert solutions for infrastructure projects."
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
              Our Solutions
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for innovative enterprises and product testing needs. 
              From concept to market success, we support your innovation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <service.icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-secondary-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
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
              Our Innovation Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We follow a proven innovation methodology to ensure successful product development and market entry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Validate Your Innovation?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Let's explore how our solutions can help bring your innovative product to market. 
              Schedule a consultation with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Start Validation
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

export default ServicesPage
