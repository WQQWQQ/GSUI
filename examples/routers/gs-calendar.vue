<template>
    <div>
        <div>
            <GsCalendar type="datetime"
              :value="value1"
              @on-open-change="onOpenChange"
              @on-change="onChange"
              @on-ok="onOK"
              @on-clear="onClear"
              @on-today="onToday">选日期时间：</GsCalendar>
            <span>当前值(监听on-change事件得到格式化后的日期字符串)：{{value1}}</span>
            <span>；显示状态：{{isShow}}</span>
        </div>
        <div>
            <GsCalendar type="date"
              v-model="value2"
              clearable>选日期：</GsCalendar>
            <span>当前值(若绑定v-model时为date类型而不是字符串)：{{value2}}</span>
        </div>
        <div>
            <GsCalendar type="year"
              :value="value3">选年份：</GsCalendar>
        </div>
        <div>
            <GsCalendar type="month"
              :value="value4">选月份：</GsCalendar>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: '',
                value2: new Date(),
                value3: '2014',
                value4: '',
                isShow: false
            }
        },
        methods: {
            onChange(formatedDate) {
                this.value1 = formatedDate;
            },
            onOpenChange(isShow) {
                this.isShow = isShow;
            },
            onOK() {
                alert('点击确定后回调');
            },
            onClear() {
                alert('点击清除后回调');
            },
            onToday() {
                alert('点击今天后回调');
            }

        }
    }

</script>
