(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/logo.3fa434f6.png"},125:function(e,t,a){e.exports=a.p+"static/media/tenor.b8a443cd.gif"},131:function(e,t,a){e.exports=a(204)},136:function(e,t,a){},143:function(e,t,a){var n={"./en/createchallenge":42,"./en/createchallenge.js":42,"./en/creategame":43,"./en/creategame.js":43,"./en/createuser":44,"./en/createuser.js":44,"./en/login":45,"./en/login.js":45,"./en/signup":46,"./en/signup.js":46,"./en/updatechallenge":47,"./en/updatechallenge.js":47,"./en/updategame":48,"./en/updategame.js":48,"./en/updateuser":49,"./en/updateuser.js":49,"./he/login":87,"./he/login.js":87,"./he/signup":88,"./he/signup.js":88};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=143},144:function(e,t,a){var n={"./createchallenge":42,"./createchallenge.js":42,"./creategame":43,"./creategame.js":43,"./createuser":44,"./createuser.js":44,"./login":45,"./login.js":45,"./signup":46,"./signup.js":46,"./updatechallenge":47,"./updatechallenge.js":47,"./updategame":48,"./updategame.js":48,"./updateuser":49,"./updateuser.js":49};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=144},145:function(e,t,a){},146:function(e,t,a){},151:function(e,t,a){},180:function(e,t){},188:function(e,t,a){},189:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},202:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),l=a.n(i),c=a(24),s=(a(136),a(5)),o=a.n(s),u=a(8),m=a(7),d=a(14),p={API_URL:"https://unity-react-games.herokuapp.com",MULTIPLAYER_GAME_URL:"https://online-game-iframe.herokuapp.com",SINGLEPLAYER_GAME_URL:"https://single-player-games-iframe.herokuapp.com"},f=Object(d.a)({},p),g=Object(n.createContext)(),b={id:null,username:"",accessToken:"",completedChallenges:null,tickets:null},v=function(e){var t=Object(n.useState)(JSON.parse(localStorage.getItem("jwt"))||b),a=Object(m.a)(t,2),i=a[0],l=a[1],c=function(e){var t={id:void 0==e._id?e.id:e._id,username:e.username,accessToken:e.accessToken,completedChallenges:e.completedChallenges,tickets:e.tickets};localStorage.removeItem("jwt"),localStorage.setItem("jwt",JSON.stringify(t)),l(t)},s=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(404!==t.status){e.next=6;break}return e.next=3,t.text();case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,t.json();case 8:return a=e.sent,c(a.user),e.abrupt("return","success");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f.API_URL,"/user/login"),{method:"POST",headers:{"Content-Type":"application/json",language:a},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,s(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f.API_URL,"/user/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,s(a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{user:i,login:d,signout:function(){localStorage.removeItem("jwt"),l(b)},signup:p,setUserInfo:c}},e.children)},h=Object(n.createContext)(),E={isShowModal:!1,component:""},y=function(e){var t=Object(n.useState)(E),a=Object(m.a)(t,2),i=a[0],l=a[1];return r.a.createElement(h.Provider,{value:{modal:i,openModal:function(e){l({isShowModal:!0,component:e})},closeModal:function(){l({isShowModal:!1,component:""})}}},e.children)},j=a(214),w=a(112),O=(a(35),function(e){return e.loading?r.a.createElement(w.a,{animation:"border",variant:"primary"}):null}),x=function(e){var t=e.status,a=e.text,n=e.direction;return t&&"loading"!==t?r.a.createElement("div",{className:"message ".concat(t),style:n},a):null},k=a(65),T=function(e){var t=e.field,a=e.formValidation,n=e.initalValue,i=e.direction;console.log(i);var l=t.label,c=t.key,s=t.validation,o=Object(k.a)(t,["label","key","validation"]),u=a.register,m=a.errors,d=a.watch,p=o.name;return r.a.createElement("div",{style:i},r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,l),function(){switch(o.type){case"textarea":return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",Object.assign({key:c,autoFocus:!0,defaultValue:n},o,{ref:u(s)})),m[p]&&r.a.createElement("div",{className:"invalid-input-message"},m[p].message));case"checkbox":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultChecked:n},o,{ref:u(s)})),m[p]&&r.a.createElement("div",{className:"invalid-input-message"},m[p].message));case"email":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultValue:n},o,{type:"input",ref:u(s)})),m[p]&&r.a.createElement("div",{className:"invalid-input-message"},m[p].message));case"confirmpassword":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultChecked:n},o,{type:"password",ref:u({validate:function(e){return e===d("password")}})})),m[p]&&r.a.createElement("div",{className:"invalid-input-message"},s.message));default:return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({key:c,defaultValue:n},o,{ref:u(s)})),m[p]&&r.a.createElement("div",{className:"invalid-input-message"},m[p].message))}}()))},N=function(e){var t=e.field,a=e.currentValue,n=e.formValidation,i=t.label,l=(t.key,t.validation,Object(k.a)(t,["label","key","validation"])),c=n.register;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,i),r.a.createElement("select",Object.assign({className:"form-control",defaultValue:a},l,{ref:c}),t.options.map((function(e){return r.a.createElement("option",{key:e,name:t.name,value:e},e)})))))},C=a(80),S=function(e){var t=e.formName,i=e.onSubmit,l=e.formResponse,c=e.value,s=void 0===c?"":c,p=Object(C.a)(),f=p.handleSubmit,g=p.register,b=p.errors,v=p.watch,h=Object(j.a)().i18n,E=Object(n.useState)(!0),y=Object(m.a)(E,2),w=y[0],k=y[1],S=Object(n.useState)({config:{},fields:[]}),L=Object(m.a)(S,2),P=L[0],_=L[1],I="en"==h.language?{display:"flex",flexDirection:"column",alignItems:"flex-start"}:{display:"flex",flexDirection:"column",alignItems:"flex-start",direction:"rtl"},A=function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=a(143)("./".concat(h.language,"/").concat(t)).default,e.next=13;break;case 4:e.prev=4,e.t0=e.catch(0),e.prev=6,n=a(144)("./".concat(t)).default,e.next=13;break;case 10:return e.prev=10,e.t1=e.catch(6),e.abrupt("return",k(!1));case 13:_({fields:n.fields.map((function(e){return Object(d.a)({},e)})),config:n.config});case 14:case"end":return e.stop()}}),e,null,[[0,4],[6,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){A()}),[]);return w?r.a.createElement("form",{onSubmit:f((function(e){i(e)})),style:I},P.fields.map((function(e){return"select"==e.type?r.a.createElement(N,{key:e.name,currentValue:s[e.name],formValidation:{register:g},field:e,direction:I}):r.a.createElement(T,{key:e.name,initalValue:s[e.name],formValidation:{register:g,errors:b,watch:v},field:e,direction:I})})),r.a.createElement("div",{className:"form-bottom"},r.a.createElement("button",{disabled:"success"===l.status,type:"submit"},P.config.buttonText),r.a.createElement(O,{loading:"loading"===l.status&&P.config.spinner})),r.a.createElement(x,{status:l.status,text:l.message,direction:I})):r.a.createElement("div",null,"Whoops cant find that form")},L=function(){var e=Object(j.a)().i18n,t=Object(n.useContext)(g).login,a=Object(n.useContext)(h).closeModal,i=Object(n.useState)({status:"",message:""}),l=Object(m.a)(i,2),c=l[0],s=l[1],d=function(){var n=Object(u.a)(o.a.mark((function n(r){var i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s({status:"loading",message:""}),n.next=3,t(r,e.language);case 3:"success"==(i=n.sent)?a():(s({status:"error",message:i}),setTimeout((function(){s({status:"",message:""})}),3e3));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(S,{formName:"login",onSubmit:d,formResponse:c})},P=(a(145),function(){var e=Object(n.useContext)(g).signup,t=Object(n.useContext)(h).closeModal,a=Object(n.useState)({status:"",message:""}),i=Object(m.a)(a,2),l=i[0],c=i[1],s=function(){var a=Object(u.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({status:"loading",message:""}),a.next=3,e(n);case 3:"success"==(r=a.sent)?t():(c({status:"error",message:r}),setTimeout((function(){c({status:"",message:""})}),3e3));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(S,{formName:"signup",onSubmit:s,formResponse:l})}),_=(a(146),a(117)),I=a.n(_),A=a(212),R=function(){var e=Object(j.a)(),t=e.t,a=e.i18n,i=Object(n.useContext)(h).openModal,l=Object(n.useContext)(g),s=l.user,o=l.signout,u=function(e){a.changeLanguage(e)},m="en"==a.language?{direction:"ltr"}:{direction:"rtl"};return r.a.createElement("header",{style:m},r.a.createElement("div",{className:"logo-container"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{className:"logo",src:I.a,alt:"Logo"}))),r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-end-container"},r.a.createElement("div",{className:"language-selector"},r.a.createElement(A.a,null,r.a.createElement(A.a.Toggle,{variant:"success",id:"dropdown-basic"},t("navbar.changeLanguage")),r.a.createElement(A.a.Menu,null,r.a.createElement(A.a.Item,{onClick:function(){return u("en")}},t("navbar.english")),r.a.createElement(A.a.Item,{onClick:function(){return u("he")}},t("navbar.hebrew"))))),r.a.createElement("div",{className:"user-links"},s.id?r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{onClick:function(){return o()}},r.a.createElement("a",null),t("navbar.signout")),r.a.createElement("li",null," ",r.a.createElement(c.b,{to:"/profile"},t("navbar.profile")))):r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{onClick:function(){return i(P)}},r.a.createElement("a",null),t("navbar.signUp")),r.a.createElement("li",{onClick:function(){return i(L)}},r.a.createElement("a",null),t("navbar.login")))))))},G=a(29),U=(a(151),function(e){var t=e.game,a=Object(G.f)(),i=Object(n.useContext)(g).user;return Object(n.useEffect)((function(){i.id||a.push("/home")}),[i]),r.a.createElement("div",{id:"unity-body"},r.a.createElement("iframe",{className:"unity-player",src:t}))}),M=a(57),D=a.n(M),q=a(58),F=a(20),V=a(125),Y=a.n(V),J={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.5,duration:1.5,stiffness:50,ease:"easeInOut"}},exit:{y:"-100vh",transition:{ease:"easeInOut"}}},W=function(e){var t=null,a=e.location.pathname.match(/.*\/(.*)$/)[1],i=f.SINGLEPLAYER_GAME_URL,l=Object(n.useContext)(g),c=l.user,s=l.setUserInfo,o=Object(n.useState)(!1),u=Object(m.a)(o,2),d=u[0],p=u[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),h=v[0],E=v[1],y=Object(q.useToasts)().addToast;return Object(n.useEffect)((function(){if(console.log(a),t=D()(f.API_URL))return t.on("connect",(function(){console.log("connetion"),t.emit("ReactConnected",{userId:c.id,gameName:a})})),t.on("gameReady",(function(){setTimeout((function(){p(!0)}),3e3)})),t.on("isDuplicate",(function(){E(!0),setTimeout((function(){p(!0)}),3e3)})),t.on("challengeCompleted",(function(e){c.completedChallenges.push(e),c.tickets+=e.reward,s(c),y("good job you completed challenge: "+e.challengeName,{appearance:"info"})})),function(){t.close()}}),[]),r.a.createElement(F.b.div,{className:"container",variants:J,initial:"hidden",animate:"visible",exit:"exit"},d?h?r.a.createElement("div",{variants:J,initial:"hidden",animate:"visible"},"Looks Like you have this open In another Tab"):r.a.createElement(U,{game:"".concat(i,"/").concat(a,"/?").concat(c.id)}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{variants:J,initial:"hidden",animate:"visible"},r.a.createElement("img",{src:Y.a,className:"loading"}))))},B=a(10),$=function(e,t){switch(t.type){case"START_GAME":return{playerId:t.data.thisPlayerId,isDuplicate:!1,allPlayers:t.data.allPlayers};case"SET_PLAYER_AS_DUPLICATE":return{playerId:t.playerId,isDuplicate:!0,allPlayers:[]};case"ADD_NEW_PLAYER":return{playerId:e.playerId,isDuplicate:e.isDuplicate,allPlayers:[].concat(Object(B.a)(e.allPlayers),[t.newPlayer])};case"REMOVE_PLAYER":return{playerId:e.playerId,isDuplicate:e.isDuplicate,allPlayers:e.allPlayers.filter((function(e){return e.id!=t.removedPlayerID}))};case"CLEAR_ALL_PLAYERS":return{thisPlayerId:"",allPlayers:[],isDuplicate:!1};case"SET_ALL_PLAYERS":return Object(d.a)(Object(d.a)({},e),{},{allPlayers:t.allPlayers});default:return e}},K=Object(n.createContext)(),z=function(e){var t=Object(n.useReducer)($,{thisPlayerId:"",isDuplicate:!1,allPlayers:[]}),a=Object(m.a)(t,2),i=a[0],l=a[1];return r.a.createElement(K.Provider,{value:{game:i,gameDispatch:l}},e.children)},H=(a(188),function(e){var t=Object(n.useContext)(g).user,a=Object(n.useContext)(K),i=a.game,l=a.gameDispatch,c=null,s=Object(n.useState)(!1),o=Object(m.a)(s,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){if(c=D()(f.MULTIPLAYER_GAME_URL))return c.on("connect",(function(){console.log("connetion")})),c.emit("addReactUser",t),c.on("reactFirstSpawn",(function(e){console.log("reactFirstSpawn"),l({type:"START_GAME",data:e}),d(!0)})),c.on("duplicatePlayer",(function(e){console.log("duplicatePlayer"),l({type:"SET_PLAYER_AS_DUPLICATE",playerId:e}),d(!0)})),c.on("reactSpawn",(function(e){console.log("reactSpawn"),l({type:"ADD_NEW_PLAYER",newPlayer:e})})),c.on("disconnectFromReact",(function(e){console.log("in disconnectFromReact",e),i.isDuplicate||l({type:"REMOVE_PLAYER",removedPlayerID:e})})),function(){console.log("in return"),l({type:"CLEAR_ALL_PLAYERS"}),c.close()}}),[]),u?i.isDuplicate?r.a.createElement("div",null,"Looks like you have this opened in anoyher tab try closing and refreshing the page"):r.a.createElement(U,{game:f.MULTIPLAYER_GAME_URL}):r.a.createElement("div",null,"Loading...")}),Q=(a(189),{hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5,stiffness:50}},exit:{x:"100vh",transition:{ease:"easeInOut"}}}),X=function(){var e=Object(n.useContext)(g).user,t=Object(G.f)();return Object(n.useEffect)((function(){e.id||(console.log("no user"),t.push("/home"))}),[e]),e.id?r.a.createElement(F.b.div,{className:"container",variants:Q,initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement("h1",null,"Welcome ",e.username),r.a.createElement("div",null,r.a.createElement("h2",null,"Completed Challenges"),r.a.createElement("ul",null,e.completedChallenges.map((function(e){return r.a.createElement("li",{className:"challenges",key:e._id},"challenge name: ",e.challengeName)}))),r.a.createElement("h3",null,"Total Tickets: ",e.tickets))):r.a.createElement(F.b.div,{exit:!0})},Z=a(211),ee=function(e){var t=e.filter,a=e.setFilter,i=e.table,l=e.setNewTable,c=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],i.headers.forEach((function(e){i.exclude.includes(e)||t.push(r.a.createElement("option",{key:e},e))})),a((function(e){return{field:e.field,value:e.value,dropdown:t}}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[i.headers]),r.a.createElement("div",{className:"search-container"},r.a.createElement(Z.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(Z.a.Label,null,"Search By"),r.a.createElement(Z.a.Control,{as:"select",custom:!0,onChange:function(e){return t=e.target.value,void a((function(e){return{dropdown:e.dropdown,value:e.value,field:t}}));var t}},t.dropdown)),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",value:t.value,onChange:function(e){return t=e.target.value,void a((function(e){return{dropdown:e.dropdown,value:t,field:e.field}}));var t}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return l()}},"Button"))))},te=a(84),ae=function(e){var t=e.pagination,a=e.setPagination,i=e.table,l=function(){for(var e=[],n=function(n){var i=(n-1)*t.limit;e.push(r.a.createElement(te.a.Item,{key:n,onClick:function(){return e=i,void a((function(t){return{limit:t.limit,buttons:t.buttons,skip:e}}));var e}},n))},l=t.skip+1;l<=Math.ceil(i.totalCount/t.limit);l++)n(l);a({skip:0,limit:10,buttons:e})};return Object(n.useEffect)((function(){l()}),[i.totalCount,i.entityType]),r.a.createElement("div",null,r.a.createElement(te.a,null,t.buttons),r.a.createElement("p",null,"showing entries ",t.skip," to ",t.skip+i.rows.length," out of ",i.totalCount))},ne=a(209),re=function(e){var t=e.table,a=e.setTable,i=e.tr,l=Object(j.a)().i18n,c=["404","500","401"],s=Object(n.useState)({status:"",message:""}),p=Object(m.a)(s,2),g=p[0],b=p[1],v=function(){var e=Object(u.a)(o.a.mark((function e(n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.includes(n.status.toString())){e.next=6;break}return e.next=3,n.text();case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,n.json();case 8:return r=e.sent,i=t.rows.map((function(e){return e._id==r._id?r:e})),a((function(e){return Object(d.a)(Object(d.a)({},e),{},{rows:i})})),e.abrupt("return","success");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a._id=i._id,b({status:"loading",message:""}),e.next=4,fetch("".concat(f.API_URL,"/").concat(t.entityType,"/adminupdate").concat(t.entityType),{method:"PUT",headers:{"Content-Type":"application/json",Language:l.language},body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,v(n);case 7:r=e.sent,b("success"==r?{status:"success",message:"Entity Updated"}:{status:"error",message:r});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(S,{formName:"update".concat(t.entityType),onSubmit:h,formResponse:g,value:i})},ie=(a(191),function(e){var t=e.table,a=e.setTable,i=Object(n.useContext)(h).openModal;return console.log(t.headers),t.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{animation:"border",variant:"primary"}),r.a.createElement(w.a,{animation:"border",variant:"secondary"}),r.a.createElement(w.a,{animation:"border",variant:"success"}),r.a.createElement(w.a,{animation:"border",variant:"danger"}),r.a.createElement(w.a,{animation:"border",variant:"warning"}),r.a.createElement(w.a,{animation:"border",variant:"info"}),r.a.createElement(w.a,{animation:"border",variant:"light"}),r.a.createElement(w.a,{animation:"border",variant:"dark"}),r.a.createElement(w.a,{animation:"grow",variant:"primary"}),r.a.createElement(w.a,{animation:"grow",variant:"secondary"}),r.a.createElement(w.a,{animation:"grow",variant:"success"}),r.a.createElement(w.a,{animation:"grow",variant:"danger"}),r.a.createElement(w.a,{animation:"grow",variant:"warning"}),r.a.createElement(w.a,{animation:"grow",variant:"info"}),r.a.createElement(w.a,{animation:"grow",variant:"light"}),r.a.createElement(w.a,{animation:"grow",variant:"dark"})):r.a.createElement(ne.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,t.headers.map((function(e,a){if(!t.exclude.includes(e))return r.a.createElement("th",{key:a},e)})))),r.a.createElement("tbody",null,t.rows.map((function(e,n){return r.a.createElement("tr",{key:n},Object.keys(e).map((function(a,n){if(!t.exclude.includes(Object.keys(e)[n]))return r.a.createElement("td",{key:n},e[a].toString())})),r.a.createElement("td",{className:"btn-primary table-row",onClick:function(){return i((function(){return re({table:t,setTable:a,tr:e})}))}},r.a.createElement("i",{className:"fa fa-edit"})))}))))}),le=a(213),ce=a(210),se=function(e){var t=e.table,a=e.setTable,n=e.setFilter,i=function(){n((function(e){return{dropdown:e.dropdown,value:"",field:e.field}}))};return r.a.createElement(le.a,{activeKey:t.entityType,onSelect:function(e){return t=e,i(),void a((function(e){return{entityType:t,headers:e.headers,rows:e.rows,totalCount:e.totalCount,isLoading:e.isLoading,exclude:e.exclude}}));var t}},r.a.createElement(ce.a,{eventKey:"challenge",title:"challenges"},r.a.createElement(ie,{table:t,setTable:a})),r.a.createElement(ce.a,{eventKey:"user",title:"users"},r.a.createElement(ie,{table:t,setTable:a})),r.a.createElement(ce.a,{eventKey:"game",title:"games"},r.a.createElement(ie,{table:t,setTable:a})))},oe=function(e){var t=e.table,a=e.setTable;console.log(t);var i=["404","500","401"],l=Object(n.useState)({status:"",message:""}),c=Object(m.a)(l,2),s=c[0],p=c[1],g=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.includes(t.status.toString())){e.next=6;break}return e.next=3,t.text();case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,t.json();case 8:return n=e.sent,a((function(e){return Object(d.a)(Object(d.a)({},e),{},{totalCount:e.totalCount+1,rows:[].concat(Object(B.a)(e.rows),[n])})})),e.abrupt("return","success");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({status:"loading",message:""}),e.next=3,fetch("".concat(f.API_URL,"/").concat(t.entityType,"/create").concat(t.entityType),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,g(n);case 6:r=e.sent,p("success"==r?{status:"success",message:"Entity created"}:{status:"error",message:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(S,{formName:"create".concat(t.entityType),onSubmit:b,formResponse:s})},ue=function(){var e=Object(n.useContext)(h).openModal,t=Object(j.a)().i18n,a=Object(n.useState)({entityType:"user",headers:[],rows:[],totalCount:0,isLoading:!0,exclude:[]}),i=Object(m.a)(a,2),l=i[0],c=i[1],s=Object(n.useState)({dropdown:[],field:"_id",value:""}),p=Object(m.a)(s,2),g=p[0],b=p[1],v=Object(n.useState)({buttons:[],skip:0,limit:10}),E=Object(m.a)(v,2),y=E[0],w=E[1],O=function(){var e=Object(u.a)(o.a.mark((function e(){var a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch("".concat(f.API_URL,"/").concat(l.entityType,"/adminget").concat(l.entityType,"s/?skip=").concat(y.skip,"&limit=").concat(y.limit,"&field=").concat(g.field,"&value=").concat(g.value),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Language:t.language}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),x(!1),200==a.status&&(r=n.entities?n.entities:n.headers,i=Object.keys(r[0]),c((function(e){return{entityType:e.entityType,rows:n.entities?n.entities:[],headers:i,totalCount:n.totalCount,isLoading:e.isLoading,exclude:n.exclude}})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){c((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoading:e})}))};return Object(n.useEffect)((function(){O()}),[l.entityType]),Object(n.useEffect)((function(){O()}),[y.skip]),r.a.createElement(F.b.div,{className:"container",exit:"exit"},r.a.createElement(ee,{filter:g,setFilter:b,table:l,setNewTable:O}),r.a.createElement("button",{onClick:function(){return e((function(){return oe({table:l,setTable:c})}))}},"Create new ",l.entityType),r.a.createElement(se,{table:l,setTable:c,setFilter:b}),r.a.createElement(ae,{pagination:y,setPagination:w,table:l,setNewTable:O}))},me=a(11),de=(a(192),function(e){var t=e.title,a=e.details,i=e.gameType,l=e.path,c=Object(j.a)().t,s=Object(n.useContext)(g).user,o=Object(n.useContext)(h).openModal,u=Object(G.f)();return r.a.createElement("div",{className:"game-details"},r.a.createElement("div",{className:"game-details-image-container"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1589289959525-b5b685332c7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",alt:"none"})),r.a.createElement("div",{className:"game-details-content"},r.a.createElement("p",{className:"game-details-title text-medium"},t),r.a.createElement("div",{className:"game-details-info"},r.a.createElement("p",{className:"text-medium"},a),s.id?r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){u.push({pathname:"".concat(i,"/").concat(l)})}},c("home.play")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){return o(L)}},c("home.login")),r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){return o(P)}},c("home.signup"))))))}),pe=(a(193),function(){var e,t=Object(j.a)().t;return r.a.createElement("div",{className:"game-list-container"},r.a.createElement("section",{className:"game-list"},r.a.createElement(de,(e={title:t("home.games.multiPlayerGame.title"),details:t("home.games.multiPlayerGame.details"),gameType:"/mulitPlayerGame"},Object(me.a)(e,"gameType","/mulitPlayerGame"),Object(me.a)(e,"gameName","onlineGame"),e)),r.a.createElement(de,{title:t("home.games.stickGame.title"),details:t("home.games.cubeGame.details"),gameType:"singlePlayerGame",path:"stickGame"}),r.a.createElement(de,{title:t("home.games.cubeGame.title"),details:t("home.games.cubeGame.details"),gameType:"singlePlayerGame",path:"cubeGame"})))}),fe=(a(194),{hidden:{opacity:0,x:"-100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5,stiffness:50}},exit:{x:"-100vh",transition:{ease:"easeInOut"}}}),ge=function(){var e=Object(j.a)().t;return r.a.createElement(F.b.div,{className:"container",variants:fe,initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement("div",{className:"top-section"},r.a.createElement("h1",{className:"title"},e("home.title"))),r.a.createElement("div",{className:"game-list-section"},r.a.createElement(pe,null)))},be=a(82),ve=a.n(be);a(202);ve.a.setAppElement("#root");var he=function(){var e=Object(n.useContext)(h),t=e.modal,a=e.closeModal;return r.a.createElement("div",null,r.a.createElement(ve.a,{style:{overlay:{borderColor:"grey"},content:{height:"fit-content",width:"fit-content",position:"fixed",margin:"5% auto",left:"0",right:"0",padding:"15px",zIndex:"99999"}},isOpen:t.isShowModal,onRequestClose:function(){return a()}},r.a.createElement("div",{className:"close-button-container"},r.a.createElement("div",{className:"close-button",onClick:function(){return a()}},"X")),r.a.createElement(r.a.Fragment,null,""!=t.component?r.a.createElement(t.component,null):r.a.createElement(r.a.Fragment,null))))};a(110);var Ee=function(){var e=Object(G.g)();return r.a.createElement("div",{className:"App"},r.a.createElement(q.ToastProvider,null,r.a.createElement(y,null,r.a.createElement(v,null,r.a.createElement(z,null,r.a.createElement(R,null),r.a.createElement(he,null),r.a.createElement(F.a,{exitBeforeEnter:!0},r.a.createElement(G.c,{location:e,key:e.key},r.a.createElement(G.a,{path:"/",exact:!0,component:ge}),r.a.createElement(G.a,{path:"/profile",component:X}),r.a.createElement(G.a,{path:"/mulitPlayerGame",exact:!0,component:H}),r.a.createElement(G.a,{path:"/singlePlayerGame",component:W}),r.a.createElement(G.a,{path:"/admin",exact:!0,component:ue}),r.a.createElement(G.a,{component:ge}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(203);var ye=a(83),je=a(126),we=a(127),Oe=a(40);ye.a.use(je.a).use(we.a).use(Oe.e).init({fallbackLng:["en"],debug:!0,whitelist:["en","he"],react:{useSuspense:!1},interpolation:{escapeValue:!1}});ye.a;l.a.render(r.a.createElement(c.a,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create Challenge",spinner:!0},fields:[{label:"challenge name",name:"challengeName",placeholder:"Enter the challengeName",required:!0},{type:"select",entity:"Game",displayname:"name",options:["cubeGame","stickGame","multiPlayerGame"],label:"game name",name:"gameName",required:!0},{label:"reward",name:"reward",placeholder:"Enter the amount of tickets for this reward",type:"number",required:!0},{name:"active",label:"active",type:"checkbox"}]}},43:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create game",spinner:!0},fields:[{label:"game name",name:"name",placeholder:"Enter the Name of the game",required:!0}]}},44:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create User",spinner:!0},fields:[{label:"username",placeholder:"Enter a username",name:"username",validation:{required:"please enter a username",minLength:{value:5,message:"username must have at least 5 characters"}}},{label:"email",placeholder:"Enter a email",name:"email",type:"email",validation:{required:"please enter a valid email address",pattern:{value:/^\S+@\S+\.\S+$/,message:"invalid email address"}}},{label:"tickets",placeholder:"Enter an amount of tickets",name:"tickets",type:"number"},{label:"password",placeholder:"Enter a password",name:"password",type:"password",validation:{required:"this is required",minLength:{value:5,message:"Password must have at least 5 characters"}}},{label:"Confirm password",placeholder:"please confirm pasword",name:"password_repeat",type:"confirmpassword",validation:{message:"The passwords do not match"}}]}},45:function(e,t,a){"use strict";a.r(t),t.default={config:{spinner:!0,buttonText:"Login"},fields:[{label:"username",name:"username",placeholder:"Enter your username",validation:{required:"please enter your username"}},{label:"password",placeholder:"Enter your password",name:"password",type:"password",validation:{required:"please enter your password"}}]}},46:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create User",spinner:!0},fields:[{label:"username",placeholder:"Enter a username",name:"username",validation:{required:"please enter a username",minLength:{value:5,message:"username must have at least 5 characters"}}},{label:"email",placeholder:"Enter a email",name:"email",type:"email",validation:{required:"please enter a valid email address",pattern:{value:/^\S+@\S+\.\S+$/,message:"invalid email address"}}},{label:"password",placeholder:"Enter a password",name:"password",type:"password",validation:{required:"this is required",minLength:{value:5,message:"Password must have at least 5 characters"}}},{label:"Confirm password",placeholder:"please confirm pasword",name:"password_repeat",type:"confirmpassword",validation:{message:"The passwords do not match"}}]}},47:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Create Challenge",spinner:!0},fields:[{label:"challengeName",name:"challengeName",placeholder:"Enter the challengeName",required:!0},{type:"select",name:"gameName",entity:"Game",displayname:"name",options:["cubeGame","stickGame","multiPlayerGame"],label:"gameName",required:!0},{label:"reward",name:"reward",placeholder:"Enter the amount of tickets for this reward",type:"number",required:!0},{name:"active",label:"active",type:"checkbox"}]}},48:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Update game",spinner:!0},fields:[{label:"game name",name:"name",placeholder:"Enter the Name of the game",required:!0}]}},49:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"Update User",spinner:!0},fields:[{label:"username",placeholder:"Enter a username",name:"username",validation:{required:"please enter a username",minLength:{value:5,message:"username must have at least 5 characters"}}},{label:"email",placeholder:"Enter a email",name:"email",type:"email",validation:{required:"please enter a valid email address",pattern:{message:"invalid email address"}}},{label:"tickets",placeholder:"Enter an amount of tickets",name:"tickets",type:"number"}]}},87:function(e,t,a){"use strict";a.r(t),t.default={config:{spinner:!0,buttonText:"\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea"},fields:[{label:"\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",name:"username",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",validation:{required:"\u05d0\u05e0\u05d0 \u05d4\u05d6\u05df \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9"}},{label:"\u05e1\u05d9\u05e1\u05de\u05d4",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e1\u05d9\u05e1\u05de\u05ea\u05da",name:"password",type:"password",validation:{required:"\u05d4\u05d6\u05df \u05d0\u05ea \u05e1\u05d9\u05e1\u05de\u05ea\u05da \u05d1\u05d1\u05e7\u05e9\u05d4"}}]}},88:function(e,t,a){"use strict";a.r(t),t.default={config:{buttonText:"\u05d4\u05d9\u05e8\u05e9\u05dd",spinner:!0},fields:[{label:"\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",name:"username",validation:{required:"\u05d0\u05e0\u05d0 \u05d4\u05db\u05e0\u05e1 \u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",minLength:{value:5,message:"\u05e9\u05dd \u05d4\u05de\u05e9\u05ea\u05de\u05e9 \u05d7\u05d9\u05d9\u05d1 \u05dc\u05db\u05dc\u05d5\u05dc \u05dc\u05e4\u05d7\u05d5\u05ea 5 \u05ea\u05d5\u05d5\u05d9\u05dd"}}},{label:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",placeholder:'\u05d4\u05d6\u05df \u05d3\u05d5\u05d0"\u05dc',name:"email",type:"email",validation:{required:'\u05d0\u05e0\u05d0 \u05d4\u05d6\u05df \u05db\u05ea\u05d5\u05d1\u05ea \u05d3\u05d5\u05d0"\u05dc \u05ea\u05e7\u05e0\u05d9\u05ea',pattern:{value:/^\S+@\S+\.\S+$/,message:'\u05db\u05ea\u05d5\u05d1\u05ea \u05d3\u05d5\u05d0"\u05dc \u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9\u05ea'}}},{label:"\u05e1\u05d9\u05e1\u05de\u05d4",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e1\u05d9\u05e1\u05de\u05d0",name:"password",type:"password",validation:{required:"\u05d6\u05d4 \u05e0\u05d3\u05e8\u05e9",minLength:{value:5,message:"\u05d4\u05e1\u05d9\u05e1\u05de\u05d4 \u05d7\u05d9\u05d9\u05d1\u05ea \u05dc\u05db\u05dc\u05d5\u05dc \u05dc\u05e4\u05d7\u05d5\u05ea 5 \u05ea\u05d5\u05d5\u05d9\u05dd"}}},{label:"\u05d0\u05e9\u05e8 \u05e1\u05d9\u05e1\u05de\u05d4",placeholder:"\u05d0\u05e0\u05d0 \u05d0\u05e9\u05e8 \u05d0\u05ea \u05d4\u05e1\u05d9\u05e1\u05de\u05d4",name:"password_repeat",type:"confirmpassword",validation:{message:"\u05d4\u05e1\u05d9\u05e1\u05de\u05d0\u05d5\u05ea \u05dc\u05d0 \u05ea\u05d5\u05d0\u05de\u05d5\u05ea"}}]}}},[[131,1,2]]]);
//# sourceMappingURL=main.5f2e7cbf.chunk.js.map