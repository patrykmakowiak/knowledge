"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[1016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},i="Replace library",c={unversionedId:"legacy-code/replace-library",id:"legacy-code/replace-library",title:"Replace library",description:"When you need to replace the library due to some kind of reason. It is deprecated or the bundle size is unacceptable for example.",source:"@site/docs/legacy-code/replace-library.md",sourceDirName:"legacy-code",slug:"/legacy-code/replace-library",permalink:"/knowledge/docs/legacy-code/replace-library",draft:!1,editUrl:"https://github.com/patrykmakowiak/knowledge/tree/master/docs/legacy-code/replace-library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/knowledge/docs/legacy-code/refactor-to-value-object/introduction"},next:{title:"No vendor lock-in",permalink:"/knowledge/docs/good-practices/no-vendor-lock-in"}},l={},s=[{value:"How to do it?",id:"how-to-do-it",level:2},{value:"How to measure a progress?",id:"how-to-measure-a-progress",level:2},{value:"How to avoid this situation?",id:"how-to-avoid-this-situation",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"replace-library"},"Replace library"),(0,n.kt)("p",null,"When you need to replace the library due to some kind of reason. It is deprecated or the bundle size is unacceptable for example."),(0,n.kt)("h2",{id:"how-to-do-it"},"How to do it?"),(0,n.kt)("p",null,"If you use the library to replace in a few places you can skip this point!"),(0,n.kt)("p",null,"For large-scale operation you can use this tool ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift"},"https://github.com/facebook/jscodeshift"),"."),(0,n.kt)("h2",{id:"how-to-measure-a-progress"},"How to measure a progress?"),(0,n.kt)("p",null,"As soon as we assume that refactorization (replace of the library) could take a long time we should start measuring progress. We can do this using Grafana and ","[need to find out]",'. The metric could be "Amount of usage".'),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This point is not ready yet!")),(0,n.kt)("h2",{id:"how-to-avoid-this-situation"},"How to avoid this situation?"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{parentName:"p",href:"/knowledge/docs/good-practices/no-vendor-lock-in"},"no vendor lock-in approach")," creating a facade for a date library for example."))}u.isMDXComponent=!0}}]);