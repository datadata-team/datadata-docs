"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[284],{706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var a=s(3274),r=s(3006);const i={},l=void 0,d={id:"query/dql/series",title:"series",description:"---",source:"@site/docs/query/dql/series.md",sourceDirName:"query/dql",slug:"/query/dql/series",permalink:"/datadata-docs/docs/query/dql/series",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/dql/series.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1716176129,formattedLastUpdatedAt:"2024\u5e745\u670820\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"DataFrameGroupBy",permalink:"/datadata-docs/docs/query/dql/dataframe_group_by"},next:{title:"\u6982\u89c8",permalink:"/datadata-docs/docs/visualizations/overview"}},c={},t=[{value:"title: Series\nsidebar_position: 2",id:"title-seriessidebar_position-2",level:2},{value:"\u521b\u5efa\u65b9\u6cd5",id:"\u521b\u5efa\u65b9\u6cd5",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"name",id:"name",level:3},{value:"size",id:"size",level:3},{value:"dtype",id:"dtype",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"rename",id:"rename",level:3},{value:"items",id:"items",level:3},{value:"to_list",id:"to_list",level:3},{value:"append",id:"append",level:3},{value:"ffill",id:"ffill",level:3},{value:"bfill",id:"bfill",level:3},{value:"fillna",id:"fillna",level:3},{value:"max",id:"max",level:3},{value:"min",id:"min",level:3},{value:"sum",id:"sum",level:3},{value:"std",id:"std",level:3},{value:"var",id:"var",level:3},{value:"mean",id:"mean",level:3},{value:"diff",id:"diff",level:3},{value:"cumprod",id:"cumprod",level:3},{value:"pct_change",id:"pct_change",level:3},{value:"map",id:"map",level:3},{value:"apply",id:"apply",level:3},{value:"filter",id:"filter",level:3},{value:"reduce",id:"reduce",level:3},{value:"rolling",id:"rolling",level:3},{value:"resample",id:"resample",level:3},{value:"sort_values",id:"sort_values",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"title-seriessidebar_position-2",children:"title: Series\nsidebar_position: 2"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 DQL\uff08Data Query Language\uff09\u4e2d\uff0cSeries \u662f\u4e00\u4e2a\u4e00\u7ef4\u7684\u3001\u5e26\u6709\u6807\u7b7e\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u662f DataFrame \u7684\u57fa\u672c\u7ec4\u6210\u90e8\u5206\u4e4b\u4e00\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 DQL \u4e2d\uff0cSeries \u53ef\u4ee5\u4ece DataFrame \u4e2d\u9009\u62e9\u5355\u5217\u8fdb\u884c\u521b\u5efa\u3002\u4e00\u65e6\u521b\u5efa\u4e86 Series\uff0c\u60a8\u53ef\u4ee5\u50cf\u5904\u7406 DataFrame \u4e00\u6837\u5bf9\u5176\u8fdb\u884c\u5404\u79cd\u64cd\u4f5c\uff0c\u4f8b\u5982\u7d22\u5f15\u3001\u5207\u7247\u3001\u8fc7\u6ee4\u7b49\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u603b\u4e4b\uff0cSeries \u662f DQL \u4e2d\u7528\u4e8e\u8868\u793a\u4e00\u7ef4\u6570\u636e\u7684\u91cd\u8981\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u800c\u7075\u6d3b\u7684\u65b9\u5f0f\u6765\u5904\u7406\u548c\u5206\u6790\u5355\u4e2a\u7279\u5f81\u6216\u5c5e\u6027\u7684\u6570\u636e\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u521b\u5efa\u65b9\u6cd5",children:"\u521b\u5efa\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"] # \u9009\u5b9a\'age\'\u5217\nreturn type(s1) # \u8fd4\u56de\'dataframe.Series\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56deSeries\u540d\u79f0\uff1a",(0,a.jsx)(n.code,{children:"Type string"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500]})\ns1 = d1["age"]\nreturn s1.name #\u8fd4\u56deSeries\u540d\u79f0\uff1a\'age\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"size",children:"size"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56deSeries\u5927\u5c0f\uff1a",(0,a.jsx)(n.code,{children:"Type int"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.size #\u8fd4\u56deSeries\u5927\u5c0f\uff1a5\n'})}),"\n",(0,a.jsx)(n.h3,{id:"dtype",children:"dtype"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56deSeries\u6570\u636e\u7c7b\u578b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.dtype #\u8fd4\u56deSeries\u6570\u636e\u7c7b\u578b\uff1a\'int\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.h3,{id:"rename",children:"rename"}),"\n",(0,a.jsx)(n.p,{children:"\u91cd\u547d\u540d Series\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.rename("new_name")\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\ns2 = s1.rename("newage")\nreturn s2.name #\u8fd4\u56deSeries\u91cd\u547d\u540d\u540d\u79f0\uff1a\'newage\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"items",children:"items"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u7684\u952e\u503c\u5bf9\u8fed\u4ee3\u5668\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.items()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.items() #\u8fd4\u56de\'dataframe.SeriesItems\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"to_list",children:"to_list"}),"\n",(0,a.jsx)(n.p,{children:"\u5c06 Series \u8f6c\u6362\u4e3a\u5217\u8868\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.to_list()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn type(s1.to_list()) #\u8fd4\u56de\'list\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"append",children:"append"}),"\n",(0,a.jsx)(n.p,{children:"\u5411 Series \u6dfb\u52a0\u4e00\u4e2a\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.append(value)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\ns1.append(6)\nreturn s1.size #\u8fd4\u56de\u589e\u6dfb\u540eSeries\u5927\u5c0f\uff1a6\n'})}),"\n",(0,a.jsx)(n.h3,{id:"ffill",children:"ffill"}),"\n",(0,a.jsx)(n.p,{children:"\u5411\u524d\u586b\u5145\u7f3a\u5931\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.ffill(inplace=False) #"inplace"\u4ee3\u8868\u662f\u5426\u66f4\u65b0\u539f\u59cb Series \uff0c\u9ed8\u8ba4\u662f False\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\ns1.ffill(inplace = True) #\u66f4\u65b0\u539f\u59cbSeries\nreturn s1 #\u8fd4\u56de\u5411\u524d\u66ff\u6362\u540e\u7684Series: [1, 1, 2, 3, 5]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"bfill",children:"bfill"}),"\n",(0,a.jsx)(n.p,{children:"\u5411\u540e\u586b\u5145\u7f3a\u5931\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.bfill(inplace=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\ns1.bfill(inplace = True) #\u66f4\u65b0\u539f\u59cbSeries\nreturn s1 #\u8fd4\u56de\u5411\u540e\u66ff\u6362\u540e\u7684Series: [1, 2, 2, 3, None]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"fillna",children:"fillna"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u8bbe\u5b9a\u503c\u586b\u5145\u7f3a\u5931\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.fillna(n, inplace=False) #\u4f7f\u7528"n"\u503c\u586b\u5145\u7f3a\u5931\u503c\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\ns1.fillna(0, inplace = True) #\u4f7f\u75280\u66ff\u6362\u7a7a\u503c\nreturn s1 #\u8fd4\u56de0\u503c\u66ff\u6362\u540e\u7684Series: [1, 0, 2, 3, 0]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"max",children:"max"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u6700\u5927\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.max(skipna=True, numeric_only=False) #\u5305\u542b\u53c2\u6570"skipna"\uff0c\u4ee3\u8868\u662f\u5426\u5ffd\u7565\u7f3a\u5931\u503c\uff0c\u9ed8\u8ba4\u4e3a"True"\uff1b\u53c2\u6570"numeric_only"\uff0c\u4ee3\u8868\u662f\u5426\u53ea\u8ba1\u7b97\u6570\u503c\u5217\uff0c\u9ed8\u8ba4\u4e3a"False"\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.max(skipna=True) #\u8fd4\u56de\u53bb\u9664\u7f3a\u5931\u503c\u540e\u7684\u6700\u5927\u503c\n'})}),"\n",(0,a.jsx)(n.h3,{id:"min",children:"min"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u6700\u5c0f\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.min(skipna=True, numeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.min(skipna=True\uff0cnumeric_only=False) #\u8fd4\u56deSeries\u6700\u5c0f\u503c: 1\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sum",children:"sum"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u603b\u548c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.sum(skipna=True, numeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.sum() #\u8fd4\u56deSeries\u603b\u548c: 7\n'})}),"\n",(0,a.jsx)(n.h3,{id:"std",children:"std"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u6807\u51c6\u5dee\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.std(skipna=True, numeric_only=False, ddof=n) #\u53c2\u6570"ddof"\uff0c\u8868\u793a\u7528\u4e8e\u6807\u51c6\u5dee\u8ba1\u7b97\u7684\u81ea\u7531\u5ea6\u8c03\u6574\uff08Delta Degrees of Freedom\uff09\u3002n\u4ee3\u8868\u81ea\u7531\u5ea6\u8c03\u6574\u6570\u503c\uff0c\u5177\u4f53\u6307\u4ece\u6837\u672c\u6570\u91cf\u4e2d\u51cf\u53bb\u7684\u6570\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cddof=1\uff0c\u8868\u793a\u8ba1\u7b97\u6837\u672c\u6807\u51c6\u5dee\u3002\u5982\u679c\u9700\u8981\u8ba1\u7b97\u603b\u4f53\u6807\u51c6\u5dee\uff0c\u53ef\u4ee5\u5c06ddof\u8bbe\u7f6e\u4e3a0\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.std() #\u8fd4\u56deSeries\u6807\u51c6\u5dee: 0.9574271077563381\n'})}),"\n",(0,a.jsx)(n.h3,{id:"var",children:"var"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u65b9\u5dee\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.var(skipna=True, numeric_only=False, ddof=n)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.var() #\u8fd4\u56deSeries\u65b9\u5dee: 0.9166666666666666\n'})}),"\n",(0,a.jsx)(n.h3,{id:"mean",children:"mean"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u5e73\u5747\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.mean(skipna=True, numeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.mean(skipna=True, numeric_only=False) #\u8fd4\u56deSeries\u5747\u503c: 1.75\n'})}),"\n",(0,a.jsx)(n.h3,{id:"diff",children:"diff"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u4e00\u9636\u5dee\u5206\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.diff(period=n) #"n"\u4ee3\u8868\u5dee\u5206\u7ea7\u6570\uff0c\u9ed8\u8ba4\u4e3a1\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.diff(1) # \u8fd4\u56de[-, 0, 1, 1, 0]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"cumprod",children:"cumprod"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u7d2f\u79ef\u4e58\u79ef\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.cumprod(skipna=True)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.cumprod() # \u8fd4\u56de[1, 1, 2, 6, -]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"pct_change",children:"pct_change"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de Series \u4e2d\u7684\u767e\u5206\u6bd4\u53d8\u5316\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.pct_change(periods=1) #\u5305\u542b\u53c2\u6570"periods"\uff0c\u4ee3\u8868\u504f\u79fb\u5468\u671f\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff1b\u5f53\u5305\u542b\u975e\u6570\u503c\u5217\u65f6\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.pct_change(1)# \u8fd4\u56de[-, 0, 1, 0.5, 0]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"map",children:"map"}),"\n",(0,a.jsx)(n.p,{children:"\u5c06 Series \u4e2d\u7684\u503c\u6620\u5c04\u5230\u53e6\u4e00\u4e2a\u51fd\u6570\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.map()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.map(lambda x: x * 2)# \u8fd4\u56de[2, 2, 4, 6, 6]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"apply",children:"apply"}),"\n",(0,a.jsx)(n.p,{children:"\u5c06\u51fd\u6570\u5e94\u7528\u5230 Series \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.apply()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.apply(lambda x: x * 2)# \u8fd4\u56de[2, 2, 4, 6, 6]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"filter",children:"filter"}),"\n",(0,a.jsx)(n.p,{children:"\u6839\u636e\u7ed9\u5b9a\u7684\u51fd\u6570\u8fc7\u6ee4 Series \u4e2d\u7684\u5143\u7d20\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.filter()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.filter(lambda x: x == 1)# \u8fd4\u56de\u6570\u503c\u4e3a1\u7684\u884c\n'})}),"\n",(0,a.jsx)(n.h3,{id:"reduce",children:"reduce"}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9 Series \u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u7d2f\u79ef\u8ba1\u7b97\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.reduce() \n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.reduce(lambda acc, x: acc + x, 0) #\u8fd4\u56de\u7d2f\u52a0\u503c10\n'})}),"\n",(0,a.jsx)(n.h3,{id:"rolling",children:"rolling"}),"\n",(0,a.jsxs)(n.p,{children:["\u6839\u636e\u8bbe\u5b9a\u53c2\u6570\uff0c\u8fd4\u56de\u6eda\u52a8\u7a97\u53e3\u5bf9\u8c61",(0,a.jsx)(n.code,{children:"dataframe.Rolling"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.rolling(window=n1, min_periods=n2) # "windows"\u4ee3\u8868\u6ed1\u52a8\u7a97\u53e3\u5927\u5c0f\uff0c\u201cmin_period\u201d\u4ee3\u8868\u6700\u5c0f\u8ba1\u7b97\u8303\u56f4\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.rolling(window=4, min_periods=2) # \u8fd4\u56de"dataframe.Rolling"\u5c5e\u6027\u5bf9\u8c61\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u5305\u542b\u65f6\u95f4\u5e8f\u5217\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"rolling"})," \u65b9\u6cd5\u6765\u8fdb\u884c\u6ed1\u52a8\u7a97\u53e3\u8ba1\u7b97\u3002\u4f60\u53ef\u4ee5\u6307\u5b9a\u5177\u4f53\u7684\u6ed1\u52a8\u5468\u671f\uff0c\u4f8b\u5982\u79d2 (",(0,a.jsx)(n.code,{children:"s"}),")\u3001\u5206\u949f (",(0,a.jsx)(n.code,{children:"m"}),")\u3001\u5c0f\u65f6 (",(0,a.jsx)(n.code,{children:"h"}),")\uff0c\u5e76\u6dfb\u52a0 ",(0,a.jsx)(n.code,{children:"timeline"})," \u53c2\u6570\u4f5c\u4e3a\u65f6\u95f4\u5e8f\u5217\u7684\u7d22\u5f15\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"Series.rolling(period, timeline) # \"period\"\u4ee3\u8868\u6ed1\u52a8\u65f6\u95f4\u5468\u671f\uff0c\u201ctimeline\u201d\u4ee3\u8868\u65f6\u95f4\u5e8f\u5217\u7d22\u5f15\n\n# \u793a\u8303\nd1 = DataFrame({\n  \"count\": [4, 6, 1, 4, 7, 1, 5, 8, 2, 9],\n  \"age\": [3, 2, 8, 2, 0, 8, 4, 1, 3, 5],\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:12'),\n  ],\n})\ns1 = d1[\"count\"]\nr1 = s1.rolling('3s', timeline=d1[\"timeline\"])\nreturn r1# \u8fd4\u56de\"dataframe.Rolling\"\u5c5e\u6027\u5bf9\u8c61\n"})}),"\n",(0,a.jsx)(n.h3,{id:"resample",children:"resample"}),"\n",(0,a.jsxs)(n.p,{children:["\u6839\u636e\u8bbe\u5b9a\u9891\u7387\uff0c\u91cd\u65b0\u91c7\u6837 Series\uff0c\u8fd4\u56de\u91cd\u91c7\u6837\u5bf9\u8c61",(0,a.jsx)(n.code,{children:"dataframe.Resampler"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"Series.resample(period, timeline) #\u5305\u542b\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4ee3\u8868\u91c7\u6837\u95f4\u9694\uff0c\u7b2c\u4e8c\u4e2a\u4ee3\u8868\u65f6\u95f4\u7d22\u5f15\n\n# \u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 08:59:51'),\n    Timestamp('2013-01-01 08:59:52'),\n    Timestamp('2013-01-01 08:59:53'),\n    Timestamp('2013-01-01 08:59:54'),\n    Timestamp('2013-01-01 09:00:55'),\n    Timestamp('2013-01-01 09:00:56'),\n    Timestamp('2013-01-01 09:00:57'),\n    Timestamp('2013-01-01 09:00:58'),\n    Timestamp('2013-01-01 09:00:59'),\n    Timestamp('2013-01-01 09:01:00'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\ns1 = d1[\"price\"]\nr1 = s1.resample('5s', timeline=d1[\"timeline\"])\nreturn r1 # \u8fd4\u56de\"dataframe.Resampler\"\u5c5e\u6027\u5bf9\u8c61\n"})}),"\n",(0,a.jsx)(n.h3,{id:"sort_values",children:"sort_values"}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9 Series \u8fdb\u884c\u6392\u5e8f\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'Series.sort_values(ascending=False, na_position="First") #\u5305\u542b"ascending"\u53c2\u6570\u4ee3\u8868\u201c\u662f\u5426\u4e0a\u5347\u6392\u5217\u201d\uff0c\u9ed8\u8ba4\u4e3a"True"\uff0c\u4e0b\u964d\u6392\u5217\u4e3a"False"\uff1b"na_position"\u8868\u793a\u7f3a\u5931\u503c\u4f4d\u7f6e\uff0c\u53ef\u9009\u62e9"First"\u6216\u8005"Last"\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [2, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })\ns1 = d1["age"]\nreturn s1.sort_values(ascending=False) #\u964d\u5e8f\u6392\u5217\uff0c\u8fd4\u56de[3, 2, 1, 1, 1]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},3006:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var a=s(9474);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);