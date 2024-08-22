<!--  -->
<template>
  <div>

    <Timeline-item v-for="(item, findex) in projectlists" :key="findex">
      <div>
        <span class="bg-light-blue">{{item.starttime}}</span>
      </div>
      <Card style="width: 100%">
        <p slot="title" class="titles">
          <Icon type="ios-film-outline"></Icon>
          {{ item.title }}
        </p>
        <a href="#" slot="extra">
          <Icon type="ios-bookmarks-outline"></Icon>
          持续时间：{{ item.time }}
        </a>
         <p>所在公司：{{ item.company }}</p>
        <p>项目职务：{{ item.job }}</p>
       <p>项目职责：{{ item.duty }}</p>
     <p>项目技术：{{ item.technology }}</p>
      </Card>
      <BR />
      <Card style="width: 100%">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          项目描述：

        </p>
        <a href="#" slot="extra">
          <Icon type="ios-bookmarks-outline"></Icon>
          规模：{{item.people}}
        </a>
            <div v-for="(point, index) in item.Projectmessage" :key="index">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="left__personal-point"/>{{point}}
             </div>
      </Card>
      <BR />
      <Card style="width: 100%">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          效果预览：
        </p>
        <div>


          <!-- <div
            v-for="(items, indexs) in item.picture"
            :key="indexs"
            style="width: 33.33333333%; display: inline; padding: 20px;"
          >
            <img
              style="cursor: pointer; height: 100px"
              v-bind:src="items"
              @click="viewImg(items)"
            />
          </div> -->
      <el-row :gutter="20">
        <el-col :span="6" v-for="(items, indexs) in item.picture"
            :key="indexs"
            style="width: 33.33333333%; display: inline; padding: 20px;" class="text item">

           <img
              style="cursor: pointer; height: 100px"
              v-bind:src="items"
              @click="viewImg(items)"
            />



          </el-col>

      </el-row>




        </div>
      </Card>


      <!-- <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
      </el-card> -->



    </Timeline-item>


  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import configs from "@/config/index.js";
const {projectlists} = configs;

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {projectlists},
  data() {
    //这里存放数据
    return {
      projectlists,
      addressa: [
        {
          starttime:'2017.03',
          time: "14个月",
          title: "数码车间-MES製造執行系統",
          company:'',
          job:'',
          duty:'',
          technology: "1",
          Projectmessage: "2",
          p: [{ sss:  require("@/static/images/avatar_real.png") }, { sss:  require("@/static/images/avatar_real.png") }],
        },
        {
          starttime:'2017.03',
          title: "quanzhisq111",
          away: "1",
          address: "2",
          p: [{ sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" },{ sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" },{ sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }],
          a: "22",
        },
      ],
      value11: [0, 65],
      marks: {
        33: "了解",
        66: "熟悉",
        100: "精通",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
     viewImg(src) {
      window.open(src);
    },},
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
<style >
.ivu-card-head p {
  color: #337ab7;
  font-weight: 600;
}
.bg-light-blue {
  background-color: #3c8dbc !important;
  color: #fff !important;
  font-weight: 600;
  padding: 5px;
  display: inline-block;
  background-color: #fff;
  border-radius: 4px;
  font-family: "Source Sans Pro", "Microsoft YaHei", "Helvetica Neue", Helvetica,
    Arial, sans-serif;

  /* margin-right: 100%; */
  margin-bottom: 15px;
}

 .el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
