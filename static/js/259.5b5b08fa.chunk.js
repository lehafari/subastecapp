"use strict";(self.webpackChunkcliente=self.webpackChunkcliente||[]).push([[259],{49677:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(43504),a=n(56355),i=n(80184),o=function(e){var t=e.breadCrumb,n=void 0===t?[]:t;return n.length?(0,i.jsxs)("ul",{className:"app-breadcrumb breadcrumb",children:[(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(r.rU,{to:"/home",className:"breadcrumb-item",children:(0,i.jsx)(a.xng,{})})}),n.map((function(e){var t=e.link,n=e.titulo;return(0,i.jsx)("li",{className:"breadcrumb-item",children:t?(0,i.jsx)(r.rU,{to:t,children:n}):n},n)}))]}):null},c=function(e){var t=e.btnBackUrl,n=e.btnBackText,o=e.titulo,c=e.descripcion,s=e.Icon;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:[t&&(0,i.jsxs)(r.rU,{to:"/admin"+t,className:"btn btn-dark shadow-0",children:[(0,i.jsx)(a.bUI,{size:10})," ",n]}),(0,i.jsx)(s,{className:"mx-2",color:"#1f439a",style:{verticalAlign:"middle"}}),o]}),c&&(0,i.jsx)("p",{className:"mt-2",children:c})]})},s=(n(72791),function(e){var t=e.btnBackUrl,n=e.btnBackText,r=e.titulo,a=e.Icon,s=e.descripcion,l=e.breadCrumb,u=e.showTitle,d=void 0===u||u;return(0,i.jsxs)("div",{className:"app-content",children:[d?(0,i.jsxs)("div",{className:"app-title",children:[(0,i.jsx)(c,{btnBackUrl:t,btnBackText:n,titulo:r,descripcion:s,Icon:a}),(0,i.jsx)(o,{breadCrumb:l})]}):null,e.children]})})},81173:function(e,t,n){var r=n(28175),a=n(35881),i=n(80184);t.Z=function(){return(0,i.jsx)(a.Z,{children:(0,i.jsxs)(r.ZP,{style:{width:"100%",height:"100%"},speed:1,backgroundColor:"#91d7e4",foregroundColor:"#f7f8fc",children:[(0,i.jsx)("rect",{x:"0",y:"0",width:"400%",height:"10"}),(0,i.jsx)("rect",{x:"0",y:"20",width:"20%",height:"10"}),(0,i.jsx)("rect",{x:"30",y:"20",width:"100%",height:"10"}),(0,i.jsx)("rect",{x:"340",y:"20",width:"60",height:"10"}),(0,i.jsx)("rect",{x:"0",y:"40",width:"400%",height:"10"}),(0,i.jsx)("rect",{x:"0",y:"60",width:"400%",height:"60"}),(0,i.jsx)("rect",{x:"0",y:"130",width:"20",height:"10"}),(0,i.jsx)("rect",{x:"30",y:"130",width:"100%",height:"10"}),(0,i.jsx)("rect",{x:"340",y:"130",width:"60",height:"10"}),(0,i.jsx)("rect",{x:"0",y:"150",width:"190",height:"80"}),(0,i.jsx)("rect",{x:"200",y:"150",width:"200",height:"80"}),(0,i.jsx)("rect",{x:"0",y:"240",width:"70",height:"10"}),(0,i.jsx)("rect",{x:"80",y:"240",width:"400%",height:"10"}),(0,i.jsx)("rect",{x:"0",y:"260",width:"70",height:"10"}),(0,i.jsx)("rect",{x:"80",y:"260",width:"400%",height:"10"})]})})}},66273:function(e,t,n){n.d(t,{K:function(){return p}});var r,a=n(70885),i=n(30168),o=n(72791),c=n(43504),s=n(63463),l=n(56355),u=n(80184),d=s.ZP.div(r||(r=(0,i.Z)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\n\t.dropdown-menu {\n\t\tanimation-name: scaleZ;\n\t\tanimation-duration: 0.2s;\n\t\tanimation-iteration-count: normal;\n\n\t\tbutton,\n\t\ta {\n\t\t\tuser-select: none;\n\t\t\ttransition: all 0.15s ease !important;\n\t\t}\n\t}\n"]))),p=function(e){var t=e.color,n=e.to,r=e.onClick,a=e.children;return n?(0,u.jsx)(c.rU,{className:"dropdown-item btn-outline-".concat(t),to:n,children:a}):(0,u.jsx)("button",{className:"dropdown-item btn-outline-secondary",onClick:r,children:a})};t.Z=function(e){var t=e.children,n=(0,o.useState)(!1),r=(0,a.Z)(n,2),i=r[0],c=r[1],s=(0,o.useRef)(),p=function(){return c(!i)};function m(e){e.target!==s.current&&p()}return(0,o.useEffect)((function(){return i&&document.addEventListener("click",m),function(){document.removeEventListener("click",m)}})),(0,u.jsx)(d,{children:(0,u.jsxs)("div",{className:"dropdown dropleft",children:[(0,u.jsx)("button",{ref:s,className:"btn btn-secondary",onClick:p,type:"button",children:(0,u.jsx)(l.p4t,{style:{pointerEvents:"none"}})}),i&&(0,u.jsx)("div",{className:"dropdown-menu",children:t})]})})}},33023:function(e,t,n){n.d(t,{Z:function(){return w}});var r,a=n(70885),i=n(72791),o=n(30168),c=n(63463),s=n(56355),l=n(73502),u=n(80184),d=(0,c.ZP)(l.f)(r||(r=(0,o.Z)(["\n\tmargin-right: 20px;\n\t.icon {\n\t\tposition: absolute;\n\t\tright: -25px;\n\t\tbottom: 5px;\n\t\tcolor: var(--app-table-icon-search-color);\n\t}\n"]))),p=function(e){var t=e.buttonHeader,n=e.setQ,r=e.q,a=e.canSearch,i=void 0===a||a;return(0,u.jsxs)("div",{className:"d-flex justify-content-md-between justify-content-center flex-column flex-md-row text-center",children:[(0,u.jsx)("div",{className:"mb-3",children:t}),i?(0,u.jsxs)(d,{className:"form-group",children:[(0,u.jsx)("span",{className:"icon",children:(0,u.jsx)(s.U41,{})}),(0,u.jsx)("input",{type:"text",value:r,placeholder:"Buscar...",onChange:function(e){return n(e.target.value)}}),(0,u.jsx)("div",{className:"line",style:{bottom:"auto"}})]}):null]})},m=n(92506),x=function(e){var t=e.center,n=e.name,r=e.value;return(0,u.jsx)("td",{className:"".concat(t||"ID"===n?"text-center":""),children:r})},h=function(e){var t=e.heading,n=e.data,r=e.loading,a=function(e){var n=e.mensaje;return(0,u.jsx)("tr",{children:(0,u.jsx)("td",{className:"text-center",colSpan:Object.keys(t).length,children:n})})};return(0,u.jsx)("tbody",{children:Object.keys(n).length?n.map((function(e,n){return(0,u.jsx)("tr",{children:t.map((function(t){return(0,u.jsx)(x,{center:t.center,name:t.name,dataKey:t.dataKey,value:(0,m.u9)(e,t.dataKey)},t.name)}))},n)})):r?(0,u.jsx)(a,{mensaje:"Cargando datos..."}):(0,u.jsx)(a,{mensaje:"No hay datos actualmente..."})})},f=function(e){var t=e.heading;return t.length?(0,u.jsx)("thead",{className:"bg-secondary",children:(0,u.jsx)("tr",{children:t.map((function(e){return(0,u.jsx)("th",{className:e.center||"ID"===e.name?"text-center":"",children:e.name},e.name)}))})}):null},g=function(e){var t=e.heading,n=e.data,r=e.loading;return(0,u.jsxs)("table",{className:"table table-hover table-bordered",children:[(0,u.jsx)(f,{heading:t}),(0,u.jsx)(h,{heading:t,data:n,loading:r})]})},v=n(96048),b=n.n(v),j=function(e){var t=e.itemsPerPage,n=e.items,r=e.setItemOffset,a=e.pageCount;return(0,u.jsx)(b(),{nextLabel:"Siguiente",onPageChange:function(e){var a=e.selected*t%n.length;r(a)},pageRangeDisplayed:1,pageCount:a,previousLabel:"Anterior",renderOnZeroPageCount:null,pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination pagination-sm mt-md-0 mt-3 justify-content-center justify-content-md-end",activeClassName:"active"})},Z=n(35881),y=n(81173),w=function(e){var t=e.data,n=e.buttonHeader,r=e.loading,o=e.bgHeader,c=e.showPagination,s=void 0===c||c,l=(0,i.useState)(""),d=(0,a.Z)(l,2),m=d[0],x=d[1],h=(0,i.useState)(t),f=(0,a.Z)(h,2),v=f[0],b=f[1],w=(0,i.useState)(0),k=(0,a.Z)(w,2),N=k[0],C=k[1],P=(0,i.useState)(0),I=(0,a.Z)(P,2),D=I[0],A=I[1];(0,i.useEffect)((function(){var e=D+10,n=function(e){var t=e[0]&&Object.keys(e[0]);return e.filter((function(e){return t.some((function(t){var n,r,a;return(null===(n=e[t])||void 0===n||null===(r=n.toString())||void 0===r||null===(a=r.toLowerCase())||void 0===a?void 0:a.indexOf(m.toLowerCase().trim()))>-1}))}))}(t);b(n.slice(D,e)),C(Math.ceil(n.length/10))}),[D,10,t,m]);var E=(0,i.useMemo)((function(){return(0,u.jsx)(p,{buttonHeader:n,setQ:x,q:m,canSearch:e.canSearch})}),[m,n]);return r&&!t.length?(0,u.jsx)(y.Z,{}):(0,u.jsxs)(Z.Z,{bgHeader:o,children:[e.titulo,E,(0,u.jsxs)("div",{className:"table-responsive pb-2",children:[(0,u.jsx)(g,{heading:e.heading,data:v,loading:r}),s?(0,u.jsxs)("div",{className:"d-flex justify-content-md-between text-center justify-content-center flex-md-row flex-column",children:[(0,u.jsxs)("small",{children:["Total registros: ",Object.keys(t).length]}),(0,u.jsx)(j,{pageCount:N,setItemOffset:A,items:t,itemsPerPage:10})]}):null]})]})}},78085:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(74165),a=n(42982),i=n(15861),o=n(70885),c=n(56355),s=n(15597),l=n(21213),u=n(33023),d=n(66273),p=n(80184),m=function(e){var t=e.element,n=e.eliminarProducto,r=e.editarProducto,a=t.idproducto;return(0,p.jsxs)(d.Z,{children:[(0,p.jsxs)(d.K,{color:"primary",to:"/admin/articulos/ver-articulo/".concat(a),children:[(0,p.jsx)(c.dSq,{})," Ver Art\xedculo"]}),(0,p.jsxs)(d.K,{color:"secondary",onClick:function(){return r(a)},children:[(0,p.jsx)(c.tU3,{})," Editar Art\xedculo"]}),n?(0,p.jsxs)(d.K,{color:"danger",onClick:function(){return n(a)},children:[(0,p.jsx)(c.Xm5,{})," Eliminar Art\xedculo"]}):null]})},x=function(e){var t=e.data,n=e.eliminarProducto,r=e.editarProducto;return t.map((function(e){var t;return e.statusHtml=1===e.status?(0,p.jsx)("span",{className:"badge badge-success",children:"Activo"}):(0,p.jsx)("span",{className:"badge badge-danger",children:"Inactivo"}),e.precioText=(0,s.Mw)(null!==(t=e.precio)&&void 0!==t&&t.toFixed(2)?e.precio.toFixed(2):e.precio)+" "+s.D1,e.options=(0,p.jsx)(m,{element:e,eliminarProducto:n,editarProducto:r}),e}))},h=[{name:"ID",dataKey:"idproducto",center:!0},{name:"C\xf3digo",dataKey:"codigo",center:!0},{name:"Nombre",dataKey:"nombre",center:!0},{name:"Marca",dataKey:"marca",center:!0},{name:"Categor\xeda",dataKey:"categoria.nombre",center:!0},{name:"Precio",dataKey:"precioText",center:!0},{name:"Acciones",dataKey:"options",center:!0}],f=n(1413),g=n(76053),v=n(9085),b=n(92506),j=function(e){var t={};return""===e.nombre.trim()&&(t.nombre="El nombre del producto es obligatorio."),e.precio||(t.precio="El precio es obligatorio."),e.categoriaid||(t.categoriaid="Debes elegir una categoria"),t},Z=n(73054),y=[{label:"C\xf3digo",name:"codigo",placeholder:"Ingresa el c\xf3digo del art\xedculo"},{label:"C\xf3digo Tarjeta",name:"codigoTarjeta",placeholder:"Ingresa el c\xf3digo de una Tarjeta"},{label:"Nombre Art\xedculo",required:!0,name:"nombre",placeholder:"Ingresa el nombre del art\xedculo"},{label:"Marca",name:"marca",placeholder:"Ingresa la marca del art\xedculo"},{label:"Precio Art\xedculo",required:!0,name:"precio",placeholder:"Ingresa el precio del art\xedculo",onChange:function(e,t){e.target.value=(0,s.Mw)(e.target.value),t(e)}}],w=function(e){return[{label:"Categoria Art\xedculo",name:"categoriaid",required:!0,placeholder:"Elija una categoria",values:e.map((function(e){return{label:e.nombre,value:e.idcategoria}})),busquedaInput:!0}]},k=n(10300),N=n(13293),C=n(11161),P=n(72791),I=function(e){var t=(0,C.d)().setShowModal,n=(0,N.U)().setLoader,a=(0,k.Z)({limit:10}),o=a.DropzoneContenedor,c=a.files;function u(){return(u=(0,i.Z)((0,r.Z)().mark((function a(i){var o,u,d;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(u in r.prev=0,n(!0,"Subiendo producto..."),o=new FormData,i)Object.hasOwnProperty.call(i,u)&&o.append(u,i[u]);return r.next=6,(0,s.JQ)(c);case 6:return r.sent.map((function(e){return o.append("files",e,e.name)})),r.next=10,l.Z.post("/productos",o,{headers:{"content-type":"multipart/form-data"}});case 10:d=r.sent,v.Am.success(d.data.msg),e.addProducto(d.data.producto),t(!1),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),(0,s.S3)(r.t0);case 19:return r.prev=19,n(!1),r.finish(19);case 22:case"end":return r.stop()}}),a,null,[[0,16,19,22]])})))).apply(this,arguments)}var d=w(e.categorias);return(0,p.jsx)(b.J9,{initialValues:{codigo:"",codigoTarjeta:"",nombre:"",marca:"",descripcion:"",precio:"",status:1,categoriaid:""},onSubmit:function(e){return u.apply(this,arguments)},validate:j,children:(0,p.jsxs)(b.l0,{children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"col-lg-6",children:[y.map((function(e){return(0,p.jsx)(Z.II,(0,f.Z)({},e),e.name)})),d.map((function(e){return(0,P.createElement)(Z.Ph,(0,f.Z)((0,f.Z)({},e),{},{key:e.name}))})),(0,p.jsx)(Z.Mn,{name:"descripcion"})]}),(0,p.jsxs)("div",{className:"col-lg-6",children:[(0,p.jsxs)("h4",{className:"text-center",children:["Subir Im\xe1genes del Producto"," ",(0,p.jsx)(g.IHF,{})]}),(0,p.jsx)("div",{className:"mt-2",children:o})]})]}),(0,p.jsx)(Z.zx,{text:"Crear Art\xedculo"})]})})},D=function(e){var t=(0,C.d)().setShowModal,n=e.producto,a=e.updateProducto,o={idproducto:n.idproducto,codigo:n.codigo,codigoTarjeta:n.codigoTarjeta,nombre:n.nombre,marca:n.marca,descripcion:n.descripcion,precio:(0,s.Mw)(n.precio.toFixed(2)),status:n.status,categoriaid:n.categoriaid};function c(){return(c=(0,i.Z)((0,r.Z)().mark((function e(n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.put("/productos",n);case 3:i=e.sent,v.Am.success(i.data.msg),a(i.data.producto),t(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),(0,s.S3)(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var u=w(e.categorias);return(0,p.jsx)(b.J9,{initialValues:o,validate:j,onSubmit:function(e){return c.apply(this,arguments)},children:(0,p.jsxs)(b.l0,{children:[y.map((function(e){return(0,p.jsx)(Z.II,(0,f.Z)({},e),e.name)})),u.map((function(e){return(0,P.createElement)(Z.Ph,(0,f.Z)((0,f.Z)({},e),{},{key:e.name}))})),(0,p.jsx)(Z.Mn,{name:"descripcion"}),(0,p.jsx)(Z.zx,{text:"Actualizar Producto"})]})})},A=function(e){var t=e.producto,n=(t.idproducto,t.imagenes),o=(0,N.U)().setLoader,c=(0,k.Z)({labelText:"Arrastra y suelte o haz click para subir fotos de su producto",onUpload:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onDeleteFile:function(e){return m.apply(this,arguments)},limit:10}),u=c.DropzoneContenedor,d=c.setFiles;c.files;function m(){return(m=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0,"Eliminando im\xe1gen..."),e.next=4,l.Z.delete("/productos/deleteImagen/".concat(t.id));case 4:n=e.sent,v.Am.success(n.data.msg),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,o(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}return(0,P.useEffect)((function(){!function(){var e=[];n.forEach((function(t){e=[].concat((0,a.Z)(e),[{key:t.id,preview:s.PF+t.filename,id:t.id}])})),d(e)}()}),[]),(0,p.jsxs)("div",{className:"form-group mt-3",children:[(0,p.jsxs)("h4",{className:"text-center",children:["Editar Im\xe1genes del Producto ",(0,p.jsx)(g.IHF,{})]}),u]})},E=n(41297),S=function(e){var t=e.urlRequest,n=(0,N.U)().setLoader,d=(0,C.d)().setModal,m=(0,E.Z)([],{url:t}),f=(0,o.Z)(m,4),g=f[0],v=f[1],b=f[3],j=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0,"Cargando..."),t=function(e){return b([e].concat((0,a.Z)(g)))},e.next=4,l.Z.get("categorias");case 4:i=e.sent,d({content:(0,p.jsx)(I,{addProducto:t,categorias:i.data}),titulo:"Crear Articulo",size:"xl",bgHeader:"primary"}),n(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Z(){return(Z=(0,i.Z)((0,r.Z)().mark((function e(t){var a,i,c,u,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0,"Buscando articulo..."),e.next=4,Promise.all([(0,l.Z)("/productos/getProductoById/".concat(t)),(0,l.Z)("categorias")]);case 4:a=e.sent,i=(0,o.Z)(a,2),c=i[0],u=i[1],m=function(e){return b(g.map((function(n){return n.idproducto===t?e:n})))},d({titulo:"Editar Articulo",content:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-7",children:(0,p.jsx)(D,{updateProducto:m,producto:c.data,categorias:u.data})}),(0,p.jsx)("div",{className:"col-lg-5",children:(0,p.jsx)(A,{producto:c.data})})]}),bgHeader:"primary",size:"xl"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),(0,s.S3)(e.t0);case 15:return e.prev=15,n(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))).apply(this,arguments)}return(0,p.jsx)(u.Z,{data:x({data:g,eliminarProducto:function(e){(0,s.mJ)({title:"\xbfEst\xe1s seguro de eliminar este art\xedculo?",text:"No lo podr\xe1s recuperar!",urlDelete:"/productos/".concat(e),callback:function(){return b(g.filter((function(t){return t.idproducto!==e})))}})},editarProducto:function(e){return Z.apply(this,arguments)}}),heading:h,loading:v,buttonHeader:(0,p.jsx)("div",{className:"btn-group btn-group-sm",children:(0,p.jsx)("button",{className:"btn btn-secondary",onClick:j,children:(0,p.jsx)(c.wEH,{})})})})}},10300:function(e,t,n){var r,a,i,o,c=n(30168),s=n(1413),l=n(74165),u=n(15861),d=n(70885),p=n(42982),m=n(72791),x=n(9085),h=n(65532),f=n(63463),g=n(56355),v=n(15597),b=n(80184),j=f.ZP.div(r||(r=(0,c.Z)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: 50px;\n\tborder-width: 2px;\n\tborder-radius: 3px;\n\tborder-color: ",";\n\tborder-style: ",";\n\tbackground-color: #fafafa;\n\toutline: none;\n\tcursor: pointer;\n\ttransition: border 0.24s ease-in-out;\n\tp {\n\t\tcolor: #000;\n\t\tfont-weight: 600;\n\t\tuser-select: none;\n\t\ttext-align: center;\n\t}\n"])),(function(e){return Z(e)}),(function(e){return e.isDragActive?"solid":"dashed"})),Z=function(e){return e.isDragAccept?"#00e676":e.isDragReject?"#ff1744":e.isFocused||e.isDragActive?"#2196f3":"#2b2b2b"},y=f.ZP.aside(a||(a=(0,c.Z)(["\n\tdisplay: 'flex';\n\tflex-direction: 'column';\n\tflex-wrap: 'wrap';\n\tmargin-top: 16px;\n"]))),w=f.ZP.div(i||(i=(0,c.Z)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tmargin: 16px;\n\tmin-height: 100px;\n\n\tbutton {\n\t\tdisplay: none;\n\t}\n\n\t&:hover button {\n\t\tdisplay: inline;\n\t\tposition: absolute;\n\t\tbottom: -10px;\n\t\tbox-shadow: none !important;\n\t\tleft: 25px;\n\t}\n"]))),k=f.ZP.div(o||(o=(0,c.Z)(["\n\toverflow: hidden;\n\twidth: 120px;\n\theight: 120px;\n\tposition: relative;\n\tdisplay: block;\n\tborder-radius: 10px;\n\tbackground: #999;\n\tbackground: linear-gradient(to bottom, #eee, #ddd);\n\t&:hover {\n\t\t-webkit-filter: blur(2.5px);\n\t\tfilter: blur(2.5px);\n\t}\n\n\timg {\n\t\tobject-fit: cover;\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\tmax-width: 100%;\n\t}\n\n\tsvg {\n\t}\n"])));t.Z=function(e){var t=e.accept,n=void 0===t?{"image/*":[]}:t,r=e.action,a=void 0===r?"multiple":r,i=e.labelText,o=void 0===i?"Arrastra y suelta los archivos aqui para subir":i,c=e.iconPreview,f=e.limit,Z=void 0===f?10:f,N=e.onUpload,C=e.onDeleteFile,P=e.canDelete,I=void 0===P||P,D=(0,m.useState)([]),A=(0,d.Z)(D,2),E=A[0],S=A[1],U=(0,h.uI)({accept:n,onDrop:function(e){var t=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));"multiple"===a&&([].concat((0,p.Z)(E),(0,p.Z)(t)).length<=Z?(S([].concat((0,p.Z)(E),(0,p.Z)(t))),N&&N(t)):x.Am.error("Has excedido la cantidad de im\xe1gnes permitidas que son ".concat(Z)));"single"===a&&(S(t),N&&N(t[0]))},multiple:"multiple"===a}),L=U.getRootProps,T=U.getInputProps,F=U.isDragActive,K=E.map((function(e,t){return(0,b.jsxs)(w,{children:[(0,b.jsx)(k,{children:c?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:c}):(0,b.jsx)("img",{src:e.preview,alt:"preview"})}),I&&(0,b.jsx)("button",{type:"button",onClick:(0,u.Z)((0,l.Z)().mark((function n(){var r,a,i;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:delete E[t],(r=E.filter((function(e){return null!==e}))).sort(),a=0;case 4:if(!(a<r.length)){n.next=13;break}if((i=r[a]).id){n.next=10;break}return n.next=9,(0,v.s3)(i);case 9:r[a].preview=n.sent;case 10:a++,n.next=4;break;case 13:C&&C(e),S(r);case 15:case"end":return n.stop()}}),n)}))),className:"btn btn-danger",children:"Eliminar"})]},t)}));return(0,m.useEffect)((function(){return function(){E.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[E]),{DropzoneContenedor:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(j,(0,s.Z)((0,s.Z)({isDragActive:F},L({className:"dropzone"})),{},{children:[(0,b.jsx)("input",(0,s.Z)({},T())),F?(0,b.jsxs)("p",{children:["Suelta el fichero para subir",(0,b.jsx)(g.DUB,{})]}):(0,b.jsxs)("p",{children:[o," ",(0,b.jsx)(g.DUB,{})]})]})),(0,b.jsx)(y,{children:K})]}),files:E,setFiles:S}}},41297:function(e,t,n){var r=n(74165),a=n(15861),i=n(70885),o=n(72791),c=n(21213);t.Z=function(e,t){var n=t.url,s=t.onCompleteData,l=t.recieveDataFromCompleteData,u=(0,o.useState)(e),d=(0,i.Z)(u,2),p=d[0],m=d[1],x=(0,o.useState)(!0),h=(0,i.Z)(x,2),f=h[0],g=h[1];function v(){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Z)(n);case 3:t=e.sent,s&&(l&&m(s(t.data)?t.data:s(t.data)),s(t.data)),m(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){v()}),[]),[p,f,v,m,g]}},10449:function(e,t,n){var r=n(72791),a=n(16871),i=n(60153);t.Z=function(e){var t,n=e.rolesPermisos,o=e.urlReturn,c=(0,a.s0)(),s=(0,i.E)().usuario;return(0,r.useEffect)((function(){var e;null!==(e=s.rol)&&void 0!==e&&e.idrol&&(n.includes(s.rol.idrol)||c("/admin"+o))}),[null===(t=s.rol)||void 0===t?void 0:t.idrol,c]),{usuario:s}}}}]);
//# sourceMappingURL=259.5b5b08fa.chunk.js.map