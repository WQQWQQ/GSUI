<template>
    <div @click="submenuShow=false;"
      :class="prefixCls+'-container'"
      :style="{minWidth:minWidth+'px'}">
        <i-menu mode="horizontal"
          theme="primary"
          :active-name="activeNameCopy"
          @on-select="onSelect">
            <div :class="prefixCls+'-logo'"
              ref="logo">
                <img v-if="logo"
                  :src="logo" />
                <span>{{title}}</span>
            </div>
            <div :class="prefixCls+'-list'"
              ref="list"
              v-if="menus.length>0">
                <MenuItem @mouseover.native="listActiveIndex=index"
                  :name="item.name"
                  v-for="(item,index) in menus"
                  :key="index">
                <img v-if="item.icon"
                  :src="listActiveIndex==index?(item.activeIcon || item.icon):item.icon" />
                <span>{{item.text}}</span>
                </MenuItem>
            </div>
            <div :class="prefixCls+'-admin'"
              ref="admin">
                <img :src="avatar"
                  :class="prefixCls+'-avatar'">
                <span :class="prefixCls+'-username'">{{username}}</span>
                <Icon @click.native.stop="submenuShow=!submenuShow;"
                  :class="{active:submenuShow}"
                  v-if="submenus.length>0"
                  type="arrow-down-b"></Icon>
                <ul :class="prefixCls+'-admin-submenu'"
                  v-if="submenus.length>0"
                  v-show="submenuShow">
                    <li @click="onSubmenuClick(item,index)"
                      @mouseout="submenuActiveIndex=null;"
                      @mouseover="submenuActiveIndex=index;"
                      v-for="(item,index) in submenus"
                      :key="index">
                        <img v-if="item.icon"
                          :src="submenuActiveIndex==index?(item.activeIcon || item.icon):item.icon" />
                        <span>{{item.text}}</span>
                    </li>
                </ul>
            </div>
            <div v-if="toggleSystem"
              :class="prefixCls+'-toggle'"
              ref="toggle" @click="toggle"></div>
        </i-menu>
    </div>
</template>
<script>
    import avatarUrl from '../../../assets/components/gs-menu/admin.png';
    import toggleSysUrl from '../../../assets/components/gs-menu/toggle.png';
    import toggleSysActiveUrl from '../../../assets/components/gs-menu/toggle-active.png';
    const prefixCls = 'ivu-menu';
    export default {
        name: 'GsMenu',
        props: {
            menus: {
                type: Array,
                default() {
                    return [];
                }
            },
            activeName: {
                type: [String, Number],
                default: ''
            },
            submenus: {
                type: Array,
                default() {
                    return [];
                }
            },
            toggleSystem: {
                type: Boolean,
                default: false
            },
            logo: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            username: {
                type: String,
                default: 'Admin'
            },
            avatar: {
                type: String,
                default: avatarUrl
            }
        },
        data() {
            return {
                submenuShow: false,
                minWidth: 0,
                activeNameCopy: this.activeName || (this.menus[0] ? this.menus[0].name : ''),
                prefixCls: prefixCls,
                toggleSysUrl: toggleSysUrl,
                listActiveIndex: 0,
                submenuActiveIndex: 0
            }
        },
        mounted() {
            this.minWidth = this.$refs.logo.getBoundingClientRect().width + this.$refs.admin.getBoundingClientRect().width + this.$refs.toggle.getBoundingClientRect().width + this.$refs.list.getBoundingClientRect().width;
        },
        methods: {
            toggle(){
              this.$emit('on-toggle');
            },
            onSelect(name) {
                this.activeNameCopy = name;
                this.$emit('on-select', name);
            },
            onSubmenuClick(item, index) {
                this.submenuShow = false;
                this.$emit('on-submenu-select', item, index);
            }
        }
    }

</script>
