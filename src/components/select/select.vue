<!--
 * @Description: select 组件
 * @Autor: 钟文俊
 * @Date: 2020-12-17 10:33:03
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-12-30 14:51:06
-->
<template>
    <div class="home">
        <a-select 
            :style="selectStyle" 
            @popupScroll="popupScroll" 
            v-bind="$attrs"
            v-on="$listeners"
        >
            <a-select-option 
                v-for="option in selectData" 
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </a-select-option>
        </a-select>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop }  from 'vue-property-decorator'

@Component({})

export default class Select extends Vue {
    @Prop({ default: [] })
    selectOptions?: Array<any>; 

    @Prop()
    selectStyle?: any

    get selectData() {
        return this.selectOptions
    }

    // 下滑到底
    popupScroll(selectDom: any) {
        this.$emit('popupScroll', selectDom)
        const scrollTop = selectDom.target.scrollTop
        const scrollHeight = selectDom.target.scrollHeight
        const clientHeight = selectDom.target.clientHeight
        if(scrollHeight - scrollTop <= clientHeight) {
            this.$emit('pullDownRefresh')
        }
    }
}
</script>
