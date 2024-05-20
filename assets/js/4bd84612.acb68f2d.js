"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[806],{5312:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>i,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=n(3274),t=n(3006);const d={},s=void 0,o={id:"query/dql/dataframe_group_by",title:"dataframe_group_by",description:"---",source:"@site/docs/query/dql/dataframe_group_by.md",sourceDirName:"query/dql",slug:"/query/dql/dataframe_group_by",permalink:"/datadata-docs/docs/query/dql/dataframe_group_by",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/dql/dataframe_group_by.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1716177085,formattedLastUpdatedAt:"2024\u5e745\u670820\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"dataframe",permalink:"/datadata-docs/docs/query/dql/dataframe"},next:{title:"rolling",permalink:"/datadata-docs/docs/query/dql/rolling"}},m={},l=[{value:"title: DataFrameGroupBy\nsidebar_position: 8",id:"title-dataframegroupbysidebar_position-8",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"min",id:"min",level:3},{value:"max",id:"max",level:3},{value:"sum",id:"sum",level:3},{value:"std",id:"std",level:3},{value:"var",id:"var",level:3},{value:"mean",id:"mean",level:3},{value:"diff",id:"diff",level:3},{value:"cumprod",id:"cumprod",level:3},{value:"pct_change",id:"pct_change",level:3},{value:"agg",id:"agg",level:3},{value:"apply",id:"apply",level:3},{value:"transform",id:"transform",level:3}];function c(a){const e={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"title-dataframegroupbysidebar_position-8",children:"title: DataFrameGroupBy\nsidebar_position: 8"}),"\n",(0,r.jsx)(e.h3,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,r.jsx)(e.h3,{id:"min",children:"min"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u6700\u5c0f\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.min(skipna=True, numeric_only=False) #\u5305\u542b\u53c2\u6570"skipna"\uff0c\u4ee3\u8868\u662f\u5426\u5ffd\u7565\u7f3a\u5931\u503c\uff0c\u9ed8\u8ba4\u4e3a"True"\uff1b\u53c2\u6570"numeric_only"\uff0c\u4ee3\u8868\u662f\u5426\u53ea\u8ba1\u7b97\u6570\u503c\u5217\uff0c\u9ed8\u8ba4\u4e3a"False"\u3002\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.min() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6700\u5c0f\u503c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"max",children:"max"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u6700\u5c0f\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.max(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.max() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6700\u5927\u503c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"sum",children:"sum"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u503c\u7684\u603b\u548c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.sum(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.sum() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u603b\u548c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"std",children:"std"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u5206\u7ec4\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u503c\u7684\u6807\u51c6\u5dee\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.std(skipna=True, numeric_only=False, ddof=n) #\u53c2\u6570ddof\u8868\u793a\u7528\u4e8e\u6807\u51c6\u5dee\u8ba1\u7b97\u7684\u81ea\u7531\u5ea6\u8c03\u6574\uff08Delta Degrees of Freedom\uff09\u3002n\u4ee3\u8868\u81ea\u7531\u5ea6\u8c03\u6574\u6570\u503c\uff0c\u5177\u4f53\u6307\u4ece\u6837\u672c\u6570\u91cf\u4e2d\u51cf\u53bb\u7684\u6570\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cddof=1\uff0c\u8868\u793a\u8ba1\u7b97\u6837\u672c\u6807\u51c6\u5dee\u3002\u5982\u679c\u9700\u8981\u8ba1\u7b97\u603b\u4f53\u6807\u51c6\u5dee\uff0c\u53ef\u4ee5\u5c06ddof\u8bbe\u7f6e\u4e3a0\u3002\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.std() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6807\u51c6\u5dee\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"var",children:"var"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u65b9\u5dee\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.var(skipna=True, numeric_only=False, ddof=n)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.var() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u65b9\u5dee\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"mean",children:"mean"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u5747\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.mean(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.mean() #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u5747\u503c\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"diff",children:"diff"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u8bbe\u5b9a\u9636\u6570\u5dee\u5206\u503c\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.diff(periods = n) # "n"\u4ee3\u8868\u5dee\u5206\u7ea7\u6570\uff0c\u9ed8\u8ba4\u4e3a1\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.diff(1) #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u4e8c\u9636\u5dee\u5206\u540e\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"cumprod",children:"cumprod"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u7d2f\u79ef\u4e58\u79ef\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.cumprod(skipna=True)\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.cumprod(skipna=True) #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u7d2f\u79ef\u4e58\u79ef\u540e\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"pct_change",children:"pct_change"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5206\u7ec4\u7684\u767e\u5206\u6bd4\u53d8\u5316\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.pct_change(periods=1) #\u5305\u542b\u53c2\u6570"periods"\uff0c\u4ee3\u8868\u504f\u79fb\u5468\u671f\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff1b\u5f53\u5305\u542b\u975e\u6570\u503c\u5217\u65f6\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.pct_change(1) #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u767e\u5206\u6bd4\u53d8\u5316\u7ec4\u6210\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"agg",children:"agg"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u5bf9\u6bcf\u4e2a\u5206\u7ec4\u5e94\u7528\u591a\u4e2a\u805a\u5408\u51fd\u6570\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.agg()\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\ndef my_sum(s):\n  return s.sum()\nd2 = g1.agg(my_sum)\nreturn d2  #\u8fd4\u56de\u6839\u636e"name"\u5206\u7ec4\u540e\uff0c\u5176\u4ed6\u5404\u7ec4\u6c47\u603b\u8ba1\u7b97\u540e\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"apply",children:"apply"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u5bf9\u6bcf\u4e2a\u5206\u7ec4\u5e94\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u8fd4\u56de DataFrame \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.apply()\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\ndef my_mean(x):\n  res = x[0]\n  res["age"] = x["age"].mean()\n  res["count"] = x["count"].mean()\n  return res\nd2 = g1.apply(my_mean)\nreturn d2 #\u8fd4\u56de\u5206\u7ec4\u540e\u8bbe\u5b9a\u51fd\u6570\uff08"my_mean"\uff09\u8f6c\u6362\u540e\u7684 DataFrame\n'})}),"\n",(0,r.jsx)(e.h3,{id:"transform",children:"transform"}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5206\u7ec4\u540e\u7684\u6570\u636e\u8fdb\u884c\u8bbe\u5b9a\u51fd\u6570\u8f6c\u6362\uff0c\u8fd4\u56de DataFrame \u5927\u5c0f\u548c\u539f\u59cb\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'DataFrameGroupBy.transform()\n\n#\u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1.transform("mean") #\u8fd4\u56de\u5206\u7ec4\u540e\u8bbe\u5b9a\u51fd\u6570\uff08\u5747\u503c\uff09\u8f6c\u6362\u540e\u7684 DataFrame\n'})})]})}function i(a={}){const{wrapper:e}={...(0,t.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(c,{...a})}):c(a)}},3006:(a,e,n)=>{n.d(e,{R:()=>s,x:()=>o});var r=n(9474);const t={},d=r.createContext(t);function s(a){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function o(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:s(a.components),r.createElement(d.Provider,{value:e},a.children)}}}]);