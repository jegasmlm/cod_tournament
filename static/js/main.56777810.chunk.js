(this.webpackJsonpcod_tournament=this.webpackJsonpcod_tournament||[]).push([[0],{34:function(e){e.exports=JSON.parse('[{"created":"2021-03-25T11:00:00.000Z","id":"50945ef0-498e-4755-9db6-a4b26ec9a271","name":"Test","teamSize":"4","players":["JEGA","Felducci","Joan","Onemi","MrRobot","Tesseract","Weedtoco","Christiam"],"teams":[{"id":"03b2d167-8a85-45ee-afa8-63c0a8a073f0","tournamentId":"50945ef0-498e-4755-9db6-a4b26ec9a271","players":["JEGA","MrRobot","Christiam","Felducci"],"matches":[{"id":"2029155f-009f-429e-aaae-01fbb02bf2fd","position":"1","teamScore":[{"player":"JEGA","kills":"9","damage":"3967"},{"player":"MrRobot","kills":"6","damage":"3597"},{"player":"Christiam","kills":"1","damage":"951"},{"player":"Felducci","kills":"5","damage":"2569"}]},{"id":"c4699cce-055b-494c-9ce2-e5591bd504fa","position":"1","teamScore":[{"player":"JEGA","kills":"9","damage":"3138"},{"player":"MrRobot","kills":"3","damage":"1838"},{"player":"Christiam","kills":"2","damage":"876"},{"player":"Felducci","kills":"4","damage":"2255"}]}]},{"id":"b3fcbb49-a3d5-40f8-9e3e-198c9abf393f","tournamentId":"50945ef0-498e-4755-9db6-a4b26ec9a271","players":["Joan","Onemi","Tesseract","Weedtoco"],"matches":[{"id":"171287b0-9667-4c21-9813-1dcfb8774e58","position":"5","teamScore":[{"player":"Joan","kills":"0","damage":"729"},{"player":"Onemi","kills":"4","damage":"1674"},{"player":"Tesseract","kills":"4","damage":"1870"},{"player":"Weedtoco","kills":"0","damage":"210"}]},{"id":"24f60718-475f-4363-a02f-4dc043fd4fa5","position":"5","teamScore":[{"player":"Joan","kills":"0","damage":"413"},{"player":"Onemi","kills":"4","damage":"1779"},{"player":"Tesseract","kills":"0","damage":"975"},{"player":"Weedtoco","kills":"1","damage":"962"}]}]},{"id":"ce2f8c7d-e170-481a-9e5e-72f6ca721e87","tournamentId":"50945ef0-498e-4755-9db6-a4b26ec9a271","players":["JEGA","Felducci","Christiam","Weedtoco"],"matches":[{"id":"0ecdc158-3b17-4fcb-94e0-7d7246e6be41","position":"5","teamScore":[{"player":"JEGA","kills":"9","damage":"3068"},{"player":"Felducci","kills":"0","damage":"885"},{"player":"Christiam","kills":"2","damage":"1271"},{"player":"Weedtoco","kills":"2","damage":"1283"}]},{"id":"a6ee37fa-bfa8-457c-a319-0851b0d2cecd","position":"4","teamScore":[{"player":"JEGA","kills":"5","damage":"2152"},{"player":"Felducci","kills":"3","damage":"1968"},{"player":"Christiam","kills":"1","damage":"874"},{"player":"Weedtoco","kills":"1","damage":"1418"}]}]},{"id":"bcea0639-23b2-4096-8a50-69275d3760b4","tournamentId":"50945ef0-498e-4755-9db6-a4b26ec9a271","players":["MrRobot","Joan","Onemi","Tesseract"],"matches":[{"id":"ba46cc10-9048-4d22-b66e-24ceb10932cb","position":"4","teamScore":[{"player":"MrRobot","kills":"4","damage":"2886"},{"player":"Joan","kills":"4","damage":"1786"},{"player":"Onemi","kills":"4","damage":"2586"},{"player":"Tesseract","kills":"7","damage":"2628"}]},{"id":"2103095f-e7ec-4db4-9cd2-3009978541e5","position":"3","teamScore":[{"player":"MrRobot","kills":"3","damage":"1331"},{"player":"Joan","kills":"4","damage":"1009"},{"player":"Onemi","kills":"0","damage":"1732"},{"player":"Tesseract","kills":"3","damage":"962"}]}]}]}]')},41:function(e,t,a){},42:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(24),r=a.n(c),i=(a(41),a(42),a(35)),l=a(3),o=a(2),u=a(17),d=a(18),j=a(6),m=a(7),h=a.n(m),b=a(11),p=a(4),O=a.n(p),x=a(34),f=function(){function e(){Object(u.a)(this,e),localStorage.getItem("tournaments")||localStorage.setItem("tournaments",JSON.stringify(x))}return Object(d.a)(e,[{key:"save",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=JSON.parse(localStorage.getItem("tournaments"))).push(t),localStorage.setItem("tournaments",JSON.stringify(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(b.a)(h.a.mark((function e(t,a){var s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=JSON.parse(localStorage.getItem("tournaments")),n=this.searchById(s,t),s[n]=a,localStorage.setItem("tournaments",JSON.stringify(s));case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"list",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse(localStorage.getItem("tournaments")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("tournaments")),s=this.searchById(a,t),e.abrupt("return",a[s]);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveTeam",value:function(){var e=Object(b.a)(h.a.mark((function e(t,a){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.read(t);case 2:return(s=e.sent).teams||(s.teams=[]),s.teams=[].concat(Object(j.a)(s.teams),[a]),this.update(t,s),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"saveTeams",value:function(){var e=Object(b.a)(h.a.mark((function e(t,a){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.read(t);case 2:return(s=e.sent).teams||(s.teams=[]),s.teams=[].concat(Object(j.a)(s.teams),Object(j.a)(a)),this.update(t,s),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"saveMatch",value:function(){var e=Object(b.a)(h.a.mark((function e(t,a,s){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.read(t);case 2:return(n=e.sent).teams||(n.teams=[]),c=this.searchById(n.teams,a),n.teams[c].matches.push(s),this.update(t,n),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,this)})));return function(t,a,s){return e.apply(this,arguments)}}()},{key:"searchById",value:function(e,t){var a=-1;return e.forEach((function(e,s){e.id===t&&(a=s)})),a}},{key:"getMatchPoint",value:function(e){return this.getPositionPoint(e.position)+this.getMatchKills(e)}},{key:"getMatchKills",value:function(e){return O.a.sum(e.teamScore.map((function(e){return parseInt(e.kills)})))}},{key:"getPositionPoint",value:function(e){switch(e){case"1":return 20;case"2":return 15;case"3":return 10;case"4":return 5;case"5":return 3;case"6":return 2;default:return 0}}},{key:"getKillPoint",value:function(e){return e}},{key:"getDamagePoint",value:function(e){return 0}},{key:"getScorePoint",value:function(e){return 0}},{key:"getResults",value:function(e){var t=this,a=Object(j.a)(e.players),s={};a.forEach((function(a){s[a]||(s[a]={player:a,kills:0,damage:0,points:0,total:0}),e.teams.forEach((function(e){e.matches.forEach((function(n){e.players.indexOf(a)>-1&&(s[a].points+=t.getPositionPoint(n.position),s[a].total+=t.getPositionPoint(n.position)),n.teamScore.forEach((function(e){a===e.player&&(s[a].kills+=parseInt(e.kills),s[a].damage+=parseInt(e.damage),s[a].total+=parseInt(e.kills))}))}))}))}));var n=[];return Object.keys(s).forEach((function(e){n.push(s[e])})),{players:O.a.orderBy(n,["total"],["desc"]),teams:O.a.orderBy(e.teams.map((function(e){var a=O.a.sumBy(e.matches,(function(e){return O.a.sumBy(e.teamScore,(function(e){return parseInt(e.kills)}))})),s=O.a.sumBy(e.matches,(function(e){return t.getPositionPoint(e.position)}));return{players:e.players,kills:a,damage:O.a.sumBy(e.matches,(function(e){return O.a.sumBy(e.teamScore,(function(e){return parseInt(e.damage)}))})),points:s,total:a+s}})),["total"],["desc"])}}}]),e}(),v=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"tournaments",value:function(){return new f}}]),e}()),y=a(25),g=a.n(y),N=a(0);g.a.setAppElement("#root");var k=function(e){var t=Object(s.useState)(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],r={inset:"auto",minWith:"99vw",maxHeight:"80vh",overflow:"auto",width:"lg"===e.size?"90%":"md"===e.size?"60%":"auto",padding:"0",backgroundColor:"#111c",border:"1px solid #2f2c",borderRadius:"0px",boxShadow:"0px 0px 20px rgb(0, 0, 0, .4)"};Object(s.useEffect)((function(){return c(e.isOpen[0])}),[e]);return Object(N.jsxs)(g.a,{isOpen:n,onRequestClose:e.onRequestClose,closeTimeoutMS:300,style:{overlay:{backgroundColor:"#000a"},content:r},children:[Object(N.jsx)("div",{className:"h-layout justify-right",children:Object(N.jsx)("button",{className:"btn--secondary",onClick:function(){return e.isOpen[0]=!1,void c(!1)},children:"X"})}),Object(N.jsx)("div",{className:"container",style:{paddingTop:"0"},children:e.children})]})},S=a(73);a(56);var C=function(e){var t=e.onSave,a=Object(s.useState)(""),n=Object(o.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)(1),l=Object(o.a)(i,2),u=l[0],d=l[1],m=Object(s.useState)([""]),h=Object(o.a)(m,2),b=h[0],p=h[1],O=b.map((function(e,t){return Object(N.jsxs)("div",{className:"form-group h-layout",children:[Object(N.jsx)("label",{htmlFor:"playerNameInput"+t,children:"Player name"}),Object(N.jsx)("input",{className:"flex-grow",id:"playerNameInput"+t,type:"text",value:e,placeholder:"Player Name",onChange:function(e){return function(e,t){var a=Object(j.a)(b);a[e]=t,p(a)}(t,e.target.value)}})]},t)}));return Object(N.jsxs)("div",{className:"mt",children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"form-group h-layout",children:[Object(N.jsx)("label",{htmlFor:"tournamentNameInput",children:"Tournament name"}),Object(N.jsx)("input",{className:"flex-grow",id:"tournamentNameInput",type:"text",value:c,onChange:function(e){return r(e.target.value)},placeholder:"Tournament Name"})]}),Object(N.jsxs)("div",{className:"form-group h-layout",children:[Object(N.jsx)("label",{htmlFor:"teamSizeInput",children:"Team size"}),Object(N.jsx)("input",{className:"flex-grow",id:"teamSizeInput",type:"number",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Team size"})]})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"h-layout justify-left",children:[Object(N.jsx)("h3",{className:"flex-grow",children:"Players"}),Object(N.jsx)("button",{className:"btn--secondary",onClick:function(){p([].concat(Object(j.a)(b),[""]))},children:"+"})]}),O]}),Object(N.jsx)("button",{onClick:function(){return v.tournaments().save({id:Object(S.a)(),created:new Date,name:c,teamSize:u,players:b,teams:[]}),void t()},children:"save"})]})},I=a(19),P=a.n(I);a(57);var w=function(e){var t=e.tournament,a=t.players.map((function(e,t){return Object(N.jsx)("span",{className:"mr text-sm",children:e},t)}));return Object(N.jsxs)("div",{className:"card tournament-card",onClick:function(){return window.location="#tournament/"+t.id},children:[Object(N.jsxs)("div",{className:"h-layout",children:[Object(N.jsx)("h3",{className:"flex-grow",children:t.name}),Object(N.jsx)("span",{className:"text-sm text-hint",children:P()(t.created).format("MM/DD/YYYY")})]}),Object(N.jsxs)("p",{children:["Team size: ",t.teamSize]}),Object(N.jsx)("h3",{children:"Players"}),Object(N.jsx)("div",{className:"h-layout justify-left",children:a})]})};a(58);var M=function(e){var t=e.tournaments.map((function(e){return Object(N.jsx)(w,{tournament:e},e.id)}));return Object(N.jsx)("div",{className:"h-layout tournament-list",children:t})};a(59);var T=function(){var e=Object(s.useState)([!1]),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)([]),r=Object(o.a)(c,2),i=r[0],l=r[1];Object(s.useEffect)((function(){d()}),[]);var u=function(){n([!1])},d=function(){v.tournaments().list().then((function(e){l(e)}))};return Object(N.jsxs)("div",{className:"home v-layout",children:[Object(N.jsx)("div",{className:"flex-grow v-layout start-tournament-btn",children:Object(N.jsx)("button",{onClick:function(){return n([!0])},children:"Start Tournament"})}),Object(N.jsx)("h3",{children:"Tournaments"}),Object(N.jsx)(M,{tournaments:i}),Object(N.jsx)(k,{isOpen:a,onRequestClose:u,size:"sm",children:Object(N.jsx)(C,{onSave:function(){return d(),void u()}})})]})},E=a(14);a(60),a(61);var J=function(e){var t=e.team,a=e.onSave,n=Object(s.useState)({id:Object(S.a)(),position:"",teamScore:t.players.map((function(e){return{player:e,kills:"",damage:""}}))}),c=Object(o.a)(n,2),r=c[0],i=c[1],l=r.teamScore.map((function(e,t){return Object(N.jsxs)("div",{className:"form-group match-player-form",children:[Object(N.jsx)("label",{className:"flex-grow",children:e.player}),Object(N.jsx)("input",{id:"playerNameInput"+t,type:"number",value:e.kills,placeholder:"Kills",onChange:function(e){return function(e,t){var a=Object(E.a)({},r);a.teamScore[e].kills=t,i(a)}(t,e.target.value)}}),Object(N.jsx)("input",{id:"playerNameInput"+t,type:"number",value:e.damage,placeholder:"Damage",onChange:function(e){return function(e,t){var a=Object(E.a)({},r);a.teamScore[e].damage=t,i(a)}(t,e.target.value)}})]},t)}));return Object(N.jsxs)("div",{className:"v-layout align-stretch",children:[Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"form-group h-layout",children:[Object(N.jsx)("label",{htmlFor:"matchPositionInput",children:"Match Position"}),Object(N.jsx)("input",{className:"flex-grow",id:"matchPositionInput",type:"number",value:r.position,onChange:function(e){return function(e){var t=Object(E.a)({},r);t.position=e,i(t)}(e.target.value)},placeholder:"Match position"})]})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"flex-grow text-accent",children:"Players"}),l]}),Object(N.jsx)("button",{onClick:function(){v.tournaments().saveMatch(t.tournamentId,t.id,r).then((function(e){a(e)}))},children:"save"})]})};a(62);var B=function(e){var t=e.match,a=v.tournaments(),n=Object(s.useState)(!1),c=Object(o.a)(n,2),r=c[0],i=c[1],l=t.teamScore.map((function(e,t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.player}),Object(N.jsx)("td",{children:e.kills}),Object(N.jsx)("td",{children:e.damage})]},t)}));return Object(N.jsxs)("div",{id:t.id,className:"match card",onClick:function(){return i(!r)},children:[Object(N.jsxs)("div",{className:"h-layout text-sm",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"text-accent text-bold",children:"Kills: "}),a.getMatchKills(t)]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"text-accent text-bold ml",children:"Match Pts: "}),a.getPositionPoint(t.position)]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"text-accent text-bold ml",children:"TOTAL: "}),a.getMatchPoint(t)]})]}),Object(N.jsxs)("div",{className:(r?"match--open":"")+" mt match-detail",style:{maxHeight:r?document.querySelector("#".concat(CSS.escape(t.id)," .match-detail")).scrollHeight+"px":0},children:[Object(N.jsxs)("span",{className:"text-sm",children:["Position: ",t.position]}),Object(N.jsxs)("table",{className:"mt",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{style:{width:"100%"},children:"Player"}),Object(N.jsx)("th",{children:"Kills"}),Object(N.jsx)("th",{children:"Dmg"})]})}),Object(N.jsx)("tbody",{children:l})]})]})]})};a(63);var z=function(e){var t=e.matches.map((function(e,t){return Object(N.jsx)(B,{match:e},t)}));return Object(N.jsx)("div",{className:"match-list",children:t})};a(64);var F=function(e){var t=e.team,a=e.onSaveMatchCallback,n=Object(s.useState)([!1]),c=Object(o.a)(n,2),r=c[0],i=c[1],l=Object(s.useState)([]),u=Object(o.a)(l,2),d=u[0],m=u[1];Object(s.useEffect)((function(){m(t.matches)}),[t]);var h=function(){i([!1])},b=t.players.map((function(e,t){return Object(N.jsx)("span",{className:"mr text-sm",children:e},t)}));return Object(N.jsxs)("div",{className:"card v-layout align-stretch",children:[Object(N.jsx)("button",{className:"btn--tertiary",onClick:function(){return i([!0])},children:"Add Match"}),Object(N.jsx)("h4",{className:"text-accent",children:"Players"}),Object(N.jsx)("div",{className:"h-layout justify-stretch",children:b}),Object(N.jsx)("h4",{className:"text-accent",children:"Matches"}),Object(N.jsx)(z,{matches:d}),Object(N.jsx)(k,{isOpen:r,onRequestClose:h,size:"sm",children:Object(N.jsx)(J,{team:t,onSave:function(e){return function(e){m([].concat(Object(j.a)(d),[e])),h(),a(e)}(e)}})})]})};a(65);var K=function(e){var t=e.teams,a=e.onSaveMatchCallback,s=t.map((function(e,t){return Object(N.jsx)(F,{team:e,onSaveMatchCallback:a},t)}));return Object(N.jsx)("div",{className:"team-list h-layout align-left",children:s})};a(66);var R=function(e){var t=e.achievement;return Object(N.jsxs)("div",{className:"card v-layout",children:[Object(N.jsx)("div",{children:Object(N.jsx)("i",{className:"fa-2x fas fa-"+t.icon,style:{color:t.iconColor}})}),Object(N.jsx)("div",{className:"text-accent mt",children:t.name}),Object(N.jsx)("div",{className:"text-xl mt mb",children:t.player}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("span",{className:"text-accent",children:[t.attr,": "]}),t.value]}),Object(N.jsxs)("div",{className:"mt text-sm text-hint",children:["(",t.description,")"]})]})};a(67);var D=function(e){var t=e.result,a=[];if(t.players.length>0){var s=O.a.maxBy(t.players,(function(e){return e.kills})),n=O.a.minBy(t.players,(function(e){return e.kills})),c=O.a.maxBy(t.players,(function(e){return e.damage})),r=O.a.minBy(t.players,(function(e){return e.damage})),i=O.a.maxBy(t.players,(function(e){return e.points})),l=O.a.minBy(t.players,(function(e){return e.points}));a.push({name:"Assassin",player:s.player,attr:"Kills",value:s.kills,description:"Highest Kills",icon:"crosshairs",iconColor:"yellow"}),a.push({name:"Butcher",player:c.player,attr:"Damage",value:c.damage,description:"Highest Damage",icon:"tint",iconColor:"red"}),a.push({name:"Support",player:i.player,attr:"Match Pts",value:i.points,description:"Highest Points",icon:"toolbox",iconColor:"aqua"}),a.push({name:"Bird Hunter",player:n.player,attr:"Kills",value:n.kills,description:"Lowest Kills",icon:"dove",iconColor:"aliceblue"}),a.push({name:"Sleeping",player:r.player,attr:"Damage",value:r.damage,description:"Lowest Damage",icon:"bed",iconColor:"gray"}),a.push({name:"Distracted",player:l.player,attr:"Match Pts",value:l.points,description:"Lowest Points",icon:"music",iconColor:"purple"})}var o=a.map((function(e,t){return Object(N.jsx)(R,{achievement:e},t)}));return Object(N.jsx)("div",{className:"achievement-list h-layout align-stretch",children:o})};a(68);var A=function(e){var t=e.tournament,a=Object(s.useState)(0),n=Object(o.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)({players:[],teams:[]}),l=Object(o.a)(i,2),u=l[0],d=l[1];Object(s.useEffect)((function(){var e=document.getElementById("result-slider");e.scrollTo({top:0,left:e.scrollWidth/4*c,behavior:"smooth"})}),[c]),Object(s.useEffect)((function(){d(v.tournaments().getResults(t))}),[t]),console.log(u);var j=u.players.map((function(e,t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t+1}),Object(N.jsx)("td",{children:e.player}),Object(N.jsx)("td",{children:e.kills}),Object(N.jsx)("td",{children:e.points}),Object(N.jsx)("td",{children:parseInt(e.kills)+parseInt(e.points)})]},"playerScore-"+t)})),m=u.teams.map((function(e,t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t+1}),Object(N.jsx)("td",{children:e.players.map((function(e,t){return Object(N.jsx)("span",{className:"mr",children:e},t)}))}),Object(N.jsx)("td",{children:e.kills}),Object(N.jsx)("td",{children:e.points}),Object(N.jsx)("td",{children:parseInt(e.kills)+parseInt(e.points)})]},"teamScore-"+t)}));return Object(N.jsxs)("div",{className:"v-layout result mt-3",children:[Object(N.jsx)("h3",{children:"Results"}),Object(N.jsxs)("div",{id:"result-slider",className:"result-slider",children:[Object(N.jsx)("div",{className:"result-slide v-layout",children:u.players.length>0&&Object(N.jsxs)("div",{className:"h-layout align-right",children:[Object(N.jsxs)("div",{className:"place second-place",children:[Object(N.jsx)("div",{className:"text-xl",children:u.players[1].player}),Object(N.jsxs)("div",{className:"box v-layout",children:[Object(N.jsx)("span",{className:"text-lg",children:"2nd"}),Object(N.jsxs)("span",{className:"text-sm mt",children:[parseInt(u.players[1].kills)+parseInt(u.players[1].points)," Pts"]})]}),Object(N.jsxs)("div",{className:"v-layout text-sm mt",children:[Object(N.jsxs)("span",{children:["Kills: ",u.players[1].kills]}),Object(N.jsxs)("span",{children:["Match Pts: ",u.players[1].points]})]})]}),Object(N.jsxs)("div",{className:"place first-place ml mr",children:[Object(N.jsx)("div",{className:"text-xl",children:u.players[0].player}),Object(N.jsxs)("div",{className:"box v-layout",children:[Object(N.jsx)("span",{className:"text-lg",children:"1st"}),Object(N.jsxs)("span",{className:"text-sm mt",children:[parseInt(u.players[0].kills)+parseInt(u.players[0].points)," Pts"]})]}),Object(N.jsxs)("div",{className:"v-layout text-sm mt",children:[Object(N.jsxs)("span",{children:["Kills: ",u.players[0].kills]}),Object(N.jsxs)("span",{children:["Match Pts: ",u.players[0].points]})]})]}),Object(N.jsxs)("div",{className:"place third-place",children:[Object(N.jsx)("div",{className:"text-xl",children:u.players[2].player}),Object(N.jsxs)("div",{className:"box v-layout",children:[Object(N.jsx)("span",{className:"text-lg",children:"3rd"}),Object(N.jsxs)("span",{className:"text-sm mt",children:[parseInt(u.players[2].kills)+parseInt(u.players[2].points)," Pts"]})]}),Object(N.jsxs)("div",{className:"v-layout text-sm mt",children:[Object(N.jsxs)("span",{children:["Kills: ",u.players[2].kills]}),Object(N.jsxs)("span",{children:["Match Pts: ",u.players[2].points]})]})]})]})}),Object(N.jsxs)("div",{className:"result-slide v-layout",children:[Object(N.jsx)("h3",{className:"mt-3",children:"Player Score Table"}),Object(N.jsx)("div",{className:"table-container",children:Object(N.jsxs)("table",{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Position"}),Object(N.jsx)("th",{children:"Player"}),Object(N.jsx)("th",{children:"Kills"}),Object(N.jsx)("th",{children:"Match Pts"}),Object(N.jsx)("th",{children:"Total"})]})}),Object(N.jsx)("tbody",{children:j})]})})]}),Object(N.jsxs)("div",{className:"result-slide v-layout",children:[Object(N.jsx)("h3",{className:"mt-3",children:"Team Score Table"}),Object(N.jsx)("div",{className:"table-container",children:Object(N.jsxs)("table",{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Position"}),Object(N.jsx)("th",{children:"Players"}),Object(N.jsx)("th",{children:"Kills"}),Object(N.jsx)("th",{children:"Match Pts"}),Object(N.jsx)("th",{children:"Total"})]})}),Object(N.jsx)("tbody",{children:m})]})})]}),Object(N.jsxs)("div",{className:"result-slide v-layout",children:[Object(N.jsx)("h3",{className:"mt-3",children:"Achievements"}),Object(N.jsx)(D,{result:u})]})]}),Object(N.jsxs)("div",{className:"dots",children:[Object(N.jsx)("div",{className:0===c?"active":"",onClick:function(){return r(0)}}),Object(N.jsx)("div",{className:1===c?"active":"",onClick:function(){return r(1)}}),Object(N.jsx)("div",{className:2===c?"active":"",onClick:function(){return r(2)}}),Object(N.jsx)("div",{className:3===c?"active":"",onClick:function(){return r(3)}})]})]})};a(69);var W=function(e){var t=e.tournamentId,a=e.players,n=e.teamSize,c=e.onSave,r=Object(s.useState)([]),i=Object(o.a)(r,2),l=i[0],u=i[1];Object(s.useEffect)((function(){a.forEach((function(e,t){-1===l.indexOf(t)&&(document.getElementById(e+"_checkbox").checked=!1)}))}),[l]);var d=a.map((function(e,t){return Object(N.jsxs)("div",{className:"form-group h-layout",children:[Object(N.jsx)("label",{htmlFor:e+"_checkbox",className:"flex-grow",children:e}),Object(N.jsx)("input",{type:"checkbox",id:e+"_checkbox",checked:l.indexOf(t)>-1,onChange:function(e){return function(e,t){var a=Object(j.a)(l);if(t)a.push(e);else{var s=l.indexOf(e);s>-1&&a.splice(s,1)}var c=a.slice(Math.max(0,a.length-n),a.length);u(c)}(t,e.target.checked)}})]},t)}));return Object(N.jsxs)("div",{className:"v-layout align-stretch",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"text-accent",children:"Players"}),d]}),Object(N.jsx)("button",{className:"mt",onClick:function(){v.tournaments().saveTeam(t,{id:Object(S.a)(),tournamentId:t,players:l.map((function(e){return a[e]})),matches:[]}).then((function(e){c(e)}))},children:"save"})]})};var G=function(e){var t=Object(s.useState)([!1]),a=Object(o.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)({name:"",teamSize:0,players:[],teams:[]}),i=Object(o.a)(r,2),l=i[0],u=i[1];Object(s.useEffect)((function(){d()}),[]);var d=function(){v.tournaments().read(e.match.params.id).then((function(e){u(e)}))},m=function(){for(var e,t=l.players.length/l.teamSize,a=O.a.shuffle(l.players),s=[],n=0;n<t;n++){for(var c=[],r=0;r<l.teamSize;r++)c.push(a[n*l.teamSize+r]);s.push({id:Object(S.a)(),tournamentId:l.id,players:c,matches:[]})}e=s,v.tournaments().saveTeams(l.id,e).then((function(e){var t=Object(E.a)({},l);t.teams=[].concat(Object(j.a)(t.teams),Object(j.a)(e)),u(t)}))},h=l.players.map((function(e,t){return Object(N.jsx)("span",{className:"mr",children:e},t)}));return Object(N.jsxs)("div",{className:"tournament v-layout",children:[Object(N.jsx)("h2",{children:l.name}),Object(N.jsxs)("div",{className:"mb h-layout",children:[Object(N.jsxs)("div",{className:"mr-3",children:[Object(N.jsx)("span",{className:"text-accent text-sm",children:"Date"})," ",P()(l.created).format("MM/DD/YYYY")]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"text-accent text-sm",children:"Team size"})," ",l.teamSize]})]}),Object(N.jsx)("div",{className:"h-layout",children:h}),Object(N.jsx)(A,{tournament:l}),Object(N.jsx)("h3",{className:"mt-3",children:"Teams"}),Object(N.jsxs)("div",{className:"h-layout",children:[Object(N.jsx)("button",{className:"mr",onClick:function(){return m()},children:"Generate Teams"}),Object(N.jsx)("button",{onClick:function(){return c([!0])},children:"Add Team"})]}),Object(N.jsx)(K,{teams:l.teams,onSaveMatchCallback:function(){d()}}),Object(N.jsx)(k,{isOpen:n,onRequestClose:function(){c([!1])},size:"sm",children:Object(N.jsx)(W,{tournamentId:l.id,players:l.players,teamSize:l.teamSize,onSave:function(e){d()}})})]})};var Y=function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)("div",{className:"app-bg"}),Object(N.jsx)("div",{className:"app-content",children:Object(N.jsx)(i.a,{children:Object(N.jsxs)(l.c,{children:[Object(N.jsx)(l.a,{path:"/tournament/:id",component:G}),Object(N.jsx)(l.a,{path:"/",children:Object(N.jsx)(T,{})})]})})})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(Y,{})}),document.getElementById("root")),q()}},[[72,1,2]]]);
//# sourceMappingURL=main.56777810.chunk.js.map