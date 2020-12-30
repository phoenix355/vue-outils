<!--
 * @Description: 
 * @Autor: 钟文俊
 * @Date: 2020-12-17 10:33:03
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-12-30 14:51:30
-->
<template>
    <div class="home">
       <vo-select
            :selectOptions="selectOptions" 
            @pullDownRefresh="pullDownRefresh" 
            @popupScroll="popupScroll"
            placeholder="请选择"
            :selectStyle="{width: '200px'}"
            @change="change"
            v-model="select"
       ></vo-select>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit }  from 'vue-property-decorator'

@Component({})

export default class Select extends Vue {
    selectOptions = [{label: '测试', value: 1},{label: '测试', value: 12},{label: '测试', value: 134},{label: '测试', value: 4341},{label: '测试', value: 43441},{label: '测试', value: 414},{label: '测试', value: 231},{label: '测试', value: 321},{label: '测试', value: 3441}];
    
    popupScroll(e: any) {
        console.log(e)
    }
    select: any = 12
    pullDownRefresh(e: any) {
        console.log(e)
    }
    change(val: any) {
        console.log(val)
    }
}
</script>
