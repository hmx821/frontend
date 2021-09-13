//import 'css-loader!../css/style.css'
import '../css/style.css'
import '../css/title.less';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，胡明祥";

document.body.appendChild(divEl);