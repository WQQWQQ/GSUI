<template>
    <div :class="[prefixCls+'-container',long?prefixCls+'-container-long':'']"
      @click="onClick">
        <i-button :type="type"
          :size="size"
          :icon="icon"
          :disabled="disabled"
          :loading="loading"
          :long="long"
          :html-type="htmlType"
          :shape="shape">
            <slot></slot>
        </i-button>
    </div>
</template>
<script>
    const prefixCls = 'ivu-btn';
    export default {
        name: 'GsButton',
        data() {
            return {
                prefixCls: prefixCls
            }
        },
        props: {
            type: {
                type: String,
                default: 'default',
                validator (value) {
                    return ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'].indexOf(value)>=0;
                }
            },
            size: {
                type: String,
                default: 'default',
                validator (value) {
                    return ['small', 'large', 'default'].indexOf(value)>=0;
                }
            },
            shape: {
                type: String,
                validator (value) {
                    return ['circle', 'circle-outline'].indexOf(value)>=0;
                }
            },
            icon: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            long: {
                type: Boolean,
                default: false
            },
            htmlType: {
                type: String,
                default: 'button',
                validator (value) {
                    return ['button', 'submit', 'reset'].indexOf(value)>=0;
                }
            }
        },
        methods: {
            onClick(e) {
                this.$emit('click', e);
            }
        }
    }

</script>
