import{a as oe,b as re}from"./chunk-3MIZ7XHY.js";import{a as ae}from"./chunk-RPLBZQVF.js";import{a as K,b as O,c as $,d as J,e as Z,f as U,h as ee,j as te,k as ie,o as ne}from"./chunk-F7SOG4CT.js";import{a as W}from"./chunk-Q6HUA6GU.js";import"./chunk-JQ2UG2VY.js";import"./chunk-KHN5GMBI.js";import{a as q}from"./chunk-CL6Z4AWC.js";import{b as Q}from"./chunk-F6FMRNE2.js";import{m as z,n as P}from"./chunk-SGM66K6P.js";import{$ as X,Fb as I,Ga as x,Ja as c,Ka as h,P as S,Q as Y,U as j,_ as y,a as R,aa as B,ab as v,b as T,cb as V,ha as u,ia as g,jb as o,kb as r,lb as p,mb as L,na as E,nb as f,oa as _,tb as H,ub as A,vb as G,xb as s,yb as b}from"./chunk-GD5HRVBO.js";var he=["imageElement"],le=(()=>{let i=class i{constructor(e){this.el=e,this.lang=document.body.lang,this.imageUrl=null,this.save=new _,this.cancel=new _,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.imagePosition={x:0,y:0}}hireEvent(e){this.isDragging=!0;let{clientX:n,clientY:t}=this.getEventCoordinates(e);this.dragStartX=n,this.dragStartY=t}removeEvent(){this.isDragging=!1}startDrag(e){e.preventDefault(),this.hireEvent(e)}stopDrag(){this.removeEvent()}moveImage(e){if(this.isDragging){let{clientX:n,clientY:t}=this.getEventCoordinates(e);this.imagePosition.x+=n-this.dragStartX,this.imagePosition.y+=t-this.dragStartY,this.dragStartX=n,this.dragStartY=t}}getImageStyle(){return{transform:`translate(${this.imagePosition.x}px, ${this.imagePosition.y}px)`}}getEventCoordinates(e){return e instanceof MouseEvent?{clientX:e.clientX,clientY:e.clientY}:e instanceof TouchEvent&&e.touches.length>0?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:0,clientY:0}}crop(){let e=this.imageElement.nativeElement,t=document.getElementById("crop-box").getBoundingClientRect(),l=t.width,m=t.height,d=e.getBoundingClientRect(),pe=d.width,de=d.height,k=e.naturalWidth/pe,N=e.naturalHeight/de,ue=(t.left-d.left)*k,ge=(t.top-d.top)*N,M=l*k,F=m*N,w=document.createElement("canvas");w.width=M,w.height=F,w.getContext("2d")?.drawImage(e,ue,ge,M,F,0,0,M,F);let fe=w.toDataURL("image/png");this.save.emit(fe)}};i.\u0275fac=function(n){return new(n||i)(h(E))},i.\u0275cmp=y({type:i,selectors:[["image-cropper"]],viewQuery:function(n,t){if(n&1&&H(he,5),n&2){let l;A(l=G())&&(t.imageElement=l.first)}},inputs:{imageUrl:"imageUrl"},outputs:{save:"save",cancel:"cancel"},standalone:!0,features:[I],decls:10,vars:4,consts:[["imageElement",""],[1,"cropper-container",3,"mousedown","touchstart","mouseleave","mouseup","touchend","mousemove","touchmove"],["id","uploadProfileImage","alt","Selected Image","draggable","false",3,"src","ngStyle"],[1,"crop-box-overlay"],["id","crop-box",1,"crop-box"],[1,"d-flex","align-items-center","gap-2","my-1"],[1,"w-100","cancel-btn",3,"click"],[1,"w-100","save-btn",3,"click"]],template:function(n,t){if(n&1){let l=L();o(0,"div",1),f("mousedown",function(d){return u(l),g(t.startDrag(d))})("touchstart",function(d){return u(l),g(t.startDrag(d))})("mouseleave",function(){return u(l),g(t.stopDrag())})("mouseup",function(){return u(l),g(t.stopDrag())})("touchend",function(){return u(l),g(t.stopDrag())})("mousemove",function(d){return u(l),g(t.moveImage(d))})("touchmove",function(d){return u(l),g(t.moveImage(d))}),p(1,"img",2,0)(3,"div",3)(4,"div",4),r(),o(5,"div",5)(6,"button",6),f("click",function(){return u(l),g(t.cancel.emit(!1))}),s(7),r(),o(8,"button",7),f("click",function(){return u(l),g(t.crop())}),s(9),r()()}n&2&&(c(),v("src",t.imageUrl,x)("ngStyle",t.getImageStyle()),c(6),b(t.lang=="en"?"cancel":"\u0625\u0644\u063A\u0627\u0621"),c(2),b(t.lang=="en"?"save":"\u062D\u0641\u0638"))},dependencies:[P,z],styles:["[_nghost-%COMP%]{display:block;width:100%}img[_ngcontent-%COMP%]{width:100%;object-fit:cover;position:absolute;cursor:pointer}.cropper-container[_ngcontent-%COMP%]{height:60vh;position:relative;overflow:hidden;width:100%;max-height:350px;background-color:#00000080}.crop-box[_ngcontent-%COMP%], .crop-box-overlay[_ngcontent-%COMP%]{width:200px;height:200px;position:absolute;inset:0;margin:auto;z-index:99;border-radius:100%}.crop-box-overlay[_ngcontent-%COMP%]{border-radius:0;width:100%;height:100%;background:radial-gradient(circle at center,transparent 100px,rgba(5,16,54,.245) 101px)}button[_ngcontent-%COMP%]{font-size:16px;background-color:transparent;outline:none;border:none;padding:8px 12px;cursor:pointer;border-radius:4px}.save-btn[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.cancel-btn[_ngcontent-%COMP%]{background-color:rgb(var(--cancel))}"]});let a=i;return a})();var D=(()=>{let i=class i{loadImage(e){return new Promise((n,t)=>{e.length<=0&&t(null);let l=new FileReader;l.onload=m=>{n({base64:m.target.result,file:e[0]})},l.readAsDataURL(e[0])})}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=S({token:i,factory:i.\u0275fac});let a=i;return a})();var se=(()=>{let i=class i{constructor(e,n){this.uploadController=e,this.el=n,this.onLoad=new _}onUpload(e){let n=e.target.files;this.uploadController.loadImage(n).then(t=>{let l=new FormData;l.append(this.el.nativeElement.name,t.file),this.onLoad.emit(T(R({},t),{formData:l}))})}};i.\u0275fac=function(n){return new(n||i)(h(D),h(E))},i.\u0275dir=B({type:i,selectors:[["input","ngUpload",""]],hostBindings:function(n,t){n&1&&f("change",function(m){return t.onUpload(m)})},outputs:{onLoad:"onLoad"}});let a=i;return a})();var me=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=X({type:i}),i.\u0275inj=Y({providers:[D],imports:[P,le]});let a=i;return a})();var ce=(()=>{let i=class i{constructor(e){this.http=e,this.SERVER_URL=q.baseUrl}update(e){let n=new FormData;return n.append("image",e.image.file),n.append("name",e.name),this.http.post(`${this.SERVER_URL}client/updateProfile`,n)}};i.\u0275fac=function(n){return new(n||i)(j(Q))},i.\u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var We=(()=>{let i=class i{constructor(e,n){this.user=e,this.profileService=n,this.profileForm=new Z({image:new U(this.user.image||null,[O.required]),name:new U(this.user.name,[O.required])}),this.profileFormKeys=re(this.profileForm),this.isInvalid=t=>oe(this.profileForm,t)}onUpload(e){this.profileForm.controls.image.setValue(e)}updateProfile(){this.profileForm.markAllAsTouched(),!this.profileForm.invalid&&this.profileService.update(this.profileForm.value).subscribe(e=>e.status==200?ae({message:e.msg}):null)}};i.\u0275fac=function(n){return new(n||i)(h(W),h(ce))},i.\u0275cmp=y({type:i,selectors:[["app-profile"]],standalone:!0,features:[I],decls:75,vars:11,consts:[[1,"profile","mt-2"],[1,"container"],[1,"row"],[1,"col-md-8"],[1,"info","d-flex","gap-3","mb-3"],[1,"upload_profile_image"],["alt","profile image",1,"img-fluid","me-2",3,"src"],["for","upload"],["src","assets/images/upload.svg","alt","upload",1,"img-contain"],["name","image","id","upload","type","file","accept","images/*","ngUpload","",3,"onLoad"],[1,"d-flex","flex-column"],[1,"update"],[1,"form",3,"formGroup"],[1,"mb-5"],[1,"form"],[1,"row","mb-3"],["for","exampleInputEmail1",1,"col-sm-3","form-label"],[1,"col-sm-9"],["type","text",1,"form-control",3,"formControlName"],["type","text","disabled","","readonly","",1,"form-control",3,"value"],[1,"me-auto"],[1,"btn","btn-primary",3,"click"],[1,"form","mt-5"],["type","text",1,"form-control"],["type","submit",1,"btn","btn-primary","mt-2"],[1,"col-md-4"],[1,"subscribe"],["src","assets/images/subdcrib.gif","alt","",1,"img-fluid"],[1,"mb-1"]],template:function(n,t){n&1&&(o(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),p(6,"img",6),o(7,"label",7),p(8,"img",8),o(9,"input",9),f("onLoad",function(m){return t.onUpload(m)}),r()()(),o(10,"div",10)(11,"h3"),s(12),r(),o(13,"p"),s(14),r()()(),o(15,"div",11)(16,"form",12)(17,"h4",13),s(18,"Update Information"),r(),o(19,"div",14)(20,"div",15)(21,"label",16),s(22,"Full Name"),r(),o(23,"div",17),p(24,"input",18),r()(),o(25,"div",15)(26,"label",16),s(27,"Email address"),r(),o(28,"div",17),p(29,"input",19),r()(),o(30,"div",15)(31,"label",16),s(32,"Phone Number"),r(),o(33,"div",17),p(34,"input",19),r()(),o(35,"div",20)(36,"button",21),f("click",function(){return t.updateProfile()}),s(37,"Save"),r()()()(),o(38,"div",22)(39,"h4",13),s(40,"Security Information"),r(),o(41,"div",14)(42,"div",15)(43,"label",16),s(44,"Old Password"),r(),o(45,"div",17),p(46,"input",23),r()(),o(47,"div",15)(48,"label",16),s(49,"New Password"),r(),o(50,"div",17),p(51,"input",23),r()(),o(52,"div",15)(53,"label",16),s(54,"Re New Password"),r(),o(55,"div",17),p(56,"input",23),r()(),o(57,"button",24),s(58,"Save"),r()()()()(),o(59,"div",25)(60,"div",26),p(61,"img",27),o(62,"h4",28),s(63,"Subscription"),r(),o(64,"p"),s(65,"You are Now in "),o(66,"strong"),s(67,"Basic Plan"),r()(),o(68,"p"),s(69,"1 days left"),r(),o(70,"p")(71,"small"),s(72,"Your Premium plan will expire on "),p(73,"br"),s(74," 9 Mars 2025"),r()()()()()()()),n&2&&(c(5),V("invalid",t.isInvalid("image")),c(),v("src",(t.profileForm.controls.image==null||t.profileForm.controls.image.value==null?null:t.profileForm.controls.image.value.base64)||" assets/images/avatar-icon.svg",x),c(6),b(t.user.name),c(2),b(t.user.email),c(2),v("formGroup",t.profileForm),c(7),V("invalid",t.isInvalid("name")),c(),v("formControlName",t.profileFormKeys.name),c(5),v("value",t.user.email),c(5),v("value",t.user.phone))},dependencies:[me,se,ne,ee,K,$,J,te,ie],styles:[".upload_profile_image[_ngcontent-%COMP%]{position:relative}.upload_profile_image[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;right:0;bottom:10px;width:30px;height:30px;display:block;cursor:pointer}.upload_profile_image[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:lang(ar){right:unset;left:0}.upload_profile_image[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:5px;background-color:#fff;height:100%!important;width:100%}.upload_profile_image[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-color:red}"]});let a=i;return a})();export{We as ProfileComponent};
