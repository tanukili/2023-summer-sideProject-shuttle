import{q as n,p as i,s as a}from"./index-77334642.js";const r="https://sideproject-shuttle.onrender.com",d=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,"$1"),f=n("favorite",{state:()=>({favorites:[],favoritesObj:{}}),getters:{},actions:{toggleFavorite(e){const{alertstyles:s,baseContent:t}=i();if(this.favorites.indexOf(e)!==-1){const o=this.favoritesObj[e];this.deleteFavorite(o)}else{const o={productId:e,userId:d};a.post(`${r}/favorites`,o).then(()=>{this.getFavorites(),s.toast.fire({...t("成功加入收藏")})})}},deleteFavorite(e){const{alertstyles:s,baseContent:t}=i();a.delete(`${r}/favorites/${e}`).then(()=>{this.getFavorites(),s.toast.fire({...t("已移除收藏")})})},getFavorites(){a.get(`${r}/favorites?userId=${d}`).then(e=>{const{data:s}=e;s.forEach(t=>{this.favoritesObj[t.productId]=t.id}),this.favorites=s.map(t=>t.productId)})}}});export{f as u};