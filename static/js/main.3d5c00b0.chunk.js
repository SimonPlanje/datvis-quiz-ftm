(this["webpackJsonpdatavis-quiz-ftm"]=this["webpackJsonpdatavis-quiz-ftm"]||[]).push([[0],{221:function(e,t,n){},518:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(20),s=n.n(r),i=(n(221),n(7)),o=n.n(i),l=n(34),d=n(3),j=(n(222),n(8)),u=n(1);function h(e){var t=e.ans,n=e.checkCounter,c=e.quiz,r=e.setCorrectAns,s=e.correctAns;return Object(j.h)(".barchartdiv").selectAll("svg").remove(),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("data")),a=Object(j.d)(e,(function(e){return e.gender})).get(c[n].category.gender),i=Object(j.d)(a,(function(e){return e.geo})).get(c[n].category.geo),o=Object(j.d)(i,(function(e){return e.age})).get(c[n].category.age).slice().sort((function(e,t){return j.c(e.percentageTotaal,t.percentageTotaal)}));r(o[0].partij),function(e){e.map((function(e){return e.percentageTotaal=e.percentageTotaal.replace(",",".")}))}(o),function(e){e.map((function(e){return e.percentageTotaal=+e.percentageTotaal}))}(o);var l=o,d=document.querySelector(".CheckAns").offsetWidth;if(l){var u={top:0,right:0,bottom:80,left:0},h=d-u.left-u.right,b=150-u.top-u.bottom,g=Object(j.f)().range([0,h]).padding(.1),m=Object(j.f)().range([0,h]).padding(.1),O=Object(j.g)().range([b,0]),p=Object(j.h)(".barchartdiv").append("svg").attr("width",h+u.left+u.right).attr("height",b+u.top+u.bottom).append("g").attr("transform","translate("+u.left+","+u.top+")");g.domain(l.map((function(e){return e.partij}))),m.domain(l.map((function(e){return e.partij}))),O.domain([0,Object(j.e)(l,(function(e){return e.percentageTotaal}))]),p.selectAll("rect").data(l).enter().append("rect").attr("x",(function(e){return g(e.partij)})).attr("width",g.bandwidth()).attr("y",(function(e){return O(e.percentageTotaal)})).attr("height",(function(e){return b-O(e.percentageTotaal)})).attr("fill",(function(e){return t[n].antwoord===e.partij?"var(--ftm-red)":s===e.partij?"green":"var(--form-grey)"})),p.append("g").attr("transform","translate(0,"+b+")").call(Object(j.a)(g)),p.selectAll("text").attr("y",0).attr("x",9).attr("dy",".35em").attr("transform","rotate(90)").style("text-anchor","start"),p.selectAll(".domain").remove(),p.selectAll(".tick line").remove()}})),Object(u.jsx)("div",{className:"barchartdiv",width:"100%"})}function b(e){var t=e.answers;return Object(u.jsx)("div",{className:"CheckForm",children:Object(u.jsxs)("div",{className:"button",children:[Object(u.jsx)("span",{children:Object(u.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(u.jsx)("rect",{className:"cls-14",width:"52",height:"52"}),Object(u.jsxs)("g",{id:"Rectangle_116","data-name":"Rectangle 116",className:"cls-12",children:[Object(u.jsx)("rect",{className:"cls-15",width:"52",height:"52"}),Object(u.jsx)("rect",{className:"cls-16",x:"1",y:"1",width:"50",height:"50"})]}),Object(u.jsx)("path",{id:"Path_44","data-name":"Path 44",className:"cls-13",d:"M0,0H36V36H0Z",transform:"translate(8 8)"}),Object(u.jsx)("circle",{id:"Ellipse_53","data-name":"Ellipse 53",className:"cls-14",cx:"14",cy:"14",r:"14",transform:"translate(12 12)"})]})}),Object(u.jsx)("span",{className:"is".concat(t.check),children:Object(u.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(u.jsx)("rect",{className:"cls-3",width:"52",height:"52"}),Object(u.jsx)("path",{id:"Path_43","data-name":"Path 43",className:"cls-2",d:"M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194",transform:"matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"})]})}),Object(u.jsx)("button",{"data-value":t.answer,children:t.answer})]})})}function g(e){var t=e.quiz,n=e.currentQuestion;return Object(u.jsxs)("div",{className:"ShowImg",children:[Object(u.jsx)("p",{children:t[n].type}),Object(u.jsx)("img",{src:t[n].image,alt:"afbeelding bij vraag"})]})}function m(){return Object(u.jsx)("div",{className:"end",children:Object(u.jsx)("h2",{children:"Eindscherm"})})}var O=n.p+"static/media/icon5.589837df.PNG";function p(e){var t=e.quiz,n=JSON.parse(localStorage.getItem("antwoorden")),c=Object(a.useState)(0),r=Object(d.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(!1),l=Object(d.a)(o,2),j=l[0],p=l[1],x=Object(a.useState)(!1),f=Object(d.a)(x,2),v=f[0],w=f[1],k=Object(a.useState)(!1),N=Object(d.a)(k,2),y=N[0],S=N[1],q=Object(a.useState)(null),z=Object(d.a)(q,2),A=z[0],C=z[1],F=Object(a.useState)("kennis"),P=Object(d.a)(F,2),V=P[0],T=P[1];return Object(u.jsx)("div",{className:"CheckAns",children:y?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m,{})}):Object(u.jsx)(u.Fragment,{children:j?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{quiz:t,currentQuestion:s}),Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("h2",{className:"question-text",children:n[s].vraag})}),Object(u.jsx)("div",{className:"check-section",children:Object(u.jsx)("div",{className:"answer-section",children:"kennis"===V?Object(u.jsxs)(u.Fragment,{children:[t[s].answers.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b,{answers:e})})})),Object(u.jsxs)("h3",{children:["Jouw antwoord was ",Object(u.jsx)("span",{className:"color".concat(n[s].check),children:n[s].antwoord})]}),n[s].check?Object(u.jsx)("h3",{children:"dit is het goede antwoord!"}):Object(u.jsxs)("h3",{children:["het goed antwoord was ",Object(u.jsx)("span",{className:"colortrue",children:n[s].ans})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"legenda",children:[Object(u.jsx)("div",{className:"legenda-rect"}),Object(u.jsxs)("p",{children:["Jouw keuze: ",n[s].antwoord]})]}),Object(u.jsx)(h,{ans:n,quiz:t,checkCounter:s,setCorrectAns:C,correctAns:A})]})})}),Object(u.jsxs)("div",{className:"checkBtns",children:[Object(u.jsx)("button",{className:"prevBtn",onClick:function(){w(!1),s-1>0?(T(t[s-1].type),i(s-1)):i(0)},children:"Vorige"}),v?Object(u.jsx)("button",{className:"C-nextBtn",onClick:function(){S(!0)},children:"Afronden"}):Object(u.jsx)("button",{className:"C-nextBtn",onClick:function(){s+1<n.length-1?(T(t[s+1].type),i(s+1)):(i(s+1),w(!0))},children:"Volgende"})]})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"gotocheck",children:[Object(u.jsx)("img",{src:O,alt:"check icon"}),Object(u.jsx)("h2",{children:"Je bent door de vragen heen, nu kan je kijken hoeveel je er goed had!"}),Object(u.jsx)("button",{className:"nextBtn",onClick:function(){p(!0)},children:"Volgende"})]})})})})}var x=function(e){var t=e.barWidth,n={transition:"width 1s ease-in-out",height:"100%",width:"".concat(t,"%"),backgroundColor:"var(--ftm-red)",borderRadius:"inherit",textAlign:"right"};return Object(u.jsx)("div",{style:{height:5,width:"100%",backgroundColor:"transparent"},className:"ProgressBar",children:Object(u.jsx)("div",{style:n,className:"bar"})})};function f(e){e.setAntwoord;var t=e.antwoorden,n=e.quiz,c=100/(n.length+1),r=Object(a.useState)(0),s=Object(d.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),j=Object(d.a)(l,2),h=j[0],b=j[1],m=Object(a.useState)(null),O=Object(d.a)(m,2),f=O[0],v=O[1],w=Object(a.useState)(c),k=Object(d.a)(w,2),N=k[0],y=k[1];function S(e,t){document.querySelector("button.clickNext")&&document.querySelector("button.clickNext").classList.replace("clickNext","nextBtn"),document.querySelector("button.selected")&&document.querySelector("button.selected").classList.toggle("selected"),document.querySelector("button[data-value=".concat(t,"]")).classList.toggle("selected"),document.querySelector("span.viewRed")&&document.querySelector("span.viewRed").classList.toggle("viewRed"),document.querySelector("span[data-value=".concat(t,"]")).classList.toggle("viewRed"),v({vraag:n[i].question,antwoord:t,check:e,ans:n[i].correct})}return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{barWidth:N}),Object(u.jsx)("div",{className:"Questions",children:h?Object(u.jsx)(p,{quiz:n}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{quiz:n,currentQuestion:i}),Object(u.jsx)("div",{className:"question-section",children:Object(u.jsx)("div",{className:"question-text",children:Object(u.jsx)("h2",{children:n[i].question})})}),Object(u.jsxs)("div",{className:"answer-section",children:[n[i].answers.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"button",children:[Object(u.jsx)("span",{onClick:function(){return S(e.check,e.answer)},children:Object(u.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(u.jsx)("rect",{className:"cls-14",width:"52",height:"52"}),Object(u.jsxs)("g",{id:"Rectangle_116","data-name":"Rectangle 116",className:"cls-12",children:[Object(u.jsx)("rect",{className:"cls-15",width:"52",height:"52"}),Object(u.jsx)("rect",{className:"cls-16",x:"1",y:"1",width:"50",height:"50"})]}),Object(u.jsx)("path",{id:"Path_44","data-name":"Path 44",className:"cls-13",d:"M0,0H36V36H0Z",transform:"translate(8 8)"}),Object(u.jsx)("circle",{id:"Ellipse_53","data-name":"Ellipse 53",className:"cls-14",cx:"14",cy:"14",r:"14",transform:"translate(12 12)"})]})}),Object(u.jsx)("span",{"data-value":e.answer,onClick:function(){return S(e.check,e.answer)},children:Object(u.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(u.jsx)("rect",{className:"cls-3",width:"52",height:"52"}),Object(u.jsx)("path",{id:"Path_43","data-name":"Path 43",className:"cls-2",d:"M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194",transform:"matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"})]})}),Object(u.jsx)("button",{"data-value":e.answer,onClick:function(){return S(e.check,e.answer)},children:e.answer})]})})})),Object(u.jsx)("button",{className:"clickNext",onClick:function(){document.querySelector("button.selected")&&(document.querySelector("button.selected").classList.toggle("selected"),document.querySelector("span.viewRed").classList.toggle("viewRed")),f?(document.querySelector("button.nextBtn").classList.replace("nextBtn","clickNext"),y(N+c),t.push(f),i+1<n.length?(o(i+1),v(null)):(localStorage.setItem("antwoorden",JSON.stringify(t)),b(!0))):alert("Selecteer eerst een antwoord!")},children:"Volgende"})]})]})})]})}function v(e){var t=e.setStartQuiz,n=e.quiz;return Object(u.jsxs)("div",{className:"Start",children:[Object(u.jsx)("h1",{children:"Quiz over uitgaven van politieke partijen aan facebook en google advertenties."}),Object(u.jsxs)("div",{className:"time",children:[Object(u.jsxs)("h2",{children:["VRAGEN ",Object(u.jsx)("span",{className:"biggertext",children:n.length})]}),Object(u.jsxs)("h2",{children:["TIJD ",Object(u.jsx)("span",{children:1.5*n.length}),"  min"]})]}),Object(u.jsx)("p",{children:"Op google en facebook kunnen advertenties worden geplaatst gefocust op een specifieke doelgroep. Weet jij welke partijen jouw als belangrijke doelgroep zien? Doe de korte quiz..."}),Object(u.jsx)("button",{className:"nextBtn",onClick:function(){t(!1)},children:"Start Quiz"})]})}function w(){return(w=Object(l.a)(o.a.mark((function e(t){var n,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.data){e.next=6;break}return console.log("all clear"),t("finished"),e.abrupt("return");case 6:r=function(){return(r=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n);case 2:c=e.sent,localStorage.setItem("data",JSON.stringify(c)),t("finished");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},c=function(){return(c=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.b(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(e){return c.apply(this,arguments)},n="https://docs.google.com/spreadsheets/d/119KqNUnKmnSKvQazSW4hv84UF0GgB5hp8ti_n_G4YGU/export?format=csv",function(){return r.apply(this,arguments)}().catch((function(e){console.log(e),console.log("handled!")}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){return w.apply(this,arguments)},N=n.p+"static/media/icon1.216e3b8f.PNG",y=n.p+"static/media/icon2.d31cb951.PNG",S=n.p+"static/media/icon3.7a08d16c.PNG",q=n.p+"static/media/icon4.145cb42b.PNG";function z(){var e=[{question:"Op welk platform konden politieke partijen geen advertenties kopen?",answers:[{answer:"Facebook",check:!1},{answer:"Twitter",check:!0},{answer:"Google",check:!1}],correct:"Twitter",type:"kennis",image:N},{question:"Welke partij adverteerde online met de campagne #10jaarRutte?",answers:[{answer:"PVV",check:!1},{answer:"VVD",check:!1},{answer:"FvD",check:!0}],correct:"FvD",type:"kennis",image:y},{question:"De 27-jarige Sanne uit Groningen houdt ervan om na een lange dag werken bij de gemeente als \u2026 om lekker op de bank door haar Facebook-feed te scrollen. Van welke partij komt zij de meeste advertenties tegen tijdens het scrollen?",answers:[{answer:"D66",check:!1},{answer:"GroenLinks",check:!0},{answer:"FvD",check:!1}],type:"scenario",image:S,category:{gender:"vrouw",age:"25-34",geo:"Groningen"}},{question:"De 19-jarige Dennis kijkt op zondag altijd alle voetbalwedstrijden in zijn studentenkamer in Amsterdam. Zo nu en dan pakt hij zijn mobiel en zit hij op Instagram. Van welke partij ziet hij de meeste advertenties voorbij komen tijdens het scrollen?",answers:[{answer:"PVV",check:!1},{answer:"PvdA",check:!1},{answer:"DENK",check:!0}],type:"scenario",image:q,category:{gender:"man",age:"18-24",geo:"Noord-Holland"}}],t=Object(a.useState)(!0),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),j=i[0],h=i[1],b=Object(a.useState)("loading"),g=Object(d.a)(b,2),m=g[0],p=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(p);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"App",children:c?Object(u.jsx)(v,{setStartQuiz:r,quiz:e}):Object(u.jsx)(f,{setAntwoord:h,antwoorden:j,quiz:e,dataState:m,checkIcon:O})})}var A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,519)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),A()}},[[518,1,2]]]);
//# sourceMappingURL=main.3d5c00b0.chunk.js.map