(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0db34841":"cfd9c7a7","chunk-272db38e":"5bbecc01","chunk-3a29a136":"fe93cf2c","chunk-3f5accca":"47bdbeab","chunk-6e83ac63":"4b86a734"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0db34841":1,"chunk-272db38e":1,"chunk-3a29a136":1,"chunk-3f5accca":1,"chunk-6e83ac63":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0db34841":"3688f601","chunk-272db38e":"65121af9","chunk-3a29a136":"0bc13f89","chunk-3f5accca":"f2bf84b9","chunk-6e83ac63":"e126515f"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0940":function(t,e,n){},"1aad":function(t,e,n){t.exports=n.p+"img/antioquia.43008ebf.jpg"},"1f33":function(t,e,n){"use strict";n("0940")},2145:function(t,e,n){"use strict";n("eec0")},"37b9":function(t,e,n){t.exports=n.p+"img/andes.b2d84f43.jpg"},"534f":function(t,e,n){t.exports=n.p+"img/logo1.b30e6740.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Menu",{attrs:{menuProp:t.dataAppLoggedIn},on:{logged:t.userLoggedIn}}),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view",{on:{logged:t.userLoggedIn}})],1)],1),n("v-footer",{staticStyle:{background:"#232424"},attrs:{app:""}},[n("Footer")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{color:"#fff"}},[t._v("Este producto es desarrollado por "),n("a",{attrs:{href:"https://github.com/AngelG-JAPY/PlataformaUniversidad-C3G48-G5"}},[t._v("Grupo #5, grupo 48, UTP-Misiontic")])])}],c={},u=c,l=(n("1f33"),n("2877")),d=Object(l["a"])(u,i,s,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"contenedor",attrs:{color:"grey"}},[a("v-toolbar",{staticClass:"mainHeader",staticStyle:{background:"#232424"},attrs:{flat:""}},[a("v-toolbar-title",[a("img",{staticClass:"logo",attrs:{src:n("534f"),alt:""}})]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("button",{staticClass:"btn btn-lindu",attrs:{text:""}},[a("router-link",{staticClass:"text",attrs:{to:"/"}},[t._v("Inicio")])],1),t.menuProp?t._e():a("button",{staticClass:"btn btn-lindu",attrs:{text:""}},[a("router-link",{staticClass:"text",attrs:{to:"/iniciosesion"}},[t._v("Inicio sesión/Registro")])],1),t.menuProp?a("button",{staticClass:"btn btn-lindu",attrs:{id:"btn3",type:"button"}},[a("router-link",{staticClass:"text",attrs:{to:"/ayuda"}},[t._v("Ayuda")])],1):t._e(),t.menuProp?a("button",{staticClass:"btn btn-lindu",attrs:{type:"button"}},[a("router-link",{staticClass:"text",attrs:{to:"/busqueda"}},[t._v("Busqueda")])],1):t._e(),t.menuProp?a("button",{staticClass:"btn btn-lindu",attrs:{type:"button"}},[a("router-link",{staticClass:"text",attrs:{to:"/noticias"}},[t._v("Noticias")])],1):t._e(),t.menuProp?a("button",{staticClass:"btn btn-lindu",attrs:{type:"button"}},[a("router-link",{staticClass:"text",attrs:{to:"/perfil"}},[t._v("Perfil")])],1):t._e(),t.menuProp?a("button",{staticClass:"btn btn-lindu",attrs:{text:""},on:{click:function(e){return t.logOut()}}},[a("span",{staticClass:"text"},[t._v("Cerrar Sesión")])]):t._e()]),a("div",{staticClass:"hidden-sm-and-up"},[a("v-row",{attrs:{justify:"space-around"}},t._l(t.btns,(function(e){var n=e[0],r=e[1];return a("v-menu",{key:n,attrs:{rounded:r,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-app-bar-nav-icon",t._g({on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},n))]}}],null,!0)},[a("v-list",[a("v-list-item",[a("v-list-item-title",[a("router-link",{attrs:{to:"/"}},[t._v("Inicio")])],1)],1),a("v-list-item",[t.menuProp?t._e():a("v-list-item-title",[a("router-link",{attrs:{to:"/iniciosesion"}},[t._v("Inicio sesion/Registro")])],1)],1),a("v-list-item",[t.menuProp?a("v-list-item-title",[a("router-link",{attrs:{to:"/ayuda"}},[t._v("Ayuda")])],1):t._e()],1),a("v-list-item",[t.menuProp?a("v-list-item-title",[a("router-link",{attrs:{to:"/busqueda"}},[t._v("Busqueda")])],1):t._e()],1),a("v-list-item",[t.menuProp?a("v-list-item-title",[a("router-link",{attrs:{to:"/noticias"}},[t._v("Noticias")])],1):t._e()],1),a("v-list-item",[t.menuProp?a("v-list-item-title",[a("router-link",{attrs:{to:"/perfil"}},[t._v("Perfil")])],1):t._e()],1)],1)],1)})),1)],1)],1)],1)},m=[],v={name:"Menu",props:{menuProp:{type:Boolean,default:!1}},data:function(){return{showLogin:!1,btns:[["Custom","b-xl"]],colors:["teal darken-1"]}},methods:{switchDrawer:function(){this.$emit("switch-drawer",!this.drawer)},logOut:function(){sessionStorage.removeItem("correo"),sessionStorage.removeItem("role"),this.$emit("logged",!1),this.$router.push("/")}},computed:{isLoggedIn:function(){var t=sessionStorage.getItem("correo");return void 0!=t}}},b=v,h=(n("2145"),n("6544")),g=n.n(h),_=n("5bc1"),y=n("b0af"),k=n("8860"),x=n("da13"),C=n("5d23"),w=n("e449"),P=n("0fd9"),j=n("2fa4"),V=n("71d9"),I=n("2a7f"),S=Object(l["a"])(b,f,m,!1,null,"235d0c7e",null),A=S.exports;g()(S,{VAppBarNavIcon:_["a"],VCard:y["a"],VList:k["a"],VListItem:x["a"],VListItemTitle:C["b"],VMenu:w["a"],VRow:P["a"],VSpacer:j["a"],VToolbar:V["a"],VToolbarItems:I["a"],VToolbarTitle:I["b"]});var O={components:{Menu:A,Footer:p},data:function(){return{title:"Mi pagina",drawer:!1,dataAppLoggedIn:!1}},methods:{toggleDrawer:function(){this.drawer=!this.drawer,this.title=this.drawer?"Mi otra pagina":"Cesar's page"},userLoggedIn:function(t){this.dataAppLoggedIn=t}}},E=O,T=(n("034f"),n("7496")),L=n("a523"),M=n("553a"),q=n("f6c4"),B=Object(l["a"])(E,r,o,!1,null,null,null),N=B.exports;g()(B,{VApp:T["a"],VContainer:L["a"],VFooter:M["a"],VMain:q["a"]});n("d3b7"),n("3ca3"),n("ddb0");var $=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{staticClass:"imagen"},[n("v-container",[n("v-row",{attrs:{justify:"center",id:"contenedor"}},[n("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[n("div",{staticClass:"mt-15"},[n("h1",[t._v("Acerca de nosotros")]),n("p",[t._v(" Promover la búsqueda de universidades para aquellos jóvenes y adultos "),n("br"),t._v(" que desean encontrar la mejor opción para realizar su educación superior, "),n("br"),t._v(" encontrando en nuestro sitio un gran portafolio de posibles opciones. ")])])]),n("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[n("carousel-3d",{attrs:{"controls-visible":!1,clickable:!0,height:300}},t._l(t.slides,(function(e,a){return n("slide",{key:a,attrs:{index:a}},[n("br"),n("img",{attrs:{src:e.src}}),n("br"),n("span",{attrs:{text:"",color:"white"}},[t._v(t._s(e.text))])])})),1)],1)],1),n("br"),n("br"),n("br"),n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("h2",[t._v(" Contactanos ")]),n("br"),n("div",[n("v-text-field",{attrs:{label:"Nombre","hide-details":"auto"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Descripcion"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("v-btn",{attrs:{depressed:"",color:"blue"},on:{click:function(e){return t.insertContact()}}},[t._v(" Enviar ")])],1)])],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("div",[n("p",{attrs:{id:"iconos"}},[t._v(" Colombia Bogotá (60 1) 343 00 "),n("br"),t._v(" Medellín (60 4) 510 90 "),n("br"),t._v("Cali(60 2) 554 05 "),n("br"),t._v("Cartagena (60 5) 693 44 "),n("br"),t._v("Desde el exterior +57 (60 1) 343 00 ")]),n("v-icon",[t._v("mdi-facebook")]),n("v-icon",[t._v("mdi-twitter")]),n("v-icon",[t._v("mdi-whatsapp")]),n("v-icon",[t._v("mdi-instagram")]),n("v-icon",[t._v("mdi-youtube")])],1)])],1)],1)],1)},D=[],F=(n("b0c0"),n("a4d3"),n("e01a"),n("667c")),G="/api/contacto",R=function(t){return F["a"].post(G,t)},H=n("2af0"),J=n.n(H),z={data:function(){return{sms:[],name:"",email:"",description:"",slides:[{src:n("37b9"),text:"U. Andes"},{src:n("1aad"),text:"U. Antioquia"},{src:n("cf15"),text:"U. Nacional"},{src:n("6035"),text:"U. Pontificia Bolivariana"}]}},components:{Carousel3d:H["Carousel3d"],Slide:H["Slide"]},methods:{insertContact:function(){var t={name:this.name,email:this.email,description:this.description};R(t).then((function(){console.log("Mensanje enviado")})).catch((function(t){return console.error(t)}))}}},K=z,Y=(n("9ed9"),n("8336")),Q=n("62ad"),W=n("132d"),X=n("8654"),Z=n("a844"),tt=Object(l["a"])(K,U,D,!1,null,"3c475ff8",null),et=tt.exports;g()(tt,{VBtn:Y["a"],VCol:Q["a"],VContainer:L["a"],VIcon:W["a"],VRow:P["a"],VTextField:X["a"],VTextarea:Z["a"]}),a["a"].use($["a"]);var nt=[{path:"/",name:"Home",component:et},{path:"/iniciosesion",name:"Iniciosesion",component:function(){return n.e("chunk-3a29a136").then(n.bind(null,"a176"))}},{path:"/busqueda",name:"Busqueda",component:function(){return n.e("chunk-3f5accca").then(n.bind(null,"2c30"))}},{path:"/ayuda",name:"Ayuda",component:function(){return n.e("chunk-272db38e").then(n.bind(null,"89ad"))}},{path:"/noticias",name:"Noticias",component:function(){return n.e("chunk-0db34841").then(n.bind(null,"42a6"))}},{path:"/perfil",name:"Perfil",component:function(){return n.e("chunk-6e83ac63").then(n.bind(null,"68f9"))}}],at=new $["a"]({mode:"history",base:"/",routes:nt}),rt=at,ot=(n("15f5"),n("d1e78"),n("f309"));a["a"].use(ot["a"]),a["a"].use(J.a);var it=new ot["a"]({icons:{iconfont:"md"}});a["a"].config.productionTip=!1,new a["a"]({router:rt,vuetify:it,render:function(t){return t(N)}}).$mount("#app")},6035:function(t,e,n){t.exports=n.p+"img/upb.e17da169.jpg"},"667c":function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a),o=r.a.create({timeout:3e3,headers:{"Content-Type":"application/json"}});e["a"]=o},"85ec":function(t,e,n){},"9ed9":function(t,e,n){"use strict";n("b160")},b160:function(t,e,n){},cf15:function(t,e,n){t.exports=n.p+"img/unacional.bd0ac815.png"},eec0:function(t,e,n){}});
//# sourceMappingURL=app.981fbf5e.js.map