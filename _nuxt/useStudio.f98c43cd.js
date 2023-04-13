import{a as X,J as W,ai as V,B as R,W as Y,_ as ee,M as te,o as q,e as L,v as ne,F as ie,f,s as K,h as J,j as D,T as B,t as oe,aj as T,a5 as E,p as ae,k as se,m as re,A as ce,ad as z,q as le,ak as U,z as j,al as H,am as ue,an as de,a9 as O}from"./entry.5fcc1a1f.js";import{r as pe}from"./asyncData.22e0c354.js";/* empty css                               */const b=o=>(ae("data-v-539e2e27"),o=o(),se(),o),ve=b(()=>f("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[f("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),fe=b(()=>f("span",null,"Preview mode enabled",-1)),we={key:0},he=b(()=>f("div",{id:"__preview_background"},null,-1)),me=b(()=>f("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ye=b(()=>f("p",null,"Initializing the preview...",-1)),_e={key:0},ke=b(()=>f("div",{id:"__preview_background"},null,-1)),ge={id:"__preview_loader"},Ce=X({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(o){const a=o,c=["__nuxt_preview","__preview_enabled"],v=W(),_=V(),r=R(!0),k=R(!1),n=R(!1),d=R("");let s;const m=()=>{T("previewToken").value="",E().query.preview="",window.location.reload()},A=async x=>{const h=await a.syncPreview(x);if(n.value!==!0){if(!h){setTimeout(()=>A(x),1e3);return}n.value=!0,v.callHook("nuxt-studio:preview:ready"),_.replace({query:{}}),window.parent&&window.self!==window.parent&&s.disconnect()}};return Y(async()=>{s=(await ee(()=>import("./index.9fea434a.js"),[],import.meta.url)).connect(`${a.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:a.previewToken.value}});let h;s.on("connect",()=>{h=setTimeout(()=>{n.value||(h=setTimeout(()=>{d.value="Preview sync timed out",n.value=!1},3e4),s.emit("draft:requestSync"))},3e4)});const C=()=>{h&&(clearTimeout(h),h=null)};s.on("draft:sync",async P=>{if(C(),!P){try{s.once("draft:ready",()=>{s.emit("draft:requestSync")}),await a.requestPreviewSyncAPI()}catch($){switch(C(),$.response.status){case 404:d.value="Preview draft not found",n.value=!1;break;default:d.value="An error occurred while syncing preview",n.value=!1}}return}A(P)}),s.on("draft:unauthorized",()=>{C(),d.value="Unauthorized preview token",n.value=!1}),s.on("disconnect",()=>{C()}),document.body.classList.add(...c),s.on("draft:update",P=>{k.value=!0,a.syncPreview(P),k.value=!1})}),te(()=>{document.body.classList.remove(...c)}),(x,h)=>(q(),L("div",null,[r.value?(q(),L("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:n.value,__preview_refreshing:k.value})},[n.value?(q(),L(ie,{key:0},[ve,fe,f("button",{onClick:m}," Close ")],64)):K("",!0)],2)):K("",!0),J(B,{name:"preview-loading"},{default:D(()=>[r.value&&!n.value&&!d.value?(q(),L("div",we,[he,f("div",{id:"__preview_loader"},[me,ye,f("button",{onClick:m}," Cancel ")])])):K("",!0)]),_:1}),J(B,{name:"preview-loading"},{default:D(()=>[d.value?(q(),L("div",_e,[ke,f("div",ge,[f("p",null,oe(d.value),1),f("button",{onClick:m}," Exit preview ")])])):K("",!0)]),_:1})]))}}),Pe=re(Ce,[["__scopeId","data-v-539e2e27"]]),Se=(o=[],a,c)=>{const v=[...a||[]],_=[...c||[]],r=JSON.parse(JSON.stringify(o));for(const n of v)if(n.oldPath)if(_.splice(_.findIndex(s=>s.path===n.oldPath),1),v.find(s=>s.path===n.oldPath))r.push({path:n.path,parsed:n.parsed});else{const s=r.find(m=>m.path===n.oldPath);s&&(s.path=n.path,n.parsed?s.parsed=n.parsed:n.pathMeta&&["_file","_path","_id","_locale"].forEach(m=>{s.parsed[m]=n.pathMeta[m]}))}else if(n.new)r.push({path:n.path,parsed:n.parsed});else{const d=r.find(s=>s.path===n.path);d&&Object.assign(d,{path:n.path,parsed:n.parsed})}for(const n of _)r.splice(r.findIndex(d=>d.path===n.path),1);const k=new Intl.Collator(void 0,{numeric:!0});return r.sort((n,d)=>k.compare(n.path,d.path)),r},F=".studio",I={appConfig:`${F}/app.config.json`,tokensConfig:`${F}/tokens.config.json`},Te=o=>{let a;return(...c)=>(a||(a=o()),a)};function Z(o,a){for(const c in o){const v=a[c];c in a||delete o[c],v!==null&&typeof v=="object"&&Z(o[c],a[c])}}function G(o,a){for(const c in a){const v=a[c];v!==null&&typeof v=="object"?(o[c]=o[c]||{},G(o[c],v)):o[c]=v}}const xe=Te(()=>JSON.parse(JSON.stringify(j()))),qe=()=>{const o=W(),{studio:a,content:c}=ce().public;E();const v=xe();let _;const r=z("studio-client-db",()=>null),k=z("studio-preview-db-files",()=>[]);r.value||(o.hook("content:storage",e=>{r.value=e}),le("/non-existing-path").findOne());const n=async(e,t,l=!0)=>{const p=T("previewToken",{sameSite:"none",secure:!0}),i=await e.getKeys(`${p.value}:`);await Promise.all(i.map(w=>e.removeItem(w)));const u=new Set(t.map(w=>w.parsed._id.split(":").shift()));await e.setItem(`${p.value}$`,JSON.stringify({ignoreSources:Array.from(u)})),await Promise.all(t.map(w=>e.setItem(`${p.value}:${w.parsed._id}`,JSON.stringify(w.parsed))))},d=e=>{const t=U(o,j);G(t,H(e,v)),e||Z(t,v)},s=e=>{var l,p,i,u;const t=(u=(i=(p=(l=o==null?void 0:o.vueApp)==null?void 0:l._context)==null?void 0:p.config)==null?void 0:i.globalProperties)==null?void 0:u.$pinceauTheme;!t||!(t!=null&&t.updateTheme)||(_||(_=JSON.parse(JSON.stringify((t==null?void 0:t.theme.value)||{}))),U(o,t.updateTheme,[H(e,_)]))},m=async e=>{if(k.value=e.files=e.files||k.value||[],!r.value)return!1;const t=Se(e.files,e.additions,e.deletions),l=t.filter(u=>!u.path.startsWith(F));await n(r.value,l,(e.files||[]).length!==0);const p=t.find(u=>u.path===I.appConfig);d(p==null?void 0:p.parsed);const i=t.find(u=>u.path===I.tokensConfig);return s(i==null?void 0:i.parsed),$(),!0},A=async()=>{const e=T("previewToken",{sameSite:"none",secure:!0});await $fetch("api/projects/preview/sync",{baseURL:a==null?void 0:a.apiURL,method:"POST",params:{token:e.value}})},x=()=>{const e=T("previewToken",{sameSite:"none",secure:!0}),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),ue(Pe,{previewToken:e,apiURL:a==null?void 0:a.apiURL,syncPreview:m,requestPreviewSyncAPI:A}).mount(t)},h=async e=>{var p,i,u;const t=T("previewToken",{sameSite:"none",secure:!0});if(!e)return null;e=e.replace(/\/$/,"");let l=await((p=r.value)==null?void 0:p.getItem(`${t.value}:${e}`));return l||(l=await((i=r.value)==null?void 0:i.getItem(`cached:${e}`))),l||(l=l=await((u=r.value)==null?void 0:u.getItem(e))),l},C=e=>{var l;const t=T("previewToken",{sameSite:"none",secure:!0});r.value&&r.value.setItem(`${t.value}:${(l=e.parsed)==null?void 0:l._id}`,JSON.stringify(e.parsed))},P=async e=>{var l;const t=T("previewToken",{sameSite:"none",secure:!0});await((l=r.value)==null?void 0:l.removeItem(`${t.value}:${e}`))},$=async()=>{if(c!=null&&c.documentDriven){const{pages:e}=U(o,de);for(const t in e.value)e.value[t]&&(e.value[t]=await h(e.value[t]._id))}U(o,pe)};return{apiURL:a==null?void 0:a.apiURL,contentStorage:r,syncPreviewFiles:n,syncPreviewAppConfig:d,syncPreviewTokensConfig:s,requestPreviewSynchronization:A,findContentWithId:h,updateContent:C,removeContentWithId:P,requestRerender:$,mountPreviewUI:x,initiateIframeCommunication:Q};function Q(){if(!window.parent||window.self===window.parent)return;const e=V(),t=R(""),l=R(!0),p=i=>({path:i.path,query:O(i.query),params:O(i.params),fullPath:i.fullPath,meta:O(i.meta)});window.addEventListener("keydown",i=>{(i.metaKey||i.ctrlKey||i.altKey||i.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:i.key,metaKey:i.metaKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,altKey:i.altKey}},"*")}),window.addEventListener("message",async i=>{const{type:u,payload:w={}}=i.data||{};switch(u){case"nuxt-studio:editor:file-selected":{const y=await h(w.path);y&&(y._partial||y._path!==E().path&&(t.value=y._path,e.push(y._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:y=[],deletions:N=[]}=w;for(const g of y)await C(g);for(const g of N)await P(g.path);$();break}case"nuxt-studio:preview:sync":{m(w);break}case"nuxt-studio:config:file-changed":{const{additions:y=[],deletions:N=[]}=w,g=y.find(S=>S.path===I.appConfig);g&&d(g==null?void 0:g.parsed),N.find(S=>S.path===I.appConfig)&&d(void 0);const M=y.find(S=>S.path===I.tokensConfig);M&&s(M==null?void 0:M.parsed),N.find(S=>S.path===I.tokensConfig)&&s(void 0);break}}}),o.hook("content:document-driven:finish",({route:i,page:u,dedup:w})=>{if(w||l.value){l.value=!1;return}if(u&&t.value===u._path){t.value="";return}window.parent.postMessage({type:"nuxt-studio:preview:document-driven:finish",payload:{...p(i),contentId:u==null?void 0:u._id}},"*")}),o.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:p(E())},"*"),e==null||e.afterEach(i=>{window.parent.postMessage({type:"nuxt-studio:preview:route-changed",payload:p(i)},"*")})})}};export{qe as useStudio};
