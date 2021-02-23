(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/login_gui-8337daa5e48c400e7c9aa782d776340d.jpg"},180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/loophole_gui_1-0d9b1d59a1a499ee6737f453650d893b.gif"},181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/loophole_gui_2-aaf52587b10534a697c59e2275f8453e.gif"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(118)),i={type:"blog",slug:"announcing-loophole-desktop",title:"Announcing Loophole Desktop",author:"\u0141ukasz Sowa",author_title:"Loophole Core Team",author_url:"https://github.com/morishiri",author_image_url:"https://avatars3.githubusercontent.com/u/11832884?s=460&v=4",tags:["tunnel","hosting","desktop","gui"]},l={permalink:"/blog/announcing-loophole-desktop",source:"@site/blog/2021-02-18-announcing-loophole-desktop.md",description:"Loophole is a reverse proxy that enables you to expose your localhost to the internet. Some developers, especially Windows users, like running graphical applications.",date:"2021-02-18T00:00:00.000Z",tags:[{label:"tunnel",permalink:"/blog/tags/tunnel"},{label:"hosting",permalink:"/blog/tags/hosting"},{label:"desktop",permalink:"/blog/tags/desktop"},{label:"gui",permalink:"/blog/tags/gui"}],title:"Announcing Loophole Desktop",readingTime:1.775,truncated:!0,nextItem:{title:"Share your files with ease!",permalink:"/blog/share-your-files-with-ease"}},c=[{value:"Getting  Started",id:"getting--started",children:[]},{value:"Run EXE",id:"run-exe",children:[]},{value:"Login Page",id:"login-page",children:[]},{value:"Tunnel startup",id:"tunnel-startup",children:[]},{value:"Customise your Tunnel",id:"customise-your-tunnel",children:[]},{value:"Dashboard Features",id:"dashboard-features",children:[]}],s={rightToc:c};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Loophole is a reverse proxy that enables you to expose your localhost to the internet. Some developers, especially Windows users, like running graphical applications. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://media.giphy.com/media/h1uchvpmq4h3NiBhG1/giphy.gif",alt:"Login"}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"We have heard you!")," "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"}," Introducing ",Object(r.b)("inlineCode",{parentName:"em"},"Loophole Desktop"),", a simple and powerful GUI application to run developer-friendly tunnels. Loophole is making reaching the world easy and safe. "))),Object(r.b)("p",null,"The new dashboard hosts all the features available in the CLI in a more user-friendly form. Let\u2019s get started in exploring basic features and getting acquainted with the usage."),Object(r.b)("p",null,"First, go to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/download"}),"Download")," page and navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"Desktop")," section. Now choose your operating system and the auto-download should begin."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Currently, it is available starting from version 1.0.0-beta.13!"))),Object(r.b)("h3",{id:"getting--started"},"Getting  Started"),Object(r.b)("p",null,"On Linux or OSX you can unzip Loophole from a terminal with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ unzip /path/to/loophole-desktop-<version>.zip\n")),Object(r.b)("p",null,"On Windows, just double click ",Object(r.b)("inlineCode",{parentName:"p"},"loophole-desktop-<version>.zip")," ."),Object(r.b)("h3",{id:"run-exe"},"Run EXE"),Object(r.b)("p",null,"Simply double click on it or run from the terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole-desktop\n")),Object(r.b)("h3",{id:"login-page"},"Login Page"),Object(r.b)("p",null,"Loophole was built with privacy and security in mind. Before we have a look at the features, let\u2019s log in. Click on Login button and follow the instructions on the screen."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Login",src:n(179).default})),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you face issues with Login, click ",Object(r.b)("strong",{parentName:"p"},"Restart the process")," under the Login section. If the problem still persist, email at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:loophole@main.dev"}),"loophole@main.dev"),"."))),Object(r.b)("h3",{id:"tunnel-startup"},"Tunnel startup"),Object(r.b)("p",null,"Starting a tunnel has never been so easy. Simply, click the + button and fill in the host name, port, and click submit. You can alternatievly click on ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," from the side bar menu."),Object(r.b)("p",null,Object(r.b)("img",{alt:"tunnel",src:n(180).default})),Object(r.b)("h3",{id:"customise-your-tunnel"},"Customise your Tunnel"),Object(r.b)("p",null,"Loophole lets you choose from the three options to customize your tunnel services."),Object(r.b)("p",null,"a. Choose your custom hostname as:"),Object(r.b)("p",null," ",Object(r.b)("inlineCode",{parentName:"p"},"<custom hostname>.loophole.site")),Object(r.b)("p",null,"b. Enable basic authentication to prohibit unauthorized access to your web app."),Object(r.b)("p",null,"c. Disable the loophole proxy page to view the regular 502 error page."),Object(r.b)("p",null,Object(r.b)("img",{alt:"custom",src:n(181).default})),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Find all your active tunnels by clicking ",Object(r.b)("strong",{parentName:"p"},"List")," from your side menu!"))),Object(r.b)("h3",{id:"dashboard-features"},"Dashboard Features"),Object(r.b)("p",null,"Other services offered by Loophole GUI include "),Object(r.b)("p",null,"a. Sharing your directory with another user."),Object(r.b)("p",null,"b. Webdav application."),Object(r.b)("p",null,"To know more about these services, visit our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/blog"}),"Blogs"),"!"))}p.isMDXComponent=!0}}]);