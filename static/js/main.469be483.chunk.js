(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),r=a.n(s),l=a(6),o=a(1),i=a(2),u=a(4),d=a(3),m=(a(15),a(16),a(5)),p=(a(17),a(7)),h=a.n(p),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={filteredTitle:"",selectedStatus:""},e.handleChange=function(t){var a=t.target,n=a.value,c=a.name;e.setState(Object(m.a)({},c,n))},e.searchedTodos=function(t){return null===t.title?t.title:t.title.includes(e.state.filteredTitle)},e.selectedByStatus=function(t){return"completed"===e.state.selectedStatus?t.completed:"active"===e.state.selectedStatus?!t.completed:t},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.selectUser,n=e.changeStatus,s=e.selectedUserId,r=this.state,l=r.filteredTitle,o=r.selectedStatus,i=t.filter(this.searchedTodos).filter(this.selectedByStatus);return c.a.createElement("div",{className:"TodoList"},c.a.createElement("h2",null,"Todos:"),c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("input",{name:"filteredTitle",value:l,placeholder:"Filter",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("select",{name:"selectedStatus",value:o,onChange:this.handleChange},c.a.createElement("option",{value:"all"},"All"),c.a.createElement("option",{value:"active"},"Active"),c.a.createElement("option",{value:"completed"},"Completed")))),c.a.createElement("div",{className:"TodoList__list-container"},c.a.createElement("ul",{className:"TodoList__list"},i.map((function(e){return c.a.createElement("li",{key:e.id,className:h()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed})},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed,onClick:function(){return n(e.id)}}),c.a.createElement("p",null,e.title)),c.a.createElement("button",{type:"button",className:h()("TodoList__user-button button",{"TodoList__user-button--selected":e.userId===s}),onClick:function(){a(e.userId)}},"User #".concat(e.userId)))})))))}}]),a}(c.a.PureComponent),v=(a(18),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={selectedUser:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadData()}},{key:"loadData",value:function(){var e,t=this;(e=this.props.userId,v("/users/".concat(e))).then((function(e){return t.setState({selectedUser:e})}))}},{key:"render",value:function(){var e=this.state.selectedUser,t=this.props.deleteUser;return c.a.createElement("div",{className:"CurrentUser"},c.a.createElement("h2",{className:"CurrentUser__title"},c.a.createElement("span",null,"Selected user:",e.id)),c.a.createElement("h3",{className:"CurrentUser__name"},e.name),c.a.createElement("p",{className:"CurrentUser__email"},e.email),c.a.createElement("p",{className:"CurrentUser__phone"},e.phone),c.a.createElement("button",{className:"button",type:"button",onClick:function(){t()}},"Delete"))}}]),a}(c.a.PureComponent),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.deleteUser=function(){e.setState({selectedUserId:0})},e.changeStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):Object(l.a)({},e)}))}}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("/todos").then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId;return c.a.createElement("div",{className:"App"},t.length>0&&c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(f,{todos:t,selectedUserId:a,selectUser:this.selectUser,changeStatus:this.changeStatus})),c.a.createElement("div",{className:"App__content"},c.a.createElement("div",{className:"App__content-container"},a?c.a.createElement(E,{userId:a,deleteUser:this.deleteUser}):"No user selected")))}}]),a}(c.a.Component);r.a.render(c.a.createElement(_,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.469be483.chunk.js.map