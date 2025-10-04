import { defineNavbarConfig } from 'vuepress-theme-plume';
import { version } from '../../package.json';

export const navbar = defineNavbarConfig([
    {
        text: '指南',
        icon: 'icon-park-outline:guide-board',
        link: '/notes/guide/介绍.md',
    },
    { text: 'SDK', link: '/notes/sdk/README.md', icon: 'carbon:api' },
    { text: '推广中心', link: '/promotion/', icon: 'mdi:star-shooting-outline' },
    {
        text: '更多',
        icon: 'icon-park-outline:more-three',
        items: [
            { text: '常见问题', link: '/questions/', icon: 'wpf:faq' },
        ],
    },
    {
        text: `${version}`,
        icon: 'codicon:versions',
        items: [
            { 
                text: '更新日志', 
                link: '/notes/update/logs/',
            }
        ],
    },
])
