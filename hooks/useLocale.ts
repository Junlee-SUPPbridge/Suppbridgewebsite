import { useState, useEffect } from 'react';
import en from '../locales/en';
import zh from '../locales/zh';
import es from '../locales/es';

type Locale = 'en' | 'zh' | 'es';
type Translations = typeof en;

// 创建一个类型安全的翻译访问器
const createTranslationAccessor = (translations: Translations) => {
  return {
    get: (path: string) => {
      const keys = path.split('.');
      let current: any = translations;
      
      for (const key of keys) {
        if (current[key] === undefined) {
          console.warn(`Translation key not found: ${path}`);
          return path;
        }
        current = current[key];
      }
      
      return current;
    }
  };
};

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>('en');
  const translations = { en, zh, es };
  const currentTranslations = translations[locale];
  
  // 创建翻译访问器
  const translator = createTranslationAccessor(currentTranslations);
  
  // 翻译函数
  const translate = (path: string): string => {
    return translator.get(path);
  };
  
  useEffect(() => {
    // 从localStorage或浏览器设置中获取首选语言
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'zh', 'es'].includes(savedLocale)) {
      setLocale(savedLocale);
    } else {
      // 检测浏览器语言
      const browserLang = navigator.language.split('-')[0];
      if (['zh', 'es'].includes(browserLang)) {
        setLocale(browserLang as Locale);
      }
    }
  }, []);
  
  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };
  
  return {
    locale,
    changeLocale,
    t: translate,
    translations: currentTranslations
  };
};