(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1aec":function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.executeUpgrade=e.getUpgradeStatus=e.startUpgrade=e.getUpgradeInfo=e.resetRepair=e.completeSystemRepair=e.executeScriptSystemRepair=e.executeSystemRepair=e.downloadFile=e.requestSystemRepair=e.checkSystemRepair=e.initSystemRepair=e.getVersionLog=e.getSystemAuth=e.getUpdateLog=void 0;var s=i("66df"),n=function(t){return(0,s.get)("admin/system/update-log/get-list",t)};e.getUpdateLog=n;var a=function(t){return(0,s.get)("admin/system/auth/get",t)};e.getSystemAuth=a;var o=function(t){return(0,s.get)("admin/system/update-log/get-version-log",t)};e.getVersionLog=o;var r=function(t){return(0,s.get)("admin/system/repair/init",t)};e.initSystemRepair=r;var c=function(t){return(0,s.get)("admin/system/repair/check",t)};e.checkSystemRepair=c;var l=function(t){return(0,s.get)("admin/system/repair/request",t)};e.requestSystemRepair=l;var d=function(t){return(0,s.get)("admin/system/repair/download-file",t)};e.downloadFile=d;var u=function(t){return(0,s.get)("admin/system/repair/execute",t)};e.executeSystemRepair=u;var p=function(t){return(0,s.get)("admin/system/repair/execute-script",t)};e.executeScriptSystemRepair=p;var f=function(t){return(0,s.get)("admin/system/repair/complete",t)};e.completeSystemRepair=f;var v=function(t){return(0,s.get)("admin/system/repair/reset",t)};e.resetRepair=v;var _=function(t){return(0,s.get)("admin/system/upgrade/init",t)};e.getUpgradeInfo=_;var h=function(t){return(0,s.post)("admin/system/upgrade/start",t)};e.startUpgrade=h;var g=function(t){return(0,s.get)("admin/system/upgrade/get-status",t)};e.getUpgradeStatus=g;var m=function(t){return(0,s.post)("admin/system/upgrade/execute",t)};e.executeUpgrade=m},"362a":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"modal-mask"}),i("div",{staticClass:"modal-content"},[t.loading?t._e():i("div",{staticClass:"close",on:{click:t.fnCloseModal}},[i("Icon",{attrs:{type:"ios-close",size:24}})],1),t.checking?i("div",{staticClass:"icon iconfont icon-xitong-sousuo"}):t._e(),t.process_success?i("div",{staticClass:"icon iconfont icon-yes"}):t._e(),t.downloading?i("div",{staticClass:"icon iconfont icon-xitong-xiazai"}):t._e(),t.repairing?i("svg-icon",{staticClass:"icon iconfont",attrs:{type:"icon-xitong-xiufu"}}):t._e(),t.process_fail?i("div",{staticClass:"icon iconfont icon-del"}):t._e(),i("div",{staticClass:"tips"},[t._v(t._s(t.tipsText))]),i("div",{staticClass:"check"},[t.loading?i("div",{staticClass:"progress"},[i("div",{staticClass:"bg"},[i("div",{staticClass:"current",style:"width: "+t.progress+"%;"})])]):t._e(),t.check_finished?i("div",{staticClass:"result"},[i("span",{staticClass:"danger"},[t._v(t._s(t.diff_file_table_count))]),t._v(" 项差异文件 "),i("br"),i("span",{staticClass:"success"},[t._v(t._s(t.script_count))]),t._v(" 项脚本更新 ")]):t._e()]),i("div",{staticClass:"btn-wrap"},[t.check_start?i("div",{staticClass:"type type1"},[i("Button",{attrs:{type:"primary"},on:{click:t.fnStart}},[t._v("开始")]),i("Button",{on:{click:t.fnCloseModal}},[t._v("取消")])],1):i("div",{staticClass:"type type2"},[i("Button",{directives:[{name:"show",rawName:"v-show",value:0!==t.diff_count,expression:"diff_count !== 0"}],attrs:{type:"primary",long:!0,loading:t.loading},on:{click:t.fnStart}},[t._v(" "+t._s(t._f("formatStep")(t.step))+" ")])],1)])],1)])},n=[]},"442b":function(t,e,i){"use strict";i.r(e);var s=i("362a"),n=i("8ed5");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("f574");var o=i("2877"),r=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,"1247c494",null);e["default"]=r.exports},6062:function(t,e,i){"use strict";var s=i("6d61"),n=i("6566");t.exports=s("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},6566:function(t,e,i){"use strict";var s=i("9bf2").f,n=i("7c73"),a=i("e2cc"),o=i("0366"),r=i("19aa"),c=i("2266"),l=i("7dd0"),d=i("2626"),u=i("83ab"),p=i("f183").fastKey,f=i("69f3"),v=f.set,_=f.getterFor;t.exports={getConstructor:function(t,e,i,l){var d=t((function(t,s){r(t,d,e),v(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=s&&c(s,t[l],t,i)})),f=_(e),h=function(t,e,i){var s,n,a=f(t),o=g(t,e);return o?o.value=i:(a.last=o={index:n=p(e,!0),key:e,value:i,previous:s=a.last,next:void 0,removed:!1},a.first||(a.first=o),s&&(s.next=o),u?a.size++:t.size++,"F"!==n&&(a.index[n]=o)),t},g=function(t,e){var i,s=f(t),n=p(e);if("F"!==n)return s.index[n];for(i=s.first;i;i=i.next)if(i.key==e)return i};return a(d.prototype,{clear:function(){var t=this,e=f(t),i=e.index,s=e.first;while(s)s.removed=!0,s.previous&&(s.previous=s.previous.next=void 0),delete i[s.index],s=s.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,i=f(e),s=g(e,t);if(s){var n=s.next,a=s.previous;delete i.index[s.index],s.removed=!0,a&&(a.next=n),n&&(n.previous=a),i.first==s&&(i.first=n),i.last==s&&(i.last=a),u?i.size--:e.size--}return!!s},forEach:function(t){var e,i=f(this),s=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){s(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),a(d.prototype,i?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),u&&s(d.prototype,"size",{get:function(){return f(this).size}}),d},setStrong:function(t,e,i){var s=e+" Iterator",n=_(e),a=_(s);l(t,e,(function(t,e){v(this,{type:s,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),d(e)}}},"77a8":function(t,e,i){"use strict";i.r(e);var s=i("a680"),n=i("b8ec");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("a22a");var o=i("2877"),r=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,"d068a054",null);e["default"]=r.exports},"8ed5":function(t,e,i){"use strict";i.r(e);var s=i("af63"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},a22a:function(t,e,i){"use strict";var s=i("e4bd"),n=i.n(s);n.a},a680:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("content-bar",[i("div",{staticClass:"content"},[i("div",{staticClass:"title",on:{click:t.resetRepair}},[i("form-title",{attrs:{hasMargin:!1}},[t._v("系统修复")])],1),i("div",{staticClass:"isnew"},[t.versionInfo?i("div",{staticClass:"version-info"},[i("div",{staticClass:"version-info-tips"},[t._v("当前为最新版本")]),i("div",{staticClass:"version-info-code"},[t._v(" v"+t._s(t.versionInfo.version)+" ")]),i("div",{staticClass:"version-info-time"},[t._v(" 发布于"+t._s(t.versionInfo.release_time)+" ")])]):t._e(),t.isVersionInfoLogs?i("div",{staticClass:"update-info"},[i("ul",t._l(t.versionInfo.logs,(function(e,s){return i("li",{key:s},[i("div",{staticClass:"left",class:{add:"新增"===e.type,optimization:"优化"===e.type,repair:"修复"===e.type}},[t._v(" "+t._s(e.type)+" ")]),i("div",{staticClass:"right",domProps:{innerHTML:t._s(e.content)}},[t._v(t._s(e.content))])])})),0)]):t._e(),i("div",{staticClass:"repair-status"},[i("hint-alert",{attrs:{"show-icon":!1}},[i("div",{staticStyle:{"font-weight":"bold","margin-bottom":"6px"}},[t._v(" 检测更新说明 ")]),i("div",[t._v(" 文件差异：由于误操作删除了系统文件或系统更新导致的文件缺失和差异，请及时下载更新 ")]),i("div",[t._v(" 脚本更新：如果与上次更新脚本数据不统一，请及时更新，如未发生变化则无需更新。 ")])]),i("div",{staticClass:"item"},[i("div",{staticClass:"text",staticStyle:{"font-size":"12px",color:"#939799","line-height":"16px"}},[t._v(" 上次修复时间："+t._s(t.last_repair_time||"-")+" ")])]),t.can_repair?i("div",{staticClass:"item"},[i("div",{staticClass:"icon iconfont icon-tishi-prompt"}),i("div",{staticClass:"text"},[t._v(" 更新之前请注意 "),i("span",{staticClass:"warning"},[t._v("【备份数据】")])])]):t._e(),i("div",{staticClass:"item"},[i("div",{staticClass:"text",staticStyle:{"font-size":"12px",color:"#939799","line-height":"16px"}},[t._v(" 上次检测时间："+t._s(t.last_check_time||"-")+" ")])]),t.check_success?i("div",{staticClass:"item"},[i("div",{staticClass:"icon iconfont icon-xitong-sousuo"}),i("div",{staticClass:"text"},[t._v(" 共检测到 "),i("span",{staticClass:"danger"},[t._v(" "+t._s(t.diff_file_table_count)+" ")]),t._v(" 项差异文件， "),i("span",{staticClass:"success"},[t._v(t._s(t.script_count))]),t._v(" 项脚本更新 ")])]):t._e(),t.make_file?i("div",{staticClass:"item"},[i("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),i("div",{staticClass:"text",staticStyle:{"padding-left":"6px"}},[t._v(" 正在生成差异文件 ")]),i("div",{staticClass:"refres",on:{click:t.refres}},[t._v(" 点击刷新获取文件 ")])]):t._e(),t.check_fail?i("div",{staticClass:"item"},[i("div",{staticClass:"icon iconfont icon-xitong-sousuo danger"}),i("div",{staticClass:"text danger"},[t._v(" 检测失败 ")])]):t._e(),t.download_success?i("div",{staticClass:"item"},[i("div",{staticClass:"icon iconfont icon-yes"}),i("div",{staticClass:"text"},[t._v(" 下载成功 ")])]):t._e(),t.download_fail?i("div",{staticClass:"item"},[i("div",{staticClass:"icon iconfont icon-del"}),i("div",{staticClass:"text"},[i("span",{staticClass:"danger"},[t._v("下载失败")]),t._v(" 可能是您服务器文件权限的问题导致无法写入请联系客服 ")])]):t._e(),t.repair_fail?i("div",{staticClass:"item"},[i("div",{staticClass:"icon iconfont icon-del"}),i("div",{staticClass:"text"},[i("span",{staticClass:"danger"},[t._v("修复失败")]),t._v(" 可能是您服务器文件权限的问题导致无法写入请联系客服 ")])]):t._e(),t.repair_success?i("div",{staticClass:"item"},[i("div",{staticClass:"icon iconfont icon-yes"}),i("div",{staticClass:"text"},[t._v(" 修复成功 ")])]):t._e()],1),t.open_repair_reason?i("hint-alert",{staticStyle:{"margin-top":"20px"},attrs:{"show-icon":!1,type:"error"}},[i("span",{domProps:{innerHTML:t._s(t.open_repair_reason)}})]):t._e(),t.can_repair?i("div",{staticClass:"btn-box"},[new Set(["","1","13","22","50"]).has(t.step)&&0!==t.diff_count?i("div",{staticClass:"operate-btn",on:{click:t.fnOperate}},[t._v(" "+t._s(t._f("formatStep")(t.step))+" ")]):t._e(),new Set(["","10","11","50"]).has(t.step)?t._e():i("div",{staticClass:"operate-btn",on:{click:t.checkSystemRepair}},[t._v(" 重新检测 ")])]):t._e()],1),i("common-modal",{attrs:{loading:t.loading,diff_count:t.diff_count,diff_table_count:t.diff_table_count,diff_file_table_count:t.diff_file_table_count,script_count:t.script_count,step:t.step,download_page:t.download_page},on:{checkSystemRepair:t.checkSystemRepair,requestSystemRepair:t.requestSystemRepair,downloadFile:t.downloadFile,executeSystemRepair:t.executeSystemRepair},model:{value:t.modalShowFlag,callback:function(e){t.modalShowFlag=e},expression:"modalShowFlag"}})],1)])},n=[]},af63:function(t,e,i){i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=null,n={props:["value","loading","diff_count","diff_table_count","diff_file_table_count","script_count","step","download_page"],data:function(){return{tipsText:"",progress:0,timeId:null,interval:20,cache_download_page:0}},computed:{check_start:function(){return new Set(["","50"]).has(this.step)},checking:function(){return new Set(["","0","50"]).has(this.step)||"1"===this.step&&this.loading},check_finished:function(){return"1"===this.step},downloading:function(){return"13"===this.step&&this.loading},repairing:function(){return new Set(["22","34","35"]).has(this.step)&&this.loading},process_success:function(){return new Set(["1","13","22","34","35"]).has(this.step)&&!this.loading},process_fail:function(){return new Set(["12","21","30","31","32","33"]).has(this.step)}},watch:{step:{handler:function(t){s||(s=this),""===t||"0"===t||"50"===t?"0"===t?this.diff_count===this.diff_table_count?this.tipsText="正在下载文件 0%":this.tipsText="正在检查文件 0%":this.tipsText="是否要进行检查系统":"1"===t?this.tipsText="检查完成":"30"===t?this.tipsText="检查失败":"12"===t?this.tipsText="获取资源失败":"13"===t?this.tipsText="获取资源成功":"21"===t?this.tipsText="下载失败":"22"===t?this.tipsText="下载完成":new Set(["31","32","33"]).has(t)?this.tipsText="修复失败":new Set(["34","35"]).has(t)&&(this.tipsText="修复完成")},immediate:!0},loading:{handler:function(t){var e=this;if(t){if(this.progress=0,new Set(["","0","50"]).has(this.step)?this.tipsText="正在检查文件 ".concat(this.progress,"%"):"1"===this.step?this.tipsText="正在请求资源 ".concat(this.progress,"%"):"13"===this.step?this.tipsText="正在下载文件 ".concat(this.progress,"%"):new Set(["22","34","35"]).has(this.step)&&(this.tipsText="正在修复系统 ".concat(this.progress,"%")),"13"===this.step)return this.cache_download_page=this.download_page,void(this.interval=this.cache_download_page?parseInt(100/this.cache_download_page)||1:100);this.interval=20,this.timeId=setInterval((function(){e.progress+=e.interval,new Set(["","0","50"]).has(e.step)?e.tipsText="正在检查文件 ".concat(e.progress,"%"):"1"===e.step?e.tipsText="正在请求资源 ".concat(e.progress,"%"):"13"===e.step?e.tipsText="正在下载文件 ".concat(e.progress,"%"):new Set(["22","34","35"]).has(e.step)&&(e.tipsText="正在修复系统 ".concat(e.progress,"%")),e.progress>=100&&clearInterval(e.timeId)}),1e3)}else this.timeId&&clearInterval(this.timeId)},immediate:!0},download_page:{handler:function(t){"13"===this.step&&this.loading&&t>0&&(this.progress+=this.interval,this.progress>100&&(this.progress=100),this.tipsText="正在下载文件 ".concat(this.progress,"%"))}}},methods:{fnStart:function(){new Set(["","50"]).has(this.step)?this.$emit("checkSystemRepair"):"1"===this.step?this.diff_count===this.diff_table_count?this.$emit("executeSystemRepair"):this.$emit("requestSystemRepair"):"13"===this.step?this.$emit("downloadFile"):"22"===this.step?this.$emit("executeSystemRepair"):new Set(["12","21","30","31","32","33"]).has(this.step)&&this.$emit("checkSystemRepair")},fnCloseModal:function(){this.$emit("input",!1)}},filters:{formatStep:function(t){var e,i,n="";switch(t){case"1":n=(null===(e=s)||void 0===e?void 0:e.diff_count)===(null===(i=s)||void 0===i?void 0:i.diff_table_count)?"立即修复系统":"获取更新资源";break;case"13":n="立即下载";break;case"22":n="立即修复系统";break;case"34":n="确定";break;case"35":n="确定";break;default:n="重新检测";break}return n}}};e.default=n},b8ec:function(t,e,i){"use strict";i.r(e);var s=i("f6fd"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},e4bd:function(t,e,i){},f574:function(t,e,i){"use strict";var s=i("fb1d"),n=i.n(s);n.a},f6fd:function(t,e,i){var s=i("4ea4");i("99af"),i("d81d"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("5530")),a=s(i("2909")),o=s(i("442b")),r=i("1aec"),c={components:{CommonModal:o.default},data:function(){return{versionInfo:null,modalShowFlag:!1,last_repair_time:"",last_check_time:"",can_repair:!1,repair:null,loading:!1,step:"",diff_file_count:0,diff_table_count:0,script_count:0,download_page:0,open_repair_reason:""}},computed:{diff_count:function(){return parseFloat(this.diff_file_count)+parseFloat(this.diff_table_count)+parseFloat(this.script_count)},diff_file_table_count:function(){return parseFloat(this.diff_file_count)+parseFloat(this.diff_table_count)},make_file:function(){return new Set(["10","11"]).has(this.step)},check_success:function(){return new Set(["1","13"]).has(this.step)},check_fail:function(){return new Set(["12","30"]).has(this.step)},download_success:function(){return new Set(["22"]).has(this.step)},download_fail:function(){return new Set(["21"]).has(this.step)},repair_fail:function(){return new Set(["31","33","33"]).has(this.step)},repair_success:function(){return new Set(["50"]).has(this.step)},isVersionInfoLogs:function(){var t,e;return null===(t=this.versionInfo)||void 0===t||null===(e=t.logs)||void 0===e?void 0:e.length}},created:function(){this.getVersionLog(),this.initSystemRepair()},methods:{getVersionLog:function(){var t=this;(0,r.getVersionLog)().then((function(e){if(0===e.error)if(e.version){var i,s,o,r=null===(i=e.version)||void 0===i?void 0:i.logs_add.map((function(t){return{type:"新增",content:t}})),c=null===(s=e.version)||void 0===s?void 0:s.logs_optimize.map((function(t){return{type:"优化",content:t}})),l=null===(o=e.version)||void 0===o?void 0:o.logs_repair.map((function(t){return{type:"修复",content:t}})),d=[].concat((0,a.default)(r),(0,a.default)(c),(0,a.default)(l));t.versionInfo=(0,n.default)((0,n.default)({},e.version),{},{logs:d})}else t.versionInfo=null}))},initSystemRepair:function(){var t=this;(0,r.initSystemRepair)().then((function(e){var i,s,n,a,o,r;0===e.error&&(t.last_repair_time=e.last_repair_time,t.last_check_time=null===e||void 0===e||null===(i=e.last_check)||void 0===i?void 0:i.check_time,t.can_repair=e.can_repair,t.repair=e.repair,t.open_repair_reason=e.open_repair_reason,t.diff_file_count=parseFloat(null===(s=e.repair)||void 0===s?void 0:s.diff_file_count),t.diff_table_count=parseFloat(null===(n=e.repair)||void 0===n?void 0:n.diff_table_count),t.script_count=parseFloat(null===(a=e.repair)||void 0===a?void 0:a.script_count),0===t.diff_file_count&&0!==t.diff_table_count&&0===t.script_count?t.step="22":(t.step=(null===(o=e.repair)||void 0===o?void 0:o.status)||"","13"===t.step&&(t.download_page=(null===(r=e.repair)||void 0===r?void 0:r.download_page)+1)))}))},checkSystemRepair:function(){var t=this;this.loading=!0,this.step="0",this.modalShowFlag=!0,(0,r.checkSystemRepair)().then((function(e){t.loading=!1,0===e.error?(t.diff_file_count=parseFloat(e.diff_file_count),t.diff_table_count=parseFloat(e.diff_table_count),t.script_count=parseFloat(e.script_count),t.step="1"):t.step="30"}))},requestSystemRepair:function(){var t=this;this.loading=!0,(0,r.requestSystemRepair)().then((function(e){t.loading=!1,0===e.error?(t.step="11",t.modalShowFlag=!1):t.step="12"}))},refres:function(){this.initSystemRepair()},downloadFile:function(){var t=this;this.loading=!0,this.download_page++;var e=1,i=function e(i){(0,r.downloadFile)({page:i}).then((function(s){0===s.error?s.is_end?(t.download_page=0,t.loading=!1,t.step="22"):(i++,e(i),t.download_page--):(t.loading=!1,t.step="21")}))};i(e)},executeSystemRepair:function(){var t=this;this.loading=!0,(0,r.executeSystemRepair)().then((function(e){0===e.error?e.is_complete?t.completeSystemRepair():t.executeScriptSystemRepair():(t.loading=!1,t.step="31")}))},executeScriptSystemRepair:function(){var t=this;this.loading=!0;var e=0,i=function e(i){(0,r.executeScriptSystemRepair)({index:i}).then((function(s){0===s.error?s.is_end?t.completeSystemRepair():(i++,e(i)):(t.loading=!1,t.step="33")}))};i(e)},completeSystemRepair:function(){var t=this;this.loading=!0,(0,r.completeSystemRepair)().then((function(e){t.loading=!1,0===e.error?(t.getVersionLog(),t.step="34",t.step="50",t.modalShowFlag=!1):t.step="33"}))},fnOperate:function(){this.modalShowFlag=!0},resetRepair:function(){var t=this;(0,r.resetRepair)().then((function(){t.initSystemRepair()}))}},filters:{formatStep:function(t){var e="";switch(t){case"":e="系统版本校验";break;case"1":e="获取更新资源";break;case"13":e="下载文件";break;case"22":e="立即修复";break;case"50":e="系统版本校验";break}return e}}};e.default=c},fb1d:function(t,e,i){}}]);