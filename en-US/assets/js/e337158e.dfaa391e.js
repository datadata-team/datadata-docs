"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[7694],{3228:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(6070),a=n(5710);const i={title:"\u6563\u70b9\u56fe",sidebar_position:2.11},o=void 0,r={id:"visualizations/2-11-scatter/index",title:"\u6563\u70b9\u56fe",description:"\u6563\u70b9\u56fe\uff08Scatter Plot\uff09\u662f\u4e00\u79cd\u5e38\u7528\u7684\u6570\u636e\u53ef\u89c6\u5316\u56fe\u8868\u7c7b\u578b\uff0c\u7528\u4e8e\u5c55\u793a\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u6216\u8d8b\u52bf\u3002",source:"@site/docs/visualizations/2-11-scatter/index.md",sourceDirName:"visualizations/2-11-scatter",slug:"/visualizations/2-11-scatter/",permalink:"/datadata-docs/en-US/docs/visualizations/2-11-scatter/",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/visualizations/2-11-scatter/index.md",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1710325632e3,sidebarPosition:2.11,frontMatter:{title:"\u6563\u70b9\u56fe",sidebar_position:2.11},sidebar:"docs",previous:{title:"\u6851\u57fa\u56fe",permalink:"/datadata-docs/en-US/docs/visualizations/2-10-sankey/"},next:{title:"\u6f0f\u6597\u56fe",permalink:"/datadata-docs/en-US/docs/visualizations/2-12-funnel/"}},c={},d=[];function l(t){const e={li:"li",p:"p",ul:"ul",...(0,a.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u6563\u70b9\u56fe\uff08Scatter Plot\uff09\u662f\u4e00\u79cd\u5e38\u7528\u7684\u6570\u636e\u53ef\u89c6\u5316\u56fe\u8868\u7c7b\u578b\uff0c\u7528\u4e8e\u5c55\u793a\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u6216\u8d8b\u52bf\u3002\n\u6563\u70b9\u56fe\u901a\u5e38\u7531\u4e00\u7cfb\u5217\u70b9\u7ec4\u6210\uff0c\u6bcf\u4e2a\u70b9\u4ee3\u8868\u6570\u636e\u4e2d\u7684\u4e00\u4e2a\u89c2\u6d4b\u503c\uff0c\u6a2a\u5750\u6807\u548c\u7eb5\u5750\u6807\u5206\u522b\u8868\u793a\u4e24\u4e2a\u53d8\u91cf\u7684\u53d6\u503c\u3002\u901a\u8fc7\u89c2\u5bdf\u6563\u70b9\u56fe\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u53ef\u4ee5\u76f4\u89c2\u5730\u4e86\u89e3\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u76f8\u5173\u6027\u3001\u8d8b\u52bf\u6216\u5f02\u5e38\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6563\u70b9\u56fe\u901a\u5e38\u5305\u542b\u4ee5\u4e0b\u8981\u7d20\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6570\u636e\u70b9\uff08Data Points\uff09\uff1a\u6563\u70b9\u56fe\u7531\u591a\u4e2a\u6570\u636e\u70b9\u7ec4\u6210\uff0c\u6bcf\u4e2a\u6570\u636e\u70b9\u4ee3\u8868\u6570\u636e\u96c6\u4e2d\u7684\u4e00\u4e2a\u89c2\u6d4b\u503c\u3002\u6570\u636e\u70b9\u901a\u5e38\u7528\u7b26\u53f7\u6216\u6807\u8bb0\u8868\u793a\uff0c\u4f8b\u5982\u5706\u5708\u3001\u65b9\u5757\u6216\u53c9\u53f7\u7b49\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6a2a\u8f74\uff08X \u8f74\uff09\uff1a\u6a2a\u8f74\u8868\u793a\u7b2c\u4e00\u4e2a\u53d8\u91cf\u7684\u53d6\u503c\u8303\u56f4\uff0c\u901a\u5e38\u7528\u4e8e\u5c55\u793a\u81ea\u53d8\u91cf\u6216\u72ec\u7acb\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7eb5\u8f74\uff08Y \u8f74\uff09\uff1a\u7eb5\u8f74\u8868\u793a\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u7684\u53d6\u503c\u8303\u56f4\uff0c\u901a\u5e38\u7528\u4e8e\u5c55\u793a\u56e0\u53d8\u91cf\u6216\u56e0\u679c\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6807\u7b7e\uff08Labels\uff09\uff1a\u6563\u70b9\u56fe\u7684\u6a2a\u8f74\u548c\u7eb5\u8f74\u901a\u5e38\u9644\u5e26\u6807\u7b7e\uff0c\u7528\u4e8e\u63cf\u8ff0\u53d8\u91cf\u7684\u540d\u79f0\u6216\u542b\u4e49\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6563\u70b9\u56fe\u9002\u7528\u4e8e\u63a2\u7d22\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u7279\u522b\u9002\u7528\u4e8e\u53d1\u73b0\u53d8\u91cf\u4e4b\u95f4\u7684\u76f8\u5173\u6027\u3001\u8d8b\u52bf\u6216\u5f02\u5e38\u503c\u3002\n\u5b83\u80fd\u591f\u76f4\u89c2\u5730\u5c55\u793a\u6570\u636e\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u5e2e\u52a9\u89c2\u5bdf\u8005\u7406\u89e3\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u548c\u76f8\u4e92\u4f5c\u7528\u3002"})]})}function u(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},5710:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>r});var s=n(758);const a={},i=s.createContext(a);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);