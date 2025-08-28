import { useLocale } from '../hooks/useLocale'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const { t } = useLocale()
  
  // 确保在客户端环境中运行
  const fullUrl = typeof window !== 'undefined' ? url : ''
  
  const shareLinks = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      color: 'text-blue-400 hover:text-blue-500',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      color: 'text-blue-600 hover:text-blue-700',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
        </svg>
      ),
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`,
      color: 'text-blue-700 hover:text-blue-800',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M20.11 3.89C17.94 1.71 15.01 0.5 11.95 0.5C5.63 0.5 0.5 5.63 0.5 11.95C0.5 13.96 1.01 15.94 1.98 17.65L0.5 23.5L6.35 22.02C8.06 22.99 10.04 23.5 12.05 23.5H12.05C18.37 23.5 23.5 18.37 23.5 12.05C23.5 8.99 22.29 6.06 20.11 3.89ZM11.95 21.65C10.15 21.65 8.35 21.16 6.83 20.22L6.49 20.02L2.92 20.84L3.74 17.27L3.54 16.93C2.6 15.41 2.11 13.61 2.11 11.81C2.11 6.52 6.52 2.11 11.81 2.11C14.35 2.11 16.76 3.12 18.55 4.91C20.34 6.7 21.35 9.11 21.35 11.65C21.49 16.94 17.08 21.65 11.95 21.65ZM17.22 14.31C16.9 14.17 15.46 13.46 15.18 13.32C14.9 13.18 14.62 13.18 14.34 13.46C14.06 13.74 13.5 14.45 13.22 14.73C12.94 15.01 12.8 15.01 12.48 14.87C11.12 14.17 10.25 13.6 9.38 12.1C9.1 11.68 9.66 11.68 10.11 10.78C10.25 10.5 10.11 10.36 10.01 10.22C9.91 10.08 9.38 8.64 9.1 8.08C8.82 7.52 8.54 7.52 8.26 7.52C7.98 7.52 7.7 7.52 7.42 7.52C7.14 7.52 6.72 7.66 6.44 8.08C6.16 8.5 5.35 9.21 5.35 10.65C5.35 12.09 6.44 13.53 6.58 13.81C6.72 14.09 9.38 18.21 13.5 19.93C15.88 21.09 16.76 21.09 17.78 20.95C18.8 20.81 19.96 20.1 20.24 19.4C20.52 18.7 20.52 18.14 20.38 18C20.38 17.86 20.1 17.72 17.22 14.31Z" clipRule="evenodd" />
        </svg>
      ),
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${fullUrl}`)}`,
      color: 'text-green-500 hover:text-green-600',
    },
  ]
  
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('blog.shareThis')}</h3>
      <div className="flex space-x-4">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} transition-colors duration-200`}
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
        
        {/* 复制链接按钮 */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(fullUrl)
            // 可以添加一个提示，表示链接已复制
          }}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          aria-label="Copy link"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
          </svg>
          <span className="sr-only">{t('blog.copyLink')}</span>
        </button>
      </div>
    </div>
  )
}