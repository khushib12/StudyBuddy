(this.webpackJsonpclassroom=this.webpackJsonpclassroom||[]).push([[0],{217:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(21),i=n.n(s),l=(n(217),n(11)),o=n(9),r=n(57),j=n(401),d=n(387),u=n(402),b=n(404),m=n(391),O=n(403),h=n(393),x=n(186),f=n.n(x),p=n(187),v=n.n(p),g=n(188),_=n.n(g),C=n(2);function N(){var e=a.useState({top:!1}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},e,t)))}},i=function(e){return Object(C.jsxs)(j.a,{sx:{width:"top"===e||"bottom"===e?"auto":250},role:"presentation",onClick:s(e,!1),onKeyDown:s(e,!1),children:[Object(C.jsx)(u.a,{children:["Notification"].map((function(e,t){return Object(C.jsxs)(m.a,{button:!0,children:[Object(C.jsx)(O.a,{children:t%2===0?Object(C.jsx)(f.a,{}):Object(C.jsx)(v.a,{})}),Object(C.jsx)(h.a,{primary:e})]},e)}))}),Object(C.jsx)(b.a,{})]})};return Object(C.jsx)("div",{children:["left"].map((function(e){return Object(C.jsxs)(a.Fragment,{children:[Object(C.jsx)(te,{children:Object(C.jsx)(_.a,{style:{cursor:"pointer"},onClick:s(e,!0)})}),Object(C.jsx)(d.a,{anchor:e,open:n[e]||!1,onClose:s(e,!1),onOpen:s(e,!0),children:i(e)})]},e)}))})}var w=n(374),S=n(375),y=n(376),k=n(193),D=n(406),I=n(377),T=n(378),L=n(395),P=n(368),U=Object(P.a)((function(e){return{root:{flexGrow:1},logo:{width:"3rem",marginRight:"1em",marginLeft:"1em"},menuButton:{marginRight:e.spacing(1),backgroundColor:"black"},title:{fontSize:"1.38rem",color:"#white",marginLeft:"5px",cursor:"pointer",textDecoration:"none"},appBar:{backgroundColor:"white",color:"white"},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},headerWrapper:{display:"flex",alignItems:"center"},header__wrapper__right:{display:"flex",justifyContent:"space-between",alignItems:"center"},icon:{marginRight:"15px",color:"white",cursor:"pointer"}}})),R=n(65),E=n.n(R);n(280);R.initializeApp({apiKey:"AIzaSyCsWLneAlSpMDtIQnsuALkYXPF9o43XQuo",authDomain:"classroom-41c5c.firebaseapp.com",projectId:"classroom-41c5c",storageBucket:"classroom-41c5c.appspot.com",messagingSenderId:"998118206169",appId:"1:998118206169:web:e9236a006b1361e1906cc8",measurementId:"G-QNL6CLT8ZY"});var W=R.firestore(),B=R.auth(),A=new R.auth.GoogleAuthProvider,J=R.storage(),F=W,M=Object(a.createContext)();function z(){return Object(a.useContext)(M)}function G(e){var t=e.children,n=Object(a.useState)(!1),c=Object(l.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(!1),r=Object(l.a)(o,2),j=r[0],d=r[1],u=Object(a.useState)(null),b=Object(l.a)(u,2),m=b[0],O=b[1],h=Object(a.useState)(null),x=Object(l.a)(h,2),f=x[0],p=x[1];Object(a.useEffect)((function(){var e=B.onAuthStateChanged((function(e){e?(p(e.email),O(e)):(p(null),O(null))}));return function(){e()}}),[]);var v={CreateClassDialog:s,setCreateClassDialog:i,joinclassdialog:j,setjoinclassdialog:d,login:function(){B.signInWithPopup(A)},logout:function(){B.signOut()},loggedInMail:f,loggedInUser:m};return Object(C.jsx)(M.Provider,{value:v,children:t})}var Q=n(397),H=n(390),K=n(372),X=n(373),Y=n(398),q=(n(281),n(385)),V=n(392),Z=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),i=Object(l.a)(s,2),o=i[0],r=i[1],j=Object(a.useState)(),d=Object(l.a)(j,2),u=d[0],b=d[1],m=Object(a.useState)(),O=Object(l.a)(m,2),h=O[0],x=O[1],f=z(),p=f.loggedInMail,v=f.setCreateClassDialog;return Object(C.jsxs)("div",{className:"form",children:[Object(C.jsx)("p",{className:"class__title",children:"Create Class"}),Object(C.jsxs)("div",{className:"form__inputs",children:[Object(C.jsx)(q.a,{id:"filled-basic",label:"Class Name (required)",className:"form__input",variant:"filled",value:n,onChange:function(e){return c(e.target.value)}}),Object(C.jsx)(q.a,{id:"filled-basic",label:"Section ",className:"form__input",variant:"filled",value:o,onChange:function(e){return r(e.target.value)}}),Object(C.jsx)(q.a,{id:"filled-basic",label:"Subject",className:"form__input",variant:"filled",value:u,onChange:function(e){return b(e.target.value)}}),Object(C.jsx)(q.a,{id:"filled-basic",label:"Room ",className:"form__input",variant:"filled",value:h,onChange:function(e){return x(e.target.value)}})]}),Object(C.jsx)(K.a,{children:Object(C.jsx)(X.a,{color:"primary",onClick:function(e){e.preventDefault();var t=Object(V.a)();F.collection("CreatedClasses").doc(p).collection("classes").doc(t).set({owner:p,className:n,section:o,room:u,subject:h,id:t}).then((function(){v(!1)}))},children:"Create"})})]})},$=function(){var e=z(),t=e.CreateClassDialog,n=e.setCreateClassDialog,c=Object(a.useState)(!1),s=Object(l.a)(c,2),i=s[0],o=s[1],r=Object(a.useState)(!1),j=Object(l.a)(r,2),d=j[0],u=j[1];return Object(C.jsx)("div",{children:Object(C.jsx)(Q.a,{onClose:function(){return n(!1)},"aria-labelledby":"customised-dialog-title",open:t,maxWidth:d?"lg":"xs",children:d?Object(C.jsx)(Z,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"class__title",children:"Using Study Buddy at a school with students?"}),Object(C.jsxs)(Y.a,{className:"class__content",children:[Object(C.jsx)("p",{className:"class__text",children:Object(C.jsx)("a",{href:"/help",className:"class__link",children:"Read the intructions before proceeding"})}),Object(C.jsx)("p",{children:"Students cannot use Study Buddy at a school with personal accounts."}),Object(C.jsxs)("div",{className:"class__checkboxWrapper",children:[Object(C.jsx)(H.a,{color:"primary",onChange:function(){return o(!i)}}),Object(C.jsx)("p",{children:"I've read and understand the above notice, and I'm not using Classroom at a school with students"})]})]}),Object(C.jsxs)(K.a,{children:[Object(C.jsx)(X.a,{autoFocus:!0,onClick:function(){return n(!1)},children:"Close"}),Object(C.jsx)(X.a,{autoFocus:!0,color:"primary",disabled:!i,onClick:function(){return u(!0)},children:"Continue"})]})]})})})},ee=n.p+"static/media/logo.64fac15f.ico",te=function(e){var t=e.children,n=U(),a=c.a.useState(null),s=Object(l.a)(a,2),i=s[0],o=s[1],r=function(){return o(null)},j=z(),d=j.setCreateClassDialog,u=j.setjoinclassdialog,b=j.loggedInUser;return Object(C.jsxs)("div",{className:n.root,children:[Object(C.jsx)(w.a,{style:{background:"#59b4bb"},className:n.appbar,position:"static",children:Object(C.jsxs)(S.a,{className:n.toolbar,children:[Object(C.jsxs)("div",{className:n.headerWrapper,children:[t,Object(C.jsx)("img",{className:n.logo,src:ee,alt:""}),Object(C.jsx)(y.a,{onClick:function(e){e.preventDefault(),window.location="/"},variant:"h6",className:n.title,children:"Study Buddy"})]}),Object(C.jsxs)("div",{className:n.header__wrapper__right,children:[Object(C.jsx)(I.a,{onClick:function(e){return o(e.currentTarget)},className:n.icon}),Object(C.jsx)(T.a,{className:n.icon}),Object(C.jsxs)(k.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:r,children:[Object(C.jsx)(D.a,{onClick:function(){r(),d(!0)},children:"Create Class"}),Object(C.jsx)(D.a,{onClick:function(){r(),u(!0)},children:"Join Class"})]}),Object(C.jsx)("div",{children:Object(C.jsx)(L.a,{onClick:function(){B.signOut(),window.location="/signin"},src:null===b||void 0===b?void 0:b.photoURL,className:n.icon})})]})]})}),Object(C.jsx)($,{}),Object(C.jsx)(oe,{})]})},ne=n(399),ae=n(400),ce=n(384),se=n(379),ie=n(380),le=(n(282),c.a.forwardRef((function(e,t){return Object(C.jsx)(se.a,Object(r.a)({direction:"up",ref:t},e))}))),oe=function(){var e=z(),t=e.joinclassdialog,n=e.setjoinclassdialog,c=e.loggedInUser,s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],r=i[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),u=d[0],b=d[1],m=Object(a.useState)(),O=Object(l.a)(m,2),h=O[0],x=O[1],f=Object(a.useState)(),p=Object(l.a)(f,2),v=p[0],g=p[1],_=Object(a.useState)(!1),N=Object(l.a)(_,2),w=N[0],S=N[1];return Object(C.jsx)("div",{className:"joinClass__base",children:Object(C.jsx)(ne.a,{fullscreen:!0,open:t,onClose:function(){return n(!1)},TransitionComponent:le,children:Object(C.jsxs)("div",{className:"joinClass",children:[Object(C.jsxs)("div",{className:"joinClass__wrapper",children:[Object(C.jsxs)("div",{className:"joinClass__wrapper2",onClick:function(){return n(!1)},children:[Object(C.jsx)(ie.a,{className:"joinClass__svg"}),Object(C.jsx)("div",{className:"joinClass__topHead",children:"Join Class"})]}),Object(C.jsx)(ae.a,{className:"joinClass__btn",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),F.collection("CreatedClasses").doc(u).collection("classes").doc(o).get().then((function(e){if(!e.exists||e.owner===c.email)return x(!0),void S(!1);S(!0),g(e.data()),x(!1)})),!0===w&&F.collection("JoinedClasses").doc(c.email).collection("classes").doc(o).set({joinedData:v}).then((function(){n(!1)}))},children:"Join"})]}),Object(C.jsxs)("div",{className:"joinClass__form",children:[Object(C.jsxs)("p",{className:"joinClass__formText",children:["you are currently signed in as ",null===c||void 0===c?void 0:c.email]}),Object(C.jsxs)("div",{className:"joinClass__loginInfo",children:[Object(C.jsxs)("div",{className:"joinClass__classLeft",children:[Object(C.jsx)(L.a,{src:null===c||void 0===c?void 0:c.photoURL}),Object(C.jsxs)("div",{className:"joinClass__loginText",children:[Object(C.jsx)("div",{className:"joinClass__loginName",children:null===c||void 0===c?void 0:c.displayNamed}),Object(C.jsx)("div",{className:"joinClass__loginEmail",children:null===c||void 0===c?void 0:c.email})]})]}),Object(C.jsx)(ae.a,{onClick:function(){B.signOut()},variant:"outlined",color:"primary",children:"Log Out"})]})]}),Object(C.jsxs)("div",{className:"joinClass__form",children:[Object(C.jsx)("div",{style:{fontSize:"1.25rem",color:"#3c4043"},className:"joinClass__formText",children:"Class Code"}),Object(C.jsx)("div",{style:{color:"#3c4043",marginTop:"-5px"},className:"joinClass__formText",children:"Ask your teacher for the class code, then enter it here."}),Object(C.jsxs)("div",{className:"joinClass__loginInfo",children:[Object(C.jsx)(ce.a,{id:"outlined-basic",label:"Class Code",variant:"outlined",value:o,onChange:function(e){return r(e.target.value)},error:h,helperText:h&&"No class was found"}),Object(C.jsx)(ce.a,{id:"outlined-basic",label:"Owner's Email",variant:"outlined",value:u,onChange:function(e){return b(e.target.value)}})]})]})]})})})},re=n.p+"static/media/logo.dbb781e8.jpg",je=(n(284),function(){var e=z().login;return Object(C.jsxs)("div",{className:"login",children:[Object(C.jsx)("img",{className:"login__logo",src:re,alt:"class"}),Object(C.jsx)(ae.a,{variant:"contained",color:"warning",onClick:function(){return e()},children:"Login Now!"})]})}),de=(n(285),n(91)),ue=n(382),be=n(383),me=function(e){var t=e.classData;return Object(C.jsxs)("li",{className:"joined__list",children:[Object(C.jsx)("div",{className:"joined__wrapper",children:Object(C.jsxs)("div",{className:"joined__container",children:[Object(C.jsx)("div",{className:"joined__imgWrapper"}),Object(C.jsx)("div",{className:"joined__image"}),Object(C.jsxs)("div",{className:"joined__content",children:[Object(C.jsx)(de.b,{className:"joined__title",to:"/".concat(t.id),children:Object(C.jsx)("h2",{children:t.className})}),Object(C.jsx)("p",{className:"joined__owner",children:t.owner}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{})]})]})}),Object(C.jsxs)("div",{className:"joined__bottom",children:[Object(C.jsx)(ue.a,{}),Object(C.jsx)(be.a,{})]})]})},Oe=(n(287),n(407)),he=function(e){var t=e.classData,n=z().loggedInMail,c=Object(a.useState)(!1),s=Object(l.a)(c,2),i=s[0],o=s[1],r=Object(a.useState)(""),j=Object(l.a)(r,2),d=j[0],u=j[1],b=Object(a.useState)(null),m=Object(l.a)(b,2),O=m[0],h=m[1],x=Object(a.useState)(!1),f=Object(l.a)(x,2),p=f[0],v=f[1],g=z().loggedInUser;Object(a.useEffect)((function(){if(t){var e=F.collection("announcments").doc("classes").collection(t.id).onSnapshot((function(e){}));return function(){return e()}}}),[t]);return Object(C.jsx)("div",{className:"main",children:Object(C.jsxs)("div",{className:"main__wrapper",children:[Object(C.jsx)("div",{className:"main__content",children:Object(C.jsxs)("div",{className:"main__wrapper1",children:[Object(C.jsx)("div",{className:"main__bgImage",children:Object(C.jsx)("div",{className:"main__emptyStyles"})}),Object(C.jsxs)("div",{className:"main__text",children:[Object(C.jsx)("h1",{className:"main__heading main__overflow",children:t.className}),Object(C.jsx)("div",{className:"main__section main__overflow",children:t.section}),Object(C.jsxs)("div",{className:"main__wrapper2",children:[Object(C.jsx)("em",{className:"main__code",children:"Class Code :"}),Object(C.jsx)("div",{className:"main__id",children:t.id})]})]})]})}),Object(C.jsxs)("div",{className:"main__announce",children:[Object(C.jsxs)("div",{className:"main__status",children:[Object(C.jsx)("p",{children:"Upcoming"}),Object(C.jsx)("p",{className:"main__subText",children:"No Work Due"})]}),Object(C.jsxs)("div",{className:"main__announcements",children:[Object(C.jsx)("div",{className:"main__announcementsWrapper",children:g.email===t.owner?Object(C.jsx)("div",{className:"main__ancContent",children:i?Object(C.jsxs)("div",{className:"main_form",children:[Object(C.jsx)(q.a,{id:"filled-multiline-flexible",multiline:!0,label:"Post Something",variant:"filled",value:d,onChange:function(e){return u(e.target.value)}}),Object(C.jsxs)("div",{className:"main__buttons",children:[Object(C.jsx)("input",{onChange:function(e){e.target.files[0]&&(h(e.target.files[0]),v(!1))},variant:"outlined",color:"primary",type:"file"}),Object(C.jsxs)("div",{children:[Object(C.jsx)(X.a,{onClick:function(){o(!1),h(null)},children:" Cancel"}),Object(C.jsx)(X.a,{id:"my_btn_post",onClick:function(){v(!0);var e=null!=O?J.ref("images/".concat(O.name,"-").concat((new Date).getTime())).put(O):J.ref("images/sample-".concat((new Date).getTime())).put(O);console.log("".concat((new Date).getTime(),": uploadcalled"));var a=0;null!=O&&e.on("state_changed",(function(){a>0||(a++,J.ref("images").child(O.name).getDownloadURL().then((function(e){console.log("".concat((new Date).getTime(),": adding to db")),F.collection("announcments").doc("classes").collection(t.id).add({timestamp:E.a.firestore.FieldValue.serverTimestamp(),imageUrl:e,text:d,sender:n})})))})),console.log("HI..."),o(!1),u(""),h(null)},color:"primary",variant:"contained",disabled:p,children:"Post"})]})]})]}):Object(C.jsxs)("div",{className:"main__wrapper100",onClick:function(){o(!0),v(!0)},children:[Object(C.jsx)(Oe.a,{src:null===g||void 0===g?void 0:g.photoURL}),Object(C.jsx)("div",{children:"Post Something"})]})}):Object(C.jsx)("div",{className:"main__ancContent",children:"Only Owner Can Post!"})}),Object(C.jsx)(xe,{classData:t})]})]})]})})},xe=(n(288),function(e){var t=e.classData,n=Object(a.useState)([]),c=Object(l.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){if(t){var e=F.collection("announcments").doc("classes").collection(t.id).onSnapshot((function(e){i(e.docs.map((function(e){return e.data()})))}));return function(){return e()}}}),[t]),Object(C.jsx)("div",{children:s.sort((function(e,t){var n,a;return(null===t||void 0===t||null===(n=t.timestamp)||void 0===n?void 0:n.getTime())-(null===e||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.getTime())})).map((function(e,t){return Object(C.jsx)("div",{className:"amt",children:Object(C.jsxs)("div",{className:"amt__Cnt",children:[Object(C.jsxs)("div",{className:"amt__top",children:[Object(C.jsx)(Oe.a,{src:e.sender.photoURL}),Object(C.jsx)("div",{children:e.sender}),Object(C.jsxs)("div",{className:"amt_time",children:[e.hasOwnProperty("timestamp")?new Date(e.timestamp).toDateString():"",Object(C.jsx)("br",{}),e.hasOwnProperty("timestamp")?new Date(e.timestamp).toLocaleTimeString():""]})]}),Object(C.jsx)("p",{className:"amt__txt",children:e.text}),Object(C.jsx)("img",{className:"amt__img",src:e.imageUrl,alt:""})]})},t)}))})}),fe=n(24),pe=n(139),ve=["user","loggedInPath","children"],ge=["user","children"];function _e(e){var t=e.user,n=e.loggedInPath,a=e.children,c=Object(pe.a)(e,ve);return Object(C.jsx)(fe.b,Object(r.a)(Object(r.a)({},c),{},{render:function(){return t?t?Object(C.jsx)(fe.a,{to:{pathname:n}}):null:a}}))}function Ce(e){var t=e.user,n=e.children,a=Object(pe.a)(e,ge);return Object(C.jsx)(fe.b,Object(r.a)(Object(r.a)({},a),{},{render:function(e){var a=e.location;return t?n:t?null:Object(C.jsx)(fe.a,{to:{pathname:"signin",state:{from:a}}})}}))}var Ne=function(){var e=z().loggedInMail,t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),r=o[0],j=o[1];return Object(a.useEffect)((function(){if(e){var t=F.collection("CreatedClasses").doc(e).collection("classes").onSnapshot((function(e){s(e.docs.map((function(e){return e.data()})))}));return function(){return t()}}}),[e]),Object(a.useEffect)((function(){if(e){var t=F.collection("JoinedClasses").doc(e).collection("classes").onSnapshot((function(e){j(e.docs.map((function(e){return e.data().joinedData})))}));return function(){return t()}}}),[e]),Object(C.jsx)(de.a,{children:Object(C.jsxs)(fe.d,{children:[c.map((function(e,t){return Object(C.jsxs)(fe.b,{exact:!0,path:"/".concat(e.id),children:[Object(C.jsx)(N,{}),Object(C.jsx)(he,{classData:e})]},t)})),r.map((function(e,t){return Object(C.jsxs)(fe.b,{exact:!0,path:"/".concat(e.id),children:[Object(C.jsx)(N,{}),Object(C.jsx)(he,{classData:e})]},t)})),Object(C.jsx)(_e,{user:e,loggedInPath:"/",path:"/signin",exact:!0,children:Object(C.jsx)(je,{})}),Object(C.jsxs)(Ce,{user:e,path:"/",exact:!0,children:[Object(C.jsx)(N,{}),Object(C.jsxs)("ol",{className:"joined",children:[c.map((function(e,t){return Object(C.jsx)(me,{classData:e},t)})),r.map((function(e,t){return Object(C.jsx)(me,{classData:e},t)}))]})]})]})})};i.a.render(Object(C.jsx)(G,{children:Object(C.jsx)(Ne,{})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.4dfec6f5.chunk.js.map