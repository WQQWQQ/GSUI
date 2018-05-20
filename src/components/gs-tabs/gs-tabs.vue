<template>
    <div ref="tabWrapper"
      :style="{minWidth:minWidth+'px'}"
      :class="[prefixCls+'-container',closable?prefixCls+'-container-closable':prefixCls+'-container-normal']">
        <Icon v-if="closable"
          v-show="tabNavShow"
          type="chevron-left"
          @click.native="scrollLeft"></Icon>
        <Icon v-if="closable"
          v-show="tabNavShow"
          type="chevron-right"
          @click.native="scrollRight"></Icon>
        <ul ref="tabContent"
          :class="prefixCls+'-list'"
          v-if="closable"
          :style="{left:contentOffsetLeft+'px'}">
            <li v-for="(item,index) in tabListCopy"
              :key="index"
              @click="onTabClick(item,index)"
              :class="{'active':index==tabActiveIndex}">
                <img v-if="item.icon"
                  :src="tabActiveIndex==index?(item.activeIcon || item.icon):item.icon" />
                <span>{{item.text}}</span>
                <Icon type="close"
                  @click.native.stop="handleTabRemove(item,index)"></Icon>
            </li>
        </ul>
        <ul v-if="!closable"
          v-show="tabListCopy.length>0"
          :class="prefixCls+'-list'">
            <li v-for="(item,index) in tabListCopy"
              :key="index"
              :ref="'tab'+index"
              @click="onTabClick(item,index)"
              :class="{'active':index==tabActiveIndex}">
                <img v-if="item.icon"
                  :src="tabActiveIndex==index?(item.activeIcon || item.icon):item.icon" />
                <span>{{item.text}}</span>
                <span class="triangle"
                  v-show="index == tabActiveIndex"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    import {
        deepCopy,
        throttle
    }
    from '../../utils/common';
    const prefixCls = 'ivu-tabs';
    export default {
        name: 'GsTabs',
        props: {
            tabList: {
                type: Array,
                default() {
                    return [];
                }
            },
            closable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                minWidth: 0,
                contentWidth: 0,
                wrapperWidth: 0,
                contentOffsetLeft: 0,
                tabListCopy: deepCopy(this.tabList),
                tabActiveIndex: 0,
                prefixCls: prefixCls
            }
        },
        watch: {
            tabList: function(newVal, oldVal) {
                this.tabListCopy = newVal;
                this.$nextTick(()=>{
                    this.contentWidth = this.$refs.tabContent ? this.$refs.tabContent.getBoundingClientRect().width : 0;
                });
            },
            tabNavShow: function(val) {
                if(!val) this.contentOffsetLeft = 0;
            }
        },
        computed: {
            tabNavShow: function() {
                return this.wrapperWidth < this.contentWidth;
            }
        },
        methods: {
            onTabClick(item, index) {
                this.tabActiveIndex = index;
                this.$emit('on-click', item, index);
            },
            handleTabRemove(item, index) {
                this.tabActiveIndex = 0;
                this.$emit('on-tab-remove', item, index);
            },
            scrollLeft() {
                if(this.$refs.tabContent) {
                    this.contentOffsetLeft += 50;
                    if(this.contentOffsetLeft > 0) {
                        this.contentOffsetLeft = 0;
                    }
                }
            },
            scrollRight() {
                if(this.$refs.tabContent) {
                    this.contentOffsetLeft -= 50;
                    let gap = this.contentWidth - this.wrapperWidth;
                    if(Math.abs(this.contentOffsetLeft) > gap) {
                        this.contentOffsetLeft = -gap;
                    }
                }
            }
        },
        mounted() {
            this.wrapperWidth = this.$refs.tabWrapper.getBoundingClientRect().width;
            this.contentWidth = this.$refs.tabContent ? this.$refs.tabContent.getBoundingClientRect().width : 0;
            if(!this.closable) {
                for(let i = 0, len = this.tabListCopy.length; i < len; i++) {
                    this.minWidth += +((this.$refs[`tab${i}`][0]).getBoundingClientRect().width);
                }
            }
            window.addEventListener('resize', throttle(() => {
                this.wrapperWidth = this.$refs.tabWrapper.getBoundingClientRect().width;
            }));
        }
    }

</script>
