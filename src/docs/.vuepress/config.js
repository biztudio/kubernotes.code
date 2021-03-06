module.exports = {
    title: "姑苏小沈的 Kubernetes 笔记",
    description: 'Learn kubernetes with notes. Kubernetes is cool.',

    head: [
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://www.kubernetes.org.cn/img/2018/07/cropped-con999-192x192.png` }]
    ],

   /*  locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: '中文', // 将会被设置为 <html> 的 lang 属性
        title: '姑苏小沈的 Kubernetes 笔记',
        description: 'Vue-powered Static Site Generator'
      },
      '/en/': {
        lang: 'English',
        title: 'Yang\'s Kubernotes',
        description: 'Vue 驱动的静态网站生成器'
      }
    }, */

    themeConfig: {
      sidebar: [
        '/',
        ['/presentation/', '演示'],
        ['/articles/', '笔记']
      ]
    },

    markdown: {
      lineNumbers: true
    }
  }