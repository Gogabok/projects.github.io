(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{374:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("92af6ec0",content,!0,{sourceMap:!1})},375:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0ebdf5f4",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";var r=n(374);n.n(r).a},396:function(t,e,n){(e=n(12)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Exo+2:100,200,300,400,500,600,700,800,900&display=swap&subset=cyrillic);"]),e.push([t.i,".swiper-pagination-bullet[data-v-15bef9fa]{border:2px solid #fff;width:12px;height:12px;background:hsla(0,0%,100%,.7);transition-duration:.3s}.swiper-pagination-bullet-active[data-v-15bef9fa]{background:#00bfa5;width:24px;border-radius:12px!important}.input-textarea[data-v-15bef9fa],.input-textarea *[data-v-15bef9fa]{width:100%!important;line-height:16px!important}.input-textarea *[data-v-15bef9fa]{border:none!important;box-shadow:none!important;padding:0!important;margin:0!important}.input-textarea .v-text-field__details[data-v-15bef9fa]{display:none!important}.fade-enter-active[data-v-15bef9fa],.fade-leave-active[data-v-15bef9fa]{transition-property:opacity;transition-duration:.25s}.fade-enter-active[data-v-15bef9fa]{transition-delay:.25s}.fade-enter[data-v-15bef9fa],.fade-leave-active[data-v-15bef9fa]{opacity:0}.tools[data-v-15bef9fa]{margin:15px 0!important;background:#fff}.btn-tool[data-v-15bef9fa]{cursor:pointer;background:#f5f5f5}.btn-tool[data-v-15bef9fa]:hover{background:#ecf0f1}.title-btn[data-v-15bef9fa]{color:#8c8c8c;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=e},397:function(t,e,n){"use strict";var r=n(375);n.n(r).a},398:function(t,e,n){(e=n(12)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Exo+2:100,200,300,400,500,600,700,800,900&display=swap&subset=cyrillic);"]),e.push([t.i,".swiper-pagination-bullet{border:2px solid #fff;width:12px;height:12px;background:hsla(0,0%,100%,.7);transition-duration:.3s}.swiper-pagination-bullet-active{background:#00bfa5;width:24px;border-radius:12px!important}.input-textarea,.input-textarea *{width:100%!important;line-height:16px!important}.input-textarea *{border:none!important;box-shadow:none!important;padding:0!important;margin:0!important}.input-textarea .v-text-field__details{display:none!important}.fade-enter-active,.fade-leave-active{transition-property:opacity;transition-duration:.25s}.fade-enter-active{transition-delay:.25s}.fade-enter,.fade-leave-active{opacity:0}.city{min-height:calc(100vh - 92px);display:flex;flex-direction:column}.city .main-container{flex:1;display:flex;flex-direction:column}.city .main-container .btns{margin-top:auto;margin-bottom:12px}.parallax-bg{width:130%;background-size:cover;background-position:0;background-image:url(https://images.unsplash.com/photo-1566805068958-92c5648061e6?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-1.2.1&q=80&w=1356)}.parallax-bg,.parallax-bg-opacity{position:absolute;left:0;top:0;height:100%}.parallax-bg-opacity{background:rgba(0,0,0,.65);width:100%}.swiper-wrapper-main{min-height:50vh;height:100%;display:flex;flex-direction:column;flex:1;border-radius:0 0 10px 10px;box-shadow:0 0 12px rgba(0,0,0,.17)}.swiper-wrapper-main .swiper{height:100%;flex:1;max-width:100%}.swiper-wrapper-main .extra{border-radius:0 0 10px 10px;box-shadow:0 0 12px rgba(0,0,0,.17);padding:10px;text-align:center;background:#efefef}",""]),t.exports=e},421:function(t,e,n){"use strict";n.r(e);var r=n(367),o=(n(368),{name:"Tools",computed:{tools:function(){return this.$store.getters["common/tools"]}}}),l=(n(395),n(39)),c=n(47),d=n.n(c),f=n(355),v=n(356),x=n(149),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools d-flex justify-center",staticStyle:{"flex-wrap":"wrap"},attrs:{cols:"12"}},t._l(t.tools,(function(e){return n("v-col",{key:e.title,staticClass:"text-center btn-tool",attrs:{cols:"4"},on:{click:function(n){return t.$router.push(t.$route.path+"/"+e.link)}}},[n("v-btn",{staticClass:"my-2 mx-auto",attrs:{color:"#8c8c8c",outlined:"",fab:"",dark:"",large:""}},[n("v-icon",[t._v(t._s(e.icon))])],1)],1)})),1)}),[],!1,null,"15bef9fa",null),m=component.exports;d()(component,{VBtn:f.a,VCol:v.a,VIcon:x.a});var w={name:"City",components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide,tools:m},data:function(){return{swiperOption:{speed:600,parallax:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{add_post:function(){this.$store.dispatch("modals/ADD_MODAL",{component:"addPost"})}},head:function(){return{title:this.$route.params.city}}},h=(n(397),Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"pa-0 city justify-center align-center",attrs:{cols:"12"}},[n("v-col",{staticClass:"pa-0 main-container mx-auto",attrs:{xs:"12",sm:"8",md:"6"}},[n("div",{staticClass:"swiper-wrapper-main"},[n("swiper",{staticClass:"swiper py-10 px-5",attrs:{options:t.swiperOption}},[n("div",{staticClass:"parallax-bg",attrs:{slot:"parallax-bg","data-swiper-parallax":"-23%"},slot:"parallax-bg"},[n("div",{staticClass:"parallax-bg-opacity"})]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"title text-uppercase",attrs:{"data-swiper-parallax":"-100"}},[t._v("\n            "+t._s(t.$route.params.city)+"\n          ")]),t._v(" "),n("div",{staticClass:"subtitle",attrs:{"data-swiper-parallax":"-240"}},[t._v("\n            Об этом городе\n          ")]),t._v(" "),n("div",{staticClass:"text",attrs:{"data-swiper-parallax":"-360"}},[n("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla\n              laoreet justo vitae porttitor porttitor. Suspendisse in sem\n              justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh\n              euismod.\n            ")])])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"title text-uppercase",attrs:{"data-swiper-parallax":"-100"}},[t._v("\n            "+t._s(t.$route.params.city)+"\n          ")]),t._v(" "),n("div",{staticClass:"subtitle",attrs:{"data-swiper-parallax":"-240"}},[t._v("\n            Об этом городе\n          ")]),t._v(" "),n("div",{staticClass:"text",attrs:{"data-swiper-parallax":"-360"}},[n("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla\n              laoreet justo vitae porttitor porttitor. Suspendisse in sem\n              justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh\n              euismod.\n            ")])])]),t._v(" "),n("div",{staticClass:"swiper-pagination swiper-pagination-white",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],1),t._v(" "),n("div",{staticClass:"extra success"},[n("v-btn",{attrs:{outlined:""}},[t._v("Подробнее")])],1)],1),t._v(" "),n("tools",{staticClass:"my-auto"})],1)],1)}),[],!1,null,null,null));e.default=h.exports;d()(h,{VBtn:f.a,VCol:v.a})}}]);