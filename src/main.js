import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// import zhCn from "element-plus/lib/locale/lang/zh-cn";//国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const app = createApp(App);
app.use(ElementPlus, { locale: zhCn }).use(router).mount('#app');
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
//# sourceMappingURL=main.js.map