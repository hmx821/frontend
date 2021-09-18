import { sum } from './js/math';
import { createApp } from 'vue';
const {priceFormat} = require('./js/format');
import App from './vue/App.vue';
import './js/element'
import axios from 'axios'

if (module.hot) {
	module.hot.accept("./js/element.js", () => {
		console.log("element模块发生更新了")
	})
}
console.log(sum(20, 30));
console.log(priceFormat());
const app = createApp(App);
app.mount("#app");
console.log(123);

axios.get("/api/moment").then(res => {
	console.log(res);
}).catch(err => {
	console.log(err);
})

