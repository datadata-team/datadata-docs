"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[7087],{5799:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var d=s(6070),r=s(1100);const l={title:"\u5168\u5c40\u51fd\u6570",sidebar_position:1},i=void 0,t={id:"query/dql/global",title:"\u5168\u5c40\u51fd\u6570",description:"\u5168\u5c40\u51fd\u6570",source:"@site/docs/query/02_dql/global.md",sourceDirName:"query/02_dql",slug:"/query/dql/global",permalink:"/datadata-docs/en-US/docs/query/dql/global",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/02_dql/global.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1734421687e3,sidebarPosition:1,frontMatter:{title:"\u5168\u5c40\u51fd\u6570",sidebar_position:1},sidebar:"docs",previous:{title:"DQL \u67e5\u8be2\u811a\u672c",permalink:"/datadata-docs/en-US/docs/query/dql/"},next:{title:"Series",permalink:"/datadata-docs/en-US/docs/query/dql/series"}},c={},h=[{value:"\u5168\u5c40\u51fd\u6570",id:"\u5168\u5c40\u51fd\u6570",level:2},{value:"<code>query</code>",id:"query",level:3},{value:"<code>Series</code>",id:"series",level:3},{value:"<code>DataFrame</code> (alias <code>table</code>)",id:"dataframe-alias-table",level:3},{value:"<code>Timestamp</code>",id:"timestamp",level:3},{value:"<code>fetch</code>",id:"fetch",level:3},{value:"\u53c2\u6570\u8bf4\u660e\uff1a",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"\u793a\u4f8b 1: \u6267\u884c GET \u8bf7\u6c42",id:"\u793a\u4f8b-1-\u6267\u884c-get-\u8bf7\u6c42",level:5},{value:"\u793a\u4f8b 2: \u6267\u884c POST \u8bf7\u6c42\uff0c\u53d1\u9001 JSON \u6570\u636e",id:"\u793a\u4f8b-2-\u6267\u884c-post-\u8bf7\u6c42\u53d1\u9001-json-\u6570\u636e",level:5},{value:"\u793a\u4f8b 3: \u6267\u884c PUT \u8bf7\u6c42\uff0c\u66f4\u65b0\u6570\u636e",id:"\u793a\u4f8b-3-\u6267\u884c-put-\u8bf7\u6c42\u66f4\u65b0\u6570\u636e",level:5},{value:"\u793a\u4f8b 4: \u6267\u884c PATCH \u8bf7\u6c42\uff0c\u90e8\u5206\u66f4\u65b0\u6570\u636e",id:"\u793a\u4f8b-4-\u6267\u884c-patch-\u8bf7\u6c42\u90e8\u5206\u66f4\u65b0\u6570\u636e",level:5},{value:"\u793a\u4f8b 5: \u6267\u884c DELETE \u8bf7\u6c42",id:"\u793a\u4f8b-5-\u6267\u884c-delete-\u8bf7\u6c42",level:5},{value:"\u793a\u4f8b 6: \u4f7f\u7528\u8bf7\u6c42\u5934\u53d1\u9001 GET \u8bf7\u6c42",id:"\u793a\u4f8b-6-\u4f7f\u7528\u8bf7\u6c42\u5934\u53d1\u9001-get-\u8bf7\u6c42",level:5},{value:"\u793a\u4f8b 7: POST \u8bf7\u6c42\u53d1\u9001\u7eaf\u6587\u672c\u5185\u5bb9",id:"\u793a\u4f8b-7-post-\u8bf7\u6c42\u53d1\u9001\u7eaf\u6587\u672c\u5185\u5bb9",level:5},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u5168\u5c40\u6a21\u5757",id:"\u5168\u5c40\u6a21\u5757",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u5168\u5c40\u51fd\u6570",children:"\u5168\u5c40\u51fd\u6570"}),"\n",(0,d.jsx)(n.h3,{id:"query",children:(0,d.jsx)(n.code,{children:"query"})}),"\n",(0,d.jsx)(n.p,{children:"\u6267\u884c SQL \u67e5\u8be2"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"query(sql, *args)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"name"}),(0,d.jsx)(n.th,{children:"type"}),(0,d.jsx)(n.th,{children:"description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sql"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"SQL \u5b57\u7b26\u4e32"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"args"}),(0,d.jsx)(n.td,{children:"...args"}),(0,d.jsx)(n.td,{children:"SQL \u53c2\u6570\uff0c\u7528\u4e8e SQL \u63d2\u503c"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"series",children:(0,d.jsx)(n.code,{children:"Series"})}),"\n",(0,d.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a Series\uff0cSeries \u8868\u793a\u4e00\u4e2a\u6570\u636e\u5217"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"Series([], dtype='string', name='string')\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"name"}),(0,d.jsx)(n.th,{children:"type"}),(0,d.jsx)(n.th,{children:"description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"list"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u5217\u8868"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dtype"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u7c7b\u578b"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u5217\u540d\u79f0"})]})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"dataframe-alias-table",children:[(0,d.jsx)(n.code,{children:"DataFrame"})," (alias ",(0,d.jsx)(n.code,{children:"table"}),")"]}),"\n",(0,d.jsx)(n.p,{children:"\u521b\u5efa DataFrame \uff0cDataFrame \u8868\u793a\u4e00\u4e2a\u6570\u636e\u8868\u683c\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'DataFrame([\n  { "name": "a" },\n  { "name": "b" },\n  { "name": "c" },\n])\nDataFrame({"name": ["a", "b", "c"]})\n\n# use alias name\ntable({"name": ["a", "b", "c"]})\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"name"}),(0,d.jsx)(n.th,{children:"type"}),(0,d.jsx)(n.th,{children:"description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"list|dict"}),(0,d.jsx)(n.td,{children:"\u6570\u636e"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"columns"}),(0,d.jsx)(n.td,{children:"list"}),(0,d.jsx)(n.td,{children:"\u6267\u884c\u5217\u540d\u79f0"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"timestamp",children:(0,d.jsx)(n.code,{children:"Timestamp"})}),"\n",(0,d.jsx)(n.p,{children:"Timestamp \u7528\u4e8e\u8868\u793a\u65f6\u95f4\u3001\u65e5\u671f\u3001\u65f6\u95f4\u6233\u7b49\u7c7b\u578b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"Timestamp('11:12:13')\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fetch",children:(0,d.jsx)(n.code,{children:"fetch"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"fetch"})," \u51fd\u6570\u7528\u4e8e\u6267\u884c HTTP \u8bf7\u6c42\uff0c\u901a\u8fc7\u4e0d\u540c\u7684 HTTP \u65b9\u6cd5\uff08\u5982 ",(0,d.jsx)(n.code,{children:"GET"}),"\u3001",(0,d.jsx)(n.code,{children:"POST"}),"\u3001",(0,d.jsx)(n.code,{children:"PUT"}),"\u3001",(0,d.jsx)(n.code,{children:"PATCH"}),"\u3001",(0,d.jsx)(n.code,{children:"DELETE"})," \u7b49\uff09\u8bbf\u95ee\u6307\u5b9a\u7684 URL\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u4f20\u5165\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u4f53\u548c\u8d85\u65f6\u65f6\u95f4\uff0c\u5e76\u83b7\u53d6\u54cd\u5e94\u7684\u72b6\u6001\u7801\u3001\u54cd\u5e94\u5934\u548c\u54cd\u5e94\u4f53\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"url"})," (str)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8bf7\u6c42\u7684\u76ee\u6807 URL\u3002"}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u793a\u4f8b"}),": ",(0,d.jsx)(n.code,{children:'"https://api.example.com/data"'})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"method"}),' (Literal["GET", "PUT", "POST", "HEAD", "DELETE", "PATCH"])']})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["HTTP \u65b9\u6cd5\uff0c\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"GET"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301\u7684 HTTP \u65b9\u6cd5\u5305\u62ec\uff1a",(0,d.jsx)(n.code,{children:"GET"}),"\u3001",(0,d.jsx)(n.code,{children:"POST"}),"\u3001",(0,d.jsx)(n.code,{children:"PUT"}),"\u3001",(0,d.jsx)(n.code,{children:"PATCH"}),"\u3001",(0,d.jsx)(n.code,{children:"HEAD"})," \u548c ",(0,d.jsx)(n.code,{children:"DELETE"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"headers"})," (Dict[str, str], \u53ef\u9009)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["HTTP \u8bf7\u6c42\u5934\uff0c\u683c\u5f0f\u4e3a\u5b57\u5178\u3002\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8981\u6c42\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"None"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u793a\u4f8b"}),": ",(0,d.jsx)(n.code,{children:'{"Content-Type": "application/json", "Authorization": "Bearer token"}'})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"body"})," (Any, \u53ef\u9009)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["HTTP \u8bf7\u6c42\u7684\u8bf7\u6c42\u4f53\uff0c\u901a\u5e38\u5728 ",(0,d.jsx)(n.code,{children:"POST"}),"\u3001",(0,d.jsx)(n.code,{children:"PUT"})," \u548c ",(0,d.jsx)(n.code,{children:"PATCH"})," \u8bf7\u6c42\u4e2d\u4f7f\u7528\u3002\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"None"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u793a\u4f8b"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["JSON \u5b57\u7b26\u4e32: ",(0,d.jsx)(n.code,{children:'{"name": "John", "age": 30}'})]}),"\n",(0,d.jsxs)(n.li,{children:["\u666e\u901a\u6587\u672c: ",(0,d.jsx)(n.code,{children:'"Hello World"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"timeout"})," (int, \u53ef\u9009)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09\uff0c\u9ed8\u8ba4\u4e3a 3000\uff08\u5373 3 \u79d2\uff09\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"status"})," (int):"]})," HTTP \u54cd\u5e94\u72b6\u6001\u7801\uff0c\u4f8b\u5982 ",(0,d.jsx)(n.code,{children:"200"})," \u8868\u793a\u8bf7\u6c42\u6210\u529f\uff0c",(0,d.jsx)(n.code,{children:"404"})," \u8868\u793a\u8d44\u6e90\u672a\u627e\u5230\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"headers"})," (dict):"]})," HTTP \u54cd\u5e94\u5934\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"body"})," (str | None):"]})," HTTP \u54cd\u5e94\u4f53\u7684\u5185\u5bb9\u3002\u5982\u679c\u6ca1\u6709\u54cd\u5e94\u4f53\uff0c\u5219\u4e3a ",(0,d.jsx)(n.code,{children:"None"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,d.jsx)(n.h5,{id:"\u793a\u4f8b-1-\u6267\u884c-get-\u8bf7\u6c42",children:"\u793a\u4f8b 1: \u6267\u884c GET \u8bf7\u6c42"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'response = fetch(\n    url="https://jsonplaceholder.typicode.com/posts/1",\n    method="GET"\n)\nprint("Status Code:", response["status"])\nprint("Headers:", response["headers"])\nprint("Body:", response["body"])\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'Status Code: 200\nHeaders: {\'Content-Type\': \'application/json; charset=utf-8\', ...}\nBody: {\n  "userId": 1,\n  "id": 1,\n  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n  "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum..."\n}\n'})}),"\n",(0,d.jsx)(n.h5,{id:"\u793a\u4f8b-2-\u6267\u884c-post-\u8bf7\u6c42\u53d1\u9001-json-\u6570\u636e",children:"\u793a\u4f8b 2: \u6267\u884c POST \u8bf7\u6c42\uff0c\u53d1\u9001 JSON \u6570\u636e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'response = fetch(\n    url="https://jsonplaceholder.typicode.com/posts",\n    method="POST",\n    headers={"Content-Type": "application/json"},\n    body=\'{"title": "foo", "body": "bar", "userId": 1}\'\n)\nprint("Status Code:", response["status"])\nprint("Body:", response["body"])\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'Status Code: 201\nBody: {\n  "title": "foo",\n  "body": "bar",\n  "userId": 1,\n  "id": 101\n}\n'})}),"\n",(0,d.jsx)(n.h5,{id:"\u793a\u4f8b-3-\u6267\u884c-put-\u8bf7\u6c42\u66f4\u65b0\u6570\u636e",children:"\u793a\u4f8b 3: \u6267\u884c PUT \u8bf7\u6c42\uff0c\u66f4\u65b0\u6570\u636e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'response = fetch(\n    url="https://jsonplaceholder.typicode.com/posts/1",\n    method="PUT",\n    headers={"Content-Type": "application/json"},\n    body=\'{"id": 1, "title": "updated title", "body": "updated body", "userId": 1}\'\n)\nprint("Status Code:", response["status"])\nprint("Body:", response["body"])\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'Status Code: 200\nBody: {\n  "id": 1,\n  "title": "updated title",\n  "body": "updated body",\n  "userId": 1\n}\n'})}),"\n",(0,d.jsx)(n.h5,{id:"\u793a\u4f8b-4-\u6267\u884c-patch-\u8bf7\u6c42\u90e8\u5206\u66f4\u65b0\u6570\u636e",children:"\u793a\u4f8b 4: \u6267\u884c PATCH \u8bf7\u6c42\uff0c\u90e8\u5206\u66f4\u65b0\u6570\u636e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'response = fetch(\n    url="https://jsonplaceholder.typicode.com/posts/1",\n    method="PATCH",\n    headers={"Content-Type": "application/json"},\n    body=\'{"title": "patched title"}\'\n)\nprint("Status Code:", response["status"])\nprint("Body:", response["body"])\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'Status Code: 200\nBody: {\n  "id": 1,\n  "title": "patched title",\n  "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum...",\n  "userId": 1\n}\n'})}),"\n",(0,d.jsx)(n.h5,{id:"\u793a\u4f8b-5-\u6267\u884c-delete-\u8bf7\u6c42",children:"\u793a\u4f8b 5: \u6267\u884c DELETE \u8bf7\u6c42"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'response = fetch(\n    url="https://jsonplaceholder.typicode.com/posts/1",\n    method="DELETE"\n)\nprint("Status Code:", response["status"])\nprint("Body:", response["body"])\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Status Code: 200\nBody: {}\n"})}),"\n",(0,d.jsx)(n.h5,{id:"\u793a\u4f8b-6-\u4f7f\u7528\u8bf7\u6c42\u5934\u53d1\u9001-get-\u8bf7\u6c42",children:"\u793a\u4f8b 6: \u4f7f\u7528\u8bf7\u6c42\u5934\u53d1\u9001 GET \u8bf7\u6c42"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'response = fetch(\n    url="https://echo.free.beeceptor.com",\n    method="GET",\n    headers={"X-Custom-Header": "fetch test"}\n)\nprint("Status Code:", response["status"])\nprint("Body:", response["body"])\n'})}),"\n",(0,d.jsx)(n.h5,{id:"\u793a\u4f8b-7-post-\u8bf7\u6c42\u53d1\u9001\u7eaf\u6587\u672c\u5185\u5bb9",children:"\u793a\u4f8b 7: POST \u8bf7\u6c42\u53d1\u9001\u7eaf\u6587\u672c\u5185\u5bb9"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'response = fetch(\n    url="https://echo.free.beeceptor.com",\n    method="POST",\n    headers={"Content-Type": "text/plain"},\n    body="This is a plain text body."\n)\nprint("Status Code:", response["status"])\nprint("Body:", response["body"])\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u6570\u636e\u83b7\u53d6"}),"\uff1a\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"GET"})," \u65b9\u6cd5\u4ece API \u6216\u7f51\u9875\u83b7\u53d6\u6570\u636e\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u6570\u636e\u63d0\u4ea4"}),"\uff1a\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"POST"})," \u6216 ",(0,d.jsx)(n.code,{children:"PUT"})," \u65b9\u6cd5\u5411\u670d\u52a1\u5668\u63d0\u4ea4\u6570\u636e\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u90e8\u5206\u66f4\u65b0"}),"\uff1a\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"PATCH"})," \u8bf7\u6c42\u4fee\u6539\u8d44\u6e90\u7684\u90e8\u5206\u5185\u5bb9\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u5220\u9664\u8d44\u6e90"}),"\uff1a\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"DELETE"})," \u65b9\u6cd5\u5220\u9664\u6307\u5b9a\u8d44\u6e90\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u6d4b\u8bd5\u63a5\u53e3"}),"\uff1a\u7528\u4e8e\u6d4b\u8bd5\u4e0d\u540c\u7c7b\u578b\u7684 HTTP \u8bf7\u6c42\u548c\u54cd\u5e94\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"URL \u683c\u5f0f"}),"\uff1a\u786e\u4fdd\u76ee\u6807 URL \u6b63\u786e\uff0c\u5e26\u6709\u6b63\u786e\u7684\u534f\u8bae\uff08\u5982 ",(0,d.jsx)(n.code,{children:"https://"}),"\uff09\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u8bf7\u6c42\u5934"}),"\uff1a\u8bbe\u7f6e\u9002\u5f53\u7684 ",(0,d.jsx)(n.code,{children:"Content-Type"})," \u786e\u4fdd\u670d\u52a1\u5668\u6b63\u786e\u89e3\u6790\u8bf7\u6c42\u4f53\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u8d85\u65f6\u65f6\u95f4"}),"\uff1a\u5408\u7406\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u9632\u6b62\u8bf7\u6c42\u957f\u65f6\u95f4\u6302\u8d77\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"HTTP \u65b9\u6cd5"}),"\uff1a\u4f7f\u7528\u6b63\u786e\u7684 HTTP \u65b9\u6cd5\uff0c\u4f8b\u5982 ",(0,d.jsx)(n.code,{children:"GET"})," \u8bfb\u53d6\u6570\u636e\uff0c",(0,d.jsx)(n.code,{children:"POST"})," \u521b\u5efa\u6570\u636e\uff0c",(0,d.jsx)(n.code,{children:"PUT"})," \u66ff\u6362\u6570\u636e\uff0c",(0,d.jsx)(n.code,{children:"PATCH"})," \u66f4\u65b0\u6570\u636e\uff0c",(0,d.jsx)(n.code,{children:"DELETE"})," \u5220\u9664\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5168\u5c40\u6a21\u5757",children:"\u5168\u5c40\u6a21\u5757"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"math"}),"\n",(0,d.jsx)(n.li,{children:"time"}),"\n",(0,d.jsx)(n.li,{children:"json"}),"\n",(0,d.jsx)(n.li,{children:"assert"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},1100:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var d=s(758);const r={},l=d.createContext(r);function i(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);