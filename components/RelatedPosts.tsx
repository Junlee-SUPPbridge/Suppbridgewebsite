import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '../lib/utils'

interface Post {
  id: string
  slug: string
  title: string
  title_zh?: string
  title_es?: string
  summary?: string
  summary_zh?: string
  summary_es?: string
  date: string
  cover?: string
  tags?: string[]
}

interface RelatedPostsProps {
  posts: Post[]
  locale: string
}

export default function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        // 根据当前语言选择正确的标题和摘要
        const title = locale === 'zh' ? post.title_zh || post.title : 
                     locale === 'es' ? post.title_es || post.title : post.title
        
        const summary = locale === 'zh' ? post.summary_zh || post.summary : 
                       locale === 'es' ? post.summary_es || post.summary : post.summary
        
        return (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <a className="group">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md">
                {post.cover && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {title}
                  </h3>
                  {summary && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {summary}
                    </p>
                  )}
                  <div className="text-xs text-gray-500">
                    {formatDate(post.date, locale)}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}