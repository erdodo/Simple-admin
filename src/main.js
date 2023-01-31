import { createApp } from "vue";
import Page from "./Page.vue";
import router from "./router";
import store from "./store";

import services from "./services";
import bildir from "./components/bildir.js";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import tr from "element-plus/dist/locale/tr.mjs";

import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

const app = createApp(Page);

app.config.globalProperties.services = services;
app.config.globalProperties.bildir = bildir;
app.config.globalProperties.g = store;

app.use(store);
app.use(router);

app.use(ElementPlus, {
  locale: tr,
});
app.use(FloatingVue);

app.mount("#app");
