"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[2138],{1892:(e,t,r)=>{r.d(t,{W:()=>u});var s=r(9474),a=r(9818);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},9677:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var s=r(9474),a=r(9818),n=r(2276),c=r(2236),l=r(6118),o=r(3702),u=r(1892),h=r(8835),i=r(241),m=r(3023),d=r(8963);const p=function(){const e=(0,m.A)(),t=(0,i.W6)(),r=(0,i.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(d.Hg)&&d.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var g=r(8871),x=r(3329),f=r(5829),y=r(2733),C=r(9934),S=r(8296),j=r(2707);const A={searchContextInput:"searchContextInput_oNq_",searchQueryInput:"searchQueryInput_PzUt",searchResultItem:"searchResultItem_Nji0",searchResultItemPath:"searchResultItemPath_mQrJ",searchResultItemSummary:"searchResultItemSummary_mDti",searchQueryColumn:"searchQueryColumn_CQnd",searchContextColumn:"searchContextColumn__46h"};var v=r(725),w=r(3274);function I(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=(0,u.W)(),{searchValue:n,searchContext:l,searchVersion:i,updateSearchPath:m,updateSearchContext:f}=p(),[y,C]=(0,s.useState)(n),[j,I]=(0,s.useState)(),[P,_]=(0,s.useState)(),b=`${e}${i}`,T=(0,s.useMemo)((()=>y?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,s.useEffect)((()=>{m(y),j&&(y?j(y,(e=>{_(e)})):_(void 0))}),[y,j]);const $=(0,s.useCallback)((e=>{C(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==y&&C(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(d.Hg)||l||d.dz?await(0,g.Z)(b,l):{wrappedIndexes:[],zhDictionary:[]};I((()=>(0,x.m)(e,t,100)))}()}),[l,b]),(0,w.jsxs)(s.Fragment,{children:[(0,w.jsxs)(c.A,{children:[(0,w.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,w.jsx)("title",{children:T})]}),(0,w.jsxs)("div",{className:"container margin-vert--lg",children:[(0,w.jsx)("h1",{children:T}),(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:(0,h.A)("col",{[A.searchQueryColumn]:Array.isArray(d.Hg),"col--9":Array.isArray(d.Hg),"col--12":!Array.isArray(d.Hg)}),children:(0,w.jsx)("input",{type:"search",name:"q",className:A.searchQueryInput,"aria-label":"Search",onChange:$,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(d.Hg)?(0,w.jsx)("div",{className:(0,h.A)("col","col--3","padding-left--none",A.searchContextColumn),children:(0,w.jsxs)("select",{name:"search-context",className:A.searchContextInput,id:"context-selector",value:l,onChange:e=>f(e.target.value),children:[d.dz&&(0,w.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})}),d.Hg.map((e=>{const{label:r,path:s}=(0,v.p)(e,t);return(0,w.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!j&&y&&(0,w.jsx)("div",{children:(0,w.jsx)(S.A,{})}),P&&(P.length>0?(0,w.jsx)("p",{children:r(P.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))}):(0,w.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,w.jsx)("section",{children:P&&P.map((e=>(0,w.jsx)(R,{searchResult:e},e.document.i)))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(d.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,w.jsxs)("article",{className:A.searchResultItem,children:[(0,w.jsx)("h2",{children:(0,w.jsx)(l.A,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.Z)(h,a):(0,y.C)(h,(0,C.g)(n,"t"),a,100)}})}),u.length>0&&(0,w.jsx)("p",{className:A.searchResultItemPath,children:(0,j.$)(u)}),o&&(0,w.jsx)("p",{className:A.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.C)(t.t,(0,C.g)(n,"t"),a,100)}})]})}const P=function(){return(0,w.jsx)(n.A,{children:(0,w.jsx)(I,{})})}}}]);