(this["webpackJsonpmusic-api-project"]=this["webpackJsonpmusic-api-project"]||[]).push([[0],{111:function(e,t,n){e.exports={a11yHidden:"common_a11yHidden__1DkoW",resetBoxModel:"common_resetBoxModel__3e2rY",resetList:"common_resetList__24ner"}},179:function(e,t,n){e.exports={button:"ShowmoreButton_button__3-GPe"}},34:function(e,t,n){e.exports={popup:"CounterPopup_popup__O0Jx9",divider:"CounterPopup_divider__6hgEk",button:"CounterPopup_button__6-O-T",header:"CounterPopup_header__1U0OJ",a:"CounterPopup_a__2z_rT",searchForm:"CounterPopup_searchForm__YE5sq",flexItem:"CounterPopup_flexItem__EGVkQ"}},379:function(e,t,n){},380:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);n(181),n(191);var a=n(11),r=n.n(a),c=n(178),i=(n(379),n(33)),o=n(31),s=(n(380),n(111)),l=n(49),u=n.n(l),d=n(3);function b(e){var t=e.children;return Object(d.jsx)("header",{className:u.a.header,children:t})}b.LinkedHeading=function(e){var t=e.link,n=e.children;return Object(d.jsx)("h1",{className:s.resetBoxModel,children:Object(d.jsx)("a",{href:t,className:u.a.a,children:n})})},b.SearchForm=function(e){e.input;var t=e.placeholder,n=e.id,a=e.handleInput,r=e.handleKeyword;return Object(d.jsxs)("div",{className:u.a.searchForm,children:[Object(d.jsx)("input",{className:u.a.flexItem,type:"text",placeholder:t,name:n,id:n,onChange:a,onKeyUp:r}),Object(d.jsx)("label",{htmlFor:n,className:s.a11yHidden,children:t}),Object(d.jsx)("button",{type:"button",className:"".concat(u.a.button," ").concat(u.a.flexItem),onClick:r,children:"\uac80\uc0c9"})]})};var p=n(179),m=n.n(p);function j(e){var t=e.link;return Object(d.jsx)("a",{"aria-roledescription":"button",href:t,target:"_blank",rel:"noopener noreferrer",className:m.a.button,title:"\ud074\ub9ad\ud558\uc5ec \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9",children:"\ub354\ubcf4\uae30"})}var h=n(54),f=n.n(h);function x(e){var t=e.children;return Object(d.jsx)("div",{className:f.a.main,children:t})}x.Card=function(e){var t=e.title,n=e.subtitle,a=e.link;return Object(d.jsxs)("div",{className:f.a.container,children:[Object(d.jsxs)("section",{className:f.a.card,children:[Object(d.jsx)("p",{className:f.a.title,children:t}),Object(d.jsx)("p",{className:f.a.subtitle,children:n})]}),Object(d.jsx)(j,{link:a})]})};var O=n(34),_=n.n(O),v={sentence:"Hi!",count:0},y="increase",k="decrease";function g(e,t){switch(t.type){case y:return Object(o.a)(Object(o.a)({},e),{},{count:e.count+1});case k:return Object(o.a)(Object(o.a)({},e),{},{count:e.count-1});default:return e}}function w(){var e=r.a.useReducer(g,v),t=Object(i.a)(e,2),n=t[0],a=t[1],c=n.sentence,o=n.count;return Object(d.jsxs)("div",{className:_.a.popup,children:[Object(d.jsx)("h1",{className:_.a.h,children:"m i n i COUNTER"}),Object(d.jsx)("button",{className:"".concat(_.a.button," ").concat(_.a.plusBtn),onClick:function(){return a({type:k})},children:" - "}),o,Object(d.jsx)("button",{className:"".concat(_.a.button," ").concat(_.a.minusBtn),onClick:function(){return a({type:y})},children:" + "}),Object(d.jsx)("div",{className:_.a.divider}),Object(d.jsxs)("p",{className:_.a.sentence,children:["\uc624\ub298\uc758 \uba85\uc5b8: ",c]})]})}var N,C,E,I=n(112),H=n.n(I),M=n(180);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function B(e,t){var n=e.title,r=e.titleId,c=S(e,["title","titleId"]);return a.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,N||(N=a.createElement("circle",{cx:30,cy:50,fill:"#eba3b5",r:20},a.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"}))),C||(C=a.createElement("circle",{cx:70,cy:50,fill:"#815854b4",r:20},a.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"0s"}))),E||(E=a.createElement("circle",{cx:30,cy:50,fill:"#eba3b5",r:20},a.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"}),a.createElement("animate",{attributeName:"fill-opacity",values:"0;0;1;1",calcMode:"discrete",keyTimes:"0;0.499;0.5;1",dur:"1s",repeatCount:"indefinite"}))))}var F=a.forwardRef(B),T=(n.p,function(e){return"https://ws.audioscrobbler.com/2.0/?method=album.search&album=".concat(e,"&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json")}),R={keyword:"",input:""},L="update keyword",U="update input";function J(e,t){switch(null===t||void 0===t?void 0:t.type){case L:return Object(o.a)(Object(o.a)({},e),{},{keyword:t.payload});case U:return Object(o.a)(Object(o.a)({},e),{},{input:t.payload});default:return e}}var Y=function(){var e=Object(a.useReducer)(J,R),t=Object(i.a)(e,2),n=t[0],r=t[1],c=n.keyword,o=n.input,s=function(e,t){var n=Object(a.useState)(!1),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),u=l[0],d=l[1],b=Object(a.useState)([]),p=Object(i.a)(b,2),m=p[0],j=p[1],h=e(t);return Object(a.useEffect)((function(){""!==t?function(){var e=Object(M.a)(H.a.mark((function e(){var t,n,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h);case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,j(null===r||void 0===r||null===(t=r.results)||void 0===t||null===(n=t.albummatches)||void 0===n?void 0:n.album),o(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),d(!0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()():o(!1)}),[e,t,h]),[c,u,m]}(T,c),l=Object(i.a)(s,3),u=l[0],p=l[1],m=l[2];return u?Object(d.jsx)(F,{}):p?Object(d.jsx)("div",{role:"alert",children:p.message}):Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(b,{children:[Object(d.jsx)(b.LinkedHeading,{link:"https://ahnanne.github.io/music",children:"\uc568\ubc94 \ucc3e\uae30 :)"}),Object(d.jsx)(b.SearchForm,{placeholder:"\uac00\uc218\uba85, \ub178\ub798 \uc81c\ubaa9, \uc568\ubc94 \uc774\ub984\uc73c\ub85c \uac80\uc0c9\ud558\uae30",id:"searchAlbum",input:o,handleInput:function(e){r({type:U,payload:e.target.value})},handleKeyword:function(e){if("Enter"===e.key||"button"===e.target.type){if(""===o)return;r({type:L,payload:o})}}})]}),Object(d.jsx)(w,{}),Object(d.jsx)(x,{children:null===m||void 0===m?void 0:m.map((function(e){var t=e.url,n=e.name,a=e.artist;return Object(d.jsx)(x.Card,{title:n,subtitle:a,link:t},t)}))})]})};Object(c.render)(Object(d.jsx)(a.StrictMode,{children:Object(d.jsx)(Y,{})}),document.getElementById("root"))},49:function(e,t,n){e.exports={header:"Header_header__1m00m",a:"Header_a__2Zaia",searchForm:"Header_searchForm__3ig4S",flexItem:"Header_flexItem__1pmEx",button:"Header_button__13hsb"}},54:function(e,t,n){e.exports={main:"Main_main__23gcg",container:"Main_container__3NLYU",title:"Main_title__2nIQV",subtitle:"Main_subtitle__2mCUG"}}},[[382,1,2]]]);
//# sourceMappingURL=main.42ba59fb.chunk.js.map