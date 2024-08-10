/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,i=this.t;if(e&&void 0===t){let e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=t=>new n("string"==typeof t?t:t+"",void 0,i),r=(t,...e)=>new n(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,i),l=(i,s)=>{e?i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):s.forEach(e=>{let s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)})},h=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return o(e)})(t):t,a=window,d=a.trustedTypes,c=d?d.emptyScript:"",u=a.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:_};class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(h(i));else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;let n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){let o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){let t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:$}),(null!==(tY=a.reactiveElementVersions)&&void 0!==tY?tY:a.reactiveElementVersions=[]).push("1.6.1");const g=window,f=g.trustedTypes,A=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,m="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,b="?"+y,E=`<${b}>`,w=document,S=()=>w.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,k=t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),H="[ 	\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,U=/>/g,j=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,M=/"/g,O=/^(?:script|style|textarea|title)$/i,R=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=(R(1),R(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),D=new WeakMap,L=w.createTreeWalker(w,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const B=(t,e)=>{let i=t.length-1,s=[],n,o=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){let i=t[e],l,h,a=-1,d=0;for(;d<i.length&&(r.lastIndex=d,null!==(h=r.exec(i)));)d=r.lastIndex,r===N?"!--"===h[1]?r=T:void 0!==h[1]?r=U:void 0!==h[2]?(O.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=j):void 0!==h[3]&&(r=j):r===j?">"===h[0]?(r=null!=n?n:N,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?j:'"'===h[3]?M:P):r===M||r===P?r=j:r===T||r===U?r=N:(r=j,n=void 0);let c=r===j&&t[e+1].startsWith("/>")?" ":"";o+=r===N?i+E:a>=0?(s.push(l),i.slice(0,a)+m+i.slice(a)+y+c):i+y+(-2===a?(s.push(void 0),e):c)}return[V(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0,r=t.length-1,l=this.parts,[h,a]=B(t,e);if(this.el=K.createElement(h,i),L.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(m)||e.startsWith(y)){let i=a[o++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+m).split(y),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?G:"@"===e[1]?Q:Z})}else l.push({type:6,index:n})}for(let e of t)s.removeAttribute(e)}if(O.test(s.tagName)){let t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),L.nextNode(),l.push({type:2,index:++n});s.append(t[e],S())}}}else if(8===s.nodeType){if(s.data===b)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)l.push({type:7,index:n}),t+=y.length-1}}n++}}static createElement(t,e){let i=w.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r;if(e===I)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl,h=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t))._$AT(t,i,s),void 0!==s?(null!==(r=i._$Co)&&void 0!==r?r:i._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(i,!0);L.currentNode=n;let o=L.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new q(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new X(o,this,t)),this._$AV.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=L.nextNode(),r++)}return L.currentNode=w,n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){C(t=W(this,t,e))?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):k(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(w.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new J(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new K(t)),e}T(t){x(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new q(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let n=this.strings,o=!1;if(void 0===n)(o=!C(t=W(this,t,e,0))||t!==this._$AH&&t!==I)&&(this._$AH=t);else{let s,r;let l=t;for(t=n[0],s=0;s<n.length-1;s++)(r=W(this,l[i+s],e,s))===I&&(r=this._$AH[s]),o||(o=!C(r)||r!==this._$AH[s]),r===z?t=z:t!==z&&(t+=(null!=r?r:"")+n[s+1]),this._$AH[s]=r}o&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const F=f?f.emptyScript:"";class G extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class Q extends Z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===I)return;let s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=g.litHtmlPolyfillSupport;null==tt||tt(K,q),(null!==(tF=g.litHtmlVersions)&&void 0!==tF?tF:g.litHtmlVersions=[]).push("2.8.0");const te=window,ti=te.trustedTypes,ts=ti?ti.createPolicy("lit-html",{createHTML:t=>t}):void 0,tn="$lit$",to=`lit$${(Math.random()+"").slice(9)}$`,tr="?"+to,tl=`<${tr}>`,th=document,ta=()=>th.createComment(""),td=t=>null===t||"object"!=typeof t&&"function"!=typeof t,tc=Array.isArray,tu=t=>tc(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),tp="[ 	\n\f\r]",t_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tv=/-->/g,t$=/>/g,tg=RegExp(`>|${tp}(?:([^\\s"'>=/]+)(${tp}*=${tp}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tf=/'/g,tA=/"/g,tm=/^(?:script|style|textarea|title)$/i,ty=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),tb=ty(1),tE=(ty(2),Symbol.for("lit-noChange")),tw=Symbol.for("lit-nothing"),tS=new WeakMap,tC=th.createTreeWalker(th,129,null,!1),tx=(t,e)=>{let i=t.length-1,s=[],n,o=2===e?"<svg>":"",r=t_;for(let e=0;e<i;e++){let i=t[e],l,h,a=-1,d=0;for(;d<i.length&&(r.lastIndex=d,null!==(h=r.exec(i)));)d=r.lastIndex,r===t_?"!--"===h[1]?r=tv:void 0!==h[1]?r=t$:void 0!==h[2]?(tm.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=tg):void 0!==h[3]&&(r=tg):r===tg?">"===h[0]?(r=null!=n?n:t_,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?tg:'"'===h[3]?tA:tf):r===tA||r===tf?r=tg:r===tv||r===t$?r=t_:(r=tg,n=void 0);let c=r===tg&&t[e+1].startsWith("/>")?" ":"";o+=r===t_?i+tl:a>=0?(s.push(l),i.slice(0,a)+tn+i.slice(a)+to+c):i+to+(-2===a?(s.push(void 0),e):c)}let l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==ts?ts.createHTML(l):l,s]};class tk{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0,r=t.length-1,l=this.parts,[h,a]=tx(t,e);if(this.el=tk.createElement(h,i),tC.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=tC.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(tn)||e.startsWith(to)){let i=a[o++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+tn).split(to),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?tj:"?"===e[1]?tM:"@"===e[1]?tO:tU})}else l.push({type:6,index:n})}for(let e of t)s.removeAttribute(e)}if(tm.test(s.tagName)){let t=s.textContent.split(to),e=t.length-1;if(e>0){s.textContent=ti?ti.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ta()),tC.nextNode(),l.push({type:2,index:++n});s.append(t[e],ta())}}}else if(8===s.nodeType){if(s.data===tr)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(to,t+1));)l.push({type:7,index:n}),t+=to.length-1}}n++}}static createElement(t,e){let i=th.createElement("template");return i.innerHTML=t,i}}function tH(t,e,i=t,s){var n,o,r;if(e===tE)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl,h=td(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t))._$AT(t,i,s),void 0!==s?(null!==(r=i._$Co)&&void 0!==r?r:i._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=tH(t,l._$AS(t,e.values),l,s)),e}class tN{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:th).importNode(i,!0);tC.currentNode=n;let o=tC.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new tT(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new tR(o,this,t)),this._$AV.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=tC.nextNode(),r++)}return n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tT{constructor(t,e,i,s){var n;this.type=2,this._$AH=tw,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){td(t=tH(this,t,e))?t===tw||null==t||""===t?(this._$AH!==tw&&this._$AR(),this._$AH=tw):t!==this._$AH&&t!==tE&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):tu(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tw&&td(this._$AH)?this._$AA.nextSibling.data=t:this.$(th.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=tk.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new tN(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=tS.get(t.strings);return void 0===e&&tS.set(t.strings,e=new tk(t)),e}T(t){tc(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new tT(this.k(ta()),this.k(ta()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class tU{constructor(t,e,i,s,n){this.type=1,this._$AH=tw,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=tw}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let n=this.strings,o=!1;if(void 0===n)(o=!td(t=tH(this,t,e,0))||t!==this._$AH&&t!==tE)&&(this._$AH=t);else{let s,r;let l=t;for(t=n[0],s=0;s<n.length-1;s++)(r=tH(this,l[i+s],e,s))===tE&&(r=this._$AH[s]),o||(o=!td(r)||r!==this._$AH[s]),r===tw?t=tw:t!==tw&&(t+=(null!=r?r:"")+n[s+1]),this._$AH[s]=r}o&&!s&&this.j(t)}j(t){t===tw?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tj extends tU{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tw?void 0:t}}const tP=ti?ti.emptyScript:"";class tM extends tU{constructor(){super(...arguments),this.type=4}j(t){t&&t!==tw?this.element.setAttribute(this.name,tP):this.element.removeAttribute(this.name)}}class tO extends tU{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=tH(this,t,e,0))&&void 0!==i?i:tw)===tE)return;let s=this._$AH,n=t===tw&&s!==tw||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==tw&&(s===tw||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tR{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tH(this,t)}}const tI=te.litHtmlPolyfillSupport;null==tI||tI(tk,tT),(null!==(tG=te.litHtmlVersions)&&void 0!==tG?tG:te.litHtmlVersions=[]).push("2.7.2");const tz=(t,e,i)=>{var s,n;let o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,r=o._$litPart$;if(void 0===r){let t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new tT(e.insertBefore(ta(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r};class tD extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tz(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return tE}}tD.finalized=!0,tD._$litElement$=!0,null===(tQ=globalThis.litElementHydrateSupport)||void 0===tQ||tQ.call(globalThis,{LitElement:tD});const tL=globalThis.litElementPolyfillSupport;null==tL||tL({LitElement:tD}),(null!==(tX=globalThis.litElementVersions)&&void 0!==tX?tX:globalThis.litElementVersions=[]).push("3.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tV=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}};function tB(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tV(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tK(t){return tB({...t,state:!0})}null!=(null===(t0=window.HTMLSlotElement)||void 0===t0?void 0:t0.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE));const tW="霊一二三四五六七八九",tJ=["","十","百","千"];var tq,tZ,tY,tF,tG,tQ,tX,t0,t1,t2,t3=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const t4=t=>!1===t||!0===t;class t6 extends tD{constructor(){super(...arguments),this._handle=0}static async getConfigElement(){return document.createElement("kanji-clock-card-editor")}static getStubConfig(){return{use_24h:!1,invert_date:!1,short_weekdays:!0,kanji_numbers:!1}}connectedCallback(){super.connectedCallback(),this._handle=window.setInterval(this.requestUpdate.bind(this),500)}disconnectedCallback(){clearInterval(this._handle)}setConfig(t){this.config=Object.assign(Object.assign({},t),{name:"Kanji Clock",use_24h:!!t4(t.use_24h)&&t.use_24h,invert_date:!!t4(t.invert_date)&&t.invert_date,short_weekdays:!t4(t.short_weekdays)||t.short_weekdays,kanji_numbers:!!t4(t.kanji_numbers)&&t.kanji_numbers})}numberToKanji(t){if(!0!==this.config.kanji_numbers)return t.toString();let e="",i=t.toString().length;for(let s=i-1;s>=0;s--){let i=Math.pow(10,s),n=t%i,o=Math.floor(t/i);o>1&&o<10&&(e+=tW[o]),o>0&&(e+=tJ[s]),n>0&&n<10&&(e+=tW[n])}return e}render(){let t;let e=new Date,i=e.getHours(),s=e.getMinutes(),n=this.numberToKanji(e.getDate()),o=this.numberToKanji(e.getFullYear()),r=this.numberToKanji(e.getMonth()+1),l="";this.config.use_24h||(i>12&&(i-=12),l=i>=12?"午前":"午後"),t=this.config.use_24h||0!==s?30===s?"半":`${this.numberToKanji(s)}\u{5206}`:"";let h=!0===this.config.invert_date?`${n}\u{65E5}${r}\u{6708}${o}\u{5E74}`:`${o}\u{5E74}${r}\u{6708}${n}\u{65E5}`,a="日月火水木金土"[e.getDay()];return h+=" "+(this.config.short_weekdays?`(${a})`:`${a}\u{66DC}\u{65E5}`),tb`
      <ha-card>
        <div class="content" id="content">
          <div class="time"><span>${l}</span>${this.numberToKanji(i)}時${t}</div>
          <div class="date">${h}</div>
        </div>
      </ha-card>
    `}}t6.cardSize=3,t6.styles=r`
    .content {
      padding: 1.5rem;
      text-align: center;
      font-family: "Sarasa UI J", "Noto Sans JP", Helvetica, Arial, sans-serif;
    }
    .time {
      font-size: 3.2rem;
      line-height: 1em;
      font-weight: 400;
      line-height: 1em;
      font-weight: 400;
      padding-bottom: 0.2em;
      color: var(--primary-text-color);
    }
    .time span {
      font-weight: 300;
      color: var(--secondary-text-color);
    }
    .date {
      color: var(--primary-color);
      font-size: var(--paper-font-headline_-_font-size);
    }
  `,t3([tB({attribute:!1})],t6.prototype,"hass",void 0),t3([tK()],t6.prototype,"config",void 0),(tq=t1||(t1={})).language="language",tq.system="system",tq.comma_decimal="comma_decimal",tq.decimal_comma="decimal_comma",tq.space_comma="space_comma",tq.none="none",(tZ=t2||(t2={})).language="language",tZ.system="system",tZ.am_pm="12",tZ.twenty_four="24";var t5=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:!!s.cancelable,composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},t7=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};class t8 extends tD{setConfig(t){this._config=t}configChanged(t){this._config&&this.hass&&t5(this,"config-changed",{config:t})}get _use_24h(){var t;return(null===(t=this._config)||void 0===t?void 0:t.use_24h)||!1}get _invert_date(){var t;return(null===(t=this._config)||void 0===t?void 0:t.invert_date)||!1}get _short_weekdays(){var t;return(null===(t=this._config)||void 0===t?void 0:t.short_weekdays)||!0}get _kanji_numbers(){var t;return(null===(t=this._config)||void 0===t?void 0:t.kanji_numbers)||!1}render(){return this.hass?tb`
      <div class="card-config">
        <div class="options">
          <div class="option">
            <ha-switch
              .checked=${this._use_24h}
              .configValue="${"use_24h"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Use 24 Clock</span>
          </div>
          <div class="option">
            <ha-switch
              .checked=${this._invert_date}
              .configValue="${"invert_date"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Invert date order</span>
            <span class="help">Use d日m月Y年 instead of the standard Y年m月d日</span>
          </div>
          <div class="option">
            <ha-switch
              .checked=${this._short_weekdays}
              .configValue="${"short_weekdays"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Use short weekday format</span>
            <span class="help">eg. (火) instead of 火曜日</span>
          </div>
          <div class="option">
            <ha-switch
              .checked=${this._kanji_numbers}
              .configValue="${"kanji_numbers"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Show numbers as Kanji</span>
          </div>
        </div>
      </div>
    `:tb``}_valueChanged(t){if(!this._config||!this.hass)return;let e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),t5(this,"config-changed",{config:this._config}))}}t8.styles=r`
    .options {
      display: grid;
    }

    .option {
      display: flex;
      margin: 1rem 0;
      align-items: center;
    }

    .option .label {
      margin: 0 1rem;
    }

    .option .help {
      color: var(--secondary-text-color);
    }
  `,t7([tB({attribute:!1})],t8.prototype,"hass",void 0),t7([tK()],t8.prototype,"_config",void 0),customElements.define("kanji-clock-card",t6),customElements.define("kanji-clock-card-editor",t8),window.customCards=window.customCards||[],window.customCards.push({type:"kanji-clock-card",name:"Kanji Clock Card",description:"A simple clock widget using Japanese Kanji for time and date"});
//# sourceMappingURL=kanji-clock-card.js.map
