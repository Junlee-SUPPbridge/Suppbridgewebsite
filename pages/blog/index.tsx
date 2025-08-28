import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'

const BlogPage: React.FC = () => {
  // 模拟博客文章数据
  const blogPosts = [
    {
      id: 1,
      title: 'Modern Bridge Design: Balancing Aesthetics and Functionality',
      excerpt: 'Explore how contemporary bridge design combines visual appeal with structural integrity, creating landmarks that serve both practical and aesthetic purposes.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Design',
      image: '/images/blog/bridge-design.jpg',
      slug: 'modern-bridge-design-balancing-aesthetics-functionality'
    },
    {
      id: 2,
      title: 'Sustainable Materials in Bridge Construction',
      excerpt: 'Discover innovative sustainable materials that are revolutionizing bridge construction while reducing environmental impact and maintenance costs.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Sustainability',
      image: '/images/blog/sustainable-materials.jpg',
      slug: 'sustainable-materials-bridge-construction'
    },
    {
      id: 3,
      title: 'Seismic Design Considerations for Bridge Structures',
      excerpt: 'Learn about critical seismic design principles and how they ensure bridge safety in earthquake-prone regions around the world.',
      author: 'Dr. James Wilson',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Engineering',
      image: '/images/blog/seismic-design.jpg',
      slug: 'seismic-design-considerations-bridge-structures'
    },
    {
      id: 4,
      title: 'The Future of Smart Bridges: IoT Integration',
      excerpt: 'Explore how Internet of Things technology is transforming bridge monitoring, maintenance, and safety through real-time data collection.',
      author: 'Lisa Thompson',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Technology',
      image: '/images/blog/smart-bridges.jpg',
      slug: 'future-smart-bridges-iot-integration'
    },
    {
      id: 5,
      title: 'Bridge Inspection Best Practices',
      excerpt: 'Comprehensive guide to bridge inspection methodologies, from visual assessment to advanced non-destructive testing techniques.',
      author: 'Robert Kim',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Inspection',
      image: '/images/blog/bridge-inspection.jpg',
      slug: 'bridge-inspection-best-practices'
    },
    {
      id: 6,
      title: 'Cost-Effective Bridge Rehabilitation Strategies',
      excerpt: 'Discover proven strategies for extending bridge lifespan and improving performance through cost-effective rehabilitation methods.',
      author: 'Dr. Emily Davis',
      date: '2023-12-15',
      readTime: '8 min read',
      category: 'Rehabilitation',
      image: '/images/blog/bridge-rehabilitation.jpg',
      slug: 'cost-effective-bridge-rehabilitation-strategies'
    }
  ]

  const categories = ['All', 'Design', 'Engineering', 'Sustainability', 'Technology', 'Inspection', 'Rehabilitation']

  return (
    <Layout
      title="Blog - SuppBridge"
      description="Stay updated with the latest insights in bridge engineering, design trends, and industry best practices from our expert team."
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
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest insights, trends, and best practices in bridge engineering 
              and infrastructure development from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-secondary-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-secondary text-lg px-8 py-4">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates in bridge engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage
