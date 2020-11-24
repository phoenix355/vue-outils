/*
 * @Description:
 * @Autor: 钟文俊
 * @Date: 2020-10-29 10:25:49
 * @LastEditors: 钟文俊
 * @LastEditTime: 2020-11-24 17:34:12
 */
import removeNode from "./example/v-remoe-node";

const initDirectives: (Vue: any) => void = function(Vue: any) {
    Vue.directive("remove-node", removeNode);
};

export default initDirectives