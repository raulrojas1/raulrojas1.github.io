"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5220],{4147:(L,O,$)=>{$.d(O,{a:()=>I,b:()=>M,p:()=>A});const A=(g,...v)=>console.warn(`[Ionic Warning]: ${g}`,...v),M=(g,...v)=>console.error(`[Ionic Error]: ${g}`,...v),I=(g,...v)=>console.error(`<${g.tagName.toLowerCase()}> must be used inside ${v.join(" or ")}.`)},7562:(L,O,$)=>{$.d(O,{A:()=>h,B:()=>ge,C:()=>ie,D:()=>De,E:()=>Te,F:()=>C,G:()=>te,H:()=>ue,I:()=>le,J:()=>x,K:()=>V,L:()=>Ce,M:()=>Ee,N:()=>ee,O:()=>G,P:()=>de,a:()=>g,b:()=>M,c:()=>j,d:()=>z,e:()=>ye,f:()=>Ae,g:()=>re,h:()=>J,i:()=>I,j:()=>B,k:()=>X,l:()=>K,m:()=>q,n:()=>Q,o:()=>Fe,p:()=>k,q:()=>ke,r:()=>Oe,s:()=>_,t:()=>Me,u:()=>we,v:()=>W,w:()=>v,x:()=>ve,y:()=>f,z:()=>Ie});var A=$(4147);const M=(e,n)=>e.month===n.month&&e.day===n.day&&e.year===n.year,I=(e,n)=>e.year<n.year||e.year===n.year&&e.month<n.month||e.year===n.year&&e.month===n.month&&e.day&&e.day<n.day,g=(e,n)=>e.year>n.year||e.year===n.year&&e.month>n.month||e.year===n.year&&e.month===n.month&&e.day&&e.day>n.day,v=(e,n,t)=>{const o=Array.isArray(e)?e:[e];for(const r of o)if(n&&I(r,n)||t&&g(r,t)){(0,A.p)(`The value provided to ion-datetime is out of bounds.\n\nMin: ${JSON.stringify(n)}\nMax: ${JSON.stringify(t)}\nValue: ${JSON.stringify(e)}`);break}},C=(e,n)=>{if(void 0!==n)return"h23"===n;const t=new Intl.DateTimeFormat(e,{hour:"numeric"}),o=t.resolvedOptions();if(void 0!==o.hourCycle)return"h23"===o.hourCycle;const r=new Date("5/18/2021 00:00"),d=t.formatToParts(r).find(i=>"hour"===i.type);if(!d)throw new Error("Hour value not found from DateTimeFormat");return"00"===d.value},c=(e,n)=>4===e||6===e||9===e||11===e?30:2===e?(e=>e%4==0&&e%100!=0||e%400==0)(n)?29:28:31,f=(e,n={month:"numeric",year:"numeric"})=>"month"===new Intl.DateTimeFormat(e,n).formatToParts(new Date)[0].type,h=e=>"dayPeriod"===new Intl.DateTimeFormat(e,{hour:"numeric"}).formatToParts(new Date)[0].type,T=e=>("0"+(void 0!==e?Math.abs(e):"0")).slice(-2);function _(e){if(Array.isArray(e))return e.map(t=>_(t));let n="";return void 0!==e.year?(n=(e=>("000"+(void 0!==e?Math.abs(e):"0")).slice(-4))(e.year),void 0!==e.month&&(n+="-"+T(e.month),void 0!==e.day&&(n+="-"+T(e.day),void 0!==e.hour&&(n+=`T${T(e.hour)}:${T(e.minute)}:00`,n+=void 0===e.tzOffset?"Z":(e.tzOffset>0?"+":"-")+T(Math.floor(Math.abs(e.tzOffset/60)))+":"+T(e.tzOffset%60))))):void 0!==e.hour&&(n=T(e.hour)+":"+T(e.minute)),n}const U=(e,n)=>void 0===n?e:"am"===n?12===e?0:e:12===e?12:e+12,B=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return b(e,n)},J=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return S(e,6-n)},K=e=>S(e,1),X=e=>b(e,1),q=e=>b(e,7),Q=e=>S(e,7),b=(e,n)=>{const{month:t,day:o,year:r}=e;if(null===o)throw new Error("No day provided");const u={month:t,day:o,year:r};if(u.day=o-n,u.day<1&&(u.month-=1),u.month<1&&(u.month=12,u.year-=1),u.day<1){const d=c(u.month,u.year);u.day=d+u.day}return u},S=(e,n)=>{const{month:t,day:o,year:r}=e;if(null===o)throw new Error("No day provided");const u={month:t,day:o,year:r},d=c(t,r);return u.day=o+n,u.day>d&&(u.day-=d,u.month+=1),u.month>12&&(u.month=1,u.year+=1),u},j=e=>{const n=1===e.month?12:e.month-1,t=1===e.month?e.year-1:e.year,o=c(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},z=e=>{const n=12===e.month?1:e.month+1,t=12===e.month?e.year+1:e.year,o=c(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},N=(e,n)=>{const t=e.month,o=e.year+n,r=c(t,o);return{month:t,year:o,day:r<e.day?r:e.day}},V=e=>N(e,-1),x=e=>N(e,1),P=(e,n,t)=>n?e:U(e,t),ee=(e,n)=>{const{ampm:t,hour:o}=e;let r=o;return"am"===t&&"pm"===n?r=U(r,"pm"):"pm"===t&&"am"===n&&(r=Math.abs(r-12)),r},te=(e,n,t)=>void 0===n.hour||void 0===n.minute?"Invalid Time":new Intl.DateTimeFormat(e,{hour:"numeric",minute:"numeric",timeZone:"UTC",hour12:!t}).format(new Date(_(Object.assign(Object.assign({},n),{tzOffset:void 0})))),Z=e=>{const n=e.toString();return n.length>1?n:`0${n}`},oe=(e,n)=>n?Z(e):e.toString(),re=(e,n,t)=>{if(null===t.day)return null;const o=new Date(`${t.month}/${t.day}/${t.year} GMT+0000`),r=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(o);return n?`Today, ${r}`:r},ue=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}).format(t)},ie=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{month:"long",year:"numeric",timeZone:"UTC"}).format(t)},de=(e,n)=>G(e,n,{month:"short",day:"numeric",year:"numeric"}),G=(e,n,t)=>{const r=new Date(`${n.month}/${n.day}/${n.year}${n.hour&&n.minute?` ${n.hour}:${n.minute}`:""} GMT+0000`);return new Intl.DateTimeFormat(e,Object.assign(Object.assign({},t),{timeZone:"UTC"})).format(r)},se=e=>{if("RelativeTimeFormat"in Intl){const n=new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(0,"day");return n.charAt(0).toUpperCase()+n.slice(1)}return"Today"},H=e=>{const n=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()-n),e},ae=H(new Date("2022T01:00")),ce=H(new Date("2022T13:00")),R=(e,n)=>{const t="am"===n?ae:ce,o=new Intl.DateTimeFormat(e,{hour:"numeric",timeZone:"UTC"}).formatToParts(t).find(r=>"dayPeriod"===r.type);return o?o.value:(e=>void 0===e?"":e.toUpperCase())(n)},le=e=>Array.isArray(e)?e.join(","):e,ye=()=>H(new Date).toISOString(),me=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],fe=[12,1,2,3,4,5,6,7,8,9,10,11],he=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],ge=(e,n,t=0)=>{const r=new Intl.DateTimeFormat(e,{weekday:"ios"===n?"short":"narrow"}),u=new Date("11/01/2020"),d=[];for(let i=t;i<t+7;i++){const s=new Date(u);s.setDate(s.getDate()+i),d.push(r.format(s))}return d},De=(e,n,t)=>{const o=c(e,n),r=new Date(`${e}/1/${n}`).getDay(),u=r>=t?r-(t+1):6-(t-r);let d=[];for(let i=1;i<=o;i++)d.push({day:i,dayOfWeek:(u+i)%7});for(let i=0;i<=u;i++)d=[{day:null,dayOfWeek:null},...d];return d},Te=e=>[j(e),{month:e.month,year:e.year,day:e.day},z(e)],we=(e,n,t,o,r,u={month:"long"})=>{const{year:d}=n,i=[];if(void 0!==r){let s=r;void 0!==o?.month&&(s=s.filter(y=>y<=o.month)),void 0!==t?.month&&(s=s.filter(y=>y>=t.month)),s.forEach(y=>{const l=new Date(`${y}/1/${d} GMT+0000`),a=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(l);i.push({text:a,value:y})})}else{const s=o&&o.year===d?o.month:12;for(let l=t&&t.year===d?t.month:1;l<=s;l++){const a=new Date(`${l}/1/${d} GMT+0000`),m=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(a);i.push({text:m,value:l})}}return i},W=(e,n,t,o,r,u={day:"numeric"})=>{const{month:d,year:i}=n,s=[],y=c(d,i),l=o?.day&&o.year===i&&o.month===d?o.day:y,a=t?.day&&t.year===i&&t.month===d?t.day:1;if(void 0!==r){let m=r;m=m.filter(D=>D>=a&&D<=l),m.forEach(D=>{const w=new Date(`${d}/${D}/${i} GMT+0000`),p=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(w);s.push({text:p,value:D})})}else for(let m=a;m<=l;m++){const D=new Date(`${d}/${m}/${i} GMT+0000`),w=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(D);s.push({text:w,value:m})}return s},ve=(e,n,t,o)=>{let r=[];if(void 0!==o)r=o,void 0!==t?.year&&(r=r.filter(u=>u<=t.year)),void 0!==n?.year&&(r=r.filter(u=>u>=n.year));else{const{year:u}=e,i=n?.year||u-100;for(let s=t?.year||u;s>=i;s--)r.push(s)}return r.map(u=>({text:`${u}`,value:u}))},Y=(e,n)=>e.month===n.month&&e.year===n.year?[e]:[e,...Y(z(e),n)],Me=(e,n,t,o,r,u,d)=>{let i=[],s=[],y=Y(o,r);return d&&(y=y.filter(({month:l})=>d.includes(l))),y.forEach(l=>{const a={month:l.month,day:null,year:n.year},m=W(e,a,o,r,u,{month:"short",day:"numeric",weekday:"short"}),D=[],w=[];m.forEach(p=>{const be=M(Object.assign(Object.assign({},a),{day:p.value}),t);w.push({text:be?se(e):p.text,value:`${n.year}-${l.month}-${p.value}`}),D.push({month:l.month,year:n.year,day:p.value})}),s=[...s,...D],i=[...i,...w]}),{parts:s,items:i}},Ie=(e,n,t,o,r,u,d)=>{const i=C(e,t),{hours:s,minutes:y,am:l,pm:a}=((e,n="h12",t,o,r,u)=>{const d="h23"===n;let i=d?he:fe,s=me,y=!0,l=!0;if(r&&(i=i.filter(a=>r.includes(a))),u&&(s=s.filter(a=>u.includes(a))),t)if(M(e,t)){if(void 0!==t.hour&&(i=i.filter(a=>(d?a:"pm"===e.ampm?(a+12)%24:a)>=t.hour),y=t.hour<13),void 0!==t.minute){let a=!1;void 0!==t.hour&&void 0!==e.hour&&e.hour>t.hour&&(a=!0),s=s.filter(m=>!!a||m>=t.minute)}}else I(e,t)&&(i=[],s=[],y=l=!1);return o&&(M(e,o)?(void 0!==o.hour&&(i=i.filter(a=>(d?a:"pm"===e.ampm?(a+12)%24:a)<=o.hour),l=o.hour>=13),void 0!==o.minute&&e.hour===o.hour&&(s=s.filter(a=>a<=o.minute))):g(e,o)&&(i=[],s=[],y=l=!1)),{hours:i,minutes:s,am:y,pm:l}})(n,i?"h23":"h12",o,r,u,d),m=s.map(p=>({text:oe(p,i),value:P(p,i,n.ampm)})),D=y.map(p=>({text:Z(p),value:p})),w=[];return l&&!i&&w.push({text:R(e,"am"),value:"am"}),a&&!i&&w.push({text:R(e,"pm"),value:"pm"}),{minutesData:D,hoursData:m,dayPeriodData:w}},$e=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,_e=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,Oe=e=>{if(void 0===e)return;let t,n=e;return"string"==typeof e&&(n=e.replace(/\[|\]|\s/g,"").split(",")),t=Array.isArray(n)?n.map(o=>parseInt(o,10)).filter(isFinite):[n],t},Ae=e=>({month:parseInt(e.getAttribute("data-month"),10),day:parseInt(e.getAttribute("data-day"),10),year:parseInt(e.getAttribute("data-year"),10),dayOfWeek:parseInt(e.getAttribute("data-day-of-week"),10)});function k(e){if(Array.isArray(e))return e.map(o=>k(o));let n=null;if(null!=e&&""!==e&&(n=_e.exec(e),n?(n.unshift(void 0,void 0),n[2]=n[3]=void 0):n=$e.exec(e)),null===n)return;for(let o=1;o<8;o++)n[o]=void 0!==n[o]?parseInt(n[o],10):void 0;let t=0;return n[9]&&n[10]&&(t=60*parseInt(n[10],10),n[11]&&(t+=parseInt(n[11],10)),"-"===n[9]&&(t*=-1)),{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],tzOffset:t}}const Ce=(e,n,t)=>n&&I(e,n)?n:t&&g(e,t)?t:e,Ee=e=>e>=12?"pm":"am",ke=(e,n)=>{const{month:t,day:o,year:r,hour:u,minute:d}=k(e),i=r??n.year,s=t??12;return{month:s,day:o??c(s,i),year:i,hour:u??23,minute:d??59}},Fe=(e,n)=>{const{month:t,day:o,year:r,hour:u,minute:d}=k(e);return{month:t??1,day:o??1,year:r??n.year,hour:u??0,minute:d??0}}},2854:(L,O,$)=>{$.d(O,{c:()=>I,g:()=>v,h:()=>M,o:()=>C});var A=$(5861);const M=(c,f)=>null!==f.closest(c),I=(c,f)=>"string"==typeof c&&c.length>0?Object.assign({"ion-color":!0,[`ion-color-${c}`]:!0},f):f,v=c=>{const f={};return(c=>void 0!==c?(Array.isArray(c)?c:c.split(" ")).filter(h=>null!=h).map(h=>h.trim()).filter(h=>""!==h):[])(c).forEach(h=>f[h]=!0),f},F=/^[a-z][a-z0-9+\-.]*:/,C=function(){var c=(0,A.Z)(function*(f,h,T,E){if(null!=f&&"#"!==f[0]&&!F.test(f)){const _=document.querySelector("ion-router");if(_)return h?.preventDefault(),_.push(f,T,E)}return!1});return function(h,T,E,_){return c.apply(this,arguments)}}()}}]);