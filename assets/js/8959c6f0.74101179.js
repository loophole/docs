"use strict";(self.webpackChunkloophole_website=self.webpackChunkloophole_website||[]).push([[4533],{4137:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(o),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},803:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=o(7462),r=o(3366),a=(o(7294),o(4137)),l=["components"],s={slug:"expose",title:"Expose a local resource to the Internet"},i=void 0,u={unversionedId:"guides/expose",id:"guides/expose",title:"Expose a local resource to the Internet",description:"If you don't know what port your web server is listening on, check in the logs of your running application, it should tell you that.",source:"@site/docs/guides/expose.md",sourceDirName:"guides",slug:"/guides/expose",permalink:"/docs/guides/expose",editUrl:"https://github.com/loophole/website/edit/master/docs/guides/expose.md",tags:[],version:"current",frontMatter:{slug:"expose",title:"Expose a local resource to the Internet"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/guides/auth"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},p=[{value:"Custom Subdomain Names",id:"custom-subdomain-names",children:[],level:3},{value:"Verbose Mode",id:"verbose-mode",children:[],level:3}],c={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you don't know what port your web server is listening on, check in the logs of your running application, it should tell you that.\nSome of the most common ones are 8080, 8000, 3000 or 1313."),(0,a.kt)("p",null,"Example: Expose a web server on port 8000 of your local machine to the Internet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ loophole http 8000\n\n# or for 1.0.0-beta.8 and older\n$ loophole 8000\n")),(0,a.kt)("p",null,"Example: Expose a directory from your local machine to the Internet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ loophole dir ./my/local/path --hostname myhostname\n")),(0,a.kt)("h3",{id:"custom-subdomain-names"},"Custom Subdomain Names"),(0,a.kt)("p",null,"Loophole assigns random hexadecimal names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party webhook, it can be frustrating if the tunnel name changes or is difficult to read."),(0,a.kt)("p",null,"You can specify a custom subdomain for your tunnel URL with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname")," flag"),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ loophole http 8000 --hostname myhostname\n\n# or for 1.0.0-beta.8 and older\n$ loophole 8000 --hostname myhostname\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ loophole dir ./my/local/path --hostname myhostname\n")),(0,a.kt)("h3",{id:"verbose-mode"},"Verbose Mode"),(0,a.kt)("p",null,"Verbose mode flag helps you understand loophole in a greater context. It provides the verbose output for the command used along."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ loophole http 8000 --verbose\n\n# or for 1.0.0-beta.8 and older\n$ loophole 8000 --verbose\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ loophole dir ./my/local/path --verbose\n")),(0,a.kt)("p",null,"After starting the tunnel with the above command you'll start seeing some ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," level logs together with the default ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO")," entries.\nIt may be useful in case something is not working and you want to share more details to the Loophole dev team."))}m.isMDXComponent=!0}}]);