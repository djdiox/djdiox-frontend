(function(t){function e(e){for(var o,r,A=e[0],c=e[1],s=e[2],l=0,p=[];l<A.length;l++)r=A[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var A=n[r];0!==a[A]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function A(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"76729a9e"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"d3b650d9"}[t]+".css",a=c.p+o,i=document.getElementsByTagName("link"),A=0;A<i.length;A++){var s=i[A],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return e()}var p=document.getElementsByTagName("style");for(A=0;A<p.length;A++){s=p[A],l=s.getAttribute("data-href");if(l===o||l===a)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],u.parentNode.removeChild(u),n(i)},u.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(u)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=A(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/djdiox-frontend/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"12e2":function(t,e,n){t.exports=n.p+"img/dioxdj.5338fda9.webp"},"18af":function(t,e,n){t.exports=n.p+"media/loop.e5dd2ebb.mp4"},4841:function(t,e){t.exports="data:image/webp;base64,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"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"full-page"},[o("main",[o("v-app-bar",{staticStyle:{"background-color":"rgb(35, 35, 35)","z-index":"1"},attrs:{collapse:!1,"collapse-on-scroll":!0,color:"deep-purple accent-4",dark:"","scroll-target":"#scrolling-techniques-6"}},[o("v-app-bar-nav-icon"),o("v-app-bar-icon",[o("img",{staticStyle:{height:"50px","margin-right":"10px"},attrs:{src:n("4841"),alt:"logo"}})]),o("v-toolbar-title",[t._v("djdiox Homepage")]),o("v-spacer"),o("v-btn",[t._v("Home")])],1),o("v-container",{staticStyle:{"z-index":"10"}},[o("router-view")],1)],1),o("footer",{staticStyle:{"padding-top":"150px"}},[o("v-bottom-navigation",{staticStyle:{bottom:"0"},attrs:{fixed:"",color:"white","hide-on-scroll":"",horizontal:"","scroll-target":"#scroll-threshold-example","scroll-threshold":"500"}},[o("v-btn",[o("router-link",{attrs:{to:"/home",custom:""}},[o("span",[t._v("Home")]),o("v-icon",[t._v("mdi-home")])],1)],1),o("v-btn",[o("router-link",{attrs:{to:"/about",custom:""}},[o("span",[t._v("About me")]),o("v-icon",[t._v("mdi-heart")])],1)],1),o("v-btn",[o("router-link",{attrs:{to:"/music",custom:""}},[o("span",[t._v("Music")]),o("v-icon",[t._v("mdi-music")])],1)],1),o("v-btn",[o("router-link",{attrs:{to:"/gigs",custom:""}},[o("span",[t._v("Gigs")]),o("v-icon",[t._v("mdi-map-marker")])],1)],1),o("v-btn",[o("router-link",{attrs:{to:"/crypto",custom:""}},[o("span",[t._v("Crypto")]),o("v-icon",[t._v("mdi-cash")])],1)],1)],1)],1),"music"==t.$route.name?o("video",{staticClass:"bg-vid",staticStyle:{position:"absolute",top:"0"},attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:n("18af"),type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")]):t._e()])},a=[],i={model:function(){return{collapseOnScroll:!1}}},A=i,c=(n("034f"),n("2877")),s=n("6544"),l=n.n(s),p=n("40dc"),u=n("5bc1"),d=n("b81c"),f=n("8336"),h=n("a523"),m=n("132d"),g=n("2fa4"),v=n("2a7f"),b=Object(c["a"])(A,r,a,!1,null,null,null),y=b.exports;l()(b,{VAppBar:p["a"],VAppBarNavIcon:u["a"],VBottomNavigation:d["a"],VBtn:f["a"],VContainer:h["a"],VIcon:m["a"],VSpacer:g["a"],VToolbarTitle:v["a"]});var x=n("f309");o["a"].use(x["a"]);var w=new x["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"}}),B=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home page"},[o("v-container",[o("v-row",[o("h1",{staticStyle:{color:"white"}},[t._v("Welcome to my page!")]),o("p",{staticStyle:{color:"white","margin-top":"5px","margin-left":"5px"}},[t._v("A very heartly welcome from Stuttgart, enjoy finest house & techno!")])]),o("v-container",{staticStyle:{"justify-content":"center","margin-top":"20px","margin-bottom":"50px"}},[o("v-row",[o("v-col",{staticStyle:{"padding-right":"0"}},[o("v-img",{staticStyle:{"object-fit":"contains"},attrs:{height:"400px",src:n("12e2")}})],1),o("v-col",{staticStyle:{padding:"10px 0"}},[o("v-img",{staticStyle:{"object-fit":"contains"},attrs:{height:"401px",src:n("5d84")}})],1),o("v-col",{staticStyle:{"padding-left":"0"}},[o("v-img",{staticStyle:{"object-fit":"contains"},attrs:{height:"600px",src:n("5f4c")}})],1)],1)],1)],1)],1)},S=[],k={name:"Home"},C=k,O=n("62ad"),V=n("adda"),D=n("0fd9"),P=Object(c["a"])(C,j,S,!1,null,null,null),R=P.exports;l()(P,{VCol:O["a"],VContainer:h["a"],VImg:V["a"],VRow:D["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("v-container",[n("h1",[t._v("Crypto - FinTech rules!")]),n("div",{staticStyle:{height:"560px","background-color":"#1d2330",overflow:"hidden","box-sizing":"border-box",border:"1px solid #282e3b","border-radius":"4px","text-align":"right","line-height":"14px","font-size":"12px","font-feature-settings":"normal","text-size-adjust":"100%","box-shadow":"inset 0 -20px 0 0 #262b38",padding:"0px",margin:"0px",width:"100%"}},[n("div",{staticStyle:{height:"540px",padding:"0px",margin:"0px",width:"100%"}},[n("iframe",{staticStyle:{border:"0",margin:"0",padding:"0","line-height":"14px"},attrs:{src:"https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=145&pref_coin_id=1505",width:"100%",height:"536px",scrolling:"auto",marginwidth:"0",marginheight:"0",frameborder:"0",border:"0"}})]),n("div",{staticStyle:{color:"#626b7f","line-height":"14px","font-weight":"400","font-size":"11px","box-sizing":"border-box",padding:"2px 6px",width:"100%","font-family":"Verdana, Tahoma, Arial, sans-serif"}},[n("a",{staticStyle:{"font-weight":"500",color:"#626b7f","text-decoration":"none","font-size":"11px"},attrs:{href:"https://coinlib.io",target:"_blank"}},[t._v(" Cryptocurrency Prices ")]),t._v("  by Coinlib ")])])])],1)},M=[],N={data:function(){}},z=N,F=Object(c["a"])(z,J,M,!1,null,null,null),Q=F.exports;l()(F,{VContainer:h["a"]}),o["a"].use(B["a"]);var W=[{path:"/",name:"home",component:R},{path:"/home",name:"home",component:R},{path:"/crypto",name:"crypto",component:Q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/gigs",name:"gigs",component:function(){return n.e("about").then(n.bind(null,"781a"))}},{path:"/music",name:"music",component:function(){return n.e("about").then(n.bind(null,"5125"))}}],E=new B["a"]({routes:W,mode:"history"}),G=E;o["a"].config.productionTip=!1,new o["a"]({vuetify:w,router:G,render:function(t){return t(y)}}).$mount("#app")},"5d84":function(t,e,n){t.exports=n.p+"img/producing.d04f1774.webp"},"5f4c":function(t,e,n){t.exports=n.p+"img/party.70b74ead.webp"},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.e5c6a68f.js.map