<template>
    <div :class="[prefixCls+'-container',(inputError || (showInfoCopy && !model && required))?prefixCls+'-error':'']">
        <span :class="prefixCls+'-star'"
          v-if="required">*</span>
        <label v-if="labelText"
          :class="prefixCls+'-label'"><slot></slot></label>
        <i-input ref="input"
          :type="type"
          v-model="model"
          :size="size"
          :placeholder="placeholder"
          :disabled="disabled"
          :clearable="clearable"
          :readonly="readonly"
          :maxlength="maxlength"
          :icon="iconCopy"
          :rows="rows"
          :autosize="autosize"
          :number="number"
          :autofocus="autofocus"
          :autocomplete="autocomplete"
          :elementId="elementId"
          :spellcheck="spellcheck"
          @on-enter="onEnter"
          @on-click="onClick"
          @on-change="onChange"
          @on-focus="onFocus"
          @on-blur="onBlur"
          @on-keyup="onKeyup"
          @on-keydown="onKeydown"
          @on-keypress="onKeypress">
          <img v-if="img" :src="img" slot="append" @click="onClick"/>
        </i-input>
        <div v-if="(showInfoCopy && model) || (showInfoCopy && !model && required)" :class="prefixCls+'-info'">
            <Icon :type="(inputError || (!model && required))?'android-alert':'checkmark-circled'"></Icon>
            <span v-show="inputError && errorText">{{errorText}}</span>
            <span v-show="!model && required && emptyText">{{emptyText}}</span>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'ivu-input';
    export default {
        name: "GsInput",
        props: {
            validator:{
                type:Function
            },
            showInfo:{
                type:Boolean,
                default:false
            },
            emptyText:{
                type:String,
                default:'不能为空！'
            },
            errorText:{
                type:String,
                default:'验证失败！'
            },
            required: {
                type: Boolean,
                default: false
            },
            // label: {
            //     type: String
            // },
            type: {
                type: String,
                default: 'text',
                validator(val) {
                    return ['text', 'password', 'textarea', 'url', 'email', 'date'].indexOf(val) >= 0;
                }
            },
            value:[String, Number],
            size: {
                type: String,
                default: 'default',
                validator(val) {
                    return ['default', 'large', 'small'].indexOf(val) >= 0;
                }
            },
            placeholder: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            maxlength: {
                type: Number
            },
            rows: {
                type: Number,
                default: 2
            },
            icon: {
                type: String
            },
            img: {
                type: String
            },
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            number: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: String,
                default: 'off',
                validator(val) {
                    return val == 'on' || val == 'off';
                }
            },
            elementId: {
                type: String
            },
            spellcheck: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                labelText:false,
                showInfoCopy:false,
                inputError: false,
                model:this.value,
                iconCopy:this.img?'':this.icon,
                prefixCls: prefixCls
            }
        },
        watch:{
            value(val){
                this.model=val;
            }
        },
        /*computed:{
            model:{
                get(){
                    return this.value;
                },
                set(val){
                    if(val){
                        console.log(val);
                    }
                }
            }
        },*/
        mounted(){
            this.labelText=this.$slots.default!== undefined;
        },
        methods: {
            focus() {
                this.$refs.input.focus();
            },
            onEnter() {
                this.$emit('on-enter');
            },
            onClick() {
                this.$emit('on-click');
            },
            onFocus() {
                this.$emit('on-focus');
            },
            onChange(e) {
                this.$emit('on-change', e);
            },
            onBlur() {
                this.showInfoCopy=this.showInfo;
                if(this.validator){
                    this.inputError=this.validator(this.model);
                }
                this.$emit('on-blur');
            },
            onKeyup(e) {
                this.$emit('on-keyup', e);
            },
            onKeydown(e) {
                this.$emit('on-keydown', e);
            },
            onKeypress(e) {
                this.$emit('on-keypress', e);
            }
        }
    }

</script>
