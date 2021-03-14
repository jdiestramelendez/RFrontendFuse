(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[35],{1306:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var a=t(13),o=t(118),r=t(1276),i=t(1285),c=t(1267),s=t(1293),l=t(1294),m=t(2),u=t(0),d=t.n(u),p=t(12),g=t(9),f=t(72),h=t(73),b=t(129),y=t(128),E=t(1209),P=t(614),v=t(1264),N=t(1275),x=t(8),w=t(392),S=t(393),j=t(1307),R=t.n(j),O=Object(E.a)({productionPrefix:"iframe-"}),T=function(e){Object(b.a)(t,e);var n=Object(y.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(w.a)(Object(g.a)(Object(g.a)({},Object(P.a)()),{},{plugins:[].concat(Object(p.a)(Object(P.a)().plugins),[Object(S.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,a=e.theme;return d.a.createElement(R.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(t.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(v.b,{jss:this.state.jss,generateClassName:O,sheetsManager:this.state.sheetsManager},d.a.createElement(N.a,{theme:a},d.a.cloneElement(n,{container:this.state.container}))):null)}}]),t}(d.a.Component),C=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(T);function k(e){var n=Object(u.useState)(e.currentTabIndex),t=Object(a.a)(n,2),p=t[0],g=t[1],f=e.component,h=e.raw,b=e.iframe,y=e.className;return d.a.createElement(i.a,{className:Object(m.default)(y,"shadow")},d.a.createElement(r.a,{position:"static",color:"default",className:"shadow-0"},d.a.createElement(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,n){g(n)}},f&&d.a.createElement(s.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),h&&d.a.createElement(s.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===p?"flex flex-1 max-w-full":"hidden"},f&&(b?d.a.createElement(C,null,d.a.createElement(f,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(f,null)))),d.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}k.defaultProps={currentTabIndex:0};var I=k},2102:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),o=t.n(a),r=t(1265),i=t(2584),c=Object(r.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function s(){var e=c();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{count:10}),o.a.createElement(i.a,{count:10,color:"primary"}),o.a.createElement(i.a,{count:10,color:"secondary"}),o.a.createElement(i.a,{count:10,disabled:!0}))}},2104:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Pagination from '@material-ui/lab/Pagination';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function BasicPagination() {\n  const classes = useStyles();\n  return (\n    <div className={classes.root}>\n      <Pagination count={10} />\n      <Pagination count={10} color=\"primary\" />\n      <Pagination count={10} color=\"secondary\" />\n      <Pagination count={10} disabled />\n    </div>\n  );\n}\n"},2105:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),o=t.n(a),r=t(1265),i=t(2584),c=Object(r.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function s(){var e=c();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{count:10,variant:"outlined"}),o.a.createElement(i.a,{count:10,variant:"outlined",color:"primary"}),o.a.createElement(i.a,{count:10,variant:"outlined",color:"secondary"}),o.a.createElement(i.a,{count:10,variant:"outlined",disabled:!0}))}},2106:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Pagination from \'@material-ui/lab/Pagination\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    \'& > *\': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function PaginationOutlined() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Pagination count={10} variant="outlined" />\n      <Pagination count={10} variant="outlined" color="primary" />\n      <Pagination count={10} variant="outlined" color="secondary" />\n      <Pagination count={10} variant="outlined" disabled />\n    </div>\n  );\n}\n'},2107:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),o=t.n(a),r=t(1265),i=t(2584),c=Object(r.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function s(){var e=c();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{count:10,shape:"rounded"}),o.a.createElement(i.a,{count:10,variant:"outlined",shape:"rounded"}))}},2108:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Pagination from '@material-ui/lab/Pagination';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function PaginationRounded() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Pagination count={10} shape=\"rounded\" />\n      <Pagination count={10} variant=\"outlined\" shape=\"rounded\" />\n    </div>\n  );\n}\n"},2109:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),o=t.n(a),r=t(1265),i=t(2584),c=Object(r.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function s(){var e=c();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{count:10,size:"small"}),o.a.createElement(i.a,{count:10}),o.a.createElement(i.a,{count:10,size:"large"}))}},2110:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Pagination from '@material-ui/lab/Pagination';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function PaginationSize() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Pagination count={10} size=\"small\" />\n      <Pagination count={10} />\n      <Pagination count={10} size=\"large\" />\n    </div>\n  );\n}\n"},2111:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),o=t.n(a),r=t(1265),i=t(2584),c=Object(r.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function s(){var e=c();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{count:10,showFirstButton:!0,showLastButton:!0}),o.a.createElement(i.a,{count:10,hidePrevButton:!0,hideNextButton:!0}))}},2112:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Pagination from '@material-ui/lab/Pagination';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function PaginationButtons() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Pagination count={10} showFirstButton showLastButton />\n      <Pagination count={10} hidePrevButton hideNextButton />\n    </div>\n  );\n}\n"},2113:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),o=t.n(a),r=t(1265),i=t(2584),c=Object(r.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function s(){var e=c();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{count:11,defaultPage:6,siblingCount:0}),o.a.createElement(i.a,{count:11,defaultPage:6})," ",o.a.createElement(i.a,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),o.a.createElement(i.a,{count:11,defaultPage:6,boundaryCount:2}))}},2114:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Pagination from '@material-ui/lab/Pagination';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function PaginationRanges() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Pagination count={11} defaultPage={6} siblingCount={0} />\n      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}\n      <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />\n      <Pagination count={11} defaultPage={6} boundaryCount={2} />\n    </div>\n  );\n}\n"},2115:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var a=t(13),o=t(0),r=t.n(o),i=t(1265),c=t(197),s=t(2584),l=Object(i.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}}));function m(){var e=l(),n=r.a.useState(1),t=Object(a.a)(n,2),o=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,null,"Page: ",o),r.a.createElement(s.a,{count:10,page:o,onChange:function(e,n){i(n)}}))}},2116:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Typography from '@material-ui/core/Typography';\nimport Pagination from '@material-ui/lab/Pagination';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function PaginationControlled() {\n  const classes = useStyles();\n  const [page, setPage] = React.useState(1);\n  const handleChange = (event, value) => {\n    setPage(value);\n  };\n\n  return (\n    <div className={classes.root}>\n      <Typography>Page: {page}</Typography>\n      <Pagination count={10} page={page} onChange={handleChange} />\n    </div>\n  );\n}\n"},2117:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var a=t(0),o=t.n(a),r=t(42),i=t(31),c=t(2584),s=t(2695);function l(){return o.a.createElement(r.a,{initialEntries:["/inbox"],initialIndex:0},o.a.createElement(r.c,null,(function(e){var n=e.location,t=new URLSearchParams(n.search),a=parseInt(t.get("page")||"1",10);return o.a.createElement(c.a,{page:a,count:10,renderItem:function(e){return o.a.createElement(s.a,Object.assign({component:i.a,to:"/inbox".concat(1===e.page?"":"?page=".concat(e.page))},e))}})})))}},2118:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { MemoryRouter, Route } from 'react-router';\nimport { Link } from 'react-router-dom';\nimport Pagination from '@material-ui/lab/Pagination';\nimport PaginationItem from '@material-ui/lab/PaginationItem';\n\nexport default function PaginationLink() {\n  return (\n    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>\n      <Route>\n        {({ location }) => {\n          const query = new URLSearchParams(location.search);\n          const page = parseInt(query.get('page') || '1', 10);\n          return (\n            <Pagination\n              page={page}\n              count={10}\n              renderItem={(item) => (\n                <PaginationItem\n                  component={Link}\n                  to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}\n                  {...item}\n                />\n              )}\n            />\n          );\n        }}\n      </Route>\n    </MemoryRouter>\n  );\n}\n"},2119:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var a=t(166),o=t(0),r=t.n(o),i=t(2103),c=t(1265),s=Object(c.a)({ul:{listStyle:"none",padding:0,margin:0,display:"flex"}});function l(){var e=s(),n=Object(i.a)({count:10}).items;return r.a.createElement("nav",null,r.a.createElement("ul",{className:e.ul},n.map((function(e,n){var t=e.page,o=e.type,i=e.selected,c=Object(a.a)(e,["page","type","selected"]),s=null;return s="start-ellipsis"===o||"end-ellipsis"===o?"\u2026":"page"===o?r.a.createElement("button",Object.assign({type:"button",style:{fontWeight:i?"bold":void 0}},c),t):r.a.createElement("button",Object.assign({type:"button"},c),o),r.a.createElement("li",{key:n},s)}))))}},2120:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { usePagination } from '@material-ui/lab/Pagination';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles({\n  ul: {\n    listStyle: 'none',\n    padding: 0,\n    margin: 0,\n    display: 'flex',\n  },\n});\n\nexport default function UsePagination() {\n  const classes = useStyles();\n  const { items } = usePagination({\n    count: 10,\n  });\n\n  return (\n    <nav>\n      <ul className={classes.ul}>\n        {items.map(({ page, type, selected, ...item }, index) => {\n          let children = null;\n\n          if (type === 'start-ellipsis' || type === 'end-ellipsis') {\n            children = '\u2026';\n          } else if (type === 'page') {\n            children = (\n              <button type=\"button\" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>\n                {page}\n              </button>\n            );\n          } else {\n            children = (\n              <button type=\"button\" {...item}>\n                {type}\n              </button>\n            );\n          }\n\n          return <li key={index}>{children}</li>;\n        })}\n      </ul>\n    </nav>\n  );\n}\n"},2121:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t(13),o=t(0),r=t.n(o),i=t(2498);function c(){var e=r.a.useState(2),n=Object(a.a)(e,2),t=n[0],o=n[1],c=r.a.useState(10),s=Object(a.a)(c,2),l=s[0],m=s[1];return r.a.createElement(i.a,{component:"div",count:100,page:t,onChangePage:function(e,n){o(n)},rowsPerPage:l,onChangeRowsPerPage:function(e){m(parseInt(e.target.value,10)),o(0)}})}},2122:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport TablePagination from '@material-ui/core/TablePagination';\n\nexport default function TablePaginationDemo() {\n  const [page, setPage] = React.useState(2);\n  const [rowsPerPage, setRowsPerPage] = React.useState(10);\n\n  const handleChangePage = (event, newPage) => {\n    setPage(newPage);\n  };\n\n  const handleChangeRowsPerPage = (event) => {\n    setRowsPerPage(parseInt(event.target.value, 10));\n    setPage(0);\n  };\n\n  return (\n    <TablePagination\n      component=\"div\"\n      count={100}\n      page={page}\n      onChangePage={handleChangePage}\n      rowsPerPage={rowsPerPage}\n      onChangeRowsPerPage={handleChangeRowsPerPage}\n    />\n  );\n}\n"},2583:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(1306),i=t(118),c=t(1274),s=t(1267),l=t(197),m=t(1265),u=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return u(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(c.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/pagination",target:"_blank",role:"button"},o.a.createElement(s.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(l.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Pagination"),o.a.createElement(l.a,{className:"description"},"The Pagination component enables the user to select a specific page from a range of pages."),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic pagination"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2102).default,raw:t(2104)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Outlined pagination"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2105).default,raw:t(2106)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Rounded pagination"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2107).default,raw:t(2108)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Pagination size"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2109).default,raw:t(2110)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Buttons"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2111).default,raw:t(2112)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Pagination ranges"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"You can specify how many digits to display either side of current page with the ",o.a.createElement("code",null,"siblingRange")," prop, and adjacent to the start and end page number with the ",o.a.createElement("code",null,"boundaryRange")," prop."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2113).default,raw:t(2114)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Controlled pagination"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2115).default,raw:t(2116)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Router integration"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2117).default,raw:t(2118)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},o.a.createElement("code",null,"usePagination")),o.a.createElement(l.a,{className:"mb-16",component:"div"},"For advanced customization use cases, we expose a headless ",o.a.createElement("code",null,"usePagination()")," hook. It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component uses this hook internally."),o.a.createElement(i.a,{component:"pre",className:"language-jsx"}," \nimport { usePagination } from '@material-ui/lab/Pagination';\n"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2119).default,raw:t(2120)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Table pagination"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("code",null,"Pagination")," component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog."),o.a.createElement(l.a,{className:"mb-16",component:"div"},"For the pagination of a large set of tabular data, you should use the ",o.a.createElement("code",null,"TablePagination")," component."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:t(2121).default,raw:t(2122)})),o.a.createElement(l.a,{className:"mb-16",component:"div"},"You can learn more about this use case in the ",o.a.createElement("a",{href:"/components/tables/#custom-pagination-options"},"table section")," of the documentation."),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(l.a,{className:"text-24 mt-32 mb-8",component:"h3"},"ARIA"),o.a.createElement(l.a,{className:"mb-16",component:"div"},'The root node has a role of "navigation" and aria-label "pagination navigation" by default. The page items have an aria-label that identifies the purpose of the item ("go to first page", "go to previous page", "go to page 1" etc.). You can override these using the ',o.a.createElement("code",null,"getItemAriaLabel")," prop."),o.a.createElement(l.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Keyboard"),o.a.createElement(l.a,{className:"mb-16",component:"div"},'The pagination items are in tab order, with a tabindex of "0".'))}}}]);