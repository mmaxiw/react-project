(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),l=(a(44),a(15)),s=a(16),i=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}," Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}," Add Contact"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}," About")))))))};i.defaultProps={branding:"My App"};var m=i,u=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts."),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},p=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},h=a(6),d=a(7),b=a(9),f=a(8),v=a(10),E=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})}),console.log("componentDidMount...")}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),y=a(2),g=a.n(y),C=a(13),N=a(14),j=a.n(N),O=a(38),k=a(19),x=r.a.createContext(),w=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(k.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(k.a)({},e,{contacts:[t.payload].concat(Object(O.a)(e.contacts))});case"UPDATE_CONTACT":return Object(k.a)({},e,{contacts:e.contact.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},S=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return w(t,e)})}},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(C.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(x.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),A=x.Consumer,D=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(){var e=Object(C.a)(g.a.mark(function e(t,a){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.name,c=t.email,o=t.phone,s=this.state.showContactInfo;return r.a.createElement(A,null,function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{className:"fas fa-sort-down",onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,i)}),r.a.createElement(l.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component);D.defaultProps={name:"Israel Israeli",email:"xxx@xxx.com",phone:"000-0000-000"};var T=D,P=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact List")),t.map(function(e){return r.a.createElement(T,Object.assign({},e,{key:e.id}))}))})}}]),t}(n.Component),q=a(17),I=a(4),M=a.n(I),R=a(37),_=a.n(R),F=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,className:_()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,name:a,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};F.prototypes={label:M.a.string.isRequired,name:M.a.string.isRequired,value:M.a.string.isRequired,placeholder:M.a.string.isRequired,type:M.a.string.isRequired,onChange:M.a.func.isRequired,error:M.a.string},F.defaultProps={type:"text"};var L=F,U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(C.a)(g.a.mark(function e(t,n){var r,c,o,l,s,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l,errors:{}},e.next=14,j.a.post("https://jsonplaceholder.typicode.com/users/",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(A,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(L,{label:"Name",name:"name",value:a,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(L,{label:"Email",name:"email",value:n,placeholder:"Enter Email...",type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(L,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(C.a)(g.a.mark(function e(t,n){var r,c,o,l,s,i,m;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,j.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(C.a)(g.a.mark(function e(){var t,a,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,j.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(A,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(L,{label:"Name",name:"name",value:a,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(L,{label:"Email",name:"email",value:n,placeholder:"Enter Email...",type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(L,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component);a(67),a(68);var J=function(){return r.a.createElement(S,null,r.a.createElement(l.a,{basename:"/react-project"},r.a.createElement("div",{className:"App"},r.a.createElement(m,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:P}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:U}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:B}),r.a.createElement(s.a,{exact:!0,path:"/about",component:u}),r.a.createElement(s.a,{exact:!0,path:"/test",component:E}),r.a.createElement(s.a,{component:p}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.6c460a4e.chunk.js.map