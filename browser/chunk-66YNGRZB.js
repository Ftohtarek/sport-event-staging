import{a as $}from"./chunk-ALB4B7OD.js";import"./chunk-6VX67YU4.js";import{b as y}from"./chunk-23SNOJPT.js";import{h as D,j,p as V}from"./chunk-XVQXFQXA.js";import{n as R}from"./chunk-3I5E6KI3.js";import{Fb as C,Ja as s,Ka as x,_ as d,a as l,ab as k,b as g,cb as I,gb as h,ha as S,hb as _,ia as T,ib as v,jb as r,kb as p,lb as F,mb as b,nb as u,oa as w,ob as M,xb as f,yb as B}from"./chunk-6GN7ROPZ.js";function O(a,n){if(a&1){let m=b();r(0,"li",6),u("click",function(){let t=S(m).$implicit,i=M();return T(i.change(t))}),r(1,"a",7),f(2),p()()}if(a&2){let m=n.$implicit,e=M();s(),I("active",e.meta.current_page==m),s(),B(m)}}var z=(()=>{let n=class n{constructor(){this.onPageChange=new w,this.pages=(e=4)=>{let t=Math.ceil(this.meta.total/this.meta.per_page),i=Math.ceil(t/2),o=Math.max(this.meta.current_page-Math.floor(e/2),1),c=Math.min(o+e,t);c-o<e&&(o=Math.max(c-e,1));let E=[];for(let P=o;P<=c;P++)E.push(P);return E},this.prev=()=>{this.meta.current_page!=1&&this.onPageChange.emit(g(l({},this.meta),{current_page:this.meta.current_page-1}))},this.next=()=>{this.meta.current_page!=this.meta.last_page&&this.onPageChange.emit(g(l({},this.meta),{current_page:this.meta.current_page+1}))}}change(e){this.onPageChange.emit(g(l({},this.meta),{current_page:e}))}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=d({type:n,selectors:[["app-pagination"]],inputs:{meta:"meta"},outputs:{onPageChange:"onPageChange"},standalone:!0,features:[C],decls:12,vars:0,consts:[["aria-label","Page navigation example"],[1,"pagination","justify-content-center"],[1,"page-item"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-item",3,"click"],[1,"page-link"]],template:function(t,i){t&1&&(r(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),u("click",function(){return i.prev()}),r(4,"span",4),f(5,"\xAB"),p()()(),_(6,O,3,3,"li",2,h),r(8,"li",2)(9,"a",5),u("click",function(){return i.next()}),r(10,"span",4),f(11,"\xBB"),p()()()()()),t&2&&(s(6),v(i.pages()))},dependencies:[R],styles:[".page-item[_ngcontent-%COMP%]{cursor:pointer}"]});let a=n;return a})();function N(a,n){if(a&1&&(r(0,"div",3),F(1,"event-card",6),p()),a&2){let m=n.$implicit;s(),k("event",m)}}var ee=(()=>{let n=class n{constructor(e,t){this.route=e,this.router=t,this.appRoutes=y,this.initialize=i=>{let{events:o,pagination:c}=i.data;this.events=o,this.pagination=c},e.data.subscribe(i=>this.initialize(i))}onPageChange(e){let t=this.route.snapshot.params;this.router.navigate([y.events.index,g(l({},t),{page:e.current_page})])}};n.\u0275fac=function(t){return new(t||n)(x(D),x(j))},n.\u0275cmp=d({type:n,selectors:[["app-events-index"]],standalone:!0,features:[C],decls:7,vars:1,consts:[[1,"categories","events-page","mt-3"],[1,"container"],[1,"row","events"],[1,"col-md-4"],[1,"row","mt-5"],[3,"onPageChange","meta"],[3,"event"]],template:function(t,i){t&1&&(r(0,"section",0)(1,"div",1)(2,"div",2),_(3,N,2,1,"div",3,h),p(),r(5,"div",4)(6,"app-pagination",5),u("onPageChange",function(c){return i.onPageChange(c)}),p()()()()),t&2&&(s(3),v(i.events),s(3),k("meta",i.pagination))},dependencies:[$,V,z]});let a=n;return a})();export{ee as EventsIndexComponent};
