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
    'SQL',
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
    position: '高级工程师',
    birthday: '1992.09',
    university: '东莞理工学院城市学院',
    major: '软件工程',
    education: '本科',
    graduation: '2016年',
    english: '四级',
    social,
    skillList,
};
//项目列表
const projectlists = [
    {
        starttime: '2022.06',
        time: "20个月",
        title: "领益智造QMS&WMS管理系统",
        company: '广东领益智造股份有限公司',
        job: '开发工程师',
        duty: '系统核心功能设计,详细设计,框架的搭建和所有功能模块的设计实现,以及部署-发布-上线（devops）全流程',
        technology: ".net core 5,vue,nginx,,PyPDF2,,docker,git,Jenkins,portal",
        people: '17人',
        Projectmessage: [
            '1. 项目包含：票根网发票数据爬取模块,KPTG 数据自动化处理模块,简历系统自动化模块,定时任务管理模块',
            '2. 票根网发票数据爬取模块：按月份批量抓取发票信息,批量合并发票pdf,读取发票pdf信息,合并并统计生成发票金额信息EXCEL',
            '3. KPTG 数据自动化处理模块:采购订单自动下载,检收单自动打印整合,下载采购单数据自动发送邮件',
            '4: 简历系统自动化模块: 问卷星招聘签名批量自动下载API,Sony相机 拍照API对接,python处理免冠照片剪辑,OCR识别身份证信息',
            '5. 个人主要负责以上所有模块开发',
        ],
        picture: [

        ],
    },

    {
        starttime: '2022.06',
        time: "24个月",
        title: "领益智造WMS2.0管理系统",
        company: '广东领益智造股份有限公司',
        job: '开发工程师',
        duty: '项目问题调研,核心功能重构,对接集团内系统（SRM,OA,MES,QMS,ERP(SAP)）,以及部署和上线',
        technology: ".net,Quzartz,python,图像处理,爬虫,PyPDF2,Pillow,pandas,BeautifulSoup",
        people: '4人',
        Projectmessage: [
            '1. 项目包含：物料出入库，成品出入库，位置管理，配送管理，库存盘点，容器管理',
            '2. 票根网发票数据爬取模块：按月份批量抓取发票信息,批量合并发票pdf,读取发票pdf信息,合并并统计生成发票金额信息EXCEL',
            '3. KPTG 数据自动化处理模块:采购订单自动下载,检收单自动打印整合,下载采购单数据自动发送邮件',
            '4: 简历系统自动化模块: 问卷星招聘签名批量自动下载API,Sony相机 拍照API对接,python处理免冠照片剪辑',
            '5. 个人主要负责以上所有模块开发',
        ],
        picture: [

        ],
    },


    {
        starttime: '2022.02',
        time: "4个月",
        title: "SKC 商务派车及费用分摊管理系统",
        company: '京瓷信息系统(上海)有限公司-东莞分公司',
        job: '开发工程师',
        duty: '项目组织工作,开发工作量评估、开发任务分配,框架的搭建和重要功能模块的设计实现',
        technology: ".net core,Restful Api,EntityFrameWorkCore,SQL,Dapper,Quzartz,vue,IView,Element-UI,Vuex,axios,webpack",
        people: '5人',
        Projectmessage: [
            '1. 项目包含：BWF数据抓取模块,用车申请单维护管理模块,短信消息管理模块,司机-车辆-部门-地点-信息管理,分摊系数生成分摊管理',
            '2. BWF数据抓取模块：爬虫抓取BWF 用车申请的审批单数据,调用百度地图API计算路程公里数,创建用车申请单',
            '3. 短信消息管理模块：获取用车申请单,司机和乘客信息,调用阿里云短信平台发送乘车短信',
            '4. 个人主要负责：处理以上所有模块',
        ],
        picture: [
            require("@/static/project/skccar/1.png"),
            require("@/static/project/skccar/2.png"),
            require("@/static/project/skccar/3.png"),
            require("@/static/project/skccar/4.png"),
            require("@/static/project/skccar/5.png"),
            require("@/static/project/skccar/6.png"),
            require("@/static/project/skccar/7.png"),
            require("@/static/project/skccar/8.png"),
            require("@/static/project/skccar/9.png"),
        ],
    },
    {
        starttime: '2020.12~2021.06',
        special: 'true',
        time: "6个月",
        title: "全球数据货币交易所-数据采集",
        company: '个人项目',
        job: '个人',
        duty: '实现 全球大型头部数字货币交易所 数据实时采集 展示行情数据,图示化数据等',
        technology: "python,websckoet,c#,webAPI,redis,sqlserver,mongodb,python,VarN proxy",
        people: '1人',
        Projectmessage: [
            '1. 对：Binance,Bitmex,OKEX,FTX,huobi,CoinBase,Bybit,deribit,等平台的全部交易对,采集,现货,合约（交割,永续）, 交易数据(行情波动大时,每小时数据量可达数十亿条)',
            '2. 对接上述平台的 公共数据 中英文 API ,采集 持仓数据,强平订单,费率,交易对,等信息',
            '3. 数据采集模块：通过websocket 采集 各个交易所的永续，现货，期货交易对的时序数据，将数据加入到消息队列中',
            '4. 数据清洗模块：对每一个交易信息数据进行 唯一性，完整性，一致性的处理，并对交易的价值进行计算，确认数据的完整性后移出队列',
            '5. 数据分析以及持久化模块：对每一个交易对数据进行小时汇总，得出单位小时内所有交易所 的一个交易对(BTC)的 永续，现货，期货 的净成交汇总数据',
            '6. 数据可视化模块：计划中...',
        ],
        picture: [
            require("@/static/project/projectcoindata/1.png"),
            require("@/static/project/projectcoindata/2.png"),
            require("@/static/project/projectcoindata/3.png"),
            require("@/static/project/projectcoindata/4.png"),
            require("@/static/project/projectcoindata/5.png"),
            require("@/static/project/projectcoindata/6.png"),

        ],
    },

    {
        starttime: '2021.11',
        time: "6个月",
        title: "SKC固定资产管理系统-重构",
        company: '京瓷信息系统(上海)有限公司-东莞分公司',
        job: '开发工程师',
        duty: '项目组织工作,框架的搭建和重要功能模块的实现,',
        technology: ".net core,Restful Api,EntityFrameWorkCore,SQL,Dapper,Quzartz,vue,IView,Element-UI,Vuex,axios,webpack",
        people: '6人',
        Projectmessage: [
            '1. 项目包含：AX固定资产检收数据导入,固定资产维护,固定资产变动及处置,资产标签打印,固定资产盘点对象数据等37个页面',
            '2. 个人主要负责：根据Winform界面 使用VUE重构 其中大部分的页面,对各个模块的代码进行封装以及维护,并且根据业务需求对代码进行更新,提高代码复用率。',
        ],
        picture: [
            require("@/static/project/projectassest/1.png"),
            require("@/static/project/projectassest/2.png"),
            require("@/static/project/projectassest/3.png"),
            require("@/static/project/projectassest/4.png"),
            require("@/static/project/projectassest/5.png"),
            require("@/static/project/projectassest/6.png"),
            require("@/static/project/projectassest/7.png"),

        ],
    },
    {
        starttime: '2021.05',
        time: "4个月",
        title: "SKC数据-RPA管理系统",
        company: '京瓷信息系统(上海)有限公司-东莞分公司',
        job: '开发工程师',
        duty: '项目需求调研,项目的功能设计,详细设计,框架的搭建和所有功能模块的设计实现,以及部署和上线',
        technology: ".net,Quzartz,python,图像处理,爬虫,PyPDF2,Pillow,pandas,BeautifulSoup",
        people: '3人',
        Projectmessage: [
            '1. 项目包含：票根网发票数据爬取模块,KPTG 数据自动化处理模块,简历系统自动化模块,定时任务管理模块',
            '2. 票根网发票数据爬取模块：按月份批量抓取发票信息,批量合并发票pdf,读取发票pdf信息,合并并统计生成发票金额信息EXCEL',
            '3. KPTG 数据自动化处理模块:采购订单自动下载,检收单自动打印整合,下载采购单数据自动发送邮件',
            '4: 简历系统自动化模块: 问卷星招聘签名批量自动下载API,Sony相机 拍照API对接,python处理免冠照片剪辑',
            '5. 个人主要负责以上所有模块开发',
        ],
        picture: [

        ],
    },
    {
        starttime: '2021.02',
        time: "4个月",
        title: "SKC-Bus约车管理系统",
        company: '京瓷信息系统(上海)有限公司-东莞分公司',
        job: '开发工程师',
        duty: '项目需求调研,项目的功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
        technology: "微信小程序，.net core,vue,Restful Api,IView,axios,webpack,SQL,Dapper,Quzartz",
        people: '5人',
        Projectmessage: [
            '1.项目包含：微信小程序模块,后台微服务,后台数据管理模块',
            '2.微信小程序：线路维护,预约总览,工作日历维护,预约乘车班次,消息推送&自动推送,用户信息,角色权限编辑',
            '3.后台数据微服务：上传日历,上传用户信息,获取班次信息,获取线路信息,获取预约信息等',
            '4.个人主要负责：后台微服务,后台数据报表管理模块,设计小程序UI界面'

        ],
        picture: [
            require("@/static/project/skcbus/1.png"),
            require("@/static/project/skcbus/2.png"),
            require("@/static/project/skcbus/3.png"),
            require("@/static/project/skcbus/4.png"),
            require("@/static/project/skcbus/5.png"),
            require("@/static/project/skcbus/6.png"),
            require("@/static/project/skcbus/7.png"),
            require("@/static/project/skcbus/8.png"),
            require("@/static/project/skcbus/9.png")
        ],
    },
    {
        starttime: '2020.11',
        time: "3个月",
        title: "电力可视化系统",
        company: '京瓷信息系统(上海)有限公司-东莞分公司',
        job: '开发工程师',
        people: '3人',
        duty: '根据influxdb和grafana进行框架的搭建,设计电流,电压,功率,用电情况的BI展示',
        technology: "influxdb,grafana,AJAX,.NET WebApi,Linux",
        Projectmessage: [
            '1.智能电表数据采集模块,Grafana 图表展示模块(ABC电流,ABC电压,用电量统计,峰谷平电价的计算),短信报警模块',
            '2.根据三相电表,ABC电流,ABC电压,功率,分别统计出13台变压器的 用电情况,根据工业用电电价阶梯表计算每天,每月用电的量,汇总得出不同年份同一天的对比图表',
            '3.监控十三台 变压器的 电压,电流,功率 对超过设定的阈值进行短信报警提醒',
            '4.个人主要负责：grafana图表的制作,包含influxdb sql 的编写,以及峰谷平电价的计算'
        ],
        picture: [
            require("@/static/project/projectelect/1.png"),
            require("@/static/project/projectelect/2.png"),
            require("@/static/project/projectelect/3.png"),
            require("@/static/project/projectelect/4.png"),
            require("@/static/project/projectelect/5.png")

        ],
    },
    {
        starttime: '2020.08',
        time: "3个月",
        title: "AEO体系管理系統",
        people: '3人',
        company: '京瓷信息系统(上海)有限公司-东莞分公司',
        job: '开发工程师',
        duty: '整体项目的评估、选择合适框架和组件,对卡顿的页面的和异常bug点进行重构和修改',
        technology: "ASP.net,ASP.net MVC,Web Api,bootstrap,JQuery,SQL",
        Projectmessage: [
            '1.对现有AEO系统进行多公司模块功能修改,多公司模块化下处理多库操作的处理',
            '2.优化 使用Bootstap table treetable优化 体系管理审核模块卡顿问题'
        ],
        picture: [
            require("@/static/project/projectaeo/1.png"),
            require("@/static/project/projectaeo/12.png"),
            require("@/static/project/projectaeo/13.png"),
            require("@/static/project/projectaeo/14.png"),
            require("@/static/project/projectaeo/15.png")
        ],
    },
    {
        starttime: '2019.12',
        time: "12个月",
        title: "数码车间-MES精益製造執行系統",
        company: '东莞隽思印刷有限公司',
        job: '高级工程师',
        people: '8人',
        duty: '项目组织工作,项目需求调研,功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
        technology: "ASP.net MVC,Spring.net,Nhibernate,Web Api,knockout.js,echarts,Ext.js,JQuery,light.7.css,SQL",
        Projectmessage: [
            '1. 系统主要功能模块:包括基础设置、訂單模塊、工作票模塊、生產訂單管理模塊、補數模塊、品質模塊、KPI模塊、MTS領料模塊、货架模块,报表模块,資源管理模塊等.',
            '2. 包含中间件：实时显示货架模块,状态机组件,sql动态可配置报表,基于echar配置图表组件',
            '3. 项目目标：达成工业4.0的认证配合公司在香港上市',
            '4. 个人主要处理：基础设置,订单模块,工作票模块,MTS領料模塊,货架模块',
        ],
        picture: [
            require("@/static/project/control/9-1-lg.jpg"),
            require("@/static/project/control/9-2-lg.jpg"),
            require("@/static/project/control/9-3-lg.jpg"),
            require("@/static/project/control/9-4-lg.jpg"),
            require("@/static/project/control/9-5-lg.jpg"),
            require("@/static/project/control/9-6-lg.jpg"),
            require("@/static/project/control/9-7-lg.jpg"),
            require("@/static/project/control/9-8-lg.jpg"),
            require("@/static/project/control/9-9-lg.jpg")
        ],
    },
    {
        starttime: '2018.08',
        title: "OEM-實時車間管理系統",
        time: "9个月",
        company: '东莞隽思印刷有限公司',
        job: '软件工程师',
        people: '6人',
        duty: '项目组织工作,项目需求调研,功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
        technology: "WPF,ASP.net MVC,Spring.net,Nhibernate,Web Api,knockout.js,Ext.js,JQuery,light.7.css,SQL",
        Projectmessage: [
            '1.系统主要功能模块:PMC車間管理模塊、CTP看板、纸料看板、印刷实时显示目视化看板、OEM车间效率实时达成看板、异常追踪看板、后工序水塘产能看板.',
            '2.包含中间件：状态机组件,可配置工厂日历,基于业务的规则引擎组件',
            '3.项目目标：管理人员通过印刷实时显示目视化看板,OEM车间效率实时达成看板,异常追踪看板等看板,监控订单的进度,根据印刷物料状态实时调控订单生产进度,并对异常订单及时跟进保证三班的生产效率',
            '4.PMC导入MPS的計劃生產訂單到系统,系统根據業務規則（物料狀態,物料配套,当前车间产能情況）和印刷部的印刷規則來調控OEM訂單的生產順序。通过印刷实时显示目视化看板,OEM车间效率实时达成看板,异常追踪看板等看板,监控订单的生成进度.',
            '5.个人主要负责：除了CTP看板和异常追踪看板以外的模块'
        ],
        picture: [
            require("@/static/project/control/8-1-lg.jpg"),
            require("@/static/project/control/8-2-lg.jpg"),
            require("@/static/project/control/8-3-lg.jpg"),
            require("@/static/project/control/8-4-lg.jpg"),
            require("@/static/project/control/8-5-lg.jpg"),
            require("@/static/project/control/8-6-lg.jpg")
        ],
    },
    {
        starttime: '2017.09',
        time: "5个月",
        title: "美泰FVT项目",
        company: '东莞隽思印刷有限公司',
        job: '软件工程师',
        people: '4人',
        duty: '项目部分的需求调研,功能设计,详细设计,框架的搭建和重要功能模块的设计实现,以及部署和上线',
        technology: "Web Api,Nhibernate,ASP.net,JQuery,Javascript,css,sql",
        Projectmessage: [
            '1. 系统主要功能模块：物流指令流出、物流指令流入、工作指令標籤上机执行、工作指令標籤工作指令下机完成、物料出庫、流程記錄查詢、物料查詢、區域設定、稿袋录入、美泰原料批次报表模块.',
            '2. 项目目标：追溯生产订单生产过程中使用的原料批次信息,防止生產流程中出現使用錯誤的生產原料,一旦物料出现异常,可即可追溯原料批次信息.',
            '3. 與客戶約定能夠追溯物料的批次信息,则可降低成品/半成品的测试频率,以降低测试成本.',
            '4. 个人主要负责：除了美泰原料批次报表模块的其他模块'
        ],
        picture: [
            require("@/static/project/control/7-1-lg.jpg"),
            require("@/static/project/control/7-2-lg.jpg"),
            require("@/static/project/control/7-3-lg.jpg"),
            require("@/static/project/control/7-4-lg.jpg"),
            require("@/static/project/control/7-5-lg.jpg"),
            require("@/static/project/control/7-6-lg.jpg")
        ],
    },
    {
        starttime: '2017.03',
        title: "PMS项目管理系统",
        time: "8个月",
        company: '东莞隽思印刷有限公司',
        job: '见习工程师',
        people: '4人',
        duty: '模块的实现和维护',
        technology: "WPF,SQL,Web Api,Nhibernate,Web Api,SSO,spring.net",
        Projectmessage: [
            '1. 系统主要功能模块: 项目管理,任务管理,日历设置,项目模版管理,资源管理,用户管理,报表管理.',
            '2. 个人主要负责：对任务流程中的-子流程与PE设计管理系统数据交互模块 进行封装以及维护,并且根据业务需求对代码库进行更新,修正的业务代码中的错误以及提高程序的性能。'
        ],
        picture: [
            require("@/static/project/control/5-1-lg.jpg"),
            require("@/static/project/control/5-2-lg.jpg"),
            require("@/static/project/control/5-3-lg.jpg"),
            require("@/static/project/control/5-4-lg.jpg"),
            require("@/static/project/control/5-5-lg.jpg"),
            require("@/static/project/control/5-6-lg.jpg")
        ],
    },
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