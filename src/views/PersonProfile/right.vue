<!--  -->
<template>
  <div class="left">
        <header class="left__title">
            <span/><h2>项目经历</h2><span/>
        </header>
        <div v-for="{id, points, name, date, link, dec, account, password} in projectList" :key="id" class="left-item">
            <div class="left-item-header">
                <span>{{date}}</span>
                <h3>{{name}}</h3>
            </div>
            <div style="padding-left: 15px">
                <p style="margin-bottom: 0">
                <pre>{{dec}}</pre>
                </p>
                <p style="margin-top: 5px">链接:{{link}} {{account && `(测试账号:${account} 密码:${password})`}}</p>
                <div v-for="(point, index) in points" :key="index">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="left__personal-point"/>{{point}}
                </div>
            </div>
        </div>
 
        <div class="left__personal">
            <header class="left__title">
                <span/><h2>个人特点</h2><span/>
            </header>
            <div style="margin-top: 12px">
                <p v-for="(item, index) in traitList" :key="index">
                    <!--<span class="left__personal-point"/>-->
                    {{` ${index + 1}. ${item}`}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import configs from "@/config/index.js";
const {projectList, traitList} = configs;
export default {
//import引入的组件需要注入到对象中才能使用
components: {projectList,traitList},
data() {
//这里存放数据
return {
          projectList,
          traitList
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
handleClickLink(link) {
                window.open(link);
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
    @import 'indexs';
</style>