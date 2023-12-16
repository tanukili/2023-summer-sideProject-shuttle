import{f as d}from"./flatpickr-cbaef1e5.js";import{_,e as u,f as a,j as o,A as s,D as n,B as m,L as r,i as P,F as w,q as k,t as i,v}from"./index-c02af96d.js";const p="https://ec-course-api.hexschool.io/v2/",f="2023shuttle",h={headers:{Authorization:document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1")}},g={data(){return{products:[],newProduct:{title:"",category:"",origin_price:null,price:null,unit:"堂",is_enabled:1,info:{classes:null,dateTime:{date:"",from:"",to:""},capacity:null,studentNum:0,tags:[],skills:"",summary:"",detail:{perSpendTime:null,size:"",study:[]}},state:{nowStatus:"準備中",promotion:[]},imageUrl:"",imagesUrl:[]}}},methods:{getProuducts(){this.axios.get(`${p}api/${f}/admin/products`,h).then(c=>{this.products=c.data.products,console.log(this.products)}).catch(c=>{console.log(c.response)})},addProdct(){const c={data:{...this.newProduct}};this.axios.post(`${p}api/${f}/admin/product`,c,h).then(t=>{console.log(t.data),this.getProuducts()}).catch(t=>{console.log(t.response)})},deleteProdct(c){this.axios.delete(`${p}api/${f}/admin/product/${c}`,h).then(t=>{console.log(t.data),this.getProuducts()}).catch(t=>{console.log(t.response)})}},mounted(){this.getProuducts(),this.flatpickr=new d(this.$refs.flatpickrDate,{dateFormat:"Y-m-d",minDate:"today",mode:"multiple"}),this.flatpickr=new d(this.$refs.flatpickrFrom,{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0,minTime:"11:00"}),this.flatpickr=new d(this.$refs.flatpickrTo,{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0,minTime:"11:00",maxTime:"21:00"})}},y={class:"about"},U={class:"container"},x=o("h1",null,"後台產品列表",-1),V={class:"mb-3"},T=o("label",{for:"1",class:"form-label"},"課程標題",-1),S={class:"mb-3"},D=o("label",{for:"2",class:"form-label"},"定價",-1),F={class:"mb-3"},N=o("label",{for:"2",class:"form-label"},"售價",-1),z={class:"mb-3"},A=o("label",{for:"3",class:"form-label"},"開課日期",-1),B=o("small",null,"可複選",-1),C=o("label",{for:"3",class:"form-label"},"上課時間",-1),M={class:"d-flex"},j={class:"mb-3"},H=o("label",{for:"3.5",class:"form-label"},"課堂數",-1),L={class:"mb-3"},q=o("label",{for:"3.75",class:"form-label"},"名額",-1),E={class:"mb-3"},I=o("label",{for:"4",class:"form-label"},"使用技巧",-1),Y={class:"mb-3"},G=o("label",{for:"5",class:"form-label"},"推薦對象",-1),J=o("option",{value:"體驗",selected:""},"體驗",-1),K=o("option",{value:"初階"},"初階",-1),O=o("option",{value:"進階"},"進階",-1),Q=o("option",{value:"輔助"},"輔助",-1),R=[J,K,O,Q],W={class:"mb-3"},X=o("label",{for:"6",class:"form-label"},"課程簡介",-1),Z={class:"mb-3"},$=o("h6",null,"課程描述",-1),oo={class:"d-flex"},eo=o("label",{for:"7",class:"form-label"},"單堂課程時數",-1),to=o("label",{for:"7.5",class:"form-label"},"成品大小(單位cm)",-1),lo=o("label",{for:"7.75",class:"form-label"},"學習內容",-1),so=o("small",null,"可複選",-1),no=v('<optgroup label="前置作業"><option value="線材計算與整經">線材計算與整經</option><option value="圖案設計">圖案設計</option></optgroup><optgroup label="綴織"><option value="認識織框">認識織框</option><option value="織框製作">織框製作</option></optgroup><optgroup label="收尾"><option value="收邊方法">收邊方法</option></optgroup>',3),io=[no],co={class:"mb-3 form-check form-check-inline"},ro=o("label",{class:"form-check-label",for:"8"},"入門",-1),uo={class:"mb-3 form-check form-check-inline"},ao=o("label",{class:"form-check-label",for:"9"},"綴織",-1),mo={class:"mb-3 form-check form-check-inline"},po=o("label",{class:"form-check-label",for:"10"},"一日",-1),fo={class:"mb-3 form-check form-check-inline"},ho=o("label",{class:"form-check-label",for:"11"},"兩日",-1),bo={class:"mb-3 form-check form-check-inline"},_o=o("label",{class:"form-check-label",for:"12"},"四日",-1),Po={class:"mb-3 form-check form-check-inline"},wo=o("label",{class:"form-check-label",for:"13"},"簡易織布機",-1),ko={class:"mb-3 form-check form-check-inline"},vo=o("label",{class:"form-check-label",for:"14"},"秋冬",-1),go={class:"mb-3"},yo=o("label",{for:"15",class:"form-label"},"適用優惠",-1),Uo=o("option",{value:"promotion01"},"秋冬早鳥",-1),xo=o("option",{value:"promotion02"},"周年慶",-1),Vo=o("option",{value:"promotion03"},"夏季折扣",-1),To=[Uo,xo,Vo],So={class:"mb-3"},Do=o("label",{for:"16",class:"form-label"},"課程圖片",-1),Fo={class:"table"},No=o("thead",null,[o("tr",null,[o("th",{scope:"col"},"ID"),o("th",{scope:"col"},"類別"),o("th",{scope:"col"},"課程名稱"),o("th",{scope:"col"},"上課日期"),o("th",{scope:"col"},"堂數"),o("th",{scope:"col"},"定價"),o("th",{scope:"col"},"售價"),o("th",{scope:"col"},"報名狀況"),o("th",{scope:"col"},"剩餘名額"),o("th",{scope:"col"},"報名人數"),o("th",{scope:"col"},"開課狀況"),o("th",{scope:"col"})])],-1),zo={scope:"row"},Ao=o("td",null,[o("button",{type:"button",class:"btn btn-secondary btn-sm"}," 詳細 ")],-1);function Bo(c,t,Co,Mo,l,b){return u(),a("div",y,[o("div",U,[x,o("form",null,[o("div",V,[T,s(o("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.newProduct.title=e),type:"text",class:"form-control",id:"1"},null,512),[[n,l.newProduct.title]])]),o("div",S,[D,s(o("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.newProduct.origin_price=e),type:"number",class:"form-control",id:"2"},null,512),[[n,l.newProduct.origin_price]])]),o("div",F,[N,s(o("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.newProduct.price=e),type:"number",class:"form-control",id:"2"},null,512),[[n,l.newProduct.price]])]),o("div",z,[A,B,s(o("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.newProduct.info.dateTime.data=e),ref:"flatpickrDate",class:"form-control",id:"3"},null,512),[[n,l.newProduct.info.dateTime.data]]),C,o("div",M,[s(o("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.newProduct.info.dateTime.from=e),ref:"flatpickrFrom",class:"form-control",id:"3"},null,512),[[n,l.newProduct.info.dateTime.from]]),s(o("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>l.newProduct.info.dateTime.to=e),ref:"flatpickrTo",class:"form-control",id:"3"},null,512),[[n,l.newProduct.info.dateTime.to]])])]),o("div",j,[H,s(o("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>l.newProduct.info.classes=e),type:"number",class:"form-control",id:"3.5"},null,512),[[n,l.newProduct.info.classes]])]),o("div",L,[q,s(o("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>l.newProduct.info.capacity=e),type:"number",class:"form-control",id:"3.75"},null,512),[[n,l.newProduct.info.capacity]])]),o("div",E,[I,s(o("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>l.newProduct.info.skills=e),type:"text",class:"form-control",id:"4"},null,512),[[n,l.newProduct.info.skills]])]),o("div",Y,[G,s(o("select",{"onUpdate:modelValue":t[9]||(t[9]=e=>l.newProduct.category=e),class:"form-select",id:"5"},R,512),[[m,l.newProduct.category]])]),o("div",W,[X,s(o("input",{"onUpdate:modelValue":t[10]||(t[10]=e=>l.newProduct.info.summary=e),type:"textarea",class:"form-control",id:"6"},null,512),[[n,l.newProduct.info.summary]])]),o("div",Z,[$,o("div",oo,[o("div",null,[eo,s(o("input",{"onUpdate:modelValue":t[11]||(t[11]=e=>l.newProduct.info.detail.perSpendTime=e),type:"number",class:"form-control",id:"7"},null,512),[[n,l.newProduct.info.detail.perSpendTime]])]),o("div",null,[to,s(o("input",{"onUpdate:modelValue":t[12]||(t[12]=e=>l.newProduct.info.detail.size=e),type:"text",class:"form-control",id:"7.5"},null,512),[[n,l.newProduct.info.detail.size]])]),o("div",null,[lo,so,s(o("select",{"onUpdate:modelValue":t[13]||(t[13]=e=>l.newProduct.info.detail.study=e),class:"form-select",id:"7.75",multiple:""},io,512),[[m,l.newProduct.info.detail.study]])])])]),o("div",null,[o("div",co,[s(o("input",{"onUpdate:modelValue":t[14]||(t[14]=e=>l.newProduct.info.tags=e),type:"checkbox",value:"入門",class:"form-check-input",id:"8"},null,512),[[r,l.newProduct.info.tags]]),ro]),o("div",uo,[s(o("input",{"onUpdate:modelValue":t[15]||(t[15]=e=>l.newProduct.info.tags=e),type:"checkbox",value:"綴織",class:"form-check-input",id:"9"},null,512),[[r,l.newProduct.info.tags]]),ao]),o("div",mo,[s(o("input",{"onUpdate:modelValue":t[16]||(t[16]=e=>l.newProduct.info.tags=e),type:"checkbox",value:"一日",class:"form-check-input",id:"10"},null,512),[[r,l.newProduct.info.tags]]),po]),o("div",fo,[s(o("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>l.newProduct.info.tags=e),type:"checkbox",value:"兩日",class:"form-check-input",id:"11"},null,512),[[r,l.newProduct.info.tags]]),ho]),o("div",bo,[s(o("input",{"onUpdate:modelValue":t[18]||(t[18]=e=>l.newProduct.info.tags=e),type:"checkbox",value:"四日",class:"form-check-input",id:"12"},null,512),[[r,l.newProduct.info.tags]]),_o]),o("div",Po,[s(o("input",{"onUpdate:modelValue":t[19]||(t[19]=e=>l.newProduct.info.tags=e),type:"checkbox",value:"簡易織布機",class:"form-check-input",id:"13"},null,512),[[r,l.newProduct.info.tags]]),wo]),o("div",ko,[s(o("input",{"onUpdate:modelValue":t[20]||(t[20]=e=>l.newProduct.info.tags=e),type:"checkbox",value:"秋冬",class:"form-check-input",id:"14"},null,512),[[r,l.newProduct.info.tags]]),vo])]),o("div",go,[yo,s(o("select",{"onUpdate:modelValue":t[21]||(t[21]=e=>l.newProduct.state.promotion=e),class:"form-select",id:"15",multiple:""},To,512),[[m,l.newProduct.state.promotion]])]),o("div",So,[Do,s(o("input",{"onUpdate:modelValue":t[22]||(t[22]=e=>l.newProduct.imageUrl=e),type:"text",class:"form-control",id:"16"},null,512),[[n,l.newProduct.imageUrl]])]),o("button",{onClick:t[23]||(t[23]=P((...e)=>b.addProdct&&b.addProdct(...e),["prevent"])),type:"submit",class:"btn btn-primary"}," 新增課程 ")]),o("table",Fo,[No,o("tbody",null,[(u(!0),a(w,null,k(l.products,e=>(u(),a("tr",{key:e.id},[o("th",zo,[o("small",null,i(e.id),1)]),o("td",null,i(e.category),1),o("td",null,i(e.title),1),o("td",null,i(e.info.dateTime.date),1),o("td",null,i(e.info.classes),1),o("td",null,i(e.origin_price),1),o("td",null,i(e.price),1),o("td",null,i(e.is_enabled?"開放中":"關閉"),1),o("td",null,i(e.info.capacity-e.info.studentNum),1),o("td",null,i(e.info.studentNum),1),o("td",null,i(e.state.nowStatus),1),Ao]))),128))])])])])}const Lo=_(g,[["render",Bo]]);export{Lo as default};