import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from '../hooks/useLocale';

const LanguageSwitcher: React.FC = () => {
  const { locale, changeLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleLanguageChange = (newLocale: 'en' | 'zh' | 'es') => {
    changeLocale(newLocale);
    setIsOpen(false);
  };
  
  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // 获取当前语言的显示名称
  const getCurrentLanguageName = () => {
    return t(`common.languageSwitcher.${locale}`);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-sm font-medium hover:text-primary-600 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{getCurrentLanguageName()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 py-1 border border-gray-200">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              locale === 'en' ? 'bg-gray-100 text-primary-600' : 'hover:bg-gray-50'
            }`}
          >
            {t('common.languageSwitcher.en')}
          </button>
          <button
            onClick={() => handleLanguageChange('zh')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              locale === 'zh' ? 'bg-gray-100 text-primary-600' : 'hover:bg-gray-50'
            }`}
          >
            {t('common.languageSwitcher.zh')}
          </button>
          <button
            onClick={() => handleLanguageChange('es')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              locale === 'es' ? 'bg-gray-100 text-primary-600' : 'hover:bg-gray-50'
            }`}
          >
            {t('common.languageSwitcher.es')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;