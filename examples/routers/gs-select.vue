<template>
    <div>
        <GsSelect :value="modal1"
          :optionList="cityList">城市列表：</GsSelect>
          <br/><br/>
        <GsSelect :value="model2"
          size="large"
          clearable
          :optionList="cityList"></GsSelect>
          <br/><br/>
        <GsSelect :value="model3"
          filterable
          multiple
          :optionList="cityList"></GsSelect>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                modal1: '',
                model2: '',
                model3: [],
                cityList: [{
                        value: 'beijing',
                        text: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '沪',
                        text: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        text: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        text: '杭州市',
                        disabled: true
                    },
                    {
                        value: 'nanjing',
                        text: '南京市'
                    },
                    {
                        value: 'chongqing',
                        text: '重庆市'
                    }
                ]
            }
        }

    }

</script>
