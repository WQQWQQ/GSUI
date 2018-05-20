<template>
    <GsPage @on-page-size-change="onPageSizeChange" @on-change="onPageChange" :page-size="pageSize" :total="total" :current="current"></GsPage>
</template>
<script>
    export default {
        data() {
            return {
                total: 1001,
                pageSize: 10,
                current:6
            }
        },
        methods:{
            onPageChange(page){
                alert(`当前页：${page}`);
            },
            onPageSizeChange(pagesize){
                alert(`当前每页显示：${pagesize}条`);
            }
        }
    }

</script>
