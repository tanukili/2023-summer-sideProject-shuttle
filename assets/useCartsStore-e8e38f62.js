import{C as u,E as s,D as i}from"./index-3171b70c.js";const r="https://ec-course-api.hexschool.io/v2/",n="2023shuttle",p=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1"),m=u("carts",{state:()=>({carts:[],totalBill:0,nowAllDiscount:0}),actions:{addToCart(t,e,a,o){const l={data:{product_id:t,qty:e}},c=this.checkQuota(e,a);p?c||i.post(`${r}api/${n}/cart`,l).then(()=>{this.checkoutNow(o)}).catch(h=>{s.fire(`問題${h.response.status}，抱歉請洽客服`)}):(s.fire("請先登入註冊"),this.router.push({name:"login"}))},checkQuota(t,e){return t>=e?(s.fire({title:"目前名額不足，請洽客服",html:'<p class="mb-2"><span class="icon-fill material-symbols-outlined align-bottom"> call </span>：<a href="tel:0912345678" class="link-hover">0912345678</a></p><p><span class="icon-fill material-symbols-outlined align-bottom"> mail </span>：<a href="mailto:Shuttle2013@gmail.com" class="link-hover">Shuttle2013@gmail.com</a></p>'}),!0):!1},checkoutNow(t){t?this.router.push({name:"carts"}):s.fire({icon:"success",title:"成功加入購物車",showDenyButton:!0,showCloseButton:!0,confirmButtonText:"繼續購物",denyButtonText:"立即結帳",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutDown"}}).then(e=>{e.isConfirmed?this.router.push({name:"products"}):e.isDenied&&this.router.push({name:"carts"})})},getCart(){i.get(`${r}api/${n}/cart`).then(t=>{this.carts=t.data.data.carts,this.carts.forEach(a=>{const{promotion:o}=a.product.state;o==="2023-spring"&&a.qty>=2&&(a.final_total=Math.round(a.total*.85))}),this.totalBill=this.carts.reduce((a,o)=>a+o.final_total,0);const e=Math.floor(this.totalBill/3e3);this.nowAllDiscount=300*e}).catch(t=>t.response)},putCart(t,e){const a={data:{product_id:t,qty:e}};i.put(`${r}api/${n}/cart/${t}`,a).then(()=>{this.getCart()}).catch(o=>o.response)},deleteAllCart(){i.delete(`${r}api/${n}/carts`).then(t=>{s.fire({title:t.data.message,didClose:()=>{this.getCart()}})}).catch(t=>{s.fire({icon:"error",title:t.response.data.message})})},deleteCart(t){i.delete(`${r}api/${n}/cart/${t}`).then(e=>{s.fire({title:e.data.message,didClose:()=>{this.getCart()}})}).catch(e=>{s.fire({icon:"error",title:e.response.data.message})})}}});export{m as u};