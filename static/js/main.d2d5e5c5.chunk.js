(this.webpackJsonpcod_tournament=this.webpackJsonpcod_tournament||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},71:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(18),r=n.n(s),i=(n(51),n(4)),l=(n(52),n(20)),o=n(8),u=n(16),j=n(17),d=n(19),m=n(6),h=n.n(m);function b(e){if(!e)return[];var t=[];return Object.keys(e).forEach((function(n){t.push(e[n])})),t}var f=n(28);n(53),n(56),n(98);f.a.initializeApp({apiKey:"AIzaSyAQ2d6W3c1EpZ27yNxaBp8p0yIRWOIb1uE",authDomain:"warzonetournament-247ef.firebaseapp.com",projectId:"warzonetournament-247ef",storageBucket:"warzonetournament-247ef.appspot.com",messagingSenderId:"350451124321",appId:"1:350451124321:web:2a40d2cb3c5245139cc220",measurementId:"G-2GMB0XHEP4"}),f.a.auth().useDeviceLanguage();var O=f.a,p=O.database(),x=function(){function e(){Object(u.a)(this,e)}return Object(j.a)(e,[{key:"detach",value:function(){p.ref("t").off()}},{key:"save",value:function(e){var t=p.ref().child("t").push();e.id=t.key,t.set(e)}},{key:"update",value:function(e,t){p.ref("t/".concat(e)).set(t)}},{key:"close",value:function(e){var t={};return t["/t/"+e+"/open/"]=!1,p.ref().update(t)}},{key:"delete",value:function(e){p.ref("t/".concat(e)).remove()}},{key:"list",value:function(e){p.ref("t").on("value",(function(t){e(b(t.val()))}))}},{key:"read",value:function(e,t){p.ref("t/".concat(t)).on("value",(function(t){e(t.val())}))}},{key:"saveTeam",value:function(e,t){var n=p.ref().child("t/".concat(e,"/teams/")).push();t.id=n.key,n.set(t)}},{key:"deleteTeam",value:function(e,t){p.ref("t/".concat(e,"/teams/").concat(t)).remove()}},{key:"listTeams",value:function(e,t){p.ref("t/".concat(t,"/teams")).on("value",(function(t){e(b(t.val()))}))}},{key:"getTeam",value:function(e,t,n){p.ref("t/".concat(t,"/teams/").concat(n)).on("value",(function(t){e(t.val())}))}},{key:"saveMatch",value:function(e,t,n){var a=p.ref().child("t/".concat(e,"/teams/").concat(t,"/matches")).push();n.id=a.key,a.set(n)}},{key:"deleteMatch",value:function(e,t,n){p.ref("t/".concat(e,"/teams/").concat(t,"/matches/").concat(n)).remove()}},{key:"listMatches",value:function(e,t,n){p.ref("t/".concat(t,"/teams/").concat(n,"/matches")).on("value",(function(t){e(b(t.val()))}))}},{key:"getMatch",value:function(e,t,n,a){p.ref("t/".concat(t,"/teams/").concat(n,"/matches/").concat(a)).on("value",(function(t){e(t.val())}))}},{key:"saveTeams",value:function(e,t){var n=this;t.forEach((function(t){n.saveTeam(e,t)}))}},{key:"searchById",value:function(e,t){var n=-1;return e.forEach((function(e,a){e.id===t&&(n=a)})),n}},{key:"getMatchPoint",value:function(e){return this.getPositionPoint(e.position)+this.getMatchKills(e)}},{key:"getMatchKills",value:function(e){return h.a.sum(e.teamScore.map((function(e){return parseInt(e.kills)})))}},{key:"getPositionPoint",value:function(e){switch(e){case"1":return 20;case"2":return 15;case"3":return 10;case"4":return 5;case"5":return 3;case"6":return 2;default:return 0}}},{key:"getKillPoint",value:function(e){return e}},{key:"getDamagePoint",value:function(e){return 0}},{key:"getScorePoint",value:function(e){return 0}},{key:"getResults",value:function(e){var t=this,n=Object(d.a)(e.players),a={};n.forEach((function(n){a[n]||(a[n]={player:n,kills:0,damage:0,points:0,total:0}),Object.keys(e.teams).forEach((function(c){var s=e.teams[c];s.matches&&Object.keys(s.matches).forEach((function(e){var c=s.matches[e];s.players.indexOf(n)>-1&&(a[n].points+=t.getPositionPoint(c.position),a[n].total+=t.getPositionPoint(c.position)),c.teamScore.forEach((function(e){n===e.player&&(a[n].kills+=parseInt(e.kills),a[n].damage+=parseInt(e.damage),a[n].total+=parseInt(e.kills))}))}))}))}));var c=[];return Object.keys(a).forEach((function(e){c.push(a[e])})),{players:h.a.orderBy(c,["total"],["desc"]),teams:h.a.orderBy(b(e.teams).map((function(e){var n=h.a.sumBy(b(e.matches),(function(e){return h.a.sumBy(e.teamScore,(function(e){return parseInt(e.kills)}))})),a=h.a.sumBy(b(e.matches),(function(e){return t.getPositionPoint(e.position)}));return{teamId:e.id,name:e.name,players:e.players,kills:n,damage:h.a.sumBy(b(e.matches),(function(e){return h.a.sumBy(e.teamScore,(function(e){return parseInt(e.damage)}))})),points:a,total:n+a}})),["total"],["desc"])}}}]),e}(),v=n(13),y=n.n(v),g=n(22),N=function(){function e(){Object(u.a)(this,e)}return Object(j.a)(e,[{key:"fetchAdjective",value:function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=adjective&excludePartOfSpeech=noun&minCorpusCount=4000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5").then((function(e){return e.json()})).then((function(e){return e.word})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchNoun",value:function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=100000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5").then((function(e){return e.json()})).then((function(e){return e.word})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getName",value:function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchNoun();case 2:return e.t0=e.sent,e.t1=e.t0+" ",e.next=6,this.fetchAdjective();case 6:return e.t2=e.sent,e.abrupt("return",e.t1+e.t2);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),k=function(){function e(){Object(u.a)(this,e)}return Object(j.a)(e,[{key:"getRedirectResult",value:function(e){O.auth().getRedirectResult().then((function(t){e(t,null)})).catch((function(t){e(null,t)}))}},{key:"loggedUser",value:function(){return O.auth().currentUser}},{key:"liveLoggedUser",value:function(e){O.auth().onAuthStateChanged(e)}},{key:"login",value:function(e,t){return O.auth().signInWithEmailAndPassword(e,t)}},{key:"signup",value:function(e,t){return O.auth().createUserWithEmailAndPassword(e,t)}},{key:"logout",value:function(){O.auth().signOut()}},{key:"popupGoogleLogin",value:function(){var e=new O.auth.GoogleAuthProvider;return O.auth().signInWithPopup(e)}},{key:"googleLogin",value:function(){var e=new O.auth.GoogleAuthProvider;O.auth().signInWithRedirect(e)}},{key:"facebookLogin",value:function(){var e=new O.auth.FacebookAuthProvider;O.auth().signInWithRedirect(e)}},{key:"appleLogin",value:function(){}},{key:"twitterLogin",value:function(){}},{key:"microsoftLogin",value:function(){}}]),e}(),S=O.storage().ref(),w=function(){function e(){Object(u.a)(this,e)}return Object(j.a)(e,[{key:"listGuns",value:function(){return S.child("guides/weapons").listAll()}}]),e}(),C=new(function(){function e(){Object(u.a)(this,e)}return Object(j.a)(e,[{key:"auth",value:function(){return new k}},{key:"storage",value:function(){return new w}},{key:"tournaments",value:function(){return new x}},{key:"names",value:function(){return new N}}]),e}()),I=n(34),P=n.n(I),E=n(0);P.a.setAppElement("#root");var T=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],r={inset:"auto",minWith:"99vw",maxHeight:"80vh",overflow:"auto",width:"lg"===e.size?"90%":"md"===e.size?"60%":"auto",padding:"0",backgroundColor:"#111e",border:"1px solid #2f2c",boxShadow:"0px 0px 20px rgb(0, 0, 0, .4)"};Object(a.useEffect)((function(){return s(e.isOpen[0])}),[e]);return Object(E.jsxs)(P.a,{isOpen:c,onRequestClose:e.onRequestClose,closeTimeoutMS:300,style:{overlay:{backgroundColor:"#000a"},content:r},children:[Object(E.jsx)("div",{className:"h-layout justify-right",children:Object(E.jsx)("button",{className:"btn--secondary",onClick:function(){return e.isOpen[0]=!1,void s(!1)},children:Object(E.jsx)("i",{className:"fa fa-times"})})}),Object(E.jsx)("div",{className:"container v-layout align-stretch",style:{paddingTop:"0"},children:e.children})]})},D=n(100),M=(n(71),n(99)),z=n(101);n(72),window.paypal.Buttons.driver("react",{React:c.a,ReactDOM:r.a});var B=function(e){var t=e.onSave,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)(""),o=Object(i.a)(l,2),u=o[0],j=o[1],m=Object(a.useState)(4),h=Object(i.a)(m,2),b=h[0],f=h[1],O=Object(a.useState)([{id:Object(D.a)(),name:""},{id:Object(D.a)(),name:""},{id:Object(D.a)(),name:""},{id:Object(D.a)(),name:""}]),p=Object(i.a)(O,2),x=p[0],v=p[1];Object(a.useEffect)((function(){y()}),[u,b,x]);var y=function(){var e=!0,t=[];x.forEach((function(n){""===n.name||t.indexOf(n.name)>-1?e=!1:t.push(n.name)})),r(""!==u&&""!==b&&e)},g=x.map((function(e,t){return Object(E.jsx)(M.a,{timeout:400,classNames:"input-list-item",children:Object(E.jsxs)("div",{className:"mb h-layout justify-stretch",children:[Object(E.jsx)("input",{className:"flex-grow",id:"playerNameInput"+t,type:"text",value:e.name,placeholder:"Player Name",onChange:function(e){return function(e,t){var n=Object(d.a)(x);n[e].name=t,v(n)}(t,e.target.value)}}),Object(E.jsx)("button",{className:"btn--secondary text-accent",onClick:function(){return function(e){var t=Object(d.a)(x);t.splice(e,1),v(t)}(t)},children:Object(E.jsx)("i",{className:"fa fa-minus"})})]})},e.id)}));return Object(E.jsxs)("div",{className:"mt v-layout align-stretch",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"form-group h-layout",children:Object(E.jsx)("input",{className:"flex-grow",id:"tournamentNameInput",type:"text",value:u,onChange:function(e){return j(e.target.value)},placeholder:"Tournament Name"})}),Object(E.jsxs)("div",{className:"form-group h-layout",children:[Object(E.jsx)("label",{className:"flex-grow",htmlFor:"teamSizeInput",children:"Team size"}),Object(E.jsx)("input",{id:"teamSizeInput",type:"number",value:b,onChange:function(e){return f(e.target.value)},autoComplete:"off",min:"1",max:"4"})]})]}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:"h-layout justify-left",children:[Object(E.jsx)("h3",{className:"flex-grow",children:"Players"}),Object(E.jsx)("button",{className:"btn--secondary",onClick:function(){v([].concat(Object(d.a)(x),[{id:Object(D.a)(),name:""}]))},children:Object(E.jsx)("i",{className:"fa fa-plus"})})]}),Object(E.jsx)(z.a,{children:g})]}),Object(E.jsx)("button",{onClick:function(){s&&(C.tournaments().save({created:new Date,open:!0,name:u,teamSize:b,players:x.map((function(e){return e.name})),teams:[]}),t())},disabled:!s,children:"save"})]})},L=n(23),R=n.n(L);n(78);var A=function(e){var t=e.tournament,n=t.players.map((function(e,t){return Object(E.jsx)("span",{className:"mr-3 text-sm",children:e},e)}));return Object(E.jsxs)("div",{className:"card tournament-card",onClick:function(){return window.location="#tournament/"+t.id},children:[Object(E.jsxs)("div",{className:"h-layout",children:[Object(E.jsx)("h3",{className:"flex-grow mr-3",children:t.name}),t.open&&Object(E.jsx)("button",{className:"btn--secondary",onClick:function(e){return function(e){e.stopPropagation(),C.tournaments().delete(t.id)}(e)},children:Object(E.jsx)("i",{className:"fas fa-trash"})})]}),Object(E.jsx)("span",{className:"text-sm text-hint",children:R()(t.created).format("MM/DD/YYYY")}),Object(E.jsxs)("p",{children:["Team size: ",t.teamSize]}),Object(E.jsx)("h3",{children:"Players"}),Object(E.jsx)("div",{className:"h-layout justify-left",children:n})]})};n(79);var K=function(e){var t=e.tournaments.map((function(e,t){return Object(E.jsx)(M.a,{timeout:400,classNames:"card",children:Object(E.jsx)(A,{tournament:e,tIndex:t})},e.id)}));return Object(E.jsx)(z.a,{className:"h-layout tournament-list align-left",children:t})};n(80);var W=function(){var e=Object(a.useState)([!1]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(i.a)(s,2),l=r[0],o=r[1];Object(a.useEffect)((function(){C.tournaments().detach(),u()}),[]);var u=function(){C.tournaments().list((function(e){o(e)}))};return Object(E.jsxs)("div",{className:"home v-layout",children:[Object(E.jsx)("div",{className:"flex-grow v-layout start-tournament-btn",children:Object(E.jsx)("button",{onClick:function(){return c([!0])},children:"Start Tournament"})}),Object(E.jsx)("h3",{children:"Tournaments"}),Object(E.jsx)(K,{tournaments:l}),Object(E.jsx)(T,{isOpen:n,onRequestClose:function(){return c([!1])},size:"sm",children:Object(E.jsx)(B,{onSave:function(){return c([!1])}})})]})},Y=(n(81),n(29));n(82);var G=function(e){var t=e.team,n=e.onSave,c=Object(a.useState)(!1),s=Object(i.a)(c,2),r=s[0],l=s[1],o=Object(a.useState)({id:Object(D.a)(),created:new Date,position:"",teamScore:t.players.map((function(e){return{player:e,kills:"",damage:""}}))}),u=Object(i.a)(o,2),j=u[0],d=u[1];Object(a.useEffect)((function(){m()}),[j]);var m=function(){var e=!0;j.teamScore.forEach((function(t){""!==t.kills&&""!==t.damage||(e=!1)})),l(""!==j.position&&e)},h=j.teamScore.map((function(e,t){return Object(E.jsxs)("div",{className:"form-group match-player-form",children:[Object(E.jsx)("label",{className:"flex-grow mr",children:e.player}),Object(E.jsx)("input",{id:"playerNameInput"+t,type:"number",value:e.kills,placeholder:"Kills",onChange:function(e){return function(e,t){var n=Object(Y.a)({},j);n.teamScore[e].kills=t,d(n)}(t,e.target.value)},autoComplete:"off",min:"1",max:"100"}),Object(E.jsx)("input",{id:"playerNameInput"+t,type:"number",value:e.damage,placeholder:"Dmg",onChange:function(e){return function(e,t){var n=Object(Y.a)({},j);n.teamScore[e].damage=t,d(n)}(t,e.target.value)},autoComplete:"off",min:"1",max:"100000"})]},t)}));return Object(E.jsxs)("div",{className:"v-layout align-stretch",children:[Object(E.jsx)("div",{children:Object(E.jsxs)("div",{className:"form-group h-layout",children:[Object(E.jsx)("label",{className:"flex-grow",htmlFor:"matchPositionInput",children:"Match Position"}),Object(E.jsx)("input",{id:"matchPositionInput",type:"number",value:j.position,onChange:function(e){return function(e){var t=Object(Y.a)({},j);t.position=e,d(t)}(e.target.value)},autoComplete:"off",min:"1",max:"99"})]})}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{className:"flex-grow text-accent",children:"Players"}),h]}),Object(E.jsx)("button",{onClick:function(){r&&(C.tournaments().saveMatch(t.tournamentId,t.id,j),n())},disabled:!r,children:"save"})]})};n(83);var H=function(e){var t=e.tournamentOpen,n=e.match,c=e.onDelete,s=C.tournaments(),r=Object(a.useState)(!1),l=Object(i.a)(r,2),o=l[0],u=l[1],j=n.teamScore.map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:e.player}),Object(E.jsx)("td",{children:e.kills}),Object(E.jsx)("td",{children:e.damage})]},t)}));return Object(E.jsxs)("div",{id:n.id,className:"match card",onClick:function(){return u(!o)},children:[Object(E.jsxs)("div",{className:"h-layout text-sm",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"text-accent text-bold",children:"Kills: "}),s.getMatchKills(n)]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"text-accent text-bold ml",children:"Pts: "}),s.getPositionPoint(n.position)]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"text-accent text-bold ml",children:"Total: "}),s.getMatchPoint(n)]}),t&&Object(E.jsx)("div",{className:"ml",onClick:function(e){return c(e,n)},children:Object(E.jsx)("i",{className:"fas fa-trash"})})]}),Object(E.jsxs)("div",{className:(o?"match--open":"")+" mt match-detail",style:{maxHeight:o?document.querySelector("#".concat(CSS.escape(n.id)," .match-detail")).scrollHeight+"px":0},children:[n.created&&Object(E.jsxs)("div",{className:"text-sm",children:["Date: ",R()(n.created).format("MM/DD/YYYY")]}),Object(E.jsxs)("div",{className:"text-sm",children:["Position: ",n.position]}),Object(E.jsxs)("table",{className:"mt",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{style:{width:"100%"},children:"Player"}),Object(E.jsx)("th",{children:"Kills"}),Object(E.jsx)("th",{children:"Dmg"})]})}),Object(E.jsx)("tbody",{children:j})]})]})]})};n(84);var q=function(e){var t=e.tournamentOpen,n=e.tournamentId,c=e.teamId,s=e.onDelete,r=Object(a.useState)([]),l=Object(i.a)(r,2),o=l[0],u=l[1];Object(a.useEffect)((function(){j()}),[c]);var j=function(){C.tournaments().listMatches((function(e){u(e)}),n,c)},d=o.map((function(e,n){return Object(E.jsx)(M.a,{timeout:400,classNames:"card",children:Object(E.jsx)(H,{tournamentOpen:t,match:e,onDelete:s})},e.id)}));return Object(E.jsx)(z.a,{className:"match-list",children:d})};n(85);var F=function(e){var t=e.tournamentOpen,n=e.team,c=Object(a.useState)([!1]),s=Object(i.a)(c,2),r=s[0],l=s[1],o=n.players.map((function(e,t){return Object(E.jsx)("span",{className:"mr text-sm",children:e},t)}));return Object(E.jsxs)("div",{className:"card v-layout align-stretch",children:[Object(E.jsxs)("div",{className:"h-layout",children:[Object(E.jsx)("h3",{className:"text-sm flex-grow",children:n.name?n.name:n.id.substring(0,4)}),t&&Object(E.jsx)("button",{className:"btn--secondary",onClick:function(){C.tournaments().deleteTeam(n.tournamentId,n.id)},children:Object(E.jsx)("i",{className:"fas fa-trash"})})]}),t&&Object(E.jsx)("button",{className:"btn--tertiary flex-grow",onClick:function(){return l([!0])},children:"Add Match"}),Object(E.jsx)("h4",{className:"text-sm text-bold text-accent",children:"Players"}),Object(E.jsx)("div",{className:"h-layout justify-stretch",children:o}),Object(E.jsx)("h4",{className:"text-sm text-bold text-accent",children:"Matches"}),Object(E.jsx)(q,{tournamentOpen:t,tournamentId:n.tournamentId,teamId:n.id,onDelete:function(e,t){return function(e,t){e.stopPropagation(),C.tournaments().deleteMatch(n.tournamentId,n.id,t.id)}(e,t)}}),Object(E.jsx)(T,{isOpen:r,onRequestClose:function(){return l([!1])},size:"sm",children:Object(E.jsx)(G,{team:n,onSave:function(){l([!1])}})})]})};n(86);var U=function(e){var t=e.tournamentOpen,n=e.tournamentId,c=Object(a.useState)([]),s=Object(i.a)(c,2),r=s[0],l=s[1];Object(a.useEffect)((function(){o()}),[n]);var o=function(){C.tournaments().listTeams((function(e){l(e)}),n)},u=r.map((function(e,n){return Object(E.jsx)(M.a,{timeout:400,classNames:"card",children:Object(E.jsx)(F,{tournamentOpen:t,team:e})},e.id)}));return Object(E.jsx)(z.a,{className:"team-list h-layout align-left",children:u})};n(87);var _=function(e){var t=e.achievement;return Object(E.jsxs)("div",{className:"card v-layout",children:[Object(E.jsx)("div",{children:Object(E.jsx)("i",{className:"fa-2x fas fa-"+t.icon,style:{color:t.iconColor}})}),Object(E.jsx)("h3",{className:"text-sm text-accent mt",children:t.name}),Object(E.jsx)("div",{className:"text-lg mb",children:t.player}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("span",{className:"text-sm text-accent",children:[t.attr,": "]}),t.value]}),Object(E.jsxs)("div",{className:"mt text-sm text-hint",children:["(",t.description,")"]})]})};n(88);var J=function(e){var t=e.result,n=[];if(t.players.length>0){var a=h.a.maxBy(h.a.shuffle(t.players),(function(e){return e.kills})),c=h.a.minBy(h.a.shuffle(t.players),(function(e){return e.kills})),s=h.a.maxBy(h.a.shuffle(t.players),(function(e){return e.damage})),r=h.a.minBy(h.a.shuffle(t.players),(function(e){return e.damage})),i=h.a.maxBy(h.a.shuffle(t.players),(function(e){return e.points})),l=h.a.minBy(h.a.shuffle(t.players),(function(e){return e.points}));n.push({name:"Assassin",player:a.player,attr:"Kills",value:a.kills,description:"Highest Kills",icon:"crosshairs",iconColor:"yellow"}),n.push({name:"Butcher",player:s.player,attr:"Damage",value:s.damage,description:"Highest Damage",icon:"tint",iconColor:"red"}),n.push({name:"Support",player:i.player,attr:"Match Pts",value:i.points,description:"Highest Points",icon:"toolbox",iconColor:"aqua"}),n.push({name:"Bird Hunter",player:c.player,attr:"Kills",value:c.kills,description:"Lowest Kills",icon:"dove",iconColor:"aliceblue"}),n.push({name:"Sleeping",player:r.player,attr:"Damage",value:r.damage,description:"Lowest Damage",icon:"bed",iconColor:"gray"}),n.push({name:"Load",player:l.player,attr:"Match Pts",value:l.points,description:"Lowest Points",icon:"weight-hanging",iconColor:"purple"})}var o=n.map((function(e,t){return Object(E.jsx)(_,{achievement:e},t)}));return Object(E.jsx)("div",{className:"achievement-list h-layout align-stretch",children:o})};n(89);var Q=function(e){var t=e.tournament,n=Object(a.useState)(0),c=Object(i.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)({players:[],teams:[]}),o=Object(i.a)(l,2),u=o[0],j=o[1];Object(a.useEffect)((function(){var e=document.getElementById("result-slider");e.scrollTo({top:0,left:e.scrollWidth/4*s,behavior:"smooth"})}),[s]),Object(a.useEffect)((function(){j(C.tournaments().getResults(t))}),[t]);var d=u.players.map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:t+1}),Object(E.jsx)("td",{children:e.player}),Object(E.jsx)("td",{children:e.kills}),Object(E.jsx)("td",{children:e.points}),Object(E.jsx)("td",{children:parseInt(e.kills)+parseInt(e.points)})]},"playerScore-"+t)})),m=u.teams.map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:t+1}),Object(E.jsx)("td",{children:e.name?e.name:e.teamId.substring(0,4)}),Object(E.jsx)("td",{children:e.kills}),Object(E.jsx)("td",{children:e.points}),Object(E.jsx)("td",{children:parseInt(e.kills)+parseInt(e.points)})]},"teamScore-"+t)}));return Object(E.jsxs)("div",{className:"v-layout result mt-3",children:[Object(E.jsx)("h3",{children:"Results"}),Object(E.jsxs)("div",{id:"result-slider",className:"result-slider",children:[Object(E.jsx)("div",{className:"result-slide v-layout justify-right",children:u.players.length>0&&Object(E.jsxs)("div",{className:"h-layout align-right",style:{minHeight:"400px"},children:[u.players.length>1&&Object(E.jsxs)("div",{className:"place second-place",children:[Object(E.jsx)("div",{className:"text-xl",children:u.players[1].player}),Object(E.jsxs)("div",{className:"box v-layout",children:[Object(E.jsxs)("h1",{className:"text-white m0",children:["2",Object(E.jsx)("span",{className:"text-sm",children:"nd"})]}),Object(E.jsxs)("span",{className:"text-sm mt",children:[parseInt(u.players[1].kills)+parseInt(u.players[1].points)," Pts"]})]}),Object(E.jsxs)("div",{className:"v-layout text-sm mt",children:[Object(E.jsxs)("span",{children:["Kills: ",u.players[1].kills]}),Object(E.jsxs)("span",{children:["Match Pts: ",u.players[1].points]})]})]}),u.players.length>0&&Object(E.jsxs)("div",{className:"place first-place ml mr",children:[Object(E.jsx)("div",{className:"text-xl",children:u.players[0].player}),Object(E.jsxs)("div",{className:"box v-layout",children:[Object(E.jsxs)("h1",{className:"text-white m0",children:["1",Object(E.jsx)("span",{className:"text-sm",children:"st"})]}),Object(E.jsxs)("span",{className:"text-sm mt",children:[parseInt(u.players[0].kills)+parseInt(u.players[0].points)," Pts"]})]}),Object(E.jsxs)("div",{className:"v-layout text-sm mt",children:[Object(E.jsxs)("span",{children:["Kills: ",u.players[0].kills]}),Object(E.jsxs)("span",{children:["Match Pts: ",u.players[0].points]})]})]}),u.players.length>2&&Object(E.jsxs)("div",{className:"place third-place",children:[Object(E.jsx)("div",{className:"text-xl",children:u.players[2].player}),Object(E.jsxs)("div",{className:"box v-layout",children:[Object(E.jsxs)("h1",{className:"text-white m0",children:["3",Object(E.jsx)("span",{className:"text-sm",children:"rd"})]}),Object(E.jsxs)("span",{className:"text-sm mt",children:[parseInt(u.players[2].kills)+parseInt(u.players[2].points)," Pts"]})]}),Object(E.jsxs)("div",{className:"v-layout text-sm mt",children:[Object(E.jsxs)("span",{children:["Kills: ",u.players[2].kills]}),Object(E.jsxs)("span",{children:["Match Pts: ",u.players[2].points]})]})]})]})}),Object(E.jsxs)("div",{className:"result-slide v-layout",children:[Object(E.jsx)("h3",{className:"mt-3",children:"Player Score Table"}),Object(E.jsx)("div",{className:"table-container",children:Object(E.jsxs)("table",{children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:"Player"}),Object(E.jsx)("th",{children:"Kills"}),Object(E.jsx)("th",{children:"Pts"}),Object(E.jsx)("th",{children:"Total"})]})}),Object(E.jsx)("tbody",{children:d})]})})]}),Object(E.jsxs)("div",{className:"result-slide v-layout",children:[Object(E.jsx)("h3",{className:"mt-3",children:"Team Score Table"}),Object(E.jsx)("div",{className:"table-container",children:Object(E.jsxs)("table",{children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:"Team"}),Object(E.jsx)("th",{children:"Kills"}),Object(E.jsx)("th",{children:"Pts"}),Object(E.jsx)("th",{children:"Total"})]})}),Object(E.jsx)("tbody",{children:m})]})})]}),Object(E.jsxs)("div",{className:"result-slide v-layout",children:[Object(E.jsx)("h3",{className:"mt-3",children:"Achievements"}),Object(E.jsx)(J,{result:u})]})]}),Object(E.jsxs)("div",{className:"dots",children:[Object(E.jsx)("div",{className:0===s?"active":"",onClick:function(){return r(0)}}),Object(E.jsx)("div",{className:1===s?"active":"",onClick:function(){return r(1)}}),Object(E.jsx)("div",{className:2===s?"active":"",onClick:function(){return r(2)}}),Object(E.jsx)("div",{className:3===s?"active":"",onClick:function(){return r(3)}})]})]})};n(90);var X=function(e){var t=e.tournamentId,n=e.players,c=e.teamSize,s=e.onSave,r=Object(a.useState)(!1),l=Object(i.a)(r,2),o=l[0],u=l[1],j=Object(a.useState)([]),m=Object(i.a)(j,2),h=m[0],b=m[1];Object(a.useEffect)((function(){n.forEach((function(e,t){-1===h.indexOf(t)&&(document.getElementById(e+"_checkbox").checked=!1)})),f()}),[h]);var f=function(){u(h.length===parseInt(c))},O=n.map((function(e,t){return Object(E.jsxs)("div",{className:"h-layout mt",children:[Object(E.jsx)("label",{htmlFor:e+"_checkbox",className:"flex-grow",children:e}),Object(E.jsx)("input",{type:"checkbox",id:e+"_checkbox",checked:h.indexOf(t)>-1,onChange:function(e){return function(e,t){var n=Object(d.a)(h);if(t)n.push(e);else{var a=h.indexOf(e);a>-1&&n.splice(a,1)}var s=n.slice(Math.max(0,n.length-c),n.length);b(s)}(t,e.target.checked)}})]},t)}));return Object(E.jsxs)("div",{className:"v-layout align-stretch",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{className:"text-accent",children:"Players"}),O]}),Object(E.jsx)("button",{className:"mt",onClick:function(){o&&C.names().getName().then((function(e){C.tournaments().saveTeam(t,{name:e,tournamentId:t,players:h.map((function(e){return n[e]})),matches:[]}),s(h)}))},disabled:!o,children:"save"})]})},Z=(n(91),[]);var V=function(e){var t=e.tournamentId,n=e.teamSize,c=e.players,s=e.onSave,r=Object(a.useState)(null),l=Object(i.a)(r,2),o=l[0],u=l[1],j=Object(a.useState)([{name:"",players:[]}]),d=Object(i.a)(j,2),m=d[0],b=d[1];Object(a.useEffect)((function(){f().then((function(){O()})).catch((function(e){u(e.message)}))}),[]);var f=function(){var e=Object(g.a)(y.a.mark((function e(){var t,a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z=[],t=c.length/n,a=0;case 3:if(!(a<t)){e.next=11;break}return e.next=6,C.names().getName();case 6:s=e.sent,Z.push("undefined undefined"===s?Object(D.a)().substring(0,4):s);case 8:a++,e.next=3;break;case 11:return e.abrupt("return",Z);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){for(var e=c.length/n,a=h.a.shuffle(c),s=[],r=0;r<e;r++){for(var i=[],l=0;l<n;l++)r*n+l<c.length&&i.push(a[r*n+l]);s.push({id:Object(D.a)(),name:Z[r],tournamentId:t,players:i,matches:[]})}console.log(s),b(s)},p=function(e){C.tournaments().saveTeams(t,e)},x=function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(m),e.next=3,f();case 3:s();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=m.map((function(e,t){var n=e.players.map((function(e){return Object(E.jsx)("span",{className:"mr",children:e},e)}));return Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("h3",{children:e.name}),Object(E.jsx)("div",{className:"h-layout justify-left",children:n})]},t)}));return Object(E.jsxs)("div",{children:[o&&Object(E.jsx)("span",{children:o}),v,Object(E.jsxs)("div",{className:"h-layout justify-stretch",children:[Object(E.jsx)("button",{className:"flex-grow",onClick:function(){return O()},children:"Generate"}),Object(E.jsx)("button",{className:"ml",onClick:function(){return x()},children:"save"})]})]})};var $=function(e){var t=Object(a.useState)([!1]),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([!1]),l=Object(i.a)(r,2),o=l[0],u=l[1],j=Object(a.useState)({name:"",teamSize:0,players:[],teams:[]}),d=Object(i.a)(j,2),m=d[0],h=d[1];Object(a.useEffect)((function(){C.tournaments().detach(),b()}),[]);var b=function(){C.tournaments().read((function(e){h(e)}),e.match.params.id)},f=m.players.map((function(e,t){return Object(E.jsx)("span",{className:"mr",children:e},t)}));return Object(E.jsxs)("div",{className:"tournament v-layout",children:[Object(E.jsx)("h2",{children:m.name}),Object(E.jsxs)("div",{className:"mb h-layout",children:[Object(E.jsxs)("div",{className:"mr-3",children:[Object(E.jsx)("span",{className:"text-accent text-sm",children:"Date"})," ",R()(m.created).format("MM/DD/YYYY")]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{className:"text-accent text-sm",children:"Team size"})," ",m.teamSize]})]}),Object(E.jsx)("div",{className:"h-layout",children:f}),m.teams&&Object(E.jsx)(Q,{tournament:m}),Object(E.jsx)("h3",{className:"mt-3",children:"Teams"}),m.open&&Object(E.jsxs)("div",{className:"h-layout",children:[Object(E.jsx)("button",{className:"mr btn--danger",onClick:function(){C.tournaments().close(m.id)},children:"Close Tournament"}),Object(E.jsx)("button",{className:"mr",onClick:function(){return u([!0])},children:"Generate Teams"}),Object(E.jsx)("button",{onClick:function(){return s([!0])},children:"Add Team"})]}),m.teams&&Object(E.jsx)(U,{tournamentOpen:m.open,tournamentId:m.id}),Object(E.jsx)(T,{isOpen:c,onRequestClose:function(){return s([!1])},size:"sm",children:Object(E.jsx)(X,{tournamentId:m.id,players:m.players,teamSize:m.teamSize,onSave:function(e){s([!1])}})}),Object(E.jsx)(T,{isOpen:o,onRequestClose:function(){return u([!1])},size:"sm",children:Object(E.jsx)(V,{tournamentId:m.id,teamSize:m.teamSize,players:m.players,onSave:function(e){u([!1])}})})]})};n(92);var ee=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1],j=Object(a.useState)(!1),d=Object(i.a)(j,2),m=d[0],h=d[1],b=Object(a.useState)(""),f=Object(i.a)(b,2),O=f[0],p=f[1];return Object(a.useEffect)((function(){C.auth().getRedirectResult((function(e,t){t&&p(t.message)}))}),[]),Object(a.useEffect)((function(){h(""!==n&&""!==o)}),[n,o]),Object(E.jsxs)("div",{className:"login-container v-layout",children:[Object(E.jsxs)("div",{className:"login v-layout ml-3 mr-3",children:[Object(E.jsx)("h2",{children:"Warzone Tournaments"}),""!==O&&Object(E.jsxs)("div",{children:[" ",O," "]}),Object(E.jsx)("input",{className:"mt-3",type:"email",name:"email",placeholder:"Email",value:n,onChange:function(e){return c(e.target.value)}}),Object(E.jsx)("input",{className:"mt-2 mb-3",type:"password",name:"password",placeholder:"Password",value:o,onChange:function(e){return u(e.target.value)}}),Object(E.jsx)("button",{className:"mt-3",onClick:function(){C.auth().login(n,o).catch((function(e){e&&p(e.message)}))},disabled:!m,children:"LOGIN"}),Object(E.jsxs)("div",{className:"h-layout text-sm mt-3",children:["don't have an account?",Object(E.jsx)("span",{className:"btn--secondary",children:Object(E.jsx)(l.b,{to:"/signup",children:"Sign up"})})]})]}),Object(E.jsxs)("div",{className:"socials h-layout mt-2",children:[Object(E.jsx)("button",{className:"mr mt",onClick:function(){return C.auth().googleLogin()},children:Object(E.jsx)("i",{className:"fa-2x fab fa-google"})}),Object(E.jsx)("button",{className:"mt",onClick:function(){return C.auth().facebookLogin()},children:Object(E.jsx)("i",{className:"fa-2x fab fa-facebook"})})]})]})};n(95);var te=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),m=d[0],h=d[1],b=Object(a.useState)(!1),f=Object(i.a)(b,2),O=f[0],p=f[1];return Object(a.useEffect)((function(){p(""!==n&&""!==o&&o===m)}),[n,o,m]),Object(E.jsx)("div",{className:"login-container v-layout",children:Object(E.jsxs)("div",{className:"login v-layout ml-3 mr-3",children:[Object(E.jsx)("h2",{children:"Warzone Tournaments"}),Object(E.jsx)("input",{className:"mt-3",type:"email",name:"email",placeholder:"Email",value:n,onChange:function(e){return c(e.target.value)}}),Object(E.jsx)("input",{className:"mt-2",type:"password",name:"password",placeholder:"Password",value:o,onChange:function(e){return u(e.target.value)}}),Object(E.jsx)("input",{className:"mt-2 mb-3",type:"password",name:"password",placeholder:"Confirm Password",value:m,onChange:function(e){return h(e.target.value)}}),Object(E.jsx)("button",{className:"mt-3",onClick:function(){C.auth().signup(n,o)},disabled:!O,children:"Sign up"}),Object(E.jsxs)("div",{className:"h-layout text-sm mt-3",children:["already have an account?",Object(E.jsx)("span",{className:"btn--secondary",children:Object(E.jsx)(l.b,{to:"/login",children:"Login"})})]})]})})};n(96);var ne=function(){var e=C.auth().loggedUser();return Object(E.jsxs)("div",{className:"top-bar",children:[Object(E.jsx)("img",{className:"avatar mr",src:e.photoURL}),Object(E.jsx)("h3",{className:"text-sm",children:e.displayName?e.displayName:e.email.split("@")[0]}),Object(E.jsx)("button",{className:"btn--secondary",onClick:function(){return C.auth().logout(),void(window.location="#")},children:Object(E.jsx)("i",{className:"fa fa-power-off"})})]})};var ae=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){C.auth().liveLoggedUser((function(e){c(e)}))})),n?Object(E.jsxs)("div",{className:"app",children:[Object(E.jsx)("div",{className:"app-bg"}),null!==n&&Object(E.jsxs)("div",{className:"app-content",children:[Object(E.jsx)(ne,{}),Object(E.jsx)(l.a,{children:Object(E.jsxs)(o.d,{children:[Object(E.jsx)(o.a,{exact:!0,from:"/login",to:"/"}),Object(E.jsx)(o.a,{exact:!0,from:"/signup",to:"/"}),Object(E.jsx)(o.b,{path:"/tournament/:id",component:$}),Object(E.jsx)(o.b,{path:"/",children:Object(E.jsx)(W,{})})]})})]})]}):Object(E.jsxs)("div",{className:"app",children:[Object(E.jsx)("div",{className:"app-bg"}),Object(E.jsx)(l.a,{children:Object(E.jsxs)(o.d,{children:[Object(E.jsx)(o.a,{exact:!0,from:"/",to:"/login"}),Object(E.jsx)(o.b,{path:"/signup",children:Object(E.jsx)(te,{})}),Object(E.jsx)(o.b,{path:"/login",children:Object(E.jsx)(ee,{})})]})})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(ae,{})}),document.getElementById("root")),ce()}},[[97,1,2]]]);
//# sourceMappingURL=main.d2d5e5c5.chunk.js.map