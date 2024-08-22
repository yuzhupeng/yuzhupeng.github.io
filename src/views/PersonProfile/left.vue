<!--  -->
<template>
  <div class="right">
    <div class="right-top">
      <img v-bind:src="avatarreal" class="right-top__avatar" />
      <h1>{{ personalInfo.name }}</h1>
      <h3>{{ personalInfo.position }}</h3>
    </div>
    <div class="right-link">
       <img align="" src="https://img.shields.io/badge/%20fishyue-blog-yellow" />
       <!-- <img align="" src="https://visitor-badge.glitch.me/badge?page_id=fishyues" /> -->
      <!-- <p><img v-bind:src="email" alt="" /><a>364466548@qq.com</a></p>
      <p><img v-bind:src="phone" alt="" /><a>13794928207</a></p> -->
   <p> <i class="el-icon-message" style="color: #2894FF;  font-size: 25.5px;  "> </i>   364466548@qq.com</p>
   <p> <i class="el-icon-phone-outline" style="color: #2894FF;  font-size: 25.5px;  ">  </i>   13794928207</p>
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
       <strong>工作经历</strong>
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
<p>&nbsp;<img v-bind:src="logo2" /><strong>技术栈</strong></p>
      <!-- <a v-for="(item, index) in personalInfo.skillList" :key="index">{{
        item
      }}</a> -->
<p>1、.C#/.NET、.NET Core、.NET MVC、Web API、RESTful API</p>
<p>2、前端：js、jQuery、Vue.js、Vuex、IView、Element-UI、Bootstrap</p>
<p>3、数据库：SQLServer、MySQL、Redis、MongoDB </p>
<p>4、ORM：Nhibernate、Dapper、Entity Framework、FreeSql、SqlSugar</p>
<p>5、架构：领域驱动设计 DDD、</p>
<p>6、环境：Windows、Linux、IIS、Nginx</p>

<p>7、其他：微信小程序 Python：爬虫、办公自动化处理、图像处理</p>

<p>8、工具：.Vscode、VS Studio、git、Svn、npm、yarn、Webpack、Docker、</p>

 </div>



    <div class="right-skills" >
     <p>&nbsp;<img v-bind:src="logo1" /><strong>个人资料:</strong></p>

    <div style="padding: 8px">
        <div>
          <b style="color: black"> VUE&.NET CORE 6 前后端分离框架</b>
         <p> <a href="http://www.yuzhupengs.com/" target="_blank">http://www.yuzhupengs.com/</a></p>
        </div>
             <div>
          <b style="color: black"> githup-#需FQ:</b>
         <p> <a href="https://github.com/yuzhupeng" target="_blank">https://github.com/yuzhupeng</a></p>
        </div>
              <div>
          <b style="color: black"> .NET Core高质量资源-#需FQ:</b>
         <p> <a href="https://yuzhupeng.github.io/DotNetGuide/" target="_blank">https://yuzhupeng.github.io/DotNetGuide/</a></p>
        </div>
              <div>
          <b style="color: black"> JavaScript 资源大全中文版-#需FQ:</b>
         <p> <a href="https://yuzhupeng.github.io/awesome-python-cn/" target="_blank">https://yuzhupeng.github.io/awesome-python-cn/</a></p>
        </div>
           <div>
          <b style="color: black">深入理解Vue.js实战-#需FQ:</b>
         <p> <a href="https://yuzhupeng.github.io/vue-ebook/vue-ebook/0.html" target="_blank">https://yuzhupeng.github.io/vue-ebook/vue-ebook/0.html</a></p>
        </div>
                   <div>
          <b style="color: black"> Linux命令大全搜索工具-#需FQ:</b>
         <p> <a href="https://yuzhupeng.github.io/linux-command/" target="_blank">https://yuzhupeng.github.io/linux-command/</a></p>
        </div>

               <div>
          <b style="color: black"> Python 中文算法教程-#需FQ:</b>
         <p> <a href="https://yuzhupeng.github.io/python_data_structures_and_algorithms/" target="_blank">https://yuzhupeng.github.io/python_data_structures_and_algorithms/</a></p>
        </div>
          <div>
          <b style="color: black"> Python资源库大全-#需FQ:</b>
         <p> <a href="https://yuzhupeng.github.io/awesome-python-cn/" target="_blank">https://yuzhupeng.github.io/awesome-python-cn/</a></p>
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
let avatar_real= require("@/static/images/me.png");

let imgUrl12 = require("@/assets/imgs/12.png");
let imgUrl13 = require("@/assets/imgs/13.png");

import configs from "@/config/index.js";
const { personalInfo } = configs;
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { personalInfo },
  data() {
    //这里存放数据
    return {
      logo1: imgUrl12,
      logo2: imgUrl13,
      personalInfo,
      phone:phones,
      email:emails,
      avatarreal:avatar_real,
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
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
@import "index";
</style>
