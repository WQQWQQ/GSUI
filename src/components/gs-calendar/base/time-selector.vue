<template>
    <div @click="hideTimeList"
      :class="prefixCls+'-container'"  v-clickoutside="hideTimeList">
        <span>时间：</span>
        <span @click.stop="showHourList"
          :class="[prefixCls+'-hour']">{{hourCopy}}
            <i :class="['ivu-icon',!hourShow?'ivu-icon-arrow-down-b':'ivu-icon-arrow-up-b']"></i>
        </span>
        <span>&nbsp;:&nbsp;</span>
        <span @click.stop="showMinuteList"
          :class="[prefixCls+'-minute']">{{minuteCopy}}
            <i :class="['ivu-icon',!minuteShow?'ivu-icon-arrow-down-b':'ivu-icon-arrow-up-b']"></i>
        </span>
        <span>&nbsp;:&nbsp;</span>
        <span @click.stop="showSecondList"
          :class="[prefixCls+'-second']">{{secondCopy}}
            <i :class="['ivu-icon',!secondShow?'ivu-icon-arrow-down-b':'ivu-icon-arrow-up-b']"></i>
        </span>
        <ul :class="[prefixCls+'-hour-list']"
          v-show="hourShow">
            <li @click="handleClick('hours',item,index)"
              :class="[prefixCls+'-list-item',index==+hourCopy?'active':'']"
              :key="index"
              v-for="(item,index) in hourList">{{item}}</li>
        </ul>
        <ul :class="[prefixCls+'-minute-list']"
          v-show="minuteShow">
            <li @click="handleClick('minutes',item,index)"
              :class="[prefixCls+'-list-item',index==+minuteCopy?'active':'']"
              :key="index"
              v-for="(item,index) in minuteList">{{item}}</li>
        </ul>
        <ul :class="[prefixCls+'-second-list']"
          v-show="secondShow">
            <li @click="handleClick('seconds',item,index)"
              :class="[prefixCls+'-list-item',index==+secondCopy?'active':'']"
              :key="index"
              v-for="(item,index) in secondList">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    const prefixCls = 'ivu-picker-time';

    import clickoutside from '../../../directives/clickoutside';

    export default {
        name: 'TimeSelector',
        directives: { clickoutside },
        props: {
            hour: {
                type: [Number, String],
                default: 0,
                validator(val) {
                    val = +val;
                    return !isNaN(val) && Math.floor(val) === val && val >= 0 && val < 24;
                }
            },
            minute: {
                type: [Number, String],
                default: 0,
                validator(val) {
                    val = +val;
                    return !isNaN(val) && Math.floor(val) === val && val >= 0 && val < 60;
                }
            },
            second: {
                type: [Number, String],
                default: 0,
                validator(val) {
                    val = +val;
                    return !isNaN(val) && Math.floor(val) === val && val >= 0 && val < 60;
                }
            }
        },
        data() {
            return {
                hourShow: false,
                minuteShow: false,
                secondShow: false,
                hourCopy:this.formatTime(this.hour),
                minuteCopy:this.formatTime(this.minute),
                secondCopy:this.formatTime(this.second),
                prefixCls: prefixCls
            };
        },
        computed: {
            hourList() {
                return this.getTimeList(24);
            },
            secondList() {
                return this.getTimeList(60);
            },
            minuteList() {
                return this.getTimeList(60);
            }
        },
        methods: {
            getTimeList(total){
                let list = [];
                for(let i = 0; i < total; i++) {
                    list.push(i < 10 ? '0' + i : i + '');
                }
                return list;
            },
            formatTime(val){
                return val< 10 ? '0' + val : val+ '';
            },
            hideTimeList() {
                this.hourShow = false;
                this.minuteShow = false;
                this.secondShow = false;
            },
            showHourList() {
                this.hourShow = true;
                this.minuteShow = false;
                this.secondShow = false;
            },
            showMinuteList() {
                this.hourShow = false;
                this.secondShow = false;
                this.minuteShow = true;
            },
            showSecondList() {
                this.hourShow = false;
                this.minuteShow = false;
                this.secondShow = true;
            },
            handleClick(type, item,index) {
                if(type=='hours'){
                    this.hourCopy=item;
                }else if(type=='minutes'){
                    this.minuteCopy=item;
                }else{
                    this.secondCopy=item;
                }
                const data = {};
                data[type] = item;
                this.$emit('on-change', data);
                this.$emit('on-pick-click');
            }
        },
        watch: {
            hour:function(val){
                this.hourCopy=this.formatTime(val);
            },
            minute(val){
                this.minuteCopy=this.formatTime(val);
            },
            second(val){
                this.secondCopy=this.formatTime(val);
            }
        },
        mounted() {

        }
    };

</script>
