import{C as c,D as n,E as s}from"./index-e2f8a130.js";const u="https://two023-summer-sideproject-shuttle.onrender.com",i=c("coupon",{state:()=>({couponDiscount:0}),getters:{cookieCouponDiscount(){return document.cookie.replace(/(?:(?:^|.*;\s*)couponDiscount\s*=\s*([^;]*).*$)|^.*$/,"$1")}},actions:{useCoupon(o){n.get(`${u}/coupons/${o}`).then(t=>{const e=t.data;this.couponDiscount+=t.data.discount,document.cookie=`couponDiscount=${this.couponDiscount}; max-age=86400;Secure`,e.is_used=!0,this.putCouponState(o,e)}).catch(()=>{s.fire({icon:"error",title:"優惠券使用失敗"})})},putCouponState(o,t){n.put(`${u}/coupons/${o}`,t).then(e=>{s.fire({icon:"success",title:`成功套用「${e.data.title}」`,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutDown"}}),this.couponCode=""})}}});export{i as u};
