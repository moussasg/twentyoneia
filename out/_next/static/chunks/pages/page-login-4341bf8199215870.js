(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9420],{4708:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page-login",function(){return a(19864)}])},66758:function(e,s,a){"use strict";a.r(s),a.d(s,{auth:function(){return l}});var r=a(83977),n=a(91259);let o=(0,r.ZF)({apiKey:"AIzaSyBby8w9LoEh2NLwJnA4w9cC51aLd3REp90",authDomain:"avidhilda-7f3aa.firebaseapp.com",projectId:"avidhilda-7f3aa",storageBucket:"avidhilda-7f3aa.appspot.com",messagingSenderId:"883569303161",appId:"1:883569303161:web:5cedde484753899987fea8",measurementId:"G-KPWGZF2VSV"}),l=(0,n.v0)(o);s.default=()=>null},19864:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var r=a(85893),n=a(91259),o=a(41664),l=a.n(o),i=a(9008),c=a.n(i),t=a(78783),d=a(67294),m=a(6154),u=a(66758),p=a(11163);function h(){let e=(0,p.useRouter)(),[s,a]=(0,d.useState)(!1),[o,i]=(0,d.useState)({name:"",password:""}),[h,g]=(0,d.useState)({name:"",password:""}),x=()=>{a(e=>!e)},f=e=>{let{name:s,value:a}=e.target;i({...o,[s]:a}),g({...h,[s]:""})},v=async e=>{e.preventDefault(),console.log("Clicked Register");try{let s={};for(let a in o)o[a]||(s[a]="Please fill in this field.");if(Object.keys(s).length>0){g(s);return}let r=await m.Z.post({...o});!0===r.data.success&&console.log("post success")}catch(l){var n;console.error("Error during the request:",null===(n=l.response)||void 0===n?void 0:n.data)}},j=async()=>{let s=new n.hJ;s.addScope("profile"),s.addScope("email"),s.setCustomParameters({prompt:"select_account"});try{var a;let r=await (0,n.rh)(u.auth,s);(null==r?void 0:null===(a=r.user)||void 0===a?void 0:a.email)===r.user.email&&e.push("/predictive")}catch(o){console.error("Google Sign-In Error:",o.message)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:"Genz - Login"})}),(0,r.jsx)(t.Z,{children:(0,r.jsx)("div",{className:"cover-home3",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-xl-10 col-lg-12 m-auto",children:[(0,r.jsx)("div",{className:"text-center mt-50 pb-50",children:(0,r.jsx)("h2",{className:"color-linear d-inline-block",children:"Welcome back !"})}),(0,r.jsxs)("div",{className:"box-form-login pb-50",children:[(0,r.jsx)("div",{className:"form-login bg-gray-850 border-gray-800 text-start",children:(0,r.jsxs)("form",{action:"#",children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{className:"form-control bg-gray-850 border-gray-800",type:"text",placeholder:"User name",name:"name",value:o.name,onChange:f}),(0,r.jsx)("p",{className:"error-message",children:h.name})]}),(0,r.jsxs)("div",{className:"form-group position-relative",children:[(0,r.jsx)("input",{className:"form-control bg-gray-850 border-gray-800 password",name:"password",type:s?"text":"password",placeholder:"Password",value:o.password,onChange:f}),(0,r.jsx)("p",{className:"error-message",children:h.password}),(0,r.jsx)("span",{className:"viewpass",onClick:x})]}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)(l(),{className:"color-white link",href:"#",children:"Forgot password?"})}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("button",{className:"btn btn-linear color-gray-850 hover-up",type:"submit",onClick:v,children:"Log me in"})}),(0,r.jsxs)("div",{className:"form-group mb-0",children:[(0,r.jsx)("span",{children:"Don’t have an account?"}),(0,r.jsxs)(l(),{className:"color-linear",href:"/page-signup",children:[" ","Sign Up"]})]})]})}),(0,r.jsx)("div",{className:"box-line",children:(0,r.jsx)("span",{className:"bg-gray-900",children:"Or, sign in with your email"})}),(0,r.jsx)("div",{className:"box-login-gmail bg-gray-850 border-gray-800 hover-up",children:(0,r.jsx)("div",{className:"btn btn-login-gmail color-gray-500",onClick:j,children:"Sign in with Google"})})]})]})})})})})]})}},9008:function(e,s,a){e.exports=a(83121)},11163:function(e,s,a){e.exports=a(80880)}},function(e){e.O(0,[2918,1057,3096,8764,6154,1018,4353,4478,8783,9774,2888,179],function(){return e(e.s=4708)}),_N_E=e.O()}]);