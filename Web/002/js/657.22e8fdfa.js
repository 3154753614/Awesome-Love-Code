"use strict";(self["webpackChunkfmeituan"]=self["webpackChunkfmeituan"]||[]).push([[657],{5965:function(e,t,n){function a(e){return{all:e=e||new Map,on:function(t,n){var a=e.get(t);a?a.push(n):e.set(t,[n])},off:function(t,n){var a=e.get(t);a&&(n?a.splice(a.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var a=e.get(t);a&&a.slice().map((function(e){e(n)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,n)}))}}}n.d(t,{A:function(){return l}});const o=a();var l=o},4671:function(e,t,n){n.d(t,{A:function(){return p}});var a=n(2360),o=n(9177);const l={class:"header"};function i(e,t,n,i,r,s){const u=(0,a.g2)("van-icon");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(u,{name:"arrow-left",class:"icon",onClick:i.toBack},null,8,["onClick"]),(0,a.Lk)("div",null,(0,o.v_)(n.title),1),n.edit?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"edit",onClick:t[0]||(t[0]=(...e)=>i.editClick&&i.editClick(...e))},(0,o.v_)(i.store.state.edit?"编辑":"完成"),1)):(0,a.Q3)("",!0)])}var r=n(5965),s=n(1890),u=n(9294),c=n(4510),d={props:["title","edit"],setup(){const e=(0,u.Pj)(),t=(0,c.rd)(),n=()=>{t.back()},a=()=>{e.state.cartList.length?(e.commit("EDIT"),r.A.emit("edit")):(0,s.P0)({message:"购物车中没有商品",icon:"like-o"})};return{editClick:a,toBack:n,store:e}}},f=n(9874);const m=(0,f.A)(d,[["render",i],["__scopeId","data-v-75140fff"]]);var p=m},657:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(2360);const o=e=>((0,a.Qi)("data-v-1e19583a"),e=e(),(0,a.jt)(),e),l={class:"login"},i=o((()=>(0,a.Lk)("div",{class:"img"},"某团",-1))),r={style:{margin:"16px"}};function s(e,t,n,o,s,u){const c=(0,a.g2)("Header"),d=(0,a.g2)("van-field"),f=(0,a.g2)("van-cell-group"),m=(0,a.g2)("van-button"),p=(0,a.g2)("van-form");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(c,{title:"注册"}),i,(0,a.bF)(p,{onSubmit:o.onSubmit},{default:(0,a.k6)((()=>[(0,a.bF)(f,{inset:""},{default:(0,a.k6)((()=>[(0,a.bF)(d,{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),(0,a.bF)(d,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),(0,a.Lk)("div",r,[(0,a.bF)(m,{round:"",block:"",type:"primary","native-type":"submit"},{default:(0,a.k6)((()=>[(0,a.eW)(" 注册 ")])),_:1}),(0,a.bF)(m,{round:"",block:"",type:"primary",onClick:o.toLogin,class:"register"},{default:(0,a.k6)((()=>[(0,a.eW)(" 有账号前往登录 ")])),_:1},8,["onClick"])])])),_:1},8,["onSubmit"])])}n(381);var u=n(4671),c=n(6408),d=n(4510),f=n(1890),m={components:{Header:u.A},setup(){let e=(0,d.rd)(),t=(0,c.Kh)({username:"",password:""});const n=t=>{(0,f.P0)("注册成功"),localStorage.setItem("userInfo",JSON.stringify(t)),e.push("/login")};let a=e=>{if(localStorage.userInfo){let t=JSON.parse(localStorage.userInfo);if(t["用户名"]===e["用户名"])return void(0,f.P0)("该账号已经被注册了");n(e)}else n(e)},o=()=>{e.push("/login")};return{...(0,c.QW)(t),onSubmit:a,toLogin:o}}},p=n(9874);const v=(0,p.A)(m,[["render",s],["__scopeId","data-v-1e19583a"]]);var g=v}}]);
//# sourceMappingURL=657.22e8fdfa.js.map