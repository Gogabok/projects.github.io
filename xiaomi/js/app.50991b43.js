(function(t){function e(e){for(var i,l,o=e[0],c=e[1],r=e[2],m=0,v=[];m<o.length;m++)l=o[m],n[l]&&v.push(n[l][0]),n[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,r||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},s=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row row-tab"},[a("p",{staticClass:"head-caption cap-2 head-text"},[t._v("Длина/Ширина. Высота 30 мм")]),a("div",{staticClass:"table col-lg-7 col-md-12 col-sm-12 col-12 p-0"},[a("div",{staticClass:"head"},[t._m(0),a("div",{staticClass:"head-sec col-lg-8 col-md-9 col-sm-8 col-10 p-0"},[t._m(1),a("div",{staticClass:"table-v col-lg-12 col-md-12 col-sm-12 col-12 p-0"},t._l(t.items,function(e,i){return"main"===e.block?a("p",{staticClass:"table-v-item col-lg-2 col-md-2 col-sm-2 col-2 p-0",style:!!e.isActive&&"color: #47AFE6",on:{click:function(a){return t.addCart(e)}}},[t._v("\n                "+t._s(e.value)+"\n              ")]):t._e()}),0)])])]),a("div",{staticClass:"color-table col-lg-4 col-md-12 col-12 p-0"},[a("div",[a("div",{staticClass:"head-list head-list-mb col-lg-12 col-md-12 p-0"},[a("p",{staticClass:"head-list-text"},[t._v("Краска")]),t._l(t.items,function(e){return"color"===e.block?a("p",{staticClass:"head-list-text-2 ml pointer",style:!!e.isActive&&"textDecoration: underline",on:{click:function(a){return t.addCart(e)}}},[t._v(t._s(e.title))]):t._e()})],2),t._l(t.items,function(e,i){return"gadjets"===e.block?a("div",{staticClass:"head-list pointer head-list-mt col-lg-12 p-0",on:{click:function(a){return t.addCart(e)}}},[a("p",{staticClass:"head-list-text-2 head-list-text-2-extra head-list-text-hover",style:!!e.isActive&&"color: #47AFE6"},[t._v(t._s(e.name))]),a("p",{staticClass:"head-list-text-2 mm ml"},[t._v(t._s(e.value))])]):t._e()}),a("div",{staticClass:"head-list col-lg-12 p-0"},[a("p",{staticClass:"head-list-text-2"},[t._v("Стоимость: "+t._s(t.amount)+" руб")])]),a("div",{staticClass:"jusflex"},[t._m(2),a("div",{staticClass:"head-list p-0"},[a("p",{staticClass:"head-list-oplata head-list-oplata-2"},[t._v("Товаров: "+t._s(t.count))])])]),a("transition",{attrs:{name:"fade"}},[t.count>0?a("div",{staticClass:"head-list-table col-lg-9"},[t._l(t.inCart,function(e,i){return e.numb>0?a("div",{key:i,staticClass:"item"},[a("p",{staticClass:"table-text-black mr-auto"},[t._v(t._s(e.name))]),"color"!==e.block?a("p",{staticClass:"table-price"},[t._v(t._s(e.value))]):t._e(),"color"!==e.block?a("p",{staticClass:"table-price-x"},[t._v("x")]):t._e(),"color"!==e.block?a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.numb,expression:"item.numb",arg:"value"}],staticClass:"input-price",attrs:{maxlength:"2",type:"number"},domProps:{value:e.numb},on:{input:[function(a){a.target.composing||t.$set(e,"numb",a.target.value)},function(a){return t.proverka(a.target,e)}]}}):t._e(),a("img",{staticClass:"pointer",attrs:{src:"assets/cancel-music.png",alt:""},on:{click:function(a){return a.preventDefault(),t.remove(e)}}})]):t._e()}),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.Submit(e)}}},[t._v("Заказать "+t._s(t.amount)+" руб")])],2):t._e()])],2)])])]),a("transition",{attrs:{name:"fade"}},[t.isSubmitted?a("div",{attrs:{id:"zatemnenie"}},[a("div",{staticClass:"modale col-lg-4 col-md-6 col-sm-8 col-10"},[a("img",{staticClass:"pointer",attrs:{src:"assets/cancel-music.png",alt:""},on:{click:function(e){return e.preventDefault(),t.Submit(e)}}}),a("form",{attrs:{method:"post",action:"send.php"},on:{submit:t.send}},[t._l(t.form,function(e){return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput"}},[t._v(t._s(e.title))]),a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.value,expression:"item.value",arg:"value"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",name:e.name,placeholder:e.ph},domProps:{value:e.value},on:{input:[function(a){a.target.composing||t.$set(e,"value",a.target.value)},function(t){e.isActive=!0}]}})])}),a("input",{directives:[{name:"model",rawName:"v-model:value",value:t.valueArr,expression:"valueArr",arg:"value"}],staticClass:"form-control",attrs:{type:"hidden",id:"formGroupExampleInput",name:"value"},domProps:{value:t.valueArr},on:{input:function(e){e.target.composing||(t.valueArr=e.target.value)}}}),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isFull,type:"submit"}},[t._v("Оставить заявку")])],2)])]):t._e()])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-sec head-sec-1 col-lg-4 col-md-3 col-sm-4 col-2 p-0"},[a("p",{staticClass:"head-caption cap-1 head-text"},[t._v("Длина/Ширина"),a("br"),t._v("Высота 30 мм")]),a("p",{staticClass:"head-text"},[t._v("600")]),a("p",{staticClass:"head-text"},[t._v("700")]),a("p",{staticClass:"head-text"},[t._v("800")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-sec-2"},[a("p",{staticClass:"head-text-2 col-lg-2 col-md-2 col-sm-2 col-2 p-0"},[t._v("1200")]),a("p",{staticClass:"head-text-2 col-lg-2 col-md-2 col-sm-2 col-2 p-0"},[t._v("1400")]),a("p",{staticClass:"head-text-2 col-lg-2 col-md-2 col-sm-2 col-2 p-0"},[t._v("1600")]),a("p",{staticClass:"head-text-2 col-lg-2 col-md-2 col-sm-2 col-2 p-0"},[t._v("1800")]),a("p",{staticClass:"head-text-2 col-lg-2 col-md-2 col-sm-2 col-2 p-0"},[t._v("2000")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-list p-0"},[a("p",{staticClass:"head-list-oplata"},[t._v("Оплата при получении")])])}],l=(a("8e6e"),a("ac6a"),a("456d"),a("6b54"),a("7f7f"),a("a481"),a("bd86")),o=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(l["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={name:"app",data:function(){return{isSubmitted:!1,valueArr:[],form:[{title:"Имя",name:"name",ph:"Введите ваше имя",value:"",isActive:!1},{title:"Телефон",name:"phone",ph:"Введите ваш телефон",value:"",isActive:!1},{title:"Адрес",name:"adress",ph:"Введите ваш адрес",value:"",isActive:!1}]}},computed:r({},Object(o["b"])({items:"items",count:"count",inCart:"inCart",amount:"amount"}),{isFull:function(){for(var t=0,e=0;e<this.form.length;e++)this.form[e].isActive&&t++;if(t>2){var a=!1;return a}var i=!0;return i}}),components:{},methods:{proverka:function(t,e){var a=t.value.replace(/[^\d,]/g,""),i=a.indexOf(",");-1!=i&&a.length-i>2&&(a=a.slice(0,-1)),t.value=a,this.$store.commit("updating",e)},addCart:function(t){this.$store.dispatch("addCart",t)},remove:function(t){this.$store.dispatch("remove",t)},Submit:function(){this.isSubmitted=!this.isSubmitted},send:function(){for(var t=[],e=0;e<this.form.length;e++)t.push(" | "+this.form[e].title+": "+this.form[e].value+" | ");t.push("/Стоимость: "+this.amount+" /");for(var a=0;a<this.inCart.length;a++){var i="| Товар: "+this.inCart[a].name+" Количество: "+this.inCart[a].numb+" | ";i.toString(16),t.push(i)}this.valueArr=t}}},m=u,v=a("2877"),p=Object(v["a"])(m,n,s,!1,null,null,null),d=p.exports;i["a"].use(o["a"]);var f=new o["a"].Store({state:{items:[{value:23e3,isActive:!1,name:"1200x600x30",block:"main",numb:1},{value:23750,isActive:!1,name:"1400x600x30",block:"main",numb:1},{value:24500,isActive:!1,name:"1600x600x30",block:"main",numb:1},{value:25250,isActive:!1,name:"1700x600x30",block:"main",numb:1},{value:26e3,isActive:!1,name:"2000x600x30",block:"main",numb:1},{value:24e3,isActive:!1,name:"1200x700x30",block:"main",numb:1},{value:24750,isActive:!1,name:"1400x700x30",block:"main",numb:1},{value:25500,isActive:!1,name:"1600x700x30",block:"main",numb:1},{value:26250,isActive:!1,name:"1800x700x30",block:"main",numb:1},{value:27e3,isActive:!1,name:"2000x700x30",block:"main",numb:1},{value:25e3,isActive:!1,name:"1200x800x30",block:"main",numb:1},{value:25750,isActive:!1,name:"1400x800x30",block:"main",numb:1},{value:26500,isActive:!1,name:"1600x800x30",block:"main",numb:1},{value:27250,isActive:!1,name:"1800x800x30",block:"main",numb:1},{value:28e3,isActive:!1,name:"2000x800x30",block:"main",numb:1},{name:"Беспроводная зарядка",value:1500,isActive:!1,block:"gadjets",numb:1},{name:"Xiaomi mi power strip",value:1200,isActive:!1,block:"gadjets",numb:1},{title:"Черная",name:"Черная краска",value:0,isActive:!1,block:"color",numb:1},{title:"Хром",name:"Хром-краска",value:0,isActive:!1,block:"color",numb:1}],count:0,inCart:[],amount:0,isPicked:!1},getters:{items:function(t){return t.items},count:function(t){return t.count},inCart:function(t){return t.inCart},amount:function(t){return t.amount},color:function(t){return t.color},isPicked:function(t){return t.isPicked}},mutations:{addCart:function(t,e){e.numb<1&&(e.numb=1),e.isActive=!e.isActive},updating:function(t,e){var a=0,i=[],n=0;e.numb<1&&(e.isActive=!1);for(var s=0;s<t.items.length;s++){var l=0;t.items[s].isActive?(a++,i.push(t.items[s]),l=parseInt(t.items[s].value*e.numb),n+=l):i.splice(s,1)}t.amount=n,t.inCart=i,t.count=a},remove:function(t,e){e.isActive=!e.isActive}},actions:{addCart:function(t,e){t.commit("addCart",e),t.commit("updating",e)},remove:function(t,e){t.commit("remove",e),t.commit("updating",e)}}}),b=a("28dd");i["a"].use(b["a"]),i["a"].config.productionTip=!1,new i["a"]({store:f,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.50991b43.js.map