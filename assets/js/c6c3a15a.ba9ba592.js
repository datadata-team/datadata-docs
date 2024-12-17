"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[6750],{9253:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var s=r(6070),a=r(1100);const d={title:"SeriesGroupBy",sidebar_position:7},o=void 0,c={id:"query/dql/series_group_by",title:"SeriesGroupBy",description:"\u65b9\u6cd5",source:"@site/docs/query/02_dql/series_group_by.md",sourceDirName:"query/02_dql",slug:"/query/dql/series_group_by",permalink:"/datadata-docs/docs/query/dql/series_group_by",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/02_dql/series_group_by.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1734412952e3,sidebarPosition:7,frontMatter:{title:"SeriesGroupBy",sidebar_position:7},sidebar:"docs",previous:{title:"Resampler",permalink:"/datadata-docs/docs/query/dql/resampler"},next:{title:"DataFrameGroupBy",permalink:"/datadata-docs/docs/query/dql/dataframe_group_by"}},i={},t=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>sum</code>",id:"sum",level:3},{value:"<code>std</code>",id:"std",level:3},{value:"<code>var</code>",id:"var",level:3},{value:"<code>mean</code>",id:"mean",level:3},{value:"<code>diff</code>",id:"diff",level:3},{value:"<code>cumprod</code>",id:"cumprod",level:3},{value:"<code>pct_change</code>",id:"pct_change",level:3},{value:"<code>apply</code>",id:"apply",level:3},{value:"<code>transform</code>",id:"transform",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"min",children:(0,s.jsx)(n.code,{children:"min"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u6700\u5c0f\u503c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.min(skipna=True\uff0cnumeric_only=False) #\u5305\u542b\u53c2\u6570"skipna"\uff0c\u4ee3\u8868\u662f\u5426\u5ffd\u7565\u7f3a\u5931\u503c\uff0c\u9ed8\u8ba4\u4e3a"True"\uff1b\u53c2\u6570"numeric_only"\uff0c\u4ee3\u8868\u662f\u5426\u53ea\u8ba1\u7b97\u6570\u503c\u5217\uff0c\u9ed8\u8ba4\u4e3a"False"\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.min() #\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u6700\u5c0f\u503c\uff1a[1, 3, 4]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"max",children:(0,s.jsx)(n.code,{children:"max"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u6700\u5927\u503c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.max(skipna=True\uff0cnumeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.max() #\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u6700\u5927\u503c\uff1a[2, 3, 5]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sum",children:(0,s.jsx)(n.code,{children:"sum"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u603b\u548c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.sum(skipna=True\uff0cnumeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.sum() #\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u603b\u548c\uff1a[3, 3, 9]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"std",children:(0,s.jsx)(n.code,{children:"std"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u6807\u51c6\u5dee\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.std(skipna=True, numeric_only=False, ddof=n) #\u53c2\u6570ddof\u8868\u793a\u7528\u4e8e\u6807\u51c6\u5dee\u8ba1\u7b97\u7684\u81ea\u7531\u5ea6\u8c03\u6574\uff08Delta Degrees of Freedom\uff09\u3002n\u4ee3\u8868\u81ea\u7531\u5ea6\u8c03\u6574\u6570\u503c\uff0c\u5177\u4f53\u6307\u4ece\u6837\u672c\u6570\u91cf\u4e2d\u51cf\u53bb\u7684\u6570\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cddof=1\uff0c\u8868\u793a\u8ba1\u7b97\u6837\u672c\u6807\u51c6\u5dee\u3002\u5982\u679c\u9700\u8981\u8ba1\u7b97\u603b\u4f53\u6807\u51c6\u5dee\uff0c\u53ef\u4ee5\u5c06ddof\u8bbe\u7f6e\u4e3a0\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.std()  #\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u6807\u51c6\u5dee\uff1a[1, 0.7071067811865476]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"var",children:(0,s.jsx)(n.code,{children:"var"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u7684\u65b9\u5dee\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.var(skipna=True, numeric_only=False, ddof=n)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.var()  #\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u65b9\u5dee\uff1a[1, 0.5]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"mean",children:(0,s.jsx)(n.code,{children:"mean"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u5404\u7ec4\u5e73\u5747\u503c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.mean(skipna=True\uff0cnumeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.mean()  #\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u5747\u503c\uff1a[2, 4.5]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"diff",children:(0,s.jsx)(n.code,{children:"diff"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u5404\u7ec4\u8bbe\u5b9a\u9636\u6570\u5dee\u5206\u503c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.diff(periods = n) # "n"\u4ee3\u8868\u5dee\u5206\u9636\u6570\uff0c\u9ed8\u8ba4\u4e3a1\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.diff()  #\u8fd4\u56de\u5206\u7ec4\u540e\u5dee\u5206\u503c\uff1a[-, 1, 1, -, 1]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cumprod",children:(0,s.jsx)(n.code,{children:"cumprod"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u7684\u7d2f\u79ef\u4e58\u79ef\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.cumprod(skipna=True)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.cumprod()  #\u8fd4\u56de\u5206\u7ec4\u540e\u7d2f\u79ef\u4e58\u79ef\u503c\uff1a[1, 2, 6, 4, 20]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"pct_change",children:(0,s.jsx)(n.code,{children:"pct_change"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5206\u7ec4\u540e\u7684\u767e\u5206\u6bd4\u53d8\u5316\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.pct_change(periods=1) #\u5305\u542b\u53c2\u6570"periods"\uff0c\u4ee3\u8868\u504f\u79fb\u5468\u671f\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff1b\u5f53\u5305\u542b\u975e\u6570\u503c\u5217\u65f6\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.pct_change()  #\u8fd4\u56de\u5206\u7ec4\u540e\u767e\u5206\u6bd4\u53d8\u5316\uff1a[-, 1, 0.5, -, 0.25]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"apply",children:(0,s.jsx)(n.code,{children:"apply"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u51fd\u6570\u5e94\u7528\u5230\u5206\u7ec4\u540e\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.apply()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.apply(lambda x: x * 2) #\u8fd4\u56de\u5206\u7ec4\u540e\u51fd\u6570\u8fd0\u7b97\u540e\u503c\uff1a[2, 4, 6, 8, 10]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"transform",children:(0,s.jsx)(n.code,{children:"transform"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u5206\u7ec4\u540e\u7684\u6570\u636e\u8fdb\u884c\u8bbe\u5b9a\u51fd\u6570\u8f6c\u6362\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'SeriesGroupBy.transform()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ng1 = d1.groupby(["name", "age"])\ns1 = g1["count"]\nreturn s1.transform("mean")  #\u8fd4\u56de\u5206\u7ec4\u540e\u8bbe\u5b9a\u51fd\u6570\uff08\u5747\u503c\uff09\u8f6c\u6362\u540e\u503c\uff1a[2, 2, 2, 4.5, 4.5]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1100:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(758);const a={},d=s.createContext(a);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);