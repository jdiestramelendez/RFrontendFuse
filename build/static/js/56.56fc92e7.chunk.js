(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[56],{1306:function(e,n,t){"use strict";t.d(n,"a",(function(){return M}));var a=t(13),l=t(118),i=t(1276),m=t(1285),r=t(1267),o=t(1293),c=t(1294),p=t(2),u=t(0),T=t.n(u),s=t(12),E=t(9),f=t(72),d=t(73),y=t(129),C=t(128),h=t(1209),b=t(614),S=t(1264),g=t(1275),I=t(8),v=t(392),D=t(393),N=t(1307),x=t.n(N),O=Object(h.a)({productionPrefix:"iframe-"}),R=function(e){Object(y.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=n.call.apply(n,[this].concat(l))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(v.a)(Object(E.a)(Object(E.a)({},Object(b.a)()),{},{plugins:[].concat(Object(s.a)(Object(b.a)().plugins),[Object(D.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return T.a.createElement(T.a.Fragment,null,T.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),T.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,a=e.theme;return T.a.createElement(x.a,{head:this.renderHead(),ref:this.handleRef,className:Object(p.default)(t.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?T.a.createElement(S.b,{jss:this.state.jss,generateClassName:O,sheetsManager:this.state.sheetsManager},T.a.createElement(g.a,{theme:a},T.a.cloneElement(n,{container:this.state.container}))):null)}}]),t}(T.a.Component),j=Object(I.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(R);function w(e){var n=Object(u.useState)(e.currentTabIndex),t=Object(a.a)(n,2),s=t[0],E=t[1],f=e.component,d=e.raw,y=e.iframe,C=e.className;return T.a.createElement(m.a,{className:Object(p.default)(C,"shadow")},T.a.createElement(i.a,{position:"static",color:"default",className:"shadow-0"},T.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:s,onChange:function(e,n){E(n)}},f&&T.a.createElement(o.a,{classes:{root:"min-w-64"},icon:T.a.createElement(r.a,null,"remove_red_eye")}),d&&T.a.createElement(o.a,{classes:{root:"min-w-64"},icon:T.a.createElement(r.a,null,"code")}))),T.a.createElement("div",{className:"flex justify-center max-w-full"},T.a.createElement("div",{className:0===s?"flex flex-1 max-w-full":"hidden"},f&&(y?T.a.createElement(j,null,T.a.createElement(f,null)):T.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},T.a.createElement(f,null)))),T.a.createElement("div",{className:1===s?"flex flex-1":"hidden"},d&&T.a.createElement("div",{className:"flex flex-1"},T.a.createElement(l.a,{component:"pre",className:"language-javascript w-full"},d.default)))))}w.defaultProps={currentTabIndex:0};var M=w},2394:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2610),m=t(2611),r=t(2612),o=t(2614),c=t(2615),p=t(2613);function u(){return l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Sleep")))}},2395:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function BasicTimeline() {\n  return (\n    <Timeline>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2396:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2610),m=t(2611),r=t(2612),o=t(2614),c=t(2615),p=t(2613);function u(){return l.a.createElement(i.a,{align:"right"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Repeat")))}},2397:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function RightAlignedTimeline() {\n  return (\n    <Timeline align=\"right\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2398:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2610),m=t(2611),r=t(2612),o=t(2614),c=t(2615),p=t(2613);function u(){return l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Repeat")))}},2399:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function AlternateTimeline() {\n  return (\n    <Timeline align=\"alternate\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2400:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2610),m=t(2611),r=t(2612),o=t(2614),c=t(2615),p=t(2613);function u(){return l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{color:"primary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{color:"secondary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,null)),l.a.createElement(c.a,null,"Repeat")))}},2401:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function ColorsTimeline() {\n  return (\n    <Timeline align=\"alternate\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color=\"primary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color=\"secondary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2402:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),l=t.n(a),i=t(2610),m=t(2611),r=t(2612),o=t(2614),c=t(2615),p=t(2613);function u(){return l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Eat")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined",color:"primary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Code")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined",color:"secondary"}),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,"Sleep")),l.a.createElement(m.a,null,l.a.createElement(r.a,null,l.a.createElement(p.a,{variant:"outlined"})),l.a.createElement(c.a,null,"Repeat")))}},2403:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\n\nexport default function OutlinedTimeline() {\n  return (\n    <Timeline align=\"alternate\">\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Eat</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" color=\"primary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Code</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" color=\"secondary\" />\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>Sleep</TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot variant=\"outlined\" />\n        </TimelineSeparator>\n        <TimelineContent>Repeat</TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n"},2404:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),l=t.n(a),i=t(2610),m=t(2611),r=t(2612),o=t(2614),c=t(2615),p=t(2613),u=t(2616),T=t(197);function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{align:"alternate"},l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"09:30 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Eat"))),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"10:00 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Code"))),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"12:00 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Sleep"))),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(T.a,{color:"textSecondary"},"9:00 am")),l.a.createElement(r.a,null,l.a.createElement(p.a,null),l.a.createElement(o.a,null)),l.a.createElement(c.a,null,l.a.createElement(T.a,null,"Repeat")))))}},2405:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Timeline from '@material-ui/lab/Timeline';\nimport TimelineItem from '@material-ui/lab/TimelineItem';\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\nimport TimelineContent from '@material-ui/lab/TimelineContent';\nimport TimelineDot from '@material-ui/lab/TimelineDot';\nimport TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';\nimport Typography from '@material-ui/core/Typography';\n\nexport default function OppositeContentTimeline() {\n  return (\n    <React.Fragment>\n      <Timeline align=\"alternate\">\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">09:30 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Eat</Typography>\n          </TimelineContent>\n        </TimelineItem>\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">10:00 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Code</Typography>\n          </TimelineContent>\n        </TimelineItem>\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">12:00 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Sleep</Typography>\n          </TimelineContent>\n        </TimelineItem>\n        <TimelineItem>\n          <TimelineOppositeContent>\n            <Typography color=\"textSecondary\">9:00 am</Typography>\n          </TimelineOppositeContent>\n          <TimelineSeparator>\n            <TimelineDot />\n            <TimelineConnector />\n          </TimelineSeparator>\n          <TimelineContent>\n            <Typography>Repeat</Typography>\n          </TimelineContent>\n        </TimelineItem>\n      </Timeline>\n    </React.Fragment>\n  );\n}\n"},2406:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var a=t(0),l=t.n(a),i=t(1265),m=t(2610),r=t(2611),o=t(2612),c=t(2614),p=t(2615),u=t(2616),T=t(2613),s=t(2407),E=t.n(s),f=t(2408),d=t.n(f),y=t(2409),C=t.n(y),h=t(2410),b=t.n(h),S=t(196),g=t(197),I=Object(i.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function v(){var e=I();return l.a.createElement(m.a,{align:"alternate"},l.a.createElement(r.a,null,l.a.createElement(u.a,null,l.a.createElement(g.a,{variant:"body2",color:"textSecondary"},"9:30 am")),l.a.createElement(o.a,null,l.a.createElement(T.a,null,l.a.createElement(E.a,null)),l.a.createElement(c.a,null)),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Eat"),l.a.createElement(g.a,null,"Because you need strength")))),l.a.createElement(r.a,null,l.a.createElement(u.a,null,l.a.createElement(g.a,{variant:"body2",color:"textSecondary"},"10:00 am")),l.a.createElement(o.a,null,l.a.createElement(T.a,{color:"primary"},l.a.createElement(d.a,null)),l.a.createElement(c.a,null)),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Code"),l.a.createElement(g.a,null,"Because it's awesome!")))),l.a.createElement(r.a,null,l.a.createElement(o.a,null,l.a.createElement(T.a,{color:"primary",variant:"outlined"},l.a.createElement(C.a,null)),l.a.createElement(c.a,{className:e.secondaryTail})),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Sleep"),l.a.createElement(g.a,null,"Because you need rest")))),l.a.createElement(r.a,null,l.a.createElement(o.a,null,l.a.createElement(T.a,{color:"secondary"},l.a.createElement(b.a,null))),l.a.createElement(p.a,null,l.a.createElement(S.a,{elevation:3,className:e.paper},l.a.createElement(g.a,{variant:"h6",component:"h1"},"Repeat"),l.a.createElement(g.a,null,"Because this is the life you love!")))))}},2411:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Timeline from \'@material-ui/lab/Timeline\';\nimport TimelineItem from \'@material-ui/lab/TimelineItem\';\nimport TimelineSeparator from \'@material-ui/lab/TimelineSeparator\';\nimport TimelineConnector from \'@material-ui/lab/TimelineConnector\';\nimport TimelineContent from \'@material-ui/lab/TimelineContent\';\nimport TimelineOppositeContent from \'@material-ui/lab/TimelineOppositeContent\';\nimport TimelineDot from \'@material-ui/lab/TimelineDot\';\nimport FastfoodIcon from \'@material-ui/icons/Fastfood\';\nimport LaptopMacIcon from \'@material-ui/icons/LaptopMac\';\nimport HotelIcon from \'@material-ui/icons/Hotel\';\nimport RepeatIcon from \'@material-ui/icons/Repeat\';\nimport Paper from \'@material-ui/core/Paper\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles((theme) => ({\n  paper: {\n    padding: \'6px 16px\',\n  },\n  secondaryTail: {\n    backgroundColor: theme.palette.secondary.main,\n  },\n}));\n\nexport default function CustomizedTimeline() {\n  const classes = useStyles();\n\n  return (\n    <Timeline align="alternate">\n      <TimelineItem>\n        <TimelineOppositeContent>\n          <Typography variant="body2" color="textSecondary">\n            9:30 am\n          </Typography>\n        </TimelineOppositeContent>\n        <TimelineSeparator>\n          <TimelineDot>\n            <FastfoodIcon />\n          </TimelineDot>\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Eat\n            </Typography>\n            <Typography>Because you need strength</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineOppositeContent>\n          <Typography variant="body2" color="textSecondary">\n            10:00 am\n          </Typography>\n        </TimelineOppositeContent>\n        <TimelineSeparator>\n          <TimelineDot color="primary">\n            <LaptopMacIcon />\n          </TimelineDot>\n          <TimelineConnector />\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Code\n            </Typography>\n            <Typography>Because it&apos;s awesome!</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color="primary" variant="outlined">\n            <HotelIcon />\n          </TimelineDot>\n          <TimelineConnector className={classes.secondaryTail} />\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Sleep\n            </Typography>\n            <Typography>Because you need rest</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineSeparator>\n          <TimelineDot color="secondary">\n            <RepeatIcon />\n          </TimelineDot>\n        </TimelineSeparator>\n        <TimelineContent>\n          <Paper elevation={3} className={classes.paper}>\n            <Typography variant="h6" component="h1">\n              Repeat\n            </Typography>\n            <Typography>Because this is the life you love!</Typography>\n          </Paper>\n        </TimelineContent>\n      </TimelineItem>\n    </Timeline>\n  );\n}\n'},2609:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),i=t(1306),m=(t(118),t(1274)),r=t(1267),o=t(197),c=t(1265),p=Object(c.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return p(),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},l.a.createElement(m.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/timeline",target:"_blank",role:"button"},l.a.createElement(r.a,null,"link"),l.a.createElement("span",{className:"mx-4"},"Reference"))),l.a.createElement(o.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Timeline"),l.a.createElement(o.a,{className:"description"},"The timeline displays a list of events in chronological order."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement("strong",null,"Note:")," This component is not documented in the ",l.a.createElement("a",{href:"https://material.io/"},"Material Design guidelines"),", but Material-UI supports it."),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"A basic timeline showing list of events."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2394).default,raw:t(2395)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Right aligned timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can be positioned on the right side of the events."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2396).default,raw:t(2397)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Alternating timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can display the events on alternating sides."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2398).default,raw:t(2399)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Color"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The ",l.a.createElement("code",null,"TimelineDot")," can appear in different colors."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2400).default,raw:t(2401)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Outlined"),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2402).default,raw:t(2403)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Opposite content"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can display content on opposite sides."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2404).default,raw:t(2405)})),l.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized timeline"),l.a.createElement(o.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",l.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),l.a.createElement(o.a,{className:"mb-16",component:"div"},l.a.createElement(i.a,{className:"my-24",iframe:!1,component:t(2406).default,raw:t(2411)})))}}}]);