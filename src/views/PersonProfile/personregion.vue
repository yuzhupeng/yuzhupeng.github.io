<!--  -->
<template>
  <div class="responsive-resume">
    <!-- PC端布局 -->
    <div class="pc-layout"
         v-show="!isMobile">
      <div class="rm-main-left">
        <mainleft></mainleft>
      </div>
      <div class="rm-main-right">
        <mainright></mainright>
      </div>
    </div>

    <!-- 移动端布局 -->
    <div class="mobile-layout"
         v-show="isMobile">
      <mobilecontent></mobilecontent>
    </div>

    <!-- 語言切換器 -->
    <div class="language-switcher-container">
      <LanguageSwitcher @language-changed="handleLanguageChange" />
    </div>

    <!-- 返回顶部按钮 -->
    <div v-show="iftop"
         class="totop flexCenter"
         @click="backTop">
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import mainleft from '@/Views/PersonProfile/left.vue'
import mainright from '@/Views/PersonProfile/personright.vue';
import mobilecontent from '@/Views/PersonProfile/mobilecontent.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { mainleft, mainright, mobilecontent, LanguageSwitcher },
  data () {
    //这里存放数据
    return {
      iftop: false,
      isMobile: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 检测移动设备
    checkMobileDevice () {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;

      this.isMobile = isMobileDevice || isSmallScreen;
    },

    // 监听窗口大小变化
    handleResize () {
      this.checkMobileDevice();
    },

    handleScroll () {
      let iftop = window.pageYOffset > 400 ? true : false
      this.iftop = iftop
    },

    backTop () {
      window.scrollTo({ top: 0, behavior: 'smooth', })
    },

    // 處理語言切換
    handleLanguageChange (lang) {
      // 更新頁面標題
      const titles = {
        'zh-CN': '庾柱鵬 | 全棧工程師 - 數字化工廠專家（9年經驗）',
        'en-US': 'Yu Zhupeng | Full-Stack Engineer - Digital Factory Expert (9 Years Experience)'
      }
      document.title = titles[lang] || titles['zh-CN']

      // 轉發事件給子組件
      this.$emit('language-changed', lang)

      // 觸發子組件重新渲染
      this.$forceUpdate()
    }

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 检测是否为移动设备
    this.checkMobileDevice();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);

    // 设置页面标题
    document.title = '庾柱鹏 | 全栈工程师 - 数字化工厂专家（9年经验）';
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
.responsive-resume {
  width: 100%;
  min-height: 100vh;
}

// PC端布局
.pc-layout {
  display: flex;
  min-height: 100vh;

  .rm-main-left {
    flex: 0.25;
    padding: 30px 35px;
    overflow: hidden;
    background: #eeeeee;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  .rm-main-right {
    flex: 0.8;
    padding: 35px 30px 10px 35px;
    overflow-y: auto;
  }

  // 平板适配
  @media (max-width: 1024px) {
    .rm-main-left {
      flex: 0.35;
      padding: 20px 25px;
    }
    .rm-main-right {
      flex: 0.65;
      padding: 25px 20px;
    }
  }
}

// 移动端布局
.mobile-layout {
  width: 100%;
  min-height: 100vh;
}

// 返回顶部按钮
.totop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #2b3a67;
  color: white;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  i {
    font-size: 20px;
    color: white;
  }

  &:hover {
    background-color: #3c8dbc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

// 响应式断点控制
@media (max-width: 768px) {
  .pc-layout {
    display: none !important;
  }

  .totop {
    bottom: 15px;
    right: 15px;
    width: 45px;
    height: 45px;

    i {
      font-size: 18px;
    }
  }
}

@media (min-width: 769px) {
  .mobile-layout {
    display: none !important;
  }
}

// 語言切換器樣式
.language-switcher-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
  }
}
</style>
