import{_ as n,e as t,f as p,g as b,k as a,l as e,i as s,F as m,m as u,s as r}from"./index-76befa10.js";const f={data(){return{isLoading:!1}},mounted(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1200)}},g=s("div",{class:"loadingio-spinner-pulse-1iwbsd99pb"},[s("div",{class:"ldio-dcvhkke5k"},[s("div"),s("div"),s("div")])],-1),_={class:"bg-white"},v={class:"block-spacing-sm container"},h={"aria-label":"breadcrumb",class:"mb-3"},y={class:"breadcrumb mb-0 fw-semibold"},w={class:"breadcrumb-item"},x={class:"breadcrumb-item"},k=s("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車",-1),L=s("div",{class:"w-100 w-md-75 d-flex flex-column mx-auto my-5"},[s("ol",{class:"d-flex justify-content-around ps-0"},[s("li",null,"訂單確認"),s("li",null,"填寫資料"),s("li",null,"訂單完成")]),s("div",{class:"progress border-dashed border-secondary"},[s("div",{class:"progress-bar",role:"progressbar",style:{width:"100.5%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})])],-1),N=u('<div class="row justify-content-center"><div class="modal-body text-center fs-4 fs-md-3 py-3"><span class="material-symbols-outlined icon-semibold fs-3 align-middle lh-lg me-2 text-success"> task_alt </span>訂單已成立 </div><div class="col-6 mt-5"><div class="bg-secondary px-5 py-5"><h4 class="text-center pb-4 mb-3"><span class="border-dashed-b border-light pb-2">訂單資訊</span></h4><ul class="list-group list-group-flush fs-8 pt-2 pb-4"><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">訂單成立日期</span> 2023.08.19 </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">付款狀態</span> 未付款 </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">付款方式</span> 信用卡 </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">應付金額</span> NT$ 6,395 </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">訂單編號</span> ABCD0230819 </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">姓名</span> 陳曉明 </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">手機</span> 0912345678 </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">信箱</span> email@mail.com </li><li class="list-group-item border-0 bg-secondary fs-6"><span class="fw-bold">備註</span> 無 </li></ul></div></div></div>',1);function B(V,l,C,O,o,T){const d=t("LoadingOverlay"),i=t("RouterLink");return p(),b(m,null,[a(d,{active:o.isLoading,"onUpdate:active":l[0]||(l[0]=c=>o.isLoading=c)},{default:e(()=>[g]),_:1},8,["active"]),s("div",_,[s("div",v,[s("nav",h,[s("ol",y,[s("li",w,[a(i,{to:"/"},{default:e(()=>[r("首頁")]),_:1})]),s("li",x,[a(i,{to:"/products"},{default:e(()=>[r("購買課程")]),_:1})]),k])]),L,N])])],64)}const j=n(f,[["render",B]]);export{j as default};
