import{c as e,a as o,t as n,o as r,l as t,b as l}from"./vendor.862d3926.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const s={data:()=>({message:"Hello App"})};s.render=function(t,l,s,i,c,a){return r(),e("div",null,[o("h2",null,n(c.message),1)])},s.__scopeId="data-v-613813fa";console.log("Hello World"),console.log(20+30),console.log(function(e,o){return e*o}(20,30)),console.log(t.join(["abc","cba"],"-"));const i=document.createElement("div");i.className="title",i.innerHTML="Hello Vite",document.body.appendChild(i),l(s).mount("#app");
