import{a as D}from"./chunk-JW7CNLKT.js";import{a as V}from"./chunk-3MIZ7XHY.js";import{a as A}from"./chunk-YLS4W6TF.js";import{a as T,b as h,c as N,d as U,e as k,f as b,h as M,j,k as B,o as G}from"./chunk-AZUFI3AN.js";import"./chunk-ZNR7NDAU.js";import"./chunk-M3I5XXFR.js";import{a as R}from"./chunk-CL6Z4AWC.js";import{b as u}from"./chunk-QOGXEKQL.js";import{c as w}from"./chunk-NRHGNZDW.js";import{b as E,q as C}from"./chunk-YZY77BDX.js";import"./chunk-X23G3QIH.js";import{Ab as l,Bb as s,Jb as x,Ma as i,Na as I,Nb as m,Ob as c,S as g,X as y,ba as F,db as v,fb as f,mb as a,nb as n,ob as d,qb as S}from"./chunk-2ZTQTHCR.js";var L=(()=>{let e=class e{constructor(t){this.http=t,this.SERVER_URL=R.baseUrl}send(t){return this.http.post(`${this.SERVER_URL}client/contactus`,t,{headers:{withLoader:"true"}})}};e.\u0275fac=function(o){return new(o||e)(y(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var Z=(()=>{let e=class e{constructor(t){this.contactService=t,this.navTree=[{label:"page.home",route:u.home},{label:"page.contactUs",route:null}],this.contactForm=new k({title:new b(null,[h.required]),message:new b(null,[h.required])}),this.appRoutes=u,this.isInvalid=o=>V(this.contactForm,o)}send(){this.contactForm.markAllAsTouched(),!this.contactForm.invalid&&this.contactService.send(this.contactForm.value).subscribe({next:t=>A({message:t.msg,redirctTo:u.home})})}};e.\u0275fac=function(o){return new(o||e)(I(L))},e.\u0275cmp=F({type:e,selectors:[["app-contact-us"]],standalone:!0,features:[x],decls:33,vars:21,consts:[[1,"my-3"],[1,"container"],[1,"row"],[3,"navTree"],[1,"contactus","login-signup","mt-5"],[1,"col-md-12","text-center"],[1,"lc-block"],["editable","inline",1,"display-2","mb-0"],[1,"container","py-5"],[1,"row","justify-content-center"],[1,"col-md-4"],[1,"form",3,"formGroup"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","text","formControlName","title",1,"form-control"],["type","email","cols","3","formControlName","message",1,"form-control"],[1,"btn","btn-primary","w-100","mt-2","py-3",3,"click"]],template:function(o,p){o&1&&(a(0,"section",0)(1,"div",1)(2,"div",2),d(3,"app-nav-tree",3),n()()(),a(4,"section",4)(5,"div",1)(6,"div",2)(7,"div",5)(8,"div",6)(9,"h2",7)(10,"b"),l(11),m(12,"translate"),n()(),a(13,"p"),l(14),m(15,"translate"),n()()()(),a(16,"div",8)(17,"div",9)(18,"div",10)(19,"form",11)(20,"div",12)(21,"label",13),l(22),m(23,"translate"),n(),d(24,"input",14),n(),a(25,"div",12)(26,"label",13),l(27),m(28,"translate"),n(),d(29,"textarea",15),n(),a(30,"button",16),S("click",function(){return p.send()}),l(31),m(32,"translate"),n()()()()()()()),o&2&&(i(3),v("navTree",p.navTree),i(8),s(c(12,11,"page.help")),i(3),s(c(15,13,"contactUs.sendUsAMessage")),i(5),v("formGroup",p.contactForm),i(3),s(c(23,15,"label.title")),i(2),f("bg-danger-subtle",p.isInvalid("title")),i(3),s(c(28,17,"label.message")),i(2),f("bg-danger-subtle",p.isInvalid("message")),i(2),s(c(32,19,"button.sendMessage")))},dependencies:[C,G,M,T,N,U,j,B,w,D]});let r=e;return r})();export{Z as ContactUsComponent};
