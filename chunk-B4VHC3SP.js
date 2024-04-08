import{a as K}from"./chunk-B3AGQUAX.js";import{Fb as g,La as o,N as F,Nb as oe,P as p,Qa as q,R as w,Sb as ae,T as y,Wa as c,Wb as Y,_ as d,a as f,aa as I,ab as z,b as C,ba as l,db as Z,ha as V,ka as S,m as ne,oa as W,ob as X,pa as v,r as re,x as se}from"./chunk-7FQYCJU7.js";var me=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(q),o(W))},e.\u0275dir=l({type:e});let t=e;return t})(),Ue=(()=>{let e=class e extends me{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=S(e)))(s||e)}})(),e.\u0275dir=l({type:e,features:[c]});let t=e;return t})(),R=new y("");var Re={provide:R,useExisting:p(()=>ye),multi:!0};function He(){let t=K()?K().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Le=new y(""),ye=(()=>{let e=class e extends me{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!He())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(q),o(W),o(Le,8))},e.\u0275dir=l({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&X("input",function(u){return s._handleInput(u.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(u){return s._compositionEnd(u.target.value)})},features:[g([Re]),c]});let t=e;return t})();function m(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function ve(t){return t!=null&&typeof t.length=="number"}var b=new y(""),H=new y(""),$e=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,le=class{static min(e){return We(e)}static max(e){return qe(e)}static required(e){return _e(e)}static requiredTrue(e){return ze(e)}static email(e){return Ze(e)}static minLength(e){return Xe(e)}static maxLength(e){return Ye(e)}static pattern(e){return Ce(e)}static nullValidator(e){return N(e)}static compose(e){return Ee(e)}static composeAsync(e){return we(e)}};function We(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function qe(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function _e(t){return m(t.value)?{required:!0}:null}function ze(t){return t.value===!0?null:{required:!0}}function Ze(t){return m(t.value)||$e.test(t.value)?null:{email:!0}}function Xe(t){return e=>m(e.value)||!ve(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ye(t){return e=>ve(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ce(t){if(!t)return N;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(m(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function N(t){return null}function Ve(t){return t!=null}function De(t){return oe(t)?ne(t):t}function be(t){let e={};return t.forEach(n=>{e=n!=null?f(f({},e),n):e}),Object.keys(e).length===0?null:e}function Ae(t,e){return e.map(n=>n(t))}function Ke(t){return!t.validate}function Me(t){return t.map(e=>Ke(e)?e:n=>e.validate(n))}function Ee(t){if(!t)return null;let e=t.filter(Ve);return e.length==0?null:function(n){return be(Ae(n,e))}}function Fe(t){return t!=null?Ee(Me(t)):null}function we(t){if(!t)return null;let e=t.filter(Ve);return e.length==0?null:function(n){let i=Ae(n,e).map(De);return se(i).pipe(re(be))}}function Ie(t){return t!=null?we(Me(t)):null}function ue(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Se(t){return t._rawValidators}function Oe(t){return t._rawAsyncValidators}function J(t){return t?Array.isArray(t)?t:[t]:[]}function P(t,e){return Array.isArray(t)?t.includes(e):t===e}function de(t,e){let n=J(e);return J(t).forEach(r=>{P(n,r)||n.push(r)}),n}function ce(t,e){return J(e).filter(n=>!P(t,n))}var x=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Fe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},_=class extends x{get formDirective(){return null}get path(){return null}},h=class extends x{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},k=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Je={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Wt=C(f({},Je),{"[class.ng-submitted]":"isSubmitted"}),qt=(()=>{let e=class e extends k{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(h,2))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c]});let t=e;return t})(),zt=(()=>{let e=class e extends k{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(_,10))},e.\u0275dir=l({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[c]});let t=e;return t})();var A="VALID",O="INVALID",D="PENDING",M="DISABLED";function Ne(t){return(L(t)?t.validators:t)||null}function Qe(t){return Array.isArray(t)?Fe(t):t||null}function Pe(t,e){return(L(e)?e.asyncValidators:t)||null}function et(t){return Array.isArray(t)?Ie(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function tt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new F(1e3,"");if(!i[n])throw new F(1001,"")}function it(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new F(1002,"")})}var G=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===O}get pending(){return this.status==D}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(de(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(de(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ce(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(i=>{i.disable(C(f({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(f({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(i=>{i.enable(C(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(f({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let n=De(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(O)?O:A}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Qe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=et(this._rawAsyncValidators)}},he=class extends G{constructor(e,n,i){super(Ne(n),Pe(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){it(this,!0,e),Object.keys(e).forEach(i=>{tt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var E=new y("CallSetDisabledState",{providedIn:"root",factory:()=>$}),$="always";function xe(t,e){return[...e.path,t]}function T(t,e,n=$){Q(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),rt(t,e),ot(t,e),st(t,e),nt(t,e)}function j(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),U(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function B(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function nt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Q(t,e){let n=Se(t);e.validator!==null?t.setValidators(ue(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Oe(t);e.asyncValidator!==null?t.setAsyncValidators(ue(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function U(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Se(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Oe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return B(e._rawValidators,i),B(e._rawAsyncValidators,i),n}function rt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ke(t,e)})}function st(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ke(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ke(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ot(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function at(t,e){t==null,Q(t,e)}function lt(t,e){return U(t,e)}function ee(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ut(t){return Object.getPrototypeOf(t.constructor)===Ue}function dt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function te(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===ye?n=s:ut(s)?i=s:r=s}),r||i||n||null}function ct(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function fe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function pe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ge=class extends G{constructor(e=null,n,i){super(Ne(n),Pe(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(n)&&(n.nonNullable||n.initialValueIsDefault)&&(pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ht=t=>t instanceof Ge;var ft={provide:h,useExisting:p(()=>pt)},ge=Promise.resolve(),pt=(()=>{let e=class e extends h{constructor(i,r,s,a,u,Be){super(),this._changeDetectorRef=u,this.callSetDisabledState=Be,this.control=new Ge,this._registered=!1,this.name="",this.update=new v,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=te(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ee(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){T(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ge.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&Y(r);ge.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?xe(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(o(_,9),o(b,10),o(H,10),o(R,10),o(ae,8),o(E,8))},e.\u0275dir=l({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[d.None,"disabled","isDisabled"],model:[d.None,"ngModel","model"],options:[d.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[g([ft]),c,V]});let t=e;return t})(),Xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=l({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var ie=new y(""),gt={provide:h,useExisting:p(()=>mt)},mt=(()=>{let e=class e extends h{set isDisabled(i){}constructor(i,r,s,a,u){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=u,this.update=new v,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=te(this,s)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&j(r,this,!1),T(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}ee(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&j(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(b,10),o(H,10),o(R,10),o(ie,8),o(E,8))},e.\u0275dir=l({type:e,selectors:[["","formControl",""]],inputs:{form:[d.None,"formControl","form"],isDisabled:[d.None,"disabled","isDisabled"],model:[d.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[g([gt]),c,V]});let t=e;return t})(),yt={provide:_,useExisting:p(()=>vt)},vt=(()=>{let e=class e extends _{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new v,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return T(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){j(i.control||null,i,!1),ct(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,dt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(j(r||null,i),ht(s)&&(T(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);at(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&lt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Q(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(b,10),o(H,10),o(E,8))},e.\u0275dir=l({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&X("submit",function(u){return s.onSubmit(u)})("reset",function(){return s.onReset()})},inputs:{form:[d.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[g([yt]),c,V]});let t=e;return t})();var _t={provide:h,useExisting:p(()=>Ct)},Ct=(()=>{let e=class e extends h{set isDisabled(i){}constructor(i,r,s,a,u){super(),this._ngModelWarningConfig=u,this._added=!1,this.name=null,this.update=new v,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=te(this,a)}ngOnChanges(i){this._added||this._setUpControl(),ee(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return xe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(_,13),o(b,10),o(H,10),o(R,10),o(ie,8))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""]],inputs:{name:[d.None,"formControlName","name"],isDisabled:[d.None,"disabled","isDisabled"],model:[d.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[g([_t]),c,V]});let t=e;return t})();var Te=(()=>{let e=class e{constructor(){this._validator=N}ngOnChanges(i){if(this.inputName in i){let r=this.normalizeInput(i[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):N,this._onChange&&this._onChange()}}validate(i){return this._validator(i)}registerOnValidatorChange(i){this._onChange=i}enabled(i){return i!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=l({type:e,features:[V]});let t=e;return t})();var Vt={provide:b,useExisting:p(()=>Dt),multi:!0};var Dt=(()=>{let e=class e extends Te{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Y,this.createValidator=i=>_e}enabled(i){return i}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=S(e)))(s||e)}})(),e.\u0275dir=l({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&z("required",s._enabled?"":null)},inputs:{required:"required"},features:[g([Vt]),c]});let t=e;return t})();var bt={provide:b,useExisting:p(()=>At),multi:!0},At=(()=>{let e=class e extends Te{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=i=>i,this.createValidator=i=>Ce(i)}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=S(e)))(s||e)}})(),e.\u0275dir=l({type:e,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(r,s){r&2&&z("pattern",s._enabled?s.pattern:null)},inputs:{pattern:"pattern"},features:[g([bt]),c]});let t=e;return t})();var je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=I({type:e}),e.\u0275inj=w({});let t=e;return t})();var Yt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:E,useValue:i.callSetDisabledState??$}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=I({type:e}),e.\u0275inj=w({imports:[je]});let t=e;return t})(),Kt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ie,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:E,useValue:i.callSetDisabledState??$}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=I({type:e}),e.\u0275inj=w({imports:[je]});let t=e;return t})();export{ye as a,le as b,qt as c,zt as d,he as e,Ge as f,pt as g,Xt as h,mt as i,vt as j,Ct as k,Dt as l,At as m,Yt as n,Kt as o};
