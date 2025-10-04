import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/A-Ersan/astraljs/Astral3D/node_modules/.pnpm/vuepress-plugin-md-power@1._2c87109d6cd5f186736a72942ca145fb/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/A-Ersan/astraljs/Astral3D/node_modules/.pnpm/vuepress-plugin-md-power@1._2c87109d6cd5f186736a72942ca145fb/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/A-Ersan/astraljs/Astral3D/node_modules/.pnpm/vuepress-plugin-md-power@1._2c87109d6cd5f186736a72942ca145fb/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'D:/A-Ersan/astraljs/Astral3D/node_modules/.pnpm/vuepress-plugin-md-power@1._2c87109d6cd5f186736a72942ca145fb/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import Annotation from 'D:/A-Ersan/astraljs/Astral3D/node_modules/.pnpm/vuepress-plugin-md-power@1._2c87109d6cd5f186736a72942ca145fb/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'

import 'D:/A-Ersan/astraljs/Astral3D/node_modules/.pnpm/vuepress-plugin-md-power@1._2c87109d6cd5f186736a72942ca145fb/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
    app.component('Annotation', Annotation)
  },
  setup() {
    
  }
})
