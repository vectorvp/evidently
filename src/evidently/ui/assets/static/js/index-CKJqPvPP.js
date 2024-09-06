const __vite__fileDeps=["static/js/index-CcLP2flX.js","static/js/vendor-t0l2jWQ9.js","static/js/createSvgIcon-LdZl81St.js","static/js/index-D3gH4vx9.js","static/js/DashboardViewParams-CHXlEHLP.js","static/js/DashboardWidgets-CSvA9GhO.js","static/js/DashboardContent-C6JeNogA.js","static/js/Edit-BJOpF2nO.js","static/js/index-DsPNOD6z.js","static/js/index-DzU7Itgo.js","static/js/ContentCopy-B2vBgiMr.js","static/css/index-C5isHALn.css","static/js/index-DpaWFHTR.js","static/js/index-CIEFkcKx.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var X=Object.defineProperty;var Z=(e,t,s)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var T=(e,t,s)=>(Z(e,typeof t!="symbol"?t+"":t,s),s);import{c as z,g as _,u as ee,j as r,A as B,a as $,i as te,T as I,b as re,R,r as F,S as se,B as k,I as oe,C as ne,d as ie,e as ae,f as ce,h as w,k as he,l as le,L as de,m as ue,G as O,F as pe,n as fe,o as me,p as je,q as xe,M as p,D as G,s as ye,t as _e,v as L,z as u,w as ge,x as Ee,y as ve,E as Se}from"./vendor-t0l2jWQ9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const{transitions:P}=z(),y="#ed0500",be="#ded5d5",ke=z({shape:{borderRadius:5},palette:{primary:{main:_[900],light:_[200]},secondary:{main:y,dark:"#c10400",light:_[200]},background:{default:"#fff",paper:"#fff"}},components:{MuiLink:{styleOverrides:{root:{transition:P.create("color",{duration:P.duration.enteringScreen}),"&:hover":{color:y}}}},MuiTabs:{styleOverrides:{flexContainer:{gap:"10px"},indicator:{backgroundColor:y}}},MuiButton:{styleOverrides:{contained:{"&:hover":{background:_[800]}},outlined:{"&:hover":{color:y,borderColor:y,background:"#fff"}},text:{"&:hover":{color:y,borderColor:y}}}},MuiTab:{defaultProps:{color:"secondary"},styleOverrides:{root:{fontSize:"1rem",borderRadius:"5px","&:hover":{background:_[200]}}}},MuiIconButton:{styleOverrides:{root:{transition:P.create("color",{duration:P.duration.enteringScreen}),color:_[900],"&:hover":{color:y}}}},MuiSwitch:{defaultProps:{color:"secondary"}},MuiToggleButton:{defaultProps:{color:"secondary"},styleOverrides:{root:{transition:P.create("color",{duration:P.duration.enteringScreen}),color:_[900],"&:hover":{color:y},"&.Mui-disabled":{border:"unset",background:_[100]}}}},MuiToggleButtonGroup:{defaultProps:{color:"secondary"}},MuiLinearProgress:{defaultProps:{color:"secondary"}},MuiPaper:{styleOverrides:{root:{boxShadow:"unset",border:"1px solid",borderColor:be}}}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontWeight:"bold",textTransform:"none"}}}),v=()=>{var t;const e=ee();return r.jsxs(B,{severity:"error",children:[r.jsx($,{children:"Something went wrong"}),te(e)&&r.jsxs(r.Fragment,{children:[r.jsx(I,{fontWeight:"bold",children:[`Status: ${e.status}`,typeof((t=e.data)==null?void 0:t.detail)=="string"&&e.data.detail].filter(Boolean).join(", ")}),typeof e.data=="string"&&r.jsx(I,{children:e.data})]}),typeof e=="string"&&r.jsx(I,{fontWeight:"bold",children:e})]})},H=({data:e})=>{const[t,s]=R.useState(!1),n=R.useRef(null);return F.useEffect(()=>{e!=null&&e.error&&(n.current=e.error,s(!0))},[e]),r.jsx(se,{open:t,onClose:(i,o)=>{o!=="clickaway"&&s(!1)},children:r.jsx(B,{severity:"error",children:r.jsxs(k,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:2,children:[r.jsxs(k,{children:[r.jsx($,{children:"Something went wrong"}),n.current&&r.jsx(I,{fontWeight:"bold",children:[typeof n.current.status_code=="number"&&`Status: ${n.current.status_code}`,typeof n.current.detail=="string"&&n.current.detail].filter(Boolean).join(", ")})]}),r.jsx(k,{children:r.jsx(oe,{size:"small","aria-label":"close",color:"inherit",onClick:()=>{s(!1)},children:r.jsx(ne,{})})})]})})})},M=()=>{const e=re();return r.jsx(H,{data:e})},we=()=>{var s;const t=(s=ie().find(n=>{var i;return!!((i=n.data)!=null&&i.error)}))==null?void 0:s.data;return r.jsx(H,{data:t})},Pe="modulepreload",Ie=function(e){return"/"+e},U={},E=function(t,s,n){let i=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(s.map(c=>{if(c=Ie(c),c in U)return;U[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const l=document.createElement("link");if(l.rel=f?"stylesheet":Pe,f||(l.as="script",l.crossOrigin=""),l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),f)return new Promise((j,A)=>{l.addEventListener("load",j),l.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};function d(e){return e!=null&&e.notThrowExc?Oe:Te}const Te=e=>{const{data:t,error:s,response:n}=e;if(s)throw ae(s,{status:n.status});return t},Oe=e=>{const{data:t,error:s,response:n}=e;return s?{error:{...s,status_code:n.status}}:t},Ce=({api:e})=>({loader:()=>e.GET("/api/version").then(d())}),De=ce,S=De({baseUrl:"/"}),Le="/static/img/logo.png",{loader:Ae}=Ce({api:S}),Re={path:"/",lazy:async()=>{const{HomeComponentTemplate:e,...t}=await E(()=>import("./index-CcLP2flX.js"),__vite__mapDeps([0,1,2]));return{Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(we,{}),r.jsx(e,{logoSrc:Le})]}),...t}},loader:Ae,ErrorBoundary:v},W=e=>{if(e.id)return{...e,id:e.id};throw`"id" is missing in object: ${JSON.stringify(e)}`},J=e=>{if(e.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})},Fe=({api:e})=>({loader:({params:t})=>{const{projectId:s}=t;return w(s),e.GET("/api/projects/{project_id}/info",{params:{path:{project_id:s}}}).then(d()).then(W)}});function V(e){return typeof e!=typeof new Date?(console.log(`not a date ${typeof e}: ${e}`),e):`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}T${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const g={FROM:"date_from",TO:"date_to"},Be=e=>{let t=e.get(g.FROM),s=e.get(g.TO);return{date_from:t,date_to:s}},$e=({dataRanges:e})=>{const[t,s]=_e(),{date_from:n,date_to:i}=Be(t),o=L(n||e.minDate),a=L(i||e.maxDate);return{isCorrectTimeInterval:o.isValid()&&a.isValid()&&(o.isSame(a)||o.isBefore(a)),date_from:o,date_to:a,setSearchParams:s}},mt=({dataRanges:e,isDashboardHideDates:t,setIsDashboardHideDates:s,isShowDateFilter:n})=>{const i=he(),{isCorrectTimeInterval:o,date_from:a,date_to:c,setSearchParams:f}=$e({dataRanges:e}),[h,l]=F.useState({date_from:a,date_to:c}),j=le(h,300),A=o?"":"incorrect time interval";return F.useEffect(()=>{var C,D;if(i)return;const m=(C=j==null?void 0:j.date_to)==null?void 0:C.toDate(),x=(D=j==null?void 0:j.date_from)==null?void 0:D.toDate();f(b=>(b.delete(g.FROM),b.delete(g.TO),x&&b.append(g.FROM,V(x)),m&&b.append(g.TO,V(m)),b),{preventScrollReset:!0,replace:!0})},[j]),r.jsx(de,{dateAdapter:ue,adapterLocale:"en-gb",children:r.jsxs(O,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",alignItems:"flex-end",children:[r.jsx(O,{item:!0,children:r.jsx(k,{minWidth:180,display:"flex",justifyContent:"center",children:r.jsx(pe,{control:r.jsx(fe,{checked:t,onChange:m=>s(m.target.checked)}),label:"Show in order"})})}),n&&r.jsxs(r.Fragment,{children:[r.jsx(O,{item:!0,xs:12,md:2,children:r.jsxs(me,{fullWidth:!0,children:[r.jsx(je,{children:"Period"}),r.jsxs(xe,{variant:"standard",defaultValue:"",onChange:m=>{const[x,C]=m.target.value.split(",");if(x===""){l({date_from:null,date_to:null});return}const[D,b]=[Number(x),C],N=e.maxDate.subtract(D,b);l({date_from:N.isBefore(e.minDate)?e.minDate:N,date_to:e.maxDate})},children:[r.jsx(p,{value:"",children:r.jsx("em",{children:"None"})}),r.jsx(p,{value:"10,minutes",children:"Last 10 Minutes"}),r.jsx(p,{value:"30,minutes",children:"Last 30 Minutes"}),r.jsx(p,{value:"1,hours",children:"Last 1 Hours"}),r.jsx(p,{value:"2,hours",children:"Last 2 Hours"}),r.jsx(p,{value:"8,hours",children:"Last 8 Hours"}),r.jsx(p,{value:"24,hours",children:"Last 24 Hours"}),r.jsx(p,{value:"7,days",children:"Last 7 Days"}),r.jsx(p,{value:"14,days",children:"Last 14 Days"}),r.jsx(p,{value:"28,days",children:"Last 28 Days"}),r.jsx(p,{value:"60,days",children:"Last 60 Days"})]})]})}),r.jsx(O,{item:!0,children:r.jsxs(k,{display:"flex",alignItems:"center",gap:2,children:[r.jsx(G,{minDate:e.minDate,maxDate:e.maxDate&&c,slotProps:{textField:{variant:"standard"}},label:"From",value:h.date_from,onChange:m=>l(x=>({...x,date_from:m}))}),r.jsx(k,{height:1,display:"flex",alignItems:"center",children:r.jsx(I,{children:" - "})}),r.jsx(G,{minDate:e.minDate&&a,maxDate:e.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:h.date_to,onChange:m=>l(x=>({...x,date_to:m}))})]})}),r.jsx(O,{item:!0,xs:12,children:r.jsx(ye,{unmountOnExit:!0,in:!o,children:r.jsxs(B,{severity:"error",children:[r.jsx($,{children:"Error"}),A]})})})]})]})})};class Me{constructor(){T(this,"at",0);T(this,"ch","");T(this,"text","");T(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(t){throw{name:"SyntaxError",message:t,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(t){t!==this.ch&&this.error(`Expected '${t}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var t="";if(this.ch==="-"&&(t="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),-1/0;for(;this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();if(this.ch===".")for(t+=".";this.next()&&this.ch>="0"&&this.ch<="9";)t+=this.ch;if(this.ch==="e"||this.ch==="E")for(t+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(t+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();return+t}string(){var t,s,n="",i;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),n;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(i=0,s=0;s<4&&(t=parseInt(this.next(),16),!!isFinite(t));s++)i=i*16+t;n+=String.fromCharCode(i)}else if(this.escapee[this.ch])n+=this.escapee[this.ch];else break;else n+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),1/0}this.error("Unexpected '"+this.ch+"'")}array(){var t=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),t;for(;this.ch;){if(t.push(this.value()),this.white(),this.ch==="]")return this.check("]"),t;this.check(","),this.white()}}this.error("Bad array")}object(){var t,s={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),s;for(;this.ch;){if(t=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(s,t)&&this.error('Duplicate key "'+t+'"'),s[t]=this.value(),this.white(),this.ch==="}")return this.check("}"),s;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(t,s){let n;return this.text=t,this.at=0,this.ch=" ",n=this.value(),this.white(),this.ch&&this.error("Syntax error"),s!==void 0?function i(o,a){var c,f,h=o[a];if(h&&typeof h=="object")for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(f=i(h,c),f!==void 0?h[c]=f:delete h[c]);return s.call(o,a,h)}({"":n},""):n}}const q=e=>new Me().parse(e),Ne=({api:e})=>({loader:({params:t,request:s})=>{w(t.projectId);const{searchParams:n}=new URL(s.url);let i=n.get(g.FROM),o=n.get(g.TO);return i&&!L(i).isValid()&&(i=null),o&&!L(o).isValid()&&(o=null),e.GET("/api/projects/{project_id}/dashboard",{params:{path:{project_id:t.projectId},query:{timestamp_start:i,timestamp_end:o}},parseAs:"text"}).then(d()).then(q)}}),{loader:Ge}=Ne({api:S}),Ue={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:e},{DashboardWidgets:t}]=await Promise.all([E(()=>import("./index-D3gH4vx9.js"),__vite__mapDeps([3,1,4])),E(()=>import("./DashboardWidgets-CSvA9GhO.js"),__vite__mapDeps([5,1,6,4,2,7]))]);return{Component:()=>r.jsx(e,{Dashboard:({data:{widgets:s}})=>r.jsx(t,{widgets:s})})}},loader:Ge,ErrorBoundary:v},Q={RELOAD_SNAPSHOTS:"reload-snapshots",DELETE_SNAPSHOT:"delete-snapshot"},Ve=u.object({action:u.literal(Q.RELOAD_SNAPSHOTS)}),ze=u.object({action:u.literal(Q.DELETE_SNAPSHOT),snapshotId:u.string().uuid()}),Y=e=>async({request:t,params:s})=>{w(s.projectId),J(t);const n=await t.json();if(Ve.safeParse(n).success)return e.GET("/api/projects/{project_id}/reload",{params:{path:{project_id:s.projectId}}}).then(d({notThrowExc:!0}));const o=ze.safeParse(n);return o.success?e.DELETE("/api/projects/{project_id}/{snapshot_id}",{params:{path:{project_id:s.projectId,snapshot_id:o.data.snapshotId}}}).then(d({notThrowExc:!0})):{error:{status_code:!1,detail:"Unknown action"}}},He=({api:e})=>({loader:({params:t})=>(w(t.projectId),t.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/reports",{params:{path:{project_id:t.projectId}}}).then(d())),action:Y(e)}),We=({api:e})=>({loader:({params:t})=>(w(t.projectId),t.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/test_suites",{params:{path:{project_id:t.projectId}}}).then(d())),action:Y(e)}),Je=({api:e})=>({loader:({params:t})=>{const{projectId:s,snapshotId:n}=t;return w(s),w(n),e.GET("/api/projects/{project_id}/{snapshot_id}/data",{params:{path:{project_id:s,snapshot_id:n}},parseAs:"text"}).then(d()).then(q)}}),{loader:qe}=Je({api:S}),K={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:e,...t}=await E(()=>import("./index-DsPNOD6z.js"),__vite__mapDeps([8,1,6,4,2,7]));return{Component:()=>r.jsx(e,{api:S}),...t}},loader:qe,ErrorBoundary:v},{loader:Qe,action:Ye}=He({api:S}),Ke={id:"reports",path:"reports",lazy:async()=>{const{SnapshotsListTemplate:e,...t}=await E(()=>import("./index-DzU7Itgo.js"),__vite__mapDeps([9,1,10,2,11]));return{...t,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(M,{}),r.jsx(e,{type:"reports"})]})}},loader:Qe,action:Ye,ErrorBoundary:v,children:[K]},{loader:Xe,action:Ze}=We({api:S}),et={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotsListTemplate:e,...t}=await E(()=>import("./index-DzU7Itgo.js"),__vite__mapDeps([9,1,10,2,11]));return{...t,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(M,{}),r.jsx(e,{type:"test suites"})]})}},loader:Xe,action:Ze,ErrorBoundary:v,children:[K]},{loader:tt}=Fe({api:S}),rt={path:"projects/:projectId",lazy:()=>E(()=>import("./index-DpaWFHTR.js"),__vite__mapDeps([12,1,10,2])),loader:tt,ErrorBoundary:v,children:[Ue,Ke,et]},st=u.object({action:u.literal("edit-project")}),ot=u.object({action:u.literal("create-new-project")}),nt=u.object({action:u.literal("delete-project"),projectId:u.string().uuid()}),it=({api:e})=>({loader:()=>e.GET("/api/projects").then(d()).then(t=>t.map(W)),action:async({request:t})=>{J(t);const s=await t.json();if(ot.safeParse(s).success)return e.POST("/api/projects",{body:s}).then(d({notThrowExc:!0}));const n=nt.safeParse(s);if(n.success)return e.DELETE("/api/projects/{project_id}",{params:{path:{project_id:n.data.projectId}}}).then(d({notThrowExc:!0}));if(st.safeParse(s).success)return e.POST("/api/projects/{project_id}/info",{params:{path:{project_id:s.id}},body:s}).then(d({notThrowExc:!0}));throw"Undefined action"}}),{loader:at,action:ct}=it({api:S}),ht={index:!0,lazy:()=>E(()=>import("./index-CIEFkcKx.js"),__vite__mapDeps([13,1,7,2])).then(e=>({...e,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(M,{}),r.jsx(e.Component,{})]})})),loader:at,action:ct,ErrorBoundary:v},lt={path:"*",Component:()=>r.jsx(k,{display:"flex",justifyContent:"center",children:r.jsx(I,{variant:"h4",children:"Page Not Found"})})},dt={...Re,children:[ht,rt,lt],ErrorBoundary:v},ut=ge([dt]);Ee.createRoot(document.getElementById("root")).render(r.jsx(R.StrictMode,{children:r.jsx(ve,{theme:ke,children:r.jsx(Se,{router:ut})})}));export{mt as D,q as J,d as r};
