<template>
    <div>
        <GsCheckbox @on-change="onChange" :value="value1">开启服务：</GsCheckbox>
        <p>{{value1}}</p>
        <GsCheckbox v-model="value3"
          :trueValue="1" :falseValue="0" text="选项"></GsCheckbox>
        <p>{{value3}}</p>
        <GsCheckbox type="group"
          :list="list"
          v-model="value2"></GsCheckbox>
        <p>{{value2}}</p>
    </div>
</template>
<script>
    import imgUrl from '../../assets/components/gs-menu/tool.png';
    export default {
        data() {
            return {
                value1: false,
                value3:1,
                list: [{
                    text: '选项1',
                    label: 'option1',
                    icon: imgUrl
                }, {
                    text: '选项2',
                    label: 'option2',
                    disabled: true
                }, {
                    text: '选项3',
                    label: 'option3'
                }],
                value2: []
            }
        },
        methods: {
            onChange(val){
                alert('当前值：'+val);
                this.value1=val;
            }
        }
    }

</script>
