/*
 * @Description: 删除节点指令
 * @Autor: 钟文俊
 * @Date: 2020-10-29 10:25:08
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-11-20 18:04:24
 */

import { DirectiveBinding } from "vue/types/options";

export default {
  inserted(el: HTMLElement, binding: DirectiveBinding): void {
    const parentNode: any = el.parentNode;
    if (
      binding.value !== undefined &&
      binding.value !== null &&
      binding.value &&
      parentNode
    ) {
      parentNode.removeChild(el);
    }
  },
};

