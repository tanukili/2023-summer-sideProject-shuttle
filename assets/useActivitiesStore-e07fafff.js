import{C as i,D as e,E as s}from"./index-3171b70c.js";const a="https://two023-summer-sideproject-shuttle.onrender.com",n=i("activities",{state:()=>({allActive:{},numActivities:{},unlimitedActivities:{}}),actions:{getActivities(){e.get(`${a}/activities`).then(t=>{this.allActive=t.data.allActive,this.numActivities=t.data.numActivities,this.unlimitedActivities=t.data.unlimitedActivities}).catch(()=>{s.fire("無法取得優惠資料")})}}});export{n as u};