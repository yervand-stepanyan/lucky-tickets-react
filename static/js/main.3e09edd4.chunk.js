(this["webpackJsonplucky-tickets"]=this["webpackJsonplucky-tickets"]||[]).push([[0],{49:function(e,t,a){e.exports=a(60)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(54),a(29)),l=a(30),u=a(35),s=a(31),m=a(36),h=(a(55),a(56),a(97)),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onInputChange=function(e){a.props.onInputChange(e.target.value)},a.onEnter=function(e){"Enter"===e.key&&(a.props.onInputClick(),e.target.blur())},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputMainDiv"},r.a.createElement(h.a,{id:"outlined-basic",label:"Ticket Number Length",variant:"outlined",onChange:this.onInputChange,onKeyDown:function(t){return e.onEnter(t)}}))}}]),t}(r.a.Component),d=a(96),v=a(61),f=a(98),p=a(100),g=a(95),y=a(99),b="Enter the length of the Ticket Number!",E='Start from "000001"',T='Start from "000000"',N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).onInputChange=function(e){a.setState({ticketNumLength:e})},a.onRadioChange=function(e){a.setState({radioValue:e.target.value})},a.checkTickets=function(){var e=new Date;a.setState({luckyTicketsCount:0,error:"",luckyTickets:[],luckyTicketToShow:"",timeUsed:""}),a.getLuckyTickets(a.state.ticketNumLength);var t=(new Date-e)/1e3;a.setState({timeUsed:"".concat(t," seconds")})},a.getLuckyTickets=function(e){if(e%2!==0)a.setState({error:'Invalid argument!!! "n" should be even, "'.concat(e,'" is odd!')});else if(e<=0||e>100)a.setState({error:'Invalid argument!!! "n" should be between 2 and 100!'});else{for(var t=[],n=0,r=a.generateTicketNumber(e),c=+r,o=a.generateLastNumber(e),i=c;i<=o;i++){var l=""+i,u="";if(r.length>l.length)for(var s=0;s<r.length-l.length;s++)u+=0;for(var m=0;m<l.length;m++)u+=l[m];var h=u.slice(0,e/2),k=u.slice(e/2);if(h.split("").reduce((function(e,t){return e+Number(t)}),0)===k.split("").reduce((function(e,t){return e+Number(t)}),0)){var d=h+k;n+=1,t.push(d),i+=8}}a.setState({luckyTicketsCount:n,luckyTickets:t})}},a.generateTicketNumber=function(e){var t="";if(a.state.radioValue===E)for(var n=0;n<e;n++)t+=n===e/2-1||n===e-1?1:0;else for(var r=0;r<e;r++)t+=0;return t},a.generateLastNumber=function(e){for(var t="",a=0;a<e;a++)t+=9;return Number(t)},a.handleSubmit=function(){a.checkTickets()},a.handleSubmitOnEnterKey=function(){a.checkTickets()},a.handleShowRandom=function(){var e=Math.floor(Math.random()*a.state.luckyTickets.length);a.setState((function(t){return{luckyTicketToShow:t.luckyTickets[e]}}),(function(){a.luckyTicketNode&&a.luckyTicketNode.scrollIntoView({behavior:"smooth"})}))},a.state={ticketNumLength:0,radioValue:E,luckyTicketsCount:0,error:"",luckyTickets:[],luckyTicketToShow:"",timeUsed:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.radioValue,n=t.ticketNumLength,c=t.luckyTicketsCount,o=t.error,i=t.luckyTicketToShow,l=t.timeUsed;return r.a.createElement("div",{className:"mainDiv"},r.a.createElement("div",{className:"title"},r.a.createElement(v.a,{align:"center",color:"primary",variant:"h4"},b)),r.a.createElement("div",{className:"inputWrapper"},r.a.createElement(k,{className:"input",onInputClick:this.handleSubmitOnEnterKey,onInputChange:this.onInputChange})),r.a.createElement("div",{className:"radioWrapper"},r.a.createElement(y.a,{component:"fieldset"},r.a.createElement(p.a,{"aria-label":"ticketNum",name:"ticketNum",value:a,onChange:this.onRadioChange},r.a.createElement(g.a,{value:E,control:r.a.createElement(f.a,{color:"primary"}),label:E,labelPlacement:"end"}),r.a.createElement(g.a,{value:T,control:r.a.createElement(f.a,{color:"primary"}),label:T,labelPlacement:"end"})))),r.a.createElement("div",{className:"buttonWrapper"},r.a.createElement(d.a,{variant:"contained",color:"primary",size:"large",onClick:this.handleSubmit},"Check")),r.a.createElement("div",{className:"textWrapper"},r.a.createElement(v.a,{align:"center",color:"secondary",variant:"subtitle1"},c?"Time used: ".concat(l):""),r.a.createElement(v.a,{align:"center",color:"textSecondary",variant:"h5"},c?"n: ".concat(n):""),r.a.createElement(v.a,{align:"center",color:"secondary",variant:"h4"},o||(c?"Lucky Tickets: ".concat(c):""))),r.a.createElement("div",{className:"randomButtonWrapper"},c?r.a.createElement(d.a,{variant:"contained",color:"primary",size:"large",onClick:this.handleShowRandom},"Show a random Lucky Ticket"):""),r.a.createElement("div",{className:"textWrapper",ref:function(t){return e.luckyTicketNode=t}},r.a.createElement(v.a,{align:"center",color:"secondary",variant:"h3"},i||"")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.3e09edd4.chunk.js.map