import{_ as $,y as _,z as h,e as g,f as s,g as l,k as u,i as t,l as f,x as p,F as b,j as v,A as y,G as D,s as r,t as n,v as d,u as w,B as T}from"./index-e2f8a130.js";import{u as x}from"./useActivitiesStore-3ee118fc.js";import{u as C}from"./useCartsStore-f1c6663b.js";import{u as k}from"./useCouponStore-9ed50821.js";import{B as N}from"./BackgroundBanner-ead12a97.js";const q={components:{BackgroundBanner:N},data(){return{bannerImg:"background-image: url(/banner/banner-carts.jpg)",couponCode:""}},methods:{..._(x,["getActivities"]),..._(C,["getCart","putCart","deleteAllCart","deleteCart","goToOrder"]),..._(k,["useCoupon"]),goToOrder(){this.$swal({title:`${this.allActive.title}`,html:`<p class='text-gray-400'>${this.allActive.description}</p>
            <p>目前金額再 <span class='text-danger'>NT$ ${this.countDifference} </span>可折抵 NT$ ${this.allActive.percentOff} </p>`,showDenyButton:!0,showCloseButton:!0,confirmButtonText:"修改訂單",denyButtonText:"下一步"}).then(o=>{o.isDenied&&this.$router.push("/order")})}},mounted(){},created(){this.getActivities(),this.getCart()},computed:{...h(x,["allActive","unlimitedActivities","numActivities","nowAllDiscount"]),...h(C,["carts","totalBill","nowAllDiscount"]),...h(k,["couponDiscount"]),countDifference(){const o=this.allActive.requiredPrice;return o-this.totalBill%o}}},V={class:"bg-white"},j={class:"block-spacing-sm container"},S={"aria-label":"breadcrumb",class:"mb-3"},I={class:"breadcrumb"},O={class:"breadcrumb-item"},U={class:"breadcrumb-item"},L=t("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車",-1),M=t("div",{class:"w-100 w-md-75 d-flex flex-column mx-auto my-5"},[t("ol",{class:"d-flex justify-content-around ps-0 fs-6 fw-bold"},[t("li",null,"訂單確認"),t("li",null,"填寫資料"),t("li",null,"訂單完成")]),t("div",{class:"progress border-dashed border-secondary"},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"33.33%"},"aria-valuenow":"33.33","aria-valuemin":"0","aria-valuemax":"100"})])],-1),P={class:"d-flex align-items-center mb-2"},z=t("span",{class:"material-symbols-outlined icon-semibold"}," undo ",-1),F={class:"table-responsive-sm"},R={class:"table align-middle table-white text-center fs-8 fs-lg-7"},E=t("thead",null,[t("tr",{class:"table-light bg-light"},[t("th",{scope:"col"}),t("th",{scope:"col"},[t("div",{class:"d-none d-md-flex flex-column"},"預覽")]),t("th",{scope:"col"},"課程名稱"),t("th",{scope:"col"},"價格"),t("th",{scope:"col"},"人數"),t("th",{scope:"col"},"小計"),t("th",{scope:"col"},[t("div",{class:"d-none d-md-flex flex-column px-md-3"},"適用優惠")])])],-1),G={scope:"row"},H=["onClick"],J=t("span",{class:"material-symbols-outlined icon-fill fs-5"}," delete_forever ",-1),K=[J],Q={class:"d-none d-md-flex flex-column align-items-center"},W=["src","alt"],X={class:"d-flex flex-column"},Y={key:0,class:"text-gray-400 text-decoration-line-through"},Z={class:"select-icon"},tt=["onUpdate:modelValue","onChange"],et=["value"],ot={class:"d-flex flex-column"},st={key:0,class:"text-gray-400 text-decoration-line-through"},lt={class:"fs-8 px-md-3"},nt={key:0,class:"d-none d-md-flex flex-column"},it={key:0},at={key:1},dt={key:0,class:"text-gray-200 fs-9 lh-lg fw-light"},rt={class:"row mb-4 pb-md-3 pt-2"},ct={class:"col-10 col-md-5"},ut={class:"input-group mb-3 mb-lg-4"},pt={class:"col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 ms-auto"},mt={class:"list-group rounded-2"},_t={class:"list-group-item border-0 text-mellow d-flex justify-content-between py-3"},ht=t("span",{class:"fw-bold"},"目前總金額",-1),ft={key:0,class:"list-group-item border-0 d-flex justify-content-between"},bt=t("span",{class:"fw-bold"},"優惠券折抵",-1),gt={class:"text-danger"},vt={key:1,class:"list-group-item border-0 d-flex justify-content-between"},yt=t("span",{class:"fw-bold"},"滿額折抵",-1),wt={class:"text-danger"},xt={key:2,class:"list-group-item pb-3 border-0 d-flex justify-content-between"},Ct=t("span",{class:"fw-bold"},"折扣後金額",-1),kt={class:"d-flex"};function At(o,i,Bt,$t,c,A){const B=g("BackgroundBanner"),m=g("RouterLink");return s(),l(b,null,[u(B,{bannerImg:c.bannerImg,class:"cart-banner"},null,8,["bannerImg"]),t("div",V,[t("div",j,[t("nav",S,[t("ol",I,[t("li",O,[u(m,{to:"/"},{default:f(()=>[r("首頁")]),_:1})]),t("li",U,[u(m,{to:"/products"},{default:f(()=>[r("購買課程")]),_:1})]),L])]),M,t("div",P,[u(m,{class:"text-decoration-underline d-inline-block me-auto",to:"/products"},{default:f(()=>[z,r(" 返回課程列表 ")]),_:1}),t("a",{class:"btn btn-sm btn-outline-primary px-3 fw-normal d-inline-block shadow-none",href:"#",onClick:i[0]||(i[0]=p(e=>o.deleteAllCart(),["prevent"]))}," 清空購物車 ")]),t("div",F,[t("table",R,[E,t("tbody",null,[(s(!0),l(b,null,v(o.carts,e=>(s(),l("tr",{key:e.id},[t("th",G,[t("a",{href:"#",onClick:p(a=>o.deleteCart(e.id),["prevent"])},K,8,H)]),t("td",null,[t("div",Q,[t("img",{src:e.product.imageUrl,alt:`product${e.id}`,class:"img-fluid",style:{"max-width":"150px"}},null,8,W)])]),t("td",null,n(e.product.title),1),t("td",null,[t("div",X,[e.product.origin_price!==e.product.price?(s(),l("span",Y,n(e.product.origin_price),1)):d("",!0),t("span",{class:w(`${e.product.origin_price!==e.product.price?"text-danger":!1}`)},n(e.product.price),3)])]),t("td",null,[t("div",Z,[y(t("select",{class:"form-select form-select-sm fs-lg-7 pe-4 border-secondary","onUpdate:modelValue":a=>e.qty=a,onChange:a=>o.putCart(e.id,parseInt(e.qty))},[(s(!0),l(b,null,v(e.product.info.capacity-e.product.info.studentNum,a=>(s(),l("option",{value:a,key:a},n(a),9,et))),128))],40,tt),[[T,e.qty]])])]),t("td",null,[t("div",ot,[e.final_total!==e.total?(s(),l("span",st,n(e.total),1)):d("",!0),t("span",{class:w(`${e.final_total!==e.total?"text-danger":!1}`)},n(e.final_total),3)])]),t("td",lt,[e.product.state.promotion?(s(),l("div",nt,[o.unlimitedActivities[e.product.state.promotion]?(s(),l("div",it,n(o.unlimitedActivities[e.product.state.promotion].title),1)):(s(),l("div",at,[r(n(o.numActivities[e.product.state.promotion].title)+" ",1),e.qty<o.numActivities[e.product.state.promotion].requiredNum?(s(),l("div",dt,n(o.numActivities[e.product.state.promotion].description),1)):d("",!0)]))])):d("",!0)])]))),128))])])]),t("div",rt,[t("div",ct,[t("div",ut,[y(t("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>c.couponCode=e),type:"text",class:"form-control fs-7",placeholder:"請輸入折扣碼","aria-label":"coupon number","aria-describedby":"coupon-btn"},null,512),[[D,c.couponCode]]),t("button",{class:"btn btn-secondary shadow-none py-2 fs-7",type:"button",id:"coupon-btn",onClick:i[2]||(i[2]=p(e=>o.useCoupon(c.couponCode),["prevent"]))}," 確認使用 ")])]),t("div",pt,[t("ul",mt,[t("li",_t,[ht,r("NT$ "+n(o.totalBill),1)]),o.couponDiscount?(s(),l("li",ft,[bt,t("span",gt,"NT$ - "+n(o.couponDiscount),1)])):d("",!0),o.allActive.requiredPrice<=o.totalBill?(s(),l("li",vt,[yt,t("span",wt,"NT$ - "+n(o.nowAllDiscount),1)])):d("",!0),o.couponDiscount||o.allActive.requiredPrice<=o.totalBill?(s(),l("li",xt,[Ct,r("NT$ "+n(o.totalBill-o.couponDiscount-o.nowAllDiscount),1)])):d("",!0)])])]),t("div",kt,[t("button",{class:"btn btn-primary fs-7 fs-lg-6 fw-normal w-75 w-md-50 w-lg-25 mx-auto",onClick:i[3]||(i[3]=p(e=>A.goToOrder(),["prevent"]))}," 訂單確認 ")])])])],64)}const jt=$(q,[["render",At]]);export{jt as default};
