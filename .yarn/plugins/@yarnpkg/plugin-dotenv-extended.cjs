/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-dotenv-extended",
factory: function (require) {
"use strict";var plugin=(()=>{var Ce=Object.create;var b=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,Ne=Object.prototype.hasOwnProperty;var l=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,n)=>(typeof require<"u"?require:r)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Se=(e,r)=>{for(var n in r)b(e,n,{get:r[n],enumerable:!0})},I=(e,r,n,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of be(r))!Ne.call(e,t)&&t!==n&&b(e,t,{get:()=>r[t],enumerable:!(i=_e(r,t))||i.enumerable});return e};var T=(e,r,n)=>(n=e!=null?Ce(we(e)):{},I(r||!e||!e.__esModule?b(n,"default",{value:e,enumerable:!0}):n,e)),Le=e=>I(b({},"__esModule",{value:!0}),e);var L=c((cr,S)=>{var je=l("fs"),Ae=l("path");function H(e){console.log(`[dotenv][DEBUG] ${e}`)}var Fe=`
`,qe=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,xe=/\\n/g,Re=/\n|\r|\r\n/;function $(e,r){let n=Boolean(r&&r.debug),i={};return e.toString().split(Re).forEach(function(t,a){let f=t.match(qe);if(f!=null){let g=f[1],o=f[2]||"",s=o.length-1,p=o[0]==='"'&&o[s]==='"';o[0]==="'"&&o[s]==="'"||p?(o=o.substring(1,s),p&&(o=o.replace(xe,Fe))):o=o.trim(),i[g]=o}else n&&H(`did not match key and value when parsing line ${a+1}: ${t}`)}),i}function Me(e){let r=Ae.resolve(process.cwd(),".env"),n="utf8",i=!1;e&&(e.path!=null&&(r=e.path),e.encoding!=null&&(n=e.encoding),e.debug!=null&&(i=!0));try{let t=$(je.readFileSync(r,{encoding:n}),{debug:i});return Object.keys(t).forEach(function(a){Object.prototype.hasOwnProperty.call(process.env,a)?i&&H(`"${a}" is already defined in \`process.env\` and will not be overwritten`):process.env[a]=t[a]}),{parsed:t}}catch(t){return{error:t}}}S.exports.config=Me;S.exports.parse=$});var V=c((ur,G)=>{"use strict";G.exports=function(){}});var J=c((lr,k)=>{"use strict";var Ue=V();(function(){var e="name";if(typeof Ue.name!="string")try{Object.defineProperty(Function.prototype,e,{get:function(){var n=this.toString().trim().match(/^function\s*([^\s(]+)/),i=n?n[1]:"";return Object.defineProperty(this,e,{value:i}),i}})}catch{}})();k.exports=function(r){return r.name}});var Q=c((dr,B)=>{"use strict";J();function h(e,r){return arguments.length===2?h.is(e,r):h.get(e,!0)}h.is=function(e,r){return h.get(e,typeof r=="string")===r};h.get=function(e,r){return typeof e=="string"?r?"string":String:e===null?r?"null":null:e===void 0?r?"undefined":void 0:e!==e?r?"nan":NaN:r?e.constructor.name.toLowerCase():e.constructor};B.exports=h});var Z=c((gr,X)=>{X.exports=E;var d=Q();function j(e){return e.replace(/[""'']/ig,"").trim().toLowerCase()}function Pe(e){return W(e)||!1}function W(e){return e?typeof e=="number"||typeof e=="boolean"?!!e:(e=j(e),e==="true"||e==="1"?!0:e==="false"||e==="0"?!1:null):!1}function z(e){if(d(e,Array))return e.map(function(n,i){return E(n)});if(d(e,Object)||e.constructor===void 0){for(var r in e)e[r]=E(e[r]);return e}return{}}function De(e){return E(e())}function Ie(e,r){if(e&&e.constructor===r||d(e,r))return e;var n=r;switch(r&&r.name&&(n=r.name.toLowerCase()),n=j(n),n){case"string":return typeof e=="object"?JSON.stringify(e):String(e);case"function":return d(e,Function)?e:function(t){return typeof t=="function"&&t(e),e};case"date":return new Date(e);case"object":var i;try{i=JSON.parse(e)}catch{}return d(i,Object)||d(i,Array)?E(i):d(i,"undefined")?z(e):{};case"boolean":return Pe(e);case"number":return Number(e);case"undefined":return;case"null":return null;case"array":return[e];default:if(typeof r=="function")return new r(e);throw new Error("Unsupported type.")}}function E(e,r){if(r)return Ie(e,r);var n=e;if(e===null)return null;if(e!==void 0){if(e instanceof Date||e instanceof RegExp||typeof e=="number"||typeof e=="boolean")return e;if(typeof e=="function")return De(e);if(typeof e=="object")return z(e);if(e==="NaN")return NaN;var i=null;try{i=JSON.parse(e)}catch{try{i=JSON.parse(e.trim().replace(/(\\\\")|(\\")/gi,'"').replace(/(\\n|\\\\n)/gi,"").replace(/(^"|"$)|(^'|'$)/gi,""))}catch{try{i=JSON.parse(e.trim().replace(/'/gi,'"'))}catch{}}}if(i&&typeof i=="object")return E(i);if(e=j(e),!(e==="undefined"||e==="")){if(e==="null")return null;var t=Number(e);if(d(t,Number))return t;var a=W(e);return d(a,Boolean)?a:String(n)}}}});var K=c((pr,A)=>{"use strict";var Te=e=>{let r=!1,n=!1,i=!1;for(let t=0;t<e.length;t++){let a=e[t];r&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,t)+"-"+e.slice(t),r=!1,i=n,n=!0,t++):n&&i&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,t-1)+"-"+e.slice(t-1),i=n,n=!1,r=!0):(r=a.toLowerCase()===a&&a.toUpperCase()!==a,i=n,n=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e},Y=(e,r)=>{if(!(typeof e=="string"||Array.isArray(e)))throw new TypeError("Expected the input to be `string | string[]`");r=Object.assign({pascalCase:!1},r);let n=t=>r.pascalCase?t.charAt(0).toUpperCase()+t.slice(1):t;return Array.isArray(e)?e=e.map(t=>t.trim()).filter(t=>t.length).join("-"):e=e.trim(),e.length===0?"":e.length===1?r.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=Te(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(t,a)=>a.toUpperCase()).replace(/\d+(\w|$)/g,t=>t.toUpperCase()),n(e))};A.exports=Y;A.exports.default=Y});var ne=c(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.default=m.getConfigFromEnv=void 0;var He=ee(Z()),$e=ee(K());function ee(e){return e&&e.__esModule?e:{default:e}}var re=function(r){var n={};return Object.keys(r).forEach(function(i){var t=i.split("DOTENV_CONFIG_");t.length===2&&t[0]===""&&t[1].length&&(n[(0,$e.default)(t[1])]=(0,He.default)(r[i]))}),n};m.getConfigFromEnv=re;var Ge=re;m.default=Ge});var ae=c(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.default=O.loadEnvironmentFile=void 0;var Ve=te(l("fs")),ke=te(L());function te(e){return e&&e.__esModule?e:{default:e}}var ie=function(r,n,i){try{var t=Ve.default.readFileSync(r,n);return ke.default.parse(t)}catch(a){return i||console.error(a.message),{}}};O.loadEnvironmentFile=ie;var Je=ie;O.default=Je});var ce=c(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});u.default=u.load=u.config=u.parse=void 0;var oe=q(L()),Be=q(ne()),F=q(ae());function q(e){return e&&e.__esModule?e:{default:e}}var fe=oe.default.parse.bind(oe.default);u.parse=fe;var x=function(r){var n,i,t={encoding:"utf8",silent:!0,path:".env",defaults:".env.defaults",schema:".env.schema",errorOnMissing:!1,errorOnExtra:!1,errorOnRegex:!1,includeProcessEnv:!1,assignToProcessEnv:!0,overrideProcessEnv:!1},a=(0,Be.default)(process.env);r=Object.assign({},t,a,r),n=(0,F.default)(r.defaults,r.encoding,r.silent),i=(0,F.default)(r.path,r.encoding,r.silent);var f=Object.assign({},n,i),g=r.includeProcessEnv?Object.assign({},f,process.env):f,o=Object.keys(f),s=Object.keys(g);if(r.errorOnMissing||r.errorOnExtra||r.errorOnRegex){var p=(0,F.default)(r.schema,r.encoding,r.silent),_=Object.keys(p),U=_.filter(function(v){return s.indexOf(v)<0}),P=o.filter(function(v){return _.indexOf(v)<0});if(r.errorOnMissing&&U.length)throw new Error("MISSING CONFIG VALUES: "+U.join(", "));if(r.errorOnExtra&&P.length)throw new Error("EXTRA CONFIG VALUES: "+P.join(", "));if(r.errorOnRegex){var D=_.filter(function(v){if(p[v])return!new RegExp(p[v]).test(typeof g[v]=="string"?g[v]:"")});if(D.length)throw new Error("REGEX MISMATCH: "+D.join(", "))}}if(r.includeProcessEnv&&!r.overrideProcessEnv)for(var y=0;y<s.length;y++)typeof process.env[s[y]]<"u"&&(f[s[y]]=process.env[s[y]]);if(r.assignToProcessEnv)if(r.overrideProcessEnv)Object.assign(process.env,f);else{var ye=Object.assign({},f,process.env);Object.assign(process.env,ye)}return f};u.config=x;var se=x;u.load=se;var Qe={parse:fe,config:x,load:se};u.default=Qe});var de=c((mr,le)=>{"use strict";var ue=l("os");function We(){var e=process.env,r=e.HOME,n=e.LOGNAME||e.USER||e.LNAME||e.USERNAME;return process.platform==="win32"?e.USERPROFILE||e.HOMEDRIVE+e.HOMEPATH||r||null:process.platform==="darwin"?r||(n?"/Users/"+n:null):process.platform==="linux"?r||(process.getuid()===0?"/root":n?"/home/"+n:null):r||null}le.exports=typeof ue.homedir=="function"?ue.homedir:We});var pe=c((Or,ge)=>{"use strict";ge.exports=de()()});var me=c((yr,C)=>{"use strict";var he=l("fs"),R=l("path"),ze=pe(),Xe=he.readFileSync,Ze=he.statSync,w=R.join,Ye=R.resolve,Ke=".config",er="utf8",rr=/^\./,ve=R.sep;function nr(e,r,n){r=w(e,r);var i=w(r,n),t=Ze(i);return t&&{cwd:e,dir:r,path:i}}function tr(e,r,n){r=w(e,r);var i=w(r,n),t=l.resolve(i);return t&&{cwd:e,dir:r,path:t}}function M(e,r){var n=Ee(e,r);return n&&n.path}function Ee(e,r){if(!e)return null;r=r||{};var n,i=r.dir!==null&&r.dir!==void 0?r.dir:Ke,t=r.dot?e:e.replace(rr,""),a=r.module?tr:nr,f=Ye(r.cwd||".").split(ve),g=f.length;function o(s){try{return a(s,"",e)}catch{}try{return a(s,i,t)}catch{}}for(;g--;){if(n=o(f.join(ve)),n)return n;f.pop()}return(r.home||r.home===null||r.home===void 0)&&(n=o(ze),n)?n:null}function ir(e,r){if(!e)return null;r=r||{};var n=M(e,r);return n&&Xe(n,{encoding:r.encoding||er,flag:r.flag})}function ar(e,r){if(!e)return null;r=r||{},r.module=!0;var n=M(e,r);return n&&l(n)}C.exports=M;C.exports.obj=Ee;C.exports.read=ir;C.exports.require=ar});var fr={};Se(fr,{hooks:()=>or});var Oe=T(ce()),N=T(me()),or={async setupScriptEnvironment(e,r){let n=Oe.default.load({path:(0,N.default)(".env")||void 0,defaults:(0,N.default)(".env.defaults")||void 0,schema:(0,N.default)(".env.schema")||void 0});Object.assign(r,n)}};return Le(fr);})();
return plugin;
}
};