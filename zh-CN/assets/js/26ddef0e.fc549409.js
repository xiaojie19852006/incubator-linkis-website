"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[6706],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96883:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"\u767b\u5f55\u6587\u6863",sidebar_position:2},o=void 0,u={unversionedId:"api/login_api",id:"version-1.1.0/api/login_api",isDocsHomePage:!1,title:"\u767b\u5f55\u6587\u6863",description:"1.\u5bf9\u63a5LDAP\u670d\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/api/login_api.md",sourceDirName:"api",slug:"/api/login_api",permalink:"/zh-CN/docs/latest/api/login_api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/api/login_api.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"\u767b\u5f55\u6587\u6863",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/latest/api/overview"},next:{title:"\u5143\u6570\u636e\u63a5\u53e3",permalink:"/zh-CN/docs/latest/api/http/data-source-manager-api"}},s=[{value:"1.\u5bf9\u63a5LDAP\u670d\u52a1",id:"1\u5bf9\u63a5ldap\u670d\u52a1",children:[]},{value:"2.\u514d\u767b\u5f55\u914d\u7f6e",id:"2\u514d\u767b\u5f55\u914d\u7f6e",children:[]},{value:"3.\u767b\u5f55\u63a5\u53e3\u6c47\u603b",id:"3\u767b\u5f55\u63a5\u53e3\u6c47\u603b",children:[]},{value:"4.\u63a5\u53e3\u8be6\u89e3",id:"4\u63a5\u53e3\u8be6\u89e3",children:[{value:"4.1 \u767b\u5f55",id:"41-\u767b\u5f55",children:[]},{value:"4.2 \u767b\u51fa",id:"42-\u767b\u51fa",children:[]},{value:"4.3 \u5fc3\u8df3",id:"43-\u5fc3\u8df3",children:[]}]}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u5bf9\u63a5ldap\u670d\u52a1"},"1.\u5bf9\u63a5LDAP\u670d\u52a1"),(0,l.kt)("p",null,"\u8fdb\u5165/conf\u76ee\u5f55\uff0c\u6267\u884c\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"    vim linkis-mg-gateway.properties\n")),(0,l.kt)("p",null,"\u6dfb\u52a0LDAP\u76f8\u5173\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wds.linkis.ldap.proxy.url=ldap://127.0.0.1:389/ # \u60a8\u7684LDAP\u670d\u52a1URL\nwds.linkis.ldap.proxy.baseDN=dc=webank,dc=com # \u60a8\u7684LDAP\u670d\u52a1\u7684\u914d\u7f6e    \n")),(0,l.kt)("h2",{id:"2\u514d\u767b\u5f55\u914d\u7f6e"},"2.\u514d\u767b\u5f55\u914d\u7f6e"),(0,l.kt)("p",null,"\u5982\u4f55\u6253\u5f00\u6d4b\u8bd5\u6a21\u5f0f\uff0c\u5b9e\u73b0\u514d\u767b\u5f55\uff1f\u8fdb\u5165/conf\u76ee\u5f55\uff0c\u6267\u884c\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"     vim linkis-mg-gateway.properties\n")),(0,l.kt)("p",null,"\u5c06\u6d4b\u8bd5\u6a21\u5f0f\u6253\u5f00\uff0c\u53c2\u6570\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    wds.linkis.test.mode=true   # \u6253\u5f00\u6d4b\u8bd5\u6a21\u5f0f\n    wds.linkis.test.user=hadoop  # \u6307\u5b9a\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\uff0c\u6240\u6709\u8bf7\u6c42\u90fd\u4ee3\u7406\u7ed9\u54ea\u4e2a\u7528\u6237\n")),(0,l.kt)("h2",{id:"3\u767b\u5f55\u63a5\u53e3\u6c47\u603b"},"3.\u767b\u5f55\u63a5\u53e3\u6c47\u603b"),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4ee5\u4e0b\u51e0\u4e2a\u4e0e\u767b\u5f55\u76f8\u5173\u7684\u63a5\u53e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u767b\u5f55"),(0,l.kt)("li",{parentName:"ul"},"\u767b\u51fa"),(0,l.kt)("li",{parentName:"ul"},"\u5fc3\u8df3")),(0,l.kt)("h2",{id:"4\u63a5\u53e3\u8be6\u89e3"},"4.\u63a5\u53e3\u8be6\u89e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linkis Restful\u63a5\u53e3\u7684\u8fd4\u56de\uff0c\u90fd\u9075\u5faa\u4ee5\u4e0b\u7684\u6807\u51c6\u8fd4\u56de\u683c\u5f0f\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "",\n "status": 0,\n "message": "",\n "data": {}\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684Restful API URI\uff0c\u4e3b\u8981\u662f WebSocket \u6a21\u5f0f\u9700\u8981\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"status\uff1a\u8fd4\u56de\u72b6\u6001\u4fe1\u606f\uff0c\u5176\u4e2d\uff1a-1\u8868\u793a\u6ca1\u6709\u767b\u5f55\uff0c0\u8868\u793a\u6210\u529f\uff0c1\u8868\u793a\u9519\u8bef\uff0c2\u8868\u793a\u9a8c\u8bc1\u5931\u8d25\uff0c3\u8868\u793a\u6ca1\u8be5\u63a5\u53e3\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u8fd4\u56de\u5177\u4f53\u7684\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"message\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684\u63d0\u793a\u4fe1\u606f\u3002\u5982\u679cstatus\u975e0\u65f6\uff0cmessage\u8fd4\u56de\u7684\u662f\u9519\u8bef\u4fe1\u606f\uff0c\u5176\u4e2ddata\u6709\u53ef\u80fd\u5b58\u5728stack\u5b57\u6bb5\uff0c\u8fd4\u56de\u5177\u4f53\u7684\u5806\u6808\u4fe1\u606f\u3002 ")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Linkis Restful \u63a5\u53e3\u7684\u89c4\u8303\uff0c\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"development/development_specification/api.md"},"Linkis Restful \u63a5\u53e3\u89c4\u8303")),(0,l.kt)("h3",{id:"41-\u767b\u5f55"},"4.1 \u767b\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/login"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'      {\n        "userName": "",\n        "password": ""\n      }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "method": null,\n        "status": 0,\n        "message": "login successful(\u767b\u5f55\u6210\u529f)\uff01",\n        "data": {\n            "isAdmin": false,\n            "userName": ""\n        }\n     }\n')),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"isAdmin: Linkis\u53ea\u6709admin\u7528\u6237\u548c\u975eadmin\u7528\u6237\uff0cadmin\u7528\u6237\u7684\u552f\u4e00\u7279\u6743\uff0c\u5c31\u662f\u652f\u6301\u5728Linkis\u7ba1\u7406\u53f0\u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u5386\u53f2\u4efb\u52a1\u3002")),(0,l.kt)("h3",{id:"42-\u767b\u51fa"},"4.2 \u767b\u51fa"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/logout"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",{parentName:"li"},"\u65e0\u53c2\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "method": "/api/rest_j/v1/user/logout",\n        "status": 0,\n        "message": "\u9000\u51fa\u767b\u5f55\u6210\u529f\uff01"\n    }\n')),(0,l.kt)("h3",{id:"43-\u5fc3\u8df3"},"4.3 \u5fc3\u8df3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/heartbeat"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",{parentName:"li"},"\u65e0\u53c2\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n         "method": "/api/rest_j/v1/user/heartbeat",\n         "status": 0,\n         "message": "\u7ef4\u7cfb\u5fc3\u8df3\u6210\u529f\uff01"\n    }\n')))}m.isMDXComponent=!0}}]);