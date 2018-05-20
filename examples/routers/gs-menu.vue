<template>
    <GsMenu :logo="logo"
      title="公安大系统"
      toggle-system
      :menus="menuList"
      :submenus="submenuList"
      ></GsMenu>
</template>
<script>
    import navImgUrl from '../../assets/components/gs-menu/dataSearch.png';
    import logoImgUrl from '../../assets/components/gs-menu/logo.png';
    import toolImgUrl from '../../assets/components/gs-menu/tool.png';
    import toolActiveImgUrl from '../../assets/components/gs-menu/tool-active.png';
    export default {
        data() {
            return {
                logo:logoImgUrl,
                menuList: [{
                    text: '首页',
                    name: '1',
                    icon: navImgUrl
                }, {
                    text: '数据搜索',
                    name: '2',
                    icon: navImgUrl
                }, {
                    text: '技战法',
                    name: '3',
                    icon: navImgUrl
                }],
                submenuList: [{
                    text: '用户下载',
                    icon: toolImgUrl,
                    activeIcon: toolActiveImgUrl
                }, {
                    text: '用户下载',
                    icon: toolImgUrl,
                    activeIcon: toolActiveImgUrl
                }]
            }
        }
    }

</script>
