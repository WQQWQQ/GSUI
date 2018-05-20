<template>
    <div :class="[prefixCls + '-confirm']">
        <!-- <span :class="timeClasses" v-if="showTime" @click="handleToggleTime">
            <template v-if="isTime">{{ t('i.datepicker.selectDate') }}</template>
            <template v-else>{{ t('i.datepicker.selectTime') }}</template>
        </span> -->
        <!-- <div :class="[prefixCls + '-time-container']">

        </div> -->
        <GsButton type="primary" @click="handleSuccess">{{ t('i.datepicker.ok') }}</GsButton>
        <GsButton type="primary" @click="handleToday">{{ t('i.datepicker.today') }}</GsButton>
        <GsButton @click="handleClear">{{ t('i.datepicker.clear') }}</GsButton>
    </div>
</template>
<script>
    import GsButton from '../../gs-button/gs-button.vue';
    import Locale from '../../../mixins/locale';

    const prefixCls = 'ivu-picker';

    export default {
        mixins: [ Locale ],
        components: { GsButton },
        props: {
            showTime: false,
            isTime: false,
            timeDisabled: false
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            timeClasses () {
                return {
                    [`${prefixCls}-confirm-time-disabled`]: this.timeDisabled
                };
            }
        },
        methods: {
            handleClear () {
                this.$emit('on-pick-clear');
            },
            handleSuccess () {
                this.$emit('on-pick-success');
            },
            handleToday(){
                this.$emit('on-pick-today');
            },
            handleToggleTime () {
                if (this.timeDisabled) return;
                this.$emit('on-pick-toggle-time');
            }
        }
    };
</script>
