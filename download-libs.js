const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  {
    url: 'https://cdn.bootcdn.net/ajax/libs/vue/2.5.22/vue.min.js',
    dest: 'static/libs/js/vue.min.js'
  },
  {
    url: 'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.1/vuex.min.js',
    dest: 'static/libs/js/vuex.min.js'
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/view-design@4.7.0/dist/iview.min.js',
    dest: 'static/libs/js/iview.js'
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.6/index.js',
    dest: 'static/libs/js/element-ui.js'
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.6/locale/zh-CN.min.js',
    dest: 'static/libs/js/element-ui-zh-CN.js'
  },
  {
    url: 'https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.2/vue-router.min.js',
    dest: 'static/libs/js/vue-router.js'
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.6/theme-chalk/index.css',
    dest: 'static/libs/css/element-ui.css'
  },
  {
    url: 'https://cdn.bootcdn.net/ajax/libs/view-design/4.7.0/styles/iview.css',
    dest: 'static/libs/css/iview.css'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded: ' + dest);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  for (const file of files) {
    try {
      await downloadFile(file.url, file.dest);
    } catch (err) {
      console.error('Failed to download ' + file.url + ': ' + err.message);
    }
  }
}

downloadAll();
