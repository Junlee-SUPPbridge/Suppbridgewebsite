/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/suppbridge.svg', // 普通logo图片
  STARTER_LOGO_WHITE: '/images/starter/logo/suppbridge-white.svg', // 透明底浅色logo

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Bridging the Gap in Health Supplement Supply Chains',
  STARTER_HERO_TITLE_2: 'From concept to market with 18 years of expertise',
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Get Started',
  STARTER_HERO_BUTTON_1_URL: '/contact',
  STARTER_HERO_BUTTON_2_TEXT: 'WhatsApp',
  STARTER_HERO_BUTTON_2_URL: 'https://wa.me/8618573103006',
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/whatsapp.svg',

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp',
  STARTER_HERO_BANNER_IMAGE: '',

  // 顶部右侧导航按钮
  STARTER_NAV_BUTTON_1_TEXT: 'Contact Us',
  STARTER_NAV_BUTTON_1_URL: '/contact',
  STARTER_NAV_BUTTON_2_TEXT: 'Services',
  STARTER_NAV_BUTTON_2_URL: '/services',

  // 特性区块
  STARTER_FEATURE_ENABLE: true,
  STARTER_FEATURE_TITLE: 'Our Capabilities',
  STARTER_FEATURE_TEXT_1: 'End-to-end supplement supply chain solutions',
  STARTER_FEATURE_TEXT_2:
    'Product development, formulation, sourcing, manufacturing, compliance and delivery.',

  STARTER_FEATURE_1_TITLE_1: 'Product Development',
  STARTER_FEATURE_1_TEXT_1: 'From idea to prototype with compliant formulations',
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn more',
  STARTER_FEATURE_1_BUTTON_URL: '/services',

  STARTER_FEATURE_2_TITLE_1: 'Global Sourcing',
  STARTER_FEATURE_2_TEXT_1: 'Reliable ingredient partners and transparent procurement',
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn more',
  STARTER_FEATURE_2_BUTTON_URL: '/services',

  STARTER_FEATURE_3_TITLE_1: 'Manufacturing & QA',
  STARTER_FEATURE_3_TEXT_1: 'GMP facilities and rigorous quality assurance',
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn more',
  STARTER_FEATURE_3_BUTTON_URL: '/services',

  STARTER_FEATURE_4_TITLE_1: 'Regulatory & Logistics',
  STARTER_FEATURE_4_TEXT_1: 'Labeling, compliance and global shipping support',
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn more',
  STARTER_FEATURE_4_BUTTON_URL: '/services',

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true,
  STARTER_ABOUT_TITLE: 'About SuppBridge',
  STARTER_ABOUT_TEXT:
    'We help brands bridge the gap in health supplement supply chains. With 18 years of industry experience, we deliver flexible, reliable, and compliant solutions from concept to market.',
  STARTER_ABOUT_BUTTON_TEXT: 'Contact Us',
  STARTER_ABOUT_BUTTON_URL: '/contact',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '18+',
  STARTER_ABOUT_TIPS_2: 'Years Experience',
  STARTER_ABOUT_TIPS_3: 'From Idea To Shelf',

  // 首页价格/测评/FAQ/团队/博客：按企业站风格先关闭
  STARTER_PRICING_ENABLE: false,
  STARTER_TESTIMONIALS_ENABLE: false,
  STARTER_FAQ_ENABLE: false,
  STARTER_TEAM_ENABLE: false,
  STARTER_BLOG_ENABLE: false,

  // 联系模块
  STARTER_CONTACT_ENABLE: true,
  STARTER_CONTACT_TITLE: 'Contact Us',
  STARTER_CONTACT_TEXT: 'Tell us about your project',
  STARTER_CONTACT_LOCATION_TITLE: 'Location',
  STARTER_CONTACT_LOCATION_TEXT: 'Xiamen, China',
  STARTER_CONTACT_EMAIL_TITLE: 'Email',
  STARTER_CONTACT_EMAIL_TEXT: 'info@suppbridge.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '',

  // 合作伙伴
  STARTER_BRANDS_ENABLE: false,
  STARTER_BRANDS: [],

  STARTER_FOOTER_SLOGAN: 'We bridge your supplement supply chain from idea to shelf.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Company',
      LINK_GROUP: [
        { TITLE: 'Home', URL: '/' },
        { TITLE: 'About', URL: '/about' },
        { TITLE: 'Services', URL: '/services' },
        { TITLE: 'Contact', URL: '/contact' }
      ]
    },
    {
      TITLE: 'Legal',
      LINK_GROUP: [
        { TITLE: 'Privacy Policy', URL: '/privacy-policy' },
        { TITLE: 'Terms of Use', URL: '/terms-of-use' }
      ]
    },
    {
      TITLE: 'Connect',
      LINK_GROUP: [
        { TITLE: 'Email', URL: 'mailto:info@suppbridge.com' },
        { TITLE: 'WhatsApp', URL: 'https://wa.me/8618573103006' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Posts',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Use',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面
  STARTER_404_TITLE: 'We can’t find the page you are looking for.',
  STARTER_404_TEXT: 'Sorry! The page may have been moved or deleted.',
  STARTER_404_BACK: 'Back to Home',

  // 页面底部CTA
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'Ready to build your supplement brand?',
  STARTER_CTA_TITLE_2: 'Let’s get started',
  STARTER_CTA_DESCRIPTION:
    'Tell us your needs and we will craft a tailored solution.',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: '/contact',
  STARTER_CTA_BUTTON_TEXT: 'Contact Us',

  STARTER_POST_REDIRECT_ENABLE: false,
  STARTER_POST_REDIRECT_URL: 'https://www.suppbridge.com',
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false
}
export default CONFIG
