"use strict";(()=>{var Ge,C,rn,ti,Ae,sn,tn,ln,Fe={},pn=[],ni=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function ne(e,t){for(var n in t)e[n]=t[n];return e}function un(e){var t=e.parentNode;t&&t.removeChild(e)}function _t(e,t,n){var a,i,o,r={};for(o in t)o=="key"?a=t[o]:o=="ref"?i=t[o]:r[o]=t[o];if(arguments.length>2&&(r.children=arguments.length>3?Ge.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)r[o]===void 0&&(r[o]=e.defaultProps[o]);return Me(e,r,a,i,null)}function Me(e,t,n,a,i){var o={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++rn};return i==null&&C.vnode!=null&&C.vnode(o),o}function j(e){return e.children}function He(e,t){this.props=e,this.context=t}function ge(e,t){if(t==null)return e.__?ge(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ge(e):null}function cn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return cn(e)}}function yt(e){(!e.__d&&(e.__d=!0)&&Ae.push(e)&&!Be.__r++||tn!==C.debounceRendering)&&((tn=C.debounceRendering)||sn)(Be)}function Be(){for(var e;Be.__r=Ae.length;)e=Ae.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ae=[],e.some(function(t){var n,a,i,o,r,s;t.__d&&(r=(o=(n=t).__v).__e,(s=n.__P)&&(a=[],(i=ne({},o)).__v=o.__v+1,Ct(s,o,i,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[r]:null,a,r??ge(o),o.__h),gn(a,o),o.__e!=r&&cn(o)))})}function mn(e,t,n,a,i,o,r,s,p,c){var l,d,m,h,g,_,f,y=a&&a.__k||pn,P=y.length;for(n.__k=[],l=0;l<t.length;l++)if((h=n.__k[l]=(h=t[l])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?Me(null,h,null,null,h):Array.isArray(h)?Me(j,{children:h},null,null,null):h.__b>0?Me(h.type,h.props,h.key,null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(m=y[l])===null||m&&h.key==m.key&&h.type===m.type)y[l]=void 0;else for(d=0;d<P;d++){if((m=y[d])&&h.key==m.key&&h.type===m.type){y[d]=void 0;break}m=null}Ct(e,h,m=m||Fe,i,o,r,s,p,c),g=h.__e,(d=h.ref)&&m.ref!=d&&(f||(f=[]),m.ref&&f.push(m.ref,null,h),f.push(d,h.__c||g,h)),g!=null?(_==null&&(_=g),typeof h.type=="function"&&h.__k===m.__k?h.__d=p=dn(h,p,e):p=hn(e,h,m,y,g,p),typeof n.type=="function"&&(n.__d=p)):p&&m.__e==p&&p.parentNode!=e&&(p=ge(m))}for(n.__e=_,l=P;l--;)y[l]!=null&&(typeof n.type=="function"&&y[l].__e!=null&&y[l].__e==n.__d&&(n.__d=ge(a,l+1)),vn(y[l],y[l]));if(f)for(l=0;l<f.length;l++)fn(f[l],f[++l],f[++l])}function dn(e,t,n){for(var a,i=e.__k,o=0;i&&o<i.length;o++)(a=i[o])&&(a.__=e,t=typeof a.type=="function"?dn(a,t,n):hn(n,a,a,i,a.__e,t));return t}function hn(e,t,n,a,i,o){var r,s,p;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),r=null;else{for(s=o,p=0;(s=s.nextSibling)&&p<a.length;p+=2)if(s==i)break e;e.insertBefore(i,o),r=o}return r!==void 0?r:i.nextSibling}function ai(e,t,n,a,i){var o;for(o in n)o==="children"||o==="key"||o in t||Oe(e,o,null,n[o],a);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Oe(e,o,t[o],n[o],a)}function nn(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ni.test(t)?n:n+"px"}function Oe(e,t,n,a,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||nn(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||nn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?a||e.addEventListener(t,o?on:an,o):e.removeEventListener(t,o?on:an,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function an(e){this.l[e.type+!1](C.event?C.event(e):e)}function on(e){this.l[e.type+!0](C.event?C.event(e):e)}function Ct(e,t,n,a,i,o,r,s,p){var c,l,d,m,h,g,_,f,y,P,A,U=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(c=C.__b)&&c(t);try{e:if(typeof U=="function"){if(f=t.props,y=(c=U.contextType)&&a[c.__c],P=c?y?y.props.value:c.__:a,n.__c?_=(l=t.__c=n.__c).__=l.__E:("prototype"in U&&U.prototype.render?t.__c=l=new U(f,P):(t.__c=l=new He(f,P),l.constructor=U,l.render=oi),y&&y.sub(l),l.props=f,l.state||(l.state={}),l.context=P,l.__n=a,d=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),U.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=ne({},l.__s)),ne(l.__s,U.getDerivedStateFromProps(f,l.__s))),m=l.props,h=l.state,d)U.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(U.getDerivedStateFromProps==null&&f!==m&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(f,P),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(f,l.__s,P)===!1||t.__v===n.__v){l.props=f,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(b){b&&(b.__=t)}),l.__h.length&&r.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(f,l.__s,P),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(m,h,g)})}l.context=P,l.props=f,l.state=l.__s,(c=C.__r)&&c(t),l.__d=!1,l.__v=t,l.__P=e,c=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(a=ne(ne({},a),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(g=l.getSnapshotBeforeUpdate(m,h)),A=c!=null&&c.type===j&&c.key==null?c.props.children:c,mn(e,Array.isArray(A)?A:[A],t,n,a,i,o,r,s,p),l.base=t.__e,t.__h=null,l.__h.length&&r.push(l),_&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ii(n.__e,t,n,a,i,o,r,p);(c=C.diffed)&&c(t)}catch(b){t.__v=null,(p||o!=null)&&(t.__e=s,t.__h=!!p,o[o.indexOf(s)]=null),C.__e(b,t,n)}}function gn(e,t){C.__c&&C.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){C.__e(a,n.__v)}})}function ii(e,t,n,a,i,o,r,s){var p,c,l,d=n.props,m=t.props,h=t.type,g=0;if(h==="svg"&&(i=!0),o!=null){for(;g<o.length;g++)if((p=o[g])&&"setAttribute"in p==!!h&&(h?p.localName===h:p.nodeType===3)){e=p,o[g]=null;break}}if(e==null){if(h===null)return document.createTextNode(m);e=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,m.is&&m),o=null,s=!1}if(h===null)d===m||s&&e.data===m||(e.data=m);else{if(o=o&&Ge.call(e.childNodes),c=(d=n.props||Fe).dangerouslySetInnerHTML,l=m.dangerouslySetInnerHTML,!s){if(o!=null)for(d={},g=0;g<e.attributes.length;g++)d[e.attributes[g].name]=e.attributes[g].value;(l||c)&&(l&&(c&&l.__html==c.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(ai(e,m,d,i,s),l)t.__k=[];else if(g=t.props.children,mn(e,Array.isArray(g)?g:[g],t,n,a,i&&h!=="foreignObject",o,r,o?o[0]:n.__k&&ge(n,0),s),o!=null)for(g=o.length;g--;)o[g]!=null&&un(o[g]);s||("value"in m&&(g=m.value)!==void 0&&(g!==e.value||h==="progress"&&!g||h==="option"&&g!==d.value)&&Oe(e,"value",g,d.value,!1),"checked"in m&&(g=m.checked)!==void 0&&g!==e.checked&&Oe(e,"checked",g,d.checked,!1))}return e}function fn(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){C.__e(a,n)}}function vn(e,t,n){var a,i;if(C.unmount&&C.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||fn(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){C.__e(o,t)}a.base=a.__P=null}if(a=e.__k)for(i=0;i<a.length;i++)a[i]&&vn(a[i],t,typeof e.type!="function");n||e.__e==null||un(e.__e),e.__e=e.__d=void 0}function oi(e,t,n){return this.constructor(e,n)}function bn(e,t,n){var a,i,o;C.__&&C.__(e,t),i=(a=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Ct(t,e=(!a&&n||t).__k=_t(j,null,[e]),i||Fe,Fe,t.ownerSVGElement!==void 0,!a&&n?[n]:i?null:t.firstChild?Ge.call(t.childNodes):null,o,!a&&n?n:i?i.__e:t.firstChild,a),gn(o,e)}function Ee(e,t){var n={__c:t="__cC"+ln++,__:e,Consumer:function(a,i){return a.children(i)},Provider:function(a){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(r){this.props.value!==r.value&&i.some(yt)},this.sub=function(r){i.push(r);var s=r.componentWillUnmount;r.componentWillUnmount=function(){i.splice(i.indexOf(r),1),s&&s.call(r)}}),a.children}};return n.Provider.__=n.Consumer.contextType=n}Ge=pn.slice,C={__e:function(e,t,n,a){for(var i,o,r;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),r=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,a||{}),r=i.__d),r)return i.__E=i}catch(s){e=s}throw e}},rn=0,ti=function(e){return e!=null&&e.constructor===void 0},He.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=ne({},this.state),typeof e=="function"&&(e=e(ne({},n),this.props)),e&&ne(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),yt(this))},He.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),yt(this))},He.prototype.render=j,Ae=[],sn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Be.__r=0,ln=0;var fe,O,yn,$e=0,Pn=[],_n=C.__b,Cn=C.__r,wn=C.diffed,xn=C.__c,Sn=C.unmount;function Le(e,t){C.__h&&C.__h(O,e,$e||t),$e=0;var n=O.__H||(O.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ae(e){return $e=1,ri(An,e)}function ri(e,t,n){var a=Le(fe++,2);return a.t=e,a.__c||(a.__=[n?n(t):An(void 0,t),function(i){var o=a.t(a.__[0],i);a.__[0]!==o&&(a.__=[o,a.__[1]],a.__c.setState({}))}],a.__c=O),a.__}function We(e,t){var n=Le(fe++,3);!C.__s&&xt(n.__H,t)&&(n.__=e,n.__H=t,O.__H.__h.push(n))}function Je(e,t){var n=Le(fe++,4);!C.__s&&xt(n.__H,t)&&(n.__=e,n.__H=t,O.__h.push(n))}function qe(e){return $e=5,Q(function(){return{current:e}},[])}function Q(e,t){var n=Le(fe++,7);return xt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ue(e){var t=O.context[e.__c],n=Le(fe++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(O)),t.props.value):e.__}function si(){for(var e;e=Pn.shift();)if(e.__P)try{e.__H.__h.forEach(Ve),e.__H.__h.forEach(wt),e.__H.__h=[]}catch(t){e.__H.__h=[],C.__e(t,e.__v)}}C.__b=function(e){O=null,_n&&_n(e)},C.__r=function(e){Cn&&Cn(e),fe=0;var t=(O=e.__c).__H;t&&(t.__h.forEach(Ve),t.__h.forEach(wt),t.__h=[])},C.diffed=function(e){wn&&wn(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Pn.push(t)!==1&&yn===C.requestAnimationFrame||((yn=C.requestAnimationFrame)||function(n){var a,i=function(){clearTimeout(o),kn&&cancelAnimationFrame(a),setTimeout(n)},o=setTimeout(i,100);kn&&(a=requestAnimationFrame(i))})(si)),O=null},C.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ve),n.__h=n.__h.filter(function(a){return!a.__||wt(a)})}catch(a){t.some(function(i){i.__h&&(i.__h=[])}),t=[],C.__e(a,n.__v)}}),xn&&xn(e,t)},C.unmount=function(e){Sn&&Sn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(a){try{Ve(a)}catch(i){t=i}}),t&&C.__e(t,n.__v))};var kn=typeof requestAnimationFrame=="function";function Ve(e){var t=O,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),O=t}function wt(e){var t=O;e.__c=e.__(),O=t}function xt(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function An(e,t){return typeof t=="function"?t(e):t}var li=.8999999999999999,pi=.5,ui=.49999999999999994;function ci(e){let t=Math.sign(e);e=Math.abs(e);let n=.254829592,a=-.284496736,i=1.421413741,o=-1.453152027,r=1.061405429,p=1/(1+.3275911*e),c=p*(n+p*(a+p*(i+p*(o+p*r))));return t*(1-c*Math.exp(-e*e))}function En({median:e,p10:t},n){if(e<=0)throw new Error("median must be greater than zero");if(t<=0)throw new Error("p10 must be greater than zero");if(t>=e)throw new Error("p10 must be less than the median");if(n<=0)return 1;let a=.9061938024368232,i=Math.max(Number.MIN_VALUE,n/e),o=Math.log(i),r=Math.max(Number.MIN_VALUE,t/e),s=-Math.log(r),p=o*a/s,c=(1-ci(p))/2,l;return n<=t?l=Math.max(.9,Math.min(1,c)):n<=e?l=Math.max(pi,Math.min(li,c)):l=Math.max(0,Math.min(ui,c)),l}var ee="…",di=" ",Ln=.9,hi={PASS:{label:"pass",minScore:Ln},AVERAGE:{label:"average",minScore:.5},FAIL:{label:"fail"},ERROR:{label:"error"}},gi=["com","co","gov","edu","ac","org","go","gob","or","net","in","ne","nic","gouv","web","spb","blog","jus","kiev","mil","wi","qc","ca","bel","on"],I=class e{static get RATINGS(){return hi}static get PASS_THRESHOLD(){return Ln}static get MS_DISPLAY_VALUE(){return`%10d${di}ms`}static getFinalDisplayedUrl(t){if(t.finalDisplayedUrl)return t.finalDisplayedUrl;if(t.finalUrl)return t.finalUrl;throw new Error("Could not determine final displayed URL")}static getMainDocumentUrl(t){return t.mainDocumentUrl||t.finalUrl}static getFullPageScreenshot(t){return t.fullPageScreenshot?t.fullPageScreenshot:t.audits["full-page-screenshot"]?.details}static getEntityFromUrl(t,n){return n&&n.find(i=>i.origins.find(o=>t.startsWith(o)))||e.getPseudoRootDomain(t)}static splitMarkdownCodeSpans(t){let n=[],a=t.split(/`(.*?)`/g);for(let i=0;i<a.length;i++){let o=a[i];if(!o)continue;let r=i%2!==0;n.push({isCode:r,text:o})}return n}static splitMarkdownLink(t){let n=[],a=t.split(/\[([^\]]+?)\]\((https?:\/\/.*?)\)/g);for(;a.length;){let[i,o,r]=a.splice(0,3);i&&n.push({isLink:!1,text:i}),o&&r&&n.push({isLink:!0,text:o,linkHref:r})}return n}static truncate(t,n,a="…"){if(t.length<=n)return t;let o=new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(t)[Symbol.iterator](),r=0;for(let s=0;s<=n-a.length;s++){let p=o.next();if(p.done)return t;r=p.value.index}for(let s=0;s<a.length;s++)if(o.next().done)return t;return t.slice(0,r)+a}static getURLDisplayName(t,n){n=n||{numPathParts:void 0,preserveQuery:void 0,preserveHost:void 0};let a=n.numPathParts!==void 0?n.numPathParts:2,i=n.preserveQuery!==void 0?n.preserveQuery:!0,o=n.preserveHost||!1,r;if(t.protocol==="about:"||t.protocol==="data:")r=t.href;else{r=t.pathname;let p=r.split("/").filter(c=>c.length);a&&p.length>a&&(r=ee+p.slice(-1*a).join("/")),o&&(r=`${t.host}/${r.replace(/^\//,"")}`),i&&(r=`${r}${t.search}`)}let s=64;if(t.protocol!=="data:"&&(r=r.slice(0,200),r=r.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g,`$1${ee}`),r=r.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g,`$1${ee}`),r=r.replace(/(\d{3})\d{6,}/g,`$1${ee}`),r=r.replace(/\u2026+/g,ee),r.length>s&&r.includes("?")&&(r=r.replace(/\?([^=]*)(=)?.*/,`?$1$2${ee}`),r.length>s&&(r=r.replace(/\?.*/,`?${ee}`)))),r.length>s){let p=r.lastIndexOf(".");p>=0?r=r.slice(0,s-1-(r.length-p))+`${ee}${r.slice(p)}`:r=r.slice(0,s-1)+ee}return r}static getChromeExtensionOrigin(t){let n=new URL(t);return n.protocol+"//"+n.host}static parseURL(t){let n=new URL(t);return{file:e.getURLDisplayName(n),hostname:n.hostname,origin:n.protocol==="chrome-extension:"?e.getChromeExtensionOrigin(t):n.origin}}static createOrReturnURL(t){return t instanceof URL?t:new URL(t)}static getPseudoTld(t){let n=t.split(".").slice(-2);return gi.includes(n[0])?`.${n.join(".")}`:`.${n[n.length-1]}`}static getPseudoRootDomain(t){let n=e.createOrReturnURL(t).hostname,i=e.getPseudoTld(n).split(".");return n.split(".").slice(-i.length).join(".")}static filterRelevantLines(t,n,a){if(n.length===0)return t.slice(0,a*2+1);let i=3,o=new Set;return n=n.sort((r,s)=>(r.lineNumber||0)-(s.lineNumber||0)),n.forEach(({lineNumber:r})=>{let s=r-a,p=r+a;for(;s<1;)s++,p++;o.has(s-i-1)&&(s-=i);for(let c=s;c<=p;c++){let l=c;o.add(l)}}),t.filter(r=>o.has(r.lineNumber))}static computeLogNormalScore(t,n){let a=En(t,n);return a>.9&&(a+=.05*(a-.9)),Math.floor(a*100)/100}};var Un=0,v=class e{static i18n=null;static strings={};static reportJson=null;static apply(t){e.strings={...Ze,...t.providedStrings},e.i18n=t.i18n,e.reportJson=t.reportJson}static getUniqueSuffix(){return Un++}static resetUniqueSuffix(){Un=0}};var Tn="data:image/jpeg;base64,";function In(e){e.configSettings.locale||(e.configSettings.locale="en"),e.configSettings.formFactor||(e.configSettings.formFactor=e.configSettings.emulatedFormFactor),e.finalDisplayedUrl=I.getFinalDisplayedUrl(e),e.mainDocumentUrl=I.getMainDocumentUrl(e);for(let a of Object.values(e.audits))if((a.scoreDisplayMode==="not_applicable"||a.scoreDisplayMode==="not-applicable")&&(a.scoreDisplayMode="notApplicable"),a.scoreDisplayMode==="informative"&&(a.score=1),a.details){if((a.details.type===void 0||a.details.type==="diagnostic")&&(a.details.type="debugdata"),a.details.type==="filmstrip")for(let i of a.details.items)i.data.startsWith(Tn)||(i.data=Tn+i.data);if(a.details.type==="table")for(let i of a.details.headings){let{itemType:o,text:r}=i;o!==void 0&&(i.valueType=o,delete i.itemType),r!==void 0&&(i.label=r,delete i.text);let s=i.subItemsHeading?.itemType;i.subItemsHeading&&s!==void 0&&(i.subItemsHeading.valueType=s,delete i.subItemsHeading.itemType)}if(a.id==="third-party-summary"&&(a.details.type==="opportunity"||a.details.type==="table")){let{headings:i,items:o}=a.details;if(i[0].valueType==="link"){i[0].valueType="text";for(let r of o)typeof r.entity=="object"&&r.entity.type==="link"&&(r.entity=r.entity.text);a.details.isEntityGrouped=!0}}}let[t]=e.lighthouseVersion.split(".").map(Number),n=e.categories.performance;if(n){if(t<9){e.categoryGroups||(e.categoryGroups={}),e.categoryGroups.hidden={title:""};for(let a of n.auditRefs)a.group?a.group==="load-opportunities"&&(a.group="diagnostics"):a.group="hidden"}else if(t<12)for(let a of n.auditRefs)a.group||(a.group="diagnostics")}if(t<12&&n){let a=new Map;for(let i of n.auditRefs){let o=i.relevantAudits;if(!(!o||!i.acronym))for(let r of o){let s=a.get(r)||[];s.push(i.acronym),a.set(r,s)}}for(let[i,o]of a){if(!o.length)continue;let r=e.audits[i];if(r&&!r.metricSavings){r.metricSavings={};for(let s of o)r.metricSavings[s]=0}}}if(e.environment||(e.environment={benchmarkIndex:0,networkUserAgent:e.userAgent,hostUserAgent:e.userAgent}),e.configSettings.screenEmulation||(e.configSettings.screenEmulation={width:-1,height:-1,deviceScaleFactor:-1,mobile:/mobile/i.test(e.environment.hostUserAgent),disabled:!1}),e.i18n||(e.i18n={}),e.audits["full-page-screenshot"]){let a=e.audits["full-page-screenshot"].details;a?e.fullPageScreenshot={screenshot:a.screenshot,nodes:a.nodes}:e.fullPageScreenshot=null,delete e.audits["full-page-screenshot"]}}var te=I.RATINGS,E=class e{static prepareReportResult(t){let n=JSON.parse(JSON.stringify(t));In(n);for(let i of Object.values(n.audits))i.details&&(i.details.type==="opportunity"||i.details.type==="table")&&!i.details.isEntityGrouped&&n.entities&&e.classifyEntities(n.entities,i.details);if(typeof n.categories!="object")throw new Error("No categories provided.");let a=new Map;for(let i of Object.values(n.categories))i.auditRefs.forEach(o=>{o.acronym&&a.set(o.acronym,o)}),i.auditRefs.forEach(o=>{let r=n.audits[o.id];o.result=r;let s=Object.keys(o.result.metricSavings||{});if(s.length){o.relevantMetrics=[];for(let p of s){let c=a.get(p);c&&o.relevantMetrics.push(c)}}n.stackPacks&&n.stackPacks.forEach(p=>{p.descriptions[o.id]&&(o.stackPacks=o.stackPacks||[],o.stackPacks.push({title:p.title,iconDataURL:p.iconDataURL,description:p.descriptions[o.id]}))})});return n}static getUrlLocatorFn(t){let n=t.find(i=>i.valueType==="url")?.key;if(n&&typeof n=="string")return i=>{let o=i[n];if(typeof o=="string")return o};let a=t.find(i=>i.valueType==="source-location")?.key;if(a)return i=>{let o=i[a];if(typeof o=="object"&&o.type==="source-location")return o.url}}static classifyEntities(t,n){let{items:a,headings:i}=n;if(!a.length||a.some(r=>r.entity))return;let o=e.getUrlLocatorFn(i);if(o)for(let r of a){let s=o(r);if(!s)continue;let p="";try{p=I.parseURL(s).origin}catch{}if(!p)continue;let c=t.find(l=>l.origins.includes(p));c&&(r.entity=c.name)}}static getTableItemSortComparator(t){return(n,a)=>{for(let i of t){let o=n[i],r=a[i];if((typeof o!=typeof r||!["number","string"].includes(typeof o))&&console.warn(`Warning: Attempting to sort unsupported value type: ${i}.`),typeof o=="number"&&typeof r=="number"&&o!==r)return r-o;if(typeof o=="string"&&typeof r=="string"&&o!==r)return o.localeCompare(r)}return 0}}static getEmulationDescriptions(t){let n,a,i,o=t.throttling,r=v.i18n,s=v.strings;switch(t.throttlingMethod){case"provided":i=a=n=s.throttlingProvided;break;case"devtools":{let{cpuSlowdownMultiplier:m,requestLatencyMs:h}=o;n=`${r.formatNumber(m)}x slowdown (DevTools)`,a=`${r.formatMilliseconds(h)} HTTP RTT, ${r.formatKbps(o.downloadThroughputKbps)} down, ${r.formatKbps(o.uploadThroughputKbps)} up (DevTools)`,i=h===150*3.75&&o.downloadThroughputKbps===1.6*1024*.9&&o.uploadThroughputKbps===750*.9?s.runtimeSlow4g:s.runtimeCustom;break}case"simulate":{let{cpuSlowdownMultiplier:m,rttMs:h,throughputKbps:g}=o;n=`${r.formatNumber(m)}x slowdown (Simulated)`,a=`${r.formatMilliseconds(h)} TCP RTT, ${r.formatKbps(g)} throughput (Simulated)`,i=h===150&&g===1.6*1024?s.runtimeSlow4g:s.runtimeCustom;break}default:i=n=a=s.runtimeUnknown}let p=t.channel==="devtools"?!1:t.screenEmulation.disabled,c=t.channel==="devtools"?t.formFactor==="mobile":t.screenEmulation.mobile,l=s.runtimeMobileEmulation;p?l=s.runtimeNoEmulation:c||(l=s.runtimeDesktopEmulation);let d=p?void 0:`${t.screenEmulation.width}x${t.screenEmulation.height}, DPR ${t.screenEmulation.deviceScaleFactor}`;return{deviceEmulation:l,screenEmulation:d,cpuThrottling:n,networkThrottling:a,summary:i}}static showAsPassed(t){switch(t.scoreDisplayMode){case"manual":case"notApplicable":return!0;case"error":case"informative":return!1;case"numeric":case"binary":default:return Number(t.score)>=te.PASS.minScore}}static calculateRating(t,n){if(n==="manual"||n==="notApplicable")return te.PASS.label;if(n==="error")return te.ERROR.label;if(t===null)return te.FAIL.label;let a=te.FAIL.label;return t>=te.PASS.minScore?a=te.PASS.label:t>=te.AVERAGE.minScore&&(a=te.AVERAGE.label),a}static calculateCategoryFraction(t){let n=0,a=0,i=0,o=0;for(let r of t.auditRefs){let s=e.showAsPassed(r.result);if(!(r.group==="hidden"||r.result.scoreDisplayMode==="manual"||r.result.scoreDisplayMode==="notApplicable")){if(r.result.scoreDisplayMode==="informative"){s||++i;continue}++n,o+=r.weight,s&&a++}}return{numPassed:a,numPassableAudits:n,numInformative:i,totalWeight:o}}static isPluginCategory(t){return t.startsWith("lighthouse-plugin-")}static shouldDisplayAsFraction(t){return t==="timespan"||t==="snapshot"}},Ze={varianceDisclaimer:"Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",calculatorLink:"See calculator.",showRelevantAudits:"Show audits relevant to:",opportunityResourceColumnLabel:"Opportunity",opportunitySavingsColumnLabel:"Estimated Savings",errorMissingAuditInfo:"Report error: no audit information",errorLabel:"Error!",warningHeader:"Warnings: ",warningAuditsGroupTitle:"Passed audits but with warnings",passedAuditsGroupTitle:"Passed audits",notApplicableAuditsGroupTitle:"Not applicable",manualAuditsGroupTitle:"Additional items to manually check",toplevelWarningsMessage:"There were issues affecting this run of Lighthouse:",crcInitialNavigation:"Initial Navigation",crcLongestDurationLabel:"Maximum critical path latency:",snippetExpandButtonLabel:"Expand snippet",snippetCollapseButtonLabel:"Collapse snippet",lsPerformanceCategoryDescription:"[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",labDataTitle:"Lab Data",thirdPartyResourcesLabel:"Show 3rd-party resources",viewTreemapLabel:"View Treemap",viewTraceLabel:"View Trace",dropdownPrintSummary:"Print Summary",dropdownPrintExpanded:"Print Expanded",dropdownCopyJSON:"Copy JSON",dropdownSaveHTML:"Save as HTML",dropdownSaveJSON:"Save as JSON",dropdownViewer:"Open in Viewer",dropdownSaveGist:"Save as Gist",dropdownDarkTheme:"Toggle Dark Theme",dropdownViewUnthrottledTrace:"View Unthrottled Trace",runtimeSettingsDevice:"Device",runtimeSettingsNetworkThrottling:"Network throttling",runtimeSettingsCPUThrottling:"CPU throttling",runtimeSettingsUANetwork:"User agent (network)",runtimeSettingsBenchmark:"Unthrottled CPU/Memory Power",runtimeSettingsAxeVersion:"Axe version",runtimeSettingsScreenEmulation:"Screen emulation",footerIssue:"File an issue",runtimeNoEmulation:"No emulation",runtimeMobileEmulation:"Emulated Moto G Power",runtimeDesktopEmulation:"Emulated Desktop",runtimeUnknown:"Unknown",runtimeSingleLoad:"Single page session",runtimeAnalysisWindow:"Initial page load",runtimeAnalysisWindowTimespan:"User interactions timespan",runtimeAnalysisWindowSnapshot:"Point-in-time snapshot",runtimeSingleLoadTooltip:"This data is taken from a single page session, as opposed to field data summarizing many sessions.",throttlingProvided:"Provided by environment",show:"Show",hide:"Hide",expandView:"Expand view",collapseView:"Collapse view",runtimeSlow4g:"Slow 4G throttling",runtimeCustom:"Custom throttling",firstPartyChipLabel:"1st party",openInANewTabTooltip:"Open in a new tab",unattributable:"Unattributable"};var fi=0;function u(e,t,n,a,i){var o,r,s={};for(r in t)r=="ref"?o=t[r]:s[r]=t[r];var p={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--fi,__source:i,__self:a};if(typeof e=="function"&&(o=e.defaultProps))for(r in o)s[r]===void 0&&(s[r]=o[r]);return C.vnode&&C.vnode(p),p}var Rn=()=>u("svg",{width:"14",viewBox:"0 0 18 16",fill:"none",role:"img",children:u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 2C0 1.17 0.67 0.5 1.5 0.5C2.33 0.5 3 1.17 3 2C3 2.83 2.33 3.5 1.5 3.5C0.67 3.5 0 2.83 0 2ZM0 8C0 7.17 0.67 6.5 1.5 6.5C2.33 6.5 3 7.17 3 8C3 8.83 2.33 9.5 1.5 9.5C0.67 9.5 0 8.83 0 8ZM1.5 12.5C0.67 12.5 0 13.18 0 14C0 14.82 0.68 15.5 1.5 15.5C2.32 15.5 3 14.82 3 14C3 13.18 2.33 12.5 1.5 12.5ZM18 15H5V13H18V15ZM5 9H18V7H5V9ZM5 3V1H18V3H5Z",fill:"currentColor"})}),Ke=()=>u("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",role:"img","aria-label":"Icon representing a navigation report",children:u("circle",{cx:"8",cy:"8",r:"7",fill:"none",stroke:"currentColor","stroke-width":"2"})}),Xe=()=>u("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",role:"img","aria-label":"Icon representing a timespan report",children:[u("circle",{cx:"8",cy:"8",r:"7",fill:"none",stroke:"currentColor","stroke-width":"2"}),u("path",{d:"m 8,4 v 4 l 4,1.9999998",stroke:"currentColor","stroke-width":"1.5"})]}),Ye=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",role:"img","aria-label":"Icon representing a snapshot report",children:u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M 12.2038,12.2812 C 11.1212,13.3443 9.6372,14 8,14 7.81038,14 7.62281,13.9912 7.43768,13.974 L 10.3094,9 Z M 12.8925,11.4741 10.0207,6.5 H 13.811 C 13.9344,6.97943 14,7.48205 14,8 c 0,1.2947 -0.4101,2.4937 -1.1075,3.4741 z M 13.456,5.5 H 7.71135 L 9.6065,2.21749 C 11.3203,2.69259 12.7258,3.90911 13.456,5.5 Z M 8.5624,2.02601 C 8.3772,2.0088 8.1896,2 8,2 6.36282,2 4.8788,2.65572 3.79622,3.71885 L 5.69061,7.00002 Z M 3.10749,4.52594 C 2.4101,5.5063 2,6.70526 2,8 2,8.5179 2.06563,9.0206 2.18903,9.5 H 5.97927 Z M 2.54404,10.5 c 0.73017,1.5909 2.1357,2.8074 3.84949,3.2825 L 8.2887,10.5 Z M 16,8 c 0,4.4183 -3.5817,8 -8,8 C 3.58172,16 0,12.4183 0,8 0,3.58172 3.58172,0 8,0 c 4.4183,0 8,3.58172 8,8 z",fill:"currentColor"})}),Nn=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",role:"img","aria-label":"Icon representing a close action",children:[u("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]}),Dn=()=>u("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",role:"img",children:u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.33317 2.00008H13.9998V0.666748H3.33317C2.59984 0.666748 1.99984 1.26675 1.99984 2.00008V9.33341H0.666504V11.3334H7.99984V9.33341H3.33317V2.00008ZM13.9998 3.33341H9.99984C9.63317 3.33341 9.33317 3.63341 9.33317 4.00008V10.6667C9.33317 11.0334 9.63317 11.3334 9.99984 11.3334H13.9998C14.3665 11.3334 14.6665 11.0334 14.6665 10.6667V4.00008C14.6665 3.63341 14.3665 3.33341 13.9998 3.33341ZM10.6665 9.33341H13.3332V4.66675H10.6665V9.33341Z",fill:"currentColor"})}),zn=()=>u("svg",{width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",role:"img",children:u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.666687 3.26663L2.00002 4.59997C3.92002 2.67997 6.52669 1.87997 9.02002 2.18663L9.81335 0.399966C6.59335 -0.173367 3.16002 0.779966 0.666687 3.26663ZM10.6 0.599966C10.4867 0.599966 10.3867 0.659966 10.3267 0.753299L10.28 0.853299L6.82669 8.61996C6.72002 8.8133 6.65335 9.02663 6.65335 9.25996C6.65335 9.99996 7.25335 10.6 7.99335 10.6C8.63335 10.6 9.17335 10.1466 9.30002 9.53996L9.30669 9.51997L10.9334 0.933299C10.9334 0.746633 10.7867 0.599966 10.6 0.599966ZM15.3334 3.26663L14 4.59997C13.1867 3.78663 12.2534 3.17997 11.2534 2.76663L11.6067 0.886633C12.9667 1.38663 14.24 2.1733 15.3334 3.26663ZM11.3334 7.26663L12.6667 5.9333C12.1334 5.39997 11.5334 4.98663 10.8934 4.6733L10.5267 6.61997C10.8067 6.79997 11.08 7.0133 11.3334 7.26663ZM4.66669 7.26663L3.33335 5.9333C4.67335 4.5933 6.45335 3.95997 8.20669 4.0133L7.35335 5.9333C6.37335 6.0733 5.42002 6.5133 4.66669 7.26663Z",fill:"currentColor"})}),jn=()=>u("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",role:"img",children:u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.5 7.16667V5.5H13.8333V3.83333C13.8333 2.91667 13.0833 2.16667 12.1667 2.16667H10.5V0.5H8.83333V2.16667H7.16667V0.5H5.5V2.16667H3.83333C2.91667 2.16667 2.16667 2.91667 2.16667 3.83333V5.5H0.5V7.16667H2.16667V8.83333H0.5V10.5H2.16667V12.1667C2.16667 13.0833 2.91667 13.8333 3.83333 13.8333H5.5V15.5H7.16667V13.8333H8.83333V15.5H10.5V13.8333H12.1667C13.0833 13.8333 13.8333 13.0833 13.8333 12.1667V10.5H15.5V8.83333H13.8333V7.16667H15.5ZM10.5 5.5H5.5V10.5H10.5V5.5ZM3.83333 12.1667H12.1667V3.83333H3.83333V12.1667Z",fill:"currentColor"})}),Mn=()=>u("svg",{viewBox:"0 0 18 12",width:"18",height:"12",role:"img",children:[u("rect",{width:"18",height:"2",fill:"currentColor"}),u("rect",{y:"5",width:"18",height:"2",fill:"currentColor"}),u("rect",{y:"10",width:"18",height:"2",fill:"currentColor"})]}),Hn=()=>u("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM7.66658 11H6.33325V9.66667H7.66658V11ZM4.33325 5.66667C4.33325 4.19333 5.52659 3 6.99992 3C8.47325 3 9.66658 4.19333 9.66658 5.66667C9.66658 6.52194 9.1399 6.98221 8.62709 7.43036C8.1406 7.85551 7.66658 8.26975 7.66658 9H6.33325C6.33325 7.78582 6.96133 7.30439 7.51355 6.88112C7.94674 6.54907 8.33325 6.25281 8.33325 5.66667C8.33325 4.93333 7.73325 4.33333 6.99992 4.33333C6.26658 4.33333 5.66658 4.93333 5.66658 5.66667H4.33325Z",fill:"currentColor"})});var St=Ee(void 0),kt=Ee({});function Fn(e){return new URLSearchParams(location.hash.replace("#","?")).get(e)}function ve(...e){let t=[];for(let n of e){if(!n)continue;if(typeof n=="string"){t.push(n);continue}let a=Object.entries(n).filter(([i,o])=>o).map(([i])=>i);t.push(...a)}return t.join(" ")}function Bn(e){let{width:t,height:n}=e.configSettings.screenEmulation;return{width:t,height:n}}function On(e){let t=e.audits["screenshot-thumbnails"];return t&&t.details&&t.details.type==="filmstrip"&&t.details.items||void 0}function Qe(e,t){switch(e){case"navigation":return t.navigationDescription;case"timespan":return t.timespanDescription;case"snapshot":return t.snapshotDescription}}function $(){let e=Ue(St);if(!e)throw Error("useFlowResult must be called in the FlowResultContext");return e}function vi(...e){let[t,n]=ae(e.map(Fn));return We(()=>{function a(){let i=e.map(Fn);i.every((o,r)=>o===t[r])||n(i)}return window.addEventListener("hashchange",a),()=>window.removeEventListener("hashchange",a)},[t]),t}function be(){let e=$(),[t,n]=vi("index","anchor");return Q(()=>{if(!t)return null;let a=Number(t);if(!Number.isFinite(a))return console.warn(`Invalid hash index: ${t}`),null;let i=e.steps[a];return i?{currentLhr:i.lhr,index:a,anchor:n}:(console.warn(`No flow step at index ${a}`),null)},[t,e,n])}function ie(e,t){let n=qe(null);return Je(()=>{if(!n.current)return;let a=e();return n.current.append(a),()=>{n.current?.contains(a)&&n.current.removeChild(a)}},t),n}function Gn(){return Ue(kt)}var bi=500,Z=()=>u("div",{className:"Separator",role:"separator"}),Pt=({mode:e})=>u(j,{children:[e==="navigation"&&u(Ke,{}),e==="timespan"&&u(Xe,{}),e==="snapshot"&&u(Ye,{})]}),oe=({mode:e})=>u("div",{className:"FlowSegment",children:[u("div",{className:"FlowSegment__top-line"}),e&&u(Pt,{mode:e}),u("div",{className:"FlowSegment__bottom-line"})]}),yi=({frames:e,width:t,height:n})=>{let[a,i]=ae(0),o=a%e.length;return We(()=>{let r=setInterval(()=>i(s=>(s+1)%e.length),bi);return()=>clearInterval(r)},[e.length]),u("img",{className:"FlowStepThumbnail","data-testid":"FlowStepAnimatedThumbnail",src:e[o].data,style:{width:t,height:n},alt:"Animated screenshots of a page tested by Lighthouse"})},et=({lhr:e,width:t,height:n})=>{let a=On(e),i=Bn(e);if(t&&n===void 0?n=i.height*t/i.width:n&&t===void 0&&(t=i.width*n/i.height),!t||!n)return console.warn(new Error("FlowStepThumbnail requested without any dimensions").stack),u(j,{});let o;if(a?.length){if(o=a[a.length-1].data,e.gatherMode==="timespan")return u(yi,{frames:a,width:t,height:n})}else o=I.getFullPageScreenshot(e)?.screenshot.data;return u(j,{children:o&&u("img",{className:"FlowStepThumbnail",src:o,style:{width:t,height:n},alt:"Screenshot of a page tested by Lighthouse"})})};var At=function(e,t){return At=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},At(e,t)};function Te(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");At(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var X=function(){return X=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},X.apply(this,arguments)};function Vn(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n}function tt(e,t,n){if(n||arguments.length===2)for(var a=0,i=t.length,o;a<i;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))}var ye=function(){return ye=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ye.apply(this,arguments)};var x;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(x||(x={}));var T;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(T||(T={}));var pe;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(pe||(pe={}));function Et(e){return e.type===T.literal}function $n(e){return e.type===T.argument}function nt(e){return e.type===T.number}function at(e){return e.type===T.date}function it(e){return e.type===T.time}function ot(e){return e.type===T.select}function rt(e){return e.type===T.plural}function Wn(e){return e.type===T.pound}function st(e){return e.type===T.tag}function lt(e){return!!(e&&typeof e=="object"&&e.type===pe.number)}function Ie(e){return!!(e&&typeof e=="object"&&e.type===pe.dateTime)}var Lt=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;var _i=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Jn(e){var t={};return e.replace(_i,function(n){var a=n.length;switch(n[0]){case"G":t.era=a===4?"long":a===5?"narrow":"short";break;case"y":t.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=a===4?"short":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][a-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][a-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][a-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][a-1];break;case"s":t.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var R=function(){return R=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},R.apply(this,arguments)};var qn=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Yn(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(qn).filter(function(m){return m.length>0}),n=[],a=0,i=t;a<i.length;a++){var o=i[a],r=o.split("/");if(r.length===0)throw new Error("Invalid number skeleton");for(var s=r[0],p=r.slice(1),c=0,l=p;c<l.length;c++){var d=l[c];if(d.length===0)throw new Error("Invalid number skeleton")}n.push({stem:s,options:p})}return n}function Ci(e){return e.replace(/^(.*?)-/,"")}var Zn=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Qn=/^(@+)?(\+|#+)?[rs]?$/g,wi=/(\*)(0+)|(#+)(0+)|(0+)/g,ea=/^(0+)$/;function Kn(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(Qn,function(n,a,i){return typeof i!="string"?(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length):i==="+"?t.minimumSignificantDigits=a.length:a[0]==="#"?t.maximumSignificantDigits=a.length:(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length+(typeof i=="string"?i.length:0)),""}),t}function ta(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function xi(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var n=e.slice(0,2);if(n==="+!"?(t.signDisplay="always",e=e.slice(2)):n==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!ea.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Xn(e){var t={},n=ta(e);return n||t}function na(e){for(var t={},n=0,a=e;n<a.length;n++){var i=a[n];switch(i.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=i.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Ci(i.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=R(R(R({},t),{notation:"scientific"}),i.options.reduce(function(p,c){return R(R({},p),Xn(c))},{}));continue;case"engineering":t=R(R(R({},t),{notation:"engineering"}),i.options.reduce(function(p,c){return R(R({},p),Xn(c))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(i.options[0]);continue;case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");i.options[0].replace(wi,function(p,c,l,d,m,h){if(c)t.minimumIntegerDigits=l.length;else{if(d&&m)throw new Error("We currently do not support maximum integer digits");if(h)throw new Error("We currently do not support exact integer digits")}return""});continue}if(ea.test(i.stem)){t.minimumIntegerDigits=i.stem.length;continue}if(Zn.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");i.stem.replace(Zn,function(p,c,l,d,m,h){return l==="*"?t.minimumFractionDigits=c.length:d&&d[0]==="#"?t.maximumFractionDigits=d.length:m&&h?(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length+h.length):(t.minimumFractionDigits=c.length,t.maximumFractionDigits=c.length),""});var o=i.options[0];o==="w"?t=R(R({},t),{trailingZeroDisplay:"stripIfInteger"}):o&&(t=R(R({},t),Kn(o)));continue}if(Qn.test(i.stem)){t=R(R({},t),Kn(i.stem));continue}var r=ta(i.stem);r&&(t=R(R({},t),r));var s=xi(i.stem);s&&(t=R(R({},t),s))}return t}var Re={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","h","K"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TL:["H","hB","hb","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function aa(e,t){for(var n="",a=0;a<e.length;a++){var i=e.charAt(a);if(i==="j"){for(var o=0;a+1<e.length&&e.charAt(a+1)===i;)o++,a++;var r=1+(o&1),s=o<2?1:3+(o>>1),p="a",c=Si(t);for((c=="H"||c=="k")&&(s=0);s-- >0;)n+=p;for(;r-- >0;)n=c+n}else i==="J"?n+="H":n+=i}return n}function Si(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=e.language,a;n!=="root"&&(a=e.maximize().region);var i=Re[a||""]||Re[n||""]||Re["".concat(n,"-001")]||Re["001"];return i[0]}var Ut,ki=new RegExp("^".concat(Lt.source,"*")),Pi=new RegExp("".concat(Lt.source,"*$"));function k(e,t){return{start:e,end:t}}var Ai=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ei=!!String.fromCodePoint,Li=!!Object.fromEntries,Ui=!!String.prototype.codePointAt,Ti=!!String.prototype.trimStart,Ii=!!String.prototype.trimEnd,Ri=!!Number.isSafeInteger,Ni=Ri?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},It=!0;try{ia=la("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),It=((Ut=ia.exec("a"))===null||Ut===void 0?void 0:Ut[0])==="a"}catch{It=!1}var ia,oa=Ai?function(t,n,a){return t.startsWith(n,a)}:function(t,n,a){return t.slice(a,a+n.length)===n},Rt=Ei?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var a="",i=t.length,o=0,r;i>o;){if(r=t[o++],r>1114111)throw RangeError(r+" is not a valid code point");a+=r<65536?String.fromCharCode(r):String.fromCharCode(((r-=65536)>>10)+55296,r%1024+56320)}return a},ra=Li?Object.fromEntries:function(t){for(var n={},a=0,i=t;a<i.length;a++){var o=i[a],r=o[0],s=o[1];n[r]=s}return n},sa=Ui?function(t,n){return t.codePointAt(n)}:function(t,n){var a=t.length;if(!(n<0||n>=a)){var i=t.charCodeAt(n),o;return i<55296||i>56319||n+1===a||(o=t.charCodeAt(n+1))<56320||o>57343?i:(i-55296<<10)+(o-56320)+65536}},Di=Ti?function(t){return t.trimStart()}:function(t){return t.replace(ki,"")},zi=Ii?function(t){return t.trimEnd()}:function(t){return t.replace(Pi,"")};function la(e,t){return new RegExp(e,t)}var Nt;It?(Tt=la("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Nt=function(t,n){var a;Tt.lastIndex=n;var i=Tt.exec(t);return(a=i[1])!==null&&a!==void 0?a:""}):Nt=function(t,n){for(var a=[];;){var i=sa(t,n);if(i===void 0||ua(i)||Hi(i))break;a.push(i),n+=i>=65536?2:1}return Rt.apply(void 0,a)};var Tt,pa=function(){function e(t,n){n===void 0&&(n={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,n,a){for(var i=[];!this.isEOF();){var o=this.char();if(o===123){var r=this.parseArgument(t,a);if(r.err)return r;i.push(r.val)}else{if(o===125&&t>0)break;if(o===35&&(n==="plural"||n==="selectordinal")){var s=this.clonePosition();this.bump(),i.push({type:T.pound,location:k(s,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(x.UNMATCHED_CLOSING_TAG,k(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Dt(this.peek()||0)){var r=this.parseTag(t,n);if(r.err)return r;i.push(r.val)}else{var r=this.parseLiteral(t,n);if(r.err)return r;i.push(r.val)}}}return{val:i,err:null}},e.prototype.parseTag=function(t,n){var a=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:T.literal,value:"<".concat(i,"/>"),location:k(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(t+1,n,!0);if(o.err)return o;var r=o.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Dt(this.char()))return this.error(x.INVALID_TAG,k(s,this.clonePosition()));var p=this.clonePosition(),c=this.parseTagName();return i!==c?this.error(x.UNMATCHED_CLOSING_TAG,k(p,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:T.tag,value:i,children:r,location:k(a,this.clonePosition())},err:null}:this.error(x.INVALID_TAG,k(s,this.clonePosition())))}else return this.error(x.UNCLOSED_TAG,k(a,this.clonePosition()))}else return this.error(x.INVALID_TAG,k(a,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&Mi(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,n){for(var a=this.clonePosition(),i="";;){var o=this.tryParseQuote(n);if(o){i+=o;continue}var r=this.tryParseUnquoted(t,n);if(r){i+=r;continue}var s=this.tryParseLeftAngleBracket();if(s){i+=s;continue}break}var p=k(a,this.clonePosition());return{val:{type:T.literal,value:i,location:p},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!ji(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(a);this.bump()}return Rt.apply(void 0,n)},e.prototype.tryParseUnquoted=function(t,n){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(n==="plural"||n==="selectordinal")||a===125&&t>0?null:(this.bump(),Rt(a))},e.prototype.parseArgument=function(t,n){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,k(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(x.EMPTY_ARGUMENT,k(a,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(x.MALFORMED_ARGUMENT,k(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,k(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:T.argument,value:i,location:k(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,k(a,this.clonePosition())):this.parseArgumentOptions(t,n,i,a);default:return this.error(x.MALFORMED_ARGUMENT,k(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),n=this.offset(),a=Nt(this.message,n),i=n+a.length;this.bumpTo(i);var o=this.clonePosition(),r=k(t,o);return{value:a,location:r}},e.prototype.parseArgumentOptions=function(t,n,a,i){var o,r=this.clonePosition(),s=this.parseIdentifierIfPossible().value,p=this.clonePosition();switch(s){case"":return this.error(x.EXPECT_ARGUMENT_TYPE,k(r,p));case"number":case"date":case"time":{this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var l=this.clonePosition(),d=this.parseSimpleArgStyleIfPossible();if(d.err)return d;var m=zi(d.val);if(m.length===0)return this.error(x.EXPECT_ARGUMENT_STYLE,k(this.clonePosition(),this.clonePosition()));var h=k(l,this.clonePosition());c={style:m,styleLocation:h}}var g=this.tryParseArgumentClose(i);if(g.err)return g;var _=k(i,this.clonePosition());if(c&&oa(c?.style,"::",0)){var f=Di(c.style.slice(2));if(s==="number"){var d=this.parseNumberSkeletonFromString(f,c.styleLocation);return d.err?d:{val:{type:T.number,value:a,location:_,style:d.val},err:null}}else{if(f.length===0)return this.error(x.EXPECT_DATE_TIME_SKELETON,_);var y=f;this.locale&&(y=aa(f,this.locale));var m={type:pe.dateTime,pattern:y,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?Jn(y):{}},P=s==="date"?T.date:T.time;return{val:{type:P,value:a,location:_,style:m},err:null}}}return{val:{type:s==="number"?T.number:s==="date"?T.date:T.time,value:a,location:_,style:(o=c?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var A=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(x.EXPECT_SELECT_ARGUMENT_OPTIONS,k(A,ye({},A)));this.bumpSpace();var U=this.parseIdentifierIfPossible(),b=0;if(s!=="select"&&U.value==="offset"){if(!this.bumpIf(":"))return this.error(x.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,k(this.clonePosition(),this.clonePosition()));this.bumpSpace();var d=this.tryParseDecimalInteger(x.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,x.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(d.err)return d;this.bumpSpace(),U=this.parseIdentifierIfPossible(),b=d.val}var w=this.tryParsePluralOrSelectOptions(t,s,n,U);if(w.err)return w;var g=this.tryParseArgumentClose(i);if(g.err)return g;var S=k(i,this.clonePosition());return s==="select"?{val:{type:T.select,value:a,options:ra(w.val),location:S},err:null}:{val:{type:T.plural,value:a,options:ra(w.val),offset:b,pluralType:s==="plural"?"cardinal":"ordinal",location:S},err:null}}default:return this.error(x.INVALID_ARGUMENT_TYPE,k(r,p))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,k(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,n=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(x.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,k(i,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,n){var a=[];try{a=Yn(t)}catch{return this.error(x.INVALID_NUMBER_SKELETON,n)}return{val:{type:pe.number,tokens:a,location:n,parsedOptions:this.shouldParseSkeletons?na(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,n,a,i){for(var o,r=!1,s=[],p=new Set,c=i.value,l=i.location;;){if(c.length===0){var d=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(x.EXPECT_PLURAL_ARGUMENT_SELECTOR,x.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;l=k(d,this.clonePosition()),c=this.message.slice(d.offset,this.offset())}else break}if(p.has(c))return this.error(n==="select"?x.DUPLICATE_SELECT_ARGUMENT_SELECTOR:x.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l);c==="other"&&(r=!0),this.bumpSpace();var h=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?x.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:x.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,k(this.clonePosition(),this.clonePosition()));var g=this.parseMessage(t+1,n,a);if(g.err)return g;var _=this.tryParseArgumentClose(h);if(_.err)return _;s.push([c,{value:g.val,location:k(h,this.clonePosition())}]),p.add(c),this.bumpSpace(),o=this.parseIdentifierIfPossible(),c=o.value,l=o.location}return s.length===0?this.error(n==="select"?x.EXPECT_SELECT_ARGUMENT_SELECTOR:x.EXPECT_PLURAL_ARGUMENT_SELECTOR,k(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!r?this.error(x.MISSING_OTHER_CLAUSE,k(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(t,n){var a=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var o=!1,r=0;!this.isEOF();){var s=this.char();if(s>=48&&s<=57)o=!0,r=r*10+(s-48),this.bump();else break}var p=k(i,this.clonePosition());return o?(r*=a,Ni(r)?{val:r,err:null}:this.error(n,p)):this.error(t,p)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var n=sa(this.message,t);if(n===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return n},e.prototype.error=function(t,n){return{val:null,err:{kind:t,message:this.message,location:n}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(oa(this.message,t,this.offset())){for(var n=0;n<t.length;n++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var n=this.offset(),a=this.message.indexOf(t,n);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var n=this.offset();if(n===t)break;if(n>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ua(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),n=this.offset(),a=this.message.charCodeAt(n+(t>=65536?2:1));return a??null},e}();function Dt(e){return e>=97&&e<=122||e>=65&&e<=90}function ji(e){return Dt(e)||e===47}function Mi(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function ua(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Hi(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function zt(e){e.forEach(function(t){if(delete t.location,ot(t)||rt(t))for(var n in t.options)delete t.options[n].location,zt(t.options[n].value);else nt(t)&&lt(t.style)||(at(t)||it(t))&&Ie(t.style)?delete t.style.location:st(t)&&zt(t.children)})}function ca(e,t){t===void 0&&(t={}),t=ye({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var n=new pa(e,t).parse();if(n.err){var a=SyntaxError(x[n.err.kind]);throw a.location=n.err.location,a.originalMessage=n.err.message,a}return t?.captureLocation||zt(n.val),n.val}function pt(e,t){var n=t&&t.cache?t.cache:$i,a=t&&t.serializer?t.serializer:Vi,i=t&&t.strategy?t.strategy:Bi;return i(e,{cache:n,serializer:a})}function Fi(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ma(e,t,n,a){var i=Fi(a)?a:n(a),o=t.get(i);return typeof o>"u"&&(o=e.call(this,a),t.set(i,o)),o}function da(e,t,n){var a=Array.prototype.slice.call(arguments,3),i=n(a),o=t.get(i);return typeof o>"u"&&(o=e.apply(this,a),t.set(i,o)),o}function jt(e,t,n,a,i){return n.bind(t,e,a,i)}function Bi(e,t){var n=e.length===1?ma:da;return jt(e,this,n,t.cache.create(),t.serializer)}function Oi(e,t){return jt(e,this,da,t.cache.create(),t.serializer)}function Gi(e,t){return jt(e,this,ma,t.cache.create(),t.serializer)}var Vi=function(){return JSON.stringify(arguments)};function Mt(){this.cache=Object.create(null)}Mt.prototype.get=function(e){return this.cache[e]};Mt.prototype.set=function(e,t){this.cache[e]=t};var $i={create:function(){return new Mt}},ut={variadic:Oi,monadic:Gi};var ue;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ue||(ue={}));var Ne=function(e){Te(t,e);function t(n,a,i){var o=e.call(this,n)||this;return o.code=a,o.originalMessage=i,o}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error);var Ht=function(e){Te(t,e);function t(n,a,i,o){return e.call(this,'Invalid values for "'.concat(n,'": "').concat(a,'". Options are "').concat(Object.keys(i).join('", "'),'"'),ue.INVALID_VALUE,o)||this}return t}(Ne);var ha=function(e){Te(t,e);function t(n,a,i){return e.call(this,'Value for "'.concat(n,'" must be of type ').concat(a),ue.INVALID_VALUE,i)||this}return t}(Ne);var ga=function(e){Te(t,e);function t(n,a){return e.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(a,'"'),ue.MISSING_VALUE,a)||this}return t}(Ne);var F;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(F||(F={}));function Wi(e){return e.length<2?e:e.reduce(function(t,n){var a=t[t.length-1];return!a||a.type!==F.literal||n.type!==F.literal?t.push(n):a.value+=n.value,t},[])}function Ji(e){return typeof e=="function"}function De(e,t,n,a,i,o,r){if(e.length===1&&Et(e[0]))return[{type:F.literal,value:e[0].value}];for(var s=[],p=0,c=e;p<c.length;p++){var l=c[p];if(Et(l)){s.push({type:F.literal,value:l.value});continue}if(Wn(l)){typeof o=="number"&&s.push({type:F.literal,value:n.getNumberFormat(t).format(o)});continue}var d=l.value;if(!(i&&d in i))throw new ga(d,r);var m=i[d];if($n(l)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),s.push({type:typeof m=="string"?F.literal:F.object,value:m});continue}if(at(l)){var h=typeof l.style=="string"?a.date[l.style]:Ie(l.style)?l.style.parsedOptions:void 0;s.push({type:F.literal,value:n.getDateTimeFormat(t,h).format(m)});continue}if(it(l)){var h=typeof l.style=="string"?a.time[l.style]:Ie(l.style)?l.style.parsedOptions:a.time.medium;s.push({type:F.literal,value:n.getDateTimeFormat(t,h).format(m)});continue}if(nt(l)){var h=typeof l.style=="string"?a.number[l.style]:lt(l.style)?l.style.parsedOptions:void 0;h&&h.scale&&(m=m*(h.scale||1)),s.push({type:F.literal,value:n.getNumberFormat(t,h).format(m)});continue}if(st(l)){var g=l.children,_=l.value,f=i[_];if(!Ji(f))throw new ha(_,"function",r);var y=De(g,t,n,a,i,o),P=f(y.map(function(b){return b.value}));Array.isArray(P)||(P=[P]),s.push.apply(s,P.map(function(b){return{type:typeof b=="string"?F.literal:F.object,value:b}}))}if(ot(l)){var A=l.options[m]||l.options.other;if(!A)throw new Ht(l.value,m,Object.keys(l.options),r);s.push.apply(s,De(A.value,t,n,a,i));continue}if(rt(l)){var A=l.options["=".concat(m)];if(!A){if(!Intl.PluralRules)throw new Ne(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ue.MISSING_INTL_API,r);var U=n.getPluralRules(t,{type:l.pluralType}).select(m-(l.offset||0));A=l.options[U]||l.options.other}if(!A)throw new Ht(l.value,m,Object.keys(l.options),r);s.push.apply(s,De(A.value,t,n,a,i,m-(l.offset||0)));continue}}return Wi(s)}function qi(e,t){return t?X(X(X({},e||{}),t||{}),Object.keys(e).reduce(function(n,a){return n[a]=X(X({},e[a]),t[a]||{}),n},{})):e}function Zi(e,t){return t?Object.keys(e).reduce(function(n,a){return n[a]=qi(e[a],t[a]),n},X({},e)):e}function Ft(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,n){e[t]=n}}}}}function Ki(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:pt(function(){for(var t,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return new((t=Intl.NumberFormat).bind.apply(t,tt([void 0],n,!1)))},{cache:Ft(e.number),strategy:ut.variadic}),getDateTimeFormat:pt(function(){for(var t,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return new((t=Intl.DateTimeFormat).bind.apply(t,tt([void 0],n,!1)))},{cache:Ft(e.dateTime),strategy:ut.variadic}),getPluralRules:pt(function(){for(var t,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return new((t=Intl.PluralRules).bind.apply(t,tt([void 0],n,!1)))},{cache:Ft(e.pluralRules),strategy:ut.variadic})}}var fa=function(){function e(t,n,a,i){n===void 0&&(n=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var l=o.formatToParts(c);if(l.length===1)return l[0].value;var d=l.reduce(function(m,h){return!m.length||h.type!==F.literal||typeof m[m.length-1]!="string"?m.push(h.value):m[m.length-1]+=h.value,m},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(c){return De(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=n,this.resolvedLocale=e.resolveLocale(n),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var r=i||{},s=r.formatters,p=Vn(r,["formatters"]);this.ast=e.__parse(t,X(X({},p),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Zi(e.formats,a),this.formatters=i&&i.formatters||Ki(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(t);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=ca,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();var Bt=fa;var ct={literal:0,argument:1,number:2,date:3,time:4,select:5,plural:6,pound:7,tag:8};var js=["ar-XB.json","ar.json","bg.json","ca.json","cs.json","da.json","de.json","el.json","en-GB.json","en-US.json","en-XA.json","en-XL.json","es-419.json","es.json","fi.json","fil.json","fr.json","he.json","hi.json","hr.json","hu.json","id.json","it.json","ja.json","ko.json","lt.json","lv.json","nl.json","no.json","pl.json","pt-PT.json","pt.json","ro.json","ru.json","sk.json","sl.json","sr-Latn.json","sr.json","sv.json","ta.json","te.json","th.json","tr.json","uk.json","vi.json","zh-HK.json","zh-TW.json","zh.json"].filter(e=>e.endsWith(".json")&&!e.endsWith(".ctc.json")).map(e=>e.replace(".json","")).sort();var Xi={number:{bytes:{maximumFractionDigits:0},milliseconds:{maximumFractionDigits:0},seconds:{minimumFractionDigits:1,maximumFractionDigits:1},extendedPercent:{maximumFractionDigits:2,style:"percent"}}};function va(e,t=new Map){for(let n of e)if(!(n.type===ct.literal||n.type===ct.pound)&&(t.set(n.value,n),n.type===ct.plural))for(let a of Object.values(n.options))va(a.value,t);return t}function Yi(e,t={},n){let a=va(e.getAst()),i={};for(let[o,r]of a){if(!(o in t))throw new Error(`ICU Message "${n}" contains a value reference ("${o}") that wasn't provided`);let s=t[o];if(r.type!==ct.number){i[o]=s;continue}if(typeof s!="number")throw new Error(`ICU Message "${n}" contains a numeric reference ("${o}") but provided value was not a number`);r.style==="milliseconds"?i[o]=Math.round(s/10)*10:r.style==="seconds"&&o==="timeInMs"?i[o]=Math.round(s/100)/10:r.style==="bytes"?i[o]=s/1024:i[o]=s}for(let o of Object.keys(t))if(!(o in i)){if(o==="errorCode"){i.errorCode=t.errorCode;continue}throw new Error(`Provided value "${o}" does not match any placeholder in ICU message "${n}"`)}return i}function Qi(e){return e.replace(/'/g,"''").replace(/\\{/g,"'{").replace(/\\}/g,"'}")}function ba(e,t,n){e=Qi(e);let a=n==="en-XA"||n==="en-XL"?"de-DE":n,i=Bt.IntlMessageFormat||Bt,o=new i(e,a,Xi,{ignoreTag:!0}),r=Yi(o,t,e),s=o.format(r);if(typeof s!="string")throw new Error("unexpected formatted result");return s}var Ot=" ";var ce=class{constructor(t){t==="en-XA"&&(t="de"),this._locale=t,this._cachedNumberFormatters=new Map}_formatNumberWithGranularity(t,n,a={}){if(n!==void 0){let r=-Math.log10(n);Number.isInteger(r)||(console.warn(`granularity of ${n} is invalid. Using 1 instead`),n=1),n<1&&(a={...a},a.minimumFractionDigits=a.maximumFractionDigits=Math.ceil(r)),t=Math.round(t/n)*n,Object.is(t,-0)&&(t=0)}else Math.abs(t)<5e-4&&(t=0);let i,o=[a.minimumFractionDigits,a.maximumFractionDigits,a.style,a.unit,a.unitDisplay,this._locale].join("");return i=this._cachedNumberFormatters.get(o),i||(i=new Intl.NumberFormat(this._locale,a),this._cachedNumberFormatters.set(o,i)),i.format(t).replace(" ",Ot)}formatNumber(t,n){return this._formatNumberWithGranularity(t,n)}formatInteger(t){return this._formatNumberWithGranularity(t,1)}formatPercent(t){return new Intl.NumberFormat(this._locale,{style:"percent"}).format(t)}formatBytesToKiB(t,n=void 0){return this._formatNumberWithGranularity(t/1024,n)+`${Ot}KiB`}formatBytesToMiB(t,n=void 0){return this._formatNumberWithGranularity(t/1048576,n)+`${Ot}MiB`}formatBytes(t,n=1){return this._formatNumberWithGranularity(t,n,{style:"unit",unit:"byte",unitDisplay:"long"})}formatBytesWithBestUnit(t,n=.1){return t>=1048576?this.formatBytesToMiB(t,n):t>=1024?this.formatBytesToKiB(t,n):this._formatNumberWithGranularity(t,n,{style:"unit",unit:"byte",unitDisplay:"narrow"})}formatKbps(t,n=void 0){return this._formatNumberWithGranularity(t,n,{style:"unit",unit:"kilobit-per-second",unitDisplay:"short"})}formatMilliseconds(t,n=void 0){return this._formatNumberWithGranularity(t,n,{style:"unit",unit:"millisecond",unitDisplay:"short"})}formatSeconds(t,n=void 0){return this._formatNumberWithGranularity(t/1e3,n,{style:"unit",unit:"second",unitDisplay:"narrow"})}formatDateTime(t){let n={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},a;try{a=new Intl.DateTimeFormat(this._locale,n)}catch{n.timeZone="UTC",a=new Intl.DateTimeFormat(this._locale,n)}return a.format(new Date(t))}formatDuration(t){let n=t/1e3;if(Math.round(n)===0)return"None";let a=[],i={day:60*60*24,hour:60*60,minute:60,second:1};return Object.keys(i).forEach(o=>{let r=i[o],s=Math.floor(n/r);if(s>0){n-=s*r;let p=this._formatNumberWithGranularity(s,1,{style:"unit",unit:o,unitDisplay:"narrow"});a.push(p)}}),a.join(" ")}};var Gt={navigationDescription:"Page load",timespanDescription:"User interactions",snapshotDescription:"Captured state of page",navigationLongDescription:"Navigation reports analyze a single page load, exactly like the original Lighthouse reports.",timespanLongDescription:"Timespan reports analyze an arbitrary period of time, typically containing user interactions.",snapshotLongDescription:"Snapshot reports analyze the page in a particular state, typically after user interactions.",navigationReport:"Navigation report",timespanReport:"Timespan report",snapshotReport:"Snapshot report",summary:"Summary",allReports:"All Reports",title:"Lighthouse User Flow Report",categories:"Categories",categoryPerformance:"Performance",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categorySeo:"SEO",desktop:"Desktop",mobile:"Mobile",ratingPass:"Good",ratingAverage:"Average",ratingFail:"Poor",ratingError:"Error",navigationReportCount:`{numNavigation, plural,
    =1 {{numNavigation} navigation report}
    other {{numNavigation} navigation reports}
  }`,timespanReportCount:`{numTimespan, plural,
    =1 {{numTimespan} timespan report}
    other {{numTimespan} timespan reports}
  }`,snapshotReportCount:`{numSnapshot, plural,
    =1 {{numSnapshot} snapshot report}
    other {{numSnapshot} snapshot reports}
  }`,save:"Save",helpLabel:"Understanding Flows",helpDialogTitle:"Understanding the Lighthouse Flow Report",helpUseCaseInstructionNavigation:"Use Navigation reports to...",helpUseCaseInstructionTimespan:"Use Timespan reports to...",helpUseCaseInstructionSnapshot:"Use Snapshot reports to...",helpUseCaseNavigation1:"Obtain a Lighthouse Performance score.",helpUseCaseNavigation2:"Measure page load Performance metrics such as Largest Contentful Paint and Speed Index.",helpUseCaseNavigation3:"Assess Progressive Web App capabilities.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",helpUseCaseSnapshot1:"Find accessibility issues in single page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",passedAuditCount:`{numPassed, plural,
    =1 {{numPassed} audit passed}
    other {{numPassed} audits passed}
  }`,passableAuditCount:`{numPassableAudits, plural,
    =1 {{numPassableAudits} passable audit}
    other {{numPassableAudits} passable audits}
  }`,informativeAuditCount:`{numInformative, plural,
    =1 {{numInformative} informative audit}
    other {{numInformative} informative audits}
  }`,highestImpact:"Highest impact"};var ya={"en-US":{allReports:"All Reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse Flow Report",helpLabel:"Understanding Flows",helpUseCaseInstructionNavigation:"Use Navigation reports to...",helpUseCaseInstructionSnapshot:"Use Snapshot reports to...",helpUseCaseInstructionTimespan:"Use Timespan reports to...",helpUseCaseNavigation1:"Obtain a Lighthouse Performance score.",helpUseCaseNavigation2:"Measure page load Performance metrics such as Largest Contentful Paint and Speed Index.",helpUseCaseNavigation3:"Assess Progressive Web App capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:`{numInformative, plural,
    =1 {{numInformative} informative audit}
    other {{numInformative} informative audits}
  }`,mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyze a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:`{numNavigation, plural,
    =1 {{numNavigation} navigation report}
    other {{numNavigation} navigation reports}
  }`,passableAuditCount:`{numPassableAudits, plural,
    =1 {{numPassableAudits} passable audit}
    other {{numPassableAudits} passable audits}
  }`,passedAuditCount:`{numPassed, plural,
    =1 {{numPassed} audit passed}
    other {{numPassed} audits passed}
  }`,ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyze the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:`{numSnapshot, plural,
    =1 {{numSnapshot} snapshot report}
    other {{numSnapshot} snapshot reports}
  }`,summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyze an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:`{numTimespan, plural,
    =1 {{numTimespan} timespan report}
    other {{numTimespan} timespan reports}
  }`,title:"Lighthouse User Flow Report"},en:{allReports:"All Reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse Flow Report",helpLabel:"Understanding Flows",helpUseCaseInstructionNavigation:"Use Navigation reports to...",helpUseCaseInstructionSnapshot:"Use Snapshot reports to...",helpUseCaseInstructionTimespan:"Use Timespan reports to...",helpUseCaseNavigation1:"Obtain a Lighthouse Performance score.",helpUseCaseNavigation2:"Measure page load Performance metrics such as Largest Contentful Paint and Speed Index.",helpUseCaseNavigation3:"Assess Progressive Web App capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:`{numInformative, plural,
    =1 {{numInformative} informative audit}
    other {{numInformative} informative audits}
  }`,mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyze a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:`{numNavigation, plural,
    =1 {{numNavigation} navigation report}
    other {{numNavigation} navigation reports}
  }`,passableAuditCount:`{numPassableAudits, plural,
    =1 {{numPassableAudits} passable audit}
    other {{numPassableAudits} passable audits}
  }`,passedAuditCount:`{numPassed, plural,
    =1 {{numPassed} audit passed}
    other {{numPassed} audits passed}
  }`,ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyze the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:`{numSnapshot, plural,
    =1 {{numSnapshot} snapshot report}
    other {{numSnapshot} snapshot reports}
  }`,summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyze an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:`{numTimespan, plural,
    =1 {{numTimespan} timespan report}
    other {{numTimespan} timespan reports}
  }`,title:"Lighthouse User Flow Report"},"en-AU":{allReports:"All reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse flow report",helpLabel:"Understanding flows",helpUseCaseInstructionNavigation:"Use Navigation reports to…",helpUseCaseInstructionSnapshot:"Use Snapshot reports to…",helpUseCaseInstructionTimespan:"Use Timespan reports to…",helpUseCaseNavigation1:"Obtain a Lighthouse performance score.",helpUseCaseNavigation2:"Measure page load performance metrics, such as largest contentful paint and speed index.",helpUseCaseNavigation3:"Assess progressive web app capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single-page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative audit}other{{numInformative} informative audits}}",mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyse a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigation report}other{{numNavigation} navigation reports}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} passable audit}other{{numPassableAudits} passable audits}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit passed}other{{numPassed} audits passed}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyse the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} snapshot report}other{{numSnapshot} snapshot reports}}",summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyse an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} timespan report}other{{numTimespan} timespan reports}}",title:"Lighthouse user flow report"},"en-GB":{allReports:"All reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse flow report",helpLabel:"Understanding flows",helpUseCaseInstructionNavigation:"Use Navigation reports to…",helpUseCaseInstructionSnapshot:"Use Snapshot reports to…",helpUseCaseInstructionTimespan:"Use Timespan reports to…",helpUseCaseNavigation1:"Obtain a Lighthouse performance score.",helpUseCaseNavigation2:"Measure page load performance metrics, such as largest contentful paint and speed index.",helpUseCaseNavigation3:"Assess progressive web app capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single-page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative audit}other{{numInformative} informative audits}}",mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyse a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigation report}other{{numNavigation} navigation reports}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} passable audit}other{{numPassableAudits} passable audits}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit passed}other{{numPassed} audits passed}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyse the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} snapshot report}other{{numSnapshot} snapshot reports}}",summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyse an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} timespan report}other{{numTimespan} timespan reports}}",title:"Lighthouse user flow report"},"en-IE":{allReports:"All reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse flow report",helpLabel:"Understanding flows",helpUseCaseInstructionNavigation:"Use Navigation reports to…",helpUseCaseInstructionSnapshot:"Use Snapshot reports to…",helpUseCaseInstructionTimespan:"Use Timespan reports to…",helpUseCaseNavigation1:"Obtain a Lighthouse performance score.",helpUseCaseNavigation2:"Measure page load performance metrics, such as largest contentful paint and speed index.",helpUseCaseNavigation3:"Assess progressive web app capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single-page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative audit}other{{numInformative} informative audits}}",mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyse a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigation report}other{{numNavigation} navigation reports}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} passable audit}other{{numPassableAudits} passable audits}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit passed}other{{numPassed} audits passed}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyse the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} snapshot report}other{{numSnapshot} snapshot reports}}",summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyse an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} timespan report}other{{numTimespan} timespan reports}}",title:"Lighthouse user flow report"},"en-SG":{allReports:"All reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse flow report",helpLabel:"Understanding flows",helpUseCaseInstructionNavigation:"Use Navigation reports to…",helpUseCaseInstructionSnapshot:"Use Snapshot reports to…",helpUseCaseInstructionTimespan:"Use Timespan reports to…",helpUseCaseNavigation1:"Obtain a Lighthouse performance score.",helpUseCaseNavigation2:"Measure page load performance metrics, such as largest contentful paint and speed index.",helpUseCaseNavigation3:"Assess progressive web app capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single-page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative audit}other{{numInformative} informative audits}}",mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyse a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigation report}other{{numNavigation} navigation reports}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} passable audit}other{{numPassableAudits} passable audits}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit passed}other{{numPassed} audits passed}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyse the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} snapshot report}other{{numSnapshot} snapshot reports}}",summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyse an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} timespan report}other{{numTimespan} timespan reports}}",title:"Lighthouse user flow report"},"en-ZA":{allReports:"All reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse flow report",helpLabel:"Understanding flows",helpUseCaseInstructionNavigation:"Use Navigation reports to…",helpUseCaseInstructionSnapshot:"Use Snapshot reports to…",helpUseCaseInstructionTimespan:"Use Timespan reports to…",helpUseCaseNavigation1:"Obtain a Lighthouse performance score.",helpUseCaseNavigation2:"Measure page load performance metrics, such as largest contentful paint and speed index.",helpUseCaseNavigation3:"Assess progressive web app capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single-page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative audit}other{{numInformative} informative audits}}",mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyse a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigation report}other{{numNavigation} navigation reports}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} passable audit}other{{numPassableAudits} passable audits}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit passed}other{{numPassed} audits passed}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyse the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} snapshot report}other{{numSnapshot} snapshot reports}}",summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyse an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} timespan report}other{{numTimespan} timespan reports}}",title:"Lighthouse user flow report"},"en-IN":{allReports:"All reports",categories:"Categories",categoryAccessibility:"Accessibility",categoryBestPractices:"Best Practices",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Understanding the Lighthouse flow report",helpLabel:"Understanding flows",helpUseCaseInstructionNavigation:"Use Navigation reports to…",helpUseCaseInstructionSnapshot:"Use Snapshot reports to…",helpUseCaseInstructionTimespan:"Use Timespan reports to…",helpUseCaseNavigation1:"Obtain a Lighthouse performance score.",helpUseCaseNavigation2:"Measure page load performance metrics, such as largest contentful paint and speed index.",helpUseCaseNavigation3:"Assess progressive web app capabilities.",helpUseCaseSnapshot1:"Find accessibility issues in single-page applications or complex forms.",helpUseCaseSnapshot2:"Evaluate best practices of menus and UI elements hidden behind interaction.",helpUseCaseTimespan1:"Measure layout shifts and JavaScript execution time on a series of interactions.",helpUseCaseTimespan2:"Discover performance opportunities to improve the experience for long-lived pages and single-page applications.",highestImpact:"Highest impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative audit}other{{numInformative} informative audits}}",mobile:"Mobile",navigationDescription:"Page load",navigationLongDescription:"Navigation reports analyse a single page load, exactly like the original Lighthouse reports.",navigationReport:"Navigation report",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigation report}other{{numNavigation} navigation reports}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} passable audit}other{{numPassableAudits} passable audits}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit passed}other{{numPassed} audits passed}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Poor",ratingPass:"Good",save:"Save",snapshotDescription:"Captured state of page",snapshotLongDescription:"Snapshot reports analyse the page in a particular state, typically after user interactions.",snapshotReport:"Snapshot report",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} snapshot report}other{{numSnapshot} snapshot reports}}",summary:"Summary",timespanDescription:"User interactions",timespanLongDescription:"Timespan reports analyse an arbitrary period of time, typically containing user interactions.",timespanReport:"Timespan report",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} timespan report}other{{numTimespan} timespan reports}}",title:"Lighthouse user flow report"},"ar-XB":{allReports:"‏‮All‬‏ ‏‮Reports‬‏",categories:"‏‮Categories‬‏",categoryAccessibility:"‏‮Accessibility‬‏",categoryBestPractices:"‏‮Best‬‏ ‏‮Practices‬‏",categoryPerformance:"‏‮Performance‬‏",categorySeo:"‏‮SEO‬‏",desktop:"‏‮Desktop‬‏",helpDialogTitle:"‏‮Understanding‬‏ ‏‮the‬‏ ‏‮Lighthouse‬‏ ‏‮Flow‬‏ ‏‮Report‬‏",helpLabel:"‏‮Understanding‬‏ ‏‮Flows‬‏",helpUseCaseInstructionNavigation:"‏‮Use‬‏ ‏‮Navigation‬‏ ‏‮reports‬‏ ‏‮to‬‏...",helpUseCaseInstructionSnapshot:"‏‮Use‬‏ ‏‮Snapshot‬‏ ‏‮reports‬‏ ‏‮to‬‏...",helpUseCaseInstructionTimespan:"‏‮Use‬‏ ‏‮Timespan‬‏ ‏‮reports‬‏ ‏‮to‬‏...",helpUseCaseNavigation1:"‏‮Obtain‬‏ ‏‮a‬‏ ‏‮Lighthouse‬‏ ‏‮Performance‬‏ ‏‮score‬‏.",helpUseCaseNavigation2:"‏‮Measure‬‏ ‏‮page‬‏ ‏‮load‬‏ ‏‮Performance‬‏ ‏‮metrics‬‏ ‏‮such‬‏ ‏‮as‬‏ ‏‮Largest‬‏ ‏‮Contentful‬‏ ‏‮Paint‬‏ ‏‮and‬‏ ‏‮Speed‬‏ ‏‮Index‬‏.",helpUseCaseNavigation3:"‏‮Assess‬‏ ‏‮Progressive‬‏ ‏‮Web‬‏ ‏‮App‬‏ ‏‮capabilities‬‏.",helpUseCaseSnapshot1:"‏‮Find‬‏ ‏‮accessibility‬‏ ‏‮issues‬‏ ‏‮in‬‏ ‏‮single‬‏ ‏‮page‬‏ ‏‮applications‬‏ ‏‮or‬‏ ‏‮complex‬‏ ‏‮forms‬‏.",helpUseCaseSnapshot2:"‏‮Evaluate‬‏ ‏‮best‬‏ ‏‮practices‬‏ ‏‮of‬‏ ‏‮menus‬‏ ‏‮and‬‏ ‏‮UI‬‏ ‏‮elements‬‏ ‏‮hidden‬‏ ‏‮behind‬‏ ‏‮interaction‬‏.",helpUseCaseTimespan1:"‏‮Measure‬‏ ‏‮layout‬‏ ‏‮shifts‬‏ ‏‮and‬‏ ‏‮JavaScript‬‏ ‏‮execution‬‏ ‏‮time‬‏ ‏‮on‬‏ ‏‮a‬‏ ‏‮series‬‏ ‏‮of‬‏ ‏‮interactions‬‏.",helpUseCaseTimespan2:"‏‮Discover‬‏ ‏‮performance‬‏ ‏‮opportunities‬‏ ‏‮to‬‏ ‏‮improve‬‏ ‏‮the‬‏ ‏‮experience‬‏ ‏‮for‬‏ ‏‮long‬‏-‏‮lived‬‏ ‏‮pages‬‏ ‏‮and‬‏ ‏‮single‬‏-‏‮page‬‏ ‏‮applications‬‏.",highestImpact:"‏‮Highest‬‏ ‏‮impact‬‏",informativeAuditCount:"{numInformative,plural, =1{{numInformative} ‏‮informative‬‏ ‏‮audit‬‏}zero{{numInformative} ‏‮informative‬‏ ‏‮audits‬‏}two{{numInformative} ‏‮informative‬‏ ‏‮audits‬‏}few{{numInformative} ‏‮informative‬‏ ‏‮audits‬‏}many{{numInformative} ‏‮informative‬‏ ‏‮audits‬‏}other{{numInformative} ‏‮informative‬‏ ‏‮audits‬‏}}",mobile:"‏‮Mobile‬‏",navigationDescription:"‏‮Page‬‏ ‏‮load‬‏",navigationLongDescription:"‏‮Navigation‬‏ ‏‮reports‬‏ ‏‮analyze‬‏ ‏‮a‬‏ ‏‮single‬‏ ‏‮page‬‏ ‏‮load‬‏, ‏‮exactly‬‏ ‏‮like‬‏ ‏‮the‬‏ ‏‮original‬‏ ‏‮Lighthouse‬‏ ‏‮reports‬‏.",navigationReport:"‏‮Navigation‬‏ ‏‮report‬‏",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} ‏‮navigation‬‏ ‏‮report‬‏}zero{{numNavigation} ‏‮navigation‬‏ ‏‮reports‬‏}two{{numNavigation} ‏‮navigation‬‏ ‏‮reports‬‏}few{{numNavigation} ‏‮navigation‬‏ ‏‮reports‬‏}many{{numNavigation} ‏‮navigation‬‏ ‏‮reports‬‏}other{{numNavigation} ‏‮navigation‬‏ ‏‮reports‬‏}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} ‏‮passable‬‏ ‏‮audit‬‏}zero{{numPassableAudits} ‏‮passable‬‏ ‏‮audits‬‏}two{{numPassableAudits} ‏‮passable‬‏ ‏‮audits‬‏}few{{numPassableAudits} ‏‮passable‬‏ ‏‮audits‬‏}many{{numPassableAudits} ‏‮passable‬‏ ‏‮audits‬‏}other{{numPassableAudits} ‏‮passable‬‏ ‏‮audits‬‏}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} ‏‮audit‬‏ ‏‮passed‬‏}zero{{numPassed} ‏‮audits‬‏ ‏‮passed‬‏}two{{numPassed} ‏‮audits‬‏ ‏‮passed‬‏}few{{numPassed} ‏‮audits‬‏ ‏‮passed‬‏}many{{numPassed} ‏‮audits‬‏ ‏‮passed‬‏}other{{numPassed} ‏‮audits‬‏ ‏‮passed‬‏}}",ratingAverage:"‏‮Average‬‏",ratingError:"‏‮Error‬‏",ratingFail:"‏‮Poor‬‏",ratingPass:"‏‮Good‬‏",save:"‏‮Save‬‏",snapshotDescription:"‏‮Captured‬‏ ‏‮state‬‏ ‏‮of‬‏ ‏‮page‬‏",snapshotLongDescription:"‏‮Snapshot‬‏ ‏‮reports‬‏ ‏‮analyze‬‏ ‏‮the‬‏ ‏‮page‬‏ ‏‮in‬‏ ‏‮a‬‏ ‏‮particular‬‏ ‏‮state‬‏, ‏‮typically‬‏ ‏‮after‬‏ ‏‮user‬‏ ‏‮interactions‬‏.",snapshotReport:"‏‮Snapshot‬‏ ‏‮report‬‏",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} ‏‮snapshot‬‏ ‏‮report‬‏}zero{{numSnapshot} ‏‮snapshot‬‏ ‏‮reports‬‏}two{{numSnapshot} ‏‮snapshot‬‏ ‏‮reports‬‏}few{{numSnapshot} ‏‮snapshot‬‏ ‏‮reports‬‏}many{{numSnapshot} ‏‮snapshot‬‏ ‏‮reports‬‏}other{{numSnapshot} ‏‮snapshot‬‏ ‏‮reports‬‏}}",summary:"‏‮Summary‬‏",timespanDescription:"‏‮User‬‏ ‏‮interactions‬‏",timespanLongDescription:"‏‮Timespan‬‏ ‏‮reports‬‏ ‏‮analyze‬‏ ‏‮an‬‏ ‏‮arbitrary‬‏ ‏‮period‬‏ ‏‮of‬‏ ‏‮time‬‏, ‏‮typically‬‏ ‏‮containing‬‏ ‏‮user‬‏ ‏‮interactions‬‏.",timespanReport:"‏‮Timespan‬‏ ‏‮report‬‏",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} ‏‮timespan‬‏ ‏‮report‬‏}zero{{numTimespan} ‏‮timespan‬‏ ‏‮reports‬‏}two{{numTimespan} ‏‮timespan‬‏ ‏‮reports‬‏}few{{numTimespan} ‏‮timespan‬‏ ‏‮reports‬‏}many{{numTimespan} ‏‮timespan‬‏ ‏‮reports‬‏}other{{numTimespan} ‏‮timespan‬‏ ‏‮reports‬‏}}",title:"‏‮Lighthouse‬‏ ‏‮User‬‏ ‏‮Flow‬‏ ‏‮Report‬‏"},ar:{allReports:"كل التقارير",categories:"الفئات",categoryAccessibility:"إمكانية الوصول",categoryBestPractices:"أفضل الممارسات",categoryPerformance:"الأداء",categorySeo:"تحسين محركات البحث",desktop:"سطح المكتب",helpDialogTitle:"فهم تقرير مسار Lighthouse",helpLabel:"فهم المسارات",helpUseCaseInstructionNavigation:"يمكنك استخدام تقارير التنقُّل من أجل...",helpUseCaseInstructionSnapshot:"يمكنك استخدام التقارير الخاصة بلحظات معيّنة من أجل...",helpUseCaseInstructionTimespan:"يمكنك استخدام تقارير الفترات الزمنية من أجل...",helpUseCaseNavigation1:"الحصول على نتيجة أداء أداة Lighthouse",helpUseCaseNavigation2:"التعرّف على قيم مقاييس أداء تحميل الصفحة، مثل سرعة عرض أكبر جزء من المحتوى على الصفحة ومؤشر السرعة",helpUseCaseNavigation3:"تقييم إمكانات تطبيقات الويب التقدّمية",helpUseCaseSnapshot1:"التعرّف على المشاكل التي تحول دون سهولة الاستخدام في التطبيقات المكوّنة من صفحة واحدة أو النماذج المُعقَّدة",helpUseCaseSnapshot2:"تقييم أفضل الممارسات المتعلّقة بالقوائم وعناصر واجهة المستخدم المخفية خلف التفاعلات",helpUseCaseTimespan1:"قياس متغيّرات التصميم ووقت تنفيذ JavaScript على سلسلة من التفاعلات",helpUseCaseTimespan2:"التعرّف على فرص تحسين الأداء من أجل تحسين تجربة استخدام الصفحات التي يفتحها المستخدم لمدة طويلة والتطبيقات المكوّنة من صفحة واحدة",highestImpact:"عمليات التدقيق الأعلى تأثيرًا",informativeAuditCount:"{numInformative,plural, =1{عملية تدقيق واحدة ({numInformative}) مفيدة}zero{‫{numInformative} عملية تدقيق مفيدة}two{عمليتا تدقيق ({numInformative}) مفيدتان}few{‫{numInformative} عمليات تدقيق مفيدة}many{‫{numInformative} عملية تدقيق مفيدة}other{‫{numInformative} عملية تدقيق مفيدة}}",mobile:"الأجهزة الجوّالة",navigationDescription:"تحميل الصفحة",navigationLongDescription:"تحلِّل تقارير التنقُّل أداء تحميل صفحة واحدة، تمامًا مثل تقارير Lighthouse الأصلية.",navigationReport:"تقرير التنقُّل في الصفحة",navigationReportCount:"{numNavigation,plural, =1{تقرير تنقُّل واحد ({numNavigation}) في الصفحة}zero{‫{numNavigation} تقرير تنقُّل في الصفحة}two{تقريرا تنقُّل ({numNavigation}) في الصفحة}few{‫{numNavigation} تقارير تنقُّل في الصفحة}many{‫{numNavigation} تقرير تنقُّل في الصفحة}other{‫{numNavigation} تقرير تنقُّل في الصفحة}}",passableAuditCount:"{numPassableAudits,plural, =1{عملية تدقيق واحدة ({numPassableAudits}) يمكن اجتيازها}zero{‫{numPassableAudits} عملية تدقيق يمكن اجتيازها}two{عمليتَا تدقيق ({numPassableAudits}) يمكن اجتيازهما}few{‫{numPassableAudits} عمليات تدقيق يمكن اجتيازها}many{‫{numPassableAudits} عملية تدقيق يمكن اجتيازها}other{‫{numPassableAudits} عملية تدقيق يمكن اجتيازها}}",passedAuditCount:"{numPassed,plural, =1{تمّ اجتياز عملية تدقيق واحدة ({numPassed})}zero{تمّ اجتياز {numPassed} عملية تدقيق}two{تمّ اجتياز عمليتَي تدقيق ({numPassed})}few{تمّ اجتياز {numPassed} عمليات تدقيق}many{تمّ اجتياز {numPassed} عملية تدقيق}other{تمّ اجتياز {numPassed} عملية تدقيق}}",ratingAverage:"متوسط",ratingError:"حدث خطأ",ratingFail:"غير جيد",ratingPass:"جيد",save:"حفظ",snapshotDescription:"الحالة التي تم تسجيلها للصفحة",snapshotLongDescription:"تُجري التقارير الخاصة بلحظات معيّنة تحليلاً للصفحة في حالة مُحدَّدة، عادةً ما بعد تفاعلات المستخدم.",snapshotReport:"التقرير الخاص بالصفحة في لحظة معيَّنة",snapshotReportCount:"{numSnapshot,plural, =1{تقرير واحد ({numSnapshot}) لتقييم الصفحة في لحظة معيَّنة}zero{‫{numSnapshot} تقرير لتقييم الصفحة في لحظة معيَّنة}two{تقريران ({numSnapshot}) لتقييم الصفحة في لحظة معيَّنة}few{‫{numSnapshot} تقارير لتقييم الصفحة في لحظة معيَّنة}many{‫{numSnapshot} تقريرًا لتقييم الصفحة في لحظة معيَّنة}other{‫{numSnapshot} تقرير لتقييم الصفحة في لحظة معيَّنة}}",summary:"ملخّص",timespanDescription:"تفاعلات المستخدمين",timespanLongDescription:"تحلِّل تقارير الفترات الزمنية أداء صفحة خلال فترات زمنية عشوائية، وعادةً ما تتضمّن تفاعلات المستخدم.",timespanReport:"تقرير الإطار الزمني",timespanReportCount:"{numTimespan,plural, =1{تقرير واحد ({numTimespan}) لتقييم الصفحة خلال فترة زمنية}zero{‫{numTimespan} تقرير لتقييم الصفحة خلال فترة زمنية}two{تقريران ({numTimespan}) لتقييم الصفحة خلال فترة زمنية}few{‫{numTimespan} تقارير لتقييم الصفحة خلال فترة زمنية}many{‫{numTimespan} تقريرًا لتقييم الصفحة خلال فترة زمنية}other{‫{numTimespan} تقرير لتقييم الصفحة خلال فترة زمنية}}",title:"تقرير تدفق المستخدمين في أداة Lighthouse"},bg:{allReports:"Всички отчети",categories:"Категории",categoryAccessibility:"Достъпност",categoryBestPractices:"Най-добри практики",categoryPerformance:"Ефективност",categorySeo:"SEO",desktop:"Настолни компютри",helpDialogTitle:"Тълкуване на отчета на Lighthouse за навигацията",helpLabel:"Информация за навигацията",helpUseCaseInstructionNavigation:"Използване на отчетите за навигирането за...",helpUseCaseInstructionSnapshot:"Използвайте отчетите за моментната снимка за...",helpUseCaseInstructionTimespan:"Използване на отчетите за периода от време за...",helpUseCaseNavigation1:"Получаване на резултат за ефективността от Lighthouse.",helpUseCaseNavigation2:"Измерване на показатели за ефективността при зареждане на страниците, като например изобразяване на най-голямото съдържание (LCP) и индекс на скоростта.",helpUseCaseNavigation3:"Тестване на възможностите на прогресивни уеб приложения.",helpUseCaseSnapshot1:"Намиране на проблеми с достъпността в приложения от една страница и сложни формуляри.",helpUseCaseSnapshot2:"Анализ на най-добрите практики, свързани с взаимодействията с менюта и елементи на ПИ.",helpUseCaseTimespan1:"Измерване на структурните промени и времето за изпълнение на JavaScript за поредица от взаимодействия.",helpUseCaseTimespan2:"Откриване на възможности за подобряване на ефективността на продължително отворените страници и приложенията от една страница.",highestImpact:"С най-голямо въздействие",informativeAuditCount:"{numInformative,plural, =1{{numInformative} информативна проверка}other{{numInformative} информативни проверки}}",mobile:"Мобилни устройства",navigationDescription:"Зареждане на страницата",navigationLongDescription:"Отчетите за навигацията анализират зареждането на отделни страници, точно както първоначалните отчети на Lighthouse.",navigationReport:"Отчет за навигирането",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} отчет за навигирането}other{{numNavigation} отчета за навигирането}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} проверка, която може да бъде премината успешно}other{{numPassableAudits} проверки, които могат да бъдат преминати успешно}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} успешна проверка}other{{numPassed} успешни проверки}}",ratingAverage:"Средна",ratingError:"Грешка",ratingFail:"Лоша",ratingPass:"Добра",save:"Запазване",snapshotDescription:"Моментно състояние на страницата",snapshotLongDescription:"Отчетите за моментната снимка анализират страницата в определено състояние, обикновено след потребителски взаимодействия.",snapshotReport:"Отчет за моментното състояние",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} отчет за моментната снимка}other{{numSnapshot} отчета за моментната снимка}}",summary:"Обобщена информация",timespanDescription:"Потребителски взаимодействия",timespanLongDescription:"Отчетите за периода от време анализират произволен времеви интервал, който обикновено съдържа потребителски взаимодействия.",timespanReport:"Отчет за периода от време",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} отчет за периода от време}other{{numTimespan} отчета за периода от време}}",title:"Отчет на Lighthouse за потребителската навигация"},ca:{allReports:"Tots els informes",categories:"Categories",categoryAccessibility:"Accessibilitat",categoryBestPractices:"Pràctiques recomanades",categoryPerformance:"Rendiment",categorySeo:"SEO",desktop:"Escriptori",helpDialogTitle:"Explicació de l'informe de fluxos de Lighthouse",helpLabel:"Explicació dels fluxos",helpUseCaseInstructionNavigation:"Utilitza els informes de navegació per...",helpUseCaseInstructionSnapshot:"Utilitza els informes d'una instantània per...",helpUseCaseInstructionTimespan:"Utilitza els informes d'un període de temps per...",helpUseCaseNavigation1:"Obtén una puntuació del rendiment de Lighthouse.",helpUseCaseNavigation2:"Mesura les mètriques de rendiment de la càrrega de pàgines, com ara la renderització de l'element més gran amb contingut i l'índex de velocitat.",helpUseCaseNavigation3:"Avalua les funcions d'una aplicació web progressiva.",helpUseCaseSnapshot1:"Cerca problemes d'accessibilitat en aplicacions d'una sola pàgina o en formularis complexos.",helpUseCaseSnapshot2:"Avalua les pràctiques recomanades dels menús i dels elements de la interfície d'usuari amagats darrere de la interacció.",helpUseCaseTimespan1:"Mesura els canvis de disseny i el temps d'execució de JavaScript en una sèrie d'interaccions.",helpUseCaseTimespan2:"Descobreix oportunitats de rendiment per millorar l'experiència en pàgines de llarga durada i en aplicacions d'una sola pàgina.",highestImpact:"Millor impacte",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoria informativa}other{{numInformative} auditories informatives}}",mobile:"Mòbil",navigationDescription:"Càrrega de la pàgina",navigationLongDescription:"Els informes de navegació analitzen la càrrega d'una sola pàgina, exactament igual que els informes originals de Lighthouse.",navigationReport:"Informe de navegació",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegació}other{{numNavigation} informes de navegació}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoria aprovable}other{{numPassableAudits} auditories aprovables}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoria aprovada}other{{numPassed} auditories aprovades}}",ratingAverage:"Normal",ratingError:"Error",ratingFail:"Deficient",ratingPass:"Bo",save:"Desa",snapshotDescription:"Estat capturat de la pàgina",snapshotLongDescription:"Els informes d'una instantània analitzen la pàgina en un estat concret, normalment després de les interaccions dels usuaris.",snapshotReport:"Informe d'una instantània",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe d'una instantània}other{{numSnapshot} informes d'una instantània}}",summary:"Resum",timespanDescription:"Interaccions dels usuaris",timespanLongDescription:"Els informes d'un període de temps analitzen un període de temps arbitrari, que sol contenir interaccions dels usuaris.",timespanReport:"Informe d'un període de temps",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe d'un període de temps}other{{numTimespan} informes d'un període de temps}}",title:"Informe del flux d'usuaris de Lighthouse"},cs:{allReports:"Všechny přehledy",categories:"Kategorie",categoryAccessibility:"Přístupnost",categoryBestPractices:"Doporučené postupy",categoryPerformance:"Výkon",categorySeo:"SEO",desktop:"Počítač",helpDialogTitle:"Vysvětlení přehledu procesu Lighthouse",helpLabel:"Vysvětlení procesů",helpUseCaseInstructionNavigation:"Pomocí přehledů navigace můžete…",helpUseCaseInstructionSnapshot:"Pomocí přehledů v konkrétním okamžiku můžete…",helpUseCaseInstructionTimespan:"Pomocí přehledů časového rozpětí můžete…",helpUseCaseNavigation1:"Získat skóre výkonu Lighthouse.",helpUseCaseNavigation2:"Měřit metriky načítání stránek, jako jsou vykreslení největšího obsahu a index rychlosti.",helpUseCaseNavigation3:"Vyhodnotit funkce progresivních webových aplikací.",helpUseCaseSnapshot1:"Odhalit problémy s přístupností v jednostránkových aplikacích nebo složitých formulářích.",helpUseCaseSnapshot2:"Vyhodnotit doporučené postupy týkající se nabídek a prvků uživatelského rozhraní skryté za interakcí.",helpUseCaseTimespan1:"Měřit změny rozvržení a dobu běhu JavaScriptu v sériích interakcí.",helpUseCaseTimespan2:"Objevit příležitosti ke zlepšení výkonu, které vám umožní vylepšit výkon dlouho používaných stránek a jednostránkových aplikací.",highestImpact:"Nejvyšší dopad",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativní audit}few{{numInformative} informativní audity}many{{numInformative} informativního auditu}other{{numInformative} informativních auditů}}",mobile:"Mobil",navigationDescription:"Načtení stránky",navigationLongDescription:"Přehledy navigace analyzují jedno načtení stránky, stejně jako původní přehledy Lighthouse.",navigationReport:"Přehled navigace",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} přehled navigace}few{{numNavigation} přehledy navigace}many{{numNavigation} přehledu navigace}other{{numNavigation} přehledů navigace}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} splnitelný audit}few{{numPassableAudits} splnitelné audity}many{{numPassableAudits} splnitelného auditu}other{{numPassableAudits} splnitelných auditů}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} splněný audit}few{{numPassed} splněné audity}many{{numPassed} splněného auditu}other{{numPassed} splněných auditů}}",ratingAverage:"Průměr",ratingError:"Chyba",ratingFail:"Slabé",ratingPass:"Dobré",save:"Uložit",snapshotDescription:"Zachycený stav stránky",snapshotLongDescription:"Přehledy v konkrétním okamžiku analyzují stránku v konkrétním stavu, obvykle po interakcích uživatelů.",snapshotReport:"Přehled v konkrétním okamžiku",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} přehled v konkrétním okamžiku}few{{numSnapshot} přehledy v konkrétním okamžiku}many{{numSnapshot} přehledu v konkrétním okamžiku}other{{numSnapshot} přehledů v konkrétním okamžiku}}",summary:"Souhrn",timespanDescription:"Interakce uživatelů",timespanLongDescription:"Přehledy časového rozpětí analyzují libovolné období, které obvykle zahrnuje interakce uživatelů.",timespanReport:"Přehled časového rozpětí",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} přehled časového rozpětí}few{{numTimespan} přehledy časového rozpětí}many{{numTimespan} přehledu časového rozpětí}other{{numTimespan} přehledů časového rozpětí}}",title:"Přehled toku uživatelů služby Lighthouse"},da:{allReports:"Alle rapporter",categories:"Kategorier",categoryAccessibility:"Hjælpefunktioner",categoryBestPractices:"Optimale løsninger",categoryPerformance:"Effektivitet",categorySeo:"SEO",desktop:"Computer",helpDialogTitle:"Sådan skal rapporten over flow i Lighthouse forstås",helpLabel:"Sådan skal flow forstås",helpUseCaseInstructionNavigation:"Brug rapporter over navigation til...",helpUseCaseInstructionSnapshot:"Brug øjebliksbillederapporter til...",helpUseCaseInstructionTimespan:"Brug rapporter over tidsperioder til...",helpUseCaseNavigation1:"Få en Lighthouse-ydeevnescore.",helpUseCaseNavigation2:"Mål metrics for sideindlæsning såsom største udfyldning af indhold og Speed Index.",helpUseCaseNavigation3:"Vurder mulighederne med progressive webapps.",helpUseCaseSnapshot1:"Find tilgængelighedsproblemer i enkeltsideapps og komplekse formularer.",helpUseCaseSnapshot2:"Evaluer optimale løsninger til menuer og brugerfladeelementer, der er skjult bag interaktioner.",helpUseCaseTimespan1:"Mål layoutskift og tid for JavaScript-udførelse på en række interaktioner.",helpUseCaseTimespan2:"Se ydeevnemuligheder, der kan forbedre oplevelsen af langvarige sider og enkeltssideapps.",highestImpact:"Størst indflydelse",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativ gennemgang}one{{numInformative} informativ gennemgang}other{{numInformative} informative gennemgange}}",mobile:"Mobil",navigationDescription:"Sideindlæsning",navigationLongDescription:"Rapporter over navigation analyserer indlæsning af en enkelt side, præcis som de oprindelige Lighthouse-rapporter.",navigationReport:"Rapport over navigation",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigationsrapportering}one{{numNavigation} navigationsrapportering}other{{numNavigation} navigationsrapporteringer}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} gennemgang, der kan godkendes}one{{numPassableAudits} gennemgang, der kan godkendes}other{{numPassableAudits} gennemgange, der kan godkendes}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} gennemgang er blevet godkendt}one{{numPassed} gennemgang er blevet godkendt}other{{numPassed} gennemgange er blevet godkendt}}",ratingAverage:"Gennemsnit",ratingError:"Fejl",ratingFail:"Dårlig",ratingPass:"God",save:"Gem",snapshotDescription:"En sides tilstand på et specifikt tidspunkt",snapshotLongDescription:"Øjebliksbillederapporter analyserer siden i en specifik tilstand, typisk efter brugerinteraktioner.",snapshotReport:"Rapport med øjebliksbillede",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} rapportering af øjebliksbillede}one{{numSnapshot} rapportering af øjebliksbillede}other{{numSnapshot} rapporteringer af øjebliksbillede}}",summary:"Oversigt",timespanDescription:"Brugerinteraktioner",timespanLongDescription:"Rapporter over tidsperioder analyserer en tilfældig periode, typisk med brugerinteraktioner.",timespanReport:"Rapport over tidsperiode",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} tidsperioderapportering}one{{numTimespan} tidsperioderapportering}other{{numTimespan} tidsperioderapporteringer}}",title:"Rapport over brugerflow i Lighthouse"},de:{allReports:"Alle Berichte",categories:"Kategorien",categoryAccessibility:"Barrierefreiheit",categoryBestPractices:"Best Practices",categoryPerformance:"Leistung",categorySeo:"SEO",desktop:"Computer",helpDialogTitle:"Informationen über den Lighthouse-Bericht zur Aufrufabfolge",helpLabel:"Informationen über Aufrufabfolgen",helpUseCaseInstructionNavigation:"Navigationsberichte können für Folgendes verwendet werden:",helpUseCaseInstructionSnapshot:"Snapshot-Berichte können für Folgendes verwendet werden:",helpUseCaseInstructionTimespan:"Zeitspannenberichte können für Folgendes verwendet werden:",helpUseCaseNavigation1:"Eine Lighthouse-Leistungsbewertung erhalten.",helpUseCaseNavigation2:"Messwerte zur Leistung beim Seitenaufbau erfassen, z. B. Largest Contentful Paint oder Speed Index.",helpUseCaseNavigation3:"Funktionen progressiver Web-Apps bewerten.",helpUseCaseSnapshot1:"Probleme mit der Barrierefreiheit in Single-Page-Anwendungen oder komplexen Formularen finden.",helpUseCaseSnapshot2:"Best Practices für hinter einer Interaktion versteckte Menüs und UI-Elemente bewerten.",helpUseCaseTimespan1:"Layoutverschiebungen und JavaScript-Ausführungszeit bei einer Reihe von Interaktionen messen.",helpUseCaseTimespan2:"Leistungsmöglichkeiten finden, um die Nutzung für langlebige Seiten und Single-Page-Anwendungen zu verbessern.",highestImpact:"Größte Wirkung",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative Prüfung}other{{numInformative} informative Prüfungen}}",mobile:"Mobil",navigationDescription:"Seitenaufbau",navigationLongDescription:"Mit Navigationsberichten wird der Aufbau einer einzelnen Seite analysiert, genau wie mit den ursprünglichen Lighthouse-Berichten.",navigationReport:"Navigationsbericht",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} Navigationsbericht}other{{numNavigation} Navigationsberichte}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} bestehbare Prüfung}other{{numPassableAudits} bestehbare Prüfungen}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} Prüfung bestanden}other{{numPassed} Prüfungen bestanden}}",ratingAverage:"Durchschnittlich",ratingError:"Fehler",ratingFail:"Schlecht",ratingPass:"Gut",save:"Speichern",snapshotDescription:"Erfasster Seitenstatus",snapshotLongDescription:"Mit Snapshot-Berichten werden Seiten in einem bestimmten Zustand analysiert, in der Regel nach Nutzerinteraktionen.",snapshotReport:"Snapshot-Bericht",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} Snapshot-Bericht}other{{numSnapshot} Snapshot-Berichte}}",summary:"Zusammenfassung",timespanDescription:"Nutzerinteraktionen",timespanLongDescription:"Mit Zeitspannenberichten wird ein beliebiger Zeitraum analysiert, normalerweise einer, der Nutzerinteraktionen enthält.",timespanReport:"Zeitspannenbericht",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} Zeitspannenbericht}other{{numTimespan} Zeitspannenberichte}}",title:"Lighthouse-Bericht zur Aufrufabfolge"},el:{allReports:"Όλες οι αναφορές",categories:"Κατηγορίες",categoryAccessibility:"Προσβασιμότητα",categoryBestPractices:"Βέλτιστες πρακτικές",categoryPerformance:"Απόδοση",categorySeo:"SEO",desktop:"Υπολογιστής",helpDialogTitle:"Κατανόηση της αναφοράς ροής του Lighthouse",helpLabel:"Κατανόηση των ροών",helpUseCaseInstructionNavigation:"Χρησιμοποιήστε τις αναφορές των αναφορών πλοήγησης για να...",helpUseCaseInstructionSnapshot:"Χρησιμοποιήστε τις αναφορές Snapshot για να...",helpUseCaseInstructionTimespan:"Χρησιμοποιήστε τις αναφορές χρονικού διαστήματος για να...",helpUseCaseNavigation1:"Λάβετε μια βαθμολογία απόδοσης του Lighthouse.",helpUseCaseNavigation2:"Υπολογίσετε τις μετρήσεις απόδοσης φόρτωσης σελίδας, όπως Μεγαλύτερη σχεδίαση με περιεχόμενο και Ευρετήριο ταχύτητας.",helpUseCaseNavigation3:"Αξιολογήσετε τις δυνατότητες προηγμένων εφαρμογών ιστού.",helpUseCaseSnapshot1:"Εντοπίσετε ζητήματα προσβασιμότητας σε εφαρμογές μίας σελίδας ή σύνθετες φόρμες.",helpUseCaseSnapshot2:"Αξιολογήσετε τις βέλτιστες πρακτικές των μενού και στοιχείων διεπαφής χρήστη που κρύβονται πίσω από αλληλεπιδράσεις.",helpUseCaseTimespan1:"Μετρήσετε τις αλλαγές διάταξης και τον χρόνο εκτέλεσης JavaScript σε μια σειρά αλληλεπιδράσεων.",helpUseCaseTimespan2:"Ανακαλύψετε ευκαιρίες απόδοσης για να βελτιώσετε την εμπειρία για σελίδες μεγάλης διάρκειας και εφαρμογές μίας σελίδας.",highestImpact:"Υψηλότερος αντίκτυπος",informativeAuditCount:"{numInformative,plural, =1{{numInformative} πληροφοριακός έλεγχος}other{{numInformative} πληροφοριακοί έλεγχοι}}",mobile:"Κινητό",navigationDescription:"Φόρτωση σελίδας",navigationLongDescription:"Οι αναφορές πλοήγησης αναλύουν τη φόρτωση μίας σελίδας, ακριβώς όπως οι πρωτότυπες αναφορές του Lighthouse.",navigationReport:"Αναφορά πλοήγησης",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} αναφορά πλοήγησης}other{{numNavigation} αναφορές πλοήγησης}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} έλεγχος που μπορεί να ολοκληρωθεί}other{{numPassableAudits} έλεγχοι που μπορούν να ολοκληρωθούν}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} έλεγχος ολοκληρώθηκε}other{{numPassed} έλεγχοι ολοκληρώθηκαν}}",ratingAverage:"Μέτρια",ratingError:"Σφάλμα",ratingFail:"Χαμηλή",ratingPass:"Καλή",save:"Αποθήκευση",snapshotDescription:"Καταγεγραμμένη κατάσταση σελίδας",snapshotLongDescription:"Οι αναφορές Snapshot αναλύουν τη σελίδα σε μια συγκεκριμένη κατάσταση, συνήθως μετά από αλληλεπιδράσεις χρηστών.",snapshotReport:"Αναφορά σύνοψης",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} αναφορά σύνοψης}other{{numSnapshot} αναφορές σύνοψης}}",summary:"Σύνοψη",timespanDescription:"Αλληλεπιδράσεις χρήστη",timespanLongDescription:"Οι αναφορές χρονικού διαστήματος αναλύουν μια τυχαία χρονική περίοδο, η οποία συνήθως περιέχει αλληλεπιδράσεις χρηστών.",timespanReport:"Αναφορά χρονικού διαστήματος",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} αναφορά χρονικού διαστήματος}other{{numTimespan} αναφορές χρονικού διαστήματος}}",title:"Αναφορά ροής χρήστη Lighthouse"},"en-XA":{allReports:"[Åļļ Ŕéþöŕţš one two]",categories:"[Çåţéĝöŕîéš one two]",categoryAccessibility:"[Åççéššîбîļîţý one two]",categoryBestPractices:"[Бéšţ Þŕåçţîçéš one two]",categoryPerformance:"[Þéŕƒöŕmåñçé one two]",categorySeo:"[ŠÉÖ one]",desktop:"[Ðéšķţöþ one]",helpDialogTitle:"[Ûñðéŕšţåñðîñĝ ţĥé Ļîĝĥţĥöûšé Fļöŵ Ŕéþöŕţ one two three four five six seven eight]",helpLabel:"[Ûñðéŕšţåñðîñĝ Fļöŵš one two three]",helpUseCaseInstructionNavigation:"[Ûšé Ñåvîĝåţîöñ ŕéþöŕţš ţö... one two three four five six]",helpUseCaseInstructionSnapshot:"[Ûšé Šñåþšĥöţ ŕéþöŕţš ţö... one two three four five six]",helpUseCaseInstructionTimespan:"[Ûšé Ţîméšþåñ ŕéþöŕţš ţö... one two three four five six]",helpUseCaseNavigation1:"[Öбţåîñ å Ļîĝĥţĥöûšé Þéŕƒöŕmåñçé šçöŕé. one two three four five six seven eight]",helpUseCaseNavigation2:"[Méåšûŕé þåĝé ļöåð Þéŕƒöŕmåñçé méţŕîçš šûçĥ åš Ļåŕĝéšţ Çöñţéñţƒûļ Þåîñţ åñð Šþééð Îñðéx. one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen]",helpUseCaseNavigation3:"[Åššéšš Þŕöĝŕéššîvé Ŵéб Åþþ çåþåбîļîţîéš. one two three four five six seven eight]",helpUseCaseSnapshot1:"[Fîñð åççéššîбîļîţý îššûéš îñ šîñĝļé þåĝé åþþļîçåţîöñš öŕ çömþļéx ƒöŕmš. one two three four five six seven eight nine ten eleven twelve thirteen]",helpUseCaseSnapshot2:"[Évåļûåţé бéšţ þŕåçţîçéš öƒ méñûš åñð ÛÎ éļéméñţš ĥîððéñ бéĥîñð îñţéŕåçţîöñ. one two three four five six seven eight nine ten eleven twelve thirteen fourteen]",helpUseCaseTimespan1:"[Méåšûŕé ļåýöûţ šĥîƒţš åñð ĴåvåŠçŕîþţ éxéçûţîöñ ţîmé öñ å šéŕîéš öƒ îñţéŕåçţîöñš. one two three four five six seven eight nine ten eleven twelve thirteen fourteen]",helpUseCaseTimespan2:"[Ðîšçövéŕ þéŕƒöŕmåñçé öþþöŕţûñîţîéš ţö îmþŕövé ţĥé éxþéŕîéñçé ƒöŕ ļöñĝ-ļîvéð þåĝéš åñð šîñĝļé-þåĝé åþþļîçåţîöñš. one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen]",highestImpact:"[Ĥîĝĥéšţ îmþåçţ one two]",informativeAuditCount:"{numInformative,plural, =1{[ᐅ{numInformative}ᐊ îñƒöŕmåţîvé åûðîţ one two three four five]}other{[ᐅ{numInformative}ᐊ îñƒöŕmåţîvé åûðîţš one two three four five]}}",mobile:"[Möбîļé one]",navigationDescription:"[Þåĝé ļöåð one two]",navigationLongDescription:"[Ñåvîĝåţîöñ ŕéþöŕţš åñåļýžé å šîñĝļé þåĝé ļöåð, éxåçţļý ļîķé ţĥé öŕîĝîñåļ Ļîĝĥţĥöûšé ŕéþöŕţš. one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen]",navigationReport:"[Ñåvîĝåţîöñ ŕéþöŕţ one two three]",navigationReportCount:"{numNavigation,plural, =1{[ᐅ{numNavigation}ᐊ ñåvîĝåţîöñ ŕéþöŕţ one two three four five]}other{[ᐅ{numNavigation}ᐊ ñåvîĝåţîöñ ŕéþöŕţš one two three four five]}}",passableAuditCount:"{numPassableAudits,plural, =1{[ᐅ{numPassableAudits}ᐊ þåššåбļé åûðîţ one two three four]}other{[ᐅ{numPassableAudits}ᐊ þåššåбļé åûðîţš one two three four]}}",passedAuditCount:"{numPassed,plural, =1{[ᐅ{numPassed}ᐊ åûðîţ þåššéð one two three four]}other{[ᐅ{numPassed}ᐊ åûðîţš þåššéð one two three four]}}",ratingAverage:"[Åvéŕåĝé one]",ratingError:"[Éŕŕöŕ one]",ratingFail:"[Þööŕ one]",ratingPass:"[Ĝööð one]",save:"[Šåvé one]",snapshotDescription:"[Çåþţûŕéð šţåţé öƒ þåĝé one two three four five]",snapshotLongDescription:"[Šñåþšĥöţ ŕéþöŕţš åñåļýžé ţĥé þåĝé îñ å þåŕţîçûļåŕ šţåţé, ţýþîçåļļý åƒţéŕ ûšéŕ îñţéŕåçţîöñš. one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen]",snapshotReport:"[Šñåþšĥöţ ŕéþöŕţ one two]",snapshotReportCount:"{numSnapshot,plural, =1{[ᐅ{numSnapshot}ᐊ šñåþšĥöţ ŕéþöŕţ one two three four]}other{[ᐅ{numSnapshot}ᐊ šñåþšĥöţ ŕéþöŕţš one two three four five]}}",summary:"[Šûmmåŕý one]",timespanDescription:"[Ûšéŕ îñţéŕåçţîöñš one two three]",timespanLongDescription:"[Ţîméšþåñ ŕéþöŕţš åñåļýžé åñ åŕбîţŕåŕý þéŕîöð öƒ ţîmé, ţýþîçåļļý çöñţåîñîñĝ ûšéŕ îñţéŕåçţîöñš. one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen]",timespanReport:"[Ţîméšþåñ ŕéþöŕţ one two]",timespanReportCount:"{numTimespan,plural, =1{[ᐅ{numTimespan}ᐊ ţîméšþåñ ŕéþöŕţ one two three four]}other{[ᐅ{numTimespan}ᐊ ţîméšþåñ ŕéþöŕţš one two three four five]}}",title:"[Ļîĝĥţĥöûšé Ûšéŕ Fļöŵ Ŕéþöŕţ one two three four five six]"},"en-XL":{allReports:"Âĺl̂ Ŕêṕôŕt̂ś",categories:"Ĉát̂éĝór̂íêś",categoryAccessibility:"Âćĉéŝśîb́îĺît́ŷ",categoryBestPractices:"B̂éŝt́ P̂ŕâćt̂íĉéŝ",categoryPerformance:"P̂ér̂f́ôŕm̂án̂ćê",categorySeo:"ŜÉÔ",desktop:"D̂éŝḱt̂óp̂",helpDialogTitle:"Ûńd̂ér̂śt̂án̂d́îńĝ t́ĥé L̂íĝh́t̂h́ôúŝé F̂ĺôẃ R̂ép̂ór̂t́",helpLabel:"Ûńd̂ér̂śt̂án̂d́îńĝ F́l̂óŵś",helpUseCaseInstructionNavigation:"Ûśê Ńâv́îǵât́îón̂ ŕêṕôŕt̂ś t̂ó...",helpUseCaseInstructionSnapshot:"Ûśê Śn̂áp̂śĥót̂ ŕêṕôŕt̂ś t̂ó...",helpUseCaseInstructionTimespan:"Ûśê T́îḿêśp̂án̂ ŕêṕôŕt̂ś t̂ó...",helpUseCaseNavigation1:"Ôb́t̂áîń â Ĺîǵĥt́ĥóûśê Ṕêŕf̂ór̂ḿâńĉé ŝćôŕê.",helpUseCaseNavigation2:"M̂éâśûŕê ṕâǵê ĺôád̂ Ṕêŕf̂ór̂ḿâńĉé m̂ét̂ŕîćŝ śûćĥ áŝ Ĺâŕĝéŝt́ Ĉón̂t́êńt̂f́ûĺ P̂áîńt̂ án̂d́ Ŝṕêéd̂ Ín̂d́êx́.",helpUseCaseNavigation3:"Âśŝéŝś P̂ŕôǵr̂éŝśîv́ê Ẃêb́ Âṕp̂ ćâṕâb́îĺît́îéŝ.",helpUseCaseSnapshot1:"F̂ín̂d́ âćĉéŝśîb́îĺît́ŷ íŝśûéŝ ín̂ śîńĝĺê ṕâǵê áp̂ṕl̂íĉát̂íôńŝ ór̂ ćôḿp̂ĺêx́ f̂ór̂ḿŝ.",helpUseCaseSnapshot2:"Êv́âĺûát̂é b̂éŝt́ p̂ŕâćt̂íĉéŝ óf̂ ḿêńûś âńd̂ ÚÎ él̂ém̂én̂t́ŝ h́îd́d̂én̂ b́êh́îńd̂ ín̂t́êŕâćt̂íôń.",helpUseCaseTimespan1:"M̂éâśûŕê ĺâýôút̂ śĥíf̂t́ŝ án̂d́ Ĵáv̂áŜćr̂íp̂t́ êx́êćût́îón̂ t́îḿê ón̂ á ŝér̂íêś ôf́ îńt̂ér̂áĉt́îón̂ś.",helpUseCaseTimespan2:"D̂íŝćôv́êŕ p̂ér̂f́ôŕm̂án̂ćê óp̂ṕôŕt̂ún̂ít̂íêś t̂ó îḿp̂ŕôv́ê t́ĥé êx́p̂ér̂íêńĉé f̂ór̂ ĺôńĝ-ĺîv́êd́ p̂áĝéŝ án̂d́ ŝín̂ǵl̂é-p̂áĝé âṕp̂ĺîćât́îón̂ś.",highestImpact:"Ĥíĝh́êśt̂ ím̂ṕâćt̂",informativeAuditCount:`{numInformative, plural,
    =1 {{numInformative} îńf̂ór̂ḿât́îv́ê áûd́ît́}
    other {{numInformative} îńf̂ór̂ḿât́îv́ê áûd́ît́ŝ}
  }`,mobile:"M̂ób̂íl̂é",navigationDescription:"P̂áĝé l̂óâd́",navigationLongDescription:"N̂áv̂íĝát̂íôń r̂ép̂ór̂t́ŝ án̂ál̂ýẑé â śîńĝĺê ṕâǵê ĺôád̂, éx̂áĉt́l̂ý l̂ík̂é t̂h́ê ór̂íĝín̂ál̂ Ĺîǵĥt́ĥóûśê ŕêṕôŕt̂ś.",navigationReport:"N̂áv̂íĝát̂íôń r̂ép̂ór̂t́",navigationReportCount:`{numNavigation, plural,
    =1 {{numNavigation} n̂áv̂íĝát̂íôń r̂ép̂ór̂t́}
    other {{numNavigation} n̂áv̂íĝát̂íôń r̂ép̂ór̂t́ŝ}
  }`,passableAuditCount:`{numPassableAudits, plural,
    =1 {{numPassableAudits} p̂áŝśâb́l̂é âúd̂ít̂}
    other {{numPassableAudits} ṕâśŝáb̂ĺê áûd́ît́ŝ}
  }`,passedAuditCount:`{numPassed, plural,
    =1 {{numPassed} âúd̂ít̂ ṕâśŝéd̂}
    other {{numPassed} áûd́ît́ŝ ṕâśŝéd̂}
  }`,ratingAverage:"Âv́êŕâǵê",ratingError:"Êŕr̂ór̂",ratingFail:"P̂óôŕ",ratingPass:"Ĝóôd́",save:"Ŝáv̂é",snapshotDescription:"Ĉáp̂t́ûŕêd́ ŝt́ât́ê óf̂ ṕâǵê",snapshotLongDescription:"Ŝńâṕŝh́ôt́ r̂ép̂ór̂t́ŝ án̂ál̂ýẑé t̂h́ê ṕâǵê ín̂ á p̂ár̂t́îćûĺâŕ ŝt́ât́ê, t́ŷṕîćâĺl̂ý âf́t̂ér̂ úŝér̂ ín̂t́êŕâćt̂íôńŝ.",snapshotReport:"Ŝńâṕŝh́ôt́ r̂ép̂ór̂t́",snapshotReportCount:`{numSnapshot, plural,
    =1 {{numSnapshot} ŝńâṕŝh́ôt́ r̂ép̂ór̂t́}
    other {{numSnapshot} ŝńâṕŝh́ôt́ r̂ép̂ór̂t́ŝ}
  }`,summary:"Ŝúm̂ḿâŕŷ",timespanDescription:"Ûśêŕ îńt̂ér̂áĉt́îón̂ś",timespanLongDescription:"T̂ím̂éŝṕâń r̂ép̂ór̂t́ŝ án̂ál̂ýẑé âń âŕb̂ít̂ŕâŕŷ ṕêŕîód̂ óf̂ t́îḿê, t́ŷṕîćâĺl̂ý ĉón̂t́âín̂ín̂ǵ ûśêŕ îńt̂ér̂áĉt́îón̂ś.",timespanReport:"T̂ím̂éŝṕâń r̂ép̂ór̂t́",timespanReportCount:`{numTimespan, plural,
    =1 {{numTimespan} t̂ím̂éŝṕâń r̂ép̂ór̂t́}
    other {{numTimespan} t̂ím̂éŝṕâń r̂ép̂ór̂t́ŝ}
  }`,title:"L̂íĝh́t̂h́ôúŝé Ûśêŕ F̂ĺôẃ R̂ép̂ór̂t́"},es:{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Prácticas recomendadas",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Ordenador",helpDialogTitle:"Interpretar los informes de flujo de Lighthouse",helpLabel:"Interpretar flujos",helpUseCaseInstructionNavigation:"Usa los informes de navegación para...",helpUseCaseInstructionSnapshot:"Usa los informes de un instante para...",helpUseCaseInstructionTimespan:"Usa los informes de tiempo para...",helpUseCaseNavigation1:"Obtener una puntuación del rendimiento de Lighthouse.",helpUseCaseNavigation2:"Medir métricas de rendimiento de carga de la página, como el renderizado del mayor elemento con contenido y el Speed Index.",helpUseCaseNavigation3:"Evaluar las funciones de una aplicación web progresiva.",helpUseCaseSnapshot1:"Detectar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar las prácticas recomendadas para los menús y los elementos de interfaz de usuario ocultos tras las interacciones.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en páginas de larga duración y en aplicaciones de página única.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Móvil",navigationDescription:"Carga de la página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, exactamente igual que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría aceptable}other{{numPassableAudits} auditorías aceptables}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría superada}other{{numPassed} auditorías superadas}}",ratingAverage:"Ni buena ni mala",ratingError:"Error",ratingFail:"Mala",ratingPass:"Buena",save:"Guardar",snapshotDescription:"Captura del estado de la página",snapshotLongDescription:"Los informes de un instante analizan la página en un estado concreto, normalmente tras las interacciones de los usuarios.",snapshotReport:"Informe de un instante",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un instante}other{{numSnapshot} informes de un instante}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de tiempo analizan un periodo de tiempo arbitrario, que normalmente contiene interacciones de usuario.",timespanReport:"Informe de tiempo",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe de tiempo}other{{numTimespan} informes de tiempo}}",title:"Informe de flujo de usuarios de Lighthouse"},"es-419":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-AR":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-BO":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-BR":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-BZ":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-CL":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-CO":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-CR":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-CU":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-DO":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-EC":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-GT":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-HN":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-MX":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-NI":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-PA":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-PE":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-PR":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-PY":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-SV":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-US":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-UY":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},"es-VE":{allReports:"Todos los informes",categories:"Categorías",categoryAccessibility:"Accesibilidad",categoryBestPractices:"Recomendaciones",categoryPerformance:"Rendimiento",categorySeo:"SEO",desktop:"Escritorio",helpDialogTitle:"Explicación del informe de flujos de Lighthouse",helpLabel:"Explicación de flujos",helpUseCaseInstructionNavigation:"Utilizar los informes de navegación para…",helpUseCaseInstructionSnapshot:"Utilizar los informes de instantáneas para…",helpUseCaseInstructionTimespan:"Utilizar los informes de períodos para…",helpUseCaseNavigation1:"Obtener una puntuación de rendimiento de Lighthouse.",helpUseCaseNavigation2:"Obtener métricas de rendimiento de carga de páginas, como el Procesamiento de imagen con contenido más grande y el índice de velocidad.",helpUseCaseNavigation3:"Evaluar las capacidades de las apps web progresivas.",helpUseCaseSnapshot1:"Encontrar problemas de accesibilidad en aplicaciones de página única o formularios complejos.",helpUseCaseSnapshot2:"Evaluar prácticas recomendadas de menús y elementos de la IU ocultos detrás de la interacción.",helpUseCaseTimespan1:"Medir los cambios de diseño y el tiempo de ejecución de JavaScript en una serie de interacciones.",helpUseCaseTimespan2:"Descubrir oportunidades de rendimiento para mejorar la experiencia en aplicaciones de página única y en páginas abiertas por largo tiempo.",highestImpact:"Mayor impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoría informativa}other{{numInformative} auditorías informativas}}",mobile:"Para dispositivos móviles",navigationDescription:"Carga de página",navigationLongDescription:"Los informes de navegación analizan la carga de una sola página, de la misma manera que los informes originales de Lighthouse.",navigationReport:"Informe de navegación",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} informe de navegación}other{{numNavigation} informes de navegación}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoría con posibilidades de aprobar}other{{numPassableAudits} auditorías con posibilidades de aprobar}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoría aprobada}other{{numPassed} auditorías aprobadas}}",ratingAverage:"Promedio",ratingError:"Error",ratingFail:"Deficiente",ratingPass:"Bueno",save:"Guardar",snapshotDescription:"Estado de la página en un momento específico",snapshotLongDescription:"Los informes de instantáneas analizan la página en un estado particular, por lo general, después de las interacciones de un usuario.",snapshotReport:"Informe de un momento específico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} informe de un momento específico}other{{numSnapshot} informes de un momento específico}}",summary:"Resumen",timespanDescription:"Interacciones del usuario",timespanLongDescription:"Los informes de períodos analizan un período arbitrario, el cual por lo general incluye interacciones de los usuarios.",timespanReport:"Informe del período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} informe del período}other{{numTimespan} informes del período}}",title:"Informe del flujo de usuarios de Lighthouse"},fi:{allReports:"Kaikki raportit",categories:"Kategoriat",categoryAccessibility:"Esteettömyys",categoryBestPractices:"Parhaat käytännöt",categoryPerformance:"Tehokkuus",categorySeo:"Hakukoneoptimointi",desktop:"Tietokone",helpDialogTitle:"Lighthousen käyttökulkuraportin tulkitseminen",helpLabel:"Tietoja käyttökuluista",helpUseCaseInstructionNavigation:"Käytä navigointiraportteja näihin tarkoituksiin:",helpUseCaseInstructionSnapshot:"Käytä Snapshotia näihin tarkoituksiin:",helpUseCaseInstructionTimespan:"Käytä aikajanaraportteja näihin tarkoituksiin:",helpUseCaseNavigation1:"Nouda Lighthouse-suorituskykyprosentti.",helpUseCaseNavigation2:"Mittaa sivulatauksia sivun latautumisajan ja nopeusindeksin kaltaisilla mittareilla.",helpUseCaseNavigation3:"Arvioi progressiivisten web-sovellusten ominaisuuksia.",helpUseCaseSnapshot1:"Löydä esteettömyysongelmia yhden sivun sovelluksista tai monimutkaisista muodoista.",helpUseCaseSnapshot2:"Arvioi toiminnan taakse piilotettujen valikoiden ja UI-elementtien parhaita käytäntöjä.",helpUseCaseTimespan1:"Mittaa asettelun muutoksia ja JavaScriptin suoritusaikoja toimintasarjoissa.",helpUseCaseTimespan2:"Tutustu tapoihin, joilla voit parantaa pitkäaikaisten sivujen ja yhden sivun sovellusten käyttökokemusta.",highestImpact:"Suurin vaikutus",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informatiivinen tarkastus}other{{numInformative} informatiivista tarkastusta}}",mobile:"Mobiili",navigationDescription:"Sivun lataaminen",navigationLongDescription:"Navigointiraporteissa analysoidaan yksi sivun lataus, aivan kuten alkuperäisissä Lighthouse-raporteissa.",navigationReport:"Navigointiraportti",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigointiraportti}other{{numNavigation} navigointiraporttia}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} läpäistävissä oleva tarkastus}other{{numPassableAudits} läpäistävissä olevaa tarkastusta}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} tarkastus läpäisty}other{{numPassed} tarkastusta läpäisty}}",ratingAverage:"Keskimääräinen",ratingError:"Virhe",ratingFail:"Huono",ratingPass:"Hyvä",save:"Tallenna",snapshotDescription:"Sivun kuvakaappaustila",snapshotLongDescription:"Snapshot-raporteissa analysoidaan sivua tietyssä tilassa, yleensä käyttäjien toiminnan jälkeen.",snapshotReport:"Tilannekuvaraportti",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} tilannekuvaraportti}other{{numSnapshot} tilannekuvaraporttia}}",summary:"Yhteenveto",timespanDescription:"Käyttäjän toiminta",timespanLongDescription:"Aikaväliraporteissa analysoidaan satunnainen ajanjakso, joka yleensä sisältää käyttäjien toimintaa.",timespanReport:"Aikaväliraportti",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} aikajanaraportti}other{{numTimespan} aikajanaraporttia}}",title:"Lighthousen käyttökulkuraportti"},fil:{allReports:"Lahat ng Ulat",categories:"Mga Kategorya",categoryAccessibility:"Pagiging accessible",categoryBestPractices:"Pinakamahuhusay na Kagawian",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Pag-unawa sa Ulat ng Daloy ng Lighthouse",helpLabel:"Pag-unawa sa Mga Daloy",helpUseCaseInstructionNavigation:"Gamitin ang Mga ulat ng pag-navigate para...",helpUseCaseInstructionSnapshot:"Gamitin ang Mga ulat ng snapshot para...",helpUseCaseInstructionTimespan:"Gamitin ang Mga ulat ng tagal ng panahon para...",helpUseCaseNavigation1:"Makakuha ng score sa Performance sa Lighthouse.",helpUseCaseNavigation2:"Sukatin ang mga sukatan ng Performance ng pag-load ng page gaya ng Largest Contentful Paint at Speed Index.",helpUseCaseNavigation3:"Suriin ang mga kakayahan ng Progressive Web App.",helpUseCaseSnapshot1:"Maghanap ng mga isyu sa accessibility sa mga single page application o kumplikadong form.",helpUseCaseSnapshot2:"Suriin ang mga pinakamahuhusay na kagawian ng mga menu at element ng UI na nakatago sa likod ng pakikipag-ugnayan.",helpUseCaseTimespan1:"Sukatin ang mga pagbabago sa layout at tagal ng pag-execute sa JavaScript sa isang serye ng mga pakikipag-ugnayan.",helpUseCaseTimespan2:"Tumuklas ng mga pagkakataon sa performance para pagandahin ang karanasan para sa mga long-lived na page at single-page application.",highestImpact:"Pinakamalaking epekto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} audit na nagbibigay ng impormasyon}one{{numInformative} audit na nagbibigay ng impormasyon}other{{numInformative} na audit na nagbibigay ng impormasyon}}",mobile:"Mobile",navigationDescription:"Pag-load ng page",navigationLongDescription:"Nagsusuri ang mga ulat ng pag-navigate ng isang pag-load ng page, na eksaktong kagaya ng mga orihinal na ulat ng Lighthouse.",navigationReport:"Ulat ng pag-navigate",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} ulat ng pag-navigate}one{{numNavigation} ulat ng pag-navigate}other{{numNavigation} na ulat ng pag-navigate}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} maipapasang audit}one{{numPassableAudits} maipapasang audit}other{{numPassableAudits} na maipapasang audit}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit ang pumasa}one{{numPassed} audit ang pumasa}other{{numPassed} na audit ang pumasa}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Pangit",ratingPass:"Maganda",save:"I-save",snapshotDescription:"Na-capture na status ng page",snapshotLongDescription:"Sinusuri ng mga ulat ng snapshot ang page sa isang partikular na status, na karaniwang pagkatapos ng mga pakikipag-ugnayan ng user.",snapshotReport:"Ulat ng snapshot",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} ulat ng snapshot}one{{numSnapshot} ulat ng snapshot}other{{numSnapshot} na ulat ng snapshot}}",summary:"Buod",timespanDescription:"Mga pakikipag-ugnayan ng user",timespanLongDescription:"Nagsusuri ang mga ulat ng tagal ng panahon ng abitrary na yugto ng panahon, na karaniwang naglalaman ng mga pakikipag-ugnayan ng user.",timespanReport:"Ulat ng tagal ng panahon",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} ulat ng tagal ng panahon}one{{numTimespan} ulat ng tagal ng panahon}other{{numTimespan} na ulat ng tagal ng panahon}}",title:"Ulat ng Daloy ng User ng Lighthouse"},fr:{allReports:"Tous les rapports",categories:"Catégories",categoryAccessibility:"Accessibilité",categoryBestPractices:"Bonnes pratiques",categoryPerformance:"Performances",categorySeo:"SEO",desktop:"Bureau",helpDialogTitle:"Comprendre le rapport Lighthouse sur les flux",helpLabel:"Comprendre les flux",helpUseCaseInstructionNavigation:"Utiliser les rapports sur la navigation pour…",helpUseCaseInstructionSnapshot:"Utiliser les rapports sur un instantané pour…",helpUseCaseInstructionTimespan:"Utiliser les rapports sur la période pour…",helpUseCaseNavigation1:"Obtenir un score de performances Lighthouse.",helpUseCaseNavigation2:"Mesurer les métriques liées aux performances de chargement des pages comme Largest Contentful Paint et Speed Index.",helpUseCaseNavigation3:"Évaluer les fonctionnalités des progressive web apps.",helpUseCaseSnapshot1:"Identifier des problèmes d'accessibilité dans les applis monopages ou les formulaires complexes.",helpUseCaseSnapshot2:"Évaluer les bonnes pratiques concernant les menus et les éléments d'UI cachés derrière l'interaction.",helpUseCaseTimespan1:"Mesurer les décalages de mise en page et le délai d'exécution de JavaScript dans une série d'interactions.",helpUseCaseTimespan2:"Découvrir des opportunités de performances pour améliorer l'expérience utilisateur concernant les pages de longue durée et les applis Web monopages.",highestImpact:"Impact maximal",informativeAuditCount:"{numInformative,plural, =1{{numInformative} audit informatif}one{{numInformative} audit informatif}other{{numInformative} audits informatifs}}",mobile:"Mobile",navigationDescription:"Chargement de page",navigationLongDescription:"À l'instar des rapports Lighthouse d'origine, les rapports sur la navigation analysent le chargement d'une seule page.",navigationReport:"Rapport sur la navigation",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} rapport sur la navigation}one{{numNavigation} rapport sur la navigation}other{{numNavigation} rapports sur la navigation}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} audit réalisable}one{{numPassableAudits} audit réalisable}other{{numPassableAudits} audits réalisables}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit réussi}one{{numPassed} audit réussi}other{{numPassed} audits réussis}}",ratingAverage:"Moyenne",ratingError:"Erreur",ratingFail:"Mauvaise",ratingPass:"Bonne",save:"Enregistrer",snapshotDescription:"État capturé de la page",snapshotLongDescription:"Les rapports sur un instantané analysent la page à un moment donné, généralement après des interactions d'utilisateurs.",snapshotReport:"Rapport sur un instantané",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} rapport sur un instantané}one{{numSnapshot} rapport sur un instantané}other{{numSnapshot} rapports sur un instantané}}",summary:"Résumé",timespanDescription:"Interactions des utilisateurs",timespanLongDescription:"Les rapports sur la période analysent une période arbitraire, contenant généralement des interactions d'utilisateurs.",timespanReport:"Rapport sur la période",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} rapport sur la période}one{{numTimespan} rapport sur la période}other{{numTimespan} rapports sur la période}}",title:"Rapport sur le flux d'utilisateurs Lighthouse"},he:{allReports:"כל הדוחות",categories:"קטגוריות",categoryAccessibility:"נגישות",categoryBestPractices:"שיטות מומלצות",categoryPerformance:"ביצועים",categorySeo:"אופטימיזציה למנועי חיפוש",desktop:"מחשבים",helpDialogTitle:"הסבר על דוח התהליכים של Lighthouse",helpLabel:"הסבר על תהליכים",helpUseCaseInstructionNavigation:"שימוש בדוחות ניווט לצורך...",helpUseCaseInstructionSnapshot:"שימוש בדוחות של תמונת מצב לצורך...",helpUseCaseInstructionTimespan:"שימוש בדוחות של טווח זמן לצורך...",helpUseCaseNavigation1:"קבלת ציון לגבי ביצועי Lighthouse.",helpUseCaseNavigation2:"בדיקת מדדי ביצועים של טעינת דפים כמו Largest Contentful Paint ‏(LCP) ו-Speed Index.",helpUseCaseNavigation3:"הערכת יכולות של Progressive Web App.",helpUseCaseSnapshot1:"איתור של בעיות נגישות באפליקציות שכוללות דף יחיד או בטפסים מורכבים.",helpUseCaseSnapshot2:"הערכת שיטות מומלצות הקשורות לתפריטים ולרכיבים בממשק המשתמש שמוסתרים עקב ביצוע אינטראקציה.",helpUseCaseTimespan1:"מדידה של שינויי פריסה וזמן ריצה של JavaScript במסגרת סדרת אינטראקציות.",helpUseCaseTimespan2:"גילוי הזדמנויות הקשורות לביצועים כדי לשפר את חוויית המשתמש בדפים שפתוחים זמן רב ובאפליקציות שכוללות דף יחיד.",highestImpact:"הכי הרבה השפעה",informativeAuditCount:"{numInformative,plural, =1{ביקורת אינפורמטיבית אחת ({numInformative})}one{‫{numInformative} ביקורות אינפורמטיביות}two{‫{numInformative} ביקורות אינפורמטיביות}other{‫{numInformative} ביקורות אינפורמטיביות}}",mobile:"ניידים",navigationDescription:"טעינת דף",navigationLongDescription:"דוחות ניווט מיועדים לניתוח של טעינת דף יחידה, בדיוק כמו דוחות Lighthouse המקוריים.",navigationReport:"דוח לגבי ניווט",navigationReportCount:"{numNavigation,plural, =1{דוח אחד ({numNavigation}) לגבי ניווט}one{‫{numNavigation} דוחות לגבי ניווט}two{‫{numNavigation} דוחות לגבי ניווט}other{‫{numNavigation} דוחות לגבי ניווט}}",passableAuditCount:"{numPassableAudits,plural, =1{ביקורת עוברת אחת ({numPassableAudits})}one{‫{numPassableAudits} ביקורות עוברות}two{‫{numPassableAudits} ביקורות עוברות}other{‫{numPassableAudits} ביקורות עוברות}}",passedAuditCount:"{numPassed,plural, =1{ביקורת אחת ({numPassed}) עברה}one{‫{numPassed} ביקורות עברו}two{‫{numPassed} ביקורות עברו}other{‫{numPassed} ביקורות עברו}}",ratingAverage:"ממוצעת",ratingError:"שגיאה",ratingFail:"גרועה",ratingPass:"טובה",save:"שמירה",snapshotDescription:"מצב דף בנקודת זמן",snapshotLongDescription:"דוחות של תמונת מצב מיועדים לניתוח הדף במצב מסוים. לרוב, הניתוח מתבצע לאחר אינטראקציות של משתמשים.",snapshotReport:"דוח תמונת מצב",snapshotReportCount:"{numSnapshot,plural, =1{דוח תמונת מצב אחד ({numSnapshot})}one{‫{numSnapshot} דוחות תמונת מצב}two{‫{numSnapshot} דוחות תמונת מצב}other{‫{numSnapshot} דוחות תמונת מצב}}",summary:"סיכום",timespanDescription:"אינטראקציות של משתמשים",timespanLongDescription:"דוחות של טווח זמן מיועדים לניתוח של משך זמן אקראי, שלרוב מתרחשות בו אינטראקציות של משתמש.",timespanReport:"דוח על טווח זמן",timespanReportCount:"{numTimespan,plural, =1{דוח אחד ({numTimespan}) על טווח זמן}one{‫{numTimespan} דוחות על טווח זמן}two{‫{numTimespan} דוחות על טווח זמן}other{‫{numTimespan} דוחות על טווח זמן}}",title:"דוח Lighthouse על מסלולי משתמשים בדף"},hi:{allReports:"सभी रिपोर्ट",categories:"कैटगरी",categoryAccessibility:"सुलभता",categoryBestPractices:"सबसे अच्छे तरीके",categoryPerformance:"परफ़ॉर्मेंस",categorySeo:"SEO",desktop:"डेस्कटॉप",helpDialogTitle:"लाइटहाउस फ़्लो रिपोर्ट को समझें",helpLabel:"फ़्लो रिपोर्ट को समझें",helpUseCaseInstructionNavigation:"इसके लिए नेविगेशन रिपोर्ट का इस्तेमाल करें...",helpUseCaseInstructionSnapshot:"इसके लिए स्नैपशॉट रिपोर्ट का इस्तेमाल करें...",helpUseCaseInstructionTimespan:"इसके लिए टाइमस्पैन रिपोर्ट का इस्तेमाल करें...",helpUseCaseNavigation1:"लाइटहाउस परफ़ॉर्मेंस स्कोर हासिल करें.",helpUseCaseNavigation2:"सबसे बड़ा कॉन्टेंटफ़ुल पेंट और स्पीड इंडेक्स जैसी पेज लोड की परफ़ॉर्मेंस मेट्रिक का आकलन करें.",helpUseCaseNavigation3:"प्रोग्रेसिव वेब ऐप्लिकेशन की क्षमताओं का आकलन करें.",helpUseCaseSnapshot1:"एक पेज के ऐप्लिकेशन या जटिल फ़ॉर्म में, सुलभता से जुड़ी समस्याएं ढूंढें.",helpUseCaseSnapshot2:"इंटरैक्शन के पीछे छिपे हुए मेन्यू और यूज़र इंटरफ़ेस (यूआई) एलिमेंट के सबसे सही तरीकों का आकलन करें.",helpUseCaseTimespan1:"कई इंटरैक्शन पर, लेआउट में हुए बदलाव और JavaScript लागू होने का समय मापें.",helpUseCaseTimespan2:"लंबे समय तक इस्तेमाल किए वाले पेजों और एक पेज के ऐप्लिकेशन के अनुभव को बेहतर बनाने के लिए, परफ़ॉर्मेंस से जुड़े अवसरों के बारे में जानें.",highestImpact:"सबसे असरदार ऑडिट",informativeAuditCount:"{numInformative,plural, =1{जानकारी देने वाला {numInformative} ऑडिट}one{जानकारी देने वाला {numInformative} ऑडिट}other{जानकारी देने वाले {numInformative} ऑडिट}}",mobile:"मोबाइल",navigationDescription:"पेज लोड",navigationLongDescription:"नेविगेशन रिपोर्ट, मूल लाइटहाउस रिपोर्ट की तरह ही एक पेज लोड का विश्लेषण करती है.",navigationReport:"नेविगेशन रिपोर्ट",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} नेविगेशन रिपोर्ट}one{{numNavigation} नेविगेशन रिपोर्ट}other{{numNavigation} नेविगेशन रिपोर्ट}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} पासेबल ऑडिट}one{{numPassableAudits} पासेबल ऑडिट}other{{numPassableAudits} पासेबल ऑडिट}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} ऑडिट पास किया गया}one{{numPassed} ऑडिट पास किया गया}other{{numPassed} ऑडिट पास किए गए}}",ratingAverage:"ठीक-ठाक",ratingError:"गड़बड़ी",ratingFail:"खराब",ratingPass:"अच्छी",save:"सेव करें",snapshotDescription:"पेज की कैप्चर की गई स्थिति",snapshotLongDescription:"स्नैपशॉट रिपोर्ट किसी खास स्थिति में, खास तौर पर उपयोगकर्ता इंटरैक्शन के बाद पेज का विश्लेषण करती है.",snapshotReport:"किसी खास समय पर, वेब पेज की स्थिति बताने वाली रिपोर्ट",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} स्नैपशॉट रिपोर्ट}one{{numSnapshot} स्नैपशॉट रिपोर्ट}other{{numSnapshot} स्नैपशॉट रिपोर्ट}}",summary:"खास जानकारी",timespanDescription:"उपयोगकर्ता के इंटरैक्शन",timespanLongDescription:"टाइमस्पैन रिपोर्ट किसी भी समय अवधि का, खास तौर पर उपयोगकर्ता इंटरैक्शन वाली समय अवधि का विश्लेषण करती है.",timespanReport:"पेज पर उपयोगकर्ता के इंटरैक्शन की जानकारी देने वाली रिपोर्ट",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} टाइमस्पैन रिपोर्ट}one{{numTimespan} टाइमस्पैन रिपोर्ट}other{{numTimespan} टाइमस्पैन रिपोर्ट}}",title:"Lighthouse की यूज़र फ़्लो रिपोर्ट"},hr:{allReports:"Sva izvješća",categories:"Kategorije",categoryAccessibility:"Pristupačnost",categoryBestPractices:"Najbolji primjeri iz prakse",categoryPerformance:"Izvedba",categorySeo:"SEO",desktop:"Računalo",helpDialogTitle:"Razumijevanje Lighthouseovog izvješća o putovima",helpLabel:"Razumijevanje putova",helpUseCaseInstructionNavigation:"Upotrijebite izvješća o kretanju za...",helpUseCaseInstructionSnapshot:"Upotrijebite izvješća o snimkama za...",helpUseCaseInstructionTimespan:"Upotrijebite izvješća o razdoblju za...",helpUseCaseNavigation1:"dobivanje rezultata izvedbe za Lighthouse",helpUseCaseNavigation2:"mjerenje pokazatelja izvedbe učitavanja stranica kao što su najveće renderiranje sadržaja i indeks brzine",helpUseCaseNavigation3:"procjenu mogućnosti progresivne web-aplikacije",helpUseCaseSnapshot1:"pronalaženje problema s pristupačnošću u jednostraničnim aplikacijama ili složenim obrascima",helpUseCaseSnapshot2:"procjenu najboljih primjera iz prakse za izbornike i elemente korisničkog sučelja skrivene iza interakcije",helpUseCaseTimespan1:"mjerenje pomaka izgleda i vremena izvršavanja JavaScripta u nizu interakcija",helpUseCaseTimespan2:"otkrivanje prilika za izvedbu radi poboljšanja doživljaja za dugotrajne stranice i jednostranične aplikacije",highestImpact:"Najviši utjecaj",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativna revizija}one{{numInformative} informativna revizija}few{{numInformative} informativne revizije}other{{numInformative} informativnih revizija}}",mobile:"Mobilna verzija",navigationDescription:"Učitavanje stranice",navigationLongDescription:"Izvješća o kretanju analiziraju učitavanje jedne stranice, jednako kao i izvorna Lighthouseova izvješća.",navigationReport:"Izvješće o kretanju",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} izvješće o kretanju}one{{numNavigation} izvješće o kretanju}few{{numNavigation} izvješća o kretanju}other{{numNavigation} izvješća o kretanju}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} prolazna revizija}one{{numPassableAudits} prolazna revizija}few{{numPassableAudits} prolazne revizije}other{{numPassableAudits} prolaznih revizija}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} uspješna revizija}one{{numPassed} uspješna revizija}few{{numPassed} uspješne revizije}other{{numPassed} uspješnih revizija}}",ratingAverage:"Prosječno",ratingError:"Pogreška",ratingFail:"Loše",ratingPass:"Dobro",save:"Spremi",snapshotDescription:"Snimljeno stanje stranice",snapshotLongDescription:"Izvješća o snimkama analiziraju stranicu u određenom stanju, obično nakon interakcija korisnika.",snapshotReport:"Izvješće o snimci",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} izvješće o snimci}one{{numSnapshot} izvješće o snimci}few{{numSnapshot} izvješća o snimci}other{{numSnapshot} izvješća o snimci}}",summary:"Sažetak",timespanDescription:"Korisničke interakcije",timespanLongDescription:"Izvješća o razdoblju analiziraju proizvoljno razdoblje, koje obično obuhvaća korisničke interakcije.",timespanReport:"Izvješće o razdoblju",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} izvješće o razdoblju}one{{numTimespan} izvješće o razdoblju}few{{numTimespan} izvješća o razdoblju}other{{numTimespan} izvješća o razdoblju}}",title:"Lighthouseovo izvješće o putovima korisnika"},hu:{allReports:"Az összes jelentés",categories:"Kategóriák",categoryAccessibility:"Kisegítő lehetőségek",categoryBestPractices:"Bevált módszerek",categoryPerformance:"Teljesítmény",categorySeo:"Keresőoptimalizálás",desktop:"Asztali",helpDialogTitle:"A Lighthouse-folyamatjelentés értelmezése",helpLabel:"A folyamatok értelmezése",helpUseCaseInstructionNavigation:"A navigációs jelentések használatával a következőket teheti:…",helpUseCaseInstructionSnapshot:"A pillanatkép-jelentések használatával a következőket teheti:…",helpUseCaseInstructionTimespan:"Az időtartam-jelentések használatával a következőket teheti:…",helpUseCaseNavigation1:"pontszámot kaphat a Lighthouse-teljesítményre vonatkozóan;",helpUseCaseNavigation2:"mérheti az oldalbetöltési teljesítménnyel kapcsolatos mutatókat (például a legnagyobb vizuális tartalomválaszt és a sebességindexet).",helpUseCaseNavigation3:"értékelheti a progresszív webes alkalmazások képességeit;",helpUseCaseSnapshot1:"megtalálhatja a kisegítő lehetőségekkel kapcsolatos problémákat az egyoldalas alkalmazásokban vagy az összetettebb űrlapokon",helpUseCaseSnapshot2:"értékelheti az interakciók mögötti rejtett menükkel és UI-elemekkel kapcsolatos bevált módszereket;",helpUseCaseTimespan1:"különböző interakciók esetében mérheti az elrendezésmozgást és a JavaScript végrehajtási idejét.",helpUseCaseTimespan2:"teljesítményre vonatkozó lehetőségeket fedezhet fel a hosszú életű oldalak és az egyoldalas alkalmazásokkal kapcsolatos élmények javítása érdekében;",highestImpact:"Legnagyobb hatás",informativeAuditCount:"{numInformative,plural, =1{{numInformative} tájékoztató ellenőrzés}other{{numInformative} tájékoztató ellenőrzés}}",mobile:"Mobil",navigationDescription:"Oldalbetöltés",navigationLongDescription:"A navigációs jelentések (pontosan úgy, ahogy az eredeti Lighthouse-jelentések is) az egyes oldalak betöltését elemzik.",navigationReport:"Navigációs jelentés",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigációs jelentés}other{{numNavigation} navigációs jelentés}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} teljesíthető ellenőrzés}other{{numPassableAudits} teljesíthető ellenőrzés}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} sikeres ellenőrzés}other{{numPassed} sikeres ellenőrzés}}",ratingAverage:"Átlagos",ratingError:"Hiba",ratingFail:"Gyenge",ratingPass:"Jó",save:"mentés;",snapshotDescription:"Az oldal rögzített állapota",snapshotLongDescription:"A pillanatkép-jelentés az oldalt adott állapotában, jellemzően a felhasználói interakciókat követően elemzi.",snapshotReport:"Pillanatkép-jelentés",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} pillanatkép-jelentés}other{{numSnapshot} pillanatkép-jelentés}}",summary:"Összegzés",timespanDescription:"Felhasználói interakciók",timespanLongDescription:"Az időtartam-jelentések a tetszőleges, jellemzően felhasználó interakciókat tartalmazó időtartamokat elemzik.",timespanReport:"Időtartam-jelentés",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} időtartam-jelentés}other{{numTimespan} időtartam-jelentés}}",title:"Lighthouse felhasználóimunkafolyamat-jelentés"},gsw:{allReports:"Alle Berichte",categories:"Kategorien",categoryAccessibility:"Barrierefreiheit",categoryBestPractices:"Best Practices",categoryPerformance:"Leistung",categorySeo:"SEO",desktop:"Computer",helpDialogTitle:"Informationen über den Lighthouse-Bericht zur Aufrufabfolge",helpLabel:"Informationen über Aufrufabfolgen",helpUseCaseInstructionNavigation:"Navigationsberichte können für Folgendes verwendet werden:",helpUseCaseInstructionSnapshot:"Snapshot-Berichte können für Folgendes verwendet werden:",helpUseCaseInstructionTimespan:"Zeitspannenberichte können für Folgendes verwendet werden:",helpUseCaseNavigation1:"Eine Lighthouse-Leistungsbewertung erhalten.",helpUseCaseNavigation2:"Messwerte zur Leistung beim Seitenaufbau erfassen, z. B. Largest Contentful Paint oder Speed Index.",helpUseCaseNavigation3:"Funktionen progressiver Web-Apps bewerten.",helpUseCaseSnapshot1:"Probleme mit der Barrierefreiheit in Single-Page-Anwendungen oder komplexen Formularen finden.",helpUseCaseSnapshot2:"Best Practices für hinter einer Interaktion versteckte Menüs und UI-Elemente bewerten.",helpUseCaseTimespan1:"Layoutverschiebungen und JavaScript-Ausführungszeit bei einer Reihe von Interaktionen messen.",helpUseCaseTimespan2:"Leistungsmöglichkeiten finden, um die Nutzung für langlebige Seiten und Single-Page-Anwendungen zu verbessern.",highestImpact:"Größte Wirkung",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informative Prüfung}other{{numInformative} informative Prüfungen}}",mobile:"Mobil",navigationDescription:"Seitenaufbau",navigationLongDescription:"Mit Navigationsberichten wird der Aufbau einer einzelnen Seite analysiert, genau wie mit den ursprünglichen Lighthouse-Berichten.",navigationReport:"Navigationsbericht",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} Navigationsbericht}other{{numNavigation} Navigationsberichte}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} bestehbare Prüfung}other{{numPassableAudits} bestehbare Prüfungen}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} Prüfung bestanden}other{{numPassed} Prüfungen bestanden}}",ratingAverage:"Durchschnittlich",ratingError:"Fehler",ratingFail:"Schlecht",ratingPass:"Gut",save:"Speichern",snapshotDescription:"Erfasster Seitenstatus",snapshotLongDescription:"Mit Snapshot-Berichten werden Seiten in einem bestimmten Zustand analysiert, in der Regel nach Nutzerinteraktionen.",snapshotReport:"Snapshot-Bericht",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} Snapshot-Bericht}other{{numSnapshot} Snapshot-Berichte}}",summary:"Zusammenfassung",timespanDescription:"Nutzerinteraktionen",timespanLongDescription:"Mit Zeitspannenberichten wird ein beliebiger Zeitraum analysiert, normalerweise einer, der Nutzerinteraktionen enthält.",timespanReport:"Zeitspannenbericht",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} Zeitspannenbericht}other{{numTimespan} Zeitspannenberichte}}",title:"Lighthouse-Bericht zur Aufrufabfolge"},id:{allReports:"Semua Laporan",categories:"Kategori",categoryAccessibility:"Aksesibilitas",categoryBestPractices:"Praktik Terbaik",categoryPerformance:"Performa",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Memahami Laporan Alur Lighthouse",helpLabel:"Memahami Alur",helpUseCaseInstructionNavigation:"Gunakan laporan Navigasi untuk ...",helpUseCaseInstructionSnapshot:"Gunakan laporan Snapshot untuk ...",helpUseCaseInstructionTimespan:"Gunakan laporan Rentang Waktu untuk ...",helpUseCaseNavigation1:"Mendapatkan skor Performa Lighthouse.",helpUseCaseNavigation2:"Mengukur metrik Performa pemuatan halaman seperti Largest Contentful Paint dan Speed Index.",helpUseCaseNavigation3:"Menilai kemampuan Progressive Web App.",helpUseCaseSnapshot1:"Menemukan masalah aksesibilitas dalam aplikasi web satu halaman atau formulir yang rumit.",helpUseCaseSnapshot2:"Mengevaluasi praktik terbaik menu dan elemen UI yang tersembunyi di balik interaksi.",helpUseCaseTimespan1:"Mengukur pergeseran tata letak dan waktu eksekusi JavaScript pada serangkaian interaksi.",helpUseCaseTimespan2:"Menemukan peluang performa guna meningkatkan pengalaman untuk halaman yang dibuka dalam waktu lama dan aplikasi web satu halaman.",highestImpact:"Dampak tertinggi",informativeAuditCount:"{numInformative,plural, =1{{numInformative} audit informatif}other{{numInformative} audit informatif}}",mobile:"Seluler",navigationDescription:"Pemuatan halaman",navigationLongDescription:"Laporan Navigasi menganalisis pemuatan satu halaman, persis seperti laporan Lighthouse asli.",navigationReport:"Laporan navigasi",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} laporan navigasi}other{{numNavigation} laporan navigasi}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} audit yang dapat diluluskan}other{{numPassableAudits} audit yang dapat diluluskan}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit lulus}other{{numPassed} audit lulus}}",ratingAverage:"Biasa",ratingError:"Error",ratingFail:"Buruk",ratingPass:"Baik",save:"Simpan",snapshotDescription:"Status halaman yang ditangkap",snapshotLongDescription:"Laporan Snapshot menganalisis halaman dalam status tertentu, biasanya setelah interaksi pengguna.",snapshotReport:"Laporan snapshot",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} laporan snapshot}other{{numSnapshot} laporan snapshot}}",summary:"Ringkasan",timespanDescription:"Interaksi pengguna",timespanLongDescription:"Laporan Rentang Waktu menganalisis periode waktu yang arbitrer, biasanya yang berisi interaksi pengguna.",timespanReport:"Laporan rentang waktu",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} laporan rentang waktu}other{{numTimespan} laporan rentang waktu}}",title:"Laporan Alur Pengguna Lighthouse"},in:{allReports:"Semua Laporan",categories:"Kategori",categoryAccessibility:"Aksesibilitas",categoryBestPractices:"Praktik Terbaik",categoryPerformance:"Performa",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Memahami Laporan Alur Lighthouse",helpLabel:"Memahami Alur",helpUseCaseInstructionNavigation:"Gunakan laporan Navigasi untuk ...",helpUseCaseInstructionSnapshot:"Gunakan laporan Snapshot untuk ...",helpUseCaseInstructionTimespan:"Gunakan laporan Rentang Waktu untuk ...",helpUseCaseNavigation1:"Mendapatkan skor Performa Lighthouse.",helpUseCaseNavigation2:"Mengukur metrik Performa pemuatan halaman seperti Largest Contentful Paint dan Speed Index.",helpUseCaseNavigation3:"Menilai kemampuan Progressive Web App.",helpUseCaseSnapshot1:"Menemukan masalah aksesibilitas dalam aplikasi web satu halaman atau formulir yang rumit.",helpUseCaseSnapshot2:"Mengevaluasi praktik terbaik menu dan elemen UI yang tersembunyi di balik interaksi.",helpUseCaseTimespan1:"Mengukur pergeseran tata letak dan waktu eksekusi JavaScript pada serangkaian interaksi.",helpUseCaseTimespan2:"Menemukan peluang performa guna meningkatkan pengalaman untuk halaman yang dibuka dalam waktu lama dan aplikasi web satu halaman.",highestImpact:"Dampak tertinggi",informativeAuditCount:"{numInformative,plural, =1{{numInformative} audit informatif}other{{numInformative} audit informatif}}",mobile:"Seluler",navigationDescription:"Pemuatan halaman",navigationLongDescription:"Laporan Navigasi menganalisis pemuatan satu halaman, persis seperti laporan Lighthouse asli.",navigationReport:"Laporan navigasi",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} laporan navigasi}other{{numNavigation} laporan navigasi}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} audit yang dapat diluluskan}other{{numPassableAudits} audit yang dapat diluluskan}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit lulus}other{{numPassed} audit lulus}}",ratingAverage:"Biasa",ratingError:"Error",ratingFail:"Buruk",ratingPass:"Baik",save:"Simpan",snapshotDescription:"Status halaman yang ditangkap",snapshotLongDescription:"Laporan Snapshot menganalisis halaman dalam status tertentu, biasanya setelah interaksi pengguna.",snapshotReport:"Laporan snapshot",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} laporan snapshot}other{{numSnapshot} laporan snapshot}}",summary:"Ringkasan",timespanDescription:"Interaksi pengguna",timespanLongDescription:"Laporan Rentang Waktu menganalisis periode waktu yang arbitrer, biasanya yang berisi interaksi pengguna.",timespanReport:"Laporan rentang waktu",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} laporan rentang waktu}other{{numTimespan} laporan rentang waktu}}",title:"Laporan Alur Pengguna Lighthouse"},it:{allReports:"Tutti i report",categories:"Categorie",categoryAccessibility:"Accessibilità",categoryBestPractices:"Best practice",categoryPerformance:"Prestazioni",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Informazioni sul report flusso di Lighthouse",helpLabel:"Informazioni sui flussi",helpUseCaseInstructionNavigation:"Usa i report relativi alla navigazione per…",helpUseCaseInstructionSnapshot:"Usa i report relativi a un momento specifico per…",helpUseCaseInstructionTimespan:"Usa i report relativi al periodo di tempo per…",helpUseCaseNavigation1:"Ottenere un punteggio Lighthouse relativo alle prestazioni.",helpUseCaseNavigation2:"Misurare le metriche relative alle prestazioni di caricamento pagina quali Largest Contentful Paint e Speed Index.",helpUseCaseNavigation3:"Valutare le funzionalità delle app web progressive.",helpUseCaseSnapshot1:"Trovare problemi di accessibilità nelle applicazioni a pagina singola o in moduli complessi.",helpUseCaseSnapshot2:"Valutare best practice di menu ed elementi UI nascosti dietro l'interazione.",helpUseCaseTimespan1:"Misurare le variazioni di layout e il tempo di esecuzione di JavaScript per una serie di interazioni.",helpUseCaseTimespan2:"Scoprire opportunità legate alle prestazioni per migliorare l'esperienza relativa alle pagine di lunga durata e alle applicazioni a pagina singola.",highestImpact:"Massimo impatto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} controllo informativo}other{{numInformative} controlli informativi}}",mobile:"Dispositivi mobili",navigationDescription:"Caricamento della pagina",navigationLongDescription:"I report relativi alla navigazione consentono di analizzare il caricamento di una singola pagina, esattamente come i report Lighthouse originali.",navigationReport:"Report relativo alla navigazione",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} report relativo alla navigazione}other{{numNavigation} report relativi alla navigazione}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} controllo superabile}other{{numPassableAudits} controlli superabili}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} controllo superato}other{{numPassed} controlli superati}}",ratingAverage:"Nella media",ratingError:"Errore",ratingFail:"Scadente",ratingPass:"Buona",save:"Salva",snapshotDescription:"Stato acquisito della pagina",snapshotLongDescription:"I report relativi a un momento specifico consentono di analizzare la pagina in uno stato specifico, generalmente dopo le interazioni degli utenti.",snapshotReport:"Report relativo a un momento specifico",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} report relativo a un momento specifico}other{{numSnapshot} report relativi a un momento specifico}}",summary:"Riepilogo",timespanDescription:"Interazioni dell'utente",timespanLongDescription:"I report relativi al periodo di tempo consentono di analizzare un periodo di tempo arbitrario, generalmente durante il quale ci sono state interazioni degli utenti.",timespanReport:"Report relativo al periodo di tempo",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} report relativo al periodo di tempo}other{{numTimespan} report relativi al periodo di tempo}}",title:"Report Lighthouse sulla procedura"},iw:{allReports:"כל הדוחות",categories:"קטגוריות",categoryAccessibility:"נגישות",categoryBestPractices:"שיטות מומלצות",categoryPerformance:"ביצועים",categorySeo:"אופטימיזציה למנועי חיפוש",desktop:"מחשבים",helpDialogTitle:"הסבר על דוח התהליכים של Lighthouse",helpLabel:"הסבר על תהליכים",helpUseCaseInstructionNavigation:"שימוש בדוחות ניווט לצורך...",helpUseCaseInstructionSnapshot:"שימוש בדוחות של תמונת מצב לצורך...",helpUseCaseInstructionTimespan:"שימוש בדוחות של טווח זמן לצורך...",helpUseCaseNavigation1:"קבלת ציון לגבי ביצועי Lighthouse.",helpUseCaseNavigation2:"בדיקת מדדי ביצועים של טעינת דפים כמו Largest Contentful Paint ‏(LCP) ו-Speed Index.",helpUseCaseNavigation3:"הערכת יכולות של Progressive Web App.",helpUseCaseSnapshot1:"איתור של בעיות נגישות באפליקציות שכוללות דף יחיד או בטפסים מורכבים.",helpUseCaseSnapshot2:"הערכת שיטות מומלצות הקשורות לתפריטים ולרכיבים בממשק המשתמש שמוסתרים עקב ביצוע אינטראקציה.",helpUseCaseTimespan1:"מדידה של שינויי פריסה וזמן ריצה של JavaScript במסגרת סדרת אינטראקציות.",helpUseCaseTimespan2:"גילוי הזדמנויות הקשורות לביצועים כדי לשפר את חוויית המשתמש בדפים שפתוחים זמן רב ובאפליקציות שכוללות דף יחיד.",highestImpact:"הכי הרבה השפעה",informativeAuditCount:"{numInformative,plural, =1{ביקורת אינפורמטיבית אחת ({numInformative})}one{‫{numInformative} ביקורות אינפורמטיביות}two{‫{numInformative} ביקורות אינפורמטיביות}other{‫{numInformative} ביקורות אינפורמטיביות}}",mobile:"ניידים",navigationDescription:"טעינת דף",navigationLongDescription:"דוחות ניווט מיועדים לניתוח של טעינת דף יחידה, בדיוק כמו דוחות Lighthouse המקוריים.",navigationReport:"דוח לגבי ניווט",navigationReportCount:"{numNavigation,plural, =1{דוח אחד ({numNavigation}) לגבי ניווט}one{‫{numNavigation} דוחות לגבי ניווט}two{‫{numNavigation} דוחות לגבי ניווט}other{‫{numNavigation} דוחות לגבי ניווט}}",passableAuditCount:"{numPassableAudits,plural, =1{ביקורת עוברת אחת ({numPassableAudits})}one{‫{numPassableAudits} ביקורות עוברות}two{‫{numPassableAudits} ביקורות עוברות}other{‫{numPassableAudits} ביקורות עוברות}}",passedAuditCount:"{numPassed,plural, =1{ביקורת אחת ({numPassed}) עברה}one{‫{numPassed} ביקורות עברו}two{‫{numPassed} ביקורות עברו}other{‫{numPassed} ביקורות עברו}}",ratingAverage:"ממוצעת",ratingError:"שגיאה",ratingFail:"גרועה",ratingPass:"טובה",save:"שמירה",snapshotDescription:"מצב דף בנקודת זמן",snapshotLongDescription:"דוחות של תמונת מצב מיועדים לניתוח הדף במצב מסוים. לרוב, הניתוח מתבצע לאחר אינטראקציות של משתמשים.",snapshotReport:"דוח תמונת מצב",snapshotReportCount:"{numSnapshot,plural, =1{דוח תמונת מצב אחד ({numSnapshot})}one{‫{numSnapshot} דוחות תמונת מצב}two{‫{numSnapshot} דוחות תמונת מצב}other{‫{numSnapshot} דוחות תמונת מצב}}",summary:"סיכום",timespanDescription:"אינטראקציות של משתמשים",timespanLongDescription:"דוחות של טווח זמן מיועדים לניתוח של משך זמן אקראי, שלרוב מתרחשות בו אינטראקציות של משתמש.",timespanReport:"דוח על טווח זמן",timespanReportCount:"{numTimespan,plural, =1{דוח אחד ({numTimespan}) על טווח זמן}one{‫{numTimespan} דוחות על טווח זמן}two{‫{numTimespan} דוחות על טווח זמן}other{‫{numTimespan} דוחות על טווח זמן}}",title:"דוח Lighthouse על מסלולי משתמשים בדף"},ja:{allReports:"すべてのレポート",categories:"カテゴリ",categoryAccessibility:"ユーザー補助",categoryBestPractices:"おすすめの方法",categoryPerformance:"パフォーマンス",categorySeo:"SEO",desktop:"パソコン",helpDialogTitle:"Lighthouse フローレポートについて",helpLabel:"フローの詳細",helpUseCaseInstructionNavigation:"ナビゲーション レポートの使用例",helpUseCaseInstructionSnapshot:"スナップショット レポートの使用例",helpUseCaseInstructionTimespan:"期間レポートの使用例",helpUseCaseNavigation1:"Lighthouse のパフォーマンス スコアを取得する。",helpUseCaseNavigation2:"Largest Contentful Paint（最大コンテンツの描画時間）、Speed Index（速度インデックス）などのページ読み込みに関するパフォーマンス指標を測定する。",helpUseCaseNavigation3:"プログレッシブ ウェブアプリの機能を評価する。",helpUseCaseSnapshot1:"シングルページ アプリケーションや複雑なフォームでユーザー補助機能の問題がないか調べる。",helpUseCaseSnapshot2:"操作の背後に隠れてしまうメニューや UI 要素のおすすめの方法を検討する。",helpUseCaseTimespan1:"一連の操作におけるレイアウトの移動と JavaScript の実行時間を測定する。",helpUseCaseTimespan2:"長期使用のページやシングルページ アプリケーションでパフォーマンスの利便性を改善できる余地を見つける。",highestImpact:"最も影響が大きい",informativeAuditCount:"{numInformative,plural, =1{{numInformative} 件の監査で情報が提供されました}other{{numInformative} 件の監査で情報が提供されました}}",mobile:"モバイル",navigationDescription:"ページの読み込み",navigationLongDescription:"ナビゲーション レポートでは、Lighthouse のオリジナルのレポートとまったく同じように単一ページの読み込みについて分析できます。",navigationReport:"ナビゲーション レポート",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} 件のナビゲーション レポート}other{{numNavigation} 件のナビゲーション レポート}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} 件の監査にパスする可能性があります}other{{numPassableAudits} 件の監査にパスする可能性があります}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} 件の監査をパスしました}other{{numPassed} 件の監査をパスしました}}",ratingAverage:"普通",ratingError:"エラー",ratingFail:"低",ratingPass:"高",save:"保存",snapshotDescription:"取得したページの状態",snapshotLongDescription:"スナップショット レポートでは、特定の状態（通常はユーザー操作後）のページを分析できます。",snapshotReport:"スナップショット レポート",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} 件のスナップショット レポート}other{{numSnapshot} 件のスナップショット レポート}}",summary:"概要",timespanDescription:"ユーザー操作",timespanLongDescription:"期間レポートでは、任意の期間（ユーザーの操作が見込まれる期間など）を分析できます。",timespanReport:"期間レポート",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} 件の期間レポート}other{{numTimespan} 件の期間レポート}}",title:"Lighthouse ユーザーフロー レポート"},ko:{allReports:"모든 보고서",categories:"카테고리",categoryAccessibility:"접근성",categoryBestPractices:"권장사항",categoryPerformance:"성능",categorySeo:"검색엔진 최적화",desktop:"데스크톱",helpDialogTitle:"Lighthouse 플로우 보고서 이해",helpLabel:"플로우 이해",helpUseCaseInstructionNavigation:"탐색 보고서 사용 용도…",helpUseCaseInstructionSnapshot:"스냅샷 보고서 사용 용도…",helpUseCaseInstructionTimespan:"기간 보고서 사용 용도…",helpUseCaseNavigation1:"Lighthouse 성능 점수를 받습니다.",helpUseCaseNavigation2:"최대 콘텐츠 렌더링 시간 및 속도 색인과 같은 페이지 로드 성능 측정항목을 측정합니다.",helpUseCaseNavigation3:"프로그레시브 웹 앱 기능을 평가합니다.",helpUseCaseSnapshot1:"단일 페이지 애플리케이션 또는 복잡한 양식에서 접근성 문제를 찾습니다.",helpUseCaseSnapshot2:"상호작용 뒤에 숨겨진 메뉴 및 UI 요소 관련 권장사항을 평가합니다.",helpUseCaseTimespan1:"일련의 상호작용에서 레이아웃 이동 및 자바스크립트 실행 시간을 측정합니다.",helpUseCaseTimespan2:"장기 지속되는 페이지 및 단일 페이지 애플리케이션 관련 경험을 개선할 수 있는 성능 기회를 탐색합니다.",highestImpact:"가장 큰 효과",informativeAuditCount:"{numInformative,plural, =1{정보 감사 {numInformative}개}other{정보 감사 {numInformative}개}}",mobile:"모바일",navigationDescription:"페이지 로드",navigationLongDescription:"탐색 보고서는 기존 Lighthouse 보고서와 완전히 동일하게 단일 페이지 로드를 분석합니다.",navigationReport:"탐색 보고서",navigationReportCount:"{numNavigation,plural, =1{탐색 보고서 {numNavigation}개}other{탐색 보고서 {numNavigation}개}}",passableAuditCount:"{numPassableAudits,plural, =1{통과 가능한 감사 {numPassableAudits}개}other{통과 가능한 감사 {numPassableAudits}개}}",passedAuditCount:"{numPassed,plural, =1{통과한 감사 {numPassed}개}other{통과한 감사 {numPassed}개}}",ratingAverage:"평균",ratingError:"오류",ratingFail:"나쁨",ratingPass:"좋음",save:"저장",snapshotDescription:"캡처된 페이지 상태",snapshotLongDescription:"스냅샷 보고서는 특정 상태의 페이지, 특히 사용자 상호작용 후 페이지를 분석합니다.",snapshotReport:"스냅샷 보고서",snapshotReportCount:"{numSnapshot,plural, =1{스냅샷 보고서 {numSnapshot}개}other{스냅샷 보고서 {numSnapshot}개}}",summary:"요약",timespanDescription:"사용자 상호작용",timespanLongDescription:"기간 보고서는 일반적으로 사용자 상호작용을 포함하는 임의 기간을 분석합니다.",timespanReport:"기간 보고서",timespanReportCount:"{numTimespan,plural, =1{기간 보고서 {numTimespan}개}other{기간 보고서 {numTimespan}개}}",title:"Lighthouse 사용자 플로우 보고서"},lt:{allReports:"Visos ataskaitos",categories:"Kategorijos",categoryAccessibility:"Pritaikomumas",categoryBestPractices:"Geriausios praktikos pavyzdžiai",categoryPerformance:"Našumas",categorySeo:"PVO",desktop:"Staliniams kompiuteriams",helpDialogTitle:"Apie „Lighthouse“ srauto ataskaitą",helpLabel:"Apie srautus",helpUseCaseInstructionNavigation:"Naudokite naršymo ataskaitas, kad galėtumėte…",helpUseCaseInstructionSnapshot:"Naudokite dienos apžvalgos ataskaitas, kad galėtumėte…",helpUseCaseInstructionTimespan:"Naudokite laikotarpio ataskaitas, kad galėtumėte…",helpUseCaseNavigation1:"Gauti „Lighthouse“ našumo balą.",helpUseCaseNavigation2:"Įvertinti puslapio įkėlimo našumo metriką, pavyzdžiui, didžiausio turiningo žymėjimo ir spartos rodiklio.",helpUseCaseNavigation3:"Įvertinti laipsniškųjų žiniatinklio programų galimybes.",helpUseCaseSnapshot1:"Aptikti pritaikomumo problemas atskiro puslapio programose ar sudėtingose formose.",helpUseCaseSnapshot2:"Įvertinti už sąveikų slypinčių meniu ir NS elementų geriausią praktiką.",helpUseCaseTimespan1:"Įvertinti išdėstymo poslinkius ir „JavaScript“ sąveikų serijų vykdymo laiką.",helpUseCaseTimespan2:"Atrasti našumo galimybes ir pagerinti ilgai veikiančių puslapių bei atskiro puslapio programų funkcijas.",highestImpact:"Svarbiausios",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informatyvi patikra}one{{numInformative} informatyvi patikra}few{{numInformative} informatyvios patikros}many{{numInformative} informatyvios patikros}other{{numInformative} informatyvių patikrų}}",mobile:"Mobiliesiems",navigationDescription:"Puslapio įkėlimas",navigationLongDescription:"Naršymo ataskaitose analizuojamas kiekvienas puslapio įkėlimas, visiškai taip pat, kaip ir originaliose „Lighthouse“ ataskaitose.",navigationReport:"Naršymo ataskaita",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} naršymo ataskaita}one{{numNavigation} naršymo ataskaita}few{{numNavigation} naršymo ataskaitos}many{{numNavigation} naršymo ataskaitos}other{{numNavigation} naršymo ataskaitų}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} patikra, kuri gali būti atlikta sėkmingai}one{{numPassableAudits} patikra, kuri gali būti atlikta sėkmingai}few{{numPassableAudits} patikros, kurios gali būti atliktos sėkmingai}many{{numPassableAudits} patikros, kuri gali būti atlikta sėkmingai}other{{numPassableAudits} patikrų, kurios gali būti atliktos sėkmingai}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} sėkmingai atlikta patikra}one{{numPassed} sėkmingai atlikta patikra}few{{numPassed} sėkmingai atliktos patikros}many{{numPassed} sėkmingos atliktos patikros}other{{numPassed} sėkmingai atliktų patikrų}}",ratingAverage:"Vidutiniška",ratingError:"Klaida",ratingFail:"Prasta",ratingPass:"Gera",save:"Išsaugoti",snapshotDescription:"Užfiksuota puslapio būsena",snapshotLongDescription:"Dienos apžvalgos ataskaitose analizuojamas tam tikros būsenos puslapis, paprastai po naudotojų sąveikų.",snapshotReport:"Momentinė ataskaita",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} konkretaus momento ataskaita}one{{numSnapshot} konkretaus momento ataskaita}few{{numSnapshot} konkretaus momento ataskaitos}many{{numSnapshot} konkretaus momento ataskaitos}other{{numSnapshot} konkretaus momento ataskaitų}}",summary:"Suvestinė",timespanDescription:"Naudotojo sąveikos",timespanLongDescription:"Laikotarpio ataskaitose analizuojamas tam tikras laikotarpis, paprastai tas, per kurį vyko sąveikų.",timespanReport:"Laikotarpio ataskaita",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} laikotarpio ataskaita}one{{numTimespan} laikotarpio ataskaita}few{{numTimespan} laikotarpio ataskaitos}many{{numTimespan} laikotarpio ataskaitos}other{{numTimespan} laikotarpio ataskaitų}}",title:"„Lighthouse“ naudotojų srauto ataskaita"},lv:{allReports:"Visi pārskati",categories:"Kategorijas",categoryAccessibility:"Pieejamība",categoryBestPractices:"Paraugprakse",categoryPerformance:"Veiktspēja",categorySeo:"MPO",desktop:"Datoriem",helpDialogTitle:"Par Lighthouse plūsmas pārskatu",helpLabel:"Par plūsmām",helpUseCaseInstructionNavigation:"Izmantojiet navigācijas pārskatus, lai…",helpUseCaseInstructionSnapshot:"Izmantojiet momentuzņēmumu pārskatus, lai…",helpUseCaseInstructionTimespan:"Izmantojiet laika posma pārskatus, lai…",helpUseCaseNavigation1:"Iegūstiet Lighthouse veiktspējas rādītāju.",helpUseCaseNavigation2:"Nosakiet tādus lapas ielādes veiktspējas rādītājus kā Largest Contentful Paint un ātruma indekss.",helpUseCaseNavigation3:"Izvērtējiet progresīvo tīmekļa lietotņu iespējas.",helpUseCaseSnapshot1:"Atrodiet pieejamības problēmas vienas lapas lietojumprogrammās vai sarežģītās veidlapās.",helpUseCaseSnapshot2:"Izvērtējiet paraugprakses principus izvēlnēm un lietotāja saskarnes elementiem, kas atkarīgi no mijiedarbības.",helpUseCaseTimespan1:"Izmēriet izkārtojuma nobīdes un JavaScript izpildes laiku vairāku mijiedarbību virknei.",helpUseCaseTimespan2:"Atklājiet veiktspējas iespējas, lai uzlabotu pieredzi ilgi atvērtās lapās un vienas lapas lietojumprogrammās.",highestImpact:"Vislielākā ietekme",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informatīva pārbaude}zero{{numInformative} informatīvu pārbaužu}one{{numInformative} informatīva pārbaude}other{{numInformative} informatīvas pārbaudes}}",mobile:"Mobilajām ierīcēm",navigationDescription:"Lapas ielāde",navigationLongDescription:"Navigācijas pārskatos tiek analizēta vienas lapas ielāde, tieši tāpat kā sākotnējos Lighthouse pārskatos.",navigationReport:"Navigācijas pārskats",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigācijas pārskats}zero{{numNavigation} navigācijas pārskatu}one{{numNavigation} navigācijas pārskats}other{{numNavigation} navigācijas pārskati}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} izpildāma pārbaude}zero{{numPassableAudits} izpildāmu pārbaužu}one{{numPassableAudits} izpildāma pārbaude}other{{numPassableAudits} izpildāmas pārbaudes}}",passedAuditCount:"{numPassed,plural, =1{Izpildīta {numPassed} pārbaude}zero{Izpildītas {numPassed} pārbaudes}one{Izpildīta {numPassed} pārbaude}other{Izpildītas {numPassed} pārbaudes}}",ratingAverage:"Viduvējs līmenis",ratingError:"Kļūda",ratingFail:"Vājš līmenis",ratingPass:"Labs līmenis",save:"Saglabāt",snapshotDescription:"Lapas tvertais statuss",snapshotLongDescription:"Momentuzņēmumu pārskatos tiek analizēts konkrēts lapas stāvoklis (parasti pēc lietotāju veiktas mijiedarbības).",snapshotReport:"Momentuzņēmuma pārskats",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} momentuzņēmuma pārskats}zero{{numSnapshot} momentuzņēmumu pārskatu}one{{numSnapshot} momentuzņēmumu pārskats}other{{numSnapshot} momentuzņēmumu pārskati}}",summary:"Kopsavilkums",timespanDescription:"Lietotāju mijiedarbība",timespanLongDescription:"Laika posma pārskatos tiek analizēti jebkādi laika periodi, kas parasti ietver lietotāja mijiedarbību.",timespanReport:"Laika posma pārskats",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} laika posma pārskats}zero{{numTimespan} laika posmu pārskatu}one{{numTimespan} laika posmu pārskats}other{{numTimespan} laika posmu pārskati}}",title:"Lighthouse lietotāju plūsmas pārskats"},mo:{allReports:"Toate rapoartele",categories:"Categorii",categoryAccessibility:"Accesibilitate",categoryBestPractices:"Cele mai bune practici",categoryPerformance:"Performanță",categorySeo:"SEO",desktop:"Computer",helpDialogTitle:"Înțelegerea Raportului privind fluxul Lighthouse",helpLabel:"Înțelegerea fluxurilor",helpUseCaseInstructionNavigation:"Folosește Rapoartele privind navigarea pentru...",helpUseCaseInstructionSnapshot:"Folosește Rapoartele privind instantaneele pentru...",helpUseCaseInstructionTimespan:"Folosește Rapoartele privind perioada pentru...",helpUseCaseNavigation1:"Obține un scor de performanță pentru Lighthouse.",helpUseCaseNavigation2:"Măsoară valorile de performanță pentru încărcarea paginii, cum ar fi Largest Contentful Paint și indicele de viteză.",helpUseCaseNavigation3:"Evaluează funcțiile aplicațiilor web progresive.",helpUseCaseSnapshot1:"Identifică problemele legate de accesibilitate în aplicații cu o singură pagină sau formulare complexe.",helpUseCaseSnapshot2:"Evaluează recomandările pentru meniuri și elemente IU din spatele interacțiunilor.",helpUseCaseTimespan1:"Măsoară modificările de aspect și timpul de execuție JavaScript pentru o serie de interacțiuni.",helpUseCaseTimespan2:"Descoperă oportunități de performanță pentru a îmbunătăți experiența în paginile vechi și aplicațiile cu o singură pagină.",highestImpact:"Cel mai mare impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} verificare informativă}few{{numInformative} verificări informative}other{{numInformative} de verificări informative}}",mobile:"Mobil",navigationDescription:"Încărcarea paginii",navigationLongDescription:"Rapoartele privind navigarea analizează încărcarea unei singure pagini, exact ca rapoartele Lighthouse inițiale.",navigationReport:"Raport privind navigarea",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} raport privind navigarea}few{{numNavigation} rapoarte privind navigarea}other{{numNavigation} de rapoarte privind navigarea}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} verificare care poate reuși}few{{numPassableAudits} verificări care pot reuși}other{{numPassableAudits} de verificări care pot reuși}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} verificare reușită}few{{numPassed} verificări reușite}other{{numPassed} de verificări reușite}}",ratingAverage:"Medie",ratingError:"Eroare",ratingFail:"Slabă",ratingPass:"Bună",save:"Salvează",snapshotDescription:"Starea înregistrată a paginii",snapshotLongDescription:"Rapoartele privind instantaneele analizează pagina într-o anumită stare, de obicei după interacțiunile cu utilizatorul.",snapshotReport:"Raport instantaneu",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} raport instantaneu}few{{numSnapshot} rapoarte instantanee}other{{numSnapshot} de rapoarte instantanee}}",summary:"Rezumat",timespanDescription:"Interacțiunile utilizatorilor",timespanLongDescription:"Rapoartele privind perioada analizează o perioadă arbitrară, care conține de obicei interacțiuni cu utilizatorul.",timespanReport:"Raport privind perioada de timp",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} raport privind intervalul de timp}few{{numTimespan} rapoarte privind intervalul de timp}other{{numTimespan} de rapoarte privind intervalul de timp}}",title:"Raport privind fluxul pentru utilizatori Lighthouse"},nl:{allReports:"Alle rapporten",categories:"Categorieën",categoryAccessibility:"Toegankelijkheid",categoryBestPractices:"Praktische tips",categoryPerformance:"Prestaties",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Het rapport van de Lighthouse-stroom begrijpen",helpLabel:"Begrijpen hoe stromen werken",helpUseCaseInstructionNavigation:"Navigatierapporten gebruiken…",helpUseCaseInstructionSnapshot:"Momentopnamerapporten gebruiken…",helpUseCaseInstructionTimespan:"Tijdsduurrapporten gebruiken…",helpUseCaseNavigation1:"Lighthouse-prestatiescore ophalen.",helpUseCaseNavigation2:"Prestatiestatistieken voor het laden van de pagina meten, zoals de Grootste weergave met content (LCP) en de snelheidsindex.",helpUseCaseNavigation3:"Mogelijkheden van progressive web-apps evalueren.",helpUseCaseSnapshot1:"Toegankelijkheidsproblemen opsporen in apps met één pagina of in complexe formulieren.",helpUseCaseSnapshot2:"Praktische tips evalueren voor menu's en UI-elementen die achter interactie verborgen zijn.",helpUseCaseTimespan1:"Indelingsverschuivingen en de JavaScript-uitvoeringstijd meten voor verschillende interacties.",helpUseCaseTimespan2:"Ontdek mogelijkheden om de functionaliteit van langdurige pagina's en apps met één pagina te verbeteren.",highestImpact:"Hoogste impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informatieve controle}other{{numInformative} informatieve controles}}",mobile:"Mobiel",navigationDescription:"Laden van pagina",navigationLongDescription:"In navigatierapporten wordt het laden van één pagina geanalyseerd, net als in de oorspronkelijke Lighthouse-rapporten.",navigationReport:"Navigatierapport",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigatierapport}other{{numNavigation} navigatierapporten}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} controle die kan worden doorstaan}other{{numPassableAudits} controles die kunnen worden doorstaan}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} controle doorstaan}other{{numPassed} controles doorstaan}}",ratingAverage:"Gemiddeld",ratingError:"Fout",ratingFail:"Slecht",ratingPass:"Goed",save:"Opslaan",snapshotDescription:"Vastgelegde staat van pagina",snapshotLongDescription:"In momentopnamerapporten worden pagina's in een bepaalde situatie geanalyseerd, doorgaans na interactie van de gebruiker.",snapshotReport:"Momentopnamerapport",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} momentopnamerapport}other{{numSnapshot} momentopnamerapporten}}",summary:"Overzicht",timespanDescription:"Gebruikersinteracties",timespanLongDescription:"In tijdsduurrapporten wordt een bepaalde tijdsduur geanalyseerd die meestal gebruikersinteracties omvat.",timespanReport:"Perioderapport",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} perioderapport}other{{numTimespan} perioderapporten}}",title:"Lighthouse-rapport over gebruikersstroom"},nb:{allReports:"Alle rapporter",categories:"Kategorier",categoryAccessibility:"Tilgjengelighet",categoryBestPractices:"Gode fremgangsmåter",categoryPerformance:"Resultater",categorySeo:"SEO",desktop:"Datamaskin",helpDialogTitle:"Forstå Lighthouse-flytrapporten",helpLabel:"Forstå flyter",helpUseCaseInstructionNavigation:"Bruk navigasjonsrapporter for å …",helpUseCaseInstructionSnapshot:"Bruk oversiktsrapporter for å …",helpUseCaseInstructionTimespan:"Bruk tidsromrapporter for å …",helpUseCaseNavigation1:"skaffe en Lighthouse-ytelsespoengsum",helpUseCaseNavigation2:"måle ytelsesverdier knyttet til sideinnlasting, for eksempel Største innholdsrike opptegning (LCP) og Hastighetsindeks",helpUseCaseNavigation3:"vurdere egenskapene til progressive nettprogrammer",helpUseCaseSnapshot1:"finne tilgjengelighetsproblemer i enkeltsideapper (SPA-er) og komplekse skjemaer",helpUseCaseSnapshot2:"evaluere anbefalte fremgangsmåter for menyer og elementer i brukergrensesnittet som er skjult bak interaksjon",helpUseCaseTimespan1:"måle utseendeforskyvninger og JavaScript-kjøretid for en interaksjonsserie",helpUseCaseTimespan2:"oppdage muligheter til å oppnå bedre ytelse og brukeropplevelse for sider og enkeltsideapper (SPA-er) med lang levetid",highestImpact:"Høyest effekt",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativ revisjon}other{{numInformative} informative revisjoner}}",mobile:"Mobil",navigationDescription:"Sideinnlasting",navigationLongDescription:"Navigasjonsrapporter analyserer en enkelt sideinnlasting, akkurat som de opprinnelige Lighthouse-rapportene.",navigationReport:"Navigasjonsrapport",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigasjonsrapport}other{{numNavigation} navigasjonsrapporter}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} revisjon som kan bestås}other{{numPassableAudits} revisjoner som kan bestås}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} revisjon er bestått}other{{numPassed} revisjoner er bestått}}",ratingAverage:"Gjennomsnitt",ratingError:"Feil",ratingFail:"Dårlig",ratingPass:"God",save:"Lagre",snapshotDescription:"Registrert sidetilstand",snapshotLongDescription:"Oversiktsrapporter analyserer siden i bestemte tilstander, vanligvis etter brukerinteraksjoner.",snapshotReport:"Øyeblikksbilde-rapport",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} øyeblikksbilderapport}other{{numSnapshot} øyeblikksbilderapporter}}",summary:"Sammendrag",timespanDescription:"Brukerinteraksjoner",timespanLongDescription:"Tidsromrapporter analyserer en vilkårlig tidsperiode, vanligvis med brukerinteraksjoner.",timespanReport:"Tidsspennrapport",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} tidsspennrapport}other{{numTimespan} tidsspennrapporter}}",title:"Lighthouse-rapport over brukerflyt"},no:{allReports:"Alle rapporter",categories:"Kategorier",categoryAccessibility:"Tilgjengelighet",categoryBestPractices:"Gode fremgangsmåter",categoryPerformance:"Resultater",categorySeo:"SEO",desktop:"Datamaskin",helpDialogTitle:"Forstå Lighthouse-flytrapporten",helpLabel:"Forstå flyter",helpUseCaseInstructionNavigation:"Bruk navigasjonsrapporter for å …",helpUseCaseInstructionSnapshot:"Bruk oversiktsrapporter for å …",helpUseCaseInstructionTimespan:"Bruk tidsromrapporter for å …",helpUseCaseNavigation1:"skaffe en Lighthouse-ytelsespoengsum",helpUseCaseNavigation2:"måle ytelsesverdier knyttet til sideinnlasting, for eksempel Største innholdsrike opptegning (LCP) og Hastighetsindeks",helpUseCaseNavigation3:"vurdere egenskapene til progressive nettprogrammer",helpUseCaseSnapshot1:"finne tilgjengelighetsproblemer i enkeltsideapper (SPA-er) og komplekse skjemaer",helpUseCaseSnapshot2:"evaluere anbefalte fremgangsmåter for menyer og elementer i brukergrensesnittet som er skjult bak interaksjon",helpUseCaseTimespan1:"måle utseendeforskyvninger og JavaScript-kjøretid for en interaksjonsserie",helpUseCaseTimespan2:"oppdage muligheter til å oppnå bedre ytelse og brukeropplevelse for sider og enkeltsideapper (SPA-er) med lang levetid",highestImpact:"Høyest effekt",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativ revisjon}other{{numInformative} informative revisjoner}}",mobile:"Mobil",navigationDescription:"Sideinnlasting",navigationLongDescription:"Navigasjonsrapporter analyserer en enkelt sideinnlasting, akkurat som de opprinnelige Lighthouse-rapportene.",navigationReport:"Navigasjonsrapport",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} navigasjonsrapport}other{{numNavigation} navigasjonsrapporter}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} revisjon som kan bestås}other{{numPassableAudits} revisjoner som kan bestås}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} revisjon er bestått}other{{numPassed} revisjoner er bestått}}",ratingAverage:"Gjennomsnitt",ratingError:"Feil",ratingFail:"Dårlig",ratingPass:"God",save:"Lagre",snapshotDescription:"Registrert sidetilstand",snapshotLongDescription:"Oversiktsrapporter analyserer siden i bestemte tilstander, vanligvis etter brukerinteraksjoner.",snapshotReport:"Øyeblikksbilde-rapport",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} øyeblikksbilderapport}other{{numSnapshot} øyeblikksbilderapporter}}",summary:"Sammendrag",timespanDescription:"Brukerinteraksjoner",timespanLongDescription:"Tidsromrapporter analyserer en vilkårlig tidsperiode, vanligvis med brukerinteraksjoner.",timespanReport:"Tidsspennrapport",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} tidsspennrapport}other{{numTimespan} tidsspennrapporter}}",title:"Lighthouse-rapport over brukerflyt"},pl:{allReports:"Wszystkie raporty",categories:"Kategorie",categoryAccessibility:"Ułatwienia dostępu",categoryBestPractices:"Sprawdzone metody",categoryPerformance:"Wydajność",categorySeo:"SEO",desktop:"Wersja komputerowa",helpDialogTitle:"Omówienie raportu dotyczącego procesu Lighthouse",helpLabel:"Omówienie procesów",helpUseCaseInstructionNavigation:"Używaj raportów dotyczących nawigacji do tych celów:",helpUseCaseInstructionSnapshot:"Używaj raportów dotyczących określonego momentu do tych celów:",helpUseCaseInstructionTimespan:"Używaj raportów dotyczących okresu do tych celów:",helpUseCaseNavigation1:"uzyskiwanie danych o wydajności Lighthouse",helpUseCaseNavigation2:"sprawdzanie parametrów szybkości ładowania strony, takich jak wyrenderowanie największej części treści czy indeks szybkości",helpUseCaseNavigation3:"ocena możliwości progresywnej aplikacji internetowej",helpUseCaseSnapshot1:"znajdowanie problemów dotyczących ułatwień dostępu w aplikacjach jednostronicowych lub złożonych formularzach",helpUseCaseSnapshot2:"ocena sprawdzonych metod dotyczących elementów menu i interfejsu ukrytych za interakcją",helpUseCaseTimespan1:"pomiar czasu wykonywania przesunięć układu i JavaScriptu w serii interakcji",helpUseCaseTimespan2:"odkrywanie możliwości poprawy wydajności w celu usprawnienia działania istniejących od dawna stron i aplikacji jednostronicowych",highestImpact:"Największy wpływ",informativeAuditCount:"{numInformative,plural, =1{{numInformative} audyt informacyjny}few{{numInformative} audyty informacyjne}many{{numInformative} audytów informacyjnych}other{{numInformative} audytu informacyjnego}}",mobile:"Wersja mobilna",navigationDescription:"Wczytywanie strony",navigationLongDescription:"Raporty dotyczące nawigacji analizują ładowanie pojedynczej strony – dokładnie tak jak oryginalne raporty Lighthouse.",navigationReport:"Raport dotyczący nawigacji",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} raport dotyczący nawigacji}few{{numNavigation} raporty dotyczące nawigacji}many{{numNavigation} raportów dotyczących nawigacji}other{{numNavigation} raportu dotyczącego nawigacji}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} audyt zadowalający}few{{numPassableAudits} audyty zadowalające}many{{numPassableAudits} audytów zadowalających}other{{numPassableAudits} audytu zadowalającego}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audyt zaliczony}few{{numPassed} audyty zaliczone}many{{numPassed} audytów zaliczonych}other{{numPassed} audytu zaliczone}}",ratingAverage:"Średnia",ratingError:"Błąd",ratingFail:"Słaba",ratingPass:"Dobra",save:"Zapisz",snapshotDescription:"Zarejestrowany stan strony",snapshotLongDescription:"Raporty dotyczące określonego momentu analizują strony w konkretnym stanie, zwykle po interakcji z użytkownikiem.",snapshotReport:"Raport dotyczący określonego momentu",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} raport dotyczący określonego momentu}few{{numSnapshot} raporty dotyczące określonego momentu}many{{numSnapshot} raportów dotyczących określonego momentu}other{{numSnapshot} raportu dotyczącego określonego momentu}}",summary:"Podsumowanie",timespanDescription:"Interakcje użytkownika",timespanLongDescription:"Raporty dotyczące okresu analizują dowolne okresy, zwykle obejmujące interakcje z użytkownikiem.",timespanReport:"Raport dotyczący okresu",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} raport dotyczący okresu}few{{numTimespan} raporty dotyczące okresu}many{{numTimespan} raportów dotyczących okresu}other{{numTimespan} raportu dotyczącego okresu}}",title:"Raport Lighthouse dotyczący przepływu użytkowników"},pt:{allReports:"Todos os relatórios",categories:"Categorias",categoryAccessibility:"Acessibilidade",categoryBestPractices:"Práticas recomendadas",categoryPerformance:"Desempenho",categorySeo:"SEO",desktop:"Computador",helpDialogTitle:"Como o relatório de fluxos do Lighthouse funciona",helpLabel:"Como os fluxos funcionam",helpUseCaseInstructionNavigation:"Use os relatórios de navegação para...",helpUseCaseInstructionSnapshot:"Use os relatórios instantâneos para...",helpUseCaseInstructionTimespan:"Use os relatórios de período para...",helpUseCaseNavigation1:"Obter uma pontuação de desempenho do Lighthouse.",helpUseCaseNavigation2:"Medir o desempenho de carregamento de página, como, por exemplo, Maior exibição de conteúdo e Índice de velocidade.",helpUseCaseNavigation3:"Avaliar os recursos do App Web Progressivo.",helpUseCaseSnapshot1:"Localizar problemas de acessibilidade em aplicativos de página única ou formulários complexos.",helpUseCaseSnapshot2:"Avaliar práticas recomendadas de menus e elementos da interface ocultos nas interações.",helpUseCaseTimespan1:"Medir as mudanças de layout e o tempo de execução em JavaScript em uma série de interações.",helpUseCaseTimespan2:"Descobrir oportunidades de desempenho para melhorar a experiência de páginas de longa duração e aplicativos de página única.",highestImpact:"Maior impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoria informativa}one{{numInformative} auditoria informativa}other{{numInformative} auditorias informativas}}",mobile:"Dispositivo móvel",navigationDescription:"Carregamento de página",navigationLongDescription:"Os relatórios de navegação analisam o carregamento de uma única página, exatamente como os relatórios originais do Lighthouse.",navigationReport:"Relatório de navegação",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} relatório de navegação}one{{numNavigation} relatório de navegação}other{{numNavigation} relatórios de navegação}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoria com possibilidade de aprovação}one{{numPassableAudits} auditoria com possibilidade de aprovação}other{{numPassableAudits} auditorias com possibilidade de aprovação}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoria aprovada}one{{numPassed} auditoria aprovada}other{{numPassed} auditorias aprovadas}}",ratingAverage:"Média",ratingError:"Erro",ratingFail:"Ruim",ratingPass:"Bom",save:"Salvar",snapshotDescription:"Estado capturado da página",snapshotLongDescription:"Os relatórios instantâneos analisam a página em um estado específico, normalmente após interações do usuário.",snapshotReport:"Relatório instantâneo",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} relatório de snapshot}one{{numSnapshot} relatório de snapshot}other{{numSnapshot} relatórios de snapshot}}",summary:"Resumo",timespanDescription:"Interações do usuário",timespanLongDescription:"Os relatórios de período analisam um período arbitrário de tempo, que normalmente contém interações do usuário.",timespanReport:"Relatório de período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} relatório de período}one{{numTimespan} relatório de período}other{{numTimespan} relatórios de período}}",title:"Relatório de fluxo de usuários do Lighthouse"},"pt-PT":{allReports:"Todos os relatórios",categories:"Categorias",categoryAccessibility:"Acessibilidade",categoryBestPractices:"Práticas recomendadas",categoryPerformance:"Desempenho",categorySeo:"SEO",desktop:"Computador",helpDialogTitle:"Compreender o relatório do fluxo do Lighthouse",helpLabel:"Compreender os fluxos",helpUseCaseInstructionNavigation:"Usar relatórios de navegação para…",helpUseCaseInstructionSnapshot:"Usar relatórios de resumo para…",helpUseCaseInstructionTimespan:"Usar relatórios de período para…",helpUseCaseNavigation1:"Obter uma pontuação de desempenho do Lighthouse.",helpUseCaseNavigation2:"Medir métricas de desempenho de carregamento de página como Maior preenchimento com conteúdo e Índice de velocidade.",helpUseCaseNavigation3:"Avaliar capacidades de apps Web progressivas.",helpUseCaseSnapshot1:"Detetar problemas de acessibilidade em aplicações de página única ou formulários complexos.",helpUseCaseSnapshot2:"Avaliar as práticas recomendadas de menus e elementos da UI ocultos atrás da interação.",helpUseCaseTimespan1:"Medir as mudanças de esquema e o tempo de execução de JavaScript numa série de interações.",helpUseCaseTimespan2:"Descobrir oportunidades de desempenho para melhorar a experiência de páginas de longa duração e aplicações de página única.",highestImpact:"Maior impacto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} auditoria informativa}other{{numInformative} auditorias informativas}}",mobile:"Dispositivos móveis",navigationDescription:"Carregamento de página",navigationLongDescription:"Os relatórios de navegação analisam um carregamento de página único, exatamente como os relatórios originais do Lighthouse.",navigationReport:"Relatório de navegação",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} relatório de navegação}other{{numNavigation} relatórios de navegação}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} auditoria que pode ser aprovada}other{{numPassableAudits} auditorias que podem ser aprovadas}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} auditoria aprovada}other{{numPassed} auditorias aprovadas}}",ratingAverage:"Média",ratingError:"Erro",ratingFail:"Fraca",ratingPass:"Boa",save:"Guardar",snapshotDescription:"Estado da página capturado",snapshotLongDescription:"Os relatórios de resumo analisam a página num estado específico, normalmente após interações do utilizador.",snapshotReport:"Relatório de resumo",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} relatório de resumo}other{{numSnapshot} relatórios de resumo}}",summary:"Resumo",timespanDescription:"Interações do utilizador",timespanLongDescription:"Os relatórios de período analisam um período arbitrário que, normalmente, contém interações do utilizador.",timespanReport:"Relatório de período",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} relatório de período}other{{numTimespan} relatórios de período}}",title:"Relatório do fluxo do utilizador do Lighthouse"},ro:{allReports:"Toate rapoartele",categories:"Categorii",categoryAccessibility:"Accesibilitate",categoryBestPractices:"Cele mai bune practici",categoryPerformance:"Performanță",categorySeo:"SEO",desktop:"Computer",helpDialogTitle:"Înțelegerea Raportului privind fluxul Lighthouse",helpLabel:"Înțelegerea fluxurilor",helpUseCaseInstructionNavigation:"Folosește Rapoartele privind navigarea pentru...",helpUseCaseInstructionSnapshot:"Folosește Rapoartele privind instantaneele pentru...",helpUseCaseInstructionTimespan:"Folosește Rapoartele privind perioada pentru...",helpUseCaseNavigation1:"Obține un scor de performanță pentru Lighthouse.",helpUseCaseNavigation2:"Măsoară valorile de performanță pentru încărcarea paginii, cum ar fi Largest Contentful Paint și indicele de viteză.",helpUseCaseNavigation3:"Evaluează funcțiile aplicațiilor web progresive.",helpUseCaseSnapshot1:"Identifică problemele legate de accesibilitate în aplicații cu o singură pagină sau formulare complexe.",helpUseCaseSnapshot2:"Evaluează recomandările pentru meniuri și elemente IU din spatele interacțiunilor.",helpUseCaseTimespan1:"Măsoară modificările de aspect și timpul de execuție JavaScript pentru o serie de interacțiuni.",helpUseCaseTimespan2:"Descoperă oportunități de performanță pentru a îmbunătăți experiența în paginile vechi și aplicațiile cu o singură pagină.",highestImpact:"Cel mai mare impact",informativeAuditCount:"{numInformative,plural, =1{{numInformative} verificare informativă}few{{numInformative} verificări informative}other{{numInformative} de verificări informative}}",mobile:"Mobil",navigationDescription:"Încărcarea paginii",navigationLongDescription:"Rapoartele privind navigarea analizează încărcarea unei singure pagini, exact ca rapoartele Lighthouse inițiale.",navigationReport:"Raport privind navigarea",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} raport privind navigarea}few{{numNavigation} rapoarte privind navigarea}other{{numNavigation} de rapoarte privind navigarea}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} verificare care poate reuși}few{{numPassableAudits} verificări care pot reuși}other{{numPassableAudits} de verificări care pot reuși}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} verificare reușită}few{{numPassed} verificări reușite}other{{numPassed} de verificări reușite}}",ratingAverage:"Medie",ratingError:"Eroare",ratingFail:"Slabă",ratingPass:"Bună",save:"Salvează",snapshotDescription:"Starea înregistrată a paginii",snapshotLongDescription:"Rapoartele privind instantaneele analizează pagina într-o anumită stare, de obicei după interacțiunile cu utilizatorul.",snapshotReport:"Raport instantaneu",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} raport instantaneu}few{{numSnapshot} rapoarte instantanee}other{{numSnapshot} de rapoarte instantanee}}",summary:"Rezumat",timespanDescription:"Interacțiunile utilizatorilor",timespanLongDescription:"Rapoartele privind perioada analizează o perioadă arbitrară, care conține de obicei interacțiuni cu utilizatorul.",timespanReport:"Raport privind perioada de timp",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} raport privind intervalul de timp}few{{numTimespan} rapoarte privind intervalul de timp}other{{numTimespan} de rapoarte privind intervalul de timp}}",title:"Raport privind fluxul pentru utilizatori Lighthouse"},ru:{allReports:"Все отчеты",categories:"Категории",categoryAccessibility:"Специальные возможности",categoryBestPractices:"Рекомендации",categoryPerformance:"Производительность",categorySeo:"Поисковая оптимизация",desktop:"Версия для компьютера",helpDialogTitle:"Интерпретация отчета Lighthouse о пути пользователя",helpLabel:"Узнать о путях",helpUseCaseInstructionNavigation:"Использовать отчеты о навигации, чтобы…",helpUseCaseInstructionSnapshot:"Использовать отчеты о состоянии страницы на определенный момент времени, чтобы…",helpUseCaseInstructionTimespan:"Использовать отчеты об анализе временного диапазона, чтобы…",helpUseCaseNavigation1:"Получить показатель производительности Lighthouse.",helpUseCaseNavigation2:"Измерить показатели загрузки страницы, например время отрисовки самого крупного контента и индекс скорости загрузки.",helpUseCaseNavigation3:"Оценить возможности современного веб-приложения.",helpUseCaseSnapshot1:"Обнаружить проблемы доступности в одностраничных приложениях и сложных формах.",helpUseCaseSnapshot2:"Оценить рекомендации в отношении меню и элементов интерфейса, участвующих во взаимодействии.",helpUseCaseTimespan1:"Измерить смещения макета и время выполнения JavaScript в ходе серии взаимодействий.",helpUseCaseTimespan2:"Узнать возможности для улучшения взаимодействия со страницами, которые используются в течение длительного времени, и одностраничными приложениями.",highestImpact:"С наибольшим влиянием",informativeAuditCount:"{numInformative,plural, =1{{numInformative} информационная проверка}one{{numInformative} информационная проверка}few{{numInformative} информационные проверки}many{{numInformative} информационных проверок}other{{numInformative} информационной проверки}}",mobile:"Мобильная версия",navigationDescription:"Загрузка страницы",navigationLongDescription:"В отчетах о навигации представлен анализ загрузки одной страницы, в точности как в исходных отчетах Lighthouse.",navigationReport:"Отчет о навигации",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} отчет о переходе на страницу}one{{numNavigation} отчет о переходе на страницу}few{{numNavigation} отчета о переходе на страницу}many{{numNavigation} отчетов о переходе на страницу}other{{numNavigation} отчета о переходе на страницу}}",passableAuditCount:"{numPassableAudits,plural, =1{Можно пройти {numPassableAudits} проверку}one{Можно пройти {numPassableAudits} проверку}few{Можно пройти {numPassableAudits} проверки}many{Можно пройти {numPassableAudits} проверок}other{Можно пройти {numPassableAudits} проверки}}",passedAuditCount:"{numPassed,plural, =1{Пройдена {numPassed} проверка}one{Пройдена {numPassed} проверка}few{Пройдено {numPassed} проверки}many{Пройдено {numPassed} проверок}other{Пройдено {numPassed} проверки}}",ratingAverage:"Средне",ratingError:"Ошибка",ratingFail:"Плохо",ratingPass:"Хорошо",save:"Сохранить",snapshotDescription:"Зарегистрированное состояние страницы",snapshotLongDescription:"В отчетах о состоянии страницы на определенный момент времени представлен анализ конкретного состояния страницы (обычно после взаимодействия с пользователем).",snapshotReport:"Отчет о состоянии страницы на определенный момент времени",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} отчет о состоянии страницы на определенный момент времени}one{{numSnapshot} отчет о состоянии страницы на определенный момент времени}few{{numSnapshot} отчета о состоянии страницы на определенный момент времени}many{{numSnapshot} отчетов о состоянии страницы на определенный момент времени}other{{numSnapshot} отчета о состоянии страницы на определенный момент времени}}",summary:"Сводка",timespanDescription:"Взаимодействие пользователя",timespanLongDescription:"В отчетах об анализе временного диапазона приводятся данные за произвольный период, чаще всего о взаимодействии пользователя со страницей.",timespanReport:"Отчет об анализе временного диапазона",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} отчет об анализе временного диапазона}one{{numTimespan} отчет об анализе временного диапазона}few{{numTimespan} отчета об анализе временного диапазона}many{{numTimespan} отчетов об анализе временного диапазона}other{{numTimespan} отчета об анализе временного диапазона}}",title:"Отчет Lighthouse о пути пользователя"},sk:{allReports:"Všetky prehľady",categories:"Kategórie",categoryAccessibility:"Dostupnosť",categoryBestPractices:"Osvedčené postupy",categoryPerformance:"Výkonnosť",categorySeo:"SEO",desktop:"Počítač",helpDialogTitle:"Vysvetlenie prehľadu cesty používateľov v službe Lighthouse",helpLabel:"Vysvetlenie cesty používateľov",helpUseCaseInstructionNavigation:"Pomocou prehľadov navigácie môžete...",helpUseCaseInstructionSnapshot:"Pomocou prehľadov stavu môžete…",helpUseCaseInstructionTimespan:"Pomocou prehľadov časového rozsahu môžete...",helpUseCaseNavigation1:"Získať skóre výkonnosti v nástroji Lighthouse",helpUseCaseNavigation2:"Merať metriky výkonnosti načítania stránok, ako sú vykreslenie najväčšieho obsahu a index rýchlosti.",helpUseCaseNavigation3:"Získať prístup k možnostiam progresívnych webových aplikácií.",helpUseCaseSnapshot1:"Nájsť problémy s dostupnosťou v jednostránkových aplikáciách alebo zložitých formulároch.",helpUseCaseSnapshot2:"Ohodnotiť osvedčené postupy ponúk a prvkov používateľského rozhrania skrytých za interakciou.",helpUseCaseTimespan1:"Merať posuny rozloženia a čas spustenia kódu JavaScript v rámci radu interakcií.",helpUseCaseTimespan2:"Objaviť príležitosti na zvýšenie výkonnosti s cieľom zlepšiť prostredie dlhodobých stránok a jednostránkových aplikácií.",highestImpact:"Najvyšší vplyv",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informatívna kontrola}few{{numInformative} informatívne kontroly}many{{numInformative} informative audits}other{{numInformative} informatívnych kontrol}}",mobile:"Mobilná verzia",navigationDescription:"Načítanie stránky",navigationLongDescription:"Prehľady navigácie analyzujú jedno načítanie stránky rovnako ako pôvodné prehľady nástroja Lighthouse.",navigationReport:"Prehľad navigácie",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} prehľad navigácie}few{{numNavigation} prehľady navigácie}many{{numNavigation} navigation reports}other{{numNavigation} prehľadov navigácie}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} kontrola, ktorá môže byť úspešná}few{{numPassableAudits} kontroly, ktoré môžu byť úspešné}many{{numPassableAudits} passable audits}other{{numPassableAudits} kontrol, ktoré môže byť úspešné}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} úspešná kontrola}few{{numPassed} úspešné kontroly}many{{numPassed} audits passed}other{{numPassed} úspešných kontrol}}",ratingAverage:"Priemer",ratingError:"Chyba",ratingFail:"Slabé",ratingPass:"Dobré",save:"Uložiť",snapshotDescription:"Zachytený stav stránky",snapshotLongDescription:"Prehľady stavu analyzujú stránku v konkrétnom stave, zvyčajne po interakciách používateľov.",snapshotReport:"Prehľad stavu",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} prehľad stavu}few{{numSnapshot} prehľady stavu}many{{numSnapshot} snapshot reports}other{{numSnapshot} prehľadov stavu}}",summary:"Súhrn",timespanDescription:"Interakcie používateľov",timespanLongDescription:"Prehľady časového rozsahu analyzujú ľubovoľné obdobie zvyčajne obsahujúce interakcie používateľov.",timespanReport:"Prehľad časového rozsahu",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} prehľad časového rozsahu}few{{numTimespan} prehľady časového rozsahu}many{{numTimespan} timespan reports}other{{numTimespan} prehľadov časového rozsahu}}",title:"Prehľad cesty používateľov v službe Lighthouse"},sl:{allReports:"Vsa poročila",categories:"Kategorije",categoryAccessibility:"Dostopnost",categoryBestPractices:"Najboljši postopki",categoryPerformance:"Delovanje",categorySeo:"SEO",desktop:"Namizna različica",helpDialogTitle:"Razumevanje poročila o toku orodja Lighthouse",helpLabel:"Razumevanje tokov",helpUseCaseInstructionNavigation:"Uporaba poročil o pomikanju za …",helpUseCaseInstructionSnapshot:"Uporaba poročil o povzetku za …",helpUseCaseInstructionTimespan:"Uporaba poročil o časovnem obdobju za …",helpUseCaseNavigation1:"Pridobivanje rezultata uspešnosti orodja Lighthouse.",helpUseCaseNavigation2:"Izvajanje meritev uspešnosti nalaganja strani, kot sta največji vsebinski izris in indeks hitrosti.",helpUseCaseNavigation3:"Ocenjevanje zmožnosti modernih spletnih aplikacij.",helpUseCaseSnapshot1:"Iskanje težav z dostopnostjo v enostranskih aplikacijah ali kompleksnih obrazcih.",helpUseCaseSnapshot2:"Ovrednotenje najboljših postopkov menijev in elementov uporabniškega vmesnika, skritimi za interakcijo.",helpUseCaseTimespan1:"Merjenje pomikov postavitev in časa izvajanja JavaScripta v seriji interakcij.",helpUseCaseTimespan2:"Odkrivanje priložnosti za uspešnost zaradi izboljšanja izkušnje pri dolgotrajnih straneh in enostranskih aplikacijah.",highestImpact:"Največji vpliv",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativna revizija}one{{numInformative} informativna revizija}two{{numInformative} informativni reviziji}few{{numInformative} informativne revizije}other{{numInformative} informativnih revizij}}",mobile:"Mobilna različica",navigationDescription:"Nalaganje strani",navigationLongDescription:"Poročila o pomikanju analizirajo nalaganje ene strani, enako kot izvirna poročila orodja Lighthouse.",navigationReport:"Poročilo o pomikanju",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} poročilo o premikanju}one{{numNavigation} poročilo o premikanju}two{{numNavigation} poročili o premikanju}few{{numNavigation} poročila o premikanju}other{{numNavigation} poročil o premikanju}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} morebitno uspešna revizija}one{{numPassableAudits} morebitno uspešna revizija}two{{numPassableAudits} morebitno uspešni reviziji}few{{numPassableAudits} morebitno uspešne revizije}other{{numPassableAudits} morebitno uspešnih revizij}}",passedAuditCount:"{numPassed,plural, =1{Uspešno je bila opravljena {numPassed} revizija}one{Uspešno je bila opravljena {numPassed} revizija}two{Uspešno sta bili opravljeni {numPassed} reviziji}few{Uspešno so bile opravljene {numPassed} revizije}other{Uspešno je bilo opravljenih {numPassed} revizij}}",ratingAverage:"Povprečno",ratingError:"Napaka",ratingFail:"Šibko",ratingPass:"Dobro",save:"Shrani",snapshotDescription:"Zajeto stanje strani",snapshotLongDescription:"Poročila o povzetku analizirajo stran v določenem stanju, običajno po uporabniških interakcijah.",snapshotReport:"Poročilo o povzetku",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} poročilo o povzetku}one{{numSnapshot} poročilo o povzetku}two{{numSnapshot} poročili o povzetku}few{{numSnapshot} poročila o povzetku}other{{numSnapshot} poročil o povzetku}}",summary:"Povzetek",timespanDescription:"Uporabniške interakcije",timespanLongDescription:"Poročila o časovnem obdobju analizirajo poljubno časovno obdobje, ki običajno vsebuje uporabniške interakcije.",timespanReport:"Poročilo o časovnem obdobju",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} poročilo o časovnem razponu}one{{numTimespan} poročilo o časovnem razponu}two{{numTimespan} poročili o časovnem razponu}few{{numTimespan} poročila o časovnem razponu}other{{numTimespan} poročil o časovnem razponu}}",title:"Poročilo o toku uporabnikov orodja Lighthouse"},sr:{allReports:"Сви извештаји",categories:"Категорије",categoryAccessibility:"Приступачност",categoryBestPractices:"Најбоље праксе",categoryPerformance:"Учинак",categorySeo:"Оптимизација за претраживаче",desktop:"Рачунар",helpDialogTitle:"Разумевање извештаја о току за Lighthouse",helpLabel:"Разумевање токова",helpUseCaseInstructionNavigation:"Користите извештаје о навигацији за...",helpUseCaseInstructionSnapshot:"Користите извештаје са прегледом за...",helpUseCaseInstructionTimespan:"Користите извештаје за период за...",helpUseCaseNavigation1:"Преузмите Lighthouse оцену учинка.",helpUseCaseNavigation2:"Измерите показатеље учинка за учитавање странице, као што су највеће приказивање садржаја и индекс брзине.",helpUseCaseNavigation3:"Приступите могућностима прогресивних веб-апликација.",helpUseCaseSnapshot1:"Пронађите проблеме са приступачношћу у апликацијама са једном страницом или комплексним формама.",helpUseCaseSnapshot2:"Процените најбоље праксе за меније и елементе корисничког интерфејса сакривене иза интеракције.",helpUseCaseTimespan1:"Измерите време извршавања прелаза изгледа и JavaScript-а за серију интеракција.",helpUseCaseTimespan2:"Откријте прилике за учинак да бисте побољшали доживљај за дугорочне странице и апликације са једном страницом.",highestImpact:"Највећи утицај",informativeAuditCount:"{numInformative,plural, =1{{numInformative} информативна провера}one{{numInformative} информативна провера}few{{numInformative} информативне провере}other{{numInformative} информативних провера}}",mobile:"Мобилни уређај",navigationDescription:"Учитавање странице",navigationLongDescription:"Извештаји о навигацији анализирају учитавање појединачне странице, потпуно исто као оригинални Lighthouse извештаји.",navigationReport:"Извештај о навигацији",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} извештај о навигацији}one{{numNavigation} извештај о навигацији}few{{numNavigation} извештаја о навигацији}other{{numNavigation} извештаја о навигацији}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} провера која може да се прође}one{{numPassableAudits} провера која може да се прође}few{{numPassableAudits} провере које могу да се прођу}other{{numPassableAudits} провера које могу да се прођу}}",passedAuditCount:"{numPassed,plural, =1{Прошли сте {numPassed} проверу}one{Прошли сте{numPassed} проверу}few{Прошли сте{numPassed} провере}other{Прошли сте{numPassed} провера}}",ratingAverage:"Просек",ratingError:"Грешка",ratingFail:"Слабо",ratingPass:"Добро",save:"Сачувај",snapshotDescription:"Снимљено стање странице",snapshotLongDescription:"Извештаји са прегледом анализирају страницу у посебном стању, обично после интеракције са корисницима.",snapshotReport:"Извештај са прегледом",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} извештај са прегледом}one{{numSnapshot} извештај са прегледом}few{{numSnapshot} извештаја са прегледом}other{{numSnapshot} извештаја са прегледом}}",summary:"Резиме",timespanDescription:"Корисничке интеракције",timespanLongDescription:"Извештаји за период анализирају насумични период, који обично садржи интеракције корисника.",timespanReport:"Извештај за период",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} извештај за период}one{{numTimespan} извештај за период}few{{numTimespan} извештаја за период}other{{numTimespan} извештаја за период}}",title:"Извештај о корисничком току за Lighthouse"},"sr-Latn":{allReports:"Svi izveštaji",categories:"Kategorije",categoryAccessibility:"Pristupačnost",categoryBestPractices:"Najbolje prakse",categoryPerformance:"Učinak",categorySeo:"Optimizacija za pretraživače",desktop:"Računar",helpDialogTitle:"Razumevanje izveštaja o toku za Lighthouse",helpLabel:"Razumevanje tokova",helpUseCaseInstructionNavigation:"Koristite izveštaje o navigaciji za...",helpUseCaseInstructionSnapshot:"Koristite izveštaje sa pregledom za...",helpUseCaseInstructionTimespan:"Koristite izveštaje za period za...",helpUseCaseNavigation1:"Preuzmite Lighthouse ocenu učinka.",helpUseCaseNavigation2:"Izmerite pokazatelje učinka za učitavanje stranice, kao što su najveće prikazivanje sadržaja i indeks brzine.",helpUseCaseNavigation3:"Pristupite mogućnostima progresivnih veb-aplikacija.",helpUseCaseSnapshot1:"Pronađite probleme sa pristupačnošću u aplikacijama sa jednom stranicom ili kompleksnim formama.",helpUseCaseSnapshot2:"Procenite najbolje prakse za menije i elemente korisničkog interfejsa sakrivene iza interakcije.",helpUseCaseTimespan1:"Izmerite vreme izvršavanja prelaza izgleda i JavaScript-a za seriju interakcija.",helpUseCaseTimespan2:"Otkrijte prilike za učinak da biste poboljšali doživljaj za dugoročne stranice i aplikacije sa jednom stranicom.",highestImpact:"Najveći uticaj",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativna provera}one{{numInformative} informativna provera}few{{numInformative} informativne provere}other{{numInformative} informativnih provera}}",mobile:"Mobilni uređaj",navigationDescription:"Učitavanje stranice",navigationLongDescription:"Izveštaji o navigaciji analiziraju učitavanje pojedinačne stranice, potpuno isto kao originalni Lighthouse izveštaji.",navigationReport:"Izveštaj o navigaciji",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} izveštaj o navigaciji}one{{numNavigation} izveštaj o navigaciji}few{{numNavigation} izveštaja o navigaciji}other{{numNavigation} izveštaja o navigaciji}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} provera koja može da se prođe}one{{numPassableAudits} provera koja može da se prođe}few{{numPassableAudits} provere koje mogu da se prođu}other{{numPassableAudits} provera koje mogu da se prođu}}",passedAuditCount:"{numPassed,plural, =1{Prošli ste {numPassed} proveru}one{Prošli ste{numPassed} proveru}few{Prošli ste{numPassed} provere}other{Prošli ste{numPassed} provera}}",ratingAverage:"Prosek",ratingError:"Greška",ratingFail:"Slabo",ratingPass:"Dobro",save:"Sačuvaj",snapshotDescription:"Snimljeno stanje stranice",snapshotLongDescription:"Izveštaji sa pregledom analiziraju stranicu u posebnom stanju, obično posle interakcije sa korisnicima.",snapshotReport:"Izveštaj sa pregledom",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} izveštaj sa pregledom}one{{numSnapshot} izveštaj sa pregledom}few{{numSnapshot} izveštaja sa pregledom}other{{numSnapshot} izveštaja sa pregledom}}",summary:"Rezime",timespanDescription:"Korisničke interakcije",timespanLongDescription:"Izveštaji za period analiziraju nasumični period, koji obično sadrži interakcije korisnika.",timespanReport:"Izveštaj za period",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} izveštaj za period}one{{numTimespan} izveštaj za period}few{{numTimespan} izveštaja za period}other{{numTimespan} izveštaja za period}}",title:"Izveštaj o korisničkom toku za Lighthouse"},sv:{allReports:"Alla rapporter",categories:"Kategorier",categoryAccessibility:"Tillgänglighet",categoryBestPractices:"Bästa metoder",categoryPerformance:"Prestanda",categorySeo:"SEO",desktop:"Dator",helpDialogTitle:"Information om rapporten över flöde i Lighthouse",helpLabel:"Information om flöden",helpUseCaseInstructionNavigation:"Du kan använda rapporter över navigering till följande:",helpUseCaseInstructionSnapshot:"Du kan använda rapporter med ögonblicksbilder till följande:",helpUseCaseInstructionTimespan:"Du kan använda rapporter över tidsperiod till följande:",helpUseCaseNavigation1:"Hämta ett prestandavärde för Lighthouse.",helpUseCaseNavigation2:"Mät resultatmätvärden för sidhämtningar, t.ex. Största uppritningen av innehåll och hastighetsindex.",helpUseCaseNavigation3:"Testa funktioner för progressiva webbappar.",helpUseCaseSnapshot1:"Hitta tillgänglighetsproblem i appar för en sida eller komplexa formulär.",helpUseCaseSnapshot2:"Utvärdera rekommenderade metoder för menyer och UI-element som döljs bakom interaktioner.",helpUseCaseTimespan1:"Mäta layoutförskjutningar och körningstider för JavaScript i en serie interaktioner.",helpUseCaseTimespan2:"Upptäck prestandamöjligheter och förbättra upplevelsen på långlivade sidor och appar för en sida.",highestImpact:"Störst effekt",informativeAuditCount:"{numInformative,plural, =1{{numInformative} informativ granskning}other{{numInformative} informativa granskningar}}",mobile:"Mobil",navigationDescription:"Sidhämtning",navigationLongDescription:"Med rapporter över navigering kan du analysera en enskild sidhämtning, precis som med de ursprungliga Lighthouse-rapporterna.",navigationReport:"Rapport över navigering",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} rapport över navigering}other{{numNavigation} rapporter över navigering}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} granskning som kan godkännas}other{{numPassableAudits} granskningar som kan godkännas}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} godkänd granskning}other{{numPassed} godkända granskningar}}",ratingAverage:"Genomsnittlig",ratingError:"Fel",ratingFail:"Dålig",ratingPass:"Bra",save:"Spara",snapshotDescription:"Sidans status vid en viss tidpunkt",snapshotLongDescription:"Med rapporter med ögonblicksbilder går det att analysera en sida i ett visst läge, vanligtvis efter interaktioner från användare.",snapshotReport:"Rapport med ögonblicksbild",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} rapport över översiktsbild}other{{numSnapshot} rapporter över översiktsbilder}}",summary:"Översikt",timespanDescription:"Användarinteraktioner",timespanLongDescription:"Med rapporter över tidsintervall kan du analysera en slumpmässig tidsperiod som oftast innehåller användarinteraktioner.",timespanReport:"Rapport över tidsperiod",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} rapport över tidsintervall}other{{numTimespan} rapporter över tidsintervaller}}",title:"Rapport över användarflöde i Lighthouse"},ta:{allReports:"அனைத்து அறிக்கைகளும்",categories:"வகைகள்",categoryAccessibility:"மாற்றுத்திறன் வசதி",categoryBestPractices:"சிறந்த நடைமுறைகள்",categoryPerformance:"இணையச் செயல்திறன்",categorySeo:"SEO",desktop:"டெஸ்க்டாப்",helpDialogTitle:"Lighthouse செயல்முறை அறிக்கையை அறிந்துகொள்ளுதல்",helpLabel:"செயல்முறைகளை அறிந்துகொள்க",helpUseCaseInstructionNavigation:"வழிசெலுத்துதல் குறித்த அறிக்கைகளை இவற்றுக்குப் பயன்படுத்து...",helpUseCaseInstructionSnapshot:"ஸ்னாப்ஷாட் குறித்த அறிக்கைகளை இவற்றுக்குப் பயன்படுத்து...",helpUseCaseInstructionTimespan:"கால அளவு குறித்த அறிக்கைகளை இவற்றுக்குப் பயன்படுத்து...",helpUseCaseNavigation1:"Lighthouseஸின் செயல்திறன் ஸ்கோரைப் பெறுதல்.",helpUseCaseNavigation2:"பெரிய பகுதியைக் காண்பிக்கும் நேரம், ஸ்பீடு இண்டெக்ஸ் போன்ற ‘பக்க ஏற்றச் செயல்திறன் அளவீடுகளை’ அளவிடுதல்.",helpUseCaseNavigation3:"மேம்பட்ட இணைய ஆப்ஸின் திறன்களை மதிப்பாய்வு செய்தல்.",helpUseCaseSnapshot1:"ஒற்றைப் பக்க ஆப்ஸ், சிக்கலான படிவங்கள் போன்றவற்றில் உள்ள அணுகல்தன்மைச் சிக்கல்களைக் கண்டறிதல்.",helpUseCaseSnapshot2:"செயல்பாட்டிற்குப் பின்னால் மறைக்கப்பட்டுள்ள மெனுக்கள், UI உறுப்புகள் ஆகியவற்றின் சிறந்த நடைமுறைகளை மதிப்பாய்வு செய்தல்.",helpUseCaseTimespan1:"தொடர் செயல்பாடுகளில் தளவமைப்பு மாற்றங்கள், JavaScript செயல்பாட்டு நேரம் ஆகியவற்றை அளவிடுதல்.",helpUseCaseTimespan2:"நீண்ட நேரம் திறந்திருக்கும் பக்கங்கள், ஒற்றைப் பக்க ஆப்ஸ் ஆகியவை தரும் பயனர் அனுபவத்தை மேம்படுத்தும் வகையில் செயல்திறன் வாய்ப்புகளைக் கண்டறிதல்.",highestImpact:"அதிகளவு தாக்கத்தை ஏற்படுத்தியவை",informativeAuditCount:"{numInformative,plural, =1{தகவல்கள் நிறைந்த சோதனை: {numInformative}}other{தகவல்கள் நிறைந்த சோதனைகள்: {numInformative}}}",mobile:"மொபைல்",navigationDescription:"பக்க ஏற்றம்",navigationLongDescription:"அசல் Lighthouse அறிக்கைகளைப் போலவே வழிசெலுத்துதல் அறிக்கைகளும் ஒற்றைப் பக்க ஏற்றத்தைப் பகுப்பாய்வு செய்யும்.",navigationReport:"வழிசெலுத்துதல் அறிக்கை",navigationReportCount:"{numNavigation,plural, =1{வழிசெலுத்துதல் அறிக்கை: {numNavigation}}other{வழிசெலுத்துதல் அறிக்கைகள்: {numNavigation}}}",passableAuditCount:"{numPassableAudits,plural, =1{தேர்ச்சி பெறக்கூடிய சோதனை: {numPassableAudits}}other{தேர்ச்சி பெறக்கூடிய சோதனைகள்: {numPassableAudits}}}",passedAuditCount:"{numPassed,plural, =1{தேர்ச்சி பெற்ற சோதனை: {numPassed}}other{தேர்ச்சி பெற்ற சோதனைகள்: {numPassed}}}",ratingAverage:"சராசரி",ratingError:"பிழை",ratingFail:"மோசம்",ratingPass:"நன்று",save:"சேமி",snapshotDescription:"படமெடுக்கப்பட்ட பக்கத்தின் நிலை",snapshotLongDescription:"ஸ்னாப்ஷாட் அறிக்கைகள் ஒரு குறிப்பிட்ட நிலையில் பக்கத்தைப் பகுப்பாய்வு செய்யும். பெரும்பாலும் பயனரின் செயல்பாடுகளுக்குப் பிறகே பகுப்பாய்வு செய்யும்.",snapshotReport:"ஸ்னாப்ஷாட் அறிக்கை",snapshotReportCount:"{numSnapshot,plural, =1{ஸ்னாப்ஷாட் அறிக்கை: {numSnapshot}}other{ஸ்னாப்ஷாட் அறிக்கைகள்: {numSnapshot}}}",summary:"சுருக்க விவரம்",timespanDescription:"பயனர் செயல்பாடுகள்",timespanLongDescription:"கால அளவு குறித்த அறிக்கைகள் தன்னிச்சையான கால அளவைப் பகுப்பாய்வு செய்யும். பெரும்பாலும், இந்தக் கால அளவில் பயனரின் செயல்பாடுகள் இடம்பெற்றிருக்கும்.",timespanReport:"கால அளவு குறித்த அறிக்கை",timespanReportCount:"{numTimespan,plural, =1{கால அளவு அறிக்கை: {numTimespan}}other{கால அளவு அறிக்கைகள்: {numTimespan}}}",title:"Lighthouseஸில் பயனர் செல்லும் பக்கங்களின் வரிசை குறித்த அறிக்கை"},te:{allReports:"అన్ని రిపోర్ట్‌లు",categories:"కేటగిరీలు",categoryAccessibility:"యాక్సెసిబిలిటీ",categoryBestPractices:"ఉత్తమ అభ్యాసాలు",categoryPerformance:"పనితీరు",categorySeo:"SEO",desktop:"డెస్క్‌టాప్",helpDialogTitle:"Lighthouse ఫ్లో రిపోర్ట్‌ను అర్థం చేసుకోవడం",helpLabel:"ఫ్లో రిపోర్ట్‌లను అర్థం చేసుకోవడం",helpUseCaseInstructionNavigation:"నావిగేషన్ రిపోర్ట్‌లను ఉపయోగించి...",helpUseCaseInstructionSnapshot:"స్నాప్‌షాట్ రిపోర్ట్‌లను ఉపయోగించి...",helpUseCaseInstructionTimespan:"కాలవ్యవధి రిపోర్ట్‌లను ఉపయోగించి...",helpUseCaseNavigation1:"Lighthouse పనితీరు స్కోర్‌ను పొందండి.",helpUseCaseNavigation2:"కంటెంట్ కలిగి ఉండే అతిపెద్ద పెయింట్, వేగం ఇండెక్స్ వంటి పేజీ లోడ్ పనితీరు కొలమానాలను లెక్కించండి.",helpUseCaseNavigation3:"ప్రోగ్రెసివ్ వెబ్ యాప్ సామర్థ్యాలను అంచనా వేయండి.",helpUseCaseSnapshot1:"సింగిల్ పేజీ యాప్‌లు లేదా సంక్లిష్ట ఫారమ్‌లలో ఉన్న యాక్సెసిబిలిటీ సమస్యలను కనుగొనండి.",helpUseCaseSnapshot2:"ఇంటరాక్షన్ లోపల ఉన్న మెనూలు, UI ఎలిమెంట్‌ల బెస్ట్ ప్రాక్టీసులను పరిశీలించండి.",helpUseCaseTimespan1:"వివిధ ఇంటరాక్షన్‌లకు సంబంధించిన లేఅవుట్ షిఫ్ట్‌లను, JavaScript అమలయ్యే సమయాన్ని లెక్కించండి.",helpUseCaseTimespan2:"దీర్ఘకాలిక పేజీలు, సింగిల్-పేజీ యాప్‌ల అనుభవాన్ని మెరుగుపరచడానికి పనితీరు అవకాశాలను కనుగొనండి.",highestImpact:"అత్యంత ప్రభావవంతమైనవి",informativeAuditCount:"{numInformative,plural, =1{{numInformative} సమాచారాత్మక ఆడిట్}other{{numInformative} సమాచారాత్మక ఆడిట్‌లు}}",mobile:"మొబైల్",navigationDescription:"పేజీ లోడ్",navigationLongDescription:"నావిగేషన్ రిపోర్ట్‌లు, ఒరిజినల్ Lighthouse రిపోర్ట్‌ల మాదిరిగానే సింగిల్ పేజీ లోడ్‌ను విశ్లేషిస్తాయి.",navigationReport:"నావిగేషన్ రిపోర్ట్",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} నావిగేషన్ రిపోర్ట్}other{{numNavigation} నావిగేషన్ రిపోర్ట్‌లు}}",passableAuditCount:"{numPassableAudits,plural, =1{పాస్ అయ్యే అవకాశం ఉన్న {numPassableAudits} ఆడిట్}other{పాస్ అయ్యే అవకాశం ఉన్న {numPassableAudits} ఆడిట్‌లు}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} ఆడిట్ పాస్ అయ్యింది}other{{numPassed} ఆడిట్‌లు పాస్ అయ్యాయి}}",ratingAverage:"ఓ మోస్తరుగా ఉంది",ratingError:"ఎర్రర్",ratingFail:"బాగా లేదు",ratingPass:"బాగుంది",save:"సేవ్ చేయండి",snapshotDescription:"పేజీ తాలూకు క్యాప్చర్ చేయబడిన స్టేట్",snapshotLongDescription:"స్నాప్‌షాట్ రిపోర్ట్‌లు, ఒక నిర్దిష్ట స్థితిలో ఉన్న పేజీని విశ్లేషిస్తాయి, సాధారణంగా ఈ విశ్లేషణ అనేది యూజర్ ఇంటరాక్షన్‌ల తర్వాత జరుగుతుంది.",snapshotReport:"స్నాప్‌షాట్ రిపోర్ట్",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} స్నాప్‌షాట్ రిపోర్ట్}other{{numSnapshot} స్నాప్‌షాట్ రిపోర్ట్‌లు}}",summary:"సారాంశం",timespanDescription:"యూజర్ ఇంటరాక్షన్‌లు",timespanLongDescription:"కాలవ్యవధి రిపోర్ట్‌లు ఒక యాదృచ్ఛిక సమయ వ్యవధిని విశ్లేషిస్తాయి, సాధారణంగా ఈ వ్యవధి యూజర్ ఇంటరాక్షన్‌లను కలిగి ఉంటుంది.",timespanReport:"పేజీలో యూజర్ ఇంటరాక్టివిటీకి సంబంధించిన రిపోర్ట్",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} కాల వ్యవధి రిపోర్ట్}other{{numTimespan} కాల వ్యవధి రిపోర్ట్‌లు}}",title:"Lighthouse యూజర్ ఫ్లో రిపోర్ట్"},th:{allReports:"รายงานทั้งหมด",categories:"หมวดหมู่",categoryAccessibility:"การช่วยเหลือพิเศษ",categoryBestPractices:"แนวทางปฏิบัติที่ดีที่สุด",categoryPerformance:"ประสิทธิภาพ",categorySeo:"SEO",desktop:"เดสก์ท็อป",helpDialogTitle:"ทำความเข้าใจรายงานโฟลว์ของ Lighthouse",helpLabel:"ทำความเข้าใจโฟลว์",helpUseCaseInstructionNavigation:"ใช้รายงานการไปยังส่วนต่างๆ เพื่อ...",helpUseCaseInstructionSnapshot:"ใช้รายงานภาพรวมเพื่อ...",helpUseCaseInstructionTimespan:"ใช้รายงานระยะเวลาเพื่อ...",helpUseCaseNavigation1:"รับคะแนนประสิทธิภาพของ Lighthouse",helpUseCaseNavigation2:"วัดเมตริกประสิทธิภาพของการโหลดหน้าเว็บ เช่น Largest Contentful Paint และดัชนีความเร็ว",helpUseCaseNavigation3:"ประเมินความสามารถของ Progressive Web App",helpUseCaseSnapshot1:"ค้นหาปัญหาด้านการช่วยเหลือพิเศษในแอปพลิเคชันหน้าเว็บเดียวหรือรูปแบบที่ซับซ้อน",helpUseCaseSnapshot2:"ประเมินแนวทางปฏิบัติแนะนำของเมนูและองค์ประกอบ UI ที่ซ่อนอยู่หลังการโต้ตอบ",helpUseCaseTimespan1:"วัดการเปลี่ยนแปลงเลย์เอาต์และเวลาในการดำเนินการ JavaScript จากชุดการโต้ตอบต่างๆ",helpUseCaseTimespan2:"สำรวจโอกาสของประสิทธิภาพในการปรับปรุงประสบการณ์ของหน้าเว็บที่มีอายุยาวนานและแอปพลิเคชันหน้าเว็บเดียว",highestImpact:"มีประสิทธิภาพสูงสุด",informativeAuditCount:"{numInformative,plural, =1{การตรวจสอบที่เป็นประโยชน์ {numInformative} ครั้ง}other{การตรวจสอบที่เป็นประโยชน์ {numInformative} ครั้ง}}",mobile:"อุปกรณ์เคลื่อนที่",navigationDescription:"การโหลดหน้าเว็บ",navigationLongDescription:"รายงานการไปยังส่วนต่างๆ จะวิเคราะห์การโหลดหน้าเว็บ 1 ครั้ง เช่นเดียวกับรายงานดั้งเดิมของ Lighthouse ทุกประการ",navigationReport:"รายงานการนำทาง",navigationReportCount:"{numNavigation,plural, =1{รายงานการไปยังส่วนต่างๆ {numNavigation} ฉบับ}other{รายงานการไปยังส่วนต่างๆ {numNavigation} ฉบับ}}",passableAuditCount:"{numPassableAudits,plural, =1{การตรวจสอบที่ผ่านได้ {numPassableAudits} ครั้ง}other{การตรวจสอบที่ผ่านได้ {numPassableAudits} ครั้ง}}",passedAuditCount:"{numPassed,plural, =1{การตรวจสอบที่ผ่าน {numPassed} ครั้ง}other{การตรวจสอบที่ผ่าน {numPassed} ครั้ง}}",ratingAverage:"เฉยๆ",ratingError:"ข้อผิดพลาด",ratingFail:"แย่",ratingPass:"ดี",save:"บันทึก",snapshotDescription:"จับภาพสถานะของหน้าเว็บแล้ว",snapshotLongDescription:"รายงานภาพรวมจะวิเคราะห์หน้าเว็บในสถานะหนึ่ง โดยทั่วไปจะเกิดขึ้นหลังจากการโต้ตอบของผู้ใช้",snapshotReport:"รายงานสแนปชอต",snapshotReportCount:"{numSnapshot,plural, =1{รายงานภาพรวม {numSnapshot} ฉบับ}other{รายงานภาพรวม {numSnapshot} ฉบับ}}",summary:"สรุป",timespanDescription:"การโต้ตอบของผู้ใช้",timespanLongDescription:"รายงานระยะเวลาจะวิเคราะห์ระยะเวลาที่กำหนดเอง ซึ่งมักจะมีการโต้ตอบของผู้ใช้",timespanReport:"รายงานระยะเวลา",timespanReportCount:"{numTimespan,plural, =1{รายงานช่วงเวลา {numTimespan} ฉบับ}other{รายงานช่วงเวลา {numTimespan} ฉบับ}}",title:"รายงานโฟลว์ผู้ใช้ Lighthouse"},tl:{allReports:"Lahat ng Ulat",categories:"Mga Kategorya",categoryAccessibility:"Pagiging accessible",categoryBestPractices:"Pinakamahuhusay na Kagawian",categoryPerformance:"Performance",categorySeo:"SEO",desktop:"Desktop",helpDialogTitle:"Pag-unawa sa Ulat ng Daloy ng Lighthouse",helpLabel:"Pag-unawa sa Mga Daloy",helpUseCaseInstructionNavigation:"Gamitin ang Mga ulat ng pag-navigate para...",helpUseCaseInstructionSnapshot:"Gamitin ang Mga ulat ng snapshot para...",helpUseCaseInstructionTimespan:"Gamitin ang Mga ulat ng tagal ng panahon para...",helpUseCaseNavigation1:"Makakuha ng score sa Performance sa Lighthouse.",helpUseCaseNavigation2:"Sukatin ang mga sukatan ng Performance ng pag-load ng page gaya ng Largest Contentful Paint at Speed Index.",helpUseCaseNavigation3:"Suriin ang mga kakayahan ng Progressive Web App.",helpUseCaseSnapshot1:"Maghanap ng mga isyu sa accessibility sa mga single page application o kumplikadong form.",helpUseCaseSnapshot2:"Suriin ang mga pinakamahuhusay na kagawian ng mga menu at element ng UI na nakatago sa likod ng pakikipag-ugnayan.",helpUseCaseTimespan1:"Sukatin ang mga pagbabago sa layout at tagal ng pag-execute sa JavaScript sa isang serye ng mga pakikipag-ugnayan.",helpUseCaseTimespan2:"Tumuklas ng mga pagkakataon sa performance para pagandahin ang karanasan para sa mga long-lived na page at single-page application.",highestImpact:"Pinakamalaking epekto",informativeAuditCount:"{numInformative,plural, =1{{numInformative} audit na nagbibigay ng impormasyon}one{{numInformative} audit na nagbibigay ng impormasyon}other{{numInformative} na audit na nagbibigay ng impormasyon}}",mobile:"Mobile",navigationDescription:"Pag-load ng page",navigationLongDescription:"Nagsusuri ang mga ulat ng pag-navigate ng isang pag-load ng page, na eksaktong kagaya ng mga orihinal na ulat ng Lighthouse.",navigationReport:"Ulat ng pag-navigate",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} ulat ng pag-navigate}one{{numNavigation} ulat ng pag-navigate}other{{numNavigation} na ulat ng pag-navigate}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} maipapasang audit}one{{numPassableAudits} maipapasang audit}other{{numPassableAudits} na maipapasang audit}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} audit ang pumasa}one{{numPassed} audit ang pumasa}other{{numPassed} na audit ang pumasa}}",ratingAverage:"Average",ratingError:"Error",ratingFail:"Pangit",ratingPass:"Maganda",save:"I-save",snapshotDescription:"Na-capture na status ng page",snapshotLongDescription:"Sinusuri ng mga ulat ng snapshot ang page sa isang partikular na status, na karaniwang pagkatapos ng mga pakikipag-ugnayan ng user.",snapshotReport:"Ulat ng snapshot",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} ulat ng snapshot}one{{numSnapshot} ulat ng snapshot}other{{numSnapshot} na ulat ng snapshot}}",summary:"Buod",timespanDescription:"Mga pakikipag-ugnayan ng user",timespanLongDescription:"Nagsusuri ang mga ulat ng tagal ng panahon ng abitrary na yugto ng panahon, na karaniwang naglalaman ng mga pakikipag-ugnayan ng user.",timespanReport:"Ulat ng tagal ng panahon",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} ulat ng tagal ng panahon}one{{numTimespan} ulat ng tagal ng panahon}other{{numTimespan} na ulat ng tagal ng panahon}}",title:"Ulat ng Daloy ng User ng Lighthouse"},tr:{allReports:"Tüm Raporlar",categories:"Kategoriler",categoryAccessibility:"Erişilebilirlik",categoryBestPractices:"En İyi Uygulamalar",categoryPerformance:"Performans",categorySeo:"SEO",desktop:"Masaüstü",helpDialogTitle:"Lighthouse Akış Raporunu Anlama",helpLabel:"Akışları Anlama",helpUseCaseInstructionNavigation:"Gezinme raporlarını kullanarak..",helpUseCaseInstructionSnapshot:"Anlık görüntü raporlarını kullanarak...",helpUseCaseInstructionTimespan:"Etkileşim süresi raporlarını kullanarak...",helpUseCaseNavigation1:"Lighthouse Performans skoru elde edin.",helpUseCaseNavigation2:"Largest Contentful Paint ve Speed Index gibi sayfa yükleme performans metriklerini ölçün.",helpUseCaseNavigation3:"Progresif Web Uygulaması özelliklerini değerlendirin.",helpUseCaseSnapshot1:"Tek sayfalık uygulamalardaki veya karmaşık formlardaki erişilebilirlik sorunlarını bulun.",helpUseCaseSnapshot2:"Etkileşimin ardında yatan menülerin ve kullanıcı arayüzü öğelerinin en iyi uygulamalarını değerlendirin.",helpUseCaseTimespan1:"Bir dizi etkileşimdeki düzen kaymalarını ve JavaScript yürütme süresini ölçün.",helpUseCaseTimespan2:"Uzun ömürlü sayfalar ve tek sayfalık uygulamalar için deneyimi iyileştirecek performans fırsatlarını keşfedin.",highestImpact:"En yüksek etki",informativeAuditCount:"{numInformative,plural, =1{{numInformative} bilgilendirici denetim}other{{numInformative} bilgilendirici denetim}}",mobile:"Mobil",navigationDescription:"Sayfa yükleme",navigationLongDescription:"Gezinme raporları, orijinal Lighthouse raporlarında olduğu gibi tek bir sayfa yükleme işlemini analiz eder.",navigationReport:"Gezinme raporu",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} gezinme raporu}other{{numNavigation} gezinme raporu}}",passableAuditCount:"{numPassableAudits,plural, =1{Geçme ihtimali olan {numPassableAudits} denetim}other{Geçme ihtimali olan {numPassableAudits} denetim}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} denetim başarılı oldu}other{{numPassed} denetim başarılı oldu}}",ratingAverage:"Orta düzey",ratingError:"Hatalı",ratingFail:"Başarısız",ratingPass:"Başarılı",save:"Kaydet",snapshotDescription:"Sayfanın yakalanmış durumu",snapshotLongDescription:"Anlık görüntü raporları, genellikle kullanıcı etkileşimlerinden sonra olmak üzere sayfayı belirli bir durumda analiz eder.",snapshotReport:"Anlık görüntü raporu",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} anlık görüntü raporu}other{{numSnapshot} anlık görüntü raporu}}",summary:"Özet",timespanDescription:"Kullanıcı etkileşimleri",timespanLongDescription:"Etkileşim süresi raporları, genelde kullanıcı etkileşimlerini içeren herhangi bir zaman dilimini analiz eder.",timespanReport:"Etkileşim süresi raporu",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} zaman aralığı raporu}other{{numTimespan} zaman aralığı raporu}}",title:"Lighthouse Kullanıcı İşlemleri Akışıyla İlgili Rapor"},uk:{allReports:"Усі звіти",categories:"Категорії",categoryAccessibility:"Доступність",categoryBestPractices:"Оптимальні методи",categoryPerformance:"Ефективність",categorySeo:"Оптим. пошук. систем",desktop:"Версія для комп’ютера",helpDialogTitle:"Пояснення звіту Lighthouse про послідовність переходів",helpLabel:"Пояснення звіту про переходи",helpUseCaseInstructionNavigation:"Звіти про навігацію допоможуть вам…",helpUseCaseInstructionSnapshot:"Звіти про стан на певний момент часу допоможуть вам…",helpUseCaseInstructionTimespan:"Звіти про період часу допоможуть вам…",helpUseCaseNavigation1:"Отримати оцінку ефективності в Lighthouse.",helpUseCaseNavigation2:"Вимірювати показники ефективності завантаження сторінки, такі як візуалізація великого контенту й індекс швидкості.",helpUseCaseNavigation3:"Оцінювати можливості прогресивного веб-додатка.",helpUseCaseSnapshot1:"Знаходити проблеми з доступністю в односторінкових додатках чи складних формах.",helpUseCaseSnapshot2:"Оцінювати меню й елементи інтерфейсу на відповідність оптимальним методам підтримки взаємодії.",helpUseCaseTimespan1:"Вимірювати зміщення макета й час виконання JavaScript для серії взаємодій.",helpUseCaseTimespan2:"Знаходити можливості покращити ефективність постійних сторінок і односторінкових додатків.",highestImpact:"Найвагоміші",informativeAuditCount:"{numInformative,plural, =1{{numInformative} інформативна перевірка}one{{numInformative} інформативна перевірка}few{{numInformative} інформативні перевірки}many{{numInformative} інформативних перевірок}other{{numInformative} інформативної перевірки}}",mobile:"Мобільна версія",navigationDescription:"Завантаження сторінки",navigationLongDescription:"Звіти про навігацію аналізують завантаження однієї сторінки, як і оригінальні звіти Lighthouse.",navigationReport:"Звіт про навігацію",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} звіт про навігацію}one{{numNavigation} звіт про навігацію}few{{numNavigation} звіти про навігацію}many{{numNavigation} звітів про навігацію}other{{numNavigation} звіту про навігацію}}",passableAuditCount:"{numPassableAudits,plural, =1{Можна виконати {numPassableAudits} перевірку}one{Можна виконати {numPassableAudits} перевірку}few{Можна виконати {numPassableAudits} перевірки}many{Можна виконати {numPassableAudits} перевірок}other{Можна виконати {numPassableAudits} перевірки}}",passedAuditCount:"{numPassed,plural, =1{Виконано {numPassed} перевірку}one{Виконано {numPassed} перевірку}few{Виконано {numPassed} перевірки}many{Виконано {numPassed} перевірок}other{Виконано {numPassed} перевірки}}",ratingAverage:"Посередньо",ratingError:"Помилка",ratingFail:"Погано",ratingPass:"Добре",save:"Зберегти",snapshotDescription:"Зафіксований статус сторінки",snapshotLongDescription:"Звіти про стан на певний момент часу аналізують сторінку в конкретному стані, зазвичай після дій користувача.",snapshotReport:"Звіт про стан на певний момент часу",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} звіт про стан на певний момент часу}one{{numSnapshot} звіт про стан на певний момент часу}few{{numSnapshot} звіти про стан на певний момент часу}many{{numSnapshot} звітів про стан на певний момент часу}other{{numSnapshot} звіту про стан на певний момент часу}}",summary:"Підсумок",timespanDescription:"Взаємодії користувача",timespanLongDescription:"Звіти про період часу аналізують довільний період часу та зазвичай містять дані про дії користувачів.",timespanReport:"Звіт про період часу",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} звіт про період часу}one{{numTimespan} звіт про період часу}few{{numTimespan} звіти про період часу}many{{numTimespan} звітів про період часу}other{{numTimespan} звіту про період часу}}",title:"Звіт про послідовність переходів у Lighthouse"},vi:{allReports:"Tất cả báo cáo",categories:"Danh mục",categoryAccessibility:"Hỗ trợ tiếp cận",categoryBestPractices:"Phương pháp hay nhất",categoryPerformance:"Hiệu suất",categorySeo:"SEO",desktop:"Máy tính",helpDialogTitle:"Tìm hiểu về Báo cáo luồng Lighthouse",helpLabel:"Tìm hiểu về Luồng",helpUseCaseInstructionNavigation:"Sử dụng chế độ Báo cáo di chuyển để…",helpUseCaseInstructionSnapshot:"Sử dụng chế độ Báo cáo ảnh chụp nhanh để...",helpUseCaseInstructionTimespan:"Sử dụng chế độ Báo cáo khoảng thời gian để...",helpUseCaseNavigation1:"Đạt được điểm Hiệu suất Lighthouse.",helpUseCaseNavigation2:"Đo lường các chỉ số về Hiệu suất tải trang, chẳng hạn như Thời gian hiển thị nội dung lớn nhất và Chỉ số tốc độ.",helpUseCaseNavigation3:"Đánh giá các chức năng của Ứng dụng web tiến bộ.",helpUseCaseSnapshot1:"Tìm các vấn đề về khả năng hỗ trợ tiếp cận trong các ứng dụng trang đơn hoặc các biểu mẫu phức tạp.",helpUseCaseSnapshot2:"Đánh giá các phương pháp hay nhất về trình đơn và các thành phần trên giao diện người dùng ẩn phía sau sự tương tác.",helpUseCaseTimespan1:"Đo lường mức thay đổi bố cục và thời gian thực thi JavaScript trên một chuỗi các tương tác.",helpUseCaseTimespan2:"Khám phá các cơ hội về hiệu suất để cải thiện trải nghiệm cho những trang tồn tại lâu dài và các ứng dụng trang đơn.",highestImpact:"Tác động lớn nhất",informativeAuditCount:"{numInformative,plural, =1{{numInformative} quá trình kiểm tra cung cấp nhiều thông tin}other{{numInformative} quá trình kiểm tra cung cấp nhiều thông tin}}",mobile:"Di động",navigationDescription:"Tải trang",navigationLongDescription:"Báo cáo di chuyển phân tích một lượt tải trang, giống hệt như các báo cáo Lighthouse gốc.",navigationReport:"Báo cáo di chuyển trên trang",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} báo cáo điều hướng}other{{numNavigation} báo cáo điều hướng}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} quá trình kiểm tra đạt đủ điều kiện}other{{numPassableAudits} quá trình kiểm tra đạt đủ điều kiện}}",passedAuditCount:"{numPassed,plural, =1{{numPassed} quá trình kiểm tra đã đạt}other{{numPassed} quá trình kiểm tra đã đạt}}",ratingAverage:"Trung bình",ratingError:"Lỗi",ratingFail:"Kém",ratingPass:"Tốt",save:"Lưu",snapshotDescription:"Trạng thái đã chụp của trang",snapshotLongDescription:"Báo cáo ảnh chụp nhanh phân tích trang ở một trạng thái cụ thể, thường là sau khi người dùng tương tác.",snapshotReport:"Báo cáo tổng quan",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} báo cáo tổng quan nhanh}other{{numSnapshot} báo cáo tổng quan nhanh}}",summary:"Tóm tắt",timespanDescription:"Sự tương tác của người dùng",timespanLongDescription:"Báo cáo khoảng thời gian phân tích một khoảng thời gian bất kỳ, thường chứa các tương tác của người dùng.",timespanReport:"Báo cáo khoảng thời gian",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} báo cáo khoảng thời gian}other{{numTimespan} báo cáo khoảng thời gian}}",title:"Báo cáo luồng người dùng Lighthouse"},zh:{allReports:"所有报告",categories:"类别",categoryAccessibility:"无障碍",categoryBestPractices:"最佳做法",categoryPerformance:"性能",categorySeo:"SEO",desktop:"桌面版",helpDialogTitle:"了解 Lighthouse 流程报告",helpLabel:"了解流程",helpUseCaseInstructionNavigation:"使用导航报告可以…",helpUseCaseInstructionSnapshot:"使用快照报告可以…",helpUseCaseInstructionTimespan:"使用时间跨度报告可以…",helpUseCaseNavigation1:"获取 Lighthouse 给出的性能得分。",helpUseCaseNavigation2:"衡量网页加载性能指标，例如 Largest Contentful Paint 和 Speed Index。",helpUseCaseNavigation3:"评估渐进式 Web 应用的功能。",helpUseCaseSnapshot1:"查找单页应用或复杂表单中的无障碍功能方面的问题。",helpUseCaseSnapshot2:"评估互动背后隐藏的菜单和界面元素的最佳做法。",helpUseCaseTimespan1:"衡量一系列互动的布局偏移和 JavaScript 执行用时。",helpUseCaseTimespan2:"发掘性能提升机会，以便改进长期网页和单页应用的用户体验。",highestImpact:"影响力最大",informativeAuditCount:"{numInformative,plural, =1{{numInformative} 项参考性审核}other{{numInformative} 项参考性审核}}",mobile:"移动版",navigationDescription:"网页加载",navigationLongDescription:"导航报告旨在分析单个网页的加载情况，与最初的 Lighthouse 报告完全一样。",navigationReport:"导航报告",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} 份导航报告}other{{numNavigation} 份导航报告}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} 项有望通过的审核}other{{numPassableAudits} 项有望通过的审核}}",passedAuditCount:"{numPassed,plural, =1{通过了 {numPassed} 项审核}other{通过了 {numPassed} 项审核}}",ratingAverage:"一般",ratingError:"出错了",ratingFail:"较差",ratingPass:"良好",save:"保存",snapshotDescription:"捕获到的网页状态",snapshotLongDescription:"快照报告旨在分析处于特定状态的网页（通常是在用户互动之后）。",snapshotReport:"快照报告",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} 份快照报告}other{{numSnapshot} 份快照报告}}",summary:"摘要",timespanDescription:"用户互动",timespanLongDescription:"时间跨度报告旨在分析任意时间段（通常包含用户互动）。",timespanReport:"时间跨度报告",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} 份时间跨度报告}other{{numTimespan} 份时间跨度报告}}",title:"Lighthouse 用户流报告"},"zh-HK":{allReports:"全部報告",categories:"類別",categoryAccessibility:"無障礙功能",categoryBestPractices:"最佳做法",categoryPerformance:"效能",categorySeo:"搜尋引擎優化 (SEO)",desktop:"桌面電腦",helpDialogTitle:"瞭解 Lighthouse 流程報告",helpLabel:"解讀流程",helpUseCaseInstructionNavigation:"使用「導覽」報告來…",helpUseCaseInstructionSnapshot:"使用「快覽」報告來…",helpUseCaseInstructionTimespan:"使用「時間範圍」報告來…",helpUseCaseNavigation1:"取得 Lighthouse 效能分數。",helpUseCaseNavigation2:"測量頁面載入效能數據，例如「最大內容繪製」和「速度指數」。",helpUseCaseNavigation3:"存取「漸進式網頁應用程式」功能。",helpUseCaseSnapshot1:"在單頁應用程式或複合式表格中尋找無障礙功能問題。",helpUseCaseSnapshot2:"評估互動背後安排選單和使用者介面元素的最佳做法。",helpUseCaseTimespan1:"測量一連串互動的版面配置轉移和 JavaScript 執行時間。",helpUseCaseTimespan2:"探索效能優化建議，以便改善永久頁面和單頁應用程式的使用體驗。",highestImpact:"最大影響",informativeAuditCount:"{numInformative,plural, =1{{numInformative} 項資訊型審核}other{{numInformative} 項資訊型審核}}",mobile:"流動裝置",navigationDescription:"網頁載入",navigationLongDescription:"「導覽」報告會分析單次網頁載入情況，方式與原來的 Lighthouse 報告完全相同。",navigationReport:"導覽報告",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} 項導覽報告}other{{numNavigation} 項導覽報告}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} 項可通過的審核}other{{numPassableAudits} 項可通過的審核}}",passedAuditCount:"{numPassed,plural, =1{已通過 {numPassed} 項審核}other{已通過 {numPassed} 項審核}}",ratingAverage:"一般",ratingError:"錯誤",ratingFail:"欠佳",ratingPass:"良好",save:"儲存",snapshotDescription:"已採集網頁狀態",snapshotLongDescription:"「快覽」報告會分析處於特定狀態 (通常是在使用者進行互動之後) 的頁面。",snapshotReport:"快覽報告",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} 項快覽報告}other{{numSnapshot} 項快覽報告}}",summary:"摘要",timespanDescription:"用戶的互動行為",timespanLongDescription:"「時間範圍」報告會分析任意一個時段 (通常包含使用者互動)。",timespanReport:"時間範圍報告",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} 項時間範圍報告}other{{numTimespan} 項時間範圍報告}}",title:"Lighthouse 用戶流程報告"},"zh-TW":{allReports:"所有報表",categories:"類別",categoryAccessibility:"無障礙功能",categoryBestPractices:"最佳做法",categoryPerformance:"效能",categorySeo:"搜尋引擎最佳化 (SEO)",desktop:"電腦版",helpDialogTitle:"解讀 Lighthouse 流程報表",helpLabel:"解讀流程",helpUseCaseInstructionNavigation:"使用導覽報表來...",helpUseCaseInstructionSnapshot:"使用快照報表來...",helpUseCaseInstructionTimespan:"使用時間範圍報表來...",helpUseCaseNavigation1:"取得 Lighthouse 效能分數。",helpUseCaseNavigation2:"評估載入網頁的效能指標，例如最大內容繪製和速度指數。",helpUseCaseNavigation3:"評估漸進式網頁應用程式功能。",helpUseCaseSnapshot1:"針對單頁應用程式或複雜的表單尋找無障礙功能方面的問題。",helpUseCaseSnapshot2:"針對隱藏在互動背後的選單和 UI 元素評估最佳做法。",helpUseCaseTimespan1:"測量一系列互動的版面配置位移和 JavaScript 執行時間。",helpUseCaseTimespan2:"找出增進效能的機會，進而改善長期網頁和單頁應用程式的使用體驗。",highestImpact:"最大影響力",informativeAuditCount:"{numInformative,plural, =1{{numInformative} 項資訊型稽核}other{{numInformative} 項資訊型稽核}}",mobile:"行動版",navigationDescription:"載入網頁",navigationLongDescription:"導覽報表能分析單一網頁的載入作業，與原 Lighthouse 報表完全相同。",navigationReport:"導覽報表",navigationReportCount:"{numNavigation,plural, =1{{numNavigation} 份導覽報表}other{{numNavigation} 份導覽報表}}",passableAuditCount:"{numPassableAudits,plural, =1{{numPassableAudits} 項可通過的稽核}other{{numPassableAudits} 項可通過的稽核}}",passedAuditCount:"{numPassed,plural, =1{已通過 {numPassed} 項稽核}other{已通過 {numPassed} 項稽核}}",ratingAverage:"平均",ratingError:"錯誤",ratingFail:"不佳",ratingPass:"良好",save:"儲存",snapshotDescription:"網頁擷取狀態",snapshotLongDescription:"快照報表能分析特定狀態下的網頁，通常是在使用者互動之後的網頁。",snapshotReport:"快照報表",snapshotReportCount:"{numSnapshot,plural, =1{{numSnapshot} 份快照報表}other{{numSnapshot} 份快照報表}}",summary:"摘要",timespanDescription:"使用者互動",timespanLongDescription:"時間範圍報表能分析任意一段時間，通常包含使用者與網頁互動的時間。",timespanReport:"時間範圍報表",timespanReportCount:"{numTimespan,plural, =1{{numTimespan} 份時間範圍報表}other{{numTimespan} 份時間範圍報表}}",title:"Lighthouse 使用者流程報表"}};var _a=Ee({formatter:new ce("en-US"),strings:{...Ze,...Gt}});function Ca(){let e=$(),t=e.steps[0].lhr,n=t.configSettings.locale;return e.steps.some(a=>a.lhr.configSettings.locale!==n)&&console.warn("LHRs have inconsistent locales"),{locale:n,lhrStrings:t.i18n.rendererFormattedStrings}}function ze(){return Ue(_a)}function M(){return ze().strings}function mt(){let{locale:e}=Ca();return(t,n)=>ba(t,n,e)}var wa=({children:e})=>{let{locale:t,lhrStrings:n}=Ca(),a=Q(()=>(v.apply({providedStrings:{...n,...Gt,...ya[t]},i18n:new ce(t),reportJson:null}),{formatter:v.i18n,strings:v.strings}),[t,n]);return u(_a.Provider,{value:a,children:e})};var eo=({href:e,label:t,mode:n,isCurrent:a})=>u("a",{className:ve("SidebarFlowStep",{"Sidebar--current":a}),href:e,children:[u("div",{children:u(oe,{mode:n})}),u("div",{className:`SidebarFlowStep__label SidebarFlowStep__label--${n}`,children:t})]}),to=()=>u("div",{className:"SidebarFlowSeparator",children:[u(oe,{}),u(Z,{}),u(oe,{})]}),xa=()=>{let e=$(),t=be();return u("div",{className:"SidebarFlow",children:e.steps.map((n,a)=>{let{lhr:i,name:o}=n;return u(j,{children:[i.gatherMode==="navigation"&&a!==0?u(to,{}):void 0,u(eo,{mode:i.gatherMode,href:`#index=${a}`,label:o,isCurrent:a===t?.index},i.fetchTime)]})})})};var no=()=>{let e=be(),t=M();return u("a",{href:"#",className:ve("SidebarSummary",{"Sidebar--current":e===null}),"data-testid":"SidebarSummary",children:[u("div",{className:"SidebarSummary__icon",children:u(Rn,{})}),u("div",{className:"SidebarSummary__label",children:t.summary})]})},ao=({settings:e})=>{let t=M(),n=E.getEmulationDescriptions(e),a=n.screenEmulation?`${n.deviceEmulation} - ${n.screenEmulation}`:n.deviceEmulation;return u("div",{className:"SidebarRuntimeSettings",children:[u("div",{className:"SidebarRuntimeSettings__item",title:t.runtimeSettingsDevice,children:[u("div",{className:"SidebarRuntimeSettings__item--icon",children:u(Dn,{})}),a]}),u("div",{className:"SidebarRuntimeSettings__item",title:t.runtimeSettingsNetworkThrottling,children:[u("div",{className:"SidebarRuntimeSettings__item--icon",children:u(zn,{})}),n.summary]}),u("div",{className:"SidebarRuntimeSettings__item",title:t.runtimeSettingsCPUThrottling,children:[u("div",{className:"SidebarRuntimeSettings__item--icon",children:u(jn,{})}),`${e.throttling.cpuSlowdownMultiplier}x slowdown`]})]})},io=({title:e,date:t})=>{let n=ze();return u("div",{className:"SidebarHeader",children:[u("div",{className:"SidebarHeader__title",children:e}),u("div",{className:"SidebarHeader__date",children:n.formatter.formatDateTime(t)})]})},Sa=()=>{let e=$(),t=e.steps[0].lhr;return u("div",{className:"Sidebar",children:[u(io,{title:e.name,date:t.fetchTime}),u(Z,{}),u(no,{}),u(Z,{}),u(xa,{}),u(Z,{}),u(ao,{settings:t.configSettings})]})};function oo(e){let t=e.createFragment(),n=e.createElement("style");n.append(`
    .lh-3p-filter {
      color: var(--color-gray-600);
      float: right;
      padding: 6px var(--stackpack-padding-horizontal);
    }
    .lh-3p-filter-label, .lh-3p-filter-input {
      vertical-align: middle;
      user-select: none;
    }
    .lh-3p-filter-input:disabled + .lh-3p-ui-string {
      text-decoration: line-through;
    }
  `),t.append(n);let a=e.createElement("div","lh-3p-filter"),i=e.createElement("label","lh-3p-filter-label"),o=e.createElement("input","lh-3p-filter-input");o.setAttribute("type","checkbox"),o.setAttribute("checked","");let r=e.createElement("span","lh-3p-ui-string");r.append("Show 3rd party resources");let s=e.createElement("span","lh-3p-filter-count");return i.append(" ",o," ",r," (",s,") "),a.append(" ",i," "),t.append(a),t}function ro(e){let t=e.createFragment(),n=e.createElement("div","lh-audit"),a=e.createElement("details","lh-expandable-details"),i=e.createElement("summary"),o=e.createElement("div","lh-audit__header lh-expandable-details__summary"),r=e.createElement("span","lh-audit__score-icon"),s=e.createElement("span","lh-audit__title-and-text"),p=e.createElement("span","lh-audit__title"),c=e.createElement("span","lh-audit__display-text");s.append(" ",p," ",c," ");let l=e.createElement("div","lh-chevron-container");o.append(" ",r," ",s," ",l," "),i.append(" ",o," ");let d=e.createElement("div","lh-audit__description"),m=e.createElement("div","lh-audit__stackpacks");return a.append(" ",i," ",d," ",m," "),n.append(" ",a," "),t.append(n),t}function so(e){let t=e.createFragment(),n=e.createElement("div","lh-category-header"),a=e.createElement("div","lh-score__gauge");a.setAttribute("role","heading"),a.setAttribute("aria-level","2");let i=e.createElement("div","lh-category-header__description");return n.append(" ",a," ",i," "),t.append(n),t}function lo(e){let t=e.createFragment(),n=e.createElementNS("http://www.w3.org/2000/svg","svg","lh-chevron");n.setAttribute("viewBox","0 0 100 100");let a=e.createElementNS("http://www.w3.org/2000/svg","g","lh-chevron__lines"),i=e.createElementNS("http://www.w3.org/2000/svg","path","lh-chevron__line lh-chevron__line-left");i.setAttribute("d","M10 50h40");let o=e.createElementNS("http://www.w3.org/2000/svg","path","lh-chevron__line lh-chevron__line-right");return o.setAttribute("d","M90 50H50"),a.append(" ",i," ",o," "),n.append(" ",a," "),t.append(n),t}function po(e){let t=e.createFragment(),n=e.createElement("div","lh-audit-group"),a=e.createElement("details","lh-clump"),i=e.createElement("summary"),o=e.createElement("div","lh-audit-group__summary"),r=e.createElement("div","lh-audit-group__header"),s=e.createElement("span","lh-audit-group__title"),p=e.createElement("span","lh-audit-group__itemcount");r.append(" ",s," ",p," "," "," ");let c=e.createElement("div","lh-clump-toggle"),l=e.createElement("span","lh-clump-toggletext--show"),d=e.createElement("span","lh-clump-toggletext--hide");return c.append(" ",l," ",d," "),o.append(" ",r," ",c," "),i.append(" ",o," "),a.append(" ",i," "),n.append(" "," ",a," "),t.append(n),t}function uo(e){let t=e.createFragment(),n=e.createElement("div","lh-crc-container"),a=e.createElement("style");a.append(`
      .lh-crc .lh-tree-marker {
        width: 12px;
        height: 26px;
        display: block;
        float: left;
        background-position: top left;
      }
      .lh-crc .lh-horiz-down {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>');
      }
      .lh-crc .lh-right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .lh-up-right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .lh-vert-right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .lh-vert {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .lh-crc-tree {
        font-size: 14px;
        width: 100%;
        overflow-x: auto;
      }
      .lh-crc .lh-crc-node {
        height: 26px;
        line-height: 26px;
        white-space: nowrap;
      }
      .lh-crc .lh-crc-node__tree-value {
        margin-left: 10px;
      }
      .lh-crc .lh-crc-node__tree-value div {
        display: inline;
      }
      .lh-crc .lh-crc-node__chain-duration {
        font-weight: 700;
      }
      .lh-crc .lh-crc-initial-nav {
        color: #595959;
        font-style: italic;
      }
      .lh-crc__summary-value {
        margin-bottom: 10px;
      }
    `);let i=e.createElement("div"),o=e.createElement("div","lh-crc__summary-value"),r=e.createElement("span","lh-crc__longest_duration_label"),s=e.createElement("b","lh-crc__longest_duration");o.append(" ",r," ",s," "),i.append(" ",o," ");let p=e.createElement("div","lh-crc"),c=e.createElement("div","lh-crc-initial-nav");return p.append(" ",c," "," "),n.append(" ",a," ",i," ",p," "),t.append(n),t}function co(e){let t=e.createFragment(),n=e.createElement("div","lh-crc-node"),a=e.createElement("span","lh-crc-node__tree-marker"),i=e.createElement("span","lh-crc-node__tree-value");return n.append(" ",a," ",i," "),t.append(n),t}function mo(e){let t=e.createFragment(),n=e.createElement("div","lh-element-screenshot"),a=e.createElement("div","lh-element-screenshot__content"),i=e.createElement("div","lh-element-screenshot__image"),o=e.createElement("div","lh-element-screenshot__mask"),r=e.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("height","0"),r.setAttribute("width","0");let s=e.createElementNS("http://www.w3.org/2000/svg","defs"),p=e.createElementNS("http://www.w3.org/2000/svg","clipPath");p.setAttribute("clipPathUnits","objectBoundingBox"),s.append(" ",p," "," "),r.append(" ",s," "),o.append(" ",r," ");let c=e.createElement("div","lh-element-screenshot__element-marker");return i.append(" ",o," ",c," "),a.append(" ",i," "),n.append(" ",a," "),t.append(n),t}function ho(e){let t=e.createFragment(),n=e.createElement("div","lh-exp-gauge-component"),a=e.createElement("div","lh-exp-gauge__wrapper");a.setAttribute("target","_blank");let i=e.createElement("div","lh-exp-gauge__svg-wrapper"),o=e.createElementNS("http://www.w3.org/2000/svg","svg","lh-exp-gauge"),r=e.createElementNS("http://www.w3.org/2000/svg","g","lh-exp-gauge__inner"),s=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-exp-gauge__bg"),p=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-exp-gauge__base lh-exp-gauge--faded"),c=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-exp-gauge__arc"),l=e.createElementNS("http://www.w3.org/2000/svg","text","lh-exp-gauge__percentage");r.append(" ",s," ",p," ",c," ",l," ");let d=e.createElementNS("http://www.w3.org/2000/svg","g","lh-exp-gauge__outer"),m=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-cover");d.append(" ",m," ");let h=e.createElementNS("http://www.w3.org/2000/svg","text","lh-exp-gauge__label");return h.setAttribute("text-anchor","middle"),h.setAttribute("x","0"),h.setAttribute("y","60"),o.append(" ",r," ",d," ",h," "),i.append(" ",o," "),a.append(" ",i," "),n.append(" ",a," "),t.append(n),t}function go(e){let t=e.createFragment(),n=e.createElement("style");n.append(`
    .lh-footer {
      padding: var(--footer-padding-vertical) calc(var(--default-padding) * 2);
      max-width: var(--report-content-max-width);
      margin: 0 auto;
    }
    .lh-footer .lh-generated {
      text-align: center;
    }
  `),t.append(n);let a=e.createElement("footer","lh-footer"),i=e.createElement("ul","lh-meta__items");i.append(" ");let o=e.createElement("div","lh-generated"),r=e.createElement("b");r.append("Lighthouse");let s=e.createElement("span","lh-footer__version"),p=e.createElement("a","lh-footer__version_issue");return p.setAttribute("href","https://github.com/GoogleChrome/Lighthouse/issues"),p.setAttribute("target","_blank"),p.setAttribute("rel","noopener"),p.append("File an issue"),o.append(" "," Generated by ",r," ",s," | ",p," "),a.append(" ",i," ",o," "),t.append(a),t}function fo(e){let t=e.createFragment(),n=e.createElement("a","lh-fraction__wrapper"),a=e.createElement("div","lh-fraction__content-wrapper"),i=e.createElement("div","lh-fraction__content"),o=e.createElement("div","lh-fraction__background");i.append(" ",o," "),a.append(" ",i," ");let r=e.createElement("div","lh-fraction__label");return n.append(" ",a," ",r," "),t.append(n),t}function vo(e){let t=e.createFragment(),n=e.createElement("a","lh-gauge__wrapper"),a=e.createElement("div","lh-gauge__svg-wrapper"),i=e.createElementNS("http://www.w3.org/2000/svg","svg","lh-gauge");i.setAttribute("viewBox","0 0 120 120");let o=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-gauge-base");o.setAttribute("r","56"),o.setAttribute("cx","60"),o.setAttribute("cy","60"),o.setAttribute("stroke-width","8");let r=e.createElementNS("http://www.w3.org/2000/svg","circle","lh-gauge-arc");r.setAttribute("r","56"),r.setAttribute("cx","60"),r.setAttribute("cy","60"),r.setAttribute("stroke-width","8"),i.append(" ",o," ",r," "),a.append(" ",i," ");let s=e.createElement("div","lh-gauge__percentage"),p=e.createElement("div","lh-gauge__label");return n.append(" "," ",a," ",s," "," ",p," "),t.append(n),t}function bo(e){let t=e.createFragment(),n=e.createElement("style");n.append(`
    /* CSS Fireworks. Originally by Eddie Lin
       https://codepen.io/paulirish/pen/yEVMbP
    */
    .lh-pyro {
      display: none;
      z-index: 1;
      pointer-events: none;
    }
    .lh-score100 .lh-pyro {
      display: block;
    }
    .lh-score100 .lh-lighthouse stop:first-child {
      stop-color: hsla(200, 12%, 95%, 0);
    }
    .lh-score100 .lh-lighthouse stop:last-child {
      stop-color: hsla(65, 81%, 76%, 1);
    }

    .lh-pyro > .lh-pyro-before, .lh-pyro > .lh-pyro-after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 2.5px;
      box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
      animation: 1s bang ease-out infinite backwards,  1s gravity ease-in infinite backwards,  5s position linear infinite backwards;
      animation-delay: 1s, 1s, 1s;
    }

    .lh-pyro > .lh-pyro-after {
      animation-delay: 2.25s, 2.25s, 2.25s;
      animation-duration: 1.25s, 1.25s, 6.25s;
    }

    @keyframes bang {
      to {
        opacity: 1;
        box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47;
      }
    }
    @keyframes gravity {
      from {
        opacity: 1;
      }
      to {
        transform: translateY(80px);
        opacity: 0;
      }
    }
    @keyframes position {
      0%, 19.9% {
        margin-top: 4%;
        margin-left: 47%;
      }
      20%, 39.9% {
        margin-top: 7%;
        margin-left: 30%;
      }
      40%, 59.9% {
        margin-top: 6%;
        margin-left: 70%;
      }
      60%, 79.9% {
        margin-top: 3%;
        margin-left: 20%;
      }
      80%, 99.9% {
        margin-top: 3%;
        margin-left: 80%;
      }
    }
  `),t.append(n);let a=e.createElement("div","lh-header-container"),i=e.createElement("div","lh-scores-wrapper-placeholder");return a.append(" ",i," "),t.append(a),t}function yo(e){let t=e.createFragment(),n=e.createElement("div","lh-metric"),a=e.createElement("div","lh-metric__innerwrap"),i=e.createElement("div","lh-metric__icon"),o=e.createElement("span","lh-metric__title"),r=e.createElement("div","lh-metric__value"),s=e.createElement("div","lh-metric__description");return a.append(" ",i," ",o," ",r," ",s," "),n.append(" ",a," "),t.append(n),t}function _o(e){let t=e.createFragment(),n=e.createElement("div","lh-scorescale"),a=e.createElement("span","lh-scorescale-range lh-scorescale-range--fail");a.append("0–49");let i=e.createElement("span","lh-scorescale-range lh-scorescale-range--average");i.append("50–89");let o=e.createElement("span","lh-scorescale-range lh-scorescale-range--pass");return o.append("90–100"),n.append(" ",a," ",i," ",o," "),t.append(n),t}function Co(e){let t=e.createFragment(),n=e.createElement("style");n.append(`
    .lh-scores-container {
      display: flex;
      flex-direction: column;
      padding: var(--default-padding) 0;
      position: relative;
      width: 100%;
    }

    .lh-sticky-header {
      --gauge-circle-size: var(--gauge-circle-size-sm);
      --plugin-badge-size: 16px;
      --plugin-icon-size: 75%;
      --gauge-wrapper-width: 60px;
      --gauge-percentage-font-size: 13px;
      position: fixed;
      left: 0;
      right: 0;
      top: var(--topbar-height);
      font-weight: 500;
      display: none;
      justify-content: center;
      background-color: var(--sticky-header-background-color);
      border-bottom: 1px solid var(--color-gray-200);
      padding-top: var(--score-container-padding);
      padding-bottom: 4px;
      z-index: 2;
      pointer-events: none;
    }

    .lh-devtools .lh-sticky-header {
      /* The report within DevTools is placed in a container with overflow, which changes the placement of this header unless we change \`position\` to \`sticky.\` */
      position: sticky;
    }

    .lh-sticky-header--visible {
      display: grid;
      grid-auto-flow: column;
      pointer-events: auto;
    }

    /* Disable the gauge arc animation for the sticky header, so toggling display: none
       does not play the animation. */
    .lh-sticky-header .lh-gauge-arc {
      animation: none;
    }

    .lh-sticky-header .lh-gauge__label,
    .lh-sticky-header .lh-fraction__label {
      display: none;
    }

    .lh-highlighter {
      width: var(--gauge-wrapper-width);
      height: 1px;
      background-color: var(--highlighter-background-color);
      /* Position at bottom of first gauge in sticky header. */
      position: absolute;
      grid-column: 1;
      bottom: -1px;
      left: 0px;
      right: 0px;
    }
  `),t.append(n);let a=e.createElement("div","lh-scores-wrapper"),i=e.createElement("div","lh-scores-container"),o=e.createElement("div","lh-pyro"),r=e.createElement("div","lh-pyro-before"),s=e.createElement("div","lh-pyro-after");return o.append(" ",r," ",s," "),i.append(" ",o," "),a.append(" ",i," "),t.append(a),t}function wo(e){let t=e.createFragment(),n=e.createElement("div","lh-snippet"),a=e.createElement("style");return a.append(`
          :root {
            --snippet-highlight-light: #fbf1f2;
            --snippet-highlight-dark: #ffd6d8;
          }

         .lh-snippet__header {
          position: relative;
          overflow: hidden;
          padding: 10px;
          border-bottom: none;
          color: var(--snippet-color);
          background-color: var(--snippet-background-color);
          border: 1px solid var(--report-border-color-secondary);
        }
        .lh-snippet__title {
          font-weight: bold;
          float: left;
        }
        .lh-snippet__node {
          float: left;
          margin-left: 4px;
        }
        .lh-snippet__toggle-expand {
          padding: 1px 7px;
          margin-top: -1px;
          margin-right: -7px;
          float: right;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 14px;
          color: #0c50c7;
        }

        .lh-snippet__snippet {
          overflow: auto;
          border: 1px solid var(--report-border-color-secondary);
        }
        /* Container needed so that all children grow to the width of the scroll container */
        .lh-snippet__snippet-inner {
          display: inline-block;
          min-width: 100%;
        }

        .lh-snippet:not(.lh-snippet--expanded) .lh-snippet__show-if-expanded {
          display: none;
        }
        .lh-snippet.lh-snippet--expanded .lh-snippet__show-if-collapsed {
          display: none;
        }

        .lh-snippet__line {
          background: white;
          white-space: pre;
          display: flex;
        }
        .lh-snippet__line:not(.lh-snippet__line--message):first-child {
          padding-top: 4px;
        }
        .lh-snippet__line:not(.lh-snippet__line--message):last-child {
          padding-bottom: 4px;
        }
        .lh-snippet__line--content-highlighted {
          background: var(--snippet-highlight-dark);
        }
        .lh-snippet__line--message {
          background: var(--snippet-highlight-light);
        }
        .lh-snippet__line--message .lh-snippet__line-number {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .lh-snippet__line--message code {
          padding: 10px;
          padding-left: 5px;
          color: var(--color-fail);
          font-family: var(--report-font-family);
        }
        .lh-snippet__line--message code {
          white-space: normal;
        }
        .lh-snippet__line-icon {
          padding-top: 10px;
          display: none;
        }
        .lh-snippet__line--message .lh-snippet__line-icon {
          display: block;
        }
        .lh-snippet__line-icon:before {
          content: "";
          display: inline-block;
          vertical-align: middle;
          margin-right: 4px;
          width: var(--score-icon-size);
          height: var(--score-icon-size);
          background-image: var(--fail-icon-url);
        }
        .lh-snippet__line-number {
          flex-shrink: 0;
          width: 40px;
          text-align: right;
          font-family: monospace;
          padding-right: 5px;
          margin-right: 5px;
          color: var(--color-gray-600);
          user-select: none;
        }
    `),n.append(" ",a," "),t.append(n),t}function xo(e){let t=e.createFragment(),n=e.createElement("div","lh-snippet__snippet"),a=e.createElement("div","lh-snippet__snippet-inner");return n.append(" ",a," "),t.append(n),t}function So(e){let t=e.createFragment(),n=e.createElement("div","lh-snippet__header"),a=e.createElement("div","lh-snippet__title"),i=e.createElement("div","lh-snippet__node"),o=e.createElement("button","lh-snippet__toggle-expand"),r=e.createElement("span","lh-snippet__btn-label-collapse lh-snippet__show-if-expanded"),s=e.createElement("span","lh-snippet__btn-label-expand lh-snippet__show-if-collapsed");return o.append(" ",r," ",s," "),n.append(" ",a," ",i," ",o," "),t.append(n),t}function ko(e){let t=e.createFragment(),n=e.createElement("div","lh-snippet__line"),a=e.createElement("div","lh-snippet__line-number"),i=e.createElement("div","lh-snippet__line-icon"),o=e.createElement("code");return n.append(" ",a," ",i," ",o," "),t.append(n),t}function Po(e){let t=e.createFragment(),n=e.createElement("style");return n.append(`/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
  Naming convention:

  If a variable is used for a specific component: --{component}-{property name}-{modifier}

  Both {component} and {property name} should be kebab-case. If the target is the entire page,
  use 'report' for the component. The property name should not be abbreviated. Use the
  property name the variable is intended for - if it's used for multiple, a common descriptor
  is fine (ex: 'size' for a variable applied to 'width' and 'height'). If a variable is shared
  across multiple components, either create more variables or just drop the "{component}-"
  part of the name. Append any modifiers at the end (ex: 'big', 'dark').

  For colors: --color-{hue}-{intensity}

  {intensity} is the Material Design tag - 700, A700, etc.
*/
.lh-vars {
  /* Palette using Material Design Colors
   * https://www.materialui.co/colors */
  --color-amber-50: #FFF8E1;
  --color-blue-200: #90CAF9;
  --color-blue-900: #0D47A1;
  --color-blue-A700: #2962FF;
  --color-blue-primary: #06f;
  --color-cyan-500: #00BCD4;
  --color-gray-100: #F5F5F5;
  --color-gray-300: #CFCFCF;
  --color-gray-200: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-50: #FAFAFA;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;
  --color-gray: #000000;
  --color-green-700: #080;
  --color-green: #0c6;
  --color-lime-400: #D3E156;
  --color-orange-50: #FFF3E0;
  --color-orange-700: #C33300;
  --color-orange: #fa3;
  --color-red-700: #c00;
  --color-red: #f33;
  --color-teal-600: #00897B;
  --color-white: #FFFFFF;

  /* Context-specific colors */
  --color-average-secondary: var(--color-orange-700);
  --color-average: var(--color-orange);
  --color-fail-secondary: var(--color-red-700);
  --color-fail: var(--color-red);
  --color-hover: var(--color-gray-50);
  --color-informative: var(--color-blue-900);
  --color-pass-secondary: var(--color-green-700);
  --color-pass: var(--color-green);
  --color-not-applicable: var(--color-gray-600);

  /* Component variables */
  --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));
  --audit-explanation-line-height: 16px;
  --audit-group-margin-bottom: calc(var(--default-padding) * 6);
  --audit-group-padding-vertical: 8px;
  --audit-margin-horizontal: 5px;
  --audit-padding-vertical: 8px;
  --category-padding: calc(var(--default-padding) * 6) var(--edge-gap-padding) calc(var(--default-padding) * 4);
  --chevron-line-stroke: var(--color-gray-600);
  --chevron-size: 12px;
  --default-padding: 8px;
  --edge-gap-padding: calc(var(--default-padding) * 4);
  --env-item-background-color: var(--color-gray-100);
  --env-item-font-size: 28px;
  --env-item-line-height: 36px;
  --env-item-padding: 10px 0px;
  --env-name-min-width: 220px;
  --footer-padding-vertical: 16px;
  --gauge-circle-size-big: 96px;
  --gauge-circle-size: 48px;
  --gauge-circle-size-sm: 32px;
  --gauge-label-font-size-big: 18px;
  --gauge-label-font-size: var(--report-font-size-secondary);
  --gauge-label-line-height-big: 24px;
  --gauge-label-line-height: var(--report-line-height-secondary);
  --gauge-percentage-font-size-big: 38px;
  --gauge-percentage-font-size: var(--report-font-size-secondary);
  --gauge-wrapper-width: 120px;
  --header-line-height: 24px;
  --highlighter-background-color: var(--report-text-color);
  --icon-square-size: calc(var(--score-icon-size) * 0.88);
  --image-preview-size: 48px;
  --link-color: var(--color-blue-primary);
  --locale-selector-background-color: var(--color-white);
  --metric-toggle-lines-fill: #7F7F7F;
  --metric-value-font-size: calc(var(--report-font-size) * 1.8);
  --metrics-toggle-background-color: var(--color-gray-200);
  --plugin-badge-background-color: var(--color-white);
  --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);
  --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);
  --plugin-icon-size: 65%;
  --report-background-color: #fff;
  --report-border-color-secondary: #ebebeb;
  --report-font-family-monospace: 'Roboto Mono', 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --report-font-family: Roboto, Helvetica, Arial, sans-serif;
  --report-font-size: 14px;
  --report-font-size-secondary: 12px;
  --report-icon-size: var(--score-icon-background-size);
  --report-line-height: 24px;
  --report-line-height-secondary: 20px;
  --report-monospace-font-size: calc(var(--report-font-size) * 0.85);
  --report-text-color-secondary: var(--color-gray-800);
  --report-text-color: var(--color-gray-900);
  --report-content-max-width: calc(60 * var(--report-font-size)); /* defaults to 840px */
  --report-content-min-width: 360px;
  --report-content-max-width-minus-edge-gap: calc(var(--report-content-max-width) - var(--edge-gap-padding) * 2);
  --score-container-padding: 8px;
  --score-icon-background-size: 24px;
  --score-icon-margin-left: 6px;
  --score-icon-margin-right: 14px;
  --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);
  --score-icon-size: 12px;
  --score-icon-size-big: 16px;
  --screenshot-overlay-background: rgba(0, 0, 0, 0.3);
  --section-padding-vertical: calc(var(--default-padding) * 6);
  --snippet-background-color: var(--color-gray-50);
  --snippet-color: #0938C2;
  --stackpack-padding-horizontal: 10px;
  --sticky-header-background-color: var(--report-background-color);
  --sticky-header-buffer: var(--topbar-height);
  --sticky-header-height: calc(var(--gauge-circle-size-sm) + var(--score-container-padding) * 2 + 1em);
  --table-group-header-background-color: #EEF1F4;
  --table-group-header-text-color: var(--color-gray-700);
  --table-higlight-background-color: #F5F7FA;
  --tools-icon-color: var(--color-gray-600);
  --topbar-background-color: var(--color-white);
  --topbar-height: 32px;
  --topbar-logo-size: 24px;
  --topbar-padding: 0 8px;
  --toplevel-warning-background-color: hsla(30, 100%, 75%, 10%);
  --toplevel-warning-message-text-color: var(--color-average-secondary);
  --toplevel-warning-padding: 18px;
  --toplevel-warning-text-color: var(--report-text-color);

  /* SVGs */
  --plugin-icon-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>');
  --plugin-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23757575"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>');

  --pass-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>check</title><path fill="%23178239" d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/></svg>');
  --average-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>info</title><path fill="%23E67700" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z"/></svg>');
  --fail-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>warn</title><path fill="%23C7221F" d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/></svg>');
  --error-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 15"><title>error</title><path d="M0 15H 3V 12H 0V" fill="%23FF4E42"/><path d="M0 9H 3V 0H 0V" fill="%23FF4E42"/></svg>');

  --swap-locale-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>');
}

@media not print {
  .lh-dark {
    /* Pallete */
    --color-gray-200: var(--color-gray-800);
    --color-gray-300: #616161;
    --color-gray-400: var(--color-gray-600);
    --color-gray-700: var(--color-gray-400);
    --color-gray-50: #757575;
    --color-gray-600: var(--color-gray-500);
    --color-green-700: var(--color-green);
    --color-orange-700: var(--color-orange);
    --color-red-700: var(--color-red);
    --color-teal-600: var(--color-cyan-500);

    /* Context-specific colors */
    --color-hover: rgba(0, 0, 0, 0.2);
    --color-informative: var(--color-blue-200);

    /* Component variables */
    --env-item-background-color: #393535;
    --link-color: var(--color-blue-200);
    --locale-selector-background-color: var(--color-gray-200);
    --plugin-badge-background-color: var(--color-gray-800);
    --report-background-color: var(--color-gray-900);
    --report-border-color-secondary: var(--color-gray-200);
    --report-text-color-secondary: var(--color-gray-400);
    --report-text-color: var(--color-gray-100);
    --snippet-color: var(--color-cyan-500);
    --topbar-background-color: var(--color-gray);
    --toplevel-warning-background-color: hsl(33deg 14% 18%);
    --toplevel-warning-message-text-color: var(--color-orange-700);
    --toplevel-warning-text-color: var(--color-gray-100);
    --table-group-header-background-color: rgba(186, 196, 206, 0.15);
    --table-group-header-text-color: var(--color-gray-100);
    --table-higlight-background-color: rgba(186, 196, 206, 0.09);

    /* SVGs */
    --plugin-icon-url: var(--plugin-icon-url-dark);
  }
}

@media only screen and (max-width: 480px) {
  .lh-vars {
    --audit-group-margin-bottom: 20px;
    --edge-gap-padding: var(--default-padding);
    --env-name-min-width: 120px;
    --gauge-circle-size-big: 96px;
    --gauge-circle-size: 72px;
    --gauge-label-font-size-big: 22px;
    --gauge-label-font-size: 14px;
    --gauge-label-line-height-big: 26px;
    --gauge-label-line-height: 20px;
    --gauge-percentage-font-size-big: 34px;
    --gauge-percentage-font-size: 26px;
    --gauge-wrapper-width: 112px;
    --header-padding: 16px 0 16px 0;
    --image-preview-size: 24px;
    --plugin-icon-size: 75%;
    --report-font-size: 14px;
    --report-line-height: 20px;
    --score-icon-margin-left: 2px;
    --score-icon-size: 10px;
    --topbar-height: 28px;
    --topbar-logo-size: 20px;
  }
}

.lh-vars.lh-devtools {
  --audit-explanation-line-height: 14px;
  --audit-group-margin-bottom: 20px;
  --audit-group-padding-vertical: 12px;
  --audit-padding-vertical: 4px;
  --category-padding: 12px;
  --default-padding: 12px;
  --env-name-min-width: 120px;
  --footer-padding-vertical: 8px;
  --gauge-circle-size-big: 72px;
  --gauge-circle-size: 64px;
  --gauge-label-font-size-big: 22px;
  --gauge-label-font-size: 14px;
  --gauge-label-line-height-big: 26px;
  --gauge-label-line-height: 20px;
  --gauge-percentage-font-size-big: 34px;
  --gauge-percentage-font-size: 26px;
  --gauge-wrapper-width: 97px;
  --header-line-height: 20px;
  --header-padding: 16px 0 16px 0;
  --screenshot-overlay-background: transparent;
  --plugin-icon-size: 75%;
  --report-font-family-monospace: 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --report-font-family: '.SFNSDisplay-Regular', 'Helvetica Neue', 'Lucida Grande', sans-serif;
  --report-font-size: 12px;
  --report-line-height: 20px;
  --score-icon-margin-left: 2px;
  --score-icon-size: 10px;
  --section-padding-vertical: 8px;
}

.lh-container:has(.lh-sticky-header) {
  --sticky-header-buffer: calc(var(--topbar-height) + var(--sticky-header-height));
}

.lh-container:not(.lh-topbar + .lh-container) {
  --topbar-height: 0;
  --sticky-header-height: 0;
  --sticky-header-buffer: 0;
}

.lh-max-viewport {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.lh-devtools.lh-root {
  height: 100%;
}
.lh-devtools.lh-root img {
  /* Override devtools default 'min-width: 0' so svg without size in a flexbox isn't collapsed. */
  min-width: auto;
}
.lh-devtools .lh-container {
  overflow-y: scroll;
  height: calc(100% - var(--topbar-height));
  /** The .lh-container is the scroll parent in DevTools so we exclude the topbar from the sticky header buffer. */
  --sticky-header-buffer: 0;
}
.lh-devtools .lh-container:has(.lh-sticky-header) {
  /** The .lh-container is the scroll parent in DevTools so we exclude the topbar from the sticky header buffer. */
  --sticky-header-buffer: var(--sticky-header-height);
}
@media print {
  .lh-devtools .lh-container {
    overflow: unset;
  }
}
.lh-devtools .lh-sticky-header {
  /* This is normally the height of the topbar, but we want it to stick to the top of our scroll container .lh-container\` */
  top: 0;
}
.lh-devtools .lh-element-screenshot__overlay {
  position: absolute;
}

@keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 0.6;}
}

.lh-root *, .lh-root *::before, .lh-root *::after {
  box-sizing: border-box;
}

.lh-root {
  font-family: var(--report-font-family);
  font-size: var(--report-font-size);
  margin: 0;
  line-height: var(--report-line-height);
  background: var(--report-background-color);
  color: var(--report-text-color);
}

.lh-root :focus-visible {
    outline: -webkit-focus-ring-color auto 3px;
}
.lh-root summary:focus {
    outline: none;
    box-shadow: 0 0 0 1px hsl(217, 89%, 61%);
}

.lh-root [hidden] {
  display: none !important;
}

.lh-root pre {
  margin: 0;
}

.lh-root pre,
.lh-root code {
  font-family: var(--report-font-family-monospace);
}

.lh-root details > summary {
  cursor: pointer;
}

.lh-hidden {
  display: none !important;
}

.lh-container {
  /*
  Text wrapping in the report is so much FUN!
  We have a \`word-break: break-word;\` globally here to prevent a few common scenarios, namely
  long non-breakable text (usually URLs) found in:
    1. The footer
    2. .lh-node (outerHTML)
    3. .lh-code

  With that sorted, the next challenge is appropriate column sizing and text wrapping inside our
  .lh-details tables. Even more fun.
    * We don't want table headers ("Potential Savings (ms)") to wrap or their column values, but
    we'd be happy for the URL column to wrap if the URLs are particularly long.
    * We want the narrow columns to remain narrow, providing the most column width for URL
    * We don't want the table to extend past 100% width.
    * Long URLs in the URL column can wrap. Util.getURLDisplayName maxes them out at 64 characters,
      but they do not get any overflow:ellipsis treatment.
  */
  word-break: break-word;
}

.lh-audit-group a,
.lh-category-header__description a,
.lh-audit__description a,
.lh-warnings a,
.lh-footer a,
.lh-table-column--link a {
  color: var(--link-color);
}

.lh-audit__description, .lh-audit__stackpack {
  --inner-audit-padding-right: var(--stackpack-padding-horizontal);
  padding-left: var(--audit-description-padding-left);
  padding-right: var(--inner-audit-padding-right);
  padding-top: 8px;
  padding-bottom: 8px;
}

.lh-details {
  margin-top: var(--default-padding);
  margin-bottom: var(--default-padding);
  margin-left: var(--audit-description-padding-left);
  /* whatever the .lh-details side margins are */
  width: 100%;
}

.lh-audit__stackpack {
  display: flex;
  align-items: center;
}

.lh-audit__stackpack__img {
  max-width: 30px;
  margin-right: var(--default-padding)
}

/* Report header */

.lh-report-icon {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
}
.lh-report-icon[disabled] {
  opacity: 0.3;
  pointer-events: none;
}

.lh-report-icon::before {
  content: "";
  margin: 4px;
  background-repeat: no-repeat;
  width: var(--report-icon-size);
  height: var(--report-icon-size);
  opacity: 0.7;
  display: inline-block;
  vertical-align: middle;
}
.lh-report-icon:hover::before {
  opacity: 1;
}
.lh-dark .lh-report-icon::before {
  filter: invert(1);
}
.lh-report-icon--print::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>');
}
.lh-report-icon--copy::before {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>');
}
.lh-report-icon--open::before {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>');
}
.lh-report-icon--download::before {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
}
.lh-report-icon--dark::before {
  background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 100 125"><path d="M50 23.587c-16.27 0-22.799 12.574-22.799 21.417 0 12.917 10.117 22.451 12.436 32.471h20.726c2.32-10.02 12.436-19.554 12.436-32.471 0-8.843-6.528-21.417-22.799-21.417zM39.637 87.161c0 3.001 1.18 4.181 4.181 4.181h.426l.41 1.231C45.278 94.449 46.042 95 48.019 95h3.963c1.978 0 2.74-.551 3.365-2.427l.409-1.231h.427c3.002 0 4.18-1.18 4.18-4.181V80.91H39.637v6.251zM50 18.265c1.26 0 2.072-.814 2.072-2.073v-9.12C52.072 5.813 51.26 5 50 5c-1.259 0-2.072.813-2.072 2.073v9.12c0 1.259.813 2.072 2.072 2.072zM68.313 23.727c.994.774 2.135.634 2.91-.357l5.614-7.187c.776-.992.636-2.135-.356-2.909-.992-.776-2.135-.636-2.91.357l-5.613 7.186c-.778.993-.636 2.135.355 2.91zM91.157 36.373c-.306-1.222-1.291-1.815-2.513-1.51l-8.85 2.207c-1.222.305-1.814 1.29-1.51 2.512.305 1.223 1.291 1.814 2.513 1.51l8.849-2.206c1.223-.305 1.816-1.291 1.511-2.513zM86.757 60.48l-8.331-3.709c-1.15-.512-2.225-.099-2.736 1.052-.512 1.151-.1 2.224 1.051 2.737l8.33 3.707c1.15.514 2.225.101 2.736-1.05.513-1.149.1-2.223-1.05-2.737zM28.779 23.37c.775.992 1.917 1.131 2.909.357.992-.776 1.132-1.917.357-2.91l-5.615-7.186c-.775-.992-1.917-1.132-2.909-.357s-1.131 1.917-.356 2.909l5.614 7.187zM21.715 39.583c.305-1.223-.288-2.208-1.51-2.513l-8.849-2.207c-1.222-.303-2.208.289-2.513 1.511-.303 1.222.288 2.207 1.511 2.512l8.848 2.206c1.222.304 2.208-.287 2.513-1.509zM21.575 56.771l-8.331 3.711c-1.151.511-1.563 1.586-1.05 2.735.511 1.151 1.586 1.563 2.736 1.052l8.331-3.711c1.151-.511 1.563-1.586 1.05-2.735-.512-1.15-1.585-1.562-2.736-1.052z"/></svg>');
}
.lh-report-icon--treemap::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M3 5v14h19V5H3zm2 2h15v4H5V7zm0 10v-4h4v4H5zm6 0v-4h9v4h-9z"/></svg>');
}
.lh-report-icon--date::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 11h2v2H7v-2zm14-5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1a2 2 0 012 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/></svg>');
}
.lh-report-icon--devices::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h18V4H4a2 2 0 00-2 2v11H0v3h14v-3H4V6zm19 2h-6a1 1 0 00-1 1v10c0 .6.5 1 1 1h6c.6 0 1-.5 1-1V9c0-.6-.5-1-1-1zm-1 9h-4v-7h4v7z"/></svg>');
}
.lh-report-icon--world::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7 6h-3c-.3-1.3-.8-2.5-1.4-3.6A8 8 0 0 1 18.9 8zm-7-4a14 14 0 0 1 2 4h-4a14 14 0 0 1 2-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.3a16.5 16.5 0 0 0 0 4H4.3zm.8 2h3a14 14 0 0 0 1.3 3.6A8 8 0 0 1 5.1 16zm3-8H5a8 8 0 0 1 4.3-3.6L8 8zM12 20a14 14 0 0 1-2-4h4a14 14 0 0 1-2 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.6 14.6 0 0 1 0 4zm.3 5.6c.6-1.2 1-2.4 1.4-3.6h3a8 8 0 0 1-4.4 3.6zm1.8-5.6a16.5 16.5 0 0 0 0-4h3.3a8.2 8.2 0 0 1 0 4h-3.3z"/></svg>');
}
.lh-report-icon--stopwatch::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.1-6.6L20.5 6l-1.4-1.4L17.7 6A9 9 0 0 0 3 13a9 9 0 1 0 16-5.6zm-7 12.6a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/></svg>');
}
.lh-report-icon--networkspeed::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.9 5c-.2 0-.3 0-.4.2v.2L10.1 17a2 2 0 0 0-.2 1 2 2 0 0 0 4 .4l2.4-12.9c0-.3-.2-.5-.5-.5zM1 9l2 2c2.9-2.9 6.8-4 10.5-3.6l1.2-2.7C10 3.8 4.7 5.3 1 9zm20 2 2-2a15.4 15.4 0 0 0-5.6-3.6L17 8.2c1.5.7 2.9 1.6 4.1 2.8zm-4 4 2-2a9.9 9.9 0 0 0-2.7-1.9l-.5 3 1.2.9zM5 13l2 2a7.1 7.1 0 0 1 4-2l1.3-2.9C9.7 10.1 7 11 5 13z"/></svg>');
}
.lh-report-icon--samples-one::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="14" r="3"/><path d="M7 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.6 17.6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>');
}
.lh-report-icon--samples-many::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.6 17.6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/></svg>');
}
.lh-report-icon--chrome::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 562 562"><path d="M256 25.6v25.6a204 204 0 0 1 144.8 60 204 204 0 0 1 60 144.8 204 204 0 0 1-60 144.8 204 204 0 0 1-144.8 60 204 204 0 0 1-144.8-60 204 204 0 0 1-60-144.8 204 204 0 0 1 60-144.8 204 204 0 0 1 144.8-60V0a256 256 0 1 0 0 512 256 256 0 0 0 0-512v25.6z"/><path d="M256 179.2v25.6a51.3 51.3 0 0 1 0 102.4 51.3 51.3 0 0 1 0-102.4v-51.2a102.3 102.3 0 1 0-.1 204.7 102.3 102.3 0 0 0 .1-204.7v25.6z"/><path d="M256 204.8h217.6a25.6 25.6 0 0 0 0-51.2H256a25.6 25.6 0 0 0 0 51.2m44.3 76.8L191.5 470.1a25.6 25.6 0 1 0 44.4 25.6l108.8-188.5a25.6 25.6 0 1 0-44.4-25.6m-88.6 0L102.9 93.2a25.7 25.7 0 0 0-35-9.4 25.7 25.7 0 0 0-9.4 35l108.8 188.5a25.7 25.7 0 0 0 35 9.4 25.9 25.9 0 0 0 9.4-35.1"/></svg>');
}
.lh-report-icon--external::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path d="M3.15 11.9a1.01 1.01 0 0 1-.743-.307 1.01 1.01 0 0 1-.306-.743v-7.7c0-.292.102-.54.306-.744a1.01 1.01 0 0 1 .744-.306H7v1.05H3.15v7.7h7.7V7h1.05v3.85c0 .291-.103.54-.307.743a1.01 1.01 0 0 1-.743.307h-7.7Zm2.494-2.8-.743-.744 5.206-5.206H8.401V2.1h3.5v3.5h-1.05V3.893L5.644 9.1Z"/></svg>');
}

.lh-buttons {
  display: flex;
  flex-wrap: wrap;
  margin: var(--default-padding) 0;
}
.lh-button {
  height: 32px;
  border: 1px solid var(--report-border-color-secondary);
  border-radius: 3px;
  color: var(--link-color);
  background-color: var(--report-background-color);
  margin: 5px;
}

.lh-button:first-of-type {
  margin-left: 0;
}

/* Node */
.lh-node__snippet {
  font-family: var(--report-font-family-monospace);
  color: var(--snippet-color);
  font-size: var(--report-monospace-font-size);
  line-height: 20px;
}

/* Score */

.lh-audit__score-icon {
  width: var(--score-icon-size);
  height: var(--score-icon-size);
  margin: var(--score-icon-margin);
}

.lh-audit--pass .lh-audit__display-text {
  color: var(--color-pass-secondary);
}
.lh-audit--pass .lh-audit__score-icon,
.lh-scorescale-range--pass::before {
  border-radius: 100%;
  background: var(--color-pass);
}

.lh-audit--average .lh-audit__display-text {
  color: var(--color-average-secondary);
}
.lh-audit--average .lh-audit__score-icon,
.lh-scorescale-range--average::before {
  background: var(--color-average);
  width: var(--icon-square-size);
  height: var(--icon-square-size);
}

.lh-audit--fail .lh-audit__display-text {
  color: var(--color-fail-secondary);
}
.lh-audit--fail .lh-audit__score-icon,
.lh-audit--error .lh-audit__score-icon,
.lh-scorescale-range--fail::before {
  border-left: calc(var(--score-icon-size) / 2) solid transparent;
  border-right: calc(var(--score-icon-size) / 2) solid transparent;
  border-bottom: var(--score-icon-size) solid var(--color-fail);
}

.lh-audit--error .lh-audit__score-icon,
.lh-metric--error .lh-metric__icon {
  background-image: var(--error-icon-url);
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}

.lh-gauge__wrapper--fail .lh-gauge--error {
  background-image: var(--error-icon-url);
  background-repeat: no-repeat;
  background-position: center;
  transform: scale(0.5);
  top: var(--score-container-padding);
}

.lh-audit--manual .lh-audit__display-text,
.lh-audit--notapplicable .lh-audit__display-text {
  color: var(--color-gray-600);
}
.lh-audit--manual .lh-audit__score-icon,
.lh-audit--notapplicable .lh-audit__score-icon {
  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-400);
  border-radius: 100%;
  background: none;
}

.lh-audit--informative .lh-audit__display-text {
  color: var(--color-gray-600);
}

.lh-audit--informative .lh-audit__score-icon {
  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-400);
  border-radius: 100%;
}

.lh-audit__description,
.lh-audit__stackpack {
  color: var(--report-text-color-secondary);
}
.lh-audit__adorn {
  border: 1px solid var(--color-gray-500);
  border-radius: 3px;
  margin: 0 3px;
  padding: 0 2px;
  line-height: 1.1;
  display: inline-block;
  font-size: 90%;
  color: var(--report-text-color-secondary);
}

.lh-category-header__description  {
  text-align: center;
  color: var(--color-gray-700);
  margin: 0px auto;
  max-width: 400px;
}


.lh-audit__display-text,
.lh-chevron-container {
  margin: 0 var(--audit-margin-horizontal);
}
.lh-chevron-container {
  margin-right: 0;
}

.lh-audit__title-and-text {
  flex: 1;
}

.lh-audit__title-and-text code {
  color: var(--snippet-color);
  font-size: var(--report-monospace-font-size);
}

/* Prepend display text with em dash separator. */
.lh-audit__display-text:not(:empty):before {
  content: '—';
  margin-right: var(--audit-margin-horizontal);
}

/* Expandable Details (Audit Groups, Audits) */
.lh-audit__header {
  display: flex;
  align-items: center;
  padding: var(--default-padding);
}


.lh-metricfilter {
  display: grid;
  justify-content: end;
  align-items: center;
  grid-auto-flow: column;
  gap: 4px;
  color: var(--color-gray-700);
}

.lh-metricfilter__radio {
  /*
   * Instead of hiding, position offscreen so it's still accessible to screen readers
   * https://bugs.chromium.org/p/chromium/issues/detail?id=1439785
   */
  position: fixed;
  left: -9999px;
}
.lh-metricfilter input[type='radio']:focus-visible + label {
  outline: -webkit-focus-ring-color auto 1px;
}

.lh-metricfilter__label {
  display: inline-flex;
  padding: 0 4px;
  height: 16px;
  text-decoration: underline;
  align-items: center;
  cursor: pointer;
  font-size: 90%;
}

.lh-metricfilter__label--active {
  background: var(--color-blue-primary);
  color: var(--color-white);
  border-radius: 3px;
  text-decoration: none;
}
/* Give the 'All' choice a more muted display */
.lh-metricfilter__label--active[for="metric-All"] {
  background-color: var(--color-blue-200) !important;
  color: black !important;
}

.lh-metricfilter__text {
  margin-right: 8px;
}

/* If audits are filtered, hide the itemcount for Passed Audits… */
.lh-category--filtered .lh-audit-group .lh-audit-group__itemcount {
  display: none;
}


.lh-audit__header:hover {
  background-color: var(--color-hover);
}

/* We want to hide the browser's default arrow marker on summary elements. Admittedly, it's complicated. */
.lh-root details > summary {
  /* Blink 89+ and Firefox will hide the arrow when display is changed from (new) default of \`list-item\` to block.  https://chromestatus.com/feature/6730096436051968*/
  display: block;
}
/* Safari and Blink <=88 require using the -webkit-details-marker selector */
.lh-root details > summary::-webkit-details-marker {
  display: none;
}

/* Perf Metric */

.lh-metrics-container {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: var(--report-line-height);
  margin-bottom: var(--default-padding);
}

.lh-metric {
  border-top: 1px solid var(--report-border-color-secondary);
}

.lh-category:not(.lh--hoisted-meta) .lh-metric:nth-last-child(-n+2) {
  border-bottom: 1px solid var(--report-border-color-secondary);
}

.lh-metric__innerwrap {
  display: grid;
  /**
   * Icon -- Metric Name
   *      -- Metric Value
   */
  grid-template-columns: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right)) 1fr;
  align-items: center;
  padding: var(--default-padding);
}

.lh-metric__details {
  order: -1;
}

.lh-metric__title {
  flex: 1;
}

.lh-calclink {
  padding-left: calc(1ex / 3);
}

.lh-metric__description {
  display: none;
  grid-column-start: 2;
  grid-column-end: 4;
  color: var(--report-text-color-secondary);
}

.lh-metric__value {
  font-size: var(--metric-value-font-size);
  margin: calc(var(--default-padding) / 2) 0;
  white-space: nowrap; /* No wrapping between metric value and the icon */
  grid-column-start: 2;
}


@media screen and (max-width: 535px) {
  .lh-metrics-container {
    display: block;
  }

  .lh-metric {
    border-bottom: none !important;
  }
  .lh-category:not(.lh--hoisted-meta) .lh-metric:nth-last-child(1) {
    border-bottom: 1px solid var(--report-border-color-secondary) !important;
  }

  /* Change the grid to 3 columns for narrow viewport. */
  .lh-metric__innerwrap {
  /**
   * Icon -- Metric Name -- Metric Value
   */
    grid-template-columns: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right)) 2fr 1fr;
  }
  .lh-metric__value {
    justify-self: end;
    grid-column-start: unset;
  }
}

/* No-JS toggle switch */
/* Keep this selector sync'd w/ \`magicSelector\` in report-ui-features-test.js */
 .lh-metrics-toggle__input:checked ~ .lh-metrics-container .lh-metric__description {
  display: block;
}

/* TODO get rid of the SVGS and clean up these some more */
.lh-metrics-toggle__input {
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0px;
}

.lh-metrics-toggle__input + div > label > .lh-metrics-toggle__labeltext--hide,
.lh-metrics-toggle__input:checked + div > label > .lh-metrics-toggle__labeltext--show {
  display: none;
}
.lh-metrics-toggle__input:checked + div > label > .lh-metrics-toggle__labeltext--hide {
  display: inline;
}
.lh-metrics-toggle__input:focus + div > label {
  outline: -webkit-focus-ring-color auto 3px;
}

.lh-metrics-toggle__label {
  cursor: pointer;
  font-size: var(--report-font-size-secondary);
  line-height: var(--report-line-height-secondary);
  color: var(--color-gray-700);
}

/* Pushes the metric description toggle button to the right. */
.lh-audit-group--metrics .lh-audit-group__header {
  display: flex;
  justify-content: space-between;
}

.lh-metric__icon,
.lh-scorescale-range::before {
  content: '';
  width: var(--score-icon-size);
  height: var(--score-icon-size);
  display: inline-block;
  margin: var(--score-icon-margin);
}

.lh-metric--pass .lh-metric__value {
  color: var(--color-pass-secondary);
}
.lh-metric--pass .lh-metric__icon {
  border-radius: 100%;
  background: var(--color-pass);
}

.lh-metric--average .lh-metric__value {
  color: var(--color-average-secondary);
}
.lh-metric--average .lh-metric__icon {
  background: var(--color-average);
  width: var(--icon-square-size);
  height: var(--icon-square-size);
}

.lh-metric--fail .lh-metric__value {
  color: var(--color-fail-secondary);
}
.lh-metric--fail .lh-metric__icon {
  border-left: calc(var(--score-icon-size) / 2) solid transparent;
  border-right: calc(var(--score-icon-size) / 2) solid transparent;
  border-bottom: var(--score-icon-size) solid var(--color-fail);
}

.lh-metric--error .lh-metric__value,
.lh-metric--error .lh-metric__description {
  color: var(--color-fail-secondary);
}

/* Filmstrip */

.lh-filmstrip-container {
  /* smaller gap between metrics and filmstrip */
  margin: -8px auto 0 auto;
}

.lh-filmstrip {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  margin-bottom: var(--default-padding);
  width: 100%;
}

.lh-filmstrip__frame {
  overflow: hidden;
  line-height: 0;
}

.lh-filmstrip__thumbnail {
  border: 1px solid var(--report-border-color-secondary);
  max-height: 150px;
  max-width: 120px;
}

/* Audit */

.lh-audit {
  border-bottom: 1px solid var(--report-border-color-secondary);
}

/* Apply border-top to just the first audit. */
.lh-audit {
  border-top: 1px solid var(--report-border-color-secondary);
}
.lh-audit ~ .lh-audit {
  border-top: none;
}


.lh-audit--error .lh-audit__display-text {
  color: var(--color-fail-secondary);
}

/* Audit Group */

.lh-audit-group {
  margin-bottom: var(--audit-group-margin-bottom);
  position: relative;
}
.lh-audit-group--metrics {
  margin-bottom: calc(var(--audit-group-margin-bottom) / 2);
}

.lh-audit-group--metrics .lh-audit-group__summary {
  margin-top: 0;
  margin-bottom: 0;
}

.lh-audit-group__summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lh-audit-group__header .lh-chevron {
  margin-top: calc((var(--report-line-height) - 5px) / 2);
}

.lh-audit-group__header {
  letter-spacing: 0.8px;
  padding: var(--default-padding);
  padding-left: 0;
}

.lh-audit-group__header, .lh-audit-group__summary {
  font-size: var(--report-font-size-secondary);
  line-height: var(--report-line-height-secondary);
  color: var(--color-gray-700);
}

.lh-audit-group__title {
  text-transform: uppercase;
  font-weight: 500;
}

.lh-audit-group__itemcount {
  color: var(--color-gray-600);
}

.lh-audit-group__footer {
  color: var(--color-gray-600);
  display: block;
  margin-top: var(--default-padding);
}

.lh-details,
.lh-category-header__description,
.lh-audit-group__footer {
  font-size: var(--report-font-size-secondary);
  line-height: var(--report-line-height-secondary);
}

.lh-audit-explanation {
  margin: var(--audit-padding-vertical) 0 calc(var(--audit-padding-vertical) / 2) var(--audit-margin-horizontal);
  line-height: var(--audit-explanation-line-height);
  display: inline-block;
}

.lh-audit--fail .lh-audit-explanation {
  color: var(--color-fail-secondary);
}

/* Report */
.lh-list > :not(:last-child) {
  margin-bottom: calc(var(--default-padding) * 2);
}

.lh-header-container {
  display: block;
  margin: 0 auto;
  position: relative;
  word-wrap: break-word;
}

.lh-header-container .lh-scores-wrapper {
  border-bottom: 1px solid var(--color-gray-200);
}


.lh-report {
  min-width: var(--report-content-min-width);
}

.lh-exception {
  font-size: large;
}

.lh-code {
  white-space: normal;
  margin-top: 0;
  font-size: var(--report-monospace-font-size);
}

.lh-warnings {
  --item-margin: calc(var(--report-line-height) / 6);
  color: var(--color-average-secondary);
  margin: var(--audit-padding-vertical) 0;
  padding: var(--default-padding)
    var(--default-padding)
    var(--default-padding)
    calc(var(--audit-description-padding-left));
  background-color: var(--toplevel-warning-background-color);
}
.lh-warnings span {
  font-weight: bold;
}

.lh-warnings--toplevel {
  --item-margin: calc(var(--header-line-height) / 4);
  color: var(--toplevel-warning-text-color);
  margin-left: auto;
  margin-right: auto;
  max-width: var(--report-content-max-width-minus-edge-gap);
  padding: var(--toplevel-warning-padding);
  border-radius: 8px;
}

.lh-warnings__msg {
  color: var(--toplevel-warning-message-text-color);
  margin: 0;
}

.lh-warnings ul {
  margin: 0;
}
.lh-warnings li {
  margin: var(--item-margin) 0;
}
.lh-warnings li:last-of-type {
  margin-bottom: 0;
}

.lh-scores-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.lh-scores-header__solo {
  padding: 0;
  border: 0;
}

/* Gauge */

.lh-gauge__wrapper--pass {
  color: var(--color-pass-secondary);
  fill: var(--color-pass);
  stroke: var(--color-pass);
}

.lh-gauge__wrapper--average {
  color: var(--color-average-secondary);
  fill: var(--color-average);
  stroke: var(--color-average);
}

.lh-gauge__wrapper--fail {
  color: var(--color-fail-secondary);
  fill: var(--color-fail);
  stroke: var(--color-fail);
}

.lh-gauge__wrapper--not-applicable {
  color: var(--color-not-applicable);
  fill: var(--color-not-applicable);
  stroke: var(--color-not-applicable);
}

.lh-fraction__wrapper .lh-fraction__content::before {
  content: '';
  height: var(--score-icon-size);
  width: var(--score-icon-size);
  margin: var(--score-icon-margin);
  display: inline-block;
}
.lh-fraction__wrapper--pass .lh-fraction__content {
  color: var(--color-pass-secondary);
}
.lh-fraction__wrapper--pass .lh-fraction__background {
  background-color: var(--color-pass);
}
.lh-fraction__wrapper--pass .lh-fraction__content::before {
  background-color: var(--color-pass);
  border-radius: 50%;
}
.lh-fraction__wrapper--average .lh-fraction__content {
  color: var(--color-average-secondary);
}
.lh-fraction__wrapper--average .lh-fraction__background,
.lh-fraction__wrapper--average .lh-fraction__content::before {
  background-color: var(--color-average);
}
.lh-fraction__wrapper--fail .lh-fraction__content {
  color: var(--color-fail);
}
.lh-fraction__wrapper--fail .lh-fraction__background {
  background-color: var(--color-fail);
}
.lh-fraction__wrapper--fail .lh-fraction__content::before {
  border-left: calc(var(--score-icon-size) / 2) solid transparent;
  border-right: calc(var(--score-icon-size) / 2) solid transparent;
  border-bottom: var(--score-icon-size) solid var(--color-fail);
}
.lh-fraction__wrapper--null .lh-fraction__content {
  color: var(--color-gray-700);
}
.lh-fraction__wrapper--null .lh-fraction__background {
  background-color: var(--color-gray-700);
}
.lh-fraction__wrapper--null .lh-fraction__content::before {
  border-radius: 50%;
  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-700);
}

.lh-fraction__background {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: calc(var(--gauge-circle-size) / 2);
  opacity: 0.1;
  z-index: -1;
}

.lh-fraction__content-wrapper {
  height: var(--gauge-circle-size);
  display: flex;
  align-items: center;
}

.lh-fraction__content {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: calc(0.3 * var(--gauge-circle-size));
  line-height: calc(0.4 * var(--gauge-circle-size));
  width: max-content;
  min-width: calc(1.5 * var(--gauge-circle-size));
  padding: calc(0.1 * var(--gauge-circle-size)) calc(0.2 * var(--gauge-circle-size));
  --score-icon-size: calc(0.21 * var(--gauge-circle-size));
  --score-icon-margin: 0 calc(0.15 * var(--gauge-circle-size)) 0 0;
}

.lh-gauge {
  stroke-linecap: round;
  width: var(--gauge-circle-size);
  height: var(--gauge-circle-size);
}

.lh-category .lh-gauge {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

.lh-gauge-base {
  opacity: 0.1;
}

.lh-gauge-arc {
  fill: none;
  transform-origin: 50% 50%;
  animation: load-gauge var(--transition-length) ease both;
  animation-delay: 250ms;
}

.lh-gauge__svg-wrapper {
  position: relative;
  height: var(--gauge-circle-size);
}
.lh-category .lh-gauge__svg-wrapper,
.lh-category .lh-fraction__wrapper {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

/* The plugin badge overlay */
.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size);
  height: var(--plugin-badge-size);
  background-color: var(--plugin-badge-background-color);
  background-image: var(--plugin-icon-url);
  background-repeat: no-repeat;
  background-size: var(--plugin-icon-size);
  background-position: 58% 50%;
  content: "";
  position: absolute;
  right: -6px;
  bottom: 0px;
  display: block;
  z-index: 100;
  box-shadow: 0 0 4px rgba(0,0,0,.2);
  border-radius: 25%;
}
.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size-big);
  height: var(--plugin-badge-size-big);
}

@keyframes load-gauge {
  from { stroke-dasharray: 0 352; }
}

.lh-gauge__percentage {
  width: 100%;
  height: var(--gauge-circle-size);
  line-height: var(--gauge-circle-size);
  position: absolute;
  font-family: var(--report-font-family-monospace);
  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);
  text-align: center;
  top: var(--score-container-padding);
}

.lh-category .lh-gauge__percentage {
  --gauge-circle-size: var(--gauge-circle-size-big);
  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);
}

.lh-gauge__wrapper,
.lh-fraction__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  padding: var(--score-container-padding);

  --transition-length: 1s;

  /* Contain the layout style paint & layers during animation*/
  contain: content;
  will-change: opacity; /* Only using for layer promotion */
}

.lh-gauge__label,
.lh-fraction__label {
  font-size: var(--gauge-label-font-size);
  font-weight: 500;
  line-height: var(--gauge-label-line-height);
  margin-top: 10px;
  text-align: center;
  color: var(--report-text-color);
  word-break: keep-all;
}

/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */
.lh-category .lh-gauge__label,
.lh-category .lh-fraction__label {
  --gauge-label-font-size: var(--gauge-label-font-size-big);
  --gauge-label-line-height: var(--gauge-label-line-height-big);
  margin-top: 14px;
}

.lh-scores-header .lh-gauge__wrapper,
.lh-scores-header .lh-fraction__wrapper,
.lh-sticky-header .lh-gauge__wrapper,
.lh-sticky-header .lh-fraction__wrapper {
  width: var(--gauge-wrapper-width);
}

.lh-scorescale {
  display: inline-flex;

  gap: calc(var(--default-padding) * 4);
  margin: 16px auto 0 auto;
  font-size: var(--report-font-size-secondary);
  color: var(--color-gray-700);

}

.lh-scorescale-range {
  display: flex;
  align-items: center;
  font-family: var(--report-font-family-monospace);
  white-space: nowrap;
}

.lh-category-header__finalscreenshot .lh-scorescale {
  border: 0;
  display: flex;
  justify-content: center;
}

.lh-category-header__finalscreenshot .lh-scorescale-range {
  font-family: unset;
  font-size: 12px;
}

.lh-scorescale-wrap {
  display: contents;
}

/* Hide category score gauages if it's a single category report */
.lh-header--solo-category .lh-scores-wrapper {
  display: none;
}


.lh-categories {
  width: 100%;
}

.lh-category {
  padding: var(--category-padding);
  max-width: var(--report-content-max-width);
  margin: 0 auto;

  scroll-margin-top: calc(var(--sticky-header-buffer) - 1em);
}

.lh-category-wrapper {
  border-bottom: 1px solid var(--color-gray-200);
}
.lh-category-wrapper:last-of-type {
  border-bottom: 0;
}

.lh-category-header {
  margin-bottom: var(--section-padding-vertical);
}

.lh-category-header .lh-score__gauge {
  max-width: 400px;
  width: auto;
  margin: 0px auto;
}

.lh-category-header__finalscreenshot {
  display: grid;
  grid-template: none / 1fr 1px 1fr;
  justify-items: center;
  align-items: center;
  gap: var(--report-line-height);
  min-height: 288px;
  margin-bottom: var(--default-padding);
}

.lh-final-ss-image {
  /* constrain the size of the image to not be too large */
  max-height: calc(var(--gauge-circle-size-big) * 2.8);
  max-width: calc(var(--gauge-circle-size-big) * 3.5);
  border: 1px solid var(--color-gray-200);
  padding: 4px;
  border-radius: 3px;
  display: block;
}

.lh-category-headercol--separator {
  background: var(--color-gray-200);
  width: 1px;
  height: var(--gauge-circle-size-big);
}

@media screen and (max-width: 780px) {
  .lh-category-header__finalscreenshot {
    grid-template: 1fr 1fr / none
  }
  .lh-category-headercol--separator {
    display: none;
  }
}


/* 964 fits the min-width of the filmstrip */
@media screen and (max-width: 964px) {
  .lh-report {
    margin-left: 0;
    width: 100%;
  }
}

@media print {
  body {
    -webkit-print-color-adjust: exact; /* print background colors */
  }
  .lh-container {
    display: block;
  }
  .lh-report {
    margin-left: 0;
    padding-top: 0;
  }
  .lh-categories {
    margin-top: 0;
  }
}

.lh-table {
  position: relative;
  border-collapse: separate;
  border-spacing: 0;
  /* Can't assign padding to table, so shorten the width instead. */
  width: calc(100% - var(--audit-description-padding-left) - var(--stackpack-padding-horizontal));
  border: 1px solid var(--report-border-color-secondary);
}

.lh-table thead th {
  position: sticky;
  top: var(--sticky-header-buffer);
  z-index: 1;
  background-color: var(--report-background-color);
  border-bottom: 1px solid var(--report-border-color-secondary);
  font-weight: normal;
  color: var(--color-gray-600);
  /* See text-wrapping comment on .lh-container. */
  word-break: normal;
}

.lh-row--group {
  background-color: var(--table-group-header-background-color);
}

.lh-row--group td {
  font-weight: bold;
  font-size: 1.05em;
  color: var(--table-group-header-text-color);
}

.lh-row--group td:first-child {
  display: block;
  min-width: max-content;
  font-weight: normal;
}

.lh-row--group .lh-text {
  color: inherit;
  text-decoration: none;
  display: inline-block;
}

.lh-row--group a.lh-link:hover {
  text-decoration: underline;
}

.lh-row--group .lh-audit__adorn {
  text-transform: capitalize;
  font-weight: normal;
  padding: 2px 3px 1px 3px;
}

.lh-row--group .lh-audit__adorn1p {
  color: var(--link-color);
  border-color: var(--link-color);
}

.lh-row--group .lh-report-icon--external::before {
  content: "";
  background-repeat: no-repeat;
  width: 14px;
  height: 16px;
  opacity: 0.7;
  display: inline-block;
  vertical-align: middle;
}

.lh-row--group .lh-report-icon--external {
  visibility: hidden;
}

.lh-row--group:hover .lh-report-icon--external {
  visibility: visible;
}

.lh-dark .lh-report-icon--external::before {
  filter: invert(1);
}

/** Manages indentation of two-level and three-level nested adjacent rows */

.lh-row--group ~ [data-entity]:not(.lh-row--group) td:first-child {
  padding-left: 20px;
}

.lh-row--group ~ [data-entity]:not(.lh-row--group) ~ .lh-sub-item-row td:first-child {
  padding-left: 40px;
}

.lh-row--even {
  background-color: var(--table-group-header-background-color);
}
.lh-row--hidden {
  display: none;
}

.lh-table th,
.lh-table td {
  padding: var(--default-padding);
}

.lh-table tr {
  vertical-align: middle;
}

.lh-table tr:hover {
  background-color: var(--table-higlight-background-color);
}

/* Looks unnecessary, but mostly for keeping the <th>s left-aligned */
.lh-table-column--text,
.lh-table-column--source-location,
.lh-table-column--url,
/* .lh-table-column--thumbnail, */
/* .lh-table-column--empty,*/
.lh-table-column--code,
.lh-table-column--node {
  text-align: left;
}

.lh-table-column--code {
  min-width: 100px;
}

.lh-table-column--bytes,
.lh-table-column--timespanMs,
.lh-table-column--ms,
.lh-table-column--numeric {
  text-align: right;
  word-break: normal;
}



.lh-table .lh-table-column--thumbnail {
  width: var(--image-preview-size);
}

.lh-table-column--url {
  min-width: 250px;
}

.lh-table-column--text {
  min-width: 80px;
}

/* Keep columns narrow if they follow the URL column */
/* 12% was determined to be a decent narrow width, but wide enough for column headings */
.lh-table-column--url + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--ms,
.lh-table-column--url + .lh-table-column--ms + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--timespanMs {
  width: 12%;
}

.lh-text__url-host {
  display: inline;
}

.lh-text__url-host {
  margin-left: calc(var(--report-font-size) / 2);
  opacity: 0.6;
  font-size: 90%
}

.lh-thumbnail {
  object-fit: cover;
  width: var(--image-preview-size);
  height: var(--image-preview-size);
  display: block;
}

.lh-unknown pre {
  overflow: scroll;
  border: solid 1px var(--color-gray-200);
}

.lh-text__url > a {
  color: inherit;
  text-decoration: none;
}

.lh-text__url > a:hover {
  text-decoration: underline dotted #999;
}

.lh-sub-item-row {
  margin-left: 20px;
  margin-bottom: 0;
  color: var(--color-gray-700);
}

.lh-sub-item-row td {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 20px;
}

.lh-sub-item-row .lh-element-screenshot {
  zoom: 0.6;
}

/* Chevron
   https://codepen.io/paulirish/pen/LmzEmK
 */
.lh-chevron {
  --chevron-angle: 42deg;
  /* Edge doesn't support transform: rotate(calc(...)), so we define it here */
  --chevron-angle-right: -42deg;
  width: var(--chevron-size);
  height: var(--chevron-size);
  margin-top: calc((var(--report-line-height) - 12px) / 2);
}

.lh-chevron__lines {
  transition: transform 0.4s;
  transform: translateY(var(--report-line-height));
}
.lh-chevron__line {
 stroke: var(--chevron-line-stroke);
 stroke-width: var(--chevron-size);
 stroke-linecap: square;
 transform-origin: 50%;
 transform: rotate(var(--chevron-angle));
 transition: transform 300ms, stroke 300ms;
}

.lh-expandable-details .lh-chevron__line-right,
.lh-expandable-details[open] .lh-chevron__line-left {
 transform: rotate(var(--chevron-angle-right));
}

.lh-expandable-details[open] .lh-chevron__line-right {
  transform: rotate(var(--chevron-angle));
}


.lh-expandable-details[open]  .lh-chevron__lines {
 transform: translateY(calc(var(--chevron-size) * -1));
}

.lh-expandable-details[open] {
  animation: 300ms openDetails forwards;
  padding-bottom: var(--default-padding);
}

@keyframes openDetails {
  from {
    outline: 1px solid var(--report-background-color);
  }
  to {
   outline: 1px solid;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .24);
  }
}

@media screen and (max-width: 780px) {
  /* no black outline if we're not confident the entire table can be displayed within bounds */
  .lh-expandable-details[open] {
    animation: none;
  }
}

.lh-expandable-details[open] summary, details.lh-clump > summary {
  border-bottom: 1px solid var(--report-border-color-secondary);
}
details.lh-clump[open] > summary {
  border-bottom-width: 0;
}



details .lh-clump-toggletext--hide,
details[open] .lh-clump-toggletext--show { display: none; }
details[open] .lh-clump-toggletext--hide { display: block;}


/* Tooltip */
.lh-tooltip-boundary {
  position: relative;
}

.lh-tooltip {
  position: absolute;
  display: none; /* Don't retain these layers when not needed */
  opacity: 0;
  background: #ffffff;
  white-space: pre-line; /* Render newlines in the text */
  min-width: 246px;
  max-width: 275px;
  padding: 15px;
  border-radius: 5px;
  text-align: initial;
  line-height: 1.4;
}
/* shrink tooltips to not be cutoff on left edge of narrow viewports
   45vw is chosen to be ~= width of the left column of metrics
*/
@media screen and (max-width: 535px) {
  .lh-tooltip {
    min-width: 45vw;
    padding: 3vw;
  }
}

.lh-tooltip-boundary:hover .lh-tooltip {
  display: block;
  animation: fadeInTooltip 250ms;
  animation-fill-mode: forwards;
  animation-delay: 850ms;
  bottom: 100%;
  z-index: 1;
  will-change: opacity;
  right: 0;
  pointer-events: none;
}

.lh-tooltip::before {
  content: "";
  border: solid transparent;
  border-bottom-color: #fff;
  border-width: 10px;
  position: absolute;
  bottom: -20px;
  right: 6px;
  transform: rotate(180deg);
  pointer-events: none;
}

@keyframes fadeInTooltip {
  0% { opacity: 0; }
  75% { opacity: 1; }
  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); pointer-events: auto; }
}

/* Element screenshot */
.lh-element-screenshot {
  float: left;
  margin-right: 20px;
}
.lh-element-screenshot__content {
  overflow: hidden;
  min-width: 110px;
  display: flex;
  justify-content: center;
  background-color: var(--report-background-color);
}
.lh-element-screenshot__image {
  position: relative;
  /* Set by ElementScreenshotRenderer.installFullPageScreenshotCssVariable */
  background-image: var(--element-screenshot-url);
  outline: 2px solid #777;
  background-color: white;
  background-repeat: no-repeat;
}
.lh-element-screenshot__mask {
  position: absolute;
  background: #555;
  opacity: 0.8;
}
.lh-element-screenshot__element-marker {
  position: absolute;
  outline: 2px solid var(--color-lime-400);
}
.lh-element-screenshot__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000; /* .lh-topbar is 1000 */
  background: var(--screenshot-overlay-background);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.lh-element-screenshot__overlay .lh-element-screenshot {
  margin-right: 0; /* clearing margin used in thumbnail case */
  outline: 1px solid var(--color-gray-700);
}

.lh-screenshot-overlay--enabled .lh-element-screenshot {
  cursor: zoom-out;
}
.lh-screenshot-overlay--enabled .lh-node .lh-element-screenshot {
  cursor: zoom-in;
}


.lh-meta__items {
  --meta-icon-size: calc(var(--report-icon-size) * 0.667);
  padding: var(--default-padding);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--env-item-background-color);
  border-radius: 3px;
  margin: 0 0 var(--default-padding) 0;
  font-size: 12px;
  column-gap: var(--default-padding);
  color: var(--color-gray-700);
}

.lh-meta__item {
  display: block;
  list-style-type: none;
  position: relative;
  padding: 0 0 0 calc(var(--meta-icon-size) + var(--default-padding) * 2);
  cursor: unset; /* disable pointer cursor from report-icon */
}

.lh-meta__item.lh-tooltip-boundary {
  text-decoration: dotted underline var(--color-gray-500);
  cursor: help;
}

.lh-meta__item.lh-report-icon::before {
  position: absolute;
  left: var(--default-padding);
  width: var(--meta-icon-size);
  height: var(--meta-icon-size);
}

.lh-meta__item.lh-report-icon:hover::before {
  opacity: 0.7;
}

.lh-meta__item .lh-tooltip {
  color: var(--color-gray-800);
}

.lh-meta__item .lh-tooltip::before {
  right: auto; /* Set the tooltip arrow to the leftside */
  left: 6px;
}

/* Change the grid for narrow viewport. */
@media screen and (max-width: 640px) {
  .lh-meta__items {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 535px) {
  .lh-meta__items {
    display: block;
  }
}

/* Explodey gauge */

.lh-exp-gauge-component {
  margin-bottom: 10px;
}

.lh-exp-gauge-component circle {
  stroke: currentcolor;
  r: var(--radius);
}

.lh-exp-gauge-component text {
  font-size: calc(var(--radius) * 0.2);
}

.lh-exp-gauge-component .lh-exp-gauge {
  margin: 0 auto;
  width: 225px;
  stroke-width: var(--stroke-width);
  stroke-linecap: round;

  /* for better rendering perf */
  contain: strict;
  height: 225px;
  will-change: transform;
}
.lh-exp-gauge-component .lh-exp-gauge--faded {
  opacity: 0.1;
}
.lh-exp-gauge-component .lh-exp-gauge__wrapper {
  font-family: var(--report-font-family-monospace);
  text-align: center;
  text-decoration: none;
  transition: .3s;
}
.lh-exp-gauge-component .lh-exp-gauge__wrapper--pass {
  color: var(--color-pass);
}
.lh-exp-gauge-component .lh-exp-gauge__wrapper--average {
  color: var(--color-average);
}
.lh-exp-gauge-component .lh-exp-gauge__wrapper--fail {
  color: var(--color-fail);
}
.lh-exp-gauge-component .state--expanded {
  transition: color .3s;
}
.lh-exp-gauge-component .state--highlight {
  color: var(--color-highlight);
}
.lh-exp-gauge-component .lh-exp-gauge__svg-wrapper {
  display: flex;
  flex-direction: column-reverse;
}

.lh-exp-gauge-component .lh-exp-gauge__label {
  fill: var(--report-text-color);
  font-family: var(--report-font-family);
  font-size: 12px;
}

.lh-exp-gauge-component .lh-exp-gauge__cutout {
  opacity: .999;
  transition: opacity .3s;
}
.lh-exp-gauge-component .state--highlight .lh-exp-gauge__cutout {
  opacity: 0;
}

.lh-exp-gauge-component .lh-exp-gauge__inner {
  color: inherit;
}
.lh-exp-gauge-component .lh-exp-gauge__base {
  fill: currentcolor;
}


.lh-exp-gauge-component .lh-exp-gauge__arc {
  fill: none;
  transition: opacity .3s;
}
.lh-exp-gauge-component .lh-exp-gauge__arc--metric {
  color: var(--metric-color);
  stroke-dashoffset: var(--metric-offset);
  opacity: 0.3;
}
.lh-exp-gauge-component .lh-exp-gauge-hovertarget {
  color: currentcolor;
  opacity: 0.001;
  stroke-linecap: butt;
  stroke-width: 24;
  /* hack. move the hover target out of the center. ideally i tweak the r instead but that rquires considerably more math. */
  transform: scale(1.15);
}
.lh-exp-gauge-component .lh-exp-gauge__arc--metric.lh-exp-gauge--miniarc {
  opacity: 0;
  stroke-dasharray: 0 calc(var(--circle-meas) * var(--radius));
  transition: 0s .005s;
}
.lh-exp-gauge-component .state--expanded .lh-exp-gauge__arc--metric.lh-exp-gauge--miniarc {
  opacity: .999;
  stroke-dasharray: var(--metric-array);
  transition: 0.3s; /*  calc(.005s + var(--i)*.05s); entrace animation */
}
.lh-exp-gauge-component .state--expanded .lh-exp-gauge__inner .lh-exp-gauge__arc {
  opacity: 0;
}


.lh-exp-gauge-component .lh-exp-gauge__percentage {
  text-anchor: middle;
  dominant-baseline: middle;
  opacity: .999;
  font-size: calc(var(--radius) * 0.625);
  transition: opacity .3s ease-in;
}
.lh-exp-gauge-component .state--highlight .lh-exp-gauge__percentage {
  opacity: 0;
}

.lh-exp-gauge-component .lh-exp-gauge__wrapper--fail .lh-exp-gauge__percentage {
  fill: var(--color-fail);
}
.lh-exp-gauge-component .lh-exp-gauge__wrapper--average .lh-exp-gauge__percentage {
  fill: var(--color-average);
}
.lh-exp-gauge-component .lh-exp-gauge__wrapper--pass .lh-exp-gauge__percentage {
  fill: var(--color-pass);
}

.lh-exp-gauge-component .lh-cover {
  fill: none;
  opacity: .001;
  pointer-events: none;
}
.lh-exp-gauge-component .state--expanded .lh-cover {
  pointer-events: auto;
}

.lh-exp-gauge-component .metric {
  transform: scale(var(--scale-initial));
  opacity: 0;
  transition: transform .1s .2s ease-out,  opacity .3s ease-out;
  pointer-events: none;
}
.lh-exp-gauge-component .metric text {
  pointer-events: none;
}
.lh-exp-gauge-component .metric__value {
  fill: currentcolor;
  opacity: 0;
  transition: opacity 0.2s;
}
.lh-exp-gauge-component .state--expanded .metric {
  transform: scale(1);
  opacity: .999;
  transition: transform .3s ease-out,  opacity .3s ease-in,  stroke-width .1s ease-out;
  transition-delay: calc(var(--i)*.05s);
  pointer-events: auto;
}
.lh-exp-gauge-component .state--highlight .metric {
  opacity: .3;
}
.lh-exp-gauge-component .state--highlight .metric--highlight {
  opacity: .999;
  stroke-width: calc(1.5*var(--stroke-width));
}
.lh-exp-gauge-component .state--highlight .metric--highlight .metric__value {
  opacity: 0.999;
}


/*
 the initial first load peek
*/
.lh-exp-gauge-component .lh-exp-gauge__bg {  /* needed for the use zindex stacking w/ transparency */
  fill: var(--report-background-color);
  stroke: var(--report-background-color);
}
.lh-exp-gauge-component .state--peek .metric {
  transition-delay: 0ms;
  animation: peek var(--peek-dur) cubic-bezier(0.46, 0.03, 0.52, 0.96);
  animation-fill-mode: forwards;
}
.lh-exp-gauge-component .state--peek .lh-exp-gauge__inner .lh-exp-gauge__arc {
  opacity: 1;
}
.lh-exp-gauge-component .state--peek .lh-exp-gauge__arc.lh-exp-gauge--faded {
  opacity: 0.3; /* just a tad stronger cuz its fighting with a big solid arg */
}
/* do i need to set expanded and override this? */
.lh-exp-gauge-component .state--peek .lh-exp-gauge__arc--metric.lh-exp-gauge--miniarc {
  transition: opacity 0.3s;
}
.lh-exp-gauge-component .state--peek {
  color: unset;
}
.lh-exp-gauge-component .state--peek .metric__label {
  display: none;
}

.lh-exp-gauge-component .metric__label {
  fill: var(--report-text-color);
}

@keyframes peek {
  /* biggest it should go is 0.92. smallest is 0.8 */
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }

  50% {
    transform: scale(0.92);
    opacity: 1;
  }

  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
}

.lh-exp-gauge-component .wrapper {
  width: 620px;
}

/*# sourceURL=report-styles.css */
`),t.append(n),t}function Ao(e){let t=e.createFragment(),n=e.createElement("style");n.append(`
    .lh-topbar {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      height: var(--topbar-height);
      padding: var(--topbar-padding);
      font-size: var(--report-font-size-secondary);
      background-color: var(--topbar-background-color);
      border-bottom: 1px solid var(--color-gray-200);
    }

    .lh-topbar__logo {
      width: var(--topbar-logo-size);
      height: var(--topbar-logo-size);
      user-select: none;
      flex: none;
    }

    .lh-topbar__url {
      margin: var(--topbar-padding);
      text-decoration: none;
      color: var(--report-text-color);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .lh-tools {
      display: flex;
      align-items: center;
      margin-left: auto;
      will-change: transform;
      min-width: var(--report-icon-size);
    }
    .lh-tools__button {
      width: var(--report-icon-size);
      min-width: 24px;
      height: var(--report-icon-size);
      cursor: pointer;
      margin-right: 5px;
      /* This is actually a button element, but we want to style it like a transparent div. */
      display: flex;
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
    }
    .lh-tools__button svg {
      fill: var(--tools-icon-color);
    }
    .lh-dark .lh-tools__button svg {
      filter: invert(1);
    }
    .lh-tools__button.lh-active + .lh-tools__dropdown {
      opacity: 1;
      clip: rect(-1px, 194px, 270px, -3px);
      visibility: visible;
    }
    .lh-tools__dropdown {
      position: absolute;
      background-color: var(--report-background-color);
      border: 1px solid var(--report-border-color);
      border-radius: 3px;
      padding: calc(var(--default-padding) / 2) 0;
      cursor: pointer;
      top: 36px;
      right: 0;
      box-shadow: 1px 1px 3px #ccc;
      min-width: 125px;
      clip: rect(0, 164px, 0, 0);
      visibility: hidden;
      opacity: 0;
      transition: all 200ms cubic-bezier(0,0,0.2,1);
    }
    .lh-tools__dropdown a {
      color: currentColor;
      text-decoration: none;
      white-space: nowrap;
      padding: 0 6px;
      line-height: 2;
    }
    .lh-tools__dropdown a:hover,
    .lh-tools__dropdown a:focus {
      background-color: var(--color-gray-200);
      outline: none;
    }
    /* save-gist option hidden in report. */
    .lh-tools__dropdown a[data-action='save-gist'] {
      display: none;
    }

    .lh-locale-selector {
      width: 100%;
      color: var(--report-text-color);
      background-color: var(--locale-selector-background-color);
      padding: 2px;
    }
    .lh-tools-locale {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
    .lh-tools-locale__selector-wrapper {
      transition: opacity 0.15s;
      opacity: 0;
      max-width: 200px;
    }
    .lh-button.lh-tool-locale__button {
      height: var(--topbar-height);
      color: var(--tools-icon-color);
      padding: calc(var(--default-padding) / 2);
    }
    .lh-tool-locale__button.lh-active + .lh-tools-locale__selector-wrapper {
      opacity: 1;
      clip: rect(-1px, 194px, 242px, -3px);
      visibility: visible;
      margin: 0 4px;
    }

    @media screen and (max-width: 964px) {
      .lh-tools__dropdown {
        right: 0;
        left: initial;
      }
    }
    @media print {
      .lh-topbar {
        position: static;
        margin-left: 0;
      }

      .lh-tools__dropdown {
        display: none;
      }
    }
  `),t.append(n);let a=e.createElement("div","lh-topbar"),i=e.createElementNS("http://www.w3.org/2000/svg","svg","lh-topbar__logo");i.setAttribute("role","img"),i.setAttribute("title","Lighthouse logo"),i.setAttribute("fill","none"),i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("viewBox","0 0 48 48");let o=e.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m14 7 10-7 10 7v10h5v7h-5l5 24H9l5-24H9v-7h5V7Z"),o.setAttribute("fill","#F63");let r=e.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M31.561 24H14l-1.689 8.105L31.561 24ZM18.983 48H9l1.022-4.907L35.723 32.27l1.663 7.98L18.983 48Z"),r.setAttribute("fill","#FFA385");let s=e.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("fill","#FF3"),s.setAttribute("d","M20.5 10h7v7h-7z"),i.append(" ",o," ",r," ",s," ");let p=e.createElement("a","lh-topbar__url");p.setAttribute("href",""),p.setAttribute("target","_blank"),p.setAttribute("rel","noopener");let c=e.createElement("div","lh-tools"),l=e.createElement("div","lh-tools-locale lh-hidden"),d=e.createElement("button","lh-button lh-tool-locale__button");d.setAttribute("id","lh-button__swap-locales"),d.setAttribute("title","Show Language Picker"),d.setAttribute("aria-label","Toggle language picker"),d.setAttribute("aria-haspopup","menu"),d.setAttribute("aria-expanded","false"),d.setAttribute("aria-controls","lh-tools-locale__selector-wrapper");let m=e.createElementNS("http://www.w3.org/2000/svg","svg");m.setAttribute("width","20px"),m.setAttribute("height","20px"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","currentColor");let h=e.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d","M0 0h24v24H0V0z"),h.setAttribute("fill","none");let g=e.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"),m.append(h,g),d.append(" ",m," ");let _=e.createElement("div","lh-tools-locale__selector-wrapper");_.setAttribute("id","lh-tools-locale__selector-wrapper"),_.setAttribute("role","menu"),_.setAttribute("aria-labelledby","lh-button__swap-locales"),_.setAttribute("aria-hidden","true"),_.append(" "," "),l.append(" ",d," ",_," ");let f=e.createElement("button","lh-tools__button");f.setAttribute("id","lh-tools-button"),f.setAttribute("title","Tools menu"),f.setAttribute("aria-label","Toggle report tools menu"),f.setAttribute("aria-haspopup","menu"),f.setAttribute("aria-expanded","false"),f.setAttribute("aria-controls","lh-tools-dropdown");let y=e.createElementNS("http://www.w3.org/2000/svg","svg");y.setAttribute("width","100%"),y.setAttribute("height","100%"),y.setAttribute("viewBox","0 0 24 24");let P=e.createElementNS("http://www.w3.org/2000/svg","path");P.setAttribute("d","M0 0h24v24H0z"),P.setAttribute("fill","none");let A=e.createElementNS("http://www.w3.org/2000/svg","path");A.setAttribute("d","M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"),y.append(" ",P," ",A," "),f.append(" ",y," ");let U=e.createElement("div","lh-tools__dropdown");U.setAttribute("id","lh-tools-dropdown"),U.setAttribute("role","menu"),U.setAttribute("aria-labelledby","lh-tools-button");let b=e.createElement("a","lh-report-icon lh-report-icon--print");b.setAttribute("role","menuitem"),b.setAttribute("tabindex","-1"),b.setAttribute("href","#"),b.setAttribute("data-i18n","dropdownPrintSummary"),b.setAttribute("data-action","print-summary");let w=e.createElement("a","lh-report-icon lh-report-icon--print");w.setAttribute("role","menuitem"),w.setAttribute("tabindex","-1"),w.setAttribute("href","#"),w.setAttribute("data-i18n","dropdownPrintExpanded"),w.setAttribute("data-action","print-expanded");let S=e.createElement("a","lh-report-icon lh-report-icon--copy");S.setAttribute("role","menuitem"),S.setAttribute("tabindex","-1"),S.setAttribute("href","#"),S.setAttribute("data-i18n","dropdownCopyJSON"),S.setAttribute("data-action","copy");let N=e.createElement("a","lh-report-icon lh-report-icon--download lh-hidden");N.setAttribute("role","menuitem"),N.setAttribute("tabindex","-1"),N.setAttribute("href","#"),N.setAttribute("data-i18n","dropdownSaveHTML"),N.setAttribute("data-action","save-html");let B=e.createElement("a","lh-report-icon lh-report-icon--download");B.setAttribute("role","menuitem"),B.setAttribute("tabindex","-1"),B.setAttribute("href","#"),B.setAttribute("data-i18n","dropdownSaveJSON"),B.setAttribute("data-action","save-json");let H=e.createElement("a","lh-report-icon lh-report-icon--open");H.setAttribute("role","menuitem"),H.setAttribute("tabindex","-1"),H.setAttribute("href","#"),H.setAttribute("data-i18n","dropdownViewer"),H.setAttribute("data-action","open-viewer");let G=e.createElement("a","lh-report-icon lh-report-icon--open");G.setAttribute("role","menuitem"),G.setAttribute("tabindex","-1"),G.setAttribute("href","#"),G.setAttribute("data-i18n","dropdownSaveGist"),G.setAttribute("data-action","save-gist");let W=e.createElement("a","lh-report-icon lh-report-icon--open lh-hidden");W.setAttribute("role","menuitem"),W.setAttribute("tabindex","-1"),W.setAttribute("href","#"),W.setAttribute("data-i18n","dropdownViewUnthrottledTrace"),W.setAttribute("data-action","view-unthrottled-trace");let J=e.createElement("a","lh-report-icon lh-report-icon--dark");return J.setAttribute("role","menuitem"),J.setAttribute("tabindex","-1"),J.setAttribute("href","#"),J.setAttribute("data-i18n","dropdownDarkTheme"),J.setAttribute("data-action","toggle-dark"),U.append(" ",b," ",w," ",S," "," ",N," ",B," ",H," ",G," "," ",W," ",J," "),c.append(" ",l," ",f," ",U," "),a.append(" "," ",i," ",p," ",c," "),t.append(a),t}function Eo(e){let t=e.createFragment(),n=e.createElement("div","lh-warnings lh-warnings--toplevel"),a=e.createElement("p","lh-warnings__msg"),i=e.createElement("ul");return n.append(" ",a," ",i," "),t.append(n),t}function ka(e,t){switch(t){case"3pFilter":return oo(e);case"audit":return ro(e);case"categoryHeader":return so(e);case"chevron":return lo(e);case"clump":return po(e);case"crc":return uo(e);case"crcChain":return co(e);case"elementScreenshot":return mo(e);case"explodeyGauge":return ho(e);case"footer":return go(e);case"fraction":return fo(e);case"gauge":return vo(e);case"heading":return bo(e);case"metric":return yo(e);case"scorescale":return _o(e);case"scoresWrapper":return Co(e);case"snippet":return wo(e);case"snippetContent":return xo(e);case"snippetHeader":return So(e);case"snippetLine":return ko(e);case"styles":return Po(e);case"topbar":return Ao(e);case"warningsToplevel":return Eo(e)}throw new Error("unexpected component: "+t)}var re=class{constructor(t,n){this._document=t,this._lighthouseChannel="unknown",this._componentCache=new Map,this.rootEl=n}createElement(t,n){let a=this._document.createElement(t);if(n)for(let i of n.split(/\s+/))i&&a.classList.add(i);return a}createElementNS(t,n,a){let i=this._document.createElementNS(t,n);if(a)for(let o of a.split(/\s+/))o&&i.classList.add(o);return i}createSVGElement(t,n){return this._document.createElementNS("http://www.w3.org/2000/svg",t,n)}createFragment(){return this._document.createDocumentFragment()}createTextNode(t){return this._document.createTextNode(t)}createChildOf(t,n,a){let i=this.createElement(n,a);return t.append(i),i}createComponent(t){let n=this._componentCache.get(t);if(n){let i=n.cloneNode(!0);return this.findAll("style",i).forEach(o=>o.remove()),i}return n=ka(this,t),this._componentCache.set(t,n),n.cloneNode(!0)}clearComponentCache(){this._componentCache.clear()}convertMarkdownLinkSnippets(t,n={}){let a=this.createElement("span");for(let i of I.splitMarkdownLink(t)){let o=i.text.includes("`")?this.convertMarkdownCodeSnippets(i.text):i.text;if(!i.isLink){a.append(o);continue}let r=new URL(i.linkHref);(["https://developers.google.com","https://web.dev","https://developer.chrome.com"].includes(r.origin)||n.alwaysAppendUtmSource)&&(r.searchParams.set("utm_source","lighthouse"),r.searchParams.set("utm_medium",this._lighthouseChannel));let p=this.createElement("a");p.rel="noopener",p.target="_blank",p.append(o),this.safelySetHref(p,r.href),a.append(p)}return a}safelySetHref(t,n){if(n=n||"",n.startsWith("#")){t.href=n;return}let a=["https:","http:"],i;try{i=new URL(n)}catch{}i&&a.includes(i.protocol)&&(t.href=i.href)}safelySetBlobHref(t,n){if(n.type!=="text/html"&&n.type!=="application/json")throw new Error("Unsupported blob type");let a=URL.createObjectURL(n);t.href=a}convertMarkdownCodeSnippets(t){let n=this.createElement("span");for(let a of I.splitMarkdownCodeSpans(t))if(a.isCode){let i=this.createElement("code");i.textContent=a.text,n.append(i)}else n.append(this._document.createTextNode(a.text));return n}setLighthouseChannel(t){this._lighthouseChannel=t}document(){return this._document}isDevTools(){return!!this._document.querySelector(".lh-devtools")}find(t,n=this.rootEl??this._document){let a=this.maybeFind(t,n);if(a===null)throw new Error(`query ${t} not found`);return a}maybeFind(t,n){return n.querySelector(t)}findAll(t,n){return Array.from(n.querySelectorAll(t))}fireEventOn(t,n=this._document,a){let i=new CustomEvent(t,a?{detail:a}:void 0);n.dispatchEvent(i)}saveFile(t,n){let a=this.createElement("a");a.download=n,this.safelySetBlobHref(a,t),this._document.body.append(a),a.click(),this._document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),500)}};var se=class{constructor(t,n){this.dom=t,this.detailsRenderer=n}get _clumpTitles(){return{warning:v.strings.warningAuditsGroupTitle,manual:v.strings.manualAuditsGroupTitle,passed:v.strings.passedAuditsGroupTitle,notApplicable:v.strings.notApplicableAuditsGroupTitle}}renderAudit(t){let n=v.strings,a=this.dom.createComponent("audit"),i=this.dom.find("div.lh-audit",a);i.id=t.result.id;let o=t.result.scoreDisplayMode;t.result.displayValue&&(this.dom.find(".lh-audit__display-text",i).textContent=t.result.displayValue);let r=this.dom.find(".lh-audit__title",i);r.append(this.dom.convertMarkdownCodeSnippets(t.result.title));let s=this.dom.find(".lh-audit__description",i);s.append(this.dom.convertMarkdownLinkSnippets(t.result.description));for(let m of t.relevantMetrics||[]){let h=this.dom.createChildOf(s,"span","lh-audit__adorn");h.title=`Relevant to ${m.result.title}`,h.textContent=m.acronym||m.id}t.stackPacks&&t.stackPacks.forEach(m=>{let h=this.dom.createElement("img","lh-audit__stackpack__img");h.src=m.iconDataURL,h.alt=m.title;let g=this.dom.convertMarkdownLinkSnippets(m.description,{alwaysAppendUtmSource:!0}),_=this.dom.createElement("div","lh-audit__stackpack");_.append(h,g),this.dom.find(".lh-audit__stackpacks",i).append(_)});let p=this.dom.find("details",i);if(t.result.details){let m=this.detailsRenderer.render(t.result.details);m&&(m.classList.add("lh-details"),p.append(m))}if(this.dom.find(".lh-chevron-container",i).append(this._createChevron()),this._setRatingClass(i,t.result.score,o),t.result.scoreDisplayMode==="error"){i.classList.add("lh-audit--error");let m=this.dom.find(".lh-audit__display-text",i);m.textContent=n.errorLabel,m.classList.add("lh-tooltip-boundary");let h=this.dom.createChildOf(m,"div","lh-tooltip lh-tooltip--error");h.textContent=t.result.errorMessage||n.errorMissingAuditInfo}else if(t.result.explanation){let m=this.dom.createChildOf(r,"div","lh-audit-explanation");m.textContent=t.result.explanation}let c=t.result.warnings;if(!c||c.length===0)return i;let l=this.dom.find("summary",p),d=this.dom.createChildOf(l,"div","lh-warnings");if(this.dom.createChildOf(d,"span").textContent=n.warningHeader,c.length===1)d.append(this.dom.createTextNode(c.join("")));else{let m=this.dom.createChildOf(d,"ul");for(let h of c){let g=this.dom.createChildOf(m,"li");g.textContent=h}}return i}injectFinalScreenshot(t,n,a){let i=n["final-screenshot"];if(!i||i.scoreDisplayMode==="error"||!i.details||i.details.type!=="screenshot")return null;let o=this.dom.createElement("img","lh-final-ss-image"),r=i.details.data;o.src=r,o.alt=i.title;let s=this.dom.find(".lh-category .lh-category-header",t),p=this.dom.createElement("div","lh-category-headercol"),c=this.dom.createElement("div","lh-category-headercol lh-category-headercol--separator"),l=this.dom.createElement("div","lh-category-headercol");p.append(...s.childNodes),p.append(a),l.append(o),s.append(p,c,l),s.classList.add("lh-category-header__finalscreenshot")}_createChevron(){let t=this.dom.createComponent("chevron");return this.dom.find("svg.lh-chevron",t)}_setRatingClass(t,n,a){let i=E.calculateRating(n,a);return t.classList.add(`lh-audit--${a.toLowerCase()}`),a!=="informative"&&t.classList.add(`lh-audit--${i}`),t}renderCategoryHeader(t,n,a){let i=this.dom.createComponent("categoryHeader"),o=this.dom.find(".lh-score__gauge",i),r=this.renderCategoryScore(t,n,a);if(o.append(r),t.description){let s=this.dom.convertMarkdownLinkSnippets(t.description);this.dom.find(".lh-category-header__description",i).append(s)}return i}renderAuditGroup(t){let n=this.dom.createElement("div","lh-audit-group"),a=this.dom.createElement("div","lh-audit-group__header");this.dom.createChildOf(a,"span","lh-audit-group__title").textContent=t.title,n.append(a);let i=null;return t.description&&(i=this.dom.convertMarkdownLinkSnippets(t.description),i.classList.add("lh-audit-group__description","lh-audit-group__footer"),n.append(i)),[n,i]}_renderGroupedAudits(t,n){let a=new Map,i="NotAGroup";a.set(i,[]);for(let r of t){let s=r.group||i,p=a.get(s)||[];p.push(r),a.set(s,p)}let o=[];for(let[r,s]of a){if(r===i){for(let d of s)o.push(this.renderAudit(d));continue}let p=n[r],[c,l]=this.renderAuditGroup(p);for(let d of s)c.insertBefore(this.renderAudit(d),l);c.classList.add(`lh-audit-group--${r}`),o.push(c)}return o}renderUnexpandableClump(t,n){let a=this.dom.createElement("div");return this._renderGroupedAudits(t,n).forEach(o=>a.append(o)),a}renderClump(t,{auditRefsOrEls:n,description:a,openByDefault:i}){let o=this.dom.createComponent("clump"),r=this.dom.find(".lh-clump",o);i&&r.setAttribute("open","");let s=this.dom.find(".lh-audit-group__header",r),p=this._clumpTitles[t];this.dom.find(".lh-audit-group__title",s).textContent=p;let c=this.dom.find(".lh-audit-group__itemcount",r);c.textContent=`(${n.length})`;let l=n.map(m=>m instanceof HTMLElement?m:this.renderAudit(m));r.append(...l);let d=this.dom.find(".lh-audit-group",o);if(a){let m=this.dom.convertMarkdownLinkSnippets(a);m.classList.add("lh-audit-group__description","lh-audit-group__footer"),d.append(m)}return this.dom.find(".lh-clump-toggletext--show",d).textContent=v.strings.show,this.dom.find(".lh-clump-toggletext--hide",d).textContent=v.strings.hide,r.classList.add(`lh-clump--${t.toLowerCase()}`),d}renderCategoryScore(t,n,a){let i;if(a&&E.shouldDisplayAsFraction(a.gatherMode)?i=this.renderCategoryFraction(t):i=this.renderScoreGauge(t,n),a?.omitLabel&&this.dom.find(".lh-gauge__label,.lh-fraction__label",i).remove(),a?.onPageAnchorRendered){let o=this.dom.find("a",i);a.onPageAnchorRendered(o)}return i}renderScoreGauge(t,n){let a=this.dom.createComponent("gauge"),i=this.dom.find("a.lh-gauge__wrapper",a);E.isPluginCategory(t.id)&&i.classList.add("lh-gauge__wrapper--plugin");let o=Number(t.score),r=this.dom.find(".lh-gauge",a),s=this.dom.find("circle.lh-gauge-arc",r);s&&this._setGaugeArc(s,o);let p=Math.round(o*100),c=this.dom.find("div.lh-gauge__percentage",a);return c.textContent=p.toString(),t.score===null&&(c.classList.add("lh-gauge--error"),c.textContent="",c.title=v.strings.errorLabel),t.auditRefs.length===0||this.hasApplicableAudits(t)?i.classList.add(`lh-gauge__wrapper--${E.calculateRating(t.score)}`):(i.classList.add("lh-gauge__wrapper--not-applicable"),c.textContent="-",c.title=v.strings.notApplicableAuditsGroupTitle),this.dom.find(".lh-gauge__label",a).textContent=t.title,a}renderCategoryFraction(t){let n=this.dom.createComponent("fraction"),a=this.dom.find("a.lh-fraction__wrapper",n),{numPassed:i,numPassableAudits:o,totalWeight:r}=E.calculateCategoryFraction(t),s=i/o,p=this.dom.find(".lh-fraction__content",n),c=this.dom.createElement("span");c.textContent=`${i}/${o}`,p.append(c);let l=E.calculateRating(s);return r===0&&(l="null"),a.classList.add(`lh-fraction__wrapper--${l}`),this.dom.find(".lh-fraction__label",n).textContent=t.title,n}hasApplicableAudits(t){return t.auditRefs.some(n=>n.result.scoreDisplayMode!=="notApplicable")}_setGaugeArc(t,n){let a=2*Math.PI*Number(t.getAttribute("r")),i=Number(t.getAttribute("stroke-width")),o=.25*i/a;t.style.transform=`rotate(${-90+o*360}deg)`;let r=n*a-i/2;n===0&&(t.style.opacity="0"),n===1&&(r=a),t.style.strokeDasharray=`${Math.max(r,0)} ${a}`}_auditHasWarning(t){return!!t.result.warnings?.length}_getClumpIdForAuditRef(t){let n=t.result.scoreDisplayMode;return n==="manual"||n==="notApplicable"?n:E.showAsPassed(t.result)?this._auditHasWarning(t)?"warning":"passed":"failed"}render(t,n={},a){let i=this.dom.createElement("div","lh-category");i.id=t.id,i.append(this.renderCategoryHeader(t,n,a));let o=new Map;o.set("failed",[]),o.set("warning",[]),o.set("manual",[]),o.set("passed",[]),o.set("notApplicable",[]);for(let s of t.auditRefs){if(s.group==="hidden")continue;let p=this._getClumpIdForAuditRef(s),c=o.get(p);c.push(s),o.set(p,c)}for(let s of o.values())s.sort((p,c)=>c.weight-p.weight);let r=o.get("failed")?.length;for(let[s,p]of o){if(p.length===0)continue;if(s==="failed"){let m=this.renderUnexpandableClump(p,n);m.classList.add("lh-clump--failed"),i.append(m);continue}let c=s==="manual"?t.manualDescription:void 0,l=s==="warning"||s==="manual"&&r===0,d=this.renderClump(s,{auditRefsOrEls:p,description:c,openByDefault:l});i.append(d)}return i}};var je=class{static initTree(t){let n=0,a=Object.keys(t);return a.length>0&&(n=t[a[0]].request.startTime),{tree:t,startTime:n,transferSize:0}}static createSegment(t,n,a,i,o,r){let s=t[n],p=Object.keys(t),c=p.indexOf(n)===p.length-1,l=!!s.children&&Object.keys(s.children).length>0,d=Array.isArray(o)?o.slice(0):[];return typeof r<"u"&&d.push(!r),{node:s,isLastChild:c,hasChildren:l,startTime:a,transferSize:i+s.request.transferSize,treeMarkers:d}}static createChainNode(t,n,a){let i=t.createComponent("crcChain");t.find(".lh-crc-node",i).setAttribute("title",n.node.request.url);let o=t.find(".lh-crc-node__tree-marker",i);n.treeMarkers.forEach(d=>{let m=d?"lh-tree-marker lh-vert":"lh-tree-marker";o.append(t.createElement("span",m),t.createElement("span","lh-tree-marker"))});let r=n.isLastChild?"lh-tree-marker lh-up-right":"lh-tree-marker lh-vert-right",s=n.hasChildren?"lh-tree-marker lh-horiz-down":"lh-tree-marker lh-right";o.append(t.createElement("span",r),t.createElement("span","lh-tree-marker lh-right"),t.createElement("span",s));let p=n.node.request.url,c=a.renderTextURL(p),l=t.find(".lh-crc-node__tree-value",i);if(l.append(c),!n.hasChildren){let{startTime:d,endTime:m,transferSize:h}=n.node.request,g=t.createElement("span","lh-crc-node__chain-duration");g.textContent=" - "+v.i18n.formatMilliseconds((m-d)*1e3)+", ";let _=t.createElement("span","lh-crc-node__chain-duration");_.textContent=v.i18n.formatBytesToKiB(h,.01),l.append(g,_)}return i}static buildTree(t,n,a,i,o,r){if(i.append(_e.createChainNode(t,a,r)),a.node.children)for(let s of Object.keys(a.node.children)){let p=_e.createSegment(a.node.children,s,a.startTime,a.transferSize,a.treeMarkers,a.isLastChild);_e.buildTree(t,n,p,i,o,r)}}static render(t,n,a){let i=t.createComponent("crc"),o=t.find(".lh-crc",i);t.find(".lh-crc-initial-nav",i).textContent=v.strings.crcInitialNavigation,t.find(".lh-crc__longest_duration_label",i).textContent=v.strings.crcLongestDurationLabel,t.find(".lh-crc__longest_duration",i).textContent=v.i18n.formatMilliseconds(n.longestChain.duration);let r=_e.initTree(n.chains);for(let s of Object.keys(r.tree)){let p=_e.createSegment(r.tree,s,r.startTime,r.transferSize);_e.buildTree(t,i,p,o,n,a)}return t.find(".lh-crc-container",i)}},_e=je;function Lo(e,t){return t.left<=e.width&&0<=t.right&&t.top<=e.height&&0<=t.bottom}function Pa(e,t,n){return e<t?t:e>n?n:e}function Uo(e){return{x:e.left+e.width/2,y:e.top+e.height/2}}var le=class e{static getScreenshotPositions(t,n,a){let i=Uo(t),o=Pa(i.x-n.width/2,0,a.width-n.width),r=Pa(i.y-n.height/2,0,a.height-n.height);return{screenshot:{left:o,top:r},clip:{left:t.left-o,top:t.top-r}}}static renderClipPathInScreenshot(t,n,a,i,o){let r=t.find("clipPath",n),s=`clip-${v.getUniqueSuffix()}`;r.id=s,n.style.clipPath=`url(#${s})`;let p=a.top/o.height,c=p+i.height/o.height,l=a.left/o.width,d=l+i.width/o.width,m=[`0,0             1,0            1,${p}          0,${p}`,`0,${c}     1,${c}    1,1               0,1`,`0,${p}        ${l},${p} ${l},${c} 0,${c}`,`${d},${p} 1,${p}       1,${c}       ${d},${c}`];for(let h of m){let g=t.createElementNS("http://www.w3.org/2000/svg","polygon");g.setAttribute("points",h),r.append(g)}}static installFullPageScreenshot(t,n){t.style.setProperty("--element-screenshot-url",`url('${n.data}')`)}static installOverlayFeature(t){let{dom:n,rootEl:a,overlayContainerEl:i,fullPageScreenshot:o}=t,r="lh-screenshot-overlay--enabled";a.classList.contains(r)||(a.classList.add(r),a.addEventListener("click",s=>{let p=s.target;if(!p)return;let c=p.closest(".lh-node > .lh-element-screenshot");if(!c)return;let l=n.createElement("div","lh-element-screenshot__overlay");i.append(l);let d={width:l.clientWidth*.95,height:l.clientHeight*.8},m={width:Number(c.dataset.rectWidth),height:Number(c.dataset.rectHeight),left:Number(c.dataset.rectLeft),right:Number(c.dataset.rectLeft)+Number(c.dataset.rectWidth),top:Number(c.dataset.rectTop),bottom:Number(c.dataset.rectTop)+Number(c.dataset.rectHeight)},h=e.render(n,o.screenshot,m,d);if(!h){l.remove();return}l.append(h),l.addEventListener("click",()=>l.remove())}))}static _computeZoomFactor(t,n){let i={x:n.width/t.width,y:n.height/t.height},o=.75*Math.min(i.x,i.y);return Math.min(1,o)}static render(t,n,a,i){if(!Lo(n,a))return null;let o=t.createComponent("elementScreenshot"),r=t.find("div.lh-element-screenshot",o);r.dataset.rectWidth=a.width.toString(),r.dataset.rectHeight=a.height.toString(),r.dataset.rectLeft=a.left.toString(),r.dataset.rectTop=a.top.toString();let s=this._computeZoomFactor(a,i),p={width:i.width/s,height:i.height/s};p.width=Math.min(n.width,p.width),p.height=Math.min(n.height,p.height);let c={width:p.width*s,height:p.height*s},l=e.getScreenshotPositions(a,p,{width:n.width,height:n.height}),d=t.find("div.lh-element-screenshot__image",r);d.style.width=c.width+"px",d.style.height=c.height+"px",d.style.backgroundPositionY=-(l.screenshot.top*s)+"px",d.style.backgroundPositionX=-(l.screenshot.left*s)+"px",d.style.backgroundSize=`${n.width*s}px ${n.height*s}px`;let m=t.find("div.lh-element-screenshot__element-marker",r);m.style.width=a.width*s+"px",m.style.height=a.height*s+"px",m.style.left=l.clip.left*s+"px",m.style.top=l.clip.top*s+"px";let h=t.find("div.lh-element-screenshot__mask",r);return h.style.width=c.width+"px",h.style.height=c.height+"px",e.renderClipPathInScreenshot(t,h,l.clip,a,p),r}};var To=["http://","https://","data:"],Io=["bytes","numeric","ms","timespanMs"],Ce=class{constructor(t,n={}){this._dom=t,this._fullPageScreenshot=n.fullPageScreenshot,this._entities=n.entities}render(t){switch(t.type){case"filmstrip":return this._renderFilmstrip(t);case"list":return this._renderList(t);case"table":case"opportunity":return this._renderTable(t);case"criticalrequestchain":return je.render(this._dom,t,this);case"screenshot":case"debugdata":case"treemap-data":return null;default:return this._renderUnknown(t.type,t)}}_renderBytes(t){let n=v.i18n.formatBytesToKiB(t.value,t.granularity||.1),a=this._renderText(n);return a.title=v.i18n.formatBytes(t.value),a}_renderMilliseconds(t){let n;return t.displayUnit==="duration"?n=v.i18n.formatDuration(t.value):n=v.i18n.formatMilliseconds(t.value,t.granularity||10),this._renderText(n)}renderTextURL(t){let n=t,a,i,o;try{let s=I.parseURL(n);a=s.file==="/"?s.origin:s.file,i=s.file==="/"||s.hostname===""?"":`(${s.hostname})`,o=n}catch{a=n}let r=this._dom.createElement("div","lh-text__url");if(r.append(this._renderLink({text:a,url:n})),i){let s=this._renderText(i);s.classList.add("lh-text__url-host"),r.append(s)}return o&&(r.title=n,r.dataset.url=n),r}_renderLink(t){let n=this._dom.createElement("a");if(this._dom.safelySetHref(n,t.url),!n.href){let a=this._renderText(t.text);return a.classList.add("lh-link"),a}return n.rel="noopener",n.target="_blank",n.textContent=t.text,n.classList.add("lh-link"),n}_renderText(t){let n=this._dom.createElement("div","lh-text");return n.textContent=t,n}_renderNumeric(t){let n=v.i18n.formatNumber(t.value,t.granularity||.1),a=this._dom.createElement("div","lh-numeric");return a.textContent=n,a}_renderThumbnail(t){let n=this._dom.createElement("img","lh-thumbnail"),a=t;return n.src=a,n.title=a,n.alt="",n}_renderUnknown(t,n){console.error(`Unknown details type: ${t}`,n);let a=this._dom.createElement("details","lh-unknown");return this._dom.createChildOf(a,"summary").textContent=`We don't know how to render audit details of type \`${t}\`. The Lighthouse version that collected this data is likely newer than the Lighthouse version of the report renderer. Expand for the raw JSON.`,this._dom.createChildOf(a,"pre").textContent=JSON.stringify(n,null,2),a}_renderTableValue(t,n){if(t==null)return null;if(typeof t=="object")switch(t.type){case"code":return this._renderCode(t.value);case"link":return this._renderLink(t);case"node":return this.renderNode(t);case"numeric":return this._renderNumeric(t);case"source-location":return this.renderSourceLocation(t);case"url":return this.renderTextURL(t.value);default:return this._renderUnknown(t.type,t)}switch(n.valueType){case"bytes":{let a=Number(t);return this._renderBytes({value:a,granularity:n.granularity})}case"code":{let a=String(t);return this._renderCode(a)}case"ms":{let a={value:Number(t),granularity:n.granularity,displayUnit:n.displayUnit};return this._renderMilliseconds(a)}case"numeric":{let a=Number(t);return this._renderNumeric({value:a,granularity:n.granularity})}case"text":{let a=String(t);return this._renderText(a)}case"thumbnail":{let a=String(t);return this._renderThumbnail(a)}case"timespanMs":{let a=Number(t);return this._renderMilliseconds({value:a})}case"url":{let a=String(t);return To.some(i=>a.startsWith(i))?this.renderTextURL(a):this._renderCode(a)}default:return this._renderUnknown(n.valueType,t)}}_getDerivedSubItemsHeading(t){return t.subItemsHeading?{key:t.subItemsHeading.key||"",valueType:t.subItemsHeading.valueType||t.valueType,granularity:t.subItemsHeading.granularity||t.granularity,displayUnit:t.subItemsHeading.displayUnit||t.displayUnit,label:""}:null}_renderTableRow(t,n){let a=this._dom.createElement("tr");for(let i of n){if(!i||!i.key){this._dom.createChildOf(a,"td","lh-table-column--empty");continue}let o=t[i.key],r;if(o!=null&&(r=this._renderTableValue(o,i)),r){let s=`lh-table-column--${i.valueType}`;this._dom.createChildOf(a,"td",s).append(r)}else this._dom.createChildOf(a,"td","lh-table-column--empty")}return a}_renderTableRowsFromItem(t,n){let a=this._dom.createFragment();if(a.append(this._renderTableRow(t,n)),!t.subItems)return a;let i=n.map(this._getDerivedSubItemsHeading);if(!i.some(Boolean))return a;for(let o of t.subItems.items){let r=this._renderTableRow(o,i);r.classList.add("lh-sub-item-row"),a.append(r)}return a}_adornEntityGroupRow(t){let n=t.dataset.entity;if(!n)return;let a=this._entities?.find(o=>o.name===n);if(!a)return;let i=this._dom.find("td",t);if(a.category){let o=this._dom.createElement("span");o.classList.add("lh-audit__adorn"),o.textContent=a.category,i.append(" ",o)}if(a.isFirstParty){let o=this._dom.createElement("span");o.classList.add("lh-audit__adorn","lh-audit__adorn1p"),o.textContent=v.strings.firstPartyChipLabel,i.append(" ",o)}if(a.homepage){let o=this._dom.createElement("a");o.href=a.homepage,o.target="_blank",o.title=v.strings.openInANewTabTooltip,o.classList.add("lh-report-icon--external"),i.append(" ",o)}}_renderEntityGroupRow(t,n){let a={...n[0]};a.valueType="text";let i=[a,...n.slice(1)],o=this._dom.createFragment();return o.append(this._renderTableRow(t,i)),this._dom.find("tr",o).classList.add("lh-row--group"),o}_getEntityGroupItems(t){let{items:n,headings:a,sortedBy:i}=t;if(!n.length||t.isEntityGrouped||!n.some(l=>l.entity))return[];let o=new Set(t.skipSumming||[]),r=[];for(let l of a)!l.key||o.has(l.key)||Io.includes(l.valueType)&&r.push(l.key);let s=a[0].key;if(!s)return[];let p=new Map;for(let l of n){let d=typeof l.entity=="string"?l.entity:void 0,m=p.get(d)||{[s]:d||v.strings.unattributable,entity:d};for(let h of r)m[h]=Number(m[h]||0)+Number(l[h]||0);p.set(d,m)}let c=[...p.values()];return i&&c.sort(E.getTableItemSortComparator(i)),c}_renderTable(t){if(!t.items.length)return this._dom.createElement("span");let n=this._dom.createElement("table","lh-table"),a=this._dom.createChildOf(n,"thead"),i=this._dom.createChildOf(a,"tr");for(let s of t.headings){let c=`lh-table-column--${s.valueType||"text"}`,l=this._dom.createElement("div","lh-text");l.textContent=s.label,this._dom.createChildOf(i,"th",c).append(l)}let o=this._getEntityGroupItems(t),r=this._dom.createChildOf(n,"tbody");if(o.length)for(let s of o){let p=typeof s.entity=="string"?s.entity:void 0,c=this._renderEntityGroupRow(s,t.headings);for(let d of t.items.filter(m=>m.entity===p))c.append(this._renderTableRowsFromItem(d,t.headings));let l=this._dom.findAll("tr",c);p&&l.length&&(l.forEach(d=>d.dataset.entity=p),this._adornEntityGroupRow(l[0])),r.append(c)}else{let s=!0;for(let p of t.items){let c=this._renderTableRowsFromItem(p,t.headings),l=this._dom.findAll("tr",c),d=l[0];if(typeof p.entity=="string"&&(d.dataset.entity=p.entity),t.isEntityGrouped&&p.entity)d.classList.add("lh-row--group"),this._adornEntityGroupRow(d);else for(let m of l)m.classList.add(s?"lh-row--even":"lh-row--odd");s=!s,r.append(c)}}return n}_renderList(t){let n=this._dom.createElement("div","lh-list");return t.items.forEach(a=>{let i=this.render(a);i&&n.append(i)}),n}renderNode(t){let n=this._dom.createElement("span","lh-node");if(t.nodeLabel){let r=this._dom.createElement("div");r.textContent=t.nodeLabel,n.append(r)}if(t.snippet){let r=this._dom.createElement("div");r.classList.add("lh-node__snippet"),r.textContent=t.snippet,n.append(r)}if(t.selector&&(n.title=t.selector),t.path&&n.setAttribute("data-path",t.path),t.selector&&n.setAttribute("data-selector",t.selector),t.snippet&&n.setAttribute("data-snippet",t.snippet),!this._fullPageScreenshot)return n;let a=t.lhId&&this._fullPageScreenshot.nodes[t.lhId];if(!a||a.width===0||a.height===0)return n;let i={width:147,height:100},o=le.render(this._dom,this._fullPageScreenshot.screenshot,a,i);return o&&n.prepend(o),n}renderSourceLocation(t){if(!t.url)return null;let n=`${t.url}:${t.line+1}:${t.column}`,a;t.original&&(a=`${t.original.file||"<unmapped>"}:${t.original.line+1}:${t.original.column}`);let i;if(t.urlProvider==="network"&&a)i=this._renderLink({url:t.url,text:a}),i.title=`maps to generated location ${n}`;else if(t.urlProvider==="network"&&!a)i=this.renderTextURL(t.url),this._dom.find(".lh-link",i).textContent+=`:${t.line+1}:${t.column}`;else if(t.urlProvider==="comment"&&a)i=this._renderText(`${a} (from source map)`),i.title=`${n} (from sourceURL)`;else if(t.urlProvider==="comment"&&!a)i=this._renderText(`${n} (from sourceURL)`);else return null;return i.classList.add("lh-source-location"),i.setAttribute("data-source-url",t.url),i.setAttribute("data-source-line",String(t.line)),i.setAttribute("data-source-column",String(t.column)),i}_renderFilmstrip(t){let n=this._dom.createElement("div","lh-filmstrip");for(let a of t.items){let i=this._dom.createChildOf(n,"div","lh-filmstrip__frame"),o=this._dom.createChildOf(i,"img","lh-filmstrip__thumbnail");o.src=a.data,o.alt="Screenshot"}return n}_renderCode(t){let n=this._dom.createElement("pre","lh-code");return n.textContent=t,n}};function Aa(e){let t=e.createComponent("explodeyGauge");return e.find(".lh-exp-gauge-component",t)}function Ea(e,t,n){let a=e.find("div.lh-exp-gauge__wrapper",t);a.className="",a.classList.add("lh-exp-gauge__wrapper",`lh-exp-gauge__wrapper--${E.calculateRating(n.score)}`),No(e,a,n)}function Ro(e,t,n){n=n||e/32;let a=e/n,i=.5*n,o=a+i+n,r=2*Math.PI*a,s=Math.acos(1-.5*Math.pow(.5*n/a,2))*a,p=2*Math.PI*o,c=Math.acos(1-.5*Math.pow(.5*n/o,2))*o;return{radiusInner:a,radiusOuter:o,circumferenceInner:r,circumferenceOuter:p,getArcLength:()=>Math.max(0,Number(t*r)),getMetricArcLength:(l,d=!1)=>{let m=d?0:2*c;return Math.max(0,Number(l*p-i-m))},endDiffInner:s,endDiffOuter:c,strokeWidth:n,strokeGap:i}}function No(e,t,n){let o=Number(n.score),{radiusInner:r,radiusOuter:s,circumferenceInner:p,circumferenceOuter:c,getArcLength:l,getMetricArcLength:d,endDiffInner:m,endDiffOuter:h,strokeWidth:g,strokeGap:_}=Ro(128,o),f=e.find("svg.lh-exp-gauge",t);e.find(".lh-exp-gauge__label",f).textContent=n.title,f.setAttribute("viewBox",[-64,-64/2,128,128/2].join(" ")),f.style.setProperty("--stroke-width",`${g}px`),f.style.setProperty("--circle-meas",(2*Math.PI).toFixed(4));let y=e.find("g.lh-exp-gauge__outer",t),P=e.find("g.lh-exp-gauge__inner",t),A=e.find("circle.lh-cover",y),U=e.find("circle.lh-exp-gauge__arc",P),b=e.find("text.lh-exp-gauge__percentage",P);y.style.setProperty("--scale-initial",String(r/s)),y.style.setProperty("--radius",`${s}px`),A.style.setProperty("--radius",`${.5*(r+s)}px`),A.setAttribute("stroke-width",String(_)),f.style.setProperty("--radius",`${r}px`),U.setAttribute("stroke-dasharray",`${l()} ${(p-l()).toFixed(4)}`),U.setAttribute("stroke-dashoffset",String(.25*p-m)),b.textContent=Math.round(o*100).toString();let w=s+g,S=s-g,N=n.auditRefs.filter(L=>L.group==="metrics"&&L.weight),B=N.reduce((L,D)=>L+=D.weight,0),H=.25*c-h-.5*_,G=-.5*Math.PI;y.querySelectorAll(".metric").forEach(L=>{N.map(q=>`metric--${q.id}`).find(q=>L.classList.contains(q))||L.remove()}),N.forEach((L,D)=>{let z=L.acronym??L.id,q=!y.querySelector(`.metric--${z}`),V=e.maybeFind(`g.metric--${z}`,y)||e.createSVGElement("g"),me=e.maybeFind(`.metric--${z} circle.lh-exp-gauge--faded`,y)||e.createSVGElement("circle"),Se=e.maybeFind(`.metric--${z} circle.lh-exp-gauge--miniarc`,y)||e.createSVGElement("circle"),de=e.maybeFind(`.metric--${z} circle.lh-exp-gauge-hovertarget`,y)||e.createSVGElement("circle"),K=e.maybeFind(`.metric--${z} text.metric__label`,y)||e.createSVGElement("text"),Y=e.maybeFind(`.metric--${z} text.metric__value`,y)||e.createSVGElement("text");V.classList.add("metric",`metric--${z}`),me.classList.add("lh-exp-gauge__arc","lh-exp-gauge__arc--metric","lh-exp-gauge--faded"),Se.classList.add("lh-exp-gauge__arc","lh-exp-gauge__arc--metric","lh-exp-gauge--miniarc"),de.classList.add("lh-exp-gauge__arc","lh-exp-gauge__arc--metric","lh-exp-gauge-hovertarget");let he=L.weight/B,Zt=d(he),Kt=L.result.score?L.result.score*he:0,Xt=d(Kt),ei=he*c,Yt=d(he,!0),Qt=E.calculateRating(L.result.score,L.result.scoreDisplayMode);V.style.setProperty("--metric-rating",Qt),V.style.setProperty("--metric-color",`var(--color-${Qt})`),V.style.setProperty("--metric-offset",`${H}`),V.style.setProperty("--i",D.toString()),me.setAttribute("stroke-dasharray",`${Zt} ${c-Zt}`),Se.style.setProperty("--metric-array",`${Xt} ${c-Xt}`),de.setAttribute("stroke-dasharray",`${Yt} ${c-Yt-h}`),K.classList.add("metric__label"),Y.classList.add("metric__value"),K.textContent=z,Y.textContent=`+${Math.round(Kt*100)}`;let en=G+he*Math.PI,ke=Math.cos(en),Pe=Math.sin(en);switch(!0){case ke>0:Y.setAttribute("text-anchor","end");break;case ke<0:K.setAttribute("text-anchor","end");break;case ke===0:K.setAttribute("text-anchor","middle"),Y.setAttribute("text-anchor","middle");break}switch(!0){case Pe>0:K.setAttribute("dominant-baseline","hanging");break;case Pe<0:Y.setAttribute("dominant-baseline","hanging");break;case Pe===0:K.setAttribute("dominant-baseline","middle"),Y.setAttribute("dominant-baseline","middle");break}K.setAttribute("x",(w*ke).toFixed(2)),K.setAttribute("y",(w*Pe).toFixed(2)),Y.setAttribute("x",(S*ke).toFixed(2)),Y.setAttribute("y",(S*Pe).toFixed(2)),q&&(V.appendChild(me),V.appendChild(Se),V.appendChild(de),V.appendChild(K),V.appendChild(Y),y.appendChild(V)),H-=ei,G+=he*2*Math.PI});let W=y.querySelector(".lh-exp-gauge-underhovertarget")||e.createSVGElement("circle");W.classList.add("lh-exp-gauge__arc","lh-exp-gauge__arc--metric","lh-exp-gauge-hovertarget","lh-exp-gauge-underhovertarget");let J=d(1,!0);if(W.setAttribute("stroke-dasharray",`${J} ${c-J-h}`),W.isConnected||y.prepend(W),f.dataset.listenersSetup)return;f.dataset.listenersSetup=!0,xe(f),f.addEventListener("pointerover",L=>{if(L.target===f&&f.classList.contains("state--expanded")){f.classList.remove("state--expanded"),f.classList.contains("state--highlight")&&(f.classList.remove("state--highlight"),e.find(".metric--highlight",f).classList.remove("metric--highlight"));return}if(!(L.target instanceof Element))return;let D=L.target.parentNode;if(D instanceof SVGElement){if(D&&D===P){f.classList.contains("state--expanded")?f.classList.contains("state--highlight")&&(f.classList.remove("state--highlight"),e.find(".metric--highlight",f).classList.remove("metric--highlight")):f.classList.add("state--expanded");return}if(D&&D.classList&&D.classList.contains("metric")){let z=D.style.getPropertyValue("--metric-rating");if(t.style.setProperty("--color-highlight",`var(--color-${z}-secondary)`),!f.classList.contains("state--highlight"))f.classList.add("state--highlight"),D.classList.add("metric--highlight");else{let q=e.find(".metric--highlight",f);D!==q&&(q.classList.remove("metric--highlight"),D.classList.add("metric--highlight"))}}}}),f.addEventListener("mouseleave",()=>{f.classList.remove("state--highlight"),f.querySelector(".metric--highlight")?.classList.remove("metric--highlight")});async function xe(L){if(await new Promise(K=>setTimeout(K,1e3)),L.classList.contains("state--expanded"))return;let D=e.find(".lh-exp-gauge__inner",L),z=`uniq-${Math.random()}`;D.setAttribute("id",z);let q=e.createSVGElement("use");q.setAttribute("href",`#${z}`),L.appendChild(q);let V=2.5;L.style.setProperty("--peek-dur",`${V}s`),L.classList.add("state--peek","state--expanded");let me=()=>{L.classList.remove("state--peek","state--expanded"),q.remove()},Se=setTimeout(()=>{L.removeEventListener("mouseenter",de),me()},V*1e3*1.5);function de(){clearTimeout(Se),me()}L.addEventListener("mouseenter",de,{once:!0})}}var dt=class extends se{_renderMetric(t){let n=this.dom.createComponent("metric"),a=this.dom.find(".lh-metric",n);a.id=t.result.id;let i=E.calculateRating(t.result.score,t.result.scoreDisplayMode);a.classList.add(`lh-metric--${i}`);let o=this.dom.find(".lh-metric__title",n);o.textContent=t.result.title;let r=this.dom.find(".lh-metric__value",n);r.textContent=t.result.displayValue||"";let s=this.dom.find(".lh-metric__description",n);if(s.append(this.dom.convertMarkdownLinkSnippets(t.result.description)),t.result.scoreDisplayMode==="error"){s.textContent="",r.textContent="Error!";let p=this.dom.createChildOf(s,"span");p.textContent=t.result.errorMessage||"Report error: no metric information"}else t.result.scoreDisplayMode==="notApplicable"&&(r.textContent="--");return a}_getScoringCalculatorHref(t){let n=t.filter(d=>d.group==="metrics"),a=t.find(d=>d.id==="interactive"),i=t.find(d=>d.id==="first-cpu-idle"),o=t.find(d=>d.id==="first-meaningful-paint");a&&n.push(a),i&&n.push(i),o&&typeof o.result.score=="number"&&n.push(o);let r=d=>Math.round(d*100)/100,p=[...n.map(d=>{let m;return typeof d.result.numericValue=="number"?(m=d.id==="cumulative-layout-shift"?r(d.result.numericValue):Math.round(d.result.numericValue),m=m.toString()):m="null",[d.acronym||d.id,m]})];v.reportJson&&(p.push(["device",v.reportJson.configSettings.formFactor]),p.push(["version",v.reportJson.lighthouseVersion]));let c=new URLSearchParams(p),l=new URL("https://googlechrome.github.io/lighthouse/scorecalc/");return l.hash=c.toString(),l.href}overallImpact(t,n){if(!t.result.metricSavings)return{overallImpact:0,overallLinearImpact:0};let a=0,i=0;for(let[o,r]of Object.entries(t.result.metricSavings)){if(r===void 0)continue;let s=n.find(h=>h.acronym===o);if(!s||s.result.score===null)continue;let p=s.result.numericValue;if(!p)continue;let c=r/p*s.weight;i+=c;let l=s.result.scoringOptions;if(!l)continue;let m=(I.computeLogNormalScore(l,p-r)-s.result.score)*s.weight;a+=m}return{overallImpact:a,overallLinearImpact:i}}render(t,n,a){let i=v.strings,o=this.dom.createElement("div","lh-category");o.id=t.id,o.append(this.renderCategoryHeader(t,n,a));let r=t.auditRefs.filter(b=>b.group==="metrics");if(r.length){let[b,w]=this.renderAuditGroup(n.metrics),S=this.dom.createElement("input","lh-metrics-toggle__input"),N=`lh-metrics-toggle${v.getUniqueSuffix()}`;S.setAttribute("aria-label","Toggle the display of metric descriptions"),S.type="checkbox",S.id=N,b.prepend(S);let B=this.dom.find(".lh-audit-group__header",b),H=this.dom.createChildOf(B,"label","lh-metrics-toggle__label");H.htmlFor=N;let G=this.dom.createChildOf(H,"span","lh-metrics-toggle__labeltext--show"),W=this.dom.createChildOf(H,"span","lh-metrics-toggle__labeltext--hide");G.textContent=v.strings.expandView,W.textContent=v.strings.collapseView;let J=this.dom.createElement("div","lh-metrics-container");if(b.insertBefore(J,w),r.forEach(xe=>{J.append(this._renderMetric(xe))}),o.querySelector(".lh-gauge__wrapper")){let xe=this.dom.find(".lh-category-header__description",o),L=this.dom.createChildOf(xe,"div","lh-metrics__disclaimer"),D=this.dom.convertMarkdownLinkSnippets(i.varianceDisclaimer);L.append(D);let z=this.dom.createChildOf(L,"a","lh-calclink");z.target="_blank",z.textContent=i.calculatorLink,this.dom.safelySetHref(z,this._getScoringCalculatorHref(t.auditRefs))}b.classList.add("lh-audit-group--metrics"),o.append(b)}let s=this.dom.createChildOf(o,"div","lh-filmstrip-container"),c=t.auditRefs.find(b=>b.id==="screenshot-thumbnails")?.result;if(c?.details){s.id=c.id;let b=this.detailsRenderer.render(c.details);b&&s.append(b)}let l=t.auditRefs.filter(b=>b.group==="diagnostics").map(b=>{let{overallImpact:w,overallLinearImpact:S}=this.overallImpact(b,r),N=b.result.guidanceLevel||1,B=this.renderAudit(b);return{auditRef:b,auditEl:B,overallImpact:w,overallLinearImpact:S,guidanceLevel:N}}),d=l.filter(b=>!E.showAsPassed(b.auditRef.result)),m=l.filter(b=>E.showAsPassed(b.auditRef.result)),[h,g]=this.renderAuditGroup(n.diagnostics);h.classList.add("lh-audit-group--diagnostics");function _(b){for(let w of l)if(b==="All")w.auditEl.hidden=!1;else{let S=w.auditRef.result.metricSavings?.[b]===void 0;w.auditEl.hidden=S}d.sort((w,S)=>{let N=w.auditRef.result.score||0,B=S.auditRef.result.score||0;if(N!==B)return N-B;if(b!=="All"){let H=w.auditRef.result.metricSavings?.[b]??-1,G=S.auditRef.result.metricSavings?.[b]??-1;if(H!==G)return G-H}return w.overallImpact!==S.overallImpact?S.overallImpact*S.guidanceLevel-w.overallImpact*w.guidanceLevel:w.overallImpact===0&&S.overallImpact===0&&w.overallLinearImpact!==S.overallLinearImpact?S.overallLinearImpact*S.guidanceLevel-w.overallLinearImpact*w.guidanceLevel:S.guidanceLevel-w.guidanceLevel});for(let w of d)h.insertBefore(w.auditEl,g)}let f=new Set;for(let b of d){let w=b.auditRef.result.metricSavings||{};for(let[S,N]of Object.entries(w))typeof N=="number"&&f.add(S)}let y=r.filter(b=>b.acronym&&f.has(b.acronym));if(y.length&&this.renderMetricAuditFilter(y,o,_),_("All"),d.length&&o.append(h),!m.length)return o;let P={auditRefsOrEls:m.map(b=>b.auditEl),groupDefinitions:n},A=this.renderClump("passed",P);if(o.append(A),(!a||a?.gatherMode==="navigation")&&t.score!==null){let b=Aa(this.dom);Ea(this.dom,b,t),this.dom.find(".lh-score__gauge",o).replaceWith(b)}return o}renderMetricAuditFilter(t,n,a){let i=this.dom.createElement("div","lh-metricfilter"),o=this.dom.createChildOf(i,"span","lh-metricfilter__text");o.textContent=v.strings.showRelevantAudits;let r=[{acronym:"All",id:"All"},...t],s=v.getUniqueSuffix();for(let p of r){let c=`metric-${p.acronym}-${s}`,l=this.dom.createChildOf(i,"input","lh-metricfilter__radio");l.type="radio",l.name=`metricsfilter-${s}`,l.id=c;let d=this.dom.createChildOf(i,"label","lh-metricfilter__label");d.htmlFor=c,d.title="result"in p?p.result.title:"",d.textContent=p.acronym||p.id,p.acronym==="All"&&(l.checked=!0,d.classList.add("lh-metricfilter__label--active")),n.append(i),l.addEventListener("input",m=>{for(let g of n.querySelectorAll("label.lh-metricfilter__label"))g.classList.toggle("lh-metricfilter__label--active",g.htmlFor===c);n.classList.toggle("lh-category--filtered",p.acronym!=="All"),a(p.acronym||"All");let h=n.querySelectorAll("div.lh-audit-group, details.lh-audit-group");for(let g of h){g.hidden=!1;let _=Array.from(g.querySelectorAll("div.lh-audit")),f=!!_.length&&_.every(y=>y.hidden);g.hidden=f}})}}};var ht=class{constructor(t){this._dom=t,this._opts={}}renderReport(t,n,a){if(!this._dom.rootEl&&n){console.warn("Please adopt the new report API in renderer/api.js.");let o=n.closest(".lh-root");o?this._dom.rootEl=o:(n.classList.add("lh-root","lh-vars"),this._dom.rootEl=n)}else this._dom.rootEl&&n&&(this._dom.rootEl=n);a&&(this._opts=a),this._dom.setLighthouseChannel(t.configSettings.channel||"unknown");let i=E.prepareReportResult(t);return this._dom.rootEl.textContent="",this._dom.rootEl.append(this._renderReport(i)),this._opts.occupyEntireViewport&&this._dom.rootEl.classList.add("lh-max-viewport"),this._dom.rootEl}_renderReportTopbar(t){let n=this._dom.createComponent("topbar"),a=this._dom.find("a.lh-topbar__url",n);return a.textContent=t.finalDisplayedUrl,a.title=t.finalDisplayedUrl,this._dom.safelySetHref(a,t.finalDisplayedUrl),n}_renderReportHeader(){let t=this._dom.createComponent("heading"),n=this._dom.createComponent("scoresWrapper");return this._dom.find(".lh-scores-wrapper-placeholder",t).replaceWith(n),t}_renderReportFooter(t){let n=this._dom.createComponent("footer");return this._renderMetaBlock(t,n),this._dom.find(".lh-footer__version_issue",n).textContent=v.strings.footerIssue,this._dom.find(".lh-footer__version",n).textContent=t.lighthouseVersion,n}_renderMetaBlock(t,n){let a=E.getEmulationDescriptions(t.configSettings||{}),i=t.userAgent.match(/(\w*Chrome\/[\d.]+)/),o=Array.isArray(i)?i[1].replace("/"," ").replace("Chrome","Chromium"):"Chromium",r=t.configSettings.channel,s=t.environment.benchmarkIndex.toFixed(0),p=t.environment.credits?.["axe-core"],c=[`${v.strings.runtimeSettingsBenchmark}: ${s}`,`${v.strings.runtimeSettingsCPUThrottling}: ${a.cpuThrottling}`];a.screenEmulation&&c.push(`${v.strings.runtimeSettingsScreenEmulation}: ${a.screenEmulation}`),p&&c.push(`${v.strings.runtimeSettingsAxeVersion}: ${p}`);let l=v.strings.runtimeAnalysisWindow;t.gatherMode==="timespan"?l=v.strings.runtimeAnalysisWindowTimespan:t.gatherMode==="snapshot"&&(l=v.strings.runtimeAnalysisWindowSnapshot);let d=[["date",`Captured at ${v.i18n.formatDateTime(t.fetchTime)}`],["devices",`${a.deviceEmulation} with Lighthouse ${t.lighthouseVersion}`,c.join(`
`)],["samples-one",v.strings.runtimeSingleLoad,v.strings.runtimeSingleLoadTooltip],["stopwatch",l],["networkspeed",`${a.summary}`,`${v.strings.runtimeSettingsNetworkThrottling}: ${a.networkThrottling}`],["chrome",`Using ${o}`+(r?` with ${r}`:""),`${v.strings.runtimeSettingsUANetwork}: "${t.environment.networkUserAgent}"`]],m=this._dom.find(".lh-meta__items",n);for(let[h,g,_]of d){let f=this._dom.createChildOf(m,"li","lh-meta__item");if(f.textContent=g,_){f.classList.add("lh-tooltip-boundary");let y=this._dom.createChildOf(f,"div","lh-tooltip");y.textContent=_}f.classList.add("lh-report-icon",`lh-report-icon--${h}`)}}_renderReportWarnings(t){if(!t.runWarnings||t.runWarnings.length===0)return this._dom.createElement("div");let n=this._dom.createComponent("warningsToplevel"),a=this._dom.find(".lh-warnings__msg",n);a.textContent=v.strings.toplevelWarningsMessage;let i=[];for(let o of t.runWarnings){let r=this._dom.createElement("li");r.append(this._dom.convertMarkdownLinkSnippets(o)),i.push(r)}return this._dom.find("ul",n).append(...i),n}_renderScoreGauges(t,n,a){let i=[],o=[];for(let r of Object.values(t.categories)){let p=(a[r.id]||n).renderCategoryScore(r,t.categoryGroups||{},{gatherMode:t.gatherMode}),c=this._dom.find("a.lh-gauge__wrapper, a.lh-fraction__wrapper",p);c&&(this._dom.safelySetHref(c,`#${r.id}`),c.addEventListener("click",l=>{if(!c.matches('[href^="#"]'))return;let d=c.getAttribute("href"),m=this._dom.rootEl;if(!d||!m)return;let h=this._dom.find(d,m);l.preventDefault(),h.scrollIntoView()}),this._opts.onPageAnchorRendered?.(c)),E.isPluginCategory(r.id)?o.push(p):i.push(p)}return[...i,...o]}_renderReport(t){v.apply({providedStrings:t.i18n.rendererFormattedStrings,i18n:new ce(t.configSettings.locale),reportJson:t});let n=new Ce(this._dom,{fullPageScreenshot:t.fullPageScreenshot??void 0,entities:t.entities}),a=new se(this._dom,n),i={performance:new dt(this._dom,n)},o=this._dom.createElement("div");o.append(this._renderReportHeader());let r=this._dom.createElement("div","lh-container"),s=this._dom.createElement("div","lh-report");s.append(this._renderReportWarnings(t));let p;Object.keys(t.categories).length===1?o.classList.add("lh-header--solo-category"):p=this._dom.createElement("div","lh-scores-header");let l=this._dom.createElement("div");if(l.classList.add("lh-scorescale-wrap"),l.append(this._dom.createComponent("scorescale")),p){let g=this._dom.find(".lh-scores-container",o);p.append(...this._renderScoreGauges(t,a,i)),g.append(p,l);let _=this._dom.createElement("div","lh-sticky-header");_.append(...this._renderScoreGauges(t,a,i)),r.append(_)}let d=this._dom.createElement("div","lh-categories");s.append(d);let m={gatherMode:t.gatherMode};for(let g of Object.values(t.categories)){let _=i[g.id]||a;_.dom.createChildOf(d,"div","lh-category-wrapper").append(_.render(g,t.categoryGroups,m))}a.injectFinalScreenshot(d,t.audits,l);let h=this._dom.createFragment();return this._opts.omitGlobalStyles||h.append(this._dom.createComponent("styles")),this._opts.omitTopbar||h.append(this._renderReportTopbar(t)),h.append(r),s.append(this._renderReportFooter(t)),r.append(o,s),t.fullPageScreenshot&&le.installFullPageScreenshot(this._dom.rootEl,t.fullPageScreenshot.screenshot),h}};function we(e,t){let n=e.rootEl;typeof t>"u"?n.classList.toggle("lh-dark"):n.classList.toggle("lh-dark",t)}var Do=typeof btoa<"u"?btoa:e=>Buffer.from(e).toString("base64"),zo=typeof atob<"u"?atob:e=>Buffer.from(e,"base64").toString();async function jo(e,t){let n=new TextEncoder().encode(e);if(t.gzip)if(typeof CompressionStream<"u"){let o=new CompressionStream("gzip"),r=o.writable.getWriter();r.write(n),r.close();let s=await new Response(o.readable).arrayBuffer();n=new Uint8Array(s)}else n=window.pako.gzip(e);let a="",i=5e3;for(let o=0;o<n.length;o+=i)a+=String.fromCharCode(...n.subarray(o,o+i));return Do(a)}function Mo(e,t){let n=zo(e),a=Uint8Array.from(n,i=>i.charCodeAt(0));return t.gzip?window.pako.ungzip(a,{to:"string"}):new TextDecoder().decode(a)}var La={toBase64:jo,fromBase64:Mo};function Vt(){let e=window.location.host.endsWith(".vercel.app"),t=new URLSearchParams(window.location.search).has("dev");return e?`https://${window.location.host}/gh-pages`:t?"http://localhost:7333":"https://googlechrome.github.io/lighthouse"}function $t(e){let t=e.generatedTime,n=e.fetchTime||t;return`${e.lighthouseVersion}-${e.finalDisplayedUrl}-${n}`}function Ho(e,t,n){let a=new URL(t).origin;window.addEventListener("message",function o(r){r.origin===a&&i&&r.data.opened&&(i.postMessage(e,a),window.removeEventListener("message",o))});let i=window.open(t,n)}async function Ua(e,t,n){let a=new URL(t),i=!!window.CompressionStream;a.hash=await La.toBase64(JSON.stringify(e),{gzip:i}),i&&a.searchParams.set("gzip","1"),window.open(a.toString(),n)}async function Ta(e){let t="viewer-"+$t(e),n=Vt()+"/viewer/";await Ua({lhr:e},n,t)}async function Ia(e){let t="viewer-"+$t(e),n=Vt()+"/viewer/";Ho({lhr:e},n,t)}function Ra(e){if(!e.audits["script-treemap-data"].details)throw new Error("no script treemap data found");let n={lhr:{mainDocumentUrl:e.mainDocumentUrl,finalUrl:e.finalUrl,finalDisplayedUrl:e.finalDisplayedUrl,audits:{"script-treemap-data":e.audits["script-treemap-data"]},configSettings:{locale:e.configSettings.locale}}},a=Vt()+"/treemap/",i="treemap-"+$t(e);Ua(n,a,i)}var gt=class{constructor(t){this._dom=t,this._toggleEl,this._menuEl,this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onToggleClick=this.onToggleClick.bind(this),this.onToggleKeydown=this.onToggleKeydown.bind(this),this.onMenuFocusOut=this.onMenuFocusOut.bind(this),this.onMenuKeydown=this.onMenuKeydown.bind(this),this._getNextMenuItem=this._getNextMenuItem.bind(this),this._getNextSelectableNode=this._getNextSelectableNode.bind(this),this._getPreviousMenuItem=this._getPreviousMenuItem.bind(this)}setup(t){this._toggleEl=this._dom.find(".lh-topbar button.lh-tools__button",this._dom.rootEl),this._toggleEl.addEventListener("click",this.onToggleClick),this._toggleEl.addEventListener("keydown",this.onToggleKeydown),this._menuEl=this._dom.find(".lh-topbar div.lh-tools__dropdown",this._dom.rootEl),this._menuEl.addEventListener("keydown",this.onMenuKeydown),this._menuEl.addEventListener("click",t)}close(){this._toggleEl.classList.remove("lh-active"),this._toggleEl.setAttribute("aria-expanded","false"),this._menuEl.contains(this._dom.document().activeElement)&&this._toggleEl.focus(),this._menuEl.removeEventListener("focusout",this.onMenuFocusOut),this._dom.document().removeEventListener("keydown",this.onDocumentKeyDown)}open(t){this._toggleEl.classList.contains("lh-active")?t.focus():this._menuEl.addEventListener("transitionend",()=>{t.focus()},{once:!0}),this._toggleEl.classList.add("lh-active"),this._toggleEl.setAttribute("aria-expanded","true"),this._menuEl.addEventListener("focusout",this.onMenuFocusOut),this._dom.document().addEventListener("keydown",this.onDocumentKeyDown)}onToggleClick(t){t.preventDefault(),t.stopImmediatePropagation(),this._toggleEl.classList.contains("lh-active")?this.close():this.open(this._getNextMenuItem())}onToggleKeydown(t){switch(t.code){case"ArrowUp":t.preventDefault(),this.open(this._getPreviousMenuItem());break;case"ArrowDown":case"Enter":case" ":t.preventDefault(),this.open(this._getNextMenuItem());break;default:}}onMenuKeydown(t){let n=t.target;switch(t.code){case"ArrowUp":t.preventDefault(),this._getPreviousMenuItem(n).focus();break;case"ArrowDown":t.preventDefault(),this._getNextMenuItem(n).focus();break;case"Home":t.preventDefault(),this._getNextMenuItem().focus();break;case"End":t.preventDefault(),this._getPreviousMenuItem().focus();break;default:}}onDocumentKeyDown(t){t.keyCode===27&&this.close()}onMenuFocusOut(t){let n=t.relatedTarget;this._menuEl.contains(n)||this.close()}_getNextSelectableNode(t,n){let a=t.filter(o=>o instanceof HTMLElement).filter(o=>!(o.hasAttribute("disabled")||window.getComputedStyle(o).display==="none")),i=n?a.indexOf(n)+1:0;return i>=a.length&&(i=0),a[i]}_getNextMenuItem(t){let n=Array.from(this._menuEl.childNodes);return this._getNextSelectableNode(n,t)}_getPreviousMenuItem(t){let n=Array.from(this._menuEl.childNodes).reverse();return this._getNextSelectableNode(n,t)}};var ft=class{constructor(t,n){this.lhr,this._reportUIFeatures=t,this._dom=n,this._dropDownMenu=new gt(this._dom),this._copyAttempt=!1,this.topbarEl,this.categoriesEl,this.stickyHeaderEl,this.highlightEl,this.onDropDownMenuClick=this.onDropDownMenuClick.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onCopy=this.onCopy.bind(this),this.collapseAllDetails=this.collapseAllDetails.bind(this)}enable(t){this.lhr=t,this._dom.rootEl.addEventListener("keyup",this.onKeyUp),this._dom.document().addEventListener("copy",this.onCopy),this._dropDownMenu.setup(this.onDropDownMenuClick),this._setUpCollapseDetailsAfterPrinting(),this._dom.find(".lh-topbar__logo",this._dom.rootEl).addEventListener("click",()=>we(this._dom)),this._setupStickyHeader()}onDropDownMenuClick(t){t.preventDefault();let n=t.target;if(!(!n||!n.hasAttribute("data-action"))){switch(n.getAttribute("data-action")){case"copy":this.onCopyButtonClick();break;case"print-summary":this.collapseAllDetails(),this._print();break;case"print-expanded":this.expandAllDetails(),this._print();break;case"save-json":{let a=JSON.stringify(this.lhr,null,2);this._reportUIFeatures._saveFile(new Blob([a],{type:"application/json"}));break}case"save-html":{let a=this._reportUIFeatures.getReportHtml();try{this._reportUIFeatures._saveFile(new Blob([a],{type:"text/html"}))}catch(i){this._dom.fireEventOn("lh-log",this._dom.document(),{cmd:"error",msg:"Could not export as HTML. "+i.message})}break}case"open-viewer":{this._dom.isDevTools()?Ta(this.lhr):Ia(this.lhr);break}case"save-gist":{this._reportUIFeatures.saveAsGist();break}case"toggle-dark":{we(this._dom);break}case"view-unthrottled-trace":this._reportUIFeatures._opts.onViewTrace?.()}this._dropDownMenu.close()}}onCopy(t){this._copyAttempt&&t.clipboardData&&(t.preventDefault(),t.clipboardData.setData("text/plain",JSON.stringify(this.lhr,null,2)),this._dom.fireEventOn("lh-log",this._dom.document(),{cmd:"log",msg:"Report JSON copied to clipboard"})),this._copyAttempt=!1}onCopyButtonClick(){this._dom.fireEventOn("lh-analytics",this._dom.document(),{cmd:"send",fields:{hitType:"event",eventCategory:"report",eventAction:"copy"}});try{this._dom.document().queryCommandSupported("copy")&&(this._copyAttempt=!0,this._dom.document().execCommand("copy")||(this._copyAttempt=!1,this._dom.fireEventOn("lh-log",this._dom.document(),{cmd:"warn",msg:"Your browser does not support copy to clipboard."})))}catch(t){this._copyAttempt=!1,this._dom.fireEventOn("lh-log",this._dom.document(),{cmd:"log",msg:t.message})}}onKeyUp(t){(t.ctrlKey||t.metaKey)&&t.keyCode===80&&this._dropDownMenu.close()}expandAllDetails(){this._dom.findAll(".lh-categories details",this._dom.rootEl).map(n=>n.open=!0)}collapseAllDetails(){this._dom.findAll(".lh-categories details",this._dom.rootEl).map(n=>n.open=!1)}_print(){this._reportUIFeatures._opts.onPrintOverride?this._reportUIFeatures._opts.onPrintOverride(this._dom.rootEl):self.print()}resetUIState(){this._dropDownMenu.close()}_getScrollParent(t){let{overflowY:n}=window.getComputedStyle(t);return n!=="visible"&&n!=="hidden"?t:t.parentElement?this._getScrollParent(t.parentElement):document}_setUpCollapseDetailsAfterPrinting(){"onbeforeprint"in self?self.addEventListener("afterprint",this.collapseAllDetails):self.matchMedia("print").addListener(n=>{n.matches?this.expandAllDetails():this.collapseAllDetails()})}_setupStickyHeader(){this.topbarEl=this._dom.find("div.lh-topbar",this._dom.rootEl),this.categoriesEl=this._dom.find("div.lh-categories",this._dom.rootEl),window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>{try{this.stickyHeaderEl=this._dom.find("div.lh-sticky-header",this._dom.rootEl)}catch{return}this.highlightEl=this._dom.createChildOf(this.stickyHeaderEl,"div","lh-highlighter");let t=this._getScrollParent(this._dom.find(".lh-container",this._dom.rootEl));t.addEventListener("scroll",()=>this._updateStickyHeader());let n=t instanceof window.Document?document.documentElement:t;new window.ResizeObserver(()=>this._updateStickyHeader()).observe(n)}))}_updateStickyHeader(){if(!this.stickyHeaderEl)return;let t=this.topbarEl.getBoundingClientRect().bottom,n=this.categoriesEl.getBoundingClientRect().top,a=t>=n,o=Array.from(this._dom.rootEl.querySelectorAll(".lh-category")).filter(d=>d.getBoundingClientRect().top-window.innerHeight/2<0),r=o.length>0?o.length-1:0,s=this.stickyHeaderEl.querySelectorAll(".lh-gauge__wrapper, .lh-fraction__wrapper"),p=s[r],c=s[0].getBoundingClientRect().left,l=p.getBoundingClientRect().left-c;this.highlightEl.style.transform=`translate(${l}px)`,this.stickyHeaderEl.classList.toggle("lh-sticky-header--visible",a)}};function Na(e,t){let n=t?new Date(t):new Date,a=n.toLocaleTimeString("en-US",{hour12:!1}),i=n.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/");i.unshift(i.pop());let o=i.join("-");return`${e}_${o}_${a}`.replace(/[/?<>\\:*|"]/g,"-")}function Da(e){let t=new URL(e.finalDisplayedUrl).hostname;return Na(t,e.fetchTime)}function za(e){let t=e.steps[0].lhr,n=e.name.replace(/\s/g,"-");return Na(n,t.fetchTime)}function Fo(e){return Array.from(e.tBodies[0].rows)}var vt=class{constructor(t,n={}){this.json,this._dom=t,this._opts=n,this._topbar=n.omitTopbar?null:new ft(this,t),this.onMediaQueryChange=this.onMediaQueryChange.bind(this)}initFeatures(t){this.json=t,this._fullPageScreenshot=I.getFullPageScreenshot(t),this._topbar&&(this._topbar.enable(t),this._topbar.resetUIState()),this._setupMediaQueryListeners(),this._setupThirdPartyFilter(),this._setupElementScreenshotOverlay(this._dom.rootEl);let n=this._dom.isDevTools()||this._opts.disableDarkMode||this._opts.disableAutoDarkModeAndFireworks;!n&&window.matchMedia("(prefers-color-scheme: dark)").matches&&we(this._dom,!0);let i=["performance","accessibility","best-practices","seo"].every(p=>{let c=t.categories[p];return c&&c.score===1}),o=this._opts.disableFireworks||this._opts.disableAutoDarkModeAndFireworks;if(i&&!o&&(this._enableFireworks(),n||we(this._dom,!0)),t.categories.performance&&t.categories.performance.auditRefs.some(p=>!!(p.group==="metrics"&&t.audits[p.id].errorMessage))){let p=this._dom.find("input.lh-metrics-toggle__input",this._dom.rootEl);p.checked=!0}this.json.audits["script-treemap-data"]&&this.json.audits["script-treemap-data"].details&&this.addButton({text:v.strings.viewTreemapLabel,icon:"treemap",onClick:()=>Ra(this.json)}),this._opts.onViewTrace&&(t.configSettings.throttlingMethod==="simulate"?this._dom.find('a[data-action="view-unthrottled-trace"]',this._dom.rootEl).classList.remove("lh-hidden"):this.addButton({text:v.strings.viewTraceLabel,onClick:()=>this._opts.onViewTrace?.()})),this._opts.getStandaloneReportHTML&&this._dom.find('a[data-action="save-html"]',this._dom.rootEl).classList.remove("lh-hidden");for(let p of this._dom.findAll("[data-i18n]",this._dom.rootEl)){let l=p.getAttribute("data-i18n");p.textContent=v.strings[l]}}addButton(t){let n=this._dom.rootEl.querySelector(".lh-audit-group--metrics");if(!n)return;let a=n.querySelector(".lh-buttons");a||(a=this._dom.createChildOf(n,"div","lh-buttons"));let i=["lh-button"];t.icon&&(i.push("lh-report-icon"),i.push(`lh-report-icon--${t.icon}`));let o=this._dom.createChildOf(a,"button",i.join(" "));return o.textContent=t.text,o.addEventListener("click",t.onClick),o}resetUIState(){this._topbar&&this._topbar.resetUIState()}getReportHtml(){if(!this._opts.getStandaloneReportHTML)throw new Error("`getStandaloneReportHTML` is not set");return this.resetUIState(),this._opts.getStandaloneReportHTML()}saveAsGist(){throw new Error("Cannot save as gist from base report")}_enableFireworks(){this._dom.find(".lh-scores-container",this._dom.rootEl).classList.add("lh-score100")}_setupMediaQueryListeners(){let t=self.matchMedia("(max-width: 500px)");t.addListener(this.onMediaQueryChange),this.onMediaQueryChange(t)}_resetUIState(){this._topbar&&this._topbar.resetUIState()}onMediaQueryChange(t){this._dom.rootEl.classList.toggle("lh-narrow",t.matches)}_setupThirdPartyFilter(){let t=["uses-rel-preconnect","third-party-facades"],n=["legacy-javascript"];Array.from(this._dom.rootEl.querySelectorAll("table.lh-table")).filter(o=>o.querySelector("td.lh-table-column--url, td.lh-table-column--source-location")).filter(o=>{let r=o.closest(".lh-audit");if(!r)throw new Error(".lh-table not within audit");return!t.includes(r.id)}).forEach(o=>{let r=Fo(o),s=r.filter(f=>!f.classList.contains("lh-sub-item-row")),p=this._getThirdPartyRows(s,I.getFinalDisplayedUrl(this.json)),c=r.some(f=>f.classList.contains("lh-row--even")),l=this._dom.createComponent("3pFilter"),d=this._dom.find("input",l);d.addEventListener("change",f=>{let y=f.target instanceof HTMLInputElement&&!f.target.checked,P=!0,A=s[0];for(;A;){let U=y&&p.includes(A);do A.classList.toggle("lh-row--hidden",U),c&&(A.classList.toggle("lh-row--even",!U&&P),A.classList.toggle("lh-row--odd",!U&&!P)),A=A.nextElementSibling;while(A&&A.classList.contains("lh-sub-item-row"));U||(P=!P)}});let m=p.filter(f=>!f.classList.contains("lh-row--group")).length;this._dom.find(".lh-3p-filter-count",l).textContent=`${m}`,this._dom.find(".lh-3p-ui-string",l).textContent=v.strings.thirdPartyResourcesLabel;let h=p.length===s.length,g=!p.length;if((h||g)&&(this._dom.find("div.lh-3p-filter",l).hidden=!0),!o.parentNode)return;o.parentNode.insertBefore(l,o);let _=o.closest(".lh-audit");if(!_)throw new Error(".lh-table not within audit");n.includes(_.id)&&!h&&d.click()})}_setupElementScreenshotOverlay(t){this._fullPageScreenshot&&le.installOverlayFeature({dom:this._dom,rootEl:t,overlayContainerEl:t,fullPageScreenshot:this._fullPageScreenshot})}_getThirdPartyRows(t,n){let a=I.getEntityFromUrl(n,this.json.entities),i=this.json.entities?.find(r=>r.isFirstParty===!0)?.name,o=[];for(let r of t){if(i){if(!r.dataset.entity||r.dataset.entity===i)continue}else{let s=r.querySelector("div.lh-text__url");if(!s)continue;let p=s.dataset.url;if(!p||!(I.getEntityFromUrl(p,this.json.entities)!==a))continue}o.push(r)}return o}_saveFile(t){let n=t.type.match("json")?".json":".html",a=Da({finalDisplayedUrl:I.getFinalDisplayedUrl(this.json),fetchTime:this.json.fetchTime})+n;this._opts.onSaveFileOverride?this._opts.onSaveFileOverride(t,a):this._dom.saveFile(t,a)}};function ja(e,t={}){let n=document.createElement("article");n.classList.add("lh-root","lh-vars");let a=new re(n.ownerDocument,n);return new ht(a).renderReport(e,n,t),new vt(a,t).initFeatures(e),n}function Ma(e,t){let n=new re(document,document.documentElement),a=new Ce(n);return new se(n,a).renderCategoryScore(e,{},t)}function Ha(e,t){new re(document,document.documentElement).saveFile(e,t)}function Fa(e){return new re(document,document.documentElement).convertMarkdownCodeSnippets(e)}function Ba(){return new re(document,document.documentElement).createComponent("styles")}var Oa=({category:e,href:t,gatherMode:n})=>{let a=ie(()=>Ma(e,{gatherMode:n,omitLabel:!0,onPageAnchorRendered:i=>i.href=t}),[e,t]);return u("div",{ref:a,"data-testid":"CategoryScore"})};var Ga=({text:e})=>{let t=ie(()=>Fa(e),[e]);return u("span",{ref:t})};var Bo=2;function Oo(e,t){switch(e){case"navigation":return t.navigationReport;case"timespan":return t.timespanReport;case"snapshot":return t.snapshotReport}}function Go(e,t){switch(e){case"pass":return t.ratingPass;case"average":return t.ratingAverage;case"fail":return t.ratingFail;case"error":return t.ratingError}}function Va(e){return e.weight*(1-e.result.score)}var Vo=({audit:e})=>{let t=E.calculateRating(e.result.score,e.result.scoreDisplayMode);return u("div",{className:`SummaryTooltipAudit SummaryTooltipAudit--${t}`,children:u(Ga,{text:e.result.title})})},$o=({category:e})=>{let t=M();function n(i){return i.result.score!==null&&i.group!=="metrics"&&i.group!=="hidden"&&(i.weight>0||i.group==="diagnostics")&&!E.showAsPassed(i.result)}let a=e.auditRefs.filter(n).sort((i,o)=>{let r=Va(i),s=Va(o);if(r!==s)return s-r;if(i.result.score!==o.result.score)return i.result.score-o.result.score;let p=i.result.metricSavings?.LCP||0;return(o.result.metricSavings?.LCP||0)-p}).splice(0,Bo);return a.length?u("div",{className:"SummaryTooltipAudits",children:[u("div",{className:"SummaryTooltipAudits__title",children:t.highestImpact}),a.map(i=>u(Vo,{audit:i},i.id))]}):null},Wo=({category:e,gatherMode:t,url:n})=>{let a=M(),i=mt(),{numPassed:o,numPassableAudits:r,numInformative:s,totalWeight:p}=E.calculateCategoryFraction(e),c=ze(),l=E.shouldDisplayAsFraction(t),d=l?o/r:e.score,m=d===null?"error":E.calculateRating(d);return u("div",{className:"SummaryTooltip",children:[u("div",{className:"SummaryTooltip__title",children:Oo(t,a)}),u("div",{className:"SummaryTooltip__url",children:n}),u(Z,{}),u("div",{className:"SummaryTooltip__category",children:[u("div",{className:"SummaryTooltip__category-title",children:e.title}),p!==0&&u("div",{className:`SummaryTooltip__rating SummaryTooltip__rating--${m}`,children:[u("span",{children:Go(m,a)}),!l&&e.score!==null&&u(j,{children:[u("span",{children:" · "}),u("span",{children:c.formatter.formatInteger(e.score*100)})]})]})]}),u("div",{className:"SummaryTooltip__fraction",children:[u("span",{children:i(a.passedAuditCount,{numPassed:o})}),u("span",{children:" / "}),u("span",{children:i(a.passableAuditCount,{numPassableAudits:r})})]}),s!==0&&u("div",{className:"SummaryTooltip__informative",children:i(a.informativeAuditCount,{numInformative:s})}),u($o,{category:e})]})},$a=({category:e,href:t,gatherMode:n,finalDisplayedUrl:a})=>u("div",{className:"SummaryCategory",children:e?u("div",{className:"SummaryCategory__content",children:[u(Oa,{category:e,href:t,gatherMode:n}),u(Wo,{category:e,gatherMode:n,url:a})]}):u("div",{className:"SummaryCategory__null","data-testid":"SummaryCategory__null"})});var Jo=["performance","accessibility","best-practices","seo"],qo=40,Zo=({lhr:e})=>{let t=M();return u("div",{className:"SummaryNavigationHeader","data-testid":"SummaryNavigationHeader",children:[u(oe,{}),u("div",{className:"SummaryNavigationHeader__url",children:u("a",{rel:"noopener",target:"_blank",href:e.finalDisplayedUrl,children:e.finalDisplayedUrl})}),u("div",{className:"SummaryNavigationHeader__category",children:t.categoryPerformance}),u("div",{className:"SummaryNavigationHeader__category",children:t.categoryAccessibility}),u("div",{className:"SummaryNavigationHeader__category",children:t.categoryBestPractices}),u("div",{className:"SummaryNavigationHeader__category",children:t.categorySeo})]})},Ko=({lhr:e,label:t,hashIndex:n})=>{let a=Q(()=>E.prepareReportResult(e),[e]),i=M(),o=Qe(e.gatherMode,i);return u("div",{className:"SummaryFlowStep",children:[e.gatherMode==="navigation"||n===0?u(Zo,{lhr:e}):u("div",{className:"SummaryFlowStep__separator",children:[u(oe,{}),u(Z,{})]}),u(et,{lhr:e,width:qo}),u(oe,{mode:e.gatherMode}),u("div",{className:"SummaryFlowStep__label",children:[u("div",{className:"SummaryFlowStep__mode",children:o}),u("a",{className:"SummaryFlowStep__link",href:`#index=${n}`,children:t})]}),Jo.map(r=>u($a,{category:a.categories[r],href:`#index=${n}&anchor=${r}`,gatherMode:e.gatherMode,finalDisplayedUrl:e.finalDisplayedUrl},r))]})},Xo=()=>{let e=$();return u("div",{className:"SummaryFlow",children:e.steps.map((t,n)=>u(Ko,{lhr:t.lhr,label:t.name,hashIndex:n},t.lhr.fetchTime))})},Yo=()=>{let e=$(),t=M(),n=mt(),a=0,i=0,o=0;for(let p of e.steps)switch(p.lhr.gatherMode){case"navigation":a++;break;case"timespan":i++;break;case"snapshot":o++;break}let r=[];a&&r.push(n(t.navigationReportCount,{numNavigation:a})),i&&r.push(n(t.timespanReportCount,{numTimespan:i})),o&&r.push(n(t.snapshotReportCount,{numSnapshot:o}));let s=r.join(" · ");return u("div",{className:"SummaryHeader",children:[u("div",{className:"SummaryHeader__title",children:t.summary}),u("div",{className:"SummaryHeader__subtitle",children:s})]})},Qo=({children:e})=>u("div",{className:"SummarySectionHeader",children:[u("div",{className:"SummarySectionHeader__content",children:e}),u(Z,{})]}),Wa=()=>{let e=M();return u("div",{className:"Summary","data-testid":"Summary",children:[u(Yo,{}),u(Z,{}),u(Qo,{children:e.allReports}),u(Xo,{})]})};function er(e,t){let n=e.cloneNode(!0);if(!n.hash)return n;let a=e.hash.substr(1);n.hash=`#index=${t}&anchor=${a}`,n.onclick=i=>{i.preventDefault();let o=document.getElementById(a);o&&o.scrollIntoView()},e.replaceWith(n)}var Ja=({hashState:e})=>{let t=ie(()=>ja(e.currentLhr,{disableFireworks:!0,disableDarkMode:!0,omitTopbar:!0,omitGlobalStyles:!0,onPageAnchorRendered:n=>er(n,e.index)}),[e]);return u("div",{ref:t,"data-testid":"Report"})};var Wt=e=>{let t=M();return u("div",{className:"HelpDialogColumn",children:[u("div",{className:"HelpDialogColumn__legend",children:[u("div",{className:"HelpDialogColumnTimeline",children:[e.icon,u("div",{className:"HelpDialogColumnTimeline__line"})]}),u("div",{className:"HelpDialogColumn__legend-label",children:e.userFriendlyModeLabel})]}),u("div",{className:"HelpDialogColumn__header",children:[u("div",{className:"HelpDialogColumn__header-title",children:e.lighthouseOfficialModeLabel}),u("p",{children:e.modeDescription})]}),u("div",{className:"HelpDialogColumn__use-cases",children:[u("p",{children:e.useCaseInstruction}),u("ul",{children:e.useCases.map((n,a)=>u("li",{children:n},a))})]}),u("div",{className:"HelpDialogColumn__categories",children:[u("p",{children:t.categories}),u("ul",{children:e.availableCategories.map((n,a)=>u("li",{children:n},a))})]})]})},qa=({onClose:e})=>{let t=M();return u("div",{className:"HelpDialog",children:[u("div",{className:"HelpDialog__title",children:[u("div",{children:t.helpDialogTitle}),u("div",{style:{flexGrow:1}}),u("button",{className:"HelpDialog__close",onClick:e,children:u(Nn,{})})]}),u("div",{className:"HelpDialog__columns",children:[u(Wt,{icon:u(Ke,{}),userFriendlyModeLabel:t.navigationDescription,lighthouseOfficialModeLabel:t.navigationReport,modeDescription:t.navigationLongDescription,useCaseInstruction:t.helpUseCaseInstructionNavigation,useCases:[t.helpUseCaseNavigation1,t.helpUseCaseNavigation2,t.helpUseCaseNavigation3],availableCategories:[t.categoryPerformance,t.categoryAccessibility,t.categoryBestPractices,t.categorySeo]}),u(Wt,{icon:u(Xe,{}),userFriendlyModeLabel:t.timespanDescription,lighthouseOfficialModeLabel:t.timespanReport,modeDescription:t.timespanLongDescription,useCaseInstruction:t.helpUseCaseInstructionTimespan,useCases:[t.helpUseCaseTimespan1,t.helpUseCaseTimespan2],availableCategories:[t.categoryPerformance,t.categoryBestPractices]}),u(Wt,{icon:u(Ye,{}),userFriendlyModeLabel:t.snapshotDescription,lighthouseOfficialModeLabel:t.snapshotReport,modeDescription:t.snapshotLongDescription,useCaseInstruction:t.helpUseCaseInstructionSnapshot,useCases:[t.helpUseCaseSnapshot1,t.helpUseCaseSnapshot2],availableCategories:[t.categoryPerformance,t.categoryAccessibility,t.categoryBestPractices,t.categorySeo]})]})]})};function Jt(e,t){let n=new Blob([t],{type:"text/html"}),a=za(e)+".html";Jt.saveFile(n,a)}Jt.saveFile=Ha;var tr=()=>u("svg",{role:"img",class:"lh-topbar__logo",title:"Lighthouse logo",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[u("path",{d:"m14 7 10-7 10 7v10h5v7h-5l5 24H9l5-24H9v-7h5V7Z",fill:"#F63"}),u("path",{d:"M31.561 24H14l-1.689 8.105L31.561 24ZM18.983 48H9l1.022-4.907L35.723 32.27l1.663 7.98L18.983 48Z",fill:"#FFA385"}),u("path",{fill:"#FF3",d:"M20.5 10h7v7h-7z"})]}),bt=({onClick:e,label:t,children:n})=>u("button",{className:"TopbarButton",onClick:e,"aria-label":t,children:n}),Za=({onMenuClick:e})=>{let t=$(),n=M(),[a,i]=ae(!1),{getReportHtml:o,saveAsGist:r}=Gn();return u("div",{className:"Topbar",children:[u(bt,{onClick:e,label:"Button that opens and closes the sidebar",children:u(Mn,{})}),u("div",{className:"Topbar__logo",children:u(tr,{})}),u("div",{className:"Topbar__title",children:n.title}),o&&u(bt,{onClick:()=>{let s=o(t);Jt(t,s)},label:"Button that saves the report as HTML",children:n.save}),r&&u(bt,{onClick:()=>r(t),label:"Button that saves the report to a gist",children:n.dropdownSaveGist}),u("div",{style:{flexGrow:1}}),u(bt,{onClick:()=>i(s=>!s),label:"Button that toggles the help dialog",children:u("div",{className:"Topbar__help-label",children:[u(Hn,{}),n.helpLabel]})}),a?u(qa,{onClose:()=>i(!1)}):null]})};var nr=80,ar=120,qt=({lhr:e,position:t})=>{let n=t==="main"?ar:nr;return u("div",{className:`HeaderThumbnail HeaderThumbnail--${t}`,children:[u(et,{lhr:e,height:n}),u("div",{className:"HeaderThumbnail__icon",children:u(Pt,{mode:e.gatherMode})})]})},Ka=({hashState:e})=>{let t=$(),{index:n}=e,a=t.steps[n],i=t.steps[n-1],o=t.steps[n+1],r=M(),s=Qe(a.lhr.gatherMode,r);return u("div",{className:"Header",children:[i&&u(j,{children:[t.steps[n-2]&&u("div",{className:"Header__segment"}),u("div",{className:"Header__prev-thumbnail",children:[u(qt,{lhr:i.lhr,position:"prev"}),u("div",{className:"Header__segment"})]}),u("a",{className:"Header__prev-title",href:`#index=${n-1}`,children:i.name})]}),u("div",{className:"Header__current-thumbnail",children:u(qt,{lhr:a.lhr,position:"main"})}),u("div",{className:"Header__current-title",children:[a.name,u("div",{className:"Header__current-description",children:s})]}),o&&u(j,{children:[u("div",{className:"Header__next-thumbnail",children:[u("div",{className:"Header__segment"}),u(qt,{lhr:o.lhr,position:"next"})]}),u("a",{className:"Header__next-title",href:`#index=${n+1}`,children:o.name}),t.steps[n+2]&&u("div",{className:"Header__segment"})]})]})};var Xa=()=>{let e=ie(Ba);return u("div",{ref:e})};function ir(e){return!e||!e.anchor?null:document.getElementById(e.anchor)}var or=()=>{let e=be(),t=qe(null);return Je(()=>{let n=ir(e);n?n.scrollIntoView():t.current&&(t.current.scrollTop=0)},[e]),u("div",{ref:t,className:"Content",children:e?u(j,{children:[u(Ka,{hashState:e}),u(Ja,{hashState:e})]}):u(Wa,{})})},Ya=({flowResult:e,options:t})=>{let[n,a]=ae(!1),i=Q(()=>t||{},[t]);return u(kt.Provider,{value:i,children:u(St.Provider,{value:e,children:u(wa,{children:[u(Xa,{}),u("div",{className:ve("App",{"App--collapsed":n}),"data-testid":"App",children:[u(Za,{onMenuClick:()=>a(o=>!o)}),u(Sa,{}),u(or,{})]})]})})})};function Qa(e,t,n){t.classList.add("flow-vars","lh-vars","lh-root"),bn(_t(Ya,{flowResult:e,options:n}),t)}function rr(){let e=document.body.querySelector("main");if(!e)throw Error("Container element not found");Qa(window.__LIGHTHOUSE_FLOW_JSON__,e,{getReportHtml:()=>document.documentElement.outerHTML})}window.__initLighthouseFlowReport__=rr;window.__initLighthouseFlowReport__();})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license Copyright 2023 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Dummy text for ensuring report robustness: <\/script> pre$`post %%LIGHTHOUSE_JSON%%
 * (this is handled by terser)
 */
