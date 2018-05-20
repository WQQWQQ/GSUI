<template>
     <div>
       <GsInput required show-info :value="value">姓名：</GsInput>
       <GsInput show-info :img="img" @on-click="onClick">住址：</GsInput>
       <GsInput clearable show-info></GsInput>
     </div>
</template>

<script>
    import img from '../../assets/components/gs-menu/tool.png';
    export default {
       data () {
         return {
            img:img,
            value:'wqq'
         }
       },
       methods:{
        onClick(){
          alert('点击输入框图标回调');
        }
       }
    }
</script>
