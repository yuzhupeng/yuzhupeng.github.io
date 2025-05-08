<!--  -->
<template>
  <div class="right">
    <div class="right-top"
         style="background-color: #2B3A67; color: white; border-radius: 8px; padding: 20px;">
      <img v-bind:src="avatarreal"
           class="right-top__avatar" />
      <h1>{{ personalInfo.name }}</h1>
      <h3>{{ personalInfo.position }}</h3>
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
      <p>{{ personalInfo.sex }} / {{ personalInfo.birthday }} / 32岁</p>
      <p>{{ personalInfo.university }} / {{ personalInfo.major }}</p>
      <p>{{ personalInfo.education }} / {{ personalInfo.graduation }}毕业</p>
      <p>工作年限 / 8年</p>
      <!-- <p>英语 / {{ personalInfo.english }}</p> -->
    </div>
    <div style="margin-bottom: 40px">
      <strong class="section-title">工作经历</strong>
      <div style="padding: 8px">
        <div>
          <span style="color: gray">2015.07 - 2015.11</span>
          <p style="margin-left: 16px">东莞申翔网络公司-实习</p>
        </div>
        <div>
          <span style="color: gray">2016.03 - 2020.01</span>
          <p style="margin-left: 16px">东莞隽思印刷有限公司</p>
        </div>
        <div>
          <span style="color: gray">2020.05 - 2022-03</span>
          <p style="margin-left: 16px">京瓷信息系统(上海)有限公司</p>
        </div>
        <div>
          <span style="color: gray">2022.03 - 至今</span>
          <p style="margin-left: 16px">广东领益智造股份有限公司</p>
        </div>
      </div>
    </div>
    <div class="right-skill">
      <p class="section-title">&nbsp;<img v-bind:src="logo2" /><strong>技术栈</strong></p>
      <!-- <a v-for="(item, index) in personalInfo.skillList" :key="index">{{
        item
      }}</a> -->
      <div class="skill-section">
        <h3 class="skill-category">前端技术</h3>
        <ul class="skill-list">
          <li class="skill-item">框架：Vue2 3、React、微信小程序</li>
          <li class="skill-item">UI组件：Element-UI、IView、Layui、Bootstrap</li>
          <li class="skill-item">状态管理：Vuex、Mobx</li>
          <li class="skill-item">图表可视化：Echarts、Highcharts、Grafana</li>
          <li class="skill-item">其他：jQuery、Webpack、CSS/LESS</li>
        </ul>

        <h3 class="skill-category">后端技术</h3>
        <ul class="skill-list">
          <li class="skill-item">框架：.NET Core、Python、JAVA SpringBoot</li>
          <li class="skill-item">ORM：Entity Framework Core、Dapper、NHibernate</li>
          <li class="skill-item">服务：Restful API、Web API</li>
          <li class="skill-item">任务调度：Quartz</li>
          <li class="skill-item">数据处理：Python生态(Pandas、BeautifulSoup等)</li>
        </ul>

        <h3 class="skill-category">数据库与中间件</h3>
        <ul class="skill-list">
          <li class="skill-item">关系型数据库：SQL Server、MySQL、PostgreSQL</li>
          <li class="skill-item">非关系型数据库：Redis、MongoDB、InfluxDB</li>
          <li class="skill-item">缓存：Redis</li>
        </ul>

        <h3 class="skill-category">DevOps与运维</h3>
        <ul class="skill-list">
          <li class="skill-item">容器化：Docker、Docker Compose</li>
          <li class="skill-item">CI/CD：Jenkins</li>
          <li class="skill-item">监控：Prometheus、Grafana</li>
          <li class="skill-item">版本控制：Git</li>
          <li class="skill-item">代理与服务器：Nginx、IIS、YARP</li>
        </ul>

        <h3 class="skill-category">架构设计</h3>
        <ul class="skill-list">
          <li class="skill-item">微服务架构</li>
          <li class="skill-item">分布式系统设计</li>
          <li class="skill-item">DDD领域驱动设计</li>
          <li class="skill-item">高可用系统设计</li>
        </ul>

        <p class="summary">
          通过以上项目经历，我积累了丰富的全栈开发经验，尤其在企业级应用开发、系统集成、性能优化和架构设计方面有深入的实践。在技术上不断学习新的框架和工具，能够根据业务需求选择合适的技术栈实现解决方案。
        </p>
      </div>

      <div class="right-skills">
        <p class="section-title">&nbsp;<img v-bind:src="logo1" /><strong>个人资料:</strong></p>

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
            <b style="color: black"> .NET Core高质量资源-#需FQ:</b>
            <p> <a href="https://yuzhupeng.github.io/DotNetGuide/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.github.io/DotNetGuide/</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black"> 2025 NET er 路线-#需FQ:</b>
            <p> <a href="https://github.com/MoienTajik/AspNetCore-Developer-Roadmap/tree/master"
                 target="_blank"
                 class="resource-link">https://github.com/MoienTajik/AspNetCore-Developer-Roadmap/tree/master</a></p>
          </div>

          <div class="resource-item">
            <b style="color: black"> JavaScript 资源大全中文版-#需FQ:</b>
            <p> <a href="https://yuzhupeng.github.io/awesome-python-cn/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.github.io/awesome-python-cn/</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black">深入理解Vue.js实战-#需FQ:</b>
            <p> <a href="https://yuzhupeng.github.io/vue-ebook/vue-ebook/0.html"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.github.io/vue-ebook/vue-ebook/0.html</a></p>
          </div>
          <div class="resource-item">
            <b style="color: black"> Linux命令大全搜索工具-#需FQ:</b>
            <p> <a href="https://yuzhupeng.github.io/linux-command/"
                 target="_blank"
                 class="resource-link">https://yuzhupeng.github.io/linux-command/</a></p>
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
