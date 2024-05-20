"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[6465],{8680:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var m=a(3274),i=a(3006);const s={title:"Resampler",sidebar_position:6},t=void 0,r={id:"query/dql/resampler",title:"Resampler",description:"\u65b9\u6cd5",source:"@site/docs/query/dql/resampler.md",sourceDirName:"query/dql",slug:"/query/dql/resampler",permalink:"/datadata-docs/docs/query/dql/resampler",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/dql/resampler.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1716177146,formattedLastUpdatedAt:"2024\u5e745\u670820\u65e5",sidebarPosition:6,frontMatter:{title:"Resampler",sidebar_position:6},sidebar:"docs",previous:{title:"Rolling",permalink:"/datadata-docs/docs/query/dql/rolling"},next:{title:"SeriesGroupBy",permalink:"/datadata-docs/docs/query/dql/series_group_by"}},p={},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"min",id:"min",level:3},{value:"max",id:"max",level:3},{value:"sum",id:"sum",level:3},{value:"std",id:"std",level:3},{value:"var",id:"var",level:3},{value:"mean",id:"mean",level:3},{value:"apply",id:"apply",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,m.jsx)(n.h3,{id:"min",children:"min"}),"\n",(0,m.jsx)(n.p,{children:"\u8fd4\u56de\u91cd\u65b0\u91c7\u6837\u540e\u7684\u6700\u5c0f\u503c\u3002"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-py",children:"dataframe.Resampler.min(skipna=True, numeric_only=False) #\u5305\u542b\u53c2\u6570\"skipna\"\uff0c\u4ee3\u8868\u662f\u5426\u5ffd\u7565\u7f3a\u5931\u503c\uff0c\u9ed8\u8ba4\u4e3a\"True\"\uff1b\u53c2\u6570\"numeric_only\"\uff0c\u4ee3\u8868\u662f\u5426\u53ea\u8ba1\u7b97\u6570\u503c\u5217\uff0c\u9ed8\u8ba4\u4e3a\"False\"\u3002\n\n#\u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:09'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\nreturn r1.min() #\u4ee55\u79d2\u4e3a\u91c7\u6837\u5468\u671f\uff0c\u8fd4\u56de\u5404\u4e2a\u91c7\u6837\u5468\u671f\u5185\u7684\u6700\u5c0f\u503c\n"})}),"\n",(0,m.jsx)(n.h3,{id:"max",children:"max"}),"\n",(0,m.jsx)(n.p,{children:"\u8fd4\u56de\u91cd\u65b0\u91c7\u6837\u540e\u7684\u6700\u5927\u503c\u3002"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-py",children:"dataframe.Resampler.max(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:09'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\nreturn r1.max() \n"})}),"\n",(0,m.jsx)(n.h3,{id:"sum",children:"sum"}),"\n",(0,m.jsx)(n.p,{children:"\u8fd4\u56de\u91cd\u65b0\u91c7\u6837\u540e\u7684\u603b\u548c\u3002"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-py",children:"dataframe.Resampler.sum(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:09'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\nreturn r1.sum() \n"})}),"\n",(0,m.jsx)(n.h3,{id:"std",children:"std"}),"\n",(0,m.jsx)(n.p,{children:"\u8fd4\u56de\u91cd\u65b0\u91c7\u6837\u540e\u7684\u6807\u51c6\u5dee\u3002"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-py",children:"dataframe.Resampler.std(skipna=True, numeric_only=False, ddof=n) #\u53c2\u6570\"ddof\"\uff0c\u8868\u793a\u7528\u4e8e\u6807\u51c6\u5dee\u8ba1\u7b97\u7684\u81ea\u7531\u5ea6\u8c03\u6574\uff08Delta Degrees of Freedom\uff09\u3002n\u4ee3\u8868\u81ea\u7531\u5ea6\u8c03\u6574\u6570\u503c\uff0c\u5177\u4f53\u6307\u4ece\u6837\u672c\u6570\u91cf\u4e2d\u51cf\u53bb\u7684\u6570\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cddof=1\uff0c\u8868\u793a\u8ba1\u7b97\u6837\u672c\u6807\u51c6\u5dee\u3002\u5982\u679c\u9700\u8981\u8ba1\u7b97\u603b\u4f53\u6807\u51c6\u5dee\uff0c\u53ef\u4ee5\u5c06ddof\u8bbe\u7f6e\u4e3a0\u3002\n\n#\u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:09'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\nreturn r1.std() \n"})}),"\n",(0,m.jsx)(n.h3,{id:"var",children:"var"}),"\n",(0,m.jsx)(n.p,{children:"\u8fd4\u56de\u91cd\u65b0\u91c7\u6837\u540e\u7684\u65b9\u5dee\u3002"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-py",children:"dataframe.Resampler.var(skipna=True, numeric_only=False, ddof=n)\n\n#\u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:09'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\nreturn r1.var() \n"})}),"\n",(0,m.jsx)(n.h3,{id:"mean",children:"mean"}),"\n",(0,m.jsx)(n.p,{children:"\u8fd4\u56de\u91cd\u65b0\u91c7\u6837\u540e\u7684\u5e73\u5747\u503c\u3002"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-py",children:"dataframe.Resampler.mean(skipna=True, numeric_only=False)\n\n#\u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:09'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\nreturn r1.mean() \n"})}),"\n",(0,m.jsx)(n.h3,{id:"apply",children:"apply"}),"\n",(0,m.jsx)(n.p,{children:"\u5c06\u51fd\u6570\u5e94\u7528\u5230\u91cd\u65b0\u91c7\u6837\u540e\u7684\u6570\u636e\u3002"}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:"language-py",children:"dataframe.Resampler.apply()\n\n#\u793a\u8303\nd1 = DataFrame({\n  \"timeline\": [\n    Timestamp('2013-01-01 09:00:00'),\n    Timestamp('2013-01-01 09:00:01'),\n    Timestamp('2013-01-01 09:00:02'),\n    Timestamp('2013-01-01 09:00:03'),\n    Timestamp('2013-01-01 09:00:04'),\n    Timestamp('2013-01-01 09:00:05'),\n    Timestamp('2013-01-01 09:00:06'),\n    Timestamp('2013-01-01 09:00:07'),\n    Timestamp('2013-01-01 09:00:08'),\n    Timestamp('2013-01-01 09:00:09'),\n  ],\n  \"price\": [\n    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,\n  ]\n})\nr1 = d1[[\"price\"]].resample('5s', timeline=d1[\"timeline\"])\ndef cal_mean(x):\n  return x[\"price\"].mean()\nreturn r1.apply(cal_mean)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(d,{...e})}):d(e)}},3006:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var m=a(9474);const i={},s=m.createContext(i);function t(e){const n=m.useContext(s);return m.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),m.createElement(s.Provider,{value:n},e.children)}}}]);