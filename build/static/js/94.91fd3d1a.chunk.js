(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[94],{1313:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(30),n=a(35),c=a(1265),l=a(2),o=a(0),i=a.n(o),s=a(39),m=a(1275),u=a(32),d=a(6);var p=function(e){var t=Object(s.a)(),a=Object(d.c)(Object(u.c)(t.palette.primary.main));return i.a.createElement("div",{className:e.classes.header},e.header&&i.a.createElement(m.a,{theme:a},e.header))},f=a(13),b=a(99),E=a(1297),h=a(1301);var g=function(e){var t=Object(s.a)(),a=Object(d.c)(Object(u.c)(t.palette.primary.main)),r=e.classes;return i.a.createElement(i.a.Fragment,null,e.header&&i.a.createElement(m.a,{theme:a},i.a.createElement("div",{className:Object(l.default)(r.sidebarHeader,e.variant)},e.header)),e.content&&i.a.createElement(n.a,{className:r.sidebarContent,enable:e.innerScroll},e.content))};var x=i.a.forwardRef((function(e,t){var a=Object(o.useState)(!1),r=Object(f.a)(a,2),n=r[0],c=r[1],s=e.classes;Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:m}}));var m=function(){c(!n)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{lgUp:"permanent"===e.variant},i.a.createElement(h.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return m()},disableSwipeToOpen:!0,classes:{root:Object(l.default)(s.sidebarWrapper,e.variant),paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},i.a.createElement(g,e))),"permanent"===e.variant&&i.a.createElement(E.a,{mdDown:!0},i.a.createElement(b.a,{variant:"permanent",className:Object(l.default)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},i.a.createElement(g,e))))})),v=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),N=i.a.forwardRef((function(e,t){var a=Object(o.useRef)(null),r=Object(o.useRef)(null),c=Object(o.useRef)(null),s=v(e),m=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return i.a.useImperativeHandle(t,(function(){return{rootRef:c,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),i.a.createElement("div",{className:Object(l.default)(s.root,e.innerScroll&&s.innerScroll),ref:c},i.a.createElement("div",{className:s.topBg}),i.a.createElement("div",{className:"flex container w-full"},u&&i.a.createElement(x,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:c}),i.a.createElement("div",{className:Object(l.default)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",m&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},i.a.createElement(p,{header:e.header,classes:s}),i.a.createElement("div",{className:Object(l.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&i.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&i.a.createElement(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),m&&i.a.createElement(x,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:c})))}));N.defaultProps={};var y=i.a.memo(N)},1345:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return h}));var r,n=a(30),c=a(26),l=a.n(c),o=a(44),i=a(22),s=a(50),m=a.n(s),u=Object(i.b)("eCommerceApp/orders/getOrders",Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),d=Object(i.b)("eCommerceApp/orders/removeOrders",function(){var e=Object(o.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,m.a.post("/api/e-commerce-app/remove-orders",{orderIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(i.c)({}),f=p.getSelectors((function(e){return e.eCommerceApp.orders})),b=f.selectAll,E=(f.selectById,Object(i.d)({name:"eCommerceApp/orders",initialState:p.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(r={},Object(n.a)(r,u.fulfilled,p.setAll),Object(n.a)(r,d.fulfilled,(function(e,t){return p.removeMany(e,t.payload)})),r)})),h=E.actions.setOrdersSearchText;t.a=E.reducer},1346:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return h}));var r,n=a(30),c=a(26),l=a.n(c),o=a(44),i=a(22),s=a(50),m=a.n(s),u=Object(i.b)("eCommerceApp/products/getProducts",Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/e-commerce-app/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),d=Object(i.b)("eCommerceApp/products/removeProducts",function(){var e=Object(o.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,m.a.post("/api/e-commerce-app/remove-products",{productIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(i.c)({}),f=p.getSelectors((function(e){return e.eCommerceApp.products})),b=f.selectAll,E=(f.selectById,Object(i.d)({name:"eCommerceApp/products",initialState:p.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(r={},Object(n.a)(r,u.fulfilled,p.setAll),Object(n.a)(r,d.fulfilled,(function(e,t){return p.removeMany(e,t.payload)})),r)})),h=E.actions.setProductsSearchText;t.a=E.reducer},1358:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"e",(function(){return p})),a.d(t,"c",(function(){return E})),a.d(t,"d",(function(){return h}));var r,n=a(30),c=a(26),l=a.n(c),o=a(44),i=a(22),s=a(50),m=a.n(s),u=a(28),d=Object(i.b)("eCommerceApp/product/getProduct",function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/e-commerce-app/product",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",void 0===r?null:r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(i.b)("eCommerceApp/product/saveProduct",function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/e-commerce-app/product/save",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(i.d)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:u.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(r={},Object(n.a)(r,d.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,p.fulfilled,(function(e,t){return t.payload})),r)}),b=f.actions,E=b.newProduct,h=b.resetProduct;t.a=f.reducer},1359:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return f}));var r,n=a(30),c=a(26),l=a.n(c),o=a(44),i=a(22),s=a(50),m=a.n(s),u=Object(i.b)("eCommerceApp/order/getOrder",function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/e-commerce-app/order",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",void 0===r?null:r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(i.b)("eCommerceApp/order/saveOrder",function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/e-commerce-app/order/save",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(i.d)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:function(){return null}},extraReducers:(r={},Object(n.a)(r,u.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,d.fulfilled,(function(e,t){return t.payload})),r)}),f=p.actions.resetOrder;t.a=p.reducer},1374:function(e,t,a){"use strict";var r=a(103),n=a(1359),c=a(1345),l=a(1358),o=a(1346),i=Object(r.c)({products:o.a,product:l.a,orders:c.a,order:n.a});t.a=i},1460:function(e,t,a){"use strict";var r=a(7),n=a(2),c=a(0),l=a.n(c),o=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];t.a=function(e){return l.a.createElement("div",{className:Object(n.default)("inline text-12 p-4 rounded truncate",r.a.find(o,{name:e.name}).color)},e.name)}},2700:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(107),c=a(1313),l=a(1300),o=a(1549),i=a(1524),s=a(1523),m=a(1274),u=a(1267),d=a(39),p=a(1293),f=a(1294),b=a(1273),E=a(197),h=a(1334),g=a.n(h),x=a(228),v=a(1490),N=a(0),y=a.n(N),O=a(6),w=a(42),S=a(31),j=a(132),C=a(1374),k=a(1359),A=a(1285),T=a(1292),I=a(1265),P=a(1370),R=a(1373),D=a(1357),H=a(1371),U=a(1372),q=a(2),B=Object(I.a)((function(e){return{root:{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"".concat(0,"!important")},"& th:last-child, & td:last-child":{paddingRight:"".concat(0,"!important")}}},divider:{width:1,backgroundColor:e.palette.divider,height:144},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:e.palette.getContrastText(e.palette.primary.dark),opacity:.5}}}})),L=y.a.memo((function(e){var t=B(e),a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return y.a.createElement("div",{className:Object(q.default)(t.root,"flex-grow flex-shrink-0 p-0")},e.order&&y.a.createElement(A.a,{className:"w-xl mx-auto shadow-0"},y.a.createElement(T.a,{className:"p-88 print:p-0"},y.a.createElement(E.a,{color:"textSecondary",className:"mb-32"},e.order.date),y.a.createElement("div",{className:"flex justify-between"},y.a.createElement("div",null,y.a.createElement("table",{className:"mb-16"},y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",{className:"pb-4"},y.a.createElement(E.a,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),y.a.createElement("td",{className:"pb-4 px-8"},y.a.createElement(E.a,{className:"font-light",variant:"h6",color:"inherit"},e.order.reference))))),y.a.createElement(E.a,{color:"textSecondary"},"".concat(e.order.customer.firstName," ").concat(e.order.customer.lastName)),e.order.customer.invoiceAddress.address&&y.a.createElement(E.a,{color:"textSecondary"},e.order.customer.invoiceAddress.address),e.order.customer.phone&&y.a.createElement(E.a,{color:"textSecondary"},e.order.customer.phone),e.order.customer.email&&y.a.createElement(E.a,{color:"textSecondary"},e.order.customer.email)),y.a.createElement("div",{className:Object(q.default)(t.seller,"flex items-center p-16")},y.a.createElement("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),y.a.createElement("div",{className:Object(q.default)(t.divider,"divider mx-8 h-96")}),y.a.createElement("div",{className:"px-8"},y.a.createElement(E.a,{color:"inherit"},"FUSE INC."),y.a.createElement(E.a,{color:"inherit"},"2810 Country Club Road Cranford, NJ 07016"),y.a.createElement(E.a,{color:"inherit"},"+66 123 455 87"),y.a.createElement(E.a,{color:"inherit"},"hello@fuseinc.com"),y.a.createElement(E.a,{color:"inherit"},"www.fuseinc.com")))),y.a.createElement("div",{className:"mt-64"},y.a.createElement(P.a,{className:"simple"},y.a.createElement(H.a,null,y.a.createElement(U.a,null,y.a.createElement(D.a,null,"PRODUCT"),y.a.createElement(D.a,null,"PRICE"),y.a.createElement(D.a,{align:"right"},"QUANTITY"),y.a.createElement(D.a,{align:"right"},"TOTAL"))),y.a.createElement(R.a,null,e.order.products.map((function(e){return y.a.createElement(U.a,{key:e.id},y.a.createElement(D.a,null,y.a.createElement(E.a,{variant:"subtitle1"},e.name)),y.a.createElement(D.a,{align:"right"},a.format(e.price)),y.a.createElement(D.a,{align:"right"},e.quantity),y.a.createElement(D.a,{align:"right"},a.format(e.price*e.quantity)))})))),y.a.createElement(P.a,{className:"simple mt-32"},y.a.createElement(R.a,null,y.a.createElement(U.a,null,y.a.createElement(D.a,null,y.a.createElement(E.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),y.a.createElement(D.a,{align:"right"},y.a.createElement(E.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(e.order.subtotal)))),y.a.createElement(U.a,null,y.a.createElement(D.a,null,y.a.createElement(E.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),y.a.createElement(D.a,{align:"right"},y.a.createElement(E.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(e.order.tax)))),y.a.createElement(U.a,null,y.a.createElement(D.a,null,y.a.createElement(E.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),y.a.createElement(D.a,{align:"right"},y.a.createElement(E.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(e.order.discount)))),y.a.createElement(U.a,null,y.a.createElement(D.a,null,y.a.createElement(E.a,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),y.a.createElement(D.a,{align:"right"},y.a.createElement(E.a,{className:"font-light",variant:"h4",color:"textSecondary"},a.format(e.order.total))))))),y.a.createElement("div",{className:"mt-96"},y.a.createElement(E.a,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),y.a.createElement("div",{className:"flex"},y.a.createElement("div",{className:"flex-shrink-0"},y.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),y.a.createElement(E.a,{className:"font-medium mb-64 px-24",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."))))))})),F=a(1460);function W(e){return y.a.createElement(b.a,{title:e.text,placement:"top"},y.a.createElement(u.a,{className:"text-red"},"place"))}t.default=Object(x.a)("eCommerceApp",C.a)((function(e){var t=Object(O.b)(),a=Object(O.c)((function(e){return e.eCommerceApp.order})),b=Object(d.a)(),h=Object(w.i)(),x=Object(N.useState)(0),C=Object(r.a)(x,2),A=C[0],T=C[1],I=Object(N.useState)(!1),P=Object(r.a)(I,2),R=P[0],D=P[1],H=Object(N.useState)("shipping"),U=Object(r.a)(H,2),q=U[0],B=U[1];return Object(j.b)((function(){t(Object(k.b)(h)).then((function(e){e.payload||D(!0)}))}),[t,h]),Object(N.useEffect)((function(){return function(){t(Object(k.c)()),D(!1)}}),[t]),R?y.a.createElement(n.a,{delay:100},y.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center h-full"},y.a.createElement(E.a,{color:"textSecondary",variant:"h5"},"There is no such order!"),y.a.createElement(m.a,{className:"mt-24",component:S.a,variant:"outlined",to:"/apps/e-commerce/orders",color:"inherit"},"Go to Orders Page"))):y.a.createElement(c.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:a&&y.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},y.a.createElement("div",{className:"flex flex-1 flex-col items-center sm:items-start"},y.a.createElement(n.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(E.a,{className:"flex items-center sm:mb-12",component:S.a,role:"button",to:"/apps/e-commerce/orders",color:"inherit"},y.a.createElement(u.a,{className:"text-20"},"ltr"===b.direction?"arrow_back":"arrow_forward"),y.a.createElement("span",{className:"mx-4"},"Orders"))),y.a.createElement("div",{className:"flex flex-col min-w-0 items-center sm:items-start"},y.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(E.a,{className:"text-16 sm:text-20 truncate"},"Order ".concat(a.reference))),y.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(E.a,{variant:"caption"},"From ".concat(a.customer.firstName," ").concat(a.customer.lastName)))))),contentToolbar:y.a.createElement(f.a,{value:A,onChange:function(e,t){T(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},y.a.createElement(p.a,{className:"h-64",label:"Order Details"}),y.a.createElement(p.a,{className:"h-64",label:"Products"}),y.a.createElement(p.a,{className:"h-64",label:"Invoice"})),content:a&&y.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl w-full"},0===A&&y.a.createElement("div",null,y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(u.a,{color:"action"},"account_circle"),y.a.createElement(E.a,{className:"h2 mx-16",color:"textSecondary"},"Customer")),y.a.createElement("div",{className:"mb-24"},y.a.createElement("div",{className:"table-responsive mb-48"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Name"),y.a.createElement("th",null,"Email"),y.a.createElement("th",null,"Phone"),y.a.createElement("th",null,"Company"))),y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",null,y.a.createElement("div",{className:"flex items-center"},y.a.createElement(l.a,{src:a.customer.avatar}),y.a.createElement(E.a,{className:"truncate mx-8"},"".concat(a.customer.firstName," ").concat(a.customer.lastName)))),y.a.createElement("td",null,y.a.createElement(E.a,{className:"truncate"},a.customer.email)),y.a.createElement("td",null,y.a.createElement(E.a,{className:"truncate"},a.customer.phone)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.customer.company)))))),y.a.createElement(o.a,{className:"shadow",expanded:"shipping"===q,onChange:function(){return B("shipping"!==q&&"shipping")}},y.a.createElement(s.a,{expandIcon:y.a.createElement(g.a,null)},y.a.createElement(E.a,{className:"font-600"},"Shipping Address")),y.a.createElement(i.a,{className:"flex flex-col md:flex-row"},y.a.createElement(E.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},a.customer.shippingAddress.address),y.a.createElement("div",{className:"w-full h-320"},y.a.createElement(v.a,{bootstrapURLKeys:{key:""},defaultZoom:15,defaultCenter:[a.customer.shippingAddress.lat,a.customer.shippingAddress.lng]},y.a.createElement(W,{text:a.customer.shippingAddress.address,lat:a.customer.shippingAddress.lat,lng:a.customer.shippingAddress.lng}))))),y.a.createElement(o.a,{className:"shadow",expanded:"invoice"===q,onChange:function(){return B("invoice"!==q&&"invoice")}},y.a.createElement(s.a,{expandIcon:y.a.createElement(g.a,null)},y.a.createElement(E.a,{className:"font-600"},"Invoice Address")),y.a.createElement(i.a,{className:"flex flex-col md:flex-row"},y.a.createElement(E.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},a.customer.invoiceAddress.address),y.a.createElement("div",{className:"w-full h-320"},y.a.createElement(v.a,{bootstrapURLKeys:{key:""},defaultZoom:15,defaultCenter:[a.customer.invoiceAddress.lat,a.customer.invoiceAddress.lng]},y.a.createElement(W,{text:a.customer.invoiceAddress.address,lat:a.customer.invoiceAddress.lat,lng:a.customer.invoiceAddress.lng}))))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(u.a,{color:"action"},"access_time"),y.a.createElement(E.a,{className:"h2 mx-16",color:"textSecondary"},"Order Status")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Status"),y.a.createElement("th",null,"Updated On"))),y.a.createElement("tbody",null,a.status.map((function(e){return y.a.createElement("tr",{key:e.id},y.a.createElement("td",null,y.a.createElement(F.a,{name:e.name})),y.a.createElement("td",null,e.date))})))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(u.a,{color:"action"},"attach_money"),y.a.createElement(E.a,{className:"h2 mx-16",color:"textSecondary"},"Payment")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"TransactionID"),y.a.createElement("th",null,"Payment Method"),y.a.createElement("th",null,"Amount"),y.a.createElement("th",null,"Date"))),y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.transactionId)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.method)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.amount)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},a.payment.date))))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(u.a,{color:"action"},"local_shipping"),y.a.createElement(E.a,{className:"h2 mx-12",color:"textSecondary"},"Shipping")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Tracking Code"),y.a.createElement("th",null,"Carrier"),y.a.createElement("th",null,"Weight"),y.a.createElement("th",null,"Fee"),y.a.createElement("th",null,"Date"))),y.a.createElement("tbody",null,a.shippingDetails.map((function(e){return y.a.createElement("tr",{key:e.date},y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.tracking)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.carrier)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.weight)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.fee)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.date)))}))))))),1===A&&y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"ID"),y.a.createElement("th",null,"Image"),y.a.createElement("th",null,"Name"),y.a.createElement("th",null,"Price"),y.a.createElement("th",null,"Quantity"))),y.a.createElement("tbody",null,a.products.map((function(e){return y.a.createElement("tr",{key:e.id},y.a.createElement("td",{className:"w-64"},e.id),y.a.createElement("td",{className:"w-80"},y.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),y.a.createElement("td",null,y.a.createElement(E.a,{component:S.a,to:"/apps/e-commerce/products/".concat(e.id),className:"truncate",style:{color:"inherit",textDecoration:"underline"}},e.name)),y.a.createElement("td",{className:"w-64 text-right"},y.a.createElement("span",{className:"truncate"},"$",e.price)),y.a.createElement("td",{className:"w-64 text-right"},y.a.createElement("span",{className:"truncate"},e.quantity)))}))))),2===A&&y.a.createElement(L,{order:a})),innerScroll:!0})}))}}]);