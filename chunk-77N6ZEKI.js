import{P as a,Ua as o}from"./chunk-GD5HRVBO.js";var h=(()=>{let e=class e{constructor(){this.favourListItems=o([]),this.isFavourite=t=>!!this.favourListItems().find(s=>s.id==t),this.favourListItems.update(t=>this.get)}get get(){return JSON.parse(localStorage.getItem("favouriteList")||"[]")}get itemLength(){return this.favourListItems().length}add(t){this.favourListItems.update(i=>[...i,t]),this.updateStore()}remove(t){let i=this.favourListItems().findIndex(s=>s.id==t);this.favourListItems.update(s=>s.filter(n=>n.id!=t)),this.updateStore()}toggle(t){this.isFavourite(t?.id)?this.remove(t?.id):this.add(t)}updateStore(){localStorage.setItem("favouriteList",JSON.stringify(this.favourListItems()))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{h as a};
