(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[207],{"087f":function(e,t,a){"use strict";a.r(t);var n=a("f675"),s=a("adf6");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("b113");var o=a("2877"),d=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"6a8d04f2",null);t["default"]=d.exports},"2f94":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("841c"),a("b0c0");var s=n(a("3ba7")),i=n(a("659d")),o=n(a("05a7")),d={name:"index",inject:["returnToTop"],components:{AppPageList:function(){return a.e(158).then(a.bind(null,"4943"))},SearchHeader:function(){return a.e(210).then(a.bind(null,"7cfb"))},PageList:s.default,SelectPageType:i.default,SelectPageTemp:o.default},data:function(){return{tab:{name:null,data:[]},pageList:{data:[]},table:{data:[],loading:!1,total:0},page:{pageSize:10,pageNumber:1},goodsId:"",tempType:"10",loadStatus:!1,firstLoadNum:1}},methods:{editPage:function(e){var t;t="10"==e.type?"/decorate/index":"11"==e.type?"/decorate/goods-detail":"12"==e.type?"/decorate/vip-center":"/decorate/custom",this.$router.push({path:t,query:{id:e.id,type:"edit"}})},handleSearch:function(e){this.search=e,this.refreshTable()},clickTab:function(){this.refreshTable()},addPage:function(){this.$refs["select_page_type"].setValue()},changeSelectPage:function(e){this.tempType=e,this.$refs.tempChoose.setValue()},tempChagne:function(){this.$refs.tempChoose.setValue()},tempClose:function(){this.$refs.tempChoose.setValue()},useTemp:function(e){var t;t="10"==this.tempType?"/decorate/index":"11"==this.tempType?"/decorate/goods-detail":"12"==this.tempType?"/decorate/vip-center":"/decorate/custom",this.$router.push({path:t,query:{id:e,type:"add"}})},changePage:function(e){this.page=e,this.getList()},refreshTable:function(){var e;this.page={pageSize:10,pageNumber:1},null===(e=this.$refs["page_list_".concat(this.tab.name)][0])||void 0===e||e.reset(),this.getList(),this.getPageTotal()},getList:function(){var e=this;1===this.firstLoadNum&&(this.loadStatus=!0),this.table.loading=!0;var t=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},this.search),a="getNewPageList";"0"===this.tab.name?a="getNewCustomList":t.type=this.tab.name,this.$api.shopApi[a](t).then((function(t){e.table.loading=!1,0===t.error&&(e.table.data=t.list||[],e.table.total=t.total)})).finally((function(){e.setFirstLoad()}))},getPageTotal:function(){var e=this;1===this.firstLoadNum&&(this.loadStatus=!0),this.$api.shopApi.getNewPageTotal().then((function(t){var a=t.error,n=t.page_type,s=t.used_page;0===a&&(e.tab.data=n,e.pageList.data=s)})).finally((function(){e.setFirstLoad()}))},getRanGoodsId:function(){var e=this;this.$api.goodsApi.getGoodsRanId().then((function(t){0===t.error&&(e.goodsId=t.goods_id)}))},chooseAgain:function(){this.$refs.tempChoose.setValue(),this.$refs["select_page_type"].setValue()},setFirstLoad:function(){this.firstLoadNum+=1,3===this.firstLoadNum&&(this.loadStatus=!1)}},mounted:function(){this.getList(),this.getPageTotal()},beforeMount:function(){this.getRanGoodsId()}};t.default=d},adf6:function(e,t,a){"use strict";a.r(t);var n=a("2f94"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=s.a},b113:function(e,t,a){"use strict";a("c060")},c060:function(e,t,a){},f675:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadStatus,expression:"loadStatus"}],staticClass:"shop-system-page"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.pageList.data.length>0,expression:"pageList.data.length > 0"}],staticClass:"app-page"},[a("kdx-form-title",[e._v("应用中的页面")]),a("app-page-list",{attrs:{data:e.pageList.data,"goods-id":e.goodsId},on:{"on-edit":e.editPage}})],1),a("search-header",{on:{"add-page":e.addPage,"on-change":e.handleSearch}}),a("div",{staticClass:"tab-content"},[a("Tabs",{attrs:{animated:!1},on:{"on-click":e.clickTab},model:{value:e.tab.name,callback:function(t){e.$set(e.tab,"name",t)},expression:"tab.name"}},e._l(e.tab.data,(function(t){return a("TabPane",{key:t.type,attrs:{label:t.name+"("+t.total+")",name:null!=t.type?t.type.toString():t.type}},[a("page-list",{directives:[{name:"show",rawName:"v-show",value:1*t.type==1*e.tab.name,expression:"item.type*1==tab.name*1"}],ref:"page_list_"+t.type,refInFor:!0,attrs:{data:e.table.data,total:e.table.total,"goods-id":e.goodsId,loading:e.table.loading},on:{"on-refresh":e.refreshTable,"on-page-change":e.changePage,"on-edit":e.editPage}})],1)})),1)],1),a("select-page-type",{ref:"select_page_type",on:{"on-change":e.changeSelectPage}}),a("select-page-temp",{ref:"tempChoose",attrs:{type:e.tempType},on:{"on-change":e.tempChagne,"on-close":e.tempClose,"on-choose":e.chooseAgain,"on-use":e.useTemp}}),e._t("default")],2)},s=[]}}]);