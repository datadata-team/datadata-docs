"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[510],{83162:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>t});var l=s(86070),d=s(11100);const r={title:"\u67e5\u8be2\u53c2\u6570"},i=void 0,a={id:"query/params/index",title:"\u67e5\u8be2\u53c2\u6570",description:"\u67e5\u8be2\u53c2\u6570\u662f\u6307\u5728\u67e5\u8be2\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5360\u4f4d\u7b26\u6765\u4f20\u9012\u7684\u52a8\u6001\u503c\u3002\u5360\u4f4d\u7b26\u7684\u8bed\u6cd5\u4e3a {{ var }}\u3002",source:"@site/docs/03_query/03_params/index.md",sourceDirName:"03_query/03_params",slug:"/query/params/",permalink:"/datadata-docs/en-US/docs/query/params/",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/03_query/03_params/index.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1734674186e3,frontMatter:{title:"\u67e5\u8be2\u53c2\u6570"},sidebar:"docs",previous:{title:"Time \u6a21\u5757",permalink:"/datadata-docs/en-US/docs/query/dql/time"},next:{title:"\u6570\u636e\u4e0b\u94bb",permalink:"/datadata-docs/en-US/docs/query/drilling/"}},c={},t=[{value:"\u53c2\u6570\u7c7b\u578b",id:"\u53c2\u6570\u7c7b\u578b",level:2},{value:"Text",id:"text",level:3},{value:"Number",id:"number",level:3},{value:"Date",id:"date",level:3},{value:"Date Range",id:"date-range",level:3},{value:"List",id:"list",level:3},{value:"Dynamic List",id:"dynamic-list",level:3},{value:"Query Based List",id:"query-based-list",level:3},{value:"\u53c2\u6570\u8054\u52a8",id:"\u53c2\u6570\u8054\u52a8",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u5982\u4f55\u8c03\u6574\u53c2\u6570\u7684\u987a\u5e8f\uff1f",id:"\u5982\u4f55\u8c03\u6574\u53c2\u6570\u7684\u987a\u5e8f",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u67e5\u8be2\u53c2\u6570\u662f\u6307\u5728\u67e5\u8be2\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5360\u4f4d\u7b26\u6765\u4f20\u9012\u7684\u52a8\u6001\u503c\u3002\u5360\u4f4d\u7b26\u7684\u8bed\u6cd5\u4e3a ",(0,l.jsx)(n.code,{children:"{{ var }}"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 SQL \u67e5\u8be2\u4e2d\uff0c\u53ef\u4ee5\u5728\u4efb\u610f\u4f4d\u7f6e\u63d2\u5165 ",(0,l.jsx)(n.code,{children:"{{ var }}"})," \u6765\u521b\u5efa\u4e00\u4e2a\u53c2\u6570\uff0c\u4f8b\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select * from table where id = {{ id }}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 DQL \u4e2d\uff0c\u53ea\u80fd\u5728 ",(0,l.jsx)(n.a,{href:"/datadata-docs/en-US/docs/query/dql/global#query",children:(0,l.jsx)(n.code,{children:"query"})})," \u51fd\u6570\u4e2d\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"{{ var }}"})," \u6765\u521b\u5efa\u4e00\u4e2a\u53c2\u6570\uff0c\u4f8b\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'return query("select * from table where id = {{ id }}")\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u53e6\u5916\u60a8\u53ef\u4ee5\u5728 DQL \u4e2d\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"args"})," \u5168\u5c40\u53d8\u91cf\u6765\u83b7\u53d6\u4efb\u610f\u53c2\u6570\u7684\u503c\uff0c\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'# {{ id }}\nprint(args["id"])\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u7c7b\u578b",children:"\u53c2\u6570\u7c7b\u578b"}),"\n",(0,l.jsx)(n.p,{children:"\u76ee\u524d\u652f\u6301\u7684\u67e5\u8be2\u53c2\u6570\u7c7b\u578b\u6709\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#text",children:"Text"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#number",children:"Number"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#date",children:"Date"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#date-range",children:"DateRange"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#list",children:"List"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#dynamic-list",children:"Dynamic List"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#query-based-list",children:"Query Based List"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"text",children:"Text"}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u53c2\u6570\u7c7b\u578b\u7528\u4e8e\u8f93\u5165\u4e00\u4e2a\u6587\u672c\u3002\u652f\u6301\u56fa\u5b9a\u9ed8\u8ba4\u503c\u3002\n\u5728 SQL \u4e2d\u4f7f\u7528\u65f6\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6dfb\u52a0\u5f15\u53f7\uff0c\u5982"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select * from table where name = '{{name}}'\n"})}),"\n",(0,l.jsx)(n.h3,{id:"number",children:"Number"}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u53c2\u6570\u7c7b\u578b\u7528\u4e8e\u9009\u62e9\u4e00\u4e2a\u6570\u5b57\uff0c\u8f93\u51fa\u683c\u5f0f\u4e3a\u6570\u5b57 ",(0,l.jsx)(n.code,{children:"123"}),"\u3002\u652f\u6301\u56fa\u5b9a\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"date",children:"Date"}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u53c2\u6570\u7c7b\u578b\u7528\u4e8e\u9009\u62e9\u4e00\u4e2a\u65e5\u671f\uff0c\u8f93\u51fa\u683c\u5f0f\u4e3a\u5b57\u7b26\u4e32 ",(0,l.jsx)(n.code,{children:"2024-08-06"}),"\uff0c\u5e38\u7528\u4e8e\u67e5\u8be2\u6216\u5206\u6790\u7279\u5b9a\u65f6\u95f4\u6bb5\u7684\u6570\u636e\u3002\u8be5\u53c2\u6570\u652f\u6301\u4e24\u79cd\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u56fa\u5b9a\u9ed8\u8ba4\u503c"}),"\uff1a\u60a8\u53ef\u4ee5\u9884\u5148\u8bbe\u5b9a\u4e00\u4e2a\u56fa\u5b9a\u7684\u65e5\u671f\u503c\uff0c\u4f8b\u5982 ",(0,l.jsx)(n.code,{children:"2024-08-06"}),"\uff0c\u6bcf\u6b21\u67e5\u8be2\u65f6\u81ea\u52a8\u4f7f\u7528\u6b64\u65e5\u671f\u4f5c\u4e3a\u9ed8\u8ba4\u503c\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u52a8\u6001\u9ed8\u8ba4\u503c"}),"\uff1a\u60a8\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199 SQL \u8bed\u53e5\u52a8\u6001\u83b7\u53d6\u9ed8\u8ba4\u503c\u3002\u4f8b\u5982\uff0c\u4f7f\u7528\u4ee5\u4e0b SQL \u67e5\u8be2\u6765\u83b7\u53d6\u67d0\u4e2a\u6570\u636e\u8868\u4e2d\u6700\u5927\u65e5\u671f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select max(day) from table\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u6837\uff0c\u53c2\u6570\u5c06\u81ea\u52a8\u9009\u62e9\u6570\u636e\u8868\u4e2d\u8bb0\u5f55\u7684\u6700\u5927\u65e5\u671f\u4f5c\u4e3a\u9ed8\u8ba4\u65e5\u671f\uff0c\u786e\u4fdd\u67e5\u8be2\u59cb\u7ec8\u57fa\u4e8e\u6700\u65b0\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7\u652f\u6301\u56fa\u5b9a\u548c\u52a8\u6001\u9ed8\u8ba4\u503c\u7684\u7075\u6d3b\u8bbe\u7f6e\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\u66f4\u52a0\u7cbe\u786e\u5730\u63a7\u5236\u65e5\u671f\u53c2\u6570\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u63d0\u5347\u67e5\u8be2\u6548\u7387\u548c\u51c6\u786e\u6027\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"date-range",children:"Date Range"}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u53c2\u6570\u7c7b\u578b\u7528\u4e8e\u9009\u62e9\u4e00\u4e2a\u65e5\u671f\u8303\u56f4\uff0c\u8f93\u51fa\u683c\u5f0f\u4e3a\u5b57\u7b26\u4e32 ",(0,l.jsx)(n.code,{children:"2024-08-06 00:00:00,2024-08-13 23:59:59"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728 SQL \u4f7f\u7528\u65f6\u9700\u8981\u914d\u5408\u53c2\u6570\u4fee\u9970\u7b26 start \u548c end\uff0c\u5982"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- {{ dateRange }}\nselect * from table where date between '{{ dateRange:start }}' and '{{ dateRange:end }}'\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u53c2\u6570\u652f\u6301\u4e24\u79cd\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u56fa\u5b9a\u9ed8\u8ba4\u503c"}),"\uff1a\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u52a8\u6001\u9ed8\u8ba4\u503c"}),"\uff1a\u8fc7\u53bb",(0,l.jsx)(n.strong,{children:"N"}),"\u5929\u8303\u56f4\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"list",children:"List"}),"\n",(0,l.jsxs)(n.p,{children:["\u5217\u8868\u9879\u8bbe\u7f6e\u4e3a\u6bcf\u884c\u4e00\u9879\uff0c\u4e0d\u8981\u5305\u542b\u7a7a\u683c\u3002\u4e5f\u652f\u6301 ",(0,l.jsx)(n.code,{children:"value:label"})," \u7684\u5f62\u5f0f\u3002\u652f\u6301\u9ed8\u8ba4\u503c\u8bbe\u7f6e\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u5f00\u542f\u591a\u9009\u65f6\uff0c\u9700\u8981\u914d\u5408\u4fee\u9970\u7b26 ",(0,l.jsx)(n.code,{children:":in"})," \u4e00\u8d77\u4f7f\u7528\uff0c\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- {{ platforms }}\nselect * from table where platform in ({{ platforms:in }})\n"})}),"\n",(0,l.jsx)(n.h3,{id:"dynamic-list",children:"Dynamic List"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0e List \u9759\u6001\u58f0\u660e\u9009\u62e9\u7684\u533a\u522b\u662f\uff0c\u6709\u4e9b\u573a\u666f\u53ef\u80fd\u9700\u8981\u52a8\u6001\u83b7\u53d6\u5217\u8868\u9009\u9879\u3002\nDynamic List \u7c7b\u578b\u7684\u53c2\u6570\u652f\u6301\u4f7f\u7528 SQL \u8bed\u53e5\u67e5\u8be2\u7684\u7ed3\u679c\u4f5c\u4e3a\u9009\u62e9\uff0c\u5982"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select distinct platform from table\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u67e5\u8be2\u4e24\u5217\u5206\u522b\u4f5c\u4e3a\u9009\u9879\u7684 ",(0,l.jsx)(n.code,{children:"label"})," \u548c ",(0,l.jsx)(n.code,{children:"value"})," \uff0c\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select platform_name as label, platform as value from table group by platform_name, platform\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\u5c06\u6240\u9009\u62e9\u7684\u5217\u522b\u540d\u4f5c\u4e3a ",(0,l.jsx)(n.code,{children:"label"})," \u548c ",(0,l.jsx)(n.code,{children:"value"})," \u4ee5\u5e2e\u52a9\u7a0b\u5e8f\u8bc6\u522b\u3002"]})}),"\n",(0,l.jsx)(n.h3,{id:"query-based-list",children:"Query Based List"}),"\n",(0,l.jsx)(n.p,{children:"\u548c Dynamic List \u7c7b\u4f3c\uff0c\u4f46\u662f\u60a8\u6709\u65f6\u5019\u53ef\u80fd\u9700\u8981\u7f16\u5199\u4e00\u4e2a\u6bd4\u8f83\u590d\u6742\u7684 SQL\uff0c\u5728 Dynamic List \u7684 UI \u4e2d\u7f16\u5199\u591a\u6709\u4e0d\u4fbf\u3002\n\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684 Query \u67e5\u8be2\u6765\u4f5c\u4e3a\u9009\u9879\u6765\u6e90\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8054\u52a8",children:"\u53c2\u6570\u8054\u52a8"}),"\n",(0,l.jsxs)(n.p,{children:["\u53c2\u6570\u8054\u52a8\u529f\u80fd\u4f9d\u8d56 ",(0,l.jsx)(n.a,{href:"#dynamic-list",children:"Dynamic List"})," \u7c7b\u578b\u7684\u53c2\u6570\u5b9e\u73b0\u3002\n\u5728 Dynamic List \u53c2\u6570\u7684 SQL \u8bed\u53e5\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"{{ var }}"})," \u5360\u4f4d\u7b26\u6765\u63d2\u5165\u5176\u4ed6\u53c2\u6570\u7684\u503c\u4f5c\u4e3a\u4f9d\u8d56\u3002\n\u5f53\u4f9d\u8d56\u53c2\u6570\u7684\u503c\u53d8\u5316\u65f6\uff0c\u4f1a\u81ea\u52a8\u91cd\u65b0\u6267\u884c SQL \u8bed\u53e5\u5e76\u66f4\u65b0\u9009\u9879\u5217\u8868\uff0c\u4ece\u800c\u5b9e\u73b0\u8054\u52a8\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,l.jsx)(n.h3,{id:"\u5982\u4f55\u8c03\u6574\u53c2\u6570\u7684\u987a\u5e8f",children:"\u5982\u4f55\u8c03\u6574\u53c2\u6570\u7684\u987a\u5e8f\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["\u53c2\u6570\u7684\u987a\u5e8f\u662f\u7531\u5176\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\u51b3\u5b9a\u7684\uff0c\u5982 ",(0,l.jsx)(n.code,{children:"select * from {{ table }} where id = {{ id }}"})," \u4e2d\uff0c",(0,l.jsx)(n.code,{children:"{{ table }}"})," \u51fa\u73b0\u5728 ",(0,l.jsx)(n.code,{children:"{{ id }}"})," \u4e4b\u524d\u3002\n\u5982\u679c\u60f3\u8981\u8c03\u6574\u53c2\u6570 ",(0,l.jsx)(n.code,{children:"table"})," \u548c ",(0,l.jsx)(n.code,{children:"id"})," \u7684\u987a\u5e8f\uff0c\u53ef\u4ee5\u5148\u5728\u6ce8\u91ca\u4e2d\u58f0\u660e\u53c2\u6570\u3002\u7136\u540e\u5728\u8bed\u53e5\u4e2d\u518d\u6b21\u4f7f\u7528\uff0c\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- {{id}}\n-- {{table}}\nselect * from {{ table }} where id = {{ id }};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6216\u8005\u5728 DQL \u4e2d\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"# {{id}}\n# {{table}}\nreturn query('select * from {{ table }} where id = {{ id }}')\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6548\u679c\u5982\u4e0b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"params order",src:s(98509).A+"",width:"2476",height:"1046"})})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},98509:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/01_params_order-be6f314bafec7705fc0233b53b9cdc38.png"},11100:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var l=s(30758);const d={},r=l.createContext(d);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);