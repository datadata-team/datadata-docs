"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[3226],{58010:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var d=r(86070),s=r(11100);const c={title:"Merge",sidebar_position:9},i=void 0,l={id:"query/dql/merge",title:"Merge",description:"\u65b9\u6cd5",source:"@site/docs/query/02_dql/merge.md",sourceDirName:"query/02_dql",slug:"/query/dql/merge",permalink:"/datadata-docs/en-US/docs/query/dql/merge",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/02_dql/merge.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1734571777e3,sidebarPosition:9,frontMatter:{title:"Merge",sidebar_position:9},sidebar:"docs",previous:{title:"DataFrameGroupBy",permalink:"/datadata-docs/en-US/docs/query/dql/dataframe_group_by"},next:{title:"Math \u6a21\u5757",permalink:"/datadata-docs/en-US/docs/query/dql/math"}},o={},t=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>merge</code>",id:"merge",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u4e0d\u517c\u5bb9\u7684\u7ec6\u8282",id:"\u4e0d\u517c\u5bb9\u7684\u7ec6\u8282",level:4},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u793a\u4f8b\u6570\u636e\u6846",id:"\u793a\u4f8b\u6570\u636e\u6846",level:4},{value:"<code>inner</code> \u5408\u5e76",id:"inner-\u5408\u5e76",level:4},{value:"<code>left</code> \u5408\u5e76",id:"left-\u5408\u5e76",level:4},{value:"<code>right</code> \u5408\u5e76",id:"right-\u5408\u5e76",level:4},{value:"<code>outer</code> \u5408\u5e76",id:"outer-\u5408\u5e76",level:4},{value:"<code>cross</code> \u5408\u5e76",id:"cross-\u5408\u5e76",level:4}];function h(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,d.jsx)(n.h3,{id:"merge",children:(0,d.jsx)(n.code,{children:"merge"})}),"\n",(0,d.jsx)(n.p,{children:"\u7c7b\u4f3c\u4e8e SQL \u7684 JOIN \u64cd\u4f5c\uff0c\u5c06\u4e24\u4e2a\u6570\u636e\u6846\u5408\u5e76\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, suffixes=('_x', '_y'))\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"right"}),": \u53f3\u4fa7\u6570\u636e\u6846\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"how"}),": \u5408\u5e76\u7684\u65b9\u5f0f\u3002\u652f\u6301\u4ee5\u4e0b\u503c\uff1a","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"inner"}),": \u5185\u8fde\u63a5\uff0c\u8fd4\u56de\u4e24\u4e2a\u6570\u636e\u6846\u7684\u4ea4\u96c6\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"outer"}),": \u5916\u8fde\u63a5\uff0c\u8fd4\u56de\u4e24\u4e2a\u6570\u636e\u6846\u7684\u5e76\u96c6\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"left"}),": \u5de6\u8fde\u63a5\uff0c\u8fd4\u56de\u5de6\u4fa7\u6570\u636e\u6846\u7684\u6240\u6709\u884c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"right"}),": \u53f3\u8fde\u63a5\uff0c\u8fd4\u56de\u53f3\u4fa7\u6570\u636e\u6846\u7684\u6240\u6709\u884c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"cross"}),": \u7b1b\u5361\u5c14\u79ef\uff0c\u8fd4\u56de\u6240\u6709\u7ec4\u5408\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"on"}),": \u5217\u540d\uff0c\u7528\u4e8e\u8fde\u63a5\u7684\u952e\u3002\u5982\u679c ",(0,d.jsx)(n.code,{children:"left_on"})," \u548c ",(0,d.jsx)(n.code,{children:"right_on"})," \u4e5f\u8bbe\u7f6e\u4e86\uff0c\u5c06\u5ffd\u7565\u6b64\u53c2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"left_on"}),": \u5de6\u4fa7\u6570\u636e\u6846\u4e2d\u7528\u4e8e\u8fde\u63a5\u7684\u952e\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"right_on"}),": \u53f3\u4fa7\u6570\u636e\u6846\u4e2d\u7528\u4e8e\u8fde\u63a5\u7684\u952e\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"suffixes"}),": \u5408\u5e76\u540e\u7684\u5217\u540d\u540e\u7f00\u3002\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"('_x', '_y')"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4e0d\u517c\u5bb9\u7684\u7ec6\u8282",children:"\u4e0d\u517c\u5bb9\u7684\u7ec6\u8282"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u5408\u5e76\u540e\u7684 DataFrame \u5217\u987a\u5e8f\u53ef\u80fd\u4e0e Pandas \u4e0d\u4e00\u81f4\u3002\uff08\u4f46\u6570\u636e\u884c\u987a\u5e8f\u4e00\u81f4\uff09"}),"\n",(0,d.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,d.jsx)(n.code,{children:"sort"})," \u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"merge"})," \u65b9\u6cd5\u6765\u5408\u5e76\u4e24\u4e2a\u6570\u636e\u6846\uff0c\u5e76\u6f14\u793a\u4e86\u5404\u79cd\u5408\u5e76\u65b9\u5f0f\uff08",(0,d.jsx)(n.code,{children:"inner"}),"\u3001",(0,d.jsx)(n.code,{children:"left"}),"\u3001",(0,d.jsx)(n.code,{children:"right"}),"\u3001",(0,d.jsx)(n.code,{children:"outer"}),"\u3001",(0,d.jsx)(n.code,{children:"cross"}),"\uff09\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u793a\u4f8b\u6570\u636e\u6846",children:"\u793a\u4f8b\u6570\u636e\u6846"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# \u793a\u4f8b\u6570\u636e\u6846\nd1 = DataFrame({\n  "year": [2021, 2022, 2023, 2024],\n  "month": [1, 2, 3, 4],\n  "price": [1, 2, 3, 4],\n})\n\nd2 = DataFrame({\n  "year": [2024, 2021, 2022, 2023],\n  "month": [5, 1, 2, 3],\n  "count": [4, 3, 2, 1],\n  "price": [1, 2, 3, 4],\n})\n'})}),"\n",(0,d.jsxs)(n.h4,{id:"inner-\u5408\u5e76",children:[(0,d.jsx)(n.code,{children:"inner"})," \u5408\u5e76"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"inner"})," \u5408\u5e76\u53ea\u4fdd\u7559\u4e24\u4e2a\u6570\u636e\u6846\u4e2d\u5171\u6709\u7684\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# inner \u5408\u5e76\u793a\u4f8b\nd3 = d1.merge(d2, on=["year", "month"])\nprint(d3)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c\uff1a"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"   year  month  price_x  count  price_y\n0  2021      1        1      3        2\n1  2022      2        2      2        3\n2  2023      3        3      1        4\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"left-\u5408\u5e76",children:[(0,d.jsx)(n.code,{children:"left"})," \u5408\u5e76"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"left"})," \u5408\u5e76\u4fdd\u7559\u5de6\u4fa7\u6570\u636e\u6846\u4e2d\u7684\u6240\u6709\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# \u4fee\u6539 d2 \u793a\u4f8b\u6570\u636e\u6846\nd2 = DataFrame({\n  "year": [2024, 2021, 2022, 2023, 2023],\n  "month": [5, 1, 2, 3, 3],\n  "count": [4, 3, 2, 1, 1],\n  "price": [1, 2, 3, 4, 4],\n})\n\n# left \u5408\u5e76\u793a\u4f8b\nd3 = d1.merge(d2, how="left", on=["year", "month"])\nprint(d3)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c\uff1a"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"   year  month  price_x  count  price_y\n0  2021      1        1    3.0      2.0\n1  2022      2        2    2.0      3.0\n2  2023      3        3    1.0      4.0\n3  2023      3        3    1.0      4.0\n4  2024      4        4    NaN      NaN\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"right-\u5408\u5e76",children:[(0,d.jsx)(n.code,{children:"right"})," \u5408\u5e76"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"right"})," \u5408\u5e76\u4fdd\u7559\u53f3\u4fa7\u6570\u636e\u6846\u4e2d\u7684\u6240\u6709\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# right \u5408\u5e76\u793a\u4f8b\nd3 = d1.merge(d2, how="right", on=["year", "month"])\nprint(d3)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c\uff1a"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"   year  month  price_x  count  price_y\n0  2024      5      NaN      4        1\n1  2021      1      1.0      3        2\n2  2022      2      2.0      2        3\n3  2023      3      3.0      1        4\n4  2023      3      3.0      1        4\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"outer-\u5408\u5e76",children:[(0,d.jsx)(n.code,{children:"outer"})," \u5408\u5e76"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"outer"})," \u5408\u5e76\u8fd4\u56de\u4e24\u4e2a\u6570\u636e\u6846\u7684\u5e76\u96c6\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# outer \u5408\u5e76\u793a\u4f8b\nd3 = d1.merge(d2, how="outer", on=["year", "month"])\nprint(d3)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c\uff1a"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"   year  month  price_x  count  price_y\n0  2021      1      1.0    3.0      2.0\n1  2022      2      2.0    2.0      3.0\n2  2023      3      3.0    1.0      4.0\n3  2023      3      3.0    1.0      4.0\n4  2024      4      4.0    NaN      NaN\n5  2024      5      NaN    4.0      1.0\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"cross-\u5408\u5e76",children:[(0,d.jsx)(n.code,{children:"cross"})," \u5408\u5e76"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"cross"})," \u5408\u5e76\u8fd4\u56de\u4e24\u4e2a\u6570\u636e\u6846\u7684\u7b1b\u5361\u5c14\u79ef\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# cross \u5408\u5e76\u793a\u4f8b\nd3 = d1.merge(d2, how="cross")\nprint(d3)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c\uff1a"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"    year_x  month_x  price_x  year_y  month_y  count  price_y\n0     2021        1        1    2024        5      4        1\n1     2021        1        1    2021        1      3        2\n2     2021        1        1    2022        2      2        3\n3     2021        1        1    2023        3      1        4\n4     2022        2        2    2024        5      4        1\n5     2022        2        2    2021        1      3        2\n6     2022        2        2    2022        2      2        3\n7     2022        2        2    2023        3      1        4\n8     2023        3        3    2024        5      4        1\n9     2023        3        3    2021        1      3        2\n10    2023        3        3    2022        2      2        3\n11    2023        3        3    2023        3      1        4\n12    2024        4        4    2024        5      4        1\n13    2024        4        4    2021        1      3        2\n14    2024        4        4    2022        2      2        3\n15    2024        4        4    2023        3      1        4\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\u5c55\u793a\u4e86 ",(0,d.jsx)(n.code,{children:"merge"})," \u65b9\u6cd5\u7684\u5404\u79cd\u5408\u5e76\u65b9\u5f0f\u53ca\u5176\u8f93\u51fa\u7ed3\u679c\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11100:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var d=r(30758);const s={},c=d.createContext(s);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);