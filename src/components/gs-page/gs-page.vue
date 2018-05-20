<template>
    <div :class="prefixCls+'-container'"
      v-show="total>pageSizeCopy" @click="optionShow=false;">
        <div :class="prefixCls+'-left'">
            <p :class="prefixCls+'-left-wrapper'">共
                <span :class="prefixCls+'-left-total'">{{total}}</span>条记录，每页显示
                <span @click.stop="toggleOptions" :class="prefixCls+'-left-select'">{{pageSizeCopy}}
                    <Icon :type="optionShow?'arrow-down-b':'arrow-up-b'"></Icon>
                </span>条记录</p>
            <transition name="fade" mode="out-in">
                <ul ref="options" v-show="optionShow" :class="prefixCls+'-left-options'" :style="{top:optionTop+'px'}">
                    <li @click="selectPageSize(item)" :class="[prefixCls+'-left-option',pageSizeCopy==item?prefixCls+'-left-option-active':'']" v-for="(item,index) in pageSizeOpts" :key="index">{{item}}</li>
                </ul>
            </transition>
        </div>
        <div :class="prefixCls+'-right'">
            <ul :class="prefixCls+'-right-pager'">
                <li :class="[prefixCls+'-item',prefixCls+'-first']"
                  @click="goFirstPage"
                  v-show="firstPageShow">首页</li>
                <li :class="[prefixCls+'-item',prefixCls+'-prev']"
                  @click="goPrevPage"
                  v-show="prevPageShow">上一页</li>
                <li :class="[prefixCls+'-item',prefixCls+'-num',item==currentPage?prefixCls+'-item-active':'']"
                  v-for="(item,index) in pageList"
                  :key="index"
                  @click="goPage(item)">{{item}}</li>
                <li :class="[prefixCls+'-item',prefixCls+'-next']"
                  @click="goNextPage"
                  v-show="nextPageShow">下一页</li>
                <li :class="[prefixCls+'-item',prefixCls+'-last']"
                  @click="goLastPage"
                  v-show="lastPageShow">尾页</li>
            </ul>
            <p :class="prefixCls+'-right-jump'">跳转到
                <input type="number"
                  :class="prefixCls+'-right-input'"
                  ref="currentPage">页
            </p>
            <span :class="[prefixCls+'-right-btn',prefixCls+'-item']"
              @click="onJump">跳转</span>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'ivu-page';
    export default {
        name: 'GsPage',
        props: {
            pageSize: {
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                default: 0
            },
            current: {
                type: Number,
                default: 1
            },
            pageSizeOpts: {
                type: Array,
                default() {
                    return [10, 20, 30, 40]
                }
            }
        },
        data() {
            return {
                pageSizeCopy:this.pageSize,
                optionShow:false,
                optionTop:0,
                prefixCls: prefixCls,
                firstPageShow: false,
                lastPageShow: false,
                prevPageShow: false,
                nextPageShow: false,
                currentPage: this.current>this.total?this.tatal:this.current,
                pageCount: 0,
                pageList: []
            }
        },
        watch: {
            total: function(val) {
                this.createPager();
            },
            pageList: function(val) {
                if(val && val.length) {
                    let length = val.length;
                    this.lastPageShow = val[length - 1] != this.pageCount;
                    this.firstPageShow = val[0] != 1;
                    this.prevPageShow = val[0] > 1;
                    this.nextPageShow = val[length - 1] < this.pageCount;
                }
            }
        },
        mounted() {
            this.createPager();
        },
        methods: {
            createPager() {
                let arr = [];
                this.pageCount = Math.ceil(this.total / this.pageSizeCopy);
                this.firstPageShow = this.lastPageShow = this.nextPageShow = this.pageCount > 5;
                for(let i = this.currentPage; i <= ((this.currentPage+4)>this.pageCount ? this.pageCount : this.currentPage+4); i++) {
                    arr.push(i);
                }
                this.pageList = arr;
            },
            toggleOptions(){
                this.optionShow=!this.optionShow;
                this.optionShow && this.$nextTick(()=>{
                    this.optionTop=-(this.$refs.options.getBoundingClientRect().height)-5;
                });
            },
            selectPageSize(pageSize){
                this.optionShow=false;
                this.pageSizeCopy=pageSize;
                this.$emit('on-page-size-change', pageSize);
            },
            goFirstPage() {
                this.currentPage = 1;
                let arr = [];
                for(let i = 1; i <= (this.pageCount > 5 ? 5 : this.pageCount); i++) {
                    arr.push(i);
                }
                this.pageList = arr;
                this.$emit('on-change', this.currentPage);
            },
            goLastPage() {
                this.currentPage = this.pageCount;
                let arr = [];
                for(let i = this.pageCount - 5 > 0 ? this.pageCount - 5 : 0; i < this.pageCount; i++) {
                    arr.push(i + 1);
                }
                this.pageList = arr;
                this.$emit('on-change', this.currentPage);
            },
            goNextPage() {
                this.currentPage = this.currentPage + 1;
                let firstItem = this.pageList.shift();
                this.pageList.push(firstItem + 5);
                this.$emit('on-change', this.currentPage);
            },
            goPrevPage() {
                this.currentPage = this.currentPage - 1;
                let lastItem = this.pageList.pop();
                this.pageList.unshift(lastItem - 5);
                this.$emit('on-change', this.currentPage);
            },
            goPage(page) {
                this.currentPage = page;
                this.$emit('on-change', page);
            },
            onJump() {
                let value = +this.$refs.currentPage.value;
                if(!value) return;
                value = Math.ceil(Math.abs(value));
                this.currentPage = (value > this.pageCount ? this.pageCount : value) || 1;
                let arr = [];
                let end = this.currentPage + 4 > this.pageCount ? this.pageCount : this.currentPage + 4;
                let start = end < 5 ? 1 : end - 4;
                for(let i = start; i <= end; i++) {
                    arr.push(i);
                }
                this.pageList = arr;
                this.$refs.currentPage.value = "";
                this.$emit('on-change', this.currentPage);
            }
        }
    }

</script>
