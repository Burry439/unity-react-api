(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/logo.3fa434f6.png"},128:function(e,t,a){e.exports=a(200)},133:function(e,t,a){},140:function(e,t,a){var n={"./en/createchallenge":41,"./en/createchallenge.js":41,"./en/creategame":42,"./en/creategame.js":42,"./en/createuser":43,"./en/createuser.js":43,"./en/login":44,"./en/login.js":44,"./en/signup":45,"./en/signup.js":45,"./en/updatechallenge":46,"./en/updatechallenge.js":46,"./en/updategame":47,"./en/updategame.js":47,"./en/updateuser":48,"./en/updateuser.js":48,"./he/login":85,"./he/login.js":85,"./he/signup":86,"./he/signup.js":86};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=140},141:function(e,t,a){var n={"./createchallenge":41,"./createchallenge.js":41,"./creategame":42,"./creategame.js":42,"./createuser":43,"./createuser.js":43,"./login":44,"./login.js":44,"./signup":45,"./signup.js":45,"./updatechallenge":46,"./updatechallenge.js":46,"./updategame":47,"./updategame.js":47,"./updateuser":48,"./updateuser.js":48};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=141},142:function(e,t,a){},143:function(e,t,a){},148:function(e,t,a){},177:function(e,t){},184:function(e,t,a){},185:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},198:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),s=(a(133),a(5)),i=a.n(s),o=a(8),u=a(7),m=a(14),d={API_URL:"https://unity-react-games.herokuapp.com",MULTIPLAYER_GAME_URL:"https://online-game-iframe.herokuapp.com",SINGLEPLAYER_GAME_URL:"https://single-player-games-iframe.herokuapp.com"},p=Object(m.a)({},d),f=Object(n.createContext)(),g={id:null,username:"",accessToken:"",completedChallenges:null,tickets:null},b=function(e){var t=Object(n.useState)(JSON.parse(localStorage.getItem("jwt"))||g),a=Object(u.a)(t,2),l=a[0],c=a[1],s=function(e){var t={id:void 0==e._id?e.id:e._id,username:e.username,accessToken:e.accessToken,completedChallenges:e.completedChallenges,tickets:e.tickets};localStorage.removeItem("jwt"),localStorage.setItem("jwt",JSON.stringify(t)),c(t)},m=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(404!==t.status){e.next=6;break}return e.next=3,t.text();case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,t.json();case 8:return a=e.sent,s(a.user),e.abrupt("return","success");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p.API_URL,"/user/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,m(a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p.API_URL,"/user/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,m(a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{user:l,login:d,signout:function(){localStorage.removeItem("jwt"),c(g)},signup:b,setUserInfo:s}},e.children)},h=Object(n.createContext)(),E={isShowModal:!1,component:""},v=function(e){var t=Object(n.useState)(E),a=Object(u.a)(t,2),l=a[0],c=a[1];return r.a.createElement(h.Provider,{value:{modal:l,openModal:function(e){c({isShowModal:!0,component:e})},closeModal:function(){c({isShowModal:!1,component:""})}}},e.children)},y=a(110),j=(a(34),function(e){return e.loading?r.a.createElement(y.a,{animation:"border",variant:"primary"}):null}),w=function(e){var t=e.status,a=e.text;return t&&"loading"!==t?r.a.createElement("div",{className:"message ".concat(t)},a):null},O=a(63),k=function(e){var t=e.field,a=e.formValidation,n=e.initalValue,l=t.label,c=t.key,s=t.validation,i=Object(O.a)(t,["label","key","validation"]),o=a.register,u=a.errors,m=a.watch,d=i.name;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,l),function(){switch(i.type){case"textarea":return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",Object.assign({key:c,autoFocus:!0,defaultValue:n},i,{ref:o(s)})),u[d]&&r.a.createElement("div",{className:"invalid-input-message"},u[d].message));case"checkbox":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultChecked:n},i,{ref:o(s)})),u[d]&&r.a.createElement("div",{className:"invalid-input-message"},u[d].message));case"email":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultValue:n},i,{type:"input",ref:o(s)})),u[d]&&r.a.createElement("div",{className:"invalid-input-message"},u[d].message));case"confirmpassword":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultChecked:n},i,{type:"password",ref:o({validate:function(e){return e===m("password")}})})),u[d]&&r.a.createElement("div",{className:"invalid-input-message"},s.message));default:return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultValue:n},i,{ref:o(s)})),u[d]&&r.a.createElement("div",{className:"invalid-input-message"},u[d].message))}}()))},x=function(e){var t=e.field,a=e.currentValue,n=e.formValidation,l=t.label,c=(t.key,t.validation,Object(O.a)(t,["label","key","validation"])),s=n.register;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,l),r.a.createElement("select",Object.assign({className:"form-control",defaultValue:a},c,{ref:s}),t.options.map((function(e){return r.a.createElement("option",{key:e,name:t.name,value:e},e)})))))},T=a(78),N=a(210),C=function(e){var t=e.formName,l=e.onSubmit,c=e.formResponse,s=e.value,d=void 0===s?"":s,p=Object(T.a)(),f=p.handleSubmit,g=p.register,b=p.errors,h=p.watch,E=Object(N.a)().i18n,v=Object(n.useState)(!0),y=Object(u.a)(v,2),O=y[0],C=y[1],L=Object(n.useState)({config:{},fields:[]}),S=Object(u.a)(L,2),P=S[0],_=S[1],A=function(){var e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=a(140)("./".concat(E.language,"/").concat(t)).default,e.next=13;break;case 4:e.prev=4,e.t0=e.catch(0),e.prev=6,n=a(141)("./".concat(t)).default,e.next=13;break;case 10:return e.prev=10,e.t1=e.catch(6),e.abrupt("return",C(!1));case 13:_({fields:n.fields.map((function(e){return Object(m.a)({},e)})),config:n.config});case 14:case"end":return e.stop()}}),e,null,[[0,4],[6,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){A()}),[]);return O?r.a.createElement("form",{onSubmit:f((function(e){l(e)}))},P.fields.map((function(e){return console.log(e),"select"==e.type?r.a.createElement(x,{key:e.name,currentValue:d[e.name],field:e,formValidation:{register:g}}):r.a.createElement(k,{key:e.name,initalValue:d[e.name],field:e,formValidation:{register:g,errors:b,watch:h}})})),r.a.createElement("div",{className:"form-bottom"},r.a.createElement("button",{disabled:"success"===c.status,type:"submit"},P.config.buttonText),r.a.createElement(j,{loading:"loading"===c.status&&P.config.spinner})),r.a.createElement(w,{status:c.status,text:c.message})):r.a.createElement("div",null,"Whoops cant find that form")},L=function(){var e=Object(n.useContext)(f).login,t=Object(n.useContext)(h).closeModal,a=Object(n.useState)({status:"",message:""}),l=Object(u.a)(a,2),c=l[0],s=l[1],m=function(){var a=Object(o.a)(i.a.mark((function a(n){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s({status:"loading",message:""}),a.next=3,e(n);case 3:"success"==(r=a.sent)?t():(s({status:"error",message:r}),setTimeout((function(){s({status:"",message:""})}),3e3));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(C,{formName:"login",onSubmit:m,formResponse:c})},S=(a(142),function(){var e=Object(n.useContext)(f).signup,t=Object(n.useContext)(h).closeModal,a=Object(n.useState)({status:"",message:""}),l=Object(u.a)(a,2),c=l[0],s=l[1],m=function(){var a=Object(o.a)(i.a.mark((function a(n){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s({status:"loading",message:""}),a.next=3,e(n);case 3:"success"==(r=a.sent)?t():(s({status:"error",message:r}),setTimeout((function(){s({status:"",message:""})}),3e3));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(C,{formName:"signup",onSubmit:m,formResponse:c})}),P=a(25),_=(a(143),a(115)),A=a.n(_),R=a(208),I=function(){var e=Object(N.a)(),t=e.t,a=e.i18n,l=Object(n.useContext)(h).openModal,c=Object(n.useContext)(f),s=c.user,i=c.signout,o=function(e){a.changeLanguage(e)};return r.a.createElement("header",null,r.a.createElement(P.b,{className:"logo-container",to:"/"},r.a.createElement("img",{className:"logo",src:A.a,alt:"Logo"})),r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-end-container"},r.a.createElement("div",{className:"language-selector"},r.a.createElement(R.a,null,r.a.createElement(R.a.Toggle,{variant:"success",id:"dropdown-basic"},t("navbar.changeLanguage")),r.a.createElement(R.a.Menu,null,r.a.createElement(R.a.Item,{onClick:function(){return o("en")}},t("navbar.english")),r.a.createElement(R.a.Item,{onClick:function(){return o("he")}},t("navbar.hebrew"))))),r.a.createElement("div",{className:"user-links"},s.id?r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{onClick:function(){return i()}},r.a.createElement("a",null),t("navbar.signout")),r.a.createElement("li",null," ",r.a.createElement(P.b,{to:"/profile"},t("navbar.profile")))):r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{onClick:function(){return l(S)}},r.a.createElement("a",null),t("navbar.signUp")),r.a.createElement("li",{onClick:function(){return l(L)}},r.a.createElement("a",null),t("navbar.login")))))))},G=a(27),U=(a(148),function(e){var t=e.game,a=Object(G.f)(),l=Object(n.useContext)(f).user;return Object(n.useEffect)((function(){l.id||a.push("/home")}),[l]),r.a.createElement("div",{id:"unity-body"},r.a.createElement("iframe",{className:"unity-player",src:t}))}),M=a(56),D=a.n(M),q=a(57),F=function(e){var t=null,a=e.location.state.gamePath,l=p.SINGLEPLAYER_GAME_URL,c=a.replace(/\//g,""),s=Object(n.useContext)(f),i=s.user,o=s.setUserInfo,m=Object(n.useState)(!1),d=Object(u.a)(m,2),g=d[0],b=d[1],h=Object(n.useState)(!1),E=Object(u.a)(h,2),v=E[0],y=E[1],j=Object(q.useToasts)().addToast;return Object(n.useEffect)((function(){if(t=D()(p.SINGLEPLAYER_GAME_URL))return t.on("connect",(function(){console.log("connetion"),t.emit("ReactConnected",{userId:i.id,gameName:c})})),t.on("gameReady",(function(){b(!0)})),t.on("isDuplicate",(function(){y(!0),b(!0)})),t.on("challengeCompleted",(function(e){i.completedChallenges.push(e),i.tickets+=e.reward,o(i),j("good job you completed challenge: "+e.challengeName,{appearance:"success"})})),function(){t.close()}}),[]),g?v?r.a.createElement("div",null,"Looks Like you have this open In another Tab"):r.a.createElement(U,{game:l+a+"/?".concat(i.id)}):r.a.createElement("div",null,"lLoading...")},V=a(10),Y=function(e,t){switch(t.type){case"START_GAME":return{playerId:t.data.thisPlayerId,isDuplicate:!1,allPlayers:t.data.allPlayers};case"SET_PLAYER_AS_DUPLICATE":return{playerId:t.playerId,isDuplicate:!0,allPlayers:[]};case"ADD_NEW_PLAYER":return{playerId:e.playerId,isDuplicate:e.isDuplicate,allPlayers:[].concat(Object(V.a)(e.allPlayers),[t.newPlayer])};case"REMOVE_PLAYER":return{playerId:e.playerId,isDuplicate:e.isDuplicate,allPlayers:e.allPlayers.filter((function(e){return e.id!=t.removedPlayerID}))};case"CLEAR_ALL_PLAYERS":return{thisPlayerId:"",allPlayers:[],isDuplicate:!1};case"SET_ALL_PLAYERS":return Object(m.a)(Object(m.a)({},e),{},{allPlayers:t.allPlayers});default:return e}},J=Object(n.createContext)(),W=function(e){var t=Object(n.useReducer)(Y,{thisPlayerId:"",isDuplicate:!1,allPlayers:[]}),a=Object(u.a)(t,2),l=a[0],c=a[1];return r.a.createElement(J.Provider,{value:{game:l,gameDispatch:c}},e.children)},B=(a(184),function(e){var t=Object(n.useContext)(f).user,a=Object(n.useContext)(J),l=a.game,c=a.gameDispatch,s=null,i=Object(n.useState)(!1),o=Object(u.a)(i,2),m=o[0],d=o[1];return Object(n.useEffect)((function(){if(s=D()(p.MULTIPLAYER_GAME_URL))return s.on("connect",(function(){console.log("connetion")})),s.emit("addReactUser",t),s.on("reactFirstSpawn",(function(e){console.log("reactFirstSpawn"),c({type:"START_GAME",data:e}),d(!0)})),s.on("duplicatePlayer",(function(e){console.log("duplicatePlayer"),c({type:"SET_PLAYER_AS_DUPLICATE",playerId:e}),d(!0)})),s.on("reactSpawn",(function(e){console.log("reactSpawn"),c({type:"ADD_NEW_PLAYER",newPlayer:e})})),s.on("disconnectFromReact",(function(e){console.log("in disconnectFromReact",e),l.isDuplicate||c({type:"REMOVE_PLAYER",removedPlayerID:e})})),function(){console.log("in return"),c({type:"CLEAR_ALL_PLAYERS"}),s.close()}}),[]),m?l.isDuplicate?r.a.createElement("div",null,"Looks like you have this opened in anoyher tab try closing and refreshing the page"):r.a.createElement(U,{game:p.MULTIPLAYER_GAME_URL}):r.a.createElement("div",null,"Loading...")}),K=(a(185),function(){var e=Object(n.useContext)(f).user,t=Object(G.f)();return Object(n.useEffect)((function(){e.id||(console.log("no user"),t.push("/home"))}),[e]),e.id?r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome ",e.username),r.a.createElement("div",null,r.a.createElement("h2",null,"Completed Challenges"),r.a.createElement("ul",null,e.completedChallenges.map((function(e){return r.a.createElement("li",{className:"challenges",key:e._id},"challenge name: ",e.challengeName)}))),r.a.createElement("h3",null,"Total Tickets: ",e.tickets))):r.a.createElement("div",null)}),$=a(207),z=function(e){var t=e.filter,a=e.setFilter,l=e.table,c=e.setNewTable,s=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],l.headers.forEach((function(e){l.exclude.includes(e)||t.push(r.a.createElement("option",{key:e},e))})),a((function(e){return{field:e.field,value:e.value,dropdown:t}}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[l.headers]),r.a.createElement("div",{className:"search-container"},r.a.createElement($.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement($.a.Label,null,"Search By"),r.a.createElement($.a.Control,{as:"select",custom:!0,onChange:function(e){return t=e.target.value,void a((function(e){return{dropdown:e.dropdown,value:e.value,field:t}}));var t}},t.dropdown)),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",value:t.value,onChange:function(e){return t=e.target.value,void a((function(e){return{dropdown:e.dropdown,value:t,field:e.field}}));var t}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return c()}},"Button"))))},H=a(82),Q=function(e){var t=e.pagination,a=e.setPagination,l=e.table,c=function(){for(var e=[],n=function(n){var l=(n-1)*t.limit;e.push(r.a.createElement(H.a.Item,{key:n,onClick:function(){return e=l,void a((function(t){return{limit:t.limit,buttons:t.buttons,skip:e}}));var e}},n))},c=t.skip+1;c<=Math.ceil(l.totalCount/t.limit);c++)n(c);a({skip:0,limit:10,buttons:e})};return Object(n.useEffect)((function(){c()}),[l.totalCount,l.entityType]),r.a.createElement("div",null,r.a.createElement(H.a,null,t.buttons),r.a.createElement("p",null,"showing entries ",t.skip," to ",t.skip+l.rows.length," out of ",l.totalCount))},X=a(205),Z=function(e){var t=e.table,a=e.setTable,l=e.tr,c=["404","500","401"],s=Object(n.useState)({status:"",message:""}),d=Object(u.a)(s,2),f=d[0],g=d[1],b=function(){var e=Object(o.a)(i.a.mark((function e(n){var r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.includes(n.status.toString())){e.next=6;break}return e.next=3,n.text();case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,n.json();case 8:return r=e.sent,l=t.rows.map((function(e){return e._id==r._id?r:e})),a((function(e){return Object(m.a)(Object(m.a)({},e),{},{rows:l})})),e.abrupt("return","success");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a._id=l._id,g({status:"loading",message:""}),e.next=4,fetch("".concat(p.API_URL,"/").concat(t.entityType,"/adminupdate").concat(t.entityType),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,b(n);case 7:r=e.sent,g("success"==r?{status:"success",message:"Entity Updated"}:{status:"error",message:r});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(C,{formName:"update".concat(t.entityType),onSubmit:h,formResponse:f,value:l})},ee=(a(187),function(e){var t=e.table,a=e.setTable,l=Object(n.useContext)(h).openModal;return console.log(t.headers),t.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{animation:"border",variant:"primary"}),r.a.createElement(y.a,{animation:"border",variant:"secondary"}),r.a.createElement(y.a,{animation:"border",variant:"success"}),r.a.createElement(y.a,{animation:"border",variant:"danger"}),r.a.createElement(y.a,{animation:"border",variant:"warning"}),r.a.createElement(y.a,{animation:"border",variant:"info"}),r.a.createElement(y.a,{animation:"border",variant:"light"}),r.a.createElement(y.a,{animation:"border",variant:"dark"}),r.a.createElement(y.a,{animation:"grow",variant:"primary"}),r.a.createElement(y.a,{animation:"grow",variant:"secondary"}),r.a.createElement(y.a,{animation:"grow",variant:"success"}),r.a.createElement(y.a,{animation:"grow",variant:"danger"}),r.a.createElement(y.a,{animation:"grow",variant:"warning"}),r.a.createElement(y.a,{animation:"grow",variant:"info"}),r.a.createElement(y.a,{animation:"grow",variant:"light"}),r.a.createElement(y.a,{animation:"grow",variant:"dark"})):r.a.createElement(X.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,t.headers.map((function(e,a){if(!t.exclude.includes(e))return r.a.createElement("th",{key:a},e)})))),r.a.createElement("tbody",null,t.rows.map((function(e,n){return r.a.createElement("tr",{key:n},Object.keys(e).map((function(a,n){if(!t.exclude.includes(Object.keys(e)[n]))return r.a.createElement("td",{key:n},e[a].toString())})),r.a.createElement("td",{className:"btn-primary table-row",onClick:function(){return l((function(){return Z({table:t,setTable:a,tr:e})}))}},r.a.createElement("i",{className:"fa fa-edit"})))}))))}),te=a(209),ae=a(206),ne=function(e){var t=e.table,a=e.setTable,n=e.setFilter,l=function(){n((function(e){return{dropdown:e.dropdown,value:"",field:e.field}}))};return r.a.createElement(te.a,{activeKey:t.entityType,onSelect:function(e){return t=e,l(),void a((function(e){return{entityType:t,headers:e.headers,rows:e.rows,totalCount:e.totalCount,isLoading:e.isLoading,exclude:e.exclude}}));var t}},r.a.createElement(ae.a,{eventKey:"challenge",title:"challenges"},r.a.createElement(ee,{table:t,setTable:a})),r.a.createElement(ae.a,{eventKey:"user",title:"users"},r.a.createElement(ee,{table:t,setTable:a})),r.a.createElement(ae.a,{eventKey:"game",title:"games"},r.a.createElement(ee,{table:t,setTable:a})))},re=function(e){var t=e.table,a=e.setTable;console.log(t);var l=["404","500","401"],c=Object(n.useState)({status:"",message:""}),s=Object(u.a)(c,2),d=s[0],f=s[1],g=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.includes(t.status.toString())){e.next=6;break}return e.next=3,t.text();case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,t.json();case 8:return n=e.sent,a((function(e){return Object(m.a)(Object(m.a)({},e),{},{totalCount:e.totalCount+1,rows:[].concat(Object(V.a)(e.rows),[n])})})),e.abrupt("return","success");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({status:"loading",message:""}),e.next=3,fetch("".concat(p.API_URL,"/").concat(t.entityType,"/create").concat(t.entityType),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,g(n);case 6:r=e.sent,f("success"==r?{status:"success",message:"Entity created"}:{status:"error",message:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(C,{formName:"create".concat(t.entityType),onSubmit:b,formResponse:d})},le=function(){var e=Object(n.useContext)(h).openModal,t=Object(n.useState)({entityType:"user",headers:[],rows:[],totalCount:0,isLoading:!0,exclude:[]}),a=Object(u.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)({dropdown:[],field:"_id",value:""}),d=Object(u.a)(s,2),f=d[0],g=d[1],b=Object(n.useState)({buttons:[],skip:0,limit:10}),E=Object(u.a)(b,2),v=E[0],y=E[1],j=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch("".concat(p.API_URL,"/").concat(l.entityType,"/adminget").concat(l.entityType,"s/?skip=").concat(v.skip,"&limit=").concat(v.limit,"&field=").concat(f.field,"&value=").concat(f.value),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),w(!1),200==t.status&&(n=a.entities?a.entities:a.headers,r=Object.keys(n[0]),c((function(e){return{entityType:e.entityType,rows:a.entities?a.entities:[],headers:r,totalCount:a.totalCount,isLoading:e.isLoading,exclude:a.exclude}})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){c((function(t){return Object(m.a)(Object(m.a)({},t),{},{isLoading:e})}))};return Object(n.useEffect)((function(){j()}),[l.entityType]),Object(n.useEffect)((function(){j()}),[v.skip]),r.a.createElement("div",{className:"container"},r.a.createElement(z,{filter:f,setFilter:g,table:l,setNewTable:j}),r.a.createElement("button",{onClick:function(){return e((function(){return re({table:l,setTable:c})}))}},"Create new ",l.entityType),r.a.createElement(ne,{table:l,setTable:c,setFilter:g}),r.a.createElement(Q,{pagination:v,setPagination:y,table:l,setNewTable:j}))},ce=a(11),se=(a(188),function(e){var t=e.title,a=e.details,l=e.gameType,c=e.gameName,s=e.gamePath,i=Object(N.a)().t,o=Object(n.useContext)(f).user,u=Object(n.useContext)(h).openModal,m=Object(G.f)();return r.a.createElement("div",{className:"game-details"},r.a.createElement("div",{className:"game-details-image-container"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1589289959525-b5b685332c7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",alt:"none"})),r.a.createElement("div",{className:"game-details-content"},r.a.createElement("p",{className:"game-details-title text-medium"},t),r.a.createElement("div",{className:"game-details-info"},r.a.createElement("p",{className:"text-medium"},a),o.id?r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){m.push({pathname:"".concat(l),state:{gameName:c,gamePath:s}})}},i("home.play")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){return u(L)}},i("home.login")),r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){return u(S)}},i("home.signup"))))))}),ie=(a(189),function(){var e,t=Object(N.a)().t;return r.a.createElement("div",{className:"game-list-container"},r.a.createElement("section",{className:"game-list"},r.a.createElement(se,(e={title:t("home.games.multiPlayerGame.title"),details:t("home.games.multiPlayerGame.details"),gameType:"/mulitPlayerGame"},Object(ce.a)(e,"gameType","/mulitPlayerGame"),Object(ce.a)(e,"gameName","onlineGame"),e)),r.a.createElement(se,{title:t("home.games.stickGame.title"),details:t("home.games.cubeGame.details"),gameType:"/singlePlayerGame/",gamePath:"/stickGame",gameName:"stick adventure demo"}),r.a.createElement(se,{title:t("home.games.cubeGame.title"),details:t("home.games.cubeGame.details"),gameType:"/singlePlayerGame/",gamePath:"/cubeGame",gameName:"Cube Game Demo"})))}),oe=(a(190),function(){var e=Object(N.a)().t;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"top-section"},r.a.createElement("h1",null,e("home.title"))),r.a.createElement("div",{className:"game-list-section"},r.a.createElement(ie,null)))}),ue=a(80),me=a.n(ue);a(198);me.a.setAppElement("#root");var de=function(){var e=Object(n.useContext)(h),t=e.modal,a=e.closeModal;return r.a.createElement("div",null,r.a.createElement(me.a,{style:{overlay:{borderColor:"grey"},content:{height:"fit-content",width:"fit-content",position:"fixed",margin:"5% auto",left:"0",right:"0",padding:"15px",zIndex:"99999"}},isOpen:t.isShowModal,onRequestClose:function(){return a()}},r.a.createElement("div",{className:"close-button-container"},r.a.createElement("div",{className:"close-button",onClick:function(){return a()}},"X")),r.a.createElement(r.a.Fragment,null,""!=t.component?r.a.createElement(t.component,null):r.a.createElement(r.a.Fragment,null))))};a(108);var pe=function(){return r.a.createElement(P.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(q.ToastProvider,{autoDismissTimeout:3e3},r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(W,null,r.a.createElement(I,null),r.a.createElement(de,null),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,component:oe}),r.a.createElement(G.a,{path:"/mulitPlayerGame",exact:!0,component:B}),r.a.createElement(G.a,{path:"/singlePlayerGame",component:F}),r.a.createElement(G.a,{path:"/profile",exact:!0,component:K}),r.a.createElement(G.a,{path:"/admin",exact:!0,component:le}),r.a.createElement(G.a,{component:oe})))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(199);var fe=a(81),ge=a(123),be=a(124),he=a(39);fe.a.use(ge.a).use(be.a).use(he.e).init({fallbackLng:["en"],debug:!0,whitelist:["en","he"],interpolation:{escapeValue:!1}});fe.a;c.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create Challenge",spinner:!0},fields:[{label:"challenge name",name:"challengeName",placeholder:"Enter the challengeName",required:!0},{type:"select",entity:"Game",displayname:"name",options:["cubeGame","stickGame","multiPlayerGame"],label:"game name",name:"gameName",required:!0},{label:"reward",name:"reward",placeholder:"Enter the amount of tickets for this reward",type:"number",required:!0},{name:"active",label:"active",type:"checkbox"}]}},42:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create game",spinner:!0},fields:[{label:"game name",name:"name",placeholder:"Enter the Name of the game",required:!0}]}},43:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create User",spinner:!0},fields:[{label:"username",placeholder:"Enter a username",name:"username",validation:{required:"please enter a username",minLength:{value:5,message:"username must have at least 5 characters"}}},{label:"email",placeholder:"Enter a email",name:"email",type:"email",validation:{required:"please enter a valid email address",pattern:{value:/^\S+@\S+\.\S+$/,message:"invalid email address"}}},{label:"tickets",placeholder:"Enter an amount of tickets",name:"tickets",type:"number"},{label:"password",placeholder:"Enter a password",name:"password",type:"password",validation:{required:"this is required",minLength:{value:5,message:"Password must have at least 5 characters"}}},{label:"Confirm password",placeholder:"please confirm pasword",name:"password_repeat",type:"confirmpassword",validation:{message:"The passwords do not match"}}]}},44:function(e,t,a){"use strict";a.r(t),t.default={config:{spinner:!0,buttonText:"Login"},fields:[{label:"username",name:"username",placeholder:"Enter your username",validation:{required:"please enter your username"}},{label:"password",placeholder:"Enter your password",name:"password",type:"password",validation:{required:"please enter your password"}}]}},45:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create User",spinner:!0},fields:[{label:"username",placeholder:"Enter a username",name:"username",validation:{required:"please enter a username",minLength:{value:5,message:"username must have at least 5 characters"}}},{label:"email",placeholder:"Enter a email",name:"email",type:"email",validation:{required:"please enter a valid email address",pattern:{value:/^\S+@\S+\.\S+$/,message:"invalid email address"}}},{label:"tickets",placeholder:"Enter an amount of tickets",name:"tickets",type:"number"},{label:"password",placeholder:"Enter a password",name:"password",type:"password",validation:{required:"this is required",minLength:{value:5,message:"Password must have at least 5 characters"}}},{label:"Confirm password",placeholder:"please confirm pasword",name:"password_repeat",type:"confirmpassword",validation:{message:"The passwords do not match"}}]}},46:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create Challenge",spinner:!0},fields:[{label:"challengeName",name:"challengeName",placeholder:"Enter the challengeName",required:!0},{type:"select",name:"gameName",entity:"Game",displayname:"name",options:["cubeGame","stickGame","multiPlayerGame"],label:"gameName",required:!0},{label:"reward",name:"reward",placeholder:"Enter the amount of tickets for this reward",type:"number",required:!0},{name:"active",label:"active",type:"checkbox"}]}},47:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Update game",spinner:!0},fields:[{label:"game name",name:"name",placeholder:"Enter the Name of the game",required:!0}]}},48:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Update User",spinner:!0},fields:[{label:"username",placeholder:"Enter a username",name:"username",validation:{required:"please enter a username",minLength:{value:5,message:"username must have at least 5 characters"}}},{label:"email",placeholder:"Enter a email",name:"email",type:"email",validation:{required:"please enter a valid email address",pattern:{message:"invalid email address"}}},{label:"tickets",placeholder:"Enter an amount of tickets",name:"tickets",type:"number"}]}},85:function(e,t,a){"use strict";a.r(t),t.default={config:{spinner:!0,buttonText:"\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea"},fields:[{label:"\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",name:"username",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",validation:{required:"\u05d0\u05e0\u05d0 \u05d4\u05d6\u05df \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9"}},{label:"\u05e1\u05d9\u05e1\u05de\u05d4",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e1\u05d9\u05e1\u05de\u05ea\u05da",name:"password",type:"password",validation:{required:"\u05d4\u05d6\u05df \u05d0\u05ea \u05e1\u05d9\u05e1\u05de\u05ea\u05da \u05d1\u05d1\u05e7\u05e9\u05d4"}}]}},86:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"\u05d4\u05d9\u05e8\u05e9\u05dd",spinner:!0},fields:[{label:"\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",name:"username",validation:{required:"\u05d0\u05e0\u05d0 \u05d4\u05db\u05e0\u05e1 \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",minLength:{value:5,message:"\u05e9\u05dd \u05d4\u05de\u05e9\u05ea\u05de\u05e9 \u05d7\u05d9\u05d9\u05d1 \u05dc\u05db\u05dc\u05d5\u05dc \u05dc\u05e4\u05d7\u05d5\u05ea 5 \u05ea\u05d5\u05d5\u05d9\u05dd"}}},{label:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",placeholder:'\u05d4\u05d6\u05df \u05d3\u05d5\u05d0"\u05dc',name:"email",type:"email",validation:{required:'\u05d0\u05e0\u05d0 \u05d4\u05d6\u05df \u05db\u05ea\u05d5\u05d1\u05ea \u05d3\u05d5\u05d0"\u05dc \u05ea\u05e7\u05e0\u05d9\u05ea',pattern:{value:/^\S+@\S+\.\S+$/,message:'\u05db\u05ea\u05d5\u05d1\u05ea \u05d3\u05d5\u05d0"\u05dc \u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9\u05ea'}}},{label:"\u05e1\u05d9\u05e1\u05de\u05d4",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e1\u05d9\u05e1\u05de\u05d0",name:"password",type:"password",validation:{required:"\u05d6\u05d4 \u05e0\u05d3\u05e8\u05e9",minLength:{value:5,message:"\u05d4\u05e1\u05d9\u05e1\u05de\u05d4 \u05d7\u05d9\u05d9\u05d1\u05ea \u05dc\u05db\u05dc\u05d5\u05dc \u05dc\u05e4\u05d7\u05d5\u05ea 5 \u05ea\u05d5\u05d5\u05d9\u05dd"}}},{label:"\u05d0\u05e9\u05e8 \u05e1\u05d9\u05e1\u05de\u05d4",placeholder:"\u05d0\u05e0\u05d0 \u05d0\u05e9\u05e8 \u05d0\u05ea \u05d4\u05e1\u05d9\u05e1\u05de\u05d4",name:"password_repeat",type:"confirmpassword",validation:{message:"\u05d4\u05e1\u05d9\u05e1\u05de\u05d0\u05d5\u05ea \u05dc\u05d0 \u05ea\u05d5\u05d0\u05de\u05d5\u05ea"}}]}}},[[128,1,2]]]);
//# sourceMappingURL=main.c475c483.chunk.js.map