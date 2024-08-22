<!--  -->
<template>
    <div class="rm-main">
    <div class="rm-main-left">
            <mainleft></mainleft>
        </div>
        <div class="rm-main-right">
            <mainright></mainright>
        </div>

     <div v-show="iftop" class="totop flexCenter"  @click="backTop">
      <i class="el-icon-caret-top" style="color: #CC1720"></i>
    </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import mainleft from '@/Views/PersonProfile/left.vue'
import mainright from '@/Views/PersonProfile/personright.vue';

export default {
//import引入的组件需要注入到对象中才能使用
components: {mainleft,mainright},
data() {
//这里存放数据
return {
   iftop: false
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

      handleScroll() {
        let iftop = window.pageYOffset > 400 ? true : false
        this.iftop = iftop
      },
      backTop() {
        window.scrollTo({top:0,behavior: 'smooth',})
      }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 window.addEventListener('scroll', this.handleScroll)
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {
   window.removeEventListener('scroll', this.handleScroll)

}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
    .rm-main {
        display: flex;
        .rm-main-left {
            flex: 0.25;
            padding: 30px 35px;
            overflow: hidden;
            background: #eeeeee;
        }
        .rm-main-right {
            flex: 0.8;
            padding: 35px 30px 10px 35px;
        }
    }
    .totop {
    position: fixed;
    bottom: 100px;
    right: 40px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 5;
        .el-icon-caret-top{
      color: #fff;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
  }

  .totop:hover .el-icon-caret-top {
    color: rgba(51, 153, 255, 1);
}
 
</style>
