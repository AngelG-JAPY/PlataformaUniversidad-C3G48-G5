(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-272db38e"],{"0798":function(e,t,n){"use strict";var a=n("5530"),s=n("ade3"),i=(n("caad"),n("0c18"),n("10d2")),o=n("afdd"),r=n("9d26"),l=n("f2e7"),c=n("7560"),d=n("2b0e"),u=d["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),p=n("58df"),h=n("d9bd");t["a"]=Object(p["a"])(i["a"],l["a"],u).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(o["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(r["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,n){},"210b":function(e,t,n){},"3c1f":function(e,t,n){},"89ad":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("span",{staticClass:"fondo"}),a("v-row",{attrs:{aling:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-card",{staticClass:"elevation-6 mt-8",attrs:{color:"white"}},[a("v-row",[a("v-col",{staticClass:"text-center"},[a("H2",[e._v("AYUDA")])],1)],1),a("v-row",[a("v-col",{staticClass:"text-center"},[a("v-img",{attrs:{src:n("a6ab"),height:"90",contain:""}})],1)],1),a("v-row",[a("v-col",[a("div",{staticClass:"text-center d-flex pb-4"},[a("v-btn",{on:{click:e.all}},[e._v(" TODAS ")]),a("div",[e._v(e._s(e.panel))]),a("v-btn",{on:{click:e.none}},[e._v(" UNA ")])],1),a("v-expansion-panels",{attrs:{multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("b",[e._v("¿Debo pagar algún valor por la página? ...")])]),a("v-expansion-panel-content",[e._v(" Por ahora no debeerás pagar ningún valor por el uso de la página, es completamente gratuito. ")]),a("v-expansion-panel-header",[a("b",[e._v(" Olvidé mi contraseña ¿Cómo puedo reestablecerla? ...")])]),a("v-expansion-panel-content",[e._v(' Para recuperar tu contraseña dirígete al módulo de inicio de sesion y haz click en "Olvidé mi contraseña", luego sigue las instrucciones que te enviaremos al correo. ')]),a("v-expansion-panel-header",[a("b",[e._v(" ¿Qué beneficios tiene adquirir este producto o servicio? ...")])]),a("v-expansion-panel-content",[e._v(" Podrás seleccionar tus universidades favoritas y tenerlas en tu perfil disponibles a tu servicio, además estarás actualizado con las noticias mas relevantes del mercado de educación. ")]),a("v-expansion-panel-header",[a("b",[e._v("¿Cómo funciona? ...")])]),a("v-expansion-panel-content",[e._v(" Creas una cuenta en nuestra plataforma, que te brindara acceso a una pagina de búsqueda la cual le estableces unos criterios de búsqueda según tu perfil. ")]),a("v-expansion-panel-header",[a("b",[e._v("¿En cuánto tiempo tendré listo mi producto? ...")])]),a("v-expansion-panel-content",[e._v(" En el momento en que escojas tu favoritas podrás re direccionarte a la pagina de la universidad que te interesó para conocer mas … ")]),a("v-expansion-panel-header",[a("b",[e._v("¿Por qué debo utilizar esta plataforma?...")])]),a("v-expansion-panel-content",[e._v(" Te brindamos la oportunidad de realizar búsqueda y filtro a universidades para brindarte un mejor resultado ")])],1)],1)],1)],1),a("v-row",[a("v-col",{staticClass:"justify-center"},[a("h4",{staticClass:"text-center"},[e._v(" ¿ No esta tu pregunta ? Dejanos saber cual es tu duda. ")]),a("v-container",[a("v-textarea",{attrs:{counter:"",label:"texto",rules:e.rules},model:{value:e.mensaje,callback:function(t){e.mensaje=t},expression:"mensaje"}})],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{explore:"",color:"primary"},on:{click:function(t){return e.Preguntar()}}},[e._v("Preguntar")]),a("v-alert",{attrs:{sucess:""}},[e._v(" "+e._s(e.datos)+" ")])],1)],1)],1)],1)],1)],1)},s=[],i=n("2909"),o=(n("d81d"),n("d3b7"),n("ddb0"),n("667c")),r="/api/send-mail",l=function(e){var t={msg:e};return o["a"].post(r,t)},c={data:function(){return{panel:[],items:5,mensaje:"",datos:""}},methods:{Preguntar:function(){var e=this;l(this.mensaje).then((function(){return e.datos="mensaje enviado"})).catch((function(t){return e.datos="Error:"+t.response.data.mensaje}))},all:function(){this.panel=Object(i["a"])(Array(this.items).keys()).map((function(e,t){return t}))},none:function(){this.panel=[]}}},d=c,u=(n("cc3a"),n("2877")),p=n("6544"),h=n.n(p),v=n("0798"),f=n("8336"),b=n("b0af"),m=n("62ad"),x=n("a523"),g=n("5530"),_=n("4e82"),C=n("3206"),y=n("80d2"),j=n("58df"),B=Object(j["a"])(Object(_["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(C["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(g["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(y["l"])(this))}}),A=n("0789"),$=n("9d65"),w=n("a9ad"),O=Object(j["a"])($["a"],w["a"],Object(C["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),P=O.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,t){var n=this;e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((function(){return n.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(A["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(y["l"])(t))])]})))}}),k=n("9d26"),I=n("5607"),E=Object(j["a"])(w["a"],Object(C["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),D=E.extend().extend({name:"v-expansion-panel-header",directives:{ripple:I["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(y["l"])(this,"actions")||[this.$createElement(k["a"],this.expandIcon)];return this.$createElement(A["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(g["a"])(Object(g["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(y["l"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),V=(n("0481"),n("210b"),n("604c")),S=n("d9bd"),q=V["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(g["a"])(Object(g["a"])({},V["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(S["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(S["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(a)}}}),T=n("adda"),R=n("0fd9"),H=n("a844"),M=Object(u["a"])(d,a,s,!1,null,"4f35a5a4",null);t["default"]=M.exports;h()(M,{VAlert:v["a"],VBtn:f["a"],VCard:b["a"],VCol:m["a"],VContainer:x["a"],VExpansionPanel:B,VExpansionPanelContent:P,VExpansionPanelHeader:D,VExpansionPanels:q,VImg:T["a"],VRow:R["a"],VTextarea:H["a"]})},a6ab:function(e,t,n){e.exports=n.p+"img/ayudar.986b36f5.png"},afdd:function(e,t,n){"use strict";var a=n("8336");t["a"]=a["a"]},cc3a:function(e,t,n){"use strict";n("3c1f")}}]);
//# sourceMappingURL=chunk-272db38e.5bbecc01.js.map