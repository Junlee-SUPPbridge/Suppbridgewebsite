import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLocale } from '../hooks/useLocale'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const { t } = useLocale()
  const router = useRouter()
  const [activeId, setActiveId] = useState('')
  
  // 监听滚动，高亮当前可见的标题
  useEffect(() => {
    if (!headings || headings.length === 0) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 1.0
      }
    )
    
    // 观察所有标题元素
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })
    
    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])
  
  // 如果没有标题，不显示目录
  if (!headings || headings.length === 0) {
    return null
  }
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('blog.tableOfContents')}</h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{
                paddingLeft: `${(heading.level - 2) * 12}px`,
              }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth'
                  })
                  // 更新URL但不刷新页面
                  router.push(
                    router.pathname,
                    `${router.asPath.split('#')[0]}#${heading.id}`,
                    { shallow: true }
                  )
                }}
                className={`block py-1 border-l-2 pl-3 ${
                  activeId === heading.id
                    ? 'border-blue-500 text-blue-600 font-medium'
                    : 'border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}