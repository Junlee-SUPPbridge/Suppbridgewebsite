import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Target, Rocket, Shield, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Startup Acceleration',
      description: 'Comprehensive support for 0-1 innovative enterprises from ideation to market entry',
      icon: Rocket,
      features: [
        'Business model validation',
        'Market opportunity assessment',
        'Funding strategy development',
        'Team building and mentorship'
      ],
      benefits: [
        'Reduce time to market by 40%',
        'Increase funding success rate',
        'Build scalable business models',
        'Access to expert network'
      ],
      href: '/solutions/startup-acceleration'
    },
    {
      title: 'Product Validation',
      description: 'Data-driven approach to validate new products and market fit before full-scale launch',
      icon: Target,
      features: [
        'Customer research and surveys',
        'MVP testing and feedback',
        'Market size and demand analysis',
        'Competitive positioning'
      ],
      benefits: [
        'Validate market demand early',
        'Reduce development costs',
        'Improve product-market fit',
        'Accelerate user adoption'
      ],
      href: '/solutions/product-validation'
    },
    {
      title: 'Innovation Consulting',
      description: 'Strategic guidance for established companies looking to innovate and test new products',
      icon: TrendingUp,
      features: [
        'Innovation strategy development',
        'Product portfolio optimization',
        'Digital transformation support',
        'Risk assessment and mitigation'
      ],
      benefits: [
        'Stay ahead of competition',
        'Optimize innovation ROI',
        'Reduce innovation risks',
        'Accelerate growth'
      ],
      href: '/solutions/innovation-consulting'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Fast-track your product development with rapid prototyping and iterative testing',
      icon: Zap,
      features: [
        'Concept to prototype in weeks',
        'User experience testing',
        'Iterative design improvements',
        'Technical feasibility assessment'
      ],
      benefits: [
        'Test ideas quickly',
        'Get user feedback early',
        'Reduce development time',
        'Lower development costs'
      ],
      href: '/solutions/rapid-prototyping'
    }
  ]

  const successMetrics = [
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Of validated products reach market successfully'
    },
    {
      number: '6x',
      label: 'Faster Growth',
      description: 'Average growth acceleration for our clients'
    },
    {
      number: '40%',
      label: 'Cost Reduction',
      description: 'In product development and testing costs'
    },
    {
      number: '12 months',
      label: 'Time to Market',
      description: 'Average reduction in time to market'
    }
  ]

  return (
    <Layout
      title="Solutions - SuppBridge"
      description="Comprehensive solutions for 0-1 innovative enterprises and product testing needs. From ideation to market success."
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
              Innovation Solutions
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Tailored solutions for innovative enterprises and businesses looking to test new products. 
              We bridge the gap between innovation and market success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">What We Deliver:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-secondary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-secondary-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
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
              Proven Results
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our solutions have helped hundreds of innovative enterprises achieve market success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {metric.number}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-secondary-600">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures your innovation gets the support it needs to succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your innovation, goals, and market opportunity'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a customized roadmap for your innovation journey'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implement solutions with ongoing support and guidance'
              },
              {
                step: '04',
                title: 'Success',
                description: 'Achieve market success and sustainable growth'
              }
            ].map((step, index) => (
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
              Ready to Accelerate Your Innovation?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Let's discuss which solution is right for your innovation needs. 
              Our team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Get Started Today
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default SolutionsPage
