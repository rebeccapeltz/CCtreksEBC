(function(e){function t(t){for(var a,i,l=t[0],c=t[1],u=t[2],p=0,f=[];p<l.length;p++)i=l[p],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"11c6":function(e,t,n){},"49fb":function(e,t,n){e.exports=n.p+"assets/img/EBCGroup.1ddb9bf2.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Namaste!"}}),n("Blog"),n("Gallery")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("img",{attrs:{src:n("49fb"),width:"640",height:"480"}}),a("h1",[e._v(e._s(e.msg))]),e._m(0)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("In April 2018, I was part of the inaugural Climb2Cure team to go to Everest Base Camp (EBC) in the Nepalese Himalayas. It was an amazing experience and definitely one of the hardest things I've ever done. But the experience was truly a once in a lifetime experience and it definitely took my breath away in more ways than one."),n("br"),e._v("I'm the one in the orange jacket doing my best jazz hands impression. Yeah I don't know what I was thinking either ... blame the lack of oxygen :-) ")])}],c={name:"HelloWorld",props:{msg:String}},u=c,s=(n("8142"),n("2877")),p=Object(s["a"])(u,i,l,!1,null,"1bb307f4",null),f=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog"},[n("h3",[e._v("My Journey")]),n("ul",e._l(e.blogs,function(t){return n("li",[e._v(e._s(t))])}),0)])},h=[],y={name:"Blog",data:function(){return{blogs:["| Day 1: Sleeping in airports |","| Day 2: Flying across the International Date Line |","| Days 3 & 4: Namaste, Kathmandu |","| Day 4: Gotta go down before you go up |","| Day 5: The long slog up |","| Day 6: We rest & find our breath |","| Day 7: Have Diamox, will trek |","| Day 8: Himalayan sunsets |","| Day 9: Of course it's snowing |","| Day 10: EBC!!! |","| Day 11: The first long day down |","| Day 10: Are we there yet? |","| Day 11: What goes down, must go up |","| Day 12: Waiting in airports |","| Day 13: Spa day & cultural night |","| Day 14: Happy birthday to me |","| Day 15: Welcome to the USA |"]}}},m=y,g=(n("a442"),Object(s["a"])(m,d,h,!1,null,"2fe0e0b1",null)),b=g.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gallery"},[n("h3",[e._v("Photos of my trek")]),n("ul",e._l(e.pictures,function(t){return n("li",[e._v(e._s(t))])}),0)])},_=[],w={name:"Gallery",data:function(){return{pictures:["| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |"]}}},D=w,x=(n("5703"),Object(s["a"])(D,v,_,!1,null,"3a597466",null)),j=x.exports,O={name:"app",components:{HelloWorld:f,Blog:b,Gallery:j}},k=O,B=(n("034f"),Object(s["a"])(k,r,o,!1,null,null,null)),C=B.exports,E=n("5f5b"),S=(n("f9e3"),n("2dd8"),n("8c4f"));a["default"].use(S["a"]);new S["a"]({routes:[{path:"/",name:"HelloWorld",component:f},{path:"/",name:"Blog",component:b},{path:"/",name:"Gallery",component:j}]});a["default"].config.productionTip=!1,a["default"].use(E["a"]),new a["default"]({render:function(e){return e(C)}}).$mount("#app")},5703:function(e,t,n){"use strict";var a=n("c0ca"),r=n.n(a);r.a},"64a9":function(e,t,n){},8142:function(e,t,n){"use strict";var a=n("11c6"),r=n.n(a);r.a},a442:function(e,t,n){"use strict";var a=n("c72b"),r=n.n(a);r.a},c0ca:function(e,t,n){},c72b:function(e,t,n){}});
//# sourceMappingURL=app.1396f4e5.js.map