<!--  -->
<template>
  <div class="mobile-resume">
    <!-- 个人信息卡片 -->
    <div class="mobile-header">
      <div class="avatar-section">
        <img :src="avatarreal" class="avatar" />
        <h1>{{ $t('personalInfo.name') }}</h1>
        <h3>{{ $t('personalInfo.position') }}</h3>
      </div>
      
      <div class="contact-info">
        <p><i class="el-icon-message"></i> 364466548@qq.com</p>
        <p><i class="el-icon-phone-outline"></i> 13794928207</p>
        <p>{{ $t('personalInfo.sex') }} / {{ $t('personalInfo.birthday') }} / {{ $t('personalInfo.age') }}</p>
        <p>{{ $t('workExperience.title') }} / {{ $t('personalInfo.workExperience') }}</p>
      </div>
    </div>

    <!-- 技能栈 - 可折叠 -->
    <div class="mobile-section">
      <div class="section-header" @click="toggleSection('skills')">
        <h2><i class="el-icon-star-on"></i> {{ $t('skills.title') }}</h2>
        <i :class="['el-icon-arrow-down', { 'rotate': showSections.skills }]"></i>
      </div>
      <div v-show="showSections.skills" class="section-content">
        <div class="skill-category">
          <h4>{{ $t('skills.categories.frontend.title') }}</h4>
          <p>{{ $t('skills.categories.frontend.description') }}</p>
        </div>
        <div class="skill-category">
          <h4>{{ $t('skills.categories.backend.title') }}</h4>
          <p>{{ $t('skills.categories.backend.description') }}</p>
        </div>
        <div class="skill-category">
          <h4>{{ $t('skills.categories.database.title') }}</h4>
          <p>{{ $t('skills.categories.database.description') }}</p>
        </div>
        <div class="skill-category">
          <h4>{{ $t('skills.categories.devops.title') }}</h4>
          <p>{{ $t('skills.categories.devops.description') }}</p>
        </div>
        <div class="skill-category">
          <h4>{{ $t('skills.categories.architecture.title') }}</h4>
          <p>{{ $t('skills.categories.architecture.description') }}</p>
        </div>
      </div>
    </div>

    <!-- 工作经历 - 可折叠 -->
    <div class="mobile-section">
      <div class="section-header" @click="toggleSection('work')">
        <h2><i class="el-icon-office-building"></i> {{ $t('workExperience.title') }}</h2>
        <i :class="['el-icon-arrow-down', { 'rotate': showSections.work }]"></i>
      </div>
      <div v-show="showSections.work" class="section-content">
      <div class="work-item">
          <span class="work-time">{{ $t('workExperience.companies.goertek.period') }}</span>
          <p>{{ $t('workExperience.companies.goertek.name') }}</p>
        </div>


        <div class="work-item">
          <span class="work-time">{{ $t('workExperience.companies.lingyi.period') }}</span>
          <p>{{ $t('workExperience.companies.lingyi.name') }}</p>
        </div>
        <div class="work-item">
          <span class="work-time">{{ $t('workExperience.companies.kyocera.period') }}</span>
          <p>{{ $t('workExperience.companies.kyocera.name') }}</p>
        </div>
        <div class="work-item">
          <span class="work-time">{{ $t('workExperience.companies.juansi.period') }}</span>
          <p>{{ $t('workExperience.companies.juansi.name') }}</p>
        </div>
        <div class="work-item">
          <span class="work-time">{{ $t('workExperience.companies.shenxiang.period') }}</span>
          <p>{{ $t('workExperience.companies.shenxiang.name') }}</p>
        </div>
     
        

      </div>
    </div>

    <!-- 项目经历 -->
    <div class="mobile-section">
      <div class="section-header" @click="toggleSection('projects')">
        <h2><i class="el-icon-folder-opened"></i> {{ $t('projects.title') }}</h2>
        <i :class="['el-icon-arrow-down', { 'rotate': showSections.projects }]"></i>
      </div>
      <div v-show="showSections.projects" class="section-content">
        <div v-for="(item, idx) in projectlists" :key="idx" class="project-item">
          <div class="project-header">
            <h3>{{ item.title }}</h3>
            <span class="project-time">{{ item.startTime }}</span>
          </div>
          
          <div class="project-info">
            <p><strong>{{ $t('projects.company') }}：</strong>{{ item.company }}</p>
            <p><strong>{{ $t('projects.role') }}：</strong>{{ item.role }}</p>
            <p v-if="item.duration"><strong>{{ $t('projects.duration') }}：</strong>{{ item.duration }}</p>
          </div>

          <!-- 技术栈 -->
          <div v-if="item.technologyStack" class="tech-stack">
            <p><strong>{{ $t('projects.technology') }}：</strong></p>
            <div class="tech-tags">
              <span v-if="item.technologyStack.backend" class="tech-tag">{{ item.technologyStack.backend }}</span>
              <span v-if="item.technologyStack.frontend" class="tech-tag">{{ item.technologyStack.frontend }}</span>
              <span v-if="item.technologyStack.database" class="tech-tag">{{ item.technologyStack.database }}</span>
            </div>
          </div>

          <!-- 项目描述 - 可展开 -->
          <div class="project-details">
            <div class="detail-toggle" @click="toggleProject(idx)">
              <span>{{ $t('projects.details') }}</span>
              <i :class="['el-icon-arrow-down', { 'rotate': expandedProjects[idx] }]"></i>
            </div>
            
            <div v-show="expandedProjects[idx]" class="detail-content">
              <!-- 背景和痛点 -->
              <div v-if="item.businessContext" class="detail-section">
                <h4>{{ $t('projects.background') }}</h4>
                <p>{{ item.businessContext }}</p>
              </div>
              
              <div v-if="item.painPoints && item.painPoints.length" class="detail-section">
                <h4>{{ $t('projects.painPoints') }}</h4>
                <ul>
                  <li v-for="(point, i) in item.painPoints" :key="i">{{ point }}</li>
                </ul>
              </div>

              <div v-if="item.solutions && item.solutions.length" class="detail-section">
                <h4>{{ $t('projects.solutions') }}</h4>
                <ul>
                  <li v-for="(solution, i) in item.solutions" :key="i">{{ solution }}</li>
                </ul>
              </div>

              <!-- 项目描述 -->
              <div v-if="item.details && item.details.length" class="detail-section">
                <h4>{{ $t('projects.details') }}</h4>
                <ul>
                  <li v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 图片预览 - 点击查看 -->
          <div v-if="item.pictures && item.pictures.length" class="image-section">
            <div class="image-toggle" @click="toggleImages(idx)">
              <span>{{ $t('projects.preview') }} ({{ item.pictures.length }}{{ $t('projects.pictures') }})</span>
              <i :class="['el-icon-picture', showImages[idx] ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
            
            <div v-show="showImages[idx]" class="image-grid">
              <div v-for="(img, i) in item.pictures" :key="i" class="image-item" @click="viewFullImage(img)">
                <img :src="img" :alt="`项目图片${i+1}`" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 全屏图片查看器 -->
    <div v-if="fullImageSrc" class="image-viewer" @click="closeFullImage">
      <img :src="fullImageSrc" class="full-image" />
      <div class="close-btn" @click="closeFullImage">
        <i class="el-icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import configs from "@/config/index.js";

const { personalInfo, getProjectLists } = configs;
let avatar_real = require("@/static/images/me.png");

export default {
  data() {
    return {
      personalInfo,
      projectlists: getProjectLists(localStorage.getItem('language') || 'zh-CN'),
      avatarreal: avatar_real,
      fullImageSrc: null,
      showSections: {
        skills: true,
        work: false,
        projects: true
      },
      expandedProjects: {},
      showImages: {}
    };
  },
  created() {
    // 監聽語言切換事件
    this.$root.$on('language-changed', (lang) => {
      this.projectlists = getProjectLists(lang)
      this.$forceUpdate()
    })
  },
  beforeDestroy() {
    // 清理事件監聽
    this.$root.$off('language-changed')
  },
  methods: {
    toggleSection(section) {
      this.showSections[section] = !this.showSections[section];
    },
    
    toggleProject(index) {
      this.$set(this.expandedProjects, index, !this.expandedProjects[index]);
    },
    
    toggleImages(index) {
      this.$set(this.showImages, index, !this.showImages[index]);
    },
    
    viewFullImage(src) {
      this.fullImageSrc = src;
      // 禁止背景滚动
      document.body.style.overflow = 'hidden';
    },
    
    closeFullImage() {
      this.fullImageSrc = null;
      // 恢复背景滚动
      document.body.style.overflow = 'auto';
    }
  }
};
</script>

<style lang="less" scoped>
.mobile-resume {
  max-width: 100vw;
  background: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 60px;
}

.mobile-header {
  background: linear-gradient(135deg, #2B3A67 0%, #3c8dbc 100%);
  color: white;
  padding: 20px;
  text-align: center;
  
  .avatar-section {
    margin-bottom: 20px;
    
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 3px solid white;
      margin-bottom: 10px;
    }
    
    h1 {
      margin: 10px 0 5px 0;
      font-size: 24px;
    }
    
    h3 {
      margin: 0;
      font-size: 16px;
      opacity: 0.9;
    }
  }
  
  .contact-info {
    p {
      margin: 8px 0;
      font-size: 14px;
      
      i {
        margin-right: 8px;
        color: #fff;
      }
    }
  }
}

.mobile-section {
  background: white;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  
  .section-header {
    padding: 15px 20px;
    background: #f8f9fa;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    
    h2 {
      margin: 0;
      font-size: 18px;
      color: #2B3A67;
      
      i {
        margin-right: 8px;
      }
    }
    
    .el-icon-arrow-down {
      transition: transform 0.3s ease;
      
      &.rotate {
        transform: rotate(180deg);
      }
    }
  }
  
  .section-content {
    padding: 20px;
  }
}

.skill-category {
  margin-bottom: 15px;
  
  h4 {
    color: #2B3A67;
    margin: 0 0 8px 0;
    font-size: 16px;
  }
  
  p {
    margin: 0;
    line-height: 1.6;
    color: #666;
  }
}

.work-item {
  margin-bottom: 15px;
  padding-left: 15px;
  border-left: 3px solid #3c8dbc;
  
  .work-time {
    color: #999;
    font-size: 14px;
  }
  
  p {
    margin: 5px 0 0 0;
    font-weight: 500;
  }
}

.project-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    
    h3 {
      margin: 0;
      color: #2B3A67;
      font-size: 16px;
      flex: 1;
    }
    
    .project-time {
      background: #3c8dbc;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      margin-left: 10px;
      white-space: nowrap;
    }
  }
  
  .project-info {
    p {
      margin: 5px 0;
      font-size: 14px;
      line-height: 1.5;
    }
  }
  
  .tech-stack {
    margin: 10px 0;
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 5px;
      
      .tech-tag {
        background: #e3f2fd;
        color: #1565c0;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 12px;
      }
    }
  }
}

.project-details, .image-section {
  margin-top: 15px;
  
  .detail-toggle, .image-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    
    span {
      font-weight: 500;
      color: #2B3A67;
    }
    
    i {
      transition: transform 0.3s ease;
      
      &.rotate {
        transform: rotate(180deg);
      }
    }
  }
  
  .detail-content {
    padding: 15px 0;
    
    .detail-section {
      margin-bottom: 15px;
      
      h4 {
        color: #2B3A67;
        margin: 0 0 8px 0;
        font-size: 14px;
      }
      
      p, ul {
        margin: 0;
        font-size: 14px;
        line-height: 1.6;
        color: #666;
      }
      
      ul {
        padding-left: 20px;
        
        li {
          margin-bottom: 5px;
        }
      }
    }
  }
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
  
  .image-item {
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      transition: transform 0.2s ease;
    }
    
    &:active img {
      transform: scale(0.95);
    }
  }
}

.image-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  .full-image {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    i {
      color: white;
      font-size: 20px;
    }
  }
}

// 优化触摸体验
.section-header, .detail-toggle, .image-toggle {
  -webkit-tap-highlight-color: rgba(0,0,0,0.1);
  
  &:active {
    background-color: #e9ecef;
  }
}

.image-item {
  -webkit-tap-highlight-color: transparent;
}
</style>