(this.webpackJsonpuserapp=this.webpackJsonpuserapp||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),l=a.n(s),c=a(2),o=a(3),u=a(5),i=a(4),m=(a(22),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron display-4"},"Employee Directory")))}}]),a}(n.Component));var h=function(e){return r.a.createElement("form",{className:"text-center"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"}),r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"searchbox text-center",placeholder:"Search by Last Name",id:"search"})))};var d=function(e){console.log("What is props",e.search);var t=e.results.filter((function(t){return t.name.last.toLowerCase().includes(e.search.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}," Picture "),r.a.createElement("th",{scope:"col-3"},"First Name"),r.a.createElement("th",{scope:"col-3"},"Last Name",r.a.createElement("i",{className:"fas fa-sort",onClick:e.sortList,id:"sortIcon"})),r.a.createElement("th",{scope:"col-3"},"Email"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col-2"},"Age"))),r.a.createElement("tbody",null,null===t||void 0===t?void 0:t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.medium})),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.registered.age))})))))},p=a(16),E=a.n(p),f=function(){return E.a.get("https://randomuser.me/api/?nat=us&results=500")},v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",sort:"",results:[]},e.searchDirectory=function(t){f(t).then((function(t){e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){t.preventDefault();var a=t.target.value;e.setState({search:a})},e.sortList=function(){if(console.log("SortList works"),"descending"===e.state.sort||"ascending"!==e.state.sort){e.setState({sort:"ascending"});var t=e.state.results.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}));e.setState({results:t})}else if("ascending"===e.state.sort||"descending"!==e.state.sort){e.setState({sort:"descending"});var a=e.state.results.sort((function(e,t){return t.name.last.localeCompare(e.name.last)}));e.setState({results:a})}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.searchDirectory("search")}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement(h,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),r.a.createElement(d,{results:this.state.results,search:this.state.search,sortList:this.sortList}))}}]),a}(n.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"app container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(v,null)))))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5209e5fd.chunk.js.map