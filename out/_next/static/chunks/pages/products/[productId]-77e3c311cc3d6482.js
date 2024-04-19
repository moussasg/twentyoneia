(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4999],{38811:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[productId]",function(){return a(41350)}])},64622:function(e,t,a){"use strict";var s=a(85893),r=a(41664),i=a.n(r),o=a(67294);let n=[{name:"Features",category:["smart","health","tourist","ekyc","home","vr","care","wellness","blind","llm"],img:"img1.jpg"},{name:"Outcomes",category:["smart","health","tourist","ekyc","home","vr","care","wellness","blind","llm"],img:"img2.jpg"}],l=e=>{let{col:t,show:a}=e,[r,l]=(0,o.useState)("all"),[c,d]=(0,o.useState)([]);return(0,o.useEffect)(()=>{d(n)},[]),(0,o.useEffect)(()=>{d([]);let e=n.map(e=>({...e,filtered:e.category.includes(r)}));d(e)},[r]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"mt-70 mb-50",children:(0,s.jsx)("div",{className:"row",children:c.slice(0,a).map(e=>!0===e.filtered?(0,s.jsx)("div",{className:"col-lg-".concat(t),children:(0,s.jsx)("div",{className:"project","data-category":"web motion",children:(0,s.jsx)("div",{className:"item-content",children:(0,s.jsx)("div",{className:"card-style-1 hover-up mb-30","data-wow-delay":".0s",children:(0,s.jsx)("div",{className:"card-image",children:(0,s.jsxs)(i(),{className:"link-post",href:"#",children:[(0,s.jsx)("img",{src:"assets/imgs/page/about/".concat(e.img),alt:"Genz"}),(0,s.jsx)("div",{className:"card-info card-bg-2",children:(0,s.jsxs)("div",{className:"info-bottom mb-15",children:[(0,s.jsx)("h3",{className:"color-white mb-10",children:e.name}),(0,s.jsx)("p",{className:"color-gray-500 text-sm",children:"Empowering Possibilities, Enhancing Efficiency. Discover the Power of Feature-Rich Software."})]})})]})})})})})},e.name):null)})})})};t.Z=l},41350:function(e,t,a){"use strict";a.r(t);var s=a(85893),r=a(67294),i=a(9008),o=a.n(i),n=a(64622),l=a(78783),c=a(11163),d=a(62598),u=a(86501),m=a(41664),p=a.n(m);let f=()=>{let e=(0,c.useRouter)(),t=e.query.productId,[a,i]=(0,r.useState)({});return(0,r.useEffect)(()=>{console.log("id for productId is: ",t),t&&d.Z.getProductById(t).then(e=>{console.log("test",e),e.success?(console.log("data is: ",e.data),i(e.data)):u.ZP.error("Something Went Wrong.")}).catch(e=>{u.ZP.error("Something Went Wrong.")})},[t]),(0,r.useEffect)(()=>{var e=document.querySelectorAll(".opacity-transition");function t(){this.style.opacity="100"}function a(){this.style.opacity="0.7"}return e.forEach(function(e){e.addEventListener("mouseover",t),e.addEventListener("mouseout",a)}),()=>{e.forEach(function(e){e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",a)})}},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{children:(0,s.jsx)("title",{children:"Products"})}),(0,s.jsx)(u.x7,{}),(0,s.jsx)(l.Z,{children:(0,s.jsx)("div",{className:"cover-home1",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xl-1"}),(0,s.jsxs)("div",{className:"col-xl-10 col-lg-12",children:[(0,s.jsxs)("div",{className:"text-center mt-70 mb-50",children:[a.title&&(0,s.jsxs)("h2",{className:"color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp",children:[a.title,"...."]}),(0,s.jsxs)("p",{className:"text-lg color-gray-500 wow animate__animated animate__fadeInUp",children:["21 AI Research is devoted to contributing to the Tech World",(0,s.jsx)("br",{className:"d-none d-lg-block"}),"with the latest era products."]})]}),(0,s.jsx)("div",{className:"text-start w-100 wow animate__animated animate__fadeInUp lh-base text-capitalize fs-4",style:{whiteSpace:"pre-line"},children:a.description}),(0,s.jsx)(n.Z,{col:6,show:6})]})]}),(0,s.jsxs)("div",{class:"d-flex justify-content-center w-75",children:[(0,s.jsx)("div",{class:"row text-center",children:(0,s.jsx)("div",{class:"feature-box text-lg wow animate__animated animate__fadeInUp",children:(0,s.jsx)(p(),{href:"/features/".concat(t),children:(0,s.jsx)("img",{className:"h-50 opacity-transition rounded float-end",src:"./../assets/imgs/features.jpg"})})})}),(0,s.jsx)("div",{class:"row text-center",children:(0,s.jsx)("div",{class:"feature-box text-lg wow animate__animated animate__fadeInUp",children:(0,s.jsx)(p(),{href:"/outcomes/".concat(t),children:(0,s.jsx)("img",{className:"h-50 opacity-transition rounded float-end",src:"./../assets/imgs/outcome.jpg"})})})})]})]})})}),(0,s.jsx)("style",{children:"\n        .feature-box  {\n            position: relative;\n            animation: mymove 1s;\n            transition: transform 1s ease;\n            opacity:0.8;    \n          }\n          @keyframes mymove {\n              from {top: 0px;}\n              to {top: 30px;}\n            }\n         "})]})};t.default=f},9008:function(e,t,a){e.exports=a(83121)},11163:function(e,t,a){e.exports=a(80880)},86501:function(e,t,a){"use strict";let s,r;a.d(t,{x7:function(){return er},ZP:function(){return ei}});var i,o=a(67294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let a="",s="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":s+="f"==i[1]?m(o,i):i+"{"+m(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=m(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=m.p?m.p(i,o):i+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+s},p={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,s,r)=>{var i,o;let n=f(e),l=p[n]||(p[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!p[l]){let h=n!==e?e:(e=>{let t,a,s=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(a=t[3].replace(u," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);p[l]=m(r?{["@keyframes "+l]:h}:h,a?"":"."+l)}let g=a&&p.g?p.g:null;return a&&(p.g=p[l]),i=p[l],o=t,g?o.data=o.data.replace(g,i):-1===o.data.indexOf(i)&&(o.data=s?i+o.data:o.data+i),l},g=(e,t,a)=>e.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let o=i(a),n=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=n?"."+n:o&&"object"==typeof o?o.props?"":m(o,""):!1===o?"":o}return e+s+(null==i?"":i)},"");function x(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let y,b,v,w=x.bind({k:1});function j(e,t){let a=this||{};return function(){let s=arguments;function r(i,o){let n=Object.assign({},i),l=n.className||r.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(l),n.className=x.apply(a,s)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),y(c,n)}return t?t(r):r}}var E=e=>"function"==typeof e,N=(e,t)=>E(e)?e(t):e,_=(s=0,()=>(++s).toString()),k=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},$=new Map,I=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),S({type:4,toastId:e})},1e3);$.set(e,t)},P=e=>{let t=$.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?O(e,{type:1,toast:a}):O(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?I(s):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},C=[],z={toasts:[],pausedAt:void 0},S=e=>{z=O(z,e),C.forEach(e=>{e(z)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,a]=(0,o.useState)(z);(0,o.useEffect)(()=>(C.push(a),()=>{let e=C.indexOf(a);e>-1&&C.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var a,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},F=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||_()}),T=e=>(t,a)=>{let s=F(t,e,a);return S({type:2,toast:s}),s.id},L=(e,t)=>T("blank")(e,t);L.error=T("error"),L.success=T("success"),L.loading=T("loading"),L.custom=T("custom"),L.dismiss=e=>{S({type:3,toastId:e})},L.remove=e=>S({type:4,toastId:e}),L.promise=(e,t,a)=>{let s=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(L.success(N(t.success,e),{id:s,...a,...null==a?void 0:a.success}),e)).catch(e=>{L.error(N(t.error,e),{id:s,...a,...null==a?void 0:a.error})}),e};var Z=(e,t)=>{S({type:1,toast:{id:e,height:t}})},U=()=>{S({type:5,time:Date.now()})},M=e=>{let{toasts:t,pausedAt:a}=D(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,a]);let s=(0,o.useCallback)(()=>{a&&S({type:6,time:Date.now()})},[a]),r=(0,o.useCallback)((e,a)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=a||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:U,endPause:s,calculateOffset:r}}},H=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=j("div")`
  position: absolute;
`,B=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(X,null,t):t:"blank"===a?null:o.createElement(B,null,o.createElement(W,{...s}),"loading"!==a&&o.createElement(q,null,"error"===a?o.createElement(H,{...s}):o.createElement(R,{...s})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=(e,t)=>{let a=e.includes("top")?1:-1,[s,r]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(a),J(a)];return{animation:t?`${w(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?V(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(G,{toast:e}),n=o.createElement(Q,{...e.ariaProps},N(e.message,e));return o.createElement(K,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,m.p=void 0,y=i,b=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:s,children:r})=>{let i=o.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return o.createElement("div",{ref:i,className:t,style:a},r)},ea=(e,t)=>{let a=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s}},es=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:r,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=M(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let i=a.position||t,n=ea(i,c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?es:"",style:n},"custom"===a.type?N(a.message,a):r?r(a):o.createElement(ee,{toast:a,position:i}))}))},ei=L}},function(e){e.O(0,[2918,1057,8764,6154,1018,4353,8783,9774,2888,179],function(){return e(e.s=38811)}),_N_E=e.O()}]);