<!--  -->
<template>
  <div>
    <Timeline-item class="timeline-item"
                   v-for="(item, idx) in projectlists"
                   :key="idx">
      <div>
        <span class="bg-light-blue">{{ item.startTime }}</span>
      </div>

      <!-- 基本信息 -->
      <Card class="project-card" style="width: 100%">
        <p slot="title" class="titles">
          <Icon type="ios-film-outline"></Icon>
          {{ item.title }}
        </p>
        <a href="#" slot="extra">
          <Icon type="ios-bookmarks-outline"></Icon>
          持续时间：{{ item.duration }}
        </a>

        <p class="project-info"><span class="info-label">所在公司：</span>{{ item.company }}</p>
        <p class="project-info"><span class="info-label">项目职务：</span>{{ item.role }}</p>
        <p class="project-info" v-if="item.teamSize"><span class="info-label">规模：</span>{{ item.teamSize }}</p>
        <p class="project-info" v-if="item.summary"><span class="info-label">摘要：</span>{{ item.summary }}</p>
        <p class="project-info" v-if="item.technologyStack">
          <span class="info-label">项目技术：</span>
          <span>
            <template v-if="item.technologyStack.backend">后端：{{ item.technologyStack.backend }}；</template>
            <template v-if="item.technologyStack.frontend">前端：{{ item.technologyStack.frontend }}；</template>
            <template v-if="item.technologyStack.database">数据库：{{ item.technologyStack.database }}；</template>
            <template v-if="item.technologyStack.devops">DevOps：{{ item.technologyStack.devops }}；</template>
            <template v-if="item.technologyStack.integration">集成：{{ item.technologyStack.integration }}；</template>
          </span>
        </p>
      </Card>

      <BR/>

      <!-- 四段式卡片 -->
      <Card class="project-card" style="width: 100%">
        <p slot="title">
          <Icon type="ios-construct-outline"></Icon>
          关键说明（痛点 / 难点 / 方案 / 效果）
        </p>
        <div class="project-description" v-if="item.businessContext">
          <span class="info-label">背景：</span>{{ item.businessContext }}
        </div>
        <div class="project-description" v-if="item.painPoints && item.painPoints.length">
          <span class="info-label">业务痛点：</span>
          <ul style="margin:0;padding-left:18px;">
            <li v-for="(x, i) in item.painPoints" :key="'pp'+i">{{ x }}</li>
          </ul>
        </div>
        <div class="project-description" v-if="item.challenges && item.challenges.length">
          <span class="info-label">技术难点：</span>
          <ul style="margin:0;padding-left:18px;">
            <li v-for="(x, i) in item.challenges" :key="'ch'+i">{{ x }}</li>
          </ul>
        </div>
        <div class="project-description" v-if="item.solutions && item.solutions.length">
          <span class="info-label">解决方案：</span>
          <ul style="margin:0;padding-left:18px;">
            <li v-for="(x, i) in item.solutions" :key="'so'+i">{{ x }}</li>
          </ul>
        </div>
        <div class="project-description" v-if="item.impact && item.impact.length">
          <span class="info-label">效果：</span>
          <ul style="margin:0;padding-left:18px;">
            <li v-for="(x, i) in item.impact" :key="'im'+i">{{ x }}</li>
          </ul>
        </div>
        <div class="project-description" v-if="item.outcomes && item.outcomes.length">
          <span class="info-label">项目成果：</span>
          <ul style="margin:0;padding-left:18px;">
            <li v-for="(x, i) in item.outcomes" :key="'oc'+i">{{ x }}</li>
          </ul>
        </div>
      </Card>

      <BR/>

      <!-- 原 Projectmessage（优化后 details） -->
      <Card class="project-card" style="width: 100%">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          项目描述
        </p>
        <div class="project-description"
             v-for="(point, index) in item.details"
             :key="index">
          <span class="left__personal-point" /> {{ point }}
        </div>
      </Card>

      <BR/>

      <!-- 效果预览 -->
      <Card class="project-card" style="width: 100%">
        <p slot="title">
          <Icon type="ios-images-outline"></Icon>
          效果预览
        </p>
        <div>
          <el-row :gutter="20" class="preview-row">
            <el-col :span="6"
                    v-for="(img, i2) in item.pictures"
                    :key="i2"
                    class="preview-col">
              <img class="preview-image"
                   :src="img"
                   @click="viewImg(img)" />
            </el-col>
          </el-row>
        </div>
      </Card>
    </Timeline-item>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import configs from "@/config/index.js";

const { projectlists } = configs;

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { projectlists },
  data () {
    //这里存放数据
    return {
      projectlists,
      addressa: [
        {
          starttime: '2017.03',
          time: "14个月",
          title: "数码车间-MES製造執行系統",
          company: '',
          job: '',
          duty: '',
          technology: "1",
          Projectmessage: "2",
          p: [{ sss: require("@/static/images/avatar_real.png") }, { sss: require("@/static/images/avatar_real.png") }],
        },
        {
          starttime: '2017.03',
          title: "quanzhisq111",
          away: "1",
          address: "2",
          p: [{ sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }, { sss: "https://yuzhupeng.github.io/fishyue_files/9-8-lg.jpg" }],
          a: "22",
        },
      ],
      value11: [0, 65],
      marks: {
        33: "了解",
        66: "熟悉",
        100: "精通",
      },
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    viewImg (src) {
      window.open(src);
    },
    download (filename, name) {
      let a = document.createElement('a');
      a.href = '/static/' + filename;
      //路径中'/'为根目录，即index.html所在的目录
      a.download = name;
      a.click();
    },
  },
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
<style>
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
  font-family: 'Source Sans Pro', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
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

/* 新增样式 */
.timeline-item {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: all 0.1s ease;
  overflow: hidden;
}

.project-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.project-info {
  margin: 8px 0;
  line-height: 1.6;
}

.info-label {
  font-weight: bold;
  color: #2b3a67;
}

.project-description {
  margin: 10px 0;
  padding-left: 10px;
  border-left: 3px solid #e3f2fd;
  line-height: 1.6;
}

.preview-row {
  display: flex;
  flex-wrap: wrap;
}

.preview-col {
  padding: 10px;
  transition: all 0.2s ease;
}

.preview-image {
  cursor: pointer;
  height: 100px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
  transition: all 0.2s ease;
  border: 1px solid #eee;
}

.preview-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.floating-toolbar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2b3a67;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  min-width: 44px;
  min-height: 44px;
}

.download-btn:hover {
  background-color: #1e2a4a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 移动端优化 */
@media (max-width: 768px) {
  .project-card {
    padding: 12px;
  }

  .preview-col {
    width: 50%;
  }

  .floating-toolbar {
    bottom: 10px;
    right: 10px;
  }

  .download-btn {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>
