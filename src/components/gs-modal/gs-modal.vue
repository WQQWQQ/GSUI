<template>
    <Modal v-model="visible" :width="width" @on-cancel="cancel">
        <p slot="header">
            <span>{{titleText}}</span>
        </p>
        <slot>
            <div :class="prefixCls+'-tip'">
                <img :src="imgMap[modal]"/>
                <p>{{content}}</p>
            </div>
        </slot>
        <div slot="footer" :class="prefixCls+'-btn'">
            <GsButton type="primary"  v-show="showOk" @click="ok">{{okText}}</GsButton>
            <GsButton v-show="cancelShow" @click="cancel">{{cancelText}}</GsButton>
        </div>
    </Modal>
</template>
<script>
    import imgInfoURL from '../../../assets/components/gs-modal/info.png';
    import imgWarnURL from '../../../assets/components/gs-modal/warn.png';
    import imgSuccessURL from '../../../assets/components/gs-modal/success.png';
    import imgErrorURL from '../../../assets/components/gs-modal/error.png';

    const prefixCls = 'ivu-modal';
    // 确认提示
    const info = 'info';
    // 错误提示
    const error = 'error';
    // 正确提示
    const success = 'success';
    // 警告提示
    const warn = 'warn';
    // 子组件展示
    const childComponent = 'childComponent';

    export default {
        name: 'GsModal',
        props: {
            showModal: {
                type: Boolean,
                default: false
            },
            modalType: {
                type: String,
                default: childComponent
            },
            title: {
                type: String
            },
            content: {
                type: String
            },
            okCallBack: {
                type: Function
            },
            cancelCallBack: {
              type: Function
            },
            width: {
              type: [Number, String],
              default: 300
            },
            okText: {
                type: String,
                default: '确定'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            showOk:{
              type: Boolean,
              default: true
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: this.showModal,
                modal: this.modalType,
                okCallBackCopy: this.okCallBack,
                cancelCallBackCopy: this.cancelCallBackCopy
            }
        },
        created () {
            this.titleMap = {
                info:'疑问提示',
                warn:'警告提示',
                success:'正确提示',
                error:'错误提示',
                childComponent:'操作类'
            };
            this.imgMap = {
                info:imgInfoURL,
                warn:imgWarnURL,
                success:imgSuccessURL,
                error:imgErrorURL
            };
        },
        computed: {
            titleText() {
                return this.title || this.titleMap[this.modal];
            },
            cancelShow() {
                // 使用默认的显示方式
              return this.modal == info || this.modal == childComponent;
            }
        },
        methods: {
            ok() {
                if( !this.okCallBackCopy || !this.okCallBackCopy()){
                    this.visible = false;
                    this.$emit('update:showModal', false);
                }
            },
            cancel() {
              if( !this.cancelCallBackCopy || !this.cancelCallBackCopy()) {
                this.visible = false;
                this.$emit('update:showModal', false);
              }
            },
            show() {
              this.visible = true;
            },
            hide() {
              this.visible = false;
            }
        },
        watch: {
          showModal (val){
            this.visible = val;
          },
          modalType (type){
            this.modal = type;
          },
          okCallBack (ok){
            this.okCallBackCopy = ok;
          },
          cancelCallBack (cancel){
            this.cancelCallBackCopy = cancel;
          }
        }
    }
</script>
