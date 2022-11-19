import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import api from "@/http/index"
import * as ELIcons from '@element-plus/icons-vue'
import * as echarts from "echarts";
const app = createApp(App)
for (const iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
}
app.use(ElementPlus).use(api).use(router).use(echarts).mount('#app')
