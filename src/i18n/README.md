# PersonProfile 國際化方案

## 概述

本專案已實現完整的英語和中文國際化支援，使用 Vue I18n 進行多語言管理。

## 檔案結構

```
src/i18n/
├── index.js              # 國際化配置入口
├── locales/
│   ├── zh-CN.js         # 中文語言包
│   └── en-US.js         # 英文語言包
└── README.md            # 使用說明
```

## 功能特點

### 1. 語言切換
- 右上角語言切換器，支援中文/英文切換
- 語言設定會保存到 localStorage
- 切換時會更新頁面標題

### 2. 支援的內容
- 個人資訊（姓名、職位、描述等）
- 工作經歷（公司名稱、時間段）
- 技術棧（分類標題和描述）
- 項目經歷（標題、標籤、描述）
- 個人資源（博客、GitHub 等連結）

### 3. 響應式設計
- 語言切換器在移動端和桌面端都有適當的樣式
- 支援觸摸設備的交互

## 使用方法

### 在組件中使用翻譯

```vue
<template>
  <div>
    <!-- 基本翻譯 -->
    <h1>{{ $t('personalInfo.name') }}</h1>
    
    <!-- 帶參數的翻譯 -->
    <p>{{ $t('personalInfo.age') }}</p>
    
    <!-- 嵌套對象翻譯 -->
    <h2>{{ $t('skills.categories.frontend.title') }}</h2>
  </div>
</template>
```

### 在 JavaScript 中使用翻譯

```javascript
export default {
  methods: {
    showMessage() {
      this.$message.success(this.$t('common.languageChanged'))
    }
  }
}
```

### 添加新的翻譯

1. 在 `src/i18n/locales/zh-CN.js` 中添加中文翻譯
2. 在 `src/i18n/locales/en-US.js` 中添加英文翻譯
3. 在組件中使用 `$t('key')` 調用

## 語言包結構

### 個人資訊 (personalInfo)
- name: 姓名
- position: 職位
- description: 描述
- sex: 性別
- birthday: 生日
- university: 大學
- major: 專業
- education: 學歷
- graduation: 畢業年份
- workExperience: 工作經驗
- age: 年齡

### 工作經歷 (workExperience)
- title: 標題
- companies: 公司列表
  - lingyi: 領益智造
  - kyocera: 京瓷
  - juansi: 雋思
  - shenxiang: 申翔

### 技術棧 (skills)
- title: 標題
- categories: 分類
  - frontend: 前端技術
  - backend: 後端技術
  - database: 數據庫與中間件
  - devops: DevOps與運維
  - architecture: 架構設計

### 項目經歷 (projects)
- title: 標題
- details: 項目詳情
- preview: 效果預覽
- company: 公司
- role: 職務
- duration: 持續時間
- technology: 技術棧
- background: 項目背景
- painPoints: 業務痛點
- solutions: 解決方案
- outcomes: 項目成果

## 自定義語言

如需添加其他語言（如日文、韓文等）：

1. 在 `src/i18n/locales/` 下創建新的語言檔案（如 `ja-JP.js`）
2. 在 `src/i18n/index.js` 中導入並添加到 messages
3. 在 `LanguageSwitcher.vue` 中添加新的語言選項

## 注意事項

1. 所有翻譯鍵名使用 camelCase 格式
2. 保持中英文語言包結構一致
3. 新增翻譯時要同時更新兩個語言包
4. 翻譯內容要符合目標語言的表達習慣

## 技術實現

- 使用 Vue I18n 8.x 版本（兼容 Vue 2）
- 支援動態語言切換
- 語言設定持久化存儲
- 響應式語言切換組件
