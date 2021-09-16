import { sum } from './js/math';
import { createApp } from 'vue';
const {priceFormat} = require('./js/format');
import App from './vue/App.vue';
import './js/element'
console.log(sum(20, 30));
console.log(priceFormat());
const app = createApp(App);
app.mount("#app");

