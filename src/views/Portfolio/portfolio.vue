<template>
  <div class="portfolio-page">
    <!-- Top Bar -->
    <!-- PC Topbar -->
    <header v-if="!isMobile" class="topbar">
      <div class="topbar-brand">{{ $t('portfolio.brand') }}</div>
      <nav class="topbar-nav">
        <a :class="{ active: activeTab === 'dashboard' }" @click="switchTab('dashboard')">{{ $t('portfolio.tabDashboard') }}</a>
        <a :class="{ active: activeTab === 'archive' }" @click="switchTab('archive')">{{ $t('portfolio.tabArchive') }}</a>
        <a :class="{ active: activeTab === 'ai' }" @click="switchTab('ai')">{{ $t('portfolio.tabAi') }}</a>
      </nav>
      <div class="topbar-extra">
        <a href="/" class="topbar-resume">{{ $t('portfolio.toResume') }}</a>
        <div class="topbar-lang" @click="toggleLang">{{ currentLang === 'zh-CN' ? 'EN' : '中' }}</div>
      </div>
    </header>

    <!-- Mobile Topbar -->
    <header v-if="isMobile" class="topbar-mobile">
      <select class="mobile-tab-select" :value="activeTab" @change="switchTab($event.target.value)">
        <option value="dashboard">{{ $t('portfolio.tabDashboard') }}</option>
        <option value="archive">{{ $t('portfolio.tabArchive') }}</option>
        <option value="ai">{{ $t('portfolio.tabAi') }}</option>
      </select>
      <div class="mobile-topbar-actions">
        <a href="/" class="topbar-resume">📋</a>
        <div class="topbar-lang" @click="toggleLang">{{ currentLang === 'zh-CN' ? 'EN' : '中' }}</div>
      </div>
    </header>

    <!-- Tab 1: Dashboard -->
    <div v-show="activeTab === 'dashboard'" class="page">
      <div class="sec-eyebrow">{{ $t('dashboard.eyebrow') }}</div>
      <div class="sec-title">{{ $t('dashboard.title') }}</div>
      <div class="sec-subtitle">{{ $t('dashboard.subtitle') }}</div>
      <div class="sec-rule"></div>

      <!-- Stats -->
      <div class="stats-row">
        <div class="stat-item">
          <div class="sv">{{ projectCount }}</div>
          <div class="sl">{{ $t('dashboard.statProjects') }}</div>
          <div class="ss">{{ $t('dashboard.statProjectsSub') }}</div>
        </div>
        <div class="stat-item">
          <div class="sv" style="color:#5a8f4a;">6</div>
          <div class="sl">{{ $t('dashboard.statAiApps') }}</div>
          <div class="ss">{{ $t('dashboard.statAiAppsSub') }}</div>
        </div>
        <div class="stat-item">
          <div class="sv" style="color:#4a7fb5;">10</div>
          <div class="sl">{{ $t('dashboard.statYears') }}</div>
          <div class="ss">2016 — 2026</div>
        </div>
        <div class="stat-item">
          <div class="sv" style="color:#7c5cbf;">4</div>
          <div class="sl">{{ $t('dashboard.statCompanies') }}</div>
          <div class="ss">{{ $t('dashboard.statCompaniesSub') }}</div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="sh">{{ $t('dashboard.timeline') }}</div>
      <div class="shd">{{ $t('dashboard.timelineDesc') }}</div>
      <div class="tl-wrap">
        <div v-for="(item, idx) in projectList" :key="idx" class="tl-item" :class="{ 'is-old': idx > 16 }">
          <div class="tl-date">{{ item.startTime }} — {{ item.endTime || item.duration }}</div>
          <div class="tl-title">{{ item.title }}</div>
          <div class="tl-sub">{{ item.company }} · {{ item.role }}</div>
          <div class="tl-tags">
            <span v-for="tag in item.tags" :key="tag" class="tl-tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <!-- Tech Distribution -->
      <div class="sh">{{ $t('dashboard.techDist') }}</div>
      <div class="shd">{{ $t('dashboard.techDistDesc') }}</div>
      <div class="tech-grid">
        <div class="tech-block">
          <h4>{{ $t('dashboard.backendLang') }}</h4>
          <div class="tech-row"><div class="tn">C# .NET</div><div class="tt"><div class="tf" style="width:56%"></div></div><div class="tc">9</div></div>
          <div class="tech-row"><div class="tn">Python</div><div class="tt"><div class="tf" style="width:56%"></div></div><div class="tc">9</div></div>
          <div class="tech-row"><div class="tn">Java</div><div class="tt"><div class="tf" style="width:11%"></div></div><div class="tc">1</div></div>
        </div>
        <div class="tech-block">
          <h4>{{ $t('dashboard.frontendFw') }}</h4>
          <div class="tech-row"><div class="tn">Vue 2/3</div><div class="tt"><div class="tf" style="width:63%"></div></div><div class="tc">10</div></div>
          <div class="tech-row"><div class="tn">jQuery</div><div class="tt"><div class="tf" style="width:42%"></div></div><div class="tc">6</div></div>
          <div class="tech-row"><div class="tn">React</div><div class="tt"><div class="tf" style="width:11%"></div></div><div class="tc">1</div></div>
        </div>
        <div class="tech-block">
          <h4>{{ $t('dashboard.dbInfra') }}</h4>
          <div class="tech-row"><div class="tn">MySQL</div><div class="tt"><div class="tf" style="width:79%"></div></div><div class="tc">12</div></div>
          <div class="tech-row"><div class="tn">Docker</div><div class="tt"><div class="tf" style="width:42%"></div></div><div class="tc">6</div></div>
          <div class="tech-row"><div class="tn">Redis</div><div class="tt"><div class="tf" style="width:37%"></div></div><div class="tc">5</div></div>
        </div>
      </div>

      <!-- Domain Map -->
      <div class="sh">{{ $t('dashboard.domainMap') }}</div>
      <div class="shd">{{ $t('dashboard.domainMapDesc') }}</div>
      <div class="domain-grid">
        <div class="domain-card" v-for="d in domains" :key="d.name">
          <div class="di">{{ d.icon }}</div>
          <div class="dn">{{ d.name }}</div>
          <div class="dc">{{ d.count }}</div>
        </div>
      </div>

      <div class="footer"><div class="ft">{{ $t('portfolio.footer') }}</div></div>
    </div>

    <!-- Tab 2: Archive -->
    <div v-show="activeTab === 'archive'" class="page">
      <div class="sec-eyebrow">{{ $t('archive.eyebrow') }}</div>
      <div class="sec-title">{{ $t('archive.title') }}</div>
      <div class="sec-subtitle">{{ $t('archive.subtitle') }}</div>
      <div class="sec-rule"></div>

      <div v-for="stage in stages" :key="stage.company" class="stage-block">
        <div class="stage-header">
          <div class="stage-company">{{ stage.company }}</div>
          <div class="stage-era">{{ stage.era }}</div>
          <div class="stage-tagline">{{ stage.tagline }}</div>
        </div>

        <div v-for="proj in stage.projects" :key="proj.title" class="proj-card">
          <div class="pc-hdr" @click="$set(openProjects, proj.title, !openProjects[proj.title])">
            <div class="pc-meta">
              <div class="pc-date">{{ proj.startTime }} — {{ proj.endTime || proj.duration }}</div>
              <div class="pc-title">{{ proj.title }}</div>
              <div class="pc-role">{{ proj.role }} · {{ proj.teamSize }}</div>
            </div>
            <div class="pc-arr" :class="{ open: openProjects[proj.title] }">▾</div>
          </div>
          <div class="pc-body" :class="{ open: openProjects[proj.title] }">
            <div class="pc-summary">{{ proj.summary }}</div>
            <div class="pc-sec" v-if="proj.businessContext">
              <h5>{{ $t('archive.businessContext') }}</h5>
              <p>{{ proj.businessContext }}</p>
            </div>
            <div class="pc-sec" v-if="proj.painPoints && proj.painPoints.length">
              <h5>{{ $t('archive.painPoints') }}</h5>
              <ul>
                <li v-for="(pp, i) in proj.painPoints" :key="i" v-html="pp"></li>
              </ul>
            </div>
            <div class="pc-sec" v-if="proj.solutions && proj.solutions.length">
              <h5>{{ $t('archive.solutions') }}</h5>
              <ul>
                <li v-for="(s, i) in proj.solutions" :key="i" v-html="s"></li>
              </ul>
            </div>
            <div class="pc-sec" v-if="proj.impact && proj.impact.length">
              <h5>{{ $t('archive.impact') }}</h5>
              <ul>
                <li v-for="(imp, i) in proj.impact" :key="i" v-html="imp"></li>
              </ul>
            </div>
            <div class="pc-tags" v-if="proj.allTags && proj.allTags.length">
              <span v-for="t in proj.allTags" :key="t" class="pc-tag">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer"><div class="ft">{{ $t('portfolio.footer') }}</div></div>
    </div>

    <!-- Tab 3: AI Capability -->
    <div v-show="activeTab === 'ai'" class="page">
      <div class="sec-eyebrow">{{ $t('ai.eyebrow') }}</div>
      <div class="sec-title">{{ $t('ai.title') }}</div>
      <div class="sec-subtitle">{{ $t('ai.subtitle') }}</div>
      <div class="sec-rule"></div>

      <div class="ai-hero">
        <div class="ai-quote">
          <div class="qm">"</div>
          <div class="qt">{{ $t('ai.quote') }}</div>
          <div class="qa">{{ $t('ai.quoteAuthor') }}</div>
        </div>
        <div class="hl-wrap">
          <div v-for="l in harnessLayers" :key="l.num" class="hl-row">
            <div class="hl-num">{{ l.num }}</div>
            <div class="hl-name">{{ l.name }}</div>
            <div class="hl-desc">{{ l.desc }}</div>
          </div>
        </div>
      </div>

      <div class="sh">{{ $t('ai.skillMatrix') }}</div>
      <div class="shd">{{ $t('ai.skillMatrixDesc') }}</div>
      <div class="skill-grid">
        <div v-for="sk in aiSkills" :key="sk.name" class="skill-card">
          <div class="sk-icon">{{ sk.icon }}</div>
          <div class="sk-name">{{ sk.name }}</div>
          <div class="sk-desc" v-html="sk.desc"></div>
        </div>
      </div>

      <div class="cc-block">
        <div class="cc-title">{{ $t('ai.ccTitle') }}</div>
        <div class="cc-sub" v-html="$t('ai.ccSub')"></div>
        <div class="cc-grid">
          <div v-for="cc in ccItems" :key="cc.num" class="cc-item">
            <div class="cc-num">{{ cc.num }}</div>
            <div class="cc-label">{{ cc.label }}</div>
            <div class="cc-desc" v-html="cc.desc"></div>
          </div>
        </div>
      </div>

      <div class="sh">{{ $t('ai.memTitle') }}</div>
      <div class="shd">{{ $t('ai.memDesc') }}</div>
      <div class="mem-grid">
        <div v-for="m in memLayers" :key="m.level" class="mem-card">
          <div class="ml">{{ m.level }}</div>
          <div class="mn">{{ m.name }}</div>
          <div class="mt">{{ m.tech }}</div>
          <div class="md">{{ m.desc }}</div>
        </div>
      </div>

      <div class="sh">{{ $t('ai.techStack') }}</div>
      <div class="shd">{{ $t('ai.techStackDesc') }}</div>
      <div class="ai-tech-row">
        <div v-for="t in aiTechStack" :key="t.name" class="ai-tech-card">
          <div class="at-icon">{{ t.icon }}</div>
          <div class="at-name">{{ t.name }}</div>
          <div class="at-detail">{{ t.detail }}</div>
        </div>
      </div>

      <div class="footer"><div class="ft">{{ $t('portfolio.footer') }}</div></div>
    </div>
  </div>
</template>

<script>
import configs from '@/config/index.js'
const { getProjectLists } = configs

export default {
  name: 'Portfolio',
  data () {
    return {
      activeTab: 'dashboard',
      currentLang: 'zh-CN',
      openProjects: {},
      isMobile: false
    }
  },
  computed: {
    projectList () {
      return getProjectLists(this.currentLang)
    },
    projectCount () {
      return this.projectList.length
    },
    stages () {
      const list = this.projectList
      const isZh = this.currentLang === 'zh-CN'
      const groups = [
        {
          company: isZh ? '歌尔股份' : 'Goertek Inc.',
          era: isZh ? '2025.09 — 至今' : '2025.09 — Present',
          tagline: isZh ? 'AI + MOM 时代' : 'AI + MOM Era',
          projects: []
        },
        {
          company: isZh ? '领益智造' : 'Lingyi iTech',
          era: '2022.04 — 2025.04',
          tagline: isZh ? '企业 MOM 时代' : 'Enterprise MOM Era',
          projects: []
        },
        {
          company: isZh ? '京瓷信息' : 'Kyocera Information',
          era: '2020.08 — 2022.02',
          tagline: isZh ? '全栈成长时代' : 'Full-Stack Growth Era',
          projects: []
        },
        {
          company: isZh ? '隽思印刷' : 'Jinsi Printing',
          era: '2017.03 — 2019.12',
          tagline: isZh ? '职业生涯起点' : 'Career Beginning',
          projects: []
        }
      ]
      list.forEach(p => {
        const t = p.startTime || ''
        if (t >= '2025.09') {
          groups[0].projects.push({ ...p })
        } else if (t >= '2022.04') {
          groups[1].projects.push({ ...p })
        } else if (t >= '2020.08') {
          groups[2].projects.push({ ...p })
        } else {
          groups[3].projects.push({ ...p })
        }
      })
      return groups.filter(g => g.projects.length > 0)
    },
    domains () {
      const isZh = this.currentLang === 'zh-CN'
      return [
        { icon: '🏭', name: isZh ? 'MOM / MES' : 'MOM / MES', count: isZh ? '6 个核心项目' : '6 Core Projects' },
        { icon: '🤖', name: isZh ? 'AI Agent' : 'AI Agent', count: this.currentLang === 'zh-CN' ? '6 个工业应用' : '6 Industrial Apps' },
        { icon: '👁️', name: isZh ? '工业视觉' : 'Industrial Vision', count: isZh ? '2 个完整系统' : '2 Complete Systems' },
        { icon: '🔧', name: isZh ? '工具链' : 'Toolchain', count: isZh ? '2 个效率工具' : '2 Efficiency Tools' },
        { icon: '🏢', name: isZh ? '企业应用' : 'Enterprise Apps', count: isZh ? '8 个系统' : '8 Systems' }
      ]
    },
    harnessLayers () {
      return [
        { num: 'L1', name: 'Agent Loop', desc: 'Plan → Execute → Observe → Replan' },
        { num: 'L2', name: 'Tool Dispatch', desc: 'Function Calling 工具分发与参数校验' },
        { num: 'L3', name: 'Skill Loader', desc: 'Markdown + YAML 动态加载业务规则' },
        { num: 'L4', name: 'Guardrail', desc: '输入校验 + 幻觉检测 + 输出格式校验' },
        { num: 'L5', name: 'Context Compact', desc: 'Token 预算管理 + 滑动窗口压缩' },
        { num: 'L6', name: 'Agent 层', desc: 'system_prompt + tools + planner + memory + verifier' }
      ]
    },
    aiSkills () {
      const isZh = this.currentLang === 'zh-CN'
      return [
        { icon: '📐', name: isZh ? 'PCB 贴装图生成' : 'PCB Assembly Drawing', desc: isZh ? 'Skill 驱动，BOM + 坐标文件自动解析匹配排版，GTK 模板输出。<br><br><strong style="color:#5a8f4a;">效率提升 95%+</strong>' : 'Skill-driven, BOM + coordinate auto-parsing, GTK template output.<br><br><strong style="color:#5a8f4a;">95%+ efficiency gain</strong>' },
        { icon: '🔌', name: isZh ? 'BOM 极性分析' : 'BOM Polarity Analysis', desc: isZh ? '规则引擎 + LLM 联网搜索，自动判断每颗器件极性并标注依据。<br><br><strong style="color:#5a8f4a;">准确率 99%+ · 3分钟/份</strong>' : 'Rule engine + LLM web search, auto polarity judgment.<br><br><strong style="color:#5a8f4a;">99%+ accuracy · 3min/sheet</strong>' },
        { icon: '🔬', name: isZh ? '切片报告 Agent' : 'Cross-section Report Agent', desc: isZh ? 'Python 桌面端 + LLM 双模式，OpenCV 预处理 + LLM 语义分析。<br><br><strong style="color:#5a8f4a;">30分钟 → 2分钟/份</strong>' : 'Python desktop + LLM dual-mode, OpenCV + LLM semantic analysis.<br><br><strong style="color:#5a8f4a;">30min → 2min/report</strong>' },
        { icon: '📡', name: isZh ? 'SMA 实时 IO Agent' : 'SMA Real-time IO Agent', desc: isZh ? 'Flask 独立服务，22 槽时段实时采集，双版本（A 确定性 + B LLM），7×24 自动监控。<br><br><strong style="color:#5a8f4a;">天级 → 分钟级</strong>' : 'Flask standalone, 22-slot real-time, dual versions, 7×24 monitoring.<br><br><strong style="color:#5a8f4a;">Days → Minutes</strong>' },
        { icon: '🎯', name: isZh ? 'YOLO 行为检测' : 'YOLO Behavior Detection', desc: isZh ? 'YOLOv8 训练 + ONNX 导出 + 量化加速，OpenCV 实时推理，违规自动告警。<br><br><strong style="color:#5a8f4a;">违规发现率 +300%</strong>' : 'YOLOv8 + ONNX + quantization, OpenCV real-time inference.<br><br><strong style="color:#5a8f4a;">Violation detection +300%</strong>' },
        { icon: '🧠', name: isZh ? 'Hiagent 多智能体平台' : 'Hiagent Multi-Agent Platform', desc: isZh ? 'Python 3.11 + FastAPI + React 18，9 子 Agent，三层记忆，Skill 动态加载。<br><br><strong style="color:#5a8f4a;">可复用技术资产</strong>' : 'Python 3.11 + FastAPI + React 18, 9 sub-agents, 3-tier memory.<br><br><strong style="color:#5a8f4a;">Reusable tech asset</strong>' }
      ]
    },
    ccItems () {
      return [
        { num: '01', label: '多 Agent 编排', desc: '通过 OMC 编排 20+ 专业 Agent，planner → architect → executor → reviewer → security 五阶段流水线。子代理并行执行，月均消耗 <strong style="color:#b8956a;">10 亿+ token</strong>。' },
        { num: '02', label: 'Skill 体系', desc: '自建 50+ Skills 覆盖 brainstorming、TDD、code-review、debugging、planning、frontend-design 等全流程。Skill 驱动业务规则动态加载，支持跨项目复用。' },
        { num: '03', label: 'Harness 六层架构', desc: 'Agent Loop / Tool Dispatch / Skill Loader / Guardrail / Context Compact / Agent 层。支持 Plan→Execute→Observe→Replan 自主决策闭环。' },
        { num: '04', label: 'Workflow 编排', desc: '确定性多代理编排：pipeline（流水线）、parallel（并发）、phase（阶段分组）。支持 resume 断点续传、budget token 预算控制、schema 校验。' },
        { num: '05', label: '持续学习系统', desc: 'Dynamic Conventions + Decision Log + Next-Session Handoff + Changelog Habit，实现跨会话知识积累与团队协作。' },
        { num: '06', label: '上下文工程', desc: 'CLAUDE.md 多层配置（用户级 / 项目级 / 规则级），Token 预算管理，滑动窗口压缩，关键信息优先级排序，避免上下文溢出。' }
      ]
    },
    memLayers () {
      return [
        { level: 'Level 1', name: '短期记忆', tech: '上下文窗口', desc: '当前任务上下文，存储临时变量、中间结果、用户当前意图。Agent 在单次会话内使用，任务结束后释放。' },
        { level: 'Level 2', name: '会话记忆', tech: 'SQLite', desc: '用户历史会话记录、偏好设置、常见问题模式。跨会话持久化，支持快速检索与恢复。' },
        { level: 'Level 3', name: '向量记忆', tech: 'ChromaDB', desc: '全局知识库：历史切片报告、BOM 极性数据、代码模式、最佳实践。支持语义检索与相似案例匹配。' }
      ]
    },
    aiTechStack () {
      return [
        { icon: '🧠', name: 'LLM 模型', detail: 'deepseek-v4 · Claude · GPT' },
        { icon: '🔗', name: 'Agent 框架', detail: '自研 Harness 6 层' },
        { icon: '📚', name: 'RAG 检索', detail: 'ChromaDB 向量数据库' },
        { icon: '🛠️', name: 'MCP 协议', detail: 'Model Context Protocol' }
      ]
    }
  },
  methods: {
    switchTab (tab) {
      this.activeTab = tab
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    toggleLang () {
      this.currentLang = this.currentLang === 'zh-CN' ? 'en-US' : 'zh-CN'
    },
    checkMobile () {
      const ua = navigator.userAgent
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || window.innerWidth <= 768
    }
  },
  created () {
    this.checkMobile()
  },
  mounted () {
    window.addEventListener('resize', this.checkMobile)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkMobile)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Noto+Sans+SC:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --bg: #faf8f5;
  --card: #ffffff;
  --text: #1a1a1a;
  --text-secondary: #5c5c5c;
  --text-muted: #9a9488;
  --accent: #b8956a;
  --accent-light: #d4c4a8;
  --border: #e8e0d5;
  --border-light: #f0ebe0;
  --tag-bg: #f5f0e8;
  --tag-text: #8b7355;
}

.portfolio-page {
  background: #faf8f5;
  color: #1a1a1a;
  font-family: 'Noto Sans SC', 'Inter', -apple-system, sans-serif;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  min-height: 100vh;
}

/* Top Bar */
.topbar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(250,248,245,0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid #e8e0d5;
  padding: 0 48px;
  display: flex; align-items: center; justify-content: space-between;
  height: 60px;
}
.topbar-brand {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 16px; font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.3px;
}
.topbar-nav { display: flex; gap: 0; }
.topbar-nav a {
  text-decoration: none;
  color: #9a9488;
  font-size: 13px; font-weight: 500;
  padding: 10px 24px; cursor: pointer;
  transition: all 0.25s;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}
.topbar-nav a.active {
  color: #1a1a1a;
  border-bottom-color: #b8956a;
  font-weight: 600;
}
.topbar-nav a:hover { color: #1a1a1a; }
.topbar-extra { display: flex; align-items: center; gap: 16px; }
.topbar-lang {
  font-size: 12px; color: #9a9488;
  cursor: pointer; font-weight: 500;
  padding: 4px 10px;
  border: 1px solid #e8e0d5;
  border-radius: 4px;
  transition: all 0.2s;
}
.topbar-lang:hover { border-color: #b8956a; color: #b8956a; }
.topbar-resume {
  font-size: 12px; color: #9a9488;
  text-decoration: none; font-weight: 500;
  transition: color 0.2s;
}
.topbar-resume:hover { color: #b8956a; }

/* Mobile Topbar */
.topbar-mobile {
  position: sticky; top: 0; z-index: 100;
  background: rgba(250,248,245,0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid #e8e0d5;
  padding: 10px 16px;
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
}
.mobile-tab-select {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e8e0d5;
  border-radius: 6px;
  background: #fff;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Noto Sans SC', 'Inter', sans-serif;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239a9488' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
}
.mobile-topbar-actions {
  display: flex; align-items: center; gap: 10px;
}

/* Page */
.page { max-width: 1100px; margin: 0 auto; padding: 56px 48px 100px; }

/* Section Header */
.sec-eyebrow {
  font-size: 11px; color: #b8956a;
  letter-spacing: 3px; text-transform: uppercase;
  font-weight: 700; margin-bottom: 10px;
}
.sec-title {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 40px; font-weight: 900;
  color: #1a1a1a;
  line-height: 1.15; margin-bottom: 10px;
  letter-spacing: -0.5px;
}
.sec-subtitle {
  font-size: 16px; color: #5c5c5c;
  margin-bottom: 36px; line-height: 1.6;
}
.sec-rule {
  width: 48px; height: 3px;
  background: #b8956a;
  margin-bottom: 48px;
  border-radius: 2px;
}

/* Stats */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 56px;
}
.stat-item {
  background: #fff;
  border: 1px solid #e8e0d5;
  padding: 28px 24px;
  border-radius: 10px;
  transition: all 0.3s;
}
.stat-item:hover {
  border-color: #d4c4a8;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
}
.stat-item .sv {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 48px; font-weight: 900;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 6px;
  letter-spacing: -1.5px;
}
.stat-item .sl {
  font-size: 14px; color: #5c5c5c;
  font-weight: 500;
}
.stat-item .ss {
  font-size: 12px; color: #9a9488;
  margin-top: 4px;
}

/* Section Heading */
.sh {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 24px; font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 6px;
  letter-spacing: -0.3px;
}
.shd {
  font-size: 14px; color: #5c5c5c;
  margin-bottom: 28px;
}

/* Timeline */
.tl-wrap {
  position: relative;
  padding-left: 44px;
  margin-bottom: 56px;
}
.tl-wrap::before {
  content: '';
  position: absolute; left: 14px; top: 8px; bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, #b8956a, #f0ebe0, #f0ebe0);
}
.tl-item {
  position: relative;
  margin-bottom: 10px;
  padding: 18px 24px;
  background: #fff;
  border: 1px solid #e8e0d5;
  border-radius: 6px;
  transition: all 0.25s;
}
.tl-item:hover {
  border-color: #d4c4a8;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
}
.tl-item::before {
  content: '';
  position: absolute; left: -36px; top: 24px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #b8956a;
  border: 2px solid #faf8f5;
}
.tl-item .tl-date {
  font-size: 11px; color: #b8956a;
  font-weight: 700; letter-spacing: 1.5px;
  margin-bottom: 4px;
}
.tl-item .tl-title {
  font-size: 17px; font-weight: 700;
  color: #1a1a1a;
}
.tl-item .tl-sub {
  font-size: 13px; color: #5c5c5c;
  margin-top: 2px;
}
.tl-item .tl-tags {
  display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px;
}
.tl-tag {
  font-size: 10px; font-weight: 500;
  padding: 3px 10px;
  background: #f5f0e8;
  color: #8b7355;
  border-radius: 20px;
}
.tl-item.is-old {
  opacity: 0.5;
}
.tl-item.is-old:hover {
  opacity: 0.75;
}

/* Tech Bars */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 56px;
}
.tech-block {
  background: #fff;
  border: 1px solid #e8e0d5;
  padding: 24px;
  border-radius: 10px;
}
.tech-block h4 {
  font-size: 11px; letter-spacing: 2px;
  color: #9a9488; margin-bottom: 18px;
  text-transform: uppercase; font-weight: 700;
}
.tech-row {
  display: flex; align-items: center; margin-bottom: 12px;
}
.tech-row .tn {
  width: 80px; font-size: 13px; color: #5c5c5c;
  font-weight: 500; flex-shrink: 0;
}
.tech-row .tt {
  flex: 1; height: 6px; background: #f0ebe0;
  border-radius: 3px; overflow: hidden; margin: 0 12px;
}
.tech-row .tf {
  height: 100%; border-radius: 3px;
  background: linear-gradient(90deg, #b8956a, #d4b88c);
}
.tech-row .tc {
  width: 24px; text-align: right;
  font-size: 12px; color: #9a9488;
  font-weight: 600; flex-shrink: 0;
}

/* Domain */
.domain-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin-bottom: 56px;
}
.domain-card {
  background: #fff;
  border: 1px solid #e8e0d5;
  padding: 28px 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}
.domain-card:hover {
  border-color: #d4c4a8;
  transform: translateY(-3px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
}
.domain-card .di { font-size: 32px; margin-bottom: 8px; }
.domain-card .dn { font-size: 16px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
.domain-card .dc { font-size: 12px; color: #9a9488; font-weight: 500; }

/* Archive Stage */
.stage-block { margin-bottom: 48px; }
.stage-header {
  display: flex; align-items: baseline; gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e8e0d5;
}
.stage-header .stage-company {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 22px; font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.3px;
}
.stage-header .stage-era { font-size: 13px; color: #9a9488; font-weight: 500; }
.stage-header .stage-tagline { font-size: 13px; color: #b8956a; font-style: italic; font-weight: 500; margin-left: auto; }

.proj-card {
  background: #fff;
  border: 1px solid #e8e0d5;
  margin-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s;
}
.proj-card:hover { border-color: #d4c4a8; }
.pc-hdr {
  padding: 20px 24px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px;
  transition: background 0.2s;
}
.pc-hdr:hover { background: #fdfaf6; }
.pc-hdr .pc-meta { flex: 1; }
.pc-hdr .pc-date {
  font-size: 11px; color: #b8956a;
  font-weight: 700; letter-spacing: 1.5px;
  margin-bottom: 4px;
}
.pc-hdr .pc-title {
  font-size: 18px; font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.2px;
}
.pc-hdr .pc-role {
  font-size: 13px; color: #5c5c5c;
  font-weight: 500;
  margin-top: 2px;
}
.pc-hdr .pc-arr {
  font-size: 18px; color: #9a9488;
  transition: transform 0.3s;
  flex-shrink: 0;
}
.pc-hdr .pc-arr.open { transform: rotate(180deg); color: #b8956a; }

.pc-body {
  display: none;
  padding: 0 24px 24px;
  border-top: 1px solid #e8e0d5;
}
.pc-body.open { display: block; }
.pc-body .pc-summary {
  font-size: 14px; color: #5c5c5c;
  line-height: 1.8; margin: 20px 0;
  padding: 16px 20px;
  background: #fdfaf6;
  border-left: 3px solid #b8956a;
  border-radius: 0 6px 6px 0;
}
.pc-body .pc-sec { margin-bottom: 20px; }
.pc-body .pc-sec h5 {
  font-size: 11px; letter-spacing: 2px;
  color: #b8956a;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
}
.pc-body .pc-sec p {
  font-size: 14px; color: #5c5c5c;
  line-height: 1.7;
}
.pc-body .pc-sec ul {
  list-style: none; padding: 0;
}
.pc-body .pc-sec ul li {
  font-size: 14px; color: #5c5c5c;
  padding: 4px 0; padding-left: 18px;
  position: relative;
  line-height: 1.7;
}
.pc-body .pc-sec ul li::before {
  content: '—';
  position: absolute; left: 0; color: #b8956a;
  font-weight: 700;
}
.pc-tags {
  display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px;
}
.pc-tag {
  font-size: 10px; font-weight: 500;
  padding: 4px 12px;
  background: #f5f0e8;
  color: #8b7355;
  border-radius: 20px;
}

/* AI Page */
.ai-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 56px;
}
.ai-quote {
  padding: 32px;
  background: #fff;
  border: 1px solid #e8e0d5;
  border-radius: 10px;
  display: flex; flex-direction: column; justify-content: center;
}
.ai-quote .qm {
  font-size: 56px; color: #d4c4a8;
  line-height: 0.5; margin-bottom: 16px;
  font-family: 'Noto Serif SC', 'Georgia', serif;
}
.ai-quote .qt {
  font-size: 20px; color: #1a1a1a;
  line-height: 1.5; margin-bottom: 12px;
  font-weight: 600;
  font-family: 'Noto Serif SC', 'Georgia', serif;
}
.ai-quote .qa {
  font-size: 13px; color: #9a9488;
  font-weight: 500;
}
.hl-wrap {
  background: #fff;
  border: 1px solid #e8e0d5;
  border-radius: 10px;
  padding: 16px;
  display: flex; flex-direction: column; gap: 3px;
}
.hl-row {
  display: flex; align-items: center;
  padding: 12px 16px;
  background: #fdfaf6;
  border-radius: 6px;
  border-left: 3px solid #d4c4a8;
  transition: all 0.2s;
}
.hl-row:hover { border-left-color: #b8956a; background: #faf5ed; }
.hl-row .hl-num {
  font-size: 14px; font-weight: 900;
  color: #b8956a;
  width: 32px; flex-shrink: 0;
}
.hl-row .hl-name {
  font-size: 14px; font-weight: 700;
  color: #1a1a1a;
  width: 140px; flex-shrink: 0;
}
.hl-row .hl-desc {
  font-size: 12px; color: #9a9488;
  flex: 1;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 56px;
}
.skill-card {
  background: #fff;
  border: 1px solid #e8e0d5;
  padding: 28px;
  border-radius: 10px;
  transition: all 0.3s;
}
.skill-card:hover {
  border-color: #d4c4a8;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
}
.skill-card .sk-icon { font-size: 28px; margin-bottom: 10px; }
.skill-card .sk-name { font-size: 16px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; }
.skill-card .sk-desc { font-size: 13px; color: #5c5c5c; line-height: 1.7; }

.cc-block {
  background: #fff;
  border: 1px solid #e8e0d5;
  border-radius: 10px;
  padding: 36px;
  margin-bottom: 56px;
}
.cc-block .cc-title {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 24px; font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 6px;
}
.cc-block .cc-sub {
  font-size: 14px; color: #5c5c5c;
  margin-bottom: 28px;
}
.cc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cc-item {
  padding: 24px;
  background: #fdfaf6;
  border-radius: 6px;
  border: 1px solid #f0ebe0;
  transition: all 0.3s;
}
.cc-item:hover {
  border-color: #d4c4a8;
  background: #faf5ed;
}
.cc-item .cc-num {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 32px; font-weight: 900;
  color: #b8956a;
  line-height: 1;
  margin-bottom: 10px;
}
.cc-item .cc-label { font-size: 15px; font-weight: 700; color: #1a1a1a; margin-bottom: 6px; }
.cc-item .cc-desc { font-size: 13px; color: #5c5c5c; line-height: 1.7; }

.mem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 56px;
}
.mem-card {
  background: #fff;
  border: 1px solid #e8e0d5;
  padding: 28px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}
.mem-card:hover {
  border-color: #d4c4a8;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
}
.mem-card .ml {
  font-size: 10px; letter-spacing: 2.5px;
  color: #b8956a;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 700;
}
.mem-card .mn { font-size: 18px; font-weight: 800; color: #1a1a1a; margin-bottom: 6px; }
.mem-card .mt { font-size: 12px; color: #9a9488; margin-bottom: 10px; font-weight: 500; }
.mem-card .md { font-size: 13px; color: #5c5c5c; line-height: 1.7; }

.ai-tech-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 56px;
}
.ai-tech-card {
  background: #fff;
  border: 1px solid #e8e0d5;
  padding: 24px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}
.ai-tech-card:hover {
  border-color: #d4c4a8;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
}
.ai-tech-card .at-icon { font-size: 28px; margin-bottom: 8px; }
.ai-tech-card .at-name { font-size: 15px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
.ai-tech-card .at-detail { font-size: 11px; color: #9a9488; font-weight: 500; }

/* Footer */
.footer {
  text-align: center;
  padding: 40px;
  border-top: 1px solid #e8e0d5;
  margin-top: 40px;
}
.footer .ft {
  font-size: 12px; color: #9a9488;
  font-weight: 500; letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 900px) {
  .topbar { padding: 0 20px; }
  .topbar-nav a { padding: 10px 12px; font-size: 11px; }
  .page { padding: 40px 20px 60px; }
  .sec-title { font-size: 30px; }
  .stats-row { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .stat-item .sv { font-size: 36px; }
  .tech-grid { grid-template-columns: 1fr; }
  .domain-grid { grid-template-columns: repeat(3, 1fr); }
  .ai-hero { grid-template-columns: 1fr; }
  .skill-grid { grid-template-columns: 1fr; }
  .cc-grid { grid-template-columns: 1fr; }
  .mem-grid { grid-template-columns: 1fr; }
  .ai-tech-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .stats-row { grid-template-columns: 1fr; }
  .domain-grid { grid-template-columns: repeat(2, 1fr); }
  .ai-tech-row { grid-template-columns: 1fr; }
  .topbar-nav a { padding: 8px 8px; font-size: 10px; letter-spacing: 0; }
  .topbar-extra { gap: 8px; }
}
</style>