(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{745:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-3",function(){return a(53253)}])},84449:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var s=a(85893),r=a(41664),i=a.n(r),n=a(67294),o=a(14924),l=a(6154);class c{constructor(){}}(0,o.Z)(c,"app_url","https://api-dev.twenty-one-ai.com/"),(0,o.Z)(c,"getEvents",async()=>l.Z.get(c.app_url+"api/getEvent").then(e=>e.data).catch(e=>e.response.data));var d=a(86501);let m=()=>{let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{c.getEvents().then(e=>{e.success?t(e.data):d.ZP.error("Something Went Wrong.")}).catch(e=>{d.ZP.error("Something Went Wrong.")})},[]);let a=a=>{let s=[...e];s[a].showFullDescription=!s[a].showFullDescription,t(s)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"row mt-70 w-100",children:(0,s.jsxs)("div",{className:"col-lg-12",children:[(0,s.jsx)("h2",{className:"color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp",children:"Latest Events"}),(0,s.jsx)("p",{className:"text-lg color-gray-500 wow animate__animated animate__fadeInUp",children:"Don't miss the latest events"}),(0,s.jsx)("div",{className:"box-list-posts mt-70 w-100",children:(0,s.jsx)("div",{className:"row",children:e.slice(0,6).map((e,t)=>(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"card-list-posts card-list-posts-small wow animate__animated animate__fadeIn",children:[(0,s.jsx)("div",{className:"card-image hover-up w-100",children:(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("img",{src:"".concat(e.image),alt:"Genz"})})}),(0,s.jsxs)("div",{className:"card-info",children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("h5",{className:"mb-15 color-white",children:e.title})}),(0,s.jsxs)("p",{className:"color-gray-500 cursor-pointer",children:[e.showFullDescription?e.description:"".concat(e.description.slice(0,100)).concat(e.description.length>100?"...":""),!e.showFullDescription&&e.description.length>100&&(0,s.jsxs)("span",{className:" cursor-pointer",onClick:()=>a(t),children:[" ","Read more"]})]}),(0,s.jsx)("div",{className:"row mt-20",children:(0,s.jsx)("div",{className:"col-6",children:(0,s.jsx)("span",{className:"calendar-icon color-gray-700 text-sm mr-25",children:e.date})})})]})]})},t))})}),(0,s.jsx)("div",{className:"text-start mb-80",children:(0,s.jsxs)(i(),{className:"btn btn-linear btn-load-more wow animate__animated animate__zoomIn",href:"#",children:["Show More events",(0,s.jsx)("i",{className:"fi-rr-arrow-small-right"})]})})]})})})};var p=m},53253:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var s=a(85893),r=a(9008),i=a.n(r),n=a(78783),o=a(41664),l=a.n(o),c=a(5459),d=a.n(c);let m=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"banner banner-home3 bg-gray-850",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row align-items-start",children:[(0,s.jsx)("div",{className:"col-xl-1"}),(0,s.jsx)("div",{className:"col-xl-10 col-lg-12",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-6 pt-100",children:[(0,s.jsx)("span",{className:"text-sm-bold text-pink-300 wow animate__animated animate__fadeInUp",children:"Hello Everyone!"}),(0,s.jsxs)("h1",{className:"color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp",children:["I’m",(0,s.jsx)(d(),{options:{wrapperClassName:"typewrite color-linear",strings:["Brian Clark","Designer","Creator"],autoStart:!0,loop:!0}})]}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-9",children:(0,s.jsx)("p",{className:"text-base color-gray-600 wow animate__animated animate__fadeInUp",children:"I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that."})})}),(0,s.jsx)("div",{className:"box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp",children:(0,s.jsx)("div",{className:"inner-subscriber bg-gray-800",children:(0,s.jsxs)("form",{className:"d-flex",action:"#",children:[(0,s.jsx)("input",{className:"input-sybscriber",type:"text",placeholder:"Type your email address"}),(0,s.jsxs)("button",{className:"btn btn-linear btn-arrow-right",children:["Subscribe",(0,s.jsx)("i",{className:"fi-rr-arrow-small-right"})]})]})})}),(0,s.jsxs)("div",{className:"box-socials",children:[(0,s.jsx)(l(),{className:"bg-gray-800 hover-up",href:"#",children:(0,s.jsx)("span",{className:"fb"})}),(0,s.jsx)(l(),{className:"bg-gray-800 hover-up",href:"#",children:(0,s.jsx)("span",{className:"inst"})}),(0,s.jsx)(l(),{className:"bg-gray-800 hover-up",href:"#",children:(0,s.jsx)("span",{className:"snap"})}),(0,s.jsx)(l(),{className:"bg-gray-800 hover-up",href:"#",children:(0,s.jsx)("span",{className:"tw"})})]})]}),(0,s.jsx)("div",{className:"col-lg-6 text-center"})]})})]})})})});var p=a(95491);let u=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"row mt-70",children:[(0,s.jsx)("h2",{className:"color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp",children:"Featured Articles"}),(0,s.jsx)("p",{className:"text-lg color-gray-500 wow animate__animated animate__fadeInUp",children:"Discover the most outstanding articles in all topics"}),(0,s.jsx)("div",{className:"row mt-70",children:p.Z.slice(0,6).map((e,t)=>(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsx)("div",{className:"card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn","data-wow-delay":".0s",children:(0,s.jsx)("div",{className:"card-image",children:(0,s.jsxs)(l(),{className:"link-post",href:"/single-sidebar",children:[(0,s.jsx)("img",{src:"/assets/imgs/page/homepage3/".concat(e.img),alt:"Genz"}),(0,s.jsx)("div",{className:"card-info card-bg-2",children:(0,s.jsxs)("div",{className:"info-bottom mb-15",children:[(0,s.jsx)("h4",{className:"color-white mb-15",children:e.title}),(0,s.jsxs)("div",{className:"box-author",children:[(0,s.jsx)("img",{src:"assets/imgs/page/homepage3/author.jpg",alt:"Genz"}),(0,s.jsxs)("div",{className:"author-info",children:[(0,s.jsx)("h6",{className:"mr-15 color-gray-700",children:e.authorName}),(0,s.jsx)("span",{className:"color-gray-700 text-sm",children:e.date})]})]})]})})]})})})},t))}),(0,s.jsx)("div",{className:"text-center mt-30",children:(0,s.jsxs)(l(),{className:"btn btn-linear btn-load-more wow animate__animated animate__zoomIn",href:"#",children:["Show More Posts",(0,s.jsx)("i",{className:"fi-rr-arrow-small-right"})]})})]})});var h=a(5951),f=a(84449),x=a(28123),g=a(60230);function b(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i(),{children:(0,s.jsx)("title",{children:"Genz - Home 3"})}),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(m,{}),(0,s.jsx)("div",{className:"cover-home3",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xl-1"}),(0,s.jsxs)("div",{className:"col-xl-10 col-lg-12",children:[(0,s.jsx)(u,{}),(0,s.jsx)(h.Z,{}),(0,s.jsx)(f.Z,{}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(g.Z,{})]})]})})})]})]})}},86501:function(e,t,a){"use strict";let s,r;a.d(t,{x7:function(){return er},ZP:function(){return ei}});var i,n=a(67294);let o={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,p=(e,t)=>{let a="",s="",r="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":s+="f"==i[1]?p(n,i):i+"{"+p(n,"k"==i[1]?"":t)+"}":"object"==typeof n?s+=p(n,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(i,n):i+":"+n+";")}return a+(t&&r?t+"{"+r+"}":r)+s},u={},h=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+h(e[a]);return t}return e},f=(e,t,a,s,r)=>{var i,n;let o=h(e),l=u[o]||(u[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!u[l]){let f=o!==e?e:(e=>{let t,a,s=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(a=t[3].replace(m," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(m," ").trim();return s[0]})(e);u[l]=p(r?{["@keyframes "+l]:f}:f,a?"":"."+l)}let x=a&&u.g?u.g:null;return a&&(u.g=u[l]),i=u[l],n=t,x?n.data=n.data.replace(x,i):-1===n.data.indexOf(i)&&(n.data=s?i+n.data:n.data+i),l},x=(e,t,a)=>e.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let n=i(a),o=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=o?"."+o:n&&"object"==typeof n?n.props?"":p(n,""):!1===n?"":n}return e+s+(null==i?"":i)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?x(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,v,y,j=g.bind({k:1});function w(e,t){let a=this||{};return function(){let s=arguments;function r(i,n){let o=Object.assign({},i),l=o.className||r.className;a.p=Object.assign({theme:v&&v()},o),a.o=/ *go\d+/.test(l),o.className=g.apply(a,s)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),y&&c[0]&&y(o),b(c,o)}return t?t(r):r}}var N=e=>"function"==typeof e,_=(e,t)=>N(e)?e(t):e,E=(s=0,()=>(++s).toString()),k=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},I=new Map,$=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),F({type:4,toastId:e})},1e3);I.set(e,t)},C=e=>{let t=I.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?z(e,{type:1,toast:a}):z(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?$(s):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},D=[],O={toasts:[],pausedAt:void 0},F=e=>{O=z(O,e),D.forEach(e=>{e(O)})},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Z=(e={})=>{let[t,a]=(0,n.useState)(O);(0,n.useEffect)(()=>(D.push(a),()=>{let e=D.indexOf(a);e>-1&&D.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var a,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},S=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||E()}),A=e=>(t,a)=>{let s=S(t,e,a);return F({type:2,toast:s}),s.id},U=(e,t)=>A("blank")(e,t);U.error=A("error"),U.success=A("success"),U.loading=A("loading"),U.custom=A("custom"),U.dismiss=e=>{F({type:3,toastId:e})},U.remove=e=>F({type:4,toastId:e}),U.promise=(e,t,a)=>{let s=U.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(U.success(_(t.success,e),{id:s,...a,...null==a?void 0:a.success}),e)).catch(e=>{U.error(_(t.error,e),{id:s,...a,...null==a?void 0:a.error})}),e};var T=(e,t)=>{F({type:1,toast:{id:e,height:t}})},M=()=>{F({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:a}=Z(e);(0,n.useEffect)(()=>{if(a)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&U.dismiss(t.id);return}return setTimeout(()=>U.dismiss(t.id),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,a]);let s=(0,n.useCallback)(()=>{a&&F({type:6,time:Date.now()})},[a]),r=(0,n.useCallback)((e,a)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=a||{},n=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<o&&e.visible).length;return n.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:T,startPause:M,endPause:s,calculateOffset:r}}},L=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
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
    animation: ${j`
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
    animation: ${j`
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
`,G=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,W=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
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
    animation: ${j`
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
`,B=w("div")`
  position: absolute;
`,R=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?n.createElement(X,null,t):t:"blank"===a?null:n.createElement(R,null,n.createElement(G,{...s}),"loading"!==a&&n.createElement(B,null,"error"===a?n.createElement(L,{...s}):n.createElement(W,{...s})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=w("div")`
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
`,Q=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=(e,t)=>{let a=e.includes("top")?1:-1,[s,r]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(a),J(a)];return{animation:t?`${j(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?V(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(q,{toast:e}),o=n.createElement(Q,{...e.ariaProps},_(e.message,e));return n.createElement(K,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:i,message:o}):n.createElement(n.Fragment,null,i,o))});i=n.createElement,p.p=void 0,b=i,v=void 0,y=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:s,children:r})=>{let i=n.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return n.createElement("div",{ref:i,className:t,style:a},r)},ea=(e,t)=>{let a=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s}},es=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:r,containerStyle:i,containerClassName:o})=>{let{toasts:l,handlers:c}=H(a);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let i=a.position||t,o=ea(i,c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return n.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?es:"",style:o},"custom"===a.type?_(a.message,a):r?r(a):n.createElement(ee,{toast:a,position:i}))}))},ei=U}},function(e){e.O(0,[2918,1057,8764,6154,1018,4353,4938,5459,8783,8461,9774,2888,179],function(){return e(e.s=745)}),_N_E=e.O()}]);