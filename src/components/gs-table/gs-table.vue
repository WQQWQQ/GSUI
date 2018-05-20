<template>
    <div :class="prefixCls+'-container'">
        <p :class="prefixCls+'-caption'"
          v-if="caption">{{caption}}</p>
        <i-table ref="table"
          :columns="columnsCopy"
          :data="data"
          :stripe="stripe"
          :border="border"
          :showHeader="showHeader"
          :highlightRow="highlightRow"
          :rowClassName="rowClassName"
          :size="size"
          :loading="loading"
          :disabledHover="disabledHover"
          :width="width"
          :height="height"
          :noDataText="noDataText"
          :noFilteredDataText="noFilteredDataText"
          @on-current-change="onCurrentChange"
          @on-select="onSelect"
          @on-select-cancel="onSelectCancel"
          @on-select-all="onSelectAll"
          @on-selection-change="onSelectionChange"
          @on-sort-change="onSortChange"
          @on-filter-change="onFilterChange"
          @on-row-click="onRowClick"
          @on-row-dblclick="onRowDblclick"
          @on-expand="onExpand"></i-table>
    </div>
</template>
<script>
    const prefixCls = 'ivu-table';
    export default {
        name: 'GsTable',
        props: {
            columns: {
                type: Array,
                default() {
                    return [];
                }
            },
            data: {
                type: Array,
                default() {
                    return [];
                }
            },
            caption: {
                type: String,
                default: ''
            },
            stripe: {
                type: Boolean,
                default: true
            },
            border: {
                type: Boolean,
                default: true
            },
            showHeader: {
                type: Boolean,
                default: true
            },
            highlightRow: {
                type: Boolean,
                default: true
            },
            rowClassName: {
                type: Function,
                default() {
                    return '';
                }
            },
            size: {
                type: String,
                default: 'default'
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabledHover: {
                type: Boolean,
                default: false
            },
            width: {
                type: [Number, String]
            },
            height: {
                type: [Number, String]
            },
            noDataText: {
                type: String
            },
            noFilteredDataText: {
                type: String
            }
        },
        computed: {
            columnsCopy:function() {
                for(let i = 0, len = this.columns.length; i < len; i++) {
                    this.columns[i].align = 'center';
                }
                return this.columns;
            }
        },
        data() {
            return {
                prefixCls: prefixCls
            }
        },
        methods: {
            exportCsv(params) {
                this.$refs.table.exportCsv(params);
            },
            onCurrentChange(currentRow, oldCurrentRow) {
                this.$emit('on-current-change', currentRow, oldCurrentRow);
            },
            onSelect(selection, row) {
                this.$emit('on-select', selection, row);
            },
            onSelectCancel(selection, row) {
                this.$emit('on-select-cancel', selection, row);
            },
            onSelectAll(selection) {
                this.$emit('on-select-all', selection);
            },
            onSelectionChange(selection) {
                this.$emit('on-selection-change', selection);
            },
            onSortChange(column, key, order) {
                this.$emit('on-sort-change', column, key, order);
            },
            onFilterChange(column) {
                this.$emit('on-filter-change', column);
            },
            onRowClick(row, index) {
                this.$emit('on-row-click', row, index);
            },
            onRowDblclick(row, index) {
                this.$emit('on-row-dblclick', row, index);
            },
            onExpand(row, status) {
                this.$emit('on-expand', row, status);
            }
        }
    }

</script>