(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[147],{2519:function(e,a,t){"use strict";t.r(a);var n=t(118),c=t(197),l=t(0),r=t.n(l),s=t(31);a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{variant:"h4",className:"mb-24"},"Auth0 Authentication Service Example"),r.a.createElement(c.a,{className:"mb-16",component:"p"},"With Auth0 Authentication in Fuse React."),r.a.createElement("ul",null,r.a.createElement("li",{className:"mb-12"},"You can ",r.a.createElement(s.a,{to:"/register"},"register"),"."),r.a.createElement("li",{className:"mb-12"},"You can ",r.a.createElement(s.a,{to:"/login"},"log in"),"."),r.a.createElement("li",{className:"mb-12"},"Also saves user data (user shortcuts, layout, and theme settings) as user_metadata to Auth0 Database.")),r.a.createElement(c.a,{className:"mt-32 mb-16",component:"p"},"Related Service folder is located at ",r.a.createElement("code",null,"/src/auth0Service")),r.a.createElement(c.a,{className:"my-24 italic",component:"p",color:"textSecondary"},"Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in",r.a.createElement("code",null,"src/app/App.js"),". The service initializes in the Auth component."),r.a.createElement(c.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),r.a.createElement(c.a,{className:"mb-16",component:"p"},"You need to paste the configuration of your Auth0 Project into",r.a.createElement("code",null,"src/app/services/auth0Service/auth0ServiceConfig.js")),r.a.createElement(n.a,{component:"pre",className:"language-jsx my-16"},'\n                               export const AUTH_CONFIG = {\n                                    domain     : "YOUR_DOMAIN",\n                                    clientId   : "YOUR_CLIENT_ID",\n                                    callbackUrl: "YOUR_DOMAIN/callback"\n                               };\n                            '))}}}]);