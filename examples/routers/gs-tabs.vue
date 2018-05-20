<template>
    <div>
        <GsTabs :tabList="tabList1"
          closable @on-tab-remove="onTabRemove"></GsTabs>
        <Button type="primary" @click.native="addTab">添加tab</Button>
        <GsTabs :tabList="tabList2"></GsTabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabList1: [{
                    name: "1",
                    text: "案件研判"
                }, {
                    name: "2",
                    text: "案件串并"
                }, {
                    name: "3",
                    text: "案件检索"
                }, {
                    name: "4",
                    text: "统计分析"
                }],
                tabList2: [{
                    name: "1",
                    text: "案件研判"
                }, {
                    name: "2",
                    text: "案件串并"
                }, {
                    name: "3",
                    text: "案件检索"
                }, {
                    name: "4",
                    text: "统计分析"
                }]
            }
        },
        methods:{
            onTabRemove(item,index){
                this.tabList1.splice(index,1);
            },
            addTab(){
                this.tabList1.push({
                    name: new Date().getTime()+'',
                    text: "统计分析"
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    .ivu-tabs-container{
        margin: 20px 0;
    }
</style>
