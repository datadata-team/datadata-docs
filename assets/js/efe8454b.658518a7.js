"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[1890],{7113:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var d=i(6070),n=i(1100);const s={title:"Time \u6a21\u5757",sidebar_position:200},o=void 0,c={id:"query/dql/time",title:"Time \u6a21\u5757",description:"time \u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7528\u4e8e\u5904\u7406\u65f6\u95f4\u7684\u51fd\u6570\u3002\u8fd9\u662f\u4e00\u4e2a\u5168\u5c40\u6a21\u5757\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 DQL \u4e2d\u4f7f\u7528\u3002",source:"@site/docs/query/02_dql/time.md",sourceDirName:"query/02_dql",slug:"/query/dql/time",permalink:"/datadata-docs/docs/query/dql/time",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/docs/query/02_dql/time.md",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:1723536826e3,sidebarPosition:200,frontMatter:{title:"Time \u6a21\u5757",sidebar_position:200},sidebar:"docs",previous:{title:"Math \u6a21\u5757",permalink:"/datadata-docs/docs/query/dql/math"},next:{title:"Json \u6a21\u5757",permalink:"/datadata-docs/docs/query/dql/json"}},l={},r=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>time.altzone: int</code>",id:"timealtzone-int",level:3},{value:"<code>time.timezone: int</code>",id:"timetimezone-int",level:3},{value:"<code>time.tzname: tuple[str, str]</code>",id:"timetzname-tuplestr-str",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>time.asctime(t: Time = ..., /) -&gt; str</code>",id:"timeasctimet-time------str",level:3},{value:"<code>def ctime(seconds: float | None = None, /) -&gt; str</code>",id:"def-ctimeseconds-float--none--none----str",level:3},{value:"<code>def gmtime(seconds: float | None = None, /) -&gt; Time</code>",id:"def-gmtimeseconds-float--none--none----time",level:3},{value:"<code>def localtime(seconds: float | None = None, /) -&gt; Time</code>",id:"def-localtimeseconds-float--none--none----time",level:3},{value:"<code>def mktime(t: Time, /) -&gt; float</code>",id:"def-mktimet-time----float",level:3},{value:"<code>def strftime(format: str, t: Time = ..., /) -&gt; str</code>",id:"def-strftimeformat-str-t-time------str",level:3},{value:"<code>def strptime(data_string: str, format: str = &quot;%a %b %d %H:%M:%S %Y&quot;, /) -&gt; Time</code>",id:"def-strptimedata_string-str-format-str--a-b-d-hms-y----time",level:3},{value:"<code>def time() -&gt; float</code>",id:"def-time---float",level:3}];function m(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"time"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7528\u4e8e\u5904\u7406\u65f6\u95f4\u7684\u51fd\u6570\u3002\u8fd9\u662f\u4e00\u4e2a\u5168\u5c40\u6a21\u5757\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 DQL \u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,d.jsx)(t.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,d.jsx)(t.h3,{id:"timealtzone-int",children:(0,d.jsx)(t.code,{children:"time.altzone: int"})}),"\n",(0,d.jsx)(t.p,{children:"\u8fd4\u56de\u683c\u6797\u5a01\u6cbb\u897f\u90e8\u7684\u590f\u4ee4\u65f6\u5730\u533a\u7684\u504f\u79fb\u79d2\u6570\u3002\u5982\u679c\u8be5\u5730\u533a\u5728\u683c\u6797\u5a01\u6cbb\u4e1c\u90e8\u4f1a\u8fd4\u56de\u8d1f\u503c\uff08\u5982\u897f\u6b27\uff0c\u5305\u62ec\u82f1\u56fd\uff09\u3002\u5bf9\u590f\u4ee4\u65f6\u542f\u7528\u5730\u533a\u624d\u80fd\u4f7f\u7528\u3002"}),"\n",(0,d.jsx)(t.h3,{id:"timetimezone-int",children:(0,d.jsx)(t.code,{children:"time.timezone: int"})}),"\n",(0,d.jsx)(t.p,{children:"\u5f53\u5730\uff08\u975e\u590f\u4ee4\u65f6\uff09\u65f6\u533a\u7684\u504f\u79fb\u91cf\uff0c\u4ee5 UTC \u4ee5\u897f\u7684\u79d2\u4e3a\u5355\u4f4d\uff08\u897f\u6b27\u5927\u90e8\u5206\u5730\u533a\u4e3a\u8d1f\u6570\uff0c\u7f8e\u56fd\u4e3a\u6b63\u6570\uff0c\u82f1\u56fd\u4e3a\u96f6\uff09\u3002"}),"\n",(0,d.jsx)(t.h3,{id:"timetzname-tuplestr-str",children:(0,d.jsx)(t.code,{children:"time.tzname: tuple[str, str]"})}),"\n",(0,d.jsx)(t.p,{children:"\u5c5e\u6027 time.tzname \u5305\u542b\u4e00\u5bf9\u6839\u636e\u60c5\u51b5\u7684\u4e0d\u540c\u800c\u4e0d\u540c\u7684\u5b57\u7b26\u4e32\uff0c\u5206\u522b\u662f\u5e26\u590f\u4ee4\u65f6\u7684\u672c\u5730\u65f6\u533a\u540d\u79f0\uff0c\u548c\u4e0d\u5e26\u7684\u3002"}),"\n",(0,d.jsx)(t.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,d.jsx)(t.h3,{id:"timeasctimet-time------str",children:(0,d.jsx)(t.code,{children:"time.asctime(t: Time = ..., /) -> str"})}),"\n",(0,d.jsx)(t.p,{children:'\u63a5\u53d7\u65f6\u95f4\u5bf9\u8c61\u5e76\u8fd4\u56de\u4e00\u4e2a\u53ef\u8bfb\u7684\u5f62\u5f0f\u4e3a"Tue Dec 11 18:07:14 2008"\uff082008 \u5e74 12 \u6708 11 \u65e5 \u5468\u4e8c 18 \u65f6 07 \u5206 14 \u79d2\uff09\u7684 24 \u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u3002'}),"\n",(0,d.jsx)(t.h3,{id:"def-ctimeseconds-float--none--none----str",children:(0,d.jsx)(t.code,{children:"def ctime(seconds: float | None = None, /) -> str"})}),"\n",(0,d.jsxs)(t.p,{children:["\u4f5c\u7528\u76f8\u5f53\u4e8e ",(0,d.jsx)(t.code,{children:"asctime(localtime(secs))"}),"\uff0c\u672a\u7ed9\u53c2\u6570\u76f8\u5f53\u4e8e ",(0,d.jsx)(t.code,{children:"asctime()"})]}),"\n",(0,d.jsx)(t.h3,{id:"def-gmtimeseconds-float--none--none----time",children:(0,d.jsx)(t.code,{children:"def gmtime(seconds: float | None = None, /) -> Time"})}),"\n",(0,d.jsx)(t.p,{children:"\u63a5\u6536\u65f6\u95f4\u6233\uff081970 \u7eaa\u5143\u540e\u7ecf\u8fc7\u7684\u6d6e\u70b9\u79d2\u6570\uff09\u5e76\u8fd4\u56de\u683c\u6797\u5a01\u6cbb\u5929\u6587\u65f6\u95f4\u4e0b\u7684\u65f6\u95f4 t\u3002"}),"\n",(0,d.jsx)(t.h3,{id:"def-localtimeseconds-float--none--none----time",children:(0,d.jsx)(t.code,{children:"def localtime(seconds: float | None = None, /) -> Time"})}),"\n",(0,d.jsx)(t.p,{children:"\u63a5\u6536\u65f6\u95f4\u6233\uff081970 \u7eaa\u5143\u540e\u7ecf\u8fc7\u7684\u6d6e\u70b9\u79d2\u6570\uff09\u5e76\u8fd4\u56de\u5f53\u5730\u65f6\u95f4\u4e0b\u7684\u65f6\u95f4 t\u3002"}),"\n",(0,d.jsx)(t.h3,{id:"def-mktimet-time----float",children:(0,d.jsx)(t.code,{children:"def mktime(t: Time, /) -> float"})}),"\n",(0,d.jsx)(t.p,{children:"\u63a5\u53d7\u65f6\u95f4\u5143\u7ec4\u5e76\u8fd4\u56de\u65f6\u95f4\u6233\uff081970 \u7eaa\u5143\u540e\u7ecf\u8fc7\u7684\u6d6e\u70b9\u79d2\u6570\uff09\u3002"}),"\n",(0,d.jsx)(t.h3,{id:"def-strftimeformat-str-t-time------str",children:(0,d.jsx)(t.code,{children:"def strftime(format: str, t: Time = ..., /) -> str"})}),"\n",(0,d.jsx)(t.p,{children:"\u63a5\u6536\u4ee5\u65f6\u95f4\u5143\u7ec4\uff0c\u5e76\u8fd4\u56de\u4ee5\u53ef\u8bfb\u5b57\u7b26\u4e32\u8868\u793a\u7684\u5f53\u5730\u65f6\u95f4\uff0c\u683c\u5f0f\u7531 fmt \u51b3\u5b9a\u3002"}),"\n",(0,d.jsx)(t.h3,{id:"def-strptimedata_string-str-format-str--a-b-d-hms-y----time",children:(0,d.jsx)(t.code,{children:'def strptime(data_string: str, format: str = "%a %b %d %H:%M:%S %Y", /) -> Time'})}),"\n",(0,d.jsx)(t.p,{children:"\u6839\u636e fmt \u7684\u683c\u5f0f\u628a\u4e00\u4e2a\u65f6\u95f4\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a\u65f6\u95f4\u5bf9\u8c61\u3002"}),"\n",(0,d.jsx)(t.h3,{id:"def-time---float",children:(0,d.jsx)(t.code,{children:"def time() -> float"})}),"\n",(0,d.jsx)(t.p,{children:"\u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u7684\u65f6\u95f4\u6233\uff081970 \u7eaa\u5143\u540e\u7ecf\u8fc7\u7684\u6d6e\u70b9\u79d2\u6570\uff09\u3002"})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},1100:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var d=i(758);const n={},s=d.createContext(n);function o(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);