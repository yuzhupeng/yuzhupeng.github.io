//项目经历
const projectList = [{
    id: 0,
    name: '银河智投',
    date: '2017-11',
    link: 'http://yh178178.com',
    detail: '/yh',
    account: 13266705799,
    password: 123456,
    dec: `银河智投是个金属交易所网站,主要功能有交易、平仓、出入金、展示行情数据、图示化数据等。
主要技术栈: React+Mobx+Typescript
组件样式: antd+less。`,
    points: [
        'mobx状态管理库管理数据,实现多组件数据同步,实时更新。',
        '使用typescript增加类型检查,提高开发和维护的效率。',
        'less提取公共样式,cssModules限制组件样式作用域。',
        '基于react-helmet实现黑白主题。',
        '基于react-stockchart定制了股票图表。',
        '实现路由按需加载。',
    ],
}, {
    id: 1,
    name: '基于vue后台管理模版',
    date: '2017-10',
    link: 'https://github.com/tossers/vue-template-backstage',
    detail: '/yh',
    account: '',
    password: '',
    dec: '基于Vue+Mockjs+ElementUI+echarts后台管理模板.',
    points: [
        '基于vue,vuex,Mock后台管理模版实践。',
        '基于elementUI,echart,提供后台管理常见使用场景。',
        '使用vuex管理状态,vue-router实现路由按需加载。',
        '使用mock实现脱离后端开发。',
        '使用rem单位实现浅度自适应。',
    ],
}, {
    id: 2,
    name: '摩尔交易所',
    date: '2017-8',
    link: 'https://trade.moer.pro',
    detail: '/yh',
    account: 13266705799,
    password: 123456,
    dec: `摩尔交易所是个交易所网站,主要功能有交易,平仓,出入金,展示行情数据,图示化数据等。
主要技术栈: React+Mobx
组件样式: antd+less。`,
    points: [
        'mobx状态管理库管理数据,实现多组件数据同步,实时更新。',
        '基于Echarts定制股票图表。',
        '使用react-intl实现多语言功能。',
        'less提取公共样式,cssModules限制组件样式作用域。',
        '根据路由按需加载。',
        '数据节流,优化websocket实时推送带来的频繁渲染。',
    ],
}, {
    id: 3,
    name: '交易所后台展板',
    date: '2017-6',
    link: 'http://dashboard.quant.tuling.me',
    detail: '/yh',
    account: 'cds',
    password: 123456,
    dec: `这是监控数据的内部网站,主要功能是后台数据展示,图示化数据,对数据进行增删改查操作等。
主要技术栈: React+dva,
组件样式: antd+highchart+css。`,
    points: [
        '使用阿里开源项目dva手脚架',
        '使用highcharts图示化数据。',
    ],
}];
//个人特点
const traitList = [
    '深入前端工程化,拥抱组件化和函数式编程,有dry编程习惯。',
    '会总结项目开发和维护的难点痛点,思考解决方案。',
    '认真负责,有较强的学习能力,对新事物有较强的接受能力。',
    '有时间观念,能在规定时间内完成任务。',
    '知乎,github重度使用者,关注前端技术的最新发展,会收听技术大牛的Live。',
    '热爱阅读技术书籍,喜欢的书目有《深入浅出React和Redux》,《你不知道的JavaScript》。',
];
//技术栈
const skillList = [
    '.net core',
    'Restful Api',
    'vue',
    'jQuery',
    'html',
    'SQL,PGSQL MongoDb',
    'javascript',
    'css',
    'webpack',
    'Vuex',
    'ES6',
    'webpack',
    'elementUI',
    'echarts',
    'Dapper',
];
//社交链接
const social = [{
    id: 0,
    name: '博客',
    url: '//tossers.github.io',
    icon: '/blog.png',
    text: '//tossers.github.io',
}, {
    id: 1,
    name: 'GitHub',
    url: '//github.com/tossers',
    icon: '/github.png',
    text: '//github.com/tossers'
}, {
    id: 2,
    name: '知乎',
    url: '//www.zhihu.com/people/wo-shi-you-xiang/activities',
    icon: '/zhihu.png',
    text: '//www.zhihu.com/people/wo-shi-you-xiang/activities'
}, {
    id: 3,
    name: '邮箱',
    url: '',
    icon: '/email.png',
    text: '371777394@qq.com'
}, {
    id: 4,
    name: '电话',
    url: '',
    icon: '/phone.png',
    text: '13266705799',
}];
//个人信息
const personalInfo = {
    name: '庾柱鹏',
    sex: '男',
    position: '高级全栈工程师',
    personalInfo: '9年数字化工厂及企业应用开发经验',
    birthday: '1992.09',
    university: '东莞理工学院城市学院',
    major: '软件工程',
    education: '本科',
    graduation: '2016年',
    english: '四级',
    social,
    skillList,
};
// //项目列表
// const projectlists = [
//     {
//         starttime: '2022.10',
//         time: "24个月",
//         title: "领益智造 全球化分布式 MOM-管理系统(QMSWMS3.0) 关键项目-置顶" ,
//         company: '广东领益智造股份有限公司',
//         job: '开发工程师（后端）',
//         duty: '系统核心功能设计,详细设计,业务&系统 框架的搭建和核心功能模块的设计实现,对接集团内系统 SRM,OA,ERP(SAP) 实现集团 数字化工厂总体目标,以及部署-发布-上线（devops）全流程',
//         technology: ".net core 5,vue,Pgsql,redis,nginx,docker,git,Jenkins,portal,Prometheu,Grafana,DingTalk",
//         people: '17人',
//         Projectmessage: [
//              '业务:',
//              '1.项目包含业务：sap单据管理，物料出入库，成品出入库，配送管理，库存盘点，容器最小包装管理,无纸化流程,报关自动化...',
//              '2.功能包括：基础资料，库存管理，拆合箱，标签打印，报表管理，初始化数据管理，品质管理，看板管理，位置管理 等功能',
//              '3.产品追溯模块：通过批号、容器等信息追溯制造过程。',
//              '4.看板模块: 内置看板自适应模板，无纸化单据效率看板，定点投放看板，工位操作看板、物流指示看板。',
//              '5.集团多工厂动态标签，跨组织数据共享，对接SRM系统 送货单,po单  标签打印 收货 出入库管理模块',
//              '6.SAP-WMS 报关自动化称重管理模块',
//              '7.电镀物料失效防呆模块',
//              '8.基于集团下 不同地区 不同厂区 不同业务 实现发料动态可配置 多维度（物料，工厂，日期，批次，供应商，客户，人员）先进先出  规则 ',
//              '9.DDD-容器-库存结构 动态处理 集团内 冲压,模切,注塑,CNC 不同业务，相关库存不同物料属性存储，跨组织-跨业务-无差别共享 标签数据',
//              '10.标签配置化管理模块',
//              '关键技术：',
//              '分布式 微服务架构 WMS, BASE（质检公共模块，SN管理，定时任务,标签打印管理） ，Interface(字典，参数，权限，角色，钉钉，组织，人员) ，QMS ，BI（数据看板） ',
//              'YARP+AgileConfig动态配置的代理网关 ',
//              '基于 minIO组件 分布式 文件服务',
//              '基于当前服务器负载，动态配置 服务器，接口 读写分离 修改sugarsql orm',                        
//              'Prometheus+Grafana  docker 微服务 服务器 监控&告警',
//              'redis热缓存,库存，标签，容器 冷热数据分离 历史数据归档处理',
//              '抽象工厂模式 处理 sap单据领域模型，分布式锁处理 PDA 重复提交 和 单据重复创建'
//         ],
//         picture: [
//             require("@/static/project/wms3/1.jpg"),
//             require("@/static/project/wms3/2.jpg"),
//             require("@/static/project/wms3/3.jpg"),
//             require("@/static/project/wms3/4.jpg"),
//             require("@/static/project/wms3/5.jpg"),
//             require("@/static/project/wms3/6.jpg"),
//             require("@/static/project/wms3/7.jpg"),
//             require("@/static/project/wms3/8.jpg"),
//             require("@/static/project/wms3/9.jpg"),
//             require("@/static/project/wms3/10.jpg"),
//             require("@/static/project/wms3/11.png"),
//             require("@/static/project/wms3/12.png"),
//             require("@/static/project/wms3/13.png"),
//             require("@/static/project/wms3/14.png"),
//             require("@/static/project/wms3/15.png"),
//             require("@/static/project/wms3/16.png"),
//             require("@/static/project/wms3/17.png"),
//             require("@/static/project/wms3/18.jpg"),
//             require("@/static/project/wms3/19.jpg"),
//             require("@/static/project/wms3/20.jpg"),
//             require("@/static/project/wms3/21.png"),
//             require("@/static/project/wms3/22.jpg"),
//             require("@/static/project/wms3/23.jpg"),
//             require("@/static/project/wms3/24.png"),
            

            
//         ],
//     },


//     {
//         starttime: '2025.04',
//         time: "5个月~至今",
//         title: "领益多组织-总务类费用化采购系统",
//         company: '广东领益智造股份有限公司',
//         job: '开发工程师（全栈）',
//         duty: ' JAVA  SAAS商城 集成OA SRM SAP系统,实现统一集团费用化采购审批流程, 业务&系统 框架的搭建和核心功能模块的设计实现，以及 前后端 构建 测试 部署CICD',
//         technology: "vue 2,IView,Element-UI,Vuex,axios,webpack,Vue CLI 4,JAVA,Springboot,Maven,Mybatis-Plus,mysql,RocketMQ,redis,nginx,docker,docker-compose,git,Jenkins, ",
//         people: '5人',
//         Projectmessage: [
//              '业务： 总务类费用化采购系统，费用化采购审批流程 构建一个基于环节应用的 MRO 订单管理模块，支持商品输入、商品事务设置（含工厂、成本中心分配）、后续调用 SAP 预算接口进行预算检查、预算锁定、状态合线管理，提交 OA 审批 更新订单，创建 OA 模型',
//                 '1. 用户在购物车中选择商品并提交订单',
//                 '2. 系统验证 SAP 信息的完整性',
//                 '3. 创建临时订单草稿用于预算检查和锁定',
//                 '4. 同步调用预算检查服务（需要校验不同 组织方 1.赛尔康 2.集团） 根据不同组织方调用不同的接口',
//                 '5.从 SAP 同步 物料商品数据从商城平台传输至OA，导入成本中心、物料组、工厂、资产分类、物料信息、预算编码 等数据',
//                 '6. 预算检查和锁定成功后，创建普通订单',
//                 '7. 创建 MRO 订单草稿并关联普通订单',
//                 '8. 更新订单状态为待 OA 抛转',
//                 '9. 发送 OA 抛转消息（异步处理）（需要校验不同 组织方 1.赛尔康 2.集团） 根据不同组织方调用不同的接口',
//                 '10. OA 系统进行审批流程',
//                 '11. 接收 OA 审批结果并更新订单状态 ',
//             '技术：',
//             '- API 层：买家buyer-api,商家 seller-api ,通用 common-api, 后台管理端  manager-api 等独立服务',
//             '- 业务层：`framework`包含所有核心业务逻辑',
//             '- 数据层：Redis + MongoDB 缓存',
//             '- 消息队列：RocketMQ 处理异步任务（如订单状态变更 ,OA 审批状态变更，sap预算检查和锁定）',
//             '- 任务调度：XXL-JOB 处理定时任务（如数据同步）',
//             '- 监控系统：Spring Boot Admin 监控应用状态',
//             '- 观察者模式：`MemberRegisterEvent`处理注册事件链',
//             '- Elasticsearch 作为商品搜索引擎，提供高效的全文检索、过滤、聚合分析',
//             '- 领域驱动设计：MRO 模块采用 DDD 架构',

          
//         ],
//         picture: [
//             require("@/static/project/mro/1.png"),
//             require("@/static/project/mro/2.png"),
//             require("@/static/project/mro/3.png"),
//             require("@/static/project/mro/4.png"),
//             require("@/static/project/mro/5.png"),
//             require("@/static/project/mro/6.png"),
//             require("@/static/project/mro/7.png"),
//             require("@/static/project/mro/8.png"),
//             require("@/static/project/mro/9.png"),
//             require("@/static/project/mro/10.png"),
//             require("@/static/project/mro/11.png"),
//             require("@/static/project/mro/12.png"),
//             require("@/static/project/mro/13.png"),
//               require("@/static/project/mro/14.png"),
//                 require("@/static/project/mro/15.png"),
//            require("@/static/project/mro/16.png"),
//         ],
//     },



//     {
//         starttime: '2024.11',
//         time: "4个月",
//         title: "领益智造 全球化 TMS 管理系统",
//         company: '广东领益智造股份有限公司',
//         job: '开发工程师（全栈）',
//         duty: ' 项目问题调研,核心功能重构和现有业务的痛点难点疏通,实现全球化印度地区独立上线,以及前后端 构建 测试 部署CICD',
//         technology: ".net core 3,vue,mysql,redis,nginx,docker,git,Jenkins,layui,vue2,3,IView,Element-UI,Vuex,axios,webpack",
//         people: '8人',
//         Projectmessage: [
//               '业务：TMS 后台管理系统，TMS 设备搬运系统,TMS 手机端，TMS PC端，TMS 报表系统，TMS ,TMS运力资源',
//              '1.解决痛点:解决以上前端 Cdn资源在不同厂区加载卡顿问题 ，优化前端部分UI页面 布局问题，解决 前端项目大量页面js错误',
//              '2.解决后端部分接口查询卡顿慢的问题，优化查询索引设置',
//              '3.配合印度 信息审核, 前后端框架实现印度数据隔离， docker 部署前后端微服务 ',
//              '4.前后端项目 基于jenkins 自动构建 自动部署 ',
//              '5.领益物流微信小程序 开发 基于uniapp 实现 移动端  进出口复核 竞价 询价 等业务'
//         ],
//         picture: [
//             require("@/static/project/tms/1 (1).png"),
//             require("@/static/project/tms/1 (2).png"),
//             require("@/static/project/tms/1 (3).png"),
//             require("@/static/project/tms/1 (4).png"),
//             require("@/static/project/tms/1 (5).png"),
//             require("@/static/project/tms/1 (6).png"),
//             require("@/static/project/tms/1 (7).png"),
//             require("@/static/project/tms/1 (8).png"),
//             require("@/static/project/tms/1 (9).png"),
//             require("@/static/project/tms/1 (10).png"),
//             require("@/static/project/tms/1 (11).png"),
//             require("@/static/project/tms/1 (12).png"),
//             require("@/static/project/tms/1 (13).png"),
//             require("@/static/project/tms/1 (14).png"),
//                require("@/static/project/tms/1 (15).png"),
//                   require("@/static/project/tms/1 (16).png"),
//                   require("@/static/project/tms/1 (17).png"),
//                   require("@/static/project/tms/1 (18).png"),
//         ],
//     },



     
//     {
//         starttime: '2022.04',
//         time: "6个月",
//         title: "领益智造WMS2.0管理系统",
//         company: '广东领益智造股份有限公司',
//         job: '开发工程师（全栈）',
//         duty: '项目问题调研,核心功能重构和现有业务的痛点难点疏通,对接集团内系统（SRM,OA,MES,QMS,ERP(SAP)）,以及部署和上线',
//         technology: ".net core 3.1,Quzartz,sqlserver,swagger,vue,nginx,jQuery,IIS,",
//         people: '9人',
//         Projectmessage: [
//             '1. wms sap 数据同步异常处理,OA WMS SAP 审批流程数据异常解决',
//             '2.处理不同工厂大批量提交库存过账SAP数据，数据库卡死问题',
//             '3.后台表结构数据优化-删除无效表，数据，字段调整，索引优化',
//             '4.建立物料时效管理模块，在mes 生产 成品 半成品 原材料 入库出库时监控其有效期，并给到品质 进行审批是否放行',
//             '5.解决前端PDA 扫描重复，识别条码异常，使用便捷性，流畅性，人机交互异常等问题',
//             '5.现场业务异常，人员使用操作异常整理和跟进' 
//         ],
//         picture: [
//             require("@/static/project/wms2/2-1 (1).png"),
//             require("@/static/project/wms2/2-1 (2).png"),
//             require("@/static/project/wms2/2-1 (3).png"),
//             require("@/static/project/wms2/2-1 (4).png"),
//             require("@/static/project/wms2/2-1 (5).png"),
//             require("@/static/project/wms2/2-1 (6).png"),
//             require("@/static/project/wms2/2-1 (7).png"),
//             require("@/static/project/wms2/2-1 (8).png"),
//             require("@/static/project/wms2/2-1 (9).png"),
//             require("@/static/project/wms2/2-1 (10).png"),
//             require("@/static/project/wms2/2-1 (11).png"),
//             require("@/static/project/wms2/2-1 (12).png"),
//         ],
//     },


//     {
//         starttime: '2022.02',
//         time: "4个月",
//         title: "SKC 商务派车及费用分摊管理系统",
//         company: '京瓷信息系统(上海)有限公司-东莞分公司',
//         job: '开发工程师（全栈）',
//         duty: '项目组织工作,开发工作量评估、开发任务分配,框架的搭建和重要功能模块的设计实现',
//         technology: ".net core,Restful Api,EntityFrameWorkCore,SQL,Dapper,Quzartz,vue,IView,Element-UI,Vuex,axios,webpack",
//         people: '5人',
//         Projectmessage: [
//             '1. 项目包含：BWF数据抓取模块,用车申请单维护管理模块,短信消息管理模块,司机-车辆-部门-地点-信息管理,分摊系数生成分摊管理',
//             '2. BWF数据抓取模块：爬虫抓取BWF 用车申请的审批单数据,调用百度地图API计算路程公里数,创建用车申请单',
//             '3. 短信消息管理模块：获取用车申请单,司机和乘客信息,调用阿里云短信平台发送乘车短信',
//             '4. 个人主要负责：处理以上所有模块',
//         ],
//         picture: [
//             require("@/static/project/skccar/1.png"),
//             require("@/static/project/skccar/2.png"),
//             require("@/static/project/skccar/3.png"),
//             require("@/static/project/skccar/4.png"),
//             require("@/static/project/skccar/5.png"),
//             require("@/static/project/skccar/6.png"),
//             require("@/static/project/skccar/7.png"),
//             require("@/static/project/skccar/8.png"),
//             require("@/static/project/skccar/9.png"),
//         ],
//     },
//     {
//         starttime: '2020.12~2021.06',
//         special: 'true',
//         time: "6个月",
//         title: "全球数据货币交易所-数据采集",
//         company: '个人项目',
//         job: '个人',
//         duty: '实现 全球大型头部数字货币交易所 数据实时采集 展示行情数据,图示化数据等',
//         technology: "python,websckoet,c#,webAPI,redis,sqlserver,mongodb,python,VarN proxy",
//         people: '1人',
//         Projectmessage: [
//             '1. 对：Binance,Bitmex,OKEX,FTX,huobi,CoinBase,Bybit,deribit,等平台的全部交易对,采集,现货,合约（交割,永续）, 交易数据(行情波动大时,每小时数据量可达数十亿条)',
//             '2. 对接上述平台的 公共数据 中英文 API ,采集 持仓数据,强平订单,费率,交易对,等信息',
//             '3. 数据采集模块：通过websocket 采集 各个交易所的永续，现货，期货交易对的时序数据，将数据加入到消息队列中',
//             '4. 数据清洗模块：对每一个交易信息数据进行 唯一性，完整性，一致性的处理，并对交易的价值进行计算，确认数据的完整性后移出队列',
//             '5. 数据分析以及持久化模块：对每一个交易对数据进行小时汇总，得出单位小时内所有交易所 的一个交易对(BTC)的 永续，现货，期货 的净成交汇总数据',
//             '6. 数据可视化模块：计划中...',
//         ],
//         picture: [
//             require("@/static/project/projectcoindata/1.png"),
//             require("@/static/project/projectcoindata/2.png"),
//             require("@/static/project/projectcoindata/3.png"),
//             require("@/static/project/projectcoindata/4.png"),
//             require("@/static/project/projectcoindata/5.png"),
//             require("@/static/project/projectcoindata/6.png"),

//         ],
//     },

//     {
//         starttime: '2021.11',
//         time: "6个月",
//         title: "SKC固定资产管理系统-重构",
//         company: '京瓷信息系统(上海)有限公司-东莞分公司',
//         job: '开发工程师（全栈）',
//         duty: '项目组织工作,框架的搭建和重要功能模块的实现,',
//         technology: ".net core,Restful Api,EntityFrameWorkCore,SQL,Dapper,Quzartz,vue,IView,Element-UI,Vuex,axios,webpack",
//         people: '6人',
//         Projectmessage: [
//             '1. 项目包含：AX固定资产检收数据导入,固定资产维护,固定资产变动及处置,资产标签打印,固定资产盘点对象数据等37个页面',
//             '2. 个人主要负责：根据Winform界面 使用VUE重构 其中大部分的页面,对各个模块的代码进行封装以及维护,并且根据业务需求对代码进行更新,提高代码复用率。',
//         ],
//         picture: [
//             require("@/static/project/projectassest/1.png"),
//             require("@/static/project/projectassest/2.png"),
//             require("@/static/project/projectassest/3.png"),
//             require("@/static/project/projectassest/4.png"),
//             require("@/static/project/projectassest/5.png"),
//             require("@/static/project/projectassest/6.png"),
//             require("@/static/project/projectassest/7.png"),

//         ],
//     },
//     {
//         starttime: '2021.05',
//         time: "4个月",
//         title: "SKC数据-RPA管理系统",
//         company: '京瓷信息系统(上海)有限公司-东莞分公司',
//         job: '开发工程师（全栈）',
//         duty: '项目需求调研,项目的功能设计,详细设计,框架的搭建和所有功能模块的设计实现,以及部署和上线',
//         technology: ".net,Quzartz,python,图像处理,爬虫,PyPDF2,Pillow,pandas,BeautifulSoup",
//         people: '3人',
//         Projectmessage: [
//             '1. 项目包含：票根网发票数据爬取模块,KPTG 数据自动化处理模块,简历系统自动化模块,定时任务管理模块',
//             '2. 票根网发票数据爬取模块：按月份批量抓取发票信息,批量合并发票pdf,读取发票pdf信息,合并并统计生成发票金额信息EXCEL',
//             '3. KPTG 数据自动化处理模块:采购订单自动下载,检收单自动打印整合,下载采购单数据自动发送邮件',
//             '4: 简历系统自动化模块: 问卷星招聘签名批量自动下载API,Sony相机 拍照API对接,python处理免冠照片剪辑',
//             '5. 个人主要负责以上所有模块开发',
//         ],
//         picture: [

//         ],
//     },
//     {
//         starttime: '2021.02',
//         time: "4个月",
//         title: "SKC-Bus约车管理系统",
//         company: '京瓷信息系统(上海)有限公司-东莞分公司',
//         job: '开发工程师（全栈）',
//         duty: '项目需求调研,项目的功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
//         technology: "微信小程序，.net core,vue,Restful Api,IView,axios,webpack,SQL,Dapper,Quzartz",
//         people: '5人',
//         Projectmessage: [
//             '1.项目包含：微信小程序模块,后台微服务,后台数据管理模块',
//             '2.微信小程序：线路维护,预约总览,工作日历维护,预约乘车班次,消息推送&自动推送,用户信息,角色权限编辑',
//             '3.后台数据微服务：上传日历,上传用户信息,获取班次信息,获取线路信息,获取预约信息等',
//             '4.个人主要负责：后台微服务,后台数据报表管理模块,设计小程序UI界面'

//         ],
//         picture: [
//             require("@/static/project/skcbus/1.png"),
//             require("@/static/project/skcbus/2.png"),
//             require("@/static/project/skcbus/3.png"),
//             require("@/static/project/skcbus/4.png"),
//             require("@/static/project/skcbus/5.png"),
//             require("@/static/project/skcbus/6.png"),
//             require("@/static/project/skcbus/7.png"),
//             require("@/static/project/skcbus/8.png"),
//             require("@/static/project/skcbus/9.png")
//         ],
//     },
//     {
//         starttime: '2020.11',
//         time: "3个月",
//         title: "电力可视化系统",
//         company: '京瓷信息系统(上海)有限公司-东莞分公司',
//         job: '开发工程师（全栈）',
//         people: '3人',
//         duty: '根据influxdb和grafana进行框架的搭建,设计电流,电压,功率,用电情况的BI展示',
//         technology: "influxdb,grafana,AJAX,.NET WebApi,Linux",
//         Projectmessage: [
//             '1.智能电表数据采集模块,Grafana 图表展示模块(ABC电流,ABC电压,用电量统计,峰谷平电价的计算),短信报警模块',
//             '2.根据三相电表,ABC电流,ABC电压,功率,分别统计出13台变压器的 用电情况,根据工业用电电价阶梯表计算每天,每月用电的量,汇总得出不同年份同一天的对比图表',
//             '3.监控十三台 变压器的 电压,电流,功率 对超过设定的阈值进行短信报警提醒',
//             '4.个人主要负责：grafana图表的制作,包含influxdb sql 的编写,以及峰谷平电价的计算'
//         ],
//         picture: [
//             require("@/static/project/projectelect/1.png"),
//             require("@/static/project/projectelect/2.png"),
//             require("@/static/project/projectelect/3.png"),
//             require("@/static/project/projectelect/4.png"),
//             require("@/static/project/projectelect/5.png")

//         ],
//     },
//     {
//         starttime: '2020.08',
//         time: "3个月",
//         title: "AEO体系管理系統",
//         people: '3人',
//         company: '京瓷信息系统(上海)有限公司-东莞分公司',
//         job: '开发工程师（全栈）',
//         duty: '整体项目的评估、选择合适框架和组件,对卡顿的页面的和异常bug点进行重构和修改',
//         technology: "ASP.net,ASP.net MVC,Web Api,bootstrap,JQuery,SQL",
//         Projectmessage: [
//             '1.对现有AEO系统进行多公司模块功能修改,多公司模块化下处理多库操作的处理',
//             '2.优化 使用Bootstap table treetable优化 体系管理审核模块卡顿问题'
//         ],
//         picture: [
//             require("@/static/project/projectaeo/1.png"),
//             require("@/static/project/projectaeo/12.png"),
//             require("@/static/project/projectaeo/13.png"),
//             require("@/static/project/projectaeo/14.png"),
//             require("@/static/project/projectaeo/15.png")
//         ],
//     },
//     {
//         starttime: '2019.12',
//         time: "12个月",
//         title: "数码车间-MES精益製造執行系統",
//         company: '东莞隽思印刷有限公司',
//         job: '高级开发工程师（全栈）',
//         people: '8人',
//         duty: '项目组织工作,项目需求调研,功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
//         technology: "ASP.net MVC,Spring.net,Nhibernate,Web Api,knockout.js,echarts,Ext.js,JQuery,light.7.css,SQL",
//         Projectmessage: [
//             '1. 系统主要功能模块:包括基础设置、訂單模塊、工作票模塊、生產訂單管理模塊、補數模塊、品質模塊、KPI模塊、MTS領料模塊、货架模块,报表模块,資源管理模塊 APS生产计划管理模塊等.',
//             '2. 包含中间件：实时显示货架模块,状态机组件,sql动态可配置报表,基于echar配置图表组件',
//             '3. 项目目标：达成工业4.0的认证配合公司在香港上市',
//             '4. 个人主要处理：基础设置,订单模块,工作票模块,MTS領料模塊,货架模块',
//         ],
//         picture: [
//             require("@/static/project/control/9-1-lg.jpg"),
//             require("@/static/project/control/9-2-lg.jpg"),
//             require("@/static/project/control/9-3-lg.jpg"),
//             require("@/static/project/control/9-4-lg.jpg"),
//             require("@/static/project/control/9-5-lg.jpg"),
//             require("@/static/project/control/9-6-lg.jpg"),
//             require("@/static/project/control/9-7-lg.jpg"),
//             require("@/static/project/control/9-8-lg.jpg"),
//             require("@/static/project/control/9-9-lg.jpg")
//         ],
//     },
//     {
//         starttime: '2018.08',
//         title: "OEM-實時車間管理系統(APS)",
//         time: "9个月",
//         company: '东莞隽思印刷有限公司',
//         job: '软件工程师',
//         people: '6人',
//         duty: '项目组织工作,项目需求调研,功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
//         technology: "WPF,ASP.net MVC,Spring.net,Nhibernate,Web Api,knockout.js,Ext.js,JQuery,light.7.css,SQL",
//         Projectmessage: [
//             '1.系统主要功能模块:PMC車間管理模塊、CTP看板、纸料看板、印刷实时显示目视化看板、OEM车间效率实时达成看板、异常追踪看板、后工序水塘产能看板.',
//             '2.包含中间件：状态机组件,可配置工厂日历,基于业务的规则引擎组件',
//             '3.项目目标：管理人员通过印刷实时显示目视化看板,OEM车间效率实时达成看板,异常追踪看板等看板,监控订单的进度,根据印刷物料状态实时调控订单生产进度,并对异常订单及时跟进保证三班的生产效率',
//             '4.PMC导入MPS的計劃生產訂單到系统,系统根據業務規則（物料狀態,物料配套,当前车间产能情況）和印刷部的印刷規則來調控OEM訂單的生產順序。通过印刷实时显示目视化看板,OEM车间效率实时达成看板,异常追踪看板等看板,监控订单的生成进度.',
//             '5.个人主要负责：除了CTP看板和异常追踪看板以外的模块'
//         ],
//         picture: [
//             require("@/static/project/control/8-1-lg.jpg"),
//             require("@/static/project/control/8-2-lg.jpg"),
//             require("@/static/project/control/8-3-lg.jpg"),
//             require("@/static/project/control/8-4-lg.jpg"),
//             require("@/static/project/control/8-5-lg.jpg"),
//             require("@/static/project/control/8-6-lg.jpg")
//         ],
//     },
//     {
//         starttime: '2017.09',
//         time: "5个月",
//         title: "美泰FVT项目",
//         company: '东莞隽思印刷有限公司',
//         job: '软件工程师',
//         people: '4人',
//         duty: '项目部分的需求调研,功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
//         technology: "Web Api,Nhibernate,ASP.net,JQuery,Javascript,css,sql",
//         Projectmessage: [
//             '1. 系统主要功能模块：物流指令流出、物流指令流入、工作指令標籤上机执行、工作指令標籤工作指令下机完成、物料出庫、流程記錄查詢、物料查詢、區域設定、稿袋录入、美泰原料批次报表模块.',
//             '2. 项目目标：追溯生产订单生产过程中使用的原料批次信息,防止生產流程中出現使用錯誤的生產原料,一旦物料出现异常,可即可追溯原料批次信息.',
//             '3. 與客戶約定能夠追溯物料的批次信息,则可降低成品/半成品的测试频率,以降低测试成本.',
//             '4. 个人主要负责：除了美泰原料批次报表模块的其他模块'
//         ],
//         picture: [
//             require("@/static/project/control/7-1-lg.jpg"),
//             require("@/static/project/control/7-2-lg.jpg"),
//             require("@/static/project/control/7-3-lg.jpg"),
//             require("@/static/project/control/7-4-lg.jpg"),
//             require("@/static/project/control/7-5-lg.jpg"),
//             require("@/static/project/control/7-6-lg.jpg")
//         ],
//     },
//     {
//         starttime: '2017.03',
//         title: "PMS项目管理系统",
//         time: "8个月",
//         company: '东莞隽思印刷有限公司',
//         job: '见习工程师',
//         people: '4人',
//         duty: '模块的实现和维护',
//         technology: "WPF,SQL,Web Api,Nhibernate,Web Api,SSO,spring.net",
//         Projectmessage: [
//             '1. 系统主要功能模块: 项目管理,任务管理,日历设置,项目模版管理,资源管理,用户管理,报表管理.',
//             '2. 个人主要负责：对任务流程中的-子流程与PE设计管理系统数据交互模块 进行封装以及维护,并且根据业务需求对代码库进行更新,修正的业务代码中的错误以及提高程序的性能。'
//         ],
//         picture: [
//             require("@/static/project/control/5-1-lg.jpg"),
//             require("@/static/project/control/5-2-lg.jpg"),
//             require("@/static/project/control/5-3-lg.jpg"),
//             require("@/static/project/control/5-4-lg.jpg"),
//             require("@/static/project/control/5-5-lg.jpg"),
//             require("@/static/project/control/5-6-lg.jpg")
//         ],
//     },
// ];

const projectlists = [
  {
    startTime: '2025.04',
    duration: '5个月~至今',
    title: '领益多组织-总务类费用化采购系统（MRO）',
    company: '广东领益智造股份有限公司',
    role: '开发工程师（全栈）',
    teamSize: '5人',
    summary: '负责 MRO 费用化采购平台的核心业务与前后端实现，打通 OA / SRM / SAP，建设统一预算校验与审批流并实现 CICD 落地。',
    technologyStack: {
      backend: 'Java, Spring Boot, MyBatis-Plus, Maven',
      frontend: 'Vue 2, Element-UI / iView, Vuex, Axios, Webpack, Vue CLI 4',
      database: 'MySQL, Redis, MongoDB',
      devops: 'Nginx, Docker, Docker Compose, Jenkins, XXL-JOB, Spring Boot Admin',
      integration: 'SAP 预算检查/锁定, OA 审批, SRM, RocketMQ',
      others: 'Elasticsearch（商品检索）, 领域驱动设计（DDD）'
    },
    businessContext: '统一集团总务类费用化采购流程，构建可配置预算校验、锁定与跨组织审批机制，降低分散采购与对账成本。',
    painPoints: [
      '多组织（集团/赛尔康）预算接口差异大，历史流程分散、数据口径不一。',
      '采购下单与预算校验时序复杂，OA 审批与订单状态同步常不同步。'
    ],
    challenges: [
      '跨组织集成：不同组织方的预算/审批接口协议、鉴权、幂等差异。',
      '一致性与可观测：订单与预算的校验、锁定、回滚链路需要可靠追踪。'
    ],
    solutions: [
      'API 分层：buyer-api/seller-api/common-api/manager-api 拆分服务边界，配合 RocketMQ 处理异步状态流转（订单变更、OA 审批、预算锁定）。',
      '对接策略化：按组织维度封装预算检查/锁定策略，统一幂等与重试；引入分布式事务编排（基于事件+补偿）。',
      '搜索与可观测：Elasticsearch 做商品检索；Spring Boot Admin + 链路日志补齐监控与告警；XXL-JOB 定时校验与重试。'
    ],
    impact: [
      '下单→预算校验→锁定→OA 审批 的端到端耗时稳定在分钟级，异常订单可追踪可回溯。',
      '多组织差异封装后，新增组织/品类接入成本下降（主要为配置）。'
    ],
    outcomes: [
      '覆盖集团与赛尔康两大组织；实现统一预算口径与审批闭环。',
      '平台稳定运行，订单处理峰值支撑（按你现在的 QPS/订单量实际补充）。'
    ],
    details: [
      '业务： 总务类费用化采购系统，打通 OA / SRM / SAP，构建基于环节应用的 MRO 订单与预算模块。',
      '1. 购物车下单 → SAP 信息验证 → 临时订单草稿（预算检查与锁定） → 创建普通订单。',
      '2. 预算校验：按组织（赛尔康/集团）调用不同预算接口并统一返回口径。',
      '3. 数据同步：从 SAP 同步成本中心、物料组、工厂、资产分类、物料信息、预算编码等。',
      '4. OA 抛转：异步发送抛转消息，审批完成后回写订单状态并联动库存/财务口径。',
      '技术：API 分层（buyer/seller/common/manager）; 核心业务在 framework；Redis+MongoDB 缓存；RocketMQ 异步；XXL-JOB 定时任务；Spring Boot Admin 监控；DDD 设计；Elasticsearch 商品搜索。'
    ],
    pictures: [
      require("@/static/project/mro/1.png"),
      require("@/static/project/mro/2.png"),
      require("@/static/project/mro/3.png"),
      require("@/static/project/mro/4.png"),
      require("@/static/project/mro/5.png"),
      require("@/static/project/mro/6.png"),
      require("@/static/project/mro/7.png"),
      require("@/static/project/mro/8.png"),
      require("@/static/project/mro/9.png"),
      require("@/static/project/mro/10.png"),
      require("@/static/project/mro/11.png"),
      require("@/static/project/mro/12.png"),
      require("@/static/project/mro/13.png"),
      require("@/static/project/mro/14.png"),
      require("@/static/project/mro/15.png"),
      require("@/static/project/mro/16.png"),
    ],
  },

  {
    startTime: '2024.11',
    duration: '4个月',
    title: '领益智造 全球化 TMS 管理系统',
    company: '广东领益智造股份有限公司',
    role: '开发工程师（全栈）',
    teamSize: '8人',
    summary: '聚焦痛点梳理与核心模块重构，完成印度区域独立上线与全链路性能优化，构建前后端自动化构建与部署。',
    technologyStack: {
      backend: '.NET Core 3',
      frontend: 'Vue 2/3, iView, Element-UI, Layui, Axios, Webpack',
      database: 'MySQL, Redis',
      devops: 'Nginx, Docker, Jenkins（前后端自动构建部署）',
      integration: '企业微信/微信小程序（Uniapp）'
    },
    businessContext: 'TMS 覆盖后台、设备搬运、报表、PC/移动端；需支撑多区域网络与数据隔离，解决卡顿与稳定性问题。',
    painPoints: [
      '海外厂区 CDN 资源加载慢、前端报错多，导致页面首屏和交互卡顿。',
      '部分接口索引缺失、SQL 不佳引发慢查询，影响运单/搬运调度效率。'
    ],
    challenges: [
      '跨区域网络质量不均，静态资源加速与降级策略缺失。',
      '印度区域合规与数据隔离要求，需要快速复制与稳定上线。'
    ],
    solutions: [
      '前端：拆分大包体、路由/组件按需加载，CDN 资源本地镜像与就近缓存；修复 JS 报错并优化布局与状态管理。',
      '后端：补齐核心表索引，重写慢 SQL；热点接口缓存化；接口超时与重试策略完善。',
      '多区域：基于环境变量与容器编排实现数据隔离；Jenkins + Docker 实现一键打包与分发。'
    ],
    impact: [
      '核心页面首屏时间显著下降（按实测填：如 ↓40%）；接口 P95 延迟下降（如 ↓30%）。',
      '印度区域独立稳定上线，发布失败率下降，回滚更可控。'
    ],
    outcomes: [
      '完成印度站点独立部署与运行监控；上线周期从天级缩短到小时级。',
      '上线后稳定支撑搬运/报表/移动端业务；小程序实现进出口复核、竞价/询价等移动场景。'
    ],
    details: [
      '业务：TMS 后台、设备搬运、移动端（Uniapp）、PC 端、报表、运力资源。',
      '1. 解决海外厂区 CDN 资源加载卡顿，修复大量前端 JS 错误与 UI 布局问题。',
      '2. 后端核心接口重构与索引优化，解决卡慢问题。',
      '3. 印度区域数据隔离与微服务容器化部署。',
      '4. Jenkins 自动构建、自动部署；小程序开发覆盖复核、竞价、询价等。'
    ],
    pictures: [
      require("@/static/project/tms/1 (1).png"),
      require("@/static/project/tms/1 (2).png"),
      require("@/static/project/tms/1 (3).png"),
      require("@/static/project/tms/1 (4).png"),
      require("@/static/project/tms/1 (5).png"),
      require("@/static/project/tms/1 (6).png"),
      require("@/static/project/tms/1 (7).png"),
      require("@/static/project/tms/1 (8).png"),
      require("@/static/project/tms/1 (9).png"),
      require("@/static/project/tms/1 (10).png"),
      require("@/static/project/tms/1 (11).png"),
      require("@/static/project/tms/1 (12).png"),
      require("@/static/project/tms/1 (13).png"),
      require("@/static/project/tms/1 (14).png"),
      require("@/static/project/tms/1 (15).png"),
      require("@/static/project/tms/1 (16).png"),
      require("@/static/project/tms/1 (17).png"),
      require("@/static/project/tms/1 (18).png"),
    ],
  },

  {
    startTime: '2022.10',
    duration: '24个月',
    title: '领益智造 全球化分布式 MOM（QMS/WMS3.0）【关键项目】',
    company: '广东领益智造股份有限公司',
    role: '开发工程师（后端）',
    teamSize: '17人',
    summary: '负责核心功能设计与微服务/集成架构，打通 SRM/OA/ERP(SAP)，建设追溯、标签、容器与看板体系，落地 DevOps 全链路。',
    technologyStack: {
      backend: '.NET Core 5, SugarSQL（定制读写分离） Autofac',
      frontend: 'Vue, Portal',
      database: 'PostgreSQL, Redis',
      devops: 'Docker, Jenkins, Nginx, Prometheus, Grafana',
      integration: 'SAP, SRM, OA, DingTalk, YARP + AgileConfig',
      others: 'minIO 文件服务, 分布式锁, 抽象工厂模式'
    },
    businessContext: '集团多工厂、多地区、多业务（冲压/模切/注塑/CNC）统一 WMS/QMS 能力，推进数字化工厂目标。',
    painPoints: [
      '跨工厂/跨组织标签与库存口径不一致，数据共享困难。',
      '追溯、多维 FIFO 与报关自动化等复杂规则落地难、性能压力大。'
    ],
    challenges: [
      '容器-库存-批次等领域模型复杂，跨组织共享与权限边界治理。',
      '高并发下的标签打印/库存变更/追溯查询需要低延迟与高可用。'
    ],
    solutions: [
      '服务化：WMS/QMS/Interface/Base/BI 微服务拆分；YARP+AgileConfig 构建动态代理网关与灰度发布。',
      '领域建模：以 DDD 落地容器-库存结构，抽象工厂封装 SAP 单据领域模型；分布式锁防止 PDA 重复提交与单据重复创建。',
      '性能与观测：Redis 热缓存 + 冷热分离 + 历史归档；Prometheus+Grafana 统一监控告警；针对读写分离改造 ORM。'
    ],
    impact: [
      '跨组织标签与库存数据实现"无差别共享"与权限可控，追溯查询延迟下降（按实测补：如 P95 < 200ms）。',
      '多维 FIFO（物料/工厂/日期/批次/供应商/客户/人员）可配置化，发料策略落地效率提升。'
    ],
    outcomes: [
      '覆盖集团全球多地区多工厂上线（ 100+ 工厂）；无纸化单据占比显著提升（ 90%+）。',
      '上线后库存差异率下降（ 0.3% 左右），关键流程自动化（报关/称重）落地。'
    ],
    details: [
      '业务：sap 单据管理、物料/成品出入库、配送管理、盘点、最小包装容器、无纸化流程、报关自动化等。',
      '功能：基础资料、库存管理、拆合箱、标签打印、报表、初始化数据、品质管理、看板、位置管理。',
      '追溯：按批号/容器追溯制造过程；看板自适应模板（无纸化效率、定点投放、工位操作、物流指示）。',
      '跨组织：动态标签、跨组织数据共享；对接 SRM（送货单/PO 单）、收货/出入库管理；SAP-WMS 报关称重自动化；电镀物料失效防呆。',
      'FIFO：多维度可配置先进先出规则（物料/工厂/日期/批次/供应商/客户/人员）。',
      '关键技术：分布式微服务（WMS/QMS/Interface/Base/BI）、YARP+AgileConfig、minIO、读写分离改造、Prometheus+Grafana、Redis 热缓存/历史归档、抽象工厂模式与分布式锁。'
    ],
    pictures: [
      require("@/static/project/wms3/1.jpg"),
      require("@/static/project/wms3/2.jpg"),
      require("@/static/project/wms3/3.jpg"),
      require("@/static/project/wms3/4.jpg"),
      require("@/static/project/wms3/5.jpg"),
      require("@/static/project/wms3/6.jpg"),
      require("@/static/project/wms3/7.jpg"),
      require("@/static/project/wms3/8.jpg"),
      require("@/static/project/wms3/9.jpg"),
      require("@/static/project/wms3/10.jpg"),
      require("@/static/project/wms3/11.png"),
      require("@/static/project/wms3/12.png"),
      require("@/static/project/wms3/13.png"),
      require("@/static/project/wms3/14.png"),
      require("@/static/project/wms3/15.png"),
      require("@/static/project/wms3/16.png"),
      require("@/static/project/wms3/17.png"),
      require("@/static/project/wms3/18.jpg"),
      require("@/static/project/wms3/19.jpg"),
      require("@/static/project/wms3/20.jpg"),
      require("@/static/project/wms3/21.png"),
      require("@/static/project/wms3/22.jpg"),
      require("@/static/project/wms3/23.jpg"),
      require("@/static/project/wms3/24.png"),
    ],
  },

  {
    startTime: '2022.04',
    duration: '6个月',
    title: '领益智造 WMS2.0 管理系统',
    company: '广东领益智造股份有限公司',
    role: '开发工程师（全栈）',
    teamSize: '9人',
    summary: '聚焦存量系统质量与稳定性，梳理 SAP/OA/MES/QMS 集成异常，完成性能与结构优化，补齐时效与盘点等关键模块。',
    technologyStack: {
      backend: '.NET Core 3.1, Quartz',
      frontend: 'Vue, jQuery',
      database: 'SQL Server',
      devops: 'Nginx, IIS',
      integration: 'SRM, OA, MES, QMS, ERP(SAP)',
      others: 'Swagger'
    },
    businessContext: '历史包袱较重，需在不停机前提下修复卡死与异常、完善物料时效与入出库流程，保障业务连续性。',
    painPoints: [
      'SAP/OA 审批链路异常多发，WMS 过账时高并发引发数据库锁等待甚至卡死。',
      'PDA 扫码体验差，条码识别异常反复出现，影响一线效率。'
    ],
    challenges: [
      '在存量数据结构不完全合理的前提下做在线优化与缺陷修复。',
      '高峰期库存过账量大，需确保事务边界与锁粒度。'
    ],
    solutions: [
      '数据库治理：清理无效表/字段、重建索引、优化关键 SQL；为高频表加覆盖索引。',
      '链路治理：补偿与重试机制兜底 SAP/OA 异常；入出库流程加可观测日志。',
      'PDA 侧：条码解析容错与去重、交互流程简化提升人机效率。',
      '品质：建立物料时效管理，入库/出库/生产环节实时校验并引入品质放行。'
    ],
    impact: [
      '库存过账高峰卡死问题消除，异常量显著下降；审批链路成功率提升（补真实数）。',
      'PDA 扫码一次成功率提升（补真实数，如 98%+）。'
    ],
    outcomes: [
      '存量系统稳定运行，为后续 WMS3.0 升级铺平道路。',
      '关键模块（时效/盘点）上线后，库存准确性提升。'
    ],
    details: [
      '1. WMS-SAP 数据同步异常治理；OA/WMS/SAP 审批数据一致性修复。',
      '2. 大批量库存过账引发锁竞争问题定位与解决。',
      '3. 表结构优化与索引治理；去除无效表/字段，性能提升。',
      '4. 物料时效管理：入库/出库/生产环节校验与品质放行审批。',
      '5. PDA 扫码去重与条码识别容错；人机交互体验优化。',
      '6. 现场异常与误操作归类与流程规范化。'
    ],
    pictures: [
      require("@/static/project/wms2/2-1 (1).png"),
      require("@/static/project/wms2/2-1 (2).png"),
      require("@/static/project/wms2/2-1 (3).png"),
      require("@/static/project/wms2/2-1 (4).png"),
      require("@/static/project/wms2/2-1 (5).png"),
      require("@/static/project/wms2/2-1 (6).png"),
      require("@/static/project/wms2/2-1 (7).png"),
      require("@/static/project/wms2/2-1 (8).png"),
      require("@/static/project/wms2/2-1 (9).png"),
      require("@/static/project/wms2/2-1 (10).png"),
      require("@/static/project/wms2/2-1 (11).png"),
      require("@/static/project/wms2/2-1 (12).png"),
    ],
  },

 {
    startTime: '2022.02',
    duration: '4个月',
    title: 'SKC 商务派车及费用分摊管理系统',
    company: '京瓷信息系统(上海)有限公司-东莞分公司',
    role: '开发工程师（全栈）',
    teamSize: '5人',
    summary: '负责系统整体框架搭建与主要功能模块实现，涵盖用车申请、BWF 数据抓取、费用分摊、短信提醒等核心流程。',
    technologyStack: {
      backend: '.NET Core, RESTful API, EntityFrameworkCore, SQL, Dapper, Quartz',
      frontend: 'Vue, iView, Element-UI, Vuex, Axios, Webpack',
      database: 'SQL Server',
      devops: '',
      integration: '阿里云短信平台, 百度地图 API',
      others: ''
    },
    businessContext: '为提高企业用车效率与费用可视化精度，建设统一的派车申请与费用分摊系统，提升调度与结算效率。',
    painPoints: [
      'BWF 数据需手动整理，司机与乘客信息同步慢，流程不一致。',
      '原用车流程信息化程度低，费用分摊无依据、缺透明。'
    ],
    challenges: [
      '抓取数据需实现流程监听、异常校验与高频同步。',
      '分摊模型需与部门、公里数、时间段动态挂钩，并可溯源。'
    ],
    solutions: [
      '开发 BWF 数据爬虫模块并接入审批流，结合百度地图 API 自动计算公里数。',
      '构建用车申请单维护、短信通知、车辆/司机调度、地点与费用分摊模块，建立可配置分摊算法。'
    ],
    impact: [
      '用车流程电子化后派车效率提升，人工调度减少超 80%。',
      '费用分摊模型上线后，部门间账目清晰度大幅提高。'
    ],
    outcomes: [
      '实现 100% 用车申请系统化处理，派车记录准确率提升至 99%。',
      '司机短信通知及时率达 95%以上。'
    ],
    details: [
      '1. BWF 审批单数据抓取模块：周期性抓取审批通过单据，调用百度地图 API 计算距离、创建申请单。',
      '2. 短信通知模块：自动获取司机/乘客信息，发送用车提醒短信至阿里云平台。',
      '3. 车辆与人员调度模块：支持地点、时间、车型等信息维护；分摊系数依据公里数与使用时间动态生成。',
      '4. 主要模块均由本人开发，整体系统实现流程数字化、费用透明化。'
    ],
    pictures: [
      require('@/static/project/skccar/1.png'),
      require('@/static/project/skccar/2.png'),
      require('@/static/project/skccar/3.png'),
      require('@/static/project/skccar/4.png'),
      require('@/static/project/skccar/5.png'),
      require('@/static/project/skccar/6.png'),
      require('@/static/project/skccar/7.png'),
      require('@/static/project/skccar/8.png'),
      require('@/static/project/skccar/9.png')
    ]
  },
 {
    startTime: '2020.12',
    duration: '6个月',
    title: '全球数据货币交易所 - 数据采集系统',
    company: '个人项目',
    role: '个人',
    teamSize: '1人',
    summary: '实现多交易所数字资产数据采集、清洗与行情展示，为后续交易分析和图表可视化提供基础支撑。',
    technologyStack: {
      backend: 'Python, Websocket, C#, WebAPI',
      frontend: '',
      database: 'SQL Server, MongoDB, Redis',
      devops: '',
      integration: '交易所 API, VarN Proxy',
      others: 'Pandas, Pillow, BeautifulSoup, PyPDF2'
    },
    businessContext: '加密货币领域交易量巨大、数据碎片化严重，构建统一采集平台可支撑自动化交易与可视化。',
    painPoints: [
      '交易所 API 协议各异，数据格式不统一，采集困难。',
      '高频行情数据波动大，小时数据量可达数十亿，处理压力大。'
    ],
    challenges: [
      '保证采集时序性、一致性与高可用性，避免丢包。',
      '数据清洗与处理逻辑需支持动态字段与自定义规则。'
    ],
    solutions: [
      '通过 WebSocket 长连接实时采集 Binance、Bitmex、FTX 等平台的所有交易对行情（现货/永续/期货）。',
      '构建队列消费模型，分离采集与处理，使用 Redis 作中间缓冲，提升稳定性。',
      '数据清洗模块进行唯一性校验、数值标准化、强平记录识别与交易对聚合。'
    ],
    impact: [
      '多平台多类型行情可实时采集与展示，基础数据支撑后续算法交易模型训练。',
      '系统长期稳定运行，支持分钟级、小时级聚合汇总。'
    ],
    outcomes: [
      '覆盖 Binance, Bitmex, OKEX, FTX 等全球主流交易平台，实现全天候无中断采集。',
      '已完成数据采集、清洗、汇总三个核心模块，后续计划集成图表可视化与回测系统。'
    ],
    details: [
      '1. 对全球主流交易平台的交易对（现货、合约、永续）进行行情实时采集，支持秒级推送。',
      '2. 采集数据通过消息队列异步处理，提升系统抗压能力与数据完整性。',
      '3. 清洗模块实现唯一性校验与多维聚合（交易量、净成交、价格均值等）。',
      '4. 汇总模块以小时维度统计每个交易对的成交数据，输出到 MongoDB 供后续使用。',
      '5. 预留图表可视化模块接口，实现 Echarts/Kibana 方式对价格/深度走势等进行展示。'
    ],
    pictures: [
      require("@/static/project/projectcoindata/1.png"),
      require("@/static/project/projectcoindata/2.png"),
      require("@/static/project/projectcoindata/3.png"),
      require("@/static/project/projectcoindata/4.png"),
      require("@/static/project/projectcoindata/5.png"),
      require("@/static/project/projectcoindata/6.png")
    ]
  },
  {
    startTime: '2021.11',
    duration: '6个月',
    title: 'SKC 固定资产管理系统 - 重构',
    company: '京瓷信息系统(上海)有限公司-东莞分公司',
    role: '开发工程师（全栈）',
    teamSize: '6人',
    summary: '负责旧系统向新架构的重构开发，采用 Vue + .NET Core 实现固定资产全流程管理。',
    technologyStack: {
      backend: '.NET Core, RESTful API, EntityFrameworkCore, Dapper, Quartz',
      frontend: 'Vue, Element-UI, iView, Vuex, Axios, Webpack',
      database: 'SQL Server',
      devops: '',
      integration: '',
      others: ''
    },
    businessContext: '原系统为 WinForm 架构，页面交互与维护效率较低，需向 Web 化、组件化方向重构。',
    painPoints: [
      '原 WinForm 系统操作不便，页面不统一，逻辑耦合严重。',
      '资产生命周期涉及多个环节，业务校验复杂且未封装统一逻辑。'
    ],
    challenges: [
      '从零重构 37 个页面，需保证功能完整与性能稳定。',
      '重用性差的问题需通过封装提升组件化程度。'
    ],
    solutions: [
      '基于 Vue 重构页面，按模块封装逻辑与 UI；统一维护资产数据结构与生命周期操作流转。',
      '优化表单组件、弹窗、列表页为可复用组件；提升代码可维护性。'
    ],
    impact: [
      '重构后页面访问速度提升 40%，用户满意度提升。',
      '运维成本明显下降，代码模块复用率提高至 70%。'
    ],
    outcomes: [
      '系统成功替代旧平台运行稳定，已支持 100% 固定资产流转流程。',
      '业务流程上线后，资产管理数据准确率提升至 99%。'
    ],
    details: [
      '1. 项目包含：AX 数据导入、固定资产维护、变动/处置、标签打印、盘点等共 37 个页面。',
      '2. 页面 UI 全部由本人重构为 Vue 页面，后端功能按模块重写，接口统一封装。',
      '3. 封装公共组件与通用校验逻辑，实现前后端逻辑统一。'
    ],
    pictures: [
      require("@/static/project/projectassest/1.png"),
      require("@/static/project/projectassest/2.png"),
      require("@/static/project/projectassest/3.png"),
      require("@/static/project/projectassest/4.png"),
      require("@/static/project/projectassest/5.png"),
      require("@/static/project/projectassest/6.png"),
      require("@/static/project/projectassest/7.png")
    ]
  },

  {
    startTime: '2021.05',
    duration: '4个月',
    title: 'SKC数据-RPA管理系统',
    company: '京瓷信息系统(上海)有限公司-东莞分公司',
    role: '开发工程师（全栈）',
    teamSize: '3人',
    summary: '负责RPA自动化系统的设计与实现，打造发票处理、数据采集、简历处理等自动化流程。',
    technologyStack: {
      backend: '.NET, Quartz',
      frontend: '',
      database: '',
      devops: '',
      integration: '',
      others: 'Python, PyPDF2, Pillow, Pandas, BeautifulSoup, 图像处理, 爬虫'
    },
    businessContext: '多个业务场景需要人工重复处理数据,效率低下且易出错,需要通过RPA技术实现自动化。',
    painPoints: [
      '发票数据需手动下载整理,耗时且易漏。',
      '采购订单处理流程繁琐,人工操作频繁。',
      '简历照片处理需要手动剪裁和规范化。'
    ],
    challenges: [
      '多平台数据格式不统一,需要标准化处理。',
      '自动化流程需要考虑异常处理和重试机制。',
      '需要保证数据处理的准确性和完整性。'
    ],
    solutions: [
      '开发票根网爬虫模块,实现发票自动下载、PDF解析与Excel生成。',
      '构建KPTG自动化处理模块,打通采购订单下载、检收单打印和邮件发送。',
      '实现简历系统自动化,包括问卷星API对接、照片处理和规范化。'
    ],
    impact: [
      '发票处理时间从人工2小时缩短至5分钟,准确率提升至99%。',
      '采购订单处理效率提升80%,人工干预大幅减少。',
      '简历照片处理速度提升90%,标准化程度显著提高。'
    ],
    outcomes: [
      '成功实现3个核心业务场景的自动化,显著提升工作效率。',
      '系统稳定运行,错误率低于1%,获得用户好评。'
    ],
    details: [
      '1. 项目包含：票根网发票数据爬取模块,KPTG数据自动化处理模块,简历系统自动化模块,定时任务管理模块。',
      '2. 票根网发票数据爬取模块：按月份批量抓取发票信息,批量合并发票pdf,读取发票pdf信息,合并并统计生成发票金额信息EXCEL。',
      '3. KPTG数据自动化处理模块:采购订单自动下载,检收单自动打印整合,下载采购单数据自动发送邮件。',
      '4. 简历系统自动化模块: 问卷星招聘签名批量自动下载API,Sony相机拍照API对接,python处理免冠照片剪辑。'
    ],
    pictures: []
  },

  {
    startTime: '2021.02',
    duration: '4个月', 
    title: 'SKC-Bus约车管理系统',
    company: '京瓷信息系统(上海)有限公司-东莞分公司',
    role: '开发工程师（全栈）',
    teamSize: '5人',
    summary: '负责企业约车系统的微信小程序与后台服务开发,实现线路预约、班次管理等核心功能。',
    technologyStack: {
      backend: '.NET Core, RESTful API, Dapper, Quartz',
      frontend: 'Vue, iView, Axios, Webpack',
      database: 'SQL Server',
      devops: '',
      integration: '微信小程序',
      others: ''
    },
    businessContext: '企业员工通勤需要便捷的约车系统,实现线路预约、班次管理的移动端操作。',
    painPoints: [
      '传统约车流程繁琐,需要人工协调和通知。',
      '班次信息更新不及时,座位利用率低。'
    ],
    challenges: [
      '需要同时支持小程序端和管理后台的数据同步。',
      '消息推送需要及时可靠,避免漏发。'
    ],
    solutions: [
      '基于微信小程序实现移动端约车功能,包括线路查询、班次预约等。',
      '构建后台微服务,处理数据同步、消息推送等核心逻辑。',
      '实现工作日历维护、用户权限管理等配套功能。'
    ],
    impact: [
      '约车流程从人工5-10分钟缩短至系统1分钟内完成。',
      '座位利用率提升30%,大幅减少空座浪费。'
    ],
    outcomes: [
      '系统上线后获得90%以上用户好评。',
      '显著提升企业通勤管理效率,降低人工成本。'
    ],
    details: [
      '1. 项目包含：微信小程序模块,后台微服务,后台数据管理模块。',
      '2. 微信小程序：线路维护,预约总览,工作日历维护,预约乘车班次,消息推送&自动推送,用户信息,角色权限编辑。',
      '3. 后台数据微服务：上传日历,上传用户信息,获取班次信息,获取线路信息,获取预约信息等。',
      '4. 个人主要负责：后台微服务,后台数据报表管理模块,设计小程序UI界面。'
    ],
    pictures: [
      require("@/static/project/skcbus/1.png"),
      require("@/static/project/skcbus/2.png"),
      require("@/static/project/skcbus/3.png"),
      require("@/static/project/skcbus/4.png"),
      require("@/static/project/skcbus/5.png"),
      require("@/static/project/skcbus/6.png"),
      require("@/static/project/skcbus/7.png"),
      require("@/static/project/skcbus/8.png"),
      require("@/static/project/skcbus/9.png")
    ]
  },

  {
    startTime: '2020.11',
    duration: '3个月',
    title: '电力可视化系统',
    company: '京瓷信息系统(上海)有限公司-东莞分公司',
    role: '开发工程师（全栈）',
    teamSize: '3人',
    summary: '基于 InfluxDB 和 Grafana 构建电力监控可视化平台,实现用电数据实时监控与分析。',
    technologyStack: {
      backend: '.NET WebApi',
      frontend: 'AJAX',
      database: 'InfluxDB',
      devops: 'Linux',
      integration: 'Grafana',
      others: ''
    },
    businessContext: '企业需要实时监控变压器用电情况,分析用电趋势,及时发现异常。',
    painPoints: [
      '用电数据分散,缺乏统一监控平台。',
      '电费计算复杂,需要考虑峰谷电价。'
    ],
    challenges: [
      '需要处理大量时序数据,保证查询性能。',
      '可视化展示需要支持多维度分析。'
    ],
    solutions: [
      '使用 InfluxDB 存储时序数据,Grafana 实现可视化展示。',
      '开发电费计算模块,支持峰谷平电价自动计算。',
      '实现阈值监控和短信报警功能。'
    ],
    impact: [
      '实现13台变压器的实时监控,异常响应时间缩短80%。',
      '电费计算准确率达99.9%,大幅减少人工核算工作。'
    ],
    outcomes: [
      '系统稳定运行,支持多维度用电分析。',
      '异常预警机制有效预防用电事故。'
    ],
    details: [
      '1. 智能电表数据采集模块,Grafana图表展示模块(ABC电流,ABC电压,用电量统计,峰谷平电价的计算),短信报警模块。',
      '2. 根据三相电表,ABC电流,ABC电压,功率,分别统计出13台变压器的用电情况,根据工业用电电价阶梯表计算每天,每月用电的量,汇总得出不同年份同一天的对比图表。',
      '3. 监控十三台变压器的电压,电流,功率对超过设定的阈值进行短信报警提醒。',
      '4. 个人主要负责：grafana图表的制作,包含influxdb sql的编写,以及峰谷平电价的计算。'
    ],
    pictures: [
      require("@/static/project/projectelect/1.png"),
      require("@/static/project/projectelect/2.png"),
      require("@/static/project/projectelect/3.png"),
      require("@/static/project/projectelect/4.png"),
      require("@/static/project/projectelect/5.png")
    ]
  },

  {
    startTime: '2020.08',
    duration: '3个月',
    title: 'AEO体系管理系统',
    company: '京瓷信息系统(上海)有限公司-东莞分公司',
    role: '开发工程师（全栈）',
    teamSize: '3人',
    summary: '对现有AEO系统进行性能优化与功能扩展,实现多公司数据管理。',
    technologyStack: {
      backend: 'ASP.NET MVC, Web API',
      frontend: 'Bootstrap, jQuery',
      database: 'SQL Server',
      devops: '',
      integration: '',
      others: ''
    },
    businessContext: '系统需要支持多公司业务场景,同时解决现有性能问题。',
    painPoints: [
      '系统响应速度慢,特别是在数据量大的情况下。',
      '多公司数据隔离不完善,存在安全隐患。'
    ],
    challenges: [
      '需要在保证功能完整性的前提下优化性能。',
      '多库操作需要确保数据一致性。'
    ],
    solutions: [
      '使用 Bootstrap Table TreeTable 重构界面,优化数据加载。',
      '实现多公司数据隔离,确保访问安全。'
    ],
    impact: [
      '系统响应速度提升50%,用户体验显著改善。',
      '成功支持多公司独立运营,数据安全得到保障。'
    ],
    outcomes: [
      '系统性能问题得到根本解决。',
      '支持多公司业务场景,满足扩展需求。'
    ],
    details: [
      '1. 对现有AEO系统进行多公司模块功能修改,多公司模块化下处理多库操作的处理。',
      '2. 优化使用Bootstrap table treetable优化体系管理审核模块卡顿问题。'
    ],
    pictures: [
      require("@/static/project/projectaeo/1.png"),
      require("@/static/project/projectaeo/12.png"),
      require("@/static/project/projectaeo/13.png"),
      require("@/static/project/projectaeo/14.png"),
      require("@/static/project/projectaeo/15.png")
    ]
  },

  {
    startTime: '2019.12',
    duration: '12个月',
    title: '数码车间-MES精益制造执行系统',
    company: '东莞隽思印刷有限公司',
    role: '高级开发工程师（全栈）',
    teamSize: '8人',
    summary: '负责MES系统核心模块开发,实现生产过程数字化管理,助力企业实现工业4.0转型。',
    technologyStack: {
      backend: 'ASP.NET MVC, Spring.NET, NHibernate, Web API ',
      frontend: 'Knockout.js, ECharts, Ext.js, jQuery',
      database: 'SQL Server',
      devops: '',
      integration: '',
      others: 'Light.7.css'
    },
    businessContext: '企业需要建设现代化MES系统,实现生产过程精益化管理,达到工业4.0认证要求。',
    painPoints: [
      '生产过程数据采集不及时,管理效率低。',
      '缺乏实时监控和分析能力。'
    ],
    challenges: [
      '系统模块众多,需要确保各模块协同。',
      '需要支持实时数据展示和分析。'
    ],
    solutions: [
      '实现订单管理、生产管理、品质管理等核心模块。',
      '开发实时监控看板,支持生产数据可视化。',
      '构建状态机和动态报表等中间件组件。'
    ],
    impact: [
      '生产效率提升30%,管理成本降低20%。',
      '数据采集实现自动化,准确率达99%。'
    ],
    outcomes: [
      '系统成功上线,获得工业4.0认证。',
      '支持公司香港上市数字化要求。'
    ],
    details: [
      '1. 系统主要功能模块:包括基础设置、订单模块、工作票模块、生产订单管理模块、补数模块、品质模块、KPI模块、MTS领料模块、货架模块,报表模块,资源管理模块 APS生产计划管理模块等。',
      '2. 包含中间件：实时显示货架模块,状态机组件,sql动态可配置报表,基于echar配置图表组件。',
      '3. 项目目标：达成工业4.0的认证配合公司在香港上市。',
      '4. 个人主要处理：基础设置,订单模块,工作票模块,MTS领料模块,货架模块。'
    ],
    pictures: [
      require("@/static/project/control/9-1-lg.jpg"),
      require("@/static/project/control/9-2-lg.jpg"),
      require("@/static/project/control/9-3-lg.jpg"),
      require("@/static/project/control/9-4-lg.jpg"),
      require("@/static/project/control/9-5-lg.jpg"),
      require("@/static/project/control/9-6-lg.jpg"),
      require("@/static/project/control/9-7-lg.jpg"),
      require("@/static/project/control/9-8-lg.jpg"),
      require("@/static/project/control/9-9-lg.jpg")
    ]
  },

  {
  startTime: '2018.08',
  duration: '9个月',
  title: 'OEM实时车间管理系统(APS)',
  company: '东莞隽思印刷有限公司',
  role: '软件工程师',
  teamSize: '6人',
  summary: '负责OEM车间管理系统的开发，实现生产计划智能排程与实时监控。',
  technologyStack: {
    backend: 'ASP.NET MVC, Spring.NET, NHibernate, Web API',
    frontend: 'WPF, Knockout.js, Ext.js, jQuery',
    database: 'SQL Server',
    devops: '',
    integration: '',
    others: 'Light.7.css'
  },
  businessContext: '打造智能排产系统，提升OEM订单的生产效率。',
  painPoints: [
    '生产计划排程复杂，人工调度效率低',
    '缺乏实时监控手段，异常处理不及时'
  ],
  challenges: [
    '处理复杂的排产规则和约束条件',
    '实时数据展示要求高性能与稳定性'
  ],
  solutions: [
    '开发可视化看板，实现生产状态的实时监控',
    '基于规则引擎实现智能排产功能',
    '构建状态机、可配置工厂日历等核心组件'
  ],
  impact: [
    '生产计划排程时间缩短70%',
    '异常处理响应时间降低50%'
  ],
  outcomes: [
    '系统稳定支撑三班制生产运营',
    '显著提升生产计划执行效率'
  ],
  details: [
    '系统主要功能模块包括：PMC车间管理、CTP看板、纸料看板、印刷实时显示可视化看板、OEM车间效率实时达成看板、异常追踪看板、后工序水塘产能看板。',
    '中间件实现了状态机组件、可配置工厂日历及基于业务的规则引擎。',
    '项目目标是通过上述看板实时监控订单进度，并依据物料状态和车间产能动态调度生产，保障三班制的生产效率。',
    'PMC将MPS计划订单导入系统，系统依据物料状态、配套情况及车间产能等业务规则自动调整OEM订单的生产顺序。'
  ],
  pictures: [
    require("@/static/project/control/8-1-lg.jpg"),
    require("@/static/project/control/8-2-lg.jpg"),
    require("@/static/project/control/8-3-lg.jpg"),
    require("@/static/project/control/8-4-lg.jpg"),
    require("@/static/project/control/8-5-lg.jpg"),
    require("@/static/project/control/8-6-lg.jpg")
  ]
}
,

  {
    startTime: '2017.09',
    duration: '5个月',
    title: '美泰FVT项目',
    company: '东莞隽思印刷有限公司',
    role: '软件工程师',
    teamSize: '4人',
    summary: '开发物料追溯系统,实现生产原料全程可追溯,降低质量风险。',
    technologyStack: {
      backend: 'ASP.NET, Web API, NHibernate',
      frontend: 'jQuery, JavaScript, CSS',
      database: 'SQL Server',
      devops: '',
      integration: '',
      others: ''
    },
    businessContext: '客户需要建立物料追溯体系,降低质量风险和测试成本。',
    painPoints: [
      '物料使用过程缺乏追溯手段。',
      '质量问题难以快速定位源头。'
    ],
    challenges: [
      '需要完整记录物料流转全过程。',
      '系统要求高可靠性和数据准确性。'
    ],
    solutions: [
      '实现物料批次全程追踪功能。',
      '开发工作指令执行和记录模块。',
      '构建完整的查询统计功能。'
    ],
    impact: [
      '物料追溯时间从小时级缩短到分钟级。',
      '测试成本降低30%,质量风险显著降低。'
    ],
    outcomes: [
      '系统稳定运行,追溯准确率达99%。',
      '成功降低产品测试频率和成本。'
    ],
    details: [
      '1. 系统主要功能模块：物流指令流出、物流指令流入、工作指令标签上机执行、工作指令标签工作指令下机完成、物料出库、流程记录查询、物料查询、区域设定、稿袋录入、美泰原料批次报表模块。',
      '2. 项目目标：追溯生产订单生产过程中使用的原料批次信息,防止生产流程中出现使用错误的生产原料,一旦物料出现异常,可即可追溯原料批次信息。',
      '3. 与客户约定能够追溯物料的批次信息,则可降低成品/半成品的测试频率,以降低测试成本。'
    ],
    pictures: [
      require("@/static/project/control/7-1-lg.jpg"),
      require("@/static/project/control/7-2-lg.jpg"),
      require("@/static/project/control/7-3-lg.jpg"),
      require("@/static/project/control/7-4-lg.jpg"),
      require("@/static/project/control/7-5-lg.jpg"),
      require("@/static/project/control/7-6-lg.jpg")
    ]
  },

  {
    startTime: '2017.03',
    duration: '8个月',
    title: 'PMS项目管理系统',
    company: '东莞隽思印刷有限公司',
    role: '见习工程师',
    teamSize: '4人',
    summary: '参与项目管理系统开发,负责子系统间数据交互模块的开发与维护。',
    technologyStack: {
      backend: 'WPF, Web API, NHibernate, Spring.NET',
      frontend: '',
      database: 'SQL Server',
      devops: '',
      integration: 'SSO',
      others: ''
    },
    businessContext: '需要建立统一的项目管理平台,规范项目管理流程。',
    painPoints: [
      '项目管理流程不规范。',
      '系统间数据交互效率低。'
    ],
    challenges: [
      '需要处理复杂的项目管理业务逻辑。',
      '确保系统间数据交互的可靠性。'
    ],
    solutions: [
      '实现项目全生命周期管理功能。',
      '开发系统间数据交互模块。',
      '优化代码结构提升系统性能。'
    ],
    impact: [
      '系统间数据交互效率提升40%。',
      '项目管理流程标准化程度提高。'
    ],
    outcomes: [
      '系统稳定运行,支持日常项目管理。',
      '显著提升项目管理效率。'
    ],
    details: [
      '1. 系统主要功能模块: 项目管理,任务管理,日历设置,项目模版管理,资源管理,用户管理,报表管理。',
      '2. 个人主要负责：对任务流程中的子流程与PE设计管理系统数据交互模块进行封装以及维护,并且根据业务需求对代码库进行更新,修正业务代码中的错误以及提高程序的性能。'
    ],
    pictures: [
      require("@/static/project/control/5-1-lg.jpg"),
      require("@/static/project/control/5-2-lg.jpg"),
      require("@/static/project/control/5-3-lg.jpg"),
      require("@/static/project/control/5-4-lg.jpg"),
      require("@/static/project/control/5-5-lg.jpg"),
      require("@/static/project/control/5-6-lg.jpg")
    ]
  }
];


//最后修改时间
const lastUpdate = '2018-02-10';
export default {
    projectlists,
    traitList,
    projectList,
    personalInfo,
    lastUpdate,
};