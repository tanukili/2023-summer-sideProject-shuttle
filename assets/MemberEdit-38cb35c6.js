import{_ as c,e as i,f as l,j as s,t}from"./index-9450ee47.js";const r="https://sideproject-shuttle.onrender.com",n=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,"$1"),_={data(){return{userInfo:{}}},methods:{getUserInfo(){this.axios(`${r}/users/${n}`).then(e=>{this.userInfo=e.data})}},mounted(){this.getUserInfo()}},d={class:"bg-white p-4 pb-5 rounded"},h=s("h2",{class:"title fs-4 text-primary mb-4"},[s("span",{class:"border-primary"},"會員資料")],-1),a={class:"row justify-content-center"},u={class:"col-5"},p={class:"list-group list-group-flush"},f={class:"list-group-item border-white"},m={class:"row"},b=s("h3",{class:"col-4 fs-7 mb-0"},"會員名稱",-1),g={class:"col-8"},w={class:"list-group-item border-white"},I={class:"row"},v=s("h3",{class:"col-4 fs-7 mb-0"},"手機號碼",-1),x={class:"col-8"},y={class:"list-group-item border-white"},j={class:"row"},k=s("h3",{class:"col-4 fs-7 mb-0"},"電子信箱",-1),B={class:"col-8"},E=s("li",{class:"list-group-item border-white"},[s("div",{class:"row"},[s("h3",{class:"col-4 fs-7 mb-0"},"密碼"),s("p",{class:"col-8"},"**********")])],-1),U={class:"col-5"},$={class:"list-group list-group-flush"},D={class:"list-group-item border-white"},M={class:"row"},N=s("h3",{class:"col-4 fs-7 mb-0"},"性別",-1),S={class:"col-8"},V={class:"list-group-item border-white"},q={class:"row"},z=s("h3",{class:"col-4 fs-7 mb-0"},"生日",-1),A={class:"col-8"},C=s("button",{class:"btn btn-primary mt-5 align-self-center w-25",type:"button"}," 變更資料 ",-1);function F(e,G,H,J,o,K){return i(),l("div",d,[h,s("div",a,[s("div",u,[s("ul",p,[s("li",f,[s("div",m,[b,s("p",g,t(o.userInfo.name),1)])]),s("li",w,[s("div",I,[v,s("p",x,t(o.userInfo.phone),1)])]),s("li",y,[s("div",j,[k,s("p",B,t(o.userInfo.email),1)])]),E])]),s("div",U,[s("ul",$,[s("li",D,[s("div",M,[N,s("p",S,t(o.userInfo.sex?o.userInfo.sex:"未設定"),1)])]),s("li",V,[s("div",q,[z,s("p",A,t(o.userInfo.sex?o.userInfo.birthday:"未設定"),1)])])])]),C])])}const O=c(_,[["render",F]]);export{O as default};
