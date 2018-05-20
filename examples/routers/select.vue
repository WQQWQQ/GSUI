
<template>
    <Row>
        <Col span="8" style="padding-right:10px">
        <Select v-model="model11" size="large" >
            <Option :disabled="index==2" v-for="(item,index) in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="8" style="padding-right:10px">
        <Select v-model="model12" filterable multiple>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="8">
            <Select v-model="model1" style="width:200px" >
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
    </Row>

</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                model11: 'New York',
                model12: [],
                model13: 'New York'
            }
        }
    }
</script>

