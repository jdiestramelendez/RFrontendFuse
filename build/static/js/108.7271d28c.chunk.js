(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[108],{1348:function(e,t,a){"use strict";a.d(t,"f",(function(){return I})),a.d(t,"m",(function(){return A})),a.d(t,"l",(function(){return k})),a.d(t,"g",(function(){return C})),a.d(t,"h",(function(){return S})),a.d(t,"k",(function(){return B})),a.d(t,"i",(function(){return D})),a.d(t,"b",(function(){return E})),a.d(t,"e",(function(){return N})),a.d(t,"c",(function(){return T})),a.d(t,"j",(function(){return L})),a.d(t,"n",(function(){return H})),a.d(t,"a",(function(){return G}));var r=a(30),n=a(12),c=a(26),s=a.n(c),d=a(44),i=a(22),o=a(50),u=a.n(o),p=a(28),l=a(154),b=a(7),f=a(40);var m=function(e){return e=e||{},b.a.defaults(e,{id:p.a.generateGUID(),name:"",description:"",idAttachmentCover:"",idMembers:[],idLabels:[],attachments:[],subscribed:!0,checklists:[],checkItems:0,checkItemsChecked:0,comments:[],activities:[],due:""})};var h,v=function(e){return e=e||{},b.a.defaults(e,{id:p.a.generateGUID(),name:"",idCards:[]})},x=a(13),g=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),c=Object(x.a)(n,1)[0];return r.splice(a,0,c),r},j=g,O=function(e,t,a){var r=b.a.find(e,{id:t.droppableId}),n=b.a.find(e,{id:a.droppableId}),c=r.idCards[t.index];if(t.droppableId===a.droppableId){var s=g(r.idCards,t.index,a.index);return e.map((function(e){return e.id===t.droppableId&&(e.idCards=s),e}))}return r.idCards.splice(t.index,1),n.idCards.splice(a.index,0,c),e.map((function(e){return e.id===t.droppableId?r:e.id===a.droppableId?n:e}))},w=a(1393),y=a(1361),I=Object(i.b)("scrumboardApp/board/getBoard",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,e.prev=1,e.next=4,u.a.get("/api/scrumboard-app/board",{params:t});case 4:return n=e.sent,e.next=7,n.data;case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(1),r(Object(f.c)({message:e.t0.response.data,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),l.a.push({pathname:"/apps/scrumboard/boards"}),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(i.b)("scrumboardApp/board/reorderList",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d,i,o,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=n().scrumboardApp.board,d=c.lists,i=j(b.a.merge([],d),t.source.index,t.destination.index),e.next=6,u.a.post("/api/scrumboard-app/list/order",{boardId:c.id,lists:i});case 6:return o=e.sent,e.next=9,o.data;case 9:return p=e.sent,r(Object(f.c)({message:"List Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.abrupt("return",p);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(i.b)("scrumboardApp/board/reorderCard",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d,i,o,p,l,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.source,n=t.destination,c=a.dispatch,d=a.getState,i=d().scrumboardApp.board,o=i.lists,p=O(b.a.merge([],o),r,n),e.next=7,u.a.post("/api/scrumboard-app/card/order",{boardId:i.id,lists:p});case 7:return l=e.sent,e.next=10,l.data;case 10:return m=e.sent,c(Object(f.c)({message:"Card Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.abrupt("return",m);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(i.b)("scrumboardApp/board/newCard",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listId,c=t.cardTitle,a.dispatch,a.getState,e.next=4,u.a.post("/api/scrumboard-app/card/new",{boardId:r,listId:n,data:m({name:c})});case 4:return d=e.sent,e.next=7,d.data;case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),S=Object(i.b)("scrumboardApp/board/newList",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listTitle,a.dispatch,a.getState,e.next=4,u.a.post("/api/scrumboard-app/list/new",{boardId:r,data:v({name:n})});case 4:return c=e.sent,e.next=7,c.data;case 7:return d=e.sent,e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(i.b)("scrumboardApp/board/renameList",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listId,c=t.listTitle,a.dispatch,a.getState,e.next=4,u.a.post("/api/scrumboard-app/list/rename",{boardId:r,listId:n,listTitle:c});case 4:return d=e.sent,e.next=7,d.data;case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),D=Object(i.b)("scrumboardApp/board/removeList",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listId,a.dispatch,a.getState,e.next=4,u.a.post("/api/scrumboard-app/list/remove",{boardId:r,listId:n});case 4:return c=e.sent,e.next=7,c.data;case 7:return d=e.sent,e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(i.b)("scrumboardApp/board/changeBoardSettings",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,r=a.getState,n=r().scrumboardApp.board,c=b.a.merge({},n.settings,t),e.next=5,u.a.post("/api/scrumboard-app/board/settings/update",{boardId:n.id,settings:c});case 5:return d=e.sent,e.next=8,d.data;case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(i.b)("scrumboardApp/board/deleteBoard",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,u.a.post("/api/scrumboard-app/board/delete",{boardId:t});case 3:return r=e.sent,l.a.push({pathname:"/apps/scrumboard/boards"}),e.next=7,r.data;case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(i.b)("scrumboardApp/board/copyBoard",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,a.getState,n=b.a.merge({},t,{id:p.a.generateGUID(),name:"".concat(t.name," (Copied)"),uri:"".concat(t.uri,"-copied")}),r(Object(w.c)(n)),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(i.b)("scrumboardApp/board/renameBoard",function(){var e=Object(d.a)(s.a.mark((function e(t,a){var r,n,c,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.boardTitle,a.dispatch,a.getState,e.next=4,u.a.post("/api/scrumboard-app/board/rename",{boardId:r,boardTitle:n});case 4:return c=e.sent,e.next=7,c.data;case 7:return d=e.sent,e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),z=Object(i.d)({name:"scrumboardApp/boards",initialState:null,reducers:{resetBoard:function(e,t){return null},addLabel:function(e,t){e.labels=[].concat(Object(n.a)(e.labels),[t.payload])}},extraReducers:(h={},Object(r.a)(h,I.fulfilled,(function(e,t){return t.payload})),Object(r.a)(h,A.fulfilled,(function(e,t){e.lists=t.payload})),Object(r.a)(h,k.fulfilled,(function(e,t){e.lists=t.payload})),Object(r.a)(h,S.fulfilled,(function(e,t){e.lists=t.payload})),Object(r.a)(h,C.fulfilled,(function(e,t){return t.payload})),Object(r.a)(h,B.fulfilled,(function(e,t){var a=t.payload,r=a.listId,n=a.listTitle;e.lists=e.lists.map((function(e){return e.id===r&&(e.name=n),e}))})),Object(r.a)(h,D.fulfilled,(function(e,t){e.lists=b.a.reject(e.lists,{id:t.payload})})),Object(r.a)(h,E.fulfilled,(function(e,t){e.settings=t.payload})),Object(r.a)(h,N.fulfilled,(function(e,t){({})})),Object(r.a)(h,L.fulfilled,(function(e,t){e.name=t.payload})),Object(r.a)(h,y.e.fulfilled.type,(function(e,t){e.cards=e.cards.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(r.a)(h,y.d.fulfilled,(function(e,t){var a=t.payload;e.cards=b.a.reject(e.cards,{id:a}),e.lists=e.lists.map((function(e){return b.a.set(e,"idCards",b.a.reject(e.idCards,(function(e){return e===a}))),e}))})),h)}),U=z.actions,H=U.resetBoard,G=U.addLabel;t.d=z.reducer},1361:function(e,t,a){"use strict";a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return h}));var r=a(30),n=a(26),c=a.n(n),s=a(44),d=a(22),i=a(50),o=a.n(i),u=a(40),p=Object(d.b)("scrumboardApp/card/updateCard",function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n,s,d,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.card,s=a.dispatch,e.next=4,o.a.post("/api/scrumboard-app/card/update",{boardId:r,card:n});case 4:return d=e.sent,e.next=7,d.data;case 7:return i=e.sent,s(Object(u.c)({message:"Card Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),l=Object(d.b)("scrumboardApp/card/removeCard",function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n,s,d,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.cardId,s=a.dispatch,e.next=4,o.a.post("/api/scrumboard-app/card/remove",{boardId:r,cardId:n});case 4:return d=e.sent,e.next=7,d.data;case 7:return i=e.sent,s(h()),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),b=Object(d.d)({name:"scrumboardApp/card",initialState:{dialogOpen:!1,data:null},reducers:{openCardDialog:function(e,t){e.dialogOpen=!0,e.data=t.payload},closeCardDialog:function(e,t){e.dialogOpen=!1,e.data=null}},extraReducers:Object(r.a)({},p.fulfilled,(function(e,t){e.data=t.payload}))}),f=b.actions,m=f.openCardDialog,h=f.closeCardDialog;t.b=b.reducer},1393:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"e",(function(){return j})),a.d(t,"d",(function(){return w}));var r=a(30),n=a(26),c=a.n(n),s=a(44),d=a(22),i=a(50),o=a.n(i),u=a(154),p=a(28),l=a(7),b=[{id:"26022e4129ad3a5sc28b36cd",name:"High Priority",class:"bg-red text-white"},{id:"56027e4119ad3a5dc28b36cd",name:"Design",class:"bg-orange text-white"},{id:"5640635e19ad3a5dc21416b2",name:"App",class:"bg-blue text-white"},{id:"6540635g19ad3s5dc31412b2",name:"Feature",class:"bg-green text-white"}],f=[{id:"56027c1930450d8bf7b10758",name:"Alice Freeman",avatar:"assets/images/avatars/alice.jpg"},{id:"26027s1930450d8bf7b10828",name:"Danielle Obrien",avatar:"assets/images/avatars/danielle.jpg"},{id:"76027g1930450d8bf7b10958",name:"James Lewis",avatar:"assets/images/avatars/james.jpg"},{id:"36027j1930450d8bf7b10158",name:"Admin RIB",avatar:"assets/images/avatars/Velazquez.jpg"}];var m=function(e){return e=e||{},l.a.defaults(e,{name:"Untitled Board",uri:"untitled-board",id:p.a.generateGUID(),settings:{color:"",subscribed:!0,cardCoverImages:!0},lists:[],cards:[],members:f,labels:b})},h=Object(d.b)("scrumboardApp/boards/getBoards",Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/scrumboard-app/boards");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),v=Object(d.b)("scrumboardApp/boards/newBoard",function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,e.next=3,o.a.post("/api/scrumboard-app/board/new",{board:t||m()});case 3:return r=e.sent,e.next=6,r.data;case 6:return n=e.sent,u.a.push({pathname:"/apps/scrumboard/boards/".concat(n.id,"/").concat(n.handle)}),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),x=Object(d.c)({}),g=x.getSelectors((function(e){return e.scrumboardApp.boards})),j=g.selectAll,O=(g.selectById,Object(d.d)({name:"scrumboardApp/boards",initialState:x.getInitialState({}),reducers:{resetBoards:function(e,t){}},extraReducers:Object(r.a)({},h.fulfilled,x.setAll)})),w=O.actions.resetBoards;t.a=O.reducer},1461:function(e,t,a){"use strict";var r=a(103),n=a(1348),c=a(1393),s=a(1361),d=Object(r.c)({boards:c.a,board:n.d,card:s.b});t.a=d},2516:function(e,t,a){"use strict";a.r(t);var r=a(107),n=a(168),c=a(1267),s=a(1265),d=a(83),i=a(197),o=a(228),u=a(2),p=a(0),l=a.n(p),b=a(6),f=a(31),m=a(1461),h=a(1393),v=Object(s.a)((function(e){return{root:{background:e.palette.primary.main,color:e.palette.getContrastText(e.palette.primary.main)},board:{cursor:"pointer",transitionProperty:"box-shadow border-color",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,background:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark)},newBoard:{borderWidth:2,borderStyle:"dashed",borderColor:Object(d.fade)(e.palette.getContrastText(e.palette.primary.main),.6),"&:hover":{borderColor:Object(d.fade)(e.palette.getContrastText(e.palette.primary.main),.8)}}}}));t.default=Object(o.a)("scrumboardApp",m.a)((function(e){var t=Object(b.b)(),a=Object(b.c)(h.e),s=v(e);return Object(p.useEffect)((function(){return t(Object(h.b)()),function(){t(Object(h.d)())}}),[t]),l.a.createElement("div",{className:Object(u.default)(s.root,"flex flex-grow flex-shrink-0 flex-col items-center")},l.a.createElement("div",{className:"flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24"},l.a.createElement(r.a,null,l.a.createElement(i.a,{className:"mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300",color:"inherit"},"Scrumboard App")),l.a.createElement("div",null,l.a.createElement(n.a,{className:"flex flex-wrap w-full justify-center py-32 px-16",enter:{animation:"transition.slideUpBigIn",duration:300}},a.map((function(e){return l.a.createElement("div",{className:"w-224 h-224 p-16",key:e.id},l.a.createElement(f.a,{to:"/apps/scrumboard/boards/".concat(e.id,"/").concat(e.uri),className:Object(u.default)(s.board,"flex flex-col items-center justify-center w-full h-full rounded-8 py-24 shadow hover:shadow-lg"),role:"button"},l.a.createElement(c.a,{className:"text-56"},"assessment"),l.a.createElement(i.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},e.name)))})),l.a.createElement("div",{className:"w-224 h-224 p-16"},l.a.createElement("div",{className:Object(u.default)(s.board,s.newBoard,"flex flex-col items-center justify-center w-full h-full rounded-8 py-24 shadow hover:shadow-lg"),onClick:function(){return t(Object(h.c)())},onKeyDown:function(){return t(Object(h.c)())},role:"button",tabIndex:0},l.a.createElement(c.a,{className:"text-56"},"add_circle"),l.a.createElement(i.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},"Add new board")))))))}))}}]);