/**
 * 格式化日期
 * @param dateString ISO日期字符串
 * @param locale 语言环境
 * @returns 格式化后的日期字符串
 */
export function formatDate(dateString: string, locale: string = 'en'): string {
  const date = new Date(dateString)
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  
  return date.toLocaleDateString(
    locale === 'zh' ? 'zh-CN' : 
    locale === 'es' ? 'es-ES' : 'en-US',
    options
  )
}

/**
 * 计算阅读时间
 * @param content 文章内容
 * @returns 阅读时间（分钟）
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * 从HTML内容中提取标题
 * @param content HTML内容
 * @returns 标题数组
 */
export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /<h([2-6])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h\1>/g
  const headings = []
  let match
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1], 10)
    const id = match[2]
    // 移除HTML标签获取纯文本
    const text = match[3].replace(/<[^>]*>/g, '')
    
    headings.push({ id, text, level })
  }
  
  return headings
}

/**
 * 生成唯一ID
 * @returns 唯一ID字符串
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * 截断文本
 * @param text 原始文本
 * @param maxLength 最大长度
 * @returns 截断后的文本
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * 从URL中获取slug
 * @param url URL字符串
 * @returns slug字符串
 */
export function getSlugFromUrl(url: string): string {
  const parts = url.split('/')
  return parts[parts.length - 1]
}

/**
 * 检查是否为移动设备
 * @returns 是否为移动设备
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/**
 * 防抖函数
 * @param func 要执行的函数
 * @param wait 等待时间（毫秒）
 * @returns 防抖处理后的函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}