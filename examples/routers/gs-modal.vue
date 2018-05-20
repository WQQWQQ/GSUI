<template>
    <div>
        <GsButton @click="instance('info')">info</GsButton>
        <GsButton @click="instance('warn')">warn</GsButton>
        <GsButton @click="instance('success')">success</GsButton>
        <GsButton @click="instance('error')">error</GsButton>
        <GsButton @click="instance('childComponent')">childComponent</GsButton>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columns1: [{
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [{
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            ok() {
                this.$GsModal.remove();
            },
            cancel() {
                this.$GsModal.remove();
            },
            instance(type) {

                const title = 'Title';
                const infoContent = '确定要取消关注么?';
                const warnContent = '设备不在线，操作失败！';
                const successContent = '操作成功';
                const errorContent = '请选择正确的格式！';

                // 插入子组件需要传递的内容
                const table = Vue.extend(this.$GsTable);
                const tableData = {
                    props: {
                        columns: this.columns1,
                        data: this.data1
                    }
                }

                switch(type) {
                    case 'info':
                        this.$GsModal.info({
                            title: title,
                            content: infoContent,
                            okCallBack: this.ok,
                            cancelText: '否',
                            okText: '是',
                            cancelCallBack: this.cancel
                        });
                        break;
                    case 'success':
                        this.$GsModal.success({
                            content: successContent,
                            okText: '确认'
                        });
                        break;
                    case 'warn':
                        this.$GsModal.warn({
                            content: warnContent
                        });
                        break;
                    case 'error':
                        this.$GsModal.error({
                            title: title,
                            content: errorContent
                        });
                        break;
                    case 'childComponent':
                        this.$GsModal.childComponent({
                            width: 　600,
                            okCallBack: this.ok,
                            childComponent: table,
                            childComponentData: tableData
                        })
                        break;
                }
            }
        }
    }

</script>
