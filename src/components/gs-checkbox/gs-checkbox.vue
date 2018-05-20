<template>
    <div :class="[prefixCls+'-container']">
        <label :class="prefixCls+'-label'"><slot></slot></label>
        <Checkbox v-if="type=='single'"
          @on-change="onChange"
          v-model="model"
          :disabled="disabled"
          :indeterminate="indeterminate"
          :size="size"
          :trueValue="trueValue"
          :falseValue="falseValue">
            <img v-if="icon" :class="prefixCls+'-icon'" :src="icon"/><span :class="prefixCls+'-item-label'">{{text}}</span>
        </Checkbox>
        <CheckboxGroup v-if="type=='group'"
          :size="size"
          @on-change="onChange"
          v-model="model">
            <Checkbox v-for="(item,index) in list" :key="index" :label="item.label"
          :disabled="item.disabled"
          :indeterminate="item.indeterminate"
          :size="item.size"
          :trueValue="item.trueValue"
          :falseValue="item.falseValue"><img v-if="item.icon" :class="prefixCls+'-icon'" :src="item.icon"/><span :class="prefixCls+'-item-label'">{{item.text}}</span></Checkbox>
        </CheckboxGroup>
    </div>
</template>
<script>
    const prefixCls = 'ivu-checkbox';
    export default {
        name: "GsCheckbox",
        model:{
            prop:'value',
            event:'on-change'
        },
        props: {
            text:{
                type:String
            },
            icon:{
                type:String
            },
            type: {
                type: String,
                default: 'single',
                validator(val) {
                    return val === 'group' || val === 'single';
                }
            },
            list:{
                type:Array,
                default(){
                    return [];
                }
            },
            value: {
                type: [Boolean, Array,Number,String],
                default:false
            },
            label: {
                type: [String, Number, Boolean]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'default',
                validator(val) {
                    return ['large', 'small', 'default'].indexOf(val) >= 0;
                }
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            }
        },
        data() {
            return {
                model:this.value,
                prefixCls: prefixCls
            }
        },
        methods: {
            onChange(val) {
                this.$emit('on-change', val);
            }
        }
    }

</script>
