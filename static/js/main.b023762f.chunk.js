(this.webpackJsonpplaneteries=this.webpackJsonpplaneteries||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),c=a(9),i=a.n(c),r=(a(18),a(19),a.p+"static/media/galaxy.e108660f.jpg"),o=function(){return Object(n.jsx)("section",{id:"header",className:"",children:Object(n.jsx)("div",{className:"container-fluid nav-bg",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"scene",children:Object(n.jsxs)("div",{className:"night",children:[Object(n.jsx)("div",{className:"stars"}),Object(n.jsx)("div",{className:"stars"}),Object(n.jsx)("div",{className:"stars"}),Object(n.jsx)("div",{className:"stars"}),Object(n.jsx)("div",{className:"stars"}),Object(n.jsx)("div",{className:"stars"})]})})})})})},l=a(7),u=a.n(l),j=a(10),b=a(2),d=a(3),h=a(5),p=a(4),v=a(11),O=a(12),m=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(b.a)(this,a),(n=e.call(this,t)).onTrigger=function(){n.props.isFavourite||n.props.parentCallback(n.props.data[n.props.index])},n.handleOnclick=function(t){n.setState({isFavourite:!0}),n.onTrigger()},n.state={bgcolour:"grey",isFavourite:!1,favouriteData:[]},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)(O.a,{className:"button",style:{backgroundColor:this.state.bgcolour},onClick:this.handleOnclick,children:this.props.name})}}]),a}(s.Component),f=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).onClick=function(){var e=t.props,a=e.label;(0,e.onClick)(a)},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.onClick,e=this.props,a=e.activeTab,s=e.label,c="tab-list-item";return a===s&&(c+=" tab-list-active"),Object(n.jsx)("li",{className:c,onClick:t,children:s})}}]),a}(s.Component),x=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(b.a)(this,a),(n=e.call(this,t)).onClickTabItem=function(t){n.setState({activeTab:t})},n.state={activeTab:n.props.children[0].props.label},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this.onClickTabItem,e=this.props.children,a=this.state.activeTab;return Object(n.jsxs)("div",{className:"tabs",children:[Object(n.jsx)("ol",{className:"tab-list",children:e.map((function(e){var s=e.props.label;return Object(n.jsx)(f,{activeTab:a,label:s,onClick:t},s)}))}),Object(n.jsx)("div",{className:"tab-content",children:e.map((function(t){if(t.props.label===a)return t.props.children}))})]})}}]),a}(s.Component),k=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(b.a)(this,a),(n=e.call(this,t)).handleOnClick=function(){n.setState({isFavourite:!0})},n.handleCallback=function(t){var e=Object(v.a)(n.state.favouriteList);e.push(t);var a=(n.state.data.length>0?n.state.data:n.props.data).filter((function(e){return e.name!==t.name}));n.setState({data:a}),n.setState({favouriteList:e})},n.state={isFavourite:!1,data:[],favouriteList:[]},n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var t=this;0===this.state.data.length&&this.props.data.map((function(e){return t.state.data.push(e)}))}},{key:"render",value:function(){var t=this;return this.props.isLoading?Object(n.jsx)("div",{}):Object(n.jsx)("div",{children:Object(n.jsxs)(x,{children:[Object(n.jsx)("div",{label:"Planets",children:this.state.data.map((function(e,a){return Object(n.jsx)(m,{index:a,data:t.state.data,name:e.name,parentCallback:t.handleCallback},a)}))}),Object(n.jsx)("div",{label:"Favourite Planets",children:this.state.favouriteList.map((function(t,e){return Object(n.jsx)(m,{name:t.name,isFavourite:!0},e)}))})]})})}}]),a}(s.Component),g=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;return Object(b.a)(this,a),(t=e.call(this)).state={data:[],isLoading:!0},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://assignment-machstatz.herokuapp.com/planet",t.next=3,fetch("https://assignment-machstatz.herokuapp.com/planet");case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,this.setState({data:a}),this.state.data.length>0&&this.setState({isLoading:!1});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(k,{data:this.state.data,isLoading:this.state.isLoading})})}}]),a}(s.Component),C=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("img",{src:r,style:{width:"100%",backgroundSize:"cover",height:"100%"},alt:"Solar System"}),Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("strong",{children:"PLANTERIES"}),Object(n.jsx)("br",{}),Object(n.jsx)(g,{}),Object(n.jsx)(o,{})]})]})};i.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b023762f.chunk.js.map