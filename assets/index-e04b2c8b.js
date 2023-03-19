function Im(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qi={},Rm={get exports(){return qi},set exports(e){qi=e}},za={},w={},Nm={get exports(){return w},set exports(e){w=e}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),_m=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),Bm=Symbol.for("react.forward_ref"),$m=Symbol.for("react.suspense"),zm=Symbol.for("react.memo"),jm=Symbol.for("react.lazy"),Ac=Symbol.iterator;function Hm(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hf=Object.assign,pf={};function Zr(e,n,t){this.props=e,this.context=n,this.refs=pf,this.updater=t||ff}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mf(){}mf.prototype=Zr.prototype;function pu(e,n,t){this.props=e,this.context=n,this.refs=pf,this.updater=t||ff}var mu=pu.prototype=new mf;mu.constructor=pu;hf(mu,Zr.prototype);mu.isPureReactComponent=!0;var Pc=Array.isArray,gf=Object.prototype.hasOwnProperty,gu={current:null},vf={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)gf.call(n,r)&&!vf.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fo,type:e,key:o,ref:a,props:i,_owner:gu.current}}function Wm(e,n){return{$$typeof:fo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===fo}function qm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ic=/\/+/g;function bl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?qm(""+e.key):n.toString(36)}function Zo(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fo:case _m:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bl(a,0):r,Pc(i)?(t="",e!=null&&(t=e.replace(Ic,"$&/")+"/"),Zo(i,n,t,"",function(u){return u})):i!=null&&(vu(i)&&(i=Wm(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ic,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Pc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+bl(o,l);a+=Zo(o,n,t,s,i)}else if(s=Hm(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+bl(o,l++),a+=Zo(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function _o(e,n,t){if(e==null)return e;var r=[],i=0;return Zo(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Km(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var cn={current:null},ea={transition:null},Ym={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:ea,ReactCurrentOwner:gu};le.Children={map:_o,forEach:function(e,n,t){_o(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _o(e,function(){n++}),n},toArray:function(e){return _o(e,function(n){return n})||[]},only:function(e){if(!vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Zr;le.Fragment=Lm;le.Profiler=Fm;le.PureComponent=pu;le.StrictMode=Om;le.Suspense=$m;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;le.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hf({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=gu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)gf.call(n,s)&&!vf.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fo,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e){return e={$$typeof:Um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vm,_context:e},e.Consumer=e};le.createElement=yf;le.createFactory=function(e){var n=yf.bind(null,e);return n.type=e,n};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Bm,render:e}};le.isValidElement=vu;le.lazy=function(e){return{$$typeof:jm,_payload:{_status:-1,_result:e},_init:Km}};le.memo=function(e,n){return{$$typeof:zm,type:e,compare:n===void 0?null:n}};le.startTransition=function(e){var n=ea.transition;ea.transition={};try{e()}finally{ea.transition=n}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,n){return cn.current.useCallback(e,n)};le.useContext=function(e){return cn.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return cn.current.useDeferredValue(e)};le.useEffect=function(e,n){return cn.current.useEffect(e,n)};le.useId=function(){return cn.current.useId()};le.useImperativeHandle=function(e,n,t){return cn.current.useImperativeHandle(e,n,t)};le.useInsertionEffect=function(e,n){return cn.current.useInsertionEffect(e,n)};le.useLayoutEffect=function(e,n){return cn.current.useLayoutEffect(e,n)};le.useMemo=function(e,n){return cn.current.useMemo(e,n)};le.useReducer=function(e,n,t){return cn.current.useReducer(e,n,t)};le.useRef=function(e){return cn.current.useRef(e)};le.useState=function(e){return cn.current.useState(e)};le.useSyncExternalStore=function(e,n,t){return cn.current.useSyncExternalStore(e,n,t)};le.useTransition=function(){return cn.current.useTransition()};le.version="18.2.0";(function(e){e.exports=le})(Nm);const ie=Dm(w),Hr=Im({__proto__:null,default:ie},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=w,Gm=Symbol.for("react.element"),Jm=Symbol.for("react.fragment"),Xm=Object.prototype.hasOwnProperty,Zm=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eg={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Xm.call(n,r)&&!eg.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Gm,type:e,key:o,ref:a,props:i,_owner:Zm.current}}za.Fragment=Jm;za.jsx=wf;za.jsxs=wf;(function(e){e.exports=za})(Rm);const tt=qi.Fragment,x=qi.jsx,X=qi.jsxs;var as={},pa={},ng={get exports(){return pa},set exports(e){pa=e}},En={},ls={},tg={get exports(){return ls},set exports(e){ls=e}},bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(z,j){var ee=z.length;z.push(j);e:for(;0<ee;){var ne=ee-1>>>1,be=z[ne];if(0<i(be,j))z[ne]=j,z[ee]=be,ee=ne;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],ee=z.pop();if(ee!==j){z[0]=ee;e:for(var ne=0,be=z.length,Je=be>>>1;ne<Je;){var fn=2*(ne+1)-1,it=z[fn],ue=fn+1,Ie=z[ue];if(0>i(it,ee))ue<be&&0>i(Ie,it)?(z[ne]=Ie,z[ue]=ee,ne=ue):(z[ne]=it,z[fn]=ee,ne=fn);else if(ue<be&&0>i(Ie,ee))z[ne]=Ie,z[ue]=ee,ne=ue;else break e}}return j}function i(z,j){var ee=z.sortIndex-j.sortIndex;return ee!==0?ee:z.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],p=1,h=null,y=3,k=!1,v=!1,c=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var j=t(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=z)r(u),j.sortIndex=j.expirationTime,n(s,j);else break;j=t(u)}}function P(z){if(c=!1,b(z),!v)if(t(s)!==null)v=!0,yn(M);else{var j=t(u);j!==null&&Ge(P,j.startTime-z)}}function M(z,j){v=!1,c&&(c=!1,m(L),L=-1),k=!0;var ee=y;try{for(b(j),h=t(s);h!==null&&(!(h.expirationTime>j)||z&&!ae());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,y=h.priorityLevel;var be=ne(h.expirationTime<=j);j=e.unstable_now(),typeof be=="function"?h.callback=be:h===t(s)&&r(s),b(j)}else r(s);h=t(s)}if(h!==null)var Je=!0;else{var fn=t(u);fn!==null&&Ge(P,fn.startTime-j),Je=!1}return Je}finally{h=null,y=ee,k=!1}}var R=!1,I=null,L=-1,J=5,W=-1;function ae(){return!(e.unstable_now()-W<J)}function he(){if(I!==null){var z=e.unstable_now();W=z;var j=!0;try{j=I(!0,z)}finally{j?ge():(R=!1,I=null)}}else R=!1}var ge;if(typeof d=="function")ge=function(){d(he)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,We=Pe.port2;Pe.port1.onmessage=he,ge=function(){We.postMessage(null)}}else ge=function(){C(he,0)};function yn(z){I=z,R||(R=!0,ge())}function Ge(z,j){L=C(function(){z(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||k||(v=!0,yn(M))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(z){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var ee=y;y=j;try{return z()}finally{y=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=y;y=z;try{return j()}finally{y=ee}},e.unstable_scheduleCallback=function(z,j,ee){var ne=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ne+ee:ne):ee=ne,z){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,z={id:p++,callback:j,priorityLevel:z,startTime:ee,expirationTime:be,sortIndex:-1},ee>ne?(z.sortIndex=ee,n(u,z),t(s)===null&&z===t(u)&&(c?(m(L),L=-1):c=!0,Ge(P,ee-ne))):(z.sortIndex=be,n(s,z),v||k||(v=!0,yn(M))),z},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(z){var j=y;return function(){var ee=y;y=j;try{return z.apply(this,arguments)}finally{y=ee}}}})(bf);(function(e){e.exports=bf})(tg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=w,Cn=ls;function V(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kf=new Set,Ki={};function mr(e,n){Wr(e,n),Wr(e+"Capture",n)}function Wr(e,n){for(Ki[e]=n,e=0;e<n.length;e++)kf.add(n[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=Object.prototype.hasOwnProperty,rg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc={},Rc={};function ig(e){return ss.call(Rc,e)?!0:ss.call(Dc,e)?!1:rg.test(e)?Rc[e]=!0:(Dc[e]=!0,!1)}function og(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ag(e,n,t,r){if(n===null||typeof n>"u"||og(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function dn(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tn[e]=new dn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];tn[n]=new dn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tn[e]=new dn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tn[e]=new dn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tn[e]=new dn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tn[e]=new dn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tn[e]=new dn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tn[e]=new dn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tn[e]=new dn(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(yu,wu);tn[n]=new dn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(yu,wu);tn[n]=new dn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(yu,wu);tn[n]=new dn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tn[e]=new dn(e,1,!1,e.toLowerCase(),null,!1,!1)});tn.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tn[e]=new dn(e,1,!1,e.toLowerCase(),null,!0,!0)});function bu(e,n,t,r){var i=tn.hasOwnProperty(n)?tn[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ag(n,t,i,r)&&(t=null),r||i===null?ig(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var kt=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),xr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),Cf=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),ds=Symbol.for("react.suspense_list"),xu=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Ef=Symbol.for("react.offscreen"),Nc=Symbol.iterator;function mi(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Sl;function Pi(e){if(Sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sl=n&&n[1]||""}return`
`+Sl+e}var kl=!1;function xl(e,n){if(!e||kl)return"";kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{kl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pi(e):""}function lg(e){switch(e.tag){case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case xr:return"Portal";case us:return"Profiler";case Su:return"StrictMode";case cs:return"Suspense";case ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cf:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case ku:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xu:return n=e.displayName||null,n!==null?n:fs(e.type)||"Memo";case At:n=e._payload,e=e._init;try{return fs(e(n))}catch{}}return null}function sg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(n);case 8:return n===Su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ug(e){var n=Tf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oo(e){e._valueTracker||(e._valueTracker=ug(e))}function Mf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Tf(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hs(e,n){var t=n.checked;return Me({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _c(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=jt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Af(e,n){n=n.checked,n!=null&&bu(e,"checked",n,!1)}function ps(e,n){Af(e,n);var t=jt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ms(e,n.type,t):n.hasOwnProperty("defaultValue")&&ms(e,n.type,jt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Lc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ms(e,n,t){(n!=="number"||ma(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ii=Array.isArray;function Fr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+jt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function gs(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(V(91));return Me({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(V(92));if(Ii(t)){if(1<t.length)throw Error(V(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jt(t)}}function Pf(e,n){var t=jt(n.value),r=jt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Fc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function If(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?If(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fo,Df=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Yi(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cg=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){cg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_i[n]=_i[e]})});function Rf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_i.hasOwnProperty(e)&&_i[e]?(""+n).trim():n+"px"}function Nf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Rf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var dg=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(e,n){if(n){if(dg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(V(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(V(61))}if(n.style!=null&&typeof n.style!="object")throw Error(V(62))}}function ws(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bs=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,Vr=null,Ur=null;function Vc(e){if(e=mo(e)){if(typeof Ss!="function")throw Error(V(280));var n=e.stateNode;n&&(n=Ka(n),Ss(e.stateNode,e.type,n))}}function _f(e){Vr?Ur?Ur.push(e):Ur=[e]:Vr=e}function Lf(){if(Vr){var e=Vr,n=Ur;if(Ur=Vr=null,Vc(e),n)for(e=0;e<n.length;e++)Vc(n[e])}}function Of(e,n){return e(n)}function Ff(){}var Cl=!1;function Vf(e,n,t){if(Cl)return e(n,t);Cl=!0;try{return Of(e,n,t)}finally{Cl=!1,(Vr!==null||Ur!==null)&&(Ff(),Lf())}}function Qi(e,n){var t=e.stateNode;if(t===null)return null;var r=Ka(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(V(231,n,typeof t));return t}var ks=!1;if(vt)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){ks=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{ks=!1}function fg(e,n,t,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Li=!1,ga=null,va=!1,xs=null,hg={onError:function(e){Li=!0,ga=e}};function pg(e,n,t,r,i,o,a,l,s){Li=!1,ga=null,fg.apply(hg,arguments)}function mg(e,n,t,r,i,o,a,l,s){if(pg.apply(this,arguments),Li){if(Li){var u=ga;Li=!1,ga=null}else throw Error(V(198));va||(va=!0,xs=u)}}function gr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Uf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Uc(e){if(gr(e)!==e)throw Error(V(188))}function gg(e){var n=e.alternate;if(!n){if(n=gr(e),n===null)throw Error(V(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Uc(i),e;if(o===r)return Uc(i),n;o=o.sibling}throw Error(V(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(t.alternate!==r)throw Error(V(190))}if(t.tag!==3)throw Error(V(188));return t.stateNode.current===t?e:n}function Bf(e){return e=gg(e),e!==null?$f(e):null}function $f(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=$f(e);if(n!==null)return n;e=e.sibling}return null}var zf=Cn.unstable_scheduleCallback,Bc=Cn.unstable_cancelCallback,vg=Cn.unstable_shouldYield,yg=Cn.unstable_requestPaint,_e=Cn.unstable_now,wg=Cn.unstable_getCurrentPriorityLevel,Eu=Cn.unstable_ImmediatePriority,jf=Cn.unstable_UserBlockingPriority,ya=Cn.unstable_NormalPriority,bg=Cn.unstable_LowPriority,Hf=Cn.unstable_IdlePriority,ja=null,Xn=null;function Sg(e){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(ja,e,void 0,(e.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:Cg,kg=Math.log,xg=Math.LN2;function Cg(e){return e>>>=0,e===0?32:31-(kg(e)/xg|0)|0}var Vo=64,Uo=4194304;function Di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wa(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=Di(l):(o&=a,o!==0&&(r=Di(o)))}else a=t&~i,a!==0?r=Di(a):o!==0&&(r=Di(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Hn(n),i=1<<t,r|=e[t],n&=~i;return r}function Eg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Hn(o),l=1<<a,s=i[a];s===-1?(!(l&t)||l&r)&&(i[a]=Eg(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function Cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wf(){var e=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),e}function El(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ho(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Hn(n),e[n]=t}function Mg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Hn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Tu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Hn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ye=0;function qf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kf,Mu,Yf,Qf,Gf,Es=!1,Bo=[],_t=null,Lt=null,Ot=null,Gi=new Map,Ji=new Map,It=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $c(e,n){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(n.pointerId)}}function vi(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=mo(n),n!==null&&Mu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Pg(e,n,t,r,i){switch(n){case"focusin":return _t=vi(_t,e,n,t,r,i),!0;case"dragenter":return Lt=vi(Lt,e,n,t,r,i),!0;case"mouseover":return Ot=vi(Ot,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Gi.set(o,vi(Gi.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ji.set(o,vi(Ji.get(o)||null,e,n,t,r,i)),!0}return!1}function Jf(e){var n=nr(e.target);if(n!==null){var t=gr(n);if(t!==null){if(n=t.tag,n===13){if(n=Uf(t),n!==null){e.blockedOn=n,Gf(e.priority,function(){Yf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function na(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ts(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);bs=r,t.target.dispatchEvent(r),bs=null}else return n=mo(t),n!==null&&Mu(n),e.blockedOn=t,!1;n.shift()}return!0}function zc(e,n,t){na(e)&&t.delete(n)}function Ig(){Es=!1,_t!==null&&na(_t)&&(_t=null),Lt!==null&&na(Lt)&&(Lt=null),Ot!==null&&na(Ot)&&(Ot=null),Gi.forEach(zc),Ji.forEach(zc)}function yi(e,n){e.blockedOn===n&&(e.blockedOn=null,Es||(Es=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Ig)))}function Xi(e){function n(i){return yi(i,e)}if(0<Bo.length){yi(Bo[0],e);for(var t=1;t<Bo.length;t++){var r=Bo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&yi(_t,e),Lt!==null&&yi(Lt,e),Ot!==null&&yi(Ot,e),Gi.forEach(n),Ji.forEach(n),t=0;t<It.length;t++)r=It[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(t=It[0],t.blockedOn===null);)Jf(t),t.blockedOn===null&&It.shift()}var Br=kt.ReactCurrentBatchConfig,ba=!0;function Dg(e,n,t,r){var i=ye,o=Br.transition;Br.transition=null;try{ye=1,Au(e,n,t,r)}finally{ye=i,Br.transition=o}}function Rg(e,n,t,r){var i=ye,o=Br.transition;Br.transition=null;try{ye=4,Au(e,n,t,r)}finally{ye=i,Br.transition=o}}function Au(e,n,t,r){if(ba){var i=Ts(e,n,t,r);if(i===null)Ll(e,n,r,Sa,t),$c(e,r);else if(Pg(i,e,n,t,r))r.stopPropagation();else if($c(e,r),n&4&&-1<Ag.indexOf(e)){for(;i!==null;){var o=mo(i);if(o!==null&&Kf(o),o=Ts(e,n,t,r),o===null&&Ll(e,n,r,Sa,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ll(e,n,r,null,t)}}var Sa=null;function Ts(e,n,t,r){if(Sa=null,e=Cu(r),e=nr(e),e!==null)if(n=gr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Uf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Sa=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case Eu:return 1;case jf:return 4;case ya:case bg:return 16;case Hf:return 536870912;default:return 16}default:return 16}}var Rt=null,Pu=null,ta=null;function Zf(){if(ta)return ta;var e,n=Pu,t=n.length,r,i="value"in Rt?Rt.value:Rt.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return ta=i.slice(e,1<r?1-r:void 0)}function ra(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function jc(){return!1}function Tn(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$o:jc,this.isPropagationStopped=jc,this}return Me(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=Tn(ei),po=Me({},ei,{view:0,detail:0}),Ng=Tn(po),Tl,Ml,wi,Ha=Me({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Tl=e.screenX-wi.screenX,Ml=e.screenY-wi.screenY):Ml=Tl=0,wi=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),Hc=Tn(Ha),_g=Me({},Ha,{dataTransfer:0}),Lg=Tn(_g),Og=Me({},po,{relatedTarget:0}),Al=Tn(Og),Fg=Me({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=Tn(Fg),Ug=Me({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bg=Tn(Ug),$g=Me({},ei,{data:0}),Wc=Tn($g),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hg[e])?!!n[e]:!1}function Du(){return Wg}var qg=Me({},po,{key:function(e){if(e.key){var n=zg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=Tn(qg),Yg=Me({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=Tn(Yg),Qg=Me({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),Gg=Tn(Qg),Jg=Me({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=Tn(Jg),Zg=Me({},Ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=Tn(Zg),nv=[9,13,27,32],Ru=vt&&"CompositionEvent"in window,Oi=null;vt&&"documentMode"in document&&(Oi=document.documentMode);var tv=vt&&"TextEvent"in window&&!Oi,eh=vt&&(!Ru||Oi&&8<Oi&&11>=Oi),Kc=String.fromCharCode(32),Yc=!1;function nh(e,n){switch(e){case"keyup":return nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function rv(e,n){switch(e){case"compositionend":return th(n);case"keypress":return n.which!==32?null:(Yc=!0,Kc);case"textInput":return e=n.data,e===Kc&&Yc?null:e;default:return null}}function iv(e,n){if(Er)return e==="compositionend"||!Ru&&nh(e,n)?(e=Zf(),ta=Pu=Rt=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return eh&&n.locale!=="ko"?null:n.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ov[e.type]:n==="textarea"}function rh(e,n,t,r){_f(r),n=ka(n,"onChange"),0<n.length&&(t=new Iu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Fi=null,Zi=null;function av(e){ph(e,0)}function Wa(e){var n=Ar(e);if(Mf(n))return e}function lv(e,n){if(e==="change")return n}var ih=!1;if(vt){var Pl;if(vt){var Il="oninput"in document;if(!Il){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),Il=typeof Gc.oninput=="function"}Pl=Il}else Pl=!1;ih=Pl&&(!document.documentMode||9<document.documentMode)}function Jc(){Fi&&(Fi.detachEvent("onpropertychange",oh),Zi=Fi=null)}function oh(e){if(e.propertyName==="value"&&Wa(Zi)){var n=[];rh(n,Zi,e,Cu(e)),Vf(av,n)}}function sv(e,n,t){e==="focusin"?(Jc(),Fi=n,Zi=t,Fi.attachEvent("onpropertychange",oh)):e==="focusout"&&Jc()}function uv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wa(Zi)}function cv(e,n){if(e==="click")return Wa(n)}function dv(e,n){if(e==="input"||e==="change")return Wa(n)}function fv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:fv;function eo(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ss.call(n,i)||!qn(e[i],n[i]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,n){var t=Xc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Xc(t)}}function ah(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ah(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lh(){for(var e=window,n=ma();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ma(e.document)}return n}function Nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hv(e){var n=lh(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ah(t.ownerDocument.documentElement,t)){if(r!==null&&Nu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zc(t,o);var a=Zc(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pv=vt&&"documentMode"in document&&11>=document.documentMode,Tr=null,Ms=null,Vi=null,As=!1;function ed(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;As||Tr==null||Tr!==ma(r)||(r=Tr,"selectionStart"in r&&Nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vi&&eo(Vi,r)||(Vi=r,r=ka(Ms,"onSelect"),0<r.length&&(n=new Iu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tr)))}function zo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Mr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Dl={},sh={};vt&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function qa(e){if(Dl[e])return Dl[e];if(!Mr[e])return e;var n=Mr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in sh)return Dl[e]=n[t];return e}var uh=qa("animationend"),ch=qa("animationiteration"),dh=qa("animationstart"),fh=qa("transitionend"),hh=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,n){hh.set(e,n),mr(n,[e])}for(var Rl=0;Rl<nd.length;Rl++){var Nl=nd[Rl],mv=Nl.toLowerCase(),gv=Nl[0].toUpperCase()+Nl.slice(1);qt(mv,"on"+gv)}qt(uh,"onAnimationEnd");qt(ch,"onAnimationIteration");qt(dh,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(fh,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function td(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,mg(r,n,void 0,e),e.currentTarget=null}function ph(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;td(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;td(i,l,u),o=s}}}if(va)throw e=xs,va=!1,xs=null,e}function Se(e,n){var t=n[Ns];t===void 0&&(t=n[Ns]=new Set);var r=e+"__bubble";t.has(r)||(mh(n,e,2,!1),t.add(r))}function _l(e,n,t){var r=0;n&&(r|=4),mh(t,e,r,n)}var jo="_reactListening"+Math.random().toString(36).slice(2);function no(e){if(!e[jo]){e[jo]=!0,kf.forEach(function(t){t!=="selectionchange"&&(vv.has(t)||_l(t,!1,e),_l(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jo]||(n[jo]=!0,_l("selectionchange",!1,n))}}function mh(e,n,t,r){switch(Xf(n)){case 1:var i=Dg;break;case 4:i=Rg;break;default:i=Au}t=i.bind(null,n,t,e),i=void 0,!ks||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ll(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Vf(function(){var u=o,p=Cu(t),h=[];e:{var y=hh.get(e);if(y!==void 0){var k=Iu,v=e;switch(e){case"keypress":if(ra(t)===0)break e;case"keydown":case"keyup":k=Kg;break;case"focusin":v="focus",k=Al;break;case"focusout":v="blur",k=Al;break;case"beforeblur":case"afterblur":k=Al;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Gg;break;case uh:case ch:case dh:k=Vg;break;case fh:k=Xg;break;case"scroll":k=Ng;break;case"wheel":k=ev;break;case"copy":case"cut":case"paste":k=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=qc}var c=(n&4)!==0,C=!c&&e==="scroll",m=c?y!==null?y+"Capture":null:y;c=[];for(var d=u,b;d!==null;){b=d;var P=b.stateNode;if(b.tag===5&&P!==null&&(b=P,m!==null&&(P=Qi(d,m),P!=null&&c.push(to(d,P,b)))),C)break;d=d.return}0<c.length&&(y=new k(y,v,null,t,p),h.push({event:y,listeners:c}))}}if(!(n&7)){e:{if(y=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",y&&t!==bs&&(v=t.relatedTarget||t.fromElement)&&(nr(v)||v[yt]))break e;if((k||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,k?(v=t.relatedTarget||t.toElement,k=u,v=v?nr(v):null,v!==null&&(C=gr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(k=null,v=u),k!==v)){if(c=Hc,P="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(c=qc,P="onPointerLeave",m="onPointerEnter",d="pointer"),C=k==null?y:Ar(k),b=v==null?y:Ar(v),y=new c(P,d+"leave",k,t,p),y.target=C,y.relatedTarget=b,P=null,nr(p)===u&&(c=new c(m,d+"enter",v,t,p),c.target=b,c.relatedTarget=C,P=c),C=P,k&&v)n:{for(c=k,m=v,d=0,b=c;b;b=kr(b))d++;for(b=0,P=m;P;P=kr(P))b++;for(;0<d-b;)c=kr(c),d--;for(;0<b-d;)m=kr(m),b--;for(;d--;){if(c===m||m!==null&&c===m.alternate)break n;c=kr(c),m=kr(m)}c=null}else c=null;k!==null&&rd(h,y,k,c,!1),v!==null&&C!==null&&rd(h,C,v,c,!0)}}e:{if(y=u?Ar(u):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var M=lv;else if(Qc(y))if(ih)M=dv;else{M=uv;var R=sv}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=cv);if(M&&(M=M(e,u))){rh(h,M,t,p);break e}R&&R(e,y,u),e==="focusout"&&(R=y._wrapperState)&&R.controlled&&y.type==="number"&&ms(y,"number",y.value)}switch(R=u?Ar(u):window,e){case"focusin":(Qc(R)||R.contentEditable==="true")&&(Tr=R,Ms=u,Vi=null);break;case"focusout":Vi=Ms=Tr=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,ed(h,t,p);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":ed(h,t,p)}var I;if(Ru)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Er?nh(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(eh&&t.locale!=="ko"&&(Er||L!=="onCompositionStart"?L==="onCompositionEnd"&&Er&&(I=Zf()):(Rt=p,Pu="value"in Rt?Rt.value:Rt.textContent,Er=!0)),R=ka(u,L),0<R.length&&(L=new Wc(L,e,null,t,p),h.push({event:L,listeners:R}),I?L.data=I:(I=th(t),I!==null&&(L.data=I)))),(I=tv?rv(e,t):iv(e,t))&&(u=ka(u,"onBeforeInput"),0<u.length&&(p=new Wc("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:u}),p.data=I))}ph(h,n)})}function to(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ka(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qi(e,t),o!=null&&r.unshift(to(e,o,i)),o=Qi(e,n),o!=null&&r.push(to(e,o,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Qi(t,o),s!=null&&a.unshift(to(t,s,l))):i||(s=Qi(t,o),s!=null&&a.push(to(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var yv=/\r\n?/g,wv=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(yv,`
`).replace(wv,"")}function Ho(e,n,t){if(n=id(n),id(e)!==n&&t)throw Error(V(425))}function xa(){}var Ps=null,Is=null;function Ds(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rs=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Sv=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(kv)}:Rs;function kv(e){setTimeout(function(){throw e})}function Ol(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Xi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Xi(n)}function Ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),Jn="__reactFiber$"+ni,ro="__reactProps$"+ni,yt="__reactContainer$"+ni,Ns="__reactEvents$"+ni,xv="__reactListeners$"+ni,Cv="__reactHandles$"+ni;function nr(e){var n=e[Jn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[yt]||t[Jn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ad(e);e!==null;){if(t=e[Jn])return t;e=ad(e)}return n}e=t,t=e.parentNode}return null}function mo(e){return e=e[Jn]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function Ka(e){return e[ro]||null}var _s=[],Pr=-1;function Kt(e){return{current:e}}function ke(e){0>Pr||(e.current=_s[Pr],_s[Pr]=null,Pr--)}function we(e,n){Pr++,_s[Pr]=e.current,e.current=n}var Ht={},ln=Kt(Ht),mn=Kt(!1),sr=Ht;function qr(e,n){var t=e.type.contextTypes;if(!t)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function gn(e){return e=e.childContextTypes,e!=null}function Ca(){ke(mn),ke(ln)}function ld(e,n,t){if(ln.current!==Ht)throw Error(V(168));we(ln,n),we(mn,t)}function gh(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(V(108,sg(e)||"Unknown",i));return Me({},t,r)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,sr=ln.current,we(ln,e),we(mn,mn.current),!0}function sd(e,n,t){var r=e.stateNode;if(!r)throw Error(V(169));t?(e=gh(e,n,sr),r.__reactInternalMemoizedMergedChildContext=e,ke(mn),ke(ln),we(ln,e)):ke(mn),we(mn,t)}var ct=null,Ya=!1,Fl=!1;function vh(e){ct===null?ct=[e]:ct.push(e)}function Ev(e){Ya=!0,vh(e)}function Yt(){if(!Fl&&ct!==null){Fl=!0;var e=0,n=ye;try{var t=ct;for(ye=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}ct=null,Ya=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),zf(Eu,Yt),i}finally{ye=n,Fl=!1}}return null}var Ir=[],Dr=0,Ta=null,Ma=0,Dn=[],Rn=0,ur=null,ft=1,ht="";function Zt(e,n){Ir[Dr++]=Ma,Ir[Dr++]=Ta,Ta=e,Ma=n}function yh(e,n,t){Dn[Rn++]=ft,Dn[Rn++]=ht,Dn[Rn++]=ur,ur=e;var r=ft;e=ht;var i=32-Hn(r)-1;r&=~(1<<i),t+=1;var o=32-Hn(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,ft=1<<32-Hn(n)+i|t<<i|r,ht=o+e}else ft=1<<o|t<<i|r,ht=e}function _u(e){e.return!==null&&(Zt(e,1),yh(e,1,0))}function Lu(e){for(;e===Ta;)Ta=Ir[--Dr],Ir[Dr]=null,Ma=Ir[--Dr],Ir[Dr]=null;for(;e===ur;)ur=Dn[--Rn],Dn[Rn]=null,ht=Dn[--Rn],Dn[Rn]=null,ft=Dn[--Rn],Dn[Rn]=null}var xn=null,kn=null,xe=!1,zn=null;function wh(e,n){var t=Nn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ud(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xn=e,kn=Ft(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xn=e,kn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ur!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Nn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xn=e,kn=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Os(e){if(xe){var n=kn;if(n){var t=n;if(!ud(e,n)){if(Ls(e))throw Error(V(418));n=Ft(t.nextSibling);var r=xn;n&&ud(e,n)?wh(r,t):(e.flags=e.flags&-4097|2,xe=!1,xn=e)}}else{if(Ls(e))throw Error(V(418));e.flags=e.flags&-4097|2,xe=!1,xn=e}}}function cd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xn=e}function Wo(e){if(e!==xn)return!1;if(!xe)return cd(e),xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ds(e.type,e.memoizedProps)),n&&(n=kn)){if(Ls(e))throw bh(),Error(V(418));for(;n;)wh(e,n),n=Ft(n.nextSibling)}if(cd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){kn=Ft(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}kn=null}}else kn=xn?Ft(e.stateNode.nextSibling):null;return!0}function bh(){for(var e=kn;e;)e=Ft(e.nextSibling)}function Kr(){kn=xn=null,xe=!1}function Ou(e){zn===null?zn=[e]:zn.push(e)}var Tv=kt.ReactCurrentBatchConfig;function Bn(e,n){if(e&&e.defaultProps){n=Me({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Aa=Kt(null),Pa=null,Rr=null,Fu=null;function Vu(){Fu=Rr=Pa=null}function Uu(e){var n=Aa.current;ke(Aa),e._currentValue=n}function Fs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function $r(e,n){Pa=e,Fu=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pn=!0),e.firstContext=null)}function Ln(e){var n=e._currentValue;if(Fu!==e)if(e={context:e,memoizedValue:n,next:null},Rr===null){if(Pa===null)throw Error(V(308));Rr=e,Pa.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return n}var tr=null;function Bu(e){tr===null?tr=[e]:tr.push(e)}function Sh(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Bu(n)):(t.next=i.next,i.next=t),n.interleaved=t,wt(e,r)}function wt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pt=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Vt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,wt(e,t)}return i=r.interleaved,i===null?(n.next=n,Bu(r)):(n.next=i.next,i.next=n),r.interleaved=n,wt(e,t)}function ia(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Tu(e,t)}}function dd(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ia(e,n,t,r){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;a=0,p=u=s=null,l=o;do{var y=l.lane,k=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,c=l;switch(y=n,k=t,c.tag){case 1:if(v=c.payload,typeof v=="function"){h=v.call(k,h,y);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=c.payload,y=typeof v=="function"?v.call(k,h,y):v,y==null)break e;h=Me({},h,y);break e;case 2:Pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=k,s=h):p=p.next=k,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(p===null&&(s=h),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);dr|=a,e.lanes=a,e.memoizedState=h}}function fd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var xh=new Sf.Component().refs;function Vs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Me({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Qa={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=un(),i=Bt(e),o=mt(r,i);o.payload=n,t!=null&&(o.callback=t),n=Vt(e,o,i),n!==null&&(Wn(n,e,i,r),ia(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=un(),i=Bt(e),o=mt(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Vt(e,o,i),n!==null&&(Wn(n,e,i,r),ia(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=un(),r=Bt(e),i=mt(t,r);i.tag=2,n!=null&&(i.callback=n),n=Vt(e,i,r),n!==null&&(Wn(n,e,r,t),ia(n,e,r))}};function hd(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!eo(t,r)||!eo(i,o):!0}function Ch(e,n,t){var r=!1,i=Ht,o=n.contextType;return typeof o=="object"&&o!==null?o=Ln(o):(i=gn(n)?sr:ln.current,r=n.contextTypes,o=(r=r!=null)?qr(e,i):Ht),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Qa,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function pd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Qa.enqueueReplaceState(n,n.state,null)}function Us(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=xh,$u(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ln(o):(o=gn(n)?sr:ln.current,i.context=qr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Vs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Qa.enqueueReplaceState(i,i.state,null),Ia(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(V(309));var r=t.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;l===xh&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(V(284));if(!t._owner)throw Error(V(290,e))}return e}function qo(e,n){throw e=Object.prototype.toString.call(n),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function md(e){var n=e._init;return n(e._payload)}function Eh(e){function n(m,d){if(e){var b=m.deletions;b===null?(m.deletions=[d],m.flags|=16):b.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=$t(m,d),m.index=0,m.sibling=null,m}function o(m,d,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<d?(m.flags|=2,d):b):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,b,P){return d===null||d.tag!==6?(d=Hl(b,m.mode,P),d.return=m,d):(d=i(d,b),d.return=m,d)}function s(m,d,b,P){var M=b.type;return M===Cr?p(m,d,b.props.children,P,b.key):d!==null&&(d.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===At&&md(M)===d.type)?(P=i(d,b.props),P.ref=bi(m,d,b),P.return=m,P):(P=ca(b.type,b.key,b.props,null,m.mode,P),P.ref=bi(m,d,b),P.return=m,P)}function u(m,d,b,P){return d===null||d.tag!==4||d.stateNode.containerInfo!==b.containerInfo||d.stateNode.implementation!==b.implementation?(d=Wl(b,m.mode,P),d.return=m,d):(d=i(d,b.children||[]),d.return=m,d)}function p(m,d,b,P,M){return d===null||d.tag!==7?(d=lr(b,m.mode,P,M),d.return=m,d):(d=i(d,b),d.return=m,d)}function h(m,d,b){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hl(""+d,m.mode,b),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Lo:return b=ca(d.type,d.key,d.props,null,m.mode,b),b.ref=bi(m,null,d),b.return=m,b;case xr:return d=Wl(d,m.mode,b),d.return=m,d;case At:var P=d._init;return h(m,P(d._payload),b)}if(Ii(d)||mi(d))return d=lr(d,m.mode,b,null),d.return=m,d;qo(m,d)}return null}function y(m,d,b,P){var M=d!==null?d.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return M!==null?null:l(m,d,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Lo:return b.key===M?s(m,d,b,P):null;case xr:return b.key===M?u(m,d,b,P):null;case At:return M=b._init,y(m,d,M(b._payload),P)}if(Ii(b)||mi(b))return M!==null?null:p(m,d,b,P,null);qo(m,b)}return null}function k(m,d,b,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return m=m.get(b)||null,l(d,m,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Lo:return m=m.get(P.key===null?b:P.key)||null,s(d,m,P,M);case xr:return m=m.get(P.key===null?b:P.key)||null,u(d,m,P,M);case At:var R=P._init;return k(m,d,b,R(P._payload),M)}if(Ii(P)||mi(P))return m=m.get(b)||null,p(d,m,P,M,null);qo(d,P)}return null}function v(m,d,b,P){for(var M=null,R=null,I=d,L=d=0,J=null;I!==null&&L<b.length;L++){I.index>L?(J=I,I=null):J=I.sibling;var W=y(m,I,b[L],P);if(W===null){I===null&&(I=J);break}e&&I&&W.alternate===null&&n(m,I),d=o(W,d,L),R===null?M=W:R.sibling=W,R=W,I=J}if(L===b.length)return t(m,I),xe&&Zt(m,L),M;if(I===null){for(;L<b.length;L++)I=h(m,b[L],P),I!==null&&(d=o(I,d,L),R===null?M=I:R.sibling=I,R=I);return xe&&Zt(m,L),M}for(I=r(m,I);L<b.length;L++)J=k(I,m,L,b[L],P),J!==null&&(e&&J.alternate!==null&&I.delete(J.key===null?L:J.key),d=o(J,d,L),R===null?M=J:R.sibling=J,R=J);return e&&I.forEach(function(ae){return n(m,ae)}),xe&&Zt(m,L),M}function c(m,d,b,P){var M=mi(b);if(typeof M!="function")throw Error(V(150));if(b=M.call(b),b==null)throw Error(V(151));for(var R=M=null,I=d,L=d=0,J=null,W=b.next();I!==null&&!W.done;L++,W=b.next()){I.index>L?(J=I,I=null):J=I.sibling;var ae=y(m,I,W.value,P);if(ae===null){I===null&&(I=J);break}e&&I&&ae.alternate===null&&n(m,I),d=o(ae,d,L),R===null?M=ae:R.sibling=ae,R=ae,I=J}if(W.done)return t(m,I),xe&&Zt(m,L),M;if(I===null){for(;!W.done;L++,W=b.next())W=h(m,W.value,P),W!==null&&(d=o(W,d,L),R===null?M=W:R.sibling=W,R=W);return xe&&Zt(m,L),M}for(I=r(m,I);!W.done;L++,W=b.next())W=k(I,m,L,W.value,P),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?L:W.key),d=o(W,d,L),R===null?M=W:R.sibling=W,R=W);return e&&I.forEach(function(he){return n(m,he)}),xe&&Zt(m,L),M}function C(m,d,b,P){if(typeof b=="object"&&b!==null&&b.type===Cr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Lo:e:{for(var M=b.key,R=d;R!==null;){if(R.key===M){if(M=b.type,M===Cr){if(R.tag===7){t(m,R.sibling),d=i(R,b.props.children),d.return=m,m=d;break e}}else if(R.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===At&&md(M)===R.type){t(m,R.sibling),d=i(R,b.props),d.ref=bi(m,R,b),d.return=m,m=d;break e}t(m,R);break}else n(m,R);R=R.sibling}b.type===Cr?(d=lr(b.props.children,m.mode,P,b.key),d.return=m,m=d):(P=ca(b.type,b.key,b.props,null,m.mode,P),P.ref=bi(m,d,b),P.return=m,m=P)}return a(m);case xr:e:{for(R=b.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===b.containerInfo&&d.stateNode.implementation===b.implementation){t(m,d.sibling),d=i(d,b.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else n(m,d);d=d.sibling}d=Wl(b,m.mode,P),d.return=m,m=d}return a(m);case At:return R=b._init,C(m,d,R(b._payload),P)}if(Ii(b))return v(m,d,b,P);if(mi(b))return c(m,d,b,P);qo(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,d!==null&&d.tag===6?(t(m,d.sibling),d=i(d,b),d.return=m,m=d):(t(m,d),d=Hl(b,m.mode,P),d.return=m,m=d),a(m)):t(m,d)}return C}var Yr=Eh(!0),Th=Eh(!1),go={},Zn=Kt(go),io=Kt(go),oo=Kt(go);function rr(e){if(e===go)throw Error(V(174));return e}function zu(e,n){switch(we(oo,n),we(io,e),we(Zn,go),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:vs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=vs(n,e)}ke(Zn),we(Zn,n)}function Qr(){ke(Zn),ke(io),ke(oo)}function Mh(e){rr(oo.current);var n=rr(Zn.current),t=vs(n,e.type);n!==t&&(we(io,e),we(Zn,t))}function ju(e){io.current===e&&(ke(Zn),ke(io))}var Ee=Kt(0);function Da(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vl=[];function Hu(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var oa=kt.ReactCurrentDispatcher,Ul=kt.ReactCurrentBatchConfig,cr=0,Te=null,ze=null,Ke=null,Ra=!1,Ui=!1,ao=0,Mv=0;function rn(){throw Error(V(321))}function Wu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!qn(e[t],n[t]))return!1;return!0}function qu(e,n,t,r,i,o){if(cr=o,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,oa.current=e===null||e.memoizedState===null?Dv:Rv,e=t(r,i),Ui){o=0;do{if(Ui=!1,ao=0,25<=o)throw Error(V(301));o+=1,Ke=ze=null,n.updateQueue=null,oa.current=Nv,e=t(r,i)}while(Ui)}if(oa.current=Na,n=ze!==null&&ze.next!==null,cr=0,Ke=ze=Te=null,Ra=!1,n)throw Error(V(300));return e}function Ku(){var e=ao!==0;return ao=0,e}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Te.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function On(){if(ze===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=Ke===null?Te.memoizedState:Ke.next;if(n!==null)Ke=n,ze=e;else{if(e===null)throw Error(V(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ke===null?Te.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function lo(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=On(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var p=u.lane;if((cr&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,Te.lanes|=p,dr|=p}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,qn(r,n.memoizedState)||(pn=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Te.lanes|=o,dr|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function $l(e){var n=On(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);qn(o,n.memoizedState)||(pn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Ah(){}function Ph(e,n){var t=Te,r=On(),i=n(),o=!qn(r.memoizedState,i);if(o&&(r.memoizedState=i,pn=!0),r=r.queue,Yu(Rh.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ke!==null&&Ke.memoizedState.tag&1){if(t.flags|=2048,so(9,Dh.bind(null,t,r,i,n),void 0,null),Ye===null)throw Error(V(349));cr&30||Ih(t,n,i)}return i}function Ih(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Dh(e,n,t,r){n.value=t,n.getSnapshot=r,Nh(n)&&_h(e)}function Rh(e,n,t){return t(function(){Nh(n)&&_h(e)})}function Nh(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!qn(e,t)}catch{return!0}}function _h(e){var n=wt(e,1);n!==null&&Wn(n,e,1,-1)}function gd(e){var n=Qn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},n.queue=e,e=e.dispatch=Iv.bind(null,Te,e),[n.memoizedState,e]}function so(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Lh(){return On().memoizedState}function aa(e,n,t,r){var i=Qn();Te.flags|=e,i.memoizedState=so(1|n,t,void 0,r===void 0?null:r)}function Ga(e,n,t,r){var i=On();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&Wu(r,a.deps)){i.memoizedState=so(n,t,o,r);return}}Te.flags|=e,i.memoizedState=so(1|n,t,o,r)}function vd(e,n){return aa(8390656,8,e,n)}function Yu(e,n){return Ga(2048,8,e,n)}function Oh(e,n){return Ga(4,2,e,n)}function Fh(e,n){return Ga(4,4,e,n)}function Vh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Uh(e,n,t){return t=t!=null?t.concat([e]):null,Ga(4,4,Vh.bind(null,n,e),t)}function Qu(){}function Bh(e,n){var t=On();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function $h(e,n){var t=On();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function zh(e,n,t){return cr&21?(qn(t,n)||(t=Wf(),Te.lanes|=t,dr|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pn=!0),e.memoizedState=t)}function Av(e,n){var t=ye;ye=t!==0&&4>t?t:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),n()}finally{ye=t,Ul.transition=r}}function jh(){return On().memoizedState}function Pv(e,n,t){var r=Bt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Hh(e))Wh(n,t);else if(t=Sh(e,n,t,r),t!==null){var i=un();Wn(t,e,r,i),qh(t,n,r)}}function Iv(e,n,t){var r=Bt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Hh(e))Wh(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,qn(l,a)){var s=n.interleaved;s===null?(i.next=i,Bu(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Sh(e,n,i,r),t!==null&&(i=un(),Wn(t,e,r,i),qh(t,n,r))}}function Hh(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function Wh(e,n){Ui=Ra=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function qh(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Tu(e,t)}}var Na={readContext:Ln,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},Dv={readContext:Ln,useCallback:function(e,n){return Qn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:vd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,aa(4194308,4,Vh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return aa(4194308,4,e,n)},useInsertionEffect:function(e,n){return aa(4,2,e,n)},useMemo:function(e,n){var t=Qn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Pv.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var n=Qn();return e={current:e},n.memoizedState=e},useState:gd,useDebugValue:Qu,useDeferredValue:function(e){return Qn().memoizedState=e},useTransition:function(){var e=gd(!1),n=e[0];return e=Av.bind(null,e[1]),Qn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Te,i=Qn();if(xe){if(t===void 0)throw Error(V(407));t=t()}else{if(t=n(),Ye===null)throw Error(V(349));cr&30||Ih(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,vd(Rh.bind(null,r,o,e),[e]),r.flags|=2048,so(9,Dh.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Qn(),n=Ye.identifierPrefix;if(xe){var t=ht,r=ft;t=(r&~(1<<32-Hn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ao++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Mv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Rv={readContext:Ln,useCallback:Bh,useContext:Ln,useEffect:Yu,useImperativeHandle:Uh,useInsertionEffect:Oh,useLayoutEffect:Fh,useMemo:$h,useReducer:Bl,useRef:Lh,useState:function(){return Bl(lo)},useDebugValue:Qu,useDeferredValue:function(e){var n=On();return zh(n,ze.memoizedState,e)},useTransition:function(){var e=Bl(lo)[0],n=On().memoizedState;return[e,n]},useMutableSource:Ah,useSyncExternalStore:Ph,useId:jh,unstable_isNewReconciler:!1},Nv={readContext:Ln,useCallback:Bh,useContext:Ln,useEffect:Yu,useImperativeHandle:Uh,useInsertionEffect:Oh,useLayoutEffect:Fh,useMemo:$h,useReducer:$l,useRef:Lh,useState:function(){return $l(lo)},useDebugValue:Qu,useDeferredValue:function(e){var n=On();return ze===null?n.memoizedState=e:zh(n,ze.memoizedState,e)},useTransition:function(){var e=$l(lo)[0],n=On().memoizedState;return[e,n]},useMutableSource:Ah,useSyncExternalStore:Ph,useId:jh,unstable_isNewReconciler:!1};function Gr(e,n){try{var t="",r=n;do t+=lg(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function zl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Bs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _v=typeof WeakMap=="function"?WeakMap:Map;function Kh(e,n,t){t=mt(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){La||(La=!0,Gs=r),Bs(e,n)},t}function Yh(e,n,t){t=mt(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Bs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Bs(e,n),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function yd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _v;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Yv.bind(null,e,n,t),n.then(e,e))}function wd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function bd(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=mt(-1,1),n.tag=2,Vt(t,n,1))),t.lanes|=1),e)}var Lv=kt.ReactCurrentOwner,pn=!1;function sn(e,n,t,r){n.child=e===null?Th(n,null,t,r):Yr(n,e.child,t,r)}function Sd(e,n,t,r,i){t=t.render;var o=n.ref;return $r(n,i),r=qu(e,n,t,r,o,i),t=Ku(),e!==null&&!pn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bt(e,n,i)):(xe&&t&&_u(n),n.flags|=1,sn(e,n,r,i),n.child)}function kd(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!rc(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Qh(e,n,o,r,i)):(e=ca(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:eo,t(a,r)&&e.ref===n.ref)return bt(e,n,i)}return n.flags|=1,e=$t(o,r),e.ref=n.ref,e.return=n,n.child=e}function Qh(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(eo(o,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pn=!0);else return n.lanes=e.lanes,bt(e,n,i)}return $s(e,n,t,r,i)}function Gh(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(_r,Sn),Sn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,we(_r,Sn),Sn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,we(_r,Sn),Sn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,we(_r,Sn),Sn|=r;return sn(e,n,i,t),n.child}function Jh(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function $s(e,n,t,r,i){var o=gn(t)?sr:ln.current;return o=qr(n,o),$r(n,i),t=qu(e,n,t,r,o,i),r=Ku(),e!==null&&!pn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,bt(e,n,i)):(xe&&r&&_u(n),n.flags|=1,sn(e,n,t,i),n.child)}function xd(e,n,t,r,i){if(gn(t)){var o=!0;Ea(n)}else o=!1;if($r(n,i),n.stateNode===null)la(e,n),Ch(n,t,r),Us(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=gn(t)?sr:ln.current,u=qr(n,u));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&pd(n,a,r,u),Pt=!1;var y=n.memoizedState;a.state=y,Ia(n,r,a,i),s=n.memoizedState,l!==r||y!==s||mn.current||Pt?(typeof p=="function"&&(Vs(n,t,p,r),s=n.memoizedState),(l=Pt||hd(n,t,l,r,y,s,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,kh(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Bn(n.type,l),a.props=u,h=n.pendingProps,y=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ln(s):(s=gn(t)?sr:ln.current,s=qr(n,s));var k=t.getDerivedStateFromProps;(p=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||y!==s)&&pd(n,a,r,s),Pt=!1,y=n.memoizedState,a.state=y,Ia(n,r,a,i);var v=n.memoizedState;l!==h||y!==v||mn.current||Pt?(typeof k=="function"&&(Vs(n,t,k,r),v=n.memoizedState),(u=Pt||hd(n,t,u,r,y,v,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),r=!1)}return zs(e,n,t,r,o,i)}function zs(e,n,t,r,i,o){Jh(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&sd(n,t,!1),bt(e,n,o);r=n.stateNode,Lv.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Yr(n,e.child,null,o),n.child=Yr(n,null,l,o)):sn(e,n,l,o),n.memoizedState=r.state,i&&sd(n,t,!0),n.child}function Xh(e){var n=e.stateNode;n.pendingContext?ld(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ld(e,n.context,!1),zu(e,n.containerInfo)}function Cd(e,n,t,r,i){return Kr(),Ou(i),n.flags|=256,sn(e,n,t,r),n.child}var js={dehydrated:null,treeContext:null,retryLane:0};function Hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zh(e,n,t){var r=n.pendingProps,i=Ee.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ee,i&1),e===null)return Os(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Za(a,r,0,null),e=lr(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Hs(t),n.memoizedState=js,e):Gu(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ov(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=$t(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=$t(l,o):(o=lr(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?Hs(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=js,r}return o=e.child,e=o.sibling,r=$t(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Gu(e,n){return n=Za({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ko(e,n,t,r){return r!==null&&Ou(r),Yr(n,e.child,null,t),e=Gu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ov(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=zl(Error(V(422))),Ko(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Za({mode:"visible",children:r.children},i,0,null),o=lr(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Yr(n,e.child,null,a),n.child.memoizedState=Hs(a),n.memoizedState=js,o);if(!(n.mode&1))return Ko(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=zl(o,r,void 0),Ko(e,n,a,r)}if(l=(a&e.childLanes)!==0,pn||l){if(r=Ye,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),Wn(r,e,i,-1))}return tc(),r=zl(Error(V(421))),Ko(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Qv.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,kn=Ft(i.nextSibling),xn=n,xe=!0,zn=null,e!==null&&(Dn[Rn++]=ft,Dn[Rn++]=ht,Dn[Rn++]=ur,ft=e.id,ht=e.overflow,ur=n),n=Gu(n,r.children),n.flags|=4096,n)}function Ed(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fs(e.return,n,t)}function jl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function ep(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(sn(e,n,r.children,t),r=Ee.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,t,n);else if(e.tag===19)Ed(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ee,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Da(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),jl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Da(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}jl(n,!0,t,null,o);break;case"together":jl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function la(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function bt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dr|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(V(153));if(n.child!==null){for(e=n.child,t=$t(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=$t(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Fv(e,n,t){switch(n.tag){case 3:Xh(n),Kr();break;case 5:Mh(n);break;case 1:gn(n.type)&&Ea(n);break;case 4:zu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;we(Aa,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(we(Ee,Ee.current&1),n.flags|=128,null):t&n.child.childLanes?Zh(e,n,t):(we(Ee,Ee.current&1),e=bt(e,n,t),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return ep(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ee,Ee.current),r)break;return null;case 22:case 23:return n.lanes=0,Gh(e,n,t)}return bt(e,n,t)}var np,Ws,tp,rp;np=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ws=function(){};tp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,rr(Zn.current);var o=null;switch(t){case"input":i=hs(e,i),r=hs(e,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=gs(e,i),r=gs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xa)}ys(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ki.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ki.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Se("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};rp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Si(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function on(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Vv(e,n,t){var r=n.pendingProps;switch(Lu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(n),null;case 1:return gn(n.type)&&Ca(),on(n),null;case 3:return r=n.stateNode,Qr(),ke(mn),ke(ln),Hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,zn!==null&&(Zs(zn),zn=null))),Ws(e,n),on(n),null;case 5:ju(n);var i=rr(oo.current);if(t=n.type,e!==null&&n.stateNode!=null)tp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(V(166));return on(n),null}if(e=rr(Zn.current),Wo(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Jn]=n,r[ro]=o,e=(n.mode&1)!==0,t){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Ri.length;i++)Se(Ri[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":_c(r,o),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Se("invalid",r);break;case"textarea":Oc(r,o),Se("invalid",r)}ys(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ho(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ho(r.textContent,l,e),i=["children",""+l]):Ki.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Se("scroll",r)}switch(t){case"input":Oo(r),Lc(r,o,!0);break;case"textarea":Oo(r),Fc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xa)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=If(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Jn]=n,e[ro]=r,np(e,n,!1,!1),n.stateNode=e;e:{switch(a=ws(t,r),t){case"dialog":Se("cancel",e),Se("close",e),i=r;break;case"iframe":case"object":case"embed":Se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ri.length;i++)Se(Ri[i],e);i=r;break;case"source":Se("error",e),i=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=r;break;case"details":Se("toggle",e),i=r;break;case"input":_c(e,r),i=hs(e,r),Se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Se("invalid",e);break;case"textarea":Oc(e,r),i=gs(e,r),Se("invalid",e);break;default:i=r}ys(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Nf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Df(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Yi(e,s):typeof s=="number"&&Yi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ki.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Se("scroll",e):s!=null&&bu(e,o,s,a))}switch(t){case"input":Oo(e),Lc(e,r,!1);break;case"textarea":Oo(e),Fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return on(n),null;case 6:if(e&&n.stateNode!=null)rp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(V(166));if(t=rr(oo.current),rr(Zn.current),Wo(n)){if(r=n.stateNode,t=n.memoizedProps,r[Jn]=n,(o=r.nodeValue!==t)&&(e=xn,e!==null))switch(e.tag){case 3:Ho(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Jn]=n,n.stateNode=r}return on(n),null;case 13:if(ke(Ee),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&kn!==null&&n.mode&1&&!(n.flags&128))bh(),Kr(),n.flags|=98560,o=!1;else if(o=Wo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Jn]=n}else Kr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;on(n),o=!1}else zn!==null&&(Zs(zn),zn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Ee.current&1?je===0&&(je=3):tc())),n.updateQueue!==null&&(n.flags|=4),on(n),null);case 4:return Qr(),Ws(e,n),e===null&&no(n.stateNode.containerInfo),on(n),null;case 10:return Uu(n.type._context),on(n),null;case 17:return gn(n.type)&&Ca(),on(n),null;case 19:if(ke(Ee),o=n.memoizedState,o===null)return on(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)Si(o,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Da(e),a!==null){for(n.flags|=128,Si(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return we(Ee,Ee.current&1|2),n.child}e=e.sibling}o.tail!==null&&_e()>Jr&&(n.flags|=128,r=!0,Si(o,!1),n.lanes=4194304)}else{if(!r)if(e=Da(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Si(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!xe)return on(n),null}else 2*_e()-o.renderingStartTime>Jr&&t!==1073741824&&(n.flags|=128,r=!0,Si(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=_e(),n.sibling=null,t=Ee.current,we(Ee,r?t&1|2:t&1),n):(on(n),null);case 22:case 23:return nc(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Sn&1073741824&&(on(n),n.subtreeFlags&6&&(n.flags|=8192)):on(n),null;case 24:return null;case 25:return null}throw Error(V(156,n.tag))}function Uv(e,n){switch(Lu(n),n.tag){case 1:return gn(n.type)&&Ca(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qr(),ke(mn),ke(ln),Hu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ju(n),null;case 13:if(ke(Ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(V(340));Kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ke(Ee),null;case 4:return Qr(),null;case 10:return Uu(n.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Yo=!1,an=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,H=null;function Nr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ae(e,n,r)}else t.current=null}function qs(e,n,t){try{t()}catch(r){Ae(e,n,r)}}var Td=!1;function $v(e,n){if(Ps=ba,e=lh(),Nu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,p=0,h=e,y=null;n:for(;;){for(var k;h!==t||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(k=h.firstChild)!==null;)y=h,h=k;for(;;){if(h===e)break n;if(y===t&&++u===i&&(l=a),y===o&&++p===r&&(s=a),(k=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=k}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Is={focusedElem:e,selectionRange:t},ba=!1,H=n;H!==null;)if(n=H,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,H=e;else for(;H!==null;){n=H;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var c=v.memoizedProps,C=v.memoizedState,m=n.stateNode,d=m.getSnapshotBeforeUpdate(n.elementType===n.type?c:Bn(n.type,c),C);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(P){Ae(n,n.return,P)}if(e=n.sibling,e!==null){e.return=n.return,H=e;break}H=n.return}return v=Td,Td=!1,v}function Bi(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&qs(n,t,o)}i=i.next}while(i!==r)}}function Ja(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ks(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ip(e){var n=e.alternate;n!==null&&(e.alternate=null,ip(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Jn],delete n[ro],delete n[Ns],delete n[xv],delete n[Cv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function op(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ys(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=xa));else if(r!==4&&(e=e.child,e!==null))for(Ys(e,n,t),e=e.sibling;e!==null;)Ys(e,n,t),e=e.sibling}function Qs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qs(e,n,t),e=e.sibling;e!==null;)Qs(e,n,t),e=e.sibling}var Ze=null,$n=!1;function Mt(e,n,t){for(t=t.child;t!==null;)ap(e,n,t),t=t.sibling}function ap(e,n,t){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(ja,t)}catch{}switch(t.tag){case 5:an||Nr(t,n);case 6:var r=Ze,i=$n;Ze=null,Mt(e,n,t),Ze=r,$n=i,Ze!==null&&($n?(e=Ze,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ze.removeChild(t.stateNode));break;case 18:Ze!==null&&($n?(e=Ze,t=t.stateNode,e.nodeType===8?Ol(e.parentNode,t):e.nodeType===1&&Ol(e,t),Xi(e)):Ol(Ze,t.stateNode));break;case 4:r=Ze,i=$n,Ze=t.stateNode.containerInfo,$n=!0,Mt(e,n,t),Ze=r,$n=i;break;case 0:case 11:case 14:case 15:if(!an&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&qs(t,n,a),i=i.next}while(i!==r)}Mt(e,n,t);break;case 1:if(!an&&(Nr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Ae(t,n,l)}Mt(e,n,t);break;case 21:Mt(e,n,t);break;case 22:t.mode&1?(an=(r=an)||t.memoizedState!==null,Mt(e,n,t),an=r):Mt(e,n,t);break;default:Mt(e,n,t)}}function Ad(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bv),n.forEach(function(r){var i=Gv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Vn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,$n=!1;break e;case 3:Ze=l.stateNode.containerInfo,$n=!0;break e;case 4:Ze=l.stateNode.containerInfo,$n=!0;break e}l=l.return}if(Ze===null)throw Error(V(160));ap(o,a,i),Ze=null,$n=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ae(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)lp(n,e),n=n.sibling}function lp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vn(n,e),Yn(e),r&4){try{Bi(3,e,e.return),Ja(3,e)}catch(c){Ae(e,e.return,c)}try{Bi(5,e,e.return)}catch(c){Ae(e,e.return,c)}}break;case 1:Vn(n,e),Yn(e),r&512&&t!==null&&Nr(t,t.return);break;case 5:if(Vn(n,e),Yn(e),r&512&&t!==null&&Nr(t,t.return),e.flags&32){var i=e.stateNode;try{Yi(i,"")}catch(c){Ae(e,e.return,c)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Af(i,o),ws(l,a);var u=ws(l,o);for(a=0;a<s.length;a+=2){var p=s[a],h=s[a+1];p==="style"?Nf(i,h):p==="dangerouslySetInnerHTML"?Df(i,h):p==="children"?Yi(i,h):bu(i,p,h,u)}switch(l){case"input":ps(i,o);break;case"textarea":Pf(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Fr(i,!!o.multiple,k,!1):y!==!!o.multiple&&(o.defaultValue!=null?Fr(i,!!o.multiple,o.defaultValue,!0):Fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ro]=o}catch(c){Ae(e,e.return,c)}}break;case 6:if(Vn(n,e),Yn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(c){Ae(e,e.return,c)}}break;case 3:if(Vn(n,e),Yn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Xi(n.containerInfo)}catch(c){Ae(e,e.return,c)}break;case 4:Vn(n,e),Yn(e);break;case 13:Vn(n,e),Yn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zu=_e())),r&4&&Ad(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(an=(u=an)||p,Vn(n,e),an=u):Vn(n,e),Yn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(H=e,p=e.child;p!==null;){for(h=H=p;H!==null;){switch(y=H,k=y.child,y.tag){case 0:case 11:case 14:case 15:Bi(4,y,y.return);break;case 1:Nr(y,y.return);var v=y.stateNode;if(typeof v.componentWillUnmount=="function"){r=y,t=y.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(c){Ae(r,t,c)}}break;case 5:Nr(y,y.return);break;case 22:if(y.memoizedState!==null){Id(h);continue}}k!==null?(k.return=y,H=k):Id(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Rf("display",a))}catch(c){Ae(e,e.return,c)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(c){Ae(e,e.return,c)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vn(n,e),Yn(e),r&4&&Ad(e);break;case 21:break;default:Vn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(op(t)){var r=t;break e}t=t.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yi(i,""),r.flags&=-33);var o=Md(e);Qs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Md(e);Ys(e,l,a);break;default:throw Error(V(161))}}catch(s){Ae(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zv(e,n,t){H=e,sp(e)}function sp(e,n,t){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Yo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||an;l=Yo;var u=an;if(Yo=a,(an=s)&&!u)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?Dd(i):s!==null?(s.return=a,H=s):Dd(i);for(;o!==null;)H=o,sp(o),o=o.sibling;H=i,Yo=l,an=u}Pd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):Pd(e)}}function Pd(e){for(;H!==null;){var n=H;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:an||Ja(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!an)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Bn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&fd(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}fd(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Xi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}an||n.flags&512&&Ks(n)}catch(y){Ae(n,n.return,y)}}if(n===e){H=null;break}if(t=n.sibling,t!==null){t.return=n.return,H=t;break}H=n.return}}function Id(e){for(;H!==null;){var n=H;if(n===e){H=null;break}var t=n.sibling;if(t!==null){t.return=n.return,H=t;break}H=n.return}}function Dd(e){for(;H!==null;){var n=H;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ja(4,n)}catch(s){Ae(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){Ae(n,i,s)}}var o=n.return;try{Ks(n)}catch(s){Ae(n,o,s)}break;case 5:var a=n.return;try{Ks(n)}catch(s){Ae(n,a,s)}}}catch(s){Ae(n,n.return,s)}if(n===e){H=null;break}var l=n.sibling;if(l!==null){l.return=n.return,H=l;break}H=n.return}}var jv=Math.ceil,_a=kt.ReactCurrentDispatcher,Ju=kt.ReactCurrentOwner,_n=kt.ReactCurrentBatchConfig,fe=0,Ye=null,Ue=null,nn=0,Sn=0,_r=Kt(0),je=0,uo=null,dr=0,Xa=0,Xu=0,$i=null,hn=null,Zu=0,Jr=1/0,st=null,La=!1,Gs=null,Ut=null,Qo=!1,Nt=null,Oa=0,zi=0,Js=null,sa=-1,ua=0;function un(){return fe&6?_e():sa!==-1?sa:sa=_e()}function Bt(e){return e.mode&1?fe&2&&nn!==0?nn&-nn:Tv.transition!==null?(ua===0&&(ua=Wf()),ua):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function Wn(e,n,t,r){if(50<zi)throw zi=0,Js=null,Error(V(185));ho(e,t,r),(!(fe&2)||e!==Ye)&&(e===Ye&&(!(fe&2)&&(Xa|=t),je===4&&Dt(e,nn)),vn(e,r),t===1&&fe===0&&!(n.mode&1)&&(Jr=_e()+500,Ya&&Yt()))}function vn(e,n){var t=e.callbackNode;Tg(e,n);var r=wa(e,e===Ye?nn:0);if(r===0)t!==null&&Bc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Bc(t),n===1)e.tag===0?Ev(Rd.bind(null,e)):vh(Rd.bind(null,e)),Sv(function(){!(fe&6)&&Yt()}),t=null;else{switch(qf(r)){case 1:t=Eu;break;case 4:t=jf;break;case 16:t=ya;break;case 536870912:t=Hf;break;default:t=ya}t=gp(t,up.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function up(e,n){if(sa=-1,ua=0,fe&6)throw Error(V(327));var t=e.callbackNode;if(zr()&&e.callbackNode!==t)return null;var r=wa(e,e===Ye?nn:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Fa(e,r);else{n=r;var i=fe;fe|=2;var o=dp();(Ye!==e||nn!==n)&&(st=null,Jr=_e()+500,ar(e,n));do try{qv();break}catch(l){cp(e,l)}while(1);Vu(),_a.current=o,fe=i,Ue!==null?n=0:(Ye=null,nn=0,n=je)}if(n!==0){if(n===2&&(i=Cs(e),i!==0&&(r=i,n=Xs(e,i))),n===1)throw t=uo,ar(e,0),Dt(e,r),vn(e,_e()),t;if(n===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hv(i)&&(n=Fa(e,r),n===2&&(o=Cs(e),o!==0&&(r=o,n=Xs(e,o))),n===1))throw t=uo,ar(e,0),Dt(e,r),vn(e,_e()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(V(345));case 2:er(e,hn,st);break;case 3:if(Dt(e,r),(r&130023424)===r&&(n=Zu+500-_e(),10<n)){if(wa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){un(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rs(er.bind(null,e,hn,st),n);break}er(e,hn,st);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Hn(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jv(r/1960))-r,10<r){e.timeoutHandle=Rs(er.bind(null,e,hn,st),r);break}er(e,hn,st);break;case 5:er(e,hn,st);break;default:throw Error(V(329))}}}return vn(e,_e()),e.callbackNode===t?up.bind(null,e):null}function Xs(e,n){var t=$i;return e.current.memoizedState.isDehydrated&&(ar(e,n).flags|=256),e=Fa(e,n),e!==2&&(n=hn,hn=t,n!==null&&Zs(n)),e}function Zs(e){hn===null?hn=e:hn.push.apply(hn,e)}function Hv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!qn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dt(e,n){for(n&=~Xu,n&=~Xa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Hn(n),r=1<<t;e[t]=-1,n&=~r}}function Rd(e){if(fe&6)throw Error(V(327));zr();var n=wa(e,0);if(!(n&1))return vn(e,_e()),null;var t=Fa(e,n);if(e.tag!==0&&t===2){var r=Cs(e);r!==0&&(n=r,t=Xs(e,r))}if(t===1)throw t=uo,ar(e,0),Dt(e,n),vn(e,_e()),t;if(t===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,er(e,hn,st),vn(e,_e()),null}function ec(e,n){var t=fe;fe|=1;try{return e(n)}finally{fe=t,fe===0&&(Jr=_e()+500,Ya&&Yt())}}function fr(e){Nt!==null&&Nt.tag===0&&!(fe&6)&&zr();var n=fe;fe|=1;var t=_n.transition,r=ye;try{if(_n.transition=null,ye=1,e)return e()}finally{ye=r,_n.transition=t,fe=n,!(fe&6)&&Yt()}}function nc(){Sn=_r.current,ke(_r)}function ar(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,bv(t)),Ue!==null)for(t=Ue.return;t!==null;){var r=t;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ca();break;case 3:Qr(),ke(mn),ke(ln),Hu();break;case 5:ju(r);break;case 4:Qr();break;case 13:ke(Ee);break;case 19:ke(Ee);break;case 10:Uu(r.type._context);break;case 22:case 23:nc()}t=t.return}if(Ye=e,Ue=e=$t(e.current,null),nn=Sn=n,je=0,uo=null,Xu=Xa=dr=0,hn=$i=null,tr!==null){for(n=0;n<tr.length;n++)if(t=tr[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}tr=null}return e}function cp(e,n){do{var t=Ue;try{if(Vu(),oa.current=Na,Ra){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ra=!1}if(cr=0,Ke=ze=Te=null,Ui=!1,ao=0,Ju.current=null,t===null||t.return===null){je=1,uo=n,Ue=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=nn,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=wd(a);if(k!==null){k.flags&=-257,bd(k,a,l,o,n),k.mode&1&&yd(o,u,n),n=k,s=u;var v=n.updateQueue;if(v===null){var c=new Set;c.add(s),n.updateQueue=c}else v.add(s);break e}else{if(!(n&1)){yd(o,u,n),tc();break e}s=Error(V(426))}}else if(xe&&l.mode&1){var C=wd(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),bd(C,a,l,o,n),Ou(Gr(s,l));break e}}o=s=Gr(s,l),je!==4&&(je=2),$i===null?$i=[o]:$i.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=Kh(o,s,n);dd(o,m);break e;case 1:l=s;var d=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ut===null||!Ut.has(b)))){o.flags|=65536,n&=-n,o.lanes|=n;var P=Yh(o,l,n);dd(o,P);break e}}o=o.return}while(o!==null)}hp(t)}catch(M){n=M,Ue===t&&t!==null&&(Ue=t=t.return);continue}break}while(1)}function dp(){var e=_a.current;return _a.current=Na,e===null?Na:e}function tc(){(je===0||je===3||je===2)&&(je=4),Ye===null||!(dr&268435455)&&!(Xa&268435455)||Dt(Ye,nn)}function Fa(e,n){var t=fe;fe|=2;var r=dp();(Ye!==e||nn!==n)&&(st=null,ar(e,n));do try{Wv();break}catch(i){cp(e,i)}while(1);if(Vu(),fe=t,_a.current=r,Ue!==null)throw Error(V(261));return Ye=null,nn=0,je}function Wv(){for(;Ue!==null;)fp(Ue)}function qv(){for(;Ue!==null&&!vg();)fp(Ue)}function fp(e){var n=mp(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,n===null?hp(e):Ue=n,Ju.current=null}function hp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Uv(t,n),t!==null){t.flags&=32767,Ue=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Ue=null;return}}else if(t=Vv(t,n,Sn),t!==null){Ue=t;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);je===0&&(je=5)}function er(e,n,t){var r=ye,i=_n.transition;try{_n.transition=null,ye=1,Kv(e,n,t,r)}finally{_n.transition=i,ye=r}return null}function Kv(e,n,t,r){do zr();while(Nt!==null);if(fe&6)throw Error(V(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Mg(e,o),e===Ye&&(Ue=Ye=null,nn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Qo||(Qo=!0,gp(ya,function(){return zr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=_n.transition,_n.transition=null;var a=ye;ye=1;var l=fe;fe|=4,Ju.current=null,$v(e,t),lp(t,e),hv(Is),ba=!!Ps,Is=Ps=null,e.current=t,zv(t),yg(),fe=l,ye=a,_n.transition=o}else e.current=t;if(Qo&&(Qo=!1,Nt=e,Oa=i),o=e.pendingLanes,o===0&&(Ut=null),Sg(t.stateNode),vn(e,_e()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(La)throw La=!1,e=Gs,Gs=null,e;return Oa&1&&e.tag!==0&&zr(),o=e.pendingLanes,o&1?e===Js?zi++:(zi=0,Js=e):zi=0,Yt(),null}function zr(){if(Nt!==null){var e=qf(Oa),n=_n.transition,t=ye;try{if(_n.transition=null,ye=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,Oa=0,fe&6)throw Error(V(331));var i=fe;for(fe|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(H=u;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Bi(8,p,o)}var h=p.child;if(h!==null)h.return=p,H=h;else for(;H!==null;){p=H;var y=p.sibling,k=p.return;if(ip(p),p===u){H=null;break}if(y!==null){y.return=k,H=y;break}H=k}}}var v=o.alternate;if(v!==null){var c=v.child;if(c!==null){v.child=null;do{var C=c.sibling;c.sibling=null,c=C}while(c!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,H=m;break e}H=o.return}}var d=e.current;for(H=d;H!==null;){a=H;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,H=b;else e:for(a=d;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ja(9,l)}}catch(M){Ae(l,l.return,M)}if(l===a){H=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,H=P;break e}H=l.return}}if(fe=i,Yt(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(ja,e)}catch{}r=!0}return r}finally{ye=t,_n.transition=n}}return!1}function Nd(e,n,t){n=Gr(t,n),n=Kh(e,n,1),e=Vt(e,n,1),n=un(),e!==null&&(ho(e,1,n),vn(e,n))}function Ae(e,n,t){if(e.tag===3)Nd(e,e,t);else for(;n!==null;){if(n.tag===3){Nd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Gr(t,e),e=Yh(n,e,1),n=Vt(n,e,1),e=un(),n!==null&&(ho(n,1,e),vn(n,e));break}}n=n.return}}function Yv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=un(),e.pingedLanes|=e.suspendedLanes&t,Ye===e&&(nn&t)===t&&(je===4||je===3&&(nn&130023424)===nn&&500>_e()-Zu?ar(e,0):Xu|=t),vn(e,n)}function pp(e,n){n===0&&(e.mode&1?(n=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):n=1);var t=un();e=wt(e,n),e!==null&&(ho(e,n,t),vn(e,t))}function Qv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),pp(e,t)}function Gv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(n),pp(e,t)}var mp;mp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||mn.current)pn=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pn=!1,Fv(e,n,t);pn=!!(e.flags&131072)}else pn=!1,xe&&n.flags&1048576&&yh(n,Ma,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;la(e,n),e=n.pendingProps;var i=qr(n,ln.current);$r(n,t),i=qu(null,n,r,e,i,t);var o=Ku();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,gn(r)?(o=!0,Ea(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$u(n),i.updater=Qa,n.stateNode=i,i._reactInternals=n,Us(n,r,e,t),n=zs(null,n,r,!0,o,t)):(n.tag=0,xe&&o&&_u(n),sn(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(la(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Xv(r),e=Bn(r,e),i){case 0:n=$s(null,n,r,e,t);break e;case 1:n=xd(null,n,r,e,t);break e;case 11:n=Sd(null,n,r,e,t);break e;case 14:n=kd(null,n,r,Bn(r.type,e),t);break e}throw Error(V(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),$s(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),xd(e,n,r,i,t);case 3:e:{if(Xh(n),e===null)throw Error(V(387));r=n.pendingProps,o=n.memoizedState,i=o.element,kh(e,n),Ia(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Gr(Error(V(423)),n),n=Cd(e,n,r,t,i);break e}else if(r!==i){i=Gr(Error(V(424)),n),n=Cd(e,n,r,t,i);break e}else for(kn=Ft(n.stateNode.containerInfo.firstChild),xn=n,xe=!0,zn=null,t=Th(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Kr(),r===i){n=bt(e,n,t);break e}sn(e,n,r,t)}n=n.child}return n;case 5:return Mh(n),e===null&&Os(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ds(r,i)?a=null:o!==null&&Ds(r,o)&&(n.flags|=32),Jh(e,n),sn(e,n,a,t),n.child;case 6:return e===null&&Os(n),null;case 13:return Zh(e,n,t);case 4:return zu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Yr(n,null,r,t):sn(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),Sd(e,n,r,i,t);case 7:return sn(e,n,n.pendingProps,t),n.child;case 8:return sn(e,n,n.pendingProps.children,t),n.child;case 12:return sn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,we(Aa,r._currentValue),r._currentValue=a,o!==null)if(qn(o.value,a)){if(o.children===i.children&&!mn.current){n=bt(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=mt(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Fs(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Fs(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}sn(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,$r(n,t),i=Ln(i),r=r(i),n.flags|=1,sn(e,n,r,t),n.child;case 14:return r=n.type,i=Bn(r,n.pendingProps),i=Bn(r.type,i),kd(e,n,r,i,t);case 15:return Qh(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),la(e,n),n.tag=1,gn(r)?(e=!0,Ea(n)):e=!1,$r(n,t),Ch(n,r,i),Us(n,r,i,t),zs(null,n,r,!0,e,t);case 19:return ep(e,n,t);case 22:return Gh(e,n,t)}throw Error(V(156,n.tag))};function gp(e,n){return zf(e,n)}function Jv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,n,t,r){return new Jv(e,n,t,r)}function rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xv(e){if(typeof e=="function")return rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===xu)return 14}return 2}function $t(e,n){var t=e.alternate;return t===null?(t=Nn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ca(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")rc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Cr:return lr(t.children,i,o,n);case Su:a=8,i|=8;break;case us:return e=Nn(12,t,n,i|2),e.elementType=us,e.lanes=o,e;case cs:return e=Nn(13,t,n,i),e.elementType=cs,e.lanes=o,e;case ds:return e=Nn(19,t,n,i),e.elementType=ds,e.lanes=o,e;case Ef:return Za(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:a=10;break e;case Cf:a=9;break e;case ku:a=11;break e;case xu:a=14;break e;case At:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return n=Nn(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function lr(e,n,t,r){return e=Nn(7,e,r,n),e.lanes=t,e}function Za(e,n,t,r){return e=Nn(22,e,r,n),e.elementType=Ef,e.lanes=t,e.stateNode={isHidden:!1},e}function Hl(e,n,t){return e=Nn(6,e,null,n),e.lanes=t,e}function Wl(e,n,t){return n=Nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zv(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ic(e,n,t,r,i,o,a,l,s){return e=new Zv(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Nn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(o),e}function e0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function vp(e){if(!e)return Ht;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(V(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(gn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(V(171))}if(e.tag===1){var t=e.type;if(gn(t))return gh(e,t,n)}return n}function yp(e,n,t,r,i,o,a,l,s){return e=ic(t,r,!0,e,i,o,a,l,s),e.context=vp(null),t=e.current,r=un(),i=Bt(t),o=mt(r,i),o.callback=n??null,Vt(t,o,i),e.current.lanes=i,ho(e,i,r),vn(e,r),e}function el(e,n,t,r){var i=n.current,o=un(),a=Bt(i);return t=vp(t),n.context===null?n.context=t:n.pendingContext=t,n=mt(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Vt(i,n,a),e!==null&&(Wn(e,i,a,o),ia(e,i,a)),a}function Va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _d(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function oc(e,n){_d(e,n),(e=e.alternate)&&_d(e,n)}function n0(){return null}var wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ac(e){this._internalRoot=e}nl.prototype.render=ac.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(V(409));el(e,n,null,null)};nl.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fr(function(){el(null,e,null,null)}),n[yt]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<It.length&&n!==0&&n<It[t].priority;t++);It.splice(t,0,e),t===0&&Jf(e)}};function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function t0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Va(a);o.call(u)}}var a=yp(n,r,e,0,null,!1,!1,"",Ld);return e._reactRootContainer=a,e[yt]=a.current,no(e.nodeType===8?e.parentNode:e),fr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Va(s);l.call(u)}}var s=ic(e,0,!1,null,null,!1,!1,"",Ld);return e._reactRootContainer=s,e[yt]=s.current,no(e.nodeType===8?e.parentNode:e),fr(function(){el(n,s,t,r)}),s}function rl(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Va(a);l.call(s)}}el(n,a,e,i)}else a=t0(t,n,e,i,r);return Va(a)}Kf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Di(n.pendingLanes);t!==0&&(Tu(n,t|1),vn(n,_e()),!(fe&6)&&(Jr=_e()+500,Yt()))}break;case 13:fr(function(){var r=wt(e,1);if(r!==null){var i=un();Wn(r,e,1,i)}}),oc(e,1)}};Mu=function(e){if(e.tag===13){var n=wt(e,134217728);if(n!==null){var t=un();Wn(n,e,134217728,t)}oc(e,134217728)}};Yf=function(e){if(e.tag===13){var n=Bt(e),t=wt(e,n);if(t!==null){var r=un();Wn(t,e,n,r)}oc(e,n)}};Qf=function(){return ye};Gf=function(e,n){var t=ye;try{return ye=e,n()}finally{ye=t}};Ss=function(e,n,t){switch(n){case"input":if(ps(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ka(r);if(!i)throw Error(V(90));Mf(r),ps(r,i)}}}break;case"textarea":Pf(e,t);break;case"select":n=t.value,n!=null&&Fr(e,!!t.multiple,n,!1)}};Of=ec;Ff=fr;var r0={usingClientEntryPoint:!1,Events:[mo,Ar,Ka,_f,Lf,ec]},ki={findFiberByHostInstance:nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i0={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bf(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{ja=Go.inject(i0),Xn=Go}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;En.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(n))throw Error(V(200));return e0(e,n,null,t)};En.createRoot=function(e,n){if(!lc(e))throw Error(V(299));var t=!1,r="",i=wp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ic(e,1,!1,null,null,t,!1,r,i),e[yt]=n.current,no(e.nodeType===8?e.parentNode:e),new ac(n)};En.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Bf(n),e=e===null?null:e.stateNode,e};En.flushSync=function(e){return fr(e)};En.hydrate=function(e,n,t){if(!tl(n))throw Error(V(200));return rl(null,e,n,!0,t)};En.hydrateRoot=function(e,n,t){if(!lc(e))throw Error(V(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=wp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=yp(n,null,e,1,t??null,i,!1,o,a),e[yt]=n.current,no(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new nl(n)};En.render=function(e,n,t){if(!tl(n))throw Error(V(200));return rl(null,e,n,!1,t)};En.unmountComponentAtNode=function(e){if(!tl(e))throw Error(V(40));return e._reactRootContainer?(fr(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};En.unstable_batchedUpdates=ec;En.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!tl(t))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return rl(e,n,t,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=En})(ng);var Od=pa;as.createRoot=Od.createRoot,as.hydrateRoot=Od.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ce.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const Fd="popstate";function o0(e){e===void 0&&(e={});function n(r,i){let{pathname:o,search:a,hash:l}=r.location;return co("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:rt(i)}return l0(n,t,null,e)}function te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Xr(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function a0(){return Math.random().toString(36).substr(2,8)}function Vd(e,n){return{usr:e.state,key:e.key,idx:n}}function co(e,n,t,r){return t===void 0&&(t=null),ce({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xt(n):n,{state:t,key:n&&n.key||r||a0()})}function rt(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function xt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function l0(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Ne.Pop,s=null,u=p();u==null&&(u=0,a.replaceState(ce({},a.state,{idx:u}),""));function p(){return(a.state||{idx:null}).idx}function h(){l=Ne.Pop;let C=p(),m=C==null?null:C-u;u=C,s&&s({action:l,location:c.location,delta:m})}function y(C,m){l=Ne.Push;let d=co(c.location,C,m);t&&t(d,C),u=p()+1;let b=Vd(d,u),P=c.createHref(d);try{a.pushState(b,"",P)}catch{i.location.assign(P)}o&&s&&s({action:l,location:c.location,delta:1})}function k(C,m){l=Ne.Replace;let d=co(c.location,C,m);t&&t(d,C),u=p();let b=Vd(d,u),P=c.createHref(d);a.replaceState(b,"",P),o&&s&&s({action:l,location:c.location,delta:0})}function v(C){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:rt(C);return te(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let c={get action(){return l},get location(){return e(i,a)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Fd,h),s=C,()=>{i.removeEventListener(Fd,h),s=null}},createHref(C){return n(i,C)},createURL:v,encodeLocation(C){let m=v(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:y,replace:k,go(C){return a.go(C)}};return c}var $e;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($e||($e={}));const s0=new Set(["lazy","caseSensitive","path","id","index","children"]);function u0(e){return e.index===!0}function bp(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...t,o],l=typeof i.id=="string"?i.id:a.join("-");if(te(i.index!==!0||!i.children,"Cannot specify children on an index route"),te(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),u0(i)){let s=ce({},i,{hasErrorBoundary:n(i),id:l});return r[l]=s,s}else{let s=ce({},i,{id:l,hasErrorBoundary:n(i),children:void 0});return r[l]=s,i.children&&(s.children=bp(i.children,n,a,r)),s}})}function Lr(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?xt(n):n,i=vo(r.pathname||"/",t);if(i==null)return null;let o=Sp(e);c0(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=w0(o[l],k0(i));return a}function Sp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=et([r,s.relativePath]),p=t.concat(s);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sp(o.children,n,p,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:v0(u,o.index),routesMeta:p})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of kp(o.path))i(o,a,s)}),n}function kp(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=kp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function c0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:y0(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const d0=/^:\w+$/,f0=3,h0=2,p0=1,m0=10,g0=-2,Ud=e=>e==="*";function v0(e,n){let t=e.split("/"),r=t.length;return t.some(Ud)&&(r+=g0),n&&(r+=h0),t.filter(i=>!Ud(i)).reduce((i,o)=>i+(d0.test(o)?f0:o===""?p0:m0),r)}function y0(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function w0(e,n){let{routesMeta:t}=e,r={},i="/",o=[];for(let a=0;a<t.length;++a){let l=t[a],s=a===t.length-1,u=i==="/"?n:n.slice(i.length)||"/",p=b0({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let h=l.route;o.push({params:r,pathname:et([i,p.pathname]),pathnameBase:T0(et([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=et([i,p.pathnameBase]))}return o}function b0(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=S0(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,p,h)=>{if(p==="*"){let y=l[h]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[p]=x0(l[h]||"",p),u},{}),pathname:o,pathnameBase:a,pattern:e}}function S0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Xr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function k0(e){try{return decodeURI(e)}catch(n){return Xr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function x0(e,n){try{return decodeURIComponent(e)}catch(t){return Xr(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function vo(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function C0(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?xt(e):e;return{pathname:t?t.startsWith("/")?t:E0(t,n):n,search:M0(r),hash:A0(i)}}function E0(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ql(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function il(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function sc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=xt(e):(i=ce({},e),te(!i.pathname||!i.pathname.includes("?"),ql("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),ql("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),ql("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=t;else{let h=n.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),h-=1;i.pathname=y.join("/")}l=h>=0?n[h]:"/"}let s=C0(i,l),u=a&&a!=="/"&&a.endsWith("/"),p=(o||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const et=e=>e.join("/").replace(/\/\/+/g,"/"),T0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,A0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Bd extends Error{}class P0{constructor(n,t){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],te(n&&typeof n=="object"&&!Array.isArray(n),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((o,a)=>r=a),this.controller=new AbortController;let i=()=>r(new Bd("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(n).reduce((o,a)=>{let[l,s]=a;return Object.assign(o,{[l]:this.trackPromise(l,s)})},{}),this.done&&this.unlistenAbortSignal(),this.init=t}trackPromise(n,t){if(!(t instanceof Promise))return t;this.deferredKeys.push(n),this.pendingKeysSet.add(n);let r=Promise.race([t,this.abortPromise]).then(i=>this.onSettle(r,n,null,i),i=>this.onSettle(r,n,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(n,t,r,i){return this.controller.signal.aborted&&r instanceof Bd?(this.unlistenAbortSignal(),Object.defineProperty(n,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(t),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(n,"_error",{get:()=>r}),this.emit(!1,t),Promise.reject(r)):(Object.defineProperty(n,"_data",{get:()=>i}),this.emit(!1,t),i))}emit(n,t){this.subscribers.forEach(r=>r(n,t))}subscribe(n){return this.subscribers.add(n),()=>this.subscribers.delete(n)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((n,t)=>this.pendingKeysSet.delete(t)),this.emit(!0)}async resolveData(n){let t=!1;if(!this.done){let r=()=>this.cancel();n.addEventListener("abort",r),t=await new Promise(i=>{this.subscribe(o=>{n.removeEventListener("abort",r),(o||this.done)&&i(o)})})}return t}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return te(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((n,t)=>{let[r,i]=t;return Object.assign(n,{[r]:D0(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function I0(e){return e instanceof Promise&&e._tracked===!0}function D0(e){if(!I0(e))return e;if(e._error)throw e._error;return e._data}class uc{constructor(n,t,r,i){i===void 0&&(i=!1),this.status=n,this.statusText=t||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function xp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cp=["post","put","patch","delete"],R0=new Set(Cp),N0=["get",...Cp],_0=new Set(N0),L0=new Set([301,302,303,307,308]),O0=new Set([307,308]),Kl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},F0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},$d={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V0=!Tp,U0=e=>Boolean(e.hasErrorBoundary);function B0(e){te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n=e.detectErrorBoundary||U0,t={},r=bp(e.routes,n,void 0,t),i,o=null,a=new Set,l=null,s=null,u=null,p=e.hydrationData!=null,h=Lr(r,e.history.location,e.basename),y=null;if(h==null){let D=Gn(404,{pathname:e.history.location.pathname}),{matches:N,route:O}=Kd(r);h=N,y={[O.id]:D}}let k=!h.some(D=>D.route.lazy)&&(!h.some(D=>D.route.loader)||e.hydrationData!=null),v,c={historyAction:e.history.action,location:e.history.location,matches:h,initialized:k,navigation:Kl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},C=Ne.Pop,m=!1,d,b=!1,P=!1,M=[],R=[],I=new Map,L=0,J=-1,W=new Map,ae=new Set,he=new Map,ge=new Map,Pe=new Map,We=!1;function yn(){if(o=e.history.listen(O=>{let{action:q,location:Y,delta:Z}=O;if(We){We=!1;return}Xr(Pe.size===0||Z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=si({currentLocation:c.location,nextLocation:Y,historyAction:q});if(G&&Z!=null){We=!0,e.history.go(Z*-1),Ct(G,{state:"blocked",location:Y,proceed(){Ct(G,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),e.history.go(Z)},reset(){ot(G),j({blockers:new Map(v.state.blockers)})}});return}return Je(q,Y)}),c.initialized)return v;let D=c.matches.filter(O=>O.route.lazy);if(D.length===0)return Je(Ne.Pop,c.location),v;let N=D.map(O=>eu(O.route,n,t));return Promise.all(N).then(()=>{!c.matches.some(q=>q.route.loader)||e.hydrationData!=null?j({initialized:!0}):Je(Ne.Pop,c.location)}),v}function Ge(){o&&o(),a.clear(),d&&d.abort(),c.fetchers.forEach((D,N)=>ai(N)),c.blockers.forEach((D,N)=>ot(N))}function z(D){return a.add(D),()=>a.delete(D)}function j(D){c=ce({},c,D),a.forEach(N=>N(c))}function ee(D,N){var O,q;let Y=c.actionData!=null&&c.navigation.formMethod!=null&&ut(c.navigation.formMethod)&&c.navigation.state==="loading"&&((O=D.state)==null?void 0:O._isRedirect)!==!0,Z;N.actionData?Object.keys(N.actionData).length>0?Z=N.actionData:Z=null:Y?Z=c.actionData:Z=null;let G=N.loaderData?qd(c.loaderData,N.loaderData,N.matches||[],N.errors):c.loaderData;for(let[Q]of Pe)ot(Q);let re=m===!0||c.navigation.formMethod!=null&&ut(c.navigation.formMethod)&&((q=D.state)==null?void 0:q._isRedirect)!==!0;i&&(r=i,i=void 0),j(ce({},N,{actionData:Z,loaderData:G,historyAction:C,location:D,initialized:!0,navigation:Kl,revalidation:"idle",restoreScrollPosition:ui(D,N.matches||c.matches),preventScrollReset:re,blockers:new Map(c.blockers)})),b||C===Ne.Pop||(C===Ne.Push?e.history.push(D,D.state):C===Ne.Replace&&e.history.replace(D,D.state)),C=Ne.Pop,m=!1,b=!1,P=!1,M=[],R=[]}async function ne(D,N){if(typeof D=="number"){e.history.go(D);return}let{path:O,submission:q,error:Y}=zd(D,N),Z=c.location,G=co(c.location,O,N&&N.state);G=ce({},G,e.history.encodeLocation(G));let re=N&&N.replace!=null?N.replace:void 0,Q=Ne.Push;re===!0?Q=Ne.Replace:re===!1||q!=null&&ut(q.formMethod)&&q.formAction===c.location.pathname+c.location.search&&(Q=Ne.Replace);let Fe=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,se=si({currentLocation:Z,nextLocation:G,historyAction:Q});if(se){Ct(se,{state:"blocked",location:G,proceed(){Ct(se,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),ne(D,N)},reset(){ot(se),j({blockers:new Map(c.blockers)})}});return}return await Je(Q,G,{submission:q,pendingError:Y,preventScrollReset:Fe,replace:N&&N.replace})}function be(){if(ii(),j({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){Je(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}Je(C||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function Je(D,N,O){d&&d.abort(),d=null,C=D,b=(O&&O.startUninterruptedRevalidation)===!0,Po(c.location,c.matches),m=(O&&O.preventScrollReset)===!0;let q=i||r,Y=O&&O.overrideNavigation,Z=Lr(q,N,e.basename);if(!Z){let pe=Gn(404,{pathname:N.pathname}),{matches:An,route:bn}=Kd(q);vr(),ee(N,{matches:An,loaderData:{},errors:{[bn.id]:pe}});return}if(W0(c.location,N)&&!(O&&O.submission&&ut(O.submission.formMethod))){ee(N,{matches:Z});return}d=new AbortController;let G=Ci(e.history,N,d.signal,O&&O.submission),re,Q;if(O&&O.pendingError)Q={[Or(Z).route.id]:O.pendingError};else if(O&&O.submission&&ut(O.submission.formMethod)){let pe=await fn(G,N,O.submission,Z,{replace:O.replace});if(pe.shortCircuited)return;re=pe.pendingActionData,Q=pe.pendingActionError,Y=ce({state:"loading",location:N},O.submission),G=new Request(G.url,{signal:G.signal})}let{shortCircuited:Fe,loaderData:se,errors:Xe}=await it(G,N,Z,Y,O&&O.submission,O&&O.replace,re,Q);Fe||(d=null,ee(N,ce({matches:Z},re?{actionData:re}:{},{loaderData:se,errors:Xe})))}async function fn(D,N,O,q,Y){ii();let Z=ce({state:"submitting",location:N},O);j({navigation:Z});let G,re=nu(q,N);if(!re.route.action&&!re.route.lazy)G={type:$e.error,error:Gn(405,{method:D.method,pathname:N.pathname,routeId:re.route.id})};else if(G=await xi("action",D,re,q,t,n,v.basename),D.signal.aborted)return{shortCircuited:!0};if(jr(G)){let Q;return Y&&Y.replace!=null?Q=Y.replace:Q=G.location===c.location.pathname+c.location.search,await Gt(c,G,{submission:O,replace:Q}),{shortCircuited:!0}}if(ji(G)){let Q=Or(q,re.route.id);return(Y&&Y.replace)!==!0&&(C=Ne.Push),{pendingActionData:{},pendingActionError:{[Q.route.id]:G.error}}}if(ir(G))throw Gn(400,{type:"defer-action"});return{pendingActionData:{[re.route.id]:G.data}}}async function it(D,N,O,q,Y,Z,G,re){let Q=q;Q||(Q=ce({state:"loading",location:N,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Y));let Fe=Y||(Q.formMethod&&Q.formAction&&Q.formData&&Q.formEncType?{formMethod:Q.formMethod,formAction:Q.formAction,formData:Q.formData,formEncType:Q.formEncType}:void 0),se=i||r,[Xe,pe]=jd(e.history,c,O,Fe,N,P,M,R,he,se,e.basename,G,re);if(vr(qe=>!(O&&O.some(Pn=>Pn.route.id===qe))||Xe&&Xe.some(Pn=>Pn.route.id===qe)),Xe.length===0&&pe.length===0)return ee(N,ce({matches:O,loaderData:{},errors:re||null},G?{actionData:G}:{})),{shortCircuited:!0};if(!b){pe.forEach(Pn=>{let at=c.fetchers.get(Pn.key),br={state:"loading",data:at&&at.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(Pn.key,br)});let qe=G||c.actionData;j(ce({navigation:Q},qe?Object.keys(qe).length===0?{actionData:null}:{actionData:qe}:{},pe.length>0?{fetchers:new Map(c.fetchers)}:{}))}J=++L,pe.forEach(qe=>I.set(qe.key,d));let{results:An,loaderResults:bn,fetcherResults:Et}=await Eo(c.matches,O,Xe,pe,D);if(D.signal.aborted)return{shortCircuited:!0};pe.forEach(qe=>I.delete(qe.key));let yr=Yd(An);if(yr)return await Gt(c,yr,{replace:Z}),{shortCircuited:!0};let{loaderData:wr,errors:Tt}=Wd(c,O,Xe,bn,re,pe,Et,ge);ge.forEach((qe,Pn)=>{qe.subscribe(at=>{(at||qe.done)&&ge.delete(Pn)})}),Mo();let ci=Jt(J);return ce({loaderData:wr,errors:Tt},ci||pe.length>0?{fetchers:new Map(c.fetchers)}:{})}function ue(D){return c.fetchers.get(D)||F0}function Ie(D,N,O,q){if(V0)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");I.has(D)&&wn(D);let Z=Lr(i||r,O,e.basename);if(!Z){oi(D,N,Gn(404,{pathname:O}));return}let{path:G,submission:re}=zd(O,q,!0),Q=nu(Z,G);if(m=(q&&q.preventScrollReset)===!0,re&&ut(re.formMethod)){De(D,N,G,Q,Z,re);return}he.set(D,{routeId:N,path:G}),Mn(D,N,G,Q,Z,re)}async function De(D,N,O,q,Y,Z){if(ii(),he.delete(D),!q.route.action&&!q.route.lazy){let Fn=Gn(405,{method:Z.formMethod,pathname:O,routeId:N});oi(D,N,Fn);return}let G=c.fetchers.get(D),re=ce({state:"submitting"},Z,{data:G&&G.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(D,re),j({fetchers:new Map(c.fetchers)});let Q=new AbortController,Fe=Ci(e.history,O,Q.signal,Z);I.set(D,Q);let se=await xi("action",Fe,q,Y,t,n,v.basename);if(Fe.signal.aborted){I.get(D)===Q&&I.delete(D);return}if(jr(se)){I.delete(D),ae.add(D);let Fn=ce({state:"loading"},Z,{data:void 0," _hasFetcherDoneAnything ":!0});return c.fetchers.set(D,Fn),j({fetchers:new Map(c.fetchers)}),Gt(c,se,{isFetchActionRedirect:!0})}if(ji(se)){oi(D,N,se.error);return}if(ir(se))throw Gn(400,{type:"defer-action"});let Xe=c.navigation.location||c.location,pe=Ci(e.history,Xe,Q.signal),An=i||r,bn=c.navigation.state!=="idle"?Lr(An,c.navigation.location,e.basename):c.matches;te(bn,"Didn't find any matches after fetcher action");let Et=++L;W.set(D,Et);let yr=ce({state:"loading",data:se.data},Z,{" _hasFetcherDoneAnything ":!0});c.fetchers.set(D,yr);let[wr,Tt]=jd(e.history,c,bn,Z,Xe,P,M,R,he,An,e.basename,{[q.route.id]:se.data},void 0);Tt.filter(Fn=>Fn.key!==D).forEach(Fn=>{let fi=Fn.key,Ro=c.fetchers.get(fi),ml={state:"loading",data:Ro&&Ro.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(fi,ml),I.set(fi,Q)}),j({fetchers:new Map(c.fetchers)});let{results:ci,loaderResults:qe,fetcherResults:Pn}=await Eo(c.matches,bn,wr,Tt,pe);if(Q.signal.aborted)return;W.delete(D),I.delete(D),Tt.forEach(Fn=>I.delete(Fn.key));let at=Yd(ci);if(at)return Gt(c,at);let{loaderData:br,errors:di}=Wd(c,c.matches,wr,qe,void 0,Tt,Pn,ge),pl={state:"idle",data:se.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(D,pl);let Do=Jt(Et);c.navigation.state==="loading"&&Et>J?(te(C,"Expected pending action"),d&&d.abort(),ee(c.navigation.location,{matches:bn,loaderData:br,errors:di,fetchers:new Map(c.fetchers)})):(j(ce({errors:di,loaderData:qd(c.loaderData,br,bn,di)},Do?{fetchers:new Map(c.fetchers)}:{})),P=!1)}async function Mn(D,N,O,q,Y,Z){let G=c.fetchers.get(D),re=ce({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Z,{data:G&&G.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(D,re),j({fetchers:new Map(c.fetchers)});let Q=new AbortController,Fe=Ci(e.history,O,Q.signal);I.set(D,Q);let se=await xi("loader",Fe,q,Y,t,n,v.basename);if(ir(se)&&(se=await Ip(se,Fe.signal,!0)||se),I.get(D)===Q&&I.delete(D),Fe.signal.aborted)return;if(jr(se)){await Gt(c,se);return}if(ji(se)){let pe=Or(c.matches,N);c.fetchers.delete(D),j({fetchers:new Map(c.fetchers),errors:{[pe.route.id]:se.error}});return}te(!ir(se),"Unhandled fetcher deferred data");let Xe={state:"idle",data:se.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(D,Xe),j({fetchers:new Map(c.fetchers)})}async function Gt(D,N,O){var q;let{submission:Y,replace:Z,isFetchActionRedirect:G}=O===void 0?{}:O;N.revalidate&&(P=!0);let re=co(D.location,N.location,ce({_isRedirect:!0},G?{_isFetchActionRedirect:!0}:{}));if(te(re,"Expected a location on the redirect navigation"),Ep.test(N.location)&&Tp&&typeof((q=window)==null?void 0:q.location)<"u"){let An=e.history.createURL(N.location),bn=vo(An.pathname,e.basename||"/")==null;if(window.location.origin!==An.origin||bn){Z?window.location.replace(N.location):window.location.assign(N.location);return}}d=null;let Q=Z===!0?Ne.Replace:Ne.Push,{formMethod:Fe,formAction:se,formEncType:Xe,formData:pe}=D.navigation;!Y&&Fe&&se&&pe&&Xe&&(Y={formMethod:Fe,formAction:se,formEncType:Xe,formData:pe}),O0.has(N.status)&&Y&&ut(Y.formMethod)?await Je(Q,re,{submission:ce({},Y,{formAction:N.location}),preventScrollReset:m}):await Je(Q,re,{overrideNavigation:{state:"loading",location:re,formMethod:Y?Y.formMethod:void 0,formAction:Y?Y.formAction:void 0,formEncType:Y?Y.formEncType:void 0,formData:Y?Y.formData:void 0},preventScrollReset:m})}async function Eo(D,N,O,q,Y){let Z=await Promise.all([...O.map(Q=>xi("loader",Y,Q,N,t,n,v.basename)),...q.map(Q=>Q.matches&&Q.match?xi("loader",Ci(e.history,Q.path,Y.signal),Q.match,Q.matches,t,n,v.basename):{type:$e.error,error:Gn(404,{pathname:Q.path})})]),G=Z.slice(0,O.length),re=Z.slice(O.length);return await Promise.all([Qd(D,O,G,Y.signal,!1,c.loaderData),Qd(D,q.map(Q=>Q.match),re,Y.signal,!0)]),{results:Z,loaderResults:G,fetcherResults:re}}function ii(){P=!0,M.push(...vr()),he.forEach((D,N)=>{I.has(N)&&(R.push(N),wn(N))})}function oi(D,N,O){let q=Or(c.matches,N);ai(D),j({errors:{[q.route.id]:O},fetchers:new Map(c.fetchers)})}function ai(D){I.has(D)&&wn(D),he.delete(D),W.delete(D),ae.delete(D),c.fetchers.delete(D)}function wn(D){let N=I.get(D);te(N,"Expected fetch controller: "+D),N.abort(),I.delete(D)}function To(D){for(let N of D){let q={state:"idle",data:ue(N).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(N,q)}}function Mo(){let D=[];for(let N of ae){let O=c.fetchers.get(N);te(O,"Expected fetcher: "+N),O.state==="loading"&&(ae.delete(N),D.push(N))}To(D)}function Jt(D){let N=[];for(let[O,q]of W)if(q<D){let Y=c.fetchers.get(O);te(Y,"Expected fetcher: "+O),Y.state==="loading"&&(wn(O),W.delete(O),N.push(O))}return To(N),N.length>0}function li(D,N){let O=c.blockers.get(D)||$d;return Pe.get(D)!==N&&Pe.set(D,N),O}function ot(D){c.blockers.delete(D),Pe.delete(D)}function Ct(D,N){let O=c.blockers.get(D)||$d;te(O.state==="unblocked"&&N.state==="blocked"||O.state==="blocked"&&N.state==="blocked"||O.state==="blocked"&&N.state==="proceeding"||O.state==="blocked"&&N.state==="unblocked"||O.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+N.state),c.blockers.set(D,N),j({blockers:new Map(c.blockers)})}function si(D){let{currentLocation:N,nextLocation:O,historyAction:q}=D;if(Pe.size===0)return;Pe.size>1&&Xr(!1,"A router only supports one blocker at a time");let Y=Array.from(Pe.entries()),[Z,G]=Y[Y.length-1],re=c.blockers.get(Z);if(!(re&&re.state==="proceeding")&&G({currentLocation:N,nextLocation:O,historyAction:q}))return Z}function vr(D){let N=[];return ge.forEach((O,q)=>{(!D||D(q))&&(O.cancel(),N.push(q),ge.delete(q))}),N}function Ao(D,N,O){if(l=D,u=N,s=O||(q=>q.key),!p&&c.navigation===Kl){p=!0;let q=ui(c.location,c.matches);q!=null&&j({restoreScrollPosition:q})}return()=>{l=null,u=null,s=null}}function Po(D,N){if(l&&s&&u){let O=N.map(Y=>Gd(Y,c.loaderData)),q=s(D,O)||D.key;l[q]=u()}}function ui(D,N){if(l&&s&&u){let O=N.map(Z=>Gd(Z,c.loaderData)),q=s(D,O)||D.key,Y=l[q];if(typeof Y=="number")return Y}return null}function Io(D){i=D}return v={get basename(){return e.basename},get state(){return c},get routes(){return r},initialize:yn,subscribe:z,enableScrollRestoration:Ao,navigate:ne,fetch:Ie,revalidate:be,createHref:D=>e.history.createHref(D),encodeLocation:D=>e.history.encodeLocation(D),getFetcher:ue,deleteFetcher:ai,dispose:Ge,getBlocker:li,deleteBlocker:ot,_internalFetchControllers:I,_internalActiveDeferreds:ge,_internalSetRoutes:Io},v}function $0(e){return e!=null&&"formData"in e}function zd(e,n,t){t===void 0&&(t=!1);let r=typeof e=="string"?e:rt(e);if(!n||!$0(n))return{path:r};if(n.formMethod&&!K0(n.formMethod))return{path:r,error:Gn(405,{method:n.formMethod})};let i;if(n.formData&&(i={formMethod:n.formMethod||"get",formAction:Pp(r),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},ut(i.formMethod)))return{path:r,submission:i};let o=xt(r),a=Ap(n.formData);return t&&o.search&&Dp(o.search)&&a.append("index",""),o.search="?"+a,{path:rt(o),submission:i}}function z0(e,n){let t=e;if(n){let r=e.findIndex(i=>i.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function jd(e,n,t,r,i,o,a,l,s,u,p,h,y){let k=y?Object.values(y)[0]:h?Object.values(h)[0]:void 0,v=e.createURL(n.location),c=e.createURL(i),C=o||v.toString()===c.toString()||v.search!==c.search,m=y?Object.keys(y)[0]:void 0,b=z0(t,m).filter((M,R)=>{if(M.route.lazy)return!0;if(M.route.loader==null)return!1;if(j0(n.loaderData,n.matches[R],M)||a.some(J=>J===M.route.id))return!0;let I=n.matches[R],L=M;return Hd(M,ce({currentUrl:v,currentParams:I.params,nextUrl:c,nextParams:L.params},r,{actionResult:k,defaultShouldRevalidate:C||Mp(I,L)}))}),P=[];return s.forEach((M,R)=>{if(!t.some(W=>W.route.id===M.routeId))return;let I=Lr(u,M.path,p);if(!I){P.push(ce({key:R},M,{matches:null,match:null}));return}let L=nu(I,M.path);if(l.includes(R)){P.push(ce({key:R,matches:I,match:L},M));return}Hd(L,ce({currentUrl:v,currentParams:n.matches[n.matches.length-1].params,nextUrl:c,nextParams:t[t.length-1].params},r,{actionResult:k,defaultShouldRevalidate:C}))&&P.push(ce({key:R,matches:I,match:L},M))}),[b,P]}function j0(e,n,t){let r=!n||t.route.id!==n.route.id,i=e[t.route.id]===void 0;return r||i}function Mp(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function Hd(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function eu(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=t[e.id];te(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";Xr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!s0.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:n(ce({},i)),lazy:void 0})}async function xi(e,n,t,r,i,o,a,l,s,u){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let p,h,y,k=C=>{let m,d=new Promise((b,P)=>m=P);return y=()=>m(),n.signal.addEventListener("abort",y),Promise.race([C({request:n,params:t.params,context:u}),d])};try{let C=t.route[e];if(t.route.lazy)if(C)h=(await Promise.all([k(C),eu(t.route,o,i)]))[0];else if(await eu(t.route,o,i),C=t.route[e],C)h=await k(C);else{if(e==="action")throw Gn(405,{method:n.method,pathname:new URL(n.url).pathname,routeId:t.route.id});return{type:$e.data,data:void 0}}else te(C,"Could not find the "+e+' to run on the "'+t.route.id+'" route'),h=await k(C);te(h!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(C){p=$e.error,h=C}finally{y&&n.signal.removeEventListener("abort",y)}if(q0(h)){let C=h.status;if(L0.has(C)){let b=h.headers.get("Location");if(te(b,"Redirects returned/thrown from loaders/actions must have a Location header"),Ep.test(b)){if(!l){let P=new URL(n.url),M=b.startsWith("//")?new URL(P.protocol+b):new URL(b),R=vo(M.pathname,a)!=null;M.origin===P.origin&&R&&(b=M.pathname+M.search+M.hash)}}else{let P=r.slice(0,r.indexOf(t)+1),M=il(P).map(I=>I.pathnameBase),R=sc(b,M,new URL(n.url).pathname);if(te(rt(R),"Unable to resolve redirect location: "+b),a){let I=R.pathname;R.pathname=I==="/"?a:et([a,I])}b=rt(R)}if(l)throw h.headers.set("Location",b),h;return{type:$e.redirect,status:C,location:b,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:p||$e.data,response:h};let m,d=h.headers.get("Content-Type");return d&&/\bapplication\/json\b/.test(d)?m=await h.json():m=await h.text(),p===$e.error?{type:p,error:new uc(C,h.statusText,m),headers:h.headers}:{type:$e.data,data:m,statusCode:h.status,headers:h.headers}}if(p===$e.error)return{type:p,error:h};if(h instanceof P0){var v,c;return{type:$e.deferred,deferredData:h,statusCode:(v=h.init)==null?void 0:v.status,headers:((c=h.init)==null?void 0:c.headers)&&new Headers(h.init.headers)}}return{type:$e.data,data:h}}function Ci(e,n,t,r){let i=e.createURL(Pp(n)).toString(),o={signal:t};if(r&&ut(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?Ap(s):s}return new Request(i,o)}function Ap(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,r instanceof File?r.name:r);return n}function H0(e,n,t,r,i){let o={},a=null,l,s=!1,u={};return t.forEach((p,h)=>{let y=n[h].route.id;if(te(!jr(p),"Cannot handle redirect results in processLoaderData"),ji(p)){let k=Or(e,y),v=p.error;r&&(v=Object.values(r)[0],r=void 0),a=a||{},a[k.route.id]==null&&(a[k.route.id]=v),o[y]=void 0,s||(s=!0,l=xp(p.error)?p.error.status:500),p.headers&&(u[y]=p.headers)}else ir(p)?(i.set(y,p.deferredData),o[y]=p.deferredData.data):o[y]=p.data,p.statusCode!=null&&p.statusCode!==200&&!s&&(l=p.statusCode),p.headers&&(u[y]=p.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function Wd(e,n,t,r,i,o,a,l){let{loaderData:s,errors:u}=H0(n,t,r,i,l);for(let p=0;p<o.length;p++){let{key:h,match:y}=o[p];te(a!==void 0&&a[p]!==void 0,"Did not find corresponding fetcher result");let k=a[p];if(ji(k)){let v=Or(e.matches,y==null?void 0:y.route.id);u&&u[v.route.id]||(u=ce({},u,{[v.route.id]:k.error})),e.fetchers.delete(h)}else if(jr(k))te(!1,"Unhandled fetcher revalidation redirect");else if(ir(k))te(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:k.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(h,v)}}return{loaderData:s,errors:u}}function qd(e,n,t,r){let i=ce({},n);for(let o of t){let a=o.route.id;if(n.hasOwnProperty(a)?n[a]!==void 0&&(i[a]=n[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Or(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Kd(e){let n=e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Gn(e,n){let{pathname:t,routeId:r,method:i,type:o}=n===void 0?{}:n,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&t&&r?l="You made a "+i+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+t+'"'):e===404?(a="Not Found",l='No route matches URL "'+t+'"'):e===405&&(a="Method Not Allowed",i&&t&&r?l="You made a "+i.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new uc(e||500,a,new Error(l),!0)}function Yd(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(jr(t))return t}}function Pp(e){let n=typeof e=="string"?xt(e):e;return rt(ce({},n,{hash:""}))}function W0(e,n){return e.pathname===n.pathname&&e.search===n.search&&e.hash!==n.hash}function ir(e){return e.type===$e.deferred}function ji(e){return e.type===$e.error}function jr(e){return(e&&e.type)===$e.redirect}function q0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function K0(e){return _0.has(e)}function ut(e){return R0.has(e)}async function Qd(e,n,t,r,i,o){for(let a=0;a<t.length;a++){let l=t[a],s=n[a];if(!s)continue;let u=e.find(h=>h.route.id===s.route.id),p=u!=null&&!Mp(u,s)&&(o&&o[s.route.id])!==void 0;ir(l)&&(i||p)&&await Ip(l,r,i).then(h=>{h&&(t[a]=h||t[a])})}}async function Ip(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:$e.data,data:e.deferredData.unwrappedData}}catch(i){return{type:$e.error,error:i}}return{type:$e.data,data:e.deferredData.data}}}function Dp(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function Gd(e,n){let{route:t,pathname:r,params:i}=e;return{id:t.id,pathname:r,params:i,data:n[t.id],handle:t.handle}}function nu(e,n){let t=typeof n=="string"?xt(n).search:n.search;if(e[e.length-1].route.index&&Dp(t||""))return e[e.length-1];let r=il(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Y0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const Q0=typeof Object.is=="function"?Object.is:Y0,{useState:G0,useEffect:J0,useLayoutEffect:X0,useDebugValue:Z0}=Hr;function ey(e,n,t){const r=n(),[{inst:i},o]=G0({inst:{value:r,getSnapshot:n}});return X0(()=>{i.value=r,i.getSnapshot=n,Yl(i)&&o({inst:i})},[e,r,n]),J0(()=>(Yl(i)&&o({inst:i}),e(()=>{Yl(i)&&o({inst:i})})),[e]),Z0(r),r}function Yl(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!Q0(t,r)}catch{return!0}}function ny(e,n,t){return n()}const ty=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ry=!ty,iy=ry?ny:ey,oy="useSyncExternalStore"in Hr?(e=>e.useSyncExternalStore)(Hr):iy,ol=w.createContext(null),cc=w.createContext(null),ti=w.createContext(null),al=w.createContext(null),Qt=w.createContext({outlet:null,matches:[]}),Rp=w.createContext(null);function tu(){return tu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tu.apply(this,arguments)}function ay(e,n){let{relative:t}=n===void 0?{}:n;yo()||te(!1);let{basename:r,navigator:i}=w.useContext(ti),{hash:o,pathname:a,search:l}=dc(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:et([r,a])),i.createHref({pathname:s,search:l,hash:o})}function yo(){return w.useContext(al)!=null}function wo(){return yo()||te(!1),w.useContext(al).location}function ly(){yo()||te(!1);let{basename:e,navigator:n}=w.useContext(ti),{matches:t}=w.useContext(Qt),{pathname:r}=wo(),i=JSON.stringify(il(t).map(l=>l.pathnameBase)),o=w.useRef(!1);return w.useEffect(()=>{o.current=!0}),w.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=sc(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:et([e,u.pathname])),(s.replace?n.replace:n.push)(u,s.state,s)},[e,n,i,r])}const sy=w.createContext(null);function uy(e){let n=w.useContext(Qt).outlet;return n&&w.createElement(sy.Provider,{value:e},n)}function dc(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=w.useContext(Qt),{pathname:i}=wo(),o=JSON.stringify(il(r).map(a=>a.pathnameBase));return w.useMemo(()=>sc(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function cy(e,n){yo()||te(!1);let{navigator:t}=w.useContext(ti),r=w.useContext(cc),{matches:i}=w.useContext(Qt),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=wo(),u;if(n){var p;let c=typeof n=="string"?xt(n):n;l==="/"||(p=c.pathname)!=null&&p.startsWith(l)||te(!1),u=c}else u=s;let h=u.pathname||"/",y=l==="/"?h:h.slice(l.length)||"/",k=Lr(e,{pathname:y}),v=py(k&&k.map(c=>Object.assign({},c,{params:Object.assign({},a,c.params),pathname:et([l,t.encodeLocation?t.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?l:et([l,t.encodeLocation?t.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),i,r||void 0);return n&&v?w.createElement(al.Provider,{value:{location:tu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ne.Pop}},v):v}function dy(){let e=Lp(),n=xp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:i},t):null,o)}class fy extends w.Component{constructor(n){super(n),this.state={location:n.location,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location?{error:n.error,location:n.location}:{error:n.error||t.error,location:t.location}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?w.createElement(Qt.Provider,{value:this.props.routeContext},w.createElement(Rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hy(e){let{routeContext:n,match:t,children:r}=e,i=w.useContext(ol);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Qt.Provider,{value:n},r)}function py(e,n,t){if(n===void 0&&(n=[]),e==null)if(t!=null&&t.errors)e=t.matches;else return null;let r=e,i=t==null?void 0:t.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||te(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,u=null;t&&(a.route.ErrorBoundary?u=w.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=w.createElement(dy,null));let p=n.concat(r.slice(0,l+1)),h=()=>{let y=o;return s?y=u:a.route.Component?y=w.createElement(a.route.Component,null):a.route.element&&(y=a.route.element),w.createElement(hy,{match:a,routeContext:{outlet:o,matches:p},children:y})};return t&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?w.createElement(fy,{location:t.location,component:u,error:s,children:h(),routeContext:{outlet:null,matches:p}}):h()},null)}var Jd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Jd||(Jd={}));var hr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(hr||(hr={}));function fc(e){let n=w.useContext(cc);return n||te(!1),n}function my(e){let n=w.useContext(Qt);return n||te(!1),n}function Np(e){let n=my(),t=n.matches[n.matches.length-1];return t.route.id||te(!1),t.route.id}function gy(){return fc(hr.UseNavigation).navigation}function _p(){let e=fc(hr.UseLoaderData),n=Np(hr.UseLoaderData);if(e.errors&&e.errors[n]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+n+")");return}return e.loaderData[n]}function Lp(){var e;let n=w.useContext(Rp),t=fc(hr.UseRouteError),r=Np(hr.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function vy(e){let{fallbackElement:n,router:t}=e,r=w.useCallback(()=>t.state,[t]),i=oy(t.subscribe,r,r),o=w.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:s=>t.navigate(s),push:(s,u,p)=>t.navigate(s,{state:u,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(s,u,p)=>t.navigate(s,{replace:!0,state:u,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[t]),a=t.basename||"/",l=w.useMemo(()=>({router:t,navigator:o,static:!1,basename:a}),[t,o,a]);return w.createElement(w.Fragment,null,w.createElement(ol.Provider,{value:l},w.createElement(cc.Provider,{value:i},w.createElement(wy,{basename:t.basename,location:t.state.location,navigationType:t.state.historyAction,navigator:o},t.state.initialized?w.createElement(by,null):n))),null)}function Op(e){return uy(e.context)}function yy(e){te(!1)}function wy(e){let{basename:n="/",children:t=null,location:r,navigationType:i=Ne.Pop,navigator:o,static:a=!1}=e;yo()&&te(!1);let l=n.replace(/^\/*/,"/"),s=w.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=xt(r));let{pathname:u="/",search:p="",hash:h="",state:y=null,key:k="default"}=r,v=w.useMemo(()=>{let c=vo(u,l);return c==null?null:{location:{pathname:c,search:p,hash:h,state:y,key:k},navigationType:i}},[l,u,p,h,y,k,i]);return v==null?null:w.createElement(ti.Provider,{value:s},w.createElement(al.Provider,{children:t,value:v}))}function by(e){let{children:n,location:t}=e,r=w.useContext(ol),i=r&&!n?r.router.routes:ru(n);return cy(i,t)}var Xd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Xd||(Xd={}));new Promise(()=>{});function ru(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;if(r.type===w.Fragment){t.push.apply(t,ru(r.props.children,n));return}r.type!==yy&&te(!1),!r.props.index||!r.props.children||te(!1);let o=[...n,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ru(r.props.children,o)),t.push(a)}),t}function Sy(e){return Boolean(e.ErrorBoundary)||Boolean(e.errorElement)}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pr.apply(this,arguments)}function Fp(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}const da="get",Ql="application/x-www-form-urlencoded";function ll(e){return e!=null&&typeof e.tagName=="string"}function ky(e){return ll(e)&&e.tagName.toLowerCase()==="button"}function xy(e){return ll(e)&&e.tagName.toLowerCase()==="form"}function Cy(e){return ll(e)&&e.tagName.toLowerCase()==="input"}function Ey(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ty(e,n){return e.button===0&&(!n||n==="_self")&&!Ey(e)}function My(e,n,t){let r,i,o,a;if(xy(e)){let p=t.submissionTrigger;r=t.method||e.getAttribute("method")||da,i=t.action||e.getAttribute("action")||n,o=t.encType||e.getAttribute("enctype")||Ql,a=new FormData(e),p&&p.name&&a.append(p.name,p.value)}else if(ky(e)||Cy(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');r=t.method||e.getAttribute("formmethod")||p.getAttribute("method")||da,i=t.action||e.getAttribute("formaction")||p.getAttribute("action")||n,o=t.encType||e.getAttribute("formenctype")||p.getAttribute("enctype")||Ql,a=new FormData(p),e.name&&a.append(e.name,e.value)}else{if(ll(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(r=t.method||da,i=t.action||n,o=t.encType||Ql,e instanceof FormData)a=e;else if(a=new FormData,e instanceof URLSearchParams)for(let[p,h]of e)a.append(p,h);else if(e!=null)for(let p of Object.keys(e))a.append(p,e[p])}let{protocol:l,host:s}=window.location;return{url:new URL(i,l+"//"+s),method:r.toLowerCase(),encType:o,formData:a}}const Ay=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Py=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function Iy(e,n){return B0({basename:n==null?void 0:n.basename,history:o0({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||Dy(),routes:e,detectErrorBoundary:Sy}).initialize()}function Dy(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=pr({},n,{errors:Ry(n.errors)})),n}function Ry(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,i]of n)if(i&&i.__type==="RouteErrorResponse")t[r]=new uc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",t[r]=o}else t[r]=i;return t}const Ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vp=w.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:p}=n,h=Fp(n,Ay),{basename:y}=w.useContext(ti),k,v=!1;if(typeof u=="string"&&_y.test(u)&&(k=u,Ny)){let d=new URL(window.location.href),b=u.startsWith("//")?new URL(d.protocol+u):new URL(u),P=vo(b.pathname,y);b.origin===d.origin&&P!=null?u=P+b.search+b.hash:v=!0}let c=ay(u,{relative:i}),C=Fy(u,{replace:a,state:l,target:s,preventScrollReset:p,relative:i});function m(d){r&&r(d),d.defaultPrevented||C(d)}return w.createElement("a",pr({},h,{href:k||c,onClick:v||o?r:m,ref:t,target:s}))}),iu=w.forwardRef((e,n)=>w.createElement(Ly,pr({},e,{ref:n}))),Ly=w.forwardRef((e,n)=>{let{reloadDocument:t,replace:r,method:i=da,action:o,onSubmit:a,fetcherKey:l,routeId:s,relative:u,preventScrollReset:p}=e,h=Fp(e,Py),y=Vy(l,s),k=i.toLowerCase()==="get"?"get":"post",v=Up(o,{relative:u}),c=C=>{if(a&&a(C),C.defaultPrevented)return;C.preventDefault();let m=C.nativeEvent.submitter,d=(m==null?void 0:m.getAttribute("formmethod"))||i;y(m||C.currentTarget,{method:d,replace:r,relative:u,preventScrollReset:p})};return w.createElement("form",pr({ref:n,method:k,action:v,onSubmit:t?a:c},h))});var ou;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ou||(ou={}));var Zd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zd||(Zd={}));function Oy(e){let n=w.useContext(ol);return n||te(!1),n}function Fy(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:a}=n===void 0?{}:n,l=ly(),s=wo(),u=dc(e,{relative:a});return w.useCallback(p=>{if(Ty(p,t)){p.preventDefault();let h=r!==void 0?r:rt(s)===rt(u);l(e,{replace:h,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,t,e,o,a])}function Vy(e,n){let{router:t}=Oy(ou.UseSubmitImpl),r=Up();return w.useCallback(function(i,o){if(o===void 0&&(o={}),typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:a,encType:l,formData:s,url:u}=My(i,r,o),p=u.pathname+u.search,h={replace:o.replace,preventScrollReset:o.preventScrollReset,formData:s,formMethod:a,formEncType:l};e?(n==null&&te(!1),t.fetch(e,n,p,h)):t.navigate(p,h)},[r,t,e,n])}function Up(e,n){let{relative:t}=n===void 0?{}:n,{basename:r}=w.useContext(ti),i=w.useContext(Qt);i||te(!1);let[o]=i.matches.slice(-1),a=pr({},dc(e||".",{relative:t})),l=wo();if(e==null&&(a.search=l.search,a.hash=l.hash,o.route.index)){let s=new URLSearchParams(a.search);s.delete("index"),a.search=s.toString()?"?"+s.toString():""}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:et([r,a.pathname])),rt(a)}function Gl(){const e=Lp();return console.error(e),X("div",{id:"error-page",children:[x("h1",{children:"Oops!"}),x("p",{children:"Sorry, an unexpected error has occurred."}),x("p",{children:x("i",{children:e.statusText||e.message})})]})}function Uy(){return X("div",{className:"flex items-center justify-center flex-col text-center py-6",children:[x("p",{className:"font-bold text-xl md:text-2xl mb-3 dark:text-orange-500",children:"Technolust Ninja"}),x("p",{className:"text-sm max-w-xl mb-6",children:"Obsessed with finding solutions to ITs most difficult problems. I use my nearly 10 years of experience and thirst for knowledge to research and develop projects that improve efficiency and ROI."})]})}const By=[{title:"Ready Viewer One: A Movie Podcast",imgUrl:"/assets/rvo.jpg",stack:["Apple Podcasts","Spotify","YouTube","OBS"],link:"https://readyviewerone.buzzsprout.com",blurb:"A Movie Podcast with Nick Johnson and John Boyes"},{title:"Twilio Emergency Notification System",imgUrl:"/assets/twilio.webp",stack:["Excel","VBS","JavaScript","Google Sheets"],link:"#",blurb:"Created an Excel/VBS based employee emergency notification system for simplifying the process to call/text employees in case of inclement weather or other emergency company closures. Also created a Google Sheets variant to automate Bill Pay reminders for customers that are due soon/past due"},{title:"Balena.IO Kiosk Signage",imgUrl:"/assets/kiosk.jpg",stack:["HTML","CSS","JavaScript"],link:"#",blurb:"Configured a self-service lobby check in kiosk using SwipedOn for visitor tracking and Balena.IO on RaspberryPI for signage. Visitors sign in on a secured iPad, or by scanning a QR code with their cell phone, then SwipedOn prints a visitor badge and notifies employee's via email and SMS that their visitor has arrived. Balena.IO allows remote configuration and management of the content displayed on the digital display."},{title:"UCaaS Migration",imgUrl:"/assets/uccas.webp",stack:["Python"],link:"#",blurb:"Migration from on-prem Mitel phone system to Avaya's RingCentral UCaaS. This project included negotiating rates, managing backups and exports, using WSL2 and scripting to convert recordings from proprietary audio formats to WAV, automated transcribing recordings, used AWS Polly to create new high quality recordings from transcriptions, and configured queues and IVR's in RingCentral."}];var $y=Object.defineProperty,zy=(e,n,t)=>n in e?$y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Jl=(e,n,t)=>(zy(e,typeof n!="symbol"?n+"":n,t),t);let jy=class{constructor(){Jl(this,"current",this.detect()),Jl(this,"handoffState","pending"),Jl(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},nt=new jy,en=(e,n)=>{nt.isServer?w.useEffect(e,n):w.useLayoutEffect(e,n)};function gt(e){let n=w.useRef(e);return en(()=>{n.current=e},[e]),n}function sl(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function St(){let e=[],n={addEventListener(t,r,i,o){return t.addEventListener(r,i,o),n.add(()=>t.removeEventListener(r,i,o))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return sl(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},add(t){return e.push(t),()=>{let r=e.indexOf(t);if(r>=0){let[i]=e.splice(r,1);i()}}},dispose(){for(let t of e.splice(0))t()},style(t,r,i){let o=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:i}),this.add(()=>{Object.assign(t.style,{[r]:o})})}};return n}function bo(){let[e]=w.useState(St);return w.useEffect(()=>()=>e.dispose(),[e]),e}let de=function(e){let n=gt(e);return ie.useCallback((...t)=>n.current(...t),[n])};function ri(){let[e,n]=w.useState(nt.isHandoffComplete);return e&&nt.isHandoffComplete===!1&&n(!1),w.useEffect(()=>{e!==!0&&n(!0)},[e]),w.useEffect(()=>nt.handoff(),[]),e}var ef;let Kn=(ef=ie.useId)!=null?ef:function(){let e=ri(),[n,t]=ie.useState(e?()=>nt.nextId():null);return en(()=>{n===null&&t(nt.nextId())},[n]),n!=null?""+n:void 0};function Oe(e,n,...t){if(e in n){let i=n[e];return typeof i=="function"?i(...t):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Oe),r}function So(e){return nt.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let au=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var dt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(dt||{}),Bp=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Bp||{}),Hy=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Hy||{});function $p(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(au)).sort((n,t)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var hc=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(hc||{});function pc(e,n=0){var t;return e===((t=So(e))==null?void 0:t.body)?!1:Oe(n,{[0](){return e.matches(au)},[1](){let r=e;for(;r!==null;){if(r.matches(au))return!0;r=r.parentElement}return!1}})}function zp(e){let n=So(e);St().nextFrame(()=>{n&&!pc(n.activeElement,0)&&zt(e)})}function zt(e){e==null||e.focus({preventScroll:!0})}let Wy=["textarea","input"].join(",");function qy(e){var n,t;return(t=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,Wy))!=null?t:!1}function jp(e,n=t=>t){return e.slice().sort((t,r)=>{let i=n(t),o=n(r);if(i===null||o===null)return 0;let a=i.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ky(e,n){return Hi($p(),n,{relativeTo:e})}function Hi(e,n,{sorted:t=!0,relativeTo:r=null,skipElements:i=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?t?jp(e):e:$p(e);i.length>0&&a.length>1&&(a=a.filter(k=>!i.includes(k))),r=r??o.activeElement;let l=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,a.indexOf(r))-1;if(n&4)return Math.max(0,a.indexOf(r))+1;if(n&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=n&32?{preventScroll:!0}:{},p=0,h=a.length,y;do{if(p>=h||p+h<=0)return 0;let k=s+p;if(n&16)k=(k+h)%h;else{if(k<0)return 3;if(k>=h)return 1}y=a[k],y==null||y.focus(u),p+=l}while(y!==o.activeElement);return n&6&&qy(y)&&y.select(),y.hasAttribute("tabindex")||y.setAttribute("tabindex","0"),2}function Xl(e,n,t){let r=gt(n);w.useEffect(()=>{function i(o){r.current(o)}return document.addEventListener(e,i,t),()=>document.removeEventListener(e,i,t)},[e,t])}function Hp(e,n,t=!0){let r=w.useRef(!1);w.useEffect(()=>{requestAnimationFrame(()=>{r.current=t})},[t]);function i(a,l){if(!r.current||a.defaultPrevented)return;let s=function p(h){return typeof h=="function"?p(h()):Array.isArray(h)||h instanceof Set?h:[h]}(e),u=l(a);if(u!==null&&u.getRootNode().contains(u)){for(let p of s){if(p===null)continue;let h=p instanceof HTMLElement?p:p.current;if(h!=null&&h.contains(u)||a.composed&&a.composedPath().includes(h))return}return!pc(u,hc.Loose)&&u.tabIndex!==-1&&a.preventDefault(),n(a,u)}}let o=w.useRef(null);Xl("mousedown",a=>{var l,s;r.current&&(o.current=((s=(l=a.composedPath)==null?void 0:l.call(a))==null?void 0:s[0])||a.target)},!0),Xl("click",a=>{o.current&&(i(a,()=>o.current),o.current=null)},!0),Xl("blur",a=>i(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function nf(e){var n;if(e.type)return e.type;let t=(n=e.as)!=null?n:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function Wp(e,n){let[t,r]=w.useState(()=>nf(e));return en(()=>{r(nf(e))},[e.type,e.as]),en(()=>{t||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&r("button")},[t,n]),t}let qp=Symbol();function Kp(e,n=!0){return Object.assign(e,{[qp]:n})}function Qe(...e){let n=w.useRef(e);w.useEffect(()=>{n.current=e},[e]);let t=de(r=>{for(let i of n.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[qp]))?void 0:t}function Yy({container:e,accept:n,walk:t,enabled:r=!0}){let i=w.useRef(n),o=w.useRef(t);w.useEffect(()=>{i.current=n,o.current=t},[n,t]),en(()=>{if(!e||!r)return;let a=So(e);if(!a)return;let l=i.current,s=o.current,u=Object.assign(h=>l(h),{acceptNode:l}),p=a.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;p.nextNode();)s(p.currentNode)},[e,r,i,o])}function Qy(e){throw new Error("Unexpected object: "+e)}var jn=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(jn||{});function Gy(e,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),i=r??-1,o=(()=>{switch(e.focus){case 0:return t.findIndex(a=>!n.resolveDisabled(a));case 1:{let a=t.slice().reverse().findIndex((l,s,u)=>i!==-1&&u.length-s-1>=i?!1:!n.resolveDisabled(l));return a===-1?a:t.length-1-a}case 2:return t.findIndex((a,l)=>l<=i?!1:!n.resolveDisabled(a));case 3:{let a=t.slice().reverse().findIndex(l=>!n.resolveDisabled(l));return a===-1?a:t.length-1-a}case 4:return t.findIndex(a=>n.resolveId(a)===e.id);case 5:return null;default:Qy(e)}})();return o===-1?r:o}function Yp(...e){return e.filter(Boolean).join(" ")}var Wt=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Wt||{}),pt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(pt||{});function He({ourProps:e,theirProps:n,slot:t,defaultTag:r,features:i,visible:o=!0,name:a}){let l=Qp(n,e);if(o)return Jo(l,t,r,a);let s=i??0;if(s&2){let{static:u=!1,...p}=l;if(u)return Jo(p,t,r,a)}if(s&1){let{unmount:u=!0,...p}=l;return Oe(u?0:1,{[0](){return null},[1](){return Jo({...p,hidden:!0,style:{display:"none"}},t,r,a)}})}return Jo(l,t,r,a)}function Jo(e,n={},t,r){var i;let{as:o=t,children:a,refName:l="ref",...s}=Zl(e,["unmount","static"]),u=e.ref!==void 0?{[l]:e.ref}:{},p=typeof a=="function"?a(n):a;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(n));let h={};if(n){let y=!1,k=[];for(let[v,c]of Object.entries(n))typeof c=="boolean"&&(y=!0),c===!0&&k.push(v);y&&(h["data-headlessui-state"]=k.join(" "))}if(o===w.Fragment&&Object.keys(tf(s)).length>0){if(!w.isValidElement(p)||Array.isArray(p)&&p.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let y=Yp((i=p.props)==null?void 0:i.className,s.className),k=y?{className:y}:{};return w.cloneElement(p,Object.assign({},Qp(p.props,tf(Zl(s,["ref"]))),h,u,Jy(p.ref,u.ref),k))}return w.createElement(o,Object.assign({},Zl(s,["ref"]),o!==w.Fragment&&u,o!==w.Fragment&&h),p)}function Jy(...e){return{ref:e.every(n=>n==null)?void 0:n=>{for(let t of e)t!=null&&(typeof t=="function"?t(n):t.current=n)}}}function Qp(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(t[i]!=null||(t[i]=[]),t[i].push(r[i])):n[i]=r[i];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(t).map(r=>[r,void 0])));for(let r in t)Object.assign(n,{[r](i,...o){let a=t[r];for(let l of a){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;l(i,...o)}}});return n}function Be(e){var n;return Object.assign(w.forwardRef(e),{displayName:(n=e.displayName)!=null?n:e.name})}function tf(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function Zl(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function mc(e){let n=e.parentElement,t=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(t=n),n=n.parentElement;let r=(n==null?void 0:n.getAttribute("disabled"))==="";return r&&Xy(t)?!1:r}function Xy(e){if(!e)return!1;let n=e.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}let Zy="div";var Ua=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Ua||{});function e1(e,n){let{features:t=1,...r}=e,i={ref:n,"aria-hidden":(t&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return He({ourProps:i,theirProps:r,slot:{},defaultTag:Zy,name:"Hidden"})}let lu=Be(e1),gc=w.createContext(null);gc.displayName="OpenClosedContext";var Le=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Le||{});function ko(){return w.useContext(gc)}function vc({value:e,children:n}){return ie.createElement(gc.Provider,{value:e},n)}var Ce=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ce||{});function Gp(e,n){let t=w.useRef([]),r=de(e);w.useEffect(()=>{let i=[...t.current];for(let[o,a]of n.entries())if(t.current[o]!==a){let l=r(n,i);return t.current=n,l}},[r,...n])}function rf(e){return[e.screenX,e.screenY]}function n1(){let e=w.useRef([-1,-1]);return{wasMoved(n){let t=rf(n);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(n){e.current=rf(n)}}}function t1(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function r1(e,n,t){let r=gt(n);w.useEffect(()=>{function i(o){r.current(o)}return window.addEventListener(e,i,t),()=>window.removeEventListener(e,i,t)},[e,t])}var Ni=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ni||{});function i1(){let e=w.useRef(0);return r1("keydown",n=>{n.key==="Tab"&&(e.current=n.shiftKey?1:0)},!0),e}function ul(){let e=w.useRef(!1);return en(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function xo(...e){return w.useMemo(()=>So(...e),[...e])}function yc(e,n,t,r){let i=gt(t);w.useEffect(()=>{e=e??window;function o(a){i.current(a)}return e.addEventListener(n,o,r),()=>e.removeEventListener(n,o,r)},[e,n,r])}let o1="div";var Jp=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Jp||{});function a1(e,n){let t=w.useRef(null),r=Qe(t,n),{initialFocus:i,containers:o,features:a=30,...l}=e;ri()||(a=1);let s=xo(t);s1({ownerDocument:s},Boolean(a&16));let u=u1({ownerDocument:s,container:t,initialFocus:i},Boolean(a&2));c1({ownerDocument:s,container:t,containers:o,previousActiveElement:u},Boolean(a&8));let p=i1(),h=de(c=>{let C=t.current;C&&(m=>m())(()=>{Oe(p.current,{[Ni.Forwards]:()=>{Hi(C,dt.First,{skipElements:[c.relatedTarget]})},[Ni.Backwards]:()=>{Hi(C,dt.Last,{skipElements:[c.relatedTarget]})}})})}),y=bo(),k=w.useRef(!1),v={ref:r,onKeyDown(c){c.key=="Tab"&&(k.current=!0,y.requestAnimationFrame(()=>{k.current=!1}))},onBlur(c){let C=new Set(o==null?void 0:o.current);C.add(t);let m=c.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(Xp(C,m)||(k.current?Hi(t.current,Oe(p.current,{[Ni.Forwards]:()=>dt.Next,[Ni.Backwards]:()=>dt.Previous})|dt.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&zt(c.target)))}};return ie.createElement(ie.Fragment,null,Boolean(a&4)&&ie.createElement(lu,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:Ua.Focusable}),He({ourProps:v,theirProps:l,defaultTag:o1,name:"FocusTrap"}),Boolean(a&4)&&ie.createElement(lu,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:Ua.Focusable}))}let l1=Be(a1),Ei=Object.assign(l1,{features:Jp});function s1({ownerDocument:e},n){let t=w.useRef(null);yc(e==null?void 0:e.defaultView,"focusout",i=>{n&&(t.current||(t.current=i.target))},!0),Gp(()=>{n||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&zt(t.current),t.current=null)},[n]);let r=w.useRef(!1);w.useEffect(()=>(r.current=!1,()=>{r.current=!0,sl(()=>{r.current&&(zt(t.current),t.current=null)})}),[])}function u1({ownerDocument:e,container:n,initialFocus:t},r){let i=w.useRef(null),o=ul();return Gp(()=>{if(!r)return;let a=n.current;a&&sl(()=>{if(!o.current)return;let l=e==null?void 0:e.activeElement;if(t!=null&&t.current){if((t==null?void 0:t.current)===l){i.current=l;return}}else if(a.contains(l)){i.current=l;return}t!=null&&t.current?zt(t.current):Hi(a,dt.First)===Bp.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=e==null?void 0:e.activeElement})},[r]),i}function c1({ownerDocument:e,container:n,containers:t,previousActiveElement:r},i){let o=ul();yc(e==null?void 0:e.defaultView,"focus",a=>{if(!i||!o.current)return;let l=new Set(t==null?void 0:t.current);l.add(n);let s=r.current;if(!s)return;let u=a.target;u&&u instanceof HTMLElement?Xp(l,u)?(r.current=u,zt(u)):(a.preventDefault(),a.stopPropagation(),zt(s)):zt(r.current)},!0)}function Xp(e,n){var t;for(let r of e)if((t=r.current)!=null&&t.contains(n))return!0;return!1}let Zp=w.createContext(!1);function d1(){return w.useContext(Zp)}function su(e){return ie.createElement(Zp.Provider,{value:e.force},e.children)}function f1(e){let n=d1(),t=w.useContext(em),r=xo(e),[i,o]=w.useState(()=>{if(!n&&t!==null||nt.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return w.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),w.useEffect(()=>{n||t!==null&&o(t.current)},[t,o,n]),i}let h1=w.Fragment;function p1(e,n){let t=e,r=w.useRef(null),i=Qe(Kp(p=>{r.current=p}),n),o=xo(r),a=f1(r),[l]=w.useState(()=>{var p;return nt.isServer?null:(p=o==null?void 0:o.createElement("div"))!=null?p:null}),s=ri(),u=w.useRef(!1);return en(()=>{if(u.current=!1,!(!a||!l))return a.contains(l)||(l.setAttribute("data-headlessui-portal",""),a.appendChild(l)),()=>{u.current=!0,sl(()=>{var p;u.current&&(!a||!l||(l instanceof Node&&a.contains(l)&&a.removeChild(l),a.childNodes.length<=0&&((p=a.parentElement)==null||p.removeChild(a))))})}},[a,l]),s?!a||!l?null:pa.createPortal(He({ourProps:{ref:i},theirProps:t,defaultTag:h1,name:"Portal"}),l):null}let m1=w.Fragment,em=w.createContext(null);function g1(e,n){let{target:t,...r}=e,i={ref:Qe(n)};return ie.createElement(em.Provider,{value:t},He({ourProps:i,theirProps:r,defaultTag:m1,name:"Popover.Group"}))}let v1=Be(p1),y1=Be(g1),uu=Object.assign(v1,{Group:y1}),nm=w.createContext(null);function tm(){let e=w.useContext(nm);if(e===null){let n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,tm),n}return e}function w1(){let[e,n]=w.useState([]);return[e.length>0?e.join(" "):void 0,w.useMemo(()=>function(t){let r=de(o=>(n(a=>[...a,o]),()=>n(a=>{let l=a.slice(),s=l.indexOf(o);return s!==-1&&l.splice(s,1),l}))),i=w.useMemo(()=>({register:r,slot:t.slot,name:t.name,props:t.props}),[r,t.slot,t.name,t.props]);return ie.createElement(nm.Provider,{value:i},t.children)},[n])]}let b1="p";function S1(e,n){let t=Kn(),{id:r=`headlessui-description-${t}`,...i}=e,o=tm(),a=Qe(n);en(()=>o.register(r),[r,o.register]);let l={ref:a,...o.props,id:r};return He({ourProps:l,theirProps:i,slot:o.slot||{},defaultTag:b1,name:o.name||"Description"})}let k1=Be(S1),x1=Object.assign(k1,{}),wc=w.createContext(()=>{});wc.displayName="StackContext";var cu=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(cu||{});function C1(){return w.useContext(wc)}function E1({children:e,onUpdate:n,type:t,element:r,enabled:i}){let o=C1(),a=de((...l)=>{n==null||n(...l),o(...l)});return en(()=>{let l=i===void 0||i===!0;return l&&a(0,t,r),()=>{l&&a(1,t,r)}},[a,t,r,i]),ie.createElement(wc.Provider,{value:a},e)}function T1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const M1=typeof Object.is=="function"?Object.is:T1,{useState:A1,useEffect:P1,useLayoutEffect:I1,useDebugValue:D1}=Hr;function R1(e,n,t){const r=n(),[{inst:i},o]=A1({inst:{value:r,getSnapshot:n}});return I1(()=>{i.value=r,i.getSnapshot=n,es(i)&&o({inst:i})},[e,r,n]),P1(()=>(es(i)&&o({inst:i}),e(()=>{es(i)&&o({inst:i})})),[e]),D1(r),r}function es(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!M1(t,r)}catch{return!0}}function N1(e,n,t){return n()}const _1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L1=!_1,O1=L1?N1:R1,F1="useSyncExternalStore"in Hr?(e=>e.useSyncExternalStore)(Hr):O1;function V1(e){return F1(e.subscribe,e.getSnapshot,e.getSnapshot)}function U1(e,n){let t=e(),r=new Set;return{getSnapshot(){return t},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...o){let a=n[i].call(t,...o);a&&(t=a,r.forEach(l=>l()))}}}function B1(){let e;return{before({doc:n}){var t;let r=n.documentElement;e=((t=n.defaultView)!=null?t:window).innerWidth-r.clientWidth},after({doc:n,d:t}){let r=n.documentElement,i=r.clientWidth-r.offsetWidth,o=e-i;t.style(r,"paddingRight",`${o}px`)}}}function $1(){if(!t1())return{};let e;return{before(){e=window.pageYOffset},after({doc:n,d:t,meta:r}){function i(a){return r.containers.flatMap(l=>l()).some(l=>l.contains(a))}t.style(n.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;t.addEventListener(n,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:s}=new URL(l.href),u=n.querySelector(s);u&&!i(u)&&(o=u)}catch{}},!0),t.addEventListener(n,"touchmove",a=>{a.target instanceof HTMLElement&&!i(a.target)&&a.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function z1(){return{before({doc:e,d:n}){n.style(e.documentElement,"overflow","hidden")}}}function j1(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let or=U1(()=>new Map,{PUSH(e,n){var t;let r=(t=this.get(e))!=null?t:{doc:e,count:0,d:St(),meta:new Set};return r.count++,r.meta.add(n),this.set(e,r),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let r={doc:e,d:n,meta:j1(t)},i=[$1(),B1(),z1()];i.forEach(({before:o})=>o==null?void 0:o(r)),i.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});or.subscribe(()=>{let e=or.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let r=n.get(t.doc)==="hidden",i=t.count!==0;(i&&!r||!i&&r)&&or.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&or.dispatch("TEARDOWN",t)}});function H1(e,n,t){let r=V1(or),i=e?r.get(e):void 0,o=i?i.count>0:!1;return en(()=>{if(!(!e||!n))return or.dispatch("PUSH",e,t),()=>or.dispatch("POP",e,t)},[n,e]),o}let ns=new Map,Ti=new Map;function of(e,n=!0){en(()=>{var t;if(!n)return;let r=typeof e=="function"?e():e.current;if(!r)return;function i(){var a;if(!r)return;let l=(a=Ti.get(r))!=null?a:1;if(l===1?Ti.delete(r):Ti.set(r,l-1),l!==1)return;let s=ns.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,ns.delete(r))}let o=(t=Ti.get(r))!=null?t:0;return Ti.set(r,o+1),o!==0||(ns.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),i},[e,n])}var W1=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(W1||{}),q1=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(q1||{});let K1={[0](e,n){return e.titleId===n.id?e:{...e,titleId:n.id}}},Ba=w.createContext(null);Ba.displayName="DialogContext";function Co(e){let n=w.useContext(Ba);if(n===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Co),t}return n}function Y1(e,n,t=()=>[document.body]){H1(e,n,r=>{var i;return{containers:[...(i=r.containers)!=null?i:[],t]}})}function Q1(e,n){return Oe(n.type,K1,e,n)}let G1="div",J1=Wt.RenderStrategy|Wt.Static;function X1(e,n){let t=Kn(),{id:r=`headlessui-dialog-${t}`,open:i,onClose:o,initialFocus:a,__demoMode:l=!1,...s}=e,[u,p]=w.useState(0),h=ko();i===void 0&&h!==null&&(i=(h&Le.Open)===Le.Open);let y=w.useRef(new Set),k=w.useRef(null),v=Qe(k,n),c=w.useRef(null),C=xo(k),m=e.hasOwnProperty("open")||h!==null,d=e.hasOwnProperty("onClose");if(!m&&!d)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!m)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!d)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof i!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let b=i?0:1,[P,M]=w.useReducer(Q1,{titleId:null,descriptionId:null,panelRef:w.createRef()}),R=de(()=>o(!1)),I=de(ue=>M({type:0,id:ue})),L=ri()?l?!1:b===0:!1,J=u>1,W=w.useContext(Ba)!==null,ae=J?"parent":"leaf",he=h!==null?(h&Le.Closing)===Le.Closing:!1,ge=(()=>W||he?!1:L)(),Pe=w.useCallback(()=>{var ue,Ie;return(Ie=Array.from((ue=C==null?void 0:C.querySelectorAll("body > *"))!=null?ue:[]).find(De=>De.id==="headlessui-portal-root"?!1:De.contains(c.current)&&De instanceof HTMLElement))!=null?Ie:null},[c]);of(Pe,ge);let We=(()=>J?!0:L)(),yn=w.useCallback(()=>{var ue,Ie;return(Ie=Array.from((ue=C==null?void 0:C.querySelectorAll("[data-headlessui-portal]"))!=null?ue:[]).find(De=>De.contains(c.current)&&De instanceof HTMLElement))!=null?Ie:null},[c]);of(yn,We);let Ge=de(()=>{var ue,Ie;return[...Array.from((ue=C==null?void 0:C.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?ue:[]).filter(De=>!(De===document.body||De===document.head||!(De instanceof HTMLElement)||De.contains(c.current)||P.panelRef.current&&De.contains(P.panelRef.current))),(Ie=P.panelRef.current)!=null?Ie:k.current]}),z=(()=>!(!L||J))();Hp(()=>Ge(),R,z);let j=(()=>!(J||b!==0))();yc(C==null?void 0:C.defaultView,"keydown",ue=>{j&&(ue.defaultPrevented||ue.key===Ce.Escape&&(ue.preventDefault(),ue.stopPropagation(),R()))});let ee=(()=>!(he||b!==0||W))();Y1(C,ee,Ge),w.useEffect(()=>{if(b!==0||!k.current)return;let ue=new ResizeObserver(Ie=>{for(let De of Ie){let Mn=De.target.getBoundingClientRect();Mn.x===0&&Mn.y===0&&Mn.width===0&&Mn.height===0&&R()}});return ue.observe(k.current),()=>ue.disconnect()},[b,k,R]);let[ne,be]=w1(),Je=w.useMemo(()=>[{dialogState:b,close:R,setTitleId:I},P],[b,P,R,I]),fn=w.useMemo(()=>({open:b===0}),[b]),it={ref:v,id:r,role:"dialog","aria-modal":b===0?!0:void 0,"aria-labelledby":P.titleId,"aria-describedby":ne};return ie.createElement(E1,{type:"Dialog",enabled:b===0,element:k,onUpdate:de((ue,Ie,De)=>{Ie==="Dialog"&&Oe(ue,{[cu.Add](){y.current.add(De),p(Mn=>Mn+1)},[cu.Remove](){y.current.add(De),p(Mn=>Mn-1)}})})},ie.createElement(su,{force:!0},ie.createElement(uu,null,ie.createElement(Ba.Provider,{value:Je},ie.createElement(uu.Group,{target:k},ie.createElement(su,{force:!1},ie.createElement(be,{slot:fn,name:"Dialog.Description"},ie.createElement(Ei,{initialFocus:a,containers:y,features:L?Oe(ae,{parent:Ei.features.RestoreFocus,leaf:Ei.features.All&~Ei.features.FocusLock}):Ei.features.None},He({ourProps:it,theirProps:s,slot:fn,defaultTag:G1,features:J1,visible:b===0,name:"Dialog"})))))))),ie.createElement(lu,{features:Ua.Hidden,ref:c}))}let Z1="div";function ew(e,n){let t=Kn(),{id:r=`headlessui-dialog-overlay-${t}`,...i}=e,[{dialogState:o,close:a}]=Co("Dialog.Overlay"),l=Qe(n),s=de(p=>{if(p.target===p.currentTarget){if(mc(p.currentTarget))return p.preventDefault();p.preventDefault(),p.stopPropagation(),a()}}),u=w.useMemo(()=>({open:o===0}),[o]);return He({ourProps:{ref:l,id:r,"aria-hidden":!0,onClick:s},theirProps:i,slot:u,defaultTag:Z1,name:"Dialog.Overlay"})}let nw="div";function tw(e,n){let t=Kn(),{id:r=`headlessui-dialog-backdrop-${t}`,...i}=e,[{dialogState:o},a]=Co("Dialog.Backdrop"),l=Qe(n);w.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let s=w.useMemo(()=>({open:o===0}),[o]);return ie.createElement(su,{force:!0},ie.createElement(uu,null,He({ourProps:{ref:l,id:r,"aria-hidden":!0},theirProps:i,slot:s,defaultTag:nw,name:"Dialog.Backdrop"})))}let rw="div";function iw(e,n){let t=Kn(),{id:r=`headlessui-dialog-panel-${t}`,...i}=e,[{dialogState:o},a]=Co("Dialog.Panel"),l=Qe(n,a.panelRef),s=w.useMemo(()=>({open:o===0}),[o]),u=de(p=>{p.stopPropagation()});return He({ourProps:{ref:l,id:r,onClick:u},theirProps:i,slot:s,defaultTag:rw,name:"Dialog.Panel"})}let ow="h2";function aw(e,n){let t=Kn(),{id:r=`headlessui-dialog-title-${t}`,...i}=e,[{dialogState:o,setTitleId:a}]=Co("Dialog.Title"),l=Qe(n);w.useEffect(()=>(a(r),()=>a(null)),[r,a]);let s=w.useMemo(()=>({open:o===0}),[o]);return He({ourProps:{ref:l,id:r},theirProps:i,slot:s,defaultTag:ow,name:"Dialog.Title"})}let lw=Be(X1),sw=Be(tw),uw=Be(iw),cw=Be(ew),dw=Be(aw),ts=Object.assign(lw,{Backdrop:sw,Panel:uw,Overlay:cw,Title:dw,Description:x1});var af;let fw=(af=ie.startTransition)!=null?af:function(e){e()};var hw=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(hw||{}),pw=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(pw||{});let mw={[0]:e=>({...e,disclosureState:Oe(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},[3](e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},bc=w.createContext(null);bc.displayName="DisclosureContext";function Sc(e){let n=w.useContext(bc);if(n===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Sc),t}return n}let kc=w.createContext(null);kc.displayName="DisclosureAPIContext";function rm(e){let n=w.useContext(kc);if(n===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,rm),t}return n}let xc=w.createContext(null);xc.displayName="DisclosurePanelContext";function gw(){return w.useContext(xc)}function vw(e,n){return Oe(n.type,mw,e,n)}let yw=w.Fragment;function ww(e,n){let{defaultOpen:t=!1,...r}=e,i=w.useRef(null),o=Qe(n,Kp(C=>{i.current=C},e.as===void 0||e.as===w.Fragment)),a=w.useRef(null),l=w.useRef(null),s=w.useReducer(vw,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:l,panelRef:a,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:p},h]=s,y=de(C=>{h({type:1});let m=So(i);if(!m||!p)return;let d=(()=>C?C instanceof HTMLElement?C:C.current instanceof HTMLElement?C.current:m.getElementById(p):m.getElementById(p))();d==null||d.focus()}),k=w.useMemo(()=>({close:y}),[y]),v=w.useMemo(()=>({open:u===0,close:y}),[u,y]),c={ref:o};return ie.createElement(bc.Provider,{value:s},ie.createElement(kc.Provider,{value:k},ie.createElement(vc,{value:Oe(u,{[0]:Le.Open,[1]:Le.Closed})},He({ourProps:c,theirProps:r,slot:v,defaultTag:yw,name:"Disclosure"}))))}let bw="button";function Sw(e,n){let t=Kn(),{id:r=`headlessui-disclosure-button-${t}`,...i}=e,[o,a]=Sc("Disclosure.Button"),l=gw(),s=l===null?!1:l===o.panelId,u=w.useRef(null),p=Qe(u,n,s?null:o.buttonRef);w.useEffect(()=>{if(!s)return a({type:2,buttonId:r}),()=>{a({type:2,buttonId:null})}},[r,a,s]);let h=de(m=>{var d;if(s){if(o.disclosureState===1)return;switch(m.key){case Ce.Space:case Ce.Enter:m.preventDefault(),m.stopPropagation(),a({type:0}),(d=o.buttonRef.current)==null||d.focus();break}}else switch(m.key){case Ce.Space:case Ce.Enter:m.preventDefault(),m.stopPropagation(),a({type:0});break}}),y=de(m=>{switch(m.key){case Ce.Space:m.preventDefault();break}}),k=de(m=>{var d;mc(m.currentTarget)||e.disabled||(s?(a({type:0}),(d=o.buttonRef.current)==null||d.focus()):a({type:0}))}),v=w.useMemo(()=>({open:o.disclosureState===0}),[o]),c=Wp(e,u),C=s?{ref:p,type:c,onKeyDown:h,onClick:k}:{ref:p,id:r,type:c,"aria-expanded":e.disabled?void 0:o.disclosureState===0,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:h,onKeyUp:y,onClick:k};return He({ourProps:C,theirProps:i,slot:v,defaultTag:bw,name:"Disclosure.Button"})}let kw="div",xw=Wt.RenderStrategy|Wt.Static;function Cw(e,n){let t=Kn(),{id:r=`headlessui-disclosure-panel-${t}`,...i}=e,[o,a]=Sc("Disclosure.Panel"),{close:l}=rm("Disclosure.Panel"),s=Qe(n,o.panelRef,k=>{fw(()=>a({type:k?4:5}))});w.useEffect(()=>(a({type:3,panelId:r}),()=>{a({type:3,panelId:null})}),[r,a]);let u=ko(),p=(()=>u!==null?(u&Le.Open)===Le.Open:o.disclosureState===0)(),h=w.useMemo(()=>({open:o.disclosureState===0,close:l}),[o,l]),y={ref:s,id:r};return ie.createElement(xc.Provider,{value:o.panelId},He({ourProps:y,theirProps:i,slot:h,defaultTag:kw,features:xw,visible:p,name:"Disclosure.Panel"}))}let Ew=Be(ww),Tw=Be(Sw),Mw=Be(Cw),Mi=Object.assign(Ew,{Button:Tw,Panel:Mw});var Aw=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Aw||{}),Pw=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Pw||{}),Iw=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(Iw||{});function rs(e,n=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,r=jp(n(e.items.slice()),o=>o.dataRef.current.domRef.current),i=t?r.indexOf(t):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}let Dw={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,n)=>{var t;let r=rs(e),i=Gy(n,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:i,activationTrigger:(t=n.trigger)!=null?t:1}},[3]:(e,n)=>{let t=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),i=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find(a=>{var l;return((l=a.dataRef.current.textValue)==null?void 0:l.startsWith(r))&&!a.dataRef.current.disabled}),o=i?e.items.indexOf(i):-1;return o===-1||o===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:o,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,n)=>{let t=rs(e,r=>[...r,{id:n.id,dataRef:n.dataRef}]);return{...e,...t}},[6]:(e,n)=>{let t=rs(e,r=>{let i=r.findIndex(o=>o.id===n.id);return i!==-1&&r.splice(i,1),r});return{...e,...t,activationTrigger:1}}},Cc=w.createContext(null);Cc.displayName="MenuContext";function cl(e){let n=w.useContext(Cc);if(n===null){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,cl),t}return n}function Rw(e,n){return Oe(n.type,Dw,e,n)}let Nw=w.Fragment;function _w(e,n){let t=w.useReducer(Rw,{menuState:1,buttonRef:w.createRef(),itemsRef:w.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:i,buttonRef:o},a]=t,l=Qe(n);Hp([o,i],(y,k)=>{var v;a({type:1}),pc(k,hc.Loose)||(y.preventDefault(),(v=o.current)==null||v.focus())},r===0);let s=de(()=>{a({type:1})}),u=w.useMemo(()=>({open:r===0,close:s}),[r,s]),p=e,h={ref:l};return ie.createElement(Cc.Provider,{value:t},ie.createElement(vc,{value:Oe(r,{[0]:Le.Open,[1]:Le.Closed})},He({ourProps:h,theirProps:p,slot:u,defaultTag:Nw,name:"Menu"})))}let Lw="button";function Ow(e,n){var t;let r=Kn(),{id:i=`headlessui-menu-button-${r}`,...o}=e,[a,l]=cl("Menu.Button"),s=Qe(a.buttonRef,n),u=bo(),p=de(c=>{switch(c.key){case Ce.Space:case Ce.Enter:case Ce.ArrowDown:c.preventDefault(),c.stopPropagation(),l({type:0}),u.nextFrame(()=>l({type:2,focus:jn.First}));break;case Ce.ArrowUp:c.preventDefault(),c.stopPropagation(),l({type:0}),u.nextFrame(()=>l({type:2,focus:jn.Last}));break}}),h=de(c=>{switch(c.key){case Ce.Space:c.preventDefault();break}}),y=de(c=>{if(mc(c.currentTarget))return c.preventDefault();e.disabled||(a.menuState===0?(l({type:1}),u.nextFrame(()=>{var C;return(C=a.buttonRef.current)==null?void 0:C.focus({preventScroll:!0})})):(c.preventDefault(),l({type:0})))}),k=w.useMemo(()=>({open:a.menuState===0}),[a]),v={ref:s,id:i,type:Wp(e,a.buttonRef),"aria-haspopup":"menu","aria-controls":(t=a.itemsRef.current)==null?void 0:t.id,"aria-expanded":e.disabled?void 0:a.menuState===0,onKeyDown:p,onKeyUp:h,onClick:y};return He({ourProps:v,theirProps:o,slot:k,defaultTag:Lw,name:"Menu.Button"})}let Fw="div",Vw=Wt.RenderStrategy|Wt.Static;function Uw(e,n){var t,r;let i=Kn(),{id:o=`headlessui-menu-items-${i}`,...a}=e,[l,s]=cl("Menu.Items"),u=Qe(l.itemsRef,n),p=xo(l.itemsRef),h=bo(),y=ko(),k=(()=>y!==null?(y&Le.Open)===Le.Open:l.menuState===0)();w.useEffect(()=>{let d=l.itemsRef.current;d&&l.menuState===0&&d!==(p==null?void 0:p.activeElement)&&d.focus({preventScroll:!0})},[l.menuState,l.itemsRef,p]),Yy({container:l.itemsRef.current,enabled:l.menuState===0,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let v=de(d=>{var b,P;switch(h.dispose(),d.key){case Ce.Space:if(l.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),s({type:3,value:d.key});case Ce.Enter:if(d.preventDefault(),d.stopPropagation(),s({type:1}),l.activeItemIndex!==null){let{dataRef:M}=l.items[l.activeItemIndex];(P=(b=M.current)==null?void 0:b.domRef.current)==null||P.click()}zp(l.buttonRef.current);break;case Ce.ArrowDown:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:jn.Next});case Ce.ArrowUp:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:jn.Previous});case Ce.Home:case Ce.PageUp:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:jn.First});case Ce.End:case Ce.PageDown:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:jn.Last});case Ce.Escape:d.preventDefault(),d.stopPropagation(),s({type:1}),St().nextFrame(()=>{var M;return(M=l.buttonRef.current)==null?void 0:M.focus({preventScroll:!0})});break;case Ce.Tab:d.preventDefault(),d.stopPropagation(),s({type:1}),St().nextFrame(()=>{Ky(l.buttonRef.current,d.shiftKey?dt.Previous:dt.Next)});break;default:d.key.length===1&&(s({type:3,value:d.key}),h.setTimeout(()=>s({type:4}),350));break}}),c=de(d=>{switch(d.key){case Ce.Space:d.preventDefault();break}}),C=w.useMemo(()=>({open:l.menuState===0}),[l]),m={"aria-activedescendant":l.activeItemIndex===null||(t=l.items[l.activeItemIndex])==null?void 0:t.id,"aria-labelledby":(r=l.buttonRef.current)==null?void 0:r.id,id:o,onKeyDown:v,onKeyUp:c,role:"menu",tabIndex:0,ref:u};return He({ourProps:m,theirProps:a,slot:C,defaultTag:Fw,features:Vw,visible:k,name:"Menu.Items"})}let Bw=w.Fragment;function $w(e,n){let t=Kn(),{id:r=`headlessui-menu-item-${t}`,disabled:i=!1,...o}=e,[a,l]=cl("Menu.Item"),s=a.activeItemIndex!==null?a.items[a.activeItemIndex].id===r:!1,u=w.useRef(null),p=Qe(n,u);en(()=>{if(a.menuState!==0||!s||a.activationTrigger===0)return;let P=St();return P.requestAnimationFrame(()=>{var M,R;(R=(M=u.current)==null?void 0:M.scrollIntoView)==null||R.call(M,{block:"nearest"})}),P.dispose},[u,s,a.menuState,a.activationTrigger,a.activeItemIndex]);let h=w.useRef({disabled:i,domRef:u});en(()=>{h.current.disabled=i},[h,i]),en(()=>{var P,M;h.current.textValue=(M=(P=u.current)==null?void 0:P.textContent)==null?void 0:M.toLowerCase()},[h,u]),en(()=>(l({type:5,id:r,dataRef:h}),()=>l({type:6,id:r})),[h,r]);let y=de(()=>{l({type:1})}),k=de(P=>{if(i)return P.preventDefault();l({type:1}),zp(a.buttonRef.current)}),v=de(()=>{if(i)return l({type:2,focus:jn.Nothing});l({type:2,focus:jn.Specific,id:r})}),c=n1(),C=de(P=>c.update(P)),m=de(P=>{c.wasMoved(P)&&(i||s||l({type:2,focus:jn.Specific,id:r,trigger:0}))}),d=de(P=>{c.wasMoved(P)&&(i||s&&l({type:2,focus:jn.Nothing}))}),b=w.useMemo(()=>({active:s,disabled:i,close:y}),[s,i,y]);return He({ourProps:{id:r,ref:p,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,disabled:void 0,onClick:k,onFocus:v,onPointerEnter:C,onMouseEnter:C,onPointerMove:m,onMouseMove:m,onPointerLeave:d,onMouseLeave:d},theirProps:o,slot:b,defaultTag:Bw,name:"Menu.Item"})}let zw=Be(_w),jw=Be(Ow),Hw=Be(Uw),Ww=Be($w),Un=Object.assign(zw,{Button:jw,Items:Hw,Item:Ww});function qw(e=0){let[n,t]=w.useState(e),r=w.useCallback(l=>t(s=>s|l),[n]),i=w.useCallback(l=>Boolean(n&l),[n]),o=w.useCallback(l=>t(s=>s&~l),[t]),a=w.useCallback(l=>t(s=>s^l),[t]);return{flags:n,addFlag:r,hasFlag:i,removeFlag:o,toggleFlag:a}}function Kw(e){let n={called:!1};return(...t)=>{if(!n.called)return n.called=!0,e(...t)}}function is(e,...n){e&&n.length>0&&e.classList.add(...n)}function os(e,...n){e&&n.length>0&&e.classList.remove(...n)}function Yw(e,n){let t=St();if(!e)return t.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[o,a]=[r,i].map(l=>{let[s=0]=l.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,p)=>p-u);return s});if(o+a!==0){let l=t.addEventListener(e,"transitionend",s=>{s.target===s.currentTarget&&(n(),l())})}else n();return t.add(()=>n()),t.dispose}function Qw(e,n,t,r){let i=t?"enter":"leave",o=St(),a=r!==void 0?Kw(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let l=Oe(i,{enter:()=>n.enter,leave:()=>n.leave}),s=Oe(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),u=Oe(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return os(e,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),is(e,...l,...u),o.nextFrame(()=>{os(e,...u),is(e,...s),Yw(e,()=>(os(e,...l),is(e,...n.entered),a()))}),o.dispose}function Gw({container:e,direction:n,classes:t,onStart:r,onStop:i}){let o=ul(),a=bo(),l=gt(n);en(()=>{let s=St();a.add(s.dispose);let u=e.current;if(u&&l.current!=="idle"&&o.current)return s.dispose(),r.current(l.current),s.add(Qw(u,t.current,l.current==="enter",()=>{s.dispose(),i.current(l.current)})),s.dispose},[n])}function Xt(e=""){return e.split(" ").filter(n=>n.trim().length>1)}let dl=w.createContext(null);dl.displayName="TransitionContext";var Jw=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Jw||{});function Xw(){let e=w.useContext(dl);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Zw(){let e=w.useContext(fl);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let fl=w.createContext(null);fl.displayName="NestingContext";function hl(e){return"children"in e?hl(e.children):e.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function im(e,n){let t=gt(e),r=w.useRef([]),i=ul(),o=bo(),a=de((k,v=pt.Hidden)=>{let c=r.current.findIndex(({el:C})=>C===k);c!==-1&&(Oe(v,{[pt.Unmount](){r.current.splice(c,1)},[pt.Hidden](){r.current[c].state="hidden"}}),o.microTask(()=>{var C;!hl(r)&&i.current&&((C=t.current)==null||C.call(t))}))}),l=de(k=>{let v=r.current.find(({el:c})=>c===k);return v?v.state!=="visible"&&(v.state="visible"):r.current.push({el:k,state:"visible"}),()=>a(k,pt.Unmount)}),s=w.useRef([]),u=w.useRef(Promise.resolve()),p=w.useRef({enter:[],leave:[],idle:[]}),h=de((k,v,c)=>{s.current.splice(0),n&&(n.chains.current[v]=n.chains.current[v].filter(([C])=>C!==k)),n==null||n.chains.current[v].push([k,new Promise(C=>{s.current.push(C)})]),n==null||n.chains.current[v].push([k,new Promise(C=>{Promise.all(p.current[v].map(([m,d])=>d)).then(()=>C())})]),v==="enter"?u.current=u.current.then(()=>n==null?void 0:n.wait.current).then(()=>c(v)):c(v)}),y=de((k,v,c)=>{Promise.all(p.current[v].splice(0).map(([C,m])=>m)).then(()=>{var C;(C=s.current.shift())==null||C()}).then(()=>c(v))});return w.useMemo(()=>({children:r,register:l,unregister:a,onStart:h,onStop:y,wait:u,chains:p}),[l,a,r,h,y,p,u])}function e2(){}let n2=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function lf(e){var n;let t={};for(let r of n2)t[r]=(n=e[r])!=null?n:e2;return t}function t2(e){let n=w.useRef(lf(e));return w.useEffect(()=>{n.current=lf(e)},[e]),n}let r2="div",om=Wt.RenderStrategy;function i2(e,n){let{beforeEnter:t,afterEnter:r,beforeLeave:i,afterLeave:o,enter:a,enterFrom:l,enterTo:s,entered:u,leave:p,leaveFrom:h,leaveTo:y,...k}=e,v=w.useRef(null),c=Qe(v,n),C=k.unmount?pt.Unmount:pt.Hidden,{show:m,appear:d,initial:b}=Xw(),[P,M]=w.useState(m?"visible":"hidden"),R=Zw(),{register:I,unregister:L}=R,J=w.useRef(null);w.useEffect(()=>I(v),[I,v]),w.useEffect(()=>{if(C===pt.Hidden&&v.current){if(m&&P!=="visible"){M("visible");return}return Oe(P,{hidden:()=>L(v),visible:()=>I(v)})}},[P,v,I,L,m,C]);let W=gt({enter:Xt(a),enterFrom:Xt(l),enterTo:Xt(s),entered:Xt(u),leave:Xt(p),leaveFrom:Xt(h),leaveTo:Xt(y)}),ae=t2({beforeEnter:t,afterEnter:r,beforeLeave:i,afterLeave:o}),he=ri();w.useEffect(()=>{if(he&&P==="visible"&&v.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[v,P,he]);let ge=b&&!d,Pe=(()=>!he||ge||J.current===m?"idle":m?"enter":"leave")(),We=qw(0),yn=de(ne=>Oe(ne,{enter:()=>{We.addFlag(Le.Opening),ae.current.beforeEnter()},leave:()=>{We.addFlag(Le.Closing),ae.current.beforeLeave()},idle:()=>{}})),Ge=de(ne=>Oe(ne,{enter:()=>{We.removeFlag(Le.Opening),ae.current.afterEnter()},leave:()=>{We.removeFlag(Le.Closing),ae.current.afterLeave()},idle:()=>{}})),z=im(()=>{M("hidden"),L(v)},R);Gw({container:v,classes:W,direction:Pe,onStart:gt(ne=>{z.onStart(v,ne,yn)}),onStop:gt(ne=>{z.onStop(v,ne,Ge),ne==="leave"&&!hl(z)&&(M("hidden"),L(v))})}),w.useEffect(()=>{ge&&(C===pt.Hidden?J.current=null:J.current=m)},[m,ge,P]);let j=k,ee={ref:c};return d&&m&&nt.isServer&&(j={...j,className:Yp(k.className,...W.current.enter,...W.current.enterFrom)}),ie.createElement(fl.Provider,{value:z},ie.createElement(vc,{value:Oe(P,{visible:Le.Open,hidden:Le.Closed})|We.flags},He({ourProps:ee,theirProps:j,defaultTag:r2,features:om,visible:P==="visible",name:"Transition.Child"})))}function o2(e,n){let{show:t,appear:r=!1,unmount:i,...o}=e,a=w.useRef(null),l=Qe(a,n);ri();let s=ko();if(t===void 0&&s!==null&&(t=(s&Le.Open)===Le.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,p]=w.useState(t?"visible":"hidden"),h=im(()=>{p("hidden")}),[y,k]=w.useState(!0),v=w.useRef([t]);en(()=>{y!==!1&&v.current[v.current.length-1]!==t&&(v.current.push(t),k(!1))},[v,t]);let c=w.useMemo(()=>({show:t,appear:r,initial:y}),[t,r,y]);w.useEffect(()=>{if(t)p("visible");else if(!hl(h))p("hidden");else{let m=a.current;if(!m)return;let d=m.getBoundingClientRect();d.x===0&&d.y===0&&d.width===0&&d.height===0&&p("hidden")}},[t,h]);let C={unmount:i};return ie.createElement(fl.Provider,{value:h},ie.createElement(dl.Provider,{value:c},He({ourProps:{...C,as:w.Fragment,children:ie.createElement(am,{ref:l,...C,...o})},theirProps:{},defaultTag:w.Fragment,features:om,visible:u==="visible",name:"Transition"})))}function a2(e,n){let t=w.useContext(dl)!==null,r=ko()!==null;return ie.createElement(ie.Fragment,null,!t&&r?ie.createElement(du,{ref:n,...e}):ie.createElement(am,{ref:n,...e}))}let du=Be(o2),am=Be(i2),l2=Be(a2),Wi=Object.assign(du,{Child:l2,Root:du});function s2({title:e,imgUrl:n,stack:t,link:r,blurb:i}){const[o,a]=w.useState(!1),l=w.useRef(null);return X(tt,{children:[X("button",{onClick:()=>a(!0),rel:"noopener noreferrer",className:`bg-gray-50 dark:bg-black border-2 border-stone-900 
                dark:border-white rounded-md overflow-hidden shadow-sm 
                shadow-purple-500 dark:shadow-orange-500`,children:[x("img",{src:n,alt:"portfolio",className:"w-full h-36 md:h-48 object-cover cursor-pointer"}),X("div",{className:"w-full p-4",children:[x("h3",{className:"text-lg md:text-xl mb-2 md:mb-3 font-semibold","dark:text-white":!0,children:e}),x("p",{className:`flex flex-wrap gap-2 flex-row items-center justify-start 
                text-xs md:text-sm dark:text-white dark:black`,children:t.map(s=>x("span",{className:"inline-block px-2 py-1 font-semibold border-2 border-stone-900 bg-white dark:bg-black dark:border-white rounded-md",children:s}))})]})]}),x(Wi.Root,{show:o,as:w.Fragment,children:X(ts,{as:"div",className:"relative z-10",initialFocus:l,onClose:a,children:[x(Wi.Child,{as:w.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:x("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),x("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:x("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:x(Wi.Child,{as:w.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:X(ts.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[x("div",{className:"bg-white dark:bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:x("div",{className:"sm:flex sm:items-start",children:X("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[x(ts.Title,{as:"h3",className:"text-base dark:text-white font-semibold leading-6 text-gray-900",children:e}),x("div",{className:"mt-2",children:x("p",{className:"text-sm text-gray-500 dark:text-gray-200",children:i})})]})})}),X("div",{className:"bg-gray-50 dark:bg-gray-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[r==="#"?null:x("a",{href:r,target:r==="#"?"_self":"_blank",className:"inline-flex w-full justify-center rounded-md bg-purple-500 dark:bg-orange-500 px-3 py-2 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>a(!1),children:"Go To Website"}),x("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>a(!1),ref:l,children:"Cancel"})]})]})})})})]})})]})}function u2(){return x("div",{className:"flex flex-col md:flex-row items-center justify-center scroll-p-8 ",children:x("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ",children:By.map(e=>x(s2,{imgUrl:e.imgUrl,title:e.title,stack:e.stack,link:e.link,blurb:e.blurb,className:"shadow-sm shadow-violet-900"}))})})}const c2=[{year:"Today",title:"Sr Manager of Projects and Technology",duration:"2 Years",details:"Migrated SharePoint apps to Teams as well as created new PowerApps and PowerAutomate flows. Migrated Twilio application from Excel and sheets to a PowerApp. Migrated from SugarCRM to Salesforce. Installed and configured Ubiquity security cameras, NVR, APs, and access control. Managed the transistion to remote work during the pandemic while simutaneously migrating from on-prem to the cloud. Implemented contactless visitor check-in via Balena.IO project. Used the PowerPlatform to create global automation tools for managing the continuous improvement projects and resources."},{year:"2017",title:"IT Manager",duration:"4 Years",details:"Worked extensively on SharePoint custom applications and workflows. Migrated from SAP CRM to SugarCRM Cloud. Set up and configured a global on prem SugarCRM instance. Installed Starleaf/ClickShare conference room systems. Installed Cisco Wifi controller and 18 APs with AD integration. Managed local QlikSense applications linked to SAP, SugarCRM, and excel workbooks. Installed and configured Hikvision security cameras and NVR. Implemented LiquidPlanner for operations, engineering, and service project management. Championed a local continuous improvement initiative started by our parent company in Germany."},{year:"2015",title:"IT Specialist",duration:"2 Years",details:"Managed on prem AD, file servers, print servers, IT budgets and procurement, service contracts, SAP users, and migrated company intranet to SharePoint 2013. Created the Twilio Emergency Response app for automating ringdown calls and sms."},{year:"2013",title:"Laboratory Technician",duration:"2 Years",details:"Ran particle size reduction feasibiility testing, used Horiba and Malvern Instruments partical size analyzers, wrote test reports and communicated findings with customers. Was also in charge of laboratory supplies procurement and hazardous shipping. Occasional updates to Allen Bradley PLC, HMI, and Drive programming."}];function d2({year:e,title:n,duration:t,details:r}){return e==="Today"?x("ol",{className:"flex flex-col md:flex-row relative border-l border-violet-400 dark:border-orange-700",children:X("li",{className:"mb-10 ml-4",children:[x("div",{className:"absolute w-3 h-3 bg-violet-200 rouded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-sky-700"}),X("p",{className:"flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm",children:[x("span",{className:`inline-block px-2 py1 font-semibold text-stone-900 
                    dark:text-stone-800 bg-sky-500 dark:bg-orange-700 rounded-md
                    `,children:e}),x("h3",{className:"text-lg font-semibold text-stone-900 dark:text-white",children:n}),x("div",{className:"my-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-500",children:t})]}),x("p",{className:"my-2 text-base font-normal text-stone-600 dark:text-stone-400",children:r})]})}):x("ol",{className:"flex flex-col md:flex-row relative border-l border-violet-400 dark:border-orange-700",children:X("li",{className:"mb-10 ml-4",children:[x("div",{className:"absolute w-3 h-3 bg-violet-200 rouded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-sky-700"}),X("p",{className:"flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm",children:[x("span",{className:`inline-block px-2 py1 font-semibold text-white 
                        dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md
                        `,children:e}),x("h3",{className:"text-lg font-semibold text-stone-900 dark:text-white",children:n}),x("div",{className:"my-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-500",children:t})]}),x("p",{className:"my-2 text-base font-normal text-stone-600 dark:text-stone-400",children:r})]})})}function lm({children:e,id:n}){return x("h1",{id:n&&n,className:"text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-orange-600",children:e})}function f2(){return x("div",{className:"flex flex-col md:flex-row justify-center my-10 ",children:X("div",{className:"w-full md:w-7/12",children:[x(lm,{children:"Timeline"}),c2.map(e=>x(d2,{year:e.year,title:e.title,duration:e.duration,details:e.details}))]})})}function h2(){return x("div",{id:"Contact",className:"flex flex-col mb-10 mx-auto",children:x("div",{className:"flex justify-center items-center",children:X("form",{action:"hhttps://getform.io/f/34a3f97a-ff80-431e-8aaf-a83240c5375d",method:"Post",className:"flex flex-col w-full md:w-7/12 ",children:[x(lm,{children:"Contact"}),x("input",{type:"text",name:"name",placeholder:"Name",className:"p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),x("input",{type:"text",name:"email",placeholder:"Email",className:"my-2 p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),x("textarea",{name:"message",placeholder:"Message",rows:"10",className:"p-2 mb-4 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),x("button",{type:"button",className:`mt-3 text-center inline-block
             px-8 py-3 w-max text-base font-medium 
             rounded-md text-white 
             bg-gradient-to-r from-green-400 via-pink-400 via-red-200 to-sky-500
             dark:from-slate-900 dark:via-purple-900 dark:to-slate-900
             `,children:"Contact Me"})]})})})}function p2(){return X("div",{className:"py-5 text-center",children:[x("p",{children:X("div",{class:"flex flex-wrap justify-center p-2 gap-4",children:[x("a",{href:"https://twit.social/@JohnBoyes",target:"_blank",children:x("button",{class:"text-white font-semibold inline-flex items-center space-x-2 rounded  dark:border-none",children:X("svg",{class:"w-9 h-9 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 10 220 220",children:[x("path",{fill:"#2b90d9",d:"M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"}),x("path",{fill:"#fff",d:"M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"})]})})}),x("a",{href:"https://www.instagram.com/johnboyes.dev",target:"_blank",children:x("button",{class:"font-semibold text-white inline-flex items-center space-x-2 rounded",children:x("svg",{className:"h-9 w-9 fill-white rounded-md bg-gradient-to-br from-purple-800  via-orange-500 to-red-70",xmlns:"http://www.w3.org/2000/svg",viewBox:"-2.5 -2.5 21 21",children:x("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})})}),x("a",{href:"https://www.linkedin.com/in/john-boyes-9258a652/",target:"_blank",children:x("button",{class:"bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded",children:x("svg",{class:"w-5 h-5 fill-current",role:"img",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:x("g",{children:x("path",{d:"M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"})})})})}),x("a",{href:"https://www.youtube.com/channel/UCsrLFCXWbkioeStbXK8t1mQ",target:"_blank",children:x("button",{class:"bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded",children:x("svg",{class:"w-5 h-5 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:x("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"})})})}),x("a",{href:"https://github.com/John-Boyes",target:"_blank",children:x("button",{class:"bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded",children:x("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"w-5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:x("g",{fill:"none",children:x("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"currentColor"})})})})}),x("a",{href:"https://open.spotify.com/show/5bhUys8UthVfUXZLgOZX7Q",target:"_blank",children:x("button",{class:"bg-gray-700 p-2 font-semibold text-green-500 inline-flex items-center space-x-2 rounded",children:x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-spotify",viewBox:"0 0 16 16",children:x("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"})})})})]})}),X("p",{className:"text-sm mt-2 opacity-50",children:["© ",new Date().getFullYear()," Boyes Innovations Group, LLC. All rights reserved."]})]})}function m2(){return x(tt,{children:x("div",{className:`
        bg-gradient-to-bl from-sky-50 via-rose-100 to-sky-500
        dark:from-stone-800 dark:to-sky-900 text-stone-900 
             dark:text-stone-300 min-h-screen font-inter mx-auto `,children:X("div",{className:"max-w-5xl w-11/12 mx-auto",children:[x(Uy,{}),x("div",{id:"Portfolio",class:"section"}),x(u2,{}),x("div",{id:"Timeline",class:"section"}),x(f2,{}),x("div",{id:"Timeline",class:"section"}),x(h2,{}),x("div",{id:"Timeline",class:"section"}),x(p2,{}),x("div",{id:"Timeline",class:"section"})]})})})}const fa=w;function g2({title:e,titleId:n,...t},r){return fa.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":n},t),e?fa.createElement("title",{id:n},e):null,fa.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const v2=fa.forwardRef(g2);var y2=v2;const ha=w;function w2({title:e,titleId:n,...t},r){return ha.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":n},t),e?ha.createElement("title",{id:n},e):null,ha.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}const b2=ha.forwardRef(w2);var S2=b2,k2=y2,x2=S2;function C2(){const[e,n]=w.useState(null);w.useEffect(()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?n("dark"):n("light")},[]);const t=()=>{n(e==="dark"?"light":"dark")};w.useEffect(()=>{e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const r=x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",strokeWidth:2.5,stroke:"currentColor",className:"w-6 h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),i=x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",strokeWidth:2.5,stroke:"currentColor",className:"w-6 h-6",children:x("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})});return window.innerWidth<730?x(tt,{children:x("button",{type:"button",onClick:t,"aria-hidden":"true",className:"p-2 z-10 right-20 top-4 bg-violet-700 dark:bg-orange-500 text-lg p-1 rounded-md",children:e==="dark"?r:i})}):X(tt,{children:[x("span",{class:"mr-2 text-sm font-medium text-yellow-500",children:r}),X("label",{class:"relative inline-flex items-center cursor-pointer",children:[x("input",{id:"toggle",type:"checkbox",checked:e==="dark",class:"sr-only peer",onClick:t}),x("div",{class:`
            w-14 h-7 
            bg-pink-500
            ring-2
            ring-purple-800
            dark:bg-gray-500 
            peer-focus:outline-none 
            rounded-full 
            peer-dark:bg-gray-700
            peer-checked:after:translate-x-full 
            peer-checked:after:border-white 
            after:absolute after:top-0.5 
            after:left-[4px] 
            after:bg-yellow-500 
            dark:after:bg-blue-600 
            after:border-gray-300 
            after:border 
            after:rounded-full 
            after:h-6 after:w-6 
            after:transition-all 
            dark:border-gray-600 
            peer-checked:bg-gray-600
            after:content-[''] 
            `})]}),x("span",{class:"ml-2 text-sm font-medium text-blue-600",children:i})]})}const sf=[{name:"Projects",href:"#Portfolio",current:!1},{name:"Work",href:"#Timeline",current:!1},{name:"Contact",href:"#Contact",current:!1}],uf=[{name:"Transplant Alliance 501(c)(3)",href:"https://transplantalliance.org",target:"_blank"},{name:"Ready Viewer One Podcast",href:"https://readyviewerone.buzzsprout.com/",target:"_blank"}];function lt(...e){return e.filter(Boolean).join(" ")}function E2(e){return x(Mi,{as:"nav",className:"sticky top-0 z-50 bg-sky-500 dark:bg-gray-800 border-b border-purple-600 dark:border-orange-500",children:({open:n})=>X(tt,{children:[x("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:X("div",{className:"relative flex h-16 items-center justify-between",children:[x("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:X(Mi.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[x("span",{className:"sr-only",children:"Open main menu"}),n?x(x2,{className:"block h-6 w-6","aria-hidden":"true"}):x(k2,{className:"block h-6 w-6","aria-hidden":"true"})]})}),X("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[x("div",{className:"flex flex-shrink-0 items-center",children:x("a",{href:"#",children:x("span",{className:"dark:text-orange-500 text-purple-800 font-bold",children:"JohnBoyes.dev"})})}),x("div",{className:"hidden sm:ml-6 sm:block",children:X("div",{className:"flex space-x-4",children:[sf.map(t=>x("a",{href:t.href,className:lt(t.current?"bg-gray-900 text-white":"text-purple-700 dark:text-gray-300 hover:bg-sky-700 dark:hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name)),X(Un,{as:"div",className:"relative inline-block text-left",children:[x("div",{children:x(Un.Button,{className:"text-purple-700 dark:text-gray-300 hover:bg-sky-700 dark:hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ",children:"Passions"})}),x(Wi,{as:w.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:x(Un.Items,{className:`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md
                          bg-stone-200 dark:bg-gray-700 dark:text-white shadow-lg shadow-purple-500 dark:shadow-orange-500 ring-1 ring-black ring-opacity-5 
                          focus:outline-none`,children:x("div",{className:"py-1",children:uf.map(t=>x("a",{href:t.href,target:t.target,className:lt(t.current?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),"aria-current":t.current?"page":void 0,children:t.name},t.name))})})})]})]})})]}),X("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[x(C2,{}),X(Un,{as:"div",className:"relative ml-3",children:[x("div",{children:X(Un.Button,{className:"flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800",children:[x("span",{className:"sr-only",children:"Open user menu"}),x("img",{className:"h-10 w-10 rounded-full",src:"/assets/profile.jpeg",alt:""})]})}),x(Wi,{as:w.Fragment,enter:"transition ease-out duration-500",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:X(Un.Items,{className:`absolute right-0 z-10 mt-2 w-48 origin-top-right 
                      rounded-md bg-stone-200 dark:bg-gray-700 dark:text-white shadow-lg shadow-purple-500 dark:shadow-orange-500 ring-1 ring-black ring-opacity-5 
                      focus:outline-none `,children:[x(Un.Item,{children:({active:t})=>X("a",{href:"https://twit.social/@JohnBoyes",target:"_blank",style:{display:"flex"},className:lt(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 pt-4 pb-2 text-sm "),children:[X("svg",{class:"w-6 h-6 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 10 220 220",children:[x("path",{fill:"#2b90d9",d:"M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"}),x("path",{fill:"#fff",d:"M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"})]}),"  Mastodon"]})}),x(Un.Item,{children:({active:t})=>X("a",{href:"https://www.instagram.com/johnboyes.dev",target:"_blank",style:{display:"flex"},className:lt(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm"),children:[x("svg",{className:"h-6 w-6 fill-white rounded-md bg-gradient-to-br from-purple-800  via-orange-500 to-red-70",xmlns:"http://www.w3.org/2000/svg",viewBox:"-2.5 -2.5 21 21",children:x("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})}),"  Instagram"]})}),x(Un.Item,{children:({active:t})=>X("a",{href:"https://www.linkedin.com/in/john-boyes-9258a652/",target:"_blank",style:{display:"flex"},className:lt(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),children:[x("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 80",children:X("g",{fill:"none","fill-rule":"evenodd",children:[x("path",{d:"M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z",fill:"#007EBB"}),x("path",{d:"M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z",fill:"#FFF"})]})}),"  LinkedIn"]})}),x(Un.Item,{children:({active:t})=>X("a",{href:"https://github.com/John-Boyes",target:"_blank",style:{display:"flex"},className:lt(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),children:[x("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"w-5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:x("g",{fill:"none",children:x("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"currentColor"})})}),"  Github"]})}),x(Un.Item,{children:({active:t})=>X("a",{href:"https://open.spotify.com/show/5bhUys8UthVfUXZLgOZX7Q",target:"_blank",style:{display:"flex"},className:lt(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),children:[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#1db954",class:"bi bi-spotify",viewBox:"0 0 16 16",children:x("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"})}),"  Spotify"]})})]})})]})]})]})}),x(Mi.Panel,{className:"sm:hidden",children:X("div",{className:"space-y-1 px-2 pt-2 pb-3 divide-y divide-gray-500",children:[x("div",{className:"py-1",children:sf.map(t=>x(Mi.Button,{as:"a",href:t.href,className:lt(t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name))}),x("div",{className:"py-1",children:uf.map(t=>x(Mi.Button,{as:"a",href:t.href,className:lt(t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name))})]})})]})})}function T2(){const e=gy();return X(tt,{children:[x(E2,{}),x("div",{id:"detail",className:e.state==="loading"?"loading":"",children:x(Op,{})})]})}var $a={},M2={get exports(){return $a},set exports(e){$a=e}},sm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},um=Object.keys(sm).join("|"),A2=new RegExp(um,"g"),P2=new RegExp(um,""),cm=function(e){return e.replace(A2,function(n){return sm[n]})},I2=function(e){return!!e.match(P2)};M2.exports=cm;$a.has=I2;$a.remove=cm;var cf={},D2={get exports(){return cf},set exports(e){cf=e}};(function(e){(function(n,t){e.exports=t()})(Ai,function(){var n=Object.prototype.toString,t=Object.prototype.hasOwnProperty;function r(v){if(!v||s(v)&&v.length===0)return!0;for(var c in v)if(t.call(v,c))return!1;return!0}function i(v){return n.call(v)}function o(v){return typeof v=="number"||i(v)==="[object Number]"}function a(v){return typeof v=="string"||i(v)==="[object String]"}function l(v){return typeof v=="object"&&i(v)==="[object Object]"}function s(v){return typeof v=="object"&&typeof v.length=="number"&&i(v)==="[object Array]"}function u(v){return typeof v=="boolean"||i(v)==="[object Boolean]"}function p(v){var c=parseInt(v);return c.toString()===v?c:v}function h(v,c,C,m){if(o(c)&&(c=[c]),r(c))return v;if(a(c))return h(v,c.split("."),C,m);var d=p(c[0]);if(c.length===1){var b=v[d];return(b===void 0||!m)&&(v[d]=C),b}return v[d]===void 0&&(o(d)?v[d]=[]:v[d]={}),h(v[d],c.slice(1),C,m)}function y(v,c){if(o(c)&&(c=[c]),!r(v)){if(r(c))return v;if(a(c))return y(v,c.split("."));var C=p(c[0]),m=v[C];if(c.length===1)m!==void 0&&(s(v)?v.splice(C,1):delete v[C]);else if(v[C]!==void 0)return y(v[C],c.slice(1));return v}}var k={};return k.ensureExists=function(v,c,C){return h(v,c,C,!0)},k.set=function(v,c,C,m){return h(v,c,C,m)},k.insert=function(v,c,C,m){var d=k.get(v,c);m=~~m,s(d)||(d=[],k.set(v,c,d)),d.splice(m,0,C)},k.empty=function(v,c){if(r(c))return v;if(!r(v)){var C,m;if(!(C=k.get(v,c)))return v;if(a(C))return k.set(v,c,"");if(u(C))return k.set(v,c,!1);if(o(C))return k.set(v,c,0);if(s(C))C.length=0;else if(l(C))for(m in C)t.call(C,m)&&delete C[m];else return k.set(v,c,null)}},k.push=function(v,c){var C=k.get(v,c);s(C)||(C=[],k.set(v,c,C)),C.push.apply(C,Array.prototype.slice.call(arguments,2))},k.coalesce=function(v,c,C){for(var m,d=0,b=c.length;d<b;d++)if((m=k.get(v,c[d]))!==void 0)return m;return C},k.get=function(v,c,C){if(o(c)&&(c=[c]),r(c))return v;if(r(v))return C;if(a(c))return k.get(v,c.split("."),C);var m=p(c[0]);return c.length===1?v[m]===void 0?C:v[m]:k.get(v[m],c.slice(1),C)},k.del=function(v,c){return y(v,c)},k})})(D2);const fu=[{id:7,modified:"2023-03-16T20:04:02",slug:"disclaimer",title:{rendered:"Disclaimer"},content:{rendered:`
<p><em>This document does not constitute legal advice. It is an aggregation of resources found on the internet and should be used as a starting point for you, the reader’s personal research. When researching, be sure to cycle terms like “import”, “foreign vehicle”, “out of country”, “mini-truck”, “mini truck” and “keijidōsha” “kei” as each state uses different wording in their documents.</em></p>
`,protected:!1}},{id:9,modified:"2023-03-16T20:04:36",slug:"kei-specific-information",title:{rendered:"Kei Specific Information"},content:{rendered:`
<p>Non-USDM and Non-EUDM vehicles do not have a traditional 17 character VIN(ISO 3779:2009), instead they have shortened VIN’s. Some states may use <a href="https://www.nhtsa.gov/vin-decoder">https://www.nhtsa.gov/vin-decoder</a> as a Pass/Fail on whether a car can be registered normally, or if it must be registered as Antique or Collector(PA). While there are workarounds such as registering in a state that allows kei vehicles to have full title and registration, then transferring the title to your home state, there are no guarantees it will work.</p>



<p>Many states also consider Kei vehicles specifically to not be roadworthy and in many cases restrict these vehicles to antique registrations, or block them completely from being registered for on road use. To learn more about restrictions of registering as an antique vehicle, <a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.s7j3j0nn4i6p">click here</a> to jump to the Antique section below.</p>



<p>See also, <a href="https://www.theautopian.com/states-banned-japanese-imports-for-no-good-reason-and-the-people-are-fighting-back/">An article</a> describing how in November 2021 lobbyists resurrected a 2010 “best practices” letter from the <a href="https://www.aamva.org/default.aspx">American Association of Motor Vehicles</a> and urged all states to ban kei class vehicles.</p>
`,protected:!1}},{id:11,modified:"2023-03-16T20:05:19",slug:"what-about-the-federal-import-laws",title:{rendered:"What about the Federal import laws? "},content:{rendered:`
<p>Federal laws apply to everyone in the United States. State and local laws apply to people who live or work in a particular state, commonwealth, territory, county, city, municipality, town, township or village. For instance, marijuana is illegal federally but some states have legalized it. The state created its own law that directly contradicts federal law.</p>



<p>Therefore, they are federally legal to import and <strong>Title</strong>, but each state has the right to decide whether or not they will allow them to be <strong>registered for road use</strong>, and to what limitations they will impose.<br><a href="https://www.lawhelp.org/resource/the-differences-between-federal-state-and-loc#:~:text=Federal%20laws%20apply%20to%20everyone,%2C%20town%2C%20township%20or%20village">https://www.lawhelp.org/resource/the-differences-between-federal-state-and-loc#:~:text=Federal%20laws%20apply%20to%20everyone,%2C%20town%2C%20township%20or%20village</a>.</p>
`,protected:!1}},{id:13,modified:"2023-03-16T20:05:51",slug:"minimum-age-for-federal-import-exemptions",title:{rendered:"Minimum Age for Federal Import Exemptions"},content:{rendered:`
<p>Every country has their own <a href="https://docs.google.com/document/u/0/d/1ZmpsB_h1JnQ9KVkFijM20OiLKxaJfd1V-F4G72PyARQ/edit">minimum age requirements</a> for EPA/Safety exemptions, US-25, CA-15, MX-7. Cars under this age can only be imported as Off-Road Use Only. Age is calculated by the Month and Year of manufacture and the date the vehicle reaches port. Once a vehicle is imported as Off-Road Use Only, it cannot be converted to road use without exporting to another country first.&nbsp;<br>So, without a great expense <strong>you cannot buy a newer car and store it until it reaches the minimum age requirement</strong> and then register it.</p>
`,protected:!1}},{id:15,modified:"2023-03-16T20:06:20",slug:"mini-trucks-vs-low-speed-vehicles",title:{rendered:"Mini Trucks vs Low Speed Vehicles? "},content:{rendered:`
<p>Most state lawmakers do not know the difference between the Chinese mini trucks with speed limiters of 25 mph, and the Japanese mini trucks with larger, more powerful engines capable of 55+. As such, many states treat both as LSV and will limit road use to Off Highway (OHV) or off road only. County clerk&#8217;s know even less.</p>



<p>You can try resubmitting with another clerk if your state does not have any laws mentioning mini trucks, but ultimately it is 100% the clerks OPINION and decision that is final. Registering as antique may provide success if a regular registration fails. Check your state&#8217;s laws and regulations below.<br>You should<em> </em>contact your state&#8217;s main DMV/BMV office prior to purchase to confirm registrability. After purchasing, find a local office who has worked with “out of country” imports before.</p>
`,protected:!1}},{id:17,modified:"2023-03-16T20:07:09",slug:"required-documents-for-registering-imported-vehicles",title:{rendered:"Required Documents for Registering Imported Vehicles"},content:{rendered:`
<p>Import and Purchase Documents:</p>



<ul>
<li>Customs and Border Control information: <a href="https://www.cbp.gov/trade/basic-import-export/importing-car">https://www.cbp.gov/trade/basic-import-export/importing-car</a>&nbsp;</li>
</ul>



<p>All documents submitted <strong><em>MUST be Originals </em></strong>and not copies.</p>



<ul>
<li>Bill Of Sale</li>



<li><a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.1fdp5yeva9sc">Export Certificate Original</a></li>



<li><strong>Notarized </strong><a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.3t5jogqnx242">Export Certificate Translated</a></li>



<li><a href="https://www.cbp.gov/document/forms/form-7501-entry-summary-continuation-sheets">DOH &amp; CBP Entry Summary form 7501</a></li>



<li><a href="https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/hs7_rv9-tag.pdf">NHTSA &#8211; Import Declaration form HS-7</a></li>



<li><a href="http://www.epa.gov/otaq/imports">EPA &#8211; Import Declaration Form 3520-1</a></li>



<li>Any other documents that came with the car should be submitted.</li>
</ul>



<p><a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.f89dd91emoi2"><em>Examples at end of document</em></a></p>



<p>You will also need:</p>



<ul>
<li>Valid State insurance on this vehicle</li>



<li>Valid State DL / ID</li>



<li>A picture of the vin sticker / plate on the vehicle</li>



<li>GVWR of Truck &amp; Empty Weight of truck</li>



<li>Are you registering in a state with sales tax? Did you pay sales tax? If so, proof that state sales tax was paid is required or you will be charged again during registration.</li>
</ul>
`,protected:!1}},{id:19,modified:"2023-03-16T20:07:59",slug:"basic-registration-info",title:{rendered:"Basic Registration Info"},content:{rendered:`
<h5>Types of Registrations</h5>



<ol>
<li><em>Standard Vehicle</em>
<ol>
<li>Normal vehicle registration, subject to Inspections and Emissions testing</li>
</ol>
</li>



<li><em>Classic Vehicle (15+ Years)</em>
<ol>
<li>Has similar and sometimes the exact same limitations as Antique Vehicles</li>
</ol>
</li>



<li><em>Antique Vehicles (25+ Years)</em>
<ol>
<li><a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.s7j3j0nn4i6p">See antique vehicles registration section</a></li>
</ol>
</li>



<li><em>Farm Use Only</em>
<ol>
<li>Vehicle does not need to be registered or regulated at all. As long as you are registered with the state as owning a Farm you can stick an Orange Triangle on the vehicle and drive on roads adjacent to the farm, and to gas stations if within a certain distance. Check your local DMV for specifics in your region.</li>
</ol>
</li>



<li><em>Off-Road Use Only</em>
<ol>
<li>As the name states, this vehicle may never touch public roads, and cannot be registered to do so in the future.</li>
</ol>
</li>
</ol>



<h5>Fees and Taxes</h5>



<p>Check your local fees on your state&#8217;s DMV website. In addition, you will be required to pay the registering state’s <strong>Sales Tax </strong>at the time of registration, or provide proof that you already paid the tax during the purchase.<br><strong>Delaware, Montana, New Hampshire and Oregon</strong> — have no statewide sales tax, or local sales taxes, either. Alaska has no statewide sales tax, but it allows cities and towns to levy sales taxes.</p>
`,protected:!1}},{id:21,modified:"2023-03-16T20:08:21",slug:"insurance",title:{rendered:"Insurance"},content:{rendered:`
<p>Varies state to state on what companies will cover imports. For instance, Progressive in Florida is known to cover imports, but in PA I could only get a policy through a Historic/Classic Car insurance company such as Hagerty.</p>
`,protected:!1}},{id:23,modified:"2023-03-16T20:08:54",slug:"military-families",title:{rendered:"Military Families"},content:{rendered:`
<p>Many states have special exceptions including “duty free” imports for Military families importing vehicles. Check your local government website.</p>
`,protected:!1}},{id:25,modified:"2023-03-16T20:09:36",slug:"al-alabama",title:{rendered:"AL &#8211; Alabama"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.revenue.alabama.gov/division/motor-vehicle/">https://www.revenue.alabama.gov/division/motor-vehicle/</a></li>



<li><a href="https://www.revenue.alabama.gov/motor-vehicle/registration-file-information/">https://www.revenue.alabama.gov/motor-vehicle/registration-file-information/</a>&nbsp;</li>



<li><a href="https://www.revenue.alabama.gov/faqs/i-purchased-a-vehicle-overseas-and-will-be-shipping-it-to-the-united-states-how-do-i-title-and-register-the-vehicle-in-alabama">https://www.revenue.alabama.gov/faqs/i-purchased-a-vehicle-overseas-and-will-be-shipping-it-to-the-united-states-how-do-i-title-and-register-the-vehicle-in-alabama</a>&nbsp;</li>
</ul>



<h5>Legal in Alabama</h5>



<ul>
<li><a href="https://www.revenue.alabama.gov/wp-content/uploads/2022/06/2017_05_810-5-75-03.pdf">https://www.revenue.alabama.gov/wp-content/uploads/2022/06/2017_05_810-5-75-03.pdf</a>&nbsp;</li>
</ul>



<h6><em></em><em>Cars</em></h6>



<p>Motor vehicles that are 25 model years old and older are not subject to federal safety, emissions, and anti-theft prevention standards can be titled and registered with proper ownership documentation.</p>



<h6><em>Motorcycles</em></h6>



<p>No specific information.</p>



<h6><em>Kei Cars and Trucks</em></h6>



<p>Alabama has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks are named:</p>



<ul>
<li><a href="https://www.revenue.alabama.gov/wp-content/uploads/2017/05/CountyMemo2012-8LSV.pdf">https://www.revenue.alabama.gov/wp-content/uploads/2017/05/CountyMemo2012-8LSV.pdf</a>&nbsp;</li>



<li>A mini-truck may only be issued a mini-truck license plate and cannot operate on interstate highways (§32-6-59). Mini Truck license plates are ordered through the Plate Reservation and Ordering System (PROS) and will be mailed to the registrant.</li>
</ul>
`,protected:!1}},{id:27,modified:"2023-03-16T20:10:06",slug:"ak-alaska",title:{rendered:"AK &#8211; Alaska"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li>General Vehicle Registration &#8211; <a href="https://doa.alaska.gov/dmv/reg/require.htm">https://doa.alaska.gov/dmv/reg/require.htm</a></li>



<li>Foreign Vehicles &#8211; <a href="https://doa.alaska.gov/dmv/titles/foreign.htm">https://doa.alaska.gov/dmv/titles/foreign.htm</a>&nbsp;</li>



<li>Titles &#8211; <a href="https://doa.alaska.gov/dmv/titles/">https://doa.alaska.gov/dmv/titles/</a>&nbsp;</li>



<li>Form HS-7 &#8211; <a href="https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/hs7_rv9-tag.pdf">https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/hs7_rv9-tag.pdf</a>&nbsp;</li>
</ul>



<h5>Foreign Vehicles</h5>



<p>Any vehicle being registered in Alaska must be manufactured to U.S. standards. If your vehicle would normally require an I/M test, you must obtain clearance from the Environmental Protection Agency in Washington D.C. to submit with your documents.</p>



<p>If you have further questions on what is required to title and register your vehicle, please contact U.S. Customs or a DMV representative.</p>



<h5>Legal in Alaska?&nbsp;</h5>



<h6><em></em><em>Cars</em></h6>



<p>Even if the vehicle does not comply with Federal Motor Vehicle Safety Standards (FMVSS), you can still legally drive it in Alaska. However, you must provide documentation that the vehicle is at least 25 years old. A registration form or an invoice documenting when the vehicle was first sold will suffice as proof. If you can&#8217;t uncover proper documentation, the NHTSA will accept a declaration from a certified vehicle historical society. When completing the Declaration (Form HS-7), be sure to check box number 1. You can contact the NHTSA or the Alaska DMV for more information.</p>



<h6><em></em><em>Motorcycles</em></h6>



<p>No Information.</p>



<h6><em>Kei Cars and Trucks</em></h6>



<p>Alaska has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:29,modified:"2023-03-16T20:11:23",slug:"az-arizona",title:{rendered:"AZ &#8211; Arizona"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li>https://azdot.gov/motor-vehicles/vehicle-services/vehicle-registration</li>
</ul>



<h5>Legal in Arizona?</h5>



<h6><em>Cars</em></h6>



<p>What additional requirements are needed for out-of-country vehicles?</p>



<p>Requirements vary depending on your specific circumstances. Contact the DMV for details.</p>



<h6><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>As of 17 July 2009, the Arizona Department of Transportation declared mini trucks legal for use on public roads.</p>



<p>However, the owner must complete and submit the Highway Use Certificate and make sure the vehicle complies with all extant safety and equipment requirements for the duration of its registration.</p>
`,protected:!1}},{id:31,modified:"2023-03-16T20:11:53",slug:"ar-arkansas",title:{rendered:"AR &#8211; Arkansas"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://mydmv.arkansas.gov/">https://mydmv.arkansas.gov/</a>&nbsp;</li>



<li><a href="https://www.dfa.arkansas.gov/motor-vehicle/motor-vehicle-forms/">https://www.dfa.arkansas.gov/motor-vehicle/motor-vehicle-forms/</a>&nbsp;</li>



<li><a href="https://law.justia.com/codes/arkansas/2010/title-27/subtitle-2/chapter-14/subchapter-7/27-14-707">https://law.justia.com/codes/arkansas/2010/title-27/subtitle-2/chapter-14/subchapter-7/27-14-707</a>&nbsp;</li>



<li><a href="https://law.justia.com/codes/arkansas/2018/title-27/subtitle-2/chapter-14/subchapter-7/section-27-14-726/">https://law.justia.com/codes/arkansas/2018/title-27/subtitle-2/chapter-14/subchapter-7/section-27-14-726/</a>&nbsp;</li>
</ul>



<h5>Legal in Arkansas?</h5>



<h6><em></em><em>Cars</em></h6>



<p>The only mention of foreign vehicles on the Arkansas websites is defining foreign as out of state. There is no information for out of country vehicles. Contact the state&#8217;s main DMV office for more information.</p>



<p><strong>27-14-707. Application for specially constructed, reconstructed, or foreign vehicles.</strong></p>



<p><strong>(a) (1)</strong> In the event the vehicle to be registered is a specially constructed, reconstructed, or foreign vehicle, that fact shall be stated in the application.</p>



<p><strong>(2</strong>) With reference to every foreign vehicle which has been registered previously outside of this state, the owner shall surrender to the Office of Motor Vehicle all registration plates, registration cards, and certificates of title, or other evidence of such foreign registration as may be in his or her possession or under his or her control, except as provided in subsection (b) of this section.</p>



<p><strong>(b)</strong> Where in the course of interstate operation of a vehicle registered in another state it is desirable to retain registration of the vehicle in such other states, the applicant need not surrender, but shall submit for inspection, evidence of such foreign registration, and the office, upon a proper showing, shall register the vehicle in this state but shall not issue a certificate of title for such vehicle.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Arkansas has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, Mini Trucks are named:</p>



<p><strong>Universal Citation: </strong><a href="https://law.justia.com/citations.html">AR Code § 27-14-726 (2018)</a></p>



<p>(a) As used in this section:</p>



<ul>
<li>(1) &#8220;Low pressure tire&#8221; means a pneumatic tire six inches (6&#8243;) or more in width designed for use on a wheel with a rim diameter of twelve inches (12&#8243;) or less and utilizing an operating pressure of ten pounds per square inch (10 p.s.i.) or less as recommended by the vehicle manufacturer; and</li>



<li>(2) (A) &#8220;Mini-truck&#8221; means a motor vehicle that is:
<ul>
<li>(i) At least forty-eight inches (48&#8243;) in width;</li>



<li>(ii) Not more than one hundred thirty-five inches (135&#8243;) in length including the bumper;</li>



<li>(iii) At least one thousand five hundred pounds (1,500 lbs.) in unladen weight, including fuel and fluids;</li>



<li>(iv) Equipped with:
<ul>
<li>(a) Four (4) or more low pressure tires or pneumatic rubber tires that are used on motor vehicles;</li>



<li>(b) A steering wheel;</li>



<li>(c) Seating for at least two (2) people to sit side-by-side in the front seating area;</li>



<li>(d) A fully enclosed metal or metal-reinforced cab with glass and mirrors that complies with §§ 27-37-301 &#8212; 27-37-305 regarding safety glass and mirrors;</li>



<li>(e) Metal doors with functioning handle locks that are similar to the handle locks on motor vehicles;</li>



<li>(f) Headlamps as required under § 27-36-209;</li>



<li>(g) Tail lamps as required under § 27-36-215;</li>



<li>(h) Signal lamps as provided under § 27-36-216;</li>



<li>(i) A working horn as required under § 27-37-202(a);</li>



<li>(j) Seat belts as provided under § 27-37-701 et seq.; and</li>



<li>(k) Front and rear bumpers.
<ul>
<li>(B) A mini-truck may be equipped with a bed or cargo box for hauling materials.</li>



<li>(C) A mini-truck is not an all-terrain vehicle under § 27-20-201 et seq. and § 27-21-101 et seq.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>



<li>(b)
<ul>
<li>(1) The owner of a mini-truck may register and license it as a Class Eight farm vehicle under § 27-14-601(a)(3)(H).</li>



<li>(2) In the application to register the mini-truck, the owner of the mini-truck shall provide:
<ul>
<li>(A) The same affidavit as required under § 27-14-601(a)(3)(H)(v) and § 27-14-601(a)(3)(H)(xi);</li>



<li>(B) Proof of insurance as required under the Motor Vehicle Safety Responsibility Act, § 27-19-101 et seq., and § 27-22-101 et seq.; and</li>



<li>(C) Proof of ownership that is in the English language, to include a bill of sale and an export certificate or a title.</li>
</ul>
</li>



<li>(3) The fees for registering and licensing a mini-truck shall be the same as for registering a Class Eight farm vehicle under § 27-14-601(a)(3)(H)(ii)(a).</li>



<li>(4) The driver of a mini-truck shall have a valid driver&#8217;s license.</li>



<li>(5) The driver of a mini-truck that is registered and licensed under this section shall comply with and is subject to the same penalties for violating the rules of the road as provided under § 27-51-101 et seq.</li>



<li>(6) A mini-truck is a motor vehicle for the purposes of minimum insurance liability under the Motor Vehicle Safety Responsibility Act, § 27-19-101 et seq., and § 27-22-101 et seq.</li>
</ul>
</li>



<li>(c) A mini-truck shall not be operated on an interstate highway.</li>



<li>(d) A mini-truck shall not be operated on a road or highway if:
<ul>
<li>(1) The operation of mini-trucks is prohibited;</li>



<li>(2) The road is a controlled-access highway;</li>



<li>(3) The posted speed limit is more than fifty-five miles per hour (55 m.p.h.); or</li>



<li>(4) The mini-truck cannot maintain a speed equal to the posted speed limit.</li>
</ul>
</li>
</ul>
`,protected:!1}},{id:33,modified:"2023-03-16T20:12:23",slug:"ca-california",title:{rendered:"CA &#8211; California"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li>Imported Vehicles &#8211; <a href="https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/register-an-imported-vehicle/">https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/register-an-imported-vehicle/</a>&nbsp;</li>



<li></li>
</ul>



<h5>Registering Foreign Cars</h5>



<h6><em></em><em>Cars</em></h6>



<p>Please be aware that some imported vehicles cannot be registered in California, or in the U.S., according to the California Health &amp; Safety Code §§39024.6, 43150–43156, 43203.5, 43600, and 44200–44210.</p>



<p>Vehicles (and engines) imported from other countries must meet the requirements of the following agencies:</p>



<ul>
<li>U.S. Customs and Border Protection (CBP)</li>



<li>U.S. Environmental Protection Agency (EPA) for emissions requirements</li>



<li>U.S. Department of Transportation (DOT) for safety requirements</li>



<li>U.S. Internal Revenue Service (IRS) for gas-guzzler taxes</li>



<li>California Air Resources Board (CARB) for emissions requirements</li>



<li>California Board of Equalization (BOE) for use tax</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<p>Motorcycles, off-highway vehicles, and diesel-powered vehicles cannot be converted to California emissions standards at this time. Therefore, they cannot be registered in California unless they were originally manufactured to meet U.S. and California emissions standards.</p>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>If your direct foreign import vehicle was not originally manufactured to meet California emissions standards and DOT FMVSS, the vehicle cannot be registered in California, unless the vehicle is modified and tested under CARB’s direct import program.</p>
`,protected:!1}},{id:35,modified:"2023-03-16T20:22:03",slug:"co-colorado",title:{rendered:"CO &#8211; Colorado"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dmv.colorado.gov/sites/dmv/files/BL%2017-01%20Imported%20Motor%20Vehicles%20Titling%20Requirements.pdf">https://dmv.colorado.gov/sites/dmv/files/BL%2017-01%20Imported%20Motor%20Vehicles%20Titling%20Requirements.pdf</a>&nbsp;</li>



<li><a href="https://leg.colorado.gov/bills/hb16-1029#:~:text=A%20person%20must%20be%20licensed,than%2055%20miles%20per%20hour">https://leg.colorado.gov/bills/hb16-1029#:~:text=A%20person%20must%20be%20licensed,than%2055%20miles%20per%20hour</a>.&nbsp;</li>
</ul>



<h5>Legal in Colorado?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Nonconforming Vehicles When processing transactions for non-conforming vehicles, submit the following completed documents:&nbsp;</p>



<p>• Bond Release Letter form DOT/NHTSA (proof of conformity)&nbsp;</p>



<p>• DOT Declaration (HS-7)&nbsp;</p>



<p>• Foreign title or registration&nbsp;</p>



<p>• Any one of the following U.S. Customs and Border Protection entry forms is acceptable as proof of customs entry (copy acceptable):&nbsp;</p>



<p>o CBP 7523 — Entry and Manifest of Merchandise Free of Duty&nbsp;</p>



<p>o CBP 3299 — Declaration For Free Entry of Unaccompanied Articles&nbsp;</p>



<p>o CBP 3311 — Declaration For Free Entry of Returned American Products&nbsp;</p>



<p>o CBP 7501 — Entry Summary (Does not require a Customs Inspector’s signature)&nbsp;</p>



<p>o CBP 3461 — Entry/Immediate Delivery Secure and Verifiable ID will be required&nbsp;</p>



<p>• DR 2698 Verification of Vehicle Identification Number&nbsp;</p>



<p>• A certified weight slip may be required: kilograms (x) 2.21 (=) pounds&nbsp;</p>



<p>• Odometer disclosure – Odometer disclosed on secure form. Owner must sign to begin odometer tracking. DR 4041A (04/17/14)&nbsp;</p>



<p>Enclosure 1&nbsp;</p>



<p>• If documents require translation, anyone with the knowledge of a particular language can write a translation.&nbsp;</p>



<p>• All translations must be signed and notarized or signed under penalty of perjury Federal Importation laws require a 30-day hold period for nonconforming vehicles.&nbsp;</p>



<p>If the 30 days have passed, and the National Highway Safety Administration (NHTSA) has not provided the importer with a Bond Release Letter, the law allows the importer to title the vehicle without a Bond Release Letter as long as all of the required forms listed below have been submitted.&nbsp;</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>The bill authorizes a person to drive a kei vehicle on a roadway if it is registered with the division of motor vehicles. A person must be licensed to drive a kei vehicle. The registration costs $15, specific ownership tax is $3, and the kei vehicle is issued a license plate. Kei vehicles must follow the rules of the road and cannot be driven on limited-access highways or roads with a speed limit that is greater than 55 miles per hour. Kei vehicles must have insurance. To be used on the road, a kei vehicle must have, in good working order:</p>



<ul>
<li>Brakes;</li>



<li>Headlamps and tail lights;</li>



<li>Turn signals;</li>



<li>A windshield and windshield wipers;</li>



<li>Rear-view mirrors; and</li>



<li>Seatbelts.</li>
</ul>



<p>The bill provides for titling kei vehicles as <strong>off-highway vehicles</strong>. The bill also clarifies that a dealer in kei vehicles has to be licensed, but current dealers are exempt.</p>
`,protected:!1}},{id:37,modified:"2023-03-16T20:22:35",slug:"ct-connecticut",title:{rendered:"CT &#8211; Connecticut"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://portal.ct.gov/dmv/vehicle-services/get-vehicle-inspection/imported-vehicles-non-us?language=en_US">https://portal.ct.gov/dmv/vehicle-services/get-vehicle-inspection/imported-vehicles-non-us?language=en_US</a>&nbsp;</li>



<li><a href="https://www.reddit.com/r/Connecticut/comments/ujl8ck/registering_a_kei_truck_in_ct/">https://www.reddit.com/r/Connecticut/comments/ujl8ck/registering_a_kei_truck_in_ct/</a>&nbsp;</li>
</ul>



<h5>Legal in Connecticut?</h5>



<h6><em></em><em>Cars</em></h6>



<p>The owner must present the proper ownership documentation (i.e., foreign equivalents of &#8220;Title&#8221; Certificates, such as the German Fahrzugbrief).&nbsp;</p>



<p>Documentation must not show any break in continuity of ownership. The EPA and DOT letters are required to be a permanent part of the ownership record. The buyer should contact the US DOT and US EPA for copies of the letters If the seller does not have the required letters.</p>



<p>If the DMV isn’t satisfied with the documentation of ownership; the owner will need to post a surety bond of two times the book value of the vehicle before the vehicle can be registered. The bond is automatically canceled three years after the validation of the registration (such bonds can be obtained through an insurance agent or broker).</p>



<p>U.S. DOT and EPA forms are not required (U.S. Customs form is still required) if the importer or importer&#8217;s agent submits documentation from these agencies that the vehicle is complying or exempt from U.S. emission and safety standards.&nbsp;</p>



<p>Both documents must indicate compliance or exemption, or a manufacturer&#8217;s Certificate of Origin has been issued, indicating the vehicle has complied with EPA and DOT standards.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Connecticut has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, Reddit suggests Mini Trucks require CT Vintage Plates</p>
`,protected:!1}},{id:39,modified:"2023-03-16T20:23:06",slug:"de-delaware",title:{rendered:"DE &#8211; Delaware"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://regulations.delaware.gov/AdminCode/title2/2000/2200/Vehicle/2278.shtml">https://regulations.delaware.gov/AdminCode/title2/2000/2200/Vehicle/2278.shtml</a>&nbsp;</li>
</ul>



<h5>Legal in Delaware?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Pursuant to 21 Del.C. §302:</p>



<ul>
<li>1.1 No imported vehicle with a foreign “Manufacturer&#8217;s Statement of Origin” shall be titled or registered in Delaware unless a Certification of Compliance accompanies the title application.</li>



<li>1.2 The Certification(s) of Compliance are required to assure the Division that the vehicle now complies with the U.S. Department of Transportation Safety Standards and U.S. E. P. A. Standards (for emissions).</li>



<li>1.3 Items 1 and 2 do not apply to foreign vehicles which have a “uniform” Manufacturer&#8217; Statement of Origin accompanying the title application. These MSO’s are all printed in English language and are the same type that accompany all domestic cars which are manufactured in the United States.</li>
</ul>
`,protected:!1}},{id:41,modified:"2023-03-16T20:24:18",slug:"fl-florida",title:{rendered:"FL &#8211; Florida"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.flhsmv.gov/motor-vehicles-tags-titles/license-plates-registration/motor-vehicle-registrations/">https://www.flhsmv.gov/motor-vehicles-tags-titles/license-plates-registration/motor-vehicle-registrations/</a>&nbsp;</li>



<li><a href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&amp;URL=0300-0399/0316/Sections/0316.2122.html">http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&amp;URL=0300-0399/0316/Sections/0316.2122.html</a>&nbsp;</li>
</ul>



<h5>Legal in Florida?</h5>



<h6><em></em><em>Cars</em></h6>



<ul>
<li><a href="https://www.supraforums.com/threads/fl-import-registration-experience.1123003/">https://www.supraforums.com/threads/fl-import-registration-experience.1123003/</a>&nbsp;</li>
</ul>



<p><em>Steps supplied from the user in the above forum.</em></p>



<p><strong>Step 1:</strong> Prepare all of your documentation from the import service/customs broker. Again plenty of articles out there about this step but one specific FL tip: The translation must be both &#8220;certified&#8221;, notarized and must include language that goes something like &#8220;Translation is certified as true and accurate. Translator attests that they have knowledge of the two languages, regularly translates as a normal course of business and their translation is accurate. Translator has no previous or current interest in the motor vehicle.&#8221; You can work with your import service to do this but I used an online service that provides notarization to avoid any issues.</p>



<p><strong>Step 2:</strong> Schedule your VIN inspection with the specific DMV person for your region. Yes, I said a specific person: not a notary, officer or other DMV employee. A special affidavit is required to be filled and signed by the person who does this at the Motorist Services Regional Office. Look up your DMV region at this site and call the specific phone number to set up an appointment: Locations &#8211; Florida Department of Highway Safety and Motor Vehicles.</p>



<p>This is usually the same person that handles rebuilds, kit cars, etc. This person reviewed my paperwork I sent via email and set up an inspection 3 days later. After you get an appointment you can then schedule your title appt. ideally right after.</p>



<p><strong>Step 3:</strong> Tow your car to the DMV to be physically inspected. I attempted many times to get a temp tag to no avail. They are only giving these out in person so if you&#8217;re dead-set to receive one you&#8217;ll have to schedule an earlier appointment and hope they give you one. Otherwise, this is a regular VIN inspection. They did not check my car for lights, emissions, etc.</p>



<p><strong>Step 4:</strong> Head to your title appt., pay sales tax and fees and receive your plates! They did ask for a bill of sale from the import service so make sure to bring that along with your usual stack of forms. While not required, doing your title at the same office that handles VIN inspection is preferred since they have more experience with import cars coming through.</p>



<p><strong>TL;DR: FL has special requirements for translation of titles and requires a specific inspection at the regional DMV office.</strong></p>



<ul>
<li>You will need to look up your local county’s DMV website to register in Florida
<ul>
<li>See also, Kai’s Kei’s Guide in the EATZ Group’s Files tab.
<ul>
<li><a href="https://www.facebook.com/download/2369946809837520/Kai%27s%20Keis%20Guide%20to%20Register%20JDM%20Import%20%281%29.pdf">https://www.facebook.com/download/2369946809837520/Kai%27s%20Keis%20Guide%20to%20Register%20JDM%20Import%20%281%29.pdf</a>&nbsp;</li>
</ul>
</li>
</ul>
</li>
</ul>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Florida has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, Mini trucks are named:</p>



<p><strong>316.2122</strong> Operation of a low-speed vehicle, mini truck, or low-speed autonomous delivery vehicle on certain roadways.—</p>



<ol>
<li>The operation of a low-speed vehicle as defined in s. 320.01 or a mini truck as defined in s. 320.01 on any road is authorized with the following restrictions:
<ol>
<li>A low-speed vehicle or mini truck may be operated only on streets where the posted speed limit is 35 miles per hour or less. This does not prohibit a low-speed vehicle or mini truck from crossing a road or street at an intersection where the road or street has a posted speed limit of more than 35 miles per hour.</li>
</ol>
</li>
</ol>
`,protected:!1}},{id:43,modified:"2023-03-16T20:24:53",slug:"ga-georgia",title:{rendered:"GA &#8211; Georgia"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dor.georgia.gov/transfer-title-and-license-plate-another-state-or-country">https://dor.georgia.gov/transfer-title-and-license-plate-another-state-or-country</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Titles and license plates for vehicles titled in another state or country can be obtained at your <a href="https://mvd.dor.ga.gov/motor/tagoffices/SelectTagOffice.aspx">County Tag Office</a></p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Georgia has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:45,modified:"2023-03-16T20:25:15",slug:"hi-hawaii",title:{rendered:"HI &#8211; Hawaii"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.honolulu.gov/csd/vehicle/">https://www.honolulu.gov/csd/vehicle/</a></li>



<li><a href="https://www.capitol.hawaii.gov/sessions/session2018/testimony/HB737_TESTIMONY_TRN_02-08-17_.PDF">DOT Testimony for Direct Imports</a></li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<ul>
<li>Varies by county, check your local DMV website for specific information</li>



<li>Exempts direct import vehicles, i.e. vehicles at least 25 years old, from the requirement that vehicles be in compliance with all Federal Motor Vehicle Safety Standards to be registered.</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Hawaii has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:47,modified:"2023-03-16T20:25:40",slug:"id-idaho",title:{rendered:"ID &#8211; Idaho"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://itd.idaho.gov/itddmv/">https://itd.idaho.gov/itddmv/</a></li>



<li><a href="https://adminrules.idaho.gov/rules/2001/39/0224.pdf">Rules for Imported Vehicles</a></li>



<li><a href="https://itd.idaho.gov/wp-content/uploads/2021/09/DMV-Imported-Vehicle-Titling-Policy.pdf">https://itd.idaho.gov/wp-content/uploads/2021/09/DMV-Imported-Vehicle-Titling-Policy.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>100. TITLING AND REGISTRATION REQUIREMENTS.&nbsp;</p>



<ol>
<li>Required Documents. When the owner of a gray market vehicle applies for title and registration, the following documents must be presented. (12-26-90)
<ol>
<li>Statement indemnifying the Department. (12-26-90)&nbsp;</li>



<li>Statement of Facts from a motor vehicle investigator. (12-26-90)&nbsp;</li>



<li>All documents relating to ownership such as foreign title and/or registration, as applicable and bills of sale. (12-26-90)&nbsp;</li>



<li>U.S. Department of Transportation release letter. (12-26-90)&nbsp;</li>



<li>Environmental Protection Agency (EPA) release letter or Independent Commercial Importer (ICI) release letter or Designated Canadian Importer (DCI) release letter or EPA letter of waiver. (12-26-90)&nbsp;</li>
</ol>
</li>



<li>Substituted Documents. The U.S. Customs Bond Release Letter may be substituted for all requirements in Subsections 100.01.c. through 100.01.e. (12-26-90)</li>



<li>Designation Of Year Model. The year model for titling and registering gray market vehicles will be determined in an order of priority, based on the following criteria: (12-26-90)
<ol>
<li>The year model used by a specific manufacturer to designate a discrete vehicle model irrespective of the calendar year in which the vehicle was actually produced; (12-26-90)</li>



<li>An ownership document issued by that vehicle’s country of origin; (12-26-90)</li>



<li>Any vehicle manufactured during a twelve (12) month period beginning September 1, and ending August 31, shall bear the production year of the calendar year in which August 31 occurs; or (12-26-90)</li>



<li>The year model by certification of the importer of record. The certification can be verified against vehicle production dates, based upon substantially similar models of the same make of vehicle. (12-26-90)&nbsp;</li>
</ol>
</li>



<li>Foreign Documents. When foreign registration and/or titling documents are presented, a translation of the foreign documents may be required to clarify the information contained in the documents. If required, such translation will be at the owner’s expense and certified by the translator as true and correct. (12-26-90)&nbsp;</li>



<li>Registration Only. Until gray market vehicles meet Idaho registration and titling requirements, the county assessor shall issue a registration under the “Registration Only” program to allow time for the federal government to act upon the required releases. (12-26-90)</li>
</ol>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Idaho has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:49,modified:"2023-03-16T20:26:09",slug:"il-illinois",title:{rendered:"IL &#8211; Illinois"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li>IL Grey Market Vehicles &#8211; <a href="https://www.ilsos.gov/publications/pdf_publications/vsd272.pdf">https://www.ilsos.gov/publications/pdf_publications/vsd272.pdf</a>&nbsp;</li>



<li><a href="https://www.ilga.gov/">https://www.ilga.gov/</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<ol>
<li>Application for Vehicle Transaction(s) (VSD190) if the vehicle will not be operated, and the required title/registration fees.</li>



<li>Motor Vehicle Tax Forms (RUT-25 or RUT-50) and required fees.&nbsp;</li>



<li>Ownership Documents — Foreign documents of ownership must be the originals, not copies, and must be in English or accompanied by an English translation. A bill of sale is required if the seller is not a U.S. citizen and the sale occurred in a foreign country. The bill of sale should indicate the year, model, make, vehicle identification number and purchase price. It must be in English or accompanied by an English translation. If the ownership documents indicate a specific model year for the grey market vehicle, that year will be used on the title. Otherwise, the model year used on the title for any grey market vehicle manufactured between September 1 and December 31 will be based on the following year</li>



<li>Federal Documents U.S. Customs Form 7501-&#8220;Entry Summary&#8221; — Provided to the importer at the port of entry when the vehicle is brought into the U.S. The form must be signed by the importer and provided to the applicant. For import information, contact: U.S. Customs, P.O. Box 7407, Washington, DC 20044, 877-227-5511.
<ol>
<li>U.S. Department of Transportation Form HS-7- &#8220;Importation of Motor Vehicle and Motor Vehicle Safety Standards&#8221; — Required for vehicles not originally manufactured in compliance with federal emissions and safety standards, and acknowledged by the National Highway Traffic Safety Administration that the vehicle now conforms to safety standards. For more information, contact: U.S. DOT, National Highway Traffic Safety Administration, 400 Seventh St. S.W., Washington, DC 20590, 888-327-4236, www. nhtsa.gov/cars/rules/impact.&nbsp;</li>



<li>U.S. Environmental Protection Agency Form 3520-1-&#8220;Importation of Motor Vehicles and Motor Vehicle Engines Subject to Federal Air Pollution Control Regulations” — An acknowledgment from the EPA that the vehicle now conforms to emissions standards. For more information, contact: U.S. EPA, Manufacturers Operations Division, Investigation Imports Section, 401 Main St. S.W., Washington, DC 20460, 734-214-4100. U.S. DOT and EPA forms are not required if:
<ol>
<li>The importer or importer&#8217;s agent submits documentation from these agencies that the vehicle is in compliance with or exempt from U.S. emissions and safety standards (both documents must indicate compliance or exemption to receive a title); or</li>



<li>A manufacturer&#8217;s Certificate of Origin has been issued showing the vehicle is in compliance with U.S. EPA and DOT standards; or • The vehicle is 25 years old or older.</li>
</ol>
</li>
</ol>
</li>
</ol>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Illinois has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:51,modified:"2023-03-16T20:26:35",slug:"in-indiana",title:{rendered:"IN &#8211; Indiana"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.in.gov/bmv/">https://www.in.gov/bmv/</a>&nbsp;</li>



<li><a href="https://www.in.gov/bmv/files/Mini_Truck_Packet.pdf">https://www.in.gov/bmv/files/Mini_Truck_Packet.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>No information on BMV website. Mini trucks specifically have a web page, so all other imports meeting federal import laws should also be eligible. Contact the Indiana BMV for confirmation.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Indiana has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks are named:<a href="https://www.in.gov/bmv/titles/mini-trucks/">https://www.in.gov/bmv/titles/mini-trucks/</a></p>
`,protected:!1}},{id:53,modified:"2023-03-16T20:26:59",slug:"ia-iowa",title:{rendered:"IA &#8211; Iowa"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://iowadot.gov/mvd/vehicleregistration/registering-a-vehicle">https://iowadot.gov/mvd/vehicleregistration/registering-a-vehicle</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>No. A vehicle is required to have a manufacturer&#8217;s label attached to the vehicle, certifying that it meets all the federal safety standards, if the vehicle is to be titled and registered for use on a highway. If there is no manufacturer&#8217;s label, the vehicle will not be titled or registered in Iowa.</p>



<p>The language found in Iowa Code 321.30(15) reads, &#8220;Unless otherwise provided for in this chapter, the department or the county treasurer shall refuse registration and issuance of a certificate of title unless the vehicle bears a manufacturer&#8217;s label pursuant to 49 C.F.R. pt. 567 certifying that the vehicle meets federal motor vehicle safety standards.&#8221;</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Iowa has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:55,modified:"2023-03-16T20:27:27",slug:"ks-kansas",title:{rendered:"KS &#8211; Kansas"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://kansastreasurers.org/index.php/motor-vehicle/">https://kansastreasurers.org/index.php/motor-vehicle/</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>No information on DMV website for imported vehicles. Contact your local county’s treasurer office.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Kansas has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:57,modified:"2023-03-16T20:27:48",slug:"ky-kentucky",title:{rendered:"KY &#8211; Kentucky"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=6152">https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=6152</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>1986 statute above reiterates the Federal import laws and suggest there is no issue registering imported vehicles with the <a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.3kjlpohe7jdg">proper documentation.</a></p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Kentucky has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks are named:</p>



<p>This document reads like Farm Use or Off-Road use only. Contact local DMV to inquire<a href="https://codes.findlaw.com/ky/title-xvi-motor-vehicles/ky-rev-st-sect-189-517/">https://codes.findlaw.com/ky/title-xvi-motor-vehicles/ky-rev-st-sect-189-517/</a></p>
`,protected:!1}},{id:59,modified:"2023-03-16T20:28:23",slug:"la-louisiana",title:{rendered:"LA &#8211; Louisiana"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://public.powerdms.com/ladpsc/documents/380909">https://public.powerdms.com/ladpsc/documents/380909</a></li>



<li><a href="https://public.powerdms.com/ladpsc/documents/371084">https://public.powerdms.com/ladpsc/documents/371084</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Vehicle Imported from Other Countries:&nbsp;</p>



<ul>
<li>A completed Vehicle Application Form (<a href="https://www.powerdms.com/public/LADPSC/documents/355820">DPSMV 1799</a>)</li>



<li>Original out-of-country title/registration or manufacturer&#8217;s statement of origin&nbsp;</li>



<li>Original bill of sale</li>



<li>Proof of current insurance</li>



<li>Copy of the security agreement, if applicable</li>



<li>One of the following U.S. Customs forms indicating satisfactory proof of Customs entry:
<ul>
<li>CF 368 &#8211; Collection Receipt or Informal Entry&nbsp;&nbsp;</li>



<li>CF 3299 &#8211; Declaration for Free Entry of Unaccompanied Articles&nbsp;&nbsp;</li>



<li>CF 3311 &#8211; Declaration for Free Entry of Returned American Products&nbsp;&nbsp;</li>



<li>CF 3461 &#8211; Entry/Immediate Delivery&nbsp;&nbsp;</li>



<li>CF 3461 ALT &#8211; Entry/Immediate Delivery&nbsp;&nbsp;</li>



<li>CF 6059B &#8211; Customs Declaration (badge number instead of signature)&nbsp;&nbsp;</li>



<li>CF 7501 &#8211; Entry Summary (does not require a Customs inspector&#8217;s signature)&nbsp;&nbsp;</li>



<li>CF 7523 &#8211; Entry and Manifest of Merchandise Free of Duty</li>
</ul>
</li>



<li>Original Environmental Protection Agency Form # 3520 stamped &#8220;Released by Customs&#8221; or electronically released in the above listed forms.</li>



<li>Original Highway Safety Form 7 issued by the Department of Transportation and stamped &#8220;Released by Customs.&#8221;
<ul>
<li>See attached Imported Vehicles HS-7 declaration form for requirements specified by the types of entry (Box 1 &#8211; 12)</li>
</ul>
</li>



<li>An affidavit of physical inspection.
<ul>
<li>The physical inspection must be performed by a full-time Peace Officer Standards and Training (P.O.S.T.) certified law enforcement officer who has been certified by the Department of Public Safety and Corrections, Office of State Police, to inspect motor vehicles.&nbsp;</li>
</ul>
</li>



<li>All applicable fees and taxes</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Louisiana has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, Mini Truck is named:</p>



<p>Mini Truck &#8211; Any four-wheeled, reduced dimension truck that may not have a National Highway Safety Administration classification, with a top speed of sixty-five miles per hour, equipped with a truck bed or compartment for hauling, and having an enclosed passenger cab. These vehicles may be operated upon a highway of this state where the posted speed limit is fifty-five miles per hour or less except an interstate or controlled access highway or a multi-lane divided highway which has partial or no control of access.</p>



<p>Any mini-truck operated upon a highway of this state shall be equipped with the following:&nbsp;</p>



<ul>
<li>head lamps&nbsp;</li>



<li>front and rear turn signal lamps</li>



<li>tail lamps</li>



<li>stop lamps</li>



<li>an exterior mirror mounted on the driver&#8217;s side of the vehicle&nbsp;</li>



<li>either an exterior mirror mounted on the passenger&#8217;s side of the vehicle or an interior mirror&nbsp;</li>



<li>parking brake</li>



<li>windshield wiper&nbsp;</li>



<li>speedometer&nbsp;</li>



<li>Odometer</li>



<li>braking for each wheel&nbsp;</li>



<li>a seat belt assembly installed at each designated seating position&nbsp;</li>



<li>vehicle identification number</li>
</ul>



<p>Supporting documents must be presented to verify ownership and shall consist of:</p>



<ul>
<li>A completed vehicle application form (DPSMV 1799).</li>



<li>A manufacturer&#8217;s certificate of origin.
<ul>
<li>If the certificate of origin is in a foreign language it will be required for the person making the application to submit a notarized translation of the certificate of origin in conjunction with the original document in the foreign language.&nbsp; In the event the vehicle is sold with no manufacturer&#8217;s certificate of origin, refer to Section IV, Policy 3.0 &#8220;Justice of the Peace court orders&#8221; 2&nbsp;</li>
</ul>
</li>



<li>Itemized invoice showing complete description (make, year, model, body style, and vehicle identification number) of the vehicle sold, vehicle traded-in (if any), and the dealer&#8217;s current permit number (if applicable).</li>



<li>Properly completed and signed odometer disclosure statement.</li>



<li>Original or copy of properly completed UCC-1 form (financing statement), or other security agreement, if a lien is to be recorded.</li>



<li>Proof of liability insurance</li>



<li>A statement from the purchaser indicating that the mini-truck contains all equipment required for use as indicated above and a statement that the owner is aware that the vehicle is only permitted to be used by a licensed driver upon highways where the posted speed limit is fifty-five miles per hour or less except interstate, controlled access highways, or multi-lane divided highways which have partial or no control of access.</li>



<li>Mini-Trucks will be issued an off-road decal.</li>
</ul>
`,protected:!1}},{id:61,modified:"2023-03-16T20:28:50",slug:"me-maine",title:{rendered:"ME &#8211; Maine"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.maine.gov/sos/bmv/registration/passenger.html">https://www.maine.gov/sos/bmv/registration/passenger.html</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>There is no information on Maine’s website regarding imported vehicles. News outlets and Hagerty insurance stated in 2021 Maine and Rhode Island started canceling all JDM vehicle registrations making them Off Road use only. If a vehicle cannot be brought up to modern standards, it likely cannot be registered in Maine or Rhode Island.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://www.hagerty.com/media/news/maine-and-rhode-island-take-aim-at-jdm-cars-but-why/
</div></figure>
`,protected:!1}},{id:63,modified:"2023-03-16T20:29:17",slug:"md-maryland",title:{rendered:"MD &#8211; Maryland"},content:{rendered:`
<h3>MD &#8211; Maryland</h3>



<h5>DMV Website</h5>



<ul>
<li><a href="https://mva.maryland.gov/about-mva/Pages/info/27300/27300-23T.aspx">https://mva.maryland.gov/about-mva/Pages/info/27300/27300-23T.aspx</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Typically, the title application documents needed (along with payment for taxes and fees) include:</p>



<ul>
<li>Proof of ownership &#8211; This can be the vehicle&#8217;s certificate of origin and/or your foreign or military registration documents. If you submit foreign registration documents you must have them translated into English through the embassy located in the country where the vehicle is registered or by the embassy located in Washington DC. The embassy seal must accompany the translation.</li>



<li>Application for Certificate of Title &#8211; Be sure to include your insurance information. Your policy must conform to Maryland&#8217;s minimum liability insurance requirements.</li>



<li>Verification that the vehicle meets U.S. specifications &#8211;</li>



<li>US DOT Declaration &#8211; Importation of Motor Vehicles and Motor Vehicle Equipment Subject to Federal Motor Vehicle Safety Bumper and Theft Prevention Standards (US DOT form #HS-7) &#8211; either box 1 or 2A must be checked, verifying the vehicle meets U.S. specifications. Additional documentation is required if box 2B or 3 is checked. If any other box is checked, additional requirements will be listed on the EPA form #3520.</li>



<li>US EPA Importation of Motor Vehicles and Motor Vehicle Engines Subject to Federal Air Pollution Regulations (EPA form #3520) &#8211; all information must match the information that appears on the US DOT form #HS-7.</li>



<li>US Customs Entry/Immediate Delivery form &#8211; (U.S. Customs form 3461) the form must have the authorized stamp of the U.S. Customs.</li>



<li>Maryland Safety Inspection Certificate &#8211; This is a Maryland State Police form certifying that your vehicle meets Maryland safety standards. The inspection is valid for only 90 days from the date issued. This form is not required if the vehicle is new, meets all US specifications, and has never been registered.</li>



<li></li>
</ul>



<p>Under certain circumstances, additional information may be required:</p>



<ul>
<li>Bill of Sale &#8211; must be presented, if available, in order to determine your excise tax. This should be a bill of sale signed by both the buyer(s) and seller(s). The bill of sale must be notarized if the following conditions apply:</li>



<li>the vehicle is less than 7 years old; and</li>



<li>the purchase price is at least $500 below the book value; and</li>



<li>the new owner (buyer) wants to base the excise tax calculation (6% of the vehicle&#8217;s value) on the sale price rather than the book value.</li>



<li>U.S. Environmental Protection Agency Letter Approving Release of the EPA Obligation on the Bond for the Vehicle (non-conforming vehicles only) &#8211; must be submitted when box 3 is checked on the US DOT Declaration (USDOT form #HS-7).</li>



<li>U.S. DOT National Highway Receipt of a Certificate of Compliance and Payment on the Bond for the Vehicle (non-conforming vehicles only).</li>



<li>Manufacturer&#8217;s letter &#8211; must be presented if box 2B is checked on the US DOT Declaration (US DOT form #HS-7). The letter constitutes the manufacturer&#8217;s certification that the vehicle meets all U.S. specifications.</li>



<li>Lien information &#8211; if you borrowed money to buy the vehicle, you may need to record your lien information on the Application for Certificate of Title. The MVA form titled Security Interest Filing must be used if a second lien is placed against the title. Make sure that your lien is transferable to the U.S.</li>



<li>Power of attorney &#8211; if someone other than you, the owner, is signing the titling forms, this document is required.</li>



<li>Certification for Multipurpose Passenger Vehicle &#8211; If you want your vehicle to be titled as a multi-purpose vehicle, a class &#8220;M&#8221; vehicle, but it is not on the list of recognized multi-purpose vehicles (most SUVs are on the list), you must submit the MVA certification form.</li>
</ul>



<p>Note: If you also intend to register the vehicle additional forms are usually needed. Registration requirements vary greatly by the type and intended use of the vehicle. The requirements for most vehicles can be found in Registration &#8211; Common Vehicle.&nbsp; If your vehicle is unusual, access the infoMVA homepage to find the applicable registration description.</p>



<p>Your title will be mailed to you regardless of whether you apply through a tag and title service, mail in your request or go directly to the MVA.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Maryland has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:65,modified:"2023-03-16T20:29:39",slug:"ma-massachusetts",title:{rendered:"MA &#8211; Massachusetts"},content:{rendered:`
<h5>RMV Website</h5>



<ul>
<li><a href="https://www.mass.gov/info-details/imported-foreign-vehicles">https://www.mass.gov/info-details/imported-foreign-vehicles</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>To title an imported foreign vehicle from all foreign countries except Canada, you must present all of the following:</p>



<ul>
<li>Registration and Title Application</li>



<li>Previous Registration</li>



<li>Bill(s) of Sale providing a complete chain of transfers and ownerships</li>



<li>One of the following U.S. Customs Entry Forms</li>



<li>CF 3299 &#8211; Declaration for Free Entry of Unaccompanied Articles</li>



<li>CF 7501 &#8211; Entry Summary</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Massachusetts has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>



<h3>MI &#8211; Michigan</h3>



<h5>DMV Website</h5>



<ul>
<li><a href="https://www.michigan.gov/sos/vehicle/titles">https://www.michigan.gov/sos/vehicle/titles</a></li>



<li><a href="http://www.legislature.mi.gov/(S(nzqsknskqplyddkaumezuyit))/mileg.aspx?page=getobject&amp;objectname=mcl-257-218&amp;query=on&amp;highlight=foreign">http://www.legislature.mi.gov/(S(nzqsknskqplyddkaumezuyit))/mileg.aspx?page=getobject&amp;objectname=mcl-257-218&amp;query=on&amp;highlight=foreign</a>&nbsp;</li>



<li><a href="https://www.reddit.com/r/keitruck/comments/oc3znm/comment/hq24wpb/">https://www.reddit.com/r/keitruck/comments/oc3znm/comment/hq24wpb/</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>257.218 Specially constructed, reconstructed, or foreign vehicle; application for registration; fees.</p>



<p>Sec. 218.</p>



<ol>
<li>If a vehicle to be registered is a specially constructed, reconstructed, or foreign vehicle, that fact shall be stated in the application. With reference to each foreign vehicle which has been previously registered in another state, the owner shall surrender to the secretary of state all registration plates, registration certificates, and certificates of title or other evidence of foreign registration, as are in the owner&#8217;s possession or under the owner&#8217;s control, except as provided in subsections (2) and (3).</li>



<li>If the owner in the course of interstate operation of a vehicle desires to retain registration of a vehicle in another state, the owner shall not be required to surrender, but shall submit for inspection, evidence of the foreign registration and the secretary of state, upon a proper showing and upon application and payment of the registration fee, shall register the vehicle in this state.</li>



<li>If the owner of a vehicle previously registered in another state in which the certificate of title or other proof of ownership of a vehicle is in the possession of a holder of a security interest in the vehicle, the owner of the vehicle may apply to the secretary of state for registration of the vehicle for this state after payment of all fees required by this act and submission of proof of ownership of the vehicle to the secretary of state.</li>
</ol>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Michigan has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, Reddit says the Secretary of State imposed a ban on Mini-Trucks in 2022. Contact your state&#8217;s main DMV office for more information.</p>
`,protected:!1}},{id:67,modified:"2023-03-16T20:30:01",slug:"mn-minnesota",title:{rendered:"MN &#8211; Minnesota"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dvsinfohub.dps.mn.gov/resources/Documents/QRG-ImportedVehicles.pdf">https://dvsinfohub.dps.mn.gov/resources/Documents/QRG-ImportedVehicles.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>The following are required documents to title/register an imported vehicle in Minnesota:</p>



<ul>
<li>Application to title</li>



<li>Proof of ownership (plus official translation if ownership document is not in the English language)</li>



<li>Bill of sale (as required)</li>



<li>Odometer disclosure, in miles (as required)</li>



<li>CBP Form 7501 or 3461 – Entry Summary (may be original with CBP stamp, or “paperless” version with no stamp)</li>



<li>EPA form 3520</li>



<li>NHTSA Form HS-7 Conforming to Safety and Emissions Standards and Exempt Vehicles  NHTSA form HS-7:
<ul>
<li>boxes 1, 2A, 2B o Box 2B: a copy of the manufacturer’s confirmation letter must also be submitted&nbsp;</li>



<li>EPA form 3520: codes B, F, EE, FF, M, E (all on page 1) Non-conforming to Safety and Emissions Standards&nbsp;&nbsp;</li>



<li>NHTSA form HS-7: boxes 3-13 o Box 3: copy of the “Bond Release Letter” from NHTSA, acknowledging receipt of a certificate of compliance and payment of the bond, must be submitted; or a copy of the NHTSA Statement of Conformity must be submitted;</li>



<li>Other boxes: the NHTSA-required documents must also be submitted to DVS, as indicated on form HS-7;&nbsp;</li>



<li><strong><em>***Note: some of these boxes indicate that the vehicle was not manufactured for use on public roads, and therefore may not be titled or registered in Minnesota***</em></strong></li>
</ul>
</li>



<li>EPA form 3520: codes L-Q (all on page two) IMPORTED VEHICLES May 2018 Page 2 of 7
<ul>
<li>The EPA-required documents must also be submitted to DVS, as indicated on the form;</li>



<li><strong><em>&nbsp;***Note: some of these boxes indicate that the vehicle may not be registered or licensed for use on public roads, and therefore may not be titled or registered in Minnesota***</em></strong>&nbsp;</li>
</ul>
</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Minnesota has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However Mini-Trucks are named:</p>



<p>Aug 3, 2022 — Mini-trucks cannot be registered with the Department of Public Safety to be driven on public roads in Minnesota<a href="https://www.house.mn.gov/hrd/pubs/lowpower.pdf">https://www.house.mn.gov/hrd/pubs/lowpower.pdf</a></p>
`,protected:!1}},{id:69,modified:"2023-03-16T20:30:20",slug:"ms-mississippi",title:{rendered:"MS &#8211; Mississippi"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.dor.ms.gov/tags-and-titles">https://www.dor.ms.gov/tags-and-titles</a>&nbsp;</li>



<li><a href="https://www.dor.ms.gov/tagstitles/title-frequently-asked-questions">https://www.dor.ms.gov/tagstitles/title-frequently-asked-questions</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>When you go to your county Tax Collector’s office to apply for a title and register the vehicle, you will need to take the following documentation with you:&nbsp;</p>



<ul>
<li>a current Registration Certificate</li>



<li>a notarized Bill of Sale</li>



<li>the foreign country&#8217;s ownership documents (similar to our certificate of title)</li>



<li>U.S. Customs Form 7501</li>



<li>EPA Form 3520-8</li>



<li>DOT Form HS-7</li>



<li>and, the manufacturer&#8217;s statement of origin (MSO.)</li>
</ul>



<p>(In Canada the equivalent form for a MSO is referred to as a New Vehicle Information Statement (NVIS, ) and in Europe the similar form is referred to as a European Community Certificate of Conformity.)</p>



<p>You must provide a certified English translation of any document printed in any language except English.​</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>According to Google, a $100 title bond and the bill and application of ownership are required to operate a mini truck on public highways. There are no online documents supporting this claim. Contact your local Revenue office for more information.</p>
`,protected:!1}},{id:71,modified:"2023-03-16T20:30:41",slug:"mo-missouri",title:{rendered:"MO &#8211; Missouri"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dor.mo.gov/motor-vehicle/titling-registration/">https://dor.mo.gov/motor-vehicle/titling-registration/</a>&nbsp;</li>



<li><a href="https://www.law.cornell.edu/regulations/missouri/12-CSR-10-23-260">https://www.law.cornell.edu/regulations/missouri/12-CSR-10-23-260</a>&nbsp;</li>



<li><a href="https://www.sos.mo.gov/cmsimages/adrules/csr/previous/12csr/12csr0114/12c10-23a.pdf">https://www.sos.mo.gov/cmsimages/adrules/csr/previous/12csr/12csr0114/12c10-23a.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>12 CSR 10-23.260 Inspection of Foreign Motor Vehicles Prior to Titling PURPOSE:&nbsp;</p>



<p>This rule sets forth the procedures for issuance of Missouri certificates of title to foreign motor vehicles not specifically manufactured for importation into this country.&nbsp;</p>



<p>Editor’s Note: The secretary of state has determined that the publication of this rule in its entirety would be unduly cumbersome or expensive. The entire text of the material referenced has been filed with the secretary of state. This material may be found at the Office of the Secretary of State or at the headquarters of the agency and is available to any interested person at a cost established by state law.&nbsp;</p>



<ol>
<li>Some vehicles are not manufactured for importation into the United States. In order for a certificate of title to be issued, the department requires any motor vehicle imported by a registered Missouri motor vehicle dealer, or an individual, whose vehicle is not manufactured for importation into the United States, to be inspected by a member of the Missouri State Highway Patrol. At the time of the inspection, the Missouri State Highway Patrol will complete a Vehicle Examination Certificate, DOR Form 551. This form indicates that the vehicle identification number has been verified and is correct.</li>



<li>Some motor vehicles which are purchased by Missouri residents in another country and imported into the United States are manufactured for importation into the United States and conform to all legal standards. The ROBIN CARNAHAN (1/30/12) CODE OF STATE REGULATIONS 17 Secretary of State Chapter 23—Motor Vehicle 12 CSR 10-23 ownership document for these vehicles is usually a Manufacturer’s Statement of Origin similar to the type issued for a motor vehicle constructed by an American manufacturer.
<ol>
<li>Any application for title to a motor vehicle imported into the United States which is accompanied by a Manufacturer’s Statement of Origin need not be accompanied by a DOR Form 551(B).&nbsp;</li>



<li>If problems are encountered at the time the application is entered into the Department of Revenue’s computer, the central office will inform the applicant to contact the Missouri State Highway Patrol to request that they inspect the vehicle and complete a Vehicle Examination Certificate. AUTHORITY: section 301.190, RSMo 1986.*&nbsp;</li>
</ol>
</li>
</ol>



<p>Original rule filed March 21, 1986, effective July 11, 1986. *Original authority: 301.190, RSMo 1939, amended 1947, 1965, 1981, 1983, 1984, 1985, 1986, 1986, 1987, 1988, 1989, 1990</p>



<p>*Original authority: 301.190, RSMo 1939, amended 1947,</p>



<p>1965, 1981, 1983, 1984, 1985, 1986, 1986, 1987, 1988,</p>



<p>1989, 1990</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Missouri has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks are named.<br>In Illinois and Missouri, <strong>Mini Trucks are allowed only by local ordinance</strong>. Mini Trucks must comply with federal safety standards for low-speed vehicles in five states <a href="https://www.capeportablebuildings.com/mini-trucks#:~:text=In%20Illinois%20and%20Missouri%2C%20Mini,%2C%20New%20Hampshire%20and%20Tennessee).">(Illinois, Kansas, Maine, New Hampshire and Tennessee)</a>.</p>
`,protected:!1}},{id:73,modified:"2023-03-16T20:31:04",slug:"mt-montana",title:{rendered:"MT &#8211; Montana"},content:{rendered:`
<h5>DMV Website</h5>



<figure class="wp-block-embed is-type-wp-embed is-provider-montana-department-of-justice wp-block-embed-montana-department-of-justice"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="NeYeqpo7Sf"><a href="https://dojmt.gov/driving/vehicle-title-and-registration/">Vehicle Title and Registration</a></blockquote><iframe class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" title="&#8220;Vehicle Title and Registration&#8221; &#8212; Montana Department of Justice" src="https://dojmt.gov/driving/vehicle-title-and-registration/embed/#?secret=qh8XltF7mN#?secret=NeYeqpo7Sf" data-secret="NeYeqpo7Sf" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<h5>How to get a title</h5>



<p><a href="https://dojmt.gov/wp-content/uploads/Montana-Title-Manual1.pdf">Montana Title Manual</a></p>



<h6><em>Cars</em></h6>



<p><strong>Permanent registration</strong>, <a href="http://leg.mt.gov/bills/mca/title_0610/chapter_0030/part_0050/section_0620/0610-0030-0050-0620.html">§ 61-3-562, MCA</a>– The owner of a light vehicle 11 years old or older may choose to permanently register the vehicle. This registration does not need to be renewed as long as ownership is unchanged. Fees collected at the time of permanent registration are:</p>



<ul>
<li>$87.50 registration rate</li>



<li>$10 Montana Highway Patrol Salary and Retention Fee</li>



<li>county tax, $9 optional state parks support, certain special plate fees and, for light trucks, the gross vehicle weight (GVW) fees</li>



<li>$5 insurance verification fee if existing plates are kept on the vehicle</li>
</ul>



<h5><strong>Mini Truck Registration</strong></h5>



<h6><em>Japanese Mini-Trucks &#8211; Page 29 of Montana Title Manual</em></h6>



<p><strong>The following are required to apply for a title on a mini-truck.&nbsp;</strong></p>



<ol>
<li>Application for Bonded Title (Form MV10).&nbsp;</li>



<li>Have a law enforcement officer complete a Vehicle/Vessel/Off-Highway Vehicle (OHV) Identification Number Inspection Certificate (Form MV20) to verify the vehicle identification number (VIN).&nbsp;</li>



<li>Attach proof of ownership (e.g., canceled check, bill of sale, invoice, etc.).&nbsp;</li>



<li>The U.S. Customs entry document must show the VIN of all vehicles being imported on the bill of lading. a. Customs entry documents and EPA requirements must be met for title and registration.&nbsp;</li>



<li>The Japanese export certificate and translation of the certificate must also be submitted.&nbsp;</li>



<li>When sold as street-legal, the MV70A inspection form must also be submitted. TIMA (Truth in Mileage Act) for federal odometer requirements will apply.&nbsp;</li>



<li>If the vehicles are sold as street-legal, a surety bond for the value of the vehicle must be submitted.&nbsp;</li>
</ol>



<p><em>A Montana licensed dealer will be required to get a Dealer Title Only if there are no reassignments on the Japanese export certificate or title.&nbsp;</em></p>



<h6><em>Bonded Out of State Title</em></h6>



<ol>
<li>Bonded Out-of-State Title [Rev. 7/24/13] If an out-of-state bonded title is submitted to obtain a Montana title, the Montana title will be issued showing the bond brand and bond expiration date. If the expiration date has expired, the date will not show on the Montana title. If the out-of-state title does not list the bond expiration date, the customer will need to submit verification from the State that issued the title verifying the expiration date. Montana Department of Justice &#8211; Motor Vehicle Division &#8211; Title Manual Last Updated: April 30, 2014 4&nbsp;</li>



<li>How to Apply for a Break/Bonded Montana Title [Rev. 7/24/13] An application for Break/Bond Title (Form MV10) may be used when an applicant cannot provide a certificate of title assigning the prior owner’s interest in a vehicle.
<ul>
<li>Complete form MV10</li>



<li>Have a law enforcement officer complete a Stage 1 vehicle inspection &#8211; Form MV20.&nbsp;</li>



<li>Submit proof of purchase (e.g., canceled check, bill of sale, invoice, etc.)</li>



<li>Provide a surety bond for vehicles valued over $500 Surety Bond: A one-time, nonrefundable instrument that allows the issuance of a new title. The value of a vehicle determines whether or not a surety bond is required.</li>



<li>The surety bond may be obtained through any insurance company authorized to do business in Montana. The surety bond must:&nbsp; Be in an amount equal to the value of the vehicle for which the application is being made, as determined by the national appraisal guide or the applicant.&nbsp; Be conditioned to indemnify a prior owner, lienholder, subsequent purchaser, secured creditor, or encumbrancer of the vehicle and any respective successors in interest against expenses, losses or damages, including reasonable attorney fees, caused by the issuance of the certificate of title or by a defect in or undisclosed security interest upon the right, title, and interest of the applicant in the vehicle.</li>



<li>If you wish to title and register the vehicle, take the documents outlined in this section to your County Treasurer&#8217;s office to apply for a title and obtain license plates, a registration sticker, or a Montana vessel number. If you wish to only title the vehicle, send the following documents directly to the Title and Registration Bureau:&nbsp; Form MV10</li>



<li>Vehicle inspection form MV20&nbsp; Proof of purchase (e.g., canceled check, bill of sale, invoice, etc.)&nbsp; Surety bond (if applicable)&nbsp; Applicable fee: $12 for light vehicles, trucks, and buses all weighing one ton or less; $10 for all other vehicles. Additional taxes and fees may be due upon registration.</li>



<li>After the bond expires, a new Montana title may be issued without the bond designation and expiration date. The bond expiration date is located on the face of the Montana title. The registered owner must submit the title; or, if the title is lost, the MV7 application and applicable title fees to the Title and Registration Bureau.</li>
</ul>
</li>
</ol>
`,protected:!1}},{id:75,modified:"2023-03-16T20:31:30",slug:"ne-nebraska",title:{rendered:"NE &#8211; Nebraska"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dmv.nebraska.gov/dvr/mvtitles">https://dmv.nebraska.gov/dvr/mvtitles</a>&nbsp;</li>



<li><a href="https://dmv.nebraska.gov/dvr/title/imported-vehicles">https://dmv.nebraska.gov/dvr/title/imported-vehicles</a>&nbsp;</li>



<li><a href="https://dmv.nebraska.gov/dvr/title/minitruck">https://dmv.nebraska.gov/dvr/title/minitruck</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>A resident of Nebraska purchasing a new or used vehicle in a foreign country must present as evidence of ownership the following:</p>



<ul>
<li>A Current Registration Certificate;</li>



<li>A Bill of Sale;</li>



<li>Foreign Country&#8217;s Ownership Documents (similar to our Certificate of Title);</li>



<li>Manufacturer&#8217;s Statement of Origin (MSO) (In Canada the equivalent form is referred to as a New Vehicle Information Statement (NVIS) and in Europe their similar form is referred to as a European Community Certificate of Conformity).</li>



<li>And the following Import Papers as Proof of Legal Entry:</li>



<li>U.S. Customs Form 7501</li>



<li>EPA Form 3520-8 OR EPA Form 3520-1</li>



<li>DOT Form HS-7</li>
</ul>



<p>All imported vehicles must have DOT and EPA stickers affixed as evidence of their compliance with U.S. federal equipment and safety standards. The above documentation is also evidence of the compliance. A Vehicle Inspection may be required to verify compliance.</p>



<p>A US Military Base-issued registration does not qualify as proof of ownership unless it specifically states that it also serves as a ‘Certificate of Title&#8217;.</p>



<p>The following Federal Government Agencies oversee different requirements involved in the import of vehicles:</p>



<ul>
<li>Environmental Protection Agency – 800.223.0425, Kansas City, KS. Control emission standards.</li>



<li>The following agencies control the Federal Motor Vehicle Safety Standards:
<ul>
<li>National Highway Safety Administration 202.366.5291 Washington, D.C.</li>



<li>Department of Transportation: Canadian and Foreign Imports &#8211; 202.366.5288 Washington D.C.</li>



<li>United States Customs Nebraska Port of Entry, 5229 Boeing Court, Omaha, NE 68110, 402.341.0240, Fax: 402.341.2117</li>
</ul>
</li>
</ul>



<p>Questions regarding Titles for Imported Vehicles may be addressed by email or by phone at 402.471.3918.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Yes. To obtain a Certificate of Title for a minitruck purchased on or after January 1, 2011, one of the following documents must be presented to the the County Treasurer:</p>



<ul>
<li>A Manufacturer or Importer&#8217;s Certificate</li>
</ul>



<p><strong>AND</strong></p>



<ul>
<li>An Affidavit for Verification of Ownership of an ATV, Minibike, UTV or Minitruck completed by the owner affirming ownership</li>
</ul>



<p><strong>OR One of the following:</strong></p>



<ul>
<li>Certificate of Title – properly assigned</li>



<li>Vehicle&#8217;s registration and a notarized Bill of Sale if previous state was not a title issuing state</li>



<li>Vehicle&#8217;s registered by the U.S. Military: U.S.: Military Registration Document</li>



<li>Vehicle&#8217;s sold by the U.S. Government: U.S. Department of State Certificate of Title</li>



<li>Court Order</li>
</ul>



<p><strong>AND all of the following documents:</strong></p>



<ul>
<li>an Application for Certificate of Title</li>



<li>$10.00 titling fee;</li>



<li>a Vehicle Inspection if required proof of ownership is anything other than a Nebraska Certificate of Title. The exception to this is a Vehicle Inspection is required if your proof of ownership is a Nebraska Salvage title and you are making application for a Previously Salvaged title.</li>
</ul>
`,protected:!1}},{id:77,modified:"2023-03-16T20:31:51",slug:"nv-nevada",title:{rendered:"NV &#8211; Nevada"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dmv.nv.gov/nvregreq.htm">https://dmv.nv.gov/nvregreq.htm</a>&nbsp;</li>



<li><a href="http://epubs.nsla.nv.gov/statepubs/epubs/700563-2007Feb.pdf">http://epubs.nsla.nv.gov/statepubs/epubs/700563-2007Feb.pdf</a>&nbsp;</li>



<li><a href="https://ohv.nv.gov/register">https://ohv.nv.gov/register</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>All of the following documents are required to register and title a gray market vehicle:</p>



<ul>
<li>The foreign Manufacturer’s Certificate of Origin, Manufacturer’s Statement of Origin or outstanding Certificate of Title:
<ul>
<li>A statement signed by the manufacturer indicating an MSO/MCO was never issued; or</li>



<li>A statement from the manufacturer indicating to whom they assigned their interest in the vehicle; and</li>



<li>Bills of sale to establish a complete chain of ownership</li>
</ul>
</li>



<li>A completed Vehicle Inspection Certificate (Form RD-015)</li>



<li>U.S. Department of Transportation (Form HS-7)</li>



<li>U.S. Environmental Protection Agency Form 3520-21</li>



<li>Odometer Disclosure Statement for vehicles 9 years old or newer if not on the MSO/MCO or title</li>



<li>Statement of Facts (Form RD-022) if there is no Manufacturer’s Certificate/Statement of Origin or outstanding Certificate of Title</li>



<li>Department of Homeland Security, U.S. Custom and Border Protection (CBP Form 7501).</li>
</ul>



<p>The Nevada Certificate of Title will be branded “Non-US Vehicle” to provide notice to</p>



<p>future owners that the vehicle was a foreign or gray market vehicle.&nbsp;</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Nevada has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.<br>Local dealerships in Nevada list them for sale as Off Highway Vehicles only, but <a href="https://www.reddit.com/r/keitruck/comments/rgpgov/comment/ifnf4uy/?utm_source=share&amp;utm_medium=web2x&amp;context=3">message boards</a> suggest Classic car registration works as well. Check with your local DMV for more information.</p>
`,protected:!1}},{id:79,modified:"2023-03-16T20:32:14",slug:"nh-new-hampshire",title:{rendered:"NH &#8211; New Hampshire"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.dmv.nh.gov/">https://www.dmv.nh.gov/</a>&nbsp;</li>



<li><a href="https://www.dmv.nh.gov/vehicles-boats-or-titles/vehicle-identification-number-vin-verification">https://www.dmv.nh.gov/vehicles-boats-or-titles/vehicle-identification-number-vin-verification</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>New Hampshire does not issue titles for vehicles that have a model year of 1999 or older, except for heavy trucks with three (3) axles or more, or truck tractors whose gross vehicle weight exceeds 18,000 pounds which must always be titled regardless of age. Also, vehicles that are over 25 years of age may only be titled at an owner&#8217;s request.</p>



<p>The only time “Foreign Cars” is mentioned is under the VIN verification requirement section. With the exception of Mopeds, all motor vehicles must begin their registration process at the town or city clerk in the town or city in which they reside.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>New Hampshire has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:81,modified:"2023-03-16T20:32:59",slug:"nj-new-jersey",title:{rendered:"NJ &#8211; New Jersey"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.state.nj.us/mvc/vehicles/foreign.htm">https://www.state.nj.us/mvc/vehicles/foreign.htm</a></li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Yes, to register your imported vehicle, you must submit your request to the central MVC office to obtain a title on a foreign vehicle. Local MVC Agencies cannot issue this type of transfer. To make sure you have all the required paperwork, please call (609) 292-6500 ext. 5064.</p>



<p>Mail requests to:</p>



<p>Motor Vehicle Commission</p>



<p>Special Title Unit</p>



<p>225 East State Street 2 East</p>



<p>Trenton, NJ 08666</p>



<p>The only exceptions are vehicles purchased from:</p>



<p>Guam, Puerto Rico or U.S. Virgin Islands; or</p>



<p>Cherokee Nation</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>New Jersey has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:83,modified:"2023-03-16T20:33:23",slug:"nm-new-mexico",title:{rendered:"NM &#8211; New Mexico"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.mvd.newmexico.gov/vehicles/vehicle-registration/register-your-vehicle/">https://www.mvd.newmexico.gov/vehicles/vehicle-registration/register-your-vehicle/</a>&nbsp;</li>



<li><a href="https://www.mvd.newmexico.gov/chapter-8-special-title-situations/#">https://www.mvd.newmexico.gov/chapter-8-special-title-situations/#</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>There are two types of foreign manufactured vehicles.</p>



<p>The first are those that were manufactured outside of the United States to be sold in the United States. These vehicles were manufactured conforming to all standards required by the Federal Department of Transportation (USDOT) and the Environmental Protection Agency (EPA).</p>



<p>The second type of foreign-manufactured vehicles are those manufactured outside of the United States, to be sold outside of the United States. These vehicles do not meet the federal standards. Upon importing foreign manufactured vehicles, owners must conform to safety and emission standards established by the USDOT and the EPA prior to applying for New Mexico Title and Registration. The applicant must provide a vehicle release from U.S. Customs and Border Protection (CBP), indicating the vehicle has met the following requirements:</p>



<ul>
<li>Vehicle meets Department of Transportation requirements per DOT HS-7 Declaration form.</li>



<li>Vehicles must be held for at least 30 days from the import date and include a NHTSA Bond Release letter confirming the vehicle safety.</li>



<li>Vehicle meets EPA standards.</li>



<li>Vehicle meets U.S. Customs and Border Protection (CBP) requirements</li>



<li>The two common acceptable port of entry documents are CBP7501 and DD1252. Call CBP for clearance on other documents in question. The VIN must be on these documents in addition to a VIN inspection and NCIC clearance.</li>
</ul>



<p>You may contact U.S. Customs and Border Protection with questions in Albuquerque at:</p>



<p>2200 Sunport Boulevard S.E., Albuquerque, NM 87106</p>



<p>(Located in the Private Aviation area, Cutter Aviation Building</p>



<p>at the Albuquerque International Sunport)</p>



<p>Phone (505) 346-6992; Fax (505) 346-6995</p>



<p>Hours of operation 8:30 AM to 5:00 PM Monday-Friday</p>



<p>Or, for those customers closer to El Paso than Albuquerque, you may contact the El Paso CBP Office at:</p>



<p>3600 East Paisano El Paso, TX 79905</p>



<p>Phone (915) 872-3407</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>New Mexico has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:85,modified:"2023-03-16T20:33:47",slug:"ny-new-york",title:{rendered:"NY &#8211; New York"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dmv.ny.gov/registration/how-register-imported-vehicle">https://dmv.ny.gov/registration/how-register-imported-vehicle</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>To register an imported vehicle in New York, the vehicle must</p>



<p>clear the U.S. Customs and Border Protection 1</p>



<p>comply with NYS safety and emissions standards 2&nbsp;</p>



<p>You must provide the DMV:</p>



<p>acceptable U.S. Customs and Border Protection documents</p>



<p>acceptable proof of ownership of an imported vehicle</p>



<p>all other documents needed to register and title a vehicle</p>



<p>Notes:</p>



<p>You must provide a certified English translation of any document printed in any language except English.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p><strong>No, KEI-Class vehicles cannot be registered or titled in New York State. (Authority: Section 400-a of NYS VTL)</strong></p>
`,protected:!1}},{id:87,modified:"2023-03-16T20:34:14",slug:"nc-north-carolina",title:{rendered:"NC &#8211; North Carolina"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.ncdot.gov/dmv/title-registration/vehicle/Pages/requirements.aspx">https://www.ncdot.gov/dmv/title-registration/vehicle/Pages/requirements.aspx</a>&nbsp;</li>



<li><a href="https://www.ncdot.gov/dmv/offices-services/military/Pages/title-registration.aspx">https://www.ncdot.gov/dmv/offices-services/military/Pages/title-registration.aspx</a></li>



<li><a href="https://www.ncleg.gov/Sessions/2019/Bills/Senate/PDF/S432v1.pdf">https://www.ncleg.gov/Sessions/2019/Bills/Senate/PDF/S432v1.pdf</a>&nbsp;</li>



<li><a href="https://casetext.com/statute/general-statutes-of-north-carolina/chapter-20-motor-vehicles/article-3-motor-vehicle-act-of-1937/part-9-the-size-weight-construction-and-equipment-of-vehicles/section-20-1211-operation-of-a-low-speed-vehicle-mini-truck-or-modified-utility-vehicle-on-certain-roadways">https://casetext.com/statute/general-statutes-of-north-carolina/chapter-20-motor-vehicles/article-3-motor-vehicle-act-of-1937/part-9-the-size-weight-construction-and-equipment-of-vehicles/section-20-1211-operation-of-a-low-speed-vehicle-mini-truck-or-modified-utility-vehicle-on-certain-roadways</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>The only mention of imported vehicles being registered is under the Military services tab. Contact your local DOT for more information.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>North Carolina has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, Mini Trucks are name:</p>



<p>§ 20-121.1. Operation of a low-speed vehicle or mini-truck on certain roadways.</p>



<p>The operation of a low-speed vehicle or mini-truck is authorized with the following restrictions:</p>



<ul>
<li>A low-speed vehicle may be operated only on streets and highways where the posted speed limit is 35 miles per hour or less.
<ul>
<li>A mini-truck may be operated only on streets and highways where the posted speed limit is 55 miles per hour or less. This does not prohibit a low-speed vehicle or mini-truck from crossing a road or street at an intersection where the road or street being crossed has a posted speed limit of more than 35 miles per hour.</li>



<li>A low-speed vehicle or mini-truck shall be equipped with headlamps, stop lamps, turn signal lamps, tail lamps, reflex reflectors, parking brakes, rearview mirrors, windshields, windshield wipers, speedometer, seat belts, and a vehicle identification number. Any such required equipment shall be maintained in proper working order.</li>
</ul>
</li>



<li>A low-speed vehicle or mini-truck shall be registered and insured in accordance with G.S. 20-50 and G.S. 20-309.</li>



<li>The Department of Transportation may prohibit the operation of low-speed vehicles or mini-trucks on any road or highway if it determines that the prohibition is necessary in the interest of safety.</li>



<li>General Assembly Of North Carolina Session 2019</li>



<li>Page 2 Senate Bill 432*-First Edition</li>



<li>Low-speed vehicles must comply with the safety standards in 49 C.F.R. § 571.500.</li>



<li>Regardless of age, a mini-truck shall not qualify as an antique vehicle or historic vehicle as described in G.S. 20-79.4(b).&#8221;</li>
</ul>



<p>5 SECTION 4. This act is effective when it becomes law.</p>
`,protected:!1}},{id:90,modified:"2023-03-16T20:34:35",slug:"nd-north-dakota",title:{rendered:"ND &#8211; North Dakota"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.dot.nd.gov/manuals/mv/registration-manual.pdf">https://www.dot.nd.gov/manuals/mv/registration-manual.pdf</a>&nbsp;</li>



<li><a href="https://www.ndlegis.gov/cencode/t39c04.pdf">https://www.ndlegis.gov/cencode/t39c04.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>The following documents are required to title and register imported vehicles:</p>



<ul>
<li>The original registration, a copy of the registration, or a letter of verification from the foreign government agency.</li>



<li>Proper chain of ownership from the registered owner to the purchaser. A Bill of Sale that transfers ownership from each seller to the next buyer must be provided.</li>



<li>US Customs documentation is required to meet Federal Government Regulations covering the vehicle being imported. Acceptable forms include: 368, 7523, 3299, 3311, 7501, 7533, 6059B or 3461. If documents are written in a language other than English, documents translated to English must be included. Rev. 02/16 I-12&nbsp;</li>



<li>If the odometer has been converted from kilometers to miles, certification is required from the business and from the individual responsible for the change.</li>



<li>Secure Odometer Disclosure form, if applicable.</li>



<li>A completed and signed Indemnifying Affidavit (SFN 60662) must be completed by the owner releasing the State of North Dakota and its agencies from any and all liability.</li>
</ul>



<p>If you need to know if a document is acceptable, please call the Motor Vehicle Division.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>North Dakota has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:92,modified:"2023-03-16T20:35:00",slug:"oh-ohio",title:{rendered:"OH &#8211; Ohio"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.bmv.ohio.gov/titles-out-state.aspx">https://www.bmv.ohio.gov/titles-out-state.aspx</a>&nbsp;</li>



<li>AFFIDAVIT FOR TITLING MINI-TRUCK, UTILITY VEHICLE, AND UNDER-SPEED VEHICLE &#8211; <a href="https://publicsafety.ohio.gov/static/bmv3722.pdf">https://publicsafety.ohio.gov/static/bmv3722.pdf</a>&nbsp;</li>



<li>Mini Truck Registrations:
<ul>
<li><a href="https://codes.ohio.gov/ohio-revised-code/section-4519.401">https://codes.ohio.gov/ohio-revised-code/section-4519.401</a></li>



<li><a href="https://codes.ohio.gov/ohio-revised-code/section-4511.215">https://codes.ohio.gov/ohio-revised-code/section-4511.215</a>&nbsp;</li>
</ul>
</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p><strong>Maybe.</strong> Wording suggests cars must be brought up to modern safety and EPA standards if registered in state. It all will depend on if the clerk considers being <em>exempt </em>from federal motor vehicle standards qualifying as “satisfying all requirements.”</p>



<p>A County Clerk of Courts Title Office will only issue a certificate of title for an imported vehicle when an individual submits proof the vehicle complies with federal motor vehicle safety requirements and satisfies all requirements listed below.</p>



<p><strong>What Do I Need to Bring to the Title Office?</strong></p>



<ul>
<li>Bill of sale</li>



<li>Authentic source of ownership document (Canadian or foreign registration/title)</li>



<li>U.S. Customs and Border Protection Entry (form 7501), stamped or signed</li>



<li>U.S. Department of Transportation (DOT) document (Declaration Form HS-7) stating vehicle meets all safety standards</li>



<li>Original bond release letter from U.S. Department of Transportation National Highway Traffic Safety Administration (NHTSA) to verify federal motor vehicle safety standards have been, or will be, met (if applicable); any other requirements specified on the Declaration Form HS-7 must also be met</li>



<li>Evidence that a timely certification of compliance was submitted to NHTSA (i.e., 120 calendar days from the vehicle’s date of entry into the country) may be used if NHTSA did not issue a Bond Release Letter or otherwise respond to the certification of compliance within 30 days of NHTSA’s receipt of such certification, provided all other requirements are met.</li>



<li>Odometer statement(s) signed by both the seller and purchaser in accordance with federal and Ohio requirements</li>



<li>An out-of-state vehicle identification number (VIN) inspection</li>



<li>Inspections can be obtained at any Ohio deputy registrar license agency (see current fees) or new car dealership (call ahead for fee)</li>



<li>English translations of all documents written in a foreign language; translations must be done by an accredited institution and submitted on that institution&#8217;s letterhead</li>



<li>Payment for title fees and sales tax on the purchase price if applicable (see sales tax rates by county)</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Ohio has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, Mini Trucks have been named.</p>



<p>Section 4519.401 | Operation of a mini-truck.</p>



<ul>
<li>Except as provided in this section and section 4511.215 of the Revised Code, no person shall operate a mini-truck within this state.</li>



<li>A person may operate a mini-truck on a farm for agricultural purposes only when the owner of the farm qualifies for the current agricultural use valuation tax credit. A mini-truck may be operated by or on behalf of such a farm owner on public roads and rights-of-way only when traveling from one farm field to another.</li>



<li>A person may operate a mini-truck on property owned or leased by a dealer who sells mini-trucks at retail.</li>



<li>Whoever violates this section shall be penalized as provided in division (D) of section 4511.214 of the Revised Code.</li>
</ul>
`,protected:!1}},{id:94,modified:"2023-03-16T20:35:27",slug:"ok-oklahoma",title:{rendered:"OK &#8211; Oklahoma"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://oklahoma.gov/service/popular-services/vehicle-registration.html">https://oklahoma.gov/service/popular-services/vehicle-registration.html</a></li>



<li><a href="https://oklahoma.gov/service/all-services/auto-vehicle/motorcycles-trailers-more.html">https://oklahoma.gov/service/all-services/auto-vehicle/motorcycles-trailers-more.html</a></li>



<li><a href="https://oklahoma.gov/content/dam/ok/en/tax/documents/resources/rules-and-policies/motor-vehicle-policy/Chapter60-MotorVehicles.pdf">https://oklahoma.gov/content/dam/ok/en/tax/documents/resources/rules-and-policies/motor-vehicle-policy/Chapter60-MotorVehicles.pdf</a>&nbsp;</li>



<li><a href="https://law.justia.com/codes/oklahoma/2014/title-47/section-47-1151.3">https://law.justia.com/codes/oklahoma/2014/title-47/section-47-1151.3</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>710:60-5-130. Foreign vehicles<strong>&nbsp;</strong></p>



<ul>
<li><strong>Documents required.</strong>&nbsp;</li>
</ul>



<p>When an owner obtains a foreign vehicle originally manufactured for sale outside of the United States, or a vehicle that is currently titled in a foreign country, the following documents must be presented to obtain a certificate of title:</p>



<ol>
<li>Manufacturer&#8217;s Certificate of Origin; or the existing foreign Certificate of Title; and&nbsp;</li>



<li>A legible letter of translation for all foreign (non-English language) documents; and&nbsp;</li>



<li>Documentation verifying U.S. Customs clearance. If entering from a country other than Canada, documentation verifying compliance with U.S. Environmental Protection Agency and U.S. Department of Transportation requirements. OAC 710:60 OKLAHOMA TAX COMMISSION 91</li>
</ol>



<ul>
<li>Titling documentation. All required documentation must be submitted in order to issue an Oklahoma title. No document hold title will be processed.&nbsp;</li>
</ul>



<p>[Source: Added at 8 Ok Reg 3305, eff 7-8-91 (emergency); Added at 9 Ok Reg 2151, eff 6-12-92; Amended at 17 Ok Reg 2160, eff 6-11-00; Amended at 18 Ok Reg 878, eff 2-23-01 (emergency); Amended at 18 Ok Reg 1340, eff 5-11- 01; Amended at 24 Ok Reg 2375, eff 6-25-07; Amended at 19 Ok Reg 2063, eff 7-1-08]</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p><strong>Yes, as an off highway vehicle</strong>:</p>



<p>(h) Mini-truck. &#8220;Mini-truck&#8221; means</p>



<ul>
<li>a foreign-manufactured import or domestic manufactured vehicle powered by an internal combustion engine with a piston or rotor displacement of one thousand cubic centimeters (1,000 cu cm) or less</li>



<li>which is sixty-seven (67) inches or less in width</li>



<li>with an unladen dry weight of three thousand four hundred (3,400) pounds or less, traveling on four or more tires</li>



<li>having a top speed of approximately fifty-five (55) miles per hour</li>



<li>equipped with a bed or compartment for hauling, and having an enclosed passenger cab.&nbsp;</li>
</ul>



<p>Any vehicle meeting that description is required to be titled and registered, as of November 1, 2008. Excise tax is not assessed on mini-trucks purchased prior to November 1, 2008.</p>



<p>Registration and titling guidelines.&nbsp;</p>



<p>Mini-trucks may be registered in the same manner and under the same classification guidelines as any other light truck. Mini-trucks are subject to the same titling and lien filing guidelines as other light trucks, with the exception of required documentation at time of initial titling.</p>



<p>Those general titling documentary guidelines are as Follows:</p>



<ul>
<li>New mini-trucks purchased on or after November 1, 2008. A properly assigned Manufacturer&#8217;s Statement of Origin (MSO) and dealer&#8217;s invoice (to establish purchase price) is required to apply for an Oklahoma title.</li>



<li>All other mini-trucks. A properly assigned certificate of title or Manufacturer&#8217;s Statement of Origin (MSO) is to be submitted, if available. If not available, the Commission may accept a notarized bill of sale, or other similar ownership instrument, as an alternative.</li>
</ul>
`,protected:!1}},{id:96,modified:"2023-03-16T20:35:49",slug:"or-oregon",title:{rendered:"OR &#8211; Oregon"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.oregon.gov/odot/dmv/pages/vehicle/titlereg.aspx">https://www.oregon.gov/odot/dmv/pages/vehicle/titlereg.aspx</a></li>



<li><a href="https://www.oregon.gov/odot/forms/dmv/6603.pdf">https://www.oregon.gov/odot/forms/dmv/6603.pdf</a>&nbsp;</li>



<li><a href="https://www.oregon.gov/odot/dmv/docs/chapter_f.pdf">https://www.oregon.gov/odot/dmv/docs/chapter_f.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Imported vehicle transactions have the same basic requirements as other vehicles, plus a few additional requirements. Requirements to title a vehicle imported from out of country, including Canada, are:</p>



<ul>
<li>Ownership document&nbsp;</li>



<li>VIN inspection&nbsp;</li>



<li>Odometer disclosure (if applicable)&nbsp;</li>



<li>DEQ (if applicable)</li>



<li>Releases from previous owners</li>



<li>Fees</li>



<li>Proof the vehicle meets federal standards</li>



<li>Certification of Liens on an Imported vehicle, <a href="https://www.odot.state.or.us/forms/dmv/6436fill.pdf">Form 6436</a></li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p><strong>No. Kei Vehicles/Mini Trucks</strong></p>



<p>They can be titled in Oregon, but cannot get registration because they were not primarily manufactured for U.S. roads or highways.</p>
`,protected:!1}},{id:98,modified:"2023-03-16T20:36:19",slug:"pa-pennsylvania",title:{rendered:"PA &#8211; Pennsylvania"},content:{rendered:`
<h5>DMV</h5>



<ul>
<li><a href="https://www.dmv.pa.gov/Pages/Mini-Trucks-FAQ.aspx">https://www.dmv.pa.gov/Pages/Mini-Trucks-FAQ.aspx</a></li>



<li><a href="https://www.dot.state.pa.us/public/DVSPubsForms/BMV/BMV%20Driver%20and%20Vehicle%20Bulletins/Bulletin%2021-17%20Special%20Edition-Short%20VIN_12-21.pdf">PENNDOT Bulletin 2021-12 for Short VIN vehicles</a>&nbsp;</li>



<li><a href="https://en.wikipedia.org/wiki/Vehicle_identification_number">https://en.wikipedia.org/wiki/Vehicle_identification_number</a>&nbsp;</li>
</ul>



<p>When registering in PA, if a vehicle has a shortened VIN and does not comply with <a href="https://www.iso.org/standard/52200.html">ISO 3779</a>, it was never meant for US roads and does not meet federal safety standards. Additionally, this causes an issue when registering because PA requires a valid VIN lookup when registering for a normal plate. If it has a 17 digit VIN it can be registered regularly, if it is shortened it has to be registered as an antique. PA uses the NHTSA website as a Pass/Fail test: <a href="https://www.nhtsa.gov/vin-decoder">https://www.nhtsa.gov/vin-decoder</a></p>



<p>ISO 3779 is primarily adopted by the Americas and European countries to standardize safety and identification regulations.</p>



<h5>Antique Registration Information</h5>



<ul>
<li><a href="https://www.dmv.pa.gov/VEHICLE-SERVICES/Registration%20Plates/Pages/Vintage.aspx">PA Vintage Cars Home Page</a></li>



<li><a href="http://www.dot.state.pa.us/public/dvspubsforms/BMV/BMV%20Fact%20Sheets/fs-ant.pdf">Antique, Classic Vehicle and Vintage Registration Plate Fact Sheet</a></li>



<li><a href="http://www.dot.state.pa.us/public/dvspubsforms/BMV/BMV%20Forms/mv-11V.pdf">http://www.dot.state.pa.us/public/dvspubsforms/BMV/BMV%20Forms/mv-11V.pdf</a></li>
</ul>



<h5>Limitations and Misc information</h5>



<h6><em>Limitations</em></h6>



<ul>
<li>Kei class vehicles, specifically mini trucks, can only be registered as off road or Antique for residents.</li>



<li><a href="https://www.dmv.pa.gov/Driver-Services/New-Resident-Relocation-Information/New%20Residents/Pages/Motor-Vehicle-Information-for-New-Residents.aspx">All new residents</a> (or out of state registrations) are required to make an application for Pennsylvania title and registration of their vehicle(s) within 20 days of establishing residency in Pennsylvania.</li>
</ul>



<p>PA &#8211; In Pennsylvania, antiques have the following restrictions. Violations result in immediate and permanent revocation of road registration.</p>



<p><strong>USE OF ANTIQUE, CLASSIC AND VINTAGE REGISTRATION PLATES</strong>&nbsp;</p>



<p>The use of antique, classic and vintage registration plates is governed by Section 1340 of the Pennsylvania Vehicle Code, which states: “It is unlawful for any person to operate a motorcycle or vehicle with antique, classic, vintage, collectible or historic military vehicle registration plates for general daily transportation.&nbsp;</p>



<ul>
<li>Permitted use shall be limited to
<ul>
<li>participation in club activities</li>



<li>exhibits</li>



<li>tours</li>



<li>parades</li>



<li>occasional transportation and similar uses.”&nbsp;</li>



<li><strong><em>Occasional transportation and similar uses are defined as no more than one day a week.&nbsp;</em></strong></li>
</ul>
</li>



<li><strong>Antique, Classic, and Vintage registration plates may not be displayed on a vehicle used to transport people or property</strong></li>
</ul>



<h6><em>Misc Information</em></h6>



<ul>
<li>Vehicles registered out of state to a business, follow the registered states rules/laws
<ul>
<li>IE a vehicle registered to an LLC in a state where a kei truck is legal, is “legal” to drive in PA.</li>



<li>See <a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.9weatc9dai9o">Montana</a> for more information</li>
</ul>
</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Vehicle models that were not intended for USDM will likely need to be registered as Antique or Off-Road only, or bring the vehicle into compliance.</p>



<p>All documents submitted <strong><em>MUST be Originals </em></strong>and not copies.</p>



<ul>
<li>Bill Of Sale</li>



<li>Export Certificate Original</li>



<li>Export Certificate Translated</li>



<li>DOH &amp; CBP Entry Summary form 1651-0022</li>



<li>NHTSA &#8211; Import Declaration form 2127-0002</li>



<li><a href="http://www.epa.gov/otaq/imports">EPA &#8211; Import Declaration Form 2060-0717</a></li>



<li>Any other documents that came with the car should be submitted.</li>
</ul>



<p>You will also need:</p>



<ul>
<li>Valid State insurance on this vehicle</li>



<li>Valid State DL / ID</li>



<li>A picture of the vin sticker / plate on the vehicle</li>



<li>GVWR of Truck &amp; Empty Weight of truck</li>



<li>Did you pay sales tax? If so, proof that state sales tax was paid.</li>
</ul>



<h6><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Antique Registration or Farm/Off-Road Only</p>
`,protected:!1}},{id:100,modified:"2023-03-16T20:36:45",slug:"ri-rhode-island",title:{rendered:"RI &#8211; Rhode Island"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dmv.ri.gov/registrations-plates-titles/transfers/out-country">https://dmv.ri.gov/registrations-plates-titles/transfers/out-country</a></li>



<li><a href="https://www.providencejournal.com/story/lifestyle/advice/2022/12/25/why-japanese-mini-trucks-are-considered-unsafe-for-travel-in-rhode-island/69688201007/#:~:text=Rhode%20Island%20law%20does%20not,limited%20area%20of%20Prudence%20Island.">Mini Trucks article in Providence Journal</a></li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>News outlets and Hagerty insurance stated in 2021 Maine and Rhode Island started canceling all JDM vehicle registrations making them Off Road use only. If a vehicle cannot be brought up to modern standards, it likely cannot be registered in Maine or Rhode Island. <a href="https://docs.google.com/document/d/1mxiZnyHnQ-dOVVfPUIj-99Qqn-8NELT3J0wjjiIdANc/edit#heading=h.9weatc9dai9o">See Montana.</a></p>



<p>All transactions involving vehicles brought to Rhode Island from out of the country must be processed at the Rhode Island DMV Headquarters, 600 New London Avenue, Cranston, RI. 02920</p>



<p>To register a vehicle in Rhode Island transported from out of the country, you will need:</p>



<ul>
<li>United States Customs and Border Protection Customs Form # 7501</li>



<li>National Insurance Crime Bureau (NICB) inspection from DMV Enforcement Division in Cranston</li>



<li>VIN Inspection</li>



<li>Out of the country registration must be in the name of the person registering the vehicle in Rhode Island. If last name is different due to marriage/divorce, use the MVT-10 to list new name.</li>
</ul>



<p><em>Please Note: All documents submitted are subject to DMV approval upon registration.</em></p>



<p><strong><em>More information: Contact United States Customs and Border Protection at (401) 732-6701.</em></strong></p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<ul>
<li><a href="https://www.hagerty.com/media/news/maine-and-rhode-island-take-aim-at-jdm-cars-but-why/">https://www.hagerty.com/media/news/maine-and-rhode-island-take-aim-at-jdm-cars-but-why/</a>&nbsp;</li>
</ul>



<p>Rhode Island law does not specifically allow for the registration of mini trucks, nor does the state have any current laws which govern the use of any types of low-speed vehicles on the roadways, other than for the limited area of Prudence Island.</p>



<p>Therefore, due to their unsafe designation for use on the general public roads and highways, registration of these types of mini trucks is currently prohibited.</p>
`,protected:!1}},{id:102,modified:"2023-03-16T20:37:08",slug:"sc-south-carolina",title:{rendered:"SC &#8211; South Carolina"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.scdmvonline.com/Vehicle-Owners/">https://www.scdmvonline.com/Vehicle-Owners/</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>There is very little on the website. There is a form specific to South Carolina for translating foreign documents when registering imported vehicles.</p>



<ul>
<li><a href="https://www.scdmvonline.com/-/media/Forms/4030.ashx">https://www.scdmvonline.com/-/media/Forms/4030.ashx</a>&nbsp;</li>
</ul>



<p>SC definitions of “Foreign Cars”</p>



<ul>
<li>&#8220;Foreign vehicle&#8221; means every vehicle of a type required to be registered under this title brought into this State from another state, territory, or country, other than in the ordinary course of business by or through a manufacturer or dealer, and not registered in this State.</li>
</ul>



<ul>
<li>A person must replace a temporary license plate issued pursuant to this section with a permanent license plate and registration card as required by Section 56-3-110 within forty-five days of acquiring the vehicle or moving a Previous foreign vehicle into this State. A person who operates a vehicle in violation of this section is guilty of a misdemeanor and, upon conviction, must be fined not more than one hundred dollars.</li>



<li><a href="https://www.scstatehouse.gov/query.php?search=DOC&amp;searchtext=foreign%20vehicle&amp;category=CODEOFLAWS&amp;conid=37564416&amp;result_pos=0&amp;keyval=1123&amp;numrows=10">https://www.scstatehouse.gov/query.php?search=DOC&amp;searchtext=foreign%20vehicle&amp;category=CODEOFLAWS&amp;conid=37564416&amp;result_pos=0&amp;keyval=1123&amp;numrows=10</a>&nbsp;</li>



<li><a href="https://www.scstatehouse.gov/query.php?search=DOC&amp;searchtext=foreign%20vehicle&amp;category=CODEOFLAWS&amp;conid=37564416&amp;result_pos=0&amp;keyval=1113&amp;numrows=10">https://www.scstatehouse.gov/query.php?search=DOC&amp;searchtext=foreign%20vehicle&amp;category=CODEOFLAWS&amp;conid=37564416&amp;result_pos=0&amp;keyval=1113&amp;numrows=10</a>&nbsp;</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>South Carolina has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:104,modified:"2023-03-16T20:37:38",slug:"sd-south-dakota",title:{rendered:"SD &#8211; South Dakota"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dor.sd.gov/individuals/motor-vehicle/all-vehicles-title-fees-registration/#resource">https://dor.sd.gov/individuals/motor-vehicle/all-vehicles-title-fees-registration/#resource</a>&nbsp;</li>



<li><a href="https://www.pennco.org/index.asp?SEC=03B6DBC9-CD0A-495A-B5AE-BC395289EA49">Imported Vehicle Requirements SD</a>&nbsp;</li>



<li><a href="https://sddor.seamlessdocs.com/sc/individual-forms/">https://sddor.seamlessdocs.com/sc/individual-forms/</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Vehicles imported to the U.S. must pass through a port of entry and be cleared by U.S. Customs. For customs clearance to title your vehicle in SD you will first need:</p>



<ol>
<li>The shipper or carrier’s original bill of lading, the bill of sale, foreign registration, and any other documents covering the vehicle.</li>



<li>A completed EPA Form 3520 or a manufacturer’s label in the English language affixed to the car, stating that the vehicle meets all U.S. emission requirements.</li>
</ol>



<p><strong>See below to determine additional import documents needed.</strong></p>



<p><strong><em>CONFORMING VEHICLE</em></strong><em> (has a manufacturer’s label)</em></p>



<ol>
<li>US CBP-7501 (or other acceptable Entry Summary)</li>



<li>NHTSA HS-7 DOT Declaration of Conformity</li>



<li>Other supporting documentation (Title, Odometer, Bill of Sale)</li>



<li>If Canadian title document – must provide the Canadian Carfax that verifies lien status</li>
</ol>



<p><strong>NON-CONFORMING</strong> (Vehicles that are held until they meet safety standards) &amp; (complete the 3520 form)</p>



<ol>
<li>US CBP-7501 (or other acceptable Entry Summary)</li>



<li>NHTSA HS-7 DOT Declaration of Conformity</li>



<li>Bond Release Letter from NHTSA (showing conformity)(EPA 3520 Form)</li>



<li>If Canadian title document – must provide the Canadian Carfax that verified lien status</li>



<li>Other supporting documentation (Title, Odometer, Bill of Sale)</li>
</ol>



<p><strong>NON-CONFORMING</strong> (without a bond release letter)</p>



<ol>
<li>All above documentation in Section C</li>
</ol>



<ol>
<li>NHTSA Statement of Conformity</li>



<li>Certificate of Fact from importer attesting NHTSA guidelines were followed – 30 day time period applies.</li>
</ol>



<p><strong>Additional Requirements and Information</strong></p>



<p><strong>Proof of ownership</strong></p>



<ul>
<li>You will need the foreign title or transfer document (depending on the country that the vehicle is coming from, this might be your registration document)</li>



<li>If the title/registration document is not in the name of the applicant, it must be properly assigned by the seller to the current applicant to show the chain of ownership and a bill of sale must be present.</li>



<li>To be valid, a bill of sale must include the VIN, date of sale, selling price, buyer name, and seller signature.</li>



<li>For a brand-new purchase that has not yet been registered in the applicant’s name overseas, the original Manufacturer&#8217;s Certificate of Origin will be required.</li>
</ul>



<p><em>With proof of ownership, we are happy to assist you with a ONE time temporary permit payable by cash only at $1.00 per day- minimum 5 days, maximum 15 days should you need the additional time to retrieve your correct documents.&nbsp;</em></p>



<p><strong>Taxes</strong></p>



<ul>
<li>Vehicles that have not been titled or registered in the U.S. by the applicant will be subject to the 4% excise tax (<em>as of the date of this document/subject to law changes)</em></li>



<li>If the purchase of the vehicle was within the last 6 months, tax will be assessed on the purchase price shown on the provided bill of sale.</li>



<li>If the applicant has owned the vehicle longer than 6 months or a bill of sale cannot be provided, tax will be assessed on the current NADA clean retail value of the vehicle as placed in the SDCars system. To determine an accurate value, you will be asked to provide the options installed on your specific vehicle.</li>



<li>There are currently no military exemptions to this tax in the State of SD.</li>



<li>Proof of Taxes paid to another US State could be in the form of a copy of your previous title in your name or the last registration document from that state. An additional form may be required for reciprocity.</li>
</ul>



<p><strong>Additional fees</strong></p>



<p>Transactions done through the mail /via email will be charged a $25.00 administrative fee and will be done in the order in which they are received.</p>



<p><strong>Odometer Disclosure</strong></p>



<ul>
<li>The current odometer reading on the vehicle will be required if the vehicle is less than 20 years old.</li>
</ul>



<p><strong>ID Requirements</strong></p>



<ul>
<li>SD Drivers License or SD ID</li>



<li>If the applicant does not have a SD Drivers License or SD ID, a copy of a valid federally issued ID will be required (state issued ID or military ID) AND proof of social security number (copy of SS card, W2, or tax document with full name and SSN).</li>
</ul>



<p><strong>Registration</strong></p>



<ul>
<li>In South Dakota, registration fees are based on the weight and age of the vehicle.</li>



<li>Registration must be renewed annually with your renewal month being determined by the first letter of your last name. Expiration is the last day of that month and there is no grace period.</li>



<li>Fees are prorated from the date of your title transfer to your renewal month. If it is within 90 days from your renewal date, your registration will be calculated through to the following year.</li>



<li>A county wheel tax of $2.00 per wheel is assessed with your annual registration.</li>



<li>There are currently no active duty military discounts on registration in the State of South Dakota.</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>South Dakota has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks are named.</p>



<p><strong>Mini Trucks must be registered as Off Road Vehicles (ORV)</strong></p>
`,protected:!1}},{id:106,modified:"2023-03-16T20:38:02",slug:"tn-tennessee",title:{rendered:"TN &#8211; Tennessee"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.tn.gov/revenue/title-and-registration/vehicle-registration/imported-vehicles.html">https://www.tn.gov/revenue/title-and-registration/vehicle-registration/imported-vehicles.html</a>&nbsp;</li>



<li><a href="https://www.tn.gov/revenue/title-and-registration/vehicle-registration/off-highway-vehicles.html">https://www.tn.gov/revenue/title-and-registration/vehicle-registration/off-highway-vehicles.html</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>To obtain a Tennessee title and/or registration for a vehicle imported into the United States from another country, submit the following to your county clerk:</p>



<ul>
<li>Manufacturer’s Statement of Origin or Manufacturer’s Certificate of Origin*;</li>



<li>Bill of sale;</li>



<li>Form HS-7 Declaration (<a href="https://www.tn.gov/content/dam/tn/revenue/documents/forms/titlereg/hs799short.pdf">Importation of Motor Vehicles and Motor Vehicle Equipment Subject to Federal Motor Vehicle Safety, Bumper and Theft Prevention Standards</a>);</li>



<li>Clear and legible photograph of the vehicle’s Federal Motor Vehicle Safety Standards Label.</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p><strong>No, OHV (off highway vehicle) registration only.</strong></p>



<p>REGISTRATION CLASSES FOR OFF-HIGHWAY VEHICLES</p>



<p>“Low Speed Vehicle” means any four wheeled electric or gasoline vehicle, excluding golf carts, whose top speed is greater than 20 mph but not greater than 25 mph, including neighborhood electric vehicles. Low speed vehicles must comply with the standards in 49 CFR 571.500.</p>



<p>“Medium Speed Vehicle” means any four wheeled electric or gasoline vehicle, excluding golf carts, whose top speed is greater than 30 mph but not greater than 35 mph, including neighborhood electric vehicles and mini-trucks. Medium speed vehicles must meet or exceed the federal safety standards set forth in 49 CFR 571.500.</p>



<p>&#8220;Class I off-highway vehicle&#8221; means a motorized vehicle with not less than four non-highway tires, no more than six non-highway tires, whose top speed is greater than 35 mph, that is limited in total dry weight up to 2,500 lbs, that is 80 inches or less in width, and that has a non-straddle seating capable of holding no more than four passengers and a steering wheel. &#8220;Class I off-highway vehicle&#8221; includes mini-trucks.</p>
`,protected:!1}},{id:108,modified:"2023-03-16T20:39:00",slug:"tx-texas",title:{rendered:"TX &#8211; Texas"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.txdmv.gov/motorists/buying-or-selling-a-vehicle/out-of-state-and-foreign-vehicles">https://www.txdmv.gov/motorists/buying-or-selling-a-vehicle/out-of-state-and-foreign-vehicles</a>&nbsp;</li>



<li><a href="https://statutes.capitol.texas.gov/Search.aspx">https://statutes.capitol.texas.gov/Search.aspx</a>&nbsp;</li>



<li><a href="https://content.govdelivery.com/attachments/TXDMV/2019/04/03/file_attachments/1185740/Title%20Manual.pdf">https://content.govdelivery.com/attachments/TXDMV/2019/04/03/file_attachments/1185740/Title%20Manual.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>The vehicle must meet all federal and state importation requirements prior to titling and/or registering the vehicle in Texas.</p>



<p>Step 1: Properly import your vehicle</p>



<p>Your vehicle must meet the Federal Motor Vehicle Safety Standards (FMVSS) established by the National Highway Traffic Safety Administration (NHTSA).</p>



<p>More information concerning customs matters is available from U.S. Customs and Border Protection.</p>



<p>Step 2: Obtain a Safety inspection</p>



<p>Your vehicle must pass a Texas vehicle safety inspection if you are going to be obtaining registration. You can have your vehicle inspected at any Texas-certified Safety Inspection Station. The inspection station will provide you with an original Vehicle Inspection Report (VIR) signed by the inspector.</p>



<p>Step 3 Obtain a VIN inspection</p>



<p>The vehicle must be inspected by a trained auto theft investigator who is a law enforcement officer of this state or a political subdivision of this state. Contact local law enforcement to determine if they have a trained auto theft investigator or contact a Motor Vehicle Crime Prevention Authority Grantee to find a trained investigator.</p>



<p>Note: An authorized employee of the National Insurance Crime Bureau (NICB) may also perform these inspections.</p>



<p>Upon completion of this VIN inspection, you will be provided with an original Law Enforcement Identification Number Inspection (Form VTR-68-A) signed by the investigator.</p>



<p>Step 4: Apply for Texas title/registration</p>



<p>After your vehicle passes customs, federal and state inspection, take the following forms, along with proof of insurance, to your county tax office:</p>



<p>U.S. Department of Transportation Form HS-7, or any other document establishing customs entry/clearance and compliance with, or exemption from, federal safety standards</p>



<p>If the imported vehicle is under bond, an original bond release letter from the U.S. Department of Transportation</p>



<p>Vehicle Inspection Report (VIR), completed by a safety inspection station</p>



<p>The inspection report on the bottom of Form VTR-68-A completed by a law enforcement agency&#8217;s auto theft unit. Note: U.S. military personnel, including immediate family members, returning to Texas military bases are not required to submit a completed form VTR-68-A. Please refer to our Military Packet for more information.</p>



<p>A completed Application for Texas Title and/or Registration (Form 130-U)</p>



<p>Provide the vehicle&#8217;s odometer reading if it is required.</p>



<p>Present the ownership document. You must provide a certified English translation of any document printed in any language other than English.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Texas Motor Vehicle Title Manual states that: “Vast numbers of used Japanese mini-trucks and vans (also known as Kei-class vehicles) are being imported into the US primarily as off-road vehicles. Some states allow mini-trucks to operate on roadways as low or slow speed vehicles. Mini-trucks are not eligible for title or registration due the vehicle’s lack of compliance with US environmental and safety standards.”</p>
`,protected:!1}},{id:110,modified:"2023-03-16T20:39:22",slug:"ut-utah",title:{rendered:"UT &#8211; Utah"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dmv.utah.gov/register">https://dmv.utah.gov/register</a>&nbsp;</li>



<li><a href="https://dmv.utah.gov/vehicles/low-speed">https://dmv.utah.gov/vehicles/low-speed</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p><strong>Yes, </strong>although there is no mention of imported vehicle registration information on any government website, there is a thriving import market in Utah (especially with off road vehicles like Defenders and Hilux’s)</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p><strong>Maybe.</strong> There are mentions of Low Speed Vehicles under the registration webpage. While Kei cars and trucks are not speed limited in Japan, the state may still require them to be registered under this class. Contact your state&#8217;s main DMV office for specific information.</p>
`,protected:!1}},{id:112,modified:"2023-03-16T20:39:42",slug:"vt-vermont",title:{rendered:"VT &#8211; Vermont"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="http://dmv.vermont.gov/registrations/new/vehicle-purchased-outside-of-us#:~:text=New%20Vehicle%20(registered),Disclosure%20Statement%20(VT%2D005)">http://dmv.vermont.gov/registrations/new/vehicle-purchased-outside-of-us</a></li>



<li><a href="https://legislature.vermont.gov/Documents/2012/Docs/BILLS/H-0729/H-0729%20As%20Introduced.pdf">https://legislature.vermont.gov/Documents/2012/Docs/BILLS/H-0729/H-0729%20As%20Introduced.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>You need to submit the following documents obtained from the person selling you the vehicle (previous owner):</p>



<ul>
<li>Ownership document issued by the jurisdiction where the vehicle was registered</li>



<li>Import paperwork certifying vehicle meets US emission requirements</li>



<li><a href="https://dmv.vermont.gov/tax-title/vehicle-identification-number-vin">VIN Verification</a> (if required)</li>



<li>Odometer Disclosure Statement (VT-005)</li>
</ul>



<p>Complete a Vermont Registration, Tax, and Title application (VD-119) and submit it (together with the above documentation and the appropriate fees) to the Vermont Department of Motor Vehicles. Specific information about fees and supporting documents can be found in the Vermont Registration, Tax, and Title application instructions(VD-119i).</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Vermont has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks are named.</p>



<p><strong>Mini trucks are classified as farm use only</strong>.<strong> H. 729</strong></p>



<p>In 2021, residents reported the state started revoking any Kei truck and van registrations that were “accidentally” given out.</p>



<p>(83) “Mini-truck” means a motor vehicle having four wheels, a bed or compartment for hauling and an enclosed passenger cab, an engine displacement of 1,000 cubic centimeters or less, an unladen weight of 3,400 pounds or less, and a width of 67 inches or less.&nbsp;</p>



<p>A mini-truck may be registered as a farm truck or as a pleasure car, or be unregistered when used in accordance with subsection 370(b) of this title.</p>



<p>Sec. 2. 23 V.S.A. § 1004 is amended to read: § 1004. INTERSTATE HIGHWAY RULES AND OPERATION</p>



<p>(d) Mini-trucks shall not be operated on the Dwight D. Eisenhower National System of Interstate and Defense Highways.</p>



<p>Sec. 3. EFFECTIVE DATE</p>



<p>This act shall take effect on July 1, 2012.</p>
`,protected:!1}},{id:114,modified:"2023-03-16T20:40:07",slug:"va-virginia",title:{rendered:"VA &#8211; Virginia"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.dmv.virginia.gov/vehicles/#titling_imported.asp">https://www.dmv.virginia.gov/vehicles/#titling_imported.asp</a></li>



<li><a href="https://lis.virginia.gov/cgi-bin/legp604.exe?221+ful+SB320+hil">https://lis.virginia.gov/cgi-bin/legp604.exe?221+ful+SB320+hil</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p><strong>Step 1: </strong>Present the following documents</p>



<ol>
<li>Completed <a href="https://www.dmv.virginia.gov/webdoc/pdf/vsa17a.pdf">Application for Certificate of Title and Registration</a> (VSA 17A)</li>



<li><a href="https://www.dmv.virginia.gov/webdoc/pdf/dmv177.pdf">Proof of address</a></li>



<li>Authentic source of ownership document (e.g. existing title, prior registration, Manufacturer&#8217;s Certification of Origin, Manufacturer&#8217;s Statement of Origin, Export Certificate)
<ol>
<li>Note: If the Export Certificate is assigned to an exporting company and not the applicant, a Bill of Sale or Invoice from the exporting company to the applicant must be provided to establish the ownership transfer.</li>
</ol>
</li>



<li>English translations for all documents written exclusively in a foreign language</li>



<li>The following U.S. Customs and Border Protection (CBP) forms with the Customs stamp, electronic signature or ACE document(s)
<ol>
<li>CBP form <a href="https://www.cbp.gov/sites/default/files/assets/documents/2019-Dec/CBP%20Form%207501_0.pdf">7501</a></li>



<li>CBP form <a href="https://www.cbp.gov/sites/default/files/assets/documents/2019-Dec/CBP%20Form%207501_0.pdf">3461</a></li>
</ol>
</li>
</ol>



<p><strong>Note</strong>: All Customs must display the vehicle identification number (VIN) to verify the vehicle being imported. If there are multiple pages of a document, remember to submit all pages.</p>



<ol start="6">
<li>Bill of Sale or Invoice (must display the VIN)</li>



<li>Original Bond Release Letter from the U.S. Department of Transportation National Highway Traffic Safety Administration, if applicable</li>



<li>The Manufacturer&#8217;s Confirmation Letter or the Environmental Protection Agency (EPA) <a href="https://www.epa.gov/sites/default/files/2021-02/documents/form3520-1-2021-01-secured-enabled.pdf">3520-1 Declaration</a>, if applicable</li>



<li>Department of Transportation <a href="https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/hs7_rv9-tag.pdf">HS-7 Declaration</a>, if applicable</li>



<li>Any additional requirements specified on the HS-7 Declaration form</li>
</ol>



<p>Exemptions for Military Personnel</p>



<p>Military personnel or U.S. residents returning from a foreign country may present CBP form <a href="https://www.cbp.gov/sites/default/files/assets/documents/2019-Nov/CBP%20Form%203299.pdf">3299 </a>— Declaration for Title Entry of Unaccompanied Articles — with an electronic Customs stamp instead of CBP form 7501.</p>



<p>CBP form 3299 is only used for vehicles titled in the U.S., exported, and subsequently imported. There is no need to submit the HS-7. The vehicle make and VIN must be specified on the CBP 3299.</p>



<p>Foreign military personnel stationed at military installations in Virginia under the authority of the North Atlantic Treaty Organization (NATO) are exempt from bringing their vehicles into compliance with the Federal Motor Vehicle Safety Standards (FMVSS). They may register their vehicles for the length of their tour of duty only. A copy of their orders is sufficient to determine the length of their tour.</p>



<p><strong>Step 2:</strong> Pay the following fees</p>



<ul>
<li>$15 titling fee</li>



<li><a href="https://www.dmv.virginia.gov/vehicles/sut.asp">Sales and Use Tax</a></li>



<li><a href="https://www.dmv.virginia.gov/webdoc/pdf/dmv201.pdf">Registration fee</a>, if you choose to register the vehicle</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<p><strong>Yes, </strong>Import laws explicitly include motorcycles in the description.</p>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Virginia has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks are named.</p>



<p><strong>§ 46.2-916.4.</strong> Use of mini-trucks on highways.</p>



<p>Notwithstanding any other provision of law, a person may operate a mini-truck on any public highway in the Commonwealth with a speed limit of 55 miles per hour or less.</p>
`,protected:!1}},{id:116,modified:"2023-03-16T20:40:27",slug:"wa-washington",title:{rendered:"WA &#8211; Washington"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://app.leg.wa.gov/wac/default.aspx?cite=308-56A-115">https://app.leg.wa.gov/wac/default.aspx?cite=308-56A-115</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>(1) <strong>What ownership documents are required to title and license a vehicle not currently titled or licensed in the state of Washington?</strong></p>



<p>(a) If a vehicle is titled in another state, the application for certificate of ownership must be accompanied by the current ownership documents.</p>



<p>(b) If the vehicle was acquired from an agency of the United States government, the federal ownership document issued by the United States government must accompany the application for certificate of ownership. When a bill of sale covers more than one vehicle, a photocopy may be accepted when:</p>



<p>(i) United States federal government either registered or titled in Washington with a federal (FED) use class, the purchaser needs a bill of sale for a no title issued (NTI), or when title is issued in Washington, need title properly released.</p>



<p>(ii) A secure odometer disclosure completed only by the transferee and buyer if the vehicle falls within the federal odometer disclosure criteria.</p>



<p>(c) If a vehicle is titled in another country, the application for certificate of ownership must be accompanied by the current ownership document issued by that country. If the country from which the vehicle is imported cancels the vehicle ownership document for export, the application for certificate of ownership must be accompanied by documents showing proof of ownership and evidence of the cancellation if available. If evidence of cancellation is not available, then a statement of fact by the owner is required.</p>



<p>(d) If a member of the United States armed forces owns the vehicle and the vehicle has been registered by a United States government military entity, the application for certificate of ownership must be accompanied by the registration certificate as proof of ownership. If there is a lien holder, the armed forces member must provide the lien holder information at the time of application.</p>



<p>(2) <strong>What ownership documents are required to obtain a certificate of ownership for a vehicle from a nontitling state or country?</strong></p>



<p>(a) If the vehicle is from a state or country that by policy or law does not title a specific vehicle, but does register it, the department will accept the registration as an ownership document. If the applicant is not the owner shown on the registration, a bill of sale or release of interest is also required.</p>



<p>(b) If the vehicle is from a state or country that neither registers nor titles, follow the ownership in doubt procedures from WAC <a href="http://app.leg.wa.gov/WAC/default.aspx?cite=308-56A-210"><strong>308-56A-210</strong></a>. The applicant must submit a statement indicating when and where they acquired the vehicle.</p>



<p>(3) <strong>What if I am unable to locate a record of my vehicle in any state or country?</strong> If there is no indication that your vehicle is from a nontitle or nonregistration state or country, and no record of your vehicle is found, you may follow ownership in doubt procedures in WAC <a href="http://app.leg.wa.gov/WAC/default.aspx?cite=308-56A-210"><strong>308-56A-210</strong></a>.</p>



<p>(4) <strong>What is required to title a vehicle from a titling state or country that has refused to issue a title document for a specific vehicle?</strong> If the state or country has refused to issue title, Washington may require the customer to comply with ownership in doubt procedures from WAC <a href="http://app.leg.wa.gov/WAC/default.aspx?cite=308-56A-210"><strong>308-56A-210</strong></a>. In those cases where a title was refused for reasons not applicable to Washington, the department may consider issuing a title with the appropriate documentation.</p>



<p>(5) <strong>What documentation is required in addition to the ownership document if my vehicle is from a foreign country?</strong> In addition to the ownership document, the application for certificate of ownership must be accompanied by:</p>



<p>(a) An approved Department of Homeland Security U.S. Customs and Border Protection Entry Summary form properly executed authorizing the vehicle entry into this country. Applications for certificate of ownership for vehicles imported from Puerto Rico need not be accompanied by a customs document;</p>



<p>(b) An English translation for any document provided which is not in the English language. The translator must provide a notarized or certified affidavit attesting to the accuracy of the translation;</p>



<p>(c) A release of interest from the owners shown on the ownership documents, as provided in WAC <a href="http://app.leg.wa.gov/WAC/default.aspx?cite=308-56A-265"><strong>308-56A-265</strong></a>, if the applicant is not the owner shown.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Washington has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:118,modified:"2023-03-16T20:40:48",slug:"wv-west-virginia",title:{rendered:"WV &#8211; West Virginia"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://transportation.wv.gov/DMV/Pages/default.aspx">https://transportation.wv.gov/DMV/Pages/default.aspx</a></li>



<li><a href="https://www.wvlegislature.gov/wvcode/code.cfm?chap=17A&amp;art=3A">https://www.wvlegislature.gov/wvcode/code.cfm?chap=17A&amp;art=3A</a></li>



<li><a href="http://www.wvlegislature.gov/wvcode/chapterentire.cfm?chap=17A&amp;art=3&amp;section=2">http://www.wvlegislature.gov/wvcode/chapterentire.cfm?chap=17A&amp;art=3&amp;section=2</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p><strong>Yes.</strong> ​ARTICLE 3A. VEHICLE COMPLIANCE WITH FEDERAL CLEAN AIR STANDARDS AND VEHICLE SAFETY.</p>



<p><strong>§17A-3A-2. Consumer disclosure</strong></p>



<p>Before a motor vehicle not originally manufactured in accordance with the laws and regulations of the United States Clean Air Act and the Motor Vehicle Safety Act, can be sold to a consumer in this state, the seller must provide the purchaser with full written disclosure of all modifications performed to the vehicle. This disclosure consists of a description phrased in terms reasonably understandable to a consumer with no specialized technical training, accompanied by a copy of the technical submissions made to the environmental protection agency and department of transportation in order to obtain certification of compliance. Failure to make this disclosure renders the sale voidable.</p>



<p><strong>§17A-3A-3. Certificate of title.</strong></p>



<p>(a) Before any imported vehicle which has not previously been</p>



<p>titled or registered in the United States may be titled in this state, the applicant must submit:&nbsp;</p>



<ol>
<li>(1) A manufacturer&#8217;s certificate of origin issued by the actual vehicle manufacturer together with a notarized translation thereof; or&nbsp;</li>



<li>(2) the documents constituting valid proof of ownership by an individual owner or exporter and evidencing a change of such ownership to the applicant, together with a notarized translation of any document; or&nbsp;</li>



<li>(3) with regard to vehicles imported from countries which cancel the vehicle registration and title for export, the documents assigned to such vehicle after the registration and title have been canceled, together with a notarized translation thereof, and proof satisfactory to the division that the motor vehicle complies with the United States Clean Air Act and the Motor Vehicle Safety Act.</li>
</ol>



<p>(b) In the event that the documents submitted as required by subsection (a) of this section do not name as owner the current applicant for a certificate of title, the applicant must also submit reliable proof of a chain of title. For those countries which utilize documents of registration rather than a certificate of title, proof of a chain of title for purposes of this subsection shall be accomplished by presenting the change of ownership certificate referred to in subsection (a) of this section.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>West Verginia has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car. However, mini trucks specifically are named.</p>



<p><br><strong>Special Purpose Vehicle Registration (OHV)</strong> (k) Mini-trucks may not be operated as street-legal special purpose vehicles on highways that have been constructed pursuant to a federal highways program.</p>
`,protected:!1}},{id:120,modified:"2023-03-16T20:41:13",slug:"wi-wisconsin",title:{rendered:"WI &#8211; Wisconsin"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://wisconsindot.gov/Pages/dmv/vehicles/title-plates/foreign-veh.aspx">https://wisconsindot.gov/Pages/dmv/vehicles/title-plates/foreign-veh.aspx</a>&nbsp;</li>



<li><a href="https://docs.legis.wisconsin.gov/code/register/2019/765B/register/guidance_documents/department_of_transportation_trans/public_notice_notice_of_proposed_guidance_document_dmv216.pdf">https://docs.legis.wisconsin.gov/code/register/2019/765B/register/guidance_documents/department_of_transportation_trans/public_notice_notice_of_proposed_guidance_document_dmv216.pdf</a></li>



<li><a href="https://docs.legis.wisconsin.gov/statutes/statutes/341/I/10/6">https://docs.legis.wisconsin.gov/statutes/statutes/341/I/10/6</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>​<strong>Collectors Plate (Limited Use) Only</strong></p>



<p>A foreign vehicle is defined as being manufactured for use in another country and not intended for use in the U.S. or as a vehicle last titled in a foreign country. Federal law requires that the title and registration of foreign vehicles must show that they meet U.S. standards, by either a Federal Certificate Label (FCL) or Registered Importer label (RI).​</p>



<figure class="wp-block-table"><table><tbody><tr><td><strong>​Federal certification label (FCL)</strong>manufactured to U.S. standards</td><td><strong>​Registered Importer label (RI)</strong>brought up to U.S. standards</td></tr><tr><td>​Vehicles originally manufactured to U.S. standards will bear a manufacturer’s FCL stating that it conforms to Federal Motor Vehicle Safety Standards (FMVSS).An automobile, light truck, low speed vehicle or motorcycle of model year 1970 or newer must have a manufacturer’s FCL certifying the vehicle was manufactured for U.S. on-road use.</td><td>​Vehicles manufactured for use in a foreign country can be imported into the United States and brought up to U.S. standards with the placement of a RI label.The RI label identifies the RI importer and their certification that the vehicle complies with all Federal Motor Vehicle Safety Standards (FMVSS) for that vehicle.</td></tr></tbody></table></figure>



<ul>
<li>Vehicles with a FCL or RI label can be titled and registered in Wisconsin for any <a href="https://wisconsindot.gov/Pages/dmv/vehicles/title-plates/plateguide.aspx">plate type</a>.</li>



<li>Vehicles without either label can be titled in Wisconsin but will display “NON USA STANDARD” on the title.</li>



<li>Vehicle titles with this brand may only be registered as a special interest vehicle (<a href="https://wisconsindot.gov/Pages/dmv/vehicles/title-plates/special.aspx#collector">collector license plates</a>), as stated in Wisconsin statutes <a href="http://docs.legis.wisconsin.gov/statutes/statutes/341/I/10/6">s.341.10(6)</a>.</li>



<li>Vehicles, model year 1970 and newer, can be registered with regular auto or light truck license plates only if they were originally manufactured to conform to all applicable U.S. federal motor vehicle safety standards in effect on the date of manufacture or were brought into conformity with the applicable standards by an importer registered with the National Highway Transportation Safety Administration (NHTSA), per statute (<a href="http://docs.legis.wisconsin.gov/statutes/statutes/341/I/10/6">341.10(6)</a>).</li>
</ul>



<p>The National Highway Traffic and Safety Administration (NHTSA) and the Environmental Protection Agency (EPA) allows for vehicles to be imported into the country once the vehicle has reached a certain age. However, NHTSA and EPA are not responsible for regulating the operation of motor vehicles on public roads in the U.S. or for titling or registering motor vehicles for such operation: that is the responsibility of the individual states.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p><strong>Banned for registration</strong></p>



<p><strong>41.10  Grounds for refusing registration.</strong> The department shall refuse registration of a vehicle under any of the following circumstances:6) The vehicle was manufactured after 1969 and does not meet manufacturer or importer certification label requirements as specified in 49 CFR 567 or<strong> the vehicle is a Kei class vehicle</strong>. This subsection does not apply to former military vehicles, historic military vehicles, as defined in s. 341.269 (1) (a), for which the department receives an application, and which are eligible, for registration under s. 341.269, or special interest vehicles, as defined in s. 341.266 (1) (c), for which the department receives an application, and which are eligible, for registration under s. 341.266.</p>
`,protected:!1}},{id:122,modified:"2023-03-16T20:41:34",slug:"wy-wyoming",title:{rendered:"WY &#8211; Wyoming"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.dot.state.wy.us/home/titles_plates_registration/imported_vehicles.html">https://www.dot.state.wy.us/home/titles_plates_registration/imported_vehicles.html</a></li>



<li><a href="https://www.dot.state.wy.us/home/titles_plates_registration/multipurpose_vehicles.html">https://www.dot.state.wy.us/home/titles_plates_registration/multipurpose_vehicles.html</a></li>



<li><a href="https://www.dot.state.wy.us/home/vehicle_bus_regulation/vehicle-manufacturers/out_of_state.html">https://www.dot.state.wy.us/home/vehicle_bus_regulation/vehicle-manufacturers/out_of_state.html</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p><strong>Yes, </strong>Wyoming’s website for imported vehicles only mentions &lt;25 year cars from Canada. It then refers you to the NHTSA vehicle import guidelines. By referring its residents to the federal import guidelines, one could assume that Wyoming registers &gt;25 year exempt vehicles without issue. There is also “mini truck” listed under multipurpose vehicles.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Kei cars are not mentioned anywhere. <strong>Mini Trucks are mentioned, but only as a Off Highway Vehicle. </strong>But, beware the photo of a “mini truck” is a UTV. Contact your state&#8217;s main DMV office for more information.</p>



<p>Wyoming Considers Mini Trucks to be “Multipurpose Vehicles”</p>



<p>Mini Trucks (If operated on Wyoming streets or highways, see <a href="https://www.dot.state.wy.us/home/titles_plates_registration/multipurpose_vehicles.html">multipurpose vehicles</a>)</p>



<p><strong>Multipurpose vehicle means a motor vehicle that is:</strong></p>



<ol>
<li>Designed to travel on at least 4 wheels in contact with the ground</li>



<li>Has an unladen (empty) weight of at least 300 pounds but less than 3,000 pounds</li>



<li>Has a permanent upright seat or saddle for the driver which is mounted at least 24 inches from the ground</li>



<li>Has an identifying number as defined by W.S. 31-1-101(a)(ix)</li>
</ol>



<p><strong>Multipurpose vehicles may be operated on public streets or highways, subject to the following provisions:</strong></p>



<ol>
<li>Multipurpose vehicles shall not be operated on interstate highways.</li>



<li>If a multipurpose vehicle is incapable of achieving the maximum speed allowed on the specific highway, it shall be operated on the extreme right hand edge of the roadway and shall be equipped with either a reflectorized flag or a slow moving vehicle emblem.</li>
</ol>
`,protected:!1}},{id:124,modified:"2023-03-16T20:41:57",slug:"dc-district-of-columbia",title:{rendered:"DC &#8211; District of Columbia"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://dmv.dc.gov/service/requirements-title-and-register-imported-vehicles-us">https://dmv.dc.gov/service/requirements-title-and-register-imported-vehicles-us</a></li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>All Imported vehicles must meet federal motor vehicle safety standards before they can be registered in the District.</p>



<p>For DC DMV the following items are needed to register imported vehicles to the US:</p>



<ul>
<li>You (or at least one person listed on the vehicle title as an owner) legally reside in the District and have a DC DMV driver or non-driver credential</li>



<li>Customs documentation (Port of entry papers)</li>



<li>Form stating the vehicle is certified to the United States EPA federal emissions standards</li>



<li>Form stating the vehicle is certified to the United States safety standards</li>



<li>Vehicle ownership/registration document</li>



<li>Bill of sale/Lien documents (if applicable)</li>



<li>Proof of DC insurance (must be printed)</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<p>All motorcycles and motorized bicycles must meet federal motor vehicle safety standards before they can be registered in the District. Detailed information about the requirements to register your motorcycle or motorized bicycle is available at the link below:</p>



<ul>
<li><a href="https://dmv.dc.gov/publication/non-traditional-motor-vehicles-and-dc-law">Non-Traditional Motor Vehicle Chart</a></li>
</ul>



<p>Although safety inspections are no longer required for motorcycles and motorized bicycles, you must still provide proof of compliance with the federal safety standards if your motorcycle or motorized bicycle was imported from outside the United States.</p>



<p>Proof may be provided in one of two ways:</p>



<ul>
<li>You may present to a DC DMV service center a manufacturer&#8217;s certification of compliance. This is in addition to the registration application and other documents required to title and register the vehicle.</li>



<li>If you cannot locate the manufacturer&#8217;s certification of compliance, then you must bring the imported motorcycle/motorized bicycle to the inspection station to be inspected before it can be titled. An inspector will verify whether the vehicle meets the federal safety standards. Information on the DC DMV Inspection Station is available at the link below:</li>



<li><a href="https://dmv.dc.gov/node/1099182">Inspection Station</a></li>
</ul>



<p>Once an inspector determines the vehicle has complied with the federal safety standards, you may then visit a DC DMV service center to title and register it. Information on DC DMV Service Centers is available at the link below:</p>



<ul>
<li><a href="https://dmv.dc.gov/node/1089402">DC DMV Service Centers</a></li>
</ul>



<p>Contact TTY:&nbsp;</p>



<p>711</p>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>The District of Columbia has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:126,modified:"2023-03-16T20:42:18",slug:"as-american-samoa",title:{rendered:"AS &#8211; American Samoa"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://asbar.org/regulation/22-0113-imported-motor-vehicles/">https://asbar.org/regulation/22-0113-imported-motor-vehicles/</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<ol>
<li>Except as provided in 22.0114, the period of exemption permitted under 22.1004 and 22.1005 (2) A.S.C.A., from registration and licensing in American Samoa of any motor vehicle validly registered and licensed in another jurisdiction expires immediately upon arrival of the vehicle in American Samoa.</li>



<li>The director of port administration shall not release a privately owned motor vehicle to the owner upon its importation into American Samoa unless and until the owner provides the director or his authorized representative with a certificate of compulsory motor vehicle liability insurance coverage required by 22.2001 through 22.2019 A.S.C.A., and effective through the last day of the same month 1 year after the month in which the insurance coverage is issued, and further removes any license tags issued by another jurisdiction from the vehicle.</li>



<li>Upon presentation of the certificate of compulsory motor vehicle liability insurance coverage and removal of any foreign license tags from the vehicle, the director of port administration shall cause to be affixed in the rear window of the motor vehicle, preferably on the lower right-hand corner, a temporary license tag on which the port director has marked in bold numerals the expiration date as the fifth day, excluding Saturday and Sunday, after the date of release of the motor vehicle to the owner.</li>



<li>The owner of the motor vehicle shall have the vehicle inspected, registered, and licensed on or before the expiration date of the temporary license tag in accordance with 22.1002 and 22.1202 A.S.C.A., and Article 1 of this chapter.</li>
</ol>



<p>History: Rule 12-80, eff 1 Jul 80, § 4 (d).</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>American Samoa has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:128,modified:"2023-03-16T20:42:44",slug:"gu-guam",title:{rendered:"GU &#8211; Guam"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.guampdn.com/news/whats-with-the-little-trucks-minis-growing-in-popularity-on-guam-roads/article_7fbeacda-74eb-11ec-8da1-53dd8fc4f7e2.html">https://www.guampdn.com/news/whats-with-the-little-trucks-minis-growing-in-popularity-on-guam-roads/article_7fbeacda-74eb-11ec-8da1-53dd8fc4f7e2.html</a></li>



<li><a href="https://s3.amazonaws.com/rdcms-iam/files/production/public/newimages/member/shippers/guam.pdf">https://s3.amazonaws.com/rdcms-iam/files/production/public/newimages/member/shippers/guam.pdf</a>&nbsp;</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p><strong>Documents Required</strong></p>



<ul>
<li>Environmental Protection Agency (EPA) Form EPA-3520-21, if applicable</li>



<li>OBL (foreign purchased vehicles)</li>



<li>Bill of Sale / Pro-forma Invoice with Statement of Value (foreign purchased vehicles)</li>



<li>Title of ownership translated into English (foreign purchased vehicles)</li>



<li>Department of Transportation (DOT) Form HS-7</li>



<li>Environmental Protection Agency (EPA) Form 3520-1 (foreign purchased vehicles)</li>



<li>Proof of conformity by either:
<ul>
<li>USA Title / Registration, or</li>



<li>Letter of Conformity from the manufacturer</li>



<li>Foreign military sales contract that indicates vehicle meets USA-EPA / DOT regulations</li>



<li><strong>Exemption as a 25 model year old vehicle as proven by the title</strong></li>
</ul>
</li>



<li>Copy of USA Title or Registration when previously registered in the USA (vehicles previously</li>



<li>owned and shipped from the USA by the returning importer)</li>



<li>Completed EPA-3520-1, DOT, HS-7 and Customs 7501 forms (vehicles previously owned</li>



<li>and shipped from the USA by the returning importer)</li>



<li>Letter of Permission from the EPA (non-residents importing vehicles as a tourist)</li>
</ul>



<p><strong>Specific Information</strong></p>



<ul>
<li>For vehicles previously owned and shipped from the USA by the returning importer, the</li>



<li>ownership names must match with the consignee of the shipment on the vehicle Title and</li>



<li>Registration.</li>



<li>A non-US resident can import a vehicle for a period of up to 1 year as a tourist, but no</li>



<li>extension will be allowed. The importer is required to obtain a permission letter prior to</li>



<li>shipping the vehicle from the EPA.</li>



<li>Vehicles imported by non-residents for tourism may not sell or offer for vehicle for sale and it</li>



<li>must be exported prior to the 1-year period or is subject to seizure and penalties by Customs.</li>



<li>Some ports of entry (POE) require a bond for up to three times the value of the vehicle to</li>



<li>ensure the timely export of the vehicle. Additional port specific declarations may be required</li>



<li>for this temporary importation</li>



<li>A Bill of sale or Pro-forma Invoice with the statement of value must include the vehicle’s</li>



<li>description, vehicle identification number (VIN), model and year of manufacture.</li>



<li>In general vehicles that are 25 model years old and with the original drivetrain are exempt</li>



<li>from EPA / DOT regulations.</li>



<li>Vehicles less than 25 model years old that were not previously titled in the USA must comply</li>



<li>with EPA / DOT regulations.</li>



<li>The cost and time to bring a vehicle into compliance by an ICI (certified conversion shop)</li>



<li>make the process an unwise economic decision in most cases.</li>



<li>It is strongly recommended not to import non-complying vehicles. In the event an importer</li>



<li>elects to attempt to import a vehicle it should be sent separately from household goods and</li>



<li>personal effects shipments to avoid delays in the receipt of the shipment.</li>



<li>The importer must make arrangements with an ICI shop in the USA prior to shipping the</li>



<li>vehicle in order to get an estimate and to determine if the vehicle can be brought into</li>



<li>compliance.</li>



<li>Marine engines and gas-powered generators are also subject to EPA requirements</li>



<li>and Form EPA-3520-21 is normally required for those items.</li>
</ul>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p><strong>Yes, without restrictions. See first link under DMV</strong></p>
`,protected:!1}},{id:130,modified:"2023-03-16T20:43:07",slug:"mp-northern-mariana-islands",title:{rendered:"MP &#8211; Northern Mariana Islands"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li><a href="https://www.cnmilaw.org/pdf/public_laws/20/pl20-21.pdf">https://www.cnmilaw.org/pdf/public_laws/20/pl20-21.pdf</a>&nbsp;</li>



<li><a href="https://www.cnmilaw.org/pdf/public_laws/05/pl05-39.pdf">https://www.cnmilaw.org/pdf/public_laws/05/pl05-39.pdf</a></li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p>Only if converted to left hand drive. See first link under DMV</p>



<p>Present law prohibits the registration of a right hand drive motor vehicle, except heavy equipment or construction vehicles, in the Commonwealth unless the vehicle has been previously registered in the Commonwealth or the United States or its territories or possessions. The law does not prohibit the importation of such vehicles into the Commonwealth. There have been instances where such motor vehicles have been imported into the Commonwealth by uninformed owners at great expense who subsequently learned that the vehicles could not be registered. This Act will prohibit the importation of a right hand drive motor vehicle into the Commonwealth.&nbsp;</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Northern Mariana Islands have no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>



<h3>PR &#8211; Puerto Rico</h3>



<h5>DMV Website</h5>



<ul>
<li><a href="https://www.cesco.pr.gov/solicitudes-y-formularios">https://www.cesco.pr.gov/solicitudes-y-formularios</a>&nbsp;</li>



<li><a href="https://nxautotransport.com/importing-car-puerto-rico-tax-cost">https://nxautotransport.com/importing-car-puerto-rico</a></li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<p><strong>Picking Up Your Vehicle</strong></p>



<p>To get your vehicle you will need the following:</p>



<ul>
<li>Social Security Card</li>



<li>Valid Driver License</li>



<li>Your car’s booking number</li>



<li>Official Excise Tax Document (that you get at an office in the port)</li>



<li>Proof of payment for the Excise Tax (by paying online using SURI)</li>



<li>Payment of remaining balance for the ocean-bound transport</li>
</ul>



<p>DTOP &#8211; The Puerto Rico DMV</p>



<p>This is the department on the island that issues licenses, vehicle registrations, and more.</p>



<p>If you are NOT a resident of Puerto Rico, you will need:</p>



<ol>
<li>The Title for the Car</li>



<li>Valid US Driver&#8217;s license</li>



<li>Import paperwork. KEEP Everything to be safe in case they ask.</li>



<li>ORIGINAL Social Security Card</li>



<li>Proof of residency. (Lease, property ownership papers, or if moving in with family have a letter certifying you are moving in rent free)</li>
</ol>



<p>If you ARE a resident of Puerto Rico, you will need:</p>



<ol>
<li>Your valid Puerto Rico Driver&#8217;s License</li>



<li>The title of vehicle</li>



<li>Import paperwork. Again, KEEP Everything to be safe in case they ask.</li>
</ol>



<p>Registration Fee for&nbsp;</p>



<p>below 3,500 lbs is around $72.00.&nbsp;</p>



<p>Above 3,500 lbs expect to pay about $115.00 – $155.00</p>



<p>Unfortunately, there&#8217;s always extra steps in some of these processes. So be ready to take at least 2 days to cover all these steps:</p>



<ol>
<li>You may need to go to the DTOP office and pick up a form called the &#8220;Expedición Comprobantes de Pago&#8221;. This is changing now that they are using SURI, the online payment portal. To be sure, call.&nbsp;</li>



<li>Go get your emissions inspections at a local mechanic. Search around and you&#8217;ll find one nearby.
<ol>
<li>Expect to pay about $20-40.00</li>
</ol>
</li>



<li>If you can pay using SURI, the DTOP will inform you on how to pay your fees. Otherwise, you will need to <a href="http://www.hacienda.gobierno.pr/">Hacienda</a>.</li>



<li>Call your most convenient DTOP office when they open in the morning. Most open around 7:30 am. You need to get an inspection done to complete your vehicle registration. See Locations in the next section.</li>
</ol>



<p>Since 2019, the DTOP site has been redone with less information. They used to have a great list of locations. But luckily <a href="https://web.archive.org/web/20181206101755/http://www.dtop.gov.pr/servicios/det_content.asp?cn_id=184">thanks to Archive.org, you can see this list of locations</a>. Verify the one nearest you by calling. The less congested the area, the less the wait. Here&#8217;s the list.</p>



<p>Afterwards, License stickers are renewed yearly. You will have to pay a $35 annual fee for no fault insurance and $65 for annual registration.</p>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>Puerto Rico has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:132,modified:"2023-03-16T20:44:25",slug:"um-united-states-minor-outlying-islands",title:{rendered:"UM &#8211; United States Minor Outlying Islands"},content:{rendered:`
<h5>DMV Website</h5>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:134,modified:"2023-03-16T20:46:34",slug:"vi-virgin-islands",title:{rendered:"VI &#8211; Virgin Islands"},content:{rendered:`
<h5>DMV Website</h5>



<ul>
<li>https://bmv.vi.gov/</li>
</ul>



<h5>Legal in State?</h5>



<h6><em></em><em>Cars</em></h6>



<h6><em></em><em>Motorcycles</em></h6>



<h6><em></em><em>Kei Cars and Trucks</em></h6>



<p>has no laws regarding the legality of Kei vehicles on the street or highways, therefore, they should fall under the standard rules for importing a car.</p>
`,protected:!1}},{id:136,modified:"2023-03-16T20:47:09",slug:"antique-registrations",title:{rendered:"Antique Registrations"},content:{rendered:`
<ul>
<li><a href="https://www.findlaw.com/traffic/drivers-license-vehicle-info/historic-vehicle-registration-laws.html">https://www.findlaw.com/traffic/drivers-license-vehicle-info/historic-vehicle-registration-laws.html</a></li>
</ul>



<p>Check your local DMV’s website for your states Antique tags rules. Most are similar to those listed below.</p>



<p>Once a vehicle is registered as off-road use only in a state, it can never be registered for on-road use in any state.</p>



<p>PA &#8211; In Pennsylvania, antiques have the following restrictions. Violations result in immediate and permanent revocation of road registration. Many states have similar restrictions on antique registrations.</p>



<ul>
<li><a href="https://asctitle.com/articles/registering-a-classic-or-antique-car.html">USE OF ANTIQUE, CLASSIC AND VINTAGE REGISTRATION PLATES</a> The use of antique, classic and vintage registration plates is governed by Section 1340 of the Pennsylvania Vehicle Code, which states: “It is unlawful for any person to operate a motorcycle or vehicle with antique, classic, vintage, collectible or historic military vehicle registration plates for general daily transportation.&nbsp;</li>



<li>Permitted use shall be limited to
<ul>
<li>participation in club activities,&nbsp;</li>



<li>exhibits,&nbsp;</li>



<li>tours,&nbsp;</li>



<li>parades,&nbsp;</li>



<li>occasional transportation and similar uses.”&nbsp;</li>



<li><strong><em>Occasional transportation and similar uses are defined as no more than one day a week.&nbsp;</em></strong></li>
</ul>
</li>



<li><strong>Antique, Classic, and Vintage registration plates may not be displayed on a vehicle used to transport people or property</strong></li>
</ul>



<p><strong>Restrictions:</strong></p>



<ul>
<li>How often you can drive in a week (usually once a week)</li>



<li>What hours you can drive the vehicle (Dawn to dusk)</li>



<li><a href="https://asctitle.com/articles/registering-a-classic-or-antique-car.html#:~:text=Antique%20and%20Classic%20Pennsylvania%20Registration%20Restrictions&amp;text=The%20vehicle%20is%20not%20meant,for%20a%20load%20of%202x4's.">You cannot use the vehicle to transport property</a> (ie you cannot use the vehicle to run to home depot for 2&#215;4’s)</li>



<li>Cannot be used for advertisement (you cannot put company logos on the car and use it as a business vehicle)</li>



<li>Not supposed to modify the vehicle. You are supposed to retain, or restore back to, the OEM spec it had when it was new.</li>
</ul>
`,protected:!1}},{id:138,modified:"2023-03-16T20:48:29",slug:"out-of-state-llc-vehicle-registrations",title:{rendered:"Out-Of-State LLC Vehicle Registrations"},content:{rendered:`
<h6><em>Misc Information</em></h6>



<ul>
<li>Vehicles registered out of state to a business generally follow the registered states rules/laws/tax codes
<ul>
<li>IE a vehicle registered to an LLC in a state where a kei truck is legal, is “legal” to drive in any state.</li>
</ul>
</li>
</ul>



<h5>Registering an LLC / Registering a vehicle under an LLC</h5>



<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://www.montanacorporate.com/
</div></figure>



<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://www.dirtlegal.com/import-vehicle-titling-service
</div></figure>



<p>($1,299 + $125/yr LLC Fee + $185/yr commercial vehicle fee)</p>



<figure class="wp-block-embed is-type-wp-embed is-provider-all-day-49-montana-registered-agent-llc wp-block-embed-all-day-49-montana-registered-agent-llc"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="ZjaGYSPzGz"><a href="https://www.49dollarmontanaregisteredagent.com/montana-vehicle-registration/car">Montana Car and Truck Registration</a></blockquote><iframe class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" title="&#8220;Montana Car and Truck Registration&#8221; &#8212; All Day $49 Montana Registered Agent, LLC" src="https://www.49dollarmontanaregisteredagent.com/montana-vehicle-registration/car/embed#?secret=ZjaGYSPzGz" data-secret="ZjaGYSPzGz" width="500" height="282" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://www.llctlc.com/packages-pricing
</div></figure>



<p>($1,299 + $165 annual renewal of LLC)</p>



<p>Registering just an LLC through somewhere like legalzoom will cost $329-349 + state filing fees to create the LLC. Then they charge you $280+/year in additional fees across all of their “services”.</p>



<p>The example all in one services above generally work like this: you pay them $1200-2000 and send them all of your paperwork. They create the LLC, register the vehicle as a business vehicle, then mail all the completed paperwork and tags back to you in around 4-6 weeks. These services are required if you are starting a business in a state other than where you live, or if you just want to keep your personal information private. The name, address, phone number, and email address of the registered agent is public for anyone to see.</p>



<p><a href="https://www.autotrader.com/oversteer/heres-why-so-many-exotic-cars-have-montana-license-plates-256721#:~:text=To%20start%2C%20it's%20important%20to,Montana%20has%20no%20sales%20tax.">Why are businesses registered in a separate state?</a> Many choose states that do not have sales tax, such as Delaware, Montana, New Hampshire, and Oregon. Exotic car and RV enthusiasts use Montana to save tens of thousands of dollars in taxes, while import collectors use Montana for the lax registration practices. You do not have to go to Montana to register.</p>



<p><strong>What is the caveat?</strong> You cannot create a business just for the sake of a car collection. You will include your LLC on your taxes and you have to prove you are actually attempting to run a business in order to keep your business license. When you report a profit loss, or worse, zero revenue, the IRS may audit you and have you prove you are starting a business and not a hobby. <a href="https://turbotax.intuit.com/tax-tips/small-business-taxes/when-the-irs-classifies-your-business-as-a-hobby/L5NClTTtK">If found in violation, you will owe any taxes and fees not collected during the LLC</a>.</p>



<h5>5 Basic steps to Start an LLC</h5>



<ol>
<li><a href="https://www.sba.gov/business-guide/launch-your-business/register-your-business">Name your LLC</a></li>



<li>Choose a registered agent
<ol>
<li>Someone who is at least 18 years old</li>



<li>Lives in the state the LLC is started in</li>



<li>Is available during normal business hours to accept service of process</li>
</ol>
</li>



<li>File the Articles of Organization</li>



<li>Create an Operating Agreement</li>



<li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online">Get an EIN</a> (Permanent Employer Identification Number)</li>
</ol>



<h5>Fee’s breakdown:</h5>



<h6><em>The State’s mandatory fees</em></h6>



<p><a href="https://www.llcuniversity.com/llc-annual-fees-by-state/">These fees vary state to state</a>, and you will have to pay whether you file all of the paperwork, or hire a service. (these are included in the initial price for starting the LLC)</p>



<ul>
<li>Articles of incorporation &#8211; $35 <a href="https://www.llcuniversity.com/llc-annual-fees-by-state/">(annual in MT, every 10 years in PA</a>)</li>



<li>LLC Name Reservation &#8211; $10</li>



<li>Registration of Foreign Business Name &#8211; $10</li>



<li>Certified Document Copies &#8211; $10</li>



<li>Certificate of Existence &#8211; $5</li>
</ul>



<p><a href="https://sosmt.gov/wp-content/uploads/business_filing_fees.pdf">https://sosmt.gov/wp-content/uploads/business_filing_fees.pdf</a></p>



<h6><em>The Legal Services fees</em></h6>



<p>These are the additional fees you will pay for the convenience of someone else being the registered agent. Must be able to receive legal notices, file essential documents and annual reports, and keep your business in compliance.</p>



<ul>
<li>One time setup fee</li>



<li>Annual Registered Agent Fee
<ul>
<li>Other “compliance” and documentation fees</li>
</ul>
</li>
</ul>
`,protected:!1}},{id:140,modified:"2023-03-16T20:49:16",slug:"more-resources",title:{rendered:"More Resources"},content:{rendered:`
<p><strong>EPA</strong></p>



<p>Imports Hotline: 734-214-4100</p>



<p>Overview of Vehicle Import Requirements</p>



<p>Automotive Import FAQs Manual</p>



<p><strong>NHTSA</strong></p>



<p>Office of Vehicle Safety Compliance: 202-366-5291</p>



<p>Email: Importcertification@dot.gov</p>



<p>Importation and Certification FAQs [external link]</p>



<p><strong>U.S Customs</strong></p>



<p>Instructions for Importing a Motor Vehicle</p>
`,protected:!1}}];function Xo(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var df={},R2={get exports(){return df},set exports(e){df=e}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(e,n){(function(t){e.exports=t()})(function(){return function t(r,i,o){function a(u,p){if(!i[u]){if(!r[u]){var h=typeof Xo=="function"&&Xo;if(!p&&h)return h(u,!0);if(l)return l(u,!0);var y=new Error("Cannot find module '"+u+"'");throw y.code="MODULE_NOT_FOUND",y}var k=i[u]={exports:{}};r[u][0].call(k.exports,function(v){var c=r[u][1][v];return a(c||v)},k,k.exports,t,r,i,o)}return i[u].exports}for(var l=typeof Xo=="function"&&Xo,s=0;s<o.length;s++)a(o[s]);return a}({1:[function(t,r,i){(function(o){var a=o.MutationObserver||o.WebKitMutationObserver,l;if(a){var s=0,u=new a(v),p=o.document.createTextNode("");u.observe(p,{characterData:!0}),l=function(){p.data=s=++s%2}}else if(!o.setImmediate&&typeof o.MessageChannel<"u"){var h=new o.MessageChannel;h.port1.onmessage=v,l=function(){h.port2.postMessage(0)}}else"document"in o&&"onreadystatechange"in o.document.createElement("script")?l=function(){var C=o.document.createElement("script");C.onreadystatechange=function(){v(),C.onreadystatechange=null,C.parentNode.removeChild(C),C=null},o.document.documentElement.appendChild(C)}:l=function(){setTimeout(v,0)};var y,k=[];function v(){y=!0;for(var C,m,d=k.length;d;){for(m=k,k=[],C=-1;++C<d;)m[C]();d=k.length}y=!1}r.exports=c;function c(C){k.push(C)===1&&!y&&l()}}).call(this,typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,r,i){var o=t(1);function a(){}var l={},s=["REJECTED"],u=["FULFILLED"],p=["PENDING"];r.exports=h;function h(M){if(typeof M!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,M!==a&&c(this,M)}h.prototype.catch=function(M){return this.then(null,M)},h.prototype.then=function(M,R){if(typeof M!="function"&&this.state===u||typeof R!="function"&&this.state===s)return this;var I=new this.constructor(a);if(this.state!==p){var L=this.state===u?M:R;k(I,L,this.outcome)}else this.queue.push(new y(I,M,R));return I};function y(M,R,I){this.promise=M,typeof R=="function"&&(this.onFulfilled=R,this.callFulfilled=this.otherCallFulfilled),typeof I=="function"&&(this.onRejected=I,this.callRejected=this.otherCallRejected)}y.prototype.callFulfilled=function(M){l.resolve(this.promise,M)},y.prototype.otherCallFulfilled=function(M){k(this.promise,this.onFulfilled,M)},y.prototype.callRejected=function(M){l.reject(this.promise,M)},y.prototype.otherCallRejected=function(M){k(this.promise,this.onRejected,M)};function k(M,R,I){o(function(){var L;try{L=R(I)}catch(J){return l.reject(M,J)}L===M?l.reject(M,new TypeError("Cannot resolve promise with itself")):l.resolve(M,L)})}l.resolve=function(M,R){var I=C(v,R);if(I.status==="error")return l.reject(M,I.value);var L=I.value;if(L)c(M,L);else{M.state=u,M.outcome=R;for(var J=-1,W=M.queue.length;++J<W;)M.queue[J].callFulfilled(R)}return M},l.reject=function(M,R){M.state=s,M.outcome=R;for(var I=-1,L=M.queue.length;++I<L;)M.queue[I].callRejected(R);return M};function v(M){var R=M&&M.then;if(M&&(typeof M=="object"||typeof M=="function")&&typeof R=="function")return function(){R.apply(M,arguments)}}function c(M,R){var I=!1;function L(he){I||(I=!0,l.reject(M,he))}function J(he){I||(I=!0,l.resolve(M,he))}function W(){R(J,L)}var ae=C(W);ae.status==="error"&&L(ae.value)}function C(M,R){var I={};try{I.value=M(R),I.status="success"}catch(L){I.status="error",I.value=L}return I}h.resolve=m;function m(M){return M instanceof this?M:l.resolve(new this(a),M)}h.reject=d;function d(M){var R=new this(a);return l.reject(R,M)}h.all=b;function b(M){var R=this;if(Object.prototype.toString.call(M)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=M.length,L=!1;if(!I)return this.resolve([]);for(var J=new Array(I),W=0,ae=-1,he=new this(a);++ae<I;)ge(M[ae],ae);return he;function ge(Pe,We){R.resolve(Pe).then(yn,function(Ge){L||(L=!0,l.reject(he,Ge))});function yn(Ge){J[We]=Ge,++W===I&&!L&&(L=!0,l.resolve(he,J))}}}h.race=P;function P(M){var R=this;if(Object.prototype.toString.call(M)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=M.length,L=!1;if(!I)return this.resolve([]);for(var J=-1,W=new this(a);++J<I;)ae(M[J]);return W;function ae(he){R.resolve(he).then(function(ge){L||(L=!0,l.resolve(W,ge))},function(ge){L||(L=!0,l.reject(W,ge))})}}},{1:1}],3:[function(t,r,i){(function(o){typeof o.Promise!="function"&&(o.Promise=t(2))}).call(this,typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,r,i){var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f};function a(f,S){if(!(f instanceof S))throw new TypeError("Cannot call a class as a function")}function l(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var s=l();function u(){try{if(!s||!s.open)return!1;var f=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),S=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!f||S)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function p(f,S){f=f||[],S=S||{};try{return new Blob(f,S)}catch(E){if(E.name!=="TypeError")throw E;for(var g=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,T=new g,A=0;A<f.length;A+=1)T.append(f[A]);return T.getBlob(S.type)}}typeof Promise>"u"&&t(3);var h=Promise;function y(f,S){S&&f.then(function(g){S(null,g)},function(g){S(g)})}function k(f,S,g){typeof S=="function"&&f.then(S),typeof g=="function"&&f.catch(g)}function v(f){return typeof f!="string"&&(console.warn(f+" used as a key, but it is not a string."),f=String(f)),f}function c(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var C="local-forage-detect-blob-support",m=void 0,d={},b=Object.prototype.toString,P="readonly",M="readwrite";function R(f){for(var S=f.length,g=new ArrayBuffer(S),T=new Uint8Array(g),A=0;A<S;A++)T[A]=f.charCodeAt(A);return g}function I(f){return new h(function(S){var g=f.transaction(C,M),T=p([""]);g.objectStore(C).put(T,"key"),g.onabort=function(A){A.preventDefault(),A.stopPropagation(),S(!1)},g.oncomplete=function(){var A=navigator.userAgent.match(/Chrome\/(\d+)/),E=navigator.userAgent.match(/Edge\//);S(E||!A||parseInt(A[1],10)>=43)}}).catch(function(){return!1})}function L(f){return typeof m=="boolean"?h.resolve(m):I(f).then(function(S){return m=S,m})}function J(f){var S=d[f.name],g={};g.promise=new h(function(T,A){g.resolve=T,g.reject=A}),S.deferredOperations.push(g),S.dbReady?S.dbReady=S.dbReady.then(function(){return g.promise}):S.dbReady=g.promise}function W(f){var S=d[f.name],g=S.deferredOperations.pop();if(g)return g.resolve(),g.promise}function ae(f,S){var g=d[f.name],T=g.deferredOperations.pop();if(T)return T.reject(S),T.promise}function he(f,S){return new h(function(g,T){if(d[f.name]=d[f.name]||be(),f.db)if(S)J(f),f.db.close();else return g(f.db);var A=[f.name];S&&A.push(f.version);var E=s.open.apply(s,A);S&&(E.onupgradeneeded=function(_){var F=E.result;try{F.createObjectStore(f.storeName),_.oldVersion<=1&&F.createObjectStore(C)}catch(U){if(U.name==="ConstraintError")console.warn('The database "'+f.name+'" has been upgraded from version '+_.oldVersion+" to version "+_.newVersion+', but the storage "'+f.storeName+'" already exists.');else throw U}}),E.onerror=function(_){_.preventDefault(),T(E.error)},E.onsuccess=function(){var _=E.result;_.onversionchange=function(F){F.target.close()},g(_),W(f)}})}function ge(f){return he(f,!1)}function Pe(f){return he(f,!0)}function We(f,S){if(!f.db)return!0;var g=!f.db.objectStoreNames.contains(f.storeName),T=f.version<f.db.version,A=f.version>f.db.version;if(T&&(f.version!==S&&console.warn('The database "'+f.name+`" can't be downgraded from version `+f.db.version+" to version "+f.version+"."),f.version=f.db.version),A||g){if(g){var E=f.db.version+1;E>f.version&&(f.version=E)}return!0}return!1}function yn(f){return new h(function(S,g){var T=new FileReader;T.onerror=g,T.onloadend=function(A){var E=btoa(A.target.result||"");S({__local_forage_encoded_blob:!0,data:E,type:f.type})},T.readAsBinaryString(f)})}function Ge(f){var S=R(atob(f.data));return p([S],{type:f.type})}function z(f){return f&&f.__local_forage_encoded_blob}function j(f){var S=this,g=S._initReady().then(function(){var T=d[S._dbInfo.name];if(T&&T.dbReady)return T.dbReady});return k(g,f,f),g}function ee(f){J(f);for(var S=d[f.name],g=S.forages,T=0;T<g.length;T++){var A=g[T];A._dbInfo.db&&(A._dbInfo.db.close(),A._dbInfo.db=null)}return f.db=null,ge(f).then(function(E){return f.db=E,We(f)?Pe(f):E}).then(function(E){f.db=S.db=E;for(var _=0;_<g.length;_++)g[_]._dbInfo.db=E}).catch(function(E){throw ae(f,E),E})}function ne(f,S,g,T){T===void 0&&(T=1);try{var A=f.db.transaction(f.storeName,S);g(null,A)}catch(E){if(T>0&&(!f.db||E.name==="InvalidStateError"||E.name==="NotFoundError"))return h.resolve().then(function(){if(!f.db||E.name==="NotFoundError"&&!f.db.objectStoreNames.contains(f.storeName)&&f.version<=f.db.version)return f.db&&(f.version=f.db.version+1),Pe(f)}).then(function(){return ee(f).then(function(){ne(f,S,g,T-1)})}).catch(g);g(E)}}function be(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Je(f){var S=this,g={db:null};if(f)for(var T in f)g[T]=f[T];var A=d[g.name];A||(A=be(),d[g.name]=A),A.forages.push(S),S._initReady||(S._initReady=S.ready,S.ready=j);var E=[];function _(){return h.resolve()}for(var F=0;F<A.forages.length;F++){var U=A.forages[F];U!==S&&E.push(U._initReady().catch(_))}var B=A.forages.slice(0);return h.all(E).then(function(){return g.db=A.db,ge(g)}).then(function($){return g.db=$,We(g,S._defaultConfig.version)?Pe(g):$}).then(function($){g.db=A.db=$,S._dbInfo=g;for(var K=0;K<B.length;K++){var oe=B[K];oe!==S&&(oe._dbInfo.db=g.db,oe._dbInfo.version=g.version)}})}function fn(f,S){var g=this;f=v(f);var T=new h(function(A,E){g.ready().then(function(){ne(g._dbInfo,P,function(_,F){if(_)return E(_);try{var U=F.objectStore(g._dbInfo.storeName),B=U.get(f);B.onsuccess=function(){var $=B.result;$===void 0&&($=null),z($)&&($=Ge($)),A($)},B.onerror=function(){E(B.error)}}catch($){E($)}})}).catch(E)});return y(T,S),T}function it(f,S){var g=this,T=new h(function(A,E){g.ready().then(function(){ne(g._dbInfo,P,function(_,F){if(_)return E(_);try{var U=F.objectStore(g._dbInfo.storeName),B=U.openCursor(),$=1;B.onsuccess=function(){var K=B.result;if(K){var oe=K.value;z(oe)&&(oe=Ge(oe));var me=f(oe,K.key,$++);me!==void 0?A(me):K.continue()}else A()},B.onerror=function(){E(B.error)}}catch(K){E(K)}})}).catch(E)});return y(T,S),T}function ue(f,S,g){var T=this;f=v(f);var A=new h(function(E,_){var F;T.ready().then(function(){return F=T._dbInfo,b.call(S)==="[object Blob]"?L(F.db).then(function(U){return U?S:yn(S)}):S}).then(function(U){ne(T._dbInfo,M,function(B,$){if(B)return _(B);try{var K=$.objectStore(T._dbInfo.storeName);U===null&&(U=void 0);var oe=K.put(U,f);$.oncomplete=function(){U===void 0&&(U=null),E(U)},$.onabort=$.onerror=function(){var me=oe.error?oe.error:oe.transaction.error;_(me)}}catch(me){_(me)}})}).catch(_)});return y(A,g),A}function Ie(f,S){var g=this;f=v(f);var T=new h(function(A,E){g.ready().then(function(){ne(g._dbInfo,M,function(_,F){if(_)return E(_);try{var U=F.objectStore(g._dbInfo.storeName),B=U.delete(f);F.oncomplete=function(){A()},F.onerror=function(){E(B.error)},F.onabort=function(){var $=B.error?B.error:B.transaction.error;E($)}}catch($){E($)}})}).catch(E)});return y(T,S),T}function De(f){var S=this,g=new h(function(T,A){S.ready().then(function(){ne(S._dbInfo,M,function(E,_){if(E)return A(E);try{var F=_.objectStore(S._dbInfo.storeName),U=F.clear();_.oncomplete=function(){T()},_.onabort=_.onerror=function(){var B=U.error?U.error:U.transaction.error;A(B)}}catch(B){A(B)}})}).catch(A)});return y(g,f),g}function Mn(f){var S=this,g=new h(function(T,A){S.ready().then(function(){ne(S._dbInfo,P,function(E,_){if(E)return A(E);try{var F=_.objectStore(S._dbInfo.storeName),U=F.count();U.onsuccess=function(){T(U.result)},U.onerror=function(){A(U.error)}}catch(B){A(B)}})}).catch(A)});return y(g,f),g}function Gt(f,S){var g=this,T=new h(function(A,E){if(f<0){A(null);return}g.ready().then(function(){ne(g._dbInfo,P,function(_,F){if(_)return E(_);try{var U=F.objectStore(g._dbInfo.storeName),B=!1,$=U.openKeyCursor();$.onsuccess=function(){var K=$.result;if(!K){A(null);return}f===0||B?A(K.key):(B=!0,K.advance(f))},$.onerror=function(){E($.error)}}catch(K){E(K)}})}).catch(E)});return y(T,S),T}function Eo(f){var S=this,g=new h(function(T,A){S.ready().then(function(){ne(S._dbInfo,P,function(E,_){if(E)return A(E);try{var F=_.objectStore(S._dbInfo.storeName),U=F.openKeyCursor(),B=[];U.onsuccess=function(){var $=U.result;if(!$){T(B);return}B.push($.key),$.continue()},U.onerror=function(){A(U.error)}}catch($){A($)}})}).catch(A)});return y(g,f),g}function ii(f,S){S=c.apply(this,arguments);var g=this.config();f=typeof f!="function"&&f||{},f.name||(f.name=f.name||g.name,f.storeName=f.storeName||g.storeName);var T=this,A;if(!f.name)A=h.reject("Invalid arguments");else{var E=f.name===g.name&&T._dbInfo.db,_=E?h.resolve(T._dbInfo.db):ge(f).then(function(F){var U=d[f.name],B=U.forages;U.db=F;for(var $=0;$<B.length;$++)B[$]._dbInfo.db=F;return F});f.storeName?A=_.then(function(F){if(F.objectStoreNames.contains(f.storeName)){var U=F.version+1;J(f);var B=d[f.name],$=B.forages;F.close();for(var K=0;K<$.length;K++){var oe=$[K];oe._dbInfo.db=null,oe._dbInfo.version=U}var me=new h(function(ve,Ve){var Re=s.open(f.name,U);Re.onerror=function(In){var pi=Re.result;pi.close(),Ve(In)},Re.onupgradeneeded=function(){var In=Re.result;In.deleteObjectStore(f.storeName)},Re.onsuccess=function(){var In=Re.result;In.close(),ve(In)}});return me.then(function(ve){B.db=ve;for(var Ve=0;Ve<$.length;Ve++){var Re=$[Ve];Re._dbInfo.db=ve,W(Re._dbInfo)}}).catch(function(ve){throw(ae(f,ve)||h.resolve()).catch(function(){}),ve})}}):A=_.then(function(F){J(f);var U=d[f.name],B=U.forages;F.close();for(var $=0;$<B.length;$++){var K=B[$];K._dbInfo.db=null}var oe=new h(function(me,ve){var Ve=s.deleteDatabase(f.name);Ve.onerror=function(){var Re=Ve.result;Re&&Re.close(),ve(Ve.error)},Ve.onblocked=function(){console.warn('dropInstance blocked for database "'+f.name+'" until all open connections are closed')},Ve.onsuccess=function(){var Re=Ve.result;Re&&Re.close(),me(Re)}});return oe.then(function(me){U.db=me;for(var ve=0;ve<B.length;ve++){var Ve=B[ve];W(Ve._dbInfo)}}).catch(function(me){throw(ae(f,me)||h.resolve()).catch(function(){}),me})})}return y(A,S),A}var oi={_driver:"asyncStorage",_initStorage:Je,_support:u(),iterate:it,getItem:fn,setItem:ue,removeItem:Ie,clear:De,length:Mn,key:Gt,keys:Eo,dropInstance:ii};function ai(){return typeof openDatabase=="function"}var wn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",To="~~local_forage_type~",Mo=/^~~local_forage_type~([^~]+)~/,Jt="__lfsc__:",li=Jt.length,ot="arbf",Ct="blob",si="si08",vr="ui08",Ao="uic8",Po="si16",ui="si32",Io="ur16",D="ui32",N="fl32",O="fl64",q=li+ot.length,Y=Object.prototype.toString;function Z(f){var S=f.length*.75,g=f.length,T,A=0,E,_,F,U;f[f.length-1]==="="&&(S--,f[f.length-2]==="="&&S--);var B=new ArrayBuffer(S),$=new Uint8Array(B);for(T=0;T<g;T+=4)E=wn.indexOf(f[T]),_=wn.indexOf(f[T+1]),F=wn.indexOf(f[T+2]),U=wn.indexOf(f[T+3]),$[A++]=E<<2|_>>4,$[A++]=(_&15)<<4|F>>2,$[A++]=(F&3)<<6|U&63;return B}function G(f){var S=new Uint8Array(f),g="",T;for(T=0;T<S.length;T+=3)g+=wn[S[T]>>2],g+=wn[(S[T]&3)<<4|S[T+1]>>4],g+=wn[(S[T+1]&15)<<2|S[T+2]>>6],g+=wn[S[T+2]&63];return S.length%3===2?g=g.substring(0,g.length-1)+"=":S.length%3===1&&(g=g.substring(0,g.length-2)+"=="),g}function re(f,S){var g="";if(f&&(g=Y.call(f)),f&&(g==="[object ArrayBuffer]"||f.buffer&&Y.call(f.buffer)==="[object ArrayBuffer]")){var T,A=Jt;f instanceof ArrayBuffer?(T=f,A+=ot):(T=f.buffer,g==="[object Int8Array]"?A+=si:g==="[object Uint8Array]"?A+=vr:g==="[object Uint8ClampedArray]"?A+=Ao:g==="[object Int16Array]"?A+=Po:g==="[object Uint16Array]"?A+=Io:g==="[object Int32Array]"?A+=ui:g==="[object Uint32Array]"?A+=D:g==="[object Float32Array]"?A+=N:g==="[object Float64Array]"?A+=O:S(new Error("Failed to get type for BinaryArray"))),S(A+G(T))}else if(g==="[object Blob]"){var E=new FileReader;E.onload=function(){var _=To+f.type+"~"+G(this.result);S(Jt+Ct+_)},E.readAsArrayBuffer(f)}else try{S(JSON.stringify(f))}catch(_){console.error("Couldn't convert value into a JSON string: ",f),S(null,_)}}function Q(f){if(f.substring(0,li)!==Jt)return JSON.parse(f);var S=f.substring(q),g=f.substring(li,q),T;if(g===Ct&&Mo.test(S)){var A=S.match(Mo);T=A[1],S=S.substring(A[0].length)}var E=Z(S);switch(g){case ot:return E;case Ct:return p([E],{type:T});case si:return new Int8Array(E);case vr:return new Uint8Array(E);case Ao:return new Uint8ClampedArray(E);case Po:return new Int16Array(E);case Io:return new Uint16Array(E);case ui:return new Int32Array(E);case D:return new Uint32Array(E);case N:return new Float32Array(E);case O:return new Float64Array(E);default:throw new Error("Unkown type: "+g)}}var Fe={serialize:re,deserialize:Q,stringToBuffer:Z,bufferToString:G};function se(f,S,g,T){f.executeSql("CREATE TABLE IF NOT EXISTS "+S.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],g,T)}function Xe(f){var S=this,g={db:null};if(f)for(var T in f)g[T]=typeof f[T]!="string"?f[T].toString():f[T];var A=new h(function(E,_){try{g.db=openDatabase(g.name,String(g.version),g.description,g.size)}catch(F){return _(F)}g.db.transaction(function(F){se(F,g,function(){S._dbInfo=g,E()},function(U,B){_(B)})},_)});return g.serializer=Fe,A}function pe(f,S,g,T,A,E){f.executeSql(g,T,A,function(_,F){F.code===F.SYNTAX_ERR?_.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[S.storeName],function(U,B){B.rows.length?E(U,F):se(U,S,function(){U.executeSql(g,T,A,E)},E)},E):E(_,F)},E)}function An(f,S){var g=this;f=v(f);var T=new h(function(A,E){g.ready().then(function(){var _=g._dbInfo;_.db.transaction(function(F){pe(F,_,"SELECT * FROM "+_.storeName+" WHERE key = ? LIMIT 1",[f],function(U,B){var $=B.rows.length?B.rows.item(0).value:null;$&&($=_.serializer.deserialize($)),A($)},function(U,B){E(B)})})}).catch(E)});return y(T,S),T}function bn(f,S){var g=this,T=new h(function(A,E){g.ready().then(function(){var _=g._dbInfo;_.db.transaction(function(F){pe(F,_,"SELECT * FROM "+_.storeName,[],function(U,B){for(var $=B.rows,K=$.length,oe=0;oe<K;oe++){var me=$.item(oe),ve=me.value;if(ve&&(ve=_.serializer.deserialize(ve)),ve=f(ve,me.key,oe+1),ve!==void 0){A(ve);return}}A()},function(U,B){E(B)})})}).catch(E)});return y(T,S),T}function Et(f,S,g,T){var A=this;f=v(f);var E=new h(function(_,F){A.ready().then(function(){S===void 0&&(S=null);var U=S,B=A._dbInfo;B.serializer.serialize(S,function($,K){K?F(K):B.db.transaction(function(oe){pe(oe,B,"INSERT OR REPLACE INTO "+B.storeName+" (key, value) VALUES (?, ?)",[f,$],function(){_(U)},function(me,ve){F(ve)})},function(oe){if(oe.code===oe.QUOTA_ERR){if(T>0){_(Et.apply(A,[f,U,g,T-1]));return}F(oe)}})})}).catch(F)});return y(E,g),E}function yr(f,S,g){return Et.apply(this,[f,S,g,1])}function wr(f,S){var g=this;f=v(f);var T=new h(function(A,E){g.ready().then(function(){var _=g._dbInfo;_.db.transaction(function(F){pe(F,_,"DELETE FROM "+_.storeName+" WHERE key = ?",[f],function(){A()},function(U,B){E(B)})})}).catch(E)});return y(T,S),T}function Tt(f){var S=this,g=new h(function(T,A){S.ready().then(function(){var E=S._dbInfo;E.db.transaction(function(_){pe(_,E,"DELETE FROM "+E.storeName,[],function(){T()},function(F,U){A(U)})})}).catch(A)});return y(g,f),g}function ci(f){var S=this,g=new h(function(T,A){S.ready().then(function(){var E=S._dbInfo;E.db.transaction(function(_){pe(_,E,"SELECT COUNT(key) as c FROM "+E.storeName,[],function(F,U){var B=U.rows.item(0).c;T(B)},function(F,U){A(U)})})}).catch(A)});return y(g,f),g}function qe(f,S){var g=this,T=new h(function(A,E){g.ready().then(function(){var _=g._dbInfo;_.db.transaction(function(F){pe(F,_,"SELECT key FROM "+_.storeName+" WHERE id = ? LIMIT 1",[f+1],function(U,B){var $=B.rows.length?B.rows.item(0).key:null;A($)},function(U,B){E(B)})})}).catch(E)});return y(T,S),T}function Pn(f){var S=this,g=new h(function(T,A){S.ready().then(function(){var E=S._dbInfo;E.db.transaction(function(_){pe(_,E,"SELECT key FROM "+E.storeName,[],function(F,U){for(var B=[],$=0;$<U.rows.length;$++)B.push(U.rows.item($).key);T(B)},function(F,U){A(U)})})}).catch(A)});return y(g,f),g}function at(f){return new h(function(S,g){f.transaction(function(T){T.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(A,E){for(var _=[],F=0;F<E.rows.length;F++)_.push(E.rows.item(F).name);S({db:f,storeNames:_})},function(A,E){g(E)})},function(T){g(T)})})}function br(f,S){S=c.apply(this,arguments);var g=this.config();f=typeof f!="function"&&f||{},f.name||(f.name=f.name||g.name,f.storeName=f.storeName||g.storeName);var T=this,A;return f.name?A=new h(function(E){var _;f.name===g.name?_=T._dbInfo.db:_=openDatabase(f.name,"","",0),f.storeName?E({db:_,storeNames:[f.storeName]}):E(at(_))}).then(function(E){return new h(function(_,F){E.db.transaction(function(U){function B(me){return new h(function(ve,Ve){U.executeSql("DROP TABLE IF EXISTS "+me,[],function(){ve()},function(Re,In){Ve(In)})})}for(var $=[],K=0,oe=E.storeNames.length;K<oe;K++)$.push(B(E.storeNames[K]));h.all($).then(function(){_()}).catch(function(me){F(me)})},function(U){F(U)})})}):A=h.reject("Invalid arguments"),y(A,S),A}var di={_driver:"webSQLStorage",_initStorage:Xe,_support:ai(),iterate:bn,getItem:An,setItem:yr,removeItem:wr,clear:Tt,length:ci,key:qe,keys:Pn,dropInstance:br};function pl(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Do(f,S){var g=f.name+"/";return f.storeName!==S.storeName&&(g+=f.storeName+"/"),g}function Fn(){var f="_localforage_support_test";try{return localStorage.setItem(f,!0),localStorage.removeItem(f),!1}catch{return!0}}function fi(){return!Fn()||localStorage.length>0}function Ro(f){var S=this,g={};if(f)for(var T in f)g[T]=f[T];return g.keyPrefix=Do(f,S._defaultConfig),fi()?(S._dbInfo=g,g.serializer=Fe,h.resolve()):h.reject()}function ml(f){var S=this,g=S.ready().then(function(){for(var T=S._dbInfo.keyPrefix,A=localStorage.length-1;A>=0;A--){var E=localStorage.key(A);E.indexOf(T)===0&&localStorage.removeItem(E)}});return y(g,f),g}function dm(f,S){var g=this;f=v(f);var T=g.ready().then(function(){var A=g._dbInfo,E=localStorage.getItem(A.keyPrefix+f);return E&&(E=A.serializer.deserialize(E)),E});return y(T,S),T}function fm(f,S){var g=this,T=g.ready().then(function(){for(var A=g._dbInfo,E=A.keyPrefix,_=E.length,F=localStorage.length,U=1,B=0;B<F;B++){var $=localStorage.key(B);if($.indexOf(E)===0){var K=localStorage.getItem($);if(K&&(K=A.serializer.deserialize(K)),K=f(K,$.substring(_),U++),K!==void 0)return K}}});return y(T,S),T}function hm(f,S){var g=this,T=g.ready().then(function(){var A=g._dbInfo,E;try{E=localStorage.key(f)}catch{E=null}return E&&(E=E.substring(A.keyPrefix.length)),E});return y(T,S),T}function pm(f){var S=this,g=S.ready().then(function(){for(var T=S._dbInfo,A=localStorage.length,E=[],_=0;_<A;_++){var F=localStorage.key(_);F.indexOf(T.keyPrefix)===0&&E.push(F.substring(T.keyPrefix.length))}return E});return y(g,f),g}function mm(f){var S=this,g=S.keys().then(function(T){return T.length});return y(g,f),g}function gm(f,S){var g=this;f=v(f);var T=g.ready().then(function(){var A=g._dbInfo;localStorage.removeItem(A.keyPrefix+f)});return y(T,S),T}function vm(f,S,g){var T=this;f=v(f);var A=T.ready().then(function(){S===void 0&&(S=null);var E=S;return new h(function(_,F){var U=T._dbInfo;U.serializer.serialize(S,function(B,$){if($)F($);else try{localStorage.setItem(U.keyPrefix+f,B),_(E)}catch(K){(K.name==="QuotaExceededError"||K.name==="NS_ERROR_DOM_QUOTA_REACHED")&&F(K),F(K)}})})});return y(A,g),A}function ym(f,S){if(S=c.apply(this,arguments),f=typeof f!="function"&&f||{},!f.name){var g=this.config();f.name=f.name||g.name,f.storeName=f.storeName||g.storeName}var T=this,A;return f.name?A=new h(function(E){f.storeName?E(Do(f,T._defaultConfig)):E(f.name+"/")}).then(function(E){for(var _=localStorage.length-1;_>=0;_--){var F=localStorage.key(_);F.indexOf(E)===0&&localStorage.removeItem(F)}}):A=h.reject("Invalid arguments"),y(A,S),A}var wm={_driver:"localStorageWrapper",_initStorage:Ro,_support:pl(),iterate:fm,getItem:dm,setItem:vm,removeItem:gm,clear:ml,length:mm,key:hm,keys:pm,dropInstance:ym},bm=function(S,g){return S===g||typeof S=="number"&&typeof g=="number"&&isNaN(S)&&isNaN(g)},Sm=function(S,g){for(var T=S.length,A=0;A<T;){if(bm(S[A],g))return!0;A++}return!1},Ec=Array.isArray||function(f){return Object.prototype.toString.call(f)==="[object Array]"},hi={},Tc={},Sr={INDEXEDDB:oi,WEBSQL:di,LOCALSTORAGE:wm},km=[Sr.INDEXEDDB._driver,Sr.WEBSQL._driver,Sr.LOCALSTORAGE._driver],No=["dropInstance"],gl=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(No),xm={description:"",driver:km.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Cm(f,S){f[S]=function(){var g=arguments;return f.ready().then(function(){return f[S].apply(f,g)})}}function vl(){for(var f=1;f<arguments.length;f++){var S=arguments[f];if(S)for(var g in S)S.hasOwnProperty(g)&&(Ec(S[g])?arguments[0][g]=S[g].slice():arguments[0][g]=S[g])}return arguments[0]}var Em=function(){function f(S){a(this,f);for(var g in Sr)if(Sr.hasOwnProperty(g)){var T=Sr[g],A=T._driver;this[g]=A,hi[A]||this.defineDriver(T)}this._defaultConfig=vl({},xm),this._config=vl({},this._defaultConfig,S),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return f.prototype.config=function(g){if((typeof g>"u"?"undefined":o(g))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var T in g){if(T==="storeName"&&(g[T]=g[T].replace(/\W/g,"_")),T==="version"&&typeof g[T]!="number")return new Error("Database version must be a number.");this._config[T]=g[T]}return"driver"in g&&g.driver?this.setDriver(this._config.driver):!0}else return typeof g=="string"?this._config[g]:this._config},f.prototype.defineDriver=function(g,T,A){var E=new h(function(_,F){try{var U=g._driver,B=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!g._driver){F(B);return}for(var $=gl.concat("_initStorage"),K=0,oe=$.length;K<oe;K++){var me=$[K],ve=!Sm(No,me);if((ve||g[me])&&typeof g[me]!="function"){F(B);return}}var Ve=function(){for(var pi=function(Am){return function(){var Pm=new Error("Method "+Am+" is not implemented by the current driver"),Mc=h.reject(Pm);return y(Mc,arguments[arguments.length-1]),Mc}},yl=0,Mm=No.length;yl<Mm;yl++){var wl=No[yl];g[wl]||(g[wl]=pi(wl))}};Ve();var Re=function(pi){hi[U]&&console.info("Redefining LocalForage driver: "+U),hi[U]=g,Tc[U]=pi,_()};"_support"in g?g._support&&typeof g._support=="function"?g._support().then(Re,F):Re(!!g._support):Re(!0)}catch(In){F(In)}});return k(E,T,A),E},f.prototype.driver=function(){return this._driver||null},f.prototype.getDriver=function(g,T,A){var E=hi[g]?h.resolve(hi[g]):h.reject(new Error("Driver not found."));return k(E,T,A),E},f.prototype.getSerializer=function(g){var T=h.resolve(Fe);return k(T,g),T},f.prototype.ready=function(g){var T=this,A=T._driverSet.then(function(){return T._ready===null&&(T._ready=T._initDriver()),T._ready});return k(A,g,g),A},f.prototype.setDriver=function(g,T,A){var E=this;Ec(g)||(g=[g]);var _=this._getSupportedDrivers(g);function F(){E._config.driver=E.driver()}function U(K){return E._extend(K),F(),E._ready=E._initStorage(E._config),E._ready}function B(K){return function(){var oe=0;function me(){for(;oe<K.length;){var ve=K[oe];return oe++,E._dbInfo=null,E._ready=null,E.getDriver(ve).then(U).catch(me)}F();var Ve=new Error("No available storage method found.");return E._driverSet=h.reject(Ve),E._driverSet}return me()}}var $=this._driverSet!==null?this._driverSet.catch(function(){return h.resolve()}):h.resolve();return this._driverSet=$.then(function(){var K=_[0];return E._dbInfo=null,E._ready=null,E.getDriver(K).then(function(oe){E._driver=oe._driver,F(),E._wrapLibraryMethodsWithReady(),E._initDriver=B(_)})}).catch(function(){F();var K=new Error("No available storage method found.");return E._driverSet=h.reject(K),E._driverSet}),k(this._driverSet,T,A),this._driverSet},f.prototype.supports=function(g){return!!Tc[g]},f.prototype._extend=function(g){vl(this,g)},f.prototype._getSupportedDrivers=function(g){for(var T=[],A=0,E=g.length;A<E;A++){var _=g[A];this.supports(_)&&T.push(_)}return T},f.prototype._wrapLibraryMethodsWithReady=function(){for(var g=0,T=gl.length;g<T;g++)Cm(this,gl[g])},f.prototype.createInstance=function(g){return new f(g)},f}(),Tm=new Em;r.exports=Tm},{3:3}]},{},[4])(4)})})(R2);async function N2(e,n={importsUs:fu}){const t=fu;return console.log(t),t}function hu(){const{contact:e}=_p();return x("div",{id:"contact",className:"flex",children:X("div",{children:[x("div",{children:x("img",{src:e.avatar||null},e.avatar)}),X("div",{className:"flex-1",children:[X("h1",{className:"flex",children:[e.first||e.last?X(tt,{children:[e.first," ",e.last]}):x("i",{children:"No Name"})," "]}),e.twitter&&x("p",{children:x("a",{target:"_blank",href:`https://twitter.com/${e.twitter}`,children:e.twitter})}),e.notes&&x("p",{className:" p-2 m-3",children:e.notes})]}),x("div",{children:X("div",{className:"flex mt-3",children:[x(iu,{action:"edit",className:"mx-2",children:x("button",{type:"submit",children:"Edit"})}),x(iu,{method:"post",action:"destroy",onSubmit:n=>{confirm("Please confirm you want to delete this record.")||n.preventDefault()},children:x("button",{type:"submit",children:"Delete"})})]})})]})})}const _2=fu;function L2(){const e=_2;return X(tt,{children:[X("div",{id:"sidebar",className:"flex flex-col md:flex-row justify-center my-10",children:[x("h1",{children:"Importing Vehicles - US State"}),x("div",{className:"flex flex-col md:flex-row justify-center my-10",children:X(iu,{id:"search-form",role:"search",children:[x("input",{id:"q","aria-label":"Search states",placeholder:"Search",type:"search",name:"q",className:"p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),x("div",{id:"search-spinner","aria-hidden":!0,hidden:!0}),x("div",{className:"sr-only","aria-live":"polite"})]})}),x("nav",{children:e.length?x("ul",{children:e.map(n=>x("li",{children:x(Vp,{to:`/US-Gray-Market-Laws/${n.slug}`,className:classNames(item.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),children:n.title.rendered})},n.slug))}):x("p",{children:x("i",{children:"Error loading data"})})})]}),x("div",{id:"detail",className:"flex column",children:x("div",{className:"flex flex-col md:flex-row justify-center my-10 ",children:x("div",{className:"w-full md:w-7/12",children:x(hu,{})})})})]})}async function O2(){return{contacts:await N2()}}function F2(){const{contacts:e}=_p();return x(tt,{children:X("div",{className:"flex bg-gray-100 fixed z-40 h-screen w-screen",children:[X("div",{id:"sidebar",className:`bg-red-100 w-1/3 items-center p-2 text-sm 
            text-gray-500 hover:bg-gray-100 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:focus:ring-gray-600 
            border-r-2 border-black`,children:[x("h1",{className:"mb-3 text-lg border-b-2 border-purple-500 dark:border-orange-500 ",children:"React Router Contacts"}),x("div",{children:X("form",{id:"search-form",role:"search",className:"flex flex-col w-full ",children:[x("input",{id:"q","aria-label":"Search contacts",placeholder:"Search",type:"search",name:"q",className:"p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),x("div",{id:"search-spinner","aria-hidden":!0,hidden:!0}),x("div",{className:"sr-only","aria-live":"polite"})]})}),x("div",{className:`px-3 py-4 my-5 rounded-md overflow-y-auto
           bg-gray-50 dark:bg-gray-800`,children:x("nav",{children:e.length?x("ul",{children:e.map(n=>x("li",{children:x(Vp,{to:`${n.slug}`,children:n.slug?x(tt,{children:n.slug}):x("i",{children:"No Name"})})},n.id))}):x("p",{children:x("i",{children:"Error Fetching Data"})})})})]}),x("div",{id:"detail",className:"flex p-5 w-full bg-gray-200",children:x("div",{className:`flex p-5 scroll-p-8 bg-gray-50 w-full
             rounded-lg `,children:x(Op,{})})})]})})}function V2(){return X("div",{id:"zero-state",children:[x("div",{className:"mx-auto mb-5",children:x("img",{src:"https://placekitten.com/g/200/200",className:"mx-auto"})}),x("div",{children:x("p",{children:"This document does not constitute legal advice. It is an aggregation of resources found on the internet and should be used as a starting point for you, the reader’s personal research. When researching, be sure to cycle terms like “import”, “foreign vehicle”, “out of country”, “mini-truck”, “mini truck” and “keijidōsha” “kei” as each state uses different wording in their documents."})})]})}const U2=Iy([{path:"/",element:x(T2,{}),errorElement:x(Gl,{}),children:[{errorElement:x(Gl,{}),children:[{index:!0,element:x(m2,{})},{path:"/US-Gray-Market-Laws/",element:x(L2,{}),children:[{path:"/US-Gray-Market-Laws/:slug",element:x(hu,{})}]}]},{path:"/contacts/",element:x(F2,{}),errorElement:x(Gl,{}),loader:O2,children:[{errorElement:x("p",{children:"Opps, this content is not available yet. Check back soon!"}),children:[{index:!0,element:x(V2,{})},{path:"/contacts/:contactsID",element:x(hu,{})}]}]}]}]);as.createRoot(document.getElementById("root")).render(x(ie.StrictMode,{children:x(vy,{router:U2})}));
