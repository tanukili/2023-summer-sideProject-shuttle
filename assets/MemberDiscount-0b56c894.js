import{_ as u,m as b,a as f,r as d,o,c as a,b as s,F as _,e as x,f as n,l as p,g as m,d as i,t as c}from"./index-77334642.js";import{B as k}from"./BackToTop-1bd7753e.js";const B={components:{BackToTop:k},data(){return{activies:null}},computed:{...b(p,["jsonData"])},methods:{...f(p,["getJsonData"])},watch:{jsonData(l){this.activies=Object.values(l).map(t=>Object.values(t).length===1?Object.values(t)[0]:t)}},mounted(){this.getJsonData("activities")}},D={class:"px-5 pb-5 bg-white"},T={class:"fs-7 fs-lg-6 bg-light p-3 mb-4 mb-md-7"},w={class:"row gx-2 gx-md-3 mx-2"},$={class:"col-12 col-sm-5"},j=["src"],v={class:"col-sm-7"},N={class:"row gx-0 gy-2 gy-sm-0 flex-sm-column h-100"},O={class:"col-12 my-auto text-center"},S={class:"fs-7 fs-lg-6 d-none d-sm-block mb-1 mb-lg-2"},V={class:"fs-sm-8 fs-lg-7"},C={class:"col-12 text-end"},F=s("span",{class:"icon-e icon-east"},null,-1);function J(l,t,A,E,h,L){const r=d("router-link"),g=d("BackToTop");return o(),a(_,null,[s("div",D,[(o(!0),a(_,null,x(h.activies,e=>(o(),a("div",{class:"py-7 border-dashed-b border-gray-100",key:e.title},[s("h2",T,[n(r,{to:`${e.page_path?e.page_path:"/"}`},{default:m(()=>[i(c(e.title),1)]),_:2},1032,["to"])]),s("div",w,[s("div",$,[s("img",{src:`${e["image-sm"].replace("/","")}`,alt:"優惠封面照",class:"rounded-2",style:{"max-height":"180px"}},null,8,j)]),s("div",v,[s("div",N,[s("div",O,[s("h3",S,c(e.badge?e.badge:"全館優惠"),1),s("p",V,c(e.description),1)]),s("div",C,[n(r,{class:"btn btn-sm btn-primary-light fs-8 fs-xl-7 shadow-none px-lg-3 py-lg-2",to:`${e.page_path?e.page_path:"/"}`},{default:m(()=>[i(" 了解更多 "),F]),_:2},1032,["to"])])])])])]))),128))]),n(g)],64)}const z=u(B,[["render",J]]);export{z as default};