/*
 * @Description: 统一导出组件
 * @Autor: 钟文俊
 * @Date: 2020-12-30 11:37:24
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-12-30 11:40:32
 */
import { VueConstructor } from "vue";

import Select from './select/index'

const components: Map<string, VueConstructor> = new Map()

components.set('vo-select', Select)

export default components