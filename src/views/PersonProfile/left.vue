<!--  -->
<template>
  <div class="right">
    <div class="right-top"
         style="background-color: #2B3A67; color: white; border-radius: 8px; padding: 20px;">
      <img v-bind:src="avatarreal"
           class="right-top__avatar" />
      <h1>{{ $t('personalInfo.name') }}</h1>
      <h3>{{ $t('personalInfo.position') }}</h3>
      <h5>{{ $t('personalInfo.description') }}</h5>
    </div>
    <div class="right-link">
      <img align=""
           src="https://img.shields.io/badge/%20fishyue-blog-yellow" />
      <!-- <img align="" src="https://visitor-badge.glitch.me/badge?page_id=fishyues" /> -->
      <!-- <p><img v-bind:src="email" alt="" /><a>364466548@qq.com</a></p>
      <p><img v-bind:src="phone" alt="" /><a>13794928207</a></p> -->
      <p> <i class="el-icon-message"
           style="color: #2894FF;  font-size: 25.5px;  "> </i> 364466548@qq.com</p>
      <p> <i class="el-icon-phone-outline"
           style="color: #2894FF;  font-size: 25.5px;  "> </i> 13794928207</p>
      <!-- <p><img v-bind:src="phones" alt="" /><a>13266705799</a></p> -->
    </div>
    <div class="right-info">
      <p>{{ $t('personalInfo.sex') }} / {{ $t('personalInfo.birthday') }} / {{ $t('personalInfo.age') }}</p>
      <p>{{ $t('personalInfo.university') }} / {{ $t('personalInfo.major') }}</p>
      <p>{{ $t('personalInfo.education') }} / {{ $t('personalInfo.graduation') }}{{ $t('personalInfo.graduationSuffix') }}</p>
      <p>{{ $t('workExperience.title') }} / {{ $t('personalInfo.workExperience') }}</p>
      <!-- <p>英语 / {{ personalInfo.english }}</p> -->
    </div>
    <div style="margin-bottom: 40px">
      <strong class="section-title">{{ $t('workExperience.title') }}</strong>
      <div style="padding: 8px">
        <div>
          <span style="color: gray">{{ $t('workExperience.companies.shenxiang.period') }}</span>
          <p style="margin-left: 16px">{{ $t('workExperience.companies.shenxiang.name') }}</p>
        </div>
        <div>
          <span style="color: gray">{{ $t('workExperience.companies.juansi.period') }}</span>
          <p style="margin-left: 16px">{{ $t('workExperience.companies.juansi.name') }}</p>
        </div>
        <div>
          <span style="color: gray">{{ $t('workExperience.companies.kyocera.period') }}</span>
          <p style="margin-left: 16px">{{ $t('workExperience.companies.kyocera.name') }}</p>
        </div>
        <div>
          <span style="color: gray">{{ $t('workExperience.companies.lingyi.period') }}</span>
          <p style="margin-left: 16px">{{ $t('workExperience.companies.lingyi.name') }}</p>
        </div>
      <div>
          <span style="color: gray">{{ $t('workExperience.companies.goertek.period') }}</span>
          <p style="margin-left: 16px">{{ $t('workExperience.companies.goertek.name') }}</p>
      </div>

      </div>
    </div>

    <div class="right-skill">
      <p class="section-title">&nbsp;<img v-bind:src="logo2" /><strong>{{ $t('skills.title') }}</strong></p>
      <!-- <a v-for="(item, index) in personalInfo.skillList" :key="index">{{
        item
      }}</a> -->
      <div class="skill-section">
        <h3 class="skill-category">{{ $t('skills.categories.frontend.title') }}</h3>
        <ul class="skill-list">
          <li class="skill-item">{{ $t('skillDetails.frontend.frameworks') }}</li>
          <li class="skill-item">{{ $t('skillDetails.frontend.ui') }}</li>
          <li class="skill-item">{{ $t('skillDetails.frontend.state') }}</li>
          <li class="skill-item">{{ $t('skillDetails.frontend.visualization') }}</li>
          <li class="skill-item">{{ $t('skillDetails.frontend.others') }}</li>
        </ul>

        <h3 class="skill-category">{{ $t('skills.categories.backend.title') }}</h3>
        <ul class="skill-list">
          <li class="skill-item">{{ $t('skillDetails.backend.languages') }}</li>
          <li class="skill-item">{{ $t('skillDetails.backend.orm') }}</li>
          <li class="skill-item">{{ $t('skillDetails.backend.protocols') }}</li>
          <li class="skill-item">{{ $t('skillDetails.backend.scheduling') }}</li>
          <li class="skill-item">{{ $t('skillDetails.backend.dataProcessing') }}</li>
        </ul>

        <h3 class="skill-category">{{ $t('skills.categories.database.title') }}</h3>
        <ul class="skill-list">
          <li class="skill-item">{{ $t('skillDetails.database.relational') }}</li>
          <li class="skill-item">{{ $t('skillDetails.database.nonRelational') }}</li>
          <li class="skill-item">{{ $t('skillDetails.database.cache') }}</li>
        </ul>

        <h3 class="skill-category">{{ $t('skills.categories.devops.title') }}</h3>
        <ul class="skill-list">
          <li class="skill-item">{{ $t('skillDetails.devops.containerization') }}</li>
          <li class="skill-item">{{ $t('skillDetails.devops.cicd') }}</li>
          <li class="skill-item">{{ $t('skillDetails.devops.monitoring') }}</li>
          <li class="skill-item">{{ $t('skillDetails.devops.versionControl') }}</li>
          <li class="skill-item">{{ $t('skillDetails.devops.proxy') }}</li>
          <li class="skill-item">{{ $t('skillDetails.devops.ide') }}</li>
        </ul>

        <h3 class="skill-category">{{ $t('skills.categories.architecture.title') }}</h3>
        <ul class="skill-list">
          <li class="skill-item">{{ $t('skillDetails.architecture.microservices') }}</li>
          <li class="skill-item">{{ $t('skillDetails.architecture.distributed') }}</li>
          <li class="skill-item">{{ $t('skillDetails.architecture.ddd') }}</li>
        </ul>

        <p class="summary">
          {{ $t('skills.categories.architecture.description') }}
        </p>
      </div>

      <div class="right-skills">
        <p class="section-title">&nbsp;<img v-bind:src="logo1" /><strong>{{ $t('personalResources.title') }}:</strong></p>

        <div style="padding: 8px">
          <div class="resource-item">
            <b style="color: black"> 个人博客</b>
            <p> <a href="https://yuzhupeng.top/myblogs/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.top/myblogs/</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black"> githup-#需FQ:</b>
            <p> <a href="https://github.com/yuzhupeng"
                 target="_blank"
                 class="resource-link">https://github.com/yuzhupeng</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black"> 代码分析工具</b>
            <p> <a href="https://deepwiki.com"
                 target="_blank"
                 class="resource-link">https://deepwiki.com</a></p>
          </div>

          <div class="resource-item">
            <b style="color: black"> 代码审计分析工具</b>
            <p> <a href="https://deepwiki.com"
                 target="_blank"
                 class="resource-link">https://github.com/sunmh207/AI-Codereview-Gitlab</a></p>
          </div>

          <div class="resource-item">
            <b style="color: black"> .NET Core高质量资源:</b>
            <p> <a href="https://yuzhupeng.top/DotNetGuide/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.top/DotNetGuide/</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black"> 2025 NET er 路线:</b>
            <p> <a href="https://github.com/MoienTajik/AspNetCore-Developer-Roadmap/tree/master"
                 target="_blank"
                 class="resource-link">https://github.com/MoienTajik/AspNetCore-Developer-Roadmap/tree/master</a></p>
          </div>

          <div class="resource-item">
            <b style="color: black"> JavaScript 资源大全中文版:</b>
            <p> <a href="https://yuzhupeng.top/awesome-python-cn/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.top/awesome-python-cn/</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black">深入理解Vue.js实战:</b>
            <p> <a href="https://yuzhupeng.top/vue-ebook/vue-ebook/0.html"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.top/vue-ebook/vue-ebook/0.html</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black"> Linux命令大全搜索工具:</b>
            <p> <a href="https://yuzhupeng.top/linux-command/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.top/linux-command/</a></p>
          </div>

          <div class="resource-item">
            <b style="color: black"> Python 中文算法教程-#需FQ:</b>
            <p> <a href="https://yuzhupeng.github.io/python_data_structures_and_algorithms/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.github.io/python_data_structures_and_algorithms/</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black"> Python资源库大全-#需FQ:</b>
            <p> <a href="https://yuzhupeng.github.io/awesome-python-cn/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.github.io/awesome-python-cn/</a></p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let phones = require("@/assets/phone.png");
let emails = require("@/assets/email.png");
let avatar_real = require("@/static/images/me.png");

let imgUrl12 = require("@/assets/imgs/12.png");
let imgUrl13 = require("@/assets/imgs/13.png");

import configs from "@/config/index.js";

const { personalInfo } = configs;
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { personalInfo },
  data () {
    //这里存放数据
    return {
      logo1: imgUrl12,
      logo2: imgUrl13,
      personalInfo,
      phone: phones,
      email: emails,
      avatarreal: avatar_real,
      phones: require("@/static/images/avatar_real.png")
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
@import 'index';

.right-top {
  transition: all 0.3s ease;

  &__avatar {
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.section-title {
  font-size: 1.2rem;
  color: #2b3a67;
  border-bottom: 2px solid #3c8dbc;
  padding-bottom: 5px;
  display: block;
  margin-bottom: 15px;
}

.skill-category {
  background-color: #2b3a67;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 15px;
}

.skill-list {
  padding-left: 20px;
}

.skill-item {
  margin: 8px 0;
  position: relative;
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &::before {
    content: '•';
    color: #1565c0;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
}

.resource-item {
  margin-bottom: 12px;
  border-left: 3px solid #e3f2fd;
  padding-left: 10px;
  transition: all 0.2s ease;

  &:hover {
    border-left-color: #1565c0;
    background-color: rgba(227, 242, 253, 0.3);
  }
}

.resource-link {
  color: #1565c0;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0d47a1;
    text-decoration: underline;
  }
}

// 移动端优化
@media (max-width: 768px) {
  .skill-section {
    padding: 10px;
  }

  .right-top {
    padding: 15px !important;
  }

  .resource-item {
    margin-bottom: 15px;
  }

  .resource-link {
    word-break: break-all;
  }
}
</style>
