
## 说明

`vue-outils` 致力于提供给程序员愉悦的开发体验。

> 在这开始之前，你需要熟悉Vue，有基于Vue开发的相关项目经验。`vue-outils` 是基于Vue的工具组件库，为Vue构建的快速开发的项目提供敏捷开发的工具组件。

## 使用 vue-cli@3

**1、安装脚手架**

``` js
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```
**2、创建一个项目**

使用命令行进行初始化。
```js
$ vue create vue-outils-demo
```
**引入**

```js
import Vue from 'vue';
import VueOutils from 'vue-outils';
import App from './App';
Vue.config.productionTip = false;

Vue.use(VueOutils);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```