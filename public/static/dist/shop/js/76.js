(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{"1ec4":function(t,e,a){t.exports=a.p+"static/dist/shop/img/classify_rect.png"},4329:function(t,e,a){t.exports=a.p+"static/dist/shop/img/cate0_level0.png"},"4c6a":function(t,e,a){t.exports=a.p+"static/dist/shop/img/cate0_level2.png"},"54bc":function(t,e,a){"use strict";a.r(e);var i=a("7478"),l=a("7218");for(var n in l)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return l[t]}))}(n);a("dc9d");var s=a("2877"),o=Object(s["a"])(l["default"],i["a"],i["b"],!1,null,"011c1cb8",null);e["default"]=o.exports},"71bf":function(t,e,a){t.exports=a.p+"static/dist/shop/img/classify_example.png"},7218:function(t,e,a){"use strict";a.r(e);var i=a("d10b"),l=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=l.a},7478:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return l}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[i("Button",{staticClass:"primary-long",on:{click:t.handleSave}},[t._v("保存")]),i("Button",{staticClass:"default-long",on:{click:t.nextStep}},[t._v("返回")])]},proxy:!0}])},[i("div",{staticClass:"setting-category"},[i("Form",{ref:"form",attrs:{model:t.model,"label-width":120,rules:t.rules}},[i("kdx-form-title",[t._v("分类层级")]),i("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"分类级别：",prop:"level"}},[i("RadioGroup",{staticClass:"model-category",model:{value:t.model.level,callback:function(e){t.$set(t.model,"level",e)},expression:"model.level"}},[i("Radio",{attrs:{label:"0"}},[i("span",{staticClass:"cate-level"},[t._v("一级分类")])]),i("Radio",{attrs:{label:"1"}},[i("span",{staticClass:"cate-level"},[t._v("二级分类")])]),i("Radio",{attrs:{label:"2"}},[i("span",{staticClass:"cate-level"},[t._v("三级分类")])])],1),i("kdx-hint-text",{attrs:{content:"切换分类级别需要重新设置商品的分类从属关系，以免导致用户搜索不到相关产品"}})],1),i("FormItem",{attrs:{label:"选择模板："}},[i("div",{staticClass:"choose-temp"},t._l(t.tempList,(function(e,a){return i("div",{key:a,staticClass:"temp-list",class:{active:t.model.template_type==e.id},on:{click:function(a){return t.chooseTemp(e.id)}}},[i("div",{staticClass:"temp-img-box"},[i("i",{staticClass:"iconfont icon-yes1 check-icon"}),i("img",{staticClass:"temp-img",attrs:{src:e.imgurl}})]),i("div",{staticClass:"temp-title"},[t._v(t._s(e.name))])])})),0)]),i("FormItem",{attrs:{label:"显示形式：",prop:"modal"}},[i("RadioGroup",{staticClass:"r-form-item-checkbox",model:{value:t.model.style,callback:function(e){t.$set(t.model,"style",e)},expression:"model.style"}},[i("Radio",{attrs:{label:"0"}},[t._v("圆形 "),i("kdx-hint-tooltip",{staticStyle:{"margin-left":"-6px"},attrs:{type:"image",image:a("a237")}})],1),i("Radio",{attrs:{label:"1"}},[t._v("方形 "),i("kdx-hint-tooltip",{staticStyle:{"margin-left":"-6px"},attrs:{type:"image",image:a("1ec4")}})],1)],1)],1),i("FormItem",{attrs:{label:"导航标题：",prop:"title"}},[i("Input",{staticClass:"width-160",attrs:{type:"text",placeholder:"商品分类"},model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}}),i("kdx-hint-tooltip",{attrs:{type:"image",image:a("71bf")}})],1)],1),i("Spin",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{fix:""}})],1)])},l=[]},"80d10":function(t,e,a){t.exports=a.p+"static/dist/shop/img/cate0_level1.png"},9911:function(t,e,a){"use strict";var i=a("23e7"),l=a("857a"),n=a("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return l(this,"a","href",t)}})},a237:function(t,e,a){t.exports=a.p+"static/dist/shop/img/classify_circle.png"},bc39:function(t,e,a){},d10b:function(t,e,a){var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=i(a("5530"));a("d81d"),a("99af"),a("b0c0"),a("9911"),a("d3b7");var n={name:"index",data:function(){return{model:{level:"0",style:"0",template_type:"0",title:"商品分类"},rules:{title:[{required:!0,message:"导航标题必填"}]},link:{value:!1},loading:!1}},computed:{tempList:function(){var t=this,e=[{id:"0",name:"默认模板"}],i=e.map((function(e){return{id:e.id,imgurl:a("db635")("./cate".concat(e.id,"_level").concat(t.model.level,".png")),name:e.name}}));return i}},methods:{handleCancel:function(){this.link.value=!1},nextStep:function(){this.$router.go(-1)},getData:function(){var t=this;this.$api.goodsApi.getSettingClassifyLevel().then((function(e){if(0===e.error){var a=["level","style","template_type"];a.forEach((function(t){e.data[t]=""+e.data[t]})),t.model=(0,l.default)((0,l.default)({},t.model),e.data)}}))},handleSave:function(){var t=this;this.loading=!0,this.model.adv_url=0===this.model.adv_url.length?"":this.model.adv_url,this.$api.goodsApi.settingClassifyLevel({data:this.model}).then((function(e){t.loading=!1,0===e.error&&(t.$Message.success("分类层级设置成功"),t.$router.push({path:"/goods/classify"}))}))},chooseTemp:function(t){this.model.template_type=t}},mounted:function(){this.getData()}};e.default=n},db635:function(t,e,a){var i={"./cate0_level0.png":"4329","./cate0_level1.png":"80d10","./cate0_level2.png":"4c6a"};function l(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}l.keys=function(){return Object.keys(i)},l.resolve=n,t.exports=l,l.id="db635"},dc9d:function(t,e,a){"use strict";a("bc39")}}]);