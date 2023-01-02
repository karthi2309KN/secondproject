import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from '../../../Documents/secondproject/src/components/BaseBadge.vue';
import BaseCard from "@/components/BaseCard";
const app = createApp(App);


app.component('base-badge', BaseBadge);
app.component('base-card',BaseCard)

app.mount('#app');
