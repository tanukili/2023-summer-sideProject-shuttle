import{_ as c,e as t,f as l,g as _,k as i,l as n,F as u,i as e,s as p}from"./index-76befa10.js";const v={data(){return{isLoading:!1}},mounted(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1200)}},f=e("div",{class:"loadingio-spinner-pulse-1iwbsd99pb"},[e("div",{class:"ldio-dcvhkke5k"},[e("div"),e("div"),e("div")])],-1),g=e("div",{class:"about"},[e("h1",null,"消息列表")],-1);function m(k,s,L,h,o,w){const a=t("LoadingOverlay"),d=t("router-link");return l(),_(u,null,[i(a,{active:o.isLoading,"onUpdate:active":s[0]||(s[0]=r=>o.isLoading=r)},{default:n(()=>[f]),_:1},8,["active"]),g,i(d,{to:"/new"},{default:n(()=>[p("了解更多")]),_:1})],64)}const N=c(v,[["render",m]]);export{N as default};
