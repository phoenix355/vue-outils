/*
 * @Description: a-select下拉刷新监听指令
 * @Autor: 钟文俊
 * @Date: 2020-12-23 10:59:51
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-12-30 10:30:32
 */

import { DirectiveBinding } from "vue/types/options";

export default {
    bind(el: any, binding: DirectiveBinding): void {
    const selectDom = el.querySelector('.ant-select-selection')
    console.log(el, selectDom) 
    selectDom?.addEventListener('scroll', function() {
        const scrollTop = selectDom.scrollTop
        const scrollHeight = selectDom.scrollHeight
        const clientHeight = selectDom.clientHeight
        if(scrollHeight - scrollTop <= clientHeight) {
            binding.value()
        }
    })
  },
};

