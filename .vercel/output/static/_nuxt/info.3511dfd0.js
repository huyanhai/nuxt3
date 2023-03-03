import{_ as j}from"./nuxt-link.ac0f93da.js";import{e as H,j as v,p as D,q as U,t as F,v as C,x as M,u as k,y as N,f as R,h as T,z as E,A as L,o as $,b as K,m as V,B as W,k as I,w as q,l as P}from"./entry.cb91ffea.js";import{u as J}from"./composables.d1aa9b85.js";import"./app.config.0f1511e6.js";const Z=()=>null;function G(...n){var u;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,t,e={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??Z,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=H(),o=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],c=()=>o()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:v(o()??((u=e.default)==null?void 0:u.call(e))??null),pending:v(!c()),error:v(a.payload._errors[s]?D(a.payload._errors[s]):null)});const i={...a._asyncData[s]};i.refresh=i.execute=(p={})=>{if(a._asyncDataPromises[s]){if(p.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(p._initial&&c())return o();i.pending.value=!0;const _=new Promise((l,y)=>{try{l(t(a))}catch(B){y(B)}}).then(l=>{if(_.cancelled)return a._asyncDataPromises[s];e.transform&&(l=e.transform(l)),e.pick&&(l=Q(l,e.pick)),i.data.value=l,i.error.value=null}).catch(l=>{var y;if(_.cancelled)return a._asyncDataPromises[s];i.error.value=l,i.data.value=k(((y=e.default)==null?void 0:y.call(e))??null)}).finally(()=>{_.cancelled||(i.pending.value=!1,a.payload.data[s]=i.data.value,i.error.value&&(a.payload._errors[s]=D(i.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=_,a._asyncDataPromises[s]};const f=()=>i.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const p=U();if(p&&!p._nuxtOnBeforeMountCbs){p._nuxtOnBeforeMountCbs=[];const l=p._nuxtOnBeforeMountCbs;p&&(F(()=>{l.forEach(y=>{y()}),l.splice(0,l.length)}),C(()=>l.splice(0,l.length)))}h&&a.isHydrating&&c()?i.pending.value=!1:p&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?p._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&M(e.watch,()=>i.refresh());const _=a.hook("app:data:refresh",l=>{if(!l||l.includes(s))return i.refresh()});p&&C(_)}const d=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(d,i),d}function Q(n,r){const s={};for(const t of r)s[t]=n[t];return s}const X={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function Y(n,r={}){r={...X,...r};const s=A(r);return s.dispatch(n),s.toString()}function A(n){const r=[];let s=[];const t=e=>{r.push(e)};return{toString(){return r.join("")},getContext(){return s},dispatch(e){return n.replacer&&(e=n.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const a=/\[object (.*)]/i,o=Object.prototype.toString.call(e),c=a.exec(o),i=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let f=null;if((f=s.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(s.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](e);else{if(n.ignoreUnknown)return t("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let h=Object.keys(e);n.unorderedObjects&&(h=h.sort()),n.respectType!==!1&&!z(e)&&h.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(h=h.filter(function(d){return!n.excludeKeys(d)})),t("object:"+h.length+":");for(const d of h)this.dispatch(d),t(":"),n.excludeValues||this.dispatch(e[d]),t(",")}},_array(e,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,t("array:"+e.length+":"),!a||e.length<=1){for(const i of e)this.dispatch(i);return}const o=[],c=e.map(i=>{const f=A(n);return f.dispatch(i),o.push(f.getContext()),f.toString()});return s=[...s,...o],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),z(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const a=[...e];return this._array(a,n.unorderedSets!==!1)},_set(e){t("set:");const a=[...e];return this._array(a,n.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function z(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class S{constructor(r,s){r=this.words=r||[],this.sigBytes=s!==void 0?s:r.length*4}toString(r){return(r||tt).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new S([...this.words])}}const tt={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},et={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,a=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|a<<8|o;for(let i=0;i<4&&t*8+i*6<n.sigBytes*8;i++)s.push(r.charAt(c>>>6*(3-i)&63))}return s.join("")}},st={parse(n){const r=n.length,s=[];for(let t=0;t<r;t++)s[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new S(s,r)}},rt={parse(n){return st.parse(unescape(encodeURIComponent(n)))}};class nt{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new S,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=rt.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,e),this._data.sigBytes-=a}return new S(s,a)}}class at extends nt{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const it=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ot=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class ct extends at{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new S([...it])}_doProcessBlock(r,s){const t=this._hash.words;let e=t[0],a=t[1],o=t[2],c=t[3],i=t[4],f=t[5],h=t[6],d=t[7];for(let u=0;u<64;u++){if(u<16)b[u]=r[s+u]|0;else{const x=b[u-15],w=(x<<25|x>>>7)^(x<<14|x>>>18)^x>>>3,m=b[u-2],O=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;b[u]=w+b[u-7]+O+b[u-16]}const p=i&f^~i&h,_=e&a^e&o^a&o,l=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),y=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),B=d+y+p+ot[u]+b[u],g=l+_;d=h,h=f,f=i,i=c+B|0,c=o,o=a,a=e,e=B+g|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+o|0,t[3]=t[3]+c|0,t[4]=t[4]+i|0,t[5]=t[5]+f|0,t[6]=t[6]+h|0,t[7]=t[7]+d|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function lt(n){return new ct().finalize(n).toString(et)}function ut(n,r={}){const s=typeof n=="string"?n:Y(n,r);return lt(s).slice(0,10)}function ft(n,r,s){const[t={},e]=typeof r=="string"?[{},r]:[r,s],a=t.key||ut([e,k(t.baseURL),typeof n=="string"?n:"",k(t.params||t.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===e?"$f"+a:a,c=N(()=>{let w=n;return typeof w=="function"&&(w=w()),k(w)}),{server:i,lazy:f,default:h,transform:d,pick:u,watch:p,immediate:_,...l}=t,y=R({...l,cache:typeof t.cache=="boolean"?void 0:t.cache}),B={server:i,lazy:f,default:h,transform:d,pick:u,immediate:_,watch:[y,c,...p||[]]};let g;return G(o,()=>{var m;return(m=g==null?void 0:g.abort)==null||m.call(g),g=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(c.value,{signal:g.signal,...y})},B)}const ht=P("div",null,"info 页面",-1),pt=P("button",null,"返回",-1),mt=T({__name:"info",async setup(n){let r,s;const t=E();J({title:t.meta.title,bodyAttrs:{class:"info"},link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto&display=swap",crossorigin:""}],script:[]});const{data:e}=([r,s]=L(()=>ft(()=>"/api/show/2",{body:"12ww",headers:{cus:"123s"},params:{id:1},query:{ids:1}},"$ZULP8SVrHT")),r=await r,s(),r);return(a,o)=>{const c=j;return $(),K("div",null,[V(W(k(e))+" ",1),ht,I(c,{to:"/"},{default:q(()=>[pt]),_:1})])}}});export{mt as default};