import Vue from 'vue';
import GsModal from './gs-modal.vue';

// 默认宽度300
const width = 300;

GsModal.newInstance = properties => {
    const _props = properties || {};
    const Instance = new Vue({
        data: Object.assign({}, _props, {
            width: width,
            visible: false,
            modal: undefined,
            showOk: true,
            okText: undefined,
            cancelText: undefined,
            title: undefined,
            content: undefined,
            okCallBack: undefined,
            cancelCallBack: undefined,
            childComponent: undefined, // 子组件
            childComponentData: {} // 存储子组件需要传递的数据
        }),

        render(h) {
            return h(GsModal, {
                props: Object.assign({}, _props, {
                    modalType: this.modal,
                    content: this.content,
                    title: this.title,
                    okCallBack: this.okCallBack,
                    cancelCallBack: this.cancelCallBack,
                    showOk: this.showOk,
                    okText: this.okText,
                    width: this.width,
                    cancelText: this.cancelText
                }),
                on: {
                    input: (status) => {
                        this.visible = status;
                    }
                }
            }, [
                h(this.childComponent, {
                    props: this.childComponentData.props,
                    attrs: this.childComponentData.attrs,
                    on: this.childComponentData.on,
                    domProps: this.childComponentData.domProps
                })
            ]);
        },
        methods: {
            remove() {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onRemove() {}
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const gsModal = Instance.$children[0];
    return {
        show(props) {

            gsModal.$parent.modal = props.modalType;

            if('title' in props) {
                gsModal.$parent.title = props.title;
            }

            if('content' in props) {
                gsModal.$parent.content = props.content;
            }

            if('width' in props) {
                gsModal.$parent.width = props.width;
            }

            if('okText' in props) {
                gsModal.$parent.okText = props.okText;
            }

            if('cancelText' in props) {
                gsModal.$parent.cancelText = props.cancelText;
            }

            if('okCallBack' in props) {
                gsModal.$parent.okCallBack = props.okCallBack;
            }

            if('cancelCallBack' in props) {
                gsModal.$parent.cancelCallBack = props.cancelCallBack;
            }

            if('showOk' in props) {
                gsModal.$parent.showOk = props.showOk;
            }

            // 组件
            if('childComponent' in props) {
                gsModal.$parent.childComponent = props.childComponent;
            }

            // 组件数据
            if('childComponentData' in props) {
                gsModal.$parent.childComponentData = props.childComponentData;
            }

            // notice when component destroy
            gsModal.$parent.onRemove = props.onRemove;

            gsModal.visible = true;
        },
        remove() {
            gsModal.visible = false;
            gsModal.$parent.remove();
        },

        component: gsModal
    };
};

export default GsModal;
