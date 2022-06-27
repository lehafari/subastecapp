"use strict";(self.webpackChunkcliente=self.webpackChunkcliente||[]).push([[371],{49677:function(e,n,a){a.d(n,{Z:function(){return l}});var i=a(43504),r=a(56355),s=a(80184),t=function(e){var n=e.breadCrumb,a=void 0===n?[]:n;return a.length?(0,s.jsxs)("ul",{className:"app-breadcrumb breadcrumb",children:[(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)(i.rU,{to:"/home",className:"breadcrumb-item",children:(0,s.jsx)(r.xng,{})})}),a.map((function(e){var n=e.link,a=e.titulo;return(0,s.jsx)("li",{className:"breadcrumb-item",children:n?(0,s.jsx)(i.rU,{to:n,children:a}):a},a)}))]}):null},c=function(e){var n=e.btnBackUrl,a=e.btnBackText,t=e.titulo,c=e.descripcion,l=e.Icon;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{children:[n&&(0,s.jsxs)(i.rU,{to:"/admin"+n,className:"btn btn-dark shadow-0",children:[(0,s.jsx)(r.bUI,{size:10})," ",a]}),(0,s.jsx)(l,{className:"mx-2",color:"#1f439a",style:{verticalAlign:"middle"}}),t]}),c&&(0,s.jsx)("p",{className:"mt-2",children:c})]})},l=(a(72791),function(e){var n=e.btnBackUrl,a=e.btnBackText,i=e.titulo,r=e.Icon,l=e.descripcion,o=e.breadCrumb,d=e.showTitle,u=void 0===d||d;return(0,s.jsxs)("div",{className:"app-content",children:[u?(0,s.jsxs)("div",{className:"app-title",children:[(0,s.jsx)(c,{btnBackUrl:n,btnBackText:a,titulo:i,descripcion:l,Icon:r}),(0,s.jsx)(t,{breadCrumb:o})]}):null,e.children]})})},91371:function(e,n,a){a.r(n),a.d(n,{default:function(){return A}});var i=a(72791),r=a(56355),s=a(23217),t=a(49677),c=a(7692),l=[{Icon:r.Y2X,title:"Contactos",url:"/settings/contactos",descripcion:"\xa1Mira los mensajes desde aqui!",className:"bg-primary",btnLinkText:"Ver contactos"},{Icon:c.biU,title:"Paquete Bids",url:"/settings/paquete-bids",descripcion:"\xa1Administra los paquete de Bids!",className:"bg-danger",btnLinkText:"Ver Paquete Bids"},{Icon:r.QJe,title:"Subastas Destacadas",url:"/settings/subastas-destacadas",descripcion:"\xa1Empieza destacando las subastas que prefieras!",className:"bg-success",btnLinkText:"Destacar subastas"}],o=a(43504),d=a(80184),u=function(e){return(0,d.jsxs)("div",{className:"card shadow text-center animate__animated animate__fadeInUp",children:[(0,d.jsx)("div",{className:"overflow-img-top ".concat(e.className),children:(0,d.jsx)(e.Icon,{className:"text-light",size:70})}),(0,d.jsxs)("div",{className:"card-body text-light p-4",children:[(0,d.jsx)("h2",{className:"card-title text-dark",children:e.title}),(0,d.jsx)("p",{className:"text-dark",children:e.descripcion}),(0,d.jsx)(o.rU,{to:"/admin"+e.url,className:"btn btn-outline-secondary border-0",children:e.btnLinkText})]})]})},m=a(74165),b=a(1413),x=a(15861),h=a(9085),p=a(92506),f=a(15597),j=function(e){var n={};return""===e.nombre.trim()&&(n.nombre="Debe introducir el nombre del sitio."),n},g=a(21213),v=a(73054),N=a(32698),k=function(){var e=(0,N.q)(),n=e.configuracion,a=e.obtenerConfiguracion,s={nombre:n.nombre,correo:n.correo,direccion:n.direccion,cantidad_subastas_inicio:n.cantidad_subastas_inicio,telefono:n.telefono,web:n.web,orden_categoria:n.orden_categoria,bidsAfiliados:n.bidsAfiliados};function t(){return(t=(0,x.Z)((0,m.Z)().mark((function e(n){var i;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.put("/settings",n);case 3:i=e.sent,h.Am.success(i.data.msg),a(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,f.S3)(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return(0,d.jsx)(p.J9,{initialValues:s,onSubmit:function(e){return t.apply(this,arguments)},validate:j,children:(0,d.jsxs)(p.l0,{children:[(0,d.jsxs)("h4",{className:"text-center",children:["Editar Configuracion ",(0,d.jsx)(r.rU2,{})]}),[{label:"Nombre",name:"nombre",placeholder:"Ingresa el nombre de la empresa o app"},{label:"Tel\xe9fono",name:"telefono",placeholder:"Ingresa el telefono"},{label:"Correo",name:"correo",placeholder:"Ingresa el correo"},{label:"URL WEB",name:"urlweb",placeholder:"Ingresa la url del sitio"},{type:"number",label:"Cantidad Subastas Inicio",name:"cantidad_subastas_inicio",placeholder:"Ingresa la cantidad"},{type:"number",label:"Cantidad Bids Afiliados",name:"bidsAfiliados",placeholder:"Ingresa la cantidad de bids"}].map((function(e){return(0,i.createElement)(v.II,(0,b.Z)((0,b.Z)({},e),{},{key:e.name}))})),(0,d.jsxs)(v.ui,{name:"orden_categoria",label:"Orden Categor\xedas",children:[(0,d.jsx)("option",{value:"ASC",children:"ASC"}),(0,d.jsx)("option",{value:"DESC",children:"DESC"}),(0,d.jsx)("option",{value:"RAND",children:"RAND"}),(0,d.jsx)("option",{value:"ALPHABET",children:"ALPHABET"})]}),(0,d.jsx)(v.gx,{label:"Direcci\xf3n",name:"direccion"}),(0,d.jsx)(v.zx,{text:"Actualizar Configuraci\xf3n"})]})})},C=a(35881),I=a(10449),A=function(){var e=(0,i.useContext)(s.Z),n=e.configuracion;e.obtenerConfiguracion;return(0,I.Z)({rolesPermisos:[f.F0],urlReturn:"/home"}),(0,d.jsx)(t.Z,{titulo:"Configuraciones",descripcion:"Configuraciones del sistema",Icon:r.rU2,btnBackUrl:"/home",btnBackText:"Ir al Inicio",breadCrumb:[{titulo:"Configuracion"}],children:(0,d.jsxs)("div",{className:"row justify-content-center",children:[(0,d.jsx)("div",{className:"col-lg-4",children:(0,d.jsx)(C.Z,{children:Object.keys(n).length&&(0,d.jsx)(k,{})})}),(0,d.jsx)("div",{className:"col-lg-8",children:(0,d.jsx)("div",{className:"form-row",children:l.map((function(e,n){return(0,d.jsx)("div",{className:"col-lg-6 mb-3",children:(0,d.jsx)(u,{title:e.title,descripcion:e.descripcion,Icon:e.Icon,url:e.url,className:e.className,btnLinkText:e.btnLinkText})},n)}))})})]})})}},10449:function(e,n,a){var i=a(72791),r=a(16871),s=a(60153);n.Z=function(e){var n,a=e.rolesPermisos,t=e.urlReturn,c=(0,r.s0)(),l=(0,s.E)().usuario;return(0,i.useEffect)((function(){var e;null!==(e=l.rol)&&void 0!==e&&e.idrol&&(a.includes(l.rol.idrol)||c("/admin"+t))}),[null===(n=l.rol)||void 0===n?void 0:n.idrol,c]),{usuario:l}}}}]);
//# sourceMappingURL=371.90c38cda.chunk.js.map