if(!self.define){let e,l={};const t=(t,s)=>(t=new URL(t+".js",s).href,l[t]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=l,document.head.appendChild(e)}else e=t,importScripts(t),l()})).then((()=>{let e=l[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let m={};const n=e=>t(e,i),r={module:{uri:i},exports:m,require:n};l[i]=Promise.all(s.map((e=>r[e]||n(e)))).then((e=>(a(...e),m)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/email_templates/afara_emTemplates/afara_build_01.html",revision:null},{url:"assets/email_templates/afara_emTemplates/afara_build_02.html",revision:null},{url:"assets/email_templates/afara_emTemplates/afara_events_build_01.html",revision:null},{url:"assets/email_templates/afara_emTemplates/afara_events_build_02.html",revision:null},{url:"assets/email_templates/afara_emTemplates/afara_events_build_03.html",revision:null},{url:"assets/email_templates/nflx_emTemplates/ntflx_build_custom_bridgerton_1.html",revision:null},{url:"assets/email_templates/nflx_emTemplates/ntflx_build_custom_bridgerton_2.html",revision:null},{url:"assets/email_templates/nflx_emTemplates/ntflx_build_custom_bridgerton_3.html",revision:null},{url:"assets/email_templates/nflx_emTemplates/ntflx_build_custom_tudum_1.html",revision:null},{url:"assets/email_templates/nflx_emTemplates/ntflx_build_custom_tudum_2.html",revision:null},{url:"assets/email_templates/stNg_emTemplates/stNg_nl_build_1.html",revision:null},{url:"assets/index-D3OZhS9O.html",revision:null},{url:"index.html",revision:"b67614e4f13111aaa9eacfa8c686dc6b"},{url:"registerSW.js",revision:"38013143dc2183340ede8bc1c5124507"},{url:"manifest.webmanifest",revision:"30873d6e5a987eb9cdee479e53cff860"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
