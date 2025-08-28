import axios from 'axios'

/**
 * 使用Google翻译API翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码
 * @returns {Promise<string>} 翻译后的文本
 */
export async function translateWithGoogle(text, targetLang) {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY
  
  if (!apiKey) {
    throw new Error('Google Translate API key is not configured')
  }
  
  // 将语言代码转换为Google翻译API支持的格式
  const googleLangCode = targetLang === 'zh' ? 'zh-CN' : targetLang
  
  const response = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
    {
      q: text,
      target: googleLangCode,
      format: 'text'
    }
  )
  
  return response.data.data.translations[0].translatedText
}

/**
 * 使用DeepL API翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码
 * @returns {Promise<string>} 翻译后的文本
 */
export async function translateWithDeepL(text, targetLang) {
  const apiKey = process.env.DEEPL_API_KEY
  
  if (!apiKey) {
    throw new Error('DeepL API key is not configured')
  }
  
  // 将语言代码转换为DeepL API支持的格式
  const deeplLangCode = targetLang === 'zh' ? 'ZH' : targetLang.toUpperCase()
  
  const response = await axios.post(
    'https://api-free.deepl.com/v2/translate',
    new URLSearchParams({
      auth_key: apiKey,
      text: text,
      target_lang: deeplLangCode
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
  
  return response.data.translations[0].text
}

/**
 * 使用Azure翻译API翻译文本
 * @param {string} text - 要翻译的文本
 * @param {string} targetLang - 目标语言代码
 * @returns {Promise<string>} 翻译后的文本
 */
export async function translateWithAzure(text, targetLang) {
  const apiKey = process.env.AZURE_TRANSLATOR_KEY
  const region = process.env.AZURE_TRANSLATOR_REGION || 'global'
  
  if (!apiKey) {
    throw new Error('Azure Translator API key is not configured')
  }
  
  const response = await axios.post(
    `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLang}`,
    [{ text }],
    {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Ocp-Apim-Subscription-Region': region,
        'Content-Type': 'application/json'
      }
    }
  )
  
  return response.data[0].translations[0].text
}