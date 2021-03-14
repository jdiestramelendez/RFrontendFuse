(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[76],{1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n(13),r=n(118),o=n(1276),l=n(1285),i=n(1267),c=n(1293),u=n(1294),m=n(2),s=n(0),p=n.n(s),d=n(12),f=n(9),b=n(72),B=n(73),E=n(129),h=n(128),y=n(1209),v=n(614),g=n(1264),x=n(1275),w=n(8),O=n(392),T=n(393),G=n(1307),N=n.n(G),j=Object(y.a)({productionPrefix:"iframe-"}),k=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(O.a)(Object(f.a)(Object(f.a)({},Object(v.a)()),{},{plugins:[].concat(Object(d.a)(Object(v.a)().plugins),[Object(T.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),p.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return p.a.createElement(N.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?p.a.createElement(g.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},p.a.createElement(x.a,{theme:a},p.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(p.a.Component),C=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(k);function S(e){var t=Object(s.useState)(e.currentTabIndex),n=Object(a.a)(t,2),d=n[0],f=n[1],b=e.component,B=e.raw,E=e.iframe,h=e.className;return p.a.createElement(l.a,{className:Object(m.default)(h,"shadow")},p.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},p.a.createElement(u.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){f(t)}},b&&p.a.createElement(c.a,{classes:{root:"min-w-64"},icon:p.a.createElement(i.a,null,"remove_red_eye")}),B&&p.a.createElement(c.a,{classes:{root:"min-w-64"},icon:p.a.createElement(i.a,null,"code")}))),p.a.createElement("div",{className:"flex justify-center max-w-full"},p.a.createElement("div",{className:0===d?"flex flex-1 max-w-full":"hidden"},b&&(E?p.a.createElement(C,null,p.a.createElement(b,null)):p.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},p.a.createElement(b,null)))),p.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},B&&p.a.createElement("div",{className:"flex flex-1"},p.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},B.default)))))}S.defaultProps={currentTabIndex:0};var D=S},1845:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(1274),l=n(1810),i=n(1265),c=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}}));function u(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{variant:"text",color:"primary","aria-label":"text primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")))}},1846:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function BasicButtonGroup() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ButtonGroup color=\"primary\" aria-label=\"outlined primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"contained\" color=\"primary\" aria-label=\"contained primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"text\" color=\"primary\" aria-label=\"text primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n    </div>\n  );\n}\n"},1847:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(1274),l=n(1810),i=n(1265),c=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}}));function u(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{size:"small","aria-label":"small outlined button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{color:"secondary","aria-label":"outlined secondary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{size:"large",color:"primary","aria-label":"large outlined primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")))}},1848:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function GroupSizesColors() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ButtonGroup size=\"small\" aria-label=\"small outlined button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup color=\"secondary\" aria-label=\"outlined secondary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup size=\"large\" color=\"primary\" aria-label=\"large outlined primary button group\">\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n    </div>\n  );\n}\n"},1849:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),o=n(1274),l=n(1810),i=n(1265),c=Object(i.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function u(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{orientation:"vertical",color:"primary","aria-label":"vertical outlined primary button group"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"contained"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")),r.a.createElement(l.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"text"},r.a.createElement(o.a,null,"One"),r.a.createElement(o.a,null,"Two"),r.a.createElement(o.a,null,"Three")))}},1850:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Button from \'@material-ui/core/Button\';\nimport ButtonGroup from \'@material-ui/core/ButtonGroup\';\nimport { makeStyles } from \'@material-ui/core/styles\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    \'& > *\': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function GroupOrientation() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ButtonGroup\n        orientation="vertical"\n        color="primary"\n        aria-label="vertical outlined primary button group"\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        orientation="vertical"\n        color="primary"\n        aria-label="vertical contained primary button group"\n        variant="contained"\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        orientation="vertical"\n        color="primary"\n        aria-label="vertical contained primary button group"\n        variant="text"\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n    </div>\n  );\n}\n'},1851:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(13),r=n(0),o=n.n(r),l=n(1335),i=n(1274),c=n(1810),u=n(1852),m=n.n(u),s=n(1211),p=n(388),d=n(196),f=n(1224),b=n(1269),B=n(1217),E=["Create a merge commit","Squash and merge","Rebase and merge"];function h(){var e=o.a.useState(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],u=o.a.useRef(null),h=o.a.useState(1),y=Object(a.a)(h,2),v=y[0],g=y[1],x=function(e){u.current&&u.current.contains(e.target)||r(!1)};return o.a.createElement(l.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement(l.a,{item:!0,xs:12},o.a.createElement(c.a,{variant:"contained",color:"primary",ref:u,"aria-label":"split button"},o.a.createElement(i.a,{onClick:function(){console.info("You clicked ".concat(E[v]))}},E[v]),o.a.createElement(i.a,{color:"primary",size:"small","aria-controls":n?"split-button-menu":void 0,"aria-expanded":n?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){r((function(e){return!e}))}},o.a.createElement(m.a,null))),o.a.createElement(f.a,{open:n,anchorEl:u.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,n=e.placement;return o.a.createElement(p.a,Object.assign({},t,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),o.a.createElement(d.a,null,o.a.createElement(s.a,{onClickAway:x},o.a.createElement(B.a,{id:"split-button-menu"},E.map((function(e,t){return o.a.createElement(b.a,{key:e,disabled:2===t,selected:t===v,onClick:function(e){return function(e,t){g(t),r(!1)}(0,t)}},e)}))))))}))))}},1853:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Grid from '@material-ui/core/Grid';\nimport Button from '@material-ui/core/Button';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\nimport Grow from '@material-ui/core/Grow';\nimport Paper from '@material-ui/core/Paper';\nimport Popper from '@material-ui/core/Popper';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport MenuList from '@material-ui/core/MenuList';\n\nconst options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];\n\nexport default function SplitButton() {\n  const [open, setOpen] = React.useState(false);\n  const anchorRef = React.useRef(null);\n  const [selectedIndex, setSelectedIndex] = React.useState(1);\n\n  const handleClick = () => {\n    console.info(`You clicked ${options[selectedIndex]}`);\n  };\n\n  const handleMenuItemClick = (event, index) => {\n    setSelectedIndex(index);\n    setOpen(false);\n  };\n\n  const handleToggle = () => {\n    setOpen((prevOpen) => !prevOpen);\n  };\n\n  const handleClose = (event) => {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  return (\n    <Grid container direction=\"column\" alignItems=\"center\">\n      <Grid item xs={12}>\n        <ButtonGroup variant=\"contained\" color=\"primary\" ref={anchorRef} aria-label=\"split button\">\n          <Button onClick={handleClick}>{options[selectedIndex]}</Button>\n          <Button\n            color=\"primary\"\n            size=\"small\"\n            aria-controls={open ? 'split-button-menu' : undefined}\n            aria-expanded={open ? 'true' : undefined}\n            aria-label=\"select merge strategy\"\n            aria-haspopup=\"menu\"\n            onClick={handleToggle}\n          >\n            <ArrowDropDownIcon />\n          </Button>\n        </ButtonGroup>\n        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>\n          {({ TransitionProps, placement }) => (\n            <Grow\n              {...TransitionProps}\n              style={{\n                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',\n              }}\n            >\n              <Paper>\n                <ClickAwayListener onClickAway={handleClose}>\n                  <MenuList id=\"split-button-menu\">\n                    {options.map((option, index) => (\n                      <MenuItem\n                        key={option}\n                        disabled={index === 2}\n                        selected={index === selectedIndex}\n                        onClick={(event) => handleMenuItemClick(event, index)}\n                      >\n                        {option}\n                      </MenuItem>\n                    ))}\n                  </MenuList>\n                </ClickAwayListener>\n              </Paper>\n            </Grow>\n          )}\n        </Popper>\n      </Grid>\n    </Grid>\n  );\n}\n"},1854:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),r=n.n(a),o=n(1810),l=n(1274);function i(){return r.a.createElement(o.a,{disableElevation:!0,variant:"contained",color:"primary"},r.a.createElement(l.a,null,"One"),r.a.createElement(l.a,null,"Two"))}},1855:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport Button from '@material-ui/core/Button';\n\nexport default function DisableElevation() {\n  return (\n    <ButtonGroup disableElevation variant=\"contained\" color=\"primary\">\n      <Button>One</Button>\n      <Button>Two</Button>\n    </ButtonGroup>\n  );\n}\n"},2561:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1306),l=(n(118),n(1274)),i=n(1267),c=n(197),u=n(1265),m=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return m(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/button-group",target:"_blank",role:"button"},r.a.createElement(i.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Button group"),r.a.createElement(c.a,{className:"description"},"The ButtonGroup component can be used to group related buttons."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic button group"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1845).default,raw:n(1846)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Sizes and colors"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1847).default,raw:n(1848)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Vertical group"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1849).default,raw:n(1850)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Split button"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement("code",null,"ButtonGroup")," can also be used to create a split button. The dropdown can change the button action (as in this example), or be used to immediately trigger a related action."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1851).default,raw:n(1853)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Disabled elevation"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"You can remove the elevation with the ",r.a.createElement("code",null,"disableElevation")," prop."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1854).default,raw:n(1855)})))}}}]);