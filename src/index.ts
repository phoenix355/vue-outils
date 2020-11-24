/*
 * @Description: 插件统一入口
 * @Autor: 钟文俊
 * @Date: 2020-11-20 17:58:43
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-11-24 17:24:38
 */
import OurVue, {PluginObject} from 'vue'
import initDirectives from '@/directives'

class VueOutils implements PluginObject<any> {
    install(Vue: typeof OurVue) {
        initDirectives(Vue);
    }
}

const vueOutils = new VueOutils();

export default vueOutils;
