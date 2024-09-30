"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[8683],{8060:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>t});var r=a(6070),d=a(1100);const l={title:"DataFrame",sidebar_position:3},s=void 0,i={id:"query/dql/dataframe",title:"DataFrame",description:"\u5728 DQL\uff08Data Query Language\uff09\u4e2d\uff0cDataFrame \u662f\u4e00\u4e2a\u4e8c\u7ef4\u7684\u3001\u5e26\u6709\u6807\u7b7e\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u5b58\u50a8\u548c\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u3002\u5b83\u7c7b\u4f3c\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u7684\u8868\u683c\uff0c\u5176\u4e2d\u6bcf\u4e00\u5217\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u3002DataFrame \u901a\u5e38\u7531\u884c\u548c\u5217\u7ec4\u6210\uff0c\u6bcf\u4e00\u884c\u8868\u793a\u6570\u636e\u96c6\u4e2d\u7684\u4e00\u4e2a\u6837\u672c\uff0c\u800c\u6bcf\u4e00\u5217\u5219\u8868\u793a\u4e00\u4e2a\u7279\u5f81\u6216\u5c5e\u6027\u3002",source:"@site/docs/query/02_dql/dataframe.md",sourceDirName:"query/02_dql",slug:"/query/dql/dataframe",permalink:"/datadata-docs/docs/query/dql/dataframe",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/02_dql/dataframe.md",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1723536826e3,sidebarPosition:3,frontMatter:{title:"DataFrame",sidebar_position:3},sidebar:"docs",previous:{title:"Series",permalink:"/datadata-docs/docs/query/dql/series"},next:{title:"Timestamp",permalink:"/datadata-docs/docs/query/dql/timestamp"}},c={},t=[{value:"\u521b\u5efa\u65b9\u6cd5",id:"\u521b\u5efa\u65b9\u6cd5",level:2},{value:"\u67e5\u8be2\u521b\u5efa",id:"\u67e5\u8be2\u521b\u5efa",level:3},{value:"\u901a\u8fc7\u5b57\u5178\u521b\u5efa",id:"\u901a\u8fc7\u5b57\u5178\u521b\u5efa",level:3},{value:"\u901a\u8fc7\u5b57\u5178\u5217\u8868\u521b\u5efa",id:"\u901a\u8fc7\u5b57\u5178\u5217\u8868\u521b\u5efa",level:3},{value:"\u901a\u8fc7\u5217\u8868\u521b\u5efa",id:"\u901a\u8fc7\u5217\u8868\u521b\u5efa",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"columns",id:"columns",level:3},{value:"shape",id:"shape",level:3},{value:"empty",id:"empty",level:3},{value:"has_more",id:"has_more",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"head",id:"head",level:3},{value:"tail",id:"tail",level:3},{value:"rename",id:"rename",level:3},{value:"items",id:"items",level:3},{value:"iterrows",id:"iterrows",level:3},{value:"to_list",id:"to_list",level:3},{value:"append",id:"append",level:3},{value:"ffill",id:"ffill",level:3},{value:"bfill",id:"bfill",level:3},{value:"fillna",id:"fillna",level:3},{value:"apply",id:"apply",level:3},{value:"rolling",id:"rolling",level:3},{value:"groupby",id:"groupby",level:3},{value:"resample",id:"resample",level:3},{value:"sort_values",id:"sort_values",level:3},{value:"pivot",id:"pivot",level:3},{value:"concat",id:"concat",level:3},{value:"drop_duplicates",id:"drop_duplicates",level:3},{value:"min",id:"min",level:3},{value:"max",id:"max",level:3},{value:"std",id:"std",level:3},{value:"var",id:"var",level:3},{value:"sum",id:"sum",level:3},{value:"mean",id:"mean",level:3},{value:"median",id:"median",level:3},{value:"mode",id:"mode",level:3},{value:"abs",id:"abs",level:3},{value:"round",id:"round",level:3},{value:"diff",id:"diff",level:3},{value:"cumprod",id:"cumprod",level:3},{value:"pct_change",id:"pct_change",level:3},{value:"count",id:"count",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5728 DQL\uff08Data Query Language\uff09\u4e2d\uff0cDataFrame \u662f\u4e00\u4e2a\u4e8c\u7ef4\u7684\u3001\u5e26\u6709\u6807\u7b7e\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u5b58\u50a8\u548c\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u3002\u5b83\u7c7b\u4f3c\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u7684\u8868\u683c\uff0c\u5176\u4e2d\u6bcf\u4e00\u5217\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u3002DataFrame \u901a\u5e38\u7531\u884c\u548c\u5217\u7ec4\u6210\uff0c\u6bcf\u4e00\u884c\u8868\u793a\u6570\u636e\u96c6\u4e2d\u7684\u4e00\u4e2a\u6837\u672c\uff0c\u800c\u6bcf\u4e00\u5217\u5219\u8868\u793a\u4e00\u4e2a\u7279\u5f81\u6216\u5c5e\u6027\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 DQL \u4e2d\uff0cDataFrame \u53ef\u4ee5\u901a\u8fc7\u5404\u79cd\u65b9\u5f0f\u521b\u5efa\uff0c\u5305\u62ec\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6570\u636e\u3001\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u6570\u636e\u3001\u4ece\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u8f6c\u6362\u800c\u6765\u7b49\u3002\u4e00\u65e6\u521b\u5efa\u4e86 DataFrame\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u64cd\u4f5c\u5bf9\u5176\u8fdb\u884c\u5904\u7406\uff0c\u4f8b\u5982\u8fc7\u6ee4\u3001\u6392\u5e8f\u3001\u5206\u7ec4\u3001\u5408\u5e76\u7b49\uff0c\u4ee5\u4fbf\u8fdb\u884c\u6570\u636e\u5206\u6790\u548c\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u603b\u4e4b\uff0cDataFrame \u5728 DQL \u4e2d\u662f\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u4e14\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u63d0\u4f9b\u4e86\u7075\u6d3b\u800c\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u4f7f\u5f97\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u53d8\u5f97\u66f4\u52a0\u65b9\u4fbf\u548c\u9ad8\u6548\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa\u65b9\u6cd5",children:"\u521b\u5efa\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u8be2\u521b\u5efa",children:"\u67e5\u8be2\u521b\u5efa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"d1 = query(\"select * from daily_quotes.dqf where product_id = 'FG' limit 100\")\nreturn d1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7\u5b57\u5178\u521b\u5efa",children:"\u901a\u8fc7\u5b57\u5178\u521b\u5efa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dict = {"name": ["js", "go"], "count": [1, 2]}\nd = DataFrame(dict)\nreturn d\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7\u5b57\u5178\u5217\u8868\u521b\u5efa",children:"\u901a\u8fc7\u5b57\u5178\u5217\u8868\u521b\u5efa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'dictList = [{ "name": "js", "count": 1 }, { "name": "go", "count": 2 }]\nd = DataFrame(dictList)\nreturn d\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7\u5217\u8868\u521b\u5efa",children:"\u901a\u8fc7\u5217\u8868\u521b\u5efa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'d = DataFrame([["js", 1],["go",2]], columns=["name","count"])\nreturn d\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,r.jsx)(n.h3,{id:"columns",children:"columns"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u5217\u540d\u5217\u8868\uff1a",(0,r.jsx)(n.code,{children:"Type list"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'d = DataFrame([["js", 1],["go",2]], columns=["name","count"])\nreturn d.columns #\u8fd4\u56de\u5217\u540d\u5217\u8868\uff1a["name","count"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"shape",children:"shape"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de DataFrame \u5f62\u72b6\uff08\u957f\u5ea6\u4e58\u4ee5\u5bbd\u5ea6\uff09\uff1a",(0,r.jsx)(n.code,{children:"Type (int, int)"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'d = DataFrame([["js", 1],["go",2]], columns=["name","count"])\nreturn d.shape #\u8fd4\u56deDataFrame\u5f62\u72b6\uff1a(2, 2)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"empty",children:"empty"}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u8be2 DataFrame \u662f\u5426\u4e3a\u7a7a\uff1a",(0,r.jsx)(n.code,{children:"Type bool"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'d = DataFrame(columns=["name","count"])\nreturn d.empty #\u7a7a\u7684 DataFrame \uff0c\u8fd4\u56de"True"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"has_more",children:"has_more"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"query"})," \u8fd4\u56de\u7684\u6570\u636e\u5e76\u975e\u90fd\u662f\u5b8c\u6574\u7684\u6570\u636e\uff08\u6700\u591a\u652f\u6301 10000 \u884c\uff09\uff0c\u53ef\u4f7f\u7528\u8be5\u5c5e\u6027\u8fdb\u884c\u5224\u65ad\u6307\u793a\u662f\u5426\u8fd8\u6709\u66f4\u591a\u7684\u5185\u5bb9\u53ef\u4f9b\u5904\u7406\u6216\u8fed\u4ee3\uff1a",(0,r.jsx)(n.code,{children:"Type bool"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'data = query("select * from shfe.f_position_ranking")\nreturn data.has_more #\u5b58\u5728\u66f4\u591a\u5185\u5bb9\uff0c\u8fd4\u56de"True"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"head",children:"head"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de DataFrame \u7684\u524d\u51e0\u884c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.head(n) # "n"\u4ee3\u8868\u8fd4\u56de\u884c\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a5\n\n# \u793a\u8303\nd = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])\nreturn d.head() #\u8fd4\u56de\u524d\u4e94\u884c\u6570\u636e\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tail",children:"tail"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de DataFrame \u7684\u540e\u51e0\u884c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.tail(n) # "n"\u4ee3\u8868\u8fd4\u56de\u884c\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a5\n\n# \u793a\u8303\nd = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])\nreturn d.tail() #\u8fd4\u56de\u540e\u4e94\u884c\u6570\u636e\n'})}),"\n",(0,r.jsx)(n.h3,{id:"rename",children:"rename"}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u547d\u540d DataFrame \u7684\u5217\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.rename()\n\n# \u793a\u8303\nd = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])\nd2 = d.rename({ "name": "language" })\nreturn d2.columns #\u8fd4\u56de\u91cd\u547d\u540d\u540e\u5217\u540d\uff1a["language", "count"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"items",children:"items"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de items \u5217\u5bf9\u8c61\uff0c\u5305\u62ec\u5177\u4f53\u5217\u540d\u548c\u5217\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.items()\n\n# \u793a\u8303\nd = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])\nreturn d.items() #\u8fd4\u56de\u5bf9\u8c61"dataframe.DataFrameItems"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"iterrows",children:"iterrows"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de items \u884c\u5bf9\u8c61\uff0c\u5305\u62ec\u5177\u4f53\u884c\u548c\u884c\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.iterrows()\n\n# \u793a\u8303\nd = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])\nreturn d.iterrows() #\u8fd4\u56de\u5bf9\u8c61"dataframe.DataFrameRows"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"to_list",children:"to_list"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06 DataFrame \u8f6c\u6362\u4e3a\u5217\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.to_list()\n\n# \u793a\u8303\nd = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])\nreturn d.to_list() #\u8fd4\u56de\u5217List\n'})}),"\n",(0,r.jsx)(n.h3,{id:"append",children:"append"}),"\n",(0,r.jsx)(n.p,{children:"\u589e\u52a0\u4e00\u884c\u6570\u636e\u9644\u52a0\u5230\u539f\u59cb DataFrame\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.append()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nd1.append({ "name": "c", "count": 16 })\nreturn d1  #\u8fd4\u56de\u65b0\u589e\u52a0\u884c\u540e\u7684DataFrame\n'})}),"\n",(0,r.jsx)(n.h3,{id:"ffill",children:"ffill"}),"\n",(0,r.jsx)(n.p,{children:"\u5411\u524d\u586b\u5145\u7f3a\u5931\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.ffill(inplace = False) # "inplace"\u4ee3\u8868\u662f\u5426\u66f4\u65b0\uff0c\u9ed8\u8ba4\u503c\u662f"False"\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })\nreturn d1.ffill() #\u7f3a\u5931\u503c\u586b\u5145\u4e3a\u524d\u4e00\u4e2a\u4e0d\u4e3a\u7a7a\u7684\u6570\u503c\n'})}),"\n",(0,r.jsx)(n.h3,{id:"bfill",children:"bfill"}),"\n",(0,r.jsx)(n.p,{children:"\u5411\u540e\u586b\u5145\u7f3a\u5931\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.bfill(inplace = False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })\nreturn d1.ffill() #\u7f3a\u5931\u503c\u586b\u5145\u4e3a\u540e\u4e00\u4e2a\u4e0d\u4e3a\u7a7a\u7684\u6570\u503c\n'})}),"\n",(0,r.jsx)(n.h3,{id:"fillna",children:"fillna"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u56fa\u5b9a\u6570\u503c\u586b\u5145\u7f3a\u5931\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.fillna(n, inplace = False) #\u4f7f\u7528"n"\u503c\u586b\u5145\u7f3a\u5931\u503c\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })\nreturn d1.fillna(0) #\u586b\u5145\u7f3a\u5931\u503c\u4e3a0\n'})}),"\n",(0,r.jsx)(n.h3,{id:"apply",children:"apply"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9 DataFrame \u7684\u6bcf\u4e00\u5217\u5e94\u7528\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.apply()\n\n# \u793a\u8303\nd1 = DataFrame({"count": [12, 13, 14, 15]})\nreturn d1.apply(lambda x: x * 2) #\u8fd4\u56de[24, 26, 28, 30]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"rolling",children:"rolling"}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e\u8bbe\u5b9a\u53c2\u6570\uff0c\u8fd4\u56de\u6eda\u52a8\u7a97\u53e3\u5bf9\u8c61",(0,r.jsx)(n.code,{children:"dataframe.Rolling"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.rolling(window=n1, min_periods=n2) # "windows"\u4ee3\u8868\u6ed1\u52a8\u7a97\u53e3\u5927\u5c0f\uff0c\u201cmin_period\u201d\u4ee3\u8868\u6700\u5c0f\u8ba1\u7b97\u8303\u56f4\n\n# \u793a\u8303\nd1 = DataFrame({"count": [12, 13, 14, 15]})\nreturn d1.rolling(window=3, min_periods=1)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u5305\u542b\u65f6\u95f4\u5e8f\u5217\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"rolling"})," \u65b9\u6cd5\u6765\u8fdb\u884c\u6ed1\u52a8\u7a97\u53e3\u8ba1\u7b97\u3002\u53ef\u4ee5\u6307\u5b9a\u5177\u4f53\u7684\u6ed1\u52a8\u5468\u671f\uff0c\u4f8b\u5982\u79d2 (",(0,r.jsx)(n.code,{children:"s"}),")\u3001\u5206\u949f (",(0,r.jsx)(n.code,{children:"m"}),")\u3001\u5c0f\u65f6 (",(0,r.jsx)(n.code,{children:"h"}),")\uff0c\u5e76\u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"timeline"})," \u53c2\u6570\u4f5c\u4e3a\u65f6\u95f4\u5e8f\u5217\u7684\u7d22\u5f15\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"df.rolling(period, timeline) # \"period\"\u4ee3\u8868\u6ed1\u52a8\u65f6\u95f4\u5468\u671f\uff0c\u201ctimeline\u201d\u4ee3\u8868\u65f6\u95f4\u5e8f\u5217\u7d22\u5f15\n\n# \u793a\u8303\nd1 = DataFrame({\n  \"count\": [4, 6, 1, 4, 7, 1, 5, 8, 2, 9],\n  \"age\": [3, 2, 8, 2, 0, 8, 4, 1, 3, 5],\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:12'),\n  ],\n})\nr1 = d1[[\"count\",\"age\"]].rolling('3s', timeline=d1[\"timeline\"])\nreturn r1# \u8fd4\u56de\"dataframe.Rolling\"\u5c5e\u6027\u5bf9\u8c61\n"})}),"\n",(0,r.jsx)(n.h3,{id:"groupby",children:"groupby"}),"\n",(0,r.jsxs)(n.p,{children:["\u6309\u7167\u6307\u5b9a\u6761\u4ef6\u5206\u7ec4 DataFrame\uff0c\u8fd4\u56de",(0,r.jsx)(n.code,{children:"dataframe.DataFrameGroupBy"}),"\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.groupby()\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\ng1 = d1.groupby(["name"])\nreturn g1\n'})}),"\n",(0,r.jsx)(n.h3,{id:"resample",children:"resample"}),"\n",(0,r.jsxs)(n.p,{children:["\u91cd\u65b0\u91c7\u6837\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u3002\u8fd4\u56de\u91cd\u91c7\u6837\u5bf9\u8c61",(0,r.jsx)(n.code,{children:"dataframe.Resampler"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"df.resample() #\u5305\u542b\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4ee3\u8868\u91c7\u6837\u95f4\u9694\uff0c\u7b2c\u4e8c\u4e2a\u4ee3\u8868\u65f6\u95f4\u7d22\u5f15\n\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 08:59:51'),\n    Timestamp('2013-01-01 08:59:52'),\n    Timestamp('2013-01-01 08:59:53'),\n    Timestamp('2013-01-01 08:59:54'),\n    Timestamp('2013-01-01 09:00:55'),\n    Timestamp('2013-01-01 09:00:56'),\n    Timestamp('2013-01-01 09:00:57'),\n    Timestamp('2013-01-01 09:00:58'),\n    Timestamp('2013-01-01 09:00:59'),\n    Timestamp('2013-01-01 09:01:00'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\nreturn r1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sort_values",children:"sort_values"}),"\n",(0,r.jsx)(n.p,{children:"\u6309\u7167\u6307\u5b9a\u5217\u7684\u503c\u6392\u5e8f DataFrame\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.sort_values([\'col1\'...],  ascending=False na_position="First") # "\u7b2c\u4e00\u4e2a\u53c2\u6570\u7528\u4e8e\u6307\u5b9a DataFrame \u6309\u7167\u54ea\u4e9b\u5217\u8fdb\u884c\u6392\u5e8f\u3002\u60a8\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u5217\u540d\u7684\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u5217\u540d\u7684\u5217\u8868\u4f5c\u4e3a\u53c2\u6570\u3002\u5982\u679c\u4f20\u9012\u4e86\u591a\u4e2a\u5217\u540d\uff0cDataFrame \u5c06\u6309\u7167\u8fd9\u4e9b\u5217\u7684\u987a\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0c\u5373\u9996\u5148\u6309\u7167\u7b2c\u4e00\u4e2a\u5217\u540d\u6392\u5e8f\uff0c\u7136\u540e\u5728\u7b2c\u4e00\u4e2a\u5217\u540d\u76f8\u540c\u65f6\u6309\u7167\u7b2c\u4e8c\u4e2a\u5217\u540d\u6392\u5e8f\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff1b"ascending"\u4ee3\u8868\u662f\u5426\u4e0a\u5347\u6392\u5e8f\uff0c\u9ed8\u8ba4\u4e3a"True"\uff1b"na_position"\u8868\u793a\u7f3a\u5931\u503c\u4f4d\u7f6e\uff0c\u53ef\u9009\u62e9"First"\u6216\u8005"Last"\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })\nd1 = d1.sort_values(by=[\'name\', \'count\'])\nreturn d1 #\u8fd4\u56de\u6309\u7167\'name\'\u548c\'count\'\u5217\u6392\u5e8f\u540e\u7684\u7ed3\u679c\n'})}),"\n",(0,r.jsx)(n.h3,{id:"pivot",children:"pivot"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u91cd\u5851\u6570\u636e\u8868\uff0c\u5c06\u6307\u5b9a\u5217\u7684\u503c\u65cb\u8f6c\u81f3\u65b0\u7684\u7d22\u5f15\u5217\u548c\u5217\u4e2d\uff0c\u5177\u4f53\u5305\u62ec\u4ee5\u4e0b\u4e09\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"index"}),"\uff1a\u7528\u4e8e\u6307\u5b9a\u65b0 DataFrame \u7684\u884c\u7d22\u5f15\u7684\u5217\u3002\u53ef\u4ee5\u662f\u4e00\u4e2a\u5217\u540d\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"columns"}),"\uff1a\u7528\u4e8e\u6307\u5b9a\u65b0 DataFrame \u7684\u5217\u7d22\u5f15\u7684\u5217\u3002\u53ef\u4ee5\u662f\u4e00\u4e2a\u5217\u540d\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"values"}),"\uff1a\u7528\u4e8e\u6307\u5b9a\u586b\u5145\u65b0 DataFrame \u7684\u503c\u7684\u5217\u3002\u53ef\u4ee5\u662f\u4e00\u4e2a\u5217\u540d\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8"}),": \u5f53\u6570\u636e\u4e2d\u5b58\u5728\u91cd\u590d\u9879\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528 pivot \u65b9\u6cd5\u4f1a\u62a5\u9519\uff0c\u9700\u8981\u5148\u4f7f\u7528 groupby \u65b9\u6cd5\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ec4\u5e76\u8fdb\u884c\u805a\u5408\u64cd\u4f5c\uff08\u5982\u6c42\u5e73\u5747\u503c\u3001\u603b\u548c\u7b49\uff09\uff0c\u7136\u540e\u518d\u4f7f\u7528 pivot \u8fdb\u884c\u6570\u636e\u91cd\u5851\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"df.pivot(index='...', columns='...', values='...')\n\n# \u793a\u8303\ndata = {\n  'date': ['2024-05-01', '2024-05-01', '2024-05-01', '2024-05-01'],\n  'city': ['Beijing', 'Shanghai', 'Beijing', 'Shanghai'],\n  'temperature': [25, 20, 26, 21]\n}\nd1 = DataFrame(data)\n\n# \u76f4\u63a5\u8c03\u7528 pivot \u65b9\u6cd5\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u6570\u636e\u4e2d\u5b58\u5728\u91cd\u590d\u9879\nassert.fails(lambda: d1.pivot(index='date', columns='city', values='temperature'), 'there are duplicates in the data, please groupby first')\n\n# \u9700\u8981\u5148\u4f7f\u7528 groupby \u65b9\u6cd5\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ec4\nd2 = d1.groupby(['date', 'city']).mean()\n\n# \u7136\u540e\u518d\u8fdb\u884c pivot \u64cd\u4f5c\nd3 = d2.pivot(index='date', columns='city', values='temperature')\n\n# \u68c0\u67e5\u5217\u540d\u662f\u5426\u7b26\u5408\u9884\u671f\nassert.eq(d3.columns, [\"temperature_Beijing\", \"temperature_Shanghai\"])\n"})}),"\n",(0,r.jsx)(n.h3,{id:"concat",children:"concat"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4e8e\u5c06\u591a\u4e2a\u6570\u636e\u5bf9\u8c61\u6cbf\u6307\u5b9a\u8f74\u5408\u5e76\u5728\u4e00\u8d77\u3002\u5177\u4f53\u5305\u62ec\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"objs"}),"\uff1a\u7528\u4e8e\u6307\u5b9a\u9700\u8981\u5408\u5e76\u7684\u5bf9\u8c61\uff0c\u53ef\u4ee5\u662f Series \u6216 DataFrame \u7684\u5217\u8868\u6216\u5b57\u5178\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"axis"}),"\uff1a\u7528\u4e8e\u6307\u5b9a\u5408\u5e76\u7684\u8f74\u3002\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"0"}),"\uff08\u6309\u884c\u5408\u5e76\uff09\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"1"}),"\uff0c\u5219\u6309\u5217\u5408\u5e76\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"join"}),"\uff1a\u7528\u4e8e\u6307\u5b9a\u5408\u5e76\u7684\u65b9\u5f0f\u3002\u53ef\u4ee5\u662f ",(0,r.jsx)(n.code,{children:'"outer"'}),"\uff08\u9ed8\u8ba4\uff09\u8868\u793a\u5e76\u96c6\uff0c\u5373\u5408\u5e76\u6240\u6709\u5217\u6216\u884c\uff1b\u6216\u8005 ",(0,r.jsx)(n.code,{children:'"inner"'})," \u8868\u793a\u4ea4\u96c6\uff0c\u5373\u53ea\u5408\u5e76\u90a3\u4e9b\u5728\u6240\u6709\u6570\u636e\u4e2d\u90fd\u5b58\u5728\u7684\u5217\u6216\u884c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'concat([d1, d2], axis = 0/1, join = "outer"/"inner")\n\n# \u793a\u8303\nd1 = DataFrame({\n  "year": [2021, 2022, 2023, 2024],\n  "month": [1, 2, 3, 4],\n  "price": [1, 2, 3, 4],\n})\nd2 = DataFrame({\n  "year": [2024, 2021, 2022, 2023],\n  "month": [5, 1, 2, 3],\n  "count": [4, 3, 2, 1],\n  "price": [1, 2, 3, 4],\n})\n# \u9ed8\u8ba4 outer\nd3 = concat([d1, d2])\nassert.eq(d3.shape, (8, 4))\nassert.eq(list(d3["count"]), [None, None, None, None, 4, 3, 2, 1])\n# inner\nd3 = concat([d1, d2], join="inner")\nassert.eq(d3.shape, (8, 3))\nassert.eq(d3.columns, ["year", "month", "price"])\n\n# \u5408\u5e76 DataFrame \u548c Series\ns1 = Series(["a", "b", "c"], name="s1")\nd3 = concat([d1, d2, s1])\nassert.eq(d3.shape, (11, 5))\nassert.eq(d3.columns, ["year", "month", "price", "count", "s1"])\nassert.eq(list(d3[\'s1\']), [None, None, None, None, None, None, None, None, "a", "b", "c"])\n\nd3 = concat([d1, d2, s1], join="inner")\nassert.eq(d3.shape, (0, 0))\nassert.eq(d3.empty, True)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"drop_duplicates",children:"drop_duplicates"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de DataFrame \u4e2d\u7684\u552f\u4e00\u884c\uff0c\u53bb\u9664\u91cd\u590d\u884c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'DataFrame.drop_duplicates()\n\n# \u793a\u8303\ndata = DataFrame({\n  "year": [2022, 2022, 2023, 2024],\n  "month": [2, 2, 2, 2],\n  "price": [2, 2, 3, 3],\n})\n\nreturn data.drop_duplicates()\n# \u8fd4\u56de\n#    year  month  price\n# 0  2022      2      2\n# 2  2023      2      3\n# 3  2024      2      3\n'})}),"\n",(0,r.jsx)(n.h3,{id:"min",children:"min"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u6700\u5c0f\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.min(skipna=True\uff0cnumeric_only=False) #\u5305\u542b\u53c2\u6570"skipna"\uff0c\u4ee3\u8868\u662f\u5426\u5ffd\u7565\u7f3a\u5931\u503c\uff0c\u9ed8\u8ba4\u4e3a"True"\uff1b\u53c2\u6570"numeric_only"\uff0c\u4ee3\u8868\u662f\u5426\u53ea\u8ba1\u7b97\u6570\u503c\u5217\uff0c\u9ed8\u8ba4\u4e3a"False"\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nreturn d1.min(numeric_only=True) #\u8fd4\u56de count \u5217\u6700\u5c0f\u503c\uff1a12\n'})}),"\n",(0,r.jsx)(n.h3,{id:"max",children:"max"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u6700\u5927\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.max(skipna=True\uff0cnumeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nreturn d1.max(numeric_only=True) #\u8fd4\u56de count \u5217\u6700\u5927\u503c\uff1a15\n'})}),"\n",(0,r.jsx)(n.h3,{id:"std",children:"std"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u6807\u51c6\u5dee\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.std(skipna=True, numeric_only=False, ddof=n) #\u53c2\u6570"ddof"\uff0c\u8868\u793a\u7528\u4e8e\u6807\u51c6\u5dee\u8ba1\u7b97\u7684\u81ea\u7531\u5ea6\u8c03\u6574\uff08Delta Degrees of Freedom\uff09\u3002n\u4ee3\u8868\u81ea\u7531\u5ea6\u8c03\u6574\u6570\u503c\uff0c\u5177\u4f53\u6307\u4ece\u6837\u672c\u6570\u91cf\u4e2d\u51cf\u53bb\u7684\u6570\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cddof=1\uff0c\u8868\u793a\u8ba1\u7b97\u6837\u672c\u6807\u51c6\u5dee\u3002\u5982\u679c\u9700\u8981\u8ba1\u7b97\u603b\u4f53\u6807\u51c6\u5dee\uff0c\u53ef\u4ee5\u5c06ddof\u8bbe\u7f6e\u4e3a0\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nreturn d1.std(numeric_only=True) #\u8fd4\u56de count \u5217\u6807\u51c6\u5dee\uff1a1.2909944487358056\n'})}),"\n",(0,r.jsx)(n.h3,{id:"var",children:"var"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u65b9\u5dee\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.var(skipna=True, numeric_only=False, ddof=n)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nreturn d1.var(numeric_only=True) #\u8fd4\u56de count \u5217\u65b9\u5dee\uff1a1.6666666666666667\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sum",children:"sum"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u603b\u548c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.sum(skipna=True\uff0cnumeric_only=False)\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nreturn d1.sum(numeric_only=True)  #\u8fd4\u56de"count"\u5217\u603b\u548c54\n'})}),"\n",(0,r.jsx)(n.h3,{id:"mean",children:"mean"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u5e73\u5747\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.mean(skipna=True\uff0cnumeric_only=False) #\u5f53\u5b58\u5728\u975e\u6570\u503c\u5217\uff0c\u8fdb\u884c\u8ba1\u7b97\u4f1a\u8fd4\u56de\u9519\u8bef\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nreturn d1.mean(numeric_only=True)   #\u8fd4\u56de13.5\n'})}),"\n",(0,r.jsx)(n.h3,{id:"median",children:"median"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u4e2d\u4f4d\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.median(skipna=True\uff0cnumeric_only=False) #\u5f53\u5b58\u5728\u975e\u6570\u503c\u5217\uff0c\u8fdb\u884c\u8ba1\u7b97\u4f1a\u8fd4\u56de\u9519\u8bef\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })\nreturn d1.median(numeric_only=True)   #\u8fd4\u56de13.5\n'})}),"\n",(0,r.jsx)(n.h3,{id:"mode",children:"mode"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u4f17\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.mode(skipna=True\uff0cnumeric_only=False) #\u5f53\u5b58\u5728\u975e\u6570\u503c\u5217\uff0c\u8fdb\u884c\u8ba1\u7b97\u4f1a\u8fd4\u56de\u9519\u8bef\n\n# \u793a\u8303\nd1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 13, 15] })\nreturn d1.mode(numeric_only=True)   #\u8fd4\u56de13\n'})}),"\n",(0,r.jsx)(n.h3,{id:"abs",children:"abs"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u7edd\u5bf9\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.abs(skipna=True\uff0cnumeric_only=False) #\u5f53\u5b58\u5728\u975e\u6570\u503c\u5217\uff0c\u8fdb\u884c\u8ba1\u7b97\u4f1a\u8fd4\u56de\u9519\u8bef\n\n# \u793a\u8303\nd1 = DataFrame({"count": [12, 13, -13, 15] })\nreturn d1.abs(numeric_only=True)   #\u8fd4\u56de[12, 13, 13, 15]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"round",children:"round"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u6307\u5b9a\u4fdd\u7559\u5c0f\u6570\u70b9\u4f4d\u7684\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'Series.round(decimals=0) #decimals\u4ee3\u8868\u4fdd\u7559\u5c0f\u6570\uff0c\u9ed8\u8ba4\u4e3a0\n\n# \u793a\u8303\nd1 = DataFrame({"count": [12, 13.6, 13.1, 15] })\nreturn d1.round() #\u8fd4\u56de[12, 13, 13, 15]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"diff",children:"diff"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u8bbe\u5b9a\u9636\u6570\u5dee\u5206\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.diff(period=n) #\u8fd4\u56de\u6bcf\u4e00\u5217\u7684`n`\u7ea7\u5dee\u5206\u9636\u6570\uff0c\u9ed8\u8ba4\u4e3a1\uff1b\u5f53\u5305\u542b\u975e\u6570\u503c\u5217\u65f6\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\n# \u793a\u8303\nd1 = DataFrame({"count": [12, 13, 14, 15] })\nreturn d1.diff(1)  #\u8fd4\u56decount\u5217\u4e00\u9636\u5dee\u5206\uff1a[-, 1, 1, 1]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"cumprod",children:"cumprod"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u7d2f\u79ef\u4e58\u79ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.cumprod(skipna=True) #\u5f53\u5305\u542b\u975e\u6570\u503c\u5217\u65f6\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\n# \u793a\u8303\nd1 = DataFrame({ "count": [12, 13, 14, 15] })\nreturn d1.cumprod() #\u8fd4\u56decount\u5217\u7d2f\u79ef\u4e58\u79ef\uff1a[12, 156, 2184, 32760]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"pct_change",children:"pct_change"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u6bcf\u4e00\u5217\u7684\u767e\u5206\u6bd4\u53d8\u5316\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.pct_change(periods=1) #\u5305\u542b\u53c2\u6570"periods"\uff0c\u4ee3\u8868\u504f\u79fb\u5468\u671f\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff1b\u5f53\u5305\u542b\u975e\u6570\u503c\u5217\u65f6\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\n# \u793a\u8303\nd1 = DataFrame({"count": [12, 13, 14, 15] })\nreturn d1.pct_change()  #\u8fd4\u56decount\u5217\u504f\u79fb\u5468\u671f\u4e3a1\u7684\u767e\u5206\u6bd4\u53d8\u5316\uff1a[-, 0.08333333333333333, 0.07692307692307693, 0.07142857142857142]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"count",children:"count"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de DataFrame \u5404\u81ea\u5217\u4e2d\u975e\u7a7a\u503c(None)\u7684\u4e2a\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'df.count()\n\n# \u793a\u8303\ndata = DataFrame({\n  "year": [2021, 2022, 2023, 2024],\n  "month": [2, 2, None, 2],\n  "price": [2, 2, 3, 3],\n})\n\nreturn data.count() # \u8fd4\u56de\u5404\u81ea\u5217\u6709\u6548\u503c\u7684\u4e2a\u6570\uff1a4\uff0c3\uff0c4\n'})})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1100:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var r=a(758);const d={},l=r.createContext(d);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);