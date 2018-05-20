<template>
    <div :class="prefixCls+'-container'">
        <label :class="prefixCls+'-label'"><slot></slot></label>
        <i-select ref="select"
          v-model="modal"
          :multiple="multiple"
          :disabled="disabled"
          :clearable="clearable"
          :filterable="filterable"
          :loading="loading"
          :remote="remote"
          :remoteMethod="remoteMethod"
          :loadingText="loadingText"
          :label="label"
          :size="size"
          :placeholder="placeholder"
          :notFoundText="notFoundText"
          :labelInValue="labelInValue"
          :placement="placement"
          :transfer="transfer"
          :elementId="elementId"
          @on-change="onChange"
          @on-query-change="onQueryChange">
            <i-option v-for="(item,index) in optionList"
              :value="item.value"
              :label="item.label"
              :disabled="item.disabled"
              :key="index">{{item.text}}</i-option>
        </i-select>
    </div>
</template>
<script>
    const prefixCls = 'ivu-select';
    export default {
        name: "GsSelect",
        props: {
            value: {
                type: [String, Number, Array]
            },
            optionList: {
                type: Array,
                default() {
                    return [];
                }
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            filterable: {
                type: Boolean,
                default: false
            },
            remote:{
                type: Boolean,
                default: false
            },
            remoteMethod: {
                type: Function
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String,
                default: '加载中'
            },
            label: {
                type: [String, Number, Array]
            },
            size: {
                type: String,
                default: 'default',
                validator(value) {
                    return ['small', 'large', 'default'].indexOf(value) >= 0;
                }
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            notFoundText: {
                type: String,
                default: '无匹配数据'
            },
            labelInValue: {
                type: Boolean,
                default: false
            },
            placement: {
                type: String,
                default: 'bottom',
                validator(val) {
                    return val == 'top' || val == 'bottom';
                }
            },
            transfer: {
                type: Boolean,
                default: false
            },
            elementId: {
                type: String
            }
        },
        data() {
            return {
                modal:this.value,
                prefixCls: prefixCls
            }
        },
        methods: {
            clearSingleSelect() {
                this.clearable && this.$refs.select.clearSingleSelect();
            },
            setQuery(query) {
                this.filterable && this.$refs.select.setQuery(query);
            },
            onChange(item) {
                this.$emit('on-change', item);
            },
            onQueryChange(query) {
                this.$emit('on-query-change', query);
            }
        }
    }

</script>
