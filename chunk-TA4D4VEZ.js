import{a as V}from"./chunk-4CSZQDI5.js";import{a as z}from"./chunk-MHHB26EK.js";import"./chunk-F2JZSO5G.js";import{a as H}from"./chunk-CL6Z4AWC.js";import{b}from"./chunk-YMCAWIRB.js";import{c as P}from"./chunk-LFWANRLE.js";import{b as $,k as M,q as E}from"./chunk-32VKKQHO.js";import"./chunk-2AUJZBLV.js";import{$ as x,Ab as U,Ha as C,Hb as S,Ib as I,Jb as R,Ka as i,Kb as f,La as h,Lb as d,Mb as m,Q as B,V as F,ba as w,bb as c,fb as D,hb as g,ib as _,jb as y,kb as n,lb as r,mb as u,oa as L,pb as T,xb as j,yb as s,zb as p}from"./chunk-TKMI5VCA.js";var Q=(t,e)=>[t,e],A=(()=>{let e=class e{constructor(){this.appRoutes=b}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["slide-card"]],inputs:{slide:"slide"},standalone:!0,features:[S],decls:11,vars:9,consts:[[1,"event_card","event_card_actions",3,"routerLink"],["alt","",1,"img-fluid",3,"src"],[1,"d-flex","p-3","align-items-center","justify-content-md-between"],[1,"d-flex","flex-column","text-white"],["href","event-details.html",1,"btn","btn-primary","px-5"]],template:function(a,o){a&1&&(n(0,"a",0),u(1,"img",1),s(2,`
<-- `),n(3,"div",2)(4,"div",3)(5,"h5"),s(6),r()(),n(7,"a",4),s(8),d(9,"translate"),r()(),s(10,`
-->
`),r()),a&2&&(c("routerLink",f(6,Q,o.appRoutes.events.details,o.slide==null?null:o.slide.id)),i(),c("src",o.slide==null?null:o.slide.image,C),i(5),p(o.slide==null?null:o.slide.name),i(2),p(m(9,4,"button.bookTickets")))},dependencies:[E,M,P],styles:["[_nghost-%COMP%]{background-color:inherit}.event_card[_ngcontent-%COMP%]{background:#252443;border:5px solid #252443;border-radius:15px;display:block}.event_card[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]{align-self:center}.event_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:15px;height:450px;width:100%;object-fit:cover}@media (max-width: 576px){.d-flex[_ngcontent-%COMP%]{flex-direction:column}img[_ngcontent-%COMP%]{height:250px!important}}"]});let t=e;return t})();var q=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=w({type:e,selectors:[["","SwiperSlide",""]],standalone:!0});let t=e;return t})();var N=(()=>{let e=class e{constructor(l){this.el=l,this.swiperElement=l.nativeElement}ngOnInit(){Object.assign(this.swiperElement,this.config),this.swiperElement.initialize()}};e.\u0275fac=function(a){return new(a||e)(h(L))},e.\u0275dir=w({type:e,selectors:[["","Swiper",""]],inputs:{config:"config"},standalone:!0});let t=e;return t})();var G=(()=>{let e=class e{constructor(l){this.http=l,this.SERVER_URL=H.baseUrl}get(){return this.http.get(`${this.SERVER_URL}client/home?lat=31.205753&lng=29.924526`,{headers:{withLoader:"true"}})}};e.\u0275fac=function(a){return new(a||e)(F($))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var X=t=>({search_key:t}),O=(t,e)=>[t,e],Y=()=>({order_by:1}),Z=()=>({order_by:2}),ee=t=>({category_id:t});function te(t,e){if(t&1&&(n(0,"swiper-slide",12)(1,"div",36),u(2,"slide-card",37),r()()),t&2){let v=e.$implicit;i(2),c("slide",v)}}function ie(t,e){if(t&1&&(n(0,"swiper-slide",12)(1,"div")(2,"a",18)(3,"h5"),s(4),r(),u(5,"img",38),r()()()),t&2){let v=e.$implicit,l=e.$index,a=T();i(),D("cat-item cat-item",l%5+1,""),i(),c("routerLink",f(9,O,a.appRoutes.events.index,R(7,ee,v.id))),i(2),p(v.name),i(),c("src",v.image,C)("alt",v.name)}}function ne(t,e){if(t&1&&(n(0,"div",22),u(1,"event-card",39),r()),t&2){let v=e.$implicit;i(),c("event",v)}}function re(t,e){if(t&1&&(n(0,"div",22),u(1,"event-card",39),r()),t&2){let v=e.$implicit;i(),c("event",v)}}var we=(()=>{let e=class e{constructor(l,a){this.homeService=l,this.deviceMode=a,this.appRoutes=b,this.RedecentEventconfig={slidesPerView:this.deviceMode.isDesktop()?2:1,spaceBetween:20,autoplay:!0,a11y:{enabled:!0},initialSlide:1,navigation:this.deviceMode.isDesktop(),pagination:this.deviceMode.isDesktop()?!1:{clickable:!0},centeredSlides:!0,injectStylesUrls:["./themes/swiper/home-swiper.css"]},this.categoryConfig={slidesPerView:this.deviceMode.isDesktop()?5:2,spaceBetween:20,navigation:{enabled:!0},injectStylesUrls:["./themes/swiper/home-category-swiper.css"]},this.zoneConfig={slidesPerView:this.deviceMode.isDesktop()?5:2,spaceBetween:10},l.get().subscribe(o=>this.home=o.data)}};e.\u0275fac=function(a){return new(a||e)(h(G),h(z))},e.\u0275cmp=x({type:e,selectors:[["app-home"]],standalone:!0,features:[S],decls:83,vars:55,consts:[["search",""],[1,"hero","py-5","mb-4"],[1,"container","py-4","pt-0"],[1,"row","text-center"],[1,"display-6","fw-bold","text-white","text-uppercase"],[1,"re","text-white"],[1,"searchbar"],["type","text","name","",1,"search_input",3,"placeholder"],[1,"search_icon",3,"routerLink"],[1,"lni","lni-search"],[1,"hero_slider"],["init","false","Swiper","",1,"swiper",3,"config"],["SwiperSlide",""],[1,"categories"],[1,"container"],[1,"row"],[1,"title","d-flex","align-items-center","justify-content-between"],[1,"text-muted"],[3,"routerLink"],["init","false","Swiper","",1,"swiper","cats",3,"config"],[1,"events"],[1,"title"],[1,"col-md-4"],[1,"text-center","justify-content-center"],[1,"btn","btn-outline-white","px-5",3,"routerLink"],[1,"download_app"],[1,"d-flex","align-items-center"],[1,"download"],[1,"lead"],[1,"download-link","border-bottom","pb-3"],["href",""],["src","assets/images/appstore.svg","alt",""],["src","assets/images/playstore.svg","alt",""],[1,"qr-code","mt-3","d-flex","align-items-center"],["src","assets/images/qr-code.png","alt","",1,"img-fluid"],["src","assets/images/download.png","alt","",1,"img-fluid","ms-auto"],[1,"container-fluid"],[3,"slide"],[1,"img-fluid","ms-auto",3,"src","alt"],[3,"event"]],template:function(a,o){if(a&1&&(n(0,"section",1)(1,"div",2)(2,"div",3)(3,"h1",4),s(4),d(5,"translate"),r(),n(6,"p",5),s(7),d(8,"translate"),r(),n(9,"div",6),u(10,"input",7,0),d(12,"translate"),n(13,"a",8),u(14,"i",9),r()()()(),n(15,"div",10)(16,"swiper-container",11),_(17,te,3,1,"swiper-slide",12,g),r()()(),n(19,"section",13)(20,"div",14)(21,"div",15)(22,"div",16)(23,"h3"),s(24),d(25,"translate"),r(),n(26,"small",17)(27,"a",18),s(28),d(29,"translate"),r()()()(),n(30,"swiper-container",19),_(31,ie,6,12,"swiper-slide",12,g),r()()(),n(33,"section",20)(34,"div",14)(35,"div",15)(36,"div",21)(37,"h3"),s(38),d(39,"translate"),r()()(),n(40,"div",15),_(41,ne,2,1,"div",22,g),r(),n(43,"div",23)(44,"a",24),s(45),d(46,"translate"),r()()()(),n(47,"section",20)(48,"div",14)(49,"div",15)(50,"div",21)(51,"h3"),s(52),d(53,"translate"),r()()(),n(54,"div",15),_(55,re,2,1,"div",22,g),r(),n(57,"div",23)(58,"a",24),s(59),d(60,"translate"),r()()()(),n(61,"section",25)(62,"div",14)(63,"div",15)(64,"div",26)(65,"div",27)(66,"h1"),s(67),d(68,"translate"),r(),n(69,"p",28),s(70),d(71,"translate"),r(),n(72,"div",29)(73,"a",30),u(74,"img",31),r(),n(75,"a",30),u(76,"img",32),r()(),n(77,"div",33),u(78,"img",34),n(79,"span"),s(80),d(81,"translate"),r()()(),u(82,"img",35),r()()()()),a&2){let J=j(11);i(4),U(" ",m(5,18,"home.discoverSportEvents"),""),i(3),p(m(8,20,"home.reachRefreshMental")),i(3),c("placeholder",m(12,22,"placeHolder.search")),i(3),c("routerLink",f(44,O,o.appRoutes.events.index,R(42,X,J.value))),i(3),c("config",o.RedecentEventconfig),i(),y(o.home==null?null:o.home.sliders),i(7),p(m(25,24,"home.exploreByCategory")),i(3),c("routerLink",o.appRoutes.categories),i(),p(m(29,26,"home.exploreAll")),i(2),c("config",o.categoryConfig),i(),y(o.home==null?null:o.home.categories),i(7),p(m(39,28,"home.recentEvents")),i(3),y(o.home==null?null:o.home.recent_events),i(3),c("routerLink",f(48,O,o.appRoutes.events.index,I(47,Y))),i(),p(m(46,30,"general.more")),i(7),p(m(53,32,"home.eventsNearMe")),i(3),y(o.home==null?null:o.home.nearest_events),i(3),c("routerLink",f(52,O,o.appRoutes.events.index,I(51,Z))),i(),p(m(60,34,"general.more")),i(8),p(m(68,36,"home.discoverAllEvents")),i(3),p(m(71,38,"home.downloadOurAppNow")),i(10),p(m(81,40,"home.scanTheCode"))}},dependencies:[E,M,N,q,A,V,P],styles:[".swiper[_ngcontent-%COMP%]{height:fit-content}event-card[_ngcontent-%COMP%]  .event_card_actions{transition:.5s;transform:scale(.8);opacity:.5}.swiper-slide-active[_ngcontent-%COMP%]     .event_card_actions{transform:scale(1);opacity:1}.cat-item[_ngcontent-%COMP%]{border:1px solid red}.cat-item1[_ngcontent-%COMP%]{border-color:#f65d19!important}.cat-item1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f65d19}.cat-item2[_ngcontent-%COMP%]{border-color:#fff200!important}.cat-item2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff200}.cat-item3[_ngcontent-%COMP%]{border-color:#2f77ff!important}.cat-item3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2f77ff}.cat-item4[_ngcontent-%COMP%]{border-color:#9c7ef8!important}.cat-item4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#9c7ef8}.cat-item5[_ngcontent-%COMP%]{border-color:#2ec111!important}.cat-item5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2ec111}"]});let t=e;return t})();export{we as HomeComponent};
