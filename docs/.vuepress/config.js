module.exports = {
    base: '/blogs/',
    type: "blog",
    theme: 'reco',
    title: 'XXX的博客',
    description: 'YYY',
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    themeConfig: {
        logo: "/live.png",
        authorAvatar: "/live.png",
        author: "Shark Xu",
        nav: [
            { text: "首页", link: "/" },
            {
                text: "Shark Xu 的博客",
                items: [
                    { text: "掘金", link: "https://juejin.cn/user/233526039432445" },
                    { text: "Github", link: "https://github.com/Xusssyyy" }
                ]
            }
        ],
        // sidebar: [
        //     {
        //         title: "欢迎学习",
        //         path: "/",
        //         collapsable: false,  // 是否折叠
        //         children: [{ title: "博客简介", path: "/" }],
        //     },
        //     {
        //         title: "基础篇",
        //         path: "/blogs/1",
        //         collapsable: true,
        //         children: [
        //             { title: "第一篇", path: "/blogs/1" },
        //             { title: "第二篇", path: "/blogs/2" },
        //         ]
        //     }
        // ],
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "博客", // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        },
    },
    plugins: [
        [
            "sakura",
            {
                num: 20, // 默认数量
                show: true, //  是否显示
                zIndex: -1, // 层级
                img: {
                    replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                },
            },
        ],
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
                audios: [
                    {
                        name: "강남역 4번 출구",
                        artist: "Plastic / Fallin` Dild",
                        url: "https://assets.smallsunnyfox.com/music/2.mp3",
                        cover: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F59b36124-3847-42a5-baf3-2eb0572dd4c1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700881049&t=ef1b2b6d01cd69d1bf36e8827903226c",
                    },
                    {
                        name: "팔베개",
                        artist: "최낙타",
                        url: "https://assets.smallsunnyfox.com/music/3.mp3",
                        cover:
                            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F59b36124-3847-42a5-baf3-2eb0572dd4c1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700881049&t=ef1b2b6d01cd69d1bf36e8827903226c",
                    },
                ],
                // 是否默认缩小
                autoShrink: true,
                // 缩小时缩为哪种模式
                shrinkMode: "float",
                // 悬浮窗样式
                floatStyle: { bottom: "20px", "z-index": "999999" },
            },
        ],
    ]
}
