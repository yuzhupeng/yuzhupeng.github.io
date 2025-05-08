<!--  -->
<template>
  <div class="rm-main">

    <div class="rm-main-left">
      <mainleft></mainleft>
    </div>
    <div class="rm-main-right">
      <mainright></mainright>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';


import mainleft from '@/Views/PersonProfile/left.vue'
// import mainright from '@/Views/PersonProfile/right.vue';
import mainright from '@/Views/PersonProfile/personright.vue';


export default {
  //import引入的组件需要注入到对象中才能使用
  components: { mainleft, mainright },
  data () {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 设置文档标题
    document.title = '庾柱鹏 | 全栈工程师 - 数字化工厂专家（8年 数字化工厂 项目经验）';

    // 添加SEO元数据
    this.addMetaTag('description', '庾柱鹏 - 8年数字化工厂及企业应用开发经验，精通.NET Core、Vue、微服务架构，领益智造、京瓷信息系统、东莞隽思印刷等企业工作经历');
    this.addMetaTag('keywords', '庾柱鹏,全栈工程师,数字化工厂,智能制造,.NET Core,Vue,微服务,DDD,DevOps');
    this.addMetaTag('format-detection', 'telephone=no');
  },
  addMetaTag (name, content) {
    let meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // 添加页面加载动画
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 300);
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
.rm-main {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .rm-main-left {
    flex: 0.25;
    padding: 30px 35px;
    overflow: hidden;
    background: #eeeeee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    transition: all 0.3s ease;
  }

  .rm-main-right {
    flex: 0.8;
    padding: 35px 30px 10px 35px;
    background: #fff;
    overflow-y: auto;
  }

  // 移动端响应式设计
  @media (max-width: 992px) {
    flex-direction: column;

    .rm-main-left {
      flex: none;
      width: 100%;
      padding: 20px 15px;
    }

    .rm-main-right {
      flex: none;
      width: 100%;
      padding: 20px 15px;
    }
  }

  @media (max-width: 768px) {
    .rm-main-left,
    .rm-main-right {
      padding: 15px 10px;
    }
  }
}

// 全局预加载标记
:global(.loaded) {
  .rm-main {
    opacity: 1;
  }
}
</style>
