(this["webpackJsonpigreen1.github.io"]=this["webpackJsonpigreen1.github.io"]||[]).push([[0],{18:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),a=i(20),r=i.n(a),o=(i(26),i(15)),c=i(4),l=(i(27),i(3)),u=(i(28),i(18),function(e){var t=e.target,i=e.onIntersect,n=e.threshold,a=void 0===n?.1:n,r=e.rootMargin,o=void 0===r?"0px":r;s.a.useEffect((function(){var e=new IntersectionObserver(i,{rootMargin:o,threshold:a}),n=t.current;return e.observe(n),function(){e.unobserve(n)}}))}),d=(i(29),i(9)),b=i(10),h=i(1);var j=function(e){var t=e.setWeather;return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsxs)("div",{style:{borderBottom:"1px solid black",marginBottom:"20px",width:"200px",margin:"auto"},className:"FooterLinks",children:[Object(h.jsx)("button",{className:"FooterButton",children:Object(h.jsx)("a",{href:"https://github.com/igreen1",className:"InlineLink",children:Object(h.jsx)(b.b,{})})}),Object(h.jsx)("button",{className:"FooterButton",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/ian-green2/",className:"InlineLink",children:Object(h.jsx)(b.c,{})})})]}),Object(h.jsx)("p",{children:"Designed and built (from scratch) by Ian Green"}),Object(h.jsx)("button",{className:"FooterButton",onClick:function(){t("snow")},children:Object(h.jsx)(d.b,{})}),Object(h.jsx)("button",{className:"FooterButton",onClick:function(){t("rain")},children:Object(h.jsx)(d.a,{})})]})},m=i.p+"static/media/placeholder.968ed984.jpg";function g(e){var t=s.a.useState(""),i=Object(l.a)(t,2),n=i[0],a=i[1];return Object(h.jsxs)("div",{className:"".concat(""!==n?"weather ".concat(n):""),children:[Object(h.jsx)(v,{}),Object(h.jsx)(p,{id:"About"}),Object(h.jsx)(f,{}),Object(h.jsx)(p,{id:"Projects"}),Object(h.jsx)(O,{}),Object(h.jsx)(p,{id:"Resume"}),Object(h.jsx)(w,{}),Object(h.jsx)(p,{id:"Contact"}),Object(h.jsx)(I,{style:{marginBottom:"5vh"}}),Object(h.jsx)(j,{setWeather:function(e){a(e===n?"":e)}})]},"Homepage")}var p=function(e){var t=e.id;return console.log(t),Object(h.jsx)("div",{style:{height:"10px"},id:t})},v=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];return u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}}),Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{id:"Home",ref:e,className:"Section Landing ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{id:"Name",children:"Ian Green"}),Object(h.jsxs)("p",{id:"NameSubtitle",children:[Object(h.jsx)("strong",{children:"Full"}),"-stack developer"]})]})})},f=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}});return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"About"}),Object(h.jsxs)("ul",{style:{listStyleType:"none",display:"flex",padding:"0%"},children:[Object(h.jsx)("li",{children:["I'm Ian. I'm pursuing two degrees: a B.S. in Computer Science with a minor in Applied Mathematics\n    and a B.S.E. in Electrical Engineering with a Computer Engineering emphasis with a minor in Pure Mathematics.","Beyond my majors and research, I strive to incorporate service into my life.\n    Through an on-campus service org, Alpha Sigma Nu honor society, and Tau Beta Pi honor society, I perform upwards of 50 hours of service a semester.","In my freetime, I am usually found doing some outdoor activities - I love kayaking, hiking, and bouldering. My current goal is to visit every national park in the next ten years."].map((function(e){return Object(h.jsx)("p",{style:{marginRight:"3px"},className:"Text",children:e})}))}),Object(h.jsx)("img",{style:{marginLeft:"3px"},src:m,className:"InlineImage",alt:"Image of myself on a hike"})]})]})})},O=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}});return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"Highlighted Projects"}),[{title:"VIBAH Graphics Library",subtitle:"A graphics library built on top of WebGL using ReactJS",description:"VIBAH (the group initials) is a graphics library mirroring ThreeJS. It is built on top of WebGL and implements meshes, objects, grouping, animations, shading, and vertex coloring. To view the project, follow the link to its Github Pages website, but note that the pages often load very slowly due to calculations of normals.",image:"assets/vibah.jpg",github:"https://github.com/igreen1/Graphics",website:"https://igreen1.github.io/Graphics/"},{title:"'Custom' Programming Language",subtitle:"A C-like language we built",description:"Custom is built upon the idea of replaceable keywords. All keywords come from a configuration file. We built it to allow us to emulate any other language we wanted in our class - though, it is primarily built on a C-like philosophy.",image:"assets/custom.png",github:"https://github.com/igreen1/Custom",website:"https://igreen1.github.io/Custom"},{title:"GRNSight",subtitle:"Graph visualization tool for gene regulatory networks",description:"This tool shows the suppression/activation networks of gene regulatory networks. I work on the visualization and testing framework, with an emphasis in fixing d3.js issues",image:"assets/GRNSight.png",github:"https://github.com/dondi/GRNsight",website:"https://dondi.github.io/GRNsight/"}].map((function(e){return Object(h.jsx)(x,{title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle,description:null===e||void 0===e?void 0:e.description,image:null===e||void 0===e?void 0:e.image,github:null===e||void 0===e?void 0:e.github,website:null===e||void 0===e?void 0:e.website})}))]})})},x=function(e){return Object(h.jsxs)("div",{className:"Project",children:[Object(h.jsx)("img",{src:e.image,className:"Subsection HeaderImage"}),Object(h.jsx)("h2",{children:e.title}),Object(h.jsx)("h3",{className:"Subtitle",children:e.subtitle}),Object(h.jsxs)("div",{className:"Links",children:[e.github&&Object(h.jsx)("a",{href:e.github,children:Object(h.jsx)(d.d,{})}),e.website&&Object(h.jsx)("a",{href:e.website,children:Object(h.jsx)(d.c,{})})]}),Object(h.jsxs)("p",{className:"Text",children:[" ",null===e||void 0===e?void 0:e.description," "]})]})},w=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}});return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"Professional Experience"}),[{title:"John Hopkins University - Applied Physics Laboratory",subtitle:"Intern: Software Developer for Testing and Evaluation",description:"As an intern in the Air and Missile Defense Sector, Combat Systems Testing and Evaluation team,         I worked on improving and automating the workflow, working on data intake of large raw datsets. I worked in Pandas and propietary software.         I learned to work with large datasets, to integrate various softwares smoothly, and to use data analytic tools.",image:"assets/sew.png",website:"https://www.jhuapl.edu/OurWork/AirandMissileDefense"},{title:"Loyola Marymount University - Various Departments",subtitle:"Teaching Assistant",description:"I have worked for various departments and various classes as a TA at LMU.         In the Math department, I worked with the Business Calculus class as well as the general Calculus I, II, and III classes as a TA.         In the EE department, I worked as a TA for Algorithms and Applications, a class teaching MATLAB. In these positions,         I've learned better communication when helping students, improved my skills in math and programming, and trained my scheduling abilities.",image:"assets/lmu.png"}].map((function(e){return Object(h.jsx)(x,{title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle,description:null===e||void 0===e?void 0:e.description,image:null===e||void 0===e?void 0:e.image,website:null===e||void 0===e?void 0:e.website})}))]})})},I=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];return u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}}),Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"Contact"}),Object(h.jsx)("p",{children:"At some point, I may add a form here. For now, contact me via email!"}),Object(h.jsx)("button",{className:"OverlayButton",children:Object(h.jsx)("a",{className:"InlineLink",style:{fontSize:"70%"},href:"mailto:iangreen2.00@gmail.com",children:"iangreen2.00@gmail.com"})})]})})};i(31);function y(e){var t=s.a.useState(""),i=Object(l.a)(t,2),n=i[0],a=i[1];return Object(h.jsxs)("div",{className:"FunHomepage ".concat(""!==n?"weather ".concat(n):""),children:[Object(h.jsx)(N,{}),Object(h.jsx)(k,{id:"About"}),Object(h.jsx)(S,{}),Object(h.jsx)(k,{id:"Projects"}),Object(h.jsx)(A,{}),Object(h.jsx)(k,{id:"Resume"}),Object(h.jsx)(L,{}),Object(h.jsx)(k,{id:"Contact"}),Object(h.jsx)(C,{style:{marginBottom:"5vh"}}),Object(h.jsx)(j,{setWeather:function(e){a(e===n?"":e)}})]},"FunHomepage")}var k=function(e){var t=e.id;return console.log(t),Object(h.jsx)("div",{style:{height:"10px"},id:t})},N=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];return u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}}),Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{id:"Home",ref:e,className:"Section Landing ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{id:"Name",children:"Ian Green"}),Object(h.jsxs)("p",{id:"NameSubtitle",children:[Object(h.jsx)("strong",{children:"Full"}),"-stack developer"]})]})})},S=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}});return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"About"}),Object(h.jsxs)("ul",{style:{listStyleType:"none",display:"flex",padding:"0%"},children:[Object(h.jsx)("li",{children:["I'm Ian. I'm pursuing two degrees: a B.S. in Computer Science with a minor in Applied Mathematics\n    and a B.S.E. in Electrical Engineering with a Computer Engineering emphasis with a minor in Pure Mathematics. I am in two on-campus research labs - the LMU Bioinformatics Lab and the LMU Cubesat Program.\n    I also usually work multiple jobs on campus, holding simulataneous TA positions in the EE and Math departments as well as multiple tutoring positiosn","Beyond my majors and research, I actively participate in service opportunities. \n    As a member of an on-campus service org, Alpha Sigma Nu honor society, and Tau Beta Pi honor society, I perform upwards of 50 hours of service a semester. Even over COVID, I performed 40 hours of service per semester","In my freetime, I am usually found doing some outdoor activities - I love kayaking, hiking, and bouldering. My current goal is to visit every national park in the next ten years.","I am looking for post-grad opportunities (2022). While my abilities span the entire stack, I am mostly interested in 'low-level' programming eg., firmware."].map((function(e){return Object(h.jsx)("p",{style:{marginRight:"3px"},className:"Text",children:e})}))}),Object(h.jsx)("img",{style:{marginLeft:"3px"},src:m,className:"InlineImage",alt:"Image of myself on a hike"})]})]})})},A=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}});return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"Highlighted Projects"}),[{title:"VIBAH Graphics Library",subtitle:"A graphics library built on top of WebGL using ReactJS",description:"VIBAH (the group initials) is a graphics library mirroring ThreeJS. It is built on top of WebGL and implements meshes, objects, grouping, animations, shading, and vertex coloring. To view the project, follow the link to its Github Pages website, but note that the pages often load very slowly due to calculations of normals.",image:"assets/vibah.jpg",github:"https://github.com/igreen1/Graphics",website:"https://igreen1.github.io/Graphics/"},{title:"'Custom' Programming Language",subtitle:"A C-like language we built",description:"Custom is built upon the idea of replaceable keywords. All keywords come from a configuration file. We built it to allow us to emulate any other language we wanted in our class - though, it is primarily built on a C-like philosophy.",image:"assets/custom.png",github:"https://github.com/igreen1/Custom",website:"https://igreen1.github.io/Custom"},{title:"GRNSight",subtitle:"Graph visualization tool for gene regulatory networks",description:"This tool shows the suppression/activation networks of gene regulatory networks. I work on the visualization and testing framework, with an emphasis in fixing d3.js issues",image:"assets/GRNSight.png",github:"https://github.com/dondi/GRNsight",website:"https://dondi.github.io/GRNsight/"}].map((function(e){return Object(h.jsx)(T,{title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle,description:null===e||void 0===e?void 0:e.description,image:null===e||void 0===e?void 0:e.image,github:null===e||void 0===e?void 0:e.github,website:null===e||void 0===e?void 0:e.website})}))]})})},T=function(e){return Object(h.jsxs)("div",{className:"Project",children:[Object(h.jsx)("img",{src:e.image,className:"Subsection HeaderImage"}),Object(h.jsx)("h2",{children:e.title}),Object(h.jsx)("h3",{className:"Subtitle",children:e.subtitle}),Object(h.jsxs)("div",{className:"Links",children:[e.github&&Object(h.jsx)("a",{href:e.github,children:Object(h.jsx)(d.d,{})}),e.website&&Object(h.jsx)("a",{href:e.website,children:Object(h.jsx)(d.c,{})})]}),Object(h.jsxs)("p",{className:"Text",children:[" ",null===e||void 0===e?void 0:e.description," "]})]})},L=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}});return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"Professional Experience"}),[{title:"John Hopkins University - Applied Physics Laboratory",subtitle:"Intern: Software Developer on the Testing and Evaluation Team",description:"As an intern in the Air and Missile Defense Sector, Combat Systems Testing and Evaluation team,         I worked on improving and automating the workflow, working on data intake of large raw datsets. I worked in Pandas and propietary software.         I learned to work with large datasets, to integrate various softwares smoothly, and to use data analytic tools.",image:"assets/vibah.jpg"},{title:"Loyola Marymount University - Various Departments",subtitle:"Teaching Assistant",description:"I have worked for various departments and various classes as a TA at LMU.         In the Math department, I worked with the Business Calculus class as well as the general Calculus I, II, and III classes as a TA.         In the EE department, I worked as a TA for Algorithms and Applications, a class teaching MATLAB. In these positions,         I've learned better communication when helping students, improved my skills in math and programming, and trained my scheduling abilities.",image:"assets/vibah.jpg"}].map((function(e){return Object(h.jsx)(T,{title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle,description:null===e||void 0===e?void 0:e.description,image:null===e||void 0===e?void 0:e.image,website:null===e||void 0===e?void 0:e.website})}))]})})},C=function(){var e=s.a.useRef(),t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];return u({target:e,onIntersect:function(t,i){Object(l.a)(t,1)[0].isIntersecting&&(a(!0),i.unobserve(e.current))}}),Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{ref:e,className:"Section ".concat(n?"visible":"invisible"),children:[Object(h.jsx)("h1",{className:"Title",children:"Contact"}),Object(h.jsx)("p",{children:"At some point, I may add a form here. For now, contact me via email!"}),Object(h.jsx)("button",{className:"OverlayButton",children:Object(h.jsx)("a",{className:"InlineLink",style:{fontSize:"70%"},href:"mailto:iangreen2.00@gmail.com",children:"iangreen2.00@gmail.com"})})]})})};function B(e){var t=e.space,i=e.unit,n=e.id;return Object(h.jsx)("div",{id:n||"",style:{margin:"0",height:t+i}})}i(32);var F=[{name:"Home",link:"/"},{name:"About",link:"#About"},{name:"Projects",link:"#Projects"},{name:"Professional",link:"#Resume"},{name:"Contact",link:"#Contact"}],P=Object(c.f)((function(e){var t=s.a.useState(!1),i=Object(l.a)(t,2),n=i[0],a=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{id:"Navbar",children:[Object(h.jsx)("button",{onClick:function(){a(!n)},id:"ExpandNavbarButton",children:Object(h.jsx)(b.a,{})}),Object(h.jsx)("div",{className:n?"Navbarlist shownav":"Navbarlist",children:F.map((function(e){return Object(h.jsx)("button",{className:"NavbarButton",onClick:function(t){t.preventDefault(),window.location.href=e.link},children:e.name},e.name+"NarbarButton")}))})]}),Object(h.jsx)(B,{id:"NavbarSpacer",space:"50",unit:"px"})]})}));var R=function(){return Object(h.jsxs)(s.a.Fragment,{className:"Overlay",children:[Object(h.jsxs)("div",{className:"LeftBar",children:[Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:"OverlayButton",children:Object(h.jsx)("a",{href:"https://github.com/igreen1",className:"InlineLink",children:Object(h.jsx)(b.b,{})})})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:"OverlayButton",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/ian-green2/",className:"InlineLink",children:Object(h.jsx)(b.c,{})})})}),Object(h.jsx)("li",{className:"VerticalLine"})]}),Object(h.jsxs)("div",{className:"RightBar",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"mailto:iangreen2.00@gmail.com",className:"Email InlineLink",children:"iangreen2.00@gmail.com"})}),Object(h.jsx)("li",{className:"VerticalLine",style:{width:"8px"}})]})]})},E=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(P,{}),Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{path:"/",exact:!0,component:g}),Object(h.jsx)(c.a,{path:"/fun",exact:!0,component:y})]}),Object(h.jsx)(R,{})]})})},G=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),G()}},[[38,1,2]]]);
//# sourceMappingURL=main.731402ed.chunk.js.map