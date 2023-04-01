function Rm(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ki={},Lm={get exports(){return Ki},set exports(e){Ki=e}},Wa={},y={},_m={get exports(){return y},set exports(e){y=e}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Om=Symbol.for("react.portal"),Fm=Symbol.for("react.fragment"),Vm=Symbol.for("react.strict_mode"),Um=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),$m=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),jm=Symbol.for("react.suspense"),Hm=Symbol.for("react.memo"),Wm=Symbol.for("react.lazy"),Pc=Symbol.iterator;function qm(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pf=Object.assign,mf={};function ei(e,n,t){this.props=e,this.context=n,this.refs=mf,this.updater=t||hf}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gf(){}gf.prototype=ei.prototype;function mu(e,n,t){this.props=e,this.context=n,this.refs=mf,this.updater=t||hf}var gu=mu.prototype=new gf;gu.constructor=mu;pf(gu,ei.prototype);gu.isPureReactComponent=!0;var Dc=Array.isArray,vf=Object.prototype.hasOwnProperty,vu={current:null},yf={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)vf.call(n,r)&&!yf.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ho,type:e,key:o,ref:a,props:i,_owner:vu.current}}function Km(e,n){return{$$typeof:ho,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ho}function Ym(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Rc=/\/+/g;function Cl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ym(""+e.key):n.toString(36)}function ea(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ho:case Om:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Cl(a,0):r,Dc(i)?(t="",e!=null&&(t=e.replace(Rc,"$&/")+"/"),ea(i,n,t,"",function(u){return u})):i!=null&&(yu(i)&&(i=Km(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Rc,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Dc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Cl(o,l);a+=ea(o,n,t,s,i)}else if(s=qm(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Cl(o,l++),a+=ea(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function _o(e,n,t){if(e==null)return e;var r=[],i=0;return ea(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Qm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fn={current:null},na={transition:null},Gm={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:na,ReactCurrentOwner:vu};le.Children={map:_o,forEach:function(e,n,t){_o(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _o(e,function(){n++}),n},toArray:function(e){return _o(e,function(n){return n})||[]},only:function(e){if(!yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ei;le.Fragment=Fm;le.Profiler=Um;le.PureComponent=mu;le.StrictMode=Vm;le.Suspense=jm;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;le.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pf({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=vu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)vf.call(n,s)&&!yf.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ho,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e){return e={$$typeof:$m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bm,_context:e},e.Consumer=e};le.createElement=wf;le.createFactory=function(e){var n=wf.bind(null,e);return n.type=e,n};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:zm,render:e}};le.isValidElement=yu;le.lazy=function(e){return{$$typeof:Wm,_payload:{_status:-1,_result:e},_init:Qm}};le.memo=function(e,n){return{$$typeof:Hm,type:e,compare:n===void 0?null:n}};le.startTransition=function(e){var n=na.transition;na.transition={};try{e()}finally{na.transition=n}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,n){return fn.current.useCallback(e,n)};le.useContext=function(e){return fn.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return fn.current.useDeferredValue(e)};le.useEffect=function(e,n){return fn.current.useEffect(e,n)};le.useId=function(){return fn.current.useId()};le.useImperativeHandle=function(e,n,t){return fn.current.useImperativeHandle(e,n,t)};le.useInsertionEffect=function(e,n){return fn.current.useInsertionEffect(e,n)};le.useLayoutEffect=function(e,n){return fn.current.useLayoutEffect(e,n)};le.useMemo=function(e,n){return fn.current.useMemo(e,n)};le.useReducer=function(e,n,t){return fn.current.useReducer(e,n,t)};le.useRef=function(e){return fn.current.useRef(e)};le.useState=function(e){return fn.current.useState(e)};le.useSyncExternalStore=function(e,n,t){return fn.current.useSyncExternalStore(e,n,t)};le.useTransition=function(){return fn.current.useTransition()};le.version="18.2.0";(function(e){e.exports=le})(_m);const ie=Nm(y),Wr=Rm({__proto__:null,default:ie},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=y,Xm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),eg=Object.prototype.hasOwnProperty,ng=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tg={key:!0,ref:!0,__self:!0,__source:!0};function bf(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)eg.call(n,r)&&!tg.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Xm,type:e,key:o,ref:a,props:i,_owner:ng.current}}Wa.Fragment=Zm;Wa.jsx=bf;Wa.jsxs=bf;(function(e){e.exports=Wa})(Lm);const nt=Ki.Fragment,S=Ki.jsx,J=Ki.jsxs;var cs={},ma={},rg={get exports(){return ma},set exports(e){ma=e}},En={},ds={},ig={get exports(){return ds},set exports(e){ds=e}},Sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(z,X){var q=z.length;z.push(X);e:for(;0<q;){var ee=q-1>>>1,be=z[ee];if(0<i(be,X))z[ee]=X,z[q]=be,q=ee;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],q=z.pop();if(q!==X){z[0]=q;e:for(var ee=0,be=z.length,_n=be>>>1;ee<_n;){var Fe=2*(ee+1)-1,ye=z[Fe],Ce=Fe+1,we=z[Ce];if(0>i(ye,q))Ce<be&&0>i(we,ye)?(z[ee]=we,z[Ce]=q,ee=Ce):(z[ee]=ye,z[Fe]=q,ee=Fe);else if(Ce<be&&0>i(we,q))z[ee]=we,z[Ce]=q,ee=Ce;else break e}}return X}function i(z,X){var q=z.sortIndex-X.sortIndex;return q!==0?q:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],h=1,f=null,m=3,M=!1,k=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var X=t(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=z)r(u),X.sortIndex=X.expirationTime,n(s,X);else break;X=t(u)}}function I(z){if(C=!1,w(z),!k)if(t(s)!==null)k=!0,Ze(E);else{var X=t(u);X!==null&&on(I,X.startTime-z)}}function E(z,X){k=!1,C&&(C=!1,g(L),L=-1),M=!0;var q=m;try{for(w(X),f=t(s);f!==null&&(!(f.expirationTime>X)||z&&!oe());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,m=f.priorityLevel;var be=ee(f.expirationTime<=X);X=e.unstable_now(),typeof be=="function"?f.callback=be:f===t(s)&&r(s),w(X)}else r(s);f=t(s)}if(f!==null)var _n=!0;else{var Fe=t(u);Fe!==null&&on(I,Fe.startTime-X),_n=!1}return _n}finally{f=null,m=q,M=!1}}var N=!1,D=null,L=-1,G=5,W=-1;function oe(){return!(e.unstable_now()-W<G)}function he(){if(D!==null){var z=e.unstable_now();W=z;var X=!0;try{X=D(!0,z)}finally{X?ve():(N=!1,D=null)}}else N=!1}var ve;if(typeof d=="function")ve=function(){d(he)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Te=Oe.port2;Oe.port1.onmessage=he,ve=function(){Te.postMessage(null)}}else ve=function(){v(he,0)};function Ze(z){D=z,N||(N=!0,ve())}function on(z,X){L=v(function(){z(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||M||(k=!0,Ze(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var q=m;m=X;try{return z()}finally{m=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=m;m=z;try{return X()}finally{m=q}},e.unstable_scheduleCallback=function(z,X,q){var ee=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ee+q:ee):q=ee,z){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=q+be,z={id:h++,callback:X,priorityLevel:z,startTime:q,expirationTime:be,sortIndex:-1},q>ee?(z.sortIndex=q,n(u,z),t(s)===null&&z===t(u)&&(C?(g(L),L=-1):C=!0,on(I,q-ee))):(z.sortIndex=be,n(s,z),k||M||(k=!0,Ze(E))),z},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(z){var X=m;return function(){var q=m;m=X;try{return z.apply(this,arguments)}finally{m=q}}}})(Sf);(function(e){e.exports=Sf})(ig);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=y,Cn=ds;function V(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xf=new Set,Yi={};function gr(e,n){qr(e,n),qr(e+"Capture",n)}function qr(e,n){for(Yi[e]=n,e=0;e<n.length;e++)xf.add(n[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fs=Object.prototype.hasOwnProperty,og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Lc={};function ag(e){return fs.call(Lc,e)?!0:fs.call(Nc,e)?!1:og.test(e)?Lc[e]=!0:(Nc[e]=!0,!1)}function lg(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sg(e,n,t,r){if(n===null||typeof n>"u"||lg(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function hn(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rn[e]=new hn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];rn[n]=new hn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rn[e]=new hn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rn[e]=new hn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rn[e]=new hn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rn[e]=new hn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rn[e]=new hn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rn[e]=new hn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rn[e]=new hn(e,5,!1,e.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function bu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wu,bu);rn[n]=new hn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wu,bu);rn[n]=new hn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wu,bu);rn[n]=new hn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rn[e]=new hn(e,1,!1,e.toLowerCase(),null,!1,!1)});rn.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rn[e]=new hn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Su(e,n,t,r){var i=rn.hasOwnProperty(n)?rn[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(sg(n,t,i,r)&&(t=null),r||i===null?ag(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var bt=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),ku=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),xu=Symbol.for("react.forward_ref"),ps=Symbol.for("react.suspense"),ms=Symbol.for("react.suspense_list"),Cu=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Tf=Symbol.for("react.offscreen"),_c=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,El;function Pi(e){if(El===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);El=n&&n[1]||""}return`
`+El+e}var Tl=!1;function Ml(e,n){if(!e||Tl)return"";Tl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Tl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pi(e):""}function ug(e){switch(e.tag){case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function gs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case Cr:return"Portal";case hs:return"Profiler";case ku:return"StrictMode";case ps:return"Suspense";case ms:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ef:return(e.displayName||"Context")+".Consumer";case Cf:return(e._context.displayName||"Context")+".Provider";case xu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cu:return n=e.displayName||null,n!==null?n:gs(e.type)||"Memo";case Et:n=e._payload,e=e._init;try{return gs(e(n))}catch{}}return null}function cg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gs(n);case 8:return n===ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dg(e){var n=Mf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Fo(e){e._valueTracker||(e._valueTracker=dg(e))}function Af(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Mf(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,n){var t=n.checked;return Pe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Oc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=$t(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function If(e,n){n=n.checked,n!=null&&Su(e,"checked",n,!1)}function ys(e,n){If(e,n);var t=$t(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ws(e,n.type,t):n.hasOwnProperty("defaultValue")&&ws(e,n.type,$t(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Fc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ws(e,n,t){(n!=="number"||ga(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Di=Array.isArray;function Vr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+$t(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function bs(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(V(92));if(Di(t)){if(1<t.length)throw Error(V(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:$t(t)}}function Pf(e,n){var t=$t(n.value),r=$t(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Uc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Df(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vo,Rf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Qi(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fg=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){fg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_i[n]=_i[e]})});function Nf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_i.hasOwnProperty(e)&&_i[e]?(""+n).trim():n+"px"}function Lf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Nf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var hg=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ks(e,n){if(n){if(hg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(V(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(V(61))}if(n.style!=null&&typeof n.style!="object")throw Error(V(62))}}function xs(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cs=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,Ur=null,Br=null;function Bc(e){if(e=go(e)){if(typeof Es!="function")throw Error(V(280));var n=e.stateNode;n&&(n=Ga(n),Es(e.stateNode,e.type,n))}}function _f(e){Ur?Br?Br.push(e):Br=[e]:Ur=e}function Of(){if(Ur){var e=Ur,n=Br;if(Br=Ur=null,Bc(e),n)for(e=0;e<n.length;e++)Bc(n[e])}}function Ff(e,n){return e(n)}function Vf(){}var Al=!1;function Uf(e,n,t){if(Al)return e(n,t);Al=!0;try{return Ff(e,n,t)}finally{Al=!1,(Ur!==null||Br!==null)&&(Vf(),Of())}}function Gi(e,n){var t=e.stateNode;if(t===null)return null;var r=Ga(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(V(231,n,typeof t));return t}var Ts=!1;if(gt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Ts=!1}function pg(e,n,t,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(h){this.onError(h)}}var Oi=!1,va=null,ya=!1,Ms=null,mg={onError:function(e){Oi=!0,va=e}};function gg(e,n,t,r,i,o,a,l,s){Oi=!1,va=null,pg.apply(mg,arguments)}function vg(e,n,t,r,i,o,a,l,s){if(gg.apply(this,arguments),Oi){if(Oi){var u=va;Oi=!1,va=null}else throw Error(V(198));ya||(ya=!0,Ms=u)}}function vr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Bf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function $c(e){if(vr(e)!==e)throw Error(V(188))}function yg(e){var n=e.alternate;if(!n){if(n=vr(e),n===null)throw Error(V(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return $c(i),e;if(o===r)return $c(i),n;o=o.sibling}throw Error(V(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(t.alternate!==r)throw Error(V(190))}if(t.tag!==3)throw Error(V(188));return t.stateNode.current===t?e:n}function $f(e){return e=yg(e),e!==null?zf(e):null}function zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=zf(e);if(n!==null)return n;e=e.sibling}return null}var jf=Cn.unstable_scheduleCallback,zc=Cn.unstable_cancelCallback,wg=Cn.unstable_shouldYield,bg=Cn.unstable_requestPaint,Ne=Cn.unstable_now,Sg=Cn.unstable_getCurrentPriorityLevel,Tu=Cn.unstable_ImmediatePriority,Hf=Cn.unstable_UserBlockingPriority,wa=Cn.unstable_NormalPriority,kg=Cn.unstable_LowPriority,Wf=Cn.unstable_IdlePriority,qa=null,Jn=null;function xg(e){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(qa,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Tg,Cg=Math.log,Eg=Math.LN2;function Tg(e){return e>>>=0,e===0?32:31-(Cg(e)/Eg|0)|0}var Uo=64,Bo=4194304;function Ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ba(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=Ri(l):(o&=a,o!==0&&(r=Ri(o)))}else a=t&~i,a!==0?r=Ri(a):o!==0&&(r=Ri(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-jn(n),i=1<<t,r|=e[t],n&=~i;return r}function Mg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ag(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jn(o),l=1<<a,s=i[a];s===-1?(!(l&t)||l&r)&&(i[a]=Mg(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qf(){var e=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),e}function Il(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function po(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jn(n),e[n]=t}function Ig(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-jn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Mu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-jn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ge=0;function Kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yf,Au,Qf,Gf,Jf,Is=!1,$o=[],Rt=null,Nt=null,Lt=null,Ji=new Map,Xi=new Map,Mt=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,n){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Ji.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(n.pointerId)}}function wi(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=go(n),n!==null&&Au(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Dg(e,n,t,r,i){switch(n){case"focusin":return Rt=wi(Rt,e,n,t,r,i),!0;case"dragenter":return Nt=wi(Nt,e,n,t,r,i),!0;case"mouseover":return Lt=wi(Lt,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Ji.set(o,wi(Ji.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xi.set(o,wi(Xi.get(o)||null,e,n,t,r,i)),!0}return!1}function Xf(e){var n=tr(e.target);if(n!==null){var t=vr(n);if(t!==null){if(n=t.tag,n===13){if(n=Bf(t),n!==null){e.blockedOn=n,Jf(e.priority,function(){Qf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ta(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ps(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Cs=r,t.target.dispatchEvent(r),Cs=null}else return n=go(t),n!==null&&Au(n),e.blockedOn=t,!1;n.shift()}return!0}function Hc(e,n,t){ta(e)&&t.delete(n)}function Rg(){Is=!1,Rt!==null&&ta(Rt)&&(Rt=null),Nt!==null&&ta(Nt)&&(Nt=null),Lt!==null&&ta(Lt)&&(Lt=null),Ji.forEach(Hc),Xi.forEach(Hc)}function bi(e,n){e.blockedOn===n&&(e.blockedOn=null,Is||(Is=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Rg)))}function Zi(e){function n(i){return bi(i,e)}if(0<$o.length){bi($o[0],e);for(var t=1;t<$o.length;t++){var r=$o[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&bi(Rt,e),Nt!==null&&bi(Nt,e),Lt!==null&&bi(Lt,e),Ji.forEach(n),Xi.forEach(n),t=0;t<Mt.length;t++)r=Mt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(t=Mt[0],t.blockedOn===null);)Xf(t),t.blockedOn===null&&Mt.shift()}var $r=bt.ReactCurrentBatchConfig,Sa=!0;function Ng(e,n,t,r){var i=ge,o=$r.transition;$r.transition=null;try{ge=1,Iu(e,n,t,r)}finally{ge=i,$r.transition=o}}function Lg(e,n,t,r){var i=ge,o=$r.transition;$r.transition=null;try{ge=4,Iu(e,n,t,r)}finally{ge=i,$r.transition=o}}function Iu(e,n,t,r){if(Sa){var i=Ps(e,n,t,r);if(i===null)Ul(e,n,r,ka,t),jc(e,r);else if(Dg(i,e,n,t,r))r.stopPropagation();else if(jc(e,r),n&4&&-1<Pg.indexOf(e)){for(;i!==null;){var o=go(i);if(o!==null&&Yf(o),o=Ps(e,n,t,r),o===null&&Ul(e,n,r,ka,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ul(e,n,r,null,t)}}var ka=null;function Ps(e,n,t,r){if(ka=null,e=Eu(r),e=tr(e),e!==null)if(n=vr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Bf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ka=e,null}function Zf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sg()){case Tu:return 1;case Hf:return 4;case wa:case kg:return 16;case Wf:return 536870912;default:return 16}default:return 16}}var Pt=null,Pu=null,ra=null;function eh(){if(ra)return ra;var e,n=Pu,t=n.length,r,i="value"in Pt?Pt.value:Pt.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return ra=i.slice(e,1<r?1-r:void 0)}function ia(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function Wc(){return!1}function Tn(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zo:Wc,this.isPropagationStopped=Wc,this}return Pe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),n}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=Tn(ni),mo=Pe({},ni,{view:0,detail:0}),_g=Tn(mo),Pl,Dl,Si,Ka=Pe({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(Pl=e.screenX-Si.screenX,Dl=e.screenY-Si.screenY):Dl=Pl=0,Si=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),qc=Tn(Ka),Og=Pe({},Ka,{dataTransfer:0}),Fg=Tn(Og),Vg=Pe({},mo,{relatedTarget:0}),Rl=Tn(Vg),Ug=Pe({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=Tn(Ug),$g=Pe({},ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zg=Tn($g),jg=Pe({},ni,{data:0}),Kc=Tn(jg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qg[e])?!!n[e]:!1}function Ru(){return Kg}var Yg=Pe({},mo,{key:function(e){if(e.key){var n=Hg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qg=Tn(Yg),Gg=Pe({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=Tn(Gg),Jg=Pe({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Xg=Tn(Jg),Zg=Pe({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=Tn(Zg),nv=Pe({},Ka,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=Tn(nv),rv=[9,13,27,32],Nu=gt&&"CompositionEvent"in window,Fi=null;gt&&"documentMode"in document&&(Fi=document.documentMode);var iv=gt&&"TextEvent"in window&&!Fi,nh=gt&&(!Nu||Fi&&8<Fi&&11>=Fi),Qc=String.fromCharCode(32),Gc=!1;function th(e,n){switch(e){case"keyup":return rv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function ov(e,n){switch(e){case"compositionend":return rh(n);case"keypress":return n.which!==32?null:(Gc=!0,Qc);case"textInput":return e=n.data,e===Qc&&Gc?null:e;default:return null}}function av(e,n){if(Tr)return e==="compositionend"||!Nu&&th(e,n)?(e=eh(),ra=Pu=Pt=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return nh&&n.locale!=="ko"?null:n.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lv[e.type]:n==="textarea"}function ih(e,n,t,r){_f(r),n=xa(n,"onChange"),0<n.length&&(t=new Du("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vi=null,eo=null;function sv(e){mh(e,0)}function Ya(e){var n=Ir(e);if(Af(n))return e}function uv(e,n){if(e==="change")return n}var oh=!1;if(gt){var Nl;if(gt){var Ll="oninput"in document;if(!Ll){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),Ll=typeof Xc.oninput=="function"}Nl=Ll}else Nl=!1;oh=Nl&&(!document.documentMode||9<document.documentMode)}function Zc(){Vi&&(Vi.detachEvent("onpropertychange",ah),eo=Vi=null)}function ah(e){if(e.propertyName==="value"&&Ya(eo)){var n=[];ih(n,eo,e,Eu(e)),Uf(sv,n)}}function cv(e,n,t){e==="focusin"?(Zc(),Vi=n,eo=t,Vi.attachEvent("onpropertychange",ah)):e==="focusout"&&Zc()}function dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(eo)}function fv(e,n){if(e==="click")return Ya(n)}function hv(e,n){if(e==="input"||e==="change")return Ya(n)}function pv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:pv;function no(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!fs.call(n,i)||!Wn(e[i],n[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nd(e,n){var t=ed(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ed(t)}}function lh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function sh(){for(var e=window,n=ga();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ga(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function mv(e){var n=sh(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&lh(t.ownerDocument.documentElement,t)){if(r!==null&&Lu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nd(t,o);var a=nd(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gv=gt&&"documentMode"in document&&11>=document.documentMode,Mr=null,Ds=null,Ui=null,Rs=!1;function td(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rs||Mr==null||Mr!==ga(r)||(r=Mr,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&no(Ui,r)||(Ui=r,r=xa(Ds,"onSelect"),0<r.length&&(n=new Du("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mr)))}function jo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ar={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},_l={},uh={};gt&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Qa(e){if(_l[e])return _l[e];if(!Ar[e])return e;var n=Ar[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in uh)return _l[e]=n[t];return e}var ch=Qa("animationend"),dh=Qa("animationiteration"),fh=Qa("animationstart"),hh=Qa("transitionend"),ph=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,n){ph.set(e,n),gr(n,[e])}for(var Ol=0;Ol<rd.length;Ol++){var Fl=rd[Ol],vv=Fl.toLowerCase(),yv=Fl[0].toUpperCase()+Fl.slice(1);Ht(vv,"on"+yv)}Ht(ch,"onAnimationEnd");Ht(dh,"onAnimationIteration");Ht(fh,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(hh,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function id(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,vg(r,n,void 0,e),e.currentTarget=null}function mh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;id(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;id(i,l,u),o=s}}}if(ya)throw e=Ms,ya=!1,Ms=null,e}function ke(e,n){var t=n[Fs];t===void 0&&(t=n[Fs]=new Set);var r=e+"__bubble";t.has(r)||(gh(n,e,2,!1),t.add(r))}function Vl(e,n,t){var r=0;n&&(r|=4),gh(t,e,r,n)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[Ho]){e[Ho]=!0,xf.forEach(function(t){t!=="selectionchange"&&(wv.has(t)||Vl(t,!1,e),Vl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ho]||(n[Ho]=!0,Vl("selectionchange",!1,n))}}function gh(e,n,t,r){switch(Zf(n)){case 1:var i=Ng;break;case 4:i=Lg;break;default:i=Iu}t=i.bind(null,n,t,e),i=void 0,!Ts||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ul(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=tr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Uf(function(){var u=o,h=Eu(t),f=[];e:{var m=ph.get(e);if(m!==void 0){var M=Du,k=e;switch(e){case"keypress":if(ia(t)===0)break e;case"keydown":case"keyup":M=Qg;break;case"focusin":k="focus",M=Rl;break;case"focusout":k="blur",M=Rl;break;case"beforeblur":case"afterblur":M=Rl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Xg;break;case ch:case dh:case fh:M=Bg;break;case hh:M=ev;break;case"scroll":M=_g;break;case"wheel":M=tv;break;case"copy":case"cut":case"paste":M=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Yc}var C=(n&4)!==0,v=!C&&e==="scroll",g=C?m!==null?m+"Capture":null:m;C=[];for(var d=u,w;d!==null;){w=d;var I=w.stateNode;if(w.tag===5&&I!==null&&(w=I,g!==null&&(I=Gi(d,g),I!=null&&C.push(ro(d,I,w)))),v)break;d=d.return}0<C.length&&(m=new M(m,k,null,t,h),f.push({event:m,listeners:C}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",m&&t!==Cs&&(k=t.relatedTarget||t.fromElement)&&(tr(k)||k[vt]))break e;if((M||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,M?(k=t.relatedTarget||t.toElement,M=u,k=k?tr(k):null,k!==null&&(v=vr(k),k!==v||k.tag!==5&&k.tag!==6)&&(k=null)):(M=null,k=u),M!==k)){if(C=qc,I="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=Yc,I="onPointerLeave",g="onPointerEnter",d="pointer"),v=M==null?m:Ir(M),w=k==null?m:Ir(k),m=new C(I,d+"leave",M,t,h),m.target=v,m.relatedTarget=w,I=null,tr(h)===u&&(C=new C(g,d+"enter",k,t,h),C.target=w,C.relatedTarget=v,I=C),v=I,M&&k)n:{for(C=M,g=k,d=0,w=C;w;w=xr(w))d++;for(w=0,I=g;I;I=xr(I))w++;for(;0<d-w;)C=xr(C),d--;for(;0<w-d;)g=xr(g),w--;for(;d--;){if(C===g||g!==null&&C===g.alternate)break n;C=xr(C),g=xr(g)}C=null}else C=null;M!==null&&od(f,m,M,C,!1),k!==null&&v!==null&&od(f,v,k,C,!0)}}e:{if(m=u?Ir(u):window,M=m.nodeName&&m.nodeName.toLowerCase(),M==="select"||M==="input"&&m.type==="file")var E=uv;else if(Jc(m))if(oh)E=hv;else{E=dv;var N=cv}else(M=m.nodeName)&&M.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=fv);if(E&&(E=E(e,u))){ih(f,E,t,h);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&ws(m,"number",m.value)}switch(N=u?Ir(u):window,e){case"focusin":(Jc(N)||N.contentEditable==="true")&&(Mr=N,Ds=u,Ui=null);break;case"focusout":Ui=Ds=Mr=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,td(f,t,h);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":td(f,t,h)}var D;if(Nu)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Tr?th(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(nh&&t.locale!=="ko"&&(Tr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Tr&&(D=eh()):(Pt=h,Pu="value"in Pt?Pt.value:Pt.textContent,Tr=!0)),N=xa(u,L),0<N.length&&(L=new Kc(L,e,null,t,h),f.push({event:L,listeners:N}),D?L.data=D:(D=rh(t),D!==null&&(L.data=D)))),(D=iv?ov(e,t):av(e,t))&&(u=xa(u,"onBeforeInput"),0<u.length&&(h=new Kc("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:u}),h.data=D))}mh(f,n)})}function ro(e,n,t){return{instance:e,listener:n,currentTarget:t}}function xa(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gi(e,t),o!=null&&r.unshift(ro(e,o,i)),o=Gi(e,n),o!=null&&r.push(ro(e,o,i))),e=e.return}return r}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Gi(t,o),s!=null&&a.unshift(ro(t,s,l))):i||(s=Gi(t,o),s!=null&&a.push(ro(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var bv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(bv,`
`).replace(Sv,"")}function Wo(e,n,t){if(n=ad(n),ad(e)!==n&&t)throw Error(V(425))}function Ca(){}var Ns=null,Ls=null;function _s(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Os=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(Cv)}:Os;function Cv(e){setTimeout(function(){throw e})}function Bl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Zi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Zi(n)}function _t(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),Gn="__reactFiber$"+ti,io="__reactProps$"+ti,vt="__reactContainer$"+ti,Fs="__reactEvents$"+ti,Ev="__reactListeners$"+ti,Tv="__reactHandles$"+ti;function tr(e){var n=e[Gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[vt]||t[Gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=sd(e);e!==null;){if(t=e[Gn])return t;e=sd(e)}return n}e=t,t=e.parentNode}return null}function go(e){return e=e[Gn]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function Ga(e){return e[io]||null}var Vs=[],Pr=-1;function Wt(e){return{current:e}}function xe(e){0>Pr||(e.current=Vs[Pr],Vs[Pr]=null,Pr--)}function Se(e,n){Pr++,Vs[Pr]=e.current,e.current=n}var zt={},un=Wt(zt),vn=Wt(!1),ur=zt;function Kr(e,n){var t=e.type.contextTypes;if(!t)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function yn(e){return e=e.childContextTypes,e!=null}function Ea(){xe(vn),xe(un)}function ud(e,n,t){if(un.current!==zt)throw Error(V(168));Se(un,n),Se(vn,t)}function vh(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(V(108,cg(e)||"Unknown",i));return Pe({},t,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,ur=un.current,Se(un,e),Se(vn,vn.current),!0}function cd(e,n,t){var r=e.stateNode;if(!r)throw Error(V(169));t?(e=vh(e,n,ur),r.__reactInternalMemoizedMergedChildContext=e,xe(vn),xe(un),Se(un,e)):xe(vn),Se(vn,t)}var ut=null,Ja=!1,$l=!1;function yh(e){ut===null?ut=[e]:ut.push(e)}function Mv(e){Ja=!0,yh(e)}function qt(){if(!$l&&ut!==null){$l=!0;var e=0,n=ge;try{var t=ut;for(ge=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}ut=null,Ja=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),jf(Tu,qt),i}finally{ge=n,$l=!1}}return null}var Dr=[],Rr=0,Ma=null,Aa=0,In=[],Pn=0,cr=null,dt=1,ft="";function er(e,n){Dr[Rr++]=Aa,Dr[Rr++]=Ma,Ma=e,Aa=n}function wh(e,n,t){In[Pn++]=dt,In[Pn++]=ft,In[Pn++]=cr,cr=e;var r=dt;e=ft;var i=32-jn(r)-1;r&=~(1<<i),t+=1;var o=32-jn(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dt=1<<32-jn(n)+i|t<<i|r,ft=o+e}else dt=1<<o|t<<i|r,ft=e}function _u(e){e.return!==null&&(er(e,1),wh(e,1,0))}function Ou(e){for(;e===Ma;)Ma=Dr[--Rr],Dr[Rr]=null,Aa=Dr[--Rr],Dr[Rr]=null;for(;e===cr;)cr=In[--Pn],In[Pn]=null,ft=In[--Pn],In[Pn]=null,dt=In[--Pn],In[Pn]=null}var xn=null,kn=null,Ee=!1,$n=null;function bh(e,n){var t=Dn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function dd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xn=e,kn=_t(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xn=e,kn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=cr!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Dn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xn=e,kn=null,!0):!1;default:return!1}}function Us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bs(e){if(Ee){var n=kn;if(n){var t=n;if(!dd(e,n)){if(Us(e))throw Error(V(418));n=_t(t.nextSibling);var r=xn;n&&dd(e,n)?bh(r,t):(e.flags=e.flags&-4097|2,Ee=!1,xn=e)}}else{if(Us(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ee=!1,xn=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xn=e}function qo(e){if(e!==xn)return!1;if(!Ee)return fd(e),Ee=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_s(e.type,e.memoizedProps)),n&&(n=kn)){if(Us(e))throw Sh(),Error(V(418));for(;n;)bh(e,n),n=_t(n.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){kn=_t(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}kn=null}}else kn=xn?_t(e.stateNode.nextSibling):null;return!0}function Sh(){for(var e=kn;e;)e=_t(e.nextSibling)}function Yr(){kn=xn=null,Ee=!1}function Fu(e){$n===null?$n=[e]:$n.push(e)}var Av=bt.ReactCurrentBatchConfig;function Un(e,n){if(e&&e.defaultProps){n=Pe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Ia=Wt(null),Pa=null,Nr=null,Vu=null;function Uu(){Vu=Nr=Pa=null}function Bu(e){var n=Ia.current;xe(Ia),e._currentValue=n}function $s(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function zr(e,n){Pa=e,Vu=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(gn=!0),e.firstContext=null)}function Nn(e){var n=e._currentValue;if(Vu!==e)if(e={context:e,memoizedValue:n,next:null},Nr===null){if(Pa===null)throw Error(V(308));Nr=e,Pa.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return n}var rr=null;function $u(e){rr===null?rr=[e]:rr.push(e)}function kh(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,$u(n)):(t.next=i.next,i.next=t),n.interleaved=t,yt(e,r)}function yt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tt=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ot(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,yt(e,t)}return i=r.interleaved,i===null?(n.next=n,$u(r)):(n.next=i.next,i.next=n),r.interleaved=n,yt(e,t)}function oa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mu(e,t)}}function hd(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Da(e,n,t,r){var i=e.updateQueue;Tt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,h=u=s=null,l=o;do{var m=l.lane,M=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:M,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,C=l;switch(m=n,M=t,C.tag){case 1:if(k=C.payload,typeof k=="function"){f=k.call(M,f,m);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,m=typeof k=="function"?k.call(M,f,m):k,m==null)break e;f=Pe({},f,m);break e;case 2:Tt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else M={eventTime:M,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=M,s=f):h=h.next=M,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);fr|=a,e.lanes=a,e.memoizedState=f}}function pd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Ch=new kf.Component().refs;function zs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Pe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Xa={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=dn(),i=Vt(e),o=pt(r,i);o.payload=n,t!=null&&(o.callback=t),n=Ot(e,o,i),n!==null&&(Hn(n,e,i,r),oa(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=dn(),i=Vt(e),o=pt(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Ot(e,o,i),n!==null&&(Hn(n,e,i,r),oa(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=dn(),r=Vt(e),i=pt(t,r);i.tag=2,n!=null&&(i.callback=n),n=Ot(e,i,r),n!==null&&(Hn(n,e,r,t),oa(n,e,r))}};function md(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!no(t,r)||!no(i,o):!0}function Eh(e,n,t){var r=!1,i=zt,o=n.contextType;return typeof o=="object"&&o!==null?o=Nn(o):(i=yn(n)?ur:un.current,r=n.contextTypes,o=(r=r!=null)?Kr(e,i):zt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xa,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function gd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Xa.enqueueReplaceState(n,n.state,null)}function js(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Ch,zu(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Nn(o):(o=yn(n)?ur:un.current,i.context=Kr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(zs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Xa.enqueueReplaceState(i,i.state,null),Da(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ki(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(V(309));var r=t.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;l===Ch&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(V(284));if(!t._owner)throw Error(V(290,e))}return e}function Ko(e,n){throw e=Object.prototype.toString.call(n),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function vd(e){var n=e._init;return n(e._payload)}function Th(e){function n(g,d){if(e){var w=g.deletions;w===null?(g.deletions=[d],g.flags|=16):w.push(d)}}function t(g,d){if(!e)return null;for(;d!==null;)n(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=Ut(g,d),g.index=0,g.sibling=null,g}function o(g,d,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<d?(g.flags|=2,d):w):(g.flags|=2,d)):(g.flags|=1048576,d)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,d,w,I){return d===null||d.tag!==6?(d=Yl(w,g.mode,I),d.return=g,d):(d=i(d,w),d.return=g,d)}function s(g,d,w,I){var E=w.type;return E===Er?h(g,d,w.props.children,I,w.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&vd(E)===d.type)?(I=i(d,w.props),I.ref=ki(g,d,w),I.return=g,I):(I=da(w.type,w.key,w.props,null,g.mode,I),I.ref=ki(g,d,w),I.return=g,I)}function u(g,d,w,I){return d===null||d.tag!==4||d.stateNode.containerInfo!==w.containerInfo||d.stateNode.implementation!==w.implementation?(d=Ql(w,g.mode,I),d.return=g,d):(d=i(d,w.children||[]),d.return=g,d)}function h(g,d,w,I,E){return d===null||d.tag!==7?(d=sr(w,g.mode,I,E),d.return=g,d):(d=i(d,w),d.return=g,d)}function f(g,d,w){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Yl(""+d,g.mode,w),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oo:return w=da(d.type,d.key,d.props,null,g.mode,w),w.ref=ki(g,null,d),w.return=g,w;case Cr:return d=Ql(d,g.mode,w),d.return=g,d;case Et:var I=d._init;return f(g,I(d._payload),w)}if(Di(d)||vi(d))return d=sr(d,g.mode,w,null),d.return=g,d;Ko(g,d)}return null}function m(g,d,w,I){var E=d!==null?d.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return E!==null?null:l(g,d,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oo:return w.key===E?s(g,d,w,I):null;case Cr:return w.key===E?u(g,d,w,I):null;case Et:return E=w._init,m(g,d,E(w._payload),I)}if(Di(w)||vi(w))return E!==null?null:h(g,d,w,I,null);Ko(g,w)}return null}function M(g,d,w,I,E){if(typeof I=="string"&&I!==""||typeof I=="number")return g=g.get(w)||null,l(d,g,""+I,E);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Oo:return g=g.get(I.key===null?w:I.key)||null,s(d,g,I,E);case Cr:return g=g.get(I.key===null?w:I.key)||null,u(d,g,I,E);case Et:var N=I._init;return M(g,d,w,N(I._payload),E)}if(Di(I)||vi(I))return g=g.get(w)||null,h(d,g,I,E,null);Ko(d,I)}return null}function k(g,d,w,I){for(var E=null,N=null,D=d,L=d=0,G=null;D!==null&&L<w.length;L++){D.index>L?(G=D,D=null):G=D.sibling;var W=m(g,D,w[L],I);if(W===null){D===null&&(D=G);break}e&&D&&W.alternate===null&&n(g,D),d=o(W,d,L),N===null?E=W:N.sibling=W,N=W,D=G}if(L===w.length)return t(g,D),Ee&&er(g,L),E;if(D===null){for(;L<w.length;L++)D=f(g,w[L],I),D!==null&&(d=o(D,d,L),N===null?E=D:N.sibling=D,N=D);return Ee&&er(g,L),E}for(D=r(g,D);L<w.length;L++)G=M(D,g,L,w[L],I),G!==null&&(e&&G.alternate!==null&&D.delete(G.key===null?L:G.key),d=o(G,d,L),N===null?E=G:N.sibling=G,N=G);return e&&D.forEach(function(oe){return n(g,oe)}),Ee&&er(g,L),E}function C(g,d,w,I){var E=vi(w);if(typeof E!="function")throw Error(V(150));if(w=E.call(w),w==null)throw Error(V(151));for(var N=E=null,D=d,L=d=0,G=null,W=w.next();D!==null&&!W.done;L++,W=w.next()){D.index>L?(G=D,D=null):G=D.sibling;var oe=m(g,D,W.value,I);if(oe===null){D===null&&(D=G);break}e&&D&&oe.alternate===null&&n(g,D),d=o(oe,d,L),N===null?E=oe:N.sibling=oe,N=oe,D=G}if(W.done)return t(g,D),Ee&&er(g,L),E;if(D===null){for(;!W.done;L++,W=w.next())W=f(g,W.value,I),W!==null&&(d=o(W,d,L),N===null?E=W:N.sibling=W,N=W);return Ee&&er(g,L),E}for(D=r(g,D);!W.done;L++,W=w.next())W=M(D,g,L,W.value,I),W!==null&&(e&&W.alternate!==null&&D.delete(W.key===null?L:W.key),d=o(W,d,L),N===null?E=W:N.sibling=W,N=W);return e&&D.forEach(function(he){return n(g,he)}),Ee&&er(g,L),E}function v(g,d,w,I){if(typeof w=="object"&&w!==null&&w.type===Er&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Oo:e:{for(var E=w.key,N=d;N!==null;){if(N.key===E){if(E=w.type,E===Er){if(N.tag===7){t(g,N.sibling),d=i(N,w.props.children),d.return=g,g=d;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&vd(E)===N.type){t(g,N.sibling),d=i(N,w.props),d.ref=ki(g,N,w),d.return=g,g=d;break e}t(g,N);break}else n(g,N);N=N.sibling}w.type===Er?(d=sr(w.props.children,g.mode,I,w.key),d.return=g,g=d):(I=da(w.type,w.key,w.props,null,g.mode,I),I.ref=ki(g,d,w),I.return=g,g=I)}return a(g);case Cr:e:{for(N=w.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===w.containerInfo&&d.stateNode.implementation===w.implementation){t(g,d.sibling),d=i(d,w.children||[]),d.return=g,g=d;break e}else{t(g,d);break}else n(g,d);d=d.sibling}d=Ql(w,g.mode,I),d.return=g,g=d}return a(g);case Et:return N=w._init,v(g,d,N(w._payload),I)}if(Di(w))return k(g,d,w,I);if(vi(w))return C(g,d,w,I);Ko(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,d!==null&&d.tag===6?(t(g,d.sibling),d=i(d,w),d.return=g,g=d):(t(g,d),d=Yl(w,g.mode,I),d.return=g,g=d),a(g)):t(g,d)}return v}var Qr=Th(!0),Mh=Th(!1),vo={},Xn=Wt(vo),oo=Wt(vo),ao=Wt(vo);function ir(e){if(e===vo)throw Error(V(174));return e}function ju(e,n){switch(Se(ao,n),Se(oo,e),Se(Xn,vo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ss(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ss(n,e)}xe(Xn),Se(Xn,n)}function Gr(){xe(Xn),xe(oo),xe(ao)}function Ah(e){ir(ao.current);var n=ir(Xn.current),t=Ss(n,e.type);n!==t&&(Se(oo,e),Se(Xn,t))}function Hu(e){oo.current===e&&(xe(Xn),xe(oo))}var Ae=Wt(0);function Ra(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var zl=[];function Wu(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var aa=bt.ReactCurrentDispatcher,jl=bt.ReactCurrentBatchConfig,dr=0,Ie=null,qe=null,Ge=null,Na=!1,Bi=!1,lo=0,Iv=0;function an(){throw Error(V(321))}function qu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Wn(e[t],n[t]))return!1;return!0}function Ku(e,n,t,r,i,o){if(dr=o,Ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,aa.current=e===null||e.memoizedState===null?Nv:Lv,e=t(r,i),Bi){o=0;do{if(Bi=!1,lo=0,25<=o)throw Error(V(301));o+=1,Ge=qe=null,n.updateQueue=null,aa.current=_v,e=t(r,i)}while(Bi)}if(aa.current=La,n=qe!==null&&qe.next!==null,dr=0,Ge=qe=Ie=null,Na=!1,n)throw Error(V(300));return e}function Yu(){var e=lo!==0;return lo=0,e}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ie.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ln(){if(qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var n=Ge===null?Ie.memoizedState:Ge.next;if(n!==null)Ge=n,qe=e;else{if(e===null)throw Error(V(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ge===null?Ie.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function so(e,n){return typeof n=="function"?n(e):n}function Hl(e){var n=Ln(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=qe,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var h=u.lane;if((dr&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Ie.lanes|=h,fr|=h}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Wn(r,n.memoizedState)||(gn=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Ie.lanes|=o,fr|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wl(e){var n=Ln(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Wn(o,n.memoizedState)||(gn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Ih(){}function Ph(e,n){var t=Ie,r=Ln(),i=n(),o=!Wn(r.memoizedState,i);if(o&&(r.memoizedState=i,gn=!0),r=r.queue,Qu(Nh.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ge!==null&&Ge.memoizedState.tag&1){if(t.flags|=2048,uo(9,Rh.bind(null,t,r,i,n),void 0,null),Je===null)throw Error(V(349));dr&30||Dh(t,n,i)}return i}function Dh(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ie.updateQueue,n===null?(n={lastEffect:null,stores:null},Ie.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Rh(e,n,t,r){n.value=t,n.getSnapshot=r,Lh(n)&&_h(e)}function Nh(e,n,t){return t(function(){Lh(n)&&_h(e)})}function Lh(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Wn(e,t)}catch{return!0}}function _h(e){var n=yt(e,1);n!==null&&Hn(n,e,1,-1)}function yd(e){var n=Yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},n.queue=e,e=e.dispatch=Rv.bind(null,Ie,e),[n.memoizedState,e]}function uo(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ie.updateQueue,n===null?(n={lastEffect:null,stores:null},Ie.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Oh(){return Ln().memoizedState}function la(e,n,t,r){var i=Yn();Ie.flags|=e,i.memoizedState=uo(1|n,t,void 0,r===void 0?null:r)}function Za(e,n,t,r){var i=Ln();r=r===void 0?null:r;var o=void 0;if(qe!==null){var a=qe.memoizedState;if(o=a.destroy,r!==null&&qu(r,a.deps)){i.memoizedState=uo(n,t,o,r);return}}Ie.flags|=e,i.memoizedState=uo(1|n,t,o,r)}function wd(e,n){return la(8390656,8,e,n)}function Qu(e,n){return Za(2048,8,e,n)}function Fh(e,n){return Za(4,2,e,n)}function Vh(e,n){return Za(4,4,e,n)}function Uh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bh(e,n,t){return t=t!=null?t.concat([e]):null,Za(4,4,Uh.bind(null,n,e),t)}function Gu(){}function $h(e,n){var t=Ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zh(e,n){var t=Ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function jh(e,n,t){return dr&21?(Wn(t,n)||(t=qf(),Ie.lanes|=t,fr|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,gn=!0),e.memoizedState=t)}function Pv(e,n){var t=ge;ge=t!==0&&4>t?t:4,e(!0);var r=jl.transition;jl.transition={};try{e(!1),n()}finally{ge=t,jl.transition=r}}function Hh(){return Ln().memoizedState}function Dv(e,n,t){var r=Vt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Wh(e))qh(n,t);else if(t=kh(e,n,t,r),t!==null){var i=dn();Hn(t,e,r,i),Kh(t,n,r)}}function Rv(e,n,t){var r=Vt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))qh(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,Wn(l,a)){var s=n.interleaved;s===null?(i.next=i,$u(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=kh(e,n,i,r),t!==null&&(i=dn(),Hn(t,e,r,i),Kh(t,n,r))}}function Wh(e){var n=e.alternate;return e===Ie||n!==null&&n===Ie}function qh(e,n){Bi=Na=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Kh(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mu(e,t)}}var La={readContext:Nn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},Nv={readContext:Nn,useCallback:function(e,n){return Yn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:wd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,la(4194308,4,Uh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return la(4194308,4,e,n)},useInsertionEffect:function(e,n){return la(4,2,e,n)},useMemo:function(e,n){var t=Yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Yn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Dv.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var n=Yn();return e={current:e},n.memoizedState=e},useState:yd,useDebugValue:Gu,useDeferredValue:function(e){return Yn().memoizedState=e},useTransition:function(){var e=yd(!1),n=e[0];return e=Pv.bind(null,e[1]),Yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ie,i=Yn();if(Ee){if(t===void 0)throw Error(V(407));t=t()}else{if(t=n(),Je===null)throw Error(V(349));dr&30||Dh(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,wd(Nh.bind(null,r,o,e),[e]),r.flags|=2048,uo(9,Rh.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Yn(),n=Je.identifierPrefix;if(Ee){var t=ft,r=dt;t=(r&~(1<<32-jn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Iv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lv={readContext:Nn,useCallback:$h,useContext:Nn,useEffect:Qu,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Vh,useMemo:zh,useReducer:Hl,useRef:Oh,useState:function(){return Hl(so)},useDebugValue:Gu,useDeferredValue:function(e){var n=Ln();return jh(n,qe.memoizedState,e)},useTransition:function(){var e=Hl(so)[0],n=Ln().memoizedState;return[e,n]},useMutableSource:Ih,useSyncExternalStore:Ph,useId:Hh,unstable_isNewReconciler:!1},_v={readContext:Nn,useCallback:$h,useContext:Nn,useEffect:Qu,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Vh,useMemo:zh,useReducer:Wl,useRef:Oh,useState:function(){return Wl(so)},useDebugValue:Gu,useDeferredValue:function(e){var n=Ln();return qe===null?n.memoizedState=e:jh(n,qe.memoizedState,e)},useTransition:function(){var e=Wl(so)[0],n=Ln().memoizedState;return[e,n]},useMutableSource:Ih,useSyncExternalStore:Ph,useId:Hh,unstable_isNewReconciler:!1};function Jr(e,n){try{var t="",r=n;do t+=ug(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function ql(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Hs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ov=typeof WeakMap=="function"?WeakMap:Map;function Yh(e,n,t){t=pt(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Oa||(Oa=!0,eu=r),Hs(e,n)},t}function Qh(e,n,t){t=pt(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Hs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Hs(e,n),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function bd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ov;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Gv.bind(null,e,n,t),n.then(e,e))}function Sd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kd(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pt(-1,1),n.tag=2,Ot(t,n,1))),t.lanes|=1),e)}var Fv=bt.ReactCurrentOwner,gn=!1;function cn(e,n,t,r){n.child=e===null?Mh(n,null,t,r):Qr(n,e.child,t,r)}function xd(e,n,t,r,i){t=t.render;var o=n.ref;return zr(n,i),r=Ku(e,n,t,r,o,i),t=Yu(),e!==null&&!gn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,wt(e,n,i)):(Ee&&t&&_u(n),n.flags|=1,cn(e,n,r,i),n.child)}function Cd(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!ic(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Gh(e,n,o,r,i)):(e=da(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:no,t(a,r)&&e.ref===n.ref)return wt(e,n,i)}return n.flags|=1,e=Ut(o,r),e.ref=n.ref,e.return=n,n.child=e}function Gh(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(no(o,r)&&e.ref===n.ref)if(gn=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(gn=!0);else return n.lanes=e.lanes,wt(e,n,i)}return Ws(e,n,t,r,i)}function Jh(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(_r,Sn),Sn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Se(_r,Sn),Sn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,Se(_r,Sn),Sn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,Se(_r,Sn),Sn|=r;return cn(e,n,i,t),n.child}function Xh(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ws(e,n,t,r,i){var o=yn(t)?ur:un.current;return o=Kr(n,o),zr(n,i),t=Ku(e,n,t,r,o,i),r=Yu(),e!==null&&!gn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,wt(e,n,i)):(Ee&&r&&_u(n),n.flags|=1,cn(e,n,t,i),n.child)}function Ed(e,n,t,r,i){if(yn(t)){var o=!0;Ta(n)}else o=!1;if(zr(n,i),n.stateNode===null)sa(e,n),Eh(n,t,r),js(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=yn(t)?ur:un.current,u=Kr(n,u));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&gd(n,a,r,u),Tt=!1;var m=n.memoizedState;a.state=m,Da(n,r,a,i),s=n.memoizedState,l!==r||m!==s||vn.current||Tt?(typeof h=="function"&&(zs(n,t,h,r),s=n.memoizedState),(l=Tt||md(n,t,l,r,m,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,xh(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Un(n.type,l),a.props=u,f=n.pendingProps,m=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Nn(s):(s=yn(t)?ur:un.current,s=Kr(n,s));var M=t.getDerivedStateFromProps;(h=typeof M=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==s)&&gd(n,a,r,s),Tt=!1,m=n.memoizedState,a.state=m,Da(n,r,a,i);var k=n.memoizedState;l!==f||m!==k||vn.current||Tt?(typeof M=="function"&&(zs(n,t,M,r),k=n.memoizedState),(u=Tt||md(n,t,u,r,m,k,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),a.props=r,a.state=k,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return qs(e,n,t,r,o,i)}function qs(e,n,t,r,i,o){Xh(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&cd(n,t,!1),wt(e,n,o);r=n.stateNode,Fv.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Qr(n,e.child,null,o),n.child=Qr(n,null,l,o)):cn(e,n,l,o),n.memoizedState=r.state,i&&cd(n,t,!0),n.child}function Zh(e){var n=e.stateNode;n.pendingContext?ud(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ud(e,n.context,!1),ju(e,n.containerInfo)}function Td(e,n,t,r,i){return Yr(),Fu(i),n.flags|=256,cn(e,n,t,r),n.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function ep(e,n,t){var r=n.pendingProps,i=Ae.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(Ae,i&1),e===null)return Bs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=tl(a,r,0,null),e=sr(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ys(t),n.memoizedState=Ks,e):Ju(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Vv(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Ut(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ut(l,o):(o=sr(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?Ys(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=Ks,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ju(e,n){return n=tl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Yo(e,n,t,r){return r!==null&&Fu(r),Qr(n,e.child,null,t),e=Ju(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vv(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=ql(Error(V(422))),Yo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=tl({mode:"visible",children:r.children},i,0,null),o=sr(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Qr(n,e.child,null,a),n.child.memoizedState=Ys(a),n.memoizedState=Ks,o);if(!(n.mode&1))return Yo(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=ql(o,r,void 0),Yo(e,n,a,r)}if(l=(a&e.childLanes)!==0,gn||l){if(r=Je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yt(e,i),Hn(r,e,i,-1))}return rc(),r=ql(Error(V(421))),Yo(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Jv.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,kn=_t(i.nextSibling),xn=n,Ee=!0,$n=null,e!==null&&(In[Pn++]=dt,In[Pn++]=ft,In[Pn++]=cr,dt=e.id,ft=e.overflow,cr=n),n=Ju(n,r.children),n.flags|=4096,n)}function Md(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$s(e.return,n,t)}function Kl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function np(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(cn(e,n,r.children,t),r=Ae.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Md(e,t,n);else if(e.tag===19)Md(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Ae,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ra(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Kl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ra(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Kl(n,!0,t,null,o);break;case"together":Kl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function sa(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function wt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),fr|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(V(153));if(n.child!==null){for(e=n.child,t=Ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Uv(e,n,t){switch(n.tag){case 3:Zh(n),Yr();break;case 5:Ah(n);break;case 1:yn(n.type)&&Ta(n);break;case 4:ju(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;Se(Ia,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ae,Ae.current&1),n.flags|=128,null):t&n.child.childLanes?ep(e,n,t):(Se(Ae,Ae.current&1),e=wt(e,n,t),e!==null?e.sibling:null);Se(Ae,Ae.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return np(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ae,Ae.current),r)break;return null;case 22:case 23:return n.lanes=0,Jh(e,n,t)}return wt(e,n,t)}var tp,Qs,rp,ip;tp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qs=function(){};rp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,ir(Xn.current);var o=null;switch(t){case"input":i=vs(e,i),r=vs(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=bs(e,i),r=bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ca)}ks(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ke("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};ip=function(e,n,t,r){t!==r&&(n.flags|=4)};function xi(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ln(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Bv(e,n,t){var r=n.pendingProps;switch(Ou(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return yn(n.type)&&Ea(),ln(n),null;case 3:return r=n.stateNode,Gr(),xe(vn),xe(un),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,$n!==null&&(ru($n),$n=null))),Qs(e,n),ln(n),null;case 5:Hu(n);var i=ir(ao.current);if(t=n.type,e!==null&&n.stateNode!=null)rp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(V(166));return ln(n),null}if(e=ir(Xn.current),qo(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Gn]=n,r[io]=o,e=(n.mode&1)!==0,t){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Ni.length;i++)ke(Ni[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Oc(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":Vc(r,o),ke("invalid",r)}ks(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,l,e),i=["children",""+l]):Yi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ke("scroll",r)}switch(t){case"input":Fo(r),Fc(r,o,!0);break;case"textarea":Fo(r),Uc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ca)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Df(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Gn]=n,e[io]=r,tp(e,n,!1,!1),n.stateNode=e;e:{switch(a=xs(t,r),t){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ni.length;i++)ke(Ni[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":Oc(e,r),i=vs(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ke("invalid",e);break;case"textarea":Vc(e,r),i=bs(e,r),ke("invalid",e);break;default:i=r}ks(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Lf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Rf(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Qi(e,s):typeof s=="number"&&Qi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ke("scroll",e):s!=null&&Su(e,o,s,a))}switch(t){case"input":Fo(e),Fc(e,r,!1);break;case"textarea":Fo(e),Uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ca)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ln(n),null;case 6:if(e&&n.stateNode!=null)ip(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(V(166));if(t=ir(ao.current),ir(Xn.current),qo(n)){if(r=n.stateNode,t=n.memoizedProps,r[Gn]=n,(o=r.nodeValue!==t)&&(e=xn,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Gn]=n,n.stateNode=r}return ln(n),null;case 13:if(xe(Ae),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&kn!==null&&n.mode&1&&!(n.flags&128))Sh(),Yr(),n.flags|=98560,o=!1;else if(o=qo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Gn]=n}else Yr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ln(n),o=!1}else $n!==null&&(ru($n),$n=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Ae.current&1?Ke===0&&(Ke=3):rc())),n.updateQueue!==null&&(n.flags|=4),ln(n),null);case 4:return Gr(),Qs(e,n),e===null&&to(n.stateNode.containerInfo),ln(n),null;case 10:return Bu(n.type._context),ln(n),null;case 17:return yn(n.type)&&Ea(),ln(n),null;case 19:if(xe(Ae),o=n.memoizedState,o===null)return ln(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)xi(o,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Ra(e),a!==null){for(n.flags|=128,xi(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Se(Ae,Ae.current&1|2),n.child}e=e.sibling}o.tail!==null&&Ne()>Xr&&(n.flags|=128,r=!0,xi(o,!1),n.lanes=4194304)}else{if(!r)if(e=Ra(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),xi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ee)return ln(n),null}else 2*Ne()-o.renderingStartTime>Xr&&t!==1073741824&&(n.flags|=128,r=!0,xi(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Ne(),n.sibling=null,t=Ae.current,Se(Ae,r?t&1|2:t&1),n):(ln(n),null);case 22:case 23:return tc(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Sn&1073741824&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),null;case 24:return null;case 25:return null}throw Error(V(156,n.tag))}function $v(e,n){switch(Ou(n),n.tag){case 1:return yn(n.type)&&Ea(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gr(),xe(vn),xe(un),Wu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Hu(n),null;case 13:if(xe(Ae),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(V(340));Yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xe(Ae),null;case 4:return Gr(),null;case 10:return Bu(n.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var Qo=!1,sn=!1,zv=typeof WeakSet=="function"?WeakSet:Set,j=null;function Lr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){De(e,n,r)}else t.current=null}function Gs(e,n,t){try{t()}catch(r){De(e,n,r)}}var Ad=!1;function jv(e,n){if(Ns=Sa,e=sh(),Lu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,h=0,f=e,m=null;n:for(;;){for(var M;f!==t||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(M=f.firstChild)!==null;)m=f,f=M;for(;;){if(f===e)break n;if(m===t&&++u===i&&(l=a),m===o&&++h===r&&(s=a),(M=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=M}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ls={focusedElem:e,selectionRange:t},Sa=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,v=k.memoizedState,g=n.stateNode,d=g.getSnapshotBeforeUpdate(n.elementType===n.type?C:Un(n.type,C),v);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var w=n.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(I){De(n,n.return,I)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return k=Ad,Ad=!1,k}function $i(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gs(n,t,o)}i=i.next}while(i!==r)}}function el(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Js(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function op(e){var n=e.alternate;n!==null&&(e.alternate=null,op(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Gn],delete n[io],delete n[Fs],delete n[Ev],delete n[Tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ap(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ca));else if(r!==4&&(e=e.child,e!==null))for(Xs(e,n,t),e=e.sibling;e!==null;)Xs(e,n,t),e=e.sibling}function Zs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zs(e,n,t),e=e.sibling;e!==null;)Zs(e,n,t),e=e.sibling}var en=null,Bn=!1;function Ct(e,n,t){for(t=t.child;t!==null;)lp(e,n,t),t=t.sibling}function lp(e,n,t){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(qa,t)}catch{}switch(t.tag){case 5:sn||Lr(t,n);case 6:var r=en,i=Bn;en=null,Ct(e,n,t),en=r,Bn=i,en!==null&&(Bn?(e=en,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(Bn?(e=en,t=t.stateNode,e.nodeType===8?Bl(e.parentNode,t):e.nodeType===1&&Bl(e,t),Zi(e)):Bl(en,t.stateNode));break;case 4:r=en,i=Bn,en=t.stateNode.containerInfo,Bn=!0,Ct(e,n,t),en=r,Bn=i;break;case 0:case 11:case 14:case 15:if(!sn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Gs(t,n,a),i=i.next}while(i!==r)}Ct(e,n,t);break;case 1:if(!sn&&(Lr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){De(t,n,l)}Ct(e,n,t);break;case 21:Ct(e,n,t);break;case 22:t.mode&1?(sn=(r=sn)||t.memoizedState!==null,Ct(e,n,t),sn=r):Ct(e,n,t);break;default:Ct(e,n,t)}}function Pd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zv),n.forEach(function(r){var i=Xv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Fn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:en=l.stateNode,Bn=!1;break e;case 3:en=l.stateNode.containerInfo,Bn=!0;break e;case 4:en=l.stateNode.containerInfo,Bn=!0;break e}l=l.return}if(en===null)throw Error(V(160));lp(o,a,i),en=null,Bn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){De(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)sp(n,e),n=n.sibling}function sp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fn(n,e),Kn(e),r&4){try{$i(3,e,e.return),el(3,e)}catch(C){De(e,e.return,C)}try{$i(5,e,e.return)}catch(C){De(e,e.return,C)}}break;case 1:Fn(n,e),Kn(e),r&512&&t!==null&&Lr(t,t.return);break;case 5:if(Fn(n,e),Kn(e),r&512&&t!==null&&Lr(t,t.return),e.flags&32){var i=e.stateNode;try{Qi(i,"")}catch(C){De(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&If(i,o),xs(l,a);var u=xs(l,o);for(a=0;a<s.length;a+=2){var h=s[a],f=s[a+1];h==="style"?Lf(i,f):h==="dangerouslySetInnerHTML"?Rf(i,f):h==="children"?Qi(i,f):Su(i,h,f,u)}switch(l){case"input":ys(i,o);break;case"textarea":Pf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var M=o.value;M!=null?Vr(i,!!o.multiple,M,!1):m!==!!o.multiple&&(o.defaultValue!=null?Vr(i,!!o.multiple,o.defaultValue,!0):Vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[io]=o}catch(C){De(e,e.return,C)}}break;case 6:if(Fn(n,e),Kn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){De(e,e.return,C)}}break;case 3:if(Fn(n,e),Kn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Zi(n.containerInfo)}catch(C){De(e,e.return,C)}break;case 4:Fn(n,e),Kn(e);break;case 13:Fn(n,e),Kn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ec=Ne())),r&4&&Pd(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(sn=(u=sn)||h,Fn(n,e),sn=u):Fn(n,e),Kn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(f=j=h;j!==null;){switch(m=j,M=m.child,m.tag){case 0:case 11:case 14:case 15:$i(4,m,m.return);break;case 1:Lr(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(C){De(r,t,C)}}break;case 5:Lr(m,m.return);break;case 22:if(m.memoizedState!==null){Rd(f);continue}}M!==null?(M.return=m,j=M):Rd(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Nf("display",a))}catch(C){De(e,e.return,C)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(C){De(e,e.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(n,e),Kn(e),r&4&&Pd(e);break;case 21:break;default:Fn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ap(t)){var r=t;break e}t=t.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qi(i,""),r.flags&=-33);var o=Id(e);Zs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Id(e);Xs(e,l,a);break;default:throw Error(V(161))}}catch(s){De(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hv(e,n,t){j=e,up(e)}function up(e,n,t){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Qo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||sn;l=Qo;var u=sn;if(Qo=a,(sn=s)&&!u)for(j=i;j!==null;)a=j,s=a.child,a.tag===22&&a.memoizedState!==null?Nd(i):s!==null?(s.return=a,j=s):Nd(i);for(;o!==null;)j=o,up(o),o=o.sibling;j=i,Qo=l,sn=u}Dd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):Dd(e)}}function Dd(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:sn||el(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!sn)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Un(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&pd(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}pd(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Zi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}sn||n.flags&512&&Js(n)}catch(m){De(n,n.return,m)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function Rd(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function Nd(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{el(4,n)}catch(s){De(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){De(n,i,s)}}var o=n.return;try{Js(n)}catch(s){De(n,o,s)}break;case 5:var a=n.return;try{Js(n)}catch(s){De(n,a,s)}}}catch(s){De(n,n.return,s)}if(n===e){j=null;break}var l=n.sibling;if(l!==null){l.return=n.return,j=l;break}j=n.return}}var Wv=Math.ceil,_a=bt.ReactCurrentDispatcher,Xu=bt.ReactCurrentOwner,Rn=bt.ReactCurrentBatchConfig,de=0,Je=null,ze=null,tn=0,Sn=0,_r=Wt(0),Ke=0,co=null,fr=0,nl=0,Zu=0,zi=null,mn=null,ec=0,Xr=1/0,lt=null,Oa=!1,eu=null,Ft=null,Go=!1,Dt=null,Fa=0,ji=0,nu=null,ua=-1,ca=0;function dn(){return de&6?Ne():ua!==-1?ua:ua=Ne()}function Vt(e){return e.mode&1?de&2&&tn!==0?tn&-tn:Av.transition!==null?(ca===0&&(ca=qf()),ca):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Zf(e.type)),e):1}function Hn(e,n,t,r){if(50<ji)throw ji=0,nu=null,Error(V(185));po(e,t,r),(!(de&2)||e!==Je)&&(e===Je&&(!(de&2)&&(nl|=t),Ke===4&&At(e,tn)),wn(e,r),t===1&&de===0&&!(n.mode&1)&&(Xr=Ne()+500,Ja&&qt()))}function wn(e,n){var t=e.callbackNode;Ag(e,n);var r=ba(e,e===Je?tn:0);if(r===0)t!==null&&zc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&zc(t),n===1)e.tag===0?Mv(Ld.bind(null,e)):yh(Ld.bind(null,e)),xv(function(){!(de&6)&&qt()}),t=null;else{switch(Kf(r)){case 1:t=Tu;break;case 4:t=Hf;break;case 16:t=wa;break;case 536870912:t=Wf;break;default:t=wa}t=vp(t,cp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function cp(e,n){if(ua=-1,ca=0,de&6)throw Error(V(327));var t=e.callbackNode;if(jr()&&e.callbackNode!==t)return null;var r=ba(e,e===Je?tn:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Va(e,r);else{n=r;var i=de;de|=2;var o=fp();(Je!==e||tn!==n)&&(lt=null,Xr=Ne()+500,lr(e,n));do try{Yv();break}catch(l){dp(e,l)}while(1);Uu(),_a.current=o,de=i,ze!==null?n=0:(Je=null,tn=0,n=Ke)}if(n!==0){if(n===2&&(i=As(e),i!==0&&(r=i,n=tu(e,i))),n===1)throw t=co,lr(e,0),At(e,r),wn(e,Ne()),t;if(n===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!qv(i)&&(n=Va(e,r),n===2&&(o=As(e),o!==0&&(r=o,n=tu(e,o))),n===1))throw t=co,lr(e,0),At(e,r),wn(e,Ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(V(345));case 2:nr(e,mn,lt);break;case 3:if(At(e,r),(r&130023424)===r&&(n=ec+500-Ne(),10<n)){if(ba(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Os(nr.bind(null,e,mn,lt),n);break}nr(e,mn,lt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-jn(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wv(r/1960))-r,10<r){e.timeoutHandle=Os(nr.bind(null,e,mn,lt),r);break}nr(e,mn,lt);break;case 5:nr(e,mn,lt);break;default:throw Error(V(329))}}}return wn(e,Ne()),e.callbackNode===t?cp.bind(null,e):null}function tu(e,n){var t=zi;return e.current.memoizedState.isDehydrated&&(lr(e,n).flags|=256),e=Va(e,n),e!==2&&(n=mn,mn=t,n!==null&&ru(n)),e}function ru(e){mn===null?mn=e:mn.push.apply(mn,e)}function qv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Wn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function At(e,n){for(n&=~Zu,n&=~nl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-jn(n),r=1<<t;e[t]=-1,n&=~r}}function Ld(e){if(de&6)throw Error(V(327));jr();var n=ba(e,0);if(!(n&1))return wn(e,Ne()),null;var t=Va(e,n);if(e.tag!==0&&t===2){var r=As(e);r!==0&&(n=r,t=tu(e,r))}if(t===1)throw t=co,lr(e,0),At(e,n),wn(e,Ne()),t;if(t===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,nr(e,mn,lt),wn(e,Ne()),null}function nc(e,n){var t=de;de|=1;try{return e(n)}finally{de=t,de===0&&(Xr=Ne()+500,Ja&&qt())}}function hr(e){Dt!==null&&Dt.tag===0&&!(de&6)&&jr();var n=de;de|=1;var t=Rn.transition,r=ge;try{if(Rn.transition=null,ge=1,e)return e()}finally{ge=r,Rn.transition=t,de=n,!(de&6)&&qt()}}function tc(){Sn=_r.current,xe(_r)}function lr(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,kv(t)),ze!==null)for(t=ze.return;t!==null;){var r=t;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ea();break;case 3:Gr(),xe(vn),xe(un),Wu();break;case 5:Hu(r);break;case 4:Gr();break;case 13:xe(Ae);break;case 19:xe(Ae);break;case 10:Bu(r.type._context);break;case 22:case 23:tc()}t=t.return}if(Je=e,ze=e=Ut(e.current,null),tn=Sn=n,Ke=0,co=null,Zu=nl=fr=0,mn=zi=null,rr!==null){for(n=0;n<rr.length;n++)if(t=rr[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}rr=null}return e}function dp(e,n){do{var t=ze;try{if(Uu(),aa.current=La,Na){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Na=!1}if(dr=0,Ge=qe=Ie=null,Bi=!1,lo=0,Xu.current=null,t===null||t.return===null){Ke=1,co=n,ze=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=tn,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var M=Sd(a);if(M!==null){M.flags&=-257,kd(M,a,l,o,n),M.mode&1&&bd(o,u,n),n=M,s=u;var k=n.updateQueue;if(k===null){var C=new Set;C.add(s),n.updateQueue=C}else k.add(s);break e}else{if(!(n&1)){bd(o,u,n),rc();break e}s=Error(V(426))}}else if(Ee&&l.mode&1){var v=Sd(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),kd(v,a,l,o,n),Fu(Jr(s,l));break e}}o=s=Jr(s,l),Ke!==4&&(Ke=2),zi===null?zi=[o]:zi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=Yh(o,s,n);hd(o,g);break e;case 1:l=s;var d=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ft===null||!Ft.has(w)))){o.flags|=65536,n&=-n,o.lanes|=n;var I=Qh(o,l,n);hd(o,I);break e}}o=o.return}while(o!==null)}pp(t)}catch(E){n=E,ze===t&&t!==null&&(ze=t=t.return);continue}break}while(1)}function fp(){var e=_a.current;return _a.current=La,e===null?La:e}function rc(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Je===null||!(fr&268435455)&&!(nl&268435455)||At(Je,tn)}function Va(e,n){var t=de;de|=2;var r=fp();(Je!==e||tn!==n)&&(lt=null,lr(e,n));do try{Kv();break}catch(i){dp(e,i)}while(1);if(Uu(),de=t,_a.current=r,ze!==null)throw Error(V(261));return Je=null,tn=0,Ke}function Kv(){for(;ze!==null;)hp(ze)}function Yv(){for(;ze!==null&&!wg();)hp(ze)}function hp(e){var n=gp(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,n===null?pp(e):ze=n,Xu.current=null}function pp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=$v(t,n),t!==null){t.flags&=32767,ze=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,ze=null;return}}else if(t=Bv(t,n,Sn),t!==null){ze=t;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Ke===0&&(Ke=5)}function nr(e,n,t){var r=ge,i=Rn.transition;try{Rn.transition=null,ge=1,Qv(e,n,t,r)}finally{Rn.transition=i,ge=r}return null}function Qv(e,n,t,r){do jr();while(Dt!==null);if(de&6)throw Error(V(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ig(e,o),e===Je&&(ze=Je=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Go||(Go=!0,vp(wa,function(){return jr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Rn.transition,Rn.transition=null;var a=ge;ge=1;var l=de;de|=4,Xu.current=null,jv(e,t),sp(t,e),mv(Ls),Sa=!!Ns,Ls=Ns=null,e.current=t,Hv(t),bg(),de=l,ge=a,Rn.transition=o}else e.current=t;if(Go&&(Go=!1,Dt=e,Fa=i),o=e.pendingLanes,o===0&&(Ft=null),xg(t.stateNode),wn(e,Ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oa)throw Oa=!1,e=eu,eu=null,e;return Fa&1&&e.tag!==0&&jr(),o=e.pendingLanes,o&1?e===nu?ji++:(ji=0,nu=e):ji=0,qt(),null}function jr(){if(Dt!==null){var e=Kf(Fa),n=Rn.transition,t=ge;try{if(Rn.transition=null,ge=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Fa=0,de&6)throw Error(V(331));var i=de;for(de|=4,j=e.current;j!==null;){var o=j,a=o.child;if(j.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:$i(8,h,o)}var f=h.child;if(f!==null)f.return=h,j=f;else for(;j!==null;){h=j;var m=h.sibling,M=h.return;if(op(h),h===u){j=null;break}if(m!==null){m.return=M,j=m;break}j=M}}}var k=o.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var v=C.sibling;C.sibling=null,C=v}while(C!==null)}}j=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,j=a;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$i(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,j=g;break e}j=o.return}}var d=e.current;for(j=d;j!==null;){a=j;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,j=w;else e:for(a=d;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:el(9,l)}}catch(E){De(l,l.return,E)}if(l===a){j=null;break e}var I=l.sibling;if(I!==null){I.return=l.return,j=I;break e}j=l.return}}if(de=i,qt(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(qa,e)}catch{}r=!0}return r}finally{ge=t,Rn.transition=n}}return!1}function _d(e,n,t){n=Jr(t,n),n=Yh(e,n,1),e=Ot(e,n,1),n=dn(),e!==null&&(po(e,1,n),wn(e,n))}function De(e,n,t){if(e.tag===3)_d(e,e,t);else for(;n!==null;){if(n.tag===3){_d(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Jr(t,e),e=Qh(n,e,1),n=Ot(n,e,1),e=dn(),n!==null&&(po(n,1,e),wn(n,e));break}}n=n.return}}function Gv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=dn(),e.pingedLanes|=e.suspendedLanes&t,Je===e&&(tn&t)===t&&(Ke===4||Ke===3&&(tn&130023424)===tn&&500>Ne()-ec?lr(e,0):Zu|=t),wn(e,n)}function mp(e,n){n===0&&(e.mode&1?(n=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):n=1);var t=dn();e=yt(e,n),e!==null&&(po(e,n,t),wn(e,t))}function Jv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),mp(e,t)}function Xv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(n),mp(e,t)}var gp;gp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||vn.current)gn=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return gn=!1,Uv(e,n,t);gn=!!(e.flags&131072)}else gn=!1,Ee&&n.flags&1048576&&wh(n,Aa,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;sa(e,n),e=n.pendingProps;var i=Kr(n,un.current);zr(n,t),i=Ku(null,n,r,e,i,t);var o=Yu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,yn(r)?(o=!0,Ta(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zu(n),i.updater=Xa,n.stateNode=i,i._reactInternals=n,js(n,r,e,t),n=qs(null,n,r,!0,o,t)):(n.tag=0,Ee&&o&&_u(n),cn(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(sa(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=e0(r),e=Un(r,e),i){case 0:n=Ws(null,n,r,e,t);break e;case 1:n=Ed(null,n,r,e,t);break e;case 11:n=xd(null,n,r,e,t);break e;case 14:n=Cd(null,n,r,Un(r.type,e),t);break e}throw Error(V(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Un(r,i),Ws(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Un(r,i),Ed(e,n,r,i,t);case 3:e:{if(Zh(n),e===null)throw Error(V(387));r=n.pendingProps,o=n.memoizedState,i=o.element,xh(e,n),Da(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Jr(Error(V(423)),n),n=Td(e,n,r,t,i);break e}else if(r!==i){i=Jr(Error(V(424)),n),n=Td(e,n,r,t,i);break e}else for(kn=_t(n.stateNode.containerInfo.firstChild),xn=n,Ee=!0,$n=null,t=Mh(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Yr(),r===i){n=wt(e,n,t);break e}cn(e,n,r,t)}n=n.child}return n;case 5:return Ah(n),e===null&&Bs(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_s(r,i)?a=null:o!==null&&_s(r,o)&&(n.flags|=32),Xh(e,n),cn(e,n,a,t),n.child;case 6:return e===null&&Bs(n),null;case 13:return ep(e,n,t);case 4:return ju(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Qr(n,null,r,t):cn(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Un(r,i),xd(e,n,r,i,t);case 7:return cn(e,n,n.pendingProps,t),n.child;case 8:return cn(e,n,n.pendingProps.children,t),n.child;case 12:return cn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,Se(Ia,r._currentValue),r._currentValue=a,o!==null)if(Wn(o.value,a)){if(o.children===i.children&&!vn.current){n=wt(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=pt(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),$s(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),$s(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}cn(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,zr(n,t),i=Nn(i),r=r(i),n.flags|=1,cn(e,n,r,t),n.child;case 14:return r=n.type,i=Un(r,n.pendingProps),i=Un(r.type,i),Cd(e,n,r,i,t);case 15:return Gh(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Un(r,i),sa(e,n),n.tag=1,yn(r)?(e=!0,Ta(n)):e=!1,zr(n,t),Eh(n,r,i),js(n,r,i,t),qs(null,n,r,!0,e,t);case 19:return np(e,n,t);case 22:return Jh(e,n,t)}throw Error(V(156,n.tag))};function vp(e,n){return jf(e,n)}function Zv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,n,t,r){return new Zv(e,n,t,r)}function ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e0(e){if(typeof e=="function")return ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xu)return 11;if(e===Cu)return 14}return 2}function Ut(e,n){var t=e.alternate;return t===null?(t=Dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function da(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")ic(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Er:return sr(t.children,i,o,n);case ku:a=8,i|=8;break;case hs:return e=Dn(12,t,n,i|2),e.elementType=hs,e.lanes=o,e;case ps:return e=Dn(13,t,n,i),e.elementType=ps,e.lanes=o,e;case ms:return e=Dn(19,t,n,i),e.elementType=ms,e.lanes=o,e;case Tf:return tl(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cf:a=10;break e;case Ef:a=9;break e;case xu:a=11;break e;case Cu:a=14;break e;case Et:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return n=Dn(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function sr(e,n,t,r){return e=Dn(7,e,r,n),e.lanes=t,e}function tl(e,n,t,r){return e=Dn(22,e,r,n),e.elementType=Tf,e.lanes=t,e.stateNode={isHidden:!1},e}function Yl(e,n,t){return e=Dn(6,e,null,n),e.lanes=t,e}function Ql(e,n,t){return n=Dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function n0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oc(e,n,t,r,i,o,a,l,s){return e=new n0(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Dn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(o),e}function t0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function yp(e){if(!e)return zt;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(V(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(yn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(V(171))}if(e.tag===1){var t=e.type;if(yn(t))return vh(e,t,n)}return n}function wp(e,n,t,r,i,o,a,l,s){return e=oc(t,r,!0,e,i,o,a,l,s),e.context=yp(null),t=e.current,r=dn(),i=Vt(t),o=pt(r,i),o.callback=n??null,Ot(t,o,i),e.current.lanes=i,po(e,i,r),wn(e,r),e}function rl(e,n,t,r){var i=n.current,o=dn(),a=Vt(i);return t=yp(t),n.context===null?n.context=t:n.pendingContext=t,n=pt(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Ot(i,n,a),e!==null&&(Hn(e,i,a,o),oa(e,i,a)),a}function Ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Od(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ac(e,n){Od(e,n),(e=e.alternate)&&Od(e,n)}function r0(){return null}var bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}il.prototype.render=lc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(V(409));rl(e,n,null,null)};il.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;hr(function(){rl(null,e,null,null)}),n[vt]=null}};function il(e){this._internalRoot=e}il.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Mt.length&&n!==0&&n<Mt[t].priority;t++);Mt.splice(t,0,e),t===0&&Xf(e)}};function sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function i0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ua(a);o.call(u)}}var a=wp(n,r,e,0,null,!1,!1,"",Fd);return e._reactRootContainer=a,e[vt]=a.current,to(e.nodeType===8?e.parentNode:e),hr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ua(s);l.call(u)}}var s=oc(e,0,!1,null,null,!1,!1,"",Fd);return e._reactRootContainer=s,e[vt]=s.current,to(e.nodeType===8?e.parentNode:e),hr(function(){rl(n,s,t,r)}),s}function al(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ua(a);l.call(s)}}rl(n,a,e,i)}else a=i0(t,n,e,i,r);return Ua(a)}Yf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ri(n.pendingLanes);t!==0&&(Mu(n,t|1),wn(n,Ne()),!(de&6)&&(Xr=Ne()+500,qt()))}break;case 13:hr(function(){var r=yt(e,1);if(r!==null){var i=dn();Hn(r,e,1,i)}}),ac(e,1)}};Au=function(e){if(e.tag===13){var n=yt(e,134217728);if(n!==null){var t=dn();Hn(n,e,134217728,t)}ac(e,134217728)}};Qf=function(e){if(e.tag===13){var n=Vt(e),t=yt(e,n);if(t!==null){var r=dn();Hn(t,e,n,r)}ac(e,n)}};Gf=function(){return ge};Jf=function(e,n){var t=ge;try{return ge=e,n()}finally{ge=t}};Es=function(e,n,t){switch(n){case"input":if(ys(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ga(r);if(!i)throw Error(V(90));Af(r),ys(r,i)}}}break;case"textarea":Pf(e,t);break;case"select":n=t.value,n!=null&&Vr(e,!!t.multiple,n,!1)}};Ff=nc;Vf=hr;var o0={usingClientEntryPoint:!1,Events:[go,Ir,Ga,_f,Of,nc]},Ci={findFiberByHostInstance:tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a0={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$f(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||r0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{qa=Jo.inject(a0),Jn=Jo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;En.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(n))throw Error(V(200));return t0(e,n,null,t)};En.createRoot=function(e,n){if(!sc(e))throw Error(V(299));var t=!1,r="",i=bp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=oc(e,1,!1,null,null,t,!1,r,i),e[vt]=n.current,to(e.nodeType===8?e.parentNode:e),new lc(n)};En.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=$f(n),e=e===null?null:e.stateNode,e};En.flushSync=function(e){return hr(e)};En.hydrate=function(e,n,t){if(!ol(n))throw Error(V(200));return al(null,e,n,!0,t)};En.hydrateRoot=function(e,n,t){if(!sc(e))throw Error(V(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=bp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=wp(n,null,e,1,t??null,i,!1,o,a),e[vt]=n.current,to(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new il(n)};En.render=function(e,n,t){if(!ol(n))throw Error(V(200));return al(null,e,n,!1,t)};En.unmountComponentAtNode=function(e){if(!ol(e))throw Error(V(40));return e._reactRootContainer?(hr(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};En.unstable_batchedUpdates=nc;En.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ol(t))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return al(e,n,t,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=En})(rg);var Vd=ma;cs.createRoot=Vd.createRoot,cs.hydrateRoot=Vd.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function se(){return se=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},se.apply(this,arguments)}var $e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($e||($e={}));const Ud="popstate";function l0(e){e===void 0&&(e={});function n(r,i){let{pathname:o,search:a,hash:l}=r.location;return fo("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:tt(i)}return u0(n,t,null,e)}function re(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Zr(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function s0(){return Math.random().toString(36).substr(2,8)}function Bd(e,n){return{usr:e.state,key:e.key,idx:n}}function fo(e,n,t,r){return t===void 0&&(t=null),se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?St(n):n,{state:t,key:n&&n.key||r||s0()})}function tt(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function St(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function u0(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=$e.Pop,s=null,u=h();u==null&&(u=0,a.replaceState(se({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function f(){l=$e.Pop;let v=h(),g=v==null?null:v-u;u=v,s&&s({action:l,location:C.location,delta:g})}function m(v,g){l=$e.Push;let d=fo(C.location,v,g);t&&t(d,v),u=h()+1;let w=Bd(d,u),I=C.createHref(d);try{a.pushState(w,"",I)}catch{i.location.assign(I)}o&&s&&s({action:l,location:C.location,delta:1})}function M(v,g){l=$e.Replace;let d=fo(C.location,v,g);t&&t(d,v),u=h();let w=Bd(d,u),I=C.createHref(d);a.replaceState(w,"",I),o&&s&&s({action:l,location:C.location,delta:0})}function k(v){let g=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof v=="string"?v:tt(v);return re(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let C={get action(){return l},get location(){return e(i,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ud,f),s=v,()=>{i.removeEventListener(Ud,f),s=null}},createHref(v){return n(i,v)},createURL:k,encodeLocation(v){let g=k(v);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:M,go(v){return a.go(v)}};return C}var We;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(We||(We={}));const c0=new Set(["lazy","caseSensitive","path","id","index","children"]);function d0(e){return e.index===!0}function Sp(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...t,o],l=typeof i.id=="string"?i.id:a.join("-");if(re(i.index!==!0||!i.children,"Cannot specify children on an index route"),re(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),d0(i)){let s=se({},i,{hasErrorBoundary:n(i),id:l});return r[l]=s,s}else{let s=se({},i,{id:l,hasErrorBoundary:n(i),children:void 0});return r[l]=s,i.children&&(s.children=Sp(i.children,n,a,r)),s}})}function Or(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?St(n):n,i=yo(r.pathname||"/",t);if(i==null)return null;let o=kp(e);f0(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=S0(o[l],C0(i));return a}function kp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(re(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Zn([r,s.relativePath]),h=t.concat(s);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kp(o.children,n,h,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:w0(u,o.index),routesMeta:h})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of xp(o.path))i(o,a,s)}),n}function xp(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=xp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function f0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:b0(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const h0=/^:\w+$/,p0=3,m0=2,g0=1,v0=10,y0=-2,$d=e=>e==="*";function w0(e,n){let t=e.split("/"),r=t.length;return t.some($d)&&(r+=y0),n&&(r+=m0),t.filter(i=>!$d(i)).reduce((i,o)=>i+(h0.test(o)?p0:o===""?g0:v0),r)}function b0(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function S0(e,n){let{routesMeta:t}=e,r={},i="/",o=[];for(let a=0;a<t.length;++a){let l=t[a],s=a===t.length-1,u=i==="/"?n:n.slice(i.length)||"/",h=k0({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!h)return null;Object.assign(r,h.params);let f=l.route;o.push({params:r,pathname:Zn([i,h.pathname]),pathnameBase:A0(Zn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=Zn([i,h.pathnameBase]))}return o}function k0(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=x0(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,f)=>{if(h==="*"){let m=l[f]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[h]=E0(l[f]||"",h),u},{}),pathname:o,pathnameBase:a,pattern:e}}function x0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Zr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function C0(e){try{return decodeURI(e)}catch(n){return Zr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function E0(e,n){try{return decodeURIComponent(e)}catch(t){return Zr(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function yo(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function T0(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?St(e):e;return{pathname:t?t.startsWith("/")?t:M0(t,n):n,search:I0(r),hash:P0(i)}}function M0(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Gl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ll(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function uc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=St(e):(i=se({},e),re(!i.pathname||!i.pathname.includes("?"),Gl("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Gl("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Gl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=t;else{let f=n.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?n[f]:"/"}let s=T0(i,l),u=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const Zn=e=>e.join("/").replace(/\/\/+/g,"/"),A0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,P0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class cc{constructor(n,t,r,i){i===void 0&&(i=!1),this.status=n,this.statusText=t||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Cp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ep=["post","put","patch","delete"],D0=new Set(Ep),R0=["get",...Ep],N0=new Set(R0),L0=new Set([301,302,303,307,308]),_0=new Set([307,308]),Jl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},O0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},zd={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Tp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",F0=!Mp,V0=e=>!!e.hasErrorBoundary;function U0(e){re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n=e.detectErrorBoundary||V0,t={},r=Sp(e.routes,n,void 0,t),i,o=se({v7_normalizeFormMethod:!1},e.future),a=null,l=new Set,s=null,u=null,h=null,f=e.hydrationData!=null,m=Or(r,e.history.location,e.basename),M=null;if(m==null){let P=Qn(404,{pathname:e.history.location.pathname}),{matches:R,route:O}=Qd(r);m=R,M={[O.id]:P}}let k=!m.some(P=>P.route.lazy)&&(!m.some(P=>P.route.loader)||e.hydrationData!=null),C,v={historyAction:e.history.action,location:e.history.location,matches:m,initialized:k,navigation:Jl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||M,fetchers:new Map,blockers:new Map},g=$e.Pop,d=!1,w,I=!1,E=!1,N=[],D=[],L=new Map,G=0,W=-1,oe=new Map,he=new Set,ve=new Map,Oe=new Map,Te=new Map,Ze=!1;function on(){return a=e.history.listen(P=>{let{action:R,location:O,delta:H}=P;if(Ze){Ze=!1;return}Zr(Te.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=ui({currentLocation:v.location,nextLocation:O,historyAction:R});if(K&&H!=null){Ze=!0,e.history.go(H*-1),Qt(K,{state:"blocked",location:O,proceed(){Qt(K,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(H)},reset(){it(K),q({blockers:new Map(C.state.blockers)})}});return}return Fe(R,O)}),v.initialized||Fe($e.Pop,v.location),C}function z(){a&&a(),l.clear(),w&&w.abort(),v.fetchers.forEach((P,R)=>Mn(R)),v.blockers.forEach((P,R)=>it(R))}function X(P){return l.add(P),()=>l.delete(P)}function q(P){v=se({},v,P),l.forEach(R=>R(v))}function ee(P,R){var O,H;let K=v.actionData!=null&&v.navigation.formMethod!=null&&st(v.navigation.formMethod)&&v.navigation.state==="loading"&&((O=P.state)==null?void 0:O._isRedirect)!==!0,Z;R.actionData?Object.keys(R.actionData).length>0?Z=R.actionData:Z=null:K?Z=v.actionData:Z=null;let ne=R.loaderData?Yd(v.loaderData,R.loaderData,R.matches||[],R.errors):v.loaderData;for(let[Q]of Te)it(Q);let te=d===!0||v.navigation.formMethod!=null&&st(v.navigation.formMethod)&&((H=P.state)==null?void 0:H._isRedirect)!==!0;i&&(r=i,i=void 0),q(se({},R,{actionData:Z,loaderData:ne,historyAction:g,location:P,initialized:!0,navigation:Jl,revalidation:"idle",restoreScrollPosition:ci(P,R.matches||v.matches),preventScrollReset:te,blockers:new Map(v.blockers)})),I||g===$e.Pop||(g===$e.Push?e.history.push(P,P.state):g===$e.Replace&&e.history.replace(P,P.state)),g=$e.Pop,d=!1,I=!1,E=!1,N=[],D=[]}async function be(P,R){if(typeof P=="number"){e.history.go(P);return}let{path:O,submission:H,error:K}=jd(P,o,R),Z=v.location,ne=fo(v.location,O,R&&R.state);ne=se({},ne,e.history.encodeLocation(ne));let te=R&&R.replace!=null?R.replace:void 0,Q=$e.Push;te===!0?Q=$e.Replace:te===!1||H!=null&&st(H.formMethod)&&H.formAction===v.location.pathname+v.location.search&&(Q=$e.Replace);let pe=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,ce=ui({currentLocation:Z,nextLocation:ne,historyAction:Q});if(ce){Qt(ce,{state:"blocked",location:ne,proceed(){Qt(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:ne}),be(P,R)},reset(){it(ce),q({blockers:new Map(v.blockers)})}});return}return await Fe(Q,ne,{submission:H,pendingError:K,preventScrollReset:pe,replace:R&&R.replace})}function _n(){if(oi(),q({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Fe(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Fe(g||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Fe(P,R,O){w&&w.abort(),w=null,g=P,I=(O&&O.startUninterruptedRevalidation)===!0,Io(v.location,v.matches),d=(O&&O.preventScrollReset)===!0;let H=i||r,K=O&&O.overrideNavigation,Z=Or(H,R,e.basename);if(!Z){let Ue=Qn(404,{pathname:R.pathname}),{matches:He,route:pn}=Qd(H);Sr(),ee(R,{matches:He,loaderData:{},errors:{[pn.id]:Ue}});return}if(H0(v.location,R)&&!(O&&O.submission&&st(O.submission.formMethod))){ee(R,{matches:Z});return}w=new AbortController;let ne=Ti(e.history,R,w.signal,O&&O.submission),te,Q;if(O&&O.pendingError)Q={[Fr(Z).route.id]:O.pendingError};else if(O&&O.submission&&st(O.submission.formMethod)){let Ue=await ye(ne,R,O.submission,Z,{replace:O.replace});if(Ue.shortCircuited)return;te=Ue.pendingActionData,Q=Ue.pendingActionError,K=se({state:"loading",location:R},O.submission),ne=new Request(ne.url,{signal:ne.signal})}let{shortCircuited:pe,loaderData:ce,errors:Ve}=await Ce(ne,R,Z,K,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,te,Q);pe||(w=null,ee(R,se({matches:Z},te?{actionData:te}:{},{loaderData:ce,errors:Ve})))}async function ye(P,R,O,H,K){oi();let Z=se({state:"submitting",location:R},O);q({navigation:Z});let ne,te=iu(H,R);if(!te.route.action&&!te.route.lazy)ne={type:We.error,error:Qn(405,{method:P.method,pathname:R.pathname,routeId:te.route.id})};else if(ne=await Ei("action",P,te,H,t,n,C.basename),P.signal.aborted)return{shortCircuited:!0};if(Hr(ne)){let Q;return K&&K.replace!=null?Q=K.replace:Q=ne.location===v.location.pathname+v.location.search,await Yt(v,ne,{submission:O,replace:Q}),{shortCircuited:!0}}if(Hi(ne)){let Q=Fr(H,te.route.id);return(K&&K.replace)!==!0&&(g=$e.Push),{pendingActionData:{},pendingActionError:{[Q.route.id]:ne.error}}}if(or(ne))throw Qn(400,{type:"defer-action"});return{pendingActionData:{[te.route.id]:ne.data}}}async function Ce(P,R,O,H,K,Z,ne,te,Q){let pe=H;pe||(pe=se({state:"loading",location:R,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},K));let ce=K||Z?K||Z:pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0,Ve=i||r,[Ue,He]=Hd(e.history,v,O,ce,R,E,N,D,ve,Ve,e.basename,te,Q);if(Sr(Qe=>!(O&&O.some(bn=>bn.route.id===Qe))||Ue&&Ue.some(bn=>bn.route.id===Qe)),Ue.length===0&&He.length===0)return ee(R,se({matches:O,loaderData:{},errors:Q||null},te?{actionData:te}:{})),{shortCircuited:!0};if(!I){He.forEach(bn=>{let ot=v.fetchers.get(bn.key),Xt={state:"loading",data:ot&&ot.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(bn.key,Xt)});let Qe=te||v.actionData;q(se({navigation:pe},Qe?Object.keys(Qe).length===0?{actionData:null}:{actionData:Qe}:{},He.length>0?{fetchers:new Map(v.fetchers)}:{}))}W=++G,He.forEach(Qe=>L.set(Qe.key,w));let{results:pn,loaderResults:Gt,fetcherResults:di}=await Mo(v.matches,O,Ue,He,P);if(P.signal.aborted)return{shortCircuited:!0};He.forEach(Qe=>L.delete(Qe.key));let Jt=Gd(pn);if(Jt)return await Yt(v,Jt,{replace:ne}),{shortCircuited:!0};let{loaderData:xt,errors:fi}=Kd(v,O,Ue,Gt,Q,He,di,Oe);Oe.forEach((Qe,bn)=>{Qe.subscribe(ot=>{(ot||Qe.done)&&Oe.delete(bn)})}),wr();let hi=br(W);return se({loaderData:xt,errors:fi},hi||He.length>0?{fetchers:new Map(v.fetchers)}:{})}function we(P){return v.fetchers.get(P)||O0}function kt(P,R,O,H){if(F0)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");L.has(P)&&yr(P);let Z=Or(i||r,O,e.basename);if(!Z){ai(P,R,Qn(404,{pathname:O}));return}let{path:ne,submission:te}=jd(O,o,H,!0),Q=iu(Z,ne);if(d=(H&&H.preventScrollReset)===!0,te&&st(te.formMethod)){gl(P,R,ne,Q,Z,te);return}ve.set(P,{routeId:R,path:ne}),vl(P,R,ne,Q,Z,te)}async function gl(P,R,O,H,K,Z){if(oi(),ve.delete(P),!H.route.action&&!H.route.lazy){let On=Qn(405,{method:Z.formMethod,pathname:O,routeId:R});ai(P,R,On);return}let ne=v.fetchers.get(P),te=se({state:"submitting"},Z,{data:ne&&ne.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(P,te),q({fetchers:new Map(v.fetchers)});let Q=new AbortController,pe=Ti(e.history,O,Q.signal,Z);L.set(P,Q);let ce=await Ei("action",pe,H,K,t,n,C.basename);if(pe.signal.aborted){L.get(P)===Q&&L.delete(P);return}if(Hr(ce)){L.delete(P),he.add(P);let On=se({state:"loading"},Z,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(P,On),q({fetchers:new Map(v.fetchers)}),Yt(v,ce,{submission:Z,isFetchActionRedirect:!0})}if(Hi(ce)){ai(P,R,ce.error);return}if(or(ce))throw Qn(400,{type:"defer-action"});let Ve=v.navigation.location||v.location,Ue=Ti(e.history,Ve,Q.signal),He=i||r,pn=v.navigation.state!=="idle"?Or(He,v.navigation.location,e.basename):v.matches;re(pn,"Didn't find any matches after fetcher action");let Gt=++G;oe.set(P,Gt);let di=se({state:"loading",data:ce.data},Z,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(P,di);let[Jt,xt]=Hd(e.history,v,pn,Z,Ve,E,N,D,ve,He,e.basename,{[H.route.id]:ce.data},void 0);xt.filter(On=>On.key!==P).forEach(On=>{let pi=On.key,Ro=v.fetchers.get(pi),wl={state:"loading",data:Ro&&Ro.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(pi,wl),L.set(pi,Q)}),q({fetchers:new Map(v.fetchers)});let{results:fi,loaderResults:hi,fetcherResults:Qe}=await Mo(v.matches,pn,Jt,xt,Ue);if(Q.signal.aborted)return;oe.delete(P),L.delete(P),xt.forEach(On=>L.delete(On.key));let bn=Gd(fi);if(bn)return Yt(v,bn);let{loaderData:ot,errors:Xt}=Kd(v,v.matches,Jt,hi,void 0,xt,Qe,Oe),Do={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(P,Do);let yl=br(Gt);v.navigation.state==="loading"&&Gt>W?(re(g,"Expected pending action"),w&&w.abort(),ee(v.navigation.location,{matches:pn,loaderData:ot,errors:Xt,fetchers:new Map(v.fetchers)})):(q(se({errors:Xt,loaderData:Yd(v.loaderData,ot,pn,Xt)},yl?{fetchers:new Map(v.fetchers)}:{})),E=!1)}async function vl(P,R,O,H,K,Z){let ne=v.fetchers.get(P),te=se({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Z,{data:ne&&ne.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(P,te),q({fetchers:new Map(v.fetchers)});let Q=new AbortController,pe=Ti(e.history,O,Q.signal);L.set(P,Q);let ce=await Ei("loader",pe,H,K,t,n,C.basename);if(or(ce)&&(ce=await Dp(ce,pe.signal,!0)||ce),L.get(P)===Q&&L.delete(P),pe.signal.aborted)return;if(Hr(ce)){await Yt(v,ce);return}if(Hi(ce)){let Ue=Fr(v.matches,R);v.fetchers.delete(P),q({fetchers:new Map(v.fetchers),errors:{[Ue.route.id]:ce.error}});return}re(!or(ce),"Unhandled fetcher deferred data");let Ve={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(P,Ve),q({fetchers:new Map(v.fetchers)})}async function Yt(P,R,O){var H;let{submission:K,replace:Z,isFetchActionRedirect:ne}=O===void 0?{}:O;R.revalidate&&(E=!0);let te=fo(P.location,R.location,se({_isRedirect:!0},ne?{_isFetchActionRedirect:!0}:{}));if(re(te,"Expected a location on the redirect navigation"),Tp.test(R.location)&&Mp&&typeof((H=window)==null?void 0:H.location)<"u"){let He=e.history.createURL(R.location),pn=yo(He.pathname,e.basename||"/")==null;if(window.location.origin!==He.origin||pn){Z?window.location.replace(R.location):window.location.assign(R.location);return}}w=null;let Q=Z===!0?$e.Replace:$e.Push,{formMethod:pe,formAction:ce,formEncType:Ve,formData:Ue}=P.navigation;!K&&pe&&ce&&Ue&&Ve&&(K={formMethod:pe,formAction:ce,formEncType:Ve,formData:Ue}),_0.has(R.status)&&K&&st(K.formMethod)?await Fe(Q,te,{submission:se({},K,{formAction:R.location}),preventScrollReset:d}):ne?await Fe(Q,te,{overrideNavigation:{state:"loading",location:te,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:K,preventScrollReset:d}):await Fe(Q,te,{overrideNavigation:{state:"loading",location:te,formMethod:K?K.formMethod:void 0,formAction:K?K.formAction:void 0,formEncType:K?K.formEncType:void 0,formData:K?K.formData:void 0},preventScrollReset:d})}async function Mo(P,R,O,H,K){let Z=await Promise.all([...O.map(Q=>Ei("loader",K,Q,R,t,n,C.basename)),...H.map(Q=>Q.matches&&Q.match?Ei("loader",Ti(e.history,Q.path,K.signal),Q.match,Q.matches,t,n,C.basename):{type:We.error,error:Qn(404,{pathname:Q.path})})]),ne=Z.slice(0,O.length),te=Z.slice(O.length);return await Promise.all([Jd(P,O,ne,K.signal,!1,v.loaderData),Jd(P,H.map(Q=>Q.match),te,K.signal,!0)]),{results:Z,loaderResults:ne,fetcherResults:te}}function oi(){E=!0,N.push(...Sr()),ve.forEach((P,R)=>{L.has(R)&&(D.push(R),yr(R))})}function ai(P,R,O){let H=Fr(v.matches,R);Mn(P),q({errors:{[H.route.id]:O},fetchers:new Map(v.fetchers)})}function Mn(P){L.has(P)&&yr(P),ve.delete(P),oe.delete(P),he.delete(P),v.fetchers.delete(P)}function yr(P){let R=L.get(P);re(R,"Expected fetch controller: "+P),R.abort(),L.delete(P)}function li(P){for(let R of P){let H={state:"idle",data:we(R).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(R,H)}}function wr(){let P=[];for(let R of he){let O=v.fetchers.get(R);re(O,"Expected fetcher: "+R),O.state==="loading"&&(he.delete(R),P.push(R))}li(P)}function br(P){let R=[];for(let[O,H]of oe)if(H<P){let K=v.fetchers.get(O);re(K,"Expected fetcher: "+O),K.state==="loading"&&(yr(O),oe.delete(O),R.push(O))}return li(R),R.length>0}function si(P,R){let O=v.blockers.get(P)||zd;return Te.get(P)!==R&&Te.set(P,R),O}function it(P){v.blockers.delete(P),Te.delete(P)}function Qt(P,R){let O=v.blockers.get(P)||zd;re(O.state==="unblocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="proceeding"||O.state==="blocked"&&R.state==="unblocked"||O.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+R.state),v.blockers.set(P,R),q({blockers:new Map(v.blockers)})}function ui(P){let{currentLocation:R,nextLocation:O,historyAction:H}=P;if(Te.size===0)return;Te.size>1&&Zr(!1,"A router only supports one blocker at a time");let K=Array.from(Te.entries()),[Z,ne]=K[K.length-1],te=v.blockers.get(Z);if(!(te&&te.state==="proceeding")&&ne({currentLocation:R,nextLocation:O,historyAction:H}))return Z}function Sr(P){let R=[];return Oe.forEach((O,H)=>{(!P||P(H))&&(O.cancel(),R.push(H),Oe.delete(H))}),R}function Ao(P,R,O){if(s=P,h=R,u=O||(H=>H.key),!f&&v.navigation===Jl){f=!0;let H=ci(v.location,v.matches);H!=null&&q({restoreScrollPosition:H})}return()=>{s=null,h=null,u=null}}function Io(P,R){if(s&&u&&h){let O=R.map(K=>Xd(K,v.loaderData)),H=u(P,O)||P.key;s[H]=h()}}function ci(P,R){if(s&&u&&h){let O=R.map(Z=>Xd(Z,v.loaderData)),H=u(P,O)||P.key,K=s[H];if(typeof K=="number")return K}return null}function Po(P){i=P}return C={get basename(){return e.basename},get state(){return v},get routes(){return r},initialize:on,subscribe:X,enableScrollRestoration:Ao,navigate:be,fetch:kt,revalidate:_n,createHref:P=>e.history.createHref(P),encodeLocation:P=>e.history.encodeLocation(P),getFetcher:we,deleteFetcher:Mn,dispose:z,getBlocker:si,deleteBlocker:it,_internalFetchControllers:L,_internalActiveDeferreds:Oe,_internalSetRoutes:Po},C}function B0(e){return e!=null&&"formData"in e}function jd(e,n,t,r){r===void 0&&(r=!1);let i=typeof e=="string"?e:tt(e);if(!t||!B0(t))return{path:i};if(t.formMethod&&!K0(t.formMethod))return{path:i,error:Qn(405,{method:t.formMethod})};let o;if(t.formData){let s=t.formMethod||"get";if(o={formMethod:n.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:Pp(i),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},st(o.formMethod))return{path:i,submission:o}}let a=St(i),l=Ip(t.formData);return r&&a.search&&Rp(a.search)&&l.append("index",""),a.search="?"+l,{path:tt(a),submission:o}}function $0(e,n){let t=e;if(n){let r=e.findIndex(i=>i.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function Hd(e,n,t,r,i,o,a,l,s,u,h,f,m){let M=m?Object.values(m)[0]:f?Object.values(f)[0]:void 0,k=e.createURL(n.location),C=e.createURL(i),v=o||k.toString()===C.toString()||k.search!==C.search,g=m?Object.keys(m)[0]:void 0,w=$0(t,g).filter((E,N)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(z0(n.loaderData,n.matches[N],E)||a.some(G=>G===E.route.id))return!0;let D=n.matches[N],L=E;return Wd(E,se({currentUrl:k,currentParams:D.params,nextUrl:C,nextParams:L.params},r,{actionResult:M,defaultShouldRevalidate:v||Ap(D,L)}))}),I=[];return s.forEach((E,N)=>{if(!t.some(W=>W.route.id===E.routeId))return;let D=Or(u,E.path,h);if(!D){I.push(se({key:N},E,{matches:null,match:null}));return}let L=iu(D,E.path);if(l.includes(N)){I.push(se({key:N,matches:D,match:L},E));return}Wd(L,se({currentUrl:k,currentParams:n.matches[n.matches.length-1].params,nextUrl:C,nextParams:t[t.length-1].params},r,{actionResult:M,defaultShouldRevalidate:v}))&&I.push(se({key:N,matches:D,match:L},E))}),[w,I]}function z0(e,n,t){let r=!n||t.route.id!==n.route.id,i=e[t.route.id]===void 0;return r||i}function Ap(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function Wd(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function qd(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=t[e.id];re(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";Zr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!c0.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:n(se({},i)),lazy:void 0})}async function Ei(e,n,t,r,i,o,a,l,s,u){a===void 0&&(a="/"),l===void 0&&(l=!1),s===void 0&&(s=!1);let h,f,m,M=v=>{let g,d=new Promise((w,I)=>g=I);return m=()=>g(),n.signal.addEventListener("abort",m),Promise.race([v({request:n,params:t.params,context:u}),d])};try{let v=t.route[e];if(t.route.lazy)if(v)f=(await Promise.all([M(v),qd(t.route,o,i)]))[0];else if(await qd(t.route,o,i),v=t.route[e],v)f=await M(v);else{if(e==="action")throw Qn(405,{method:n.method,pathname:new URL(n.url).pathname,routeId:t.route.id});return{type:We.data,data:void 0}}else re(v,"Could not find the "+e+' to run on the "'+t.route.id+'" route'),f=await M(v);re(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(v){h=We.error,f=v}finally{m&&n.signal.removeEventListener("abort",m)}if(q0(f)){let v=f.status;if(L0.has(v)){let w=f.headers.get("Location");if(re(w,"Redirects returned/thrown from loaders/actions must have a Location header"),Tp.test(w)){if(!l){let I=new URL(n.url),E=w.startsWith("//")?new URL(I.protocol+w):new URL(w),N=yo(E.pathname,a)!=null;E.origin===I.origin&&N&&(w=E.pathname+E.search+E.hash)}}else{let I=r.slice(0,r.indexOf(t)+1),E=ll(I).map(D=>D.pathnameBase),N=uc(w,E,new URL(n.url).pathname);if(re(tt(N),"Unable to resolve redirect location: "+w),a){let D=N.pathname;N.pathname=D==="/"?a:Zn([a,D])}w=tt(N)}if(l)throw f.headers.set("Location",w),f;return{type:We.redirect,status:v,location:w,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:h||We.data,response:f};let g,d=f.headers.get("Content-Type");return d&&/\bapplication\/json\b/.test(d)?g=await f.json():g=await f.text(),h===We.error?{type:h,error:new cc(v,f.statusText,g),headers:f.headers}:{type:We.data,data:g,statusCode:f.status,headers:f.headers}}if(h===We.error)return{type:h,error:f};if(W0(f)){var k,C;return{type:We.deferred,deferredData:f,statusCode:(k=f.init)==null?void 0:k.status,headers:((C=f.init)==null?void 0:C.headers)&&new Headers(f.init.headers)}}return{type:We.data,data:f}}function Ti(e,n,t,r){let i=e.createURL(Pp(n)).toString(),o={signal:t};if(r&&st(r.formMethod)){let{formMethod:a,formEncType:l,formData:s}=r;o.method=a.toUpperCase(),o.body=l==="application/x-www-form-urlencoded"?Ip(s):s}return new Request(i,o)}function Ip(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,r instanceof File?r.name:r);return n}function j0(e,n,t,r,i){let o={},a=null,l,s=!1,u={};return t.forEach((h,f)=>{let m=n[f].route.id;if(re(!Hr(h),"Cannot handle redirect results in processLoaderData"),Hi(h)){let M=Fr(e,m),k=h.error;r&&(k=Object.values(r)[0],r=void 0),a=a||{},a[M.route.id]==null&&(a[M.route.id]=k),o[m]=void 0,s||(s=!0,l=Cp(h.error)?h.error.status:500),h.headers&&(u[m]=h.headers)}else or(h)?(i.set(m,h.deferredData),o[m]=h.deferredData.data):o[m]=h.data,h.statusCode!=null&&h.statusCode!==200&&!s&&(l=h.statusCode),h.headers&&(u[m]=h.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function Kd(e,n,t,r,i,o,a,l){let{loaderData:s,errors:u}=j0(n,t,r,i,l);for(let h=0;h<o.length;h++){let{key:f,match:m}=o[h];re(a!==void 0&&a[h]!==void 0,"Did not find corresponding fetcher result");let M=a[h];if(Hi(M)){let k=Fr(e.matches,m==null?void 0:m.route.id);u&&u[k.route.id]||(u=se({},u,{[k.route.id]:M.error})),e.fetchers.delete(f)}else if(Hr(M))re(!1,"Unhandled fetcher revalidation redirect");else if(or(M))re(!1,"Unhandled fetcher deferred data");else{let k={state:"idle",data:M.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(f,k)}}return{loaderData:s,errors:u}}function Yd(e,n,t,r){let i=se({},n);for(let o of t){let a=o.route.id;if(n.hasOwnProperty(a)?n[a]!==void 0&&(i[a]=n[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Fr(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Qd(e){let n=e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Qn(e,n){let{pathname:t,routeId:r,method:i,type:o}=n===void 0?{}:n,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&t&&r?l="You made a "+i+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(l="defer() is not supported in actions")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+t+'"'):e===404?(a="Not Found",l='No route matches URL "'+t+'"'):e===405&&(a="Method Not Allowed",i&&t&&r?l="You made a "+i.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new cc(e||500,a,new Error(l),!0)}function Gd(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(Hr(t))return t}}function Pp(e){let n=typeof e=="string"?St(e):e;return tt(se({},n,{hash:""}))}function H0(e,n){return e.pathname===n.pathname&&e.search===n.search&&e.hash!==n.hash}function or(e){return e.type===We.deferred}function Hi(e){return e.type===We.error}function Hr(e){return(e&&e.type)===We.redirect}function W0(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function q0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function K0(e){return N0.has(e.toLowerCase())}function st(e){return D0.has(e.toLowerCase())}async function Jd(e,n,t,r,i,o){for(let a=0;a<t.length;a++){let l=t[a],s=n[a];if(!s)continue;let u=e.find(f=>f.route.id===s.route.id),h=u!=null&&!Ap(u,s)&&(o&&o[s.route.id])!==void 0;or(l)&&(i||h)&&await Dp(l,r,i).then(f=>{f&&(t[a]=f||t[a])})}}async function Dp(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:We.data,data:e.deferredData.unwrappedData}}catch(i){return{type:We.error,error:i}}return{type:We.data,data:e.deferredData.data}}}function Rp(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function Xd(e,n){let{route:t,pathname:r,params:i}=e;return{id:t.id,pathname:r,params:i,data:n[t.id],handle:t.handle}}function iu(e,n){let t=typeof n=="string"?St(n).search:n.search;if(e[e.length-1].route.index&&Rp(t||""))return e[e.length-1];let r=ll(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Y0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const Q0=typeof Object.is=="function"?Object.is:Y0,{useState:G0,useEffect:J0,useLayoutEffect:X0,useDebugValue:Z0}=Wr;function ey(e,n,t){const r=n(),[{inst:i},o]=G0({inst:{value:r,getSnapshot:n}});return X0(()=>{i.value=r,i.getSnapshot=n,Xl(i)&&o({inst:i})},[e,r,n]),J0(()=>(Xl(i)&&o({inst:i}),e(()=>{Xl(i)&&o({inst:i})})),[e]),Z0(r),r}function Xl(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!Q0(t,r)}catch{return!0}}function ny(e,n,t){return n()}const ty=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ry=!ty,iy=ry?ny:ey,oy="useSyncExternalStore"in Wr?(e=>e.useSyncExternalStore)(Wr):iy,sl=y.createContext(null),dc=y.createContext(null),ri=y.createContext(null),ul=y.createContext(null),Kt=y.createContext({outlet:null,matches:[]}),Np=y.createContext(null);function ou(){return ou=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ou.apply(this,arguments)}function ay(e,n){let{relative:t}=n===void 0?{}:n;wo()||re(!1);let{basename:r,navigator:i}=y.useContext(ri),{hash:o,pathname:a,search:l}=fc(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:Zn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function wo(){return y.useContext(ul)!=null}function bo(){return wo()||re(!1),y.useContext(ul).location}function ly(){wo()||re(!1);let{basename:e,navigator:n}=y.useContext(ri),{matches:t}=y.useContext(Kt),{pathname:r}=bo(),i=JSON.stringify(ll(t).map(l=>l.pathnameBase)),o=y.useRef(!1);return y.useEffect(()=>{o.current=!0}),y.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=uc(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Zn([e,u.pathname])),(s.replace?n.replace:n.push)(u,s.state,s)},[e,n,i,r])}const sy=y.createContext(null);function uy(e){let n=y.useContext(Kt).outlet;return n&&y.createElement(sy.Provider,{value:e},n)}function fc(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=y.useContext(Kt),{pathname:i}=bo(),o=JSON.stringify(ll(r).map(a=>a.pathnameBase));return y.useMemo(()=>uc(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function cy(e,n){wo()||re(!1);let{navigator:t}=y.useContext(ri),r=y.useContext(dc),{matches:i}=y.useContext(Kt),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=bo(),u;if(n){var h;let C=typeof n=="string"?St(n):n;l==="/"||(h=C.pathname)!=null&&h.startsWith(l)||re(!1),u=C}else u=s;let f=u.pathname||"/",m=l==="/"?f:f.slice(l.length)||"/",M=Or(e,{pathname:m}),k=py(M&&M.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Zn([l,t.encodeLocation?t.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:Zn([l,t.encodeLocation?t.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,r||void 0);return n&&k?y.createElement(ul.Provider,{value:{location:ou({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$e.Pop}},k):k}function dy(){let e=Fp(),n=Cp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:i},t):null,o)}class fy extends y.Component{constructor(n){super(n),this.state={location:n.location,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location?{error:n.error,location:n.location}:{error:n.error||t.error,location:t.location}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?y.createElement(Kt.Provider,{value:this.props.routeContext},y.createElement(Np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hy(e){let{routeContext:n,match:t,children:r}=e,i=y.useContext(sl);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Kt.Provider,{value:n},r)}function py(e,n,t){if(n===void 0&&(n=[]),e==null)if(t!=null&&t.errors)e=t.matches;else return null;let r=e,i=t==null?void 0:t.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||re(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,u=null;t&&(a.route.ErrorBoundary?u=y.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=y.createElement(dy,null));let h=n.concat(r.slice(0,l+1)),f=()=>{let m=o;return s?m=u:a.route.Component?m=y.createElement(a.route.Component,null):a.route.element&&(m=a.route.element),y.createElement(hy,{match:a,routeContext:{outlet:o,matches:h},children:m})};return t&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?y.createElement(fy,{location:t.location,component:u,error:s,children:f(),routeContext:{outlet:null,matches:h}}):f()},null)}var Zd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Zd||(Zd={}));var pr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(pr||(pr={}));function hc(e){let n=y.useContext(dc);return n||re(!1),n}function my(e){let n=y.useContext(Kt);return n||re(!1),n}function Lp(e){let n=my(),t=n.matches[n.matches.length-1];return t.route.id||re(!1),t.route.id}function _p(){return hc(pr.UseNavigation).navigation}function Op(){let e=hc(pr.UseLoaderData),n=Lp(pr.UseLoaderData);if(e.errors&&e.errors[n]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+n+")");return}return e.loaderData[n]}function Fp(){var e;let n=y.useContext(Np),t=hc(pr.UseRouteError),r=Lp(pr.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function gy(e){let{fallbackElement:n,router:t}=e,r=y.useCallback(()=>t.state,[t]),i=oy(t.subscribe,r,r),o=y.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:s=>t.navigate(s),push:(s,u,h)=>t.navigate(s,{state:u,preventScrollReset:h==null?void 0:h.preventScrollReset}),replace:(s,u,h)=>t.navigate(s,{replace:!0,state:u,preventScrollReset:h==null?void 0:h.preventScrollReset})}),[t]),a=t.basename||"/",l=y.useMemo(()=>({router:t,navigator:o,static:!1,basename:a}),[t,o,a]);return y.createElement(y.Fragment,null,y.createElement(sl.Provider,{value:l},y.createElement(dc.Provider,{value:i},y.createElement(yy,{basename:t.basename,location:t.state.location,navigationType:t.state.historyAction,navigator:o},t.state.initialized?y.createElement(wy,null):n))),null)}function Vp(e){return uy(e.context)}function vy(e){re(!1)}function yy(e){let{basename:n="/",children:t=null,location:r,navigationType:i=$e.Pop,navigator:o,static:a=!1}=e;wo()&&re(!1);let l=n.replace(/^\/*/,"/"),s=y.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=St(r));let{pathname:u="/",search:h="",hash:f="",state:m=null,key:M="default"}=r,k=y.useMemo(()=>{let C=yo(u,l);return C==null?null:{location:{pathname:C,search:h,hash:f,state:m,key:M},navigationType:i}},[l,u,h,f,m,M,i]);return k==null?null:y.createElement(ri.Provider,{value:s},y.createElement(ul.Provider,{children:t,value:k}))}function wy(e){let{children:n,location:t}=e,r=y.useContext(sl),i=r&&!n?r.router.routes:au(n);return cy(i,t)}var ef;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ef||(ef={}));new Promise(()=>{});function au(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let o=[...n,i];if(r.type===y.Fragment){t.push.apply(t,au(r.props.children,o));return}r.type!==vy&&re(!1),!r.props.index||!r.props.children||re(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=au(r.props.children,o)),t.push(a)}),t}function by(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mr(){return mr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mr.apply(this,arguments)}function Up(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}const fa="get",Zl="application/x-www-form-urlencoded";function cl(e){return e!=null&&typeof e.tagName=="string"}function Sy(e){return cl(e)&&e.tagName.toLowerCase()==="button"}function ky(e){return cl(e)&&e.tagName.toLowerCase()==="form"}function xy(e){return cl(e)&&e.tagName.toLowerCase()==="input"}function Cy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ey(e,n){return e.button===0&&(!n||n==="_self")&&!Cy(e)}function Ty(e,n,t){let r,i,o,a;if(ky(e)){let h=t.submissionTrigger;r=t.method||e.getAttribute("method")||fa,i=t.action||e.getAttribute("action")||n,o=t.encType||e.getAttribute("enctype")||Zl,a=new FormData(e),h&&h.name&&a.append(h.name,h.value)}else if(Sy(e)||xy(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');r=t.method||e.getAttribute("formmethod")||h.getAttribute("method")||fa,i=t.action||e.getAttribute("formaction")||h.getAttribute("action")||n,o=t.encType||e.getAttribute("formenctype")||h.getAttribute("enctype")||Zl,a=new FormData(h),e.name&&a.append(e.name,e.value)}else{if(cl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(r=t.method||fa,i=t.action||n,o=t.encType||Zl,e instanceof FormData)a=e;else if(a=new FormData,e instanceof URLSearchParams)for(let[h,f]of e)a.append(h,f);else if(e!=null)for(let h of Object.keys(e))a.append(h,e[h])}let{protocol:l,host:s}=window.location;return{url:new URL(i,l+"//"+s),method:r.toLowerCase(),encType:o,formData:a}}const My=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ay=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function Iy(e,n){return U0({basename:n==null?void 0:n.basename,future:n==null?void 0:n.future,history:l0({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||Py(),routes:e,detectErrorBoundary:by}).initialize()}function Py(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=mr({},n,{errors:Dy(n.errors)})),n}function Dy(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,i]of n)if(i&&i.__type==="RouteErrorResponse")t[r]=new cc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",t[r]=o}else t[r]=i;return t}const Ry=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bp=y.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:h}=n,f=Up(n,My),{basename:m}=y.useContext(ri),M,k=!1;if(typeof u=="string"&&Ny.test(u)&&(M=u,Ry)){let d=new URL(window.location.href),w=u.startsWith("//")?new URL(d.protocol+u):new URL(u),I=yo(w.pathname,m);w.origin===d.origin&&I!=null?u=I+w.search+w.hash:k=!0}let C=ay(u,{relative:i}),v=Oy(u,{replace:a,state:l,target:s,preventScrollReset:h,relative:i});function g(d){r&&r(d),d.defaultPrevented||v(d)}return y.createElement("a",mr({},f,{href:M||C,onClick:k||o?r:g,ref:t,target:s}))}),Ba=y.forwardRef((e,n)=>y.createElement(Ly,mr({},e,{ref:n}))),Ly=y.forwardRef((e,n)=>{let{reloadDocument:t,replace:r,method:i=fa,action:o,onSubmit:a,fetcherKey:l,routeId:s,relative:u,preventScrollReset:h}=e,f=Up(e,Ay),m=Fy(l,s),M=i.toLowerCase()==="get"?"get":"post",k=$p(o,{relative:u}),C=v=>{if(a&&a(v),v.defaultPrevented)return;v.preventDefault();let g=v.nativeEvent.submitter,d=(g==null?void 0:g.getAttribute("formmethod"))||i;m(g||v.currentTarget,{method:d,replace:r,relative:u,preventScrollReset:h})};return y.createElement("form",mr({ref:n,method:M,action:k,onSubmit:t?a:C},f))});var lu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(lu||(lu={}));var nf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nf||(nf={}));function _y(e){let n=y.useContext(sl);return n||re(!1),n}function Oy(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:a}=n===void 0?{}:n,l=ly(),s=bo(),u=fc(e,{relative:a});return y.useCallback(h=>{if(Ey(h,t)){h.preventDefault();let f=r!==void 0?r:tt(s)===tt(u);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,t,e,o,a])}function Fy(e,n){let{router:t}=_y(lu.UseSubmitImpl),r=$p();return y.useCallback(function(i,o){if(o===void 0&&(o={}),typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:a,encType:l,formData:s,url:u}=Ty(i,r,o),h=u.pathname+u.search,f={replace:o.replace,preventScrollReset:o.preventScrollReset,formData:s,formMethod:a,formEncType:l};e?(n==null&&re(!1),t.fetch(e,n,h,f)):t.navigate(h,f)},[r,t,e,n])}function $p(e,n){let{relative:t}=n===void 0?{}:n,{basename:r}=y.useContext(ri),i=y.useContext(Kt);i||re(!1);let[o]=i.matches.slice(-1),a=mr({},fc(e||".",{relative:t})),l=bo();if(e==null&&(a.search=l.search,a.hash=l.hash,o.route.index)){let s=new URLSearchParams(a.search);s.delete("index"),a.search=s.toString()?"?"+s.toString():""}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:Zn([r,a.pathname])),tt(a)}function es(){const e=Fp();return console.error(e),J("div",{id:"error-page",children:[S("h1",{children:"Oops!"}),S("p",{children:"Sorry, an unexpected error has occurred."}),S("p",{children:S("i",{children:e.statusText||e.message})})]})}function Vy(){return J("div",{className:"flex items-center justify-center flex-col text-center py-6",children:[S("p",{className:"font-bold text-xl md:text-2xl mb-3 dark:text-orange-500",children:"Technolust Ninja"}),S("p",{className:"text-sm max-w-xl mb-6",children:"Obsessed with finding solutions to ITs most difficult problems. I use my nearly 10 years of experience and thirst for knowledge to research and develop projects that improve efficiency and ROI."}),S("p",{className:"text-sm max-w-xl mb-6",children:"This portfolio website was created using React, Vite, and TailwindCSS. It also utilizes Github Actions for auto-deployment."})]})}const Uy=[{title:"Ready Viewer One: A Movie Podcast",imgUrl:"/assets/rvo.jpg",stack:["Apple Podcasts","Spotify","YouTube","OBS"],link:"https://readyviewerone.buzzsprout.com",blurb:"A Movie Podcast with Nick Johnson and John Boyes"},{title:"Twilio Emergency Notification System",imgUrl:"/assets/twilio.webp",stack:["Excel","VBS","JavaScript","Google Sheets"],link:"#",blurb:"Created an Excel/VBS based employee emergency notification system for simplifying the process to call/text employees in case of inclement weather or other emergency company closures. Also created a Google Sheets variant to automate Bill Pay reminders for customers that are due soon/past due"},{title:"Balena.IO Kiosk Signage",imgUrl:"/assets/kiosk.jpg",stack:["HTML","CSS","JavaScript"],link:"#",blurb:"Configured a self-service lobby check in kiosk using SwipedOn for visitor tracking and Balena.IO on RaspberryPI for signage. Visitors sign in on a secured iPad, or by scanning a QR code with their cell phone, then SwipedOn prints a visitor badge and notifies employee's via email and SMS that their visitor has arrived. Balena.IO allows remote configuration and management of the content displayed on the digital display."},{title:"UCaaS Migration",imgUrl:"/assets/uccas.webp",stack:["Python"],link:"#",blurb:"Migration from on-prem Mitel phone system to Avaya's RingCentral UCaaS. This project included negotiating rates, managing backups and exports, using WSL2 and scripting to convert recordings from proprietary audio formats to WAV, automated transcribing recordings, used AWS Polly to create new high quality recordings from transcriptions, and configured queues and IVR's in RingCentral."}];var By=Object.defineProperty,$y=(e,n,t)=>n in e?By(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ns=(e,n,t)=>($y(e,typeof n!="symbol"?n+"":n,t),t);let zy=class{constructor(){ns(this,"current",this.detect()),ns(this,"handoffState","pending"),ns(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},et=new zy,nn=(e,n)=>{et.isServer?y.useEffect(e,n):y.useLayoutEffect(e,n)};function mt(e){let n=y.useRef(e);return nn(()=>{n.current=e},[e]),n}function So(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function rt(){let e=[],n={addEventListener(t,r,i,o){return t.addEventListener(r,i,o),n.add(()=>t.removeEventListener(r,i,o))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return So(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,i){let o=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:i}),this.add(()=>{Object.assign(t.style,{[r]:o})})},group(t){let r=rt();return t(r),this.add(()=>r.dispose())},add(t){return e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let t of e.splice(0))t()}};return n}function ko(){let[e]=y.useState(rt);return y.useEffect(()=>()=>e.dispose(),[e]),e}let ue=function(e){let n=mt(e);return ie.useCallback((...t)=>n.current(...t),[n])};function ii(){let[e,n]=y.useState(et.isHandoffComplete);return e&&et.isHandoffComplete===!1&&n(!1),y.useEffect(()=>{e!==!0&&n(!0)},[e]),y.useEffect(()=>et.handoff(),[]),e}var tf;let qn=(tf=ie.useId)!=null?tf:function(){let e=ii(),[n,t]=ie.useState(e?()=>et.nextId():null);return nn(()=>{n===null&&t(et.nextId())},[n]),n!=null?""+n:void 0};function _e(e,n,...t){if(e in n){let i=n[e];return typeof i=="function"?i(...t):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,_e),r}function xo(e){return et.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let su=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ct=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ct||{}),zp=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(zp||{}),jy=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(jy||{});function jp(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(su)).sort((n,t)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var pc=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(pc||{});function mc(e,n=0){var t;return e===((t=xo(e))==null?void 0:t.body)?!1:_e(n,{[0](){return e.matches(su)},[1](){let r=e;for(;r!==null;){if(r.matches(su))return!0;r=r.parentElement}return!1}})}function Hp(e){let n=xo(e);rt().nextFrame(()=>{n&&!mc(n.activeElement,0)&&Bt(e)})}function Bt(e){e==null||e.focus({preventScroll:!0})}let Hy=["textarea","input"].join(",");function Wy(e){var n,t;return(t=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,Hy))!=null?t:!1}function Wp(e,n=t=>t){return e.slice().sort((t,r)=>{let i=n(t),o=n(r);if(i===null||o===null)return 0;let a=i.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function qy(e,n){return Wi(jp(),n,{relativeTo:e})}function Wi(e,n,{sorted:t=!0,relativeTo:r=null,skipElements:i=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?t?Wp(e):e:jp(e);i.length>0&&a.length>1&&(a=a.filter(M=>!i.includes(M))),r=r??o.activeElement;let l=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,a.indexOf(r))-1;if(n&4)return Math.max(0,a.indexOf(r))+1;if(n&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=n&32?{preventScroll:!0}:{},h=0,f=a.length,m;do{if(h>=f||h+f<=0)return 0;let M=s+h;if(n&16)M=(M+f)%f;else{if(M<0)return 3;if(M>=f)return 1}m=a[M],m==null||m.focus(u),h+=l}while(m!==o.activeElement);return n&6&&Wy(m)&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}function ts(e,n,t){let r=mt(n);y.useEffect(()=>{function i(o){r.current(o)}return document.addEventListener(e,i,t),()=>document.removeEventListener(e,i,t)},[e,t])}function qp(e,n,t=!0){let r=y.useRef(!1);y.useEffect(()=>{requestAnimationFrame(()=>{r.current=t})},[t]);function i(a,l){if(!r.current||a.defaultPrevented)return;let s=function h(f){return typeof f=="function"?h(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),u=l(a);if(u!==null&&u.getRootNode().contains(u)){for(let h of s){if(h===null)continue;let f=h instanceof HTMLElement?h:h.current;if(f!=null&&f.contains(u)||a.composed&&a.composedPath().includes(f))return}return!mc(u,pc.Loose)&&u.tabIndex!==-1&&a.preventDefault(),n(a,u)}}let o=y.useRef(null);ts("mousedown",a=>{var l,s;r.current&&(o.current=((s=(l=a.composedPath)==null?void 0:l.call(a))==null?void 0:s[0])||a.target)},!0),ts("click",a=>{o.current&&(i(a,()=>o.current),o.current=null)},!0),ts("blur",a=>i(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function rf(e){var n;if(e.type)return e.type;let t=(n=e.as)!=null?n:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function Kp(e,n){let[t,r]=y.useState(()=>rf(e));return nn(()=>{r(rf(e))},[e.type,e.as]),nn(()=>{t||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&r("button")},[t,n]),t}let Yp=Symbol();function Qp(e,n=!0){return Object.assign(e,{[Yp]:n})}function Xe(...e){let n=y.useRef(e);y.useEffect(()=>{n.current=e},[e]);let t=ue(r=>{for(let i of n.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Yp]))?void 0:t}function Ky({container:e,accept:n,walk:t,enabled:r=!0}){let i=y.useRef(n),o=y.useRef(t);y.useEffect(()=>{i.current=n,o.current=t},[n,t]),nn(()=>{if(!e||!r)return;let a=xo(e);if(!a)return;let l=i.current,s=o.current,u=Object.assign(f=>l(f),{acceptNode:l}),h=a.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;h.nextNode();)s(h.currentNode)},[e,r,i,o])}function Yy(e){throw new Error("Unexpected object: "+e)}var zn=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(zn||{});function Qy(e,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),i=r??-1,o=(()=>{switch(e.focus){case 0:return t.findIndex(a=>!n.resolveDisabled(a));case 1:{let a=t.slice().reverse().findIndex((l,s,u)=>i!==-1&&u.length-s-1>=i?!1:!n.resolveDisabled(l));return a===-1?a:t.length-1-a}case 2:return t.findIndex((a,l)=>l<=i?!1:!n.resolveDisabled(a));case 3:{let a=t.slice().reverse().findIndex(l=>!n.resolveDisabled(l));return a===-1?a:t.length-1-a}case 4:return t.findIndex(a=>n.resolveId(a)===e.id);case 5:return null;default:Yy(e)}})();return o===-1?r:o}function Gp(...e){return e.filter(Boolean).join(" ")}var jt=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(jt||{}),ht=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ht||{});function Ye({ourProps:e,theirProps:n,slot:t,defaultTag:r,features:i,visible:o=!0,name:a}){let l=Jp(n,e);if(o)return Xo(l,t,r,a);let s=i??0;if(s&2){let{static:u=!1,...h}=l;if(u)return Xo(h,t,r,a)}if(s&1){let{unmount:u=!0,...h}=l;return _e(u?0:1,{[0](){return null},[1](){return Xo({...h,hidden:!0,style:{display:"none"}},t,r,a)}})}return Xo(l,t,r,a)}function Xo(e,n={},t,r){var i;let{as:o=t,children:a,refName:l="ref",...s}=rs(e,["unmount","static"]),u=e.ref!==void 0?{[l]:e.ref}:{},h=typeof a=="function"?a(n):a;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(n));let f={};if(n){let m=!1,M=[];for(let[k,C]of Object.entries(n))typeof C=="boolean"&&(m=!0),C===!0&&M.push(k);m&&(f["data-headlessui-state"]=M.join(" "))}if(o===y.Fragment&&Object.keys(of(s)).length>0){if(!y.isValidElement(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(k=>`  - ${k}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(k=>`  - ${k}`).join(`
`)].join(`
`));let m=Gp((i=h.props)==null?void 0:i.className,s.className),M=m?{className:m}:{};return y.cloneElement(h,Object.assign({},Jp(h.props,of(rs(s,["ref"]))),f,u,Gy(h.ref,u.ref),M))}return y.createElement(o,Object.assign({},rs(s,["ref"]),o!==y.Fragment&&u,o!==y.Fragment&&f),h)}function Gy(...e){return{ref:e.every(n=>n==null)?void 0:n=>{for(let t of e)t!=null&&(typeof t=="function"?t(n):t.current=n)}}}function Jp(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(t[i]!=null||(t[i]=[]),t[i].push(r[i])):n[i]=r[i];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(t).map(r=>[r,void 0])));for(let r in t)Object.assign(n,{[r](i,...o){let a=t[r];for(let l of a){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;l(i,...o)}}});return n}function je(e){var n;return Object.assign(y.forwardRef(e),{displayName:(n=e.displayName)!=null?n:e.name})}function of(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function rs(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function gc(e){let n=e.parentElement,t=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(t=n),n=n.parentElement;let r=(n==null?void 0:n.getAttribute("disabled"))==="";return r&&Jy(t)?!1:r}function Jy(e){if(!e)return!1;let n=e.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}let Xy="div";var $a=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))($a||{});function Zy(e,n){let{features:t=1,...r}=e,i={ref:n,"aria-hidden":(t&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return Ye({ourProps:i,theirProps:r,slot:{},defaultTag:Xy,name:"Hidden"})}let uu=je(Zy),vc=y.createContext(null);vc.displayName="OpenClosedContext";var Le=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Le||{});function Co(){return y.useContext(vc)}function yc({value:e,children:n}){return ie.createElement(vc.Provider,{value:e},n)}var Me=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Me||{});function wc(e,n){let t=y.useRef([]),r=ue(e);y.useEffect(()=>{let i=[...t.current];for(let[o,a]of n.entries())if(t.current[o]!==a){let l=r(n,i);return t.current=n,l}},[r,...n])}function af(e){return[e.screenX,e.screenY]}function e1(){let e=y.useRef([-1,-1]);return{wasMoved(n){let t=af(n);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(n){e.current=af(n)}}}function n1(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function t1(e,n,t){let r=mt(n);y.useEffect(()=>{function i(o){r.current(o)}return window.addEventListener(e,i,t),()=>window.removeEventListener(e,i,t)},[e,t])}var Li=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Li||{});function r1(){let e=y.useRef(0);return t1("keydown",n=>{n.key==="Tab"&&(e.current=n.shiftKey?1:0)},!0),e}function dl(){let e=y.useRef(!1);return nn(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Eo(...e){return y.useMemo(()=>xo(...e),[...e])}function Xp(e,n,t,r){let i=mt(t);y.useEffect(()=>{e=e??window;function o(a){i.current(a)}return e.addEventListener(n,o,r),()=>e.removeEventListener(n,o,r)},[e,n,r])}function Zp(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let n=new Set;for(let t of e.current)t.current instanceof HTMLElement&&n.add(t.current);return n}let i1="div";var em=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(em||{});function o1(e,n){let t=y.useRef(null),r=Xe(t,n),{initialFocus:i,containers:o,features:a=30,...l}=e;ii()||(a=1);let s=Eo(t);s1({ownerDocument:s},!!(a&16));let u=u1({ownerDocument:s,container:t,initialFocus:i},!!(a&2));c1({ownerDocument:s,container:t,containers:o,previousActiveElement:u},!!(a&8));let h=r1(),f=ue(C=>{let v=t.current;v&&(g=>g())(()=>{_e(h.current,{[Li.Forwards]:()=>{Wi(v,ct.First,{skipElements:[C.relatedTarget]})},[Li.Backwards]:()=>{Wi(v,ct.Last,{skipElements:[C.relatedTarget]})}})})}),m=ko(),M=y.useRef(!1),k={ref:r,onKeyDown(C){C.key=="Tab"&&(M.current=!0,m.requestAnimationFrame(()=>{M.current=!1}))},onBlur(C){let v=Zp(o);t.current instanceof HTMLElement&&v.add(t.current);let g=C.relatedTarget;g instanceof HTMLElement&&g.dataset.headlessuiFocusGuard!=="true"&&(nm(v,g)||(M.current?Wi(t.current,_e(h.current,{[Li.Forwards]:()=>ct.Next,[Li.Backwards]:()=>ct.Previous})|ct.WrapAround,{relativeTo:C.target}):C.target instanceof HTMLElement&&Bt(C.target)))}};return ie.createElement(ie.Fragment,null,!!(a&4)&&ie.createElement(uu,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:$a.Focusable}),Ye({ourProps:k,theirProps:l,defaultTag:i1,name:"FocusTrap"}),!!(a&4)&&ie.createElement(uu,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:$a.Focusable}))}let a1=je(o1),Mi=Object.assign(a1,{features:em}),It=[];if(typeof window<"u"&&typeof document<"u"){let e=function(n){n.target instanceof HTMLElement&&n.target!==document.body&&It[0]!==n.target&&(It.unshift(n.target),It=It.filter(t=>t!=null&&t.isConnected),It.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function l1(e=!0){let n=y.useRef(It.slice());return wc(([t],[r])=>{r===!0&&t===!1&&So(()=>{n.current.splice(0)}),r===!1&&t===!0&&(n.current=It.slice())},[e,It,n]),ue(()=>{var t;return(t=n.current.find(r=>r!=null&&r.isConnected))!=null?t:null})}function s1({ownerDocument:e},n){let t=l1(n);wc(()=>{n||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&Bt(t())},[n]);let r=y.useRef(!1);y.useEffect(()=>(r.current=!1,()=>{r.current=!0,So(()=>{r.current&&Bt(t())})}),[])}function u1({ownerDocument:e,container:n,initialFocus:t},r){let i=y.useRef(null),o=dl();return wc(()=>{if(!r)return;let a=n.current;a&&So(()=>{if(!o.current)return;let l=e==null?void 0:e.activeElement;if(t!=null&&t.current){if((t==null?void 0:t.current)===l){i.current=l;return}}else if(a.contains(l)){i.current=l;return}t!=null&&t.current?Bt(t.current):Wi(a,ct.First)===zp.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=e==null?void 0:e.activeElement})},[r]),i}function c1({ownerDocument:e,container:n,containers:t,previousActiveElement:r},i){let o=dl();Xp(e==null?void 0:e.defaultView,"focus",a=>{if(!i||!o.current)return;let l=Zp(t);n.current instanceof HTMLElement&&l.add(n.current);let s=r.current;if(!s)return;let u=a.target;u&&u instanceof HTMLElement?nm(l,u)?(r.current=u,Bt(u)):(a.preventDefault(),a.stopPropagation(),Bt(s)):Bt(r.current)},!0)}function nm(e,n){for(let t of e)if(t.contains(n))return!0;return!1}let tm=y.createContext(!1);function d1(){return y.useContext(tm)}function cu(e){return ie.createElement(tm.Provider,{value:e.force},e.children)}function f1(e){let n=d1(),t=y.useContext(rm),r=Eo(e),[i,o]=y.useState(()=>{if(!n&&t!==null||et.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return y.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),y.useEffect(()=>{n||t!==null&&o(t.current)},[t,o,n]),i}let h1=y.Fragment;function p1(e,n){let t=e,r=y.useRef(null),i=Xe(Qp(h=>{r.current=h}),n),o=Eo(r),a=f1(r),[l]=y.useState(()=>{var h;return et.isServer?null:(h=o==null?void 0:o.createElement("div"))!=null?h:null}),s=ii(),u=y.useRef(!1);return nn(()=>{if(u.current=!1,!(!a||!l))return a.contains(l)||(l.setAttribute("data-headlessui-portal",""),a.appendChild(l)),()=>{u.current=!0,So(()=>{var h;u.current&&(!a||!l||(l instanceof Node&&a.contains(l)&&a.removeChild(l),a.childNodes.length<=0&&((h=a.parentElement)==null||h.removeChild(a))))})}},[a,l]),s?!a||!l?null:ma.createPortal(Ye({ourProps:{ref:i},theirProps:t,defaultTag:h1,name:"Portal"}),l):null}let m1=y.Fragment,rm=y.createContext(null);function g1(e,n){let{target:t,...r}=e,i={ref:Xe(n)};return ie.createElement(rm.Provider,{value:t},Ye({ourProps:i,theirProps:r,defaultTag:m1,name:"Popover.Group"}))}let v1=je(p1),y1=je(g1),du=Object.assign(v1,{Group:y1}),im=y.createContext(null);function om(){let e=y.useContext(im);if(e===null){let n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,om),n}return e}function w1(){let[e,n]=y.useState([]);return[e.length>0?e.join(" "):void 0,y.useMemo(()=>function(t){let r=ue(o=>(n(a=>[...a,o]),()=>n(a=>{let l=a.slice(),s=l.indexOf(o);return s!==-1&&l.splice(s,1),l}))),i=y.useMemo(()=>({register:r,slot:t.slot,name:t.name,props:t.props}),[r,t.slot,t.name,t.props]);return ie.createElement(im.Provider,{value:i},t.children)},[n])]}let b1="p";function S1(e,n){let t=qn(),{id:r=`headlessui-description-${t}`,...i}=e,o=om(),a=Xe(n);nn(()=>o.register(r),[r,o.register]);let l={ref:a,...o.props,id:r};return Ye({ourProps:l,theirProps:i,slot:o.slot||{},defaultTag:b1,name:o.name||"Description"})}let k1=je(S1),x1=Object.assign(k1,{}),bc=y.createContext(()=>{});bc.displayName="StackContext";var fu=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(fu||{});function C1(){return y.useContext(bc)}function E1({children:e,onUpdate:n,type:t,element:r,enabled:i}){let o=C1(),a=ue((...l)=>{n==null||n(...l),o(...l)});return nn(()=>{let l=i===void 0||i===!0;return l&&a(0,t,r),()=>{l&&a(1,t,r)}},[a,t,r,i]),ie.createElement(bc.Provider,{value:a},e)}function T1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const M1=typeof Object.is=="function"?Object.is:T1,{useState:A1,useEffect:I1,useLayoutEffect:P1,useDebugValue:D1}=Wr;function R1(e,n,t){const r=n(),[{inst:i},o]=A1({inst:{value:r,getSnapshot:n}});return P1(()=>{i.value=r,i.getSnapshot=n,is(i)&&o({inst:i})},[e,r,n]),I1(()=>(is(i)&&o({inst:i}),e(()=>{is(i)&&o({inst:i})})),[e]),D1(r),r}function is(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!M1(t,r)}catch{return!0}}function N1(e,n,t){return n()}const L1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_1=!L1,O1=_1?N1:R1,F1="useSyncExternalStore"in Wr?(e=>e.useSyncExternalStore)(Wr):O1;function V1(e){return F1(e.subscribe,e.getSnapshot,e.getSnapshot)}function U1(e,n){let t=e(),r=new Set;return{getSnapshot(){return t},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...o){let a=n[i].call(t,...o);a&&(t=a,r.forEach(l=>l()))}}}function B1(){let e;return{before({doc:n}){var t;let r=n.documentElement;e=((t=n.defaultView)!=null?t:window).innerWidth-r.clientWidth},after({doc:n,d:t}){let r=n.documentElement,i=r.clientWidth-r.offsetWidth,o=e-i;t.style(r,"paddingRight",`${o}px`)}}}function $1(){if(!n1())return{};let e;return{before(){e=window.pageYOffset},after({doc:n,d:t,meta:r}){function i(a){return r.containers.flatMap(l=>l()).some(l=>l.contains(a))}t.style(n.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;t.addEventListener(n,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:s}=new URL(l.href),u=n.querySelector(s);u&&!i(u)&&(o=u)}catch{}},!0),t.addEventListener(n,"touchmove",a=>{a.target instanceof HTMLElement&&!i(a.target)&&a.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function z1(){return{before({doc:e,d:n}){n.style(e.documentElement,"overflow","hidden")}}}function j1(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let ar=U1(()=>new Map,{PUSH(e,n){var t;let r=(t=this.get(e))!=null?t:{doc:e,count:0,d:rt(),meta:new Set};return r.count++,r.meta.add(n),this.set(e,r),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let r={doc:e,d:n,meta:j1(t)},i=[$1(),B1(),z1()];i.forEach(({before:o})=>o==null?void 0:o(r)),i.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});ar.subscribe(()=>{let e=ar.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let r=n.get(t.doc)==="hidden",i=t.count!==0;(i&&!r||!i&&r)&&ar.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&ar.dispatch("TEARDOWN",t)}});function H1(e,n,t){let r=V1(ar),i=e?r.get(e):void 0,o=i?i.count>0:!1;return nn(()=>{if(!(!e||!n))return ar.dispatch("PUSH",e,t),()=>ar.dispatch("POP",e,t)},[n,e]),o}let os=new Map,Ai=new Map;function lf(e,n=!0){nn(()=>{var t;if(!n)return;let r=typeof e=="function"?e():e.current;if(!r)return;function i(){var a;if(!r)return;let l=(a=Ai.get(r))!=null?a:1;if(l===1?Ai.delete(r):Ai.set(r,l-1),l!==1)return;let s=os.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,os.delete(r))}let o=(t=Ai.get(r))!=null?t:0;return Ai.set(r,o+1),o!==0||(os.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),i},[e,n])}var W1=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(W1||{}),q1=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(q1||{});let K1={[0](e,n){return e.titleId===n.id?e:{...e,titleId:n.id}}},za=y.createContext(null);za.displayName="DialogContext";function To(e){let n=y.useContext(za);if(n===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,To),t}return n}function Y1(e,n,t=()=>[document.body]){H1(e,n,r=>{var i;return{containers:[...(i=r.containers)!=null?i:[],t]}})}function Q1(e,n){return _e(n.type,K1,e,n)}let G1="div",J1=jt.RenderStrategy|jt.Static;function X1(e,n){let t=qn(),{id:r=`headlessui-dialog-${t}`,open:i,onClose:o,initialFocus:a,__demoMode:l=!1,...s}=e,[u,h]=y.useState(0),f=Co();i===void 0&&f!==null&&(i=(f&Le.Open)===Le.Open);let m=y.useRef(null),M=Xe(m,n),k=y.useRef(null),C=Eo(m),v=e.hasOwnProperty("open")||f!==null,g=e.hasOwnProperty("onClose");if(!v&&!g)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!v)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!g)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof i!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let d=i?0:1,[w,I]=y.useReducer(Q1,{titleId:null,descriptionId:null,panelRef:y.createRef()}),E=ue(()=>o(!1)),N=ue(ye=>I({type:0,id:ye})),D=ii()?l?!1:d===0:!1,L=u>1,G=y.useContext(za)!==null,W=L?"parent":"leaf",oe=f!==null?(f&Le.Closing)===Le.Closing:!1,he=(()=>G||oe?!1:D)(),ve=y.useCallback(()=>{var ye,Ce;return(Ce=Array.from((ye=C==null?void 0:C.querySelectorAll("body > *"))!=null?ye:[]).find(we=>we.id==="headlessui-portal-root"?!1:we.contains(k.current)&&we instanceof HTMLElement))!=null?Ce:null},[k]);lf(ve,he);let Oe=(()=>L?!0:D)(),Te=y.useCallback(()=>{var ye,Ce;return(Ce=Array.from((ye=C==null?void 0:C.querySelectorAll("[data-headlessui-portal]"))!=null?ye:[]).find(we=>we.contains(k.current)&&we instanceof HTMLElement))!=null?Ce:null},[k]);lf(Te,Oe);let Ze=ue(()=>{var ye,Ce;return[...Array.from((ye=C==null?void 0:C.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?ye:[]).filter(we=>!(we===document.body||we===document.head||!(we instanceof HTMLElement)||we.contains(k.current)||w.panelRef.current&&we.contains(w.panelRef.current))),(Ce=w.panelRef.current)!=null?Ce:m.current]}),on=(()=>!(!D||L))();qp(()=>Ze(),E,on);let z=(()=>!(L||d!==0))();Xp(C==null?void 0:C.defaultView,"keydown",ye=>{z&&(ye.defaultPrevented||ye.key===Me.Escape&&(ye.preventDefault(),ye.stopPropagation(),E()))});let X=(()=>!(oe||d!==0||G))();Y1(C,X,Ze),y.useEffect(()=>{if(d!==0||!m.current)return;let ye=new ResizeObserver(Ce=>{for(let we of Ce){let kt=we.target.getBoundingClientRect();kt.x===0&&kt.y===0&&kt.width===0&&kt.height===0&&E()}});return ye.observe(m.current),()=>ye.disconnect()},[d,m,E]);let[q,ee]=w1(),be=y.useMemo(()=>[{dialogState:d,close:E,setTitleId:N},w],[d,w,E,N]),_n=y.useMemo(()=>({open:d===0}),[d]),Fe={ref:M,id:r,role:"dialog","aria-modal":d===0?!0:void 0,"aria-labelledby":w.titleId,"aria-describedby":q};return ie.createElement(E1,{type:"Dialog",enabled:d===0,element:m,onUpdate:ue((ye,Ce)=>{Ce==="Dialog"&&_e(ye,{[fu.Add]:()=>h(we=>we+1),[fu.Remove]:()=>h(we=>we-1)})})},ie.createElement(cu,{force:!0},ie.createElement(du,null,ie.createElement(za.Provider,{value:be},ie.createElement(du.Group,{target:m},ie.createElement(cu,{force:!1},ie.createElement(ee,{slot:_n,name:"Dialog.Description"},ie.createElement(Mi,{initialFocus:a,containers:Ze,features:D?_e(W,{parent:Mi.features.RestoreFocus,leaf:Mi.features.All&~Mi.features.FocusLock}):Mi.features.None},Ye({ourProps:Fe,theirProps:s,slot:_n,defaultTag:G1,features:J1,visible:d===0,name:"Dialog"})))))))),ie.createElement(uu,{features:$a.Hidden,ref:k}))}let Z1="div";function ew(e,n){let t=qn(),{id:r=`headlessui-dialog-overlay-${t}`,...i}=e,[{dialogState:o,close:a}]=To("Dialog.Overlay"),l=Xe(n),s=ue(h=>{if(h.target===h.currentTarget){if(gc(h.currentTarget))return h.preventDefault();h.preventDefault(),h.stopPropagation(),a()}}),u=y.useMemo(()=>({open:o===0}),[o]);return Ye({ourProps:{ref:l,id:r,"aria-hidden":!0,onClick:s},theirProps:i,slot:u,defaultTag:Z1,name:"Dialog.Overlay"})}let nw="div";function tw(e,n){let t=qn(),{id:r=`headlessui-dialog-backdrop-${t}`,...i}=e,[{dialogState:o},a]=To("Dialog.Backdrop"),l=Xe(n);y.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let s=y.useMemo(()=>({open:o===0}),[o]);return ie.createElement(cu,{force:!0},ie.createElement(du,null,Ye({ourProps:{ref:l,id:r,"aria-hidden":!0},theirProps:i,slot:s,defaultTag:nw,name:"Dialog.Backdrop"})))}let rw="div";function iw(e,n){let t=qn(),{id:r=`headlessui-dialog-panel-${t}`,...i}=e,[{dialogState:o},a]=To("Dialog.Panel"),l=Xe(n,a.panelRef),s=y.useMemo(()=>({open:o===0}),[o]),u=ue(h=>{h.stopPropagation()});return Ye({ourProps:{ref:l,id:r,onClick:u},theirProps:i,slot:s,defaultTag:rw,name:"Dialog.Panel"})}let ow="h2";function aw(e,n){let t=qn(),{id:r=`headlessui-dialog-title-${t}`,...i}=e,[{dialogState:o,setTitleId:a}]=To("Dialog.Title"),l=Xe(n);y.useEffect(()=>(a(r),()=>a(null)),[r,a]);let s=y.useMemo(()=>({open:o===0}),[o]);return Ye({ourProps:{ref:l,id:r},theirProps:i,slot:s,defaultTag:ow,name:"Dialog.Title"})}let lw=je(X1),sw=je(tw),uw=je(iw),cw=je(ew),dw=je(aw),as=Object.assign(lw,{Backdrop:sw,Panel:uw,Overlay:cw,Title:dw,Description:x1});var sf;let fw=(sf=ie.startTransition)!=null?sf:function(e){e()};var hw=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(hw||{}),pw=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(pw||{});let mw={[0]:e=>({...e,disclosureState:_e(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},[3](e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},Sc=y.createContext(null);Sc.displayName="DisclosureContext";function kc(e){let n=y.useContext(Sc);if(n===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,kc),t}return n}let xc=y.createContext(null);xc.displayName="DisclosureAPIContext";function am(e){let n=y.useContext(xc);if(n===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,am),t}return n}let Cc=y.createContext(null);Cc.displayName="DisclosurePanelContext";function gw(){return y.useContext(Cc)}function vw(e,n){return _e(n.type,mw,e,n)}let yw=y.Fragment;function ww(e,n){let{defaultOpen:t=!1,...r}=e,i=y.useRef(null),o=Xe(n,Qp(v=>{i.current=v},e.as===void 0||e.as===y.Fragment)),a=y.useRef(null),l=y.useRef(null),s=y.useReducer(vw,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:l,panelRef:a,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:h},f]=s,m=ue(v=>{f({type:1});let g=xo(i);if(!g||!h)return;let d=(()=>v?v instanceof HTMLElement?v:v.current instanceof HTMLElement?v.current:g.getElementById(h):g.getElementById(h))();d==null||d.focus()}),M=y.useMemo(()=>({close:m}),[m]),k=y.useMemo(()=>({open:u===0,close:m}),[u,m]),C={ref:o};return ie.createElement(Sc.Provider,{value:s},ie.createElement(xc.Provider,{value:M},ie.createElement(yc,{value:_e(u,{[0]:Le.Open,[1]:Le.Closed})},Ye({ourProps:C,theirProps:r,slot:k,defaultTag:yw,name:"Disclosure"}))))}let bw="button";function Sw(e,n){let t=qn(),{id:r=`headlessui-disclosure-button-${t}`,...i}=e,[o,a]=kc("Disclosure.Button"),l=gw(),s=l===null?!1:l===o.panelId,u=y.useRef(null),h=Xe(u,n,s?null:o.buttonRef);y.useEffect(()=>{if(!s)return a({type:2,buttonId:r}),()=>{a({type:2,buttonId:null})}},[r,a,s]);let f=ue(g=>{var d;if(s){if(o.disclosureState===1)return;switch(g.key){case Me.Space:case Me.Enter:g.preventDefault(),g.stopPropagation(),a({type:0}),(d=o.buttonRef.current)==null||d.focus();break}}else switch(g.key){case Me.Space:case Me.Enter:g.preventDefault(),g.stopPropagation(),a({type:0});break}}),m=ue(g=>{switch(g.key){case Me.Space:g.preventDefault();break}}),M=ue(g=>{var d;gc(g.currentTarget)||e.disabled||(s?(a({type:0}),(d=o.buttonRef.current)==null||d.focus()):a({type:0}))}),k=y.useMemo(()=>({open:o.disclosureState===0}),[o]),C=Kp(e,u),v=s?{ref:h,type:C,onKeyDown:f,onClick:M}:{ref:h,id:r,type:C,"aria-expanded":e.disabled?void 0:o.disclosureState===0,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:f,onKeyUp:m,onClick:M};return Ye({ourProps:v,theirProps:i,slot:k,defaultTag:bw,name:"Disclosure.Button"})}let kw="div",xw=jt.RenderStrategy|jt.Static;function Cw(e,n){let t=qn(),{id:r=`headlessui-disclosure-panel-${t}`,...i}=e,[o,a]=kc("Disclosure.Panel"),{close:l}=am("Disclosure.Panel"),s=Xe(n,o.panelRef,M=>{fw(()=>a({type:M?4:5}))});y.useEffect(()=>(a({type:3,panelId:r}),()=>{a({type:3,panelId:null})}),[r,a]);let u=Co(),h=(()=>u!==null?(u&Le.Open)===Le.Open:o.disclosureState===0)(),f=y.useMemo(()=>({open:o.disclosureState===0,close:l}),[o,l]),m={ref:s,id:r};return ie.createElement(Cc.Provider,{value:o.panelId},Ye({ourProps:m,theirProps:i,slot:f,defaultTag:kw,features:xw,visible:h,name:"Disclosure.Panel"}))}let Ew=je(ww),Tw=je(Sw),Mw=je(Cw),Ii=Object.assign(Ew,{Button:Tw,Panel:Mw});var Aw=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Aw||{}),Iw=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Iw||{}),Pw=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(Pw||{});function ls(e,n=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,r=Wp(n(e.items.slice()),o=>o.dataRef.current.domRef.current),i=t?r.indexOf(t):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}let Dw={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,n)=>{var t;let r=ls(e),i=Qy(n,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:i,activationTrigger:(t=n.trigger)!=null?t:1}},[3]:(e,n)=>{let t=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),i=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find(a=>{var l;return((l=a.dataRef.current.textValue)==null?void 0:l.startsWith(r))&&!a.dataRef.current.disabled}),o=i?e.items.indexOf(i):-1;return o===-1||o===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:o,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,n)=>{let t=ls(e,r=>[...r,{id:n.id,dataRef:n.dataRef}]);return{...e,...t}},[6]:(e,n)=>{let t=ls(e,r=>{let i=r.findIndex(o=>o.id===n.id);return i!==-1&&r.splice(i,1),r});return{...e,...t,activationTrigger:1}}},Ec=y.createContext(null);Ec.displayName="MenuContext";function fl(e){let n=y.useContext(Ec);if(n===null){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,fl),t}return n}function Rw(e,n){return _e(n.type,Dw,e,n)}let Nw=y.Fragment;function Lw(e,n){let t=y.useReducer(Rw,{menuState:1,buttonRef:y.createRef(),itemsRef:y.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:i,buttonRef:o},a]=t,l=Xe(n);qp([o,i],(m,M)=>{var k;a({type:1}),mc(M,pc.Loose)||(m.preventDefault(),(k=o.current)==null||k.focus())},r===0);let s=ue(()=>{a({type:1})}),u=y.useMemo(()=>({open:r===0,close:s}),[r,s]),h=e,f={ref:l};return ie.createElement(Ec.Provider,{value:t},ie.createElement(yc,{value:_e(r,{[0]:Le.Open,[1]:Le.Closed})},Ye({ourProps:f,theirProps:h,slot:u,defaultTag:Nw,name:"Menu"})))}let _w="button";function Ow(e,n){var t;let r=qn(),{id:i=`headlessui-menu-button-${r}`,...o}=e,[a,l]=fl("Menu.Button"),s=Xe(a.buttonRef,n),u=ko(),h=ue(C=>{switch(C.key){case Me.Space:case Me.Enter:case Me.ArrowDown:C.preventDefault(),C.stopPropagation(),l({type:0}),u.nextFrame(()=>l({type:2,focus:zn.First}));break;case Me.ArrowUp:C.preventDefault(),C.stopPropagation(),l({type:0}),u.nextFrame(()=>l({type:2,focus:zn.Last}));break}}),f=ue(C=>{switch(C.key){case Me.Space:C.preventDefault();break}}),m=ue(C=>{if(gc(C.currentTarget))return C.preventDefault();e.disabled||(a.menuState===0?(l({type:1}),u.nextFrame(()=>{var v;return(v=a.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})})):(C.preventDefault(),l({type:0})))}),M=y.useMemo(()=>({open:a.menuState===0}),[a]),k={ref:s,id:i,type:Kp(e,a.buttonRef),"aria-haspopup":"menu","aria-controls":(t=a.itemsRef.current)==null?void 0:t.id,"aria-expanded":e.disabled?void 0:a.menuState===0,onKeyDown:h,onKeyUp:f,onClick:m};return Ye({ourProps:k,theirProps:o,slot:M,defaultTag:_w,name:"Menu.Button"})}let Fw="div",Vw=jt.RenderStrategy|jt.Static;function Uw(e,n){var t,r;let i=qn(),{id:o=`headlessui-menu-items-${i}`,...a}=e,[l,s]=fl("Menu.Items"),u=Xe(l.itemsRef,n),h=Eo(l.itemsRef),f=ko(),m=Co(),M=(()=>m!==null?(m&Le.Open)===Le.Open:l.menuState===0)();y.useEffect(()=>{let d=l.itemsRef.current;d&&l.menuState===0&&d!==(h==null?void 0:h.activeElement)&&d.focus({preventScroll:!0})},[l.menuState,l.itemsRef,h]),Ky({container:l.itemsRef.current,enabled:l.menuState===0,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let k=ue(d=>{var w,I;switch(f.dispose(),d.key){case Me.Space:if(l.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),s({type:3,value:d.key});case Me.Enter:if(d.preventDefault(),d.stopPropagation(),s({type:1}),l.activeItemIndex!==null){let{dataRef:E}=l.items[l.activeItemIndex];(I=(w=E.current)==null?void 0:w.domRef.current)==null||I.click()}Hp(l.buttonRef.current);break;case Me.ArrowDown:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:zn.Next});case Me.ArrowUp:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:zn.Previous});case Me.Home:case Me.PageUp:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:zn.First});case Me.End:case Me.PageDown:return d.preventDefault(),d.stopPropagation(),s({type:2,focus:zn.Last});case Me.Escape:d.preventDefault(),d.stopPropagation(),s({type:1}),rt().nextFrame(()=>{var E;return(E=l.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})});break;case Me.Tab:d.preventDefault(),d.stopPropagation(),s({type:1}),rt().nextFrame(()=>{qy(l.buttonRef.current,d.shiftKey?ct.Previous:ct.Next)});break;default:d.key.length===1&&(s({type:3,value:d.key}),f.setTimeout(()=>s({type:4}),350));break}}),C=ue(d=>{switch(d.key){case Me.Space:d.preventDefault();break}}),v=y.useMemo(()=>({open:l.menuState===0}),[l]),g={"aria-activedescendant":l.activeItemIndex===null||(t=l.items[l.activeItemIndex])==null?void 0:t.id,"aria-labelledby":(r=l.buttonRef.current)==null?void 0:r.id,id:o,onKeyDown:k,onKeyUp:C,role:"menu",tabIndex:0,ref:u};return Ye({ourProps:g,theirProps:a,slot:v,defaultTag:Fw,features:Vw,visible:M,name:"Menu.Items"})}let Bw=y.Fragment;function $w(e,n){let t=qn(),{id:r=`headlessui-menu-item-${t}`,disabled:i=!1,...o}=e,[a,l]=fl("Menu.Item"),s=a.activeItemIndex!==null?a.items[a.activeItemIndex].id===r:!1,u=y.useRef(null),h=Xe(n,u);nn(()=>{if(a.menuState!==0||!s||a.activationTrigger===0)return;let I=rt();return I.requestAnimationFrame(()=>{var E,N;(N=(E=u.current)==null?void 0:E.scrollIntoView)==null||N.call(E,{block:"nearest"})}),I.dispose},[u,s,a.menuState,a.activationTrigger,a.activeItemIndex]);let f=y.useRef({disabled:i,domRef:u});nn(()=>{f.current.disabled=i},[f,i]),nn(()=>{var I,E;f.current.textValue=(E=(I=u.current)==null?void 0:I.textContent)==null?void 0:E.toLowerCase()},[f,u]),nn(()=>(l({type:5,id:r,dataRef:f}),()=>l({type:6,id:r})),[f,r]);let m=ue(()=>{l({type:1})}),M=ue(I=>{if(i)return I.preventDefault();l({type:1}),Hp(a.buttonRef.current)}),k=ue(()=>{if(i)return l({type:2,focus:zn.Nothing});l({type:2,focus:zn.Specific,id:r})}),C=e1(),v=ue(I=>C.update(I)),g=ue(I=>{C.wasMoved(I)&&(i||s||l({type:2,focus:zn.Specific,id:r,trigger:0}))}),d=ue(I=>{C.wasMoved(I)&&(i||s&&l({type:2,focus:zn.Nothing}))}),w=y.useMemo(()=>({active:s,disabled:i,close:m}),[s,i,m]);return Ye({ourProps:{id:r,ref:h,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,disabled:void 0,onClick:M,onFocus:k,onPointerEnter:v,onMouseEnter:v,onPointerMove:g,onMouseMove:g,onPointerLeave:d,onMouseLeave:d},theirProps:o,slot:w,defaultTag:Bw,name:"Menu.Item"})}let zw=je(Lw),jw=je(Ow),Hw=je(Uw),Ww=je($w),Vn=Object.assign(zw,{Button:jw,Items:Hw,Item:Ww});function qw(e=0){let[n,t]=y.useState(e),r=y.useCallback(l=>t(s=>s|l),[n]),i=y.useCallback(l=>!!(n&l),[n]),o=y.useCallback(l=>t(s=>s&~l),[t]),a=y.useCallback(l=>t(s=>s^l),[t]);return{flags:n,addFlag:r,hasFlag:i,removeFlag:o,toggleFlag:a}}function Kw(e){let n={called:!1};return(...t)=>{if(!n.called)return n.called=!0,e(...t)}}function ss(e,...n){e&&n.length>0&&e.classList.add(...n)}function us(e,...n){e&&n.length>0&&e.classList.remove(...n)}function Yw(e,n){let t=rt();if(!e)return t.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[o,a]=[r,i].map(s=>{let[u=0]=s.split(",").filter(Boolean).map(h=>h.includes("ms")?parseFloat(h):parseFloat(h)*1e3).sort((h,f)=>f-h);return u}),l=o+a;if(l!==0){t.group(u=>{u.setTimeout(()=>{n(),u.dispose()},l),u.addEventListener(e,"transitionrun",h=>{h.target===h.currentTarget&&u.dispose()})});let s=t.addEventListener(e,"transitionend",u=>{u.target===u.currentTarget&&(n(),s())})}else n();return t.add(()=>n()),t.dispose}function Qw(e,n,t,r){let i=t?"enter":"leave",o=rt(),a=r!==void 0?Kw(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let l=_e(i,{enter:()=>n.enter,leave:()=>n.leave}),s=_e(i,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),u=_e(i,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom});return us(e,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),ss(e,...l,...u),o.nextFrame(()=>{us(e,...u),ss(e,...s),Yw(e,()=>(us(e,...l),ss(e,...n.entered),a()))}),o.dispose}function Gw({container:e,direction:n,classes:t,onStart:r,onStop:i}){let o=dl(),a=ko(),l=mt(n);nn(()=>{let s=rt();a.add(s.dispose);let u=e.current;if(u&&l.current!=="idle"&&o.current)return s.dispose(),r.current(l.current),s.add(Qw(u,t.current,l.current==="enter",()=>{s.dispose(),i.current(l.current)})),s.dispose},[n])}function Zt(e=""){return e.split(" ").filter(n=>n.trim().length>1)}let hl=y.createContext(null);hl.displayName="TransitionContext";var Jw=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Jw||{});function Xw(){let e=y.useContext(hl);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Zw(){let e=y.useContext(pl);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let pl=y.createContext(null);pl.displayName="NestingContext";function ml(e){return"children"in e?ml(e.children):e.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function lm(e,n){let t=mt(e),r=y.useRef([]),i=dl(),o=ko(),a=ue((M,k=ht.Hidden)=>{let C=r.current.findIndex(({el:v})=>v===M);C!==-1&&(_e(k,{[ht.Unmount](){r.current.splice(C,1)},[ht.Hidden](){r.current[C].state="hidden"}}),o.microTask(()=>{var v;!ml(r)&&i.current&&((v=t.current)==null||v.call(t))}))}),l=ue(M=>{let k=r.current.find(({el:C})=>C===M);return k?k.state!=="visible"&&(k.state="visible"):r.current.push({el:M,state:"visible"}),()=>a(M,ht.Unmount)}),s=y.useRef([]),u=y.useRef(Promise.resolve()),h=y.useRef({enter:[],leave:[],idle:[]}),f=ue((M,k,C)=>{s.current.splice(0),n&&(n.chains.current[k]=n.chains.current[k].filter(([v])=>v!==M)),n==null||n.chains.current[k].push([M,new Promise(v=>{s.current.push(v)})]),n==null||n.chains.current[k].push([M,new Promise(v=>{Promise.all(h.current[k].map(([g,d])=>d)).then(()=>v())})]),k==="enter"?u.current=u.current.then(()=>n==null?void 0:n.wait.current).then(()=>C(k)):C(k)}),m=ue((M,k,C)=>{Promise.all(h.current[k].splice(0).map(([v,g])=>g)).then(()=>{var v;(v=s.current.shift())==null||v()}).then(()=>C(k))});return y.useMemo(()=>({children:r,register:l,unregister:a,onStart:f,onStop:m,wait:u,chains:h}),[l,a,r,f,m,h,u])}function e2(){}let n2=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function uf(e){var n;let t={};for(let r of n2)t[r]=(n=e[r])!=null?n:e2;return t}function t2(e){let n=y.useRef(uf(e));return y.useEffect(()=>{n.current=uf(e)},[e]),n}let r2="div",sm=jt.RenderStrategy;function i2(e,n){let{beforeEnter:t,afterEnter:r,beforeLeave:i,afterLeave:o,enter:a,enterFrom:l,enterTo:s,entered:u,leave:h,leaveFrom:f,leaveTo:m,...M}=e,k=y.useRef(null),C=Xe(k,n),v=M.unmount?ht.Unmount:ht.Hidden,{show:g,appear:d,initial:w}=Xw(),[I,E]=y.useState(g?"visible":"hidden"),N=Zw(),{register:D,unregister:L}=N,G=y.useRef(null);y.useEffect(()=>D(k),[D,k]),y.useEffect(()=>{if(v===ht.Hidden&&k.current){if(g&&I!=="visible"){E("visible");return}return _e(I,{hidden:()=>L(k),visible:()=>D(k)})}},[I,k,D,L,g,v]);let W=mt({enter:Zt(a),enterFrom:Zt(l),enterTo:Zt(s),entered:Zt(u),leave:Zt(h),leaveFrom:Zt(f),leaveTo:Zt(m)}),oe=t2({beforeEnter:t,afterEnter:r,beforeLeave:i,afterLeave:o}),he=ii();y.useEffect(()=>{if(he&&I==="visible"&&k.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[k,I,he]);let ve=w&&!d,Oe=(()=>!he||ve||G.current===g?"idle":g?"enter":"leave")(),Te=qw(0),Ze=ue(ee=>_e(ee,{enter:()=>{Te.addFlag(Le.Opening),oe.current.beforeEnter()},leave:()=>{Te.addFlag(Le.Closing),oe.current.beforeLeave()},idle:()=>{}})),on=ue(ee=>_e(ee,{enter:()=>{Te.removeFlag(Le.Opening),oe.current.afterEnter()},leave:()=>{Te.removeFlag(Le.Closing),oe.current.afterLeave()},idle:()=>{}})),z=lm(()=>{E("hidden"),L(k)},N);Gw({container:k,classes:W,direction:Oe,onStart:mt(ee=>{z.onStart(k,ee,Ze)}),onStop:mt(ee=>{z.onStop(k,ee,on),ee==="leave"&&!ml(z)&&(E("hidden"),L(k))})}),y.useEffect(()=>{ve&&(v===ht.Hidden?G.current=null:G.current=g)},[g,ve,I]);let X=M,q={ref:C};return d&&g&&et.isServer&&(X={...X,className:Gp(M.className,...W.current.enter,...W.current.enterFrom)}),ie.createElement(pl.Provider,{value:z},ie.createElement(yc,{value:_e(I,{visible:Le.Open,hidden:Le.Closed})|Te.flags},Ye({ourProps:q,theirProps:X,defaultTag:r2,features:sm,visible:I==="visible",name:"Transition.Child"})))}function o2(e,n){let{show:t,appear:r=!1,unmount:i,...o}=e,a=y.useRef(null),l=Xe(a,n);ii();let s=Co();if(t===void 0&&s!==null&&(t=(s&Le.Open)===Le.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,h]=y.useState(t?"visible":"hidden"),f=lm(()=>{h("hidden")}),[m,M]=y.useState(!0),k=y.useRef([t]);nn(()=>{m!==!1&&k.current[k.current.length-1]!==t&&(k.current.push(t),M(!1))},[k,t]);let C=y.useMemo(()=>({show:t,appear:r,initial:m}),[t,r,m]);y.useEffect(()=>{if(t)h("visible");else if(!ml(f))h("hidden");else{let g=a.current;if(!g)return;let d=g.getBoundingClientRect();d.x===0&&d.y===0&&d.width===0&&d.height===0&&h("hidden")}},[t,f]);let v={unmount:i};return ie.createElement(pl.Provider,{value:f},ie.createElement(hl.Provider,{value:C},Ye({ourProps:{...v,as:y.Fragment,children:ie.createElement(um,{ref:l,...v,...o})},theirProps:{},defaultTag:y.Fragment,features:sm,visible:u==="visible",name:"Transition"})))}function a2(e,n){let t=y.useContext(hl)!==null,r=Co()!==null;return ie.createElement(ie.Fragment,null,!t&&r?ie.createElement(hu,{ref:n,...e}):ie.createElement(um,{ref:n,...e}))}let hu=je(o2),um=je(i2),l2=je(a2),qi=Object.assign(hu,{Child:l2,Root:hu});function s2({title:e,imgUrl:n,stack:t,link:r,blurb:i}){const[o,a]=y.useState(!1),l=y.useRef(null);return J(nt,{children:[J("button",{onClick:()=>a(!0),rel:"noopener noreferrer",className:`bg-gray-50 dark:bg-black border-2 border-stone-900 
                dark:border-white rounded-md overflow-hidden shadow-sm 
                shadow-purple-500 dark:shadow-orange-500`,children:[S("img",{src:n,alt:"portfolio",className:"w-full h-36 md:h-48 object-cover cursor-pointer"}),J("div",{className:"w-full p-4",children:[S("h3",{className:"text-lg md:text-xl mb-2 md:mb-3 font-semibold","dark:text-white":!0,children:e}),S("p",{className:`flex flex-wrap gap-2 flex-row items-center justify-start 
                text-xs md:text-sm dark:text-white dark:black`,children:t.map(s=>S("span",{className:"inline-block px-2 py-1 font-semibold border-2 border-stone-900 bg-white dark:bg-black dark:border-white rounded-md",children:s}))})]})]}),S(qi.Root,{show:o,as:y.Fragment,children:J(as,{as:"div",className:"relative z-10",initialFocus:l,onClose:a,children:[S(qi.Child,{as:y.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:S("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),S("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:S("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:S(qi.Child,{as:y.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:J(as.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[S("div",{className:"bg-white dark:bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:S("div",{className:"sm:flex sm:items-start",children:J("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[S(as.Title,{as:"h3",className:"text-base dark:text-white font-semibold leading-6 text-gray-900",children:e}),S("div",{className:"mt-2",children:S("p",{className:"text-sm text-gray-500 dark:text-gray-200",children:i})})]})})}),J("div",{className:"bg-gray-50 dark:bg-gray-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[r==="#"?null:S("a",{href:r,target:r==="#"?"_self":"_blank",className:"inline-flex w-full justify-center rounded-md bg-purple-500 dark:bg-orange-500 px-3 py-2 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>a(!1),children:"Go To Website"}),S("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>a(!1),ref:l,children:"Cancel"})]})]})})})})]})})]})}function u2(){return S("div",{className:"flex flex-col md:flex-row items-center justify-center scroll-p-8 ",children:S("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ",children:Uy.map(e=>S(s2,{imgUrl:e.imgUrl,title:e.title,stack:e.stack,link:e.link,blurb:e.blurb,className:"shadow-sm shadow-violet-900"}))})})}const c2=[{year:"Today",title:"Sr Manager of Projects and Technology",duration:"2 Years",details:"Migrated SharePoint apps to Teams as well as created new PowerApps and PowerAutomate flows. Migrated Twilio application from Excel and sheets to a PowerApp. Migrated from SugarCRM to Salesforce. Installed and configured Ubiquity security cameras, NVR, APs, and access control. Managed the transistion to remote work during the pandemic while simutaneously migrating from on-prem to the cloud. Implemented contactless visitor check-in via Balena.IO project. Used the PowerPlatform to create global automation tools for managing the continuous improvement projects and resources."},{year:"2017",title:"IT Manager",duration:"4 Years",details:"Worked extensively on SharePoint custom applications and workflows. Migrated from SAP CRM to SugarCRM Cloud. Set up and configured a global on prem SugarCRM instance. Installed Starleaf/ClickShare conference room systems. Installed Cisco Wifi controller and 18 APs with AD integration. Managed local QlikSense applications linked to SAP, SugarCRM, and excel workbooks. Installed and configured Hikvision security cameras and NVR. Implemented LiquidPlanner for operations, engineering, and service project management. Championed a local continuous improvement initiative started by our parent company in Germany."},{year:"2015",title:"IT Specialist",duration:"2 Years",details:"Managed on prem AD, file servers, print servers, IT budgets and procurement, service contracts, SAP users, and migrated company intranet to SharePoint 2013. Created the Twilio Emergency Response app for automating ringdown calls and sms."},{year:"2013",title:"Laboratory Technician",duration:"2 Years",details:"Ran particle size reduction feasibiility testing, used Horiba and Malvern Instruments partical size analyzers, wrote test reports and communicated findings with customers. Was also in charge of laboratory supplies procurement and hazardous shipping. Occasional updates to Allen Bradley PLC, HMI, and Drive programming."}];function d2({year:e,title:n,duration:t,details:r}){return e==="Today"?S("ol",{className:"flex flex-col md:flex-row relative border-l border-violet-400 dark:border-orange-700",children:J("li",{className:"mb-10 ml-4",children:[S("div",{className:"absolute w-3 h-3 bg-violet-200 rouded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-sky-700"}),J("p",{className:"flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm",children:[S("span",{className:`inline-block px-2 py1 font-semibold text-stone-900 
                    dark:text-stone-800 bg-sky-500 dark:bg-orange-700 rounded-md
                    `,children:e}),S("h3",{className:"text-lg font-semibold text-stone-900 dark:text-white",children:n}),S("div",{className:"my-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-500",children:t})]}),S("p",{className:"my-2 text-base font-normal text-stone-600 dark:text-stone-400",children:r})]})}):S("ol",{className:"flex flex-col md:flex-row relative border-l border-violet-400 dark:border-orange-700",children:J("li",{className:"mb-10 ml-4",children:[S("div",{className:"absolute w-3 h-3 bg-violet-200 rouded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-sky-700"}),J("p",{className:"flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm",children:[S("span",{className:`inline-block px-2 py1 font-semibold text-white 
                        dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md
                        `,children:e}),S("h3",{className:"text-lg font-semibold text-stone-900 dark:text-white",children:n}),S("div",{className:"my-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-500",children:t})]}),S("p",{className:"my-2 text-base font-normal text-stone-600 dark:text-stone-400",children:r})]})})}function cm({children:e,id:n}){return S("h1",{id:n&&n,className:"text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-orange-600",children:e})}function f2(){return S("div",{className:"flex flex-col md:flex-row justify-center my-10 ",children:J("div",{className:"w-full md:w-7/12",children:[S(cm,{children:"Timeline"}),c2.map(e=>S(d2,{year:e.year,title:e.title,duration:e.duration,details:e.details}))]})})}function h2(){return S("div",{id:"Contact",className:"flex flex-col mb-10 mx-auto",children:S("div",{className:"flex justify-center items-center",children:J("form",{action:"hhttps://getform.io/f/34a3f97a-ff80-431e-8aaf-a83240c5375d",method:"Post",className:"flex flex-col w-full md:w-7/12 ",children:[S(cm,{children:"Contact"}),S("input",{type:"text",name:"name",placeholder:"Name",className:"p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),S("input",{type:"text",name:"email",placeholder:"Email",className:"my-2 p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),S("textarea",{name:"message",placeholder:"Message",rows:"10",className:"p-2 mb-4 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),S("button",{type:"button",className:`mt-3 text-center inline-block
             px-8 py-3 w-max text-base font-medium 
             rounded-md text-white 
             bg-gradient-to-r from-green-400 via-pink-400 via-red-200 to-sky-500
             dark:from-slate-900 dark:via-purple-900 dark:to-slate-900
             `,children:"Contact Me"})]})})})}function p2(){return J("div",{className:"py-5 text-center",children:[S("p",{children:J("div",{class:"flex flex-wrap justify-center p-2 gap-4",children:[S("a",{href:"https://twit.social/@JohnBoyes",target:"_blank",children:S("button",{class:"text-white font-semibold inline-flex items-center space-x-2 rounded  dark:border-none",children:J("svg",{class:"w-9 h-9 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 10 220 220",children:[S("path",{fill:"#2b90d9",d:"M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"}),S("path",{fill:"#fff",d:"M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"})]})})}),S("a",{href:"https://www.instagram.com/johnboyes.dev",target:"_blank",children:S("button",{class:"font-semibold text-white inline-flex items-center space-x-2 rounded",children:S("svg",{className:"h-9 w-9 fill-white rounded-md bg-gradient-to-br from-purple-800  via-orange-500 to-red-70",xmlns:"http://www.w3.org/2000/svg",viewBox:"-2.5 -2.5 21 21",children:S("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})})}),S("a",{href:"https://www.linkedin.com/in/john-boyes-9258a652/",target:"_blank",children:S("button",{class:"bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded",children:S("svg",{class:"w-5 h-5 fill-current",role:"img",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:S("g",{children:S("path",{d:"M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"})})})})}),S("a",{href:"https://www.youtube.com/channel/UCsrLFCXWbkioeStbXK8t1mQ",target:"_blank",children:S("button",{class:"bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded",children:S("svg",{class:"w-5 h-5 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:S("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"})})})}),S("a",{href:"https://github.com/John-Boyes",target:"_blank",children:S("button",{class:"bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded",children:S("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"w-5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:S("g",{fill:"none",children:S("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"currentColor"})})})})}),S("a",{href:"https://open.spotify.com/show/5bhUys8UthVfUXZLgOZX7Q",target:"_blank",children:S("button",{class:"bg-gray-700 p-2 font-semibold text-green-500 inline-flex items-center space-x-2 rounded",children:S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-spotify",viewBox:"0 0 16 16",children:S("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"})})})})]})}),J("p",{className:"text-sm mt-2 opacity-50",children:["© ",new Date().getFullYear()," Boyes Innovations Group, LLC. All rights reserved."]})]})}function m2(){return S(nt,{children:S("div",{className:`
        bg-gradient-to-bl from-sky-50 via-rose-100 to-sky-500
        dark:from-stone-800 dark:to-sky-900 text-stone-900 
             dark:text-stone-300 min-h-[calc(100vh-16)] font-inter mx-auto `,children:J("div",{className:"max-w-5xl w-11/12 mx-auto",children:[S(Vy,{}),S("div",{id:"Portfolio",class:"section"}),S(u2,{}),S("div",{id:"Timeline",class:"section"}),S(f2,{}),S("div",{id:"Timeline",class:"section"}),S(h2,{}),S("div",{id:"Timeline",class:"section"}),S(p2,{}),S("div",{id:"Timeline",class:"section"})]})})})}const ha=y;function g2({title:e,titleId:n,...t},r){return ha.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":n},t),e?ha.createElement("title",{id:n},e):null,ha.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const v2=ha.forwardRef(g2);var y2=v2;const pa=y;function w2({title:e,titleId:n,...t},r){return pa.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":n},t),e?pa.createElement("title",{id:n},e):null,pa.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}const b2=pa.forwardRef(w2);var S2=b2,k2=y2,x2=S2;function C2(){const[e,n]=y.useState(null);y.useEffect(()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?n("dark"):n("light")},[]);const t=()=>{n(e==="dark"?"light":"dark")};y.useEffect(()=>{e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const r=S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",strokeWidth:2.5,stroke:"currentColor",className:"w-6 h-6",children:S("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),i=S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",strokeWidth:2.5,stroke:"currentColor",className:"w-6 h-6",children:S("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})});return window.innerWidth<730?S(nt,{children:S("button",{type:"button",onClick:t,"aria-hidden":"true",className:"p-2 z-10 right-20 top-4 bg-violet-700 dark:bg-orange-500 text-lg p-1 rounded-md",children:e==="dark"?r:i})}):J(nt,{children:[S("span",{class:"mr-2 text-sm font-medium text-yellow-500",children:r}),J("label",{class:"relative inline-flex items-center cursor-pointer",children:[S("input",{id:"toggle",type:"checkbox",defaultChecked:e==="dark",class:"sr-only peer",onClick:t}),S("div",{class:`
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
            `})]}),S("span",{class:"ml-2 text-sm font-medium text-blue-600",children:i})]})}const cf=[{name:"Projects",href:"#Portfolio",current:!1},{name:"Work",href:"#Timeline",current:!1},{name:"Contact",href:"#Contact",current:!1}],df=[{name:"Transplant Alliance 501(c)(3)",href:"https://transplantalliance.org",target:"_blank"},{name:"Ready Viewer One Podcast",href:"https://readyviewerone.buzzsprout.com/",target:"_blank"}];function at(...e){return e.filter(Boolean).join(" ")}function E2(e){return S(Ii,{as:"nav",className:`sticky top-0 z-50 
    bg-gradient-to-b from-sky-500 via-sky-500 via-sky-500 to-sky-500/60 
    dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80
    `,children:({open:n})=>J(nt,{children:[S("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:J("div",{className:"relative flex h-16 items-center justify-between",children:[S("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:J(Ii.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[S("span",{className:"sr-only",children:"Open main menu"}),n?S(x2,{className:"block h-6 w-6","aria-hidden":"true"}):S(k2,{className:"block h-6 w-6","aria-hidden":"true"})]})}),J("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[S("div",{className:"flex flex-shrink-0 items-center",children:S("a",{href:"#",children:S("span",{className:"dark:text-orange-500 text-stone-100 font-bold",children:"JohnBoyes.dev"})})}),S("div",{className:"hidden sm:ml-6 sm:block",children:J("div",{className:"flex space-x-4",children:[cf.map(t=>S("a",{href:t.href,className:at(t.current?"bg-gray-900 text-white":"text-purple-100 dark:text-gray-300 hover:bg-sky-700 dark:hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name)),J(Vn,{as:"div",className:"relative inline-block text-left",children:[S("div",{children:S(Vn.Button,{className:"text-purple-100 dark:text-gray-300 hover:bg-sky-700 dark:hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ",children:"Passions"})}),S(qi,{as:y.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:S(Vn.Items,{className:`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md
                          bg-stone-200 dark:bg-gray-700 dark:text-white shadow-lg shadow-purple-500 dark:shadow-orange-500 ring-1 ring-black ring-opacity-5 
                          focus:outline-none`,children:S("div",{className:"py-1",children:df.map(t=>S("a",{href:t.href,target:t.target,className:at(t.current?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),"aria-current":t.current?"page":void 0,children:t.name},t.name))})})})]})]})})]}),J("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[S(C2,{}),J(Vn,{as:"div",className:"relative ml-3",children:[S("div",{children:J(Vn.Button,{className:"flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800",children:[S("span",{className:"sr-only",children:"Open user menu"}),S("img",{className:"h-10 w-10 rounded-full",src:"/assets/profile.jpeg",alt:""})]})}),S(qi,{as:y.Fragment,enter:"transition ease-out duration-500",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:J(Vn.Items,{className:`absolute right-0 z-10 mt-2 w-48 origin-top-right 
                      rounded-md bg-stone-200 dark:bg-gray-700 dark:text-white shadow-lg shadow-purple-500 dark:shadow-orange-500 ring-1 ring-black ring-opacity-5 
                      focus:outline-none `,children:[S(Vn.Item,{children:({active:t})=>J("a",{href:"https://twit.social/@JohnBoyes",target:"_blank",style:{display:"flex"},className:at(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 pt-4 pb-2 text-sm "),children:[J("svg",{class:"w-6 h-6 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 10 220 220",children:[S("path",{fill:"#2b90d9",d:"M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"}),S("path",{fill:"#fff",d:"M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"})]}),"  Mastodon"]})}),S(Vn.Item,{children:({active:t})=>J("a",{href:"https://www.instagram.com/johnboyes.dev",target:"_blank",style:{display:"flex"},className:at(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm"),children:[S("svg",{className:"h-6 w-6 fill-white rounded-md bg-gradient-to-br from-purple-800  via-orange-500 to-red-70",xmlns:"http://www.w3.org/2000/svg",viewBox:"-2.5 -2.5 21 21",children:S("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})}),"  Instagram"]})}),S(Vn.Item,{children:({active:t})=>J("a",{href:"https://www.linkedin.com/in/john-boyes-9258a652/",target:"_blank",style:{display:"flex"},className:at(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),children:[S("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 80",children:J("g",{fill:"none","fill-rule":"evenodd",children:[S("path",{d:"M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z",fill:"#007EBB"}),S("path",{d:"M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z",fill:"#FFF"})]})}),"  LinkedIn"]})}),S(Vn.Item,{children:({active:t})=>J("a",{href:"https://github.com/John-Boyes",target:"_blank",style:{display:"flex"},className:at(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),children:[S("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"w-5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:S("g",{fill:"none",children:S("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"currentColor"})})}),"  Github"]})}),S(Vn.Item,{children:({active:t})=>J("a",{href:"https://open.spotify.com/show/5bhUys8UthVfUXZLgOZX7Q",target:"_blank",style:{display:"flex"},className:at(t?"bg-gray-900":"","hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm "),children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#1db954",class:"bi bi-spotify",viewBox:"0 0 16 16",children:S("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"})}),"  Spotify"]})})]})})]})]})]})}),S(Ii.Panel,{className:"sm:hidden",children:J("div",{className:"space-y-1 px-2 pt-2 pb-3 divide-y divide-gray-500",children:[S("div",{className:"py-1",children:cf.map(t=>S(Ii.Button,{as:"a",href:t.href,className:at(t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name))}),S("div",{className:"py-1",children:df.map(t=>S(Ii.Button,{as:"a",href:t.href,className:at(t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name))})]})})]})})}function T2(){const e=_p();return J(nt,{children:[S(E2,{}),S("div",{id:"detail",className:e.state==="loading"?"loading":"",children:S(Vp,{})})]})}var ja={},M2={get exports(){return ja},set exports(e){ja=e}},dm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},fm=Object.keys(dm).join("|"),A2=new RegExp(fm,"g"),I2=new RegExp(fm,""),hm=function(e){return e.replace(A2,function(n){return dm[n]})},P2=function(e){return!!e.match(I2)};M2.exports=hm;ja.has=P2;ja.remove=hm;const Tc=[{id:7,modified:"2023-03-16T20:04:02",slug:"disclaimer",title:{rendered:"Disclaimer"},content:{rendered:`
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
`,protected:!1}}];function Zo(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ff={},D2={get exports(){return ff},set exports(e){ff=e}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(e,n){(function(t){e.exports=t()})(function(){return function t(r,i,o){function a(u,h){if(!i[u]){if(!r[u]){var f=typeof Zo=="function"&&Zo;if(!h&&f)return f(u,!0);if(l)return l(u,!0);var m=new Error("Cannot find module '"+u+"'");throw m.code="MODULE_NOT_FOUND",m}var M=i[u]={exports:{}};r[u][0].call(M.exports,function(k){var C=r[u][1][k];return a(C||k)},M,M.exports,t,r,i,o)}return i[u].exports}for(var l=typeof Zo=="function"&&Zo,s=0;s<o.length;s++)a(o[s]);return a}({1:[function(t,r,i){(function(o){var a=o.MutationObserver||o.WebKitMutationObserver,l;if(a){var s=0,u=new a(k),h=o.document.createTextNode("");u.observe(h,{characterData:!0}),l=function(){h.data=s=++s%2}}else if(!o.setImmediate&&typeof o.MessageChannel<"u"){var f=new o.MessageChannel;f.port1.onmessage=k,l=function(){f.port2.postMessage(0)}}else"document"in o&&"onreadystatechange"in o.document.createElement("script")?l=function(){var v=o.document.createElement("script");v.onreadystatechange=function(){k(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},o.document.documentElement.appendChild(v)}:l=function(){setTimeout(k,0)};var m,M=[];function k(){m=!0;for(var v,g,d=M.length;d;){for(g=M,M=[],v=-1;++v<d;)g[v]();d=M.length}m=!1}r.exports=C;function C(v){M.push(v)===1&&!m&&l()}}).call(this,typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,r,i){var o=t(1);function a(){}var l={},s=["REJECTED"],u=["FULFILLED"],h=["PENDING"];r.exports=f;function f(E){if(typeof E!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,E!==a&&C(this,E)}f.prototype.catch=function(E){return this.then(null,E)},f.prototype.then=function(E,N){if(typeof E!="function"&&this.state===u||typeof N!="function"&&this.state===s)return this;var D=new this.constructor(a);if(this.state!==h){var L=this.state===u?E:N;M(D,L,this.outcome)}else this.queue.push(new m(D,E,N));return D};function m(E,N,D){this.promise=E,typeof N=="function"&&(this.onFulfilled=N,this.callFulfilled=this.otherCallFulfilled),typeof D=="function"&&(this.onRejected=D,this.callRejected=this.otherCallRejected)}m.prototype.callFulfilled=function(E){l.resolve(this.promise,E)},m.prototype.otherCallFulfilled=function(E){M(this.promise,this.onFulfilled,E)},m.prototype.callRejected=function(E){l.reject(this.promise,E)},m.prototype.otherCallRejected=function(E){M(this.promise,this.onRejected,E)};function M(E,N,D){o(function(){var L;try{L=N(D)}catch(G){return l.reject(E,G)}L===E?l.reject(E,new TypeError("Cannot resolve promise with itself")):l.resolve(E,L)})}l.resolve=function(E,N){var D=v(k,N);if(D.status==="error")return l.reject(E,D.value);var L=D.value;if(L)C(E,L);else{E.state=u,E.outcome=N;for(var G=-1,W=E.queue.length;++G<W;)E.queue[G].callFulfilled(N)}return E},l.reject=function(E,N){E.state=s,E.outcome=N;for(var D=-1,L=E.queue.length;++D<L;)E.queue[D].callRejected(N);return E};function k(E){var N=E&&E.then;if(E&&(typeof E=="object"||typeof E=="function")&&typeof N=="function")return function(){N.apply(E,arguments)}}function C(E,N){var D=!1;function L(he){D||(D=!0,l.reject(E,he))}function G(he){D||(D=!0,l.resolve(E,he))}function W(){N(G,L)}var oe=v(W);oe.status==="error"&&L(oe.value)}function v(E,N){var D={};try{D.value=E(N),D.status="success"}catch(L){D.status="error",D.value=L}return D}f.resolve=g;function g(E){return E instanceof this?E:l.resolve(new this(a),E)}f.reject=d;function d(E){var N=new this(a);return l.reject(N,E)}f.all=w;function w(E){var N=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=E.length,L=!1;if(!D)return this.resolve([]);for(var G=new Array(D),W=0,oe=-1,he=new this(a);++oe<D;)ve(E[oe],oe);return he;function ve(Oe,Te){N.resolve(Oe).then(Ze,function(on){L||(L=!0,l.reject(he,on))});function Ze(on){G[Te]=on,++W===D&&!L&&(L=!0,l.resolve(he,G))}}}f.race=I;function I(E){var N=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=E.length,L=!1;if(!D)return this.resolve([]);for(var G=-1,W=new this(a);++G<D;)oe(E[G]);return W;function oe(he){N.resolve(he).then(function(ve){L||(L=!0,l.resolve(W,ve))},function(ve){L||(L=!0,l.reject(W,ve))})}}},{1:1}],3:[function(t,r,i){(function(o){typeof o.Promise!="function"&&(o.Promise=t(2))}).call(this,typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,r,i){var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};function a(c,b){if(!(c instanceof b))throw new TypeError("Cannot call a class as a function")}function l(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var s=l();function u(){try{if(!s||!s.open)return!1;var c=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!c||b)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function h(c,b){c=c||[],b=b||{};try{return new Blob(c,b)}catch(x){if(x.name!=="TypeError")throw x;for(var p=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,T=new p,A=0;A<c.length;A+=1)T.append(c[A]);return T.getBlob(b.type)}}typeof Promise>"u"&&t(3);var f=Promise;function m(c,b){b&&c.then(function(p){b(null,p)},function(p){b(p)})}function M(c,b,p){typeof b=="function"&&c.then(b),typeof p=="function"&&c.catch(p)}function k(c){return typeof c!="string"&&(console.warn(c+" used as a key, but it is not a string."),c=String(c)),c}function C(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var v="local-forage-detect-blob-support",g=void 0,d={},w=Object.prototype.toString,I="readonly",E="readwrite";function N(c){for(var b=c.length,p=new ArrayBuffer(b),T=new Uint8Array(p),A=0;A<b;A++)T[A]=c.charCodeAt(A);return p}function D(c){return new f(function(b){var p=c.transaction(v,E),T=h([""]);p.objectStore(v).put(T,"key"),p.onabort=function(A){A.preventDefault(),A.stopPropagation(),b(!1)},p.oncomplete=function(){var A=navigator.userAgent.match(/Chrome\/(\d+)/),x=navigator.userAgent.match(/Edge\//);b(x||!A||parseInt(A[1],10)>=43)}}).catch(function(){return!1})}function L(c){return typeof g=="boolean"?f.resolve(g):D(c).then(function(b){return g=b,g})}function G(c){var b=d[c.name],p={};p.promise=new f(function(T,A){p.resolve=T,p.reject=A}),b.deferredOperations.push(p),b.dbReady?b.dbReady=b.dbReady.then(function(){return p.promise}):b.dbReady=p.promise}function W(c){var b=d[c.name],p=b.deferredOperations.pop();if(p)return p.resolve(),p.promise}function oe(c,b){var p=d[c.name],T=p.deferredOperations.pop();if(T)return T.reject(b),T.promise}function he(c,b){return new f(function(p,T){if(d[c.name]=d[c.name]||be(),c.db)if(b)G(c),c.db.close();else return p(c.db);var A=[c.name];b&&A.push(c.version);var x=s.open.apply(s,A);b&&(x.onupgradeneeded=function(_){var F=x.result;try{F.createObjectStore(c.storeName),_.oldVersion<=1&&F.createObjectStore(v)}catch(U){if(U.name==="ConstraintError")console.warn('The database "'+c.name+'" has been upgraded from version '+_.oldVersion+" to version "+_.newVersion+', but the storage "'+c.storeName+'" already exists.');else throw U}}),x.onerror=function(_){_.preventDefault(),T(x.error)},x.onsuccess=function(){var _=x.result;_.onversionchange=function(F){F.target.close()},p(_),W(c)}})}function ve(c){return he(c,!1)}function Oe(c){return he(c,!0)}function Te(c,b){if(!c.db)return!0;var p=!c.db.objectStoreNames.contains(c.storeName),T=c.version<c.db.version,A=c.version>c.db.version;if(T&&(c.version!==b&&console.warn('The database "'+c.name+`" can't be downgraded from version `+c.db.version+" to version "+c.version+"."),c.version=c.db.version),A||p){if(p){var x=c.db.version+1;x>c.version&&(c.version=x)}return!0}return!1}function Ze(c){return new f(function(b,p){var T=new FileReader;T.onerror=p,T.onloadend=function(A){var x=btoa(A.target.result||"");b({__local_forage_encoded_blob:!0,data:x,type:c.type})},T.readAsBinaryString(c)})}function on(c){var b=N(atob(c.data));return h([b],{type:c.type})}function z(c){return c&&c.__local_forage_encoded_blob}function X(c){var b=this,p=b._initReady().then(function(){var T=d[b._dbInfo.name];if(T&&T.dbReady)return T.dbReady});return M(p,c,c),p}function q(c){G(c);for(var b=d[c.name],p=b.forages,T=0;T<p.length;T++){var A=p[T];A._dbInfo.db&&(A._dbInfo.db.close(),A._dbInfo.db=null)}return c.db=null,ve(c).then(function(x){return c.db=x,Te(c)?Oe(c):x}).then(function(x){c.db=b.db=x;for(var _=0;_<p.length;_++)p[_]._dbInfo.db=x}).catch(function(x){throw oe(c,x),x})}function ee(c,b,p,T){T===void 0&&(T=1);try{var A=c.db.transaction(c.storeName,b);p(null,A)}catch(x){if(T>0&&(!c.db||x.name==="InvalidStateError"||x.name==="NotFoundError"))return f.resolve().then(function(){if(!c.db||x.name==="NotFoundError"&&!c.db.objectStoreNames.contains(c.storeName)&&c.version<=c.db.version)return c.db&&(c.version=c.db.version+1),Oe(c)}).then(function(){return q(c).then(function(){ee(c,b,p,T-1)})}).catch(p);p(x)}}function be(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function _n(c){var b=this,p={db:null};if(c)for(var T in c)p[T]=c[T];var A=d[p.name];A||(A=be(),d[p.name]=A),A.forages.push(b),b._initReady||(b._initReady=b.ready,b.ready=X);var x=[];function _(){return f.resolve()}for(var F=0;F<A.forages.length;F++){var U=A.forages[F];U!==b&&x.push(U._initReady().catch(_))}var B=A.forages.slice(0);return f.all(x).then(function(){return p.db=A.db,ve(p)}).then(function($){return p.db=$,Te(p,b._defaultConfig.version)?Oe(p):$}).then(function($){p.db=A.db=$,b._dbInfo=p;for(var Y=0;Y<B.length;Y++){var ae=B[Y];ae!==b&&(ae._dbInfo.db=p.db,ae._dbInfo.version=p.version)}})}function Fe(c,b){var p=this;c=k(c);var T=new f(function(A,x){p.ready().then(function(){ee(p._dbInfo,I,function(_,F){if(_)return x(_);try{var U=F.objectStore(p._dbInfo.storeName),B=U.get(c);B.onsuccess=function(){var $=B.result;$===void 0&&($=null),z($)&&($=on($)),A($)},B.onerror=function(){x(B.error)}}catch($){x($)}})}).catch(x)});return m(T,b),T}function ye(c,b){var p=this,T=new f(function(A,x){p.ready().then(function(){ee(p._dbInfo,I,function(_,F){if(_)return x(_);try{var U=F.objectStore(p._dbInfo.storeName),B=U.openCursor(),$=1;B.onsuccess=function(){var Y=B.result;if(Y){var ae=Y.value;z(ae)&&(ae=on(ae));var fe=c(ae,Y.key,$++);fe!==void 0?A(fe):Y.continue()}else A()},B.onerror=function(){x(B.error)}}catch(Y){x(Y)}})}).catch(x)});return m(T,b),T}function Ce(c,b,p){var T=this;c=k(c);var A=new f(function(x,_){var F;T.ready().then(function(){return F=T._dbInfo,w.call(b)==="[object Blob]"?L(F.db).then(function(U){return U?b:Ze(b)}):b}).then(function(U){ee(T._dbInfo,E,function(B,$){if(B)return _(B);try{var Y=$.objectStore(T._dbInfo.storeName);U===null&&(U=void 0);var ae=Y.put(U,c);$.oncomplete=function(){U===void 0&&(U=null),x(U)},$.onabort=$.onerror=function(){var fe=ae.error?ae.error:ae.transaction.error;_(fe)}}catch(fe){_(fe)}})}).catch(_)});return m(A,p),A}function we(c,b){var p=this;c=k(c);var T=new f(function(A,x){p.ready().then(function(){ee(p._dbInfo,E,function(_,F){if(_)return x(_);try{var U=F.objectStore(p._dbInfo.storeName),B=U.delete(c);F.oncomplete=function(){A()},F.onerror=function(){x(B.error)},F.onabort=function(){var $=B.error?B.error:B.transaction.error;x($)}}catch($){x($)}})}).catch(x)});return m(T,b),T}function kt(c){var b=this,p=new f(function(T,A){b.ready().then(function(){ee(b._dbInfo,E,function(x,_){if(x)return A(x);try{var F=_.objectStore(b._dbInfo.storeName),U=F.clear();_.oncomplete=function(){T()},_.onabort=_.onerror=function(){var B=U.error?U.error:U.transaction.error;A(B)}}catch(B){A(B)}})}).catch(A)});return m(p,c),p}function gl(c){var b=this,p=new f(function(T,A){b.ready().then(function(){ee(b._dbInfo,I,function(x,_){if(x)return A(x);try{var F=_.objectStore(b._dbInfo.storeName),U=F.count();U.onsuccess=function(){T(U.result)},U.onerror=function(){A(U.error)}}catch(B){A(B)}})}).catch(A)});return m(p,c),p}function vl(c,b){var p=this,T=new f(function(A,x){if(c<0){A(null);return}p.ready().then(function(){ee(p._dbInfo,I,function(_,F){if(_)return x(_);try{var U=F.objectStore(p._dbInfo.storeName),B=!1,$=U.openKeyCursor();$.onsuccess=function(){var Y=$.result;if(!Y){A(null);return}c===0||B?A(Y.key):(B=!0,Y.advance(c))},$.onerror=function(){x($.error)}}catch(Y){x(Y)}})}).catch(x)});return m(T,b),T}function Yt(c){var b=this,p=new f(function(T,A){b.ready().then(function(){ee(b._dbInfo,I,function(x,_){if(x)return A(x);try{var F=_.objectStore(b._dbInfo.storeName),U=F.openKeyCursor(),B=[];U.onsuccess=function(){var $=U.result;if(!$){T(B);return}B.push($.key),$.continue()},U.onerror=function(){A(U.error)}}catch($){A($)}})}).catch(A)});return m(p,c),p}function Mo(c,b){b=C.apply(this,arguments);var p=this.config();c=typeof c!="function"&&c||{},c.name||(c.name=c.name||p.name,c.storeName=c.storeName||p.storeName);var T=this,A;if(!c.name)A=f.reject("Invalid arguments");else{var x=c.name===p.name&&T._dbInfo.db,_=x?f.resolve(T._dbInfo.db):ve(c).then(function(F){var U=d[c.name],B=U.forages;U.db=F;for(var $=0;$<B.length;$++)B[$]._dbInfo.db=F;return F});c.storeName?A=_.then(function(F){if(F.objectStoreNames.contains(c.storeName)){var U=F.version+1;G(c);var B=d[c.name],$=B.forages;F.close();for(var Y=0;Y<$.length;Y++){var ae=$[Y];ae._dbInfo.db=null,ae._dbInfo.version=U}var fe=new f(function(me,Be){var Re=s.open(c.name,U);Re.onerror=function(An){var gi=Re.result;gi.close(),Be(An)},Re.onupgradeneeded=function(){var An=Re.result;An.deleteObjectStore(c.storeName)},Re.onsuccess=function(){var An=Re.result;An.close(),me(An)}});return fe.then(function(me){B.db=me;for(var Be=0;Be<$.length;Be++){var Re=$[Be];Re._dbInfo.db=me,W(Re._dbInfo)}}).catch(function(me){throw(oe(c,me)||f.resolve()).catch(function(){}),me})}}):A=_.then(function(F){G(c);var U=d[c.name],B=U.forages;F.close();for(var $=0;$<B.length;$++){var Y=B[$];Y._dbInfo.db=null}var ae=new f(function(fe,me){var Be=s.deleteDatabase(c.name);Be.onerror=function(){var Re=Be.result;Re&&Re.close(),me(Be.error)},Be.onblocked=function(){console.warn('dropInstance blocked for database "'+c.name+'" until all open connections are closed')},Be.onsuccess=function(){var Re=Be.result;Re&&Re.close(),fe(Re)}});return ae.then(function(fe){U.db=fe;for(var me=0;me<B.length;me++){var Be=B[me];W(Be._dbInfo)}}).catch(function(fe){throw(oe(c,fe)||f.resolve()).catch(function(){}),fe})})}return m(A,b),A}var oi={_driver:"asyncStorage",_initStorage:_n,_support:u(),iterate:ye,getItem:Fe,setItem:Ce,removeItem:we,clear:kt,length:gl,key:vl,keys:Yt,dropInstance:Mo};function ai(){return typeof openDatabase=="function"}var Mn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",yr="~~local_forage_type~",li=/^~~local_forage_type~([^~]+)~/,wr="__lfsc__:",br=wr.length,si="arbf",it="blob",Qt="si08",ui="ui08",Sr="uic8",Ao="si16",Io="si32",ci="ur16",Po="ui32",P="fl32",R="fl64",O=br+si.length,H=Object.prototype.toString;function K(c){var b=c.length*.75,p=c.length,T,A=0,x,_,F,U;c[c.length-1]==="="&&(b--,c[c.length-2]==="="&&b--);var B=new ArrayBuffer(b),$=new Uint8Array(B);for(T=0;T<p;T+=4)x=Mn.indexOf(c[T]),_=Mn.indexOf(c[T+1]),F=Mn.indexOf(c[T+2]),U=Mn.indexOf(c[T+3]),$[A++]=x<<2|_>>4,$[A++]=(_&15)<<4|F>>2,$[A++]=(F&3)<<6|U&63;return B}function Z(c){var b=new Uint8Array(c),p="",T;for(T=0;T<b.length;T+=3)p+=Mn[b[T]>>2],p+=Mn[(b[T]&3)<<4|b[T+1]>>4],p+=Mn[(b[T+1]&15)<<2|b[T+2]>>6],p+=Mn[b[T+2]&63];return b.length%3===2?p=p.substring(0,p.length-1)+"=":b.length%3===1&&(p=p.substring(0,p.length-2)+"=="),p}function ne(c,b){var p="";if(c&&(p=H.call(c)),c&&(p==="[object ArrayBuffer]"||c.buffer&&H.call(c.buffer)==="[object ArrayBuffer]")){var T,A=wr;c instanceof ArrayBuffer?(T=c,A+=si):(T=c.buffer,p==="[object Int8Array]"?A+=Qt:p==="[object Uint8Array]"?A+=ui:p==="[object Uint8ClampedArray]"?A+=Sr:p==="[object Int16Array]"?A+=Ao:p==="[object Uint16Array]"?A+=ci:p==="[object Int32Array]"?A+=Io:p==="[object Uint32Array]"?A+=Po:p==="[object Float32Array]"?A+=P:p==="[object Float64Array]"?A+=R:b(new Error("Failed to get type for BinaryArray"))),b(A+Z(T))}else if(p==="[object Blob]"){var x=new FileReader;x.onload=function(){var _=yr+c.type+"~"+Z(this.result);b(wr+it+_)},x.readAsArrayBuffer(c)}else try{b(JSON.stringify(c))}catch(_){console.error("Couldn't convert value into a JSON string: ",c),b(null,_)}}function te(c){if(c.substring(0,br)!==wr)return JSON.parse(c);var b=c.substring(O),p=c.substring(br,O),T;if(p===it&&li.test(b)){var A=b.match(li);T=A[1],b=b.substring(A[0].length)}var x=K(b);switch(p){case si:return x;case it:return h([x],{type:T});case Qt:return new Int8Array(x);case ui:return new Uint8Array(x);case Sr:return new Uint8ClampedArray(x);case Ao:return new Int16Array(x);case ci:return new Uint16Array(x);case Io:return new Int32Array(x);case Po:return new Uint32Array(x);case P:return new Float32Array(x);case R:return new Float64Array(x);default:throw new Error("Unkown type: "+p)}}var Q={serialize:ne,deserialize:te,stringToBuffer:K,bufferToString:Z};function pe(c,b,p,T){c.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],p,T)}function ce(c){var b=this,p={db:null};if(c)for(var T in c)p[T]=typeof c[T]!="string"?c[T].toString():c[T];var A=new f(function(x,_){try{p.db=openDatabase(p.name,String(p.version),p.description,p.size)}catch(F){return _(F)}p.db.transaction(function(F){pe(F,p,function(){b._dbInfo=p,x()},function(U,B){_(B)})},_)});return p.serializer=Q,A}function Ve(c,b,p,T,A,x){c.executeSql(p,T,A,function(_,F){F.code===F.SYNTAX_ERR?_.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(U,B){B.rows.length?x(U,F):pe(U,b,function(){U.executeSql(p,T,A,x)},x)},x):x(_,F)},x)}function Ue(c,b){var p=this;c=k(c);var T=new f(function(A,x){p.ready().then(function(){var _=p._dbInfo;_.db.transaction(function(F){Ve(F,_,"SELECT * FROM "+_.storeName+" WHERE key = ? LIMIT 1",[c],function(U,B){var $=B.rows.length?B.rows.item(0).value:null;$&&($=_.serializer.deserialize($)),A($)},function(U,B){x(B)})})}).catch(x)});return m(T,b),T}function He(c,b){var p=this,T=new f(function(A,x){p.ready().then(function(){var _=p._dbInfo;_.db.transaction(function(F){Ve(F,_,"SELECT * FROM "+_.storeName,[],function(U,B){for(var $=B.rows,Y=$.length,ae=0;ae<Y;ae++){var fe=$.item(ae),me=fe.value;if(me&&(me=_.serializer.deserialize(me)),me=c(me,fe.key,ae+1),me!==void 0){A(me);return}}A()},function(U,B){x(B)})})}).catch(x)});return m(T,b),T}function pn(c,b,p,T){var A=this;c=k(c);var x=new f(function(_,F){A.ready().then(function(){b===void 0&&(b=null);var U=b,B=A._dbInfo;B.serializer.serialize(b,function($,Y){Y?F(Y):B.db.transaction(function(ae){Ve(ae,B,"INSERT OR REPLACE INTO "+B.storeName+" (key, value) VALUES (?, ?)",[c,$],function(){_(U)},function(fe,me){F(me)})},function(ae){if(ae.code===ae.QUOTA_ERR){if(T>0){_(pn.apply(A,[c,U,p,T-1]));return}F(ae)}})})}).catch(F)});return m(x,p),x}function Gt(c,b,p){return pn.apply(this,[c,b,p,1])}function di(c,b){var p=this;c=k(c);var T=new f(function(A,x){p.ready().then(function(){var _=p._dbInfo;_.db.transaction(function(F){Ve(F,_,"DELETE FROM "+_.storeName+" WHERE key = ?",[c],function(){A()},function(U,B){x(B)})})}).catch(x)});return m(T,b),T}function Jt(c){var b=this,p=new f(function(T,A){b.ready().then(function(){var x=b._dbInfo;x.db.transaction(function(_){Ve(_,x,"DELETE FROM "+x.storeName,[],function(){T()},function(F,U){A(U)})})}).catch(A)});return m(p,c),p}function xt(c){var b=this,p=new f(function(T,A){b.ready().then(function(){var x=b._dbInfo;x.db.transaction(function(_){Ve(_,x,"SELECT COUNT(key) as c FROM "+x.storeName,[],function(F,U){var B=U.rows.item(0).c;T(B)},function(F,U){A(U)})})}).catch(A)});return m(p,c),p}function fi(c,b){var p=this,T=new f(function(A,x){p.ready().then(function(){var _=p._dbInfo;_.db.transaction(function(F){Ve(F,_,"SELECT key FROM "+_.storeName+" WHERE id = ? LIMIT 1",[c+1],function(U,B){var $=B.rows.length?B.rows.item(0).key:null;A($)},function(U,B){x(B)})})}).catch(x)});return m(T,b),T}function hi(c){var b=this,p=new f(function(T,A){b.ready().then(function(){var x=b._dbInfo;x.db.transaction(function(_){Ve(_,x,"SELECT key FROM "+x.storeName,[],function(F,U){for(var B=[],$=0;$<U.rows.length;$++)B.push(U.rows.item($).key);T(B)},function(F,U){A(U)})})}).catch(A)});return m(p,c),p}function Qe(c){return new f(function(b,p){c.transaction(function(T){T.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(A,x){for(var _=[],F=0;F<x.rows.length;F++)_.push(x.rows.item(F).name);b({db:c,storeNames:_})},function(A,x){p(x)})},function(T){p(T)})})}function bn(c,b){b=C.apply(this,arguments);var p=this.config();c=typeof c!="function"&&c||{},c.name||(c.name=c.name||p.name,c.storeName=c.storeName||p.storeName);var T=this,A;return c.name?A=new f(function(x){var _;c.name===p.name?_=T._dbInfo.db:_=openDatabase(c.name,"","",0),c.storeName?x({db:_,storeNames:[c.storeName]}):x(Qe(_))}).then(function(x){return new f(function(_,F){x.db.transaction(function(U){function B(fe){return new f(function(me,Be){U.executeSql("DROP TABLE IF EXISTS "+fe,[],function(){me()},function(Re,An){Be(An)})})}for(var $=[],Y=0,ae=x.storeNames.length;Y<ae;Y++)$.push(B(x.storeNames[Y]));f.all($).then(function(){_()}).catch(function(fe){F(fe)})},function(U){F(U)})})}):A=f.reject("Invalid arguments"),m(A,b),A}var ot={_driver:"webSQLStorage",_initStorage:ce,_support:ai(),iterate:He,getItem:Ue,setItem:Gt,removeItem:di,clear:Jt,length:xt,key:fi,keys:hi,dropInstance:bn};function Xt(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Do(c,b){var p=c.name+"/";return c.storeName!==b.storeName&&(p+=c.storeName+"/"),p}function yl(){var c="_localforage_support_test";try{return localStorage.setItem(c,!0),localStorage.removeItem(c),!1}catch{return!0}}function On(){return!yl()||localStorage.length>0}function pi(c){var b=this,p={};if(c)for(var T in c)p[T]=c[T];return p.keyPrefix=Do(c,b._defaultConfig),On()?(b._dbInfo=p,p.serializer=Q,f.resolve()):f.reject()}function Ro(c){var b=this,p=b.ready().then(function(){for(var T=b._dbInfo.keyPrefix,A=localStorage.length-1;A>=0;A--){var x=localStorage.key(A);x.indexOf(T)===0&&localStorage.removeItem(x)}});return m(p,c),p}function wl(c,b){var p=this;c=k(c);var T=p.ready().then(function(){var A=p._dbInfo,x=localStorage.getItem(A.keyPrefix+c);return x&&(x=A.serializer.deserialize(x)),x});return m(T,b),T}function pm(c,b){var p=this,T=p.ready().then(function(){for(var A=p._dbInfo,x=A.keyPrefix,_=x.length,F=localStorage.length,U=1,B=0;B<F;B++){var $=localStorage.key(B);if($.indexOf(x)===0){var Y=localStorage.getItem($);if(Y&&(Y=A.serializer.deserialize(Y)),Y=c(Y,$.substring(_),U++),Y!==void 0)return Y}}});return m(T,b),T}function mm(c,b){var p=this,T=p.ready().then(function(){var A=p._dbInfo,x;try{x=localStorage.key(c)}catch{x=null}return x&&(x=x.substring(A.keyPrefix.length)),x});return m(T,b),T}function gm(c){var b=this,p=b.ready().then(function(){for(var T=b._dbInfo,A=localStorage.length,x=[],_=0;_<A;_++){var F=localStorage.key(_);F.indexOf(T.keyPrefix)===0&&x.push(F.substring(T.keyPrefix.length))}return x});return m(p,c),p}function vm(c){var b=this,p=b.keys().then(function(T){return T.length});return m(p,c),p}function ym(c,b){var p=this;c=k(c);var T=p.ready().then(function(){var A=p._dbInfo;localStorage.removeItem(A.keyPrefix+c)});return m(T,b),T}function wm(c,b,p){var T=this;c=k(c);var A=T.ready().then(function(){b===void 0&&(b=null);var x=b;return new f(function(_,F){var U=T._dbInfo;U.serializer.serialize(b,function(B,$){if($)F($);else try{localStorage.setItem(U.keyPrefix+c,B),_(x)}catch(Y){(Y.name==="QuotaExceededError"||Y.name==="NS_ERROR_DOM_QUOTA_REACHED")&&F(Y),F(Y)}})})});return m(A,p),A}function bm(c,b){if(b=C.apply(this,arguments),c=typeof c!="function"&&c||{},!c.name){var p=this.config();c.name=c.name||p.name,c.storeName=c.storeName||p.storeName}var T=this,A;return c.name?A=new f(function(x){c.storeName?x(Do(c,T._defaultConfig)):x(c.name+"/")}).then(function(x){for(var _=localStorage.length-1;_>=0;_--){var F=localStorage.key(_);F.indexOf(x)===0&&localStorage.removeItem(F)}}):A=f.reject("Invalid arguments"),m(A,b),A}var Sm={_driver:"localStorageWrapper",_initStorage:pi,_support:Xt(),iterate:pm,getItem:wl,setItem:wm,removeItem:ym,clear:Ro,length:vm,key:mm,keys:gm,dropInstance:bm},km=function(b,p){return b===p||typeof b=="number"&&typeof p=="number"&&isNaN(b)&&isNaN(p)},xm=function(b,p){for(var T=b.length,A=0;A<T;){if(km(b[A],p))return!0;A++}return!1},Mc=Array.isArray||function(c){return Object.prototype.toString.call(c)==="[object Array]"},mi={},Ac={},kr={INDEXEDDB:oi,WEBSQL:ot,LOCALSTORAGE:Sm},Cm=[kr.INDEXEDDB._driver,kr.WEBSQL._driver,kr.LOCALSTORAGE._driver],No=["dropInstance"],bl=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(No),Em={description:"",driver:Cm.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Tm(c,b){c[b]=function(){var p=arguments;return c.ready().then(function(){return c[b].apply(c,p)})}}function Sl(){for(var c=1;c<arguments.length;c++){var b=arguments[c];if(b)for(var p in b)b.hasOwnProperty(p)&&(Mc(b[p])?arguments[0][p]=b[p].slice():arguments[0][p]=b[p])}return arguments[0]}var Mm=function(){function c(b){a(this,c);for(var p in kr)if(kr.hasOwnProperty(p)){var T=kr[p],A=T._driver;this[p]=A,mi[A]||this.defineDriver(T)}this._defaultConfig=Sl({},Em),this._config=Sl({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return c.prototype.config=function(p){if((typeof p>"u"?"undefined":o(p))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var T in p){if(T==="storeName"&&(p[T]=p[T].replace(/\W/g,"_")),T==="version"&&typeof p[T]!="number")return new Error("Database version must be a number.");this._config[T]=p[T]}return"driver"in p&&p.driver?this.setDriver(this._config.driver):!0}else return typeof p=="string"?this._config[p]:this._config},c.prototype.defineDriver=function(p,T,A){var x=new f(function(_,F){try{var U=p._driver,B=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!p._driver){F(B);return}for(var $=bl.concat("_initStorage"),Y=0,ae=$.length;Y<ae;Y++){var fe=$[Y],me=!xm(No,fe);if((me||p[fe])&&typeof p[fe]!="function"){F(B);return}}var Be=function(){for(var gi=function(Pm){return function(){var Dm=new Error("Method "+Pm+" is not implemented by the current driver"),Ic=f.reject(Dm);return m(Ic,arguments[arguments.length-1]),Ic}},kl=0,Im=No.length;kl<Im;kl++){var xl=No[kl];p[xl]||(p[xl]=gi(xl))}};Be();var Re=function(gi){mi[U]&&console.info("Redefining LocalForage driver: "+U),mi[U]=p,Ac[U]=gi,_()};"_support"in p?p._support&&typeof p._support=="function"?p._support().then(Re,F):Re(!!p._support):Re(!0)}catch(An){F(An)}});return M(x,T,A),x},c.prototype.driver=function(){return this._driver||null},c.prototype.getDriver=function(p,T,A){var x=mi[p]?f.resolve(mi[p]):f.reject(new Error("Driver not found."));return M(x,T,A),x},c.prototype.getSerializer=function(p){var T=f.resolve(Q);return M(T,p),T},c.prototype.ready=function(p){var T=this,A=T._driverSet.then(function(){return T._ready===null&&(T._ready=T._initDriver()),T._ready});return M(A,p,p),A},c.prototype.setDriver=function(p,T,A){var x=this;Mc(p)||(p=[p]);var _=this._getSupportedDrivers(p);function F(){x._config.driver=x.driver()}function U(Y){return x._extend(Y),F(),x._ready=x._initStorage(x._config),x._ready}function B(Y){return function(){var ae=0;function fe(){for(;ae<Y.length;){var me=Y[ae];return ae++,x._dbInfo=null,x._ready=null,x.getDriver(me).then(U).catch(fe)}F();var Be=new Error("No available storage method found.");return x._driverSet=f.reject(Be),x._driverSet}return fe()}}var $=this._driverSet!==null?this._driverSet.catch(function(){return f.resolve()}):f.resolve();return this._driverSet=$.then(function(){var Y=_[0];return x._dbInfo=null,x._ready=null,x.getDriver(Y).then(function(ae){x._driver=ae._driver,F(),x._wrapLibraryMethodsWithReady(),x._initDriver=B(_)})}).catch(function(){F();var Y=new Error("No available storage method found.");return x._driverSet=f.reject(Y),x._driverSet}),M(this._driverSet,T,A),this._driverSet},c.prototype.supports=function(p){return!!Ac[p]},c.prototype._extend=function(p){Sl(this,p)},c.prototype._getSupportedDrivers=function(p){for(var T=[],A=0,x=p.length;A<x;A++){var _=p[A];this.supports(_)&&T.push(_)}return T},c.prototype._wrapLibraryMethodsWithReady=function(){for(var p=0,T=bl.length;p<T;p++)Tm(this,bl[p])},c.prototype.createInstance=function(p){return new c(p)},c}(),Am=new Mm;r.exports=Am},{3:3}]},{},[4])(4)})})(D2);const Ha=Tc;async function R2(e,n={importsUs:Tc}){return console.log(Ha),Ha}async function N2(e){return Ha.find(t=>Ha.slug===e)??null}async function L2({params:e}){return{contact:await N2(e.contact.slug)}}function pu(){const{contact:e}=Op();return S("div",{id:"contact",className:"flex",children:J("div",{children:[S("div",{children:S("img",{src:e.avatar||null},e.avatar)}),J("div",{className:"flex-1",children:[J("h1",{className:"flex",children:[e.first||e.last?S(nt,{children:e.first}):S("i",{children:"No Name"})," "]}),e.twitter&&S("p",{children:S("a",{target:"_blank",href:`https://twitter.com/${e.twitter}`,children:e.twitter})}),e.notes&&S("p",{className:" p-2 m-3",children:e.notes})]}),S("div",{children:J("div",{className:"flex mt-3",children:[S(Ba,{action:"edit",className:"mx-2",children:S("button",{type:"submit",children:"Edit"})}),S(Ba,{method:"post",action:"destroy",onSubmit:n=>{confirm("Please confirm you want to delete this record.")||n.preventDefault()},children:S("button",{type:"submit",children:"Delete"})})]})})]})})}const _2=Tc;function O2(){const e=_2;return J(nt,{children:[J("div",{id:"sidebar",className:"flex flex-col md:flex-row justify-center my-10",children:[S("h1",{children:"Importing Vehicles - US State"}),S("div",{className:"flex flex-col md:flex-row justify-center my-10",children:J(Ba,{id:"search-form",role:"search",children:[S("input",{id:"q","aria-label":"Search states",placeholder:"Search",type:"search",name:"q",className:"p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),S("div",{id:"search-spinner","aria-hidden":!0,hidden:!0}),S("div",{className:"sr-only","aria-live":"polite"})]})}),S("nav",{children:e.length?S("ul",{children:e.map(n=>S("li",{children:S(Bp,{to:`/US-Gray-Market-Laws/${n.slug}`,className:classNames(item.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),children:n.title.rendered})},n.slug))}):S("p",{children:S("i",{children:"Error loading data"})})})]}),S("div",{id:"detail",className:"flex column",children:S("div",{className:"flex flex-col md:flex-row justify-center my-10 ",children:S("div",{className:"w-full md:w-7/12",children:S(pu,{})})})})]})}async function F2({request:e}){return new URL(e.url).searchParams.get("q"),{contacts:await R2()}}function V2(){const{contacts:e}=Op(),n=_p();return S(nt,{children:J("div",{className:"flex bg-gray-100 fixed z-40 w-screen h-[calc(100vh-64px)] ",children:[J("div",{id:"sidebar",className:`overflow-y-auto bg-red-100 w-1/3 items-center p-2 text-sm 
            text-gray-500 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:bg-gray-700 dark:focus:ring-gray-600 
            border-r-2 border-black`,children:[S("h1",{className:"mb-3 text-lg border-b-2 border-purple-500 dark:border-orange-500 ",children:"React Router Contacts"}),S("div",{children:J(Ba,{id:"search-form",role:"search",className:"flex flex-col w-full ",children:[S("input",{id:"q","aria-label":"Search contacts",placeholder:"Search",type:"search",name:"q",className:"p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"}),S("div",{id:"search-spinner","aria-hidden":!0,hidden:!0}),S("div",{className:"sr-only","aria-live":"polite"})]})}),S("div",{className:`px-3 pt-4 mt-5 mb-3 rounded-md self-start overflow-y-auto
           bg-gray-50 dark:bg-gray-800`,children:S("nav",{className:"overflow-visible",children:e.length?S("ul",{children:e.map(t=>S("li",{className:`hover:bg-sky-100 active:bg-sky-100 rounded-md p-1
                      dark:hover:bg-gray-700`,children:S(Bp,{to:`${t.slug}`,children:t.slug?S(nt,{children:t.slug}):S("i",{children:"No Name"})})},t.id))}):S("p",{children:S("i",{children:"Error Fetching Data"})})})})]}),S("div",{id:"detail",className:n.state==="loading"?"loading":"flex p-5 w-full bg-gray-200 ",children:S("div",{className:`flex p-5 bg-gray-50 w-full
            rounded-lg`,children:S(Vp,{})})})]})})}function U2(){return J("div",{id:"zero-state",children:[S("div",{className:"mx-auto mb-5",children:S("img",{src:"https://placekitten.com/g/200/200",className:"mx-auto"})}),S("div",{children:S("p",{children:"This document does not constitute legal advice. It is an aggregation of resources found on the internet and should be used as a starting point for you, the reader’s personal research. When researching, be sure to cycle terms like “import”, “foreign vehicle”, “out of country”, “mini-truck”, “mini truck” and “keijidōsha” “kei” as each state uses different wording in their documents."})})]})}const B2=Iy([{path:"/",element:S(T2,{}),errorElement:S(es,{}),children:[{errorElement:S(es,{}),children:[{index:!0,element:S(m2,{})},{path:"/US-Gray-Market-Laws/",element:S(O2,{}),children:[{path:"/US-Gray-Market-Laws/:slug",element:S(pu,{})}]}]},{path:"/contacts/",element:S(V2,{}),errorElement:S(es,{}),loader:F2,children:[{errorElement:S("p",{children:"Opps, this content is not available yet. Check back soon!"}),children:[{index:!0,element:S(U2,{})},{path:"/contacts/:slug",element:S(pu,{}),loader:L2}]}]}]}]);cs.createRoot(document.getElementById("root")).render(S(ie.StrictMode,{children:S(gy,{router:B2})}));
