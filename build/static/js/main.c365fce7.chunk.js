(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/search.00d428ae.svg"},function(e,t,a){e.exports=a.p+"static/media/account.c9fffa0e.svg"},,,function(e,t,a){e.exports=a.p+"static/media/bookSwapLogo.c12c726a.svg"},function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(26),a(5)),s=a(7);function u(){return r.a.createElement("main",null)}function i(){return r.a.createElement("main",null,r.a.createElement("h1",{className:"contact__title"},"Contact Us"),r.a.createElement("div",{className:"contact__mainContent"},r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",null),r.a.createElement("label",null,"Name"),r.a.createElement("input",null),r.a.createElement("label",null,"Name"),r.a.createElement("input",null),r.a.createElement("button",null,"Send Message")),r.a.createElement("div",{className:"contact__dev"},r.a.createElement("div",null),r.a.createElement("div",null))))}function m(){return r.a.createElement("main",null)}a(27);var p=["Do I need account to be able to use Book Swap","How to create account","How can I post a trade","What is the most relevant information of a book"],E=["No, you don't. You can still search for the book you want. \n Account is used to be able to trade and post books on the website.","To create an account you just need to press 'SIGN UP' tab at the bottom right of your screen and fill the information required.","When logged in, there will be a 'Trade Book' button at the top right of the website. \n Once clicked you will be redirected to the page where you fill the fields with the information.","The most relevant information to write about a book are: \n \b \b 1. Book Description \n \b \b 2. Book Condition \n \b \b 3. Trade options (Max distance you can go and delivery costs, for example) \n \b \b 4. What Books / Genres do you accept"];function d(){return r.a.createElement("main",null,r.a.createElement("h1",{className:"faqTitle"},"Frequent Answer and Questions"),r.a.createElement("div",{className:"question__list"},p.map((function(e,t){var a=t;return r.a.createElement("div",null,r.a.createElement("h3",{className:"question",value:e,key:t},"Q: ",e),r.a.createElement("p",{className:"answer"}," ",E[a]," "))}))))}a(28);var b=a(16),f=a.n(b);function v(){return r.a.createElement("main",null,r.a.createElement("section",{className:"section1"},r.a.createElement("form",{className:"home__form"},r.a.createElement("input",{placeholder:"Seach Book",className:"search__input",type:"text"}),r.a.createElement("input",{placeholder:"Location",className:"location__input",type:"select"}),r.a.createElement("div",{className:"vline"}),r.a.createElement("button",{className:"search__btn"},r.a.createElement("img",{className:"search__img",src:f.a,alt:"search button"}))),r.a.createElement("p",{className:"p__cat"},"categories")),r.a.createElement("section",null))}var h=a(17),g=a.n(h);a(29);function N(){return r.a.createElement("main",null,r.a.createElement("div",{className:"userInfo"},r.a.createElement("img",{className:"userImg",alt:"userPhoto",src:g.a}),r.a.createElement("div",{className:"userBox"},r.a.createElement("div",{className:"userText"},r.a.createElement("h3",{className:"userName"},"User Name"),r.a.createElement("p",{className:"userBio"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor, quos tempora soluta sequi quae perferendis suscipit beatae officia tenetur amet, nobis maxime. Sapiente maxime voluptatum aperiam. Recusandae, in ipsam.")),r.a.createElement("div",{className:"userContact"},r.a.createElement("p",{className:"contactText"},"Email: user@mail.com"),r.a.createElement("p",{className:"contactText"},"Phone: 911111111")))),r.a.createElement("h3",{className:"booksTitle"},"Books"),r.a.createElement("div",{className:"userBooks"},r.a.createElement("div",{className:"Books"}),r.a.createElement("div",{className:"Books"}),r.a.createElement("div",{className:"Books"}),r.a.createElement("div",{className:"Books"})))}function _(){return r.a.createElement("main",null)}var O=a(2),j=(a(30),function(){var e=function(e){return""===e||void 0===e||null===e};return{login:function(t,a,n){e(t)?n({message:"username-empty"},void 0):e(a)?n({message:"password-empty"},void 0):!function(e,t){return"user1"===e&&"pwd123"===t}(t,a)?n({message:"autententication-failed"},void 0):n(void 0,{token:"mock-token"})}}}());function k(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(O.a)(l,2),u=o[0],i=o[1],m=Object(n.useState)("input"),p=Object(O.a)(m,2),E=p[0],d=p[1],b=Object(n.useState)("input"),f=Object(O.a)(b,2),v=f[0],h=f[1],g=Object(s.f)();return r.a.createElement("main",null,r.a.createElement("form",{class:"signin__form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"textBox"},r.a.createElement("input",{onChange:function(e){c(e.target.value),""!==e.target.value&&d("input")},value:a,className:E,type:"text",placeholder:"Email"}),r.a.createElement("input",{onChange:function(e){i(e.target.value),""!==e.target.value&&h("input")},value:u,className:v,type:"password",placeholder:"Password"})),r.a.createElement("button",{className:"signin__button",onClick:function(){""===a&&""===u?(h("error"),d("error")):""===a?d("error"):""===u?h("error"):j.login(a,u,(function(e,t){e?alert(e.message):(console.log("utilizador autenticado"),localStorage.setItem("loginToken",t.token),g.push("/"))}))}},"Sign In")))}a(36);function S(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(O.a)(l,2),u=o[0],i=o[1],m=Object(n.useState)(""),p=Object(O.a)(m,2),E=p[0],d=p[1],b=Object(n.useState)(""),f=Object(O.a)(b,2),v=f[0],h=f[1],g=Object(n.useState)(""),N=Object(O.a)(g,2),_=N[0],j=N[1],k=Object(n.useState)("input"),S=Object(O.a)(k,2),w=S[0],y=S[1],x=Object(n.useState)("input"),B=Object(O.a)(x,2),C=B[0],T=B[1],I=Object(n.useState)("input"),q=Object(O.a)(I,2),P=q[0],U=q[1],A=Object(n.useState)("input"),D=Object(O.a)(A,2),G=D[0],L=D[1],F=Object(n.useState)("input"),M=Object(O.a)(F,2),Q=M[0],W=M[1],H=Object(s.f)();return r.a.createElement("main",null,r.a.createElement("form",{class:"signup__form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{onChange:function(e){c(e.target.value),""!==e.target.value&&y("input")},value:a,className:w,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{onChange:function(e){i(e.target.value),""!==e.target.value&&T("input")},value:u,className:C,type:"text",placeholder:"Username"}),r.a.createElement("input",{onChange:function(e){d(e.target.value),""!==e.target.value&&U("input")},value:E,className:P,type:"text",placeholder:"Email"}),r.a.createElement("input",{onChange:function(e){h(e.target.value),""!==e.target.value&&L("input")},value:v,className:G,type:"password",placeholder:"Password"}),r.a.createElement("input",{onChange:function(e){j(e.target.value),""!==e.target.value&&W("input")},value:_,className:Q,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{className:"signup__button",onClick:function(){""===a&&""===u&&""===E&&""===v&&""===_?(y("error"),T("error"),U("error"),L("error"),W("error")):""===a?(y("error"),""===u&&T("error"),""===E&&U("error"),""===v&&L("error"),""===_&&W("error")):""===u?(T("error"),""===E&&U("error"),""===v&&L("error"),""===_&&W("error")):""===E?(U("error"),""===v&&L("error"),""===_&&W("error")):""===v?(L("error"),""===_&&W("error")):""===_?W("error"):H.push("/")}},"Sign Up")))}var w=a(20),y=a.n(w);a(37);function x(){return r.a.createElement("header",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"logo",src:y.a,alt:"Book Swap Logo"})))}a(38);function B(){return r.a.createElement("footer",null,r.a.createElement("p",null,"reading is not a crime"),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/faq",className:"nav__item"},"FAQ")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/contact",className:"nav__item"},"CONTACT")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/signin",className:"nav__item"},"SIGN IN")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/signup",className:"nav__item"},"SIGN UP"))))}l.a.render(r.a.createElement((function(){return r.a.createElement(o.a,null,r.a.createElement(x,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:v}),r.a.createElement(s.a,{path:"/bookdetails",component:u}),r.a.createElement(s.a,{path:"/contact",component:i}),r.a.createElement(s.a,{path:"/createad",component:m}),r.a.createElement(s.a,{path:"/faq",component:d}),r.a.createElement(s.a,{path:"/profile",component:N}),r.a.createElement(s.a,{path:"/searchpage",component:_}),r.a.createElement(s.a,{path:"/signin",component:k}),r.a.createElement(s.a,{path:"/signup",component:S})),r.a.createElement(B,null))}),null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c365fce7.chunk.js.map