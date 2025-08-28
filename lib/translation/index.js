/**
 * 翻译服务模块
 * 
 * 这个模块提供了自动翻译功能，支持英文、中文和西班牙语之间的互译。
 * 默认使用Google翻译API，但也支持其他翻译服务。
 */

// 导入依赖
const axios = require('axios');

/**
 * 支持的语言代码
 */
const SUPPORTED_LANGUAGES = ['en', 'zh', 'es'];

/**
 * 翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码 (en, zh, es)
 * @param {string} sourceLang - 源语言代码 (en, zh, es)，如果为null则自动检测
 * @returns {Promise<string>} - 翻译后的文本
 */
async function translateText(text, targetLang = 'en', sourceLang = null) {
  // 验证目标语言
  if (!SUPPORTED_LANGUAGES.includes(targetLang)) {
    throw new Error(`Unsupported target language: ${targetLang}`);
  }
  
  // 如果源语言指定了，验证它
  if (sourceLang && !SUPPORTED_LANGUAGES.includes(sourceLang)) {
    throw new Error(`Unsupported source language: ${sourceLang}`);
  }
  
  // 如果文本为空或目标语言与源语言相同，直接返回原文
  if (!text || (sourceLang && sourceLang === targetLang)) {
    return text;
  }
  
  try {
    // 使用环境变量中配置的翻译服务
    const translationService = process.env.TRANSLATION_SERVICE || 'google';
    
    switch (translationService.toLowerCase()) {
      case 'google':
        return await translateWithGoogle(text, targetLang, sourceLang);
      case 'azure':
        return await translateWithAzure(text, targetLang, sourceLang);
      case 'deepl':
        return await translateWithDeepL(text, targetLang, sourceLang);
      default:
        throw new Error(`Unsupported translation service: ${translationService}`);
    }
  } catch (error) {
    console.error('Translation error:', error);
    // 如果翻译失败，返回原文
    return text;
  }
}

/**
 * 使用Google翻译API翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码
 * @param {string} sourceLang - 源语言代码
 * @returns {Promise<string>} - 翻译后的文本
 */
async function translateWithGoogle(text, targetLang, sourceLang) {
  // 检查API密钥
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!apiKey) {
    console.warn('Google Translate API key not found. Using fallback translation.');
    return fallbackTranslation(text, targetLang);
  }
  
  try {
    // 调用Google翻译API
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        q: text,
        target: targetLang,
        source: sourceLang,
        format: 'text'
      }
    );
    
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Google Translate API error:', error);
    return fallbackTranslation(text, targetLang);
  }
}

/**
 * 使用Azure翻译API翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码
 * @param {string} sourceLang - 源语言代码
 * @returns {Promise<string>} - 翻译后的文本
 */
async function translateWithAzure(text, targetLang, sourceLang) {
  // 检查API密钥和区域
  const apiKey = process.env.AZURE_TRANSLATOR_API_KEY;
  const region = process.env.AZURE_TRANSLATOR_REGION || 'global';
  
  if (!apiKey) {
    console.warn('Azure Translator API key not found. Using fallback translation.');
    return fallbackTranslation(text, targetLang);
  }
  
  try {
    // 调用Azure翻译API
    const response = await axios({
      baseURL: 'https://api.cognitive.microsofttranslator.com',
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Ocp-Apim-Subscription-Region': region,
        'Content-type': 'application/json',
      },
      params: {
        'api-version': '3.0',
        'to': targetLang,
        'from': sourceLang || '',
      },
      data: [{
        text: text
      }],
      responseType: 'json'
    });
    
    return response.data[0].translations[0].text;
  } catch (error) {
    console.error('Azure Translator API error:', error);
    return fallbackTranslation(text, targetLang);
  }
}

/**
 * 使用DeepL翻译API翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码
 * @param {string} sourceLang - 源语言代码
 * @returns {Promise<string>} - 翻译后的文本
 */
async function translateWithDeepL(text, targetLang, sourceLang) {
  // 检查API密钥
  const apiKey = process.env.DEEPL_API_KEY;
  
  if (!apiKey) {
    console.warn('DeepL API key not found. Using fallback translation.');
    return fallbackTranslation(text, targetLang);
  }
  
  // 转换语言代码为DeepL格式
  const deeplTargetLang = targetLang === 'zh' ? 'ZH' : targetLang.toUpperCase();
  const deeplSourceLang = sourceLang ? (sourceLang === 'zh' ? 'ZH' : sourceLang.toUpperCase()) : null;
  
  try {
    // 调用DeepL翻译API
    const response = await axios({
      method: 'post',
      url: 'https://api.deepl.com/v2/translate',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: new URLSearchParams({
        text: text,
        target_lang: deeplTargetLang,
        ...(deeplSourceLang ? { source_lang: deeplSourceLang } : {})
      }).toString()
    });
    
    return response.data.translations[0].text;
  } catch (error) {
    console.error('DeepL API error:', error);
    return fallbackTranslation(text, targetLang);
  }
}

/**
 * 备用翻译方法（当API调用失败时使用）
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码
 * @returns {string} - 翻译后的文本
 */
function fallbackTranslation(text, targetLang) {
  // 这里可以实现一个简单的词典翻译或返回原文
  console.warn('Using fallback translation. Original text returned.');
  return text;
}

/**
 * 翻译对象中的所有文本字段
 * @param {Object} obj - 要翻译的对象
 * @param {string} targetLang - 目标语言代码
 * @param {string} sourceLang - 源语言代码
 * @returns {Promise<Object>} - 翻译后的对象
 */
async function translateObject(obj, targetLang = 'en', sourceLang = null) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  
  const result = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      
      if (typeof value === 'string') {
        // 翻译字符串
        result[key] = await translateText(value, targetLang, sourceLang);
      } else if (typeof value === 'object' && value !== null) {
        // 递归翻译嵌套对象
        result[key] = await translateObject(value, targetLang, sourceLang);
      } else {
        // 保持其他类型的值不变
        result[key] = value;
      }
    }
  }
  
  return result;
}

module.exports = {
  translateText,
  translateObject,
  SUPPORTED_LANGUAGES
};