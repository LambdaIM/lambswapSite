(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10ee46f2"],{"06c1":function(t,e,a){},"71bc":function(t,e,a){"use strict";a("06c1")},9367:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"remove-dialog"},[a("Modal",{attrs:{"class-name":"remove-modal","footer-hide":!0,closable:!0},model:{value:t.openRemoveDialog,callback:function(e){t.openRemoveDialog=e},expression:"openRemoveDialog"}},[a("div",{staticClass:"remove-content"},[a("p",{staticClass:"title text-center"},[t._v(" "+t._s(t.$t("myPage.dialog.unstake.unstake"))+" XmLAMB ")]),a("div",{staticClass:"remove-wrapper"},[a("div",{staticClass:"title-content"},[a("span",{staticClass:"card-title"},[t._v(t._s(t.$t("common.amount")))]),a("div",{staticClass:"balance-item"},[a("span",{staticClass:"mr-2 text-secondary"},[t._v(t._s(t.$t("myPage.dialog.unstake.staked"))+" XmLAMB")]),a("span",[t._v(t._s(t.pledgeBalance))])])]),a("div",{staticClass:"remove-wrapper flex"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.stakeVal,expression:"stakeVal",modifiers:{number:!0}}],staticClass:"amount-input",attrs:{type:"number"},domProps:{value:t.stakeVal},on:{input:[function(e){e.target.composing||(t.stakeVal=t._n(e.target.value))},t.handleInput],blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"price-wrapper"},[a("div",{staticClass:"price-item"},[a("span",[t._v(t._s(t.$t("myPage.dialog.unstake.unstake"))+" XmLAMB")]),a("p",[t._v(t._s(t.stakeVal)+" XmLAMB")])])]),a("div",{staticClass:"btn-wrapper"},[t.takeLoading?a("Buttons",[t._v(" "+t._s(t.$t("common.loading"))+"... ")]):a("Buttons",{nativeOn:{click:function(e){return t.sendTakeout(e)}}},[t._v(" "+t._s(t.$t("common.confirm"))+" ")])],1)])])],1)},s=[],i=a("5530"),o=a("1da1"),c=(a("96cf"),a("d3b7"),a("25f0"),a("466d"),a("ac1f"),a("99af"),a("3ca3"),a("ddb0"),a("2f62")),r=a("db84"),l=a("5bed"),d=a("99e5"),u=a.n(d),m=a("6df3"),p=a("901e"),v={inject:["reload"],data:function(){return{openRemoveDialog:!1,data:{},coinName:"",stakeVal:"",takeLoading:!1,previousData:"",pledgeBalance:""}},methods:{handleInput:function(t){var e=t.target.value.toString(),a=/^\d*(\.\d{1,6})?$/;e.match(a)||""===this.stakeVal||(this.stakeVal=this.previousData),this.previousData=this.stakeVal},open:function(t){this.data={},this.data=t,this.pledgeBalance=t&&t.data&&t.data.balanceShare,this.openRemoveDialog=!0},checkData:function(){var t=this.pledgeBalance,e=new p(t),a=new p(this.stakeVal);return""===this.stakeVal?(this.$Notice.warning({title:this.$t("notice.n"),desc:this.$t("notice.n30")}),!1):parseFloat(this.stakeVal)<=0?(this.$Notice.warning({title:this.$t("notice.n"),desc:this.$t("notice.n31")}),!1):!a.isGreaterThan(e)||(this.$Notice.warning({title:this.$t("notice.n"),desc:this.$t("notice.n29")}),!1)},sendTakeout:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i,o,c,d,p,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.checkData()){e.next=2;break}return e.abrupt("return",!1);case 2:return t.takeLoading=!0,e.prev=3,a=t.ethersprovider,n=t.ethAddress,s=t.ethChainID,i=t.data&&t.data.address,o=t.data&&t.data.decimals,c=t.data&&t.data.symbol,d=new m["Token"](s,i,o,c),p=u.a.utils.toWei(t.stakeVal.toString(),"ether"),e.next=14,Object(r["d"])(a,n,d,p);case 14:v=e.sent,l["a"].$emit("sendSuccess"),t.openRemoveDialog=!1,l["a"].$emit("sendtx",[v,{okinfo:"".concat(t.$t("common.unstake")," ").concat(t.stakeVal," XmLAMB ").concat(t.$t("notice.n42")),failinfo:"".concat(t.$t("common.unstake")," ").concat(t.stakeVal," XmLAMB ").concat(t.$t("notice.n43"))}]),e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](3),t.$Notice.error({title:t.$t("notice.n32")});case 24:return e.prev=24,t.openRemoveDialog=!1,t.takeLoading=!1,e.finish(24);case 28:case"end":return e.stop()}}),e,null,[[3,20,24,28]])})))()}},components:{Buttons:function(){return a.e("chunk-2d225272").then(a.bind(null,"e2d3"))}},computed:Object(i["a"])({},Object(c["b"])(["ethersprovider","ethAddress","ethChainID"]))},h=v,k=(a("71bc"),a("2877")),f=Object(k["a"])(h,n,s,!1,null,"3fc55cf4",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-10ee46f2.b7839ef1.js.map