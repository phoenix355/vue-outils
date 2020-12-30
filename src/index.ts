/*
 * @Description: 插件统一入口
 * @Autor: 钟文俊
 * @Date: 2020-11-20 17:58:43
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-12-30 11:42:05
 */
import OurVue, { PluginObject } from 'vue'
import initDirectives from '@/directives'
import initComponents from '@/components'

class VueOutils implements PluginObject<any> {
    install(Vue: typeof OurVue) {
        initDirectives(Vue);
        initComponents.forEach((value, key) => {
            Vue.component(key, value)
        })
    }
}

const vueOutils = new VueOutils();

export default vueOutils;
