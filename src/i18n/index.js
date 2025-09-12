// 國際化配置
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './locales/zh-CN'
import en from './locales/en-US'

Vue.use(VueI18n)

// 從 localStorage 獲取語言設定，預設為中文
const locale = localStorage.getItem('language') || 'zh-CN'

const i18n = new VueI18n({
  locale,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zh,
    'en-US': en
  }
})

export default i18n
