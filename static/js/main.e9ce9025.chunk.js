(this["webpackJsonpodin-form"]=this["webpackJsonpodin-form"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(11),s=n.n(i),r=n(4),o=(n(18),n(10)),l=n(3),j=n(2),d=n(0),u=function(e){var t=e.info,n=t.company,a=t.year,c=t.role,i=t.city,s=t.id,r=e.onChange;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{name:"company",type:"text",placeholder:"Company Name",value:n,onChange:r}),Object(d.jsx)("input",{name:"year",type:"text",placeholder:"Year/s worked",value:a,onChange:r}),Object(d.jsx)("input",{name:"role",type:"text",placeholder:"Role",value:c,onChange:r}),Object(d.jsx)("input",{name:"city",type:"text",placeholder:"City",value:i,onChange:r}),Object(d.jsx)("input",{name:s,type:"submit",value:"Delete",className:"deletStyle",onClick:e.delete})]})},m=function(e){var t=e.education,n=t.title,a=t.year,c=t.subject,i=t.school,s=t.id;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{name:"title",type:"text",placeholder:"Title",value:n,onChange:e.onChange}),Object(d.jsx)("input",{name:"year",type:"text",placeholder:"Year/s",value:a,onChange:e.onChange}),Object(d.jsx)("input",{name:"subject",type:"text",placeholder:"Subject",value:c,onChange:e.onChange}),Object(d.jsx)("input",{name:"school",type:"text",placeholder:"School",value:i,onChange:e.onChange}),Object(d.jsx)("input",{name:s,type:"submit",value:"Delete",className:"deletStyle",onClick:e.delete})]})},b=function(e){var t=e.info,n=t.name,a=t.lastName,c=t.phone,i=t.email,s=t.address,r=t.comments;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{name:"name",type:"text",placeholder:"Name",value:n,onChange:e.update}),Object(d.jsx)("input",{name:"lastName",type:"text",placeholder:"Lastname",value:a,onChange:e.update}),Object(d.jsx)("div",{className:"textArea",children:Object(d.jsx)("textarea",{placeholder:"Introduce Yourself",name:"comments",value:r,onChange:e.update})}),Object(d.jsx)("input",{name:"phone",type:"text",placeholder:"Phone Number",value:c,onChange:e.update}),Object(d.jsx)("input",{name:"email",type:"text",placeholder:"Email",value:i,onChange:e.update}),Object(d.jsx)("input",{style:{width:"40vw"},name:"address",type:"text",placeholder:"Address",value:s,onChange:e.update})]})},h=function(e){var t=Object(a.useState)({newImage:localStorage.getItem("recent-image")||""}),n=Object(r.a)(t,2),i=n[0],s=n[1],o=function(t){var n;t?e.getPic(t):(n=""===i.newImage?localStorage.getItem("recent-image"):i.newImage,s({newImage:n}))},l=e.getPic,j=c.a.useRef();j.current=l,Object(a.useEffect)((function(){j.current(i.newImage)}),[i.newImage,j]);var u=c.a.useRef(null);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{style:{display:"none"},type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.addEventListener("load",(function(){localStorage.setItem("recent-image",n.result),o(n.result),s({newImage:n.result})})),n.readAsDataURL(t)},ref:u}),Object(d.jsx)("button",{onClick:function(e){u.current.click()},children:"Pick Photo"}),Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("recent-image"),s({newImage:""})},children:"Delet Pic"})]})},O=function(e){var t=Object(a.useState)({pic:"",name:"",lastName:"",comments:"",address:"",email:"",phone:"",interests:"",jobs:[{id:1,company:"",year:"",role:"",city:""}],education:[{id:1,title:"",year:"",subject:"",school:""}]}),n=Object(r.a)(t,2),i=n[0],s=n[1],O=e.getData,p=function(e){s(Object(j.a)(Object(j.a)({},i),{},Object(l.a)({},e.target.name,e.target.value)))},x=function(e,t,n){var a=i[n].findIndex((function(e){return e.id===t})),c=Object(o.a)(i[n]);c[a]=Object(j.a)(Object(j.a)({},c[a]),{},Object(l.a)({},e.target.name,e.target.value)),s(Object(j.a)(Object(j.a)({},i),{},Object(l.a)({},n,c))),console.log(i)},g=function(e,t,n){var a;e.preventDefault(),a=i[t][i[t].length-1]?i[t][i[t].length-1].id+1:1;var c=Object(j.a)(Object(j.a)({},n),{},{id:a});s(Object(j.a)(Object(j.a)({},i),{},Object(l.a)({},t,[].concat(Object(o.a)(i[t]),[c]))))},f=function(e,t){e.preventDefault();var n=parseInt(e.target.name),a=i[t].filter((function(e){return e.id!==n}));s(Object(j.a)(Object(j.a)({},i),{},Object(l.a)({},t,a)))},v=c.a.useRef();v.current=O,Object(a.useEffect)((function(){v.current(i)}),[i,v]);var y=i.jobs,N=i.education,C=[{id:1,company:"",year:"",role:"",city:""},{id:1,title:"",year:"",subject:"",school:""}];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.getData(i)},children:[Object(d.jsx)("div",{className:"mainInfo",children:Object(d.jsx)(b,{info:i,update:p})}),Object(d.jsx)("div",{className:"imgBtn",children:Object(d.jsx)(h,{getPic:function(e){s(Object(j.a)(Object(j.a)({},i),{},{pic:e})),""!==i.pic&&O(i)}})}),Object(d.jsxs)("div",{className:"jobs",children:[Object(d.jsx)("label",{children:1===y.length?"Your Actual Job":"Your Jobs"}),y.map((function(e){return Object(d.jsx)(u,{delete:function(e){return f(e,"jobs")},info:e,onChange:function(t){return x(t,e.id,"jobs")}},e.id)})),Object(d.jsx)("button",{className:"addStyle",onClick:function(e){return g(e,"jobs",C[0])},children:"Add Job"})]}),Object(d.jsxs)("div",{className:"education",children:[Object(d.jsx)("label",{children:"Your studies"}),N.map((function(e){return Object(d.jsx)(m,{delete:function(e){return f(e,"education")},education:e,onChange:function(t){return x(t,e.id,"education")}},e.id)})),Object(d.jsx)("button",{className:"addStyle",onClick:function(e){return g(e,"education",C[1])},children:"Add Education"})]}),Object(d.jsx)("div",{className:"interests"}),Object(d.jsx)("div",{className:"textArea",children:Object(d.jsx)("textarea",{placeholder:"Your interests",name:"interests",value:i.interests,onChange:p})})]})},p=function(e){var t=e.jobs,n=t.company,a=t.role,c=t.year,i=t.city;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"firstLine",children:[Object(d.jsx)("p",{style:{fontWeight:"bold"},children:n}),Object(d.jsx)("p",{children:c})]}),Object(d.jsxs)("div",{className:"secondLine",children:[Object(d.jsx)("p",{children:a}),Object(d.jsx)("p",{children:i})]})]})},x=function(e){var t=e.studies,n=t.title,a=t.subject,c=t.year,i=t.school;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"firstLine",children:[Object(d.jsx)("p",{style:{fontWeight:"bold"},children:n}),Object(d.jsx)("p",{children:c})]}),Object(d.jsxs)("div",{className:"secondLine",children:[Object(d.jsx)("p",{children:a}),Object(d.jsx)("p",{children:i})]})]})},g=function(e){var t,n,a=e.dataForm,c=a.comments,i=a.name,s=a.lastName,r=a.address,o=a.phone,l=a.email,j=a.pic,u=a.interests,m=function(t,n,a){if(!e.dataForm[t])return n;if(e.dataForm[t]){var c=e.dataForm[t][0],i=Object.getOwnPropertyNames(c);return c[i[1]]||c[i[2]]||c[i[3]]||c[i[4]]?a:n}};return Object(d.jsx)("main",{className:"wrapper",children:Object(d.jsxs)("article",{className:"container",children:[Object(d.jsx)("section",{className:"grid-area image",children:Object(d.jsxs)("div",{className:j?null:"picStyle",children:[Object(d.jsx)("img",{className:"cvImg",src:j&&j,alt:j&&"Your pic"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),!j&&"Your Pic",Object(d.jsx)("br",{}),!j&&"Here"]})}),Object(d.jsxs)("section",{className:"grid-area cvName",children:[Object(d.jsxs)("h2",{children:[" ",!i&&"Your name here",i," ",s]}),Object(d.jsxs)("h6",{className:c?"cvComments":"emptyIntro",children:[!c&&"Your introduction here",c]})]}),Object(d.jsxs)("section",{className:o||r||l?"grid-area cvMainInfo":"emptyInfo",children:[!(o||r||l)&&"Your info here",Object(d.jsx)("h6",{style:{marginBottom:"0.5rem",fontSize:"9px"},children:r}),Object(d.jsx)("h6",{style:{marginBottom:"0.5rem",fontSize:"9px"},children:l}),Object(d.jsx)("h6",{children:o})]}),Object(d.jsxs)("section",{className:m("jobs","emptyJobs","grid-area cvJobs"),children:[Object(d.jsx)("p",{className:"compTitle",children:"Experience"}),(null===(t=e.dataForm)||void 0===t?void 0:t.jobs)&&e.dataForm.jobs.map((function(e){return Object(d.jsx)(p,{jobs:e},e.id)}))]}),Object(d.jsxs)("section",{className:m("education","emptyStudies","grid-area cvStudies"),children:[Object(d.jsx)("p",{className:"compTitle",children:"Education"}),(null===(n=e.dataForm)||void 0===n?void 0:n.education)&&e.dataForm.education.map((function(e){return Object(d.jsx)(x,{studies:e},e.id)}))]}),Object(d.jsxs)("section",{className:u?"grid-area cvInterests":"emptyInterests",children:[!u&&"Your Interests here",Object(d.jsx)("p",{style:{marginBottom:"0.5rem",fontSize:"9px"},children:u})]})]})})},f=n(9),v=n.n(f),y=n(12),N=function(){var e=Object(a.useState)({data:{}}),t=Object(r.a)(e,2),n=t[0],c=t[1],i=n.data;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"editable",children:[Object(d.jsx)("h1",{children:"CV Builder"}),Object(d.jsx)(O,{getData:function(e){c({data:e})}}),Object(d.jsx)("button",{style:{margin:"1rem"},name:"final",onClick:function(e){var t=e.target.parentElement.nextElementSibling;v()(t,{scrollY:-window.scrollY,logging:!0,height:window.outerHeight+window.innerHeight,windowHeight:window.outerHeight+window.innerHeight,useCORS:!0}).then((function(e){var t=e.getContext("2d");t.webkitImageSmoothingEnabled=!1,t.msImageSmoothingEnabled=!1,t.imageSmoothingEnabled=!1;var n=e.toDataURL("image/png"),a=new y.a,c=a.getImageProperties(n),i=a.internal.pageSize.getWidth(),s=c.height*i/c.width;a.addImage(n,"PNG",0,0,i,s),a.save("download.pdf")}))},children:"PDF"})]}),Object(d.jsxs)("div",{className:"final",children:[Object(d.jsx)("h1",{children:"Curriculum Vitae"}),Object(d.jsx)(g,{dataForm:i})]})]})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[20,1,3]]]);
//# sourceMappingURL=main.e9ce9025.chunk.js.map