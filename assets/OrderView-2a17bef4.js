import{_ as v,m as h,k as b,l as d,e as _,f as u,j as e,s,u as n,F as y,q as w,x as i,t as l,z as x,C as f}from"./index-9450ee47.js";import{u as k}from"./useCouponStore-89e6371a.js";import{u as C}from"./useOrderStore-975fdda1.js";const V={data(){return{newOrderId:""}},methods:{...h(f,["getCart"]),...h(C,["postOrder"])},mounted(){},created(){this.getCart()},computed:{...b(f,["carts","totalBill","nowAllDiscount"]),...b(k,["cookieCouponDiscount"]),countFinal(){return this.totalBill-this.cookieCouponDiscount-this.nowAllDiscount},imgBase(){return"/2023-summer-sideProject-shuttle"}}},q={class:"bg-white"},B={class:"block-spacing-sm container"},D={"aria-label":"breadcrumb",class:"mb-3"},N={class:"breadcrumb"},F={class:"breadcrumb-item"},$={class:"breadcrumb-item"},j={class:"breadcrumb-item"},S=e("li",{class:"breadcrumb-item active","aria-current":"page"},"填寫訂單",-1),A=e("div",{class:"w-100 w-md-75 d-flex flex-column mx-auto my-5"},[e("ol",{class:"d-flex justify-content-around ps-0 fs-6 fw-bold"},[e("li",null,"訂單確認"),e("li",null,"填寫資料"),e("li",null,"訂單完成")]),e("div",{class:"progress border-dashed border-secondary"},[e("div",{class:"progress-bar",role:"progressbar",style:{width:"66.66%"},"aria-valuenow":"66.66","aria-valuemin":"0","aria-valuemax":"100"})])],-1),O={class:"row pt-lg-3"},T={class:"col-lg-6"},L={class:"d-flex flex-column h-100"},E=e("h4",{class:"text-center py-4"},[e("span",{class:"border-dashed-b pb-2"},"訂單內容")],-1),P={class:"table-responsive-sm"},M={class:"table align-middle table-white text-center fs-8 fs-lg-7"},R=e("thead",null,[e("tr",{class:"table-light bg-light"},[e("th",{scope:"col"},"預覽"),e("th",{scope:"col"},"課程名稱"),e("th",{scope:"col"},"人數"),e("th",{scope:"col"},"小計")])],-1),U=["src","alt"],z={class:"list-group rounded-2 bg-secondary"},I={class:"list-group-item pt-3 border-0 text-mellow d-flex justify-content-between"},G=e("span",{class:"fw-bold"},"目前總金額",-1),H={key:0,class:"list-group-item border-0 d-flex justify-content-between"},J=e("span",{class:"fw-bold"},"優惠券折抵",-1),K={class:"text-danger"},Q={class:"list-group-item border-0 d-flex justify-content-between"},W=e("span",{class:"fw-bold"},"滿額折抵",-1),X={class:"text-danger"},Y={class:"list-group-item pb-3 border-0 d-flex justify-content-between"},Z=e("span",{class:"fw-bold"},"折扣後金額",-1),ee=e("span",{class:"material-symbols-outlined icon-semibold"}," undo ",-1),se={class:"col-lg-6 mt-4 mt-lg-0"},te={class:"bg-primary-light rounded-2 px-5 py-4"},oe=e("h4",{class:"text-center pb-4"},[e("span",{class:"border-dashed-b pb-2"},"填寫資料")],-1),le={class:"form-floating mb-4"},ae=e("label",{for:"name",class:"required"},"如何稱呼",-1),ne={class:"form-floating mb-4"},ie=e("label",{for:"phone",class:"required"},"連絡電話",-1),re={class:"form-floating mb-4"},ce=e("label",{for:"email",class:"required"},"連絡信箱",-1),de={class:"form-floating mb-4"},_e=e("option",{value:"",disabled:"",hidden:""},"請選擇付款方式",-1),ue=e("option",{value:"creditCard"},"信用卡",-1),me=e("option",{value:"cash"},"現金",-1),pe=e("option",{value:"transfer"},"帳戶匯款",-1),he=e("option",{value:"linePay"},"Line Pay",-1),be=e("label",{for:"payment",class:"floating-select"},"付款方式",-1),fe={class:"form-floating pb-3 mb-5"},ge=e("label",{for:"remark"},"備註",-1),ve={class:"form-check mb-3"},ye=e("label",{class:"form-check-label required",for:"agreeNotice"}," 我已閱讀並同意 課程注意事項 ",-1),we={class:"text-danger fs-9 ms-2"},xe=e("button",{class:"btn btn-primary w-100 mb-3 fs-6"},"資料送出",-1);function ke(o,p,Ce,Ve,qe,m){const c=d("RouterLink"),a=d("VField"),r=d("ErrorMessage"),g=d("VForm");return _(),u("div",q,[e("div",B,[e("nav",D,[e("ol",N,[e("li",F,[s(c,{to:"/"},{default:n(()=>[i("首頁")]),_:1})]),e("li",$,[s(c,{to:"/products"},{default:n(()=>[i("購買課程")]),_:1})]),e("li",j,[s(c,{to:"/carts"},{default:n(()=>[i("購物車")]),_:1})]),S])]),A,e("div",O,[e("div",T,[e("div",L,[E,e("div",P,[e("table",M,[R,e("tbody",null,[(_(!0),u(y,null,w(o.carts,t=>(_(),u("tr",{key:t.id},[e("td",null,[e("img",{src:`${m.imgBase}${t.product.imageUrl}`,alt:`product${t.id}`,class:"img-fluid",style:{"max-width":"150px"}},null,8,U)]),e("td",null,l(t.product.title),1),e("td",null,l(t.qty),1),e("td",null,l(t.final_total),1)]))),128))])])]),e("ul",z,[e("li",I,[G,i("NT$ "+l(o.totalBill),1)]),o.cookieCouponDiscount?(_(),u("li",H,[J,e("span",K,"NT$ - "+l(o.cookieCouponDiscount),1)])):x("",!0),e("li",Q,[W,e("span",X,"NT$ - "+l(o.nowAllDiscount),1)]),e("li",Y,[Z,i("NT$ "+l(o.totalBill-o.cookieCouponDiscount-o.nowAllDiscount),1)])]),s(c,{class:"text-decoration-underline d-lg-inline-block mt-auto d-none",to:"/carts"},{default:n(()=>[ee,i(" 返回購物車 ")]),_:1})])]),e("div",se,[e("div",te,[oe,s(g,{novalidate:"",onSubmit:o.postOrder,class:"form-clear"},{default:n(()=>[e("div",le,[s(a,{name:"名稱",type:"text",rules:"required",class:"form-control fs-7",id:"name",placeholder:"name"}),ae,s(r,{name:"名稱"})]),e("div",ne,[s(a,{name:"連絡電話",type:"phone",rules:"required|numeric|length:10",class:"form-control fs-7",id:"phone",placeholder:"0912345678"}),ie,s(r,{name:"連絡電話"})]),e("div",re,[s(a,{name:"連絡信箱",type:"email",rules:"required|email",class:"form-control fs-7",id:"email",placeholder:"name@example.com"}),ce,s(r,{name:"連絡信箱"})]),e("div",de,[s(a,{name:"付款方式",rules:"required",as:"select",class:"form-select w-100 ps-3 lh-lg fs-7",id:"payment",placeholder:"付款方式"},{default:n(()=>[_e,ue,me,pe,he]),_:1}),be,s(r,{name:"付款方式"})]),e("div",fe,[s(a,{name:"備註",as:"textarea",type:"textarea",value:"",class:"form-control fs-7 text-wrap",id:"remark",placeholder:"備註欄位",style:{height:"116px"}}),ge]),e("div",ve,[s(a,{name:"同意",rules:"required",type:"checkbox",id:"agreeNotice",class:"form-check-input",value:"isAgree"}),ye,s(r,{name:"同意"},{default:n(({message:t})=>[e("span",we,l(t="請閱讀完後勾選"),1)]),_:1})]),s(a,{class:"d-none",name:"finalBill",type:"text",modelValue:m.countFinal,"onUpdate:modelValue":p[0]||(p[0]=t=>m.countFinal=t)},null,8,["modelValue"]),xe]),_:1},8,["onSubmit"])])])])])])}const Fe=v(V,[["render",ke]]);export{Fe as default};
