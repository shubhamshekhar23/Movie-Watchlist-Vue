if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const c=e=>i(e,n),l={module:{uri:n},exports:r,require:c};s[n]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(o(...e),r)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"media-watchlist"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Movie-Watchlist-Vue/css/app.4324b01a.css",revision:null},{url:"/Movie-Watchlist-Vue/css/chunk-vendors.6b049bec.css",revision:null},{url:"/Movie-Watchlist-Vue/index.html",revision:"8ee299ca744abc3feebd59bd18a76642"},{url:"/Movie-Watchlist-Vue/js/app.3e58ff87.js",revision:null},{url:"/Movie-Watchlist-Vue/js/chunk-vendors.1e495fd4.js",revision:null},{url:"/Movie-Watchlist-Vue/manifest.json",revision:"5aa08d026af18b36d6e7b03314ca4c2d"},{url:"/Movie-Watchlist-Vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
