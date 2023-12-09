import{_,y as h,z as l,e as u,f as m,g as p,i as s,k as c,l as i,t as o,s as r}from"./index-e2f8a130.js";import{u as b}from"./useCartsStore-f1c6663b.js";import{u as g}from"./useCouponStore-9ed50821.js";import{u as a}from"./useOrderStore-db16028b.js";const n=document.cookie.replace(/(?:(?:^|.*;\s*)newOrderId\s*=\s*([^;]*).*$)|^.*$/,"$1"),f={data(){return{id:""}},methods:{...h(a,["getOrder"])},mounted(){n&&this.getOrder(n)},computed:{...l(a,["orderInfo"]),...l(b,["totalBill","nowAllDiscount"]),...l(g,["cookieCouponDiscount"]),createDate(){const t=new Date(this.orderInfo.create_at*1e3);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`},countFinal(){return this.totalBill-this.cookieCouponDiscount-this.nowAllDiscount}}},v={class:"bg-white"},w={class:"block-spacing-sm container"},x={"aria-label":"breadcrumb",class:"mb-3"},y={class:"breadcrumb"},I={class:"breadcrumb-item"},k={class:"breadcrumb-item"},D={class:"breadcrumb-item"},$=s("li",{class:"breadcrumb-item active","aria-current":"page"},"訂單完成",-1),C=s("div",{class:"w-100 w-md-75 d-flex flex-column mx-auto my-5"},[s("ol",{class:"d-flex justify-content-around ps-0 fs-6 fw-bold"},[s("li",null,"訂單確認"),s("li",null,"填寫資料"),s("li",null,"訂單完成")]),s("div",{class:"progress border-dashed border-secondary"},[s("div",{class:"progress-bar",role:"progressbar",style:{width:"100.5%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})])],-1),B={class:"row justify-content-center"},O=s("div",{class:"modal-body text-center fs-4 fs-md-3 py-3"},"訂單已成立",-1),S={class:"col col-md-9 col-lg-7 col-xxl-6 mt-5"},N={class:"bg-secondary rounded-2 px-5 py-4 shadow"},A=s("h4",{class:"text-center py-4"},[s("span",{class:"border-dashed-b pb-2"},"訂單資訊")],-1),F={class:"list-group list-group-flush pt-2 pb-4"},V={class:"list-group-item border-light"},j={class:"row"},E=s("h5",{class:"col fs-6 mb-0 text-center text-center"}," 成立日期 ",-1),L={class:"col-7 lh-lg"},R={class:"list-group-item border-light"},T={class:"row"},z=s("h5",{class:"col fs-6 mb-0 text-center"},"付款狀態",-1),M={class:"col-7 lh-lg"},Y={class:"list-group-item border-light"},q={class:"row"},G=s("h5",{class:"col fs-6 mb-0 text-center"},"應付金額",-1),H={class:"col-7 lh-lg"},J={class:"list-group-item border-light"},K={class:"row"},P=s("h5",{class:"col fs-6 mb-0 text-center"},"訂單編號",-1),Q={class:"col-7 lh-lg"},U={class:"list-group-item border-light"},W={class:"row"},X=s("h5",{class:"col fs-6 mb-0 text-center"},"訂購者",-1),Z={class:"col-7 lh-lg"},ss={class:"list-group-item border-light"},ts={class:"row"},os=s("h5",{class:"col fs-6 mb-0 text-center"},"連絡電話",-1),es={class:"col-7 lh-lg"},ls={class:"list-group-item border-light"},cs={class:"row"},is=s("h5",{class:"col fs-6 mb-0 text-center"},"聯絡信箱",-1),rs={class:"col-7 lh-lg"},ds={class:"list-group-item border-light"},as={class:"row"},ns=s("h5",{class:"col fs-6 mb-0 text-center"},"訂單備註",-1),_s={class:"col-7 lh-lg"};function hs(t,us,ms,ps,bs,d){const e=u("RouterLink");return m(),p("div",v,[s("div",w,[s("nav",x,[s("ol",y,[s("li",I,[c(e,{to:"/"},{default:i(()=>[r("首頁")]),_:1})]),s("li",k,[c(e,{to:"/products"},{default:i(()=>[r("購買課程")]),_:1})]),s("li",D,[c(e,{to:"/carts"},{default:i(()=>[r("購物車")]),_:1})]),$])]),C,s("div",B,[O,s("div",S,[s("div",N,[A,s("ul",F,[s("li",V,[s("div",j,[E,s("div",L,[s("p",null,o(d.createDate),1)])])]),s("li",R,[s("div",T,[z,s("div",M,[s("p",null,o(t.orderInfo.is_paid?"付款完成":"未付款"),1)])])]),s("li",Y,[s("div",q,[G,s("div",H,[s("p",null,"NT$ "+o(d.countFinal),1)])])]),s("li",J,[s("div",K,[P,s("div",Q,[s("p",null,o(t.orderInfo.id),1)])])]),s("li",U,[s("div",W,[X,s("div",Z,[s("p",null,o(t.orderInfo.user.name),1)])])]),s("li",ss,[s("div",ts,[os,s("div",es,[s("p",null,o(t.orderInfo.user.tel),1)])])]),s("li",ls,[s("div",cs,[is,s("div",rs,[s("p",null,o(t.orderInfo.user.email),1)])])]),s("li",ds,[s("div",as,[ns,s("div",_s,[s("p",null,o(t.orderInfo.message||"無"),1)])])])])])])])])])}const xs=_(f,[["render",hs]]);export{xs as default};
