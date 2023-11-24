function em(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dd={exports:{}},Ro={},fd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),am=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),uu=Symbol.iterator;function fm(e){return e===null||typeof e!="object"?null:(e=uu&&e[uu]||e["@@iterator"],typeof e=="function"?e:null)}var hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pd=Object.assign,md={};function qn(e,t,n){this.props=e,this.context=t,this.refs=md,this.updater=n||hd}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gd(){}gd.prototype=qn.prototype;function Ga(e,t,n){this.props=e,this.context=t,this.refs=md,this.updater=n||hd}var qa=Ga.prototype=new gd;qa.constructor=Ga;pd(qa,qn.prototype);qa.isPureReactComponent=!0;var cu=Array.isArray,vd=Object.prototype.hasOwnProperty,Qa={current:null},yd={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)vd.call(t,r)&&!yd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jr,type:e,key:o,ref:s,props:i,_owner:Qa.current}}function hm(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var du=/\/+/g;function es(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pm(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Jr:case nm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+es(s,0):r,cu(i)?(n="",e!=null&&(n=e.replace(du,"$&/")+"/"),Ni(i,t,n,"",function(u){return u})):i!=null&&(Ya(i)&&(i=hm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(du,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",cu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+es(o,a);s+=Ni(o,t,n,l,i)}else if(l=fm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+es(o,a++),s+=Ni(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function di(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(o){return t.call(n,o,i++)}),r}function mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Oi={transition:null},gm={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:Qa};D.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!Ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=qn;D.Fragment=rm;D.Profiler=om;D.PureComponent=Ga;D.StrictMode=im;D.Suspense=um;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)vd.call(t,l)&&!yd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sm,_context:e},e.Consumer=e};D.createElement=wd;D.createFactory=function(e){var t=wd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:lm,render:e}};D.isValidElement=Ya;D.lazy=function(e){return{$$typeof:dm,_payload:{_status:-1,_result:e},_init:mm}};D.memo=function(e,t){return{$$typeof:cm,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.2.0";fd.exports=D;var I=fd.exports;const _d=tm(I),vm=em({__proto__:null,default:_d},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=I,wm=Symbol.for("react.element"),_m=Symbol.for("react.fragment"),Em=Object.prototype.hasOwnProperty,Sm=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Im={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Em.call(t,r)&&!Im.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wm,type:e,key:o,ref:s,props:i,_owner:Sm.current}}Ro.Fragment=_m;Ro.jsx=Ed;Ro.jsxs=Ed;dd.exports=Ro;var F=dd.exports,$s={},Sd={exports:{}},Te={},Id={exports:{}},kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,O){var A=k.length;k.push(O);e:for(;0<A;){var G=A-1>>>1,Z=k[G];if(0<i(Z,O))k[G]=O,k[A]=Z,A=G;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var O=k[0],A=k.pop();if(A!==O){k[0]=A;e:for(var G=0,Z=k.length,ui=Z>>>1;G<ui;){var Ht=2*(G+1)-1,Zo=k[Ht],Kt=Ht+1,ci=k[Kt];if(0>i(Zo,A))Kt<Z&&0>i(ci,Zo)?(k[G]=ci,k[Kt]=A,G=Kt):(k[G]=Zo,k[Ht]=A,G=Ht);else if(Kt<Z&&0>i(ci,A))k[G]=ci,k[Kt]=A,G=Kt;else break e}}return O}function i(k,O){var A=k.sortIndex-O.sortIndex;return A!==0?A:k.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,m=3,g=!1,y=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=k)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function v(k){if(w=!1,p(k),!y)if(n(l)!==null)y=!0,Jo(E);else{var O=n(u);O!==null&&Xo(v,O.startTime-k)}}function E(k,O){y=!1,w&&(w=!1,f(P),P=-1),g=!0;var A=m;try{for(p(O),h=n(l);h!==null&&(!(h.expirationTime>O)||k&&!De());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var Z=G(h.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&r(l),p(O)}else r(l);h=n(l)}if(h!==null)var ui=!0;else{var Ht=n(u);Ht!==null&&Xo(v,Ht.startTime-O),ui=!1}return ui}finally{h=null,m=A,g=!1}}var T=!1,C=null,P=-1,j=5,L=-1;function De(){return!(e.unstable_now()-L<j)}function tr(){if(C!==null){var k=e.unstable_now();L=k;var O=!0;try{O=C(!0,k)}finally{O?nr():(T=!1,C=null)}}else T=!1}var nr;if(typeof c=="function")nr=function(){c(tr)};else if(typeof MessageChannel<"u"){var lu=new MessageChannel,Zp=lu.port2;lu.port1.onmessage=tr,nr=function(){Zp.postMessage(null)}}else nr=function(){R(tr,0)};function Jo(k){C=k,T||(T=!0,nr())}function Xo(k,O){P=R(function(){k(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Jo(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return k()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,O){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var A=m;m=k;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(k,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,k={id:d++,callback:O,priorityLevel:k,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(k.sortIndex=A,t(u,k),n(l)===null&&k===n(u)&&(w?(f(P),P=-1):w=!0,Xo(v,A-G))):(k.sortIndex=Z,t(l,k),y||g||(y=!0,Jo(E))),k},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(k){var O=m;return function(){var A=m;m=O;try{return k.apply(this,arguments)}finally{m=A}}}})(kd);Id.exports=kd;var km=Id.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=I,ke=km;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cd=new Set,Rr={};function pn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Cd.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=Object.prototype.hasOwnProperty,Tm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fu={},hu={};function Cm(e){return Bs.call(hu,e)?!0:Bs.call(fu,e)?!1:Tm.test(e)?hu[e]=!0:(fu[e]=!0,!1)}function Pm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rm(e,t,n,r){if(t===null||typeof t>"u"||Pm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ja=/[\-:]([a-z])/g;function Xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ja,Xa);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ja,Xa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ja,Xa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Za(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rm(t,n,i,r)&&(n=null),r||i===null?Cm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),_n=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),tl=Symbol.for("react.forward_ref"),Vs=Symbol.for("react.suspense"),Ws=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Nd=Symbol.for("react.offscreen"),pu=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ts;function dr(e){if(ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ts=t&&t[1]||""}return`
`+ts+e}var ns=!1;function rs(e,t){if(!e||ns)return"";ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Nm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=rs(e.type,!1),e;case 11:return e=rs(e.type.render,!1),e;case 1:return e=rs(e.type,!0),e;default:return""}}function Hs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case _n:return"Portal";case bs:return"Profiler";case el:return"StrictMode";case Vs:return"Suspense";case Ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rd:return(e.displayName||"Context")+".Consumer";case Pd:return(e._context.displayName||"Context")+".Provider";case tl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return t=e.displayName||null,t!==null?t:Hs(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Hs(e(t))}catch{}}return null}function Om(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hs(t);case 8:return t===el?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e){var t=Od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=Am(e))}function Ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ks(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ld(e,t){t=t.checked,t!=null&&Za(e,"checked",t,!1)}function Gs(e,t){Ld(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qs(e,t.type,n):t.hasOwnProperty("defaultValue")&&qs(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qs(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(fr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Dd(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ys(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,Md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Lm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function Ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function Fd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dm=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Js(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Xs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zs=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,xn=null,Mn=null;function wu(e){if(e=ei(e)){if(typeof ea!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Do(t),ea(e.stateNode,e.type,t))}}function zd(e){xn?Mn?Mn.push(e):Mn=[e]:xn=e}function jd(){if(xn){var e=xn,t=Mn;if(Mn=xn=null,wu(e),t)for(e=0;e<t.length;e++)wu(t[e])}}function $d(e,t){return e(t)}function Bd(){}var is=!1;function bd(e,t,n){if(is)return e(t,n);is=!0;try{return $d(e,t,n)}finally{is=!1,(xn!==null||Mn!==null)&&(Bd(),jd())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=Do(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ta=!1;if(ot)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ta=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ta=!1}function xm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yr=!1,Gi=null,qi=!1,na=null,Mm={onError:function(e){yr=!0,Gi=e}};function Um(e,t,n,r,i,o,s,a,l){yr=!1,Gi=null,xm.apply(Mm,arguments)}function Fm(e,t,n,r,i,o,s,a,l){if(Um.apply(this,arguments),yr){if(yr){var u=Gi;yr=!1,Gi=null}else throw Error(_(198));qi||(qi=!0,na=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _u(e){if(mn(e)!==e)throw Error(_(188))}function zm(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _u(i),e;if(o===r)return _u(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Wd(e){return e=zm(e),e!==null?Hd(e):null}function Hd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hd(e);if(t!==null)return t;e=e.sibling}return null}var Kd=ke.unstable_scheduleCallback,Eu=ke.unstable_cancelCallback,jm=ke.unstable_shouldYield,$m=ke.unstable_requestPaint,q=ke.unstable_now,Bm=ke.unstable_getCurrentPriorityLevel,il=ke.unstable_ImmediatePriority,Gd=ke.unstable_UserBlockingPriority,Qi=ke.unstable_NormalPriority,bm=ke.unstable_LowPriority,qd=ke.unstable_IdlePriority,No=null,He=null;function Vm(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Km,Wm=Math.log,Hm=Math.LN2;function Km(e){return e>>>=0,e===0?32:31-(Wm(e)/Hm|0)|0}var mi=64,gi=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=hr(a):(o&=s,o!==0&&(r=hr(o)))}else s=n&~i,s!==0?r=hr(s):o!==0&&(r=hr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Gm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ze(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Gm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qd(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function os(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ol(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Yd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jd,sl,Xd,Zd,ef,ia=!1,vi=[],Ct=null,Pt=null,Rt=null,Ar=new Map,Lr=new Map,vt=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ei(t),t!==null&&sl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jm(e,t,n,r,i){switch(t){case"focusin":return Ct=or(Ct,e,t,n,r,i),!0;case"dragenter":return Pt=or(Pt,e,t,n,r,i),!0;case"mouseover":return Rt=or(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ar.set(o,or(Ar.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,or(Lr.get(o)||null,e,t,n,r,i)),!0}return!1}function tf(e){var t=Yt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vd(n),t!==null){e.blockedOn=t,ef(e.priority,function(){Xd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zs=r,n.target.dispatchEvent(r),Zs=null}else return t=ei(n),t!==null&&sl(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Ai(e)&&n.delete(t)}function Xm(){ia=!1,Ct!==null&&Ai(Ct)&&(Ct=null),Pt!==null&&Ai(Pt)&&(Pt=null),Rt!==null&&Ai(Rt)&&(Rt=null),Ar.forEach(Iu),Lr.forEach(Iu)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Xm)))}function Dr(e){function t(i){return sr(i,e)}if(0<vi.length){sr(vi[0],e);for(var n=1;n<vi.length;n++){var r=vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&sr(Ct,e),Pt!==null&&sr(Pt,e),Rt!==null&&sr(Rt,e),Ar.forEach(t),Lr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)tf(n),n.blockedOn===null&&vt.shift()}var Un=dt.ReactCurrentBatchConfig,Ji=!0;function Zm(e,t,n,r){var i=M,o=Un.transition;Un.transition=null;try{M=1,al(e,t,n,r)}finally{M=i,Un.transition=o}}function eg(e,t,n,r){var i=M,o=Un.transition;Un.transition=null;try{M=4,al(e,t,n,r)}finally{M=i,Un.transition=o}}function al(e,t,n,r){if(Ji){var i=oa(e,t,n,r);if(i===null)ms(e,t,r,Xi,n),Su(e,r);else if(Jm(i,e,t,n,r))r.stopPropagation();else if(Su(e,r),t&4&&-1<Ym.indexOf(e)){for(;i!==null;){var o=ei(i);if(o!==null&&Jd(o),o=oa(e,t,n,r),o===null&&ms(e,t,r,Xi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ms(e,t,r,null,n)}}var Xi=null;function oa(e,t,n,r){if(Xi=null,e=rl(r),e=Yt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xi=e,null}function nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bm()){case il:return 1;case Gd:return 4;case Qi:case bm:return 16;case qd:return 536870912;default:return 16}default:return 16}}var It=null,ll=null,Li=null;function rf(){if(Li)return Li;var e,t=ll,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function ku(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yi:ku,this.isPropagationStopped=ku,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Ce(Qn),Zr=H({},Qn,{view:0,detail:0}),tg=Ce(Zr),ss,as,ar,Oo=H({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(ss=e.screenX-ar.screenX,as=e.screenY-ar.screenY):as=ss=0,ar=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:as}}),Tu=Ce(Oo),ng=H({},Oo,{dataTransfer:0}),rg=Ce(ng),ig=H({},Zr,{relatedTarget:0}),ls=Ce(ig),og=H({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Ce(og),ag=H({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=Ce(ag),ug=H({},Qn,{data:0}),Cu=Ce(ug),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function cl(){return hg}var pg=H({},Zr,{key:function(e){if(e.key){var t=cg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=Ce(pg),gg=H({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Ce(gg),vg=H({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),yg=Ce(vg),wg=H({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Ce(wg),Eg=H({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Ce(Eg),Ig=[9,13,27,32],dl=ot&&"CompositionEvent"in window,wr=null;ot&&"documentMode"in document&&(wr=document.documentMode);var kg=ot&&"TextEvent"in window&&!wr,of=ot&&(!dl||wr&&8<wr&&11>=wr),Ru=" ",Nu=!1;function sf(e,t){switch(e){case"keyup":return Ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Tg(e,t){switch(e){case"compositionend":return af(t);case"keypress":return t.which!==32?null:(Nu=!0,Ru);case"textInput":return e=t.data,e===Ru&&Nu?null:e;default:return null}}function Cg(e,t){if(Sn)return e==="compositionend"||!dl&&sf(e,t)?(e=rf(),Li=ll=It=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pg[e.type]:t==="textarea"}function lf(e,t,n,r){zd(r),t=Zi(t,"onChange"),0<t.length&&(n=new ul("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,xr=null;function Rg(e){wf(e,0)}function Ao(e){var t=Tn(e);if(Ad(t))return e}function Ng(e,t){if(e==="change")return t}var uf=!1;if(ot){var us;if(ot){var cs="oninput"in document;if(!cs){var Au=document.createElement("div");Au.setAttribute("oninput","return;"),cs=typeof Au.oninput=="function"}us=cs}else us=!1;uf=us&&(!document.documentMode||9<document.documentMode)}function Lu(){_r&&(_r.detachEvent("onpropertychange",cf),xr=_r=null)}function cf(e){if(e.propertyName==="value"&&Ao(xr)){var t=[];lf(t,xr,e,rl(e)),bd(Rg,t)}}function Og(e,t,n){e==="focusin"?(Lu(),_r=t,xr=n,_r.attachEvent("onpropertychange",cf)):e==="focusout"&&Lu()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(xr)}function Lg(e,t){if(e==="click")return Ao(t)}function Dg(e,t){if(e==="input"||e==="change")return Ao(t)}function xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:xg;function Mr(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bs.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,t){var n=Du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ff(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mg(e){var t=ff(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&df(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xu(n,o);var s=xu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ug=ot&&"documentMode"in document&&11>=document.documentMode,In=null,sa=null,Er=null,aa=!1;function Mu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||In==null||In!==Ki(r)||(r=In,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Mr(Er,r)||(Er=r,r=Zi(sa,"onSelect"),0<r.length&&(t=new ul("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},ds={},hf={};ot&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Lo(e){if(ds[e])return ds[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hf)return ds[e]=t[n];return e}var pf=Lo("animationend"),mf=Lo("animationiteration"),gf=Lo("animationstart"),vf=Lo("transitionend"),yf=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){yf.set(e,t),pn(t,[e])}for(var fs=0;fs<Uu.length;fs++){var hs=Uu[fs],Fg=hs.toLowerCase(),zg=hs[0].toUpperCase()+hs.slice(1);$t(Fg,"on"+zg)}$t(pf,"onAnimationEnd");$t(mf,"onAnimationIteration");$t(gf,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(vf,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fm(r,t,void 0,e),e.currentTarget=null}function wf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Fu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Fu(i,a,u),o=l}}}if(qi)throw e=na,qi=!1,na=null,e}function $(e,t){var n=t[fa];n===void 0&&(n=t[fa]=new Set);var r=e+"__bubble";n.has(r)||(_f(t,e,2,!1),n.add(r))}function ps(e,t,n){var r=0;t&&(r|=4),_f(n,e,r,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[_i]){e[_i]=!0,Cd.forEach(function(n){n!=="selectionchange"&&(jg.has(n)||ps(n,!1,e),ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,ps("selectionchange",!1,t))}}function _f(e,t,n,r){switch(nf(t)){case 1:var i=Zm;break;case 4:i=eg;break;default:i=al}n=i.bind(null,t,n,e),i=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ms(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Yt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bd(function(){var u=o,d=rl(n),h=[];e:{var m=yf.get(e);if(m!==void 0){var g=ul,y=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":g=mg;break;case"focusin":y="focus",g=ls;break;case"focusout":y="blur",g=ls;break;case"beforeblur":case"afterblur":g=ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yg;break;case pf:case mf:case gf:g=sg;break;case vf:g=_g;break;case"scroll":g=tg;break;case"wheel":g=Sg;break;case"copy":case"cut":case"paste":g=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pu}var w=(t&4)!==0,R=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Or(c,f),v!=null&&w.push(Fr(c,v,p)))),R)break;c=c.return}0<w.length&&(m=new g(m,y,null,n,d),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Zs&&(y=n.relatedTarget||n.fromElement)&&(Yt(y)||y[st]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Yt(y):null,y!==null&&(R=mn(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=Tu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Pu,v="onPointerLeave",f="onPointerEnter",c="pointer"),R=g==null?m:Tn(g),p=y==null?m:Tn(y),m=new w(v,c+"leave",g,n,d),m.target=R,m.relatedTarget=p,v=null,Yt(d)===u&&(w=new w(f,c+"enter",y,n,d),w.target=p,w.relatedTarget=R,v=w),R=v,g&&y)t:{for(w=g,f=y,c=0,p=w;p;p=wn(p))c++;for(p=0,v=f;v;v=wn(v))p++;for(;0<c-p;)w=wn(w),c--;for(;0<p-c;)f=wn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=wn(w),f=wn(f)}w=null}else w=null;g!==null&&zu(h,m,g,w,!1),y!==null&&R!==null&&zu(h,R,y,w,!0)}}e:{if(m=u?Tn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=Ng;else if(Ou(m))if(uf)E=Dg;else{E=Ag;var T=Og}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Lg);if(E&&(E=E(e,u))){lf(h,E,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&qs(m,"number",m.value)}switch(T=u?Tn(u):window,e){case"focusin":(Ou(T)||T.contentEditable==="true")&&(In=T,sa=u,Er=null);break;case"focusout":Er=sa=In=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,Mu(h,n,d);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":Mu(h,n,d)}var C;if(dl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Sn?sf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(of&&n.locale!=="ko"&&(Sn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Sn&&(C=rf()):(It=d,ll="value"in It?It.value:It.textContent,Sn=!0)),T=Zi(u,P),0<T.length&&(P=new Cu(P,e,null,n,d),h.push({event:P,listeners:T}),C?P.data=C:(C=af(n),C!==null&&(P.data=C)))),(C=kg?Tg(e,n):Cg(e,n))&&(u=Zi(u,"onBeforeInput"),0<u.length&&(d=new Cu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=C))}wf(h,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Or(e,n),o!=null&&r.unshift(Fr(e,o,i)),o=Or(e,t),o!=null&&r.push(Fr(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Or(n,o),l!=null&&s.unshift(Fr(n,l,a))):i||(l=Or(n,o),l!=null&&s.push(Fr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var $g=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Bg,"")}function Ei(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(_(425))}function eo(){}var la=null,ua=null;function ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var da=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(Wg)}:da;function Wg(e){setTimeout(function(){throw e})}function gs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),We="__reactFiber$"+Yn,zr="__reactProps$"+Yn,st="__reactContainer$"+Yn,fa="__reactEvents$"+Yn,Hg="__reactListeners$"+Yn,Kg="__reactHandles$"+Yn;function Yt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bu(e);e!==null;){if(n=e[We])return n;e=Bu(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[We]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Do(e){return e[zr]||null}var ha=[],Cn=-1;function Bt(e){return{current:e}}function B(e){0>Cn||(e.current=ha[Cn],ha[Cn]=null,Cn--)}function z(e,t){Cn++,ha[Cn]=e.current,e.current=t}var jt={},le=Bt(jt),ge=Bt(!1),rn=jt;function bn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function to(){B(ge),B(le)}function bu(e,t,n){if(le.current!==jt)throw Error(_(168));z(le,t),z(ge,n)}function Ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Om(e)||"Unknown",i));return H({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,rn=le.current,z(le,e),z(ge,ge.current),!0}function Vu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Ef(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(le),z(le,e)):B(ge),z(ge,n)}var Ze=null,xo=!1,vs=!1;function Sf(e){Ze===null?Ze=[e]:Ze.push(e)}function Gg(e){xo=!0,Sf(e)}function bt(){if(!vs&&Ze!==null){vs=!0;var e=0,t=M;try{var n=Ze;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,xo=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Kd(il,bt),i}finally{M=t,vs=!1}}return null}var Pn=[],Rn=0,ro=null,io=0,Pe=[],Re=0,on=null,et=1,tt="";function Gt(e,t){Pn[Rn++]=io,Pn[Rn++]=ro,ro=e,io=t}function If(e,t,n){Pe[Re++]=et,Pe[Re++]=tt,Pe[Re++]=on,on=e;var r=et;e=tt;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var o=32-ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,et=1<<32-ze(t)+i|n<<i|r,tt=o+e}else et=1<<o|n<<i|r,tt=e}function hl(e){e.return!==null&&(Gt(e,1),If(e,1,0))}function pl(e){for(;e===ro;)ro=Pn[--Rn],Pn[Rn]=null,io=Pn[--Rn],Pn[Rn]=null;for(;e===on;)on=Pe[--Re],Pe[Re]=null,tt=Pe[--Re],Pe[Re]=null,et=Pe[--Re],Pe[Re]=null}var Se=null,Ee=null,b=!1,Fe=null;function kf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ee=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ee=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(b){var t=Ee;if(t){var n=t;if(!Wu(e,t)){if(pa(e))throw Error(_(418));t=Nt(n.nextSibling);var r=Se;t&&Wu(e,t)?kf(r,n):(e.flags=e.flags&-4097|2,b=!1,Se=e)}}else{if(pa(e))throw Error(_(418));e.flags=e.flags&-4097|2,b=!1,Se=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Si(e){if(e!==Se)return!1;if(!b)return Hu(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ca(e.type,e.memoizedProps)),t&&(t=Ee)){if(pa(e))throw Tf(),Error(_(418));for(;t;)kf(e,t),t=Nt(t.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Se?Nt(e.stateNode.nextSibling):null;return!0}function Tf(){for(var e=Ee;e;)e=Nt(e.nextSibling)}function Vn(){Ee=Se=null,b=!1}function ml(e){Fe===null?Fe=[e]:Fe.push(e)}var qg=dt.ReactCurrentBatchConfig;function Me(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var oo=Bt(null),so=null,Nn=null,gl=null;function vl(){gl=Nn=so=null}function yl(e){var t=oo.current;B(oo),e._currentValue=t}function ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){so=e,gl=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(gl!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(so===null)throw Error(_(308));Nn=e,so.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Jt=null;function wl(e){Jt===null?Jt=[e]:Jt.push(e)}function Cf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wl(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,x&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,wl(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}function Ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var i=e.updateQueue;gt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(m=t,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(g,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(g,h,m):y,m==null)break e;h=H({},h,m);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);an|=s,e.lanes=s,e.memoizedState=h}}function Gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Rf=new Td.Component().refs;function va(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=Lt(e),o=it(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(je(t,e,i,r),xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=Lt(e),o=it(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(je(t,e,i,r),xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=Lt(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(je(t,e,r,n),xi(t,e,r))}};function qu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,o):!0}function Nf(e,t,n){var r=!1,i=jt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=ve(t)?rn:le.current,r=t.contextTypes,o=(r=r!=null)?bn(e,i):jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function ya(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Rf,_l(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=ve(t)?rn:le.current,i.context=bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(va(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),ao(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Rf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yu(e){var t=e._init;return t(e._payload)}function Of(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Dt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,v){return c===null||c.tag!==6?(c=ks(p,f.mode,v),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,v){var E=p.type;return E===En?d(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mt&&Yu(E)===c.type)?(v=i(c,p.props),v.ref=lr(f,c,p),v.return=f,v):(v=$i(p.type,p.key,p.props,null,f.mode,v),v.ref=lr(f,c,p),v.return=f,v)}function u(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ts(p,f.mode,v),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,v,E){return c===null||c.tag!==7?(c=tn(p,f.mode,v,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ks(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fi:return p=$i(c.type,c.key,c.props,null,f.mode,p),p.ref=lr(f,null,c),p.return=f,p;case _n:return c=Ts(c,f.mode,p),c.return=f,c;case mt:var v=c._init;return h(f,v(c._payload),p)}if(fr(c)||rr(c))return c=tn(c,f.mode,p,null),c.return=f,c;Ii(f,c)}return null}function m(f,c,p,v){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fi:return p.key===E?l(f,c,p,v):null;case _n:return p.key===E?u(f,c,p,v):null;case mt:return E=p._init,m(f,c,E(p._payload),v)}if(fr(p)||rr(p))return E!==null?null:d(f,c,p,v,null);Ii(f,p)}return null}function g(f,c,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(c,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fi:return f=f.get(v.key===null?p:v.key)||null,l(c,f,v,E);case _n:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,E);case mt:var T=v._init;return g(f,c,p,T(v._payload),E)}if(fr(v)||rr(v))return f=f.get(p)||null,d(c,f,v,E,null);Ii(c,v)}return null}function y(f,c,p,v){for(var E=null,T=null,C=c,P=c=0,j=null;C!==null&&P<p.length;P++){C.index>P?(j=C,C=null):j=C.sibling;var L=m(f,C,p[P],v);if(L===null){C===null&&(C=j);break}e&&C&&L.alternate===null&&t(f,C),c=o(L,c,P),T===null?E=L:T.sibling=L,T=L,C=j}if(P===p.length)return n(f,C),b&&Gt(f,P),E;if(C===null){for(;P<p.length;P++)C=h(f,p[P],v),C!==null&&(c=o(C,c,P),T===null?E=C:T.sibling=C,T=C);return b&&Gt(f,P),E}for(C=r(f,C);P<p.length;P++)j=g(C,f,P,p[P],v),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?P:j.key),c=o(j,c,P),T===null?E=j:T.sibling=j,T=j);return e&&C.forEach(function(De){return t(f,De)}),b&&Gt(f,P),E}function w(f,c,p,v){var E=rr(p);if(typeof E!="function")throw Error(_(150));if(p=E.call(p),p==null)throw Error(_(151));for(var T=E=null,C=c,P=c=0,j=null,L=p.next();C!==null&&!L.done;P++,L=p.next()){C.index>P?(j=C,C=null):j=C.sibling;var De=m(f,C,L.value,v);if(De===null){C===null&&(C=j);break}e&&C&&De.alternate===null&&t(f,C),c=o(De,c,P),T===null?E=De:T.sibling=De,T=De,C=j}if(L.done)return n(f,C),b&&Gt(f,P),E;if(C===null){for(;!L.done;P++,L=p.next())L=h(f,L.value,v),L!==null&&(c=o(L,c,P),T===null?E=L:T.sibling=L,T=L);return b&&Gt(f,P),E}for(C=r(f,C);!L.done;P++,L=p.next())L=g(C,f,P,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),c=o(L,c,P),T===null?E=L:T.sibling=L,T=L);return e&&C.forEach(function(tr){return t(f,tr)}),b&&Gt(f,P),E}function R(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===En&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fi:e:{for(var E=p.key,T=c;T!==null;){if(T.key===E){if(E=p.type,E===En){if(T.tag===7){n(f,T.sibling),c=i(T,p.props.children),c.return=f,f=c;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mt&&Yu(E)===T.type){n(f,T.sibling),c=i(T,p.props),c.ref=lr(f,T,p),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===En?(c=tn(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=$i(p.type,p.key,p.props,null,f.mode,v),v.ref=lr(f,c,p),v.return=f,f=v)}return s(f);case _n:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ts(p,f.mode,v),c.return=f,f=c}return s(f);case mt:return T=p._init,R(f,c,T(p._payload),v)}if(fr(p))return y(f,c,p,v);if(rr(p))return w(f,c,p,v);Ii(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=ks(p,f.mode,v),c.return=f,f=c),s(f)):n(f,c)}return R}var Wn=Of(!0),Af=Of(!1),ti={},Ke=Bt(ti),jr=Bt(ti),$r=Bt(ti);function Xt(e){if(e===ti)throw Error(_(174));return e}function El(e,t){switch(z($r,t),z(jr,e),z(Ke,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ys(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ys(t,e)}B(Ke),z(Ke,t)}function Hn(){B(Ke),B(jr),B($r)}function Lf(e){Xt($r.current);var t=Xt(Ke.current),n=Ys(t,e.type);t!==n&&(z(jr,e),z(Ke,n))}function Sl(e){jr.current===e&&(B(Ke),B(jr))}var V=Bt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ys=[];function Il(){for(var e=0;e<ys.length;e++)ys[e]._workInProgressVersionPrimary=null;ys.length=0}var Mi=dt.ReactCurrentDispatcher,ws=dt.ReactCurrentBatchConfig,sn=0,W=null,J=null,ee=null,uo=!1,Sr=!1,Br=0,Qg=0;function oe(){throw Error(_(321))}function kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Tl(e,t,n,r,i,o){if(sn=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mi.current=e===null||e.memoizedState===null?Zg:ev,e=n(r,i),Sr){o=0;do{if(Sr=!1,Br=0,25<=o)throw Error(_(301));o+=1,ee=J=null,t.updateQueue=null,Mi.current=tv,e=n(r,i)}while(Sr)}if(Mi.current=co,t=J!==null&&J.next!==null,sn=0,ee=J=W=null,uo=!1,t)throw Error(_(300));return e}function Cl(){var e=Br!==0;return Br=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(J===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(_(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function br(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=Le(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((sn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,W.lanes|=d,an|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,$e(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,an|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Es(e){var t=Le(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);$e(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Df(){}function xf(e,t){var n=W,r=Le(),i=t(),o=!$e(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,Pl(Ff.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Vr(9,Uf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(_(349));sn&30||Mf(n,t,i)}return i}function Mf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uf(e,t,n,r){t.value=n,t.getSnapshot=r,zf(t)&&jf(e)}function Ff(e,t,n){return n(function(){zf(t)&&jf(e)})}function zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function jf(e){var t=at(e,1);t!==null&&je(t,e,1,-1)}function Ju(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=Xg.bind(null,W,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $f(){return Le().memoizedState}function Ui(e,t,n,r){var i=Ve();W.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&kl(r,s.deps)){i.memoizedState=Vr(t,n,o,r);return}}W.flags|=e,i.memoizedState=Vr(1|t,n,o,r)}function Xu(e,t){return Ui(8390656,8,e,t)}function Pl(e,t){return Uo(2048,8,e,t)}function Bf(e,t){return Uo(4,2,e,t)}function bf(e,t){return Uo(4,4,e,t)}function Vf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wf(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Vf.bind(null,t,e),n)}function Rl(){}function Hf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gf(e,t,n){return sn&21?($e(n,t)||(n=Qd(),W.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Yg(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ws.transition;ws.transition={};try{e(!1),t()}finally{M=n,ws.transition=r}}function qf(){return Le().memoizedState}function Jg(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qf(e))Yf(t,n);else if(n=Cf(e,t,n,r),n!==null){var i=de();je(n,e,r,i),Jf(n,t,r)}}function Xg(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qf(e))Yf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,s)){var l=t.interleaved;l===null?(i.next=i,wl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Cf(e,t,i,r),n!==null&&(i=de(),je(n,e,r,i),Jf(n,t,r))}}function Qf(e){var t=e.alternate;return e===W||t!==null&&t===W}function Yf(e,t){Sr=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}var co={readContext:Ae,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Zg={readContext:Ae,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4194308,4,Vf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jg.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Ju,useDebugValue:Rl,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ju(!1),t=e[0];return e=Yg.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=Ve();if(b){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),te===null)throw Error(_(349));sn&30||Mf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xu(Ff.bind(null,r,o,e),[e]),r.flags|=2048,Vr(9,Uf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=te.identifierPrefix;if(b){var n=tt,r=et;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ev={readContext:Ae,useCallback:Hf,useContext:Ae,useEffect:Pl,useImperativeHandle:Wf,useInsertionEffect:Bf,useLayoutEffect:bf,useMemo:Kf,useReducer:_s,useRef:$f,useState:function(){return _s(br)},useDebugValue:Rl,useDeferredValue:function(e){var t=Le();return Gf(t,J.memoizedState,e)},useTransition:function(){var e=_s(br)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:xf,useId:qf,unstable_isNewReconciler:!1},tv={readContext:Ae,useCallback:Hf,useContext:Ae,useEffect:Pl,useImperativeHandle:Wf,useInsertionEffect:Bf,useLayoutEffect:bf,useMemo:Kf,useReducer:Es,useRef:$f,useState:function(){return Es(br)},useDebugValue:Rl,useDeferredValue:function(e){var t=Le();return J===null?t.memoizedState=e:Gf(t,J.memoizedState,e)},useTransition:function(){var e=Es(br)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:xf,useId:qf,unstable_isNewReconciler:!1};function Kn(e,t){try{var n="",r=t;do n+=Nm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nv=typeof WeakMap=="function"?WeakMap:Map;function Xf(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,Na=r),wa(e,t)},n}function Zf(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wa(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gv.bind(null,e,t,n),t.then(e,e))}function ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var rv=dt.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?Af(t,null,n,r):Wn(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var o=t.ref;return Fn(t,i),r=Tl(e,t,n,r,o,i),n=Cl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(b&&n&&hl(t),t.flags|=1,ce(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ul(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,eh(e,t,o,r,i)):(e=$i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(s,r)&&e.ref===t.ref)return lt(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function eh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Mr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,lt(e,t,i)}return _a(e,t,n,r,i)}function th(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(An,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(An,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(An,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(An,_e),_e|=r;return ce(e,t,i,n),t.child}function nh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var o=ve(n)?rn:le.current;return o=bn(t,o),Fn(t,i),n=Tl(e,t,n,r,o,i),r=Cl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(b&&r&&hl(t),t.flags|=1,ce(e,t,n,i),t.child)}function ic(e,t,n,r,i){if(ve(n)){var o=!0;no(t)}else o=!1;if(Fn(t,i),t.stateNode===null)Fi(e,t),Nf(t,n,r),ya(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ve(n)?rn:le.current,u=bn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qu(t,s,r,u),gt=!1;var m=t.memoizedState;s.state=m,ao(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ge.current||gt?(typeof d=="function"&&(va(t,n,d,r),l=t.memoizedState),(a=gt||qu(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Pf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Me(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=ve(n)?rn:le.current,l=bn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&Qu(t,s,r,l),gt=!1,m=t.memoizedState,s.state=m,ao(t,r,s,i);var y=t.memoizedState;a!==h||m!==y||ge.current||gt?(typeof g=="function"&&(va(t,n,g,r),y=t.memoizedState),(u=gt||qu(t,n,u,r,m,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ea(e,t,n,r,o,i)}function Ea(e,t,n,r,i,o){nh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Vu(t,n,!1),lt(e,t,o);r=t.stateNode,rv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&Vu(t,n,!0),t.child}function rh(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),El(e,t.containerInfo)}function oc(e,t,n,r,i){return Vn(),ml(i),t.flags|=256,ce(e,t,n,r),t.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function ih(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=jo(s,r,0,null),e=tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ia(n),t.memoizedState=Sa,e):Nl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Dt(a,o):(o=tn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ia(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Sa,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nl(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&ml(r),Wn(t,e.child,null,n),e=Nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ss(Error(_(422))),ki(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jo({mode:"visible",children:r.children},i,0,null),o=tn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,s),t.child.memoizedState=Ia(s),t.memoizedState=Sa,o);if(!(t.mode&1))return ki(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=Ss(o,r,void 0),ki(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,at(e,i),je(r,e,i,-1))}return Ml(),r=Ss(Error(_(421))),ki(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ee=Nt(i.nextSibling),Se=t,b=!0,Fe=null,e!==null&&(Pe[Re++]=et,Pe[Re++]=tt,Pe[Re++]=on,et=e.id,tt=e.overflow,on=t),t=Nl(t,r.children),t.flags|=4096,t)}function sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ga(e.return,t,n)}function Is(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function oh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,n,t);else if(e.tag===19)sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Is(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Is(t,!0,n,null,o);break;case"together":Is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ov(e,t,n){switch(t.tag){case 3:rh(t),Vn();break;case 5:Lf(t);break;case 1:ve(t.type)&&no(t);break;case 4:El(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(oo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?ih(e,t,n):(z(V,V.current&1),e=lt(e,t,n),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return oh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,th(e,t,n)}return lt(e,t,n)}var sh,ka,ah,lh;sh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};ah=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(Ke.current);var o=null;switch(n){case"input":i=Ks(e,i),r=Ks(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=Qs(e,i),r=Qs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}Js(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};lh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sv(e,t,n){var r=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&to(),se(t),null;case 3:return r=t.stateNode,Hn(),B(ge),B(le),Il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(La(Fe),Fe=null))),ka(e,t),se(t),null;case 5:Sl(t);var i=Xt($r.current);if(n=t.type,e!==null&&t.stateNode!=null)ah(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return se(t),null}if(e=Xt(Ke.current),Si(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[zr]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)$(pr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":mu(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":vu(r,o),$("invalid",r)}Js(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,a,e),i=["children",""+a]):Rr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":hi(r),gu(r,o,!0);break;case"textarea":hi(r),yu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[zr]=r,sh(e,t,!1,!1),t.stateNode=e;e:{switch(s=Xs(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)$(pr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":mu(e,r),i=Ks(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),$("invalid",e);break;case"textarea":vu(e,r),i=Qs(e,r),$("invalid",e);break;default:i=r}Js(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Fd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Md(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nr(e,l):typeof l=="number"&&Nr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&Za(e,o,l,s))}switch(n){case"input":hi(e),gu(e,r,!1);break;case"textarea":hi(e),yu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)lh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Xt($r.current),Xt(Ke.current),Si(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return se(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Ee!==null&&t.mode&1&&!(t.flags&128))Tf(),Vn(),t.flags|=98560,o=!1;else if(o=Si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[We]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Fe!==null&&(La(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Ml())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Hn(),ka(e,t),e===null&&Ur(t.stateNode.containerInfo),se(t),null;case 10:return yl(t.type._context),se(t),null;case 17:return ve(t.type)&&to(),se(t),null;case 19:if(B(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ur(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=lo(e),s!==null){for(t.flags|=128,ur(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Gn&&(t.flags|=128,r=!0,ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=lo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!b)return se(t),null}else 2*q()-o.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,ur(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=V.current,z(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return xl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function av(e,t){switch(pl(t),t.tag){case 1:return ve(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),B(ge),B(le),Il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return Hn(),null;case 10:return yl(t.type._context),null;case 22:case 23:return xl(),null;case 24:return null;default:return null}}var Ti=!1,ae=!1,lv=typeof WeakSet=="function"?WeakSet:Set,S=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ta(e,t,n){try{n()}catch(r){K(e,t,r)}}var ac=!1;function uv(e,t){if(la=Ji,e=ff(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=e,m=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ua={focusedElem:e,selectionRange:n},Ji=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,R=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Me(t.type,w),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=ac,ac=!1,y}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ta(t,n,o)}i=i.next}while(i!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uh(e){var t=e.alternate;t!==null&&(e.alternate=null,uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[zr],delete t[fa],delete t[Hg],delete t[Kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ch(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}function Ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ra(e,t,n),e=e.sibling;e!==null;)Ra(e,t,n),e=e.sibling}var ne=null,Ue=!1;function ht(e,t,n){for(n=n.child;n!==null;)dh(e,t,n),n=n.sibling}function dh(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:ae||On(n,t);case 6:var r=ne,i=Ue;ne=null,ht(e,t,n),ne=r,Ue=i,ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?gs(e.parentNode,n):e.nodeType===1&&gs(e,n),Dr(e)):gs(ne,n.stateNode));break;case 4:r=ne,i=Ue,ne=n.stateNode.containerInfo,Ue=!0,ht(e,t,n),ne=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ta(n,t,s),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!ae&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,ht(e,t,n),ae=r):ht(e,t,n);break;default:ht(e,t,n)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lv),t.forEach(function(r){var i=yv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ue=!1;break e;case 3:ne=a.stateNode.containerInfo,Ue=!0;break e;case 4:ne=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ne===null)throw Error(_(160));dh(o,s,i),ne=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}function fh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xe(t,e),be(e),r&4){try{Ir(3,e,e.return),Fo(3,e)}catch(w){K(e,e.return,w)}try{Ir(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:xe(t,e),be(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(xe(t,e),be(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(w){K(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ld(i,o),Xs(a,s);var u=Xs(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?Fd(i,h):d==="dangerouslySetInnerHTML"?Md(i,h):d==="children"?Nr(i,h):Za(i,d,h,u)}switch(a){case"input":Gs(i,o);break;case"textarea":Dd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Dn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[zr]=o}catch(w){K(e,e.return,w)}}break;case 6:if(xe(t,e),be(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){K(e,e.return,w)}}break;case 3:if(xe(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:xe(t,e),be(e);break;case 13:xe(t,e),be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ll=q())),r&4&&uc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,xe(t,e),ae=u):xe(t,e),be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(S=e,d=e.child;d!==null;){for(h=S=d;S!==null;){switch(m=S,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ir(4,m,m.return);break;case 1:On(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:On(m,m.return);break;case 22:if(m.memoizedState!==null){dc(h);continue}}g!==null?(g.return=m,S=g):dc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ud("display",s))}catch(w){K(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){K(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xe(t,e),be(e),r&4&&uc(e);break;case 21:break;default:xe(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ch(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var o=lc(e);Ra(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=lc(e);Pa(e,a,s);break;default:throw Error(_(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cv(e,t,n){S=e,hh(e)}function hh(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ti;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Ti;var u=ae;if(Ti=s,(ae=l)&&!u)for(S=i;S!==null;)s=S,l=s.child,s.tag===22&&s.memoizedState!==null?fc(i):l!==null?(l.return=s,S=l):fc(i);for(;o!==null;)S=o,hh(o),o=o.sibling;S=i,Ti=a,ae=u}cc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,S=o):cc(e)}}function cc(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Dr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ae||t.flags&512&&Ca(t)}catch(m){K(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function dc(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function fc(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{Ca(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{Ca(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var dv=Math.ceil,fo=dt.ReactCurrentDispatcher,Ol=dt.ReactCurrentOwner,Oe=dt.ReactCurrentBatchConfig,x=0,te=null,Q=null,re=0,_e=0,An=Bt(0),X=0,Wr=null,an=0,zo=0,Al=0,kr=null,pe=null,Ll=0,Gn=1/0,Xe=null,ho=!1,Na=null,At=null,Ci=!1,kt=null,po=0,Tr=0,Oa=null,zi=-1,ji=0;function de(){return x&6?q():zi!==-1?zi:zi=q()}function Lt(e){return e.mode&1?x&2&&re!==0?re&-re:qg.transition!==null?(ji===0&&(ji=Qd()),ji):(e=M,e!==0||(e=window.event,e=e===void 0?16:nf(e.type)),e):1}function je(e,t,n,r){if(50<Tr)throw Tr=0,Oa=null,Error(_(185));Xr(e,n,r),(!(x&2)||e!==te)&&(e===te&&(!(x&2)&&(zo|=n),X===4&&yt(e,re)),ye(e,r),n===1&&x===0&&!(t.mode&1)&&(Gn=q()+500,xo&&bt()))}function ye(e,t){var n=e.callbackNode;qm(e,t);var r=Yi(e,e===te?re:0);if(r===0)n!==null&&Eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eu(n),t===1)e.tag===0?Gg(hc.bind(null,e)):Sf(hc.bind(null,e)),Vg(function(){!(x&6)&&bt()}),n=null;else{switch(Yd(r)){case 1:n=il;break;case 4:n=Gd;break;case 16:n=Qi;break;case 536870912:n=qd;break;default:n=Qi}n=Eh(n,ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ph(e,t){if(zi=-1,ji=0,x&6)throw Error(_(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Yi(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var i=x;x|=2;var o=gh();(te!==e||re!==t)&&(Xe=null,Gn=q()+500,en(e,t));do try{pv();break}catch(a){mh(e,a)}while(!0);vl(),fo.current=o,x=i,Q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=ra(e),i!==0&&(r=i,t=Aa(e,i))),t===1)throw n=Wr,en(e,0),yt(e,r),ye(e,q()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fv(i)&&(t=mo(e,r),t===2&&(o=ra(e),o!==0&&(r=o,t=Aa(e,o))),t===1))throw n=Wr,en(e,0),yt(e,r),ye(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:qt(e,pe,Xe);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Ll+500-q(),10<t)){if(Yi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=da(qt.bind(null,e,pe,Xe),t);break}qt(e,pe,Xe);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dv(r/1960))-r,10<r){e.timeoutHandle=da(qt.bind(null,e,pe,Xe),r);break}qt(e,pe,Xe);break;case 5:qt(e,pe,Xe);break;default:throw Error(_(329))}}}return ye(e,q()),e.callbackNode===n?ph.bind(null,e):null}function Aa(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=mo(e,t),e!==2&&(t=pe,pe=n,t!==null&&La(t)),e}function La(e){pe===null?pe=e:pe.push.apply(pe,e)}function fv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Al,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function hc(e){if(x&6)throw Error(_(327));zn();var t=Yi(e,0);if(!(t&1))return ye(e,q()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=ra(e);r!==0&&(t=r,n=Aa(e,r))}if(n===1)throw n=Wr,en(e,0),yt(e,t),ye(e,q()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,pe,Xe),ye(e,q()),null}function Dl(e,t){var n=x;x|=1;try{return e(t)}finally{x=n,x===0&&(Gn=q()+500,xo&&bt())}}function ln(e){kt!==null&&kt.tag===0&&!(x&6)&&zn();var t=x;x|=1;var n=Oe.transition,r=M;try{if(Oe.transition=null,M=1,e)return e()}finally{M=r,Oe.transition=n,x=t,!(x&6)&&bt()}}function xl(){_e=An.current,B(An)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:Hn(),B(ge),B(le),Il();break;case 5:Sl(r);break;case 4:Hn();break;case 13:B(V);break;case 19:B(V);break;case 10:yl(r.type._context);break;case 22:case 23:xl()}n=n.return}if(te=e,Q=e=Dt(e.current,null),re=_e=t,X=0,Wr=null,Al=zo=an=0,pe=kr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Jt=null}return e}function mh(e,t){do{var n=Q;try{if(vl(),Mi.current=co,uo){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uo=!1}if(sn=0,ee=J=W=null,Sr=!1,Br=0,Ol.current=null,n===null||n.return===null){X=1,Wr=t,Q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ec(s);if(g!==null){g.flags&=-257,tc(g,s,a,o,t),g.mode&1&&Zu(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Zu(o,u,t),Ml();break e}l=Error(_(426))}}else if(b&&a.mode&1){var R=ec(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),tc(R,s,a,o,t),ml(Kn(l,a));break e}}o=l=Kn(l,a),X!==4&&(X=2),kr===null?kr=[o]:kr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Xf(o,l,t);Ku(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(At===null||!At.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Zf(o,a,t);Ku(o,v);break e}}o=o.return}while(o!==null)}yh(n)}catch(E){t=E,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function gh(){var e=fo.current;return fo.current=co,e===null?co:e}function Ml(){(X===0||X===3||X===2)&&(X=4),te===null||!(an&268435455)&&!(zo&268435455)||yt(te,re)}function mo(e,t){var n=x;x|=2;var r=gh();(te!==e||re!==t)&&(Xe=null,en(e,t));do try{hv();break}catch(i){mh(e,i)}while(!0);if(vl(),x=n,fo.current=r,Q!==null)throw Error(_(261));return te=null,re=0,X}function hv(){for(;Q!==null;)vh(Q)}function pv(){for(;Q!==null&&!jm();)vh(Q)}function vh(e){var t=_h(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?yh(e):Q=t,Ol.current=null}function yh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=av(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=sv(n,t,_e),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function qt(e,t,n){var r=M,i=Oe.transition;try{Oe.transition=null,M=1,mv(e,t,n,r)}finally{Oe.transition=i,M=r}return null}function mv(e,t,n,r){do zn();while(kt!==null);if(x&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qm(e,o),e===te&&(Q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,Eh(Qi,function(){return zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=M;M=1;var a=x;x|=4,Ol.current=null,uv(e,n),fh(n,e),Mg(ua),Ji=!!la,ua=la=null,e.current=n,cv(n),$m(),x=a,M=s,Oe.transition=o}else e.current=n;if(Ci&&(Ci=!1,kt=e,po=i),o=e.pendingLanes,o===0&&(At=null),Vm(n.stateNode),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ho)throw ho=!1,e=Na,Na=null,e;return po&1&&e.tag!==0&&zn(),o=e.pendingLanes,o&1?e===Oa?Tr++:(Tr=0,Oa=e):Tr=0,bt(),null}function zn(){if(kt!==null){var e=Yd(po),t=Oe.transition,n=M;try{if(Oe.transition=null,M=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,po=0,x&6)throw Error(_(331));var i=x;for(x|=4,S=e.current;S!==null;){var o=S,s=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:Ir(8,d,o)}var h=d.child;if(h!==null)h.return=d,S=h;else for(;S!==null;){d=S;var m=d.sibling,g=d.return;if(uh(d),d===u){S=null;break}if(m!==null){m.return=g,S=m;break}S=g}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}S=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,S=s;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ir(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var c=e.current;for(S=c;S!==null;){s=S;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,S=p;else e:for(s=c;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fo(9,a)}}catch(E){K(a,a.return,E)}if(a===s){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(x=i,bt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{M=n,Oe.transition=t}}return!1}function pc(e,t,n){t=Kn(n,t),t=Xf(e,t,1),e=Ot(e,t,1),t=de(),e!==null&&(Xr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)pc(e,e,n);else for(;t!==null;){if(t.tag===3){pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Kn(n,e),e=Zf(t,e,1),t=Ot(t,e,1),e=de(),t!==null&&(Xr(t,1,e),ye(t,e));break}}t=t.return}}function gv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>q()-Ll?en(e,0):Al|=n),ye(e,t)}function wh(e,t){t===0&&(e.mode&1?(t=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):t=1);var n=de();e=at(e,t),e!==null&&(Xr(e,t,n),ye(e,n))}function vv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wh(e,n)}function yv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),wh(e,n)}var _h;_h=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,ov(e,t,n);me=!!(e.flags&131072)}else me=!1,b&&t.flags&1048576&&If(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=bn(t,le.current);Fn(t,n),i=Tl(null,t,r,e,i,n);var o=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,no(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_l(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,ya(t,r,e,n),t=Ea(null,t,r,!0,o,n)):(t.tag=0,b&&o&&hl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_v(r),e=Me(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=ic(null,t,r,e,n);break e;case 11:t=nc(null,t,r,e,n);break e;case 14:t=rc(null,t,r,Me(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),ic(e,t,r,i,n);case 3:e:{if(rh(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Pf(e,t),ao(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Kn(Error(_(423)),t),t=oc(e,t,r,n,i);break e}else if(r!==i){i=Kn(Error(_(424)),t),t=oc(e,t,r,n,i);break e}else for(Ee=Nt(t.stateNode.containerInfo.firstChild),Se=t,b=!0,Fe=null,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=lt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Lf(t),e===null&&ma(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ca(r,i)?s=null:o!==null&&ca(r,o)&&(t.flags|=32),nh(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&ma(t),null;case 13:return ih(e,t,n);case 4:return El(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),nc(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(oo,r._currentValue),r._currentValue=s,o!==null)if($e(o.value,s)){if(o.children===i.children&&!ge.current){t=lt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=it(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ga(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ga(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=Ae(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),rc(e,t,r,i,n);case 15:return eh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Fi(e,t),t.tag=1,ve(r)?(e=!0,no(t)):e=!1,Fn(t,n),Nf(t,r,i),ya(t,r,i,n),Ea(null,t,r,!0,e,n);case 19:return oh(e,t,n);case 22:return th(e,t,n)}throw Error(_(156,t.tag))};function Eh(e,t){return Kd(e,t)}function wv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new wv(e,t,n,r)}function Ul(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _v(e){if(typeof e=="function")return Ul(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tl)return 11;if(e===nl)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ul(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return tn(n.children,i,o,t);case el:s=8,i|=8;break;case bs:return e=Ne(12,n,t,i|2),e.elementType=bs,e.lanes=o,e;case Vs:return e=Ne(13,n,t,i),e.elementType=Vs,e.lanes=o,e;case Ws:return e=Ne(19,n,t,i),e.elementType=Ws,e.lanes=o,e;case Nd:return jo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pd:s=10;break e;case Rd:s=9;break e;case tl:s=11;break e;case nl:s=14;break e;case mt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function tn(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function jo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Nd,e.lanes=n,e.stateNode={isHidden:!1},e}function ks(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ts(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ev(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=os(0),this.expirationTimes=os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fl(e,t,n,r,i,o,s,a,l){return e=new Ev(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(o),e}function Sv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sh(e){if(!e)return jt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ve(n))return Ef(e,n,t)}return t}function Ih(e,t,n,r,i,o,s,a,l){return e=Fl(n,r,!0,e,i,o,s,a,l),e.context=Sh(null),n=e.current,r=de(),i=Lt(n),o=it(r,i),o.callback=t??null,Ot(n,o,i),e.current.lanes=i,Xr(e,i,r),ye(e,r),e}function $o(e,t,n,r){var i=t.current,o=de(),s=Lt(i);return n=Sh(n),t.context===null?t.context=n:t.pendingContext=n,t=it(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,s),e!==null&&(je(e,i,s,o),xi(e,i,s)),s}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zl(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function Iv(){return null}var kh=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}Bo.prototype.render=jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));$o(e,t,null,null)};Bo.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){$o(null,e,null,null)}),t[st]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&tf(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function kv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=go(s);o.call(u)}}var s=Ih(t,r,e,0,null,!1,!1,"",gc);return e._reactRootContainer=s,e[st]=s.current,Ur(e.nodeType===8?e.parentNode:e),ln(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=go(l);a.call(u)}}var l=Fl(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=l,e[st]=l.current,Ur(e.nodeType===8?e.parentNode:e),ln(function(){$o(t,l,n,r)}),l}function Vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=go(s);a.call(l)}}$o(t,s,e,i)}else s=kv(n,t,e,i,r);return go(s)}Jd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(ol(t,n|1),ye(t,q()),!(x&6)&&(Gn=q()+500,bt()))}break;case 13:ln(function(){var r=at(e,1);if(r!==null){var i=de();je(r,e,1,i)}}),zl(e,1)}};sl=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=de();je(t,e,134217728,n)}zl(e,134217728)}};Xd=function(e){if(e.tag===13){var t=Lt(e),n=at(e,t);if(n!==null){var r=de();je(n,e,t,r)}zl(e,t)}};Zd=function(){return M};ef=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ea=function(e,t,n){switch(t){case"input":if(Gs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Do(r);if(!i)throw Error(_(90));Ad(r),Gs(r,i)}}}break;case"textarea":Dd(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};$d=Dl;Bd=ln;var Tv={usingClientEntryPoint:!1,Events:[ei,Tn,Do,zd,jd,Dl]},cr={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cv={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wd(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{No=Pi.inject(Cv),He=Pi}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(t))throw Error(_(200));return Sv(e,t,null,n)};Te.createRoot=function(e,t){if(!$l(e))throw Error(_(299));var n=!1,r="",i=kh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fl(e,1,!1,null,null,n,!1,r,i),e[st]=t.current,Ur(e.nodeType===8?e.parentNode:e),new jl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Wd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return ln(e)};Te.hydrate=function(e,t,n){if(!bo(t))throw Error(_(200));return Vo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!$l(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=kh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ih(t,null,e,1,n??null,i,!1,o,s),e[st]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};Te.render=function(e,t,n){if(!bo(t))throw Error(_(200));return Vo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!bo(e))throw Error(_(40));return e._reactRootContainer?(ln(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Te.unstable_batchedUpdates=Dl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Vo(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";function Th(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Th)}catch(e){console.error(e)}}Th(),Sd.exports=Te;var Pv=Sd.exports,vc=Pv;$s.createRoot=vc.createRoot,$s.hydrateRoot=vc.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const yc="popstate";function Rv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Da("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vo(i)}return Ov(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nv(){return Math.random().toString(36).substr(2,8)}function wc(e,t){return{usr:e.state,key:e.key,idx:t}}function Da(e,t,n,r){return n===void 0&&(n=null),Hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||Nv()})}function vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ov(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Tt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Hr({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=Tt.Pop;let R=d(),f=R==null?null:R-u;u=R,l&&l({action:a,location:w.location,delta:f})}function m(R,f){a=Tt.Push;let c=Da(w.location,R,f);n&&n(c,R),u=d()+1;let p=wc(c,u),v=w.createHref(c);try{s.pushState(p,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}o&&l&&l({action:a,location:w.location,delta:1})}function g(R,f){a=Tt.Replace;let c=Da(w.location,R,f);n&&n(c,R),u=d();let p=wc(c,u),v=w.createHref(c);s.replaceState(p,"",v),o&&l&&l({action:a,location:w.location,delta:0})}function y(R){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof R=="string"?R:vo(R);return Y(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(i,s)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yc,h),l=R,()=>{i.removeEventListener(yc,h),l=null}},createHref(R){return t(i,R)},createURL:y,encodeLocation(R){let f=y(R);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(R){return s.go(R)}};return w}var _c;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_c||(_c={}));function Av(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jn(t):t,i=bl(r.pathname||"/",n);if(i==null)return null;let o=Ch(e);Lv(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Bv(o[a],Wv(i));return s}function Ch(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=xt([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ch(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:jv(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Ph(o.path))i(o,s,l)}),t}function Ph(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ph(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Lv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$v(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Dv=/^:\w+$/,xv=3,Mv=2,Uv=1,Fv=10,zv=-2,Ec=e=>e==="*";function jv(e,t){let n=e.split("/"),r=n.length;return n.some(Ec)&&(r+=zv),t&&(r+=Mv),n.filter(i=>!Ec(i)).reduce((i,o)=>i+(Dv.test(o)?xv:o===""?Uv:Fv),r)}function $v(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Bv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=bv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:xt([i,d.pathname]),pathnameBase:Qv(xt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=xt([i,d.pathnameBase]))}return o}function bv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:m,isOptional:g}=d;if(m==="*"){let w=a[h]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[h];return g&&!y?u[m]=void 0:u[m]=Hv(y||"",m),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Vv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Wv(e){try{return decodeURI(e)}catch(t){return Bl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hv(e,t){try{return decodeURIComponent(e)}catch(n){return Bl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function bl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Kv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e;return{pathname:n?n.startsWith("/")?n:Gv(n,t):t,search:Yv(r),hash:Jv(i)}}function Gv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rh(e){return qv(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Nh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=Hr({},e),Y(!i.pathname||!i.pathname.includes("?"),Cs("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),Cs("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),Cs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else if(r){let h=t[t.length-1].replace(/^\//,"").split("/");if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h.pop();i.pathname=m.join("/")}a="/"+h.join("/")}else{let h=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let l=Kv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const xt=e=>e.join("/").replace(/\/\/+/g,"/"),Qv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Oh=["post","put","patch","delete"];new Set(Oh);const Zv=["get",...Oh];new Set(Zv);/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}const Vl=I.createContext(null),ey=I.createContext(null),Xn=I.createContext(null),Wo=I.createContext(null),gn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Ah=I.createContext(null);function ty(e,t){let{relative:n}=t===void 0?{}:t;ni()||Y(!1);let{basename:r,navigator:i}=I.useContext(Xn),{hash:o,pathname:s,search:a}=Dh(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:xt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ni(){return I.useContext(Wo)!=null}function Ho(){return ni()||Y(!1),I.useContext(Wo).location}function Lh(e){I.useContext(Xn).static||I.useLayoutEffect(e)}function ny(){let{isDataRoute:e}=I.useContext(gn);return e?my():ry()}function ry(){ni()||Y(!1);let e=I.useContext(Vl),{basename:t,navigator:n}=I.useContext(Xn),{matches:r}=I.useContext(gn),{pathname:i}=Ho(),o=JSON.stringify(Rh(r)),s=I.useRef(!1);return Lh(()=>{s.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=Nh(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:xt([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}function Dh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(gn),{pathname:i}=Ho(),o=JSON.stringify(Rh(r));return I.useMemo(()=>Nh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function iy(e,t){return oy(e,t)}function oy(e,t,n){ni()||Y(!1);let{navigator:r}=I.useContext(Xn),{matches:i}=I.useContext(gn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Ho(),u;if(t){var d;let w=typeof t=="string"?Jn(t):t;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||Y(!1),u=w}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=Av(e,{pathname:m}),y=cy(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:xt([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:xt([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?I.createElement(Wo.Provider,{value:{location:yo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Tt.Pop}},y):y}function sy(){let e=py(),t=Xv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}const ay=I.createElement(sy,null);class ly extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(gn.Provider,{value:this.props.routeContext},I.createElement(Ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uy(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Vl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(gn.Provider,{value:t},r)}function cy(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Y(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,h=null;n&&(h=l.route.errorElement||ay);let m=t.concat(o.slice(0,u+1)),g=()=>{let y;return d?y=h:l.route.Component?y=I.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,I.createElement(uy,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(ly,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var xh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xh||{}),wo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wo||{});function dy(e){let t=I.useContext(Vl);return t||Y(!1),t}function fy(e){let t=I.useContext(ey);return t||Y(!1),t}function hy(e){let t=I.useContext(gn);return t||Y(!1),t}function Mh(e){let t=hy(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function py(){var e;let t=I.useContext(Ah),n=fy(wo.UseRouteError),r=Mh(wo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function my(){let{router:e}=dy(xh.UseNavigateStable),t=Mh(wo.UseNavigateStable),n=I.useRef(!1);return Lh(()=>{n.current=!0}),I.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,yo({fromRouteId:t},o)))},[e,t])}function Bi(e){Y(!1)}function gy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tt.Pop,navigator:o,static:s=!1}=e;ni()&&Y(!1);let a=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Jn(r));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:g="default"}=r,y=I.useMemo(()=>{let w=bl(u,a);return w==null?null:{location:{pathname:w,search:d,hash:h,state:m,key:g},navigationType:i}},[a,u,d,h,m,g,i]);return y==null?null:I.createElement(Xn.Provider,{value:l},I.createElement(Wo.Provider,{children:n,value:y}))}function vy(e){let{children:t,location:n}=e;return iy(xa(t),n)}new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let o=[...t,i];if(r.type===I.Fragment){n.push.apply(n,xa(r.props.children,o));return}r.type!==Bi&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=xa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}function yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _y(e,t){return e.button===0&&(!t||t==="_self")&&!wy(e)}const Ey=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sy="startTransition",Sc=vm[Sy];function Iy(e){let{basename:t,children:n,future:r,window:i}=e,o=I.useRef();o.current==null&&(o.current=Rv({window:i,v5Compat:!0}));let s=o.current,[a,l]=I.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=I.useCallback(h=>{u&&Sc?Sc(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>s.listen(d),[s,d]),I.createElement(gy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const ky=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ty=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ic=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=t,m=yy(t,Ey),{basename:g}=I.useContext(Xn),y,w=!1;if(typeof u=="string"&&Ty.test(u)&&(y=u,ky))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=bl(v.pathname,g);v.origin===p.origin&&E!=null?u=E+v.search+v.hash:w=!0}catch{}let R=ty(u,{relative:i}),f=Cy(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function c(p){r&&r(p),p.defaultPrevented||f(p)}return I.createElement("a",Ma({},m,{href:y||R,onClick:w||o?r:c,ref:n,target:l}))});var kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kc||(kc={}));var Tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tc||(Tc={}));function Cy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=ny(),u=Ho(),d=Dh(e,{relative:s});return I.useCallback(h=>{if(_y(h,n)){h.preventDefault();let m=r!==void 0?r:vo(u)===vo(d);l(e,{replace:m,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}var Cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Py=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Fh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[h],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Uh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Py(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new Ry;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ry extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ny=function(e){const t=Uh(e);return Fh.encodeByteArray(t,!0)},zh=function(e){return Ny(e).replace(/\./g,"")},jh=function(e){try{return Fh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=()=>Oy().__FIREBASE_DEFAULTS__,Ly=()=>{if(typeof process>"u"||typeof Cc>"u")return;const e=Cc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Dy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jh(e[1]);return t&&JSON.parse(t)},Wl=()=>{try{return Ay()||Ly()||Dy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},xy=e=>{var t,n;return(n=(t=Wl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},$h=()=>{var e;return(e=Wl())===null||e===void 0?void 0:e.config},Bh=e=>{var t;return(t=Wl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function bh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zy(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vh(){try{return typeof indexedDB=="object"}catch{return!1}}function Wh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function jy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="FirebaseError";class Je extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$y,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?By(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Je(i,a,r)}}function By(e,t){return e.replace(by,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const by=/\{\$([^}]+)}/g;function Vy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Kr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Pc(o)&&Pc(s)){if(!Kr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function gr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Wy(e,t){const n=new Hy(e,t);return n.subscribe.bind(n)}class Hy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ky(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ps),i.error===void 0&&(i.error=Ps),i.complete===void 0&&(i.complete=Ps);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ky(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ps(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=1e3,qy=2,Qy=4*60*60*1e3,Yy=.5;function Rc(e,t=Gy,n=qy){const r=t*Math.pow(n,e),i=Math.round(Yy*r*(Math.random()-.5)*2);return Math.min(Qy,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return e&&e._delegate?e._delegate:e}class Ye{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new My;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zy(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xy(e){return e===Qt?void 0:e}function Zy(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Jy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const t0={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},n0=U.INFO,r0={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},i0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=r0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hl{constructor(t){this.name=t,this._logLevel=n0,this._logHandler=i0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?t0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const o0=(e,t)=>t.some(n=>e instanceof n);let Nc,Oc;function s0(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a0(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,Ua=new WeakMap,Kh=new WeakMap,Rs=new WeakMap,Kl=new WeakMap;function l0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Mt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Hh.set(n,e)}).catch(()=>{}),Kl.set(t,e),t}function u0(e){if(Ua.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ua.set(e,t)}let Fa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ua.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function c0(e){Fa=e(Fa)}function d0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ns(this),t,...n);return Kh.set(r,t.sort?t.sort():[t]),Mt(r)}:a0().includes(e)?function(...t){return e.apply(Ns(this),t),Mt(Hh.get(this))}:function(...t){return Mt(e.apply(Ns(this),t))}}function f0(e){return typeof e=="function"?d0(e):(e instanceof IDBTransaction&&u0(e),o0(e,s0())?new Proxy(e,Fa):e)}function Mt(e){if(e instanceof IDBRequest)return l0(e);if(Rs.has(e))return Rs.get(e);const t=f0(e);return t!==e&&(Rs.set(e,t),Kl.set(t,e)),t}const Ns=e=>Kl.get(e);function h0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Mt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Mt(s.result),l.oldVersion,l.newVersion,Mt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const p0=["get","getKey","getAll","getAllKeys","count"],m0=["put","add","delete","clear"],Os=new Map;function Ac(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Os.get(t))return Os.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=m0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||p0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Os.set(t,o),o}c0(e=>({...e,get:(t,n,r)=>Ac(t,n)||e.get(t,n,r),has:(t,n)=>!!Ac(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function v0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const za="@firebase/app",Lc="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Hl("@firebase/app"),y0="@firebase/app-compat",w0="@firebase/analytics-compat",_0="@firebase/analytics",E0="@firebase/app-check-compat",S0="@firebase/app-check",I0="@firebase/auth",k0="@firebase/auth-compat",T0="@firebase/database",C0="@firebase/database-compat",P0="@firebase/functions",R0="@firebase/functions-compat",N0="@firebase/installations",O0="@firebase/installations-compat",A0="@firebase/messaging",L0="@firebase/messaging-compat",D0="@firebase/performance",x0="@firebase/performance-compat",M0="@firebase/remote-config",U0="@firebase/remote-config-compat",F0="@firebase/storage",z0="@firebase/storage-compat",j0="@firebase/firestore",$0="@firebase/firestore-compat",B0="firebase",b0="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="[DEFAULT]",V0={[za]:"fire-core",[y0]:"fire-core-compat",[_0]:"fire-analytics",[w0]:"fire-analytics-compat",[S0]:"fire-app-check",[E0]:"fire-app-check-compat",[I0]:"fire-auth",[k0]:"fire-auth-compat",[T0]:"fire-rtdb",[C0]:"fire-rtdb-compat",[P0]:"fire-fn",[R0]:"fire-fn-compat",[N0]:"fire-iid",[O0]:"fire-iid-compat",[A0]:"fire-fcm",[L0]:"fire-fcm-compat",[D0]:"fire-perf",[x0]:"fire-perf-compat",[M0]:"fire-rc",[U0]:"fire-rc-compat",[F0]:"fire-gcs",[z0]:"fire-gcs-compat",[j0]:"fire-fst",[$0]:"fire-fst-compat","fire-js":"fire-js",[B0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,$a=new Map;function W0(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ut(e){const t=e.name;if($a.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;$a.set(t,e);for(const n of _o.values())W0(n,e);return!0}function Zn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new vn("app","Firebase",H0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=b0;function Gh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ja,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=$h()),!n)throw Ut.create("no-options");const o=_o.get(i);if(o){if(Kr(n,o.options)&&Kr(r,o.config))return o;throw Ut.create("duplicate-app",{appName:i})}const s=new e0(i);for(const l of $a.values())s.addComponent(l);const a=new K0(n,r,s);return _o.set(i,a),a}function qh(e=ja){const t=_o.get(e);if(!t&&e===ja&&$h())return Gh();if(!t)throw Ut.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let i=(r=V0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}ut(new Ye(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="firebase-heartbeat-database",q0=1,Gr="firebase-heartbeat-store";let As=null;function Qh(){return As||(As=h0(G0,q0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gr)}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),As}async function Q0(e){try{return await(await Qh()).transaction(Gr).objectStore(Gr).get(Yh(e))}catch(t){if(t instanceof Je)un.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(n.message)}}}async function Dc(e,t){try{const r=(await Qh()).transaction(Gr,"readwrite");await r.objectStore(Gr).put(t,Yh(e)),await r.done}catch(n){if(n instanceof Je)un.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function Yh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=1024,J0=30*24*60*60*1e3;class X0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ew(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xc();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=J0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xc(),{heartbeatsToSend:r,unsentEntries:i}=Z0(this._heartbeatsCache.heartbeats),o=zh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function xc(){return new Date().toISOString().substring(0,10)}function Z0(e,t=Y0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Mc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ew{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vh()?Wh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Q0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Mc(e){return zh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(e){ut(new Ye("platform-logger",t=>new g0(t),"PRIVATE")),ut(new Ye("heartbeat",t=>new X0(t),"PRIVATE")),Ge(za,Lc,e),Ge(za,Lc,"esm2017"),Ge("fire-js","")}tw("");function Gl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nw=Jh,Xh=new vn("auth","Firebase",Jh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Hl("@firebase/auth");function rw(e,...t){Eo.logLevel<=U.WARN&&Eo.warn(`Auth (${ii}): ${e}`,...t)}function bi(e,...t){Eo.logLevel<=U.ERROR&&Eo.error(`Auth (${ii}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e,...t){throw ql(e,...t)}function qe(e,...t){return ql(e,...t)}function iw(e,t,n){const r=Object.assign(Object.assign({},nw()),{[t]:n});return new vn("auth","Firebase",r).create(t,{appName:e.name})}function ql(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xh.create(e,...t)}function N(e,t,...n){if(!e)throw ql(t,...n)}function nt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bi(t),new Error(t)}function ct(e,t){e||nt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ow(){return Uc()==="http:"||Uc()==="https:"}function Uc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ow()||bh()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n){this.shortDelay=t,this.longDelay=n,ct(n>t,"Short delay should be less than long delay!"),this.isMobile=Uy()||Fy()}get(){return sw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(e,t){ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new oi(3e4,6e4);function Vt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wt(e,t,n,r,i={}){return ep(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ri(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Zh.fetch()(tp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function ep(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},lw),t);try{const i=new dw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ri(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ri(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ri(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iw(e,d,u);Be(e,d)}}catch(i){if(i instanceof Je)throw i;Be(e,"network-request-failed",{message:String(i)})}}async function si(e,t,n,r,i={}){const o=await Wt(e,t,n,r,i);return"mfaPendingCredential"in o&&Be(e,"multi-factor-auth-required",{_serverResponse:o}),o}function tp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ql(e.config,i):`${e.config.apiScheme}://${i}`}function cw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),uw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qe(e,t,r);return i.customData._tokenResponse=n,i}function Fc(e){return e!==void 0&&e.enterprise!==void 0}class fw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return cw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function hw(e,t){return Wt(e,"GET","/v2/recaptchaConfig",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(e,t){return Wt(e,"POST","/v1/accounts:delete",t)}async function mw(e,t){return Wt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gw(e,t=!1){const n=ft(e),r=await n.getIdToken(t),i=Yl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Cr(Ls(i.auth_time)),issuedAtTime:Cr(Ls(i.iat)),expirationTime:Cr(Ls(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ls(e){return Number(e)*1e3}function Yl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=jh(n);return i?JSON.parse(i):(bi("Failed to decode base64 JWT payload"),null)}catch(i){return bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vw(e){const t=Yl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Je&&yw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function yw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(e){var t;const n=e.auth,r=await e.getIdToken(),i=await qr(e,mw(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Sw(o.providerUserInfo):[],a=Ew(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new np(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function _w(e){const t=ft(e);await So(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ew(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Sw(e){return e.map(t=>{var{providerId:n}=t,r=Gl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(e,t){const n=await ep(e,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=tp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kw(e,t){return Wt(e,"POST","/v2/accounts:revokeToken",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vw(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Iw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Qr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Gl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ww(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new np(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await qr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return gw(this,t)}reload(){return _w(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await qr(this,pw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:v,isAnonymous:E,providerData:T,stsTokenManager:C}=n;N(p&&C,t,"internal-error");const P=Qr.fromJSON(this.name,C);N(typeof p=="string",t,"internal-error"),pt(h,t.name),pt(m,t.name),N(typeof v=="boolean",t,"internal-error"),N(typeof E=="boolean",t,"internal-error"),pt(g,t.name),pt(y,t.name),pt(w,t.name),pt(R,t.name),pt(f,t.name),pt(c,t.name);const j=new nn({uid:p,auth:t,email:m,emailVerified:v,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:P,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(j.providerData=T.map(L=>Object.assign({},L))),R&&(j._redirectEventId=R),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Qr;i.updateFromServerResponse(n);const o=new nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await So(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map;function rt(e){ct(e instanceof Function,"Expected a class definition");let t=zc.get(e);return t?(ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,zc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}rp.type="NONE";const jc=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e,t,n){return`firebase:${e}:${t}:${n}`}class jn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Vi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Vi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new jn(rt(jc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||rt(jc);const s=Vi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=nn._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new jn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new jn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ip(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lp(t))return"Blackberry";if(up(t))return"Webos";if(Jl(t))return"Safari";if((t.includes("chrome/")||op(t))&&!t.includes("edge/"))return"Chrome";if(ap(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ip(e=ue()){return/firefox\//i.test(e)}function Jl(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function op(e=ue()){return/crios\//i.test(e)}function sp(e=ue()){return/iemobile/i.test(e)}function ap(e=ue()){return/android/i.test(e)}function lp(e=ue()){return/blackberry/i.test(e)}function up(e=ue()){return/webos/i.test(e)}function Ko(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Tw(e=ue()){var t;return Ko(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Cw(){return zy()&&document.documentMode===10}function cp(e=ue()){return Ko(e)||ap(e)||up(e)||lp(e)||/windows phone/i.test(e)||sp(e)}function Pw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(e,t=[]){let n;switch(e){case"Browser":n=$c(ue());break;case"Worker":n=`${$c(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(e,t={}){return Wt(e,"GET","/v2/passwordPolicy",Vt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=6;class Aw{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Ow,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bc(this),this.idTokenSubscription=new Bc(this),this.beforeStateQueue=new Rw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await So(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ft(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Nw(this),n=new Aw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&rt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&rw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(e){return ft(e)}class Bc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Wy(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function fp(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=qe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Dw().appendChild(r)})}function xw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Mw="https://www.google.com/recaptcha/enterprise.js?render=",Uw="recaptcha-enterprise",Fw="NO_RECAPTCHA";class zw{constructor(t){this.type=Uw,this.auth=yn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{hw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new fw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Fc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(Fw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Fc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}fp(Mw+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function bc(e,t,n,r=!1){const i=new zw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ba(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await bc(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await bc(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(e,t){const n=Zn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Kr(o,t??{}))return i;Be(i,"already-initialized")}return n.initialize({options:t})}function $w(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Bw(e,t,n){const r=yn(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=hp(t),{host:s,port:a}=bw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Vw()}function hp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bw(e){const t=hp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Vc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Vc(s)}}}function Vc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Vw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(t){return nt("not implemented")}_linkToIdToken(t,n){return nt("not implemented")}_getReauthenticationResolver(t){return nt("not implemented")}}async function Ww(e,t){return Wt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(e,t){return si(e,"POST","/v1/accounts:signInWithPassword",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(e,t){return si(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}async function Gw(e,t){return si(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Xl{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Yr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Yr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(t,n,"signInWithPassword",Hw);case"emailLink":return Kw(t,{email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(t,r,"signUpPassword",Ww);case"emailLink":return Gw(t,{idToken:n,email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t){return si(e,"POST","/v1/accounts:signInWithIdp",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="http://localhost";class cn extends Xl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Gl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new cn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:qw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ri(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yw(e){const t=mr(gr(e)).link,n=t?mr(gr(t)).deep_link_id:null,r=mr(gr(e)).deep_link_id;return(r?mr(gr(r)).link:null)||r||n||t||e}class Zl{constructor(t){var n,r,i,o,s,a;const l=mr(gr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Qw((i=l.mode)!==null&&i!==void 0?i:null);N(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Yw(t);try{return new Zl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.providerId=er.PROVIDER_ID}static credential(t,n){return Yr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Zl.parseLink(n);return N(r,"argument-error"),Yr._fromEmailAndCode(t,r.code,r.tenantId)}}er.PROVIDER_ID="password";er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends pp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ai{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wt.credential(t.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ai{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ai{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(e,t){return si(e,"POST","/v1/accounts:signUp",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await nn._fromIdTokenResponse(t,r,i),s=Wc(r);return new dn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Wc(r);return new dn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Wc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Je{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Io(t,n,r,i)}}function mp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(e,o,t,r):o})}async function Xw(e,t,n=!1){const r=await qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await qr(e,mp(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=Yl(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),dn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(e,t,n=!1){const r="signIn",i=await mp(e,r,t),o=await dn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function e_(e,t){return gp(yn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(e){const t=yn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function t_(e,t,n){const r=yn(e),s=await ba(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vp(e),l}),a=await dn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function n_(e,t,n){return e_(ft(e),er.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vp(e),r})}function r_(e,t,n,r){return ft(e).onIdTokenChanged(t,n,r)}function i_(e,t,n){return ft(e).beforeAuthStateChanged(t,n)}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(){const e=ue();return Jl(e)||Ko(e)}const s_=1e3,a_=10;class wp extends yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=o_()&&Pw(),this.fallbackToPolling=cp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Cw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,a_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},s_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}wp.type="LOCAL";const l_=wp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p extends yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}_p.type="SESSION";const Ep=_p;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Go(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await u_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=eu("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function d_(e){Qe().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function f_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function p_(){return Sp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="firebaseLocalStorageDb",m_=1,To="firebaseLocalStorage",kp="fbase_key";class li{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(e,t){return e.transaction([To],t?"readwrite":"readonly").objectStore(To)}function g_(){const e=indexedDB.deleteDatabase(Ip);return new li(e).toPromise()}function Va(){const e=indexedDB.open(Ip,m_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(To,{keyPath:kp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(To)?t(r):(r.close(),await g_(),t(await Va()))})})}async function Hc(e,t,n){const r=qo(e,!0).put({[kp]:t,value:n});return new li(r).toPromise()}async function v_(e,t){const n=qo(e,!1).get(t),r=await new li(n).toPromise();return r===void 0?null:r.value}function Kc(e,t){const n=qo(e,!0).delete(t);return new li(n).toPromise()}const y_=800,w_=3;class Tp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>w_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(p_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await f_(),!this.activeServiceWorker)return;this.sender=new c_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||h_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Va();return await Hc(t,ko,"1"),await Kc(t,ko),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>v_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=qo(i,!1).getAll();return new li(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tp.type="LOCAL";const __=Tp;new oi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(e,t){return t?rt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Xl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function S_(e){return gp(e.auth,new tu(e),e.bypassAuthState)}function I_(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Zw(n,new tu(e),e.bypassAuthState)}async function k_(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Xw(n,new tu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return S_;case"linkViaPopup":case"linkViaRedirect":return k_;case"reauthViaPopup":case"reauthViaRedirect":return I_;default:Be(this.auth,"internal-error")}}resolve(t){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new oi(2e3,1e4);class Ln extends Cp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const t=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,T_.get())};t()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="pendingRedirect",Wi=new Map;class P_ extends Cp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Wi.get(this.auth._key());if(!t){try{const r=await R_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Wi.set(this.auth._key(),t)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R_(e,t){const n=A_(t),r=O_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function N_(e,t){Wi.set(e._key(),t)}function O_(e){return rt(e._redirectPersistence)}function A_(e){return Vi(C_,e.config.apiKey,e.name)}async function L_(e,t,n=!1){const r=yn(e),i=E_(r,t),s=await new P_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=10*60*1e3;class x_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!M_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Pp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=D_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gc(t))}saveEventToCache(t){this.cachedEventUids.add(Gc(t)),this.lastProcessedEventTime=Date.now()}}function Gc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Pp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function M_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(e,t={}){return Wt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z_=/^https?/;async function j_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await U_(e);for(const n of t)try{if($_(n))return}catch{}Be(e,"unauthorized-domain")}function $_(e){const t=Ba(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!z_.test(n))return!1;if(F_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new oi(3e4,6e4);function qc(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function b_(e){return new Promise((t,n)=>{var r,i,o;function s(){qc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qc(),n(qe(e,"network-request-failed"))},timeout:B_.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Qe().gapi)===null||o===void 0)&&o.load)s();else{const a=xw("iframefcb");return Qe()[a]=()=>{gapi.load?s():n(qe(e,"network-request-failed"))},fp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Hi=null,t})}let Hi=null;function V_(e){return Hi=Hi||b_(e),Hi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new oi(5e3,15e3),H_="__/auth/iframe",K_="emulator/auth/iframe",G_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q_(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ql(t,K_):`https://${e.config.authDomain}/${H_}`,r={apiKey:t.apiKey,appName:e.name,v:ii},i=q_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ri(r).slice(1)}`}async function Y_(e){const t=await V_(e),n=Qe().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:Q_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=qe(e,"network-request-failed"),a=Qe().setTimeout(()=>{o(s)},W_.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X_=500,Z_=600,eE="_blank",tE="http://localhost";class Qc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nE(e,t,n,r=X_,i=Z_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},J_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=op(u)?eE:n),ip(u)&&(t=t||tE,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,y])=>`${m}${g}=${y},`,"");if(Tw(u)&&a!=="_self")return rE(t||"",a),new Qc(null);const h=window.open(t||"",a,d);N(h,e,"popup-blocked");try{h.focus()}catch{}return new Qc(h)}function rE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="__/auth/handler",oE="emulator/auth/handler",sE=encodeURIComponent("fac");async function Yc(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(t instanceof pp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Vy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(o||{}))s[d]=h}if(t instanceof ai){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${sE}=${encodeURIComponent(l)}`:"";return`${aE(e)}?${ri(a).slice(1)}${u}`}function aE({config:e}){return e.emulator?Ql(e,oE):`https://${e.authDomain}/${iE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="webStorageSupport";class lE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ep,this._completeRedirectFn=L_,this._overrideRedirectResult=N_}async _openPopup(t,n,r,i){var o;ct((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Yc(t,n,r,Ba(),i);return nE(t,s,eu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Yc(t,n,r,Ba(),i);return d_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ct(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Y_(t),r=new x_(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ds,{type:Ds},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ds];s!==void 0&&n(!!s),Be(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=j_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return cp()||Jl()||Ko()}}const uE=lE;var Jc="@firebase/auth",Xc="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fE(e){ut(new Ye("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dp(e)},u=new Lw(r,i,o,l);return $w(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ut(new Ye("auth-internal",t=>{const n=yn(t.getProvider("auth").getImmediate());return(r=>new cE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Jc,Xc,dE(e)),Ge(Jc,Xc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=5*60,pE=Bh("authIdTokenMaxAge")||hE;let Zc=null;const mE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pE)return;const i=n==null?void 0:n.token;Zc!==i&&(Zc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rp(e=qh()){const t=Zn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=jw(e,{popupRedirectResolver:uE,persistence:[__,l_,Ep]}),r=Bh("authTokenSyncURL");if(r){const o=mE(r);i_(n,o,()=>o(n.currentUser)),r_(n,s=>o(s))}const i=xy("auth");return i&&Bw(n,`http://${i}`),n}fE("Browser");const gE="_regForm_zfyfu_1",vE={regForm:gE},yE=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),i=Rp(),o=async s=>{s.preventDefault();try{const a=await t_(i,e,n);console.log("Registered",a)}catch(a){console.error("Error in signup",a)}};return F.jsxs("form",{className:vE.regForm,onSubmit:o,children:[F.jsx("h2",{children:"Registration"}),F.jsx("input",{type:"email",placeholder:"Email",onChange:s=>t(s.target.value),required:!0}),F.jsx("input",{type:"password",placeholder:"Password",onChange:s=>r(s.target.value),required:!0}),F.jsx("button",{type:"submit",children:"Register"})]})},wE="_loginForm_eewev_1",_E={loginForm:wE},EE=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),i=Rp(),o=async s=>{s.preventDefault();try{const a=await n_(i,e,n);console.log("Logged in",a)}catch(a){console.error("Error in login",a)}};return F.jsxs("form",{className:_E.loginForm,onSubmit:o,children:[F.jsx("h2",{children:"Login"}),F.jsx("input",{type:"email",placeholder:"Email",onChange:s=>t(s.target.value),required:!0}),F.jsx("input",{type:"password",placeholder:"Password",onChange:s=>r(s.target.value),required:!0}),F.jsx("button",{type:"submit",children:"Login"})]})},SE="_container_1vpi4_1",IE={container:SE},kE=()=>F.jsxs("div",{className:IE.container,children:[F.jsx(Ic,{to:"/register",children:F.jsx("h3",{children:"Registration "})}),F.jsx(Ic,{to:"/",children:F.jsx("h3",{children:"Login"})})]});function TE(){return F.jsxs(Iy,{children:[F.jsx(kE,{}),F.jsxs(vy,{children:[F.jsx(Bi,{path:"/",element:F.jsx(EE,{})}),F.jsx(Bi,{path:"/register",element:F.jsx(yE,{})}),F.jsx(Bi,{path:"/main",element:F.jsx("mainPage",{})})]})]})}var CE="firebase",PE="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(CE,PE,"app");const RE=(e,t)=>t.some(n=>e instanceof n);let ed,td;function NE(){return ed||(ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OE(){return td||(td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Np=new WeakMap,Wa=new WeakMap,Op=new WeakMap,xs=new WeakMap,nu=new WeakMap;function AE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ft(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Np.set(n,e)}).catch(()=>{}),nu.set(t,e),t}function LE(e){if(Wa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Wa.set(e,t)}let Ha={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Op.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function DE(e){Ha=e(Ha)}function xE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ms(this),t,...n);return Op.set(r,t.sort?t.sort():[t]),Ft(r)}:OE().includes(e)?function(...t){return e.apply(Ms(this),t),Ft(Np.get(this))}:function(...t){return Ft(e.apply(Ms(this),t))}}function ME(e){return typeof e=="function"?xE(e):(e instanceof IDBTransaction&&LE(e),RE(e,NE())?new Proxy(e,Ha):e)}function Ft(e){if(e instanceof IDBRequest)return AE(e);if(xs.has(e))return xs.get(e);const t=ME(e);return t!==e&&(xs.set(e,t),nu.set(t,e)),t}const Ms=e=>nu.get(e);function UE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ft(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ft(s.result),l.oldVersion,l.newVersion,Ft(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],Us=new Map;function nd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Us.get(t))return Us.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=zE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Us.set(t,o),o}DE(e=>({...e,get:(t,n,r)=>nd(t,n)||e.get(t,n,r),has:(t,n)=>!!nd(t,n)||e.has(t,n)}));const Ap="@firebase/installations",ru="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=1e4,Dp=`w:${ru}`,xp="FIS_v2",jE="https://firebaseinstallations.googleapis.com/v1",$E=60*60*1e3,BE="installations",bE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fn=new vn(BE,bE,VE);function Mp(e){return e instanceof Je&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up({projectId:e}){return`${jE}/projects/${e}/installations`}function Fp(e){return{token:e.token,requestStatus:2,expiresIn:HE(e.expiresIn),creationTime:Date.now()}}async function zp(e,t){const r=(await t.json()).error;return fn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function WE(e,{refreshToken:t}){const n=jp(e);return n.append("Authorization",KE(t)),n}async function $p(e){const t=await e();return t.status>=500&&t.status<600?e():t}function HE(e){return Number(e.replace("s","000"))}function KE(e){return`${xp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Up(e),i=jp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:xp,appId:e.appId,sdkVersion:Dp},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await $p(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Fp(u.authToken)}}else throw await zp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=/^[cdef][\w-]{21}$/,Ka="";function YE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=JE(e);return QE.test(n)?n:Ka}catch{return Ka}}function JE(e){return qE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=new Map;function Vp(e,t){const n=Qo(e);Wp(n,t),XE(n,t)}function Wp(e,t){const n=bp.get(e);if(n)for(const r of n)r(t)}function XE(e,t){const n=ZE();n&&n.postMessage({key:e,fid:t}),e1()}let Zt=null;function ZE(){return!Zt&&"BroadcastChannel"in self&&(Zt=new BroadcastChannel("[Firebase] FID Change"),Zt.onmessage=e=>{Wp(e.data.key,e.data.fid)}),Zt}function e1(){bp.size===0&&Zt&&(Zt.close(),Zt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="firebase-installations-database",n1=1,hn="firebase-installations-store";let Fs=null;function iu(){return Fs||(Fs=UE(t1,n1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(hn)}}})),Fs}async function Co(e,t){const n=Qo(e),i=(await iu()).transaction(hn,"readwrite"),o=i.objectStore(hn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Vp(e,t.fid),t}async function Hp(e){const t=Qo(e),r=(await iu()).transaction(hn,"readwrite");await r.objectStore(hn).delete(t),await r.done}async function Yo(e,t){const n=Qo(e),i=(await iu()).transaction(hn,"readwrite"),o=i.objectStore(hn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Vp(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(e){let t;const n=await Yo(e.appConfig,r=>{const i=r1(r),o=i1(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ka?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function r1(e){const t=e||{fid:YE(),registrationStatus:0};return Kp(t)}function i1(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=o1(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:s1(e)}:{installationEntry:t}}async function o1(e,t){try{const n=await GE(e,t);return Co(e.appConfig,n)}catch(n){throw Mp(n)&&n.customData.serverCode===409?await Hp(e.appConfig):await Co(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function s1(e){let t=await rd(e.appConfig);for(;t.registrationStatus===1;)await Bp(100),t=await rd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ou(e);return r||n}return t}function rd(e){return Yo(e,t=>{if(!t)throw fn.create("installation-not-found");return Kp(t)})}function Kp(e){return a1(e)?{fid:e.fid,registrationStatus:0}:e}function a1(e){return e.registrationStatus===1&&e.registrationTime+Lp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1({appConfig:e,heartbeatServiceProvider:t},n){const r=u1(e,n),i=WE(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Dp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await $p(()=>fetch(r,a));if(l.ok){const u=await l.json();return Fp(u)}else throw await zp("Generate Auth Token",l)}function u1(e,{fid:t}){return`${Up(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(e,t=!1){let n;const r=await Yo(e.appConfig,o=>{if(!Gp(o))throw fn.create("not-registered");const s=o.authToken;if(!t&&f1(s))return o;if(s.requestStatus===1)return n=c1(e,t),o;{if(!navigator.onLine)throw fn.create("app-offline");const a=p1(o);return n=d1(e,a),a}});return n?await n:r.authToken}async function c1(e,t){let n=await id(e.appConfig);for(;n.authToken.requestStatus===1;)await Bp(100),n=await id(e.appConfig);const r=n.authToken;return r.requestStatus===0?su(e,t):r}function id(e){return Yo(e,t=>{if(!Gp(t))throw fn.create("not-registered");const n=t.authToken;return m1(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function d1(e,t){try{const n=await l1(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Co(e.appConfig,r),n}catch(n){if(Mp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Co(e.appConfig,r)}throw n}}function Gp(e){return e!==void 0&&e.registrationStatus===2}function f1(e){return e.requestStatus===2&&!h1(e)}function h1(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$E}function p1(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function m1(e){return e.requestStatus===1&&e.requestTime+Lp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(e){const t=e,{installationEntry:n,registrationPromise:r}=await ou(t);return r?r.catch(console.error):su(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(e,t=!1){const n=e;return await y1(n),(await su(n,t)).token}async function y1(e){const{registrationPromise:t}=await ou(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(e){if(!e||!e.options)throw zs("App Configuration");if(!e.name)throw zs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw zs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function zs(e){return fn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="installations",_1="installations-internal",E1=e=>{const t=e.getProvider("app").getImmediate(),n=w1(t),r=Zn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},S1=e=>{const t=e.getProvider("app").getImmediate(),n=Zn(t,qp).getImmediate();return{getId:()=>g1(n),getToken:i=>v1(n,i)}};function I1(){ut(new Ye(qp,E1,"PUBLIC")),ut(new Ye(_1,S1,"PRIVATE"))}I1();Ge(Ap,ru);Ge(Ap,ru,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="analytics",k1="firebase_id",T1="origin",C1=60*1e3,P1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",au="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Hl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new vn("analytics","Analytics",R1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(e){if(!e.startsWith(au)){const t=Ie.create("invalid-gtag-resource",{gtagURL:e});return we.warn(t.message),""}return e}function Qp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function O1(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function A1(e,t){const n=O1("firebase-js-sdk-policy",{createScriptURL:N1}),r=document.createElement("script"),i=`${au}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function L1(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function D1(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Qp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){we.error(a)}e("config",i,o)}async function x1(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Qp(n);for(const l of s){const u=a.find(h=>h.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){we.error(o)}}function M1(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await x1(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await D1(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){we.error(a)}}return i}function U1(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=M1(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function F1(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(au)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=30,j1=1e3;class $1{constructor(t={},n=j1){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Yp=new $1;function B1(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function b1(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:B1(r)},o=P1.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function V1(e,t=Yp,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ie.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ie.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new K1;return setTimeout(async()=>{a.abort()},n!==void 0?n:C1),Jp({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Jp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Yp){var o;const{appId:s,measurementId:a}=e;try{await W1(r,t)}catch(l){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await b1(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!H1(u)){if(i.deleteThrottleMetadata(s),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Rc(n,i.intervalMillis,z1):Rc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),we.debug(`Calling attemptFetch again in ${d} millis`),Jp(e,h,r,i)}}function W1(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ie.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function H1(e){if(!(e instanceof Je)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class K1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function G1(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(){if(Vh())try{await Wh()}catch(e){return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Q1(e,t,n,r,i,o,s){var a;const l=V1(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>we.error(g)),t.push(l);const u=q1().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([l,u]);F1(o)||A1(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[T1]="firebase",m.update=!0,h!=null&&(m[k1]=h),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(t){this.app=t}_delete(){return delete Pr[this.app.options.appId],Promise.resolve()}}let Pr={},od=[];const sd={};let js="dataLayer",J1="gtag",ad,Xp,ld=!1;function X1(){const e=[];if(bh()&&e.push("This is a browser extension environment."),jy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:t});we.warn(n.message)}}function Z1(e,t,n){X1();const r=e.options.appId;if(!r)throw Ie.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(Pr[r]!=null)throw Ie.create("already-exists",{id:r});if(!ld){L1(js);const{wrappedGtag:o,gtagCore:s}=U1(Pr,od,sd,js,J1);Xp=o,ad=s,ld=!0}return Pr[r]=Q1(e,od,sd,t,ad,js,n),new Y1(e)}function eS(e=qh()){e=ft(e);const t=Zn(e,Po);return t.isInitialized()?t.getImmediate():tS(e)}function tS(e,t={}){const n=Zn(e,Po);if(n.isInitialized()){const i=n.getImmediate();if(Kr(t,n.getOptions()))return i;throw Ie.create("already-initialized")}return n.initialize({options:t})}function nS(e,t,n,r){e=ft(e),G1(Xp,Pr[e.app.options.appId],t,n,r).catch(i=>we.error(i))}const ud="@firebase/analytics",cd="0.10.0";function rS(){ut(new Ye(Po,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Z1(r,i,n)},"PUBLIC")),ut(new Ye("analytics-internal",e,"PRIVATE")),Ge(ud,cd),Ge(ud,cd,"esm2017");function e(t){try{const n=t.getProvider(Po).getImmediate();return{logEvent:(r,i,o)=>nS(n,r,i,o)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}rS();const iS={apiKey:"AIzaSyBGojPkkC6s2aJTHnf4uSExxZo9iqX-lFY",authDomain:"respirator-54ab1.firebaseapp.com",databaseURL:"https://respirator-54ab1-default-rtdb.firebaseio.com",projectId:"respirator-54ab1",storageBucket:"respirator-54ab1.appspot.com",messagingSenderId:"125964604290",appId:"1:125964604290:web:0a6e3676aa43755fdef59b",measurementId:"G-K4Q8R9WF8F"},oS=Gh(iS);eS(oS);$s.createRoot(document.getElementById("root")).render(F.jsx(_d.StrictMode,{children:F.jsx(TE,{})}));