import{q as f,p as i,s as l,x as m,l as n}from"./index-686eedae.js";const b=f("carts",{state:()=>({hexApi:"https://ec-course-api.hexschool.io/v2/",apiPath:"2023shuttle",alertstyles:i().alertstyles}),getters:{},actions:{addToCart(t,e,a,s){const{alertstyles:o,baseContent:r}=i(),c={data:{product_id:t,qty:e}},h=this.checkQuota(e,a);document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1")?h||l.post(`${this.hexApi}api/${this.apiPath}/cart`,c).then(()=>{this.checkoutNow(s)}).catch(u=>{o.alert.fire({...r(`問題${u.response.status}，抱歉請洽客服`,2)})}):(o.alert.fire({...r("請先登入註冊",3)}),this.router.push({name:"login"}))},checkQuota(t,e){return t>=e?(m.fire({title:"目前名額不足，請洽客服",showConfirmButton:!1,icon:"warning",html:'<p class="mb-2"><span class="icon-fill material-symbols-outlined align-bottom"> call </span>：<a href="tel:0912345678" class="link-hover">0912345678</a></p><p><span class="icon-fill material-symbols-outlined align-bottom"> mail </span>：<a href="mailto:Shuttle2013@gmail.com" class="link-hover">Shuttle2013@gmail.com</a></p>'}),!0):!1},checkoutNow(t){const{alertstyles:e,baseContent:a,btns:s}=i();t?this.router.push({name:"carts"}):e.alert_btns.fire({...a("成功加入購物車",1,"繼續購物"),...s("立即結帳")}).then(o=>{o.isConfirmed?this.router.push({name:"products"}):o.isDenied&&this.router.push({name:"carts"})})},putCart(t,e){const a={data:{product_id:t,qty:e}};l.put(`${this.hexApi}api/${this.apiPath}/cart/${t}`,a).then(()=>{n().getFontData("cart")}).catch(s=>s.response)},deleteAllCart(){const{alertstyles:t,baseContent:e}=i();l.delete(`${this.hexApi}api/${this.apiPath}/carts`).then(()=>{t.toast.fire({...e("成功清空購物車！")}),n().getFontData("cart")}).catch(a=>{t.toast_danger.fire({...e(a.response.data.message)})})},deleteCart(t){const{alertstyles:e,baseContent:a}=i();l.delete(`${this.hexApi}api/${this.apiPath}/cart/${t}`).then(()=>{e.toast.fire({...a("刪除成功！")}),n().getFontData("cart")}).catch(s=>{e.toast_danger.fire({...a(s.response.data.message)})})},countCart(t,e,a){const{cartData:s}=n(),o=s.reduce((h,p)=>h+p.subtotal,0),r=Math.floor(o/e)*a,c=o-r-t;return{sumSubtotals:o,couponDiscount:t,fullDiscount:r,finalBill:c}}}});export{b as u};
