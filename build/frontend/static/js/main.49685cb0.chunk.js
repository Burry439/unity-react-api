(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(62),a(2)),s=a.n(o),i=a(6),u=a(3),m=Object(n.createContext)(),p=JSON.parse(localStorage.getItem("jwt"))||{id:null,username:"",accessToken:""},d=function(e){var t=Object(n.useState)(p),a=Object(u.a)(t,2),c=a[0],l=a[1],o=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r={id:n.user._id,username:n.user.username,accessToken:n.accessToken},localStorage.setItem("jwt",JSON.stringify(r)),l(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/users/test",{method:"GET",headers:{Authorization:"Bearer ".concat(c.accessToken),"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r={id:n.user._id,username:n.user.username,accessToken:n.accessToken},localStorage.setItem("jwt",JSON.stringify(r)),l(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(m.Provider,{value:{user:c,login:o,signout:function(){localStorage.removeItem("jwt"),l({id:null,username:"",accessToken:""})},signup:f,test:d}},e.children)},f=a(9),E=(a(64),function(e){var t=e.game,a=Object(f.e)(),c=Object(n.useContext)(m).user;return Object(n.useEffect)((function(){c.id||a.push("/home")}),[c]),r.a.createElement("div",{id:"unity-body"},r.a.createElement("iframe",{src:t,height:"900px",width:"100%"}))}),g=function(e){var t=e.location;return r.a.createElement(E,{game:t.state})},h=a(31),y=a(56),v=function(e,t){switch(t.type){case"START_GAME":return console.log(t),{playerId:t.data.thisPlayerId,isDuplicate:!1,allPlayers:t.data.allPlayers};case"SET_PLAYER_AS_DUPLICATE":return console.log("SET_PLAYER_AS_DUPLICATE",t),{playerId:t.playerId,isDuplicate:!0,allPlayers:[]};case"ADD_NEW_PLAYER":return console.log("ADD_NEW_PLAYER",t),{playerId:e.playerId,isDuplicate:e.isDuplicate,allPlayers:[].concat(Object(y.a)(e.allPlayers),[t.newPlayer])};case"REMOVE_PLAYER":return console.log("REMOVE_PLAYER",t),{playerId:e.playerId,isDuplicate:e.isDuplicate,allPlayers:e.allPlayers.filter((function(e){return e.id!=t.removedPlayerID}))};case"CLEAR_ALL_PLAYERS":return console.log("CLEAR_ALL_PLAYERS",t),{thisPlayerId:"",allPlayers:[],isDuplicate:!1};case"SET_ALL_PLAYERS":return console.log("set all players",t.allPlayers),Object(h.a)(Object(h.a)({},e),{},{allPlayers:t.allPlayers});default:return e}},b=Object(n.createContext)(),O=function(e){var t=Object(n.useReducer)(v,{thisPlayerId:"",isDuplicate:!1,allPlayers:[]}),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement(b.Provider,{value:{game:c,gameDispatch:l}},e.children)},j=a(54),x=a.n(j),P=(a(100),function(e){var t=e.game,a=Object(f.e)(),c=Object(n.useContext)(m).user;return Object(n.useEffect)((function(){c.id||a.push("/home")}),[c]),r.a.createElement("div",{id:"unity-body"},r.a.createElement("iframe",{src:t,height:"900px",width:"100%"}))}),S=function(){var e=Object(n.useContext)(m).user,t=Object(n.useContext)(b),a=t.game,c=t.gameDispatch,l=null;return Object(n.useEffect)((function(){if(console.log("in use effect"),l=x()("http://localhost:7000"))return l.on("connect",(function(){console.log("connetion")})),l.emit("addReactUser",e),l.on("reactFirstSpawn",(function(e){console.log("reactFirstSpawn"),c({type:"START_GAME",data:e})})),l.on("duplicatePlayer",(function(e){console.log("duplicatePlayer"),c({type:"SET_PLAYER_AS_DUPLICATE",playerId:e})})),l.on("reactSpawn",(function(e){console.log("reactSpawn"),c({type:"ADD_NEW_PLAYER",newPlayer:e})})),l.on("disconnectFromReact",(function(e){console.log("in disconnectFromReact",e),a.isDuplicate||c({type:"REMOVE_PLAYER",removedPlayerID:e})})),function(){console.log("in return"),c({type:"CLEAR_ALL_PLAYERS"}),l.close()}}),[]),a.isDuplicate?r.a.createElement("div",null,"Looks like you have this opened in anoyher tab try closing and refreshing the page"):r.a.createElement(P,{game:"http://localhost:7000/"})},w=(a(101),Object(n.createContext)()),C={isShowModal:!1,component:""},A=function(e){var t=Object(n.useState)(C),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement(w.Provider,{value:{modal:c,openModal:function(e){l({isShowModal:!0,component:e})},closeModal:function(){l({isShowModal:!1,component:""})}}},e.children)},L=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),p=o[0],d=o[1],f=Object(n.useContext)(m).login,E=Object(n.useContext)(w).closeModal,g=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,password:p},e.next=4,f(n);case 4:E();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{type:"text",placeholder:"username",required:!0,value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"password",required:!0,value:p,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Login"}))},_=function(e){var t=e.title,a=e.details,c=e.gameType,l=e.gameName;console.log(l);var o=Object(n.useContext)(m).user,s=Object(n.useContext)(w).openModal,i=Object(f.e)();return r.a.createElement("div",{className:"game-details"},r.a.createElement("div",{className:"game-details-image-container"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1589289959525-b5b685332c7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",alt:"none"})),r.a.createElement("div",{className:"game-details-content"},r.a.createElement("p",{className:"game-details-title text-medium"},t),r.a.createElement("div",{className:"game-details-info"},r.a.createElement("p",{className:"text-medium"},a),o.id?r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){i.push({pathname:"".concat(c),state:l})}},"Play"):r.a.createElement("p",{className:"game-details-play text-medium",onClick:function(){return s(L)}},"Log In to Play"))))},k=(a(102),function(){return r.a.createElement("div",{className:"game-list-container"},r.a.createElement("section",{className:"game-list"},r.a.createElement(_,{title:"online game",details:"its a mulitplayer game",gameType:"/mulitPlayerGame",gameName:"onlineGame"}),r.a.createElement(_,{title:"Stick game",details:"its a single player game",gameType:"/singlePlayerGame",gameName:"stick adventure demo"})))}),N=(a(103),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"top-section"},r.a.createElement("h1",null,"Select a Game")),r.a.createElement("div",{className:"game-list-section"},r.a.createElement(k,null)))}),T=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),p=o[0],d=o[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),g=E[0],h=E[1],y=Object(n.useContext)(m),v=y.signup,b=(y.test,Object(n.useContext)(w).closeModal),O=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,password:g,email:p},e.next=4,v(n);case 4:b();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:O},r.a.createElement("input",{type:"text",placeholder:"username",required:!0,value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"email",required:!0,value:p,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"password",required:!0,value:g,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Sign up"}))},D=a(11),R=(a(104),a(55)),I=a.n(R),M=function(){var e=Object(n.useContext)(w).openModal,t=Object(n.useContext)(m),a=t.user,c=t.signout;return r.a.createElement("header",null,r.a.createElement(D.b,{className:"logo-container",to:"/home"},r.a.createElement("img",{className:"logo",src:I.a,alt:"Logo"})),r.a.createElement("nav",null,a.id?r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{onClick:function(){return c()}},r.a.createElement("a",null),"Signout"),r.a.createElement("li",{onClick:function(){return e(T)}},r.a.createElement("a",null),"Sign Up"),r.a.createElement("li",null,r.a.createElement("a",null),"Profile")):r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{onClick:function(){return e(T)}},r.a.createElement("a",null),"Sign Up"),r.a.createElement("li",{onClick:function(){return e(L)}},r.a.createElement("a",null),"Login"))))},Y=a(30),G=a.n(Y);G.a.setAppElement("#root");var J=function(){var e=Object(n.useContext)(w),t=e.modal,a=e.closeModal;return r.a.createElement("div",null,r.a.createElement(G.a,{w:!0,style:{overlay:{borderColor:"grey"},content:{maxWidth:"100%",top:"50px",left:"50px",right:"50px",bottom:"50px"}},isOpen:t.isShowModal,onRequestClose:function(){return a()}},r.a.createElement(r.a.Fragment,null,""!=t.component?r.a.createElement(t.component,null):r.a.createElement(r.a.Fragment,null)),r.a.createElement("button",{onClick:function(){return a()}})))};var q=function(){return r.a.createElement(D.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,null,r.a.createElement(d,null,r.a.createElement(O,null,r.a.createElement(M,null),r.a.createElement(J,null),r.a.createElement(f.a,{path:"/",exact:!0,component:N}),r.a.createElement(f.a,{path:"/home",exact:!0,component:N}),r.a.createElement(f.a,{path:"/mulitPlayerGame",exact:!0,component:S}),r.a.createElement(f.a,{path:"/singlePlayerGame",exact:!0,component:g}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(114);l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a.p+"static/media/logo.3fa434f6.png"},57:function(e,t,a){e.exports=a(115)},62:function(e,t,a){},64:function(e,t,a){},97:function(e,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.49685cb0.chunk.js.map