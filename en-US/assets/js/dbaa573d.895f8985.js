"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[9526],{857:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>t});var r=a(6070),d=a(5710);const l={title:"Rolling",sidebar_position:5},i=void 0,s={id:"query/dql/rolling",title:"Rolling",description:"\u65b9\u6cd5",source:"@site/docs/query/dql/rolling.md",sourceDirName:"query/dql",slug:"/query/dql/rolling",permalink:"/datadata-docs/en-US/docs/query/dql/rolling",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/dql/rolling.md",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1723432945e3,sidebarPosition:5,frontMatter:{title:"Rolling",sidebar_position:5},sidebar:"docs",previous:{title:"Timestamp",permalink:"/datadata-docs/en-US/docs/query/dql/timestamp"},next:{title:"Resampler",permalink:"/datadata-docs/en-US/docs/query/dql/resampler"}},o={},t=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"min",id:"min",level:3},{value:"max",id:"max",level:3},{value:"sum",id:"sum",level:3},{value:"std",id:"std",level:3},{value:"var",id:"var",level:3},{value:"mean",id:"mean",level:3},{value:"median",id:"median",level:3},{value:"apply",id:"apply",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"min",children:"min"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u5185\u7684\u6700\u5c0f\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.min(skipna=True, numeric_only=False) #\u5305\u542b\u53c2\u6570"skipna"\uff0c\u4ee3\u8868\u662f\u5426\u5ffd\u7565\u7f3a\u5931\u503c\uff0c\u9ed8\u8ba4\u4e3a"True"\uff1b\u53c2\u6570"numeric_only"\uff0c\u4ee3\u8868\u662f\u5426\u53ea\u8ba1\u7b97\u6570\u503c\u5217\uff0c\u9ed8\u8ba4\u4e3a"False"\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\nreturn r1.min() #\u4ee53\u4e3a\u6ed1\u52a8\u5468\u671f\uff0c\u8fd4\u56de\u5404\u4e2a\u6ed1\u52a8\u5468\u671f\u5185\u7684\u6700\u5c0f\u503c\uff1b\u8bbe\u7f6e\u6700\u5c0f\u5468\u671f\u4e3a1\uff0c\u5f53\u4e0d\u6ee1\u8db3\u5468\u671f\u6570\u76ee\uff0c\u8fd4\u56de\u5f53\u524d\u5468\u671f\u6570\u76ee\u5185\u7684\u6700\u5c0f\u503c\n'})}),"\n",(0,r.jsx)(n.h3,{id:"max",children:"max"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u4e2d\u7684\u6700\u5927\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.max(skipna=True, numeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\nreturn r1.max()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sum",children:"sum"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u4e2d\u7684\u603b\u548c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.sum(skipna=True, numeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\nreturn r1.sum()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"std",children:"std"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u4e2d\u7684\u6807\u51c6\u5dee\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.std(skipna=True, numeric_only=False, ddof=n) #\u53c2\u6570"ddof"\uff0c\u8868\u793a\u7528\u4e8e\u6807\u51c6\u5dee\u8ba1\u7b97\u7684\u81ea\u7531\u5ea6\u8c03\u6574\uff08Delta Degrees of Freedom\uff09\u3002n\u4ee3\u8868\u81ea\u7531\u5ea6\u8c03\u6574\u6570\u503c\uff0c\u5177\u4f53\u6307\u4ece\u6837\u672c\u6570\u91cf\u4e2d\u51cf\u53bb\u7684\u6570\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cddof=1\uff0c\u8868\u793a\u8ba1\u7b97\u6837\u672c\u6807\u51c6\u5dee\u3002\u5982\u679c\u9700\u8981\u8ba1\u7b97\u603b\u4f53\u6807\u51c6\u5dee\uff0c\u53ef\u4ee5\u5c06ddof\u8bbe\u7f6e\u4e3a0\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\nreturn r1.std()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"var",children:"var"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u4e2d\u7684\u65b9\u5dee\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.var(skipna=True, numeric_only=False, ddof=n)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\nreturn r1.var()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"mean",children:"mean"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u4e2d\u7684\u5e73\u5747\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.mean(skipna=True, numeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\nreturn r1.mean()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"median",children:"median"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u4e2d\u7684\u4e2d\u4f4d\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.median(skipna=True, numeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\nreturn r1.median()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"apply",children:"apply"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u51fd\u6570\u5e94\u7528\u5230\u5404\u4e2a\u6eda\u52a8\u7a97\u53e3\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dataframe.Rolling.apply()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\nr1 = d1["age"].rolling(window=3, min_periods=1)\ndef cal_mean(x):\n  d = DataFrame(x)\n  return d["column_0"].mean()\nreturn r1.apply(cal_mean)\n'})})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5710:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var r=a(758);const d={},l=r.createContext(d);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);