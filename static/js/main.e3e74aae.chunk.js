(this["webpackJsonpdatavis-quiz-ftm"]=this["webpackJsonpdatavis-quiz-ftm"]||[]).push([[0],{109:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(30),r=a.n(s),i=(a(109),a(5)),o=a.n(i),d=a(7),l=a(2),j=a(6),h=a(0);function u(e){var t=e.ans,a=e.checkCounter,n=e.quiz,s=(e.setCorrectAns,e.correctAns),r=e.plotData;return Object(j.h)(".barchartdiv").selectAll("svg").remove(),Object(c.useEffect)((function(){var e=n[a].indextype,c="",i="",o="";"gokken"===n[a].type?c=r:"scenario"===n[a].type&&(c=r[e]);var d=document.querySelector(".CheckAns").offsetWidth;if(c){"gokken"===n[a].type?(o=function(e){return e.partij},i=function(e){return e.midden}):"scenario"===n[a].type&&(o=function(e){return e.partij},i=function(e){return e.percentageTotaal});var l={top:0,right:0,bottom:80,left:0},h=d-l.left-l.right,u=150-l.top-l.bottom,m=Object(j.f)().range([0,h]).padding(.1),b=Object(j.g)().range([u,0]),p=Object(j.h)(".barchartdiv").append("svg").attr("width",h+l.left+l.right).attr("height",u+l.top+l.bottom).append("g").attr("transform","translate("+l.left+","+l.top+")");m.domain(c.map(o)),console.log(m.domain()),b.domain([0,Object(j.e)(c,i)]),console.log(b.range()),console.log(t[a].antwoord),console.log(s),p.selectAll("rect").data(c).enter().append("rect").attr("x",(function(e){return m(o(e))})).attr("width",m.bandwidth()).attr("y",(function(e){return b(i(e))})).attr("height",(function(e){return u-b(i(e))})).attr("fill",(function(e){return t[a].antwoord===e.partij?"var(--ftm-red)":s===e.partij?"green":"var(--form-grey)"})),p.append("g").attr("transform","translate(0,"+u+")").call(Object(j.a)(m)),p.selectAll("text").attr("y",0).attr("x",9).attr("dy",".35em").attr("transform","rotate(90)").style("text-anchor","start"),p.selectAll(".domain").remove(),p.selectAll(".tick line").remove()}})),Object(h.jsx)("div",{className:"barchartdiv",width:"100%"})}function m(e){var t=e.answers;return Object(h.jsx)("div",{className:"CheckForm",children:Object(h.jsxs)("div",{className:"button",children:[Object(h.jsx)("span",{children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-14",width:"52",height:"52"}),Object(h.jsxs)("g",{id:"Rectangle_116","data-name":"Rectangle 116",className:"cls-12",children:[Object(h.jsx)("rect",{className:"cls-15",width:"52",height:"52"}),Object(h.jsx)("rect",{className:"cls-16",x:"1",y:"1",width:"50",height:"50"})]}),Object(h.jsx)("path",{id:"Path_44","data-name":"Path 44",className:"cls-13",d:"M0,0H36V36H0Z",transform:"translate(8 8)"}),Object(h.jsx)("circle",{id:"Ellipse_53","data-name":"Ellipse 53",className:"cls-14",cx:"14",cy:"14",r:"14",transform:"translate(12 12)"})]})}),Object(h.jsx)("span",{className:"is".concat(t.check),children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-3",width:"52",height:"52"}),Object(h.jsx)("path",{id:"Path_43","data-name":"Path 43",className:"cls-2",d:"M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194",transform:"matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"})]})}),Object(h.jsx)("button",{"data-value":t.id,children:t.answer})]})})}function b(e){var t=e.quiz,a=e.currentQuestion;return Object(h.jsxs)("div",{className:"ShowImg",children:[Object(h.jsx)("p",{children:t[a].type}),Object(h.jsx)("img",{src:t[a].image,alt:"afbeelding bij vraag"})]})}var p=a.p+"static/media/main.119d013b.jpg";function g(e){var t=e.quiz,a=e.dataState,n=e.totData;console.log(a);var s=JSON.parse(localStorage.getItem("antwoorden")),r=Object(c.useState)(0),i=Object(l.a)(r,2),o=i[0],d=i[1],j=Object(c.useState)(!1),g=Object(l.a)(j,2),O=g[0],x=g[1],k=Object(c.useState)(!1),v=Object(l.a)(k,2),f=v[0],w=v[1],y=Object(c.useState)(null),N=Object(l.a)(y,2),S=N[0],A=N[1],q=Object(c.useState)("gokken"),C=Object(l.a)(q,2),D=C[0],P=C[1];return Object(h.jsx)("div",{className:"CheckAns",children:O?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{quiz:t,currentQuestion:o}),Object(h.jsx)("div",{className:"question-section",children:Object(h.jsx)("h2",{className:"question-text",children:s[o].vraag})}),Object(h.jsx)("div",{className:"check-section",children:Object(h.jsxs)("div",{className:"answer-section",children:["kennis"===D&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"ans-options",children:t[o].answers.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(m,{answers:e})})}))}),Object(h.jsxs)("h3",{children:["Jouw antwoord was"," ",Object(h.jsx)("span",{className:"color".concat(s[o].check),children:s[o].antwoord})]}),s[o].check?Object(h.jsx)("h3",{children:"dit is het goede antwoord!"}):Object(h.jsxs)("h3",{children:["het goed antwoord was"," ",Object(h.jsx)("span",{className:"colortrue",children:s[o].ans})]})]})," ","scenario"===D&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"legenda",children:[Object(h.jsx)("div",{className:"legenda-rect"}),Object(h.jsxs)("p",{children:["Jouw keuze: ",s[o].antwoord]})]}),Object(h.jsx)(u,{plotData:a,ans:s,quiz:t,checkCounter:o,setCorrectAns:A,correctAns:S})]}),"gokken"===D&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"legenda",children:[Object(h.jsx)("div",{className:"legenda-rect"}),Object(h.jsxs)("p",{children:["Jouw keuze: ",s[o].antwoord]})]}),Object(h.jsx)(u,{plotData:n,ans:s,quiz:t,checkCounter:o,setCorrectAns:A,correctAns:S})]})]})}),Object(h.jsx)("div",{className:"btnSection",children:Object(h.jsxs)("div",{className:"checkBtns",children:[Object(h.jsx)("button",{className:"prevBtn",onClick:function(){w(!1),o-1>0?(P(t[o-1].type),d(o-1)):d(0)},children:"Vorige"}),f?Object(h.jsx)("a",{href:"https://www.ftm.nl/gids-partijfinanciering",className:"btn C-nextBtn",children:"Afronden"}):Object(h.jsx)("button",{className:"C-nextBtn",onClick:function(){o+1<s.length-1?(P(t[o+1].type),d(o+1)):(d(o+1),w(!0))},children:"Volgende"})]})})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"gotocheck",children:[Object(h.jsx)("img",{class:"mainimg",src:p,alt:"check icon"}),Object(h.jsx)("h2",{children:"Je bent door de vragen heen, nu kan je kijken hoeveel je er goed had!"}),Object(h.jsx)("div",{className:"btnSection",children:Object(h.jsx)("button",{className:"nextBtn",onClick:function(){x(!0)},children:"Checken!"})})]})})})}var O=function(e){var t=e.barWidth,a={transition:"width 1s ease-in-out",height:"100%",width:"".concat(t,"%"),backgroundColor:"var(--ftm-red)",borderRadius:"inherit",textAlign:"right"};return Object(h.jsx)("div",{style:{height:5,width:"100%",backgroundColor:"transparent"},className:"ProgressBar",children:Object(h.jsx)("div",{style:a,className:"bar"})})};function x(){return(x=Object(d.a)(o.a.mark((function e(t,a,c,n,s,r,i){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.map((function(e,t){if(console.log(e.type),"gokken"===e.type){var o=s;function d(e){return e.map((function(e){return e.midden=+e.midden}))}console.log(o),d(o);var l=o.slice().sort((function(e,t){return j.c(e.midden,t.midden)}));i(l),console.log(l),r.push([{partij:l[0].partij,check:!0,id:l[0].partij},{partij:l[1].partij,check:!1,id:l[1].partij},{partij:l[2].partij,check:!1,id:l[2].partij}]),console.log(r)}else if("scenario"===e.type){var h=Object(j.d)(c,(function(e){return e.gender})).get(e.category.gender),u=Object(j.d)(h,(function(e){return e.geo})).get(e.category.geo),m=Object(j.d)(u,(function(e){return e.age})).get(e.category.age).slice().sort((function(e,t){return j.c(e.percentageTotaal,t.percentageTotaal)}));function d(e){return e.map((function(e){return e.percentageTotaal=+e.percentageTotaal}))}console.log(m),m.map((function(e){return e.percentageTotaal=e.percentageTotaal.replace(",",".")})),d(m);var b=m;n.push(b),a.push([{partij:b[0].partij,check:!0,id:b[0].partij},{partij:b[1].partij,check:!1,id:b[1].partij},{partij:b[2].partij,check:!1,id:b[2].partij}])}else console.log("kennsivraag")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e,t,a,c,n,s,r){return x.apply(this,arguments)};function v(e){e.setAntwoord;var t=e.antwoorden,a=e.quiz,n=e.dynamicAns,s=e.dynamicAnsMoney,r=e.dataState,i=e.totData;console.log(i);var o=100/(a.length+1),d=Object(c.useState)(0),j=Object(l.a)(d,2),u=j[0],m=j[1],p=Object(c.useState)(!1),x=Object(l.a)(p,2),k=x[0],v=x[1],f=Object(c.useState)(null),w=Object(l.a)(f,2),y=w[0],N=w[1],S=Object(c.useState)(o),A=Object(l.a)(S,2),q=A[0],C=A[1];function D(e,t,c){console.log(n),console.log(c),document.querySelector("button.clickNext")&&document.querySelector("button.clickNext").classList.replace("clickNext","nextBtn"),document.querySelector("button.selected")&&document.querySelector("button.selected").classList.toggle("selected"),document.querySelector("button[data-value=".concat(c,"]")).classList.toggle("selected"),document.querySelector("span.viewRed")&&document.querySelector("span.viewRed").classList.toggle("viewRed"),document.querySelector("span[data-value=".concat(c,"]")).classList.toggle("viewRed"),N({vraag:a[u].question,antwoord:t,check:e,ans:a[u].correct})}var P=a[u].indextype;return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{barWidth:q}),Object(h.jsx)("div",{className:"Questions",children:k?Object(h.jsx)(g,{quiz:a,dataState:r,totData:i}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{quiz:a,currentQuestion:u}),Object(h.jsx)("div",{className:"question-section",children:Object(h.jsx)("div",{className:"question-text",children:Object(h.jsx)("h2",{children:a[u].question})})}),Object(h.jsxs)("div",{className:"answer-section",children:[Object(h.jsxs)("div",{className:"ans-options",children:[a[u].answers.map((function(e,t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"button",children:["scenario"===a[u].type&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{onClick:function(){return D(n[P][t].check,n[P][t].partij,n[P][t].id)},children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-14",width:"52",height:"52"}),Object(h.jsxs)("g",{id:"Rectangle_116","data-name":"Rectangle 116",className:"cls-12",children:[Object(h.jsx)("rect",{className:"cls-15",width:"52",height:"52"}),Object(h.jsx)("rect",{className:"cls-16",x:"1",y:"1",width:"50",height:"50"})]}),Object(h.jsx)("path",{id:"Path_44","data-name":"Path 44",className:"cls-13",d:"M0,0H36V36H0Z",transform:"translate(8 8)"}),Object(h.jsx)("circle",{id:"Ellipse_53","data-name":"Ellipse 53",className:"cls-14",cx:"14",cy:"14",r:"14",transform:"translate(12 12)"})]})}),Object(h.jsx)("span",{"data-value":n[P][t].id,onClick:function(){return D(n[P][t].check,n[P][t].partij,n[P][t].id)},children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-3",width:"52",height:"52"}),Object(h.jsx)("path",{id:"Path_43","data-name":"Path 43",className:"cls-2",d:"M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194",transform:"matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"})]})})]}),"gokken"===a[u].type&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{onClick:function(){return D(s[0][t].check,s[0][t].partij,s[0][t].id)},children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-14",width:"52",height:"52"}),Object(h.jsxs)("g",{id:"Rectangle_116","data-name":"Rectangle 116",className:"cls-12",children:[Object(h.jsx)("rect",{className:"cls-15",width:"52",height:"52"}),Object(h.jsx)("rect",{className:"cls-16",x:"1",y:"1",width:"50",height:"50"})]}),Object(h.jsx)("path",{id:"Path_44","data-name":"Path 44",className:"cls-13",d:"M0,0H36V36H0Z",transform:"translate(8 8)"}),Object(h.jsx)("circle",{id:"Ellipse_53","data-name":"Ellipse 53",className:"cls-14",cx:"14",cy:"14",r:"14",transform:"translate(12 12)"})]})}),Object(h.jsx)("span",{"data-value":s[0][t].partij,onClick:function(){return D(s[0][t].check,s[0][t].partij,s[0][t].id)},children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-3",width:"52",height:"52"}),Object(h.jsx)("path",{id:"Path_43","data-name":"Path 43",className:"cls-2",d:"M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194",transform:"matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"})]})})]}),"kennis"===a[u].type&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{onClick:function(){return D(e.check,e.answer,e.id)},children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-14",width:"52",height:"52"}),Object(h.jsxs)("g",{id:"Rectangle_116","data-name":"Rectangle 116",className:"cls-12",children:[Object(h.jsx)("rect",{className:"cls-15",width:"52",height:"52"}),Object(h.jsx)("rect",{className:"cls-16",x:"1",y:"1",width:"50",height:"50"})]}),Object(h.jsx)("path",{id:"Path_44","data-name":"Path 44",className:"cls-13",d:"M0,0H36V36H0Z",transform:"translate(8 8)"}),Object(h.jsx)("circle",{id:"Ellipse_53","data-name":"Ellipse 53",className:"cls-14",cx:"14",cy:"14",r:"14",transform:"translate(12 12)"})]})}),Object(h.jsx)("span",{"data-value":e.id,onClick:function(){return D(e.check,e.answer,e.id)},children:Object(h.jsxs)("svg",{id:"Artboard_2","data-name":"Artboard \xe2\u20ac\u201c 2",className:"cls-1",children:[Object(h.jsx)("rect",{className:"cls-3",width:"52",height:"52"}),Object(h.jsx)("path",{id:"Path_43","data-name":"Path 43",className:"cls-2",d:"M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194",transform:"matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"})]})})]}),"scenario"===a[u].type&&Object(h.jsx)("button",{"data-value":n[P][t].id,onClick:function(){return D(n[P][t].check,n[P][t].partij,n[P][t].id)},children:n[P][t].partij}),"gokken"===a[u].type&&Object(h.jsx)("button",{"data-value":s[0][t].id,onClick:function(){return D(s[0][t].check,s[0][t].partij,s[0][t].id)},children:s[0][t].partij}),"kennis"===a[u].type&&Object(h.jsx)("button",{"data-value":e.id,onClick:function(){return D(e.check,e.answer,e.id)},children:e.answer})]})})}))," "]}),Object(h.jsx)("div",{class:"btnSection",children:Object(h.jsx)("button",{className:"clickNext",onClick:function(){document.querySelector("button.selected")&&(document.querySelector("button.selected").classList.toggle("selected"),document.querySelector("span.viewRed").classList.toggle("viewRed")),y?(document.querySelector("button.nextBtn").classList.replace("nextBtn","clickNext"),C(q+o),t.push(y),u+1<a.length?(m(u+1),N(null)):(localStorage.setItem("antwoorden",JSON.stringify(t)),v(!0))):alert("Selecteer eerst een antwoord!")},children:"Volgende"})})]})]})})]})}function f(e){var t=e.setStartQuiz,a=e.quiz;return Object(h.jsxs)("div",{className:"Start",children:[Object(h.jsxs)("div",{className:"startSection",children:[Object(h.jsx)("h1",{children:"Quiz over uitgaven van politieke partijen aan facebook en google advertenties."}),Object(h.jsx)("img",{class:"mainimg",src:p,alt:"Illustratie bij de quiz"}),Object(h.jsxs)("div",{className:"time",children:[Object(h.jsxs)("h2",{children:["VRAGEN ",Object(h.jsx)("span",{className:"biggertext",children:a.length})]}),Object(h.jsxs)("h2",{children:["TIJD ",Object(h.jsx)("span",{children:1.5*a.length})," min"]})]}),Object(h.jsx)("p",{children:"Op google en facebook kunnen advertenties worden geplaatst gefocust op een specifieke doelgroep. Weet jij welke partijen jouw als belangrijke doelgroep zien? Doe de korte quiz..."})]}),Object(h.jsx)("div",{className:"btnSection",children:Object(h.jsx)("button",{className:"nextBtn",onClick:function(){t(!1)},children:"Start Quiz"})})]})}function w(){return(w=Object(d.a)(o.a.mark((function e(t){var a,c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return(s=Object(d.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},n=function(){return s.apply(this,arguments)},c=function(){return(c=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.b(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(e){return c.apply(this,arguments)},e.abrupt("return",n().catch((function(e){console.log(e),console.log("handled!")})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return w.apply(this,arguments)},N=a.p+"static/media/ftmlogo.005d47b1.png",S=a(31);function A(){return Object(h.jsxs)("div",{className:"Loading",children:[Object(h.jsx)(S.RotateLoader,{className:"loader"}),Object(h.jsx)("img",{src:N,alt:"logo Follow the Money"})]})}var q=a.p+"static/media/icon1.9f89a8fc.jpg",C=a.p+"static/media/icon2.8b7d66fb.jpg",D=a.p+"static/media/icon3.78737bb8.jpg",P=a.p+"static/media/icon4.e009c62b.jpg",z=a.p+"static/media/icon5.f29e9e33.jpg",V=a.p+"static/media/icon6.c46a10ea.jpg",_=a.p+"static/media/icon7.f546b8df.jpg",F=a.p+"static/media/icon8.16c13ccc.jpg",G=a.p+"static/media/icon9.65e6efc9.jpg";function L(){var e=[{question:"Welke partij gaf het meeste uit aan advertenties op Facebook en Google?",answers:[{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"}],type:"gokken",indextype:0,image:q},{question:"Wie is de runner-up?",answers:[{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"}],type:"gokken",indextype:1,image:C},{question:"Welke partij adverteert niet online?",answers:[{answer:"DENK",check:!1,id:"DENK"},{answer:"ChristenUnie",check:!1,id:"ChristenUnie"},{answer:"PvdD",check:!1,id:"PvdD"},{answer:"SP",check:!1,id:"SP"},{answer:"SGP",check:!1,id:"SGP"},{answer:"PVV",check:!0,id:"PVV"}],correct:"PVV",type:"kennis",image:D},{question:"Op welke platforms konden politieke partijen geen advertenties kopen?",answers:[{answer:"LinkedIn & Instagram",check:!1,id:"LI"},{answer:"Twitter & YouTube",check:!1,id:"TY"},{answer:"YouTube & Instagram",check:!1,id:"YI"},{answer:"LinkedIn & Twitter",check:!0,id:"LT"}],correct:"LinkedIn & Twitter",type:"kennis",image:P},{question:"Welke partij adverteerde online met de campagne #10jaarRutte?",answers:[{answer:"VVD",check:!1,id:"VVD"},{answer:"FvD",check:!0,id:"FvD"},{answer:"SP",check:!1,id:"SP"},{answer:"GroenLinks",check:!1,id:"GroenLinks"}],correct:"FvD",type:"kennis",image:z},{question:'Maak de zin af. Wie vorig voorjaar op Google zocht naar "FvD lid worden", kreeg de volgende tekst voorgeschoteld: "FvD lid worden? Psst, word lid van ..."',answers:[{answer:"PvdA",check:!1,id:"PvdA"},{answer:"VVD",check:!0,id:"VVD"},{answer:"SGP",check:!1,id:"SGP"},{answer:"D66",check:!1,id:"D66"}],correct:"VVD",type:"kennis",image:V},{question:"Welke partij gaf meer advertentiegeld uit aan het promoten van de persoonlijke pagina van de lijsttrekker, dan aan de pagina van de partij?",answers:[{answer:"VVD",check:!1,id:"VVD"},{answer:"CDA",check:!0,id:"CDA"},{answer:"PvdD",check:!1,id:"PvdD"},{answer:"ChristenUnie",check:!1,id:"ChristenUnie"}],correct:"CDA",type:"kennis",image:_},{question:"De 27-jarige Sanne uit Groningen houdt ervan om na een lange dag werken lekker op de bank door haar Facebook-feed te scrollen. Van welke partij komt zij de meeste advertenties tegen tijdens het scrollen?",answers:[{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"}],type:"scenario",indextype:0,image:F,category:{gender:"vrouw",age:"25-34",geo:"Groningen"}},{question:"De 19-jarige Dennis kijkt op zondag altijd alle voetbal in z'n studentenkamer in Amsterdam. Ondertussen kijkt hij ook Instagram. Van welke partij ziet hij de meeste advertenties voorbij komen tijdens het scrollen?",answers:[{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"},{answer:"dynamic",check:!1,id:"dynamic"}],type:"scenario",indextype:1,image:G,category:{gender:"man",age:"18-24",geo:"Noord-Holland"}}],t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!0),i=Object(l.a)(r,2),j=i[0],u=i[1],m=Object(c.useState)([]),b=Object(l.a)(m,2),p=b[0],g=b[1],O=Object(c.useState)([]),x=Object(l.a)(O,2),w=x[0],N=(x[1],Object(c.useState)([])),S=Object(l.a)(N,2),L=S[0],I=(S[1],Object(c.useState)([])),R=Object(l.a)(I,2),T=R[0],B=(R[1],Object(c.useState)(null)),E=Object(l.a)(B,2),M=E[0],Q=E[1];return Object(c.useEffect)((function(){function t(){return(t=Object(d.a)(o.a.mark((function t(){var a,c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://docs.google.com/spreadsheets/d/119KqNUnKmnSKvQazSW4hv84UF0GgB5hp8ti_n_G4YGU/export?format=csv",a="https://docs.google.com/spreadsheets/d/1JQv_AlrbjDIEI1FjwQs8GBT5_HncMtMGbAFrWKhm-1Q/export?format=csv",t.next=4,y("https://docs.google.com/spreadsheets/d/119KqNUnKmnSKvQazSW4hv84UF0GgB5hp8ti_n_G4YGU/export?format=csv");case 4:return c=t.sent,t.next=7,y(a);case 7:return n=t.sent,t.next=10,k(e,w,c,T,n,L,Q);case 10:s(!0);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(h.jsx)("div",{className:"App",children:!1===n?Object(h.jsx)(A,{}):Object(h.jsx)(h.Fragment,{children:j?Object(h.jsx)(f,{setStartQuiz:u,quiz:e}):Object(h.jsx)(v,{dynamicAns:w,dynamicAnsMoney:L,setAntwoord:g,antwoorden:p,quiz:e,dataState:T,totData:M,checkIcon:z})})})}var I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),I()}},[[139,1,2]]]);
//# sourceMappingURL=main.e3e74aae.chunk.js.map