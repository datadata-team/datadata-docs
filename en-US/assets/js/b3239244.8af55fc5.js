"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[1394],{83510:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=s(86070),d=s(11100);const a={title:"Json \u6a21\u5757",sidebar_position:300},o=void 0,i={id:"query/dql/json",title:"Json \u6a21\u5757",description:"\u65b9\u6cd5",source:"@site/docs/query/02_dql/json.md",sourceDirName:"query/02_dql",slug:"/query/dql/json",permalink:"/datadata-docs/en-US/docs/query/dql/json",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/02_dql/json.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1734415855e3,sidebarPosition:300,frontMatter:{title:"Json \u6a21\u5757",sidebar_position:300},sidebar:"docs",previous:{title:"Math \u6a21\u5757",permalink:"/datadata-docs/en-US/docs/query/dql/math"},next:{title:"Canvas \u6a21\u5757",permalink:"/datadata-docs/en-US/docs/query/dql/canvas/"}},r={},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>json.dumps(x, *, indent)</code>",id:"jsondumpsx--indent",level:3},{value:"<code>json.loads(x, default)</code>",id:"jsonloadsx-default",level:3},{value:"<code>json.indent(str, *, prefix=&quot;&quot;, indent=&quot;\\t&quot;)</code>",id:"jsonindentstr--prefix-indentt",level:3}];function c(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:'data = {\n  "name": "John",\n}\n\n# \u5e8f\u5217\u5316\u5b57\u5178\njson.dumps(data)\n\n# \u5e8f\u5217\u5316\u5e76\u7f8e\u5316\u7f29\u7d27\njson.dumps(data, indent=4)\n\n# \u89e3\u6790 JSON \u5b57\u7b26\u4e32\njson.loads(\'{"name": "John"}\')\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.h3,{id:"jsondumpsx--indent",children:(0,t.jsx)(e.code,{children:"json.dumps(x, *, indent)"})}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u4e8e\u5c06\u5bf9\u8c61\u5e8f\u5217\u5316\uff08\u5373\u8f6c\u6362\uff09\u4e3a JSON \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:'data = {\n    "name": "Alice",\n    "age": 30,\n    "languages": ["English", "French"]\n}\n\n# \u4f7f\u7528\u7f29\u8fdb\u683c\u5f0f\u5316 JSON \u5b57\u7b26\u4e32\nformatted_json = json.dumps(data, indent=4)\nprint(formatted_json)\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-txt",children:'{\n  "age": 30,\n  "languages": [\n    "English",\n    "French"\n  ],\n  "name": "Alice"\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"jsonloadsx-default",children:(0,t.jsx)(e.code,{children:"json.loads(x, default)"})}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u4e8e\u5c06 JSON \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\uff08\u5982\u5b57\u5178\u3001\u5217\u8868\u7b49\uff09\uff0c\u5e76\u5728\u89e3\u6790\u5931\u8d25\u65f6\u8fd4\u56de\u4e00\u4e2a\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:'json_string = \'{"name": "Alice", "age": 30}\'\n\n# \u6b63\u5e38\u89e3\u6790 JSON \u5b57\u7b26\u4e32\nresult = json.loads(json_string, default={"name": "Unknown", "age": 0})\nprint(result)  # \u8f93\u51fa: {\'name\': \'Alice\', \'age\': 30}\n\n# \u5f53\u89e3\u6790\u5931\u8d25\u65f6\u8fd4\u56de\u9ed8\u8ba4\u503c\ninvalid_json_string = \'{"name": "Alice", "age": 30\'  # \u7f3a\u5c11\u5173\u95ed\u5927\u62ec\u53f7\n\nresult = json.loads(invalid_json_string, default={"name": "Unknown", "age": 0})\nprint(result)  # \u8f93\u51fa: {\'name\': \'Unknown\', \'age\': 0}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"jsonindentstr--prefix-indentt",children:(0,t.jsx)(e.code,{children:'json.indent(str, *, prefix="", indent="\\t")'})}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u4e8e\u683c\u5f0f\u5316 JSON \u5b57\u7b26\u4e32\uff0c\u5e76\u5728\u6bcf\u884c\u524d\u6dfb\u52a0\u4e00\u4e2a\u524d\u7f00\u548c\u6307\u5b9a\u7684\u7f29\u8fdb\u65b9\u5f0f\u3002\n\u8fd9\u79cd\u65b9\u6cd5\u53ef\u7528\u4e8e\u7f8e\u5316\u6216\u8c03\u6574 JSON \u8f93\u51fa\u683c\u5f0f\uff0c\u4f7f\u5176\u66f4\u5177\u53ef\u8bfb\u6027\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u5bf9\u9f50\u4e0d\u540c\u5c42\u7ea7\u7684\u6570\u636e\u65f6\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:'input_json = \'{"name": "Alice", "age": 30, "languages": ["English", "French"]}\'\n\nformatted_json = json.indent(input_json, prefix=">> ", indent="  ")\nprint(formatted_json)\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-txt",children:'{\n>>   "name": "Alice",\n>>   "age": 30,\n>>   "languages": [\n>>     "English",\n>>     "French"\n>>   ]\n>> }\n'})})]})}function u(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},11100:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>i});var t=s(30758);const d={},a=t.createContext(d);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);