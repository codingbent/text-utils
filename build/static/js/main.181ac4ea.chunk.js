(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(6),c=t.n(n);t(15),t(16);function r(e){let a={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgba(36 74 104)":"white"};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container",style:a},o.a.createElement("h3",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"}},"About Us"),o.a.createElement("div",{className:"accordion",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item",style:a},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a},"Analyze Your Text")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:a},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a},"Free To Use")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:a},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a},"Browser Compatibility")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))))}var s=t(3);function i(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode,"-lg bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s.b,{className:"navbar-brand text-".concat("light"===e.mode?"dark":"light"),to:"/"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link active text-".concat("light"===e.mode?"dark":"light"),"aria-current":"page",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link text-".concat("light"===e.mode?"dark":"light"),to:"/about"},"About")))),o.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.togglemode,id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable ","light"===e.mode?"dark":"light"," mode"))))}function m(e){const[a,t]=Object(l.useState)("Enter Your Text");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("h1",{style:{Color:"dark"===e.mode?"white":"black"}},e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control mb-3",onChange:e=>{t(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"exampleFormControlTextarea1",rows:"8",value:a}),o.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary upper",onClick:()=>{let l=a.toUpperCase();t(l),e.showAlert("Converted To Uppercase","Success")}},"Convert to Uppercase"),o.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{let l=a.toLowerCase();t(l),e.showAlert("Converted To Lowercase","Success")}},"Convert to lowercase"),o.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{t(""),e.showAlert("Text Cleared","Success")}},"Clear Text"),o.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{let e=a.split(/[ ]+/);t(e.join(""))}},"Remove Spaces"),o.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{var a=document.getElementById("exampleFormControlTextarea1");a.select(),navigator.clipboard.writeText(a.value),document.getSelection().removeAllRanges(),e.showAlert("Copied to clipboard","Success")}},"Copy Text")),o.a.createElement("div",{className:"container my-3"},o.a.createElement("h1",null,"Your text summary"),o.a.createElement("p",null,a.split(" ").filter(e=>0!==e.length).length," words and ",a.length," characters"),o.a.createElement("h2",null,"Preview"),o.a.createElement("p",null,a.length>0?a:"Nothing to Preview"))))}function d(e){return o.a.createElement("div",{style:{height:"50px"}},e.alert&&o.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},e.alert.msg))}var h=t(2);var u=function(){var[e,a]=Object(l.useState)("light");const[t,n]=Object(l.useState)(null),c=(e,a)=>{n({msg:e,tpye:a}),setTimeout(()=>{n(null,null)},3e3)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(i,{title:"TextUtils",mode:e,togglemode:()=>{"dark"===e?(a("light"),document.body.style.backgroundColor="white",document.body.style.color="#212529",c("light mode enabled","success")):"light"===e&&(a("dark"),document.body.style.backgroundColor="#353e43",document.body.style.color="white",c("dark mode enabled","success"))}}),o.a.createElement(d,{alert:t}),o.a.createElement("div",{className:"container my-3"},o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/about",element:o.a.createElement(r,{mode:e})}),o.a.createElement(h.a,{path:"/",element:o.a.createElement(m,{showAlert:c,heading:"Enter text to analyze",mode:e})})))))};var b=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:o,getLCP:n,getTTFB:c}=a;t(e),l(e),o(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null))),b()},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.181ac4ea.chunk.js.map