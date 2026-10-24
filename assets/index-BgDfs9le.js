const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-OlGR-Sc5.js","assets/App-BIo3l1qK.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},gr=[],Ln=()=>{},pf=()=>!1,wo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ol=n=>n.startsWith("onUpdate:"),yt=Object.assign,Bl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},yh=Object.prototype.hasOwnProperty,nt=(n,e)=>yh.call(n,e),Ue=Array.isArray,_r=n=>gs(n)==="[object Map]",Fr=n=>gs(n)==="[object Set]",Sc=n=>gs(n)==="[object Date]",He=n=>typeof n=="function",_t=n=>typeof n=="string",Sn=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",mf=n=>(ct(n)||He(n))&&He(n.then)&&He(n.catch),gf=Object.prototype.toString,gs=n=>gf.call(n),Eh=n=>gs(n).slice(8,-1),_f=n=>gs(n)==="[object Object]",zl=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ts=Fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Th=/-\w/g,fn=Ro(n=>n.replace(Th,e=>e.slice(1).toUpperCase())),bh=/\B([A-Z])/g,bi=Ro(n=>n.replace(bh,"-$1").toLowerCase()),Co=Ro(n=>n.charAt(0).toUpperCase()+n.slice(1)),qo=Ro(n=>n?`on${Co(n)}`:""),_i=(n,e)=>!Object.is(n,e),ro=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Po=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ah=n=>{const e=_t(n)?Number(n):NaN;return isNaN(e)?n:e};let yc;const Lo=()=>yc||(yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Do(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?Ph(i):Do(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||ct(n))return n}const wh=/;(?![^(]*\))/g,Rh=/:([^]+)/,Ch=/\/\*[^]*?\*\//g;function Ph(n){const e={};return n.replace(Ch,"").split(wh).forEach(t=>{if(t){const i=t.split(Rh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zi(n){let e="";if(_t(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=Zi(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dh=Fl(Lh);function xf(n){return!!n||n===""}function Ih(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Yi(n[i],e[i]);return t}function Yi(n,e){if(n===e)return!0;let t=Sc(n),i=Sc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Sn(n),i=Sn(e),t||i)return n===e;if(t=Ue(n),i=Ue(e),t||i)return t&&i?Ih(n,e):!1;if(t=ct(n),i=ct(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Yi(n[o],e[o]))return!1}}return String(n)===String(e)}function kl(n,e){return n.findIndex(t=>Yi(t,e))}const Mf=n=>!!(n&&n.__v_isRef===!0),Ye=n=>_t(n)?n:n==null?"":Ue(n)||ct(n)&&(n.toString===gf||!He(n.toString))?Mf(n)?Ye(n.value):JSON.stringify(n,Sf,2):String(n),Sf=(n,e)=>Mf(e)?Sf(n,e.value):_r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$o(i,s)+" =>"]=r,t),{})}:Fr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$o(t))}:Sn(e)?$o(e):ct(e)&&!Ue(e)&&!_f(e)?String(e):e,$o=(n,e="")=>{var t;return Sn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class Uh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Vt;try{return Vt=this,e()}finally{Vt=t}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){this._on>0&&--this._on===0&&(Vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Nh(){return Vt}let dt;const Yo=new WeakSet;class yf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yo.has(this)&&(Yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ec(this),bf(this);const e=dt,t=xn;dt=this,xn=!0;try{return this.fn()}finally{Af(this),dt=e,xn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gl(e);this.deps=this.depsTail=void 0,Ec(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let Ef=0,ns,is;function Tf(n,e=!1){if(n.flags|=8,e){n.next=is,is=n;return}n.next=ns,ns=n}function Hl(){Ef++}function Vl(){if(--Ef>0)return;if(is){let e=is;for(is=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ns;){let e=ns;for(ns=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function bf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Af(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Gl(i),Fh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Na(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function wf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ls)||(n.globalVersion=ls,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Na(n))))return;n.flags|=2;const e=n.dep,t=dt,i=xn;dt=n,xn=!0;try{bf(n);const r=n.fn(n._value);(e.version===0||_i(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{dt=t,xn=i,Af(n),n.flags&=-3}}function Gl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Gl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Fh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let xn=!0;const Rf=[];function Jn(){Rf.push(xn),xn=!1}function Qn(){const n=Rf.pop();xn=n===void 0?!0:n}function Ec(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=dt;dt=void 0;try{e()}finally{dt=t}}}let ls=0;class Oh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!dt||!xn||dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==dt)t=this.activeLink=new Oh(dt,this),dt.deps?(t.prevDep=dt.depsTail,dt.depsTail.nextDep=t,dt.depsTail=t):dt.deps=dt.depsTail=t,Cf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=dt.depsTail,t.nextDep=void 0,dt.depsTail.nextDep=t,dt.depsTail=t,dt.deps===t&&(dt.deps=i)}return t}trigger(e){this.version++,ls++,this.notify(e)}notify(e){Hl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vl()}}}function Cf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Cf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Fa=new WeakMap,qi=Symbol(""),Oa=Symbol(""),cs=Symbol("");function Ut(n,e,t){if(xn&&dt){let i=Fa.get(n);i||Fa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Wl),r.map=i,r.key=t),r.track()}}function Xn(n,e,t,i,r,s){const o=Fa.get(n);if(!o){ls++;return}const a=l=>{l&&l.trigger()};if(Hl(),e==="clear")o.forEach(a);else{const l=Ue(n),c=l&&zl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===cs||!Sn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(cs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(qi)),_r(n)&&a(o.get(Oa)));break;case"delete":l||(a(o.get(qi)),_r(n)&&a(o.get(Oa)));break;case"set":_r(n)&&a(o.get(qi));break}}Vl()}function Qi(n){const e=Je(n);return e===n?e:(Ut(e,"iterate",cs),cn(n)?e:e.map(yn))}function Io(n){return Ut(n=Je(n),"iterate",cs),n}function hi(n,e){return ei(n)?br($i(n)?yn(e):e):yn(e)}const Bh={__proto__:null,[Symbol.iterator](){return Ko(this,Symbol.iterator,n=>hi(this,n))},concat(...n){return Qi(this).concat(...n.map(e=>Ue(e)?Qi(e):e))},entries(){return Ko(this,"entries",n=>(n[1]=hi(this,n[1]),n))},every(n,e){return Nn(this,"every",n,e,void 0,arguments)},filter(n,e){return Nn(this,"filter",n,e,t=>t.map(i=>hi(this,i)),arguments)},find(n,e){return Nn(this,"find",n,e,t=>hi(this,t),arguments)},findIndex(n,e){return Nn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Nn(this,"findLast",n,e,t=>hi(this,t),arguments)},findLastIndex(n,e){return Nn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Nn(this,"forEach",n,e,void 0,arguments)},includes(...n){return jo(this,"includes",n)},indexOf(...n){return jo(this,"indexOf",n)},join(n){return Qi(this).join(n)},lastIndexOf(...n){return jo(this,"lastIndexOf",n)},map(n,e){return Nn(this,"map",n,e,void 0,arguments)},pop(){return Vr(this,"pop")},push(...n){return Vr(this,"push",n)},reduce(n,...e){return Tc(this,"reduce",n,e)},reduceRight(n,...e){return Tc(this,"reduceRight",n,e)},shift(){return Vr(this,"shift")},some(n,e){return Nn(this,"some",n,e,void 0,arguments)},splice(...n){return Vr(this,"splice",n)},toReversed(){return Qi(this).toReversed()},toSorted(n){return Qi(this).toSorted(n)},toSpliced(...n){return Qi(this).toSpliced(...n)},unshift(...n){return Vr(this,"unshift",n)},values(){return Ko(this,"values",n=>hi(this,n))}};function Ko(n,e,t){const i=Io(n),r=i[e]();return i!==n&&!cn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const zh=Array.prototype;function Nn(n,e,t,i,r,s){const o=Io(n),a=o!==n&&!cn(n),l=o[e];if(l!==zh[e]){const f=l.apply(n,s);return a?yn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,hi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Tc(n,e,t,i){const r=Io(n);let s=t;return r!==n&&(cn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,hi(n,a),l,n)}),r[e](s,...i)}function jo(n,e,t){const i=Je(n);Ut(i,"iterate",cs);const r=i[e](...t);return(r===-1||r===!1)&&Yl(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Vr(n,e,t=[]){Jn(),Hl();const i=Je(n)[e].apply(n,t);return Vl(),Qn(),i}const kh=Fl("__proto__,__v_isRef,__isVue"),Pf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Sn));function Hh(n){Sn(n)||(n=String(n));const e=Je(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class Lf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Zh:Nf:s?Uf:If).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ue(e);if(!r){let l;if(o&&(l=Bh[t]))return l;if(t==="hasOwnProperty")return Hh}const a=Reflect.get(e,t,Ft(e)?e:i);if((Sn(t)?Pf.has(t):kh(t))||(r||Ut(e,"get",t),s))return a;if(Ft(a)){const l=o&&zl(t)?a:a.value;return r&&ct(l)?za(l):l}return ct(a)?r?za(a):ql(a):a}}class Df extends Lf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ue(e)&&zl(t);if(!this._isShallow){const c=ei(s);if(!cn(i)&&!ei(i)&&(s=Je(s),i=Je(i)),!o&&Ft(s)&&!Ft(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Ft(e)?e:r);return e===Je(r)&&(a?_i(i,s)&&Xn(e,"set",t,i):Xn(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Sn(t)||!Pf.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Ue(e)?"length":qi),Reflect.ownKeys(e)}}class Vh extends Lf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Gh=new Df,Wh=new Vh,Xh=new Df(!0);const Ba=n=>n,Cs=n=>Reflect.getPrototypeOf(n);function qh(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),o=_r(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ba:e?br:yn;return!e&&Ut(s,"iterate",l?Oa:qi),yt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ps(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function $h(n,e){const t={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);n||(_i(r,a)&&Ut(o,"get",r),Ut(o,"get",a));const{has:l}=Cs(o),c=e?Ba:n?br:yn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ut(Je(r),"iterate",qi),r.size},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return n||(_i(r,a)&&Ut(o,"has",r),Ut(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Je(a),c=e?Ba:n?br:yn;return!n&&Ut(l,"iterate",qi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return yt(t,n?{add:Ps("add"),set:Ps("set"),delete:Ps("delete"),clear:Ps("clear")}:{add(r){!e&&!cn(r)&&!ei(r)&&(r=Je(r));const s=Je(this);return Cs(s).has.call(s,r)||(s.add(r),Xn(s,"add",r,r)),this},set(r,s){!e&&!cn(s)&&!ei(s)&&(s=Je(s));const o=Je(this),{has:a,get:l}=Cs(o);let c=a.call(o,r);c||(r=Je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?_i(s,u)&&Xn(o,"set",r,s):Xn(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=Cs(s);let l=o.call(s,r);l||(r=Je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Xn(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&Xn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qh(r,n,e)}),t}function Xl(n,e){const t=$h(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Yh={get:Xl(!1,!1)},Kh={get:Xl(!1,!0)},jh={get:Xl(!0,!1)};const If=new WeakMap,Uf=new WeakMap,Nf=new WeakMap,Zh=new WeakMap;function Jh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qh(n){return n.__v_skip||!Object.isExtensible(n)?0:Jh(Eh(n))}function ql(n){return ei(n)?n:$l(n,!1,Gh,Yh,If)}function ep(n){return $l(n,!1,Xh,Kh,Uf)}function za(n){return $l(n,!0,Wh,jh,Nf)}function $l(n,e,t,i,r){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Qh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function $i(n){return ei(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function ei(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function Yl(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function tp(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&vf(n,"__v_skip",!0),n}const yn=n=>ct(n)?ql(n):n,br=n=>ct(n)?za(n):n;function Ft(n){return n?n.__v_isRef===!0:!1}function Rt(n){return np(n,!1)}function np(n,e){return Ft(n)?n:new ip(n,e)}class ip{constructor(e,t){this.dep=new Wl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||cn(e)||ei(e);e=i?e:Je(e),_i(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function ot(n){return Ft(n)?n.value:n}const rp={get:(n,e,t)=>e==="__v_raw"?n:ot(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ff(n){return $i(n)?n:new Proxy(n,rp)}class sp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Wl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return Tf(this,!0),!0}get value(){const e=this.dep.track();return wf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function op(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new sp(i,r,t)}const Ls={},go=new WeakMap;let Bi;function ap(n,e=!1,t=Bi){if(t){let i=go.get(t);i||go.set(t,i=[]),i.push(n)}}function lp(n,e,t=ut){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=g=>r?g:cn(g)||r===!1||r===0?qn(g,1):qn(g);let u,f,h,p,_=!1,x=!1;if(Ft(n)?(f=()=>n.value,_=cn(n)):$i(n)?(f=()=>c(n),_=!0):Ue(n)?(x=!0,_=n.some(g=>$i(g)||cn(g)),f=()=>n.map(g=>{if(Ft(g))return g.value;if($i(g))return c(g);if(He(g))return l?l(g,2):g()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Jn();try{h()}finally{Qn()}}const g=Bi;Bi=u;try{return l?l(n,3,[p]):n(p)}finally{Bi=g}}:f=Ln,e&&r){const g=f,I=r===!0?1/0:r;f=()=>qn(g(),I)}const m=Nh(),d=()=>{u.stop(),m&&m.active&&Bl(m.effects,u)};if(s&&e){const g=e;e=(...I)=>{g(...I),d()}}let A=x?new Array(n.length).fill(Ls):Ls;const y=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(e){const I=u.run();if(r||_||(x?I.some((C,P)=>_i(C,A[P])):_i(I,A))){h&&h();const C=Bi;Bi=u;try{const P=[I,A===Ls?void 0:x&&A[0]===Ls?[]:A,p];A=I,l?l(e,3,P):e(...P)}finally{Bi=C}}}else u.run()};return a&&a(y),u=new yf(f),u.scheduler=o?()=>o(y,!1):y,p=g=>ap(g,!1,u),h=u.onStop=()=>{const g=go.get(u);if(g){if(l)l(g,4);else for(const I of g)I();go.delete(u)}},e?i?y(!0):A=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function qn(n,e=1/0,t){if(e<=0||!ct(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ft(n))qn(n.value,e,t);else if(Ue(n))for(let i=0;i<n.length;i++)qn(n[i],e,t);else if(Fr(n)||_r(n))n.forEach(i=>{qn(i,e,t)});else if(_f(n)){for(const i in n)qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _s(n,e,t,i){try{return i?n(...i):n()}catch(r){vs(r,e,t)}}function En(n,e,t,i){if(He(n)){const r=_s(n,e,t,i);return r&&mf(r)&&r.catch(s=>{vs(s,e,t)}),r}if(Ue(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function vs(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Jn(),_s(s,null,10,[n,l,c]),Qn();return}}cp(n,t,r,i,o)}function cp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const zt=[];let wn=-1;const vr=[];let pi=null,pr=0;const Of=Promise.resolve();let _o=null;function Bf(n){const e=_o||Of;return n?e.then(this?n.bind(this):n):e}function up(n){let e=wn+1,t=zt.length;for(;e<t;){const i=e+t>>>1,r=zt[i],s=us(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Kl(n){if(!(n.flags&1)){const e=us(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=us(t)?zt.push(n):zt.splice(up(e),0,n),n.flags|=1,zf()}}function zf(){_o||(_o=Of.then(Hf))}function fp(n){Ue(n)?vr.push(...n):pi&&n.id===-1?pi.splice(pr+1,0,n):n.flags&1||(vr.push(n),n.flags|=1),zf()}function bc(n,e,t=wn+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kf(n){if(vr.length){const e=[...new Set(vr)].sort((t,i)=>us(t)-us(i));if(vr.length=0,pi){pi.push(...e);return}for(pi=e,pr=0;pr<pi.length;pr++){const t=pi[pr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}pi=null,pr=0}}const us=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Hf(n){try{for(wn=0;wn<zt.length;wn++){const e=zt[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<zt.length;wn++){const e=zt[wn];e&&(e.flags&=-2)}wn=-1,zt.length=0,kf(),_o=null,(zt.length||vr.length)&&Hf()}}let Pt=null,Vf=null;function vo(n){const e=Pt;return Pt=n,Vf=n&&n.type.__scopeId||null,e}function Gf(n,e=Pt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&So(-1);const s=vo(e);let o;try{o=n(...r)}finally{vo(s),i._d&&So(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function dp(n,e){if(Pt===null)return n;const t=zo(Pt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ut]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&qn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function wi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Jn(),En(l,t,8,[n.el,a,n,e]),Qn())}}function hp(n,e){if(Ct){let t=Ct.provides;const i=Ct.parent&&Ct.parent.provides;i===t&&(t=Ct.provides=Object.create(i)),t[n]=e}}function so(n,e,t=!1){const i=yd();if(i||Sr){let r=Sr?Sr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const pp=Symbol.for("v-scx"),mp=()=>so(pp);function xr(n,e,t){return Wf(n,e,t)}function Wf(n,e,t=ut){const{immediate:i,deep:r,flush:s,once:o}=t,a=yt({},t),l=e&&i||!e&&s!=="post";let c;if(Ar){if(s==="sync"){const p=mp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Ln,p.resume=Ln,p.pause=Ln,p}}const u=Ct;a.call=(p,_,x)=>En(p,u,_,x);let f=!1;s==="post"?a.scheduler=p=>{Jt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Kl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=lp(n,e,a);return Ar&&(c?c.push(h):l&&h()),h}function gp(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?Xf(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=Ms(this),a=Wf(r,s.bind(i),t);return o(),a}function Xf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const _p=Symbol("_vte"),qf=n=>n.__isTeleport,Wn=Symbol("_leaveCb"),Ds=Symbol("_enterCb");function vp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return No(()=>{n.isMounted=!0}),Fo(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],$f={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},Yf=n=>{const e=n.subTree;return e.component?Yf(e.component):e},xp={name:"BaseTransition",props:$f,setup(n,{slots:e}){const t=yd(),i=vp();return()=>{const r=e.default&&Zf(e.default(),!0);if(!r||!r.length)return;const s=Kf(r),o=Je(n),{mode:a}=o;if(i.isLeaving)return Zo(s);const l=Ac(s);if(!l)return Zo(s);let c=ka(l,o,i,t,f=>c=f);l.type!==Nt&&fs(l,c);let u=t.subTree&&Ac(t.subTree);if(u&&u.type!==Nt&&!Hi(u,l)&&Yf(t).type!==Nt){let f=ka(u,o,i,t);if(fs(u,f),a==="out-in"&&l.type!==Nt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Zo(s);a==="in-out"&&l.type!==Nt?f.delayLeave=(h,p,_)=>{const x=jf(i,u);x[String(u.key)]=u,h[Wn]=()=>{p(),h[Wn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Kf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Nt){e=t;break}}return e}const Mp=xp;function jf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ka(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:d,onAfterAppear:A,onAppearCancelled:y}=e,g=String(n.key),I=jf(t,n),C=(E,M)=>{E&&En(E,i,9,M)},P=(E,M)=>{const L=M[1];C(E,M),Ue(E)?E.every(F=>F.length<=1)&&L():E.length<=1&&L()},N={mode:o,persisted:a,beforeEnter(E){let M=l;if(!t.isMounted)if(s)M=m||l;else return;E[Wn]&&E[Wn](!0);const L=I[g];L&&Hi(n,L)&&L.el[Wn]&&L.el[Wn](),C(M,[E])},enter(E){let M=c,L=u,F=f;if(!t.isMounted)if(s)M=d||c,L=A||u,F=y||f;else return;let k=!1;const J=E[Ds]=te=>{k||(k=!0,te?C(F,[E]):C(L,[E]),N.delayedLeave&&N.delayedLeave(),E[Ds]=void 0)};M?P(M,[E,J]):J()},leave(E,M){const L=String(n.key);if(E[Ds]&&E[Ds](!0),t.isUnmounting)return M();C(h,[E]);let F=!1;const k=E[Wn]=J=>{F||(F=!0,M(),J?C(x,[E]):C(_,[E]),E[Wn]=void 0,I[L]===n&&delete I[L])};I[L]=n,p?P(p,[E,k]):k()},clone(E){const M=ka(E,e,t,i,r);return r&&r(M),M}};return N}function Zo(n){if(xs(n))return n=Mi(n),n.children=null,n}function Ac(n){if(!xs(n))return qf(n.type)&&n.children?Kf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function fs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Zf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===we?(o.patchFlag&128&&r++,i=i.concat(Zf(o.children,e,a))):(e||o.type!==Nt)&&i.push(a!=null?Mi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Et(n,e){return He(n)?yt({name:n.name},e,{setup:n}):n}function jl(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const xo=new WeakMap;function rs(n,e,t,i,r=!1){if(Ue(n)){n.forEach((_,x)=>rs(_,e&&(Ue(e)?e[x]:e),t,i,r));return}if(Mr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,f=a.setupState,h=Je(f),p=f===ut?pf:_=>nt(h,_);if(c!=null&&c!==l){if(wc(e),_t(c))u[c]=null,p(c)&&(f[c]=null);else if(Ft(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(He(l))_s(l,a,12,[o,u]);else{const _=_t(l),x=Ft(l);if(_||x){const m=()=>{if(n.f){const d=_?p(l)?f[l]:u[l]:l.value;if(r)Ue(d)&&Bl(d,s);else if(Ue(d))d.includes(s)||d.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,n.k&&(u[n.k]=A)}}else _?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),xo.delete(n)};d.id=-1,xo.set(n,d),Jt(d,t)}else wc(n),m()}}}function wc(n){const e=xo.get(n);e&&(e.flags|=8,xo.delete(n))}const Rc=n=>n.nodeType===8;Lo().requestIdleCallback;Lo().cancelIdleCallback;function Sp(n,e){if(Rc(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Rc(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const Mr=n=>!!n.type.__asyncLoader;function yp(n){He(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,f=0;const h=()=>(f++,c=null,p()),p=()=>{let _;return c||(_=c=e().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),l)return new Promise((m,d)=>{l(x,()=>m(h()),()=>d(x),f+1)});throw x}).then(x=>_!==c&&c?c:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),u=x,x)))};return Et({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(_,x,m){let d=!1;(x.bu||(x.bu=[])).push(()=>d=!0);const A=()=>{d||m()},y=s?()=>{const g=s(A,I=>Sp(_,I));g&&(x.bum||(x.bum=[])).push(g)}:A;u?y():p().then(()=>!x.isUnmounted&&y())},get __asyncResolved(){return u},setup(){const _=Ct;if(jl(_),u)return()=>Is(u,_);const x=y=>{c=null,vs(y,_,13,!i)};if(a&&_.suspense||Ar)return p().then(y=>()=>Is(y,_)).catch(y=>(x(y),()=>i?Ie(i,{error:y}):null));const m=Rt(!1),d=Rt(),A=Rt(!!r);return r&&setTimeout(()=>{A.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!d.value){const y=new Error(`Async component timed out after ${o}ms.`);x(y),d.value=y}},o),p().then(()=>{m.value=!0,_.parent&&xs(_.parent.vnode)&&_.parent.update()}).catch(y=>{x(y),d.value=y}),()=>{if(m.value&&u)return Is(u,_);if(d.value&&i)return Ie(i,{error:d.value});if(t&&!A.value)return Is(t,_)}}})}function Is(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=Ie(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const xs=n=>n.type.__isKeepAlive;function Ep(n,e){Jf(n,"a",e)}function Tp(n,e){Jf(n,"da",e)}function Jf(n,e,t=Ct){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Uo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)xs(r.parent.vnode)&&bp(i,e,t,r),r=r.parent}}function bp(n,e,t,i){const r=Uo(e,n,i,!0);Qf(()=>{Bl(i[e],r)},t)}function Uo(n,e,t=Ct,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Jn();const a=Ms(t),l=En(e,t,n,o);return a(),Qn(),l});return i?r.unshift(s):r.push(s),s}}const ii=n=>(e,t=Ct)=>{(!Ar||n==="sp")&&Uo(n,(...i)=>e(...i),t)},Ap=ii("bm"),No=ii("m"),wp=ii("bu"),Rp=ii("u"),Fo=ii("bum"),Qf=ii("um"),Cp=ii("sp"),Pp=ii("rtg"),Lp=ii("rtc");function Dp(n,e=Ct){Uo("ec",n,e)}const Zl="components",Ip="directives";function zE(n,e){return Jl(Zl,n,!0,e)||n}const ed=Symbol.for("v-ndc");function td(n){return _t(n)?Jl(Zl,n,!1)||n:n||ed}function kE(n){return Jl(Ip,n)}function Jl(n,e,t=!0,i=!1){const r=Pt||Ct;if(r){const s=r.type;if(n===Zl){const a=gm(s,!1);if(a&&(a===e||a===fn(e)||a===Co(fn(e))))return s}const o=Cc(r[n]||s[n],e)||Cc(r.appContext[n],e);return!o&&i?s:o}}function Cc(n,e){return n&&(n[e]||n[fn(e)]||n[Co(fn(e))])}function Qt(n,e,t,i){let r;const s=t,o=Ue(n);if(o||_t(n)){const a=o&&$i(n);let l=!1,c=!1;a&&(l=!cn(n),c=ei(n),n=Io(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?br(yn(n[u])):yn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ct(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function HE(n,e,t={},i,r){if(Pt.ce||Pt.parent&&Mr(Pt.parent)&&Pt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),re(),Gt(we,null,[Ie("slot",t,i&&i())],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),re();const o=s&&nd(s(t)),a=t.key||o&&o.key,l=Gt(we,{key:(a&&!Sn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function nd(n){return n.some(e=>hs(e)?!(e.type===Nt||e.type===we&&!nd(e.children)):!0)?n:null}const Ha=n=>n?Ed(n)?zo(n):Ha(n.parent):null,ss=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ha(n.parent),$root:n=>Ha(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>rd(n),$forceUpdate:n=>n.f||(n.f=()=>{Kl(n.update)}),$nextTick:n=>n.n||(n.n=Bf.bind(n.proxy)),$watch:n=>gp.bind(n)}),Jo=(n,e)=>n!==ut&&!n.__isScriptSetup&&nt(n,e),Up={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Jo(i,e))return o[e]=1,i[e];if(r!==ut&&nt(r,e))return o[e]=2,r[e];if(nt(s,e))return o[e]=3,s[e];if(t!==ut&&nt(t,e))return o[e]=4,t[e];Va&&(o[e]=0)}}const c=ss[e];let u,f;if(c)return e==="$attrs"&&Ut(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ut&&nt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Jo(r,e)?(r[e]=t,!0):i!==ut&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ut&&a[0]!=="$"&&nt(n,a)||Jo(e,a)||nt(s,a)||nt(i,a)||nt(ss,a)||nt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Pc(n){return Ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Va=!0;function Np(n){const e=rd(n),t=n.proxy,i=n.ctx;Va=!1,e.beforeCreate&&Lc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:y,unmounted:g,render:I,renderTracked:C,renderTriggered:P,errorCaptured:N,serverPrefetch:E,expose:M,inheritAttrs:L,components:F,directives:k,filters:J}=e;if(c&&Fp(c,i,null),o)for(const ie in o){const V=o[ie];He(V)&&(i[ie]=V.bind(t))}if(r){const ie=r.call(t,t);ct(ie)&&(n.data=ql(ie))}if(Va=!0,s)for(const ie in s){const V=s[ie],pe=He(V)?V.bind(t,t):He(V.get)?V.get.bind(t,t):Ln,Ee=!He(V)&&He(V.set)?V.set.bind(t):Ln,Ae=wr({get:pe,set:Ee});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Fe=>Ae.value=Fe})}if(a)for(const ie in a)id(a[ie],i,t,ie);if(l){const ie=He(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(V=>{hp(V,ie[V])})}u&&Lc(u,n,"c");function X(ie,V){Ue(V)?V.forEach(pe=>ie(pe.bind(t))):V&&ie(V.bind(t))}if(X(Ap,f),X(No,h),X(wp,p),X(Rp,_),X(Ep,x),X(Tp,m),X(Dp,N),X(Lp,C),X(Pp,P),X(Fo,A),X(Qf,g),X(Cp,E),Ue(M))if(M.length){const ie=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(ie,V,{get:()=>t[V],set:pe=>t[V]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Ln&&(n.render=I),L!=null&&(n.inheritAttrs=L),F&&(n.components=F),k&&(n.directives=k),E&&jl(n)}function Fp(n,e,t=Ln){Ue(n)&&(n=Ga(n));for(const i in n){const r=n[i];let s;ct(r)?"default"in r?s=so(r.from||i,r.default,!0):s=so(r.from||i):s=so(r),Ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Lc(n,e,t){En(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function id(n,e,t,i){let r=i.includes(".")?Xf(t,i):()=>t[i];if(_t(n)){const s=e[n];He(s)&&xr(r,s)}else if(He(n))xr(r,n.bind(t));else if(ct(n))if(Ue(n))n.forEach(s=>id(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&xr(r,s,n)}}function rd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Mo(l,c,o,!0)),Mo(l,e,o)),ct(e)&&s.set(e,l),l}function Mo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Mo(n,s,t,!0),r&&r.forEach(o=>Mo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Op[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Op={data:Dc,props:Ic,emits:Ic,methods:jr,computed:jr,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:jr,directives:jr,watch:zp,provide:Dc,inject:Bp};function Dc(n,e){return e?n?function(){return yt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Bp(n,e){return jr(Ga(n),Ga(e))}function Ga(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function jr(n,e){return n?yt(Object.create(null),n,e):e}function Ic(n,e){return n?Ue(n)&&Ue(e)?[...new Set([...n,...e])]:yt(Object.create(null),Pc(n),Pc(e??{})):e}function zp(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function sd(){return{app:null,config:{isNativeTag:pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kp=0;function Hp(n,e){return function(i,r=null){He(i)||(i=yt({},i)),r!=null&&!ct(r)&&(r=null);const s=sd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:kp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:vm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Ie(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,zo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Sr;Sr=c;try{return u()}finally{Sr=f}}};return c}}let Sr=null;const Vp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fn(e)}Modifiers`]||n[`${bi(e)}Modifiers`];function Gp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let r=t;const s=e.startsWith("update:"),o=s&&Vp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>_t(u)?u.trim():u)),o.number&&(r=t.map(Po)));let a,l=i[a=qo(e)]||i[a=qo(fn(e))];!l&&s&&(l=i[a=qo(bi(e))]),l&&En(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,r)}}const Wp=new WeakMap;function od(n,e,t=!1){const i=t?Wp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=od(c,e,!0);u&&(a=!0,yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ct(n)&&i.set(n,null),null):(Ue(s)?s.forEach(l=>o[l]=null):yt(o,s),ct(n)&&i.set(n,o),o)}function Oo(n,e){return!n||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,bi(e))||nt(n,e))}function Uc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:x}=n,m=vo(n);let d,A;try{if(t.shapeFlag&4){const g=r||i,I=g;d=Rn(c.call(I,g,u,f,p,h,_)),A=a}else{const g=e;d=Rn(g.length>1?g(f,{attrs:a,slots:o,emit:l}):g(f,null)),A=e.props?a:Xp(a)}}catch(g){os.length=0,vs(g,n,1),d=Ie(Nt)}let y=d;if(A&&x!==!1){const g=Object.keys(A),{shapeFlag:I}=y;g.length&&I&7&&(s&&g.some(Ol)&&(A=qp(A,s)),y=Mi(y,A,!1,!0))}return t.dirs&&(y=Mi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&fs(y,t.transition),d=y,vo(m),d}const Xp=n=>{let e;for(const t in n)(t==="class"||t==="style"||wo(t))&&((e||(e={}))[t]=n[t]);return e},qp=(n,e)=>{const t={};for(const i in n)(!Ol(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $p(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Nc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Oo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nc(i,o,c):!0:!!o;return!1}function Nc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Oo(t,s))return!0}return!1}function Yp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ad={},ld=()=>Object.create(ad),cd=n=>Object.getPrototypeOf(n)===ad;function Kp(n,e,t,i=!1){const r={},s=ld();n.propsDefaults=Object.create(null),ud(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:ep(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function jp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Oo(n.emitsOptions,h))continue;const p=e[h];if(l)if(nt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=fn(h);r[_]=Wa(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{ud(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=bi(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Wa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&Xn(n.attrs,"set","")}function ud(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ts(l))continue;const c=e[l];let u;r&&nt(r,u=fn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Je(t),c=a||ut;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Wa(r,l,f,c[f],n,!nt(c,f))}}return o}function Wa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ms(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===bi(t))&&(i=!0))}return i}const Zp=new WeakMap;function fd(n,e,t=!1){const i=t?Zp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,p]=fd(f,e,!0);yt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ct(n)&&i.set(n,gr),gr;if(Ue(s))for(let u=0;u<s.length;u++){const f=fn(s[u]);Fc(f)&&(o[f]=ut)}else if(s)for(const u in s){const f=fn(u);if(Fc(f)){const h=s[u],p=o[f]=Ue(h)||He(h)?{type:h}:yt({},h),_=p.type;let x=!1,m=!0;if(Ue(_))for(let d=0;d<_.length;++d){const A=_[d],y=He(A)&&A.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=He(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||nt(p,"default"))&&a.push(f)}}const c=[o,a];return ct(n)&&i.set(n,c),c}function Fc(n){return n[0]!=="$"&&!ts(n)}const Ql=n=>n==="_"||n==="_ctx"||n==="$stable",ec=n=>Ue(n)?n.map(Rn):[Rn(n)],Jp=(n,e,t)=>{if(e._n)return e;const i=Gf((...r)=>ec(e(...r)),t);return i._c=!1,i},dd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ql(r))continue;const s=n[r];if(He(s))e[r]=Jp(r,s,i);else if(s!=null){const o=ec(s);e[r]=()=>o}}},hd=(n,e)=>{const t=ec(e);n.slots.default=()=>t},pd=(n,e,t)=>{for(const i in e)(t||!Ql(i))&&(n[i]=e[i])},Qp=(n,e,t)=>{const i=n.slots=ld();if(n.vnode.shapeFlag&32){const r=e._;r?(pd(i,e,t),t&&vf(i,"_",r,!0)):dd(e,i)}else e&&hd(n,e)},em=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:pd(r,e,t):(s=!e.$stable,dd(e,r)),o=e}else e&&(hd(n,e),o={default:1});if(s)for(const a in r)!Ql(a)&&o[a]==null&&delete r[a]},Jt=sm;function tm(n){return nm(n)}function nm(n,e){const t=Lo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Ln,insertStaticContent:_}=n,x=(w,U,b,se=null,K=null,j=null,ee=void 0,ae=null,Z=!!U.dynamicChildren)=>{if(w===U)return;w&&!Hi(w,U)&&(se=_e(w),Fe(w,K,j,!0),w=null),U.patchFlag===-2&&(Z=!1,U.dynamicChildren=null);const{type:S,ref:v,shapeFlag:D}=U;switch(S){case Bo:m(w,U,b,se);break;case Nt:d(w,U,b,se);break;case oo:w==null&&A(U,b,se,ee);break;case we:F(w,U,b,se,K,j,ee,ae,Z);break;default:D&1?I(w,U,b,se,K,j,ee,ae,Z):D&6?k(w,U,b,se,K,j,ee,ae,Z):(D&64||D&128)&&S.process(w,U,b,se,K,j,ee,ae,Z,Ge)}v!=null&&K?rs(v,w&&w.ref,j,U||w,!U):v==null&&w&&w.ref!=null&&rs(w.ref,null,j,w,!0)},m=(w,U,b,se)=>{if(w==null)i(U.el=a(U.children),b,se);else{const K=U.el=w.el;U.children!==w.children&&c(K,U.children)}},d=(w,U,b,se)=>{w==null?i(U.el=l(U.children||""),b,se):U.el=w.el},A=(w,U,b,se)=>{[w.el,w.anchor]=_(w.children,U,b,se,w.el,w.anchor)},y=({el:w,anchor:U},b,se)=>{let K;for(;w&&w!==U;)K=h(w),i(w,b,se),w=K;i(U,b,se)},g=({el:w,anchor:U})=>{let b;for(;w&&w!==U;)b=h(w),r(w),w=b;r(U)},I=(w,U,b,se,K,j,ee,ae,Z)=>{if(U.type==="svg"?ee="svg":U.type==="math"&&(ee="mathml"),w==null)C(U,b,se,K,j,ee,ae,Z);else{const S=w.el&&w.el._isVueCE?w.el:null;try{S&&S._beginPatch(),E(w,U,K,j,ee,ae,Z)}finally{S&&S._endPatch()}}},C=(w,U,b,se,K,j,ee,ae)=>{let Z,S;const{props:v,shapeFlag:D,transition:H,dirs:q}=w;if(Z=w.el=o(w.type,j,v&&v.is,v),D&8?u(Z,w.children):D&16&&N(w.children,Z,null,se,K,Qo(w,j),ee,ae),q&&wi(w,null,se,"created"),P(Z,w,w.scopeId,ee,se),v){for(const he in v)he!=="value"&&!ts(he)&&s(Z,he,null,v[he],j,se);"value"in v&&s(Z,"value",null,v.value,j),(S=v.onVnodeBeforeMount)&&An(S,se,w)}q&&wi(w,null,se,"beforeMount");const W=im(K,H);W&&H.beforeEnter(Z),i(Z,U,b),((S=v&&v.onVnodeMounted)||W||q)&&Jt(()=>{S&&An(S,se,w),W&&H.enter(Z),q&&wi(w,null,se,"mounted")},K)},P=(w,U,b,se,K)=>{if(b&&p(w,b),se)for(let j=0;j<se.length;j++)p(w,se[j]);if(K){let j=K.subTree;if(U===j||vd(j.type)&&(j.ssContent===U||j.ssFallback===U)){const ee=K.vnode;P(w,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},N=(w,U,b,se,K,j,ee,ae,Z=0)=>{for(let S=Z;S<w.length;S++){const v=w[S]=ae?mi(w[S]):Rn(w[S]);x(null,v,U,b,se,K,j,ee,ae)}},E=(w,U,b,se,K,j,ee)=>{const ae=U.el=w.el;let{patchFlag:Z,dynamicChildren:S,dirs:v}=U;Z|=w.patchFlag&16;const D=w.props||ut,H=U.props||ut;let q;if(b&&Ri(b,!1),(q=H.onVnodeBeforeUpdate)&&An(q,b,U,w),v&&wi(U,w,b,"beforeUpdate"),b&&Ri(b,!0),(D.innerHTML&&H.innerHTML==null||D.textContent&&H.textContent==null)&&u(ae,""),S?M(w.dynamicChildren,S,ae,b,se,Qo(U,K),j):ee||V(w,U,ae,null,b,se,Qo(U,K),j,!1),Z>0){if(Z&16)L(ae,D,H,b,K);else if(Z&2&&D.class!==H.class&&s(ae,"class",null,H.class,K),Z&4&&s(ae,"style",D.style,H.style,K),Z&8){const W=U.dynamicProps;for(let he=0;he<W.length;he++){const le=W[he],me=D[le],Oe=H[le];(Oe!==me||le==="value")&&s(ae,le,me,Oe,K,b)}}Z&1&&w.children!==U.children&&u(ae,U.children)}else!ee&&S==null&&L(ae,D,H,b,K);((q=H.onVnodeUpdated)||v)&&Jt(()=>{q&&An(q,b,U,w),v&&wi(U,w,b,"updated")},se)},M=(w,U,b,se,K,j,ee)=>{for(let ae=0;ae<U.length;ae++){const Z=w[ae],S=U[ae],v=Z.el&&(Z.type===we||!Hi(Z,S)||Z.shapeFlag&198)?f(Z.el):b;x(Z,S,v,null,se,K,j,ee,!0)}},L=(w,U,b,se,K)=>{if(U!==b){if(U!==ut)for(const j in U)!ts(j)&&!(j in b)&&s(w,j,U[j],null,K,se);for(const j in b){if(ts(j))continue;const ee=b[j],ae=U[j];ee!==ae&&j!=="value"&&s(w,j,ae,ee,K,se)}"value"in b&&s(w,"value",U.value,b.value,K)}},F=(w,U,b,se,K,j,ee,ae,Z)=>{const S=U.el=w?w.el:a(""),v=U.anchor=w?w.anchor:a("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:q}=U;q&&(ae=ae?ae.concat(q):q),w==null?(i(S,b,se),i(v,b,se),N(U.children||[],b,v,K,j,ee,ae,Z)):D>0&&D&64&&H&&w.dynamicChildren&&w.dynamicChildren.length===H.length?(M(w.dynamicChildren,H,b,K,j,ee,ae),(U.key!=null||K&&U===K.subTree)&&md(w,U,!0)):V(w,U,b,v,K,j,ee,ae,Z)},k=(w,U,b,se,K,j,ee,ae,Z)=>{U.slotScopeIds=ae,w==null?U.shapeFlag&512?K.ctx.activate(U,b,se,ee,Z):J(U,b,se,K,j,ee,Z):te(w,U,Z)},J=(w,U,b,se,K,j,ee)=>{const ae=w.component=fm(w,se,K);if(xs(w)&&(ae.ctx.renderer=Ge),dm(ae,!1,ee),ae.asyncDep){if(K&&K.registerDep(ae,X,ee),!w.el){const Z=ae.subTree=Ie(Nt);d(null,Z,U,b),w.placeholder=Z.el}}else X(ae,w,U,b,K,j,ee)},te=(w,U,b)=>{const se=U.component=w.component;if($p(w,U,b))if(se.asyncDep&&!se.asyncResolved){ie(se,U,b);return}else se.next=U,se.update();else U.el=w.el,se.vnode=U},X=(w,U,b,se,K,j,ee)=>{const ae=()=>{if(w.isMounted){let{next:D,bu:H,u:q,parent:W,vnode:he}=w;{const xe=gd(w);if(xe){D&&(D.el=he.el,ie(w,D,ee)),xe.asyncDep.then(()=>{w.isUnmounted||ae()});return}}let le=D,me;Ri(w,!1),D?(D.el=he.el,ie(w,D,ee)):D=he,H&&ro(H),(me=D.props&&D.props.onVnodeBeforeUpdate)&&An(me,W,D,he),Ri(w,!0);const Oe=Uc(w),ce=w.subTree;w.subTree=Oe,x(ce,Oe,f(ce.el),_e(ce),w,K,j),D.el=Oe.el,le===null&&Yp(w,Oe.el),q&&Jt(q,K),(me=D.props&&D.props.onVnodeUpdated)&&Jt(()=>An(me,W,D,he),K)}else{let D;const{el:H,props:q}=U,{bm:W,m:he,parent:le,root:me,type:Oe}=w,ce=Mr(U);Ri(w,!1),W&&ro(W),!ce&&(D=q&&q.onVnodeBeforeMount)&&An(D,le,U),Ri(w,!0);{me.ce&&me.ce._def.shadowRoot!==!1&&me.ce._injectChildStyle(Oe);const xe=w.subTree=Uc(w);x(null,xe,b,se,w,K,j),U.el=xe.el}if(he&&Jt(he,K),!ce&&(D=q&&q.onVnodeMounted)){const xe=U;Jt(()=>An(D,le,xe),K)}(U.shapeFlag&256||le&&Mr(le.vnode)&&le.vnode.shapeFlag&256)&&w.a&&Jt(w.a,K),w.isMounted=!0,U=b=se=null}};w.scope.on();const Z=w.effect=new yf(ae);w.scope.off();const S=w.update=Z.run.bind(Z),v=w.job=Z.runIfDirty.bind(Z);v.i=w,v.id=w.uid,Z.scheduler=()=>Kl(v),Ri(w,!0),S()},ie=(w,U,b)=>{U.component=w;const se=w.vnode.props;w.vnode=U,w.next=null,jp(w,U.props,se,b),em(w,U.children,b),Jn(),bc(w),Qn()},V=(w,U,b,se,K,j,ee,ae,Z=!1)=>{const S=w&&w.children,v=w?w.shapeFlag:0,D=U.children,{patchFlag:H,shapeFlag:q}=U;if(H>0){if(H&128){Ee(S,D,b,se,K,j,ee,ae,Z);return}else if(H&256){pe(S,D,b,se,K,j,ee,ae,Z);return}}q&8?(v&16&&be(S,K,j),D!==S&&u(b,D)):v&16?q&16?Ee(S,D,b,se,K,j,ee,ae,Z):be(S,K,j,!0):(v&8&&u(b,""),q&16&&N(D,b,se,K,j,ee,ae,Z))},pe=(w,U,b,se,K,j,ee,ae,Z)=>{w=w||gr,U=U||gr;const S=w.length,v=U.length,D=Math.min(S,v);let H;for(H=0;H<D;H++){const q=U[H]=Z?mi(U[H]):Rn(U[H]);x(w[H],q,b,null,K,j,ee,ae,Z)}S>v?be(w,K,j,!0,!1,D):N(U,b,se,K,j,ee,ae,Z,D)},Ee=(w,U,b,se,K,j,ee,ae,Z)=>{let S=0;const v=U.length;let D=w.length-1,H=v-1;for(;S<=D&&S<=H;){const q=w[S],W=U[S]=Z?mi(U[S]):Rn(U[S]);if(Hi(q,W))x(q,W,b,null,K,j,ee,ae,Z);else break;S++}for(;S<=D&&S<=H;){const q=w[D],W=U[H]=Z?mi(U[H]):Rn(U[H]);if(Hi(q,W))x(q,W,b,null,K,j,ee,ae,Z);else break;D--,H--}if(S>D){if(S<=H){const q=H+1,W=q<v?U[q].el:se;for(;S<=H;)x(null,U[S]=Z?mi(U[S]):Rn(U[S]),b,W,K,j,ee,ae,Z),S++}}else if(S>H)for(;S<=D;)Fe(w[S],K,j,!0),S++;else{const q=S,W=S,he=new Map;for(S=W;S<=H;S++){const ge=U[S]=Z?mi(U[S]):Rn(U[S]);ge.key!=null&&he.set(ge.key,S)}let le,me=0;const Oe=H-W+1;let ce=!1,xe=0;const De=new Array(Oe);for(S=0;S<Oe;S++)De[S]=0;for(S=q;S<=D;S++){const ge=w[S];if(me>=Oe){Fe(ge,K,j,!0);continue}let ke;if(ge.key!=null)ke=he.get(ge.key);else for(le=W;le<=H;le++)if(De[le-W]===0&&Hi(ge,U[le])){ke=le;break}ke===void 0?Fe(ge,K,j,!0):(De[ke-W]=S+1,ke>=xe?xe=ke:ce=!0,x(ge,U[ke],b,null,K,j,ee,ae,Z),me++)}const Be=ce?rm(De):gr;for(le=Be.length-1,S=Oe-1;S>=0;S--){const ge=W+S,ke=U[ge],We=U[ge+1],rt=ge+1<v?We.el||_d(We):se;De[S]===0?x(null,ke,b,rt,K,j,ee,ae,Z):ce&&(le<0||S!==Be[le]?Ae(ke,b,rt,2):le--)}}},Ae=(w,U,b,se,K=null)=>{const{el:j,type:ee,transition:ae,children:Z,shapeFlag:S}=w;if(S&6){Ae(w.component.subTree,U,b,se);return}if(S&128){w.suspense.move(U,b,se);return}if(S&64){ee.move(w,U,b,Ge);return}if(ee===we){i(j,U,b);for(let D=0;D<Z.length;D++)Ae(Z[D],U,b,se);i(w.anchor,U,b);return}if(ee===oo){y(w,U,b);return}if(se!==2&&S&1&&ae)if(se===0)ae.beforeEnter(j),i(j,U,b),Jt(()=>ae.enter(j),K);else{const{leave:D,delayLeave:H,afterLeave:q}=ae,W=()=>{w.ctx.isUnmounted?r(j):i(j,U,b)},he=()=>{j._isLeaving&&j[Wn](!0),D(j,()=>{W(),q&&q()})};H?H(j,W,he):he()}else i(j,U,b)},Fe=(w,U,b,se=!1,K=!1)=>{const{type:j,props:ee,ref:ae,children:Z,dynamicChildren:S,shapeFlag:v,patchFlag:D,dirs:H,cacheIndex:q}=w;if(D===-2&&(K=!1),ae!=null&&(Jn(),rs(ae,null,b,w,!0),Qn()),q!=null&&(U.renderCache[q]=void 0),v&256){U.ctx.deactivate(w);return}const W=v&1&&H,he=!Mr(w);let le;if(he&&(le=ee&&ee.onVnodeBeforeUnmount)&&An(le,U,w),v&6)fe(w.component,b,se);else{if(v&128){w.suspense.unmount(b,se);return}W&&wi(w,null,U,"beforeUnmount"),v&64?w.type.remove(w,U,b,Ge,se):S&&!S.hasOnce&&(j!==we||D>0&&D&64)?be(S,U,b,!1,!0):(j===we&&D&384||!K&&v&16)&&be(Z,U,b),se&&Qe(w)}(he&&(le=ee&&ee.onVnodeUnmounted)||W)&&Jt(()=>{le&&An(le,U,w),W&&wi(w,null,U,"unmounted")},b)},Qe=w=>{const{type:U,el:b,anchor:se,transition:K}=w;if(U===we){ne(b,se);return}if(U===oo){g(w);return}const j=()=>{r(b),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:ae}=K,Z=()=>ee(b,j);ae?ae(w.el,j,Z):Z()}else j()},ne=(w,U)=>{let b;for(;w!==U;)b=h(w),r(w),w=b;r(U)},fe=(w,U,b)=>{const{bum:se,scope:K,job:j,subTree:ee,um:ae,m:Z,a:S}=w;Oc(Z),Oc(S),se&&ro(se),K.stop(),j&&(j.flags|=8,Fe(ee,w,U,b)),ae&&Jt(ae,U),Jt(()=>{w.isUnmounted=!0},U)},be=(w,U,b,se=!1,K=!1,j=0)=>{for(let ee=j;ee<w.length;ee++)Fe(w[ee],U,b,se,K)},_e=w=>{if(w.shapeFlag&6)return _e(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const U=h(w.anchor||w.el),b=U&&U[_p];return b?h(b):U};let Ne=!1;const ze=(w,U,b)=>{let se;w==null?U._vnode&&(Fe(U._vnode,null,null,!0),se=U._vnode.component):x(U._vnode||null,w,U,null,null,null,b),U._vnode=w,Ne||(Ne=!0,bc(se),kf(),Ne=!1)},Ge={p:x,um:Fe,m:Ae,r:Qe,mt:J,mc:N,pc:V,pbc:M,n:_e,o:n};return{render:ze,hydrate:void 0,createApp:Hp(ze)}}function Qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ri({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function im(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function md(n,e,t=!1){const i=n.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=mi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&md(o,a)),a.type===Bo&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===we?1:0)),a.type===Nt&&!a.el&&(a.el=o.el)}}function rm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function gd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gd(e)}function Oc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function _d(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?_d(e.subTree):null}const vd=n=>n.__isSuspense;function sm(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):fp(n)}const we=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),os=[];let en=null;function re(n=!1){os.push(en=n?null:[])}function om(){os.pop(),en=os[os.length-1]||null}let ds=1;function So(n,e=!1){ds+=n,n<0&&en&&e&&(en.hasOnce=!0)}function xd(n){return n.dynamicChildren=ds>0?en||gr:null,om(),ds>0&&en&&en.push(n),n}function ue(n,e,t,i,r,s){return xd(R(n,e,t,i,r,s,!0))}function Gt(n,e,t,i,r){return xd(Ie(n,e,t,i,r,!0))}function hs(n){return n?n.__v_isVNode===!0:!1}function Hi(n,e){return n.type===e.type&&n.key===e.key}const Md=({key:n})=>n??null,ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Ft(n)||He(n)?{i:Pt,r:n,k:e,f:!!t}:n:null);function R(n,e=null,t=null,i=0,r=null,s=n===we?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Md(e),ref:e&&ao(e),scopeId:Vf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pt};return a?(tc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),ds>0&&!o&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const Ie=am;function am(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ed)&&(n=Nt),hs(n)){const a=Mi(n,e,!0);return t&&tc(a,t),ds>0&&!s&&en&&(a.shapeFlag&6?en[en.indexOf(n)]=a:en.push(a)),a.patchFlag=-2,a}if(_m(n)&&(n=n.__vccOpts),e){e=lm(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=Zi(a)),ct(l)&&(Yl(l)&&!Ue(l)&&(l=yt({},l)),e.style=Do(l))}const o=_t(n)?1:vd(n)?128:qf(n)?64:ct(n)?4:He(n)?2:0;return R(n,e,t,i,r,o,s,!0)}function lm(n){return n?Yl(n)||cd(n)?yt({},n):n:null}function Mi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Sd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Md(c),ref:e&&e.ref?t&&s?Ue(s)?s.concat(ao(e)):[s,ao(e)]:ao(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==we?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mi(n.ssContent),ssFallback:n.ssFallback&&Mi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&fs(u,l.clone(u)),u}function St(n=" ",e=0){return Ie(Bo,null,n,e)}function VE(n,e){const t=Ie(oo,null,n);return t.staticCount=e,t}function Si(n="",e=!1){return e?(re(),Gt(Nt,null,n)):Ie(Nt,null,n)}function Rn(n){return n==null||typeof n=="boolean"?Ie(Nt):Ue(n)?Ie(we,null,n.slice()):hs(n)?mi(n):Ie(Bo,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mi(n)}function tc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),tc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!cd(e)?e._ctx=Pt:r===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Pt},t=32):(e=String(e),i&64?(t=16,e=[St(e)]):t=8);n.children=e,n.shapeFlag|=t}function Sd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zi([e.class,i.class]));else if(r==="style")e.style=Do([e.style,i.style]);else if(wo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function An(n,e,t,i=null){En(n,e,7,[t,i])}const cm=sd();let um=0;function fm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||cm,s={uid:um++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fd(i,r),emitsOptions:od(i,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gp.bind(null,s),n.ce&&n.ce(s),s}let Ct=null;const yd=()=>Ct||Pt;let yo,Xa;{const n=Lo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};yo=e("__VUE_INSTANCE_SETTERS__",t=>Ct=t),Xa=e("__VUE_SSR_SETTERS__",t=>Ar=t)}const Ms=n=>{const e=Ct;return yo(n),n.scope.on(),()=>{n.scope.off(),yo(e)}},Bc=()=>{Ct&&Ct.scope.off(),yo(null)};function Ed(n){return n.vnode.shapeFlag&4}let Ar=!1;function dm(n,e=!1,t=!1){e&&Xa(e);const{props:i,children:r}=n.vnode,s=Ed(n);Kp(n,i,s,e),Qp(n,r,t||e);const o=s?hm(n,e):void 0;return e&&Xa(!1),o}function hm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Up);const{setup:i}=t;if(i){Jn();const r=n.setupContext=i.length>1?mm(n):null,s=Ms(n),o=_s(i,n,0,[n.props,r]),a=mf(o);if(Qn(),s(),(a||n.sp)&&!Mr(n)&&jl(n),a){if(o.then(Bc,Bc),e)return o.then(l=>{zc(n,l)}).catch(l=>{vs(l,n,0)});n.asyncDep=o}else zc(n,o)}else Td(n)}function zc(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Ff(e)),Td(n)}function Td(n,e,t){const i=n.type;n.render||(n.render=i.render||Ln);{const r=Ms(n);Jn();try{Np(n)}finally{Qn(),r()}}}const pm={get(n,e){return Ut(n,"get",""),n[e]}};function mm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,pm),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ff(tp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ss)return ss[t](n)},has(e,t){return t in e||t in ss}})):n.proxy}function gm(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function _m(n){return He(n)&&"__vccOpts"in n}const wr=(n,e)=>op(n,e,Ar);function Zr(n,e,t){try{So(-1);const i=arguments.length;return i===2?ct(e)&&!Ue(e)?hs(e)?Ie(n,null,[e]):Ie(n,e):Ie(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&hs(t)&&(t=[t]),Ie(n,e,t))}finally{So(1)}}const vm="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qa;const kc=typeof window<"u"&&window.trustedTypes;if(kc)try{qa=kc.createPolicy("vue",{createHTML:n=>n})}catch{}const bd=qa?n=>qa.createHTML(n):n=>n,xm="http://www.w3.org/2000/svg",Mm="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Hc=Gn&&Gn.createElement("template"),Sm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gn.createElementNS(xm,n):e==="mathml"?Gn.createElementNS(Mm,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Hc.innerHTML=bd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},oi="transition",Gr="animation",ps=Symbol("_vtc"),Ad={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ym=yt({},$f,Ad),Em=n=>(n.displayName="Transition",n.props=ym,n),GE=Em((n,{slots:e})=>Zr(Mp,Tm(n),e)),Ci=(n,e=[])=>{Ue(n)?n.forEach(t=>t(...e)):n&&n(...e)},Vc=n=>n?Ue(n)?n.some(e=>e.length>1):n.length>1:!1;function Tm(n){const e={};for(const F in n)F in Ad||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=bm(r),x=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:A,onEnterCancelled:y,onLeave:g,onLeaveCancelled:I,onBeforeAppear:C=d,onAppear:P=A,onAppearCancelled:N=y}=e,E=(F,k,J,te)=>{F._enterCancelled=te,Pi(F,k?u:a),Pi(F,k?c:o),J&&J()},M=(F,k)=>{F._isLeaving=!1,Pi(F,f),Pi(F,p),Pi(F,h),k&&k()},L=F=>(k,J)=>{const te=F?P:A,X=()=>E(k,F,J);Ci(te,[k,X]),Gc(()=>{Pi(k,F?l:s),Fn(k,F?u:a),Vc(te)||Wc(k,i,x,X)})};return yt(e,{onBeforeEnter(F){Ci(d,[F]),Fn(F,s),Fn(F,o)},onBeforeAppear(F){Ci(C,[F]),Fn(F,l),Fn(F,c)},onEnter:L(!1),onAppear:L(!0),onLeave(F,k){F._isLeaving=!0;const J=()=>M(F,k);Fn(F,f),F._enterCancelled?(Fn(F,h),$c(F)):($c(F),Fn(F,h)),Gc(()=>{F._isLeaving&&(Pi(F,f),Fn(F,p),Vc(g)||Wc(F,i,m,J))}),Ci(g,[F,J])},onEnterCancelled(F){E(F,!1,void 0,!0),Ci(y,[F])},onAppearCancelled(F){E(F,!0,void 0,!0),Ci(N,[F])},onLeaveCancelled(F){M(F),Ci(I,[F])}})}function bm(n){if(n==null)return null;if(ct(n))return[ea(n.enter),ea(n.leave)];{const e=ea(n);return[e,e]}}function ea(n){return Ah(n)}function Fn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ps]||(n[ps]=new Set)).add(e)}function Pi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ps];t&&(t.delete(e),t.size||(n[ps]=void 0))}function Gc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Am=0;function Wc(n,e,t,i){const r=n._endId=++Am,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=wm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function wm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${oi}Delay`),s=i(`${oi}Duration`),o=Xc(r,s),a=i(`${Gr}Delay`),l=i(`${Gr}Duration`),c=Xc(a,l);let u=null,f=0,h=0;e===oi?o>0&&(u=oi,f=o,h=s.length):e===Gr?c>0&&(u=Gr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?oi:Gr:null,h=u?u===oi?s.length:l.length:0);const p=u===oi&&/\b(?:transform|all)(?:,|$)/.test(i(`${oi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Xc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>qc(t)+qc(n[i])))}function qc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $c(n){return(n?n.ownerDocument:document).body.offsetHeight}function Rm(n,e,t){const i=n[ps];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eo=Symbol("_vod"),wd=Symbol("_vsh"),WE={name:"show",beforeMount(n,{value:e},{transition:t}){n[Eo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Wr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Wr(n,!0),i.enter(n)):i.leave(n,()=>{Wr(n,!1)}):Wr(n,e))},beforeUnmount(n,{value:e}){Wr(n,e)}};function Wr(n,e){n.style.display=e?n[Eo]:"none",n[wd]=!e}const Cm=Symbol(""),Pm=/(?:^|;)\s*display\s*:/;function Lm(n,e,t){const i=n.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&lo(i,a,"")}else for(const o in e)t[o]==null&&lo(i,o,"");for(const o in t)o==="display"&&(s=!0),lo(i,o,t[o])}else if(r){if(e!==t){const o=i[Cm];o&&(t+=";"+o),i.cssText=t,s=Pm.test(t)}}else e&&n.removeAttribute("style");Eo in n&&(n[Eo]=s?i.display:"",n[wd]&&(i.display="none"))}const Yc=/\s*!important$/;function lo(n,e,t){if(Ue(t))t.forEach(i=>lo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Dm(n,e);Yc.test(t)?n.setProperty(bi(i),t.replace(Yc,""),"important"):n[i]=t}}const Kc=["Webkit","Moz","ms"],ta={};function Dm(n,e){const t=ta[e];if(t)return t;let i=fn(e);if(i!=="filter"&&i in n)return ta[e]=i;i=Co(i);for(let r=0;r<Kc.length;r++){const s=Kc[r]+i;if(s in n)return ta[e]=s}return e}const jc="http://www.w3.org/1999/xlink";function Zc(n,e,t,i,r,s=Dh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jc,e.slice(6,e.length)):n.setAttributeNS(jc,e,t):t==null||s&&!xf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Sn(t)?String(t):t)}function Jc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?bd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=xf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function $n(n,e,t,i){n.addEventListener(e,t,i)}function Im(n,e,t,i){n.removeEventListener(e,t,i)}const Qc=Symbol("_vei");function Um(n,e,t,i,r=null){const s=n[Qc]||(n[Qc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Nm(e);if(i){const c=s[e]=Bm(i,r);$n(n,a,c,l)}else o&&(Im(n,a,o,l),s[e]=void 0)}}const eu=/(?:Once|Passive|Capture)$/;function Nm(n){let e;if(eu.test(n)){e={};let i;for(;i=n.match(eu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):bi(n.slice(2)),e]}let na=0;const Fm=Promise.resolve(),Om=()=>na||(Fm.then(()=>na=0),na=Date.now());function Bm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(zm(i,t.value),e,5,[i])};return t.value=n,t.attached=Om(),t}function zm(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const tu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,km=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Rm(n,i,o):e==="style"?Lm(n,t,i):wo(e)?Ol(e)||Um(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hm(n,e,i,o))?(Jc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!_t(i))?Jc(n,fn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zc(n,e,i,o))};function Hm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&tu(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tu(e)&&_t(t)?!1:e in n}const yi=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ue(e)?t=>ro(e,t):e};function Vm(n){n.target.composing=!0}function nu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign");function iu(n,e,t){return e&&(n=n.trim()),t&&(n=Po(n)),n}const $a={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[un]=yi(r);const s=i||r.props&&r.props.type==="number";$n(n,e?"change":"input",o=>{o.target.composing||n[un](iu(n.value,t,s))}),(t||s)&&$n(n,"change",()=>{n.value=iu(n.value,t,s)}),e||($n(n,"compositionstart",Vm),$n(n,"compositionend",nu),$n(n,"change",nu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[un]=yi(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Po(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Gm={deep:!0,created(n,e,t){n[un]=yi(t),$n(n,"change",()=>{const i=n._modelValue,r=Rr(n),s=n.checked,o=n[un];if(Ue(i)){const a=kl(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Fr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Rd(n,s))})},mounted:ru,beforeUpdate(n,e,t){n[un]=yi(t),ru(n,e,t)}};function ru(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ue(e))r=kl(e,i.props.value)>-1;else if(Fr(e))r=e.has(i.props.value);else{if(e===t)return;r=Yi(e,Rd(n,!0))}n.checked!==r&&(n.checked=r)}const Wm={created(n,{value:e},t){n.checked=Yi(e,t.props.value),n[un]=yi(t),$n(n,"change",()=>{n[un](Rr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[un]=yi(i),e!==t&&(n.checked=Yi(e,i.props.value))}},Xm={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Fr(e);$n(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Po(Rr(o)):Rr(o));n[un](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Bf(()=>{n._assigning=!1})}),n[un]=yi(i)},mounted(n,{value:e}){su(n,e)},beforeUpdate(n,e,t){n[un]=yi(t)},updated(n,{value:e}){n._assigning||su(n,e)}};function su(n,e){const t=n.multiple,i=Ue(e);if(!(t&&!i&&!Fr(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Rr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=kl(e,a)>-1}else o.selected=e.has(a);else if(Yi(Rr(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Rr(n){return"_value"in n?n._value:n.value}function Rd(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const XE={created(n,e,t){Us(n,e,t,null,"created")},mounted(n,e,t){Us(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Us(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Us(n,e,t,i,"updated")}};function qm(n,e){switch(n){case"SELECT":return Xm;case"TEXTAREA":return $a;default:switch(e){case"checkbox":return Gm;case"radio":return Wm;default:return $a}}}function Us(n,e,t,i,r){const o=qm(n.tagName,t.props&&t.props.type)[r];o&&o(n,e,t,i)}const $m=["ctrl","shift","alt","meta"],Ym={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>$m.some(t=>n[`${t}Key`]&&!e.includes(t))},ou=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Ym[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Km={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jm=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=bi(r.key);if(e.some(o=>o===s||Km[o]===s))return n(r)})},Zm=yt({patchProp:km},Sm);let au;function Jm(){return au||(au=tm(Zm))}const Qm=(...n)=>{const e=Jm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=tg(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,eg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function eg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function tg(n){return _t(n)?document.querySelector(n):n}const ng="modulepreload",ig=function(n){return"/"+n},lu={},rg=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=ig(l),l in lu)return;lu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ng,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},sg=["placeholder","disabled","onKeydown"],og=["disabled"],Cd=Et({__name:"AiComposer",props:{placeholder:{},disabled:{type:Boolean},status:{}},emits:["send"],setup(n,{emit:e}){const t=n,i=e,r=Rt("");function s(){const o=r.value.trim();!o||t.disabled||(i("send",o),r.value="")}return(o,a)=>(re(),ue("form",{class:"aivue-composer",onSubmit:ou(s,["prevent"])},[dp(R("textarea",{"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),placeholder:o.placeholder,disabled:o.disabled,rows:"2",onKeydown:jm(ou(s,["exact","prevent"]),["enter"])},null,40,sg),[[$a,r.value]]),R("button",{type:"submit",disabled:o.disabled||!r.value.trim()},Ye(o.status==="running"?"Running":"Send"),9,og)],32))}}),ag=["aria-label"],lg={class:"aivue-context__track"},Pd=Et({__name:"AiContext",props:{used:{},limit:{}},setup(n){const e=n,t=wr(()=>e.limit<=0?0:Math.max(0,Math.min(100,Math.round(e.used/e.limit*100))));return(i,r)=>(re(),ue("div",{class:"aivue-context","aria-label":`Context ${i.used} of ${i.limit}`},[r[0]||(r[0]=R("span",null,"Context",-1)),R("div",lg,[R("div",{class:"aivue-context__fill",style:Do({width:`${t.value}%`})},null,4)]),R("span",null,Ye(i.used.toLocaleString())+" / "+Ye(i.limit.toLocaleString()),1)],8,ag))}}),cg={class:"aivue-approval"},ug={key:0,class:"aivue-approval__actions"},fg={key:1},Ld=Et({__name:"AiApproval",props:{title:{},detail:{},status:{}},emits:["approve","reject"],setup(n){return(e,t)=>(re(),ue("div",cg,[t[2]||(t[2]=R("div",{class:"aivue-approval__kicker"},"Approval",-1)),R("strong",null,Ye(e.title),1),R("p",null,Ye(e.detail),1),e.status==="pending"?(re(),ue("div",ug,[R("button",{type:"button",onClick:t[0]||(t[0]=i=>e.$emit("approve"))},"Approve"),R("button",{type:"button",class:"aivue-approval__reject",onClick:t[1]||(t[1]=i=>e.$emit("reject"))},"Reject")])):(re(),ue("p",fg,Ye(e.status),1))]))}}),dg={class:"aivue-plan","aria-label":"Plan"},hg={class:"aivue-plan__label"},Dd=Et({__name:"AiPlan",props:{title:{},steps:{}},setup(n){return(e,t)=>(re(),ue("section",dg,[R("p",hg,Ye(e.title||"Plan"),1),R("ol",null,[(re(!0),ue(we,null,Qt(e.steps,i=>(re(),ue("li",{key:i.id,class:Zi(`is-${i.status}`)},[t[0]||(t[0]=R("span",{class:"aivue-plan__mark","aria-hidden":"true"},null,-1)),R("span",null,Ye(i.title),1)],2))),128))])]))}}),pg={class:"aivue-reasoning"},mg={class:"aivue-reasoning__label"},Id=Et({__name:"AiReasoning",props:{text:{},done:{type:Boolean}},setup(n){return(e,t)=>(re(),ue("div",pg,[R("div",mg,Ye(e.done?"Reasoning":"Thinking"),1),R("p",null,Ye(e.text),1)]))}}),gg={class:"aivue-sources","aria-label":"Sources"},_g={class:"aivue-sources__list"},Ud=Et({__name:"AiSources",props:{items:{}},setup(n){return(e,t)=>(re(),ue("section",gg,[t[0]||(t[0]=R("p",{class:"aivue-sources__label"},"Sources",-1)),R("div",_g,[(re(!0),ue(we,null,Qt(e.items,i=>(re(),Gt(td(i.href?"a":"span"),{key:i.title,href:i.href,target:"_blank",rel:"noreferrer"},{default:Gf(()=>[St(Ye(i.title),1)]),_:2},1032,["href"]))),128))])]))}}),vg={class:"aivue-suggestions",role:"list","aria-label":"Suggested prompts"},xg=["onClick"],Nd=Et({__name:"AiSuggestions",props:{items:{}},emits:["select"],setup(n){return(e,t)=>(re(),ue("div",vg,[(re(!0),ue(we,null,Qt(e.items,i=>(re(),ue("button",{key:i,type:"button",role:"listitem",onClick:r=>e.$emit("select",i)},Ye(i),9,xg))),128))]))}}),Mg={class:"aivue-tool"},Sg={class:"aivue-tool__name"},yg={key:0,class:"aivue-tool__args"},Eg={key:1,class:"aivue-tool__result"},Fd=Et({__name:"AiToolCall",props:{name:{},status:{},argsText:{},result:{}},setup(n){const e=n,t=wr(()=>{if(e.result===void 0)return"";if(Array.isArray(e.result))return`${e.result.length} rows`;const i=typeof e.result=="string"?e.result:JSON.stringify(e.result);return i.length>160?`${i.slice(0,160)}…`:i});return(i,r)=>(re(),ue("div",Mg,[R("div",Sg,Ye(i.name),1),R("div",{class:Zi(["aivue-tool__status",`aivue-tool__status--${i.status}`])},Ye(i.status),3),i.argsText?(re(),ue("div",yg,Ye(i.argsText),1)):Si("",!0),t.value?(re(),ue("div",Eg,Ye(t.value),1)):Si("",!0)]))}}),Tg={class:"aivue-message__role"},bg={key:0,class:"aivue-message__text"},Ag=Et({__name:"AiMessage",props:{message:{},components:{}},emits:["approve","reject","suggest"],setup(n){return(e,t)=>(re(),ue("article",{class:Zi(["aivue-message",`aivue-message--${e.message.role}`])},[R("div",Tg,Ye(e.message.role==="user"?"You":"Agent"),1),(re(!0),ue(we,null,Qt(e.message.parts,(i,r)=>{var s,o;return re(),ue(we,{key:r},[i.type==="text"?(re(),ue("p",bg,Ye(i.text),1)):i.type==="reasoning"?(re(),Gt(Id,{key:1,text:i.text,done:i.done},null,8,["text","done"])):i.type==="tool"?(re(),Gt(Fd,{key:2,name:i.name,status:i.status,"args-text":i.argsText,result:i.result},null,8,["name","status","args-text","result"])):i.type==="approval"?(re(),Gt(Ld,{key:3,title:i.title,detail:i.detail,status:i.status,onApprove:a=>e.$emit("approve",i.id),onReject:a=>e.$emit("reject",i.id)},null,8,["title","detail","status","onApprove","onReject"])):i.type==="ui"&&(s=e.components)!=null&&s[i.name]?(re(),Gt(td((o=e.components)==null?void 0:o[i.name]),Sd({key:4,ref_for:!0},i.props),null,16)):i.type==="sources"?(re(),Gt(Ud,{key:5,items:i.items},null,8,["items"])):i.type==="plan"?(re(),Gt(Dd,{key:6,title:i.title,steps:i.steps},null,8,["title","steps"])):i.type==="suggestions"?(re(),Gt(Nd,{key:7,items:i.items,onSelect:t[0]||(t[0]=a=>e.$emit("suggest",a))},null,8,["items"])):Si("",!0)],64)}),128))],2))}}),wg={class:"aivue-thread",role:"log","aria-live":"polite"},Rg={key:0,class:"aivue-message__text"},Cg=Et({__name:"AiThread",props:{messages:{},components:{}},emits:["approve","reject","suggest"],setup(n){return(e,t)=>(re(),ue("div",wg,[(re(!0),ue(we,null,Qt(e.messages,i=>(re(),Gt(Ag,{key:i.id,message:i,components:e.components,onApprove:t[0]||(t[0]=r=>e.$emit("approve",r)),onReject:t[1]||(t[1]=r=>e.$emit("reject",r)),onSuggest:t[2]||(t[2]=r=>e.$emit("suggest",r))},null,8,["message","components"]))),128)),e.messages.length?Si("",!0):(re(),ue("p",Rg,"Ask the agent to work on this page."))]))}}),Pg={class:"aivue-agent"},Lg=Et({__name:"AiAgent",props:{messages:{},status:{},components:{},placeholder:{},disabled:{type:Boolean},context:{}},emits:["send","approve","reject","suggest"],setup(n){return(e,t)=>(re(),ue("section",Pg,[e.context?(re(),Gt(Pd,{key:0,used:e.context.used,limit:e.context.limit},null,8,["used","limit"])):Si("",!0),Ie(Cg,{messages:e.messages,components:e.components,onApprove:t[0]||(t[0]=i=>e.$emit("approve",i)),onReject:t[1]||(t[1]=i=>e.$emit("reject",i)),onSuggest:t[2]||(t[2]=i=>e.$emit("suggest",i))},null,8,["messages","components"]),Ie(Cd,{placeholder:e.placeholder,disabled:e.disabled||e.status==="running"||e.status==="awaiting-approval",status:e.status,onSend:t[3]||(t[3]=i=>e.$emit("send",i))},null,8,["placeholder","disabled","status"])]))}});function cu(){return{status:"idle",messages:[],sharedState:{},seq:1}}function Od(n,e){return{id:`${e}_${n.seq}`,state:{...n,seq:n.seq+1}}}function nc(n,e){return{...n,messages:e}}function Dg(n){const e=n.messages.slice(),t=e[e.length-1];if(t&&t.role==="assistant")return{state:n,index:e.length-1};const i=Od(n,"m");return e.push({id:i.id,role:"assistant",parts:[],createdAt:Date.now()}),{state:nc(i.state,e),index:e.length-1}}function rn(n,e){const t=Dg(n),i=t.state.messages.slice(),r=i[t.index];return i[t.index]={...r,parts:e(r.parts)},nc(t.state,i)}function uu(n){const e=n.trim();if(e)try{const t=JSON.parse(e);if(t&&typeof t=="object"&&!Array.isArray(t))return t}catch{return}}function fu(n,e,t){return n.map(i=>i.type==="tool"&&i.id===e?t(i):i)}function Ig(n,e){switch(e.type){case"RUN_STARTED":{const t={...n,status:"running",error:void 0},i=Od(t,"m");return nc(i.state,[...t.messages,{id:i.id,role:"assistant",parts:[],createdAt:Date.now()}])}case"TEXT_MESSAGE_CONTENT":return rn({...n,status:n.status==="idle"?"running":n.status},t=>{const i=t[t.length-1];if(i&&i.type==="text"){const r={type:"text",text:i.text+e.delta};return[...t.slice(0,-1),r]}return[...t,{type:"text",text:e.delta}]});case"REASONING_MESSAGE_CONTENT":return rn(n,t=>{const i=[...t].reverse().find(r=>r.type==="reasoning"&&!r.done);return!i||i.type!=="reasoning"?[...t,{type:"reasoning",text:e.delta,done:!1}]:t.map(r=>r===i?{...i,text:i.text+e.delta}:r)});case"REASONING_END":return rn(n,t=>t.map(i=>i.type==="reasoning"&&!i.done?{...i,done:!0}:i));case"TOOL_CALL_START":return rn({...n,status:"running"},t=>[...t,{type:"tool",id:e.id,name:e.name,argsText:"",status:"running"}]);case"TOOL_CALL_ARGS":return rn(n,t=>fu(t,e.id,i=>{const r=i.argsText+e.delta;return{...i,argsText:r,args:uu(r)??i.args}}));case"TOOL_CALL_END":return rn(n,t=>fu(t,e.id,i=>({...i,status:"done",args:uu(i.argsText)??i.args,result:e.result!==void 0?e.result:i.result})));case"APPROVAL_REQUEST":return{...rn(n,t=>[...t,{type:"approval",id:e.id,title:e.title,detail:e.detail,status:"pending"}]),status:"awaiting-approval"};case"UI":return rn(n,t=>[...t,{type:"ui",name:e.name,props:e.props??{}}]);case"SOURCES":return rn(n,t=>[...t.filter(i=>i.type!=="sources"),{type:"sources",items:e.items}]);case"PLAN":return rn(n,t=>[...t.filter(i=>i.type!=="plan"),{type:"plan",title:e.title,steps:e.steps}]);case"PLAN_STEP":return rn(n,t=>t.map(i=>i.type!=="plan"?i:{...i,steps:i.steps.map(r=>r.id===e.id?{...r,status:e.status}:r)}));case"SUGGESTIONS":return rn(n,t=>[...t.filter(i=>i.type!=="suggestions"),{type:"suggestions",items:e.items}]);case"STATE_SNAPSHOT":return{...n,sharedState:{...e.snapshot}};case"STATE_DELTA":return{...n,sharedState:{...n.sharedState,...e.delta}};case"RUN_ERROR":return{...n,status:"error",error:e.message};case"RUN_FINISHED":{const t=n.messages.some(i=>i.parts.some(r=>r.type==="approval"&&r.status==="pending"));return{...n,status:t||n.status==="awaiting-approval"?"awaiting-approval":"complete"}}default:return n}}function Ug(n,e){return{message:{id:`u_${e}`,role:"user",parts:[{type:"text",text:n}],createdAt:Date.now()},seq:e+1}}function Ng(n,e,t,i,r){return{status:n,messages:e,sharedState:t,error:i??void 0,seq:r}}function Fg(){const n=cu(),e=Rt(n.messages),t=Rt(n.status),i=Rt(null),r=Rt({}),s=Rt(n.seq),o=new Map;let a=!1,l=0;function c(y){e.value=y.messages,t.value=y.status,i.value=y.error??null,r.value=y.sharedState,s.value=y.seq}function u(){return Ng(t.value,e.value,r.value,i.value,s.value)}function f(y,g){const I=y.messages.map(P=>{let N=!1;const E=P.parts.map(M=>{if(M.type!=="tool"||M.id!==g||M.result!==void 0)return M;const L=o.get(M.name);if(!L)return M;N=!0;try{const F=L(M.args??{});return{...M,result:F,status:"done"}}catch(F){const k=F instanceof Error?F.message:"Tool failed";return{...M,status:"error",result:k}}});return N?{...P,parts:E}:P}),C=I.some(P=>P.parts.some(N=>N.type==="tool"&&N.id===g&&N.status==="error"));return{...y,messages:I,status:C?"error":y.status,error:C?"Tool failed":y.error}}function h(y){let g=Ig(u(),y);y.type==="TOOL_CALL_END"&&(g=f(g,y.id)),c(g)}async function p(y,g){const I=++l;a=!1;const C=(g==null?void 0:g.paceMs)??0;for(const P of y){if(a||I!==l)return;h(P),C>0&&await new Promise(N=>setTimeout(N,C))}}function _(y){const g=y.trim();if(!g)return;const I=Ug(g,s.value);e.value=[...e.value,I.message],s.value=I.seq}function x(y,g){o.set(y,g)}function m(y,g){e.value=e.value.map(I=>({...I,parts:I.parts.map(C=>C.type==="approval"&&C.id===y?{...C,status:g}:C)})),t.value=g==="approved"?"running":"complete"}function d(){l+=1,a=!0;const y=cu();c(y),i.value=null}function A(){a=!0,l+=1,t.value==="running"&&(t.value="complete")}return{messages:e,status:t,error:i,sharedState:r,apply:h,play:p,addUserMessage:_,registerTool:x,resolveApproval:m,reset:d,stop:A}}const Og=Lg,Bg=Ld,zg=Cd,kg=Pd,Hg=Dd,Vg=Id,Gg=Ud,Wg=Nd,Xg=Fd,qg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function du(n){return n.replace(/[&<>"']/g,e=>qg[e]||e)}function Li(n){let e=du(n);return e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/(^|[^*])\*([^*]+)\*/g,"$1<em>$2</em>"),e=e.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(t,i,r)=>{const s=/^(https?:|mailto:|\/|#)/.test(r)?r:"";return s?`<a href="${du(s)}" target="_blank" rel="noreferrer">${i}</a>`:t}),e}function $g(n){const e=(n||"").replace(/\r\n/g,`
`).split(`
`),t=[];let i=0;for(;i<e.length;){const r=e[i];if(r.startsWith("```")){const a=r.slice(3).trim(),l=[];i+=1;let c=!1;for(;i<e.length;){if(e[i].startsWith("```")){c=!0,i+=1;break}l.push(e[i]),i+=1}t.push({type:"code",lang:a,text:l.join(`
`),pending:!c});continue}if(!r.trim()){i+=1;continue}const s=/^(#{1,3})\s+(.*)$/.exec(r);if(s){t.push({type:"heading",level:s[1].length,text:s[2]}),i+=1;continue}if(r.startsWith("> ")){const a=[];for(;i<e.length&&e[i].startsWith("> ");)a.push(e[i].slice(2)),i+=1;t.push({type:"quote",text:a.join(" ")});continue}if(/^[-*]\s+/.test(r)){const a=[];for(;i<e.length&&/^[-*]\s+/.test(e[i]);)a.push(e[i].replace(/^[-*]\s+/,"")),i+=1;t.push({type:"list",ordered:!1,items:a});continue}if(/^\d+\.\s+/.test(r)){const a=[];for(;i<e.length&&/^\d+\.\s+/.test(e[i]);)a.push(e[i].replace(/^\d+\.\s+/,"")),i+=1;t.push({type:"list",ordered:!0,items:a});continue}const o=[];for(;i<e.length&&e[i].trim()&&!e[i].startsWith("```")&&!/^(#{1,3})\s+/.test(e[i])&&!e[i].startsWith("> ")&&!/^[-*]\s+/.test(e[i])&&!/^\d+\.\s+/.test(e[i]);)o.push(e[i]),i+=1;t.push({type:"paragraph",text:o.join(" ")})}return t}const Yg={class:"aivue-md"},Kg=["innerHTML"],jg=["innerHTML"],Zg=["innerHTML"],Jg=["innerHTML"],Qg={key:5},e_=["innerHTML"],t_={key:6},n_=["innerHTML"],i_=["innerHTML"],r_=Et({__name:"AiStreamMarkdown",props:{source:{}},setup(n){const e=n,t=wr(()=>$g(e.source||""));return(i,r)=>(re(),ue("div",Yg,[(re(!0),ue(we,null,Qt(t.value,(s,o)=>(re(),ue(we,{key:o},[s.type==="heading"&&s.level===1?(re(),ue("h1",{key:0,innerHTML:ot(Li)(s.text)},null,8,Kg)):s.type==="heading"&&s.level===2?(re(),ue("h2",{key:1,innerHTML:ot(Li)(s.text)},null,8,jg)):s.type==="heading"?(re(),ue("h3",{key:2,innerHTML:ot(Li)(s.text)},null,8,Zg)):s.type==="code"?(re(),ue("pre",{key:3,class:Zi({"aivue-md__pending":s.pending})},[R("code",null,Ye(s.text),1)],2)):s.type==="quote"?(re(),ue("blockquote",{key:4,innerHTML:ot(Li)(s.text)},null,8,Jg)):s.type==="list"&&!s.ordered?(re(),ue("ul",Qg,[(re(!0),ue(we,null,Qt(s.items,(a,l)=>(re(),ue("li",{key:l,innerHTML:ot(Li)(a)},null,8,e_))),128))])):s.type==="list"?(re(),ue("ol",t_,[(re(!0),ue(we,null,Qt(s.items,(a,l)=>(re(),ue("li",{key:l,innerHTML:ot(Li)(a)},null,8,n_))),128))])):s.type==="paragraph"?(re(),ue("p",{key:7,innerHTML:ot(Li)(s.text)},null,8,i_)):Si("",!0)],64))),128))]))}}),Bd=r_;function Cr(n,e){return n.split(/(\s+)/).filter(Boolean).map(t=>({type:e,delta:t}))}function s_(n){const e=[];for(let i=28;i<n.length;i+=28)e.push({type:"STATE_DELTA",delta:{artifact:n.slice(0,i)}});return e.push({type:"STATE_DELTA",delta:{artifact:n}}),e}const zd=`## Payment reminder

Northwind — invoice **1042** for $1,840 was due on 12 Oct.

- Ask for a payment date this week
- Mention that invoice **1056** for Aster is also open
- Keep the note short enough to send as-is

> Prepared from the invoice table on this page.`;function o_(){return[{type:"RUN_STARTED"},{type:"PLAN",title:"Find overdue invoices",steps:[{id:"read",title:"Read the ledger on this page",status:"active"},{id:"filter",title:"Filter the overdue rows",status:"pending"},{id:"answer",title:"Answer with the two invoices",status:"pending"}]},...Cr("The page has four invoices. I only need the ones whose due date has passed and whose balance is still open.","REASONING_MESSAGE_CONTENT"),{type:"REASONING_END"},{type:"TOOL_CALL_START",id:"filter-1",name:"filter_invoices"},{type:"TOOL_CALL_ARGS",id:"filter-1",delta:'{"status":"overdue"}'},{type:"TOOL_CALL_END",id:"filter-1"},{type:"PLAN_STEP",id:"read",status:"done"},{type:"PLAN_STEP",id:"filter",status:"done"},{type:"PLAN_STEP",id:"answer",status:"active"},{type:"STATE_DELTA",delta:{filter:"overdue"}},...Cr("Two invoices are overdue: 1042 for Northwind and 1056 for Aster.","TEXT_MESSAGE_CONTENT"),{type:"UI",name:"InvoiceChip",props:{id:"1042",client:"Northwind",amount:"$1,840"}},{type:"PLAN_STEP",id:"answer",status:"done"},{type:"SOURCES",items:[{title:"Invoice ledger",href:"#agent"},{title:"Page state"}]},{type:"SUGGESTIONS",items:["Draft a reminder","Refund invoice 1042"]},{type:"RUN_FINISHED"}]}function a_(){return[{type:"RUN_STARTED"},...Cr("I will write the reminder into the artifact beside the table, using only the rows that are already on the page.","REASONING_MESSAGE_CONTENT"),{type:"REASONING_END"},{type:"TOOL_CALL_START",id:"draft-1",name:"draft_reminder"},{type:"TOOL_CALL_ARGS",id:"draft-1",delta:'{"tone":"direct"}'},...s_(zd),{type:"TOOL_CALL_END",id:"draft-1"},...Cr("The reminder is in the artifact. Nothing has been sent.","TEXT_MESSAGE_CONTENT"),{type:"RUN_FINISHED"}]}function l_(){return[{type:"RUN_STARTED"},...Cr("A refund moves money. I will stop and ask before changing invoice 1042.","REASONING_MESSAGE_CONTENT"),{type:"REASONING_END"},{type:"APPROVAL_REQUEST",id:"refund-1042",title:"Refund invoice 1042",detail:"Return $1,840 to Northwind. The invoice will be marked refunded."},{type:"RUN_FINISHED"}]}function c_(){return[{type:"RUN_STARTED"},{type:"TOOL_CALL_START",id:"refund-tool",name:"mark_refunded"},{type:"TOOL_CALL_ARGS",id:"refund-tool",delta:'{"id":"1042"}'},{type:"TOOL_CALL_END",id:"refund-tool"},{type:"STATE_DELTA",delta:{filter:"refunded"}},...Cr("Invoice 1042 is marked refunded. The table is showing that row.","TEXT_MESSAGE_CONTENT"),{type:"RUN_FINISHED"}]}const u_={class:"stage"},f_={class:"stage-copy"},d_={class:"prompt-row"},h_={class:"stage-grid"},p_={class:"panel thread-panel"},m_={class:"panel page-panel"},g_={class:"panel-head"},__={class:"filter-pill"},v_={class:"ledger"},x_={class:"artifact"},M_={key:1,class:"empty-artifact"},S_=Et({__name:"AgentStage",setup(n){const e=Rt([{id:"1042",client:"Northwind",amount:1840,status:"overdue",due:"12 Oct"},{id:"1048",client:"Helios Lab",amount:920,status:"open",due:"2 Nov"},{id:"1051",client:"Campo",amount:2400,status:"paid",due:"1 Oct"},{id:"1056",client:"Aster",amount:610,status:"overdue",due:"18 Oct"}]),t=Rt("all"),i=Rt(""),{messages:r,status:s,sharedState:o,addUserMessage:a,play:l,registerTool:c,resolveApproval:u,reset:f}=Fg(),p={InvoiceChip:Et({name:"InvoiceChip",props:{id:{type:String,required:!0},client:{type:String,required:!0},amount:{type:String,required:!0}},setup(y){return()=>Zr("div",{class:"invoice-chip"},[Zr("span",y.id),Zr("strong",y.client),Zr("em",y.amount)])}})};c("filter_invoices",y=>{const g=String(y.status||"all");return t.value=g,e.value.filter(I=>g==="all"||I.status===g)}),c("draft_reminder",()=>(i.value=zd,{drafted:!0})),c("mark_refunded",y=>{const g=String(y.id||"");return e.value=e.value.map(I=>I.id===g?{...I,status:"refunded"}:I),t.value="refunded",{id:g,status:"refunded"}}),xr(()=>o.value.filter,y=>{typeof y=="string"&&(t.value=y)}),xr(()=>o.value.artifact,y=>{typeof y=="string"&&(i.value=y)});const _=wr(()=>r.value.reduce((y,g)=>y+g.parts.reduce((I,C)=>C.type==="text"||C.type==="reasoning"?I+C.text.length:C.type==="tool"?I+C.argsText.length:I+24,0),0)),x=wr(()=>t.value==="all"?e.value:e.value.filter(y=>y.status===t.value));async function m(y){if(s.value==="running")return;const g=y.toLowerCase();if(r.value.length>8&&f(),a(y),g.includes("refund")){await l(l_(),{paceMs:18});return}if(g.includes("draft")||g.includes("remind")){await l(a_(),{paceMs:14});return}await l(o_(),{paceMs:14})}async function d(y){u(y,"approved"),await l(c_(),{paceMs:16})}function A(y){u(y,"rejected")}return(y,g)=>(re(),ue("div",u_,[R("div",f_,[g[3]||(g[3]=R("p",{class:"eyebrow"},"Page copilot",-1)),g[4]||(g[4]=R("h2",null,"It works on the screen you are looking at.",-1)),g[5]||(g[5]=R("p",{class:"lede"},"Ask for the overdue invoices, a reminder, or a refund. The agent filters the table, writes the artifact, and stops when money would move.",-1)),R("div",d_,[R("button",{type:"button",onClick:g[0]||(g[0]=I=>m("Which invoices are overdue?"))},"Overdue invoices"),R("button",{type:"button",onClick:g[1]||(g[1]=I=>m("Draft a reminder"))},"Draft a reminder"),R("button",{type:"button",onClick:g[2]||(g[2]=I=>m("Refund invoice 1042"))},"Refund 1042")])]),R("div",h_,[R("div",p_,[g[6]||(g[6]=R("div",{class:"panel-label"},"Agent",-1)),Ie(ot(Og),{messages:ot(r),status:ot(s),components:p,context:{used:_.value,limit:8e3},placeholder:"Ask about this page",onSend:m,onSuggest:m,onApprove:d,onReject:A},null,8,["messages","status","context"])]),R("div",m_,[R("div",g_,[g[7]||(g[7]=R("div",{class:"panel-label"},"This page",-1)),R("span",__,Ye(t.value),1)]),R("table",v_,[g[8]||(g[8]=R("thead",null,[R("tr",null,[R("th",null,"Invoice"),R("th",null,"Client"),R("th",null,"Due"),R("th",null,"Amount")])],-1)),R("tbody",null,[(re(!0),ue(we,null,Qt(x.value,I=>(re(),ue("tr",{key:I.id},[R("td",null,Ye(I.id),1),R("td",null,Ye(I.client),1),R("td",null,Ye(I.due),1),R("td",null,"$"+Ye(I.amount.toLocaleString()),1)]))),128))])]),R("div",x_,[g[9]||(g[9]=R("div",{class:"panel-label"},"Artifact",-1)),i.value?(re(),Gt(ot(Bd),{key:0,source:i.value},null,8,["source"])):(re(),ue("p",M_,"The draft will land here."))])])])]))}}),y_={class:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},E_={key:1,d:"M4 7h16M4 12h10M4 17h13"},T_={key:4,d:"M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H10l-4 3.5V15.2A2.5 2.5 0 0 1 5 12.5z"},b_={key:27,d:"M5 6h14v9H9l-4 3z"},A_={key:29,d:"M14.5 5.5a3.5 3.5 0 0 0-4.8 4.8L4 16.2 7.8 20l5.9-5.7a3.5 3.5 0 0 0 4.8-4.8l-2.2 2.2-2.6-2.6z"},w_={key:34,d:"M9 19c-4 1.2-4-2-6-2m12 4v-3.2a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C6.7 2 5.7 2.3 5.7 2.3a4.3 4.3 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.8 5.6 5.5 6a2.7 2.7 0 0 0-.8 2.1V21"},R_={key:35,d:"M12 3l1.6 4.8L18.5 9.5 13.6 11 12 15.8 10.4 11 5.5 9.5l4.9-1.7z"},wt=Et({__name:"Icon",props:{name:{}},setup(n){return(e,t)=>(re(),ue("svg",y_,[n.name==="orbit"?(re(),ue(we,{key:0},[t[0]||(t[0]=R("circle",{cx:"12",cy:"12",r:"1.7",fill:"currentColor",stroke:"none"},null,-1)),t[1]||(t[1]=R("ellipse",{cx:"12",cy:"12",rx:"9",ry:"3.6",transform:"rotate(-32 12 12)"},null,-1)),t[2]||(t[2]=R("ellipse",{cx:"12",cy:"12",rx:"9",ry:"3.6",transform:"rotate(58 12 12)"},null,-1))],64)):n.name==="lines"?(re(),ue("path",E_)):n.name==="terminal"?(re(),ue(we,{key:2},[t[3]||(t[3]=R("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1)),t[4]||(t[4]=R("path",{d:"M7 9l3 3-3 3M12 15h5"},null,-1))],64)):n.name==="hex"?(re(),ue(we,{key:3},[t[5]||(t[5]=R("path",{d:"M12 3l7 4v10l-7 4-7-4V7z"},null,-1)),t[6]||(t[6]=R("path",{d:"M12 8v8M9 10.5l6 3M15 10.5l-6 3"},null,-1))],64)):n.name==="chat"?(re(),ue("path",T_)):n.name==="database"?(re(),ue(we,{key:5},[t[7]||(t[7]=R("ellipse",{cx:"12",cy:"6",rx:"7",ry:"3"},null,-1)),t[8]||(t[8]=R("path",{d:"M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"},null,-1))],64)):n.name==="cpu"?(re(),ue(we,{key:6},[t[9]||(t[9]=R("rect",{x:"7",y:"7",width:"10",height:"10",rx:"2"},null,-1)),t[10]||(t[10]=R("path",{d:"M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4"},null,-1))],64)):n.name==="nodes"?(re(),ue(we,{key:7},[t[11]||(t[11]=R("circle",{cx:"6",cy:"7",r:"2"},null,-1)),t[12]||(t[12]=R("circle",{cx:"18",cy:"7",r:"2"},null,-1)),t[13]||(t[13]=R("circle",{cx:"12",cy:"17",r:"2"},null,-1)),t[14]||(t[14]=R("path",{d:"M8 8.2l3 7M16 8.2l-3 7"},null,-1))],64)):n.name==="pen"?(re(),ue(we,{key:8},[t[15]||(t[15]=R("path",{d:"M4 20l4.2-1.1L19 8.1a2 2 0 0 0-2.8-2.8L5.4 16.1z"},null,-1)),t[16]||(t[16]=R("path",{d:"M14.5 6.5l3 3"},null,-1))],64)):n.name==="list"?(re(),ue(we,{key:9},[t[17]||(t[17]=R("path",{d:"M8 7h11M8 12h11M8 17h11"},null,-1)),t[18]||(t[18]=R("circle",{cx:"4.5",cy:"7",r:".8",fill:"currentColor",stroke:"none"},null,-1)),t[19]||(t[19]=R("circle",{cx:"4.5",cy:"12",r:".8",fill:"currentColor",stroke:"none"},null,-1)),t[20]||(t[20]=R("circle",{cx:"4.5",cy:"17",r:".8",fill:"currentColor",stroke:"none"},null,-1))],64)):n.name==="translate"?(re(),ue(we,{key:10},[t[21]||(t[21]=R("path",{d:"M4 6h8M8 6c0 6-3 8-5 9M8 6c1 4 3.5 6.5 6 8"},null,-1)),t[22]||(t[22]=R("path",{d:"M13 14l2.2 5L18 14M14.2 17.2h3.2"},null,-1))],64)):n.name==="shield"?(re(),ue(we,{key:11},[t[23]||(t[23]=R("path",{d:"M12 3l7 3v6c0 4.2-2.8 7.2-7 9-4.2-1.8-7-4.8-7-9V6z"},null,-1)),t[24]||(t[24]=R("path",{d:"M9 12l2 2 4-4"},null,-1))],64)):n.name==="table"?(re(),ue(we,{key:12},[t[25]||(t[25]=R("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"},null,-1)),t[26]||(t[26]=R("path",{d:"M3 10h18M9 10v9M15 10v9"},null,-1))],64)):n.name==="chart"?(re(),ue(we,{key:13},[t[27]||(t[27]=R("path",{d:"M4 19V5M4 19h16"},null,-1)),t[28]||(t[28]=R("path",{d:"M8 15v-3M12 15V8M16 15v-5"},null,-1))],64)):n.name==="tree"?(re(),ue(we,{key:14},[t[29]||(t[29]=R("circle",{cx:"12",cy:"5",r:"2"},null,-1)),t[30]||(t[30]=R("circle",{cx:"6",cy:"18",r:"2"},null,-1)),t[31]||(t[31]=R("circle",{cx:"18",cy:"18",r:"2"},null,-1)),t[32]||(t[32]=R("path",{d:"M12 7v4M12 11H6.8L6 16M12 11h5.2L18 16"},null,-1))],64)):n.name==="doc"?(re(),ue(we,{key:15},[t[33]||(t[33]=R("path",{d:"M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"},null,-1)),t[34]||(t[34]=R("path",{d:"M14 3v5h5M9 13h6M9 17h4"},null,-1))],64)):n.name==="image"?(re(),ue(we,{key:16},[t[35]||(t[35]=R("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"},null,-1)),t[36]||(t[36]=R("circle",{cx:"9",cy:"10",r:"1.4"},null,-1)),t[37]||(t[37]=R("path",{d:"M3 16l5-4 4 3 3-2 6 4"},null,-1))],64)):n.name==="form"?(re(),ue(we,{key:17},[t[38]||(t[38]=R("rect",{x:"4",y:"3",width:"16",height:"18",rx:"2"},null,-1)),t[39]||(t[39]=R("path",{d:"M8 8h8M8 12h8M8 16h5"},null,-1))],64)):n.name==="check"?(re(),ue(we,{key:18},[t[40]||(t[40]=R("rect",{x:"4",y:"4",width:"16",height:"16",rx:"3"},null,-1)),t[41]||(t[41]=R("path",{d:"M8 12.5l2.5 2.5L16 9"},null,-1))],64)):n.name==="suggest"?(re(),ue(we,{key:19},[t[42]||(t[42]=R("path",{d:"M5 8h14M5 12h9M5 16h6"},null,-1)),t[43]||(t[43]=R("path",{d:"M17 13l1.2 2.4L21 17l-2.8 1.2L17 21l-1.2-2.8L13 17l2.8-1.6z"},null,-1))],64)):n.name==="cursor"?(re(),ue(we,{key:20},[t[44]||(t[44]=R("path",{d:"M5 5h14M8 5v3M5 11h8"},null,-1)),t[45]||(t[45]=R("path",{d:"M15 11v6M15 14h4"},null,-1))],64)):n.name==="mic"?(re(),ue(we,{key:21},[t[46]||(t[46]=R("rect",{x:"9",y:"3",width:"6",height:"11",rx:"3"},null,-1)),t[47]||(t[47]=R("path",{d:"M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"},null,-1))],64)):n.name==="bell"?(re(),ue(we,{key:22},[t[48]||(t[48]=R("path",{d:"M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5z"},null,-1)),t[49]||(t[49]=R("path",{d:"M10 19a2 2 0 0 0 4 0"},null,-1))],64)):n.name==="face"?(re(),ue(we,{key:23},[t[50]||(t[50]=R("circle",{cx:"12",cy:"12",r:"8"},null,-1)),t[51]||(t[51]=R("path",{d:"M9 10h.01M15 10h.01M8.5 14.5c1 .9 2.2 1.4 3.5 1.4s2.5-.5 3.5-1.4"},null,-1))],64)):n.name==="spin"?(re(),ue(we,{key:24},[t[52]||(t[52]=R("path",{d:"M20 12a8 8 0 1 1-2.2-5.5"},null,-1)),t[53]||(t[53]=R("path",{d:"M20 4v5h-5"},null,-1))],64)):n.name==="cube"?(re(),ue(we,{key:25},[t[54]||(t[54]=R("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9z"},null,-1)),t[55]||(t[55]=R("path",{d:"M12 12l8-4.5M12 12v9M12 12L4 7.5"},null,-1))],64)):n.name==="thread"?(re(),ue(we,{key:26},[t[56]||(t[56]=R("path",{d:"M7 7h10M7 12h7M7 17h5"},null,-1)),t[57]||(t[57]=R("circle",{cx:"5",cy:"7",r:".7",fill:"currentColor",stroke:"none"},null,-1)),t[58]||(t[58]=R("circle",{cx:"5",cy:"12",r:".7",fill:"currentColor",stroke:"none"},null,-1)),t[59]||(t[59]=R("circle",{cx:"5",cy:"17",r:".7",fill:"currentColor",stroke:"none"},null,-1))],64)):n.name==="message"?(re(),ue("path",b_)):n.name==="reason"?(re(),ue(we,{key:28},[t[60]||(t[60]=R("circle",{cx:"12",cy:"12",r:"8"},null,-1)),t[61]||(t[61]=R("path",{d:"M12 8v4l2.5 2"},null,-1))],64)):n.name==="tool"?(re(),ue("path",A_)):n.name==="approval"?(re(),ue(we,{key:30},[t[62]||(t[62]=R("path",{d:"M12 3l7 3v6c0 4-2.7 6.8-7 8.5C7.7 18.8 5 16 5 12V6z"},null,-1)),t[63]||(t[63]=R("path",{d:"M9.2 12.1l1.8 1.8 3.8-3.8"},null,-1))],64)):n.name==="composer"?(re(),ue(we,{key:31},[t[64]||(t[64]=R("rect",{x:"3",y:"6",width:"18",height:"12",rx:"6"},null,-1)),t[65]||(t[65]=R("path",{d:"M8 12h5"},null,-1))],64)):n.name==="panel"?(re(),ue(we,{key:32},[t[66]||(t[66]=R("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1)),t[67]||(t[67]=R("path",{d:"M3 9h18"},null,-1))],64)):n.name==="play"?(re(),ue(we,{key:33},[t[68]||(t[68]=R("circle",{cx:"12",cy:"12",r:"8"},null,-1)),t[69]||(t[69]=R("path",{d:"M10 9.5v5l4.5-2.5z"},null,-1))],64)):n.name==="github"?(re(),ue("path",w_)):(re(),ue("path",R_))]))}}),C_={class:"gallery"},P_={class:"control"},L_={class:"control"},D_={class:"control"},I_={class:"control control--wide"},U_={class:"control"},N_={key:0,class:"sent"},F_={class:"control"},O_={class:"control"},B_={class:"control"},z_={key:0,class:"sent"},k_={class:"control"},H_={class:"control"},V_="A refund is a write. I should show the amount and wait, instead of calling the tool immediately.",ia=`## Reminder

Invoice **1042** is overdue.

- Northwind owes $1,840
- Due 12 Oct

\`\`\`
status: overdue
\`\`\``,G_=Et({__name:"ControlGallery",emits:["library"],setup(n){const e=Rt("pending"),t=Rt(""),i=Rt(""),r=Rt("");let s=0;return No(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r.value=ia;return}let a=0;s=window.setInterval(()=>{a+=2,r.value=ia.slice(0,a),a>=ia.length&&window.clearInterval(s)},24)}),Fo(()=>window.clearInterval(s)),(o,a)=>(re(),ue("div",C_,[R("article",P_,[R("header",null,[R("p",null,[Ie(wt,{name:"reason"}),a[5]||(a[5]=St(" 01",-1))]),a[6]||(a[6]=R("h3",null,"Reasoning",-1))]),Ie(ot(Vg),{text:V_,done:!0})]),R("article",L_,[R("header",null,[R("p",null,[Ie(wt,{name:"tool"}),a[7]||(a[7]=St(" 02",-1))]),a[8]||(a[8]=R("h3",null,"Tool call",-1))]),Ie(ot(Xg),{name:"filter_invoices",status:"done","args-text":'{"status":"overdue"}',result:{count:2}})]),R("article",D_,[R("header",null,[R("p",null,[Ie(wt,{name:"approval"}),a[9]||(a[9]=St(" 03",-1))]),a[10]||(a[10]=R("h3",null,"Approval",-1))]),Ie(ot(Bg),{title:"Refund invoice 1042",detail:"Return $1,840 to Northwind.",status:e.value,onApprove:a[0]||(a[0]=l=>e.value="approved"),onReject:a[1]||(a[1]=l=>e.value="rejected")},null,8,["status"])]),R("article",I_,[R("header",null,[R("p",null,[Ie(wt,{name:"lines"}),a[11]||(a[11]=St(" 04",-1))]),a[12]||(a[12]=R("h3",null,"Streaming Markdown",-1))]),Ie(ot(Bd),{source:r.value},null,8,["source"])]),R("article",U_,[R("header",null,[R("p",null,[Ie(wt,{name:"composer"}),a[13]||(a[13]=St(" 05",-1))]),a[14]||(a[14]=R("h3",null,"Composer",-1))]),Ie(ot(zg),{placeholder:"Message the agent",onSend:a[2]||(a[2]=l=>t.value=l)}),t.value?(re(),ue("p",N_,"Queued: "+Ye(t.value),1)):Si("",!0)]),R("article",F_,[R("header",null,[R("p",null,[Ie(wt,{name:"list"}),a[15]||(a[15]=St(" 06",-1))]),a[16]||(a[16]=R("h3",null,"Plan",-1))]),Ie(ot(Hg),{title:"Find overdue invoices",steps:[{id:"read",title:"Read the ledger",status:"done"},{id:"filter",title:"Filter overdue rows",status:"active"},{id:"answer",title:"Answer on the page",status:"pending"}]})]),R("article",O_,[R("header",null,[R("p",null,[Ie(wt,{name:"doc"}),a[17]||(a[17]=St(" 07",-1))]),a[18]||(a[18]=R("h3",null,"Sources",-1))]),Ie(ot(Gg),{items:[{title:"Invoice ledger",href:"#agent"},{title:"Page state"}]})]),R("article",B_,[R("header",null,[R("p",null,[Ie(wt,{name:"suggest"}),a[19]||(a[19]=St(" 08",-1))]),a[20]||(a[20]=R("h3",null,"Suggestions",-1))]),Ie(ot(Wg),{items:["Draft a reminder","Refund invoice 1042"],onSelect:a[3]||(a[3]=l=>i.value=l)}),i.value?(re(),ue("p",z_,"Ready to send: "+Ye(i.value),1)):Si("",!0)]),R("article",k_,[R("header",null,[R("p",null,[Ie(wt,{name:"chart"}),a[21]||(a[21]=St(" 09",-1))]),a[22]||(a[22]=R("h3",null,"Context",-1))]),Ie(ot(kg),{used:1840,limit:8e3})]),R("article",H_,[R("header",null,[R("p",null,[Ie(wt,{name:"cpu"}),a[23]||(a[23]=St(" 10",-1))]),a[24]||(a[24]=R("h3",null,"Local runtime",-1))]),a[25]||(a[25]=R("p",{class:"local-copy"},"@aivue/browser-llm runs a model in WebGPU. The studio stays on a scripted agent so the page works with no key. Open the component library for the live local model.",-1)),R("button",{type:"button",class:"text-button",onClick:a[4]||(a[4]=l=>o.$emit("library"))},"Open the library")])]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="170",W_=0,hu=1,X_=2,kd=1,q_=2,Vn=3,Ei=0,Xt=1,Yn=2,vi=0,yr=1,pu=2,mu=3,gu=4,$_=5,Vi=100,Y_=101,K_=102,j_=103,Z_=104,J_=200,Q_=201,e0=202,t0=203,Ya=204,Ka=205,n0=206,i0=207,r0=208,s0=209,o0=210,a0=211,l0=212,c0=213,u0=214,ja=0,Za=1,Ja=2,Pr=3,Qa=4,el=5,tl=6,nl=7,Hd=0,f0=1,d0=2,xi=0,h0=1,p0=2,m0=3,g0=4,_0=5,v0=6,x0=7,Vd=300,Lr=301,Dr=302,il=303,rl=304,ko=306,sl=1e3,Wi=1001,ol=1002,Mn=1003,M0=1004,Ns=1005,Pn=1006,ra=1007,Xi=1008,ti=1009,Gd=1010,Wd=1011,ms=1012,rc=1013,Ki=1014,Kn=1015,Ss=1016,sc=1017,oc=1018,Ir=1020,Xd=35902,qd=1021,$d=1022,vn=1023,Yd=1024,Kd=1025,Er=1026,Ur=1027,jd=1028,ac=1029,Zd=1030,lc=1031,cc=1033,co=33776,uo=33777,fo=33778,ho=33779,al=35840,ll=35841,cl=35842,ul=35843,fl=36196,dl=37492,hl=37496,pl=37808,ml=37809,gl=37810,_l=37811,vl=37812,xl=37813,Ml=37814,Sl=37815,yl=37816,El=37817,Tl=37818,bl=37819,Al=37820,wl=37821,po=36492,Rl=36494,Cl=36495,Jd=36283,Pl=36284,Ll=36285,Dl=36286,S0=3200,y0=3201,E0=0,T0=1,gi="",on="srgb",Or="srgb-linear",Ho="linear",lt="srgb",er=7680,_u=519,b0=512,A0=513,w0=514,Qd=515,R0=516,C0=517,P0=518,L0=519,vu=35044,xu="300 es",jn=2e3,To=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,Il=180/Math.PI;function ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function D0(n,e){return(n%e+e)%e}function oa(n,e,t){return(1-t)*n+t*e}function Xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],A=r[1],y=r[4],g=r[7],I=r[2],C=r[5],P=r[8];return s[0]=o*x+a*A+l*I,s[3]=o*m+a*y+l*C,s[6]=o*d+a*g+l*P,s[1]=c*x+u*A+f*I,s[4]=c*m+u*y+f*C,s[7]=c*d+u*g+f*P,s[2]=h*x+p*A+_*I,s[5]=h*m+p*y+_*C,s[8]=h*d+p*g+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new $e;function eh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function I0(){const n=bo("canvas");return n.style.display="block",n}const Mu={};function Jr(n){n in Mu||(Mu[n]=!0,console.warn(n))}function U0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function N0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function F0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=Tr(n.r),n.g=Tr(n.g),n.b=Tr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===gi?Ho:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Su=[.64,.33,.3,.6,.15,.06],yu=[.2126,.7152,.0722],Eu=[.3127,.329],Tu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Or]:{primaries:Su,whitePoint:Eu,transfer:Ho,toXYZ:Tu,fromXYZ:bu,luminanceCoefficients:yu,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:Su,whitePoint:Eu,transfer:lt,toXYZ:Tu,fromXYZ:bu,luminanceCoefficients:yu,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let tr;class O0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=bo("canvas")),tr.width=e.width,tr.height=e.height;const i=tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B0=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?O0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z0=0;class qt extends Br{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=Wi,r=Wi,s=Pn,o=Xi,a=vn,l=ti,c=qt.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ys(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sl:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sl:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Vd;qt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,g=(p+1)/2,I=(d+1)/2,C=(u+h)/4,P=(f+x)/4,N=(_+m)/4;return y>g&&y>I?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=P/i):g>I?g<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),i=C/r,s=N/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=N/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k0 extends Br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new th(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends k0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nh extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H0 extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*x,A=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,d*A);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const g=a*A;if(l=l*m+h*g,c=c*m+p*g,u=u*m+_*g,f=f*m+x*g,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new G,Au=new Es;class Ts{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Os.subVectors(this.max,qr),nr.subVectors(e.a,qr),ir.subVectors(e.b,qr),rr.subVectors(e.c,qr),ai.subVectors(ir,nr),li.subVectors(rr,ir),Di.subVectors(nr,rr);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Di.z,Di.y,ai.z,0,-ai.x,li.z,0,-li.x,Di.z,0,-Di.x,-ai.y,ai.x,0,-li.y,li.x,0,-Di.y,Di.x,0];return!ua(t,nr,ir,rr,Os)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,nr,ir,rr,Os))?!1:(Bs.crossVectors(ai,li),t=[Bs.x,Bs.y,Bs.z],ua(t,nr,ir,rr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new G,new G,new G,new G,new G,new G,new G,new G],pn=new G,Fs=new Ts,nr=new G,ir=new G,rr=new G,ai=new G,li=new G,Di=new G,qr=new G,Os=new G,Bs=new G,Ii=new G;function ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ii.fromArray(n,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const V0=new Ts,$r=new G,fa=new G;class Vo{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(fa)),this.expandByPoint($r.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new G,da=new G,zs=new G,ci=new G,ha=new G,ks=new G,pa=new G;class ih{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){da.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=ci.dot(this.direction),l=-ci.dot(zs),c=ci.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(zs,h),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,s){ha.subVectors(t,e),ks.subVectors(i,e),pa.crossVectors(ha,ks);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(ci,ks));if(l<0)return null;const c=a*this.direction.dot(ha.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G0,e,W0)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ui.crossVectors(i,jt),ui.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ui.crossVectors(i,jt)),ui.normalize(),Hs.crossVectors(jt,ui),r[0]=ui.x,r[4]=Hs.x,r[8]=jt.x,r[1]=ui.y,r[5]=Hs.y,r[9]=jt.y,r[2]=ui.z,r[6]=Hs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],A=i[3],y=i[7],g=i[11],I=i[15],C=r[0],P=r[4],N=r[8],E=r[12],M=r[1],L=r[5],F=r[9],k=r[13],J=r[2],te=r[6],X=r[10],ie=r[14],V=r[3],pe=r[7],Ee=r[11],Ae=r[15];return s[0]=o*C+a*M+l*J+c*V,s[4]=o*P+a*L+l*te+c*pe,s[8]=o*N+a*F+l*X+c*Ee,s[12]=o*E+a*k+l*ie+c*Ae,s[1]=u*C+f*M+h*J+p*V,s[5]=u*P+f*L+h*te+p*pe,s[9]=u*N+f*F+h*X+p*Ee,s[13]=u*E+f*k+h*ie+p*Ae,s[2]=_*C+x*M+m*J+d*V,s[6]=_*P+x*L+m*te+d*pe,s[10]=_*N+x*F+m*X+d*Ee,s[14]=_*E+x*k+m*ie+d*Ae,s[3]=A*C+y*M+g*J+I*V,s[7]=A*P+y*L+g*te+I*pe,s[11]=A*N+y*F+g*X+I*Ee,s[15]=A*E+y*k+g*ie+I*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],A=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,y=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,g=u*x*c-_*f*c+_*a*p-o*x*p-u*a*d+o*f*d,I=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,C=t*A+i*y+r*g+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=A*P,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=y*P,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*P,e[8]=g*P,e[9]=(_*f*s-u*x*s-_*i*p+t*x*p+u*i*d-t*f*d)*P,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=I*P,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*P,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,x=o*u,m=o*f,d=a*f,A=l*c,y=l*u,g=l*f,I=i.x,C=i.y,P=i.z;return r[0]=(1-(x+d))*I,r[1]=(p+g)*I,r[2]=(_-y)*I,r[3]=0,r[4]=(p-g)*C,r[5]=(1-(h+d))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(_+y)*P,r[9]=(m-A)*P,r[10]=(1-(h+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,u=1/o,f=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,t.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=jn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===jn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===To)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=jn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let _,x;if(a===jn)_=(o+s)*f,x=-2*f;else if(a===To)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sr=new G,mn=new xt,G0=new G(0,0,0),W0=new G(1,1,1),ui=new G,Hs=new G,jt=new G,wu=new xt,Ru=new Es;class ni{constructor(e=0,t=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X0=0;const Cu=new G,or=new Es,zn=new xt,Vs=new G,Yr=new G,q0=new G,$0=new Es,Pu=new G(1,0,0),Lu=new G(0,1,0),Du=new G(0,0,1),Iu={type:"added"},Y0={type:"removed"},ar={type:"childadded",child:null},ma={type:"childremoved",child:null};class $t extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new G,t=new ni,i=new Es,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Yr,Vs,this.up):zn.lookAt(Vs,Yr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(zn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y0),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new G(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new G,kn=new G,ga=new G,Hn=new G,lr=new G,cr=new G,Uu=new G,_a=new G,va=new G,xa=new G,Ma=new vt,Sa=new vt,ya=new vt;class _n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),kn.subVectors(i,t),ga.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(kn),l=gn.dot(ga),c=kn.dot(kn),u=kn.dot(ga),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ma.setScalar(0),Sa.setScalar(0),ya.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),ya.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ma,s.x),o.addScaledVector(Sa,s.y),o.addScaledVector(ya,s.z),o}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),kn.subVectors(e,t),gn.cross(kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;lr.subVectors(r,i),cr.subVectors(s,i),_a.subVectors(e,i);const l=lr.dot(_a),c=cr.dot(_a);if(l<=0&&c<=0)return t.copy(i);va.subVectors(e,r);const u=lr.dot(va),f=cr.dot(va);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(lr,o);xa.subVectors(e,s);const p=lr.dot(xa),_=cr.dot(xa);if(_>=0&&p<=_)return t.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(cr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Uu.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(Uu,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=D0(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ea(o,s,e+1/3),this.g=Ea(o,s,e),this.b=Ea(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=sh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return je.fromWorkingColorSpace(It.copy(this),e),Math.round(Wt(It.r*255,0,255))*65536+Math.round(Wt(It.g*255,0,255))*256+Math.round(Wt(It.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(It.copy(this),t);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=on){je.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Gs);const i=oa(fi.h,Gs.h,t),r=oa(fi.s,Gs.s,t),s=oa(fi.l,Gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new at;at.NAMES=sh;let K0=0;class bs extends Br{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ys(),this.name="",this.blending=yr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Ka,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ya&&(i.blendSrc=this.blendSrc),this.blendDst!==Ka&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class as extends bs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new G,Ws=new it;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vu,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),e}}class oh extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ah extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let j0=0;const sn=new xt,Ta=new $t,ur=new G,Zt=new Ts,Kr=new Ts,At=new G;class Tn extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?ah:oh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Zt.min,Kr.min),Zt.expandByPoint(At),At.addVectors(Zt.max,Kr.max),Zt.expandByPoint(At)):(Zt.expandByPoint(Kr.min),Zt.expandByPoint(Kr.max))}Zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),At.add(ur)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new G,l[N]=new G;const c=new G,u=new G,f=new G,h=new it,p=new it,_=new it,x=new G,m=new G;function d(N,E,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[N].add(x),a[E].add(x),a[M].add(x),l[N].add(m),l[E].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,E=A.length;N<E;++N){const M=A[N],L=M.start,F=M.count;for(let k=L,J=L+F;k<J;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new G,g=new G,I=new G,C=new G;function P(N){I.fromBufferAttribute(r,N),C.copy(I);const E=a[N];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),g.crossVectors(C,E);const L=g.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,L)}for(let N=0,E=A.length;N<E;++N){const M=A[N],L=M.start,F=M.count;for(let k=L,J=L+F;k<J;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new xt,Ui=new ih,Xs=new Vo,Fu=new G,qs=new G,$s=new G,Ys=new G,ba=new G,Ks=new G,Ou=new G,js=new G;class ln extends $t{constructor(e=new Tn,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ba.fromBufferAttribute(f,e),o?Ks.addScaledVector(ba,u):Ks.addScaledVector(ba.sub(t),u))}t.add(Ks)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(Xs.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Xs,Fu)===null||Ui.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Nu.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=A,I=y;g<I;g+=3){const C=a.getX(g),P=a.getX(g+1),N=a.getX(g+2);r=Zs(this,d,e,i,c,u,f,C,P,N),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=a.getX(m),y=a.getX(m+1),g=a.getX(m+2);r=Zs(this,o,e,i,c,u,f,A,y,g),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=A,I=y;g<I;g+=3){const C=g,P=g+1,N=g+2;r=Zs(this,d,e,i,c,u,f,C,P,N),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const A=m,y=m+1,g=m+2;r=Zs(this,o,e,i,c,u,f,A,y,g),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Z0(n,e,t,i,r,s,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ei,a),l===null)return null;js.copy(a),js.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:n}}function Zs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,qs),n.getVertexPosition(l,$s),n.getVertexPosition(c,Ys);const u=Z0(n,e,t,i,qs,$s,Ys,Ou);if(u){const f=new G;_n.getBarycoord(Ou,qs,$s,Ys,f),r&&(u.uv=_n.getInterpolatedAttribute(r,a,l,c,f,new it)),s&&(u.uv1=_n.getInterpolatedAttribute(s,a,l,c,f,new it)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};_n.getNormal(qs,$s,Ys,h.normal),u.face=h,u.barycoord=f}return u}class As extends Tn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function _(x,m,d,A,y,g,I,C,P,N,E){const M=g/P,L=I/N,F=g/2,k=I/2,J=C/2,te=P+1,X=N+1;let ie=0,V=0;const pe=new G;for(let Ee=0;Ee<X;Ee++){const Ae=Ee*L-k;for(let Fe=0;Fe<te;Fe++){const Qe=Fe*M-F;pe[x]=Qe*A,pe[m]=Ae*y,pe[d]=J,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[d]=C>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Fe/P),f.push(1-Ee/N),ie+=1}}for(let Ee=0;Ee<N;Ee++)for(let Ae=0;Ae<P;Ae++){const Fe=h+Ae+te*Ee,Qe=h+Ae+te*(Ee+1),ne=h+(Ae+1)+te*(Ee+1),fe=h+(Ae+1)+te*Ee;l.push(Fe,Qe,fe),l.push(Qe,ne,fe),V+=6}a.addGroup(p,V,E),p+=V,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Nr(n[t]);for(const r in i)e[r]=i[r]}return e}function J0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Q0={clone:Nr,merge:Bt};var ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends bs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ev,this.fragmentShader=tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ch extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new G,Bu=new it,zu=new it;class an extends ch{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Bu,zu),t.subVectors(zu,Bu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,dr=1;class nv extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(fr,dr,e,t);r.layers=this.layers,this.add(r);const s=new an(fr,dr,e,t);s.layers=this.layers,this.add(s);const o=new an(fr,dr,e,t);o.layers=this.layers,this.add(o);const a=new an(fr,dr,e,t);a.layers=this.layers,this.add(a);const l=new an(fr,dr,e,t);l.layers=this.layers,this.add(l);const c=new an(fr,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class uh extends qt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iv extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new As(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:vi});s.uniforms.tEquirect.value=t;const o=new ln(r,s),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Pn),new nv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Aa=new G,rv=new G,sv=new $e;class zi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Aa.subVectors(i,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sv.getNormalMatrix(e),r=this.coplanarPoint(Aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Vo,Js=new G;class fh{constructor(e=new zi,t=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],d=r[12],A=r[13],y=r[14],g=r[15];if(i[0].setComponents(l-s,h-c,m-p,g-d).normalize(),i[1].setComponents(l+s,h+c,m+p,g+d).normalize(),i[2].setComponents(l+o,h+u,m+_,g+A).normalize(),i[3].setComponents(l-o,h-u,m-_,g-A).normalize(),i[4].setComponents(l-a,h-f,m-x,g-y).normalize(),t===jn)i[5].setComponents(l+a,h+f,m+x,g+y).normalize();else if(t===To)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ov(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Go extends Tn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*h-o;for(let y=0;y<c;y++){const g=y*f-s;_.push(g,-A,0),x.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const y=A+c*d,g=A+c*(d+1),I=A+1+c*(d+1),C=A+1+c*d;p.push(y,g,C),p.push(g,I,C)}this.setIndex(p),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:fv,alphatest_pars_fragment:dv,aomap_fragment:hv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:_v,beginnormal_vertex:vv,bsdfs:xv,iridescence_fragment:Mv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Ev,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:bv,color_fragment:Av,color_pars_fragment:wv,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Uv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Fv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:zv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Hv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Qv,envmap_vertex:Gv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:qv,fog_pars_fragment:$v,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:Kv,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Zv,lights_pars_begin:Jv,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:rx,lights_physical_pars_fragment:sx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:fx,logdepthbuf_vertex:dx,map_fragment:hx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:vx,morphinstance_vertex:xx,morphcolor_vertex:Mx,morphnormal_vertex:Sx,morphtarget_pars_vertex:yx,morphtarget_vertex:Ex,normal_fragment_begin:Tx,normal_fragment_maps:bx,normal_pars_fragment:Ax,normal_pars_vertex:wx,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Ix,opaque_fragment:Ux,packing:Nx,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:Bx,dithering_pars_fragment:zx,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:qx,skinning_pars_vertex:$x,skinning_vertex:Yx,skinnormal_vertex:Kx,specularmap_fragment:jx,specularmap_pars_fragment:Zx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Qx,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:fM,depth_vert:dM,depth_frag:hM,distanceRGBA_vert:pM,distanceRGBA_frag:mM,equirect_vert:gM,equirect_frag:_M,linedashed_vert:vM,linedashed_frag:xM,meshbasic_vert:MM,meshbasic_frag:SM,meshlambert_vert:yM,meshlambert_frag:EM,meshmatcap_vert:TM,meshmatcap_frag:bM,meshnormal_vert:AM,meshnormal_frag:wM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:LM,meshtoon_vert:DM,meshtoon_frag:IM,points_vert:UM,points_frag:NM,shadow_vert:FM,shadow_frag:OM,sprite_vert:BM,sprite_frag:zM},ve={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Cn={basic:{uniforms:Bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new at(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Bt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Bt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new at(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Bt([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Bt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Bt([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Bt([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Bt([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Bt([ve.lights,ve.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Cn.physical={uniforms:Bt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Qs={r:0,b:0,g:0},Fi=new ni,kM=new xt;function HM(n,e,t,i,r,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function x(A){let y=!1;const g=_(A);g===null?d(a,l):g&&g.isColor&&(d(g,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,y){const g=_(y);g&&(g.isCubeTexture||g.mapping===ko)?(u===void 0&&(u=new ln(new As(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Nr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Fi)),u.material.toneMapped=je.getTransfer(g.colorSpace)!==lt,(f!==g||h!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ln(new Go(2,2),new Ti({name:"BackgroundMaterial",uniforms:Nr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=je.getTransfer(g.colorSpace)!==lt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,y){A.getRGB(Qs,lh(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:x,addToRenderList:m}}function VM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,F,k,J){let te=!1;const X=f(k,F,L);s!==X&&(s=X,c(s.object)),te=p(M,k,F,J),te&&_(M,k,F,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,g(M,L,F,k),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,L,F){const k=F.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let te=J[L.id];te===void 0&&(te={},J[L.id]=te);let X=te[k];return X===void 0&&(X=h(l()),te[k]=X),X}function h(M){const L=[],F=[],k=[];for(let J=0;J<t;J++)L[J]=0,F[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,L,F,k){const J=s.attributes,te=L.attributes;let X=0;const ie=F.getAttributes();for(const V in ie)if(ie[V].location>=0){const Ee=J[V];let Ae=te[V];if(Ae===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),Ee===void 0||Ee.attribute!==Ae||Ae&&Ee.data!==Ae.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function _(M,L,F,k){const J={},te=L.attributes;let X=0;const ie=F.getAttributes();for(const V in ie)if(ie[V].location>=0){let Ee=te[V];Ee===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor));const Ae={};Ae.attribute=Ee,Ee&&Ee.data&&(Ae.data=Ee.data),J[V]=Ae,X++}s.attributes=J,s.attributesNum=X,s.index=k}function x(){const M=s.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const F=s.newAttributes,k=s.enabledAttributes,J=s.attributeDivisors;F[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),J[M]!==L&&(n.vertexAttribDivisor(M,L),J[M]=L)}function A(){const M=s.newAttributes,L=s.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==M[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function y(M,L,F,k,J,te,X){X===!0?n.vertexAttribIPointer(M,L,F,J,te):n.vertexAttribPointer(M,L,F,k,J,te)}function g(M,L,F,k){x();const J=k.attributes,te=F.getAttributes(),X=L.defaultAttributeValues;for(const ie in te){const V=te[ie];if(V.location>=0){let pe=J[ie];if(pe===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const Ee=pe.normalized,Ae=pe.itemSize,Fe=e.get(pe);if(Fe===void 0)continue;const Qe=Fe.buffer,ne=Fe.type,fe=Fe.bytesPerElement,be=ne===n.INT||ne===n.UNSIGNED_INT||pe.gpuType===rc;if(pe.isInterleavedBufferAttribute){const _e=pe.data,Ne=_e.stride,ze=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let Ge=0;Ge<V.locationSize;Ge++)d(V.location+Ge,_e.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ge=0;Ge<V.locationSize;Ge++)m(V.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ge=0;Ge<V.locationSize;Ge++)y(V.location+Ge,Ae/V.locationSize,ne,Ee,Ne*fe,(ze+Ae/V.locationSize*Ge)*fe,be)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)d(V.location+_e,pe.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<V.locationSize;_e++)m(V.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let _e=0;_e<V.locationSize;_e++)y(V.location+_e,Ae/V.locationSize,ne,Ee,Ae*fe,Ae/V.locationSize*_e*fe,be)}}else if(X!==void 0){const Ee=X[ie];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(V.location,Ee);break;case 3:n.vertexAttrib3fv(V.location,Ee);break;case 4:n.vertexAttrib4fv(V.location,Ee);break;default:n.vertexAttrib1fv(V.location,Ee)}}}}A()}function I(){N();for(const M in i){const L=i[M];for(const F in L){const k=L[F];for(const J in k)u(k[J].object),delete k[J];delete L[F]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const F in L){const k=L[F];for(const J in k)u(k[J].object),delete k[J];delete L[F]}delete i[M.id]}function P(M){for(const L in i){const F=i[L];if(F[M.id]===void 0)continue;const k=F[M.id];for(const J in k)u(k[J].object),delete k[J];delete F[M.id]}}function N(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function GM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===Ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ti&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Kn&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:I,maxSamples:C}}function XM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,y=A*4;let g=d.clippingState||null;l.value=g,g=u(_,h,y,p);for(let I=0;I!==y;++I)g[I]=t[I];d.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,g=p;y!==x;++y,g+=4)o.copy(f[y]).applyMatrix4(A,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function qM(n){let e=new WeakMap;function t(o,a){return a===il?o.mapping=Lr:a===rl&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===il||a===rl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $M extends ch{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,ku=[.125,.215,.35,.446,.526,.582],Gi=20,wa=new $M,Hu=new at;let Ra=null,Ca=0,Pa=0,La=!1;const ki=(1+Math.sqrt(5))/2,hr=1/ki,Vu=[new G(-ki,hr,0),new G(ki,hr,0),new G(-hr,0,ki),new G(hr,0,ki),new G(0,ki,-hr),new G(0,ki,hr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=La,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ss,format:vn,colorSpace:Or,depthBuffer:!1},r=Wu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YM(s)),this._blurMaterial=KM(s,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,r){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Hu),u.toneMapping=xi,u.autoClear=!1;const p=new as({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new ln(new As,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Hu),x=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;eo(r,A*y,d>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lr||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vu[(r-s-1)%Vu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ln(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const d=[];let A=0;for(let P=0;P<Gi;++P){const N=P/x,E=Math.exp(-N*N/2);d.push(E),P===0?A+=E:P<m&&(A+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const g=this._sizeLods[r],I=3*g*(r>y-mr?r-y+mr:0),C=4*(this._cubeSize-g);eo(t,I,C,3*g,2*g),l.setRenderTarget(t),l.render(f,wa)}}function YM(n){const e=[],t=[],i=[];let r=n;const s=n-mr+1+ku.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-mr?l=ku[o-n+mr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,A=new Float32Array(x*_*p),y=new Float32Array(m*_*p),g=new Float32Array(d*_*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,N=C>2?0:-1,E=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];A.set(E,x*_*C),y.set(h,m*_*C);const M=[C,C,C,C,C,C];g.set(M,d*_*C)}const I=new Tn;I.setAttribute("position",new Dn(A,x)),I.setAttribute("uv",new Dn(y,m)),I.setAttribute("faceIndex",new Dn(g,d)),e.push(I),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wu(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function KM(n,e,t){const i=new Float32Array(Gi),r=new G(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Xu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function qu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===il||l===rl,u=l===Lr||l===Dr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Gu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Gu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ZM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let y=0,g=A.length;y<g;y+=3){const I=A[y+0],C=A[y+1],P=A[y+2];h.push(I,C,C,P,P,I)}}else if(_!==void 0){const A=_.array;x=_.version;for(let y=0,g=A.length/3-1;y<g;y+=3){const I=y+0,C=y+1,P=y+2;h.push(I,C,C,P,P,I)}}else return;const m=new(eh(h)?ah:oh)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function QM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*x[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function eS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tS(n,e,t){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let g=a.attributes.position.count*y,I=1;g>e.maxTextureSize&&(I=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const C=new Float32Array(g*I*4*f),P=new nh(C,g,I,f);P.type=Kn,P.needsUpdate=!0;const N=y*4;for(let M=0;M<f;M++){const L=m[M],F=d[M],k=A[M],J=g*I*4*M;for(let te=0;te<L.count;te++){const X=te*N;p===!0&&(r.fromBufferAttribute(L,te),C[J+X+0]=r.x,C[J+X+1]=r.y,C[J+X+2]=r.z,C[J+X+3]=0),_===!0&&(r.fromBufferAttribute(F,te),C[J+X+4]=r.x,C[J+X+5]=r.y,C[J+X+6]=r.z,C[J+X+7]=0),x===!0&&(r.fromBufferAttribute(k,te),C[J+X+8]=r.x,C[J+X+9]=r.y,C[J+X+10]=r.z,C[J+X+11]=k.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new it(g,I)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function nS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class hh extends qt{constructor(e,t,i,r,s,o,a,l,c,u=Er){if(u!==Er&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Er&&(i=Ki),i===void 0&&u===Ur&&(i=Ir),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ph=new qt,$u=new hh(1,1),mh=new nh,gh=new H0,_h=new uh,Yu=[],Ku=[],ju=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yu[r];if(s===void 0&&(s=new Float32Array(r),Yu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function aS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Ju.set(i),n.uniformMatrix2fv(this.addr,!1,Ju),bt(t,i)}}function lS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Zu.set(i),n.uniformMatrix3fv(this.addr,!1,Zu),bt(t,i)}}function cS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;ju.set(i),n.uniformMatrix4fv(this.addr,!1,ju),bt(t,i)}}function uS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function pS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function vS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($u.compareFunction=Qd,s=$u):s=ph,t.setTexture2D(e||s,r)}function xS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gh,r)}function MS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_h,r)}function SS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mh,r)}function yS(n){switch(n){case 5126:return iS;case 35664:return rS;case 35665:return sS;case 35666:return oS;case 35674:return aS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return uS;case 35667:case 35671:return fS;case 35668:case 35672:return dS;case 35669:case 35673:return hS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return SS}}function ES(n,e){n.uniform1fv(this.addr,e)}function TS(n,e){const t=zr(e,this.size,2);n.uniform2fv(this.addr,t)}function bS(n,e){const t=zr(e,this.size,3);n.uniform3fv(this.addr,t)}function AS(n,e){const t=zr(e,this.size,4);n.uniform4fv(this.addr,t)}function wS(n,e){const t=zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RS(n,e){const t=zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CS(n,e){const t=zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PS(n,e){n.uniform1iv(this.addr,e)}function LS(n,e){n.uniform2iv(this.addr,e)}function DS(n,e){n.uniform3iv(this.addr,e)}function IS(n,e){n.uniform4iv(this.addr,e)}function US(n,e){n.uniform1uiv(this.addr,e)}function NS(n,e){n.uniform2uiv(this.addr,e)}function FS(n,e){n.uniform3uiv(this.addr,e)}function OS(n,e){n.uniform4uiv(this.addr,e)}function BS(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ph,s[o])}function zS(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gh,s[o])}function kS(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_h,s[o])}function HS(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mh,s[o])}function VS(n){switch(n){case 5126:return ES;case 35664:return TS;case 35665:return bS;case 35666:return AS;case 35674:return wS;case 35675:return RS;case 35676:return CS;case 5124:case 35670:return PS;case 35667:case 35671:return LS;case 35668:case 35672:return DS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return NS;case 36295:return FS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return HS}}class GS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yS(t.type)}}class WS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VS(t.type)}}class XS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Qu(n,e){n.seq.push(e),n.map[e.id]=e}function qS(n,e,t){const i=n.name,r=i.length;for(Da.lastIndex=0;;){const s=Da.exec(i),o=Da.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qu(t,c===void 0?new GS(a,n,e):new WS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new XS(a),Qu(t,f)),t=f}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);qS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ef(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $S=37297;let YS=0;function KS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const tf=new $e;function jS(n){je._getMatrix(tf,je.workingColorSpace,n);const e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Ho:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+KS(n.getShaderSource(e),o)}else return r}function ZS(n,e){const t=jS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JS(n,e){let t;switch(e){case h0:t="Linear";break;case p0:t="Reinhard";break;case m0:t="Cineon";break;case g0:t="ACESFilmic";break;case v0:t="AgX";break;case x0:t="Neutral";break;case _0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new G;function QS(){je.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function ty(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ny(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qr(n){return n!==""}function rf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(iy,sy)}const ry=new Map;function sy(n,e){let t=Ke[e];if(t===void 0){const i=ry.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(n){return n.replace(oy,ay)}function ay(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function af(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ly(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lr:case Dr:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function fy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case f0:e="ENVMAP_BLENDING_MIX";break;case d0:e="ENVMAP_BLENDING_ADD";break}return e}function dy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hy(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ly(t),c=cy(t),u=uy(t),f=fy(t),h=dy(t),p=ey(t),_=ty(s),x=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qr).join(`
`),d.length>0&&(d+=`
`)):(m=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),d=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==xi?JS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ZS("linearToOutputTexel",t.outputColorSpace),QS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Ul(o),o=rf(o,t),o=sf(o,t),a=Ul(a),a=rf(a,t),a=sf(a,t),o=of(o),a=of(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=A+m+o,g=A+d+a,I=ef(r,r.VERTEX_SHADER,y),C=ef(r,r.FRAGMENT_SHADER,g);r.attachShader(x,I),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(I).trim(),J=r.getShaderInfoLog(C).trim();let te=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,C);else{const ie=nf(r,I,"vertex"),V=nf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+ie+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||J==="")&&(X=!1);X&&(L.diagnostics={runnable:te,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(I),r.deleteShader(C),N=new mo(r,x),E=ny(r,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,$S)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}let py=0;class my{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gy(e),t.set(e,i)),i}}class gy{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}}function _y(n,e,t,i,r,s,o){const a=new rh,l=new my,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,F,k){const J=F.fog,te=k.geometry,X=E.isMeshStandardMaterial?F.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),V=ie&&ie.mapping===ko?ie.image.height:null,pe=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Ee=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ae=Ee!==void 0?Ee.length:0;let Fe=0;te.morphAttributes.position!==void 0&&(Fe=1),te.morphAttributes.normal!==void 0&&(Fe=2),te.morphAttributes.color!==void 0&&(Fe=3);let Qe,ne,fe,be;if(pe){const st=Cn[pe];Qe=st.vertexShader,ne=st.fragmentShader}else Qe=E.vertexShader,ne=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),be=l.getFragmentShaderID(E);const _e=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),ze=k.isInstancedMesh===!0,Ge=k.isBatchedMesh===!0,mt=!!E.map,w=!!E.matcap,U=!!ie,b=!!E.aoMap,se=!!E.lightMap,K=!!E.bumpMap,j=!!E.normalMap,ee=!!E.displacementMap,ae=!!E.emissiveMap,Z=!!E.metalnessMap,S=!!E.roughnessMap,v=E.anisotropy>0,D=E.clearcoat>0,H=E.dispersion>0,q=E.iridescence>0,W=E.sheen>0,he=E.transmission>0,le=v&&!!E.anisotropyMap,me=D&&!!E.clearcoatMap,Oe=D&&!!E.clearcoatNormalMap,ce=D&&!!E.clearcoatRoughnessMap,xe=q&&!!E.iridescenceMap,De=q&&!!E.iridescenceThicknessMap,Be=W&&!!E.sheenColorMap,ge=W&&!!E.sheenRoughnessMap,ke=!!E.specularMap,We=!!E.specularColorMap,rt=!!E.specularIntensityMap,O=he&&!!E.transmissionMap,Me=he&&!!E.thicknessMap,Q=!!E.gradientMap,oe=!!E.alphaMap,Te=E.alphaTest>0,Se=!!E.alphaHash,Xe=!!E.extensions;let gt=xi;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Lt={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:Qe,fragmentShader:ne,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&k._colorsTexture!==null,instancing:ze,instancingColor:ze&&k.instanceColor!==null,instancingMorph:ze&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Or,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:w,envMap:U,envMapMode:U&&ie.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:se,bumpMap:K,normalMap:j,displacementMap:h&&ee,emissiveMap:ae,normalMapObjectSpace:j&&E.normalMapType===T0,normalMapTangentSpace:j&&E.normalMapType===E0,metalnessMap:Z,roughnessMap:S,anisotropy:v,anisotropyMap:le,clearcoat:D,clearcoatMap:me,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ce,dispersion:H,iridescence:q,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:W,sheenColorMap:Be,sheenRoughnessMap:ge,specularMap:ke,specularColorMap:We,specularIntensityMap:rt,transmission:he,transmissionMap:O,thicknessMap:Me,gradientMap:Q,opaque:E.transparent===!1&&E.blending===yr&&E.alphaToCoverage===!1,alphaMap:oe,alphaTest:Te,alphaHash:Se,combine:E.combine,mapUv:mt&&x(E.map.channel),aoMapUv:b&&x(E.aoMap.channel),lightMapUv:se&&x(E.lightMap.channel),bumpMapUv:K&&x(E.bumpMap.channel),normalMapUv:j&&x(E.normalMap.channel),displacementMapUv:ee&&x(E.displacementMap.channel),emissiveMapUv:ae&&x(E.emissiveMap.channel),metalnessMapUv:Z&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:le&&x(E.anisotropyMap.channel),clearcoatMapUv:me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(E.sheenRoughnessMap.channel),specularMapUv:ke&&x(E.specularMap.channel),specularColorMapUv:We&&x(E.specularColorMap.channel),specularIntensityMapUv:rt&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:Me&&x(E.thicknessMap.channel),alphaMapUv:oe&&x(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(j||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!te.attributes.uv&&(mt||oe),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:k.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:ae&&E.emissiveMap.isVideoTexture===!0&&je.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===Xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(A(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function A(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function g(E){const M=_[E.type];let L;if(M){const F=Cn[M];L=Q0.clone(F.uniforms)}else L=E.uniforms;return L}function I(E,M){let L;for(let F=0,k=u.length;F<k;F++){const J=u[F];if(J.cacheKey===M){L=J,++L.usedTimes;break}}return L===void 0&&(L=new hy(n,M,E,s),u.push(L)),L}function C(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:N}}function vy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||xy),i.length>1&&i.sort(h||lf),r.length>1&&r.sort(h||lf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function My(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new cf,n.set(i,[o])):r>=s.length?(o=new cf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new at};break;case"SpotLight":t={position:new G,direction:new G,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function yy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ey=0;function Ty(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function by(n){const e=new Sy,t=yy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new xt,o=new xt;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,A=0,y=0,g=0,I=0,C=0,P=0;c.sort(Ty);for(let E=0,M=c.length;E<M;E++){const L=c[E],F=L.color,k=L.intensity,J=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*k,f+=F.g*k,h+=F.b*k;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],k);P++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,V=t.get(L);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=L.shadow.matrix,A++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(k),X.distance=J,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[x]=X;const ie=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,ie.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=ie.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=te,g++}x++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ie=L.shadow,V=t.get(L);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(k),X.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==y||N.numSpotShadows!==g||N.numSpotMaps!==I||N.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=g+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,N.directionalLength=p,N.pointLength=_,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=y,N.numSpotShadows=g,N.numSpotMaps=I,N.numLightProbes=P,i.version=Ey++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const y=c[d];if(y.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),f++}else if(y.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const g=i.point[h];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const g=i.hemi[x];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function uf(n){const e=new by(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ay(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new uf(n),e.set(r,[a])):s>=o.length?(a=new uf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class wy extends bs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=S0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ry extends bs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ly(n,e,t){let i=new fh;const r=new it,s=new it,o=new vt,a=new wy({depthPacking:y0}),l=new Ry,c={},u=t.maxTextureSize,f={[Ei]:Xt,[Xt]:Ei,[Yn]:Yn},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Cy,fragmentShader:Py}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ln(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let d=this.type;this.render=function(C,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(vi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=d!==Vn&&this.type===Vn,J=d===Vn&&this.type!==Vn;for(let te=0,X=C.length;te<X;te++){const ie=C[te],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const pe=V.getFrameExtents();if(r.multiply(pe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,V.mapSize.y=s.y)),V.map===null||k===!0||J===!0){const Ae=this.type!==Vn?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new ji(r.x,r.y,Ae),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Ee=V.getViewportCount();for(let Ae=0;Ae<Ee;Ae++){const Fe=V.getViewport(Ae);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),F.viewport(o),V.updateMatrices(ie,Ae),i=V.getFrustum(),g(P,N,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&A(V,N),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,L)};function A(C,P){const N=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ji(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,N,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,N,p,x,null)}function y(C,P,N,E){let M=null;const L=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const F=M.uuid,k=P.uuid;let J=c[F];J===void 0&&(J={},c[F]=J);let te=J[k];te===void 0&&(te=M.clone(),J[k]=te,P.addEventListener("dispose",I)),M=te}if(M.visible=P.visible,M.wireframe=P.wireframe,E===Vn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=N}return M}function g(C,P,N,E,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Vn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const k=e.update(C),J=C.material;if(Array.isArray(J)){const te=k.groups;for(let X=0,ie=te.length;X<ie;X++){const V=te[X],pe=J[V.materialIndex];if(pe&&pe.visible){const Ee=y(C,pe,E,M);C.onBeforeShadow(n,C,P,N,k,Ee,V),n.renderBufferDirect(N,null,k,Ee,C,V),C.onAfterShadow(n,C,P,N,k,Ee,V)}}}else if(J.visible){const te=y(C,J,E,M);C.onBeforeShadow(n,C,P,N,k,te,null),n.renderBufferDirect(N,null,k,te,C,null),C.onAfterShadow(n,C,P,N,k,te,null)}}const F=C.children;for(let k=0,J=F.length;k<J;k++)g(F[k],P,N,E,M)}function I(C){C.target.removeEventListener("dispose",I);for(const N in c){const E=c[N],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Dy={[ja]:Za,[Ja]:tl,[Qa]:nl,[Pr]:el,[Za]:ja,[tl]:Ja,[nl]:Qa,[el]:Pr};function Iy(n,e){function t(){let O=!1;const Me=new vt;let Q=null;const oe=new vt(0,0,0,0);return{setMask:function(Te){Q!==Te&&!O&&(n.colorMask(Te,Te,Te,Te),Q=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Se,Xe,gt,Lt){Lt===!0&&(Te*=gt,Se*=gt,Xe*=gt),Me.set(Te,Se,Xe,gt),oe.equals(Me)===!1&&(n.clearColor(Te,Se,Xe,gt),oe.copy(Me))},reset:function(){O=!1,Q=null,oe.set(-1,0,0,0)}}}function i(){let O=!1,Me=!1,Q=null,oe=null,Te=null;return{setReversed:function(Se){if(Me!==Se){const Xe=e.get("EXT_clip_control");Me?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const gt=Te;Te=null,this.setClear(gt)}Me=Se},getReversed:function(){return Me},setTest:function(Se){Se?_e(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(Se){Q!==Se&&!O&&(n.depthMask(Se),Q=Se)},setFunc:function(Se){if(Me&&(Se=Dy[Se]),oe!==Se){switch(Se){case ja:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case Ja:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Se}},setLocked:function(Se){O=Se},setClear:function(Se){Te!==Se&&(Me&&(Se=1-Se),n.clearDepth(Se),Te=Se)},reset:function(){O=!1,Q=null,oe=null,Te=null,Me=!1}}}function r(){let O=!1,Me=null,Q=null,oe=null,Te=null,Se=null,Xe=null,gt=null,Lt=null;return{setTest:function(st){O||(st?_e(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(st){Me!==st&&!O&&(n.stencilMask(st),Me=st)},setFunc:function(st,dn,In){(Q!==st||oe!==dn||Te!==In)&&(n.stencilFunc(st,dn,In),Q=st,oe=dn,Te=In)},setOp:function(st,dn,In){(Se!==st||Xe!==dn||gt!==In)&&(n.stencilOp(st,dn,In),Se=st,Xe=dn,gt=In)},setLocked:function(st){O=st},setClear:function(st){Lt!==st&&(n.clearStencil(st),Lt=st)},reset:function(){O=!1,Me=null,Q=null,oe=null,Te=null,Se=null,Xe=null,gt=null,Lt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,A=null,y=null,g=null,I=null,C=null,P=new at(0,0,0),N=0,E=!1,M=null,L=null,F=null,k=null,J=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=ie>=2);let pe=null,Ee={};const Ae=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Qe=new vt().fromArray(Ae),ne=new vt().fromArray(Fe);function fe(O,Me,Q,oe){const Te=new Uint8Array(4),Se=n.createTexture();n.bindTexture(O,Se),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Q;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Me+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Se}const be={};be[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),o.setFunc(Pr),K(!1),j(hu),_e(n.CULL_FACE),b(vi);function _e(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Ne(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ze(O,Me){return f[O]!==Me?(n.bindFramebuffer(O,Me),f[O]=Me,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ge(O,Me){let Q=p,oe=!1;if(O){Q=h.get(Me),Q===void 0&&(Q=[],h.set(Me,Q));const Te=O.textures;if(Q.length!==Te.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Xe=Te.length;Se<Xe;Se++)Q[Se]=n.COLOR_ATTACHMENT0+Se;Q.length=Te.length,oe=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,oe=!0);oe&&n.drawBuffers(Q)}function mt(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const w={[Vi]:n.FUNC_ADD,[Y_]:n.FUNC_SUBTRACT,[K_]:n.FUNC_REVERSE_SUBTRACT};w[j_]=n.MIN,w[Z_]=n.MAX;const U={[J_]:n.ZERO,[Q_]:n.ONE,[e0]:n.SRC_COLOR,[Ya]:n.SRC_ALPHA,[o0]:n.SRC_ALPHA_SATURATE,[r0]:n.DST_COLOR,[n0]:n.DST_ALPHA,[t0]:n.ONE_MINUS_SRC_COLOR,[Ka]:n.ONE_MINUS_SRC_ALPHA,[s0]:n.ONE_MINUS_DST_COLOR,[i0]:n.ONE_MINUS_DST_ALPHA,[a0]:n.CONSTANT_COLOR,[l0]:n.ONE_MINUS_CONSTANT_COLOR,[c0]:n.CONSTANT_ALPHA,[u0]:n.ONE_MINUS_CONSTANT_ALPHA};function b(O,Me,Q,oe,Te,Se,Xe,gt,Lt,st){if(O===vi){x===!0&&(Ne(n.BLEND),x=!1);return}if(x===!1&&(_e(n.BLEND),x=!0),O!==$_){if(O!==m||st!==E){if((d!==Vi||g!==Vi)&&(n.blendEquation(n.FUNC_ADD),d=Vi,g=Vi),st)switch(O){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pu:n.blendFunc(n.ONE,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,y=null,I=null,C=null,P.set(0,0,0),N=0,m=O,E=st}return}Te=Te||Me,Se=Se||Q,Xe=Xe||oe,(Me!==d||Te!==g)&&(n.blendEquationSeparate(w[Me],w[Te]),d=Me,g=Te),(Q!==A||oe!==y||Se!==I||Xe!==C)&&(n.blendFuncSeparate(U[Q],U[oe],U[Se],U[Xe]),A=Q,y=oe,I=Se,C=Xe),(gt.equals(P)===!1||Lt!==N)&&(n.blendColor(gt.r,gt.g,gt.b,Lt),P.copy(gt),N=Lt),m=O,E=!1}function se(O,Me){O.side===Yn?Ne(n.CULL_FACE):_e(n.CULL_FACE);let Q=O.side===Xt;Me&&(Q=!Q),K(Q),O.blending===yr&&O.transparent===!1?b(vi):b(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const oe=O.stencilWrite;a.setTest(oe),oe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(O){M!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),M=O)}function j(O){O!==W_?(_e(n.CULL_FACE),O!==L&&(O===hu?n.cullFace(n.BACK):O===X_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),L=O}function ee(O){O!==F&&(X&&n.lineWidth(O),F=O)}function ae(O,Me,Q){O?(_e(n.POLYGON_OFFSET_FILL),(k!==Me||J!==Q)&&(n.polygonOffset(Me,Q),k=Me,J=Q)):Ne(n.POLYGON_OFFSET_FILL)}function Z(O){O?_e(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function S(O){O===void 0&&(O=n.TEXTURE0+te-1),pe!==O&&(n.activeTexture(O),pe=O)}function v(O,Me,Q){Q===void 0&&(pe===null?Q=n.TEXTURE0+te-1:Q=pe);let oe=Ee[Q];oe===void 0&&(oe={type:void 0,texture:void 0},Ee[Q]=oe),(oe.type!==O||oe.texture!==Me)&&(pe!==Q&&(n.activeTexture(Q),pe=Q),n.bindTexture(O,Me||be[O]),oe.type=O,oe.texture=Me)}function D(){const O=Ee[pe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(O){Qe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Qe.copy(O))}function ge(O){ne.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function ke(O,Me){let Q=c.get(Me);Q===void 0&&(Q=new WeakMap,c.set(Me,Q));let oe=Q.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Me,O.name),Q.set(O,oe))}function We(O,Me){const oe=c.get(Me).get(O);l.get(Me)!==oe&&(n.uniformBlockBinding(Me,oe,O.__bindingPointIndex),l.set(Me,oe))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,Ee={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,A=null,y=null,g=null,I=null,C=null,P=new at(0,0,0),N=0,E=!1,M=null,L=null,F=null,k=null,J=null,Qe.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:Ne,bindFramebuffer:ze,drawBuffers:Ge,useProgram:mt,setBlending:b,setMaterial:se,setFlipSided:K,setCullFace:j,setLineWidth:ee,setPolygonOffset:ae,setScissorTest:Z,activeTexture:S,bindTexture:v,unbindTexture:D,compressedTexImage2D:H,compressedTexImage3D:q,texImage2D:xe,texImage3D:De,updateUBOMapping:ke,uniformBlockBinding:We,texStorage2D:Oe,texStorage3D:ce,texSubImage2D:W,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Be,viewport:ge,reset:rt}}function ff(n,e,t,i){const r=Uy(i);switch(t){case qd:return n*e;case Yd:return n*e;case Kd:return n*e*2;case jd:return n*e/r.components*r.byteLength;case ac:return n*e/r.components*r.byteLength;case Zd:return n*e*2/r.components*r.byteLength;case lc:return n*e*2/r.components*r.byteLength;case $d:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case cc:return n*e*4/r.components*r.byteLength;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:case ul:return Math.max(n,16)*Math.max(e,8)/4;case al:case cl:return Math.max(n,8)*Math.max(e,8)/2;case fl:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case po:case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jd:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ll:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uy(n){switch(n){case ti:case Gd:return{byteLength:1,components:1};case ms:case Wd:case Ss:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case Ki:case rc:case Kn:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ny(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return p?new OffscreenCanvas(S,v):bo("canvas")}function x(S,v,D){let H=1;const q=Z(S);if((q.width>D||q.height>D)&&(H=D/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(H*q.width),he=Math.floor(H*q.height);f===void 0&&(f=_(W,he));const le=v?_(W,he):f;return le.width=W,le.height=he,le.getContext("2d").drawImage(S,0,0,W,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+W+"x"+he+")."),le}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),S;return S}function m(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,v,D,H,q=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=v;if(v===n.RED&&(D===n.FLOAT&&(W=n.R32F),D===n.HALF_FLOAT&&(W=n.R16F),D===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.R8UI),D===n.UNSIGNED_SHORT&&(W=n.R16UI),D===n.UNSIGNED_INT&&(W=n.R32UI),D===n.BYTE&&(W=n.R8I),D===n.SHORT&&(W=n.R16I),D===n.INT&&(W=n.R32I)),v===n.RG&&(D===n.FLOAT&&(W=n.RG32F),D===n.HALF_FLOAT&&(W=n.RG16F),D===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RG8UI),D===n.UNSIGNED_SHORT&&(W=n.RG16UI),D===n.UNSIGNED_INT&&(W=n.RG32UI),D===n.BYTE&&(W=n.RG8I),D===n.SHORT&&(W=n.RG16I),D===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGB8UI),D===n.UNSIGNED_SHORT&&(W=n.RGB16UI),D===n.UNSIGNED_INT&&(W=n.RGB32UI),D===n.BYTE&&(W=n.RGB8I),D===n.SHORT&&(W=n.RGB16I),D===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),D===n.UNSIGNED_INT&&(W=n.RGBA32UI),D===n.BYTE&&(W=n.RGBA8I),D===n.SHORT&&(W=n.RGBA16I),D===n.INT&&(W=n.RGBA32I)),v===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const he=q?Ho:je.getTransfer(H);D===n.FLOAT&&(W=n.RGBA32F),D===n.HALF_FLOAT&&(W=n.RGBA16F),D===n.UNSIGNED_BYTE&&(W=he===lt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function g(S,v){let D;return S?v===null||v===Ki||v===Ir?D=n.DEPTH24_STENCIL8:v===Kn?D=n.DEPTH32F_STENCIL8:v===ms&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ki||v===Ir?D=n.DEPTH_COMPONENT24:v===Kn?D=n.DEPTH_COMPONENT32F:v===ms&&(D=n.DEPTH_COMPONENT16),D}function I(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Mn&&S.minFilter!==Pn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function C(S){const v=S.target;v.removeEventListener("dispose",C),N(v),v.isVideoTexture&&u.delete(v)}function P(S){const v=S.target;v.removeEventListener("dispose",P),M(v)}function N(S){const v=i.get(S);if(v.__webglInit===void 0)return;const D=S.source,H=h.get(D);if(H){const q=H[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(S),Object.keys(H).length===0&&h.delete(D)}i.remove(S)}function E(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const D=S.source,H=h.get(D);delete H[v.__cacheKey],o.memory.textures--}function M(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let q=0;q<v.__webglFramebuffer[H].length;q++)n.deleteFramebuffer(v.__webglFramebuffer[H][q]);else n.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)n.deleteFramebuffer(v.__webglFramebuffer[H]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=S.textures;for(let H=0,q=D.length;H<q;H++){const W=i.get(D[H]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(D[H])}i.remove(S)}let L=0;function F(){L=0}function k(){const S=L;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),L+=1,S}function J(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function te(S,v){const D=i.get(S);if(S.isVideoTexture&&ee(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(D,S,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function X(S,v){const D=i.get(S);if(S.version>0&&D.__version!==S.version){ne(D,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function ie(S,v){const D=i.get(S);if(S.version>0&&D.__version!==S.version){ne(D,S,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function V(S,v){const D=i.get(S);if(S.version>0&&D.__version!==S.version){fe(D,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const pe={[sl]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},Ee={[Mn]:n.NEAREST,[M0]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},Ae={[b0]:n.NEVER,[L0]:n.ALWAYS,[A0]:n.LESS,[Qd]:n.LEQUAL,[w0]:n.EQUAL,[P0]:n.GEQUAL,[R0]:n.GREATER,[C0]:n.NOTEQUAL};function Fe(S,v){if(v.type===Kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pn||v.magFilter===ra||v.magFilter===Ns||v.magFilter===Xi||v.minFilter===Pn||v.minFilter===ra||v.minFilter===Ns||v.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,pe[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,pe[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,pe[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Ee[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Ee[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mn||v.minFilter!==Ns&&v.minFilter!==Xi||v.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qe(S,v){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",C));const H=v.source;let q=h.get(H);q===void 0&&(q={},h.set(H,q));const W=J(v);if(W!==S.__cacheKey){q[W]===void 0&&(q[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),q[W].usedTimes++;const he=q[S.__cacheKey];he!==void 0&&(q[S.__cacheKey].usedTimes--,he.usedTimes===0&&E(v)),S.__cacheKey=W,S.__webglTexture=q[W].texture}return D}function ne(S,v,D){let H=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=n.TEXTURE_3D);const q=Qe(S,v),W=v.source;t.bindTexture(H,S.__webglTexture,n.TEXTURE0+D);const he=i.get(W);if(W.version!==he.__version||q===!0){t.activeTexture(n.TEXTURE0+D);const le=je.getPrimaries(je.workingColorSpace),me=v.colorSpace===gi?null:je.getPrimaries(v.colorSpace),Oe=v.colorSpace===gi||le===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ce=x(v.image,!1,r.maxTextureSize);ce=ae(v,ce);const xe=s.convert(v.format,v.colorSpace),De=s.convert(v.type);let Be=y(v.internalFormat,xe,De,v.colorSpace,v.isVideoTexture);Fe(H,v);let ge;const ke=v.mipmaps,We=v.isVideoTexture!==!0,rt=he.__version===void 0||q===!0,O=W.dataReady,Me=I(v,ce);if(v.isDepthTexture)Be=g(v.format===Ur,v.type),rt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Be,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Be,ce.width,ce.height,0,xe,De,null));else if(v.isDataTexture)if(ke.length>0){We&&rt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,ke[0].width,ke[0].height);for(let Q=0,oe=ke.length;Q<oe;Q++)ge=ke[Q],We?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ge.width,ge.height,xe,De,ge.data):t.texImage2D(n.TEXTURE_2D,Q,Be,ge.width,ge.height,0,xe,De,ge.data);v.generateMipmaps=!1}else We?(rt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,ce.width,ce.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,xe,De,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Be,ce.width,ce.height,0,xe,De,ce.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){We&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,ke[0].width,ke[0].height,ce.depth);for(let Q=0,oe=ke.length;Q<oe;Q++)if(ge=ke[Q],v.format!==vn)if(xe!==null)if(We){if(O)if(v.layerUpdates.size>0){const Te=ff(ge.width,ge.height,v.format,v.type);for(const Se of v.layerUpdates){const Xe=ge.data.subarray(Se*Te/ge.data.BYTES_PER_ELEMENT,(Se+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Se,ge.width,ge.height,1,xe,Xe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ce.depth,xe,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Be,ge.width,ge.height,ce.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ce.depth,xe,De,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Be,ge.width,ge.height,ce.depth,0,xe,De,ge.data)}else{We&&rt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,ke[0].width,ke[0].height);for(let Q=0,oe=ke.length;Q<oe;Q++)ge=ke[Q],v.format!==vn?xe!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ge.width,ge.height,xe,De,ge.data):t.texImage2D(n.TEXTURE_2D,Q,Be,ge.width,ge.height,0,xe,De,ge.data)}else if(v.isDataArrayTexture)if(We){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,ce.width,ce.height,ce.depth),O)if(v.layerUpdates.size>0){const Q=ff(ce.width,ce.height,v.format,v.type);for(const oe of v.layerUpdates){const Te=ce.data.subarray(oe*Q/ce.data.BYTES_PER_ELEMENT,(oe+1)*Q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,xe,De,Te)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,De,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ce.width,ce.height,ce.depth,0,xe,De,ce.data);else if(v.isData3DTexture)We?(rt&&t.texStorage3D(n.TEXTURE_3D,Me,Be,ce.width,ce.height,ce.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,De,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ce.width,ce.height,ce.depth,0,xe,De,ce.data);else if(v.isFramebufferTexture){if(rt)if(We)t.texStorage2D(n.TEXTURE_2D,Me,Be,ce.width,ce.height);else{let Q=ce.width,oe=ce.height;for(let Te=0;Te<Me;Te++)t.texImage2D(n.TEXTURE_2D,Te,Be,Q,oe,0,xe,De,null),Q>>=1,oe>>=1}}else if(ke.length>0){if(We&&rt){const Q=Z(ke[0]);t.texStorage2D(n.TEXTURE_2D,Me,Be,Q.width,Q.height)}for(let Q=0,oe=ke.length;Q<oe;Q++)ge=ke[Q],We?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe,De,ge):t.texImage2D(n.TEXTURE_2D,Q,Be,xe,De,ge);v.generateMipmaps=!1}else if(We){if(rt){const Q=Z(ce);t.texStorage2D(n.TEXTURE_2D,Me,Be,Q.width,Q.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,De,ce)}else t.texImage2D(n.TEXTURE_2D,0,Be,xe,De,ce);m(v)&&d(H),he.__version=W.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function fe(S,v,D){if(v.image.length!==6)return;const H=Qe(S,v),q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const W=i.get(q);if(q.version!==W.__version||H===!0){t.activeTexture(n.TEXTURE0+D);const he=je.getPrimaries(je.workingColorSpace),le=v.colorSpace===gi?null:je.getPrimaries(v.colorSpace),me=v.colorSpace===gi||he===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Oe=v.isCompressedTexture||v.image[0].isCompressedTexture,ce=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Oe&&!ce?xe[oe]=x(v.image[oe],!0,r.maxCubemapSize):xe[oe]=ce?v.image[oe].image:v.image[oe],xe[oe]=ae(v,xe[oe]);const De=xe[0],Be=s.convert(v.format,v.colorSpace),ge=s.convert(v.type),ke=y(v.internalFormat,Be,ge,v.colorSpace),We=v.isVideoTexture!==!0,rt=W.__version===void 0||H===!0,O=q.dataReady;let Me=I(v,De);Fe(n.TEXTURE_CUBE_MAP,v);let Q;if(Oe){We&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,ke,De.width,De.height);for(let oe=0;oe<6;oe++){Q=xe[oe].mipmaps;for(let Te=0;Te<Q.length;Te++){const Se=Q[Te];v.format!==vn?Be!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Se.width,Se.height,Be,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ke,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Se.width,Se.height,Be,ge,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,ke,Se.width,Se.height,0,Be,ge,Se.data)}}}else{if(Q=v.mipmaps,We&&rt){Q.length>0&&Me++;const oe=Z(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Be,ge,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,xe[oe].width,xe[oe].height,0,Be,ge,xe[oe].data);for(let Te=0;Te<Q.length;Te++){const Xe=Q[Te].image[oe].image;We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,Xe.width,Xe.height,Be,ge,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ke,Xe.width,Xe.height,0,Be,ge,Xe.data)}}else{We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be,ge,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Be,ge,xe[oe]);for(let Te=0;Te<Q.length;Te++){const Se=Q[Te];We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,Be,ge,Se.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,ke,Be,ge,Se.image[oe])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),W.__version=q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function be(S,v,D,H,q,W){const he=s.convert(D.format,D.colorSpace),le=s.convert(D.type),me=y(D.internalFormat,he,le,D.colorSpace),Oe=i.get(v),ce=i.get(D);if(ce.__renderTarget=v,!Oe.__hasExternalTextures){const xe=Math.max(1,v.width>>W),De=Math.max(1,v.height>>W);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,W,me,xe,De,v.depth,0,he,le,null):t.texImage2D(q,W,me,xe,De,0,he,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),j(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,q,ce.__webglTexture,0,K(v)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,q,ce.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(S,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const H=v.depthTexture,q=H&&H.isDepthTexture?H.type:null,W=g(v.stencilBuffer,q),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=K(v);j(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,W,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,S)}else{const H=v.textures;for(let q=0;q<H.length;q++){const W=H[q],he=s.convert(W.format,W.colorSpace),le=s.convert(W.type),me=y(W.internalFormat,he,le,W.colorSpace),Oe=K(v);D&&j(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,me,v.width,v.height):j(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(v.depthTexture);H.__renderTarget=v,(!H.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te(v.depthTexture,0);const q=H.__webglTexture,W=K(v);if(v.depthTexture.format===Er)j(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(v.depthTexture.format===Ur)j(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ze(S){const v=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=H}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ne(v.__webglFramebuffer,S)}else if(D){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=n.createRenderbuffer(),_e(v.__webglDepthbuffer[H],S,!1);else{const q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),_e(v.__webglDepthbuffer,S,!1);else{const H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(S,v,D){const H=i.get(S);v!==void 0&&be(H.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&ze(S)}function mt(S){const v=S.texture,D=i.get(S),H=i.get(v);S.addEventListener("dispose",P);const q=S.textures,W=S.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,o.memory.textures++),W){D.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[le]=[];for(let me=0;me<v.mipmaps.length;me++)D.__webglFramebuffer[le][me]=n.createFramebuffer()}else D.__webglFramebuffer[le]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)D.__webglFramebuffer[le]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(he)for(let le=0,me=q.length;le<me;le++){const Oe=i.get(q[le]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&j(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let le=0;le<q.length;le++){const me=q[le];D.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const Oe=s.convert(me.format,me.colorSpace),ce=s.convert(me.type),xe=y(me.internalFormat,Oe,ce,me.colorSpace,S.isXRRenderTarget===!0),De=K(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,D.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)be(D.__webglFramebuffer[le][me],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else be(D.__webglFramebuffer[le],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let le=0,me=q.length;le<me;le++){const Oe=q[le],ce=i.get(Oe);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Fe(n.TEXTURE_2D,Oe),be(D.__webglFramebuffer,S,Oe,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Oe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(le=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,H.__webglTexture),Fe(le,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)be(D.__webglFramebuffer[me],S,v,n.COLOR_ATTACHMENT0,le,me);else be(D.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,le,0);m(v)&&d(le),t.unbindTexture()}S.depthBuffer&&ze(S)}function w(S){const v=S.textures;for(let D=0,H=v.length;D<H;D++){const q=v[D];if(m(q)){const W=A(S),he=i.get(q).__webglTexture;t.bindTexture(W,he),d(W),t.unbindTexture()}}}const U=[],b=[];function se(S){if(S.samples>0){if(j(S)===!1){const v=S.textures,D=S.width,H=S.height;let q=n.COLOR_BUFFER_BIT;const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),le=v.length>1;if(le)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<v.length;me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const Oe=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,D,H,0,0,D,H,q,n.NEAREST),l===!0&&(U.length=0,b.length=0,U.push(n.COLOR_ATTACHMENT0+me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(U.push(W),b.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const Oe=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function K(S){return Math.min(r.maxSamples,S.samples)}function j(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function ae(S,v){const D=S.colorSpace,H=S.format,q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==Or&&D!==gi&&(je.getTransfer(D)===lt?(H!==vn||q!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function Z(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=te,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=Ge,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=j}function Fy(n,e){function t(i,r=gi){let s;const o=je.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gd)return n.BYTE;if(i===Wd)return n.SHORT;if(i===ms)return n.UNSIGNED_SHORT;if(i===rc)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Ss)return n.HALF_FLOAT;if(i===qd)return n.ALPHA;if(i===$d)return n.RGB;if(i===vn)return n.RGBA;if(i===Yd)return n.LUMINANCE;if(i===Kd)return n.LUMINANCE_ALPHA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Ur)return n.DEPTH_STENCIL;if(i===jd)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===Zd)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===co||i===uo||i===fo||i===ho)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ll||i===cl||i===ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fl||i===dl||i===hl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fl||i===dl)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Ml||i===Sl||i===yl||i===El||i===Tl||i===bl||i===Al||i===wl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===pl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ml)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===El)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Al)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===Rl||i===Cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===po)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===Pl||i===Ll||i===Dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Oy extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:zy,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vy extends Br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=new Hy,m=t.getContextAttributes();let d=null,A=null;const y=[],g=[],I=new it;let C=null;const P=new an;P.viewport=new vt;const N=new an;N.viewport=new vt;const E=[P,N],M=new Oy;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=y[ne];return fe===void 0&&(fe=new Ia,y[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=y[ne];return fe===void 0&&(fe=new Ia,y[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=y[ne];return fe===void 0&&(fe=new Ia,y[ne]=fe),fe.getHandSpace()};function k(ne){const fe=g.indexOf(ne.inputSource);if(fe===-1)return;const be=y[fe];be!==void 0&&(be.update(ne.inputSource,ne.frame,c||o),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",te);for(let ne=0;ne<y.length;ne++){const fe=g[ne];fe!==null&&(g[ne]=null,y[ne].disconnect(fe))}L=null,F=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,A=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",J),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ji(p.framebufferWidth,p.framebufferHeight,{format:vn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,be=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Ur:Er,be=m.stencil?Ir:Ki);const Ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new ji(h.textureWidth,h.textureHeight,{format:vn,type:ti,depthTexture:new hh(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(ne){for(let fe=0;fe<ne.removed.length;fe++){const be=ne.removed[fe],_e=g.indexOf(be);_e>=0&&(g[_e]=null,y[_e].disconnect(be))}for(let fe=0;fe<ne.added.length;fe++){const be=ne.added[fe];let _e=g.indexOf(be);if(_e===-1){for(let ze=0;ze<y.length;ze++)if(ze>=g.length){g.push(be),_e=ze;break}else if(g[ze]===null){g[ze]=be,_e=ze;break}if(_e===-1)break}const Ne=y[_e];Ne&&Ne.connect(be)}}const X=new G,ie=new G;function V(ne,fe,be){X.setFromMatrixPosition(fe.matrixWorld),ie.setFromMatrixPosition(be.matrixWorld);const _e=X.distanceTo(ie),Ne=fe.projectionMatrix.elements,ze=be.projectionMatrix.elements,Ge=Ne[14]/(Ne[10]-1),mt=Ne[14]/(Ne[10]+1),w=(Ne[9]+1)/Ne[5],U=(Ne[9]-1)/Ne[5],b=(Ne[8]-1)/Ne[0],se=(ze[8]+1)/ze[0],K=Ge*b,j=Ge*se,ee=_e/(-b+se),ae=ee*-b;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ae),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ne[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Z=Ge+ee,S=mt+ee,v=K-ae,D=j+(_e-ae),H=w*mt/S*Z,q=U*mt/S*Z;ne.projectionMatrix.makePerspective(v,D,H,q,Z,S),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function pe(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let fe=ne.near,be=ne.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(be=x.depthFar)),M.near=N.near=P.near=fe,M.far=N.far=P.far=be,(L!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,F=M.far),P.layers.mask=ne.layers.mask|2,N.layers.mask=ne.layers.mask|4,M.layers.mask=P.layers.mask|N.layers.mask;const _e=ne.parent,Ne=M.cameras;pe(M,_e);for(let ze=0;ze<Ne.length;ze++)pe(Ne[ze],_e);Ne.length===2?V(M,P,N):M.projectionMatrix.copy(P.projectionMatrix),Ee(ne,M,_e)};function Ee(ne,fe,be){be===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Il*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Ae=null;function Fe(ne,fe){if(u=fe.getViewerPose(c||o),_=fe,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let _e=!1;be.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let ze=0;ze<be.length;ze++){const Ge=be[ze];let mt=null;if(p!==null)mt=p.getViewport(Ge);else{const U=f.getViewSubImage(h,Ge);mt=U.viewport,ze===0&&(e.setRenderTargetTextures(A,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(A))}let w=E[ze];w===void 0&&(w=new an,w.layers.enable(ze),w.viewport=new vt,E[ze]=w),w.matrix.fromArray(Ge.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ge.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(mt.x,mt.y,mt.width,mt.height),ze===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(w)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const ze=f.getDepthInformation(be[0]);ze&&ze.isValid&&ze.texture&&x.init(e,ze,r.renderState)}}for(let be=0;be<y.length;be++){const _e=g[be],Ne=y[be];_e!==null&&Ne!==void 0&&Ne.update(_e,fe,c||o)}Ae&&Ae(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Qe=new dh;Qe.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){Ae=ne},this.dispose=function(){}}}const Oi=new ni,Gy=new xt;function Wy(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,lh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,y,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),y=A.envMap,g=A.envMapRotation;y&&(m.envMap.value=y,Oi.copy(g),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const g=y.program;i.uniformBlockBinding(A,g)}function c(A,y){let g=r[A.id];g===void 0&&(_(A),g=u(A),r[A.id]=g,A.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(A,I);const C=e.render.frame;s[A.id]!==C&&(h(A),s[A.id]=C)}function u(A){const y=f();A.__bindingPointIndex=y;const g=n.createBuffer(),I=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,g),g}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const y=r[A.id],g=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,P=g.length;C<P;C++){const N=Array.isArray(g[C])?g[C]:[g[C]];for(let E=0,M=N.length;E<M;E++){const L=N[E];if(p(L,C,E,I)===!0){const F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let te=0;te<k.length;te++){const X=k[te],ie=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,F+J,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,J),J+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,y,g,I){const C=A.value,P=y+"_"+g;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const N=I[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return I[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(A){const y=A.uniforms;let g=0;const I=16;for(let P=0,N=y.length;P<N;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,L=E.length;M<L;M++){const F=E[M],k=Array.isArray(F.value)?F.value:[F.value];for(let J=0,te=k.length;J<te;J++){const X=k[J],ie=x(X),V=g%I,pe=V%ie.boundary,Ee=V+pe;g+=pe,Ee!==0&&I-Ee<ie.storage&&(g+=I-Ee),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=g,g+=ie.storage}}}const C=g%I;return C>0&&(g+=I-C),A.__size=g,A.__cache={},this}function x(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const g=o.indexOf(y.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class qy{constructor(e={}){const{canvas:t=I0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const A=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=xi,this.toneMappingExposure=1;const g=this;let I=!1,C=0,P=0,N=null,E=-1,M=null;const L=new vt,F=new vt;let k=null;const J=new at(0);let te=0,X=t.width,ie=t.height,V=1,pe=null,Ee=null;const Ae=new vt(0,0,X,ie),Fe=new vt(0,0,X,ie);let Qe=!1;const ne=new fh;let fe=!1,be=!1;const _e=new xt,Ne=new xt,ze=new G,Ge=new vt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function U(){return N===null?V:1}let b=i;function se(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Se,!1),b===null){const B="webgl2";if(b=se(B,T),b===null)throw se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,j,ee,ae,Z,S,v,D,H,q,W,he,le,me,Oe,ce,xe,De,Be,ge,ke,We,rt,O;function Me(){K=new ZM(b),K.init(),We=new Fy(b,K),j=new WM(b,K,e,We),ee=new Iy(b,K),j.reverseDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),ae=new eS(b),Z=new vy,S=new Ny(b,K,ee,Z,j,We,ae),v=new qM(g),D=new jM(g),H=new ov(b),rt=new VM(b,H),q=new JM(b,H,ae,rt),W=new nS(b,q,H,ae),Be=new tS(b,j,S),ce=new XM(Z),he=new _y(g,v,D,K,j,rt,ce),le=new Wy(g,Z),me=new My,Oe=new Ay(K),De=new HM(g,v,D,ee,W,p,l),xe=new Ly(g,W,j),O=new Xy(b,ae,j,ee),ge=new GM(b,K,ae),ke=new QM(b,K,ae),ae.programs=he.programs,g.capabilities=j,g.extensions=K,g.properties=Z,g.renderLists=me,g.shadowMap=xe,g.state=ee,g.info=ae}Me();const Q=new Vy(g,b);this.xr=Q,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(X,ie,!1))},this.getSize=function(T){return T.set(X,ie)},this.setSize=function(T,B,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,ie=B,t.width=Math.floor(T*V),t.height=Math.floor(B*V),$===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(X*V,ie*V).floor()},this.setDrawingBufferSize=function(T,B,$){X=T,ie=B,V=$,t.width=Math.floor(T*$),t.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Ae)},this.setViewport=function(T,B,$,Y){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,B,$,Y),ee.viewport(L.copy(Ae).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,B,$,Y){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,B,$,Y),ee.scissor(F.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){ee.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){pe=T},this.setTransparentSort=function(T){Ee=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,B=!0,$=!0){let Y=0;if(T){let z=!1;if(N!==null){const de=N.texture.format;z=de===cc||de===lc||de===ac}if(z){const de=N.texture.type,ye=de===ti||de===Ki||de===ms||de===Ir||de===sc||de===oc,Re=De.getClearColor(),Ce=De.getClearAlpha(),Ve=Re.r,qe=Re.g,Pe=Re.b;ye?(_[0]=Ve,_[1]=qe,_[2]=Pe,_[3]=Ce,b.clearBufferuiv(b.COLOR,0,_)):(x[0]=Ve,x[1]=qe,x[2]=Pe,x[3]=Ce,b.clearBufferiv(b.COLOR,0,x))}else Y|=b.COLOR_BUFFER_BIT}B&&(Y|=b.DEPTH_BUFFER_BIT),$&&(Y|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),me.dispose(),Oe.dispose(),Z.dispose(),v.dispose(),D.dispose(),W.dispose(),rt.dispose(),O.dispose(),he.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",hc),Q.removeEventListener("sessionend",pc),Ai.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=ae.autoReset,B=xe.enabled,$=xe.autoUpdate,Y=xe.needsUpdate,z=xe.type;Me(),ae.autoReset=T,xe.enabled=B,xe.autoUpdate=$,xe.needsUpdate=Y,xe.type=z}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xe(T){const B=T.target;B.removeEventListener("dispose",Xe),gt(B)}function gt(T){Lt(T),Z.remove(T)}function Lt(T){const B=Z.get(T).programs;B!==void 0&&(B.forEach(function($){he.releaseProgram($)}),T.isShaderMaterial&&he.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,Y,z,de){B===null&&(B=mt);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Re=xh(T,B,$,Y,z);ee.setMaterial(Y,ye);let Ce=$.index,Ve=1;if(Y.wireframe===!0){if(Ce=q.getWireframeAttribute($),Ce===void 0)return;Ve=2}const qe=$.drawRange,Pe=$.attributes.position;let Ze=qe.start*Ve,ft=(qe.start+qe.count)*Ve;de!==null&&(Ze=Math.max(Ze,de.start*Ve),ft=Math.min(ft,(de.start+de.count)*Ve)),Ce!==null?(Ze=Math.max(Ze,0),ft=Math.min(ft,Ce.count)):Pe!=null&&(Ze=Math.max(Ze,0),ft=Math.min(ft,Pe.count));const ht=ft-Ze;if(ht<0||ht===1/0)return;rt.setup(z,Y,Re,$,Ce);let kt,et=ge;if(Ce!==null&&(kt=H.get(Ce),et=ke,et.setIndex(kt)),z.isMesh)Y.wireframe===!0?(ee.setLineWidth(Y.wireframeLinewidth*U()),et.setMode(b.LINES)):et.setMode(b.TRIANGLES);else if(z.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),ee.setLineWidth(Le*U()),z.isLineSegments?et.setMode(b.LINES):z.isLineLoop?et.setMode(b.LINE_LOOP):et.setMode(b.LINE_STRIP)}else z.isPoints?et.setMode(b.POINTS):z.isSprite&&et.setMode(b.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)et.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Un=z._multiDrawCounts,tt=z._multiDrawCount,hn=Ce?H.get(Ce).bytesPerElement:1,Ji=Z.get(Y).currentProgram.getUniforms();for(let Kt=0;Kt<tt;Kt++)Ji.setValue(b,"_gl_DrawID",Kt),et.render(Le[Kt]/hn,Un[Kt])}else if(z.isInstancedMesh)et.renderInstances(Ze,ht,z.count);else if($.isInstancedBufferGeometry){const Le=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Un=Math.min($.instanceCount,Le);et.renderInstances(Ze,ht,Un)}else et.render(Ze,ht)};function st(T,B,$){T.transparent===!0&&T.side===Yn&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,Rs(T,B,$),T.side=Ei,T.needsUpdate=!0,Rs(T,B,$),T.side=Yn):Rs(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),d=Oe.get($),d.init(B),y.push(d),$.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),T!==$&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const Y=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Re=de[ye];st(Re,$,z),Y.add(Re)}else st(de,$,z),Y.add(de)}),y.pop(),d=null,Y},this.compileAsync=function(T,B,$=null){const Y=this.compile(T,B,$);return new Promise(z=>{function de(){if(Y.forEach(function(ye){Z.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){z(T);return}setTimeout(de,10)}K.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let dn=null;function In(T){dn&&dn(T)}function hc(){Ai.stop()}function pc(){Ai.start()}const Ai=new dh;Ai.setAnimationLoop(In),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(T){dn=T,Q.setAnimationLoop(T),T===null?Ai.stop():Ai.start()},Q.addEventListener("sessionstart",hc),Q.addEventListener("sessionend",pc),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,B,N),d=Oe.get(T,y.length),d.init(B),y.push(d),Ne.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(Ne),be=this.localClippingEnabled,fe=ce.init(this.clippingPlanes,be),m=me.get(T,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const de=g.xr.getDepthSensingMesh();de!==null&&Xo(de,B,-1/0,g.sortObjects)}Xo(T,B,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(pe,Ee),w=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,w&&De.addToRenderList(m,T),this.info.render.frame++,fe===!0&&ce.beginShadows();const $=d.state.shadowsArray;xe.render($,T,B),fe===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(d.setupLights(),B.isArrayCamera){const de=B.cameras;if(z.length>0)for(let ye=0,Re=de.length;ye<Re;ye++){const Ce=de[ye];gc(Y,z,T,Ce)}w&&De.render(T);for(let ye=0,Re=de.length;ye<Re;ye++){const Ce=de[ye];mc(m,T,Ce,Ce.viewport)}}else z.length>0&&gc(Y,z,T,B),w&&De.render(T),mc(m,T,B);N!==null&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(g,T,B),rt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],fe===!0&&ce.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Xo(T,B,$,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){Y&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ne);const ye=W.update(T),Re=T.material;Re.visible&&m.push(T,ye,Re,$,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const ye=W.update(T),Re=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ge.copy(ye.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(Ne)),Array.isArray(Re)){const Ce=ye.groups;for(let Ve=0,qe=Ce.length;Ve<qe;Ve++){const Pe=Ce[Ve],Ze=Re[Pe.materialIndex];Ze&&Ze.visible&&m.push(T,ye,Ze,$,Ge.z,Pe)}}else Re.visible&&m.push(T,ye,Re,$,Ge.z,null)}}const de=T.children;for(let ye=0,Re=de.length;ye<Re;ye++)Xo(de[ye],B,$,Y)}function mc(T,B,$,Y){const z=T.opaque,de=T.transmissive,ye=T.transparent;d.setupLightsView($),fe===!0&&ce.setGlobalState(g.clippingPlanes,$),Y&&ee.viewport(L.copy(Y)),z.length>0&&ws(z,B,$),de.length>0&&ws(de,B,$),ye.length>0&&ws(ye,B,$),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function gc(T,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new ji(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Ss:ti,minFilter:Xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const de=d.state.transmissionRenderTarget[Y.id],ye=Y.viewport||L;de.setSize(ye.z,ye.w);const Re=g.getRenderTarget();g.setRenderTarget(de),g.getClearColor(J),te=g.getClearAlpha(),te<1&&g.setClearColor(16777215,.5),g.clear(),w&&De.render($);const Ce=g.toneMapping;g.toneMapping=xi;const Ve=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),fe===!0&&ce.setGlobalState(g.clippingPlanes,Y),ws(T,$,Y),S.updateMultisampleRenderTarget(de),S.updateRenderTargetMipmap(de),K.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Pe=0,Ze=B.length;Pe<Ze;Pe++){const ft=B[Pe],ht=ft.object,kt=ft.geometry,et=ft.material,Le=ft.group;if(et.side===Yn&&ht.layers.test(Y.layers)){const Un=et.side;et.side=Xt,et.needsUpdate=!0,_c(ht,$,Y,kt,et,Le),et.side=Un,et.needsUpdate=!0,qe=!0}}qe===!0&&(S.updateMultisampleRenderTarget(de),S.updateRenderTargetMipmap(de))}g.setRenderTarget(Re),g.setClearColor(J,te),Ve!==void 0&&(Y.viewport=Ve),g.toneMapping=Ce}function ws(T,B,$){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,de=T.length;z<de;z++){const ye=T[z],Re=ye.object,Ce=ye.geometry,Ve=Y===null?ye.material:Y,qe=ye.group;Re.layers.test($.layers)&&_c(Re,B,$,Ce,Ve,qe)}}function _c(T,B,$,Y,z,de){T.onBeforeRender(g,B,$,Y,z,de),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(g,B,$,Y,T,de),z.transparent===!0&&z.side===Yn&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,g.renderBufferDirect($,B,Y,z,T,de),z.side=Ei,z.needsUpdate=!0,g.renderBufferDirect($,B,Y,z,T,de),z.side=Yn):g.renderBufferDirect($,B,Y,z,T,de),T.onAfterRender(g,B,$,Y,z,de)}function Rs(T,B,$){B.isScene!==!0&&(B=mt);const Y=Z.get(T),z=d.state.lights,de=d.state.shadowsArray,ye=z.state.version,Re=he.getParameters(T,z.state,de,B,$),Ce=he.getProgramCacheKey(Re);let Ve=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?D:v).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Xe),Ve=new Map,Y.programs=Ve);let qe=Ve.get(Ce);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===ye)return xc(T,Re),qe}else Re.uniforms=he.getUniforms(T),T.onBeforeCompile(Re,g),qe=he.acquireProgram(Re,Ce),Ve.set(Ce,qe),Y.uniforms=Re.uniforms;const Pe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ce.uniform),xc(T,Re),Y.needsLights=Sh(T),Y.lightsStateVersion=ye,Y.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function vc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function xc(T,B){const $=Z.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function xh(T,B,$,Y,z){B.isScene!==!0&&(B=mt),S.resetTextureUnits();const de=B.fog,ye=Y.isMeshStandardMaterial?B.environment:null,Re=N===null?g.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Or,Ce=(Y.isMeshStandardMaterial?D:v).get(Y.envMap||ye),Ve=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qe=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color;let ht=xi;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ht=g.toneMapping);const kt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,et=kt!==void 0?kt.length:0,Le=Z.get(Y),Un=d.state.lights;if(fe===!0&&(be===!0||T!==M)){const tn=T===M&&Y.id===E;ce.setState(Y,T,tn)}let tt=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Un.state.version||Le.outputColorSpace!==Re||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Ce||Y.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ce.numPlanes||Le.numIntersection!==ce.numIntersection)||Le.vertexAlphas!==Ve||Le.vertexTangents!==qe||Le.morphTargets!==Pe||Le.morphNormals!==Ze||Le.morphColors!==ft||Le.toneMapping!==ht||Le.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Le.__version=Y.version);let hn=Le.currentProgram;tt===!0&&(hn=Rs(Y,B,z));let Ji=!1,Kt=!1,kr=!1;const pt=hn.getUniforms(),bn=Le.uniforms;if(ee.useProgram(hn.program)&&(Ji=!0,Kt=!0,kr=!0),Y.id!==E&&(E=Y.id,Kt=!0),Ji||M!==T){ee.buffers.depth.getReversed()?(_e.copy(T.projectionMatrix),N0(_e),F0(_e),pt.setValue(b,"projectionMatrix",_e)):pt.setValue(b,"projectionMatrix",T.projectionMatrix),pt.setValue(b,"viewMatrix",T.matrixWorldInverse);const ri=pt.map.cameraPosition;ri!==void 0&&ri.setValue(b,ze.setFromMatrixPosition(T.matrixWorld)),j.logarithmicDepthBuffer&&pt.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Kt=!0,kr=!0)}if(z.isSkinnedMesh){pt.setOptional(b,z,"bindMatrix"),pt.setOptional(b,z,"bindMatrixInverse");const tn=z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),pt.setValue(b,"boneTexture",tn.boneTexture,S))}z.isBatchedMesh&&(pt.setOptional(b,z,"batchingTexture"),pt.setValue(b,"batchingTexture",z._matricesTexture,S),pt.setOptional(b,z,"batchingIdTexture"),pt.setValue(b,"batchingIdTexture",z._indirectTexture,S),pt.setOptional(b,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(b,"batchingColorTexture",z._colorsTexture,S));const Hr=$.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&Be.update(z,$,hn),(Kt||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,pt.setValue(b,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(bn.envMap.value=Ce,bn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(bn.envMapIntensity.value=B.environmentIntensity),Kt&&(pt.setValue(b,"toneMappingExposure",g.toneMappingExposure),Le.needsLights&&Mh(bn,kr),de&&Y.fog===!0&&le.refreshFogUniforms(bn,de),le.refreshMaterialUniforms(bn,Y,V,ie,d.state.transmissionRenderTarget[T.id]),mo.upload(b,vc(Le),bn,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(mo.upload(b,vc(Le),bn,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(b,"center",z.center),pt.setValue(b,"modelViewMatrix",z.modelViewMatrix),pt.setValue(b,"normalMatrix",z.normalMatrix),pt.setValue(b,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const tn=Y.uniformsGroups;for(let ri=0,si=tn.length;ri<si;ri++){const Mc=tn[ri];O.update(Mc,hn),O.bind(Mc,hn)}}return hn}function Mh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Sh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,B,$){Z.get(T.texture).__webglTexture=B,Z.get(T.depthTexture).__webglTexture=$;const Y=Z.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const $=Z.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){N=T,C=B,P=$;let Y=!0,z=null,de=!1,ye=!1;if(T){const Ce=Z.get(T);if(Ce.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(b.FRAMEBUFFER,null),Y=!1;else if(Ce.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(Ce.__hasExternalTextures)S.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(Ce.__boundDepthTexture!==Pe){if(Pe!==null&&Z.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const qe=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?z=qe[B][$]:z=qe[B],de=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?z=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[$]:z=qe,L.copy(T.viewport),F.copy(T.scissor),k=T.scissorTest}else L.copy(Ae).multiplyScalar(V).floor(),F.copy(Fe).multiplyScalar(V).floor(),k=Qe;if(ee.bindFramebuffer(b.FRAMEBUFFER,z)&&Y&&ee.drawBuffers(T,z),ee.viewport(L),ee.scissor(F),ee.setScissorTest(k),de){const Ce=Z.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,$)}else if(ye){const Ce=Z.get(T.texture),Ve=B||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ce.__webglTexture,$||0,Ve)}E=-1},this.readRenderTargetPixels=function(T,B,$,Y,z,de,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){ee.bindFramebuffer(b.FRAMEBUFFER,Re);try{const Ce=T.texture,Ve=Ce.format,qe=Ce.type;if(!j.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&$>=0&&$<=T.height-z&&b.readPixels(B,$,Y,z,We.convert(Ve),We.convert(qe),de)}finally{const Ce=N!==null?Z.get(N).__webglFramebuffer:null;ee.bindFramebuffer(b.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,B,$,Y,z,de,ye){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){const Ce=T.texture,Ve=Ce.format,qe=Ce.type;if(!j.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Y&&$>=0&&$<=T.height-z){ee.bindFramebuffer(b.FRAMEBUFFER,Re);const Pe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.bufferData(b.PIXEL_PACK_BUFFER,de.byteLength,b.STREAM_READ),b.readPixels(B,$,Y,z,We.convert(Ve),We.convert(qe),0);const Ze=N!==null?Z.get(N).__webglFramebuffer:null;ee.bindFramebuffer(b.FRAMEBUFFER,Ze);const ft=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await U0(b,ft,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,de),b.deleteBuffer(Pe),b.deleteSync(ft),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,$=0){T.isTexture!==!0&&(Jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-$),z=Math.floor(T.image.width*Y),de=Math.floor(T.image.height*Y),ye=B!==null?B.x:0,Re=B!==null?B.y:0;S.setTexture2D(T,0),b.copyTexSubImage2D(b.TEXTURE_2D,$,0,0,ye,Re,z,de),ee.unbindTexture()},this.copyTextureToTexture=function(T,B,$=null,Y=null,z=0){T.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,$=null);let de,ye,Re,Ce,Ve,qe,Pe,Ze,ft;const ht=T.isCompressedTexture?T.mipmaps[z]:T.image;$!==null?(de=$.max.x-$.min.x,ye=$.max.y-$.min.y,Re=$.isBox3?$.max.z-$.min.z:1,Ce=$.min.x,Ve=$.min.y,qe=$.isBox3?$.min.z:0):(de=ht.width,ye=ht.height,Re=ht.depth||1,Ce=0,Ve=0,qe=0),Y!==null?(Pe=Y.x,Ze=Y.y,ft=Y.z):(Pe=0,Ze=0,ft=0);const kt=We.convert(B.format),et=We.convert(B.type);let Le;B.isData3DTexture?(S.setTexture3D(B,0),Le=b.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(S.setTexture2DArray(B,0),Le=b.TEXTURE_2D_ARRAY):(S.setTexture2D(B,0),Le=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);const Un=b.getParameter(b.UNPACK_ROW_LENGTH),tt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),hn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ji=b.getParameter(b.UNPACK_SKIP_ROWS),Kt=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ce),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ve),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qe);const kr=T.isDataArrayTexture||T.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const bn=Z.get(T),Hr=Z.get(B),tn=Z.get(bn.__renderTarget),ri=Z.get(Hr.__renderTarget);ee.bindFramebuffer(b.READ_FRAMEBUFFER,tn.__webglFramebuffer),ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let si=0;si<Re;si++)kr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,z,qe+si),T.isDepthTexture?(pt&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Z.get(B).__webglTexture,z,ft+si),b.blitFramebuffer(Ce,Ve,de,ye,Pe,Ze,de,ye,b.DEPTH_BUFFER_BIT,b.NEAREST)):pt?b.copyTexSubImage3D(Le,z,Pe,Ze,ft+si,Ce,Ve,de,ye):b.copyTexSubImage2D(Le,z,Pe,Ze,ft+si,Ce,Ve,de,ye);ee.bindFramebuffer(b.READ_FRAMEBUFFER,null),ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else pt?T.isDataTexture||T.isData3DTexture?b.texSubImage3D(Le,z,Pe,Ze,ft,de,ye,Re,kt,et,ht.data):B.isCompressedArrayTexture?b.compressedTexSubImage3D(Le,z,Pe,Ze,ft,de,ye,Re,kt,ht.data):b.texSubImage3D(Le,z,Pe,Ze,ft,de,ye,Re,kt,et,ht):T.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,z,Pe,Ze,de,ye,kt,et,ht.data):T.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,z,Pe,Ze,ht.width,ht.height,kt,ht.data):b.texSubImage2D(b.TEXTURE_2D,z,Pe,Ze,de,ye,kt,et,ht);b.pixelStorei(b.UNPACK_ROW_LENGTH,Un),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,hn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ji),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Kt),z===0&&B.generateMipmaps&&b.generateMipmap(Le),ee.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$=null,Y=null,z=0){return T.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0),Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,$,Y,z)},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){C=0,P=0,N=null,ee.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class $y extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vh extends bs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const df=new xt,Nl=new ih,no=new Vo,io=new G;class Yy extends $t{constructor(e=new Tn,t=new vh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;df.copy(r).invert(),Nl.copy(e.ray).applyMatrix4(df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,x=p;_<x;_++){const m=c.getX(_);io.fromBufferAttribute(f,m),hf(io,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,x=p;_<x;_++)io.fromBufferAttribute(f,_),hf(io,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hf(n,e,t,i,r,s,o){const a=Nl.distanceSqToPoint(n);if(a<t){const l=new G;Nl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fc extends Tn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(A){const y=new G,g=new G,I=new G;for(let C=0;C<t.length;C+=3)p(t[C+0],y),p(t[C+1],g),p(t[C+2],I),l(y,g,I,A)}function l(A,y,g,I){const C=I+1,P=[];for(let N=0;N<=C;N++){P[N]=[];const E=A.clone().lerp(g,N/C),M=y.clone().lerp(g,N/C),L=C-N;for(let F=0;F<=L;F++)F===0&&N===C?P[N][F]=E:P[N][F]=E.clone().lerp(M,F/L)}for(let N=0;N<C;N++)for(let E=0;E<2*(C-N)-1;E++){const M=Math.floor(E/2);E%2===0?(h(P[N][M+1]),h(P[N+1][M]),h(P[N][M])):(h(P[N][M+1]),h(P[N+1][M+1]),h(P[N+1][M]))}}function c(A){const y=new G;for(let g=0;g<s.length;g+=3)y.x=s[g+0],y.y=s[g+1],y.z=s[g+2],y.normalize().multiplyScalar(A),s[g+0]=y.x,s[g+1]=y.y,s[g+2]=y.z}function u(){const A=new G;for(let y=0;y<s.length;y+=3){A.x=s[y+0],A.y=s[y+1],A.z=s[y+2];const g=m(A)/2/Math.PI+.5,I=d(A)/Math.PI+.5;o.push(g,1-I)}_(),f()}function f(){for(let A=0;A<o.length;A+=6){const y=o[A+0],g=o[A+2],I=o[A+4],C=Math.max(y,g,I),P=Math.min(y,g,I);C>.9&&P<.1&&(y<.2&&(o[A+0]+=1),g<.2&&(o[A+2]+=1),I<.2&&(o[A+4]+=1))}}function h(A){s.push(A.x,A.y,A.z)}function p(A,y){const g=A*3;y.x=e[g+0],y.y=e[g+1],y.z=e[g+2]}function _(){const A=new G,y=new G,g=new G,I=new G,C=new it,P=new it,N=new it;for(let E=0,M=0;E<s.length;E+=9,M+=6){A.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),g.set(s[E+6],s[E+7],s[E+8]),C.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),N.set(o[M+4],o[M+5]),I.copy(A).add(y).add(g).divideScalar(3);const L=m(I);x(C,M+0,A,L),x(P,M+2,y,L),x(N,M+4,g,L)}}function x(A,y,g,I){I<0&&A.x===1&&(o[y]=A.x-1),g.x===0&&g.z===0&&(o[y]=I/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function d(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.vertices,e.indices,e.radius,e.details)}}class Ao extends fc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ao(e.radius,e.detail)}}class dc extends Tn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new G,f=new G,h=new G;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,d=(r+1)*(p-1)+_,A=(r+1)*p+_;o.push(x,m,A),o.push(m,d,A)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const Ky=Et({__name:"HeroCanvas",setup(n){const e=Rt(null);let t=()=>{};return No(()=>{const i=e.value;if(!i)return;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=new $y,o=new an(32,1,.1,40);o.position.set(0,.1,7.2);const a=new qy({alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.appendChild(a.domElement);const l=new es,c=new Ao(1.72,1),u=new as({color:3462041,wireframe:!0,transparent:!0,opacity:.45}),f=new ln(c,u),h=new Ao(1.02,0),p=new as({color:13761253,wireframe:!0,transparent:!0,opacity:.28}),_=new ln(h,p),x=new dc(2.35,.008,12,96),m=new as({color:1096065,transparent:!0,opacity:.7}),d=new ln(x,m);d.rotation.x=Math.PI/2.35;const A=140,y=[];for(let te=0;te<A;te+=1){const X=Math.acos(1-2*(te+.5)/A),ie=Math.PI*(1+Math.sqrt(5))*te,V=2.65;y.push(V*Math.sin(X)*Math.cos(ie),V*Math.sin(X)*Math.sin(ie),V*Math.cos(X))}const g=new Tn;g.setAttribute("position",new Yt(y,3));const I=new vh({color:11006928,size:.03,transparent:!0,opacity:.8}),C=new Yy(g,I);l.add(f,_,d,C),s.add(l);let P=0,N=0,E=0,M=0;const L=()=>{const te=i.clientWidth||1,X=i.clientHeight||1;o.aspect=te/X,o.updateProjectionMatrix(),a.setSize(te,X,!1)};L();const F=new ResizeObserver(L);F.observe(i);const k=te=>{const X=i.getBoundingClientRect();P=(te.clientX-X.left)/X.width-.5,N=(te.clientY-X.top)/X.height-.5};window.addEventListener("pointermove",k);const J=()=>{r||(E+=.0022),l.rotation.y=E+P*.35,l.rotation.x=N*.25,_.rotation.y=-E*1.4,d.rotation.z+=r?0:.002,a.render(s,o),M=requestAnimationFrame(J)};J(),t=()=>{cancelAnimationFrame(M),F.disconnect(),window.removeEventListener("pointermove",k),c.dispose(),h.dispose(),x.dispose(),g.dispose(),u.dispose(),p.dispose(),m.dispose(),I.dispose(),a.dispose(),a.domElement.remove()}}),Fo(()=>t()),(i,r)=>(re(),ue("div",{ref_key:"host",ref:e,class:"hero-canvas","aria-hidden":"true"},null,512))}}),Ua=[{name:"@aivue/agent",group:"Runtime",text:"Streaming runs, tools, approvals, shared page state, and generative UI.",controls:"AiAgent, AiThread, AiMessage, AiReasoning, AiToolCall, AiApproval, AiPlan, AiSources, AiSuggestions, AiContext, AiComposer, useAgent"},{name:"@aivue/stream-markdown",group:"Runtime",text:"Markdown that stays valid while tokens are still arriving.",controls:"AiStreamMarkdown"},{name:"@aivue/cli",group:"Runtime",text:"Scaffold an agent panel or a Nuxt plugin from the terminal.",controls:"aivue add agent, aivue add nuxt"},{name:"@aivue/core",group:"Runtime",text:"One client for OpenAI, Claude, Gemini, Hugging Face, Ollama, and DeepSeek.",controls:"AIClient, useAIClient"},{name:"@aivue/chatbot",group:"Conversation",text:"Multi-provider chat with streaming, voice, attachments, and RAG.",controls:"AiChatWindow, AiChatRAG, useChatEngine"},{name:"@aivue/chatbot-storage",group:"Conversation",text:"Persist threads so a conversation survives a reload.",controls:"Storage adapters for the chatbot"},{name:"@aivue/browser-llm",group:"Conversation",text:"Run a model in the browser with WebGPU. No key leaves the page.",controls:"AiBrowserLLM, useBrowserLLM"},{name:"@aivue/mcp-client",group:"Conversation",text:"Connect the agent to Model Context Protocol tools and resources.",controls:"AiMcpClient, useMcp"},{name:"@aivue/writer",group:"Writing",text:"Rewrite, shorten, expand, fix grammar, change tone, and continue in place.",controls:"AiWriter, useWriter"},{name:"@aivue/summarizer",group:"Writing",text:"Short, medium, or long summaries, as a paragraph, bullets, or a plain explanation.",controls:"AiSummarizer, useSummarizer"},{name:"@aivue/translate",group:"Writing",text:"Detect a language, translate, and switch formality.",controls:"AiTranslate, useTranslate"},{name:"@aivue/moderation",group:"Writing",text:"Score a draft for hate, harassment, sexual content, violence, self-harm, and spam.",controls:"AiModeration, useModeration"},{name:"@aivue/smart-datatable",group:"Data",text:"Ask a table a question and let the agent filter, explain, and act on rows.",controls:"AiSmartDataTable"},{name:"@aivue/tabular-intelligence",group:"Data",text:"Statistics, charts, and models over rows you already have.",controls:"AiTabularIntelligence"},{name:"@aivue/hierarchical-memory",group:"Data",text:"Memory trees for long documents and wide tables.",controls:"AiHierarchicalMemory"},{name:"@aivue/doc-intelligence",group:"Data",text:"Pull structured fields from invoices, receipts, and identity documents.",controls:"AiDocIntelligence"},{name:"@aivue/image-caption",group:"Data",text:"Write a caption for an uploaded or remote image.",controls:"AiImageCaption"},{name:"@aivue/guided-form",group:"Input",text:"Turn a schema into one question at a time, with the model beside the field.",controls:"AiGuidedForm"},{name:"@aivue/smartform",group:"Input",text:"Validation that reads the intent of the form, not only the regex.",controls:"AiSmartForm"},{name:"@aivue/autosuggest",group:"Input",text:"Suggestions ranked for the field the user is in.",controls:"AiAutosuggest"},{name:"@aivue/predictive-input",group:"Input",text:"Finish the sentence the user has started.",controls:"AiPredictiveInput"},{name:"@aivue/voice-actions",group:"Input",text:"Turn speech into commands the page can run.",controls:"AiVoiceActions"},{name:"@aivue/smart-notify",group:"Surface",text:"Group notifications and time them to attention.",controls:"AiSmartNotify"},{name:"@aivue/emotion-ui",group:"Surface",text:"Let the interface follow the tone of what the user just said.",controls:"AiEmotionUi"},{name:"@aivue/analytics",group:"Surface",text:"See how people and agents move through a conversation.",controls:"AiAnalytics"},{name:"@aivue/360-spin",group:"Surface",text:"A product turntable the agent can narrate.",controls:"Ai360Spin"},{name:"@aivue/ai-360-generator",group:"Surface",text:"Build a 360° view from a single product image.",controls:"Ai360Generator"}],jy={"@aivue/agent":"orbit","@aivue/stream-markdown":"lines","@aivue/cli":"terminal","@aivue/core":"hex","@aivue/chatbot":"chat","@aivue/chatbot-storage":"database","@aivue/browser-llm":"cpu","@aivue/mcp-client":"nodes","@aivue/writer":"pen","@aivue/summarizer":"list","@aivue/translate":"translate","@aivue/moderation":"shield","@aivue/smart-datatable":"table","@aivue/tabular-intelligence":"chart","@aivue/hierarchical-memory":"tree","@aivue/doc-intelligence":"doc","@aivue/image-caption":"image","@aivue/guided-form":"form","@aivue/smartform":"check","@aivue/autosuggest":"suggest","@aivue/predictive-input":"cursor","@aivue/voice-actions":"mic","@aivue/smart-notify":"bell","@aivue/emotion-ui":"face","@aivue/analytics":"chart","@aivue/360-spin":"spin","@aivue/ai-360-generator":"cube"},Zy=[{index:"01",icon:"lines",title:"Stream the run",text:"Tokens, reasoning, and markdown land in the thread while the model is still writing."},{index:"02",icon:"tool",title:"Call the page",text:"Tools you register can filter a table, open a document, or change the screen the user is looking at."},{index:"03",icon:"approval",title:"Wait for a person",text:"A refund, a send, or a delete pauses on an approval instead of running itself."},{index:"04",icon:"panel",title:"Render your component",text:"The agent can place your Vue component in the thread and share state with it."}],Jy=[{name:"AiThread",icon:"thread",package:"@aivue/agent",text:"The scroll of a run: messages, tools, and the composer."},{name:"AiMessage",icon:"message",package:"@aivue/agent",text:"One turn, from the person or from the agent."},{name:"AiReasoning",icon:"reason",package:"@aivue/agent",text:"The model’s working notes, separate from the answer."},{name:"AiToolCall",icon:"tool",package:"@aivue/agent",text:"Name, arguments, and result of a tool, as they arrive."},{name:"AiApproval",icon:"approval",package:"@aivue/agent",text:"A pause with approve and reject, before a sensitive tool runs."},{name:"AiPlan",icon:"list",package:"@aivue/agent",text:"The steps the agent plans, and which one it is on."},{name:"AiSources",icon:"doc",package:"@aivue/agent",text:"The pages and records a reply is drawn from."},{name:"AiSuggestions",icon:"suggest",package:"@aivue/agent",text:"Follow-up prompts the person can send in one click."},{name:"AiContext",icon:"chart",package:"@aivue/agent",text:"How much of the context window this thread has used."},{name:"AiComposer",icon:"composer",package:"@aivue/agent",text:"The field that starts the next turn."},{name:"AiAgent",icon:"panel",package:"@aivue/agent",text:"The whole panel: thread, status, and approval events."},{name:"useAgent",icon:"play",package:"@aivue/agent",text:"Play an event stream, register tools, and share state with the page."},{name:"AiStreamMarkdown",icon:"lines",package:"@aivue/stream-markdown",text:"Incomplete markdown that does not flicker or break a fence."}],Qy=[{src:"hero",title:"The suite",text:"Chat, forms, and vision on one surface."},{src:"chatbot",title:"Conversation",text:"A thread with voice, files, and RAG."},{src:"smartform",title:"Forms",text:"Validation that reads the field, not only the regex."},{src:"autosuggest",title:"Input",text:"Suggestions beside the cursor."},{src:"caption",title:"Vision",text:"A caption for the image on the page."},{src:"analytics",title:"Signal",text:"How people and agents move through a run."}],eE="data:image/svg+xml,%3csvg%20width='640'%20height='400'%20viewBox='0%200%20640%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='640'%20height='400'%20rx='28'%20fill='%23F4F4F5'/%3e%3cg%20opacity='0.55'%20stroke='%23E4E4E7'%3e%3cpath%20d='M40%2080h560M40%20160h560M40%20240h560M40%20320h560'/%3e%3cpath%20d='M80%2040v320M200%2040v320M320%2040v320M440%2040v320M560%2040v320'/%3e%3c/g%3e%3cg%20filter='url(%23s)'%3e%3crect%20x='78'%20y='86'%20width='220'%20height='228'%20rx='18'%20fill='%23FFFFFF'/%3e%3crect%20x='96'%20y='108'%20width='88'%20height='10'%20rx='5'%20fill='%2334D399'/%3e%3crect%20x='96'%20y='140'%20width='150'%20height='36'%20rx='12'%20fill='%2309090B'/%3e%3crect%20x='110'%20y='154'%20width='92'%20height='8'%20rx='4'%20fill='%23A7F3D0'/%3e%3crect%20x='132'%20y='190'%20width='148'%20height='36'%20rx='12'%20fill='%23ECFDF5'/%3e%3crect%20x='146'%20y='204'%20width='100'%20height='8'%20rx='4'%20fill='%2352525B'/%3e%3crect%20x='96'%20y='246'%20width='168'%20height='36'%20rx='12'%20fill='%2318181B'/%3e%3crect%20x='110'%20y='260'%20width='110'%20height='8'%20rx='4'%20fill='%2334D399'/%3e%3c/g%3e%3cg%20filter='url(%23s)'%3e%3crect%20x='250'%20y='58'%20width='168'%20height='120'%20rx='18'%20fill='%2318181B'/%3e%3ccircle%20cx='278'%20cy='90'%20r='10'%20fill='%2334D399'/%3e%3crect%20x='298'%20y='84'%20width='88'%20height='8'%20rx='4'%20fill='%23A7F3D0'/%3e%3crect%20x='270'%20y='116'%20width='128'%20height='8'%20rx='4'%20fill='%2352525B'/%3e%3crect%20x='270'%20y='134'%20width='96'%20height='8'%20rx='4'%20fill='%2352525B'/%3e%3c/g%3e%3cg%20filter='url(%23s)'%3e%3crect%20x='360'%20y='168'%20width='210'%20height='168'%20rx='18'%20fill='%23FFFFFF'/%3e%3crect%20x='380'%20y='190'%20width='70'%20height='8'%20rx='4'%20fill='%2334D399'/%3e%3crect%20x='380'%20y='214'%20width='170'%20height='28'%20rx='8'%20fill='%23ECFDF5'%20stroke='%237DCEA0'%20stroke-width='1.5'/%3e%3crect%20x='380'%20y='254'%20width='170'%20height='28'%20rx='8'%20fill='%23FFF'%20stroke='%23E7A3A3'%20stroke-width='1.5'/%3e%3crect%20x='380'%20y='296'%20width='72'%20height='18'%20rx='9'%20fill='%2309090B'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='s'%20x='50'%20y='30'%20width='560'%20height='340'%20filterUnits='userSpaceOnUse'%3e%3cfeDropShadow%20dx='0'%20dy='10'%20stdDeviation='12'%20flood-color='%2318181B'%20flood-opacity='0.12'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",tE="data:image/svg+xml,%3csvg%20width='640'%20height='400'%20viewBox='0%200%20640%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='640'%20height='400'%20rx='28'%20fill='%23F4F4F5'/%3e%3crect%20x='70'%20y='36'%20width='500'%20height='328'%20rx='24'%20fill='%23FFFFFF'/%3e%3crect%20x='70'%20y='36'%20width='500'%20height='56'%20rx='24'%20fill='%2318181B'/%3e%3crect%20x='70'%20y='68'%20width='500'%20height='24'%20fill='%2318181B'/%3e%3ccircle%20cx='108'%20cy='64'%20r='12'%20fill='%2334D399'/%3e%3crect%20x='132'%20y='58'%20width='92'%20height='8'%20rx='4'%20fill='%23A7F3D0'/%3e%3crect%20x='102'%20y='124'%20width='210'%20height='44'%20rx='16'%20fill='%23ECFDF5'/%3e%3crect%20x='118'%20y='142'%20width='140'%20height='8'%20rx='4'%20fill='%2352525B'/%3e%3crect%20x='300'%20y='186'%20width='240'%20height='64'%20rx='16'%20fill='%2309090B'/%3e%3crect%20x='318'%20y='204'%20width='160'%20height='8'%20rx='4'%20fill='%23A7F3D0'/%3e%3crect%20x='318'%20y='222'%20width='120'%20height='8'%20rx='4'%20fill='%2334D399'/%3e%3crect%20x='102'%20y='270'%20width='168'%20height='36'%20rx='16'%20fill='%23ECFDF5'/%3e%3crect%20x='118'%20y='284'%20width='110'%20height='8'%20rx='4'%20fill='%2352525B'/%3e%3crect%20x='102'%20y='322'%20width='436'%20height='22'%20rx='11'%20fill='%23F4F4F5'%20stroke='%23E4E4E7'/%3e%3c/svg%3e",nE="data:image/svg+xml,%3csvg%20width='640'%20height='400'%20viewBox='0%200%20640%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='640'%20height='400'%20rx='28'%20fill='%23F4F4F5'/%3e%3crect%20x='120'%20y='40'%20width='400'%20height='320'%20rx='24'%20fill='%23FFFFFF'/%3e%3crect%20x='148'%20y='68'%20width='120'%20height='12'%20rx='6'%20fill='%2318181B'/%3e%3crect%20x='148'%20y='92'%20width='220'%20height='8'%20rx='4'%20fill='%2334D399'/%3e%3crect%20x='148'%20y='124'%20width='64'%20height='8'%20rx='4'%20fill='%2371717A'/%3e%3crect%20x='148'%20y='140'%20width='344'%20height='40'%20rx='12'%20fill='%23FFFFFF'%20stroke='%237DCEA0'%20stroke-width='1.6'/%3e%3ccircle%20cx='464'%20cy='160'%20r='8'%20fill='%231F8A4C'/%3e%3cpath%20d='M460%20160l2.4%202.4%205-5'%20stroke='%23fff'%20stroke-width='1.4'%20stroke-linecap='round'/%3e%3crect%20x='148'%20y='198'%20width='64'%20height='8'%20rx='4'%20fill='%2371717A'/%3e%3crect%20x='148'%20y='214'%20width='344'%20height='40'%20rx='12'%20fill='%23FFFFFF'%20stroke='%23E7A3A3'%20stroke-width='1.6'/%3e%3ccircle%20cx='464'%20cy='234'%20r='8'%20fill='%23C45252'/%3e%3cpath%20d='M461%20231l6%206M467%20231l-6%206'%20stroke='%23fff'%20stroke-width='1.4'%20stroke-linecap='round'/%3e%3crect%20x='148'%20y='278'%20width='120'%20height='36'%20rx='18'%20fill='%2309090B'/%3e%3crect%20x='176'%20y='292'%20width='64'%20height='8'%20rx='4'%20fill='%23A7F3D0'/%3e%3crect%20x='280'%20y='278'%20width='120'%20height='36'%20rx='18'%20fill='%23ECFDF5'/%3e%3crect%20x='304'%20y='292'%20width='72'%20height='8'%20rx='4'%20fill='%2352525B'/%3e%3c/svg%3e",iE="data:image/svg+xml,%3csvg%20width='640'%20height='400'%20viewBox='0%200%20640%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='640'%20height='400'%20rx='28'%20fill='%23F4F4F5'/%3e%3crect%20x='90'%20y='70'%20width='460'%20height='64'%20rx='18'%20fill='%23FFFFFF'/%3e%3ccircle%20cx='132'%20cy='102'%20r='14'%20fill='%23ECFDF5'/%3e%3cpath%20d='M138%20108l6%206'%20stroke='%2352525B'%20stroke-width='1.8'%20stroke-linecap='round'/%3e%3ccircle%20cx='132'%20cy='102'%20r='6'%20stroke='%2352525B'%20stroke-width='1.6'/%3e%3crect%20x='164'%20y='96'%20width='140'%20height='10'%20rx='5'%20fill='%2318181B'/%3e%3crect%20x='312'%20y='94'%20width='2'%20height='16'%20rx='1'%20fill='%2334D399'/%3e%3crect%20x='90'%20y='150'%20width='460'%20height='180'%20rx='18'%20fill='%23FFFFFF'/%3e%3crect%20x='114'%20y='174'%20width='412'%20height='36'%20rx='10'%20fill='%23ECFDF5'/%3e%3crect%20x='132'%20y='188'%20width='160'%20height='8'%20rx='4'%20fill='%2318181B'/%3e%3crect%20x='114'%20y='222'%20width='412'%20height='36'%20rx='10'%20fill='%23FAFAFA'/%3e%3crect%20x='132'%20y='236'%20width='120'%20height='8'%20rx='4'%20fill='%23A1A1AA'/%3e%3crect%20x='114'%20y='270'%20width='412'%20height='36'%20rx='10'%20fill='%23FAFAFA'/%3e%3crect%20x='132'%20y='284'%20width='180'%20height='8'%20rx='4'%20fill='%23A1A1AA'/%3e%3c/svg%3e",rE="data:image/svg+xml,%3csvg%20width='640'%20height='400'%20viewBox='0%200%20640%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='640'%20height='400'%20rx='28'%20fill='%23F4F4F5'/%3e%3crect%20x='56'%20y='48'%20width='300'%20height='304'%20rx='22'%20fill='%2318181B'/%3e%3ccircle%20cx='130'%20cy='120'%20r='22'%20fill='%2334D399'/%3e%3cpath%20d='M72%20300l70-78%2048%2040%2036-28%2074%2066v28H72z'%20fill='%2327272A'/%3e%3cpath%20d='M72%20300l70-60%2048%2034%2036-22%2074%2048v20H72z'%20fill='%2310B981'/%3e%3crect%20x='380'%20y='72'%20width='200'%20height='256'%20rx='22'%20fill='%23FFFFFF'/%3e%3crect%20x='404'%20y='100'%20width='88'%20height='10'%20rx='5'%20fill='%2334D399'/%3e%3crect%20x='404'%20y='132'%20width='152'%20height='8'%20rx='4'%20fill='%2318181B'/%3e%3crect%20x='404'%20y='152'%20width='128'%20height='8'%20rx='4'%20fill='%2371717A'/%3e%3crect%20x='404'%20y='172'%20width='140'%20height='8'%20rx='4'%20fill='%2371717A'/%3e%3crect%20x='404'%20y='210'%20width='152'%20height='36'%20rx='10'%20fill='%23ECFDF5'/%3e%3crect%20x='418'%20y='224'%20width='90'%20height='8'%20rx='4'%20fill='%2352525B'/%3e%3crect%20x='404'%20y='258'%20width='120'%20height='28'%20rx='14'%20fill='%2309090B'/%3e%3crect%20x='422'%20y='268'%20width='84'%20height='8'%20rx='4'%20fill='%23A7F3D0'/%3e%3c/svg%3e",sE="data:image/svg+xml,%3csvg%20width='640'%20height='400'%20viewBox='0%200%20640%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='640'%20height='400'%20rx='28'%20fill='%23F4F4F5'/%3e%3crect%20x='48'%20y='48'%20width='360'%20height='304'%20rx='22'%20fill='%23FFFFFF'/%3e%3crect%20x='76'%20y='76'%20width='100'%20height='10'%20rx='5'%20fill='%2318181B'/%3e%3cpath%20d='M84%20300h292'%20stroke='%23E4E4E7'/%3e%3crect%20x='104'%20y='220'%20width='28'%20height='80'%20rx='6'%20fill='%23D4D4D8'/%3e%3crect%20x='152'%20y='180'%20width='28'%20height='120'%20rx='6'%20fill='%2334D399'/%3e%3crect%20x='200'%20y='150'%20width='28'%20height='150'%20rx='6'%20fill='%2334D399'/%3e%3crect%20x='248'%20y='120'%20width='28'%20height='180'%20rx='6'%20fill='%2318181B'/%3e%3crect%20x='296'%20y='168'%20width='28'%20height='132'%20rx='6'%20fill='%2334D399'/%3e%3cpath%20d='M118%20210l48-28%2048-22%2048-24%2048%2036'%20stroke='%2310B981'%20stroke-width='2'%20stroke-linecap='round'/%3e%3crect%20x='428'%20y='48'%20width='164'%20height='92'%20rx='18'%20fill='%2318181B'/%3e%3crect%20x='448'%20y='70'%20width='72'%20height='8'%20rx='4'%20fill='%2334D399'/%3e%3crect%20x='448'%20y='92'%20width='96'%20height='16'%20rx='6'%20fill='%23A7F3D0'/%3e%3crect%20x='428'%20y='156'%20width='164'%20height='92'%20rx='18'%20fill='%23FFFFFF'/%3e%3crect%20x='448'%20y='178'%20width='72'%20height='8'%20rx='4'%20fill='%2334D399'/%3e%3crect%20x='448'%20y='200'%20width='80'%20height='16'%20rx='6'%20fill='%2318181B'/%3e%3crect%20x='428'%20y='264'%20width='164'%20height='88'%20rx='18'%20fill='%23FFFFFF'/%3e%3crect%20x='448'%20y='286'%20width='72'%20height='8'%20rx='4'%20fill='%2334D399'/%3e%3crect%20x='448'%20y='308'%20width='110'%20height='16'%20rx='6'%20fill='%2352525B'/%3e%3c/svg%3e",oE={key:0},aE={class:"library-bar"},lE={key:1,class:"studio"},cE={class:"nav"},uE={class:"mark",href:"#top"},fE={class:"nav-links"},dE={class:"nav-cta",href:"https://github.com/reachbrt/VueAI"},hE={id:"top"},pE={class:"hero"},mE={class:"hero-copy"},gE={class:"hero-actions"},_E={class:"btn btn-ghost",href:"#packages"},vE={class:"hero-stage"},xE={class:"orbit","aria-hidden":"true"},ME={class:"slab slab-back"},SE={class:"slab slab-mid"},yE={class:"slab slab-front"},EE={class:"section steps","aria-label":"How a run moves"},TE={class:"badge"},bE={class:"section scenes","aria-label":"Product scenes"},AE={class:"scene-grid"},wE=["src","alt"],RE={id:"agent",class:"section"},CE={id:"controls",class:"section"},PE={class:"control-index"},LE={class:"badge"},DE={id:"packages",class:"section"},IE={class:"section-intro"},UE={class:"package-grid"},NE=["href"],FE={class:"card-top"},OE={class:"badge"},BE=Et({__name:"SiteApp",setup(n){const e={hero:eE,chatbot:tE,smartform:nE,autosuggest:iE,caption:rE,analytics:sE},t=yp(()=>rg(()=>import("./App-OlGR-Sc5.js").then(r=>r.A),__vite__mapDeps([0,1]))),i=Rt(!1);return xr(i,r=>{document.body.style.background=r?"":"#000000",document.body.style.color=r?"":"#ffffff"},{immediate:!0}),(r,s)=>i.value?(re(),ue("div",oE,[R("div",aE,[s[3]||(s[3]=R("strong",null,"Component library",-1)),R("button",{type:"button",onClick:s[0]||(s[0]=o=>i.value=!1)},"Back to studio")]),Ie(ot(t))])):(re(),ue("div",lE,[R("header",cE,[R("a",uE,[Ie(wt,{name:"orbit"}),s[4]||(s[4]=St(" VueAI",-1))]),R("nav",fE,[s[6]||(s[6]=R("a",{href:"#agent"},"Agent",-1)),s[7]||(s[7]=R("a",{href:"#controls"},"Controls",-1)),s[8]||(s[8]=R("a",{href:"#packages"},"Packages",-1)),R("button",{type:"button",onClick:s[1]||(s[1]=o=>i.value=!0)},"Library"),R("a",dE,[Ie(wt,{name:"github"}),s[5]||(s[5]=St(" GitHub",-1))])])]),R("main",hE,[R("section",pE,[R("div",mE,[s[10]||(s[10]=R("p",{class:"eyebrow"},"Agent runtime for Vue",-1)),s[11]||(s[11]=R("h1",null,[R("span",null,"A component suite"),R("span",null,"the agent can call,"),R("span",{class:"hero-accent"},"on the page it is in.")],-1)),s[12]||(s[12]=R("p",{class:"lede"},"Streaming, tools, approvals, and your own Vue components inside the thread. Every package below is a control the agent can use, and a component you can place on its own.",-1)),R("div",gE,[s[9]||(s[9]=R("a",{class:"btn",href:"#agent"},"Open the studio",-1)),R("a",_E,"All "+Ye(ot(Ua).length)+" packages",1)])]),R("div",vE,[s[22]||(s[22]=R("div",{class:"hero-grid","aria-hidden":"true"},null,-1)),Ie(Ky),R("div",xE,[R("article",ME,[R("p",null,[Ie(wt,{name:"database"}),s[13]||(s[13]=St(" Shared state",-1))]),s[14]||(s[14]=R("strong",null,"filter = overdue",-1)),s[15]||(s[15]=R("span",null,"The table and the thread read the same object.",-1))]),R("article",SE,[R("p",null,[Ie(wt,{name:"tool"}),s[16]||(s[16]=St(" Tool",-1))]),s[17]||(s[17]=R("strong",null,"filter_invoices",-1)),s[18]||(s[18]=R("span",null,'{"status":"overdue"} · 2 rows',-1))]),R("article",yE,[R("p",null,[Ie(wt,{name:"approval"}),s[19]||(s[19]=St(" Approval",-1))]),s[20]||(s[20]=R("strong",null,"Refund invoice 1042",-1)),s[21]||(s[21]=R("span",null,"Waiting. The agent does not send it alone.",-1))])])])]),R("section",EE,[(re(!0),ue(we,null,Qt(ot(Zy),o=>(re(),ue("article",{key:o.index,class:"step"},[R("div",TE,[Ie(wt,{name:o.icon},null,8,["name"])]),R("p",null,Ye(o.index),1),R("h2",null,Ye(o.title),1),R("span",null,Ye(o.text),1)]))),128))]),R("section",bE,[s[23]||(s[23]=R("div",{class:"section-intro"},[R("h2",null,"Scenes from the suite."),R("p",null,"The same components, drawn as the surfaces a person actually uses.")],-1)),R("div",AE,[(re(!0),ue(we,null,Qt(ot(Qy),o=>(re(),ue("figure",{key:o.title},[R("img",{src:e[o.src],alt:o.title},null,8,wE),R("figcaption",null,[R("strong",null,Ye(o.title),1),R("span",null,Ye(o.text),1)])]))),128))])]),R("section",RE,[Ie(S_)]),R("section",CE,[s[24]||(s[24]=R("div",{class:"section-intro"},[R("h2",null,[St("Controls, "),R("em",null,"each on its own.")]),R("p",null,"These are the pieces inside the agent panel. Place one in a page, or let the runtime compose them. The cards below are the exported components, not a mock.")],-1)),R("div",PE,[(re(!0),ue(we,null,Qt(ot(Jy),o=>(re(),ue("article",{key:o.name},[R("div",LE,[Ie(wt,{name:o.icon},null,8,["name"])]),R("p",null,Ye(o.package),1),R("h3",null,Ye(o.name),1),R("span",null,Ye(o.text),1)]))),128))]),Ie(G_,{onLibrary:s[2]||(s[2]=o=>i.value=!0)})]),R("section",DE,[R("div",IE,[s[25]||(s[25]=R("h2",null,"Every package.",-1)),R("p",null,Ye(ot(Ua).length)+" packages, from the runtime to the field the user is typing in. Open a card for the npm page and its README.",1)]),R("div",UE,[(re(!0),ue(we,null,Qt(ot(Ua),o=>(re(),ue("a",{key:o.name,href:`https://www.npmjs.com/package/${o.name}`},[R("div",FE,[R("div",OE,[Ie(wt,{name:ot(jy)[o.name]||"orbit"},null,8,["name"])]),R("p",null,Ye(o.group),1)]),R("strong",null,Ye(o.name),1),R("span",null,Ye(o.text),1),R("em",null,Ye(o.controls),1)],8,NE))),128))])])]),s[26]||(s[26]=R("footer",{class:"site-footer"},[R("span",null,"VueAI · MIT"),R("span",null,[R("a",{href:"https://github.com/reachbrt/VueAI"},"GitHub"),St(" · "),R("a",{href:"https://www.npmjs.com/package/@aivue/agent"},"npm")])],-1))]))}});Qm(BE).mount("#app");export{Gf as A,Fo as B,Do as C,Qf as D,Gt as E,we as F,ql as G,Bf as H,za as I,kE as J,WE as K,Sd as L,td as M,GE as T,rg as _,R as a,Qt as b,ue as c,Et as d,Si as e,zE as f,Ie as g,dp as h,$a as i,Xm as j,Gm as k,Wm as l,VE as m,Zi as n,re as o,No as p,xr as q,Rt as r,jm as s,Ye as t,ot as u,XE as v,ou as w,HE as x,St as y,wr as z};
