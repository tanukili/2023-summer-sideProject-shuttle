import{f}from"./flatpickr-cbaef1e5.js";import{_ as b,m as g,k,l as i,e as v,f as y,j as e,s,u as l,t as d,I as m,x as U,A as w,D as x}from"./index-c02af96d.js";import{B}from"./BackgroundBanner-2951002f.js";const q="/2023-summer-sideProject-shuttle",F={components:{BackgroundBanner:B},data(){return{bannerAd:{title:"新註冊會員 贈100元折價券",subtitle:"新會員招募中，註冊即贈優惠券",imgUrl:`background-image: url(${q}/activity/newMember.jpg)`},userBirthday:"",flatpickrConfig:{enableTime:!0,dateFormat:"Y-m-d H:i"}}},methods:{...g(m,["singUp"]),onSubmit(o){const n={email:o.信箱,password:o.密碼,phone:o.連絡電話,name:o.會員名稱,birthday:this.userBirthday,sex:o.性別?o.性別:"",favorites:[]};this.singUp(n)}},mounted(){this.flatpickr=new f(this.$refs.flatpickrInput,{altInput:!0,dateFormat:"Y-m-d",altFormat:"F j, Y"}),document.querySelector(".form-date .input").classList.add("form-control")},beforeUnmount(){this.flatpickr.destroy()},computed:{...k(m,["isLogin","checkUserId"])}},S={class:"about"},V={class:"bg-white position-relative z-0"},P={class:"container block-spacing"},I={"aria-label":"breadcrumb"},M={class:"breadcrumb"},A={class:"breadcrumb-item"},j=e("li",{class:"breadcrumb-item active","aria-current":"page"},"註冊",-1),E={class:"row"},L={class:"col-6 ps-8 text-white"},N={class:"fs-4 pt-8 mt-7 mb-2"},T={class:"fs-7"},C={class:"col-6 bg-primary-light rounded-5 py-5 shadow"},D=e("h1",{class:"title fs-3 text-primary pt-3 pb-4"},[e("span",{class:"border-primary"},"註冊會員")],-1),Y={class:"form-floating mb-4"},R=e("label",{for:"signUpEmail",class:"required"},"註冊信箱",-1),z={class:"form-floating mb-4"},H=e("label",{for:"signUpPassword",class:"required"},"密碼",-1),G={class:"form-floating mb-4"},J=e("label",{for:"checkPassword",class:"required"},"再次確認密碼",-1),K={class:"form-floating mb-4"},O=e("label",{for:"signUpName",class:"required"},"會員名稱",-1),Q={class:"form-floating mb-4"},W=e("label",{for:"signUpPhone",class:"required"},"連絡電話",-1),X={class:"form-date form-floating mb-4"},Z=e("label",{for:"signUpBirthday"},"生日",-1),$={class:"mb-5 ms-3"},ee=e("label",{class:"d-block mb-2"},"性別",-1),se={class:"form-check form-check-inline"},te=e("label",{for:"signUpMale"},"男性",-1),oe={class:"form-check form-check-inline"},ae=e("label",{for:"signUpFemale"},"女性",-1),re={class:"form-check form-check-inline"},ie=e("label",{for:"signUpPrivate"},"不公開",-1),ne={class:"form-check mb-3"},ce=e("label",{class:"form-check-label required"}," 我同意網站服務條款及隱私政策 ",-1),le={class:"text-danger fs-9 ms-2"},de=e("button",{class:"btn btn-primary w-100 mb-3 fs-5"},"註冊",-1);function me(o,n,_e,pe,r,_){const p=i("RouterLink"),t=i("VField"),a=i("ErrorMessage"),h=i("VForm"),u=i("BackgroundBanner");return v(),y("div",S,[e("div",V,[e("div",P,[e("nav",I,[e("ol",M,[e("li",A,[s(p,{to:"/"},{default:l(()=>[U("首頁")]),_:1})]),j])]),e("div",E,[e("div",L,[e("h2",N,d(r.bannerAd.title),1),e("h3",T,d(r.bannerAd.subtitle),1)]),e("div",C,[D,s(h,{novalidate:"",onSubmit:_.onSubmit,class:"mx-5 form-clear"},{default:l(()=>[e("div",Y,[s(t,{name:"信箱",type:"email",rules:"required|email",class:"form-control",id:"signUpEmail",placeholder:"name@example.com"}),R,s(a,{name:"信箱"})]),e("div",z,[s(t,{name:"密碼",type:"password",rules:"required|alpha_num|min:6|max:20",class:"form-control",id:"signUpPassword",placeholder:"password"}),H,s(a,{name:"密碼"})]),e("div",G,[s(t,{name:"輸入密碼",type:"password",rules:"confirmed:@密碼|required",class:"form-control",id:"checkPassword",placeholder:"password"}),J,s(a,{name:"輸入密碼"})]),e("div",K,[s(t,{name:"會員名稱",type:"text",rules:"required",class:"form-control",id:"signUpName",placeholder:"name"}),O,s(a,{name:"會員名稱"})]),e("div",Q,[s(t,{name:"連絡電話",type:"phone",rules:"required|numeric|length:10",class:"form-control",id:"signUpPhone",placeholder:"0912345678"}),W,s(a,{name:"連絡電話"})]),e("div",X,[w(e("input",{name:"生日",ref:"flatpickrInput",type:"text",id:"signUpBirthday",placeholder:"1990-01-01","onUpdate:modelValue":n[0]||(n[0]=c=>r.userBirthday=c)},null,512),[[x,r.userBirthday]]),Z]),e("div",$,[ee,e("div",se,[s(t,{type:"radio",name:"性別",value:"male",class:"form-check-input",id:"signUpMale"}),te]),e("div",oe,[s(t,{type:"radio",name:"性別",value:"female",class:"form-check-input",id:"signUpFemale"}),ae]),e("div",re,[s(t,{type:"radio",name:"性別",value:"private",class:"form-check-input",id:"signUpPrivate"}),ie])]),e("div",ne,[s(t,{type:"checkbox",rules:"required",name:"agreeTerms",value:"true",class:"form-check-input"}),ce,s(a,{name:"agreeTerms"},{default:l(({message:c})=>[e("span",le,d(c="請閱讀完後勾選"),1)]),_:1})]),de]),_:1},8,["onSubmit"])])])]),s(u,{bannerImg:r.bannerAd.imgUrl,class:"singUp-banner"},null,8,["bannerImg"])])])}const be=b(F,[["render",me]]);export{be as default};