!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";r.r(t),t.default=["#5A75FF","#3CD9CE","#D9AC3C","#D92BCD","#4DD96D","#000000","#ffffff","#D94540"]},function(e,t,r){r(0),e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var o=r(0);(()=>{const e={color:"#000",width:2.5};let t=!1;(()=>{const e=document.querySelector(".wrapper__colors");o.default.map(t=>{const r=`<li class="wrapper__colors-item" style="background: ${t};"></li>`;e.innerHTML+=r})})();(()=>{const e=document.querySelector(".wrapper__canvas"),o=e.getContext("2d"),n=window.getComputedStyle(e).height.replace(/px/,""),c=window.getComputedStyle(e).width.replace(/px/,"");e.height=n,e.width=c,e.addEventListener("mousemove",e=>{const r=e.offsetX,n=e.offsetY;t?(o.lineTo(r,n),o.stroke()):(o.beginPath(),o.moveTo(r,n))}),e.addEventListener("mouseleave",()=>t=!1),e.addEventListener("mouseup",()=>t=!1),e.addEventListener("mousedown",()=>t=!0),r()})();(()=>{const t=document.querySelectorAll(".wrapper__colors-item");t.forEach((n,c)=>{n.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("active-color")),t[c].classList.add("active-color"),e.color=o.default[c],r()})})})();(()=>{const t=document.querySelector(".wrapper__weight-input");t.addEventListener("change",()=>{e.width=t.value,r()})})();(()=>{const e=document.querySelectorAll(".wrapper__colors-item"),t=document.querySelector(".wrapper__canvas"),r=t.getContext("2d"),n=document.querySelector('.wrapper__btns-item[data-btn="fill"]'),c=window.getComputedStyle(t).height.replace(/px/,""),l=window.getComputedStyle(t).width.replace(/px/,"");r.rect(0,0,l,c),r.fillStyle="#ffffff",r.fill(),n.addEventListener("click",()=>{e.forEach((t,n)=>{t.classList.contains("active-color")&&(e.forEach(e=>e.classList.remove("active-color")),e[n].classList.add("active-color"),r.rect(0,0,l,c),r.fillStyle=o.default[n],r.fill())})})})();function r(){const t=document.querySelector(".wrapper__canvas").getContext("2d");t.lineWidth=e.width,t.strokeStyle=e.color}(()=>{const e=document.querySelector('.wrapper__btns-item[data-btn="save"]'),t=document.querySelector(".wrapper__canvas");e.addEventListener("click",()=>{const e=document.createElement("a"),r=t.toDataURL("image/png");e.download="Paint app",e.href=r,e.click()})})()})()}]);