(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96a2b4c6"],{"5b42":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n("1da1"),r=(n("96cf"),n("6df3"),n("9d56")),o=n("a004"),i=n("adae");n("901e");function s(e,t,n,a,r){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,s,c){var u,d,p,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=Object(o["i"])(t,n,a.address,!0),l=r["a"],e.prev=3,e.next=6,u.estimateGas.approve(s,l);case 6:return p=e.sent,e.next=9,u.approve(s,l,{gasLimit:Object(i["b"])(p)});case 9:d=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3);case 15:return e.abrupt("return",d);case 16:case"end":return e.stop()}}),e,null,[[3,12]])}))),c.apply(this,arguments)}function u(e,t,n,a,r,o){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r,s,c){var u,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=Object(o["d"])(t,n,a.address,!0),e.prev=1,e.next=4,u.estimateGas.approve(r,s,c);case 4:return p=e.sent,e.next=7,u.approve(r,s,c,{gasLimit:Object(i["b"])(p)});case 7:d=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1);case 13:return e.abrupt("return",d);case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),d.apply(this,arguments)}},c78b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 添加交易对 "),n("Select",{staticStyle:{width:"200px"},model:{value:e.tokenA,callback:function(t){e.tokenA=t},expression:"tokenA"}},e._l(e.tokenList,(function(t){return n("Option",{key:t.symbol,attrs:{value:t.symbol}},[e._v(" name: "+e._s(t.name)+" ,symbol:"+e._s(t.symbol)+" ")])})),1),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenAAmount,expression:"tokenAAmount"}],domProps:{value:e.tokenAAmount},on:{input:function(t){t.target.composing||(e.tokenAAmount=t.target.value)}}}),n("button",{on:{click:e.approveA}},[e._v(" 授权 "+e._s(e.tokenA)),n("button")])]),n("Select",{staticStyle:{width:"200px"},model:{value:e.tokenB,callback:function(t){e.tokenB=t},expression:"tokenB"}},e._l(e.tokenList,(function(t){return n("Option",{key:t.symbol,attrs:{value:t.symbol}},[e._v(" name: "+e._s(t.name)+" ,symbol:"+e._s(t.symbol)+" ")])})),1),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenBAmount,expression:"tokenBAmount"}],domProps:{value:e.tokenBAmount},on:{input:function(t){t.target.composing||(e.tokenBAmount=t.target.value)}}}),n("button",{on:{click:e.approveB}},[e._v(" 授权 "+e._s(e.tokenB)),n("button")])]),n("div",[e._v("fee:"+e._s(e.fee))]),n("div",[n("button",{on:{click:e.showConfirmInput}},[e._v(" 拼接参数 ")])]),n("br"),n("div",[n("button",{on:{click:e.sendTX}},[e._v(" 发送交易 ")])])],1)},r=[],o=n("5530"),i=n("1da1"),s=(n("99af"),n("96cf"),n("2f62")),c=n("9531"),u=n("6df3"),d=n("167d"),p=n("49b0"),l=n("99e5"),m=n.n(l),b=n("5a50"),h=n("5b42"),v={data:function(){return{tokenList:[],tokenA:"",tokenB:"",tokenAAmount:"",tokenBAmount:"",parameters:[],fee:"",btnloading:!1}},methods:{getTokens:function(){var e=this.ethChainID;this.ethAddress,this.ethersprovider;return Object(c["g"])(e)},showConfirmInput:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,i,s,l,b,h,v,k,f,w;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.ethChainID,a=e.ethersprovider,r=e.ethAddress,o=Object(p["a"])(e.$data.tokenA,n),i=Object(p["a"])(e.$data.tokenB,n),s=e.$data.tokenAAmount,l=e.$data.tokenBAmount,b=new u["TokenAmount"](o,m.a.utils.toWei(s,"ether")),h=new u["TokenAmount"](i,m.a.utils.toWei(l,"ether")),k=Object(d["a"])(n),e.$data.ethamount="",e.$data.tokenA==k.coinName?(v=m.a.utils.toWei(s,"ether"),e.$data.ethamount=v):(v=m.a.utils.toWei(l,"ether"),e.$data.ethamount=v),e.$data.btnloading=!0,t.prev=13,t.next=16,Object(c["b"])(b,h,r,n);case 16:return f=t.sent,e.$data.parameters=f,t.next=21,Object(c["a"])(n,a,r,f,v);case 21:w=t.sent,e.$data.fee=w,e.isShowInput=!1,t.next=31;break;case 27:t.prev=27,t.t0=t["catch"](13),e.$Notice.error({title:e.$t("notice.swapNotice.n5")});case 31:e.$data.btnloading=!1;case 32:case"end":return t.stop()}}),t,null,[[13,27]])})))()},sendTX:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.ethChainID,a=e.ethersprovider,r=e.ethAddress,o=e.$data.parameters,e.$data.btnloading=!0,t.prev=5,t.next=8,Object(c["o"])(n,a,r,o,e.$data.ethamount);case 8:i=t.sent,s="".concat(e.$t("swapConfirm.add")," ").concat(e.$data.LiquidityInfo.liquidityMinted," ").concat(e.$data.tokenA.symbol,"/").concat(e.$data.tokenB.symbol," LP "),e.$refs.haveSendtx.open(s),event.$emit("sendtx",[i,{okinfo:s+e.$t("swapConfirm.success"),failinfo:s+e.$t("swapConfirm.fail")}]),e.$data.openInputDialog=!1,t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](5),e.$Notice.error({title:e.$t("notice.swapNotice.n3")});case 18:e.$data.btnloading=!1;case 19:case"end":return t.stop()}}),t,null,[[5,15]])})))()},approveA:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,i,s,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.ethChainID,a=e.ethersprovider,r=e.ethAddress,o=Object(p["a"])(e.$data.tokenA,n),i=e.$data.tokenAAmount,s=m.a.utils.toWei(i),c=b["g"],e.$data.btnloading=!0,t.next=10,Object(h["a"])(a,r,o,c,s);case 10:if(u=t.sent,!u){t.next=20;break}return t.next=15,u.wait([1]);case 15:t.sent,e.$data.tokenAnotNeed=!0,t.next=21;break;case 20:e.$Notice.error({title:e.$t("notice.swapNotice.n4")});case 21:e.$data.btnloading=!1;case 22:case"end":return t.stop()}}),t)})))()},approveB:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.ethChainID,a=e.ethersprovider,r=e.ethAddress,o=Object(p["a"])(e.$data.tokenB,n),i=e.$data.tokenBAmount,s=m.a.utils.toWei(i),c=b["g"],e.$data.btnloading=!0,t.next=10,Object(h["a"])(a,r,o,c,s);case 10:t.sent;case 12:case"end":return t.stop()}}),t)})))()}},watch:{ethChainID:function(){this.$data.tokenList=this.getTokens()}},computed:Object(o["a"])({},Object(s["b"])(["ethAddress","ethChainID","web3","ethersprovider"]))},k=v,f=(n("e587"),n("2877")),w=Object(f["a"])(k,a,r,!1,null,"74dc42cc",null);t["default"]=w.exports},d50b:function(e,t,n){},e587:function(e,t,n){"use strict";n("d50b")}}]);
//# sourceMappingURL=chunk-96a2b4c6.d6665778.js.map