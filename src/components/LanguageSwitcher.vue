<template>
  <div class="language-switcher">
    <el-dropdown @command="handleLanguageChange" trigger="click">
      <span class="language-trigger">
        <i class="el-icon-global"></i>
        {{ currentLanguageLabel }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item 
          v-for="lang in languages" 
          :key="lang.value"
          :command="lang.value"
          :class="{ active: currentLanguage === lang.value }"
        >
          <i :class="lang.icon"></i>
          {{ lang.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      languages: [
        {
          value: 'zh-CN',
          label: '中文',
          icon: 'el-icon-china'
        },
        {
          value: 'en-US',
          label: 'English',
          icon: 'el-icon-america'
        }
      ]
    }
  },
  computed: {
    currentLanguageLabel() {
      const lang = this.languages.find(l => l.value === this.currentLanguage)
      return lang ? lang.label : '中文'
    }
  },
  methods: {
    handleLanguageChange(lang) {
      if (lang !== this.currentLanguage) {
        this.currentLanguage = lang
        this.$i18n.locale = lang
        localStorage.setItem('language', lang)
        
        // 更新頁面標題
        this.updatePageTitle()
        
        // 觸發語言切換事件
        this.$emit('language-changed', lang)
        
        // 通知所有組件語言已切換
        this.$root.$emit('language-changed', lang)
        
        // 顯示切換成功提示
        this.$message.success(this.$t('common.languageChanged') || '語言切換成功')
      }
    },
    
    updatePageTitle() {
      const titles = {
        'zh-CN': '庾柱鵬 | 全棧工程師 - 數字化工廠專家（9年經驗）',
        'en-US': 'Yu Zhupeng | Full-Stack Engineer - Digital Factory Expert (9 Years Experience)'
      }
      document.title = titles[this.currentLanguage] || titles['zh-CN']
    }
  },
  
  mounted() {
    // 初始化時更新頁面標題
    this.updatePageTitle()
  }
}
</script>

<style lang="less" scoped>
.language-switcher {
  .language-trigger {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    background: #f5f5f5;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #333;
    font-size: 14px;
    
    &:hover {
      background: #e6f7ff;
      color: #1890ff;
    }
    
    i {
      margin-right: 4px;
    }
  }
}

.el-dropdown-menu {
  .el-dropdown-item {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    
    i {
      margin-right: 8px;
      font-size: 16px;
    }
    
    &.active {
      background: #e6f7ff;
      color: #1890ff;
    }
    
    &:hover {
      background: #f5f5f5;
    }
  }
}

// 響應式設計
@media (max-width: 768px) {
  .language-switcher {
    .language-trigger {
      padding: 6px 8px;
      font-size: 12px;
    }
  }
}
</style>
