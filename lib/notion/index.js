const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');

// 初始化Notion客户端
let notionClient = null;
let n2m = null;

/**
 * 初始化Notion客户端
 */
function initNotionClient() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error('NOTION_API_KEY is not defined in environment variables');
  }
  
  notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
  });
  
  n2m = new NotionToMarkdown({ notionClient });
}

/**
 * 获取博客文章列表
 * @param {string} locale - 语言代码 (en, zh, es)
 * @returns {Promise<Array>} - 博客文章列表
 */
async function getBlogPosts(locale = 'en') {
  if (!notionClient) {
    initNotionClient();
  }
  
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not defined in environment variables');
  }
  
  try {
    // 查询数据库
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'PublishedDate',
          direction: 'descending',
        },
      ],
    });
    
    // 处理结果
    const posts = await Promise.all(
      response.results.map(async (page) => {
        // 获取页面属性
        const properties = page.properties;
        
        // 获取标题
        const titleKey = locale === 'en' ? 'Title' : locale === 'zh' ? 'Title_ZH' : 'Title_ES';
        const title = properties[titleKey]?.title?.[0]?.plain_text || properties['Title']?.title?.[0]?.plain_text || 'Untitled';
        
        // 获取摘要
        const excerptKey = locale === 'en' ? 'Excerpt' : locale === 'zh' ? 'Excerpt_ZH' : 'Excerpt_ES';
        const excerpt = properties[excerptKey]?.rich_text?.[0]?.plain_text || properties['Excerpt']?.rich_text?.[0]?.plain_text || '';
        
        // 获取封面图片
        const coverImage = page.cover?.external?.url || page.cover?.file?.url || '/images/blog/default-cover.jpg';
        
        // 获取发布日期
        const publishedDate = properties['PublishedDate']?.date?.start || new Date().toISOString().split('T')[0];
        
        // 获取标签
        const tags = properties['Tags']?.multi_select?.map(tag => tag.name) || [];
        
        // 获取Slug
        const slug = properties['Slug']?.rich_text?.[0]?.plain_text || page.id;
        
        return {
          id: page.id,
          title,
          excerpt,
          coverImage,
          publishedDate,
          tags,
          slug,
        };
      })
    );
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts from Notion:', error);
    return [];
  }
}

/**
 * 获取单篇博客文章内容
 * @param {string} pageId - Notion页面ID
 * @param {string} locale - 语言代码 (en, zh, es)
 * @returns {Promise<Object>} - 博客文章内容
 */
async function getBlogPost(pageId, locale = 'en') {
  if (!notionClient) {
    initNotionClient();
  }
  
  try {
    // 获取页面
    const page = await notionClient.pages.retrieve({ page_id: pageId });
    
    // 获取页面属性
    const properties = page.properties;
    
    // 获取标题
    const titleKey = locale === 'en' ? 'Title' : locale === 'zh' ? 'Title_ZH' : 'Title_ES';
    const title = properties[titleKey]?.title?.[0]?.plain_text || properties['Title']?.title?.[0]?.plain_text || 'Untitled';
    
    // 获取摘要
    const excerptKey = locale === 'en' ? 'Excerpt' : locale === 'zh' ? 'Excerpt_ZH' : 'Excerpt_ES';
    const excerpt = properties[excerptKey]?.rich_text?.[0]?.plain_text || properties['Excerpt']?.rich_text?.[0]?.plain_text || '';
    
    // 获取封面图片
    const coverImage = page.cover?.external?.url || page.cover?.file?.url || '/images/blog/default-cover.jpg';
    
    // 获取发布日期
    const publishedDate = properties['PublishedDate']?.date?.start || new Date().toISOString().split('T')[0];
    
    // 获取标签
    const tags = properties['Tags']?.multi_select?.map(tag => tag.name) || [];
    
    // 获取作者
    const author = properties['Author']?.select?.name || 'SuppBridge Team';
    
    // 获取内容
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const markdown = n2m.toMarkdownString(mdBlocks);
    
    // 如果有翻译内容，获取翻译内容
    let translatedContent = null;
    if (locale !== 'en') {
      const translatedContentKey = locale === 'zh' ? 'Content_ZH' : 'Content_ES';
      if (properties[translatedContentKey]) {
        const translatedPageId = properties[translatedContentKey]?.relation?.[0]?.id;
        if (translatedPageId) {
          const translatedMdBlocks = await n2m.pageToMarkdown(translatedPageId);
          translatedContent = n2m.toMarkdownString(translatedMdBlocks);
        }
      }
    }
    
    return {
      id: pageId,
      title,
      excerpt,
      coverImage,
      publishedDate,
      tags,
      author,
      content: translatedContent || markdown,
    };
  } catch (error) {
    console.error('Error fetching blog post from Notion:', error);
    return null;
  }
}

/**
 * 通过Slug获取博客文章
 * @param {string} slug - 文章Slug
 * @param {string} locale - 语言代码 (en, zh, es)
 * @returns {Promise<Object>} - 博客文章内容
 */
async function getBlogPostBySlug(slug, locale = 'en') {
  if (!notionClient) {
    initNotionClient();
  }
  
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not defined in environment variables');
  }
  
  try {
    // 查询数据库
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    });
    
    if (response.results.length === 0) {
      return null;
    }
    
    const pageId = response.results[0].id;
    return await getBlogPost(pageId, locale);
  } catch (error) {
    console.error('Error fetching blog post by slug from Notion:', error);
    return null;
  }
}

module.exports = {
  getBlogPosts,
  getBlogPost,
  getBlogPostBySlug,
};