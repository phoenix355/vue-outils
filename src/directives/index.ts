/*
 * @Description:
 * @Autor: 钟文俊
 * @Date: 2020-10-29 10:25:49
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-12-29 17:54:43
 */
import VRemoveNode from './explame/v-remoe-node';
import VSelectLoad from './explame/v-select-load'

const initDirectives: (Vue: any) => void = function(Vue: any) {
    Vue.directive("remove-node", VRemoveNode);
    Vue.directive("select-load", VSelectLoad);
};

export default initDirectives