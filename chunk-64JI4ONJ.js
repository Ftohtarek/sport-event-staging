import{a as S}from"./chunk-JN3RZJJI.js";import{a as b}from"./chunk-JW7CNLKT.js";import"./chunk-CL6Z4AWC.js";import{b as c}from"./chunk-3V2DYMXD.js";import{c as T}from"./chunk-NRHGNZDW.js";import"./chunk-YZY77BDX.js";import"./chunk-X23G3QIH.js";import{Ab as u,Bb as f,Ia as d,Jb as h,Ma as a,Na as v,Nb as g,Ob as y,ba as m,db as n,mb as r,nb as o,ob as s}from"./chunk-2ZTQTHCR.js";var E=(()=>{let e=class e{constructor(l){this.pageApiService=l,this.appRoutes=c,this.navTree=[{label:"page.home",route:c.home},{label:"page.policy",route:null}],this.pageApiService.get("terms").subscribe(i=>this.data=i.data)}};e.\u0275fac=function(i){return new(i||e)(v(S))},e.\u0275cmp=m({type:e,selectors:[["app-privacy"]],standalone:!0,features:[h],decls:19,vars:6,consts:[[1,"my-3"],[1,"container"],[3,"navTree"],[1,"packages"],[1,"row"],[1,"col-md-12","text-center"],[1,"lc-block"],["editable","inline",1,"display-5","mb-0"],[1,"row","m-4"],[1,"col-lg-12"],["editable","rich"],[3,"innerHTML"]],template:function(i,t){i&1&&(r(0,"section",0)(1,"div",1),s(2,"app-nav-tree",2),o()(),r(3,"section",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h2",7)(9,"b"),u(10),g(11,"translate"),o()()()()(),r(12,"div",1)(13,"div",8)(14,"div",9)(15,"div",6)(16,"div",10),s(17,"h2",11)(18,"p",11),o()()()()()()()),i&2&&(a(2),n("navTree",t.navTree),a(8),f(y(11,4,"page.policy")),a(7),n("innerHTML",t.data==null?null:t.data.title,d),a(),n("innerHTML",t.data==null?null:t.data.description,d))},dependencies:[T,b]});let p=e;return p})();export{E as PrivacyComponent};
