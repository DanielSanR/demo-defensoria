"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["src_app_form-kid_form-kid_module_ts"],{2788:(H,_,a)=>{a.r(_),a.d(_,{FormKidPageModule:()=>z});var l=a(4666),h=a(609),g=a(8775),s=a(2004),d=a(8891),p=a(1670);a(1838);const v=JSON.parse('[{"key":"victima","title":"\xbfQui\xe9n necesita ayuda?","type":"item","multiple":false,"icon":false,"preguntas":[{"id":1,"val":"Yo"},{"id":2,"val":"Mi hermano/a"},{"id":3,"val":"Mi amigo/a"},{"id":4,"val":"Otra persona"}]},{"key":"motivo","title":"\xbfPor qu\xe9 necesitas ayuda? Podes elegir m\xe1s de una","type":"item","multiple":true,"icon":true,"preguntas":[{"id":1,"val":"Hay amenazas o insultos","icon":"../../assets/icon/form/question1p0.svg"},{"id":2,"val":"Se proh\xedbe la comida","icon":"../../assets/icon/form/question1p1.svg"},{"id":3,"val":"Hay encierros por mucho tiempo","icon":"../../assets/icon/form/question1p2.svg"},{"id":4,"val":"Hay golpes,cortes,quemaduras,etc.","icon":"../../assets/icon/form/question1p3.svg"},{"id":5,"val":"Hay ni\xf1os trabajando","icon":"../../assets/icon/form/question1p4.svg"},{"id":6,"val":"Hay manoseos en el cuerpo o abrazos no agradables","icon":"../../assets/icon/form/question1p5.svg"},{"id":8,"val":"Hacen ver cosas no agradables por la computadora","icon":"../../assets/icon/form/question1p6.svg"},{"id":8,"val":"Otra raz\xf3n","icon":"../../assets/icon/form/interrogation.svg"}]},{"key":"agresor","type":"item","multiple":true,"icon":false,"title":"\xbfQui\xe9n te lastima o lastima a quien conoc\xe9s?","preguntas":[{"id":1,"val":"Pap\xe1/Mam\xe1"},{"id":2,"val":"Padrastro/Madrastra"},{"id":3,"val":"T\xedo/T\xeda"},{"id":4,"val":"Vecino/a"},{"id":5,"val":"Maestro/a"},{"id":6,"val":"Profesor/a"},{"id":7,"val":"Un amigo/a"},{"id":8,"val":"Un extra\xf1o/a"},{"id":9,"val":"Otro motivo. Especificar"},{"id":9,"val":"No lo quiero decir"}]},{"key":"genero_agresor","title":" G\xe9nero de la persona agresora","type":"item","multiple":false,"icon":true,"preguntas":[{"id":1,"val":"Mujer","icon":"../../assets/icon/form/question4p1.svg"},{"id":2,"val":"Varon","icon":"../../assets/icon/form/question4p2.svg"}]},{"key":"edad","type":"range","multiple":false,"icon":false,"title":"Cu\xe1ntos a\xf1os ten\xe9s?"},{"key":"genero","type":"item","multiple":false,"icon":true,"title":"\xbfCu\xe1l es tu g\xe9nero?","preguntas":[{"id":1,"val":"Mujer","icon":"../../assets/icon/form/question6p1.svg"},{"id":2,"val":"Varon","icon":"../../assets/icon/form/question6p2.svg"},{"id":3,"val":"Prefiero no decirlo","icon":"../../assets/icon/form/question6p3.svg"}]},{"key":"lugar","title":"\xbfD\xf3nde pasa todo?","type":"item","multiple":true,"icon":true,"preguntas":[{"id":1,"val":"Mi casa","icon":"../../assets/icon/form/question7p1.svg"},{"id":2,"val":"Casa del vecino","icon":"../../assets/icon/form/question7p2.svg"},{"id":3,"val":"Casa de un familiar","icon":"../../assets/icon/form/question7p3.svg"},{"id":4,"val":"Escuela","icon":"../../assets/icon/form/question7p4.svg"},{"id":5,"val":"Club","icon":"../../assets/icon/form/question7p5.svg"},{"id":6,"val":"En internet/ instagram/ facebook/ juegos","icon":"../../assets/icon/form/question7p6.svg"},{"id":7,"val":"Otro. Especificar","icon":"../../assets/icon/form/interrogation.svg"}]}]');var x=a(5080),e=a(2135),b=a(9048);const k=["swiper"];function C(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"ion-list",20)(1,"ion-range",21),e.NdJ("ionChange",function(o){e.CHM(i);const c=e.oxw(4);return e.KtG(c.ageRange(o))}),e.qZA()()}2&n&&(e.xp6(1),e.Q6J("min",0)("max",12)("value",5)("pin",!0)("snaps",!0))}const w=function(n){return{"--background":n}},F=function(n){return{"--color":n}};function P(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"ion-item",25),e.NdJ("click",function(){const o=e.CHM(i),c=o.$implicit,u=o.index,m=e.oxw(4).$implicit,f=e.oxw(2);return e.KtG(f.select(c,m,u))}),e.TgZ(1,"ion-label",26),e._uU(2),e.qZA()()}if(2&n){const i=r.$implicit,t=e.oxw(6);e.Q6J("ngStyle",e.VKq(3,w,!0===(null==i?null:i.isChecked)?t.backgroundChecked:t.background)),e.xp6(1),e.Q6J("ngStyle",e.VKq(5,F,!0===(null==i?null:i.isChecked)?"#FFF":"#000")),e.xp6(1),e.hij(" ",i.val,"")}}function y(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,P,3,7,"ion-item",24),e.qZA()),2&n){const i=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngForOf",i.preguntas)}}const T=function(n){return{"--border-color":n}};function M(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"ion-item",28),e.NdJ("click",function(){const o=e.CHM(i),c=o.$implicit,u=o.index,m=e.oxw(4).$implicit,f=e.oxw(2);return e.KtG(f.select(c,m,u))}),e.TgZ(1,"ion-label",29),e._uU(2),e.qZA(),e._UZ(3,"ion-icon",30),e.qZA()}if(2&n){const i=r.$implicit,t=e.oxw(6);e.Q6J("ngStyle",e.VKq(3,T,!0===(null==i?null:i.isChecked)?t.backgroundChecked:t.background)),e.xp6(2),e.hij(" ",i.val,""),e.xp6(1),e.Q6J("src",i.icon)}}function Z(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,M,4,5,"ion-item",27),e.qZA()),2&n){const i=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngForOf",i.preguntas)}}function K(n,r){if(1&n&&(e.TgZ(0,"ion-list",22),e.YNc(1,y,2,1,"div",23),e.YNc(2,Z,2,1,"div",23),e.qZA()),2&n){const i=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",!1===i.icon),e.xp6(1),e.Q6J("ngIf",!0===i.icon)}}function O(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"div",11)(1,"div",12)(2,"span",13)(3,"ion-icon",14),e.NdJ("click",function(){e.CHM(i);const o=e.oxw(3);return e.KtG(o.close())}),e.qZA()(),e.TgZ(4,"div",15)(5,"label")(6,"p",16),e._uU(7),e.qZA(),e.TgZ(8,"p",16),e._uU(9),e.qZA()()()(),e.TgZ(10,"ion-col",17),e.YNc(11,C,2,5,"ion-list",18),e.YNc(12,K,3,2,"ion-list",19),e.qZA()()}if(2&n){const i=e.oxw(),t=i.index,o=i.$implicit;e.xp6(7),e.hij(" ",t+1," / 7 "),e.xp6(2),e.hij(" ",o.title," "),e.xp6(1),e.Q6J("ngSwitch",o.type),e.xp6(1),e.Q6J("ngSwitchCase","range"),e.xp6(1),e.Q6J("ngSwitchCase","item")}}function q(n,r){1&n&&e.YNc(0,O,13,5,"ng-template",10)}function A(n,r){1&n&&(e.TgZ(0,"div",31)(1,"div",32)(2,"ion-label",33),e._UZ(3,"ion-icon",34),e.qZA()(),e.TgZ(4,"div",35)(5,"ion-thumbnail",36),e._UZ(6,"ion-icon",37),e.qZA()()())}function J(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"swiper",7,8),e.NdJ("reachEnd",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.onAfterTransitionEnd())}),e.YNc(2,q,1,0,null,9),e.YNc(3,A,7,0,"ng-template",10),e.qZA()}if(2&n){const i=e.oxw();e.Q6J("config",i.config),e.xp6(2),e.Q6J("ngForOf",i.dinamicForm)}}function E(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"ion-col",38)(1,"ion-button",39),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.enviar())}),e._uU(2," ENVIAR FORMULARIO "),e.qZA()()}}const N=function(){return["/principal/inicio"]};function Q(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"ion-col",38)(1,"ion-button",40),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.backHome())}),e._uU(2," VOLVER AL MENU "),e.qZA()()}2&n&&(e.xp6(1),e.Q6J("routerLink",e.DdM(1,N)))}function I(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"ion-col",38)(1,"ion-button",41),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.next())}),e._UZ(2,"ion-icon",42),e.qZA()()}if(2&n){const i=e.oxw();e.xp6(1),e.Q6J("disabled",!i.selected)}}const S=[{path:"",component:(()=>{class n{constructor(i,t,o,c){this.router=i,this.formService=t,this.cd=o,this.loadingController=c,this.dinamicForm=v,this.help=new x.W,this.bandera=!1,this.background="#ffffff",this.backgroundChecked="#FE910E",this.config={allowTouchMove:!1,autoHeight:!0,preventInteractionOnTransition:!0,speed:250,effect:"fade",fadeEffect:{crossFade:!0}}}ngOnInit(){}ionViewDidEnter(){this.background="#ffffff",this.finalized=!1}next(){this.selected=!1,this.swiper.swiperRef.slideNext(500)}close(){this.selected=!1,this.router.navigateByUrl("/principal/inicio")}filterItems(i){return i.filter(t=>t).map(t=>t.isChecked).includes(!0)}select(i,t,o){t.preguntas[o].isChecked=!this.filterItems(t.preguntas)||!(!this.filterItems(t.preguntas)||!0!==t.multiple)&&!t.preguntas[o].isChecked,this.selected=this.filterItems(t.preguntas),6===this.swiper.swiperRef.activeIndex&&!0===i.isChecked?(this.bandera=!0,this.selected=!0):this.bandera=!1}ageRange(i){this.selectedAge=i.detail.value,this.selected=!0}backHome(){var i=this;return(0,p.Z)(function*(){const t=yield i.loadingController.create({message:"Cerrando Formulario...",spinner:"circles"});yield t.present(),yield i.clearCheckbox(),i.finalized=!1,i.swiper.swiperRef.destroy(!0,!0),t.dismiss()})()}enviar(){var i=this;return(0,p.Z)(function*(){const t={victim:i.checked(i.dinamicForm[0]),reason:i.checked(i.dinamicForm[1]),agressor:i.checked(i.dinamicForm[2]),agressorGender:i.checked(i.dinamicForm[3]),age:i.selectedAge,gender:i.checked(i.dinamicForm[5]),place:i.checked(i.dinamicForm[6])};console.log(t),(yield i.formService.setForm(t))?(i.swiper.swiperRef.slideNext(500),i.bandera=!1,i.finalized=!0):(i.finalized=!0,i.bandera=!1)})()}onAfterTransitionEnd(){setTimeout(()=>{this.background="#5A4BB2"},300)}checked(i){return!0===i.multiple?i.preguntas.filter(t=>!0===t.isChecked).map(t=>(delete t.isChecked,delete t.id,t.val)):i.preguntas.filter(t=>!0===t.isChecked)[0].val}ionViewWillLeave(){var i=this;return(0,p.Z)(function*(){const t=yield i.loadingController.create({message:"Cerrando Formulario...",spinner:"circles"});yield t.present(),yield i.clearCheckbox(),i.finalized=!1,t.dismiss(),i.background="#ffffff",i.swiper.swiperRef.destroy(!0,!0)})()}clearCheckbox(){var i=this;return(0,p.Z)(function*(){i.dinamicForm.forEach(t=>{"edad"!==t.key&&t.preguntas.map(o=>{o.isChecked=!1})})})()}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(d.F0),e.Y36(b.o),e.Y36(e.sBO),e.Y36(s.HT))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-form-kid"]],viewQuery:function(i,t){if(1&i&&e.Gf(k,5),2&i){let o;e.iGM(o=e.CRH())&&(t.swiper=o.first)}},decls:11,vars:8,consts:[["padding","","scrollEvents","true","fullscreen","true"],[2,"padding","0px"],["size","12",2,"padding","0px"],[3,"config","reachEnd",4,"ngIf"],[1,"ion-no-border"],[2,"padding-left","35px","padding-right","35px"],["size","12","class","ion-text-center",4,"ngIf"],[3,"config","reachEnd"],["swiper",""],[4,"ngFor","ngForOf"],["swiperSlide",""],[1,"slide-container"],["align","end",1,"main-header"],[2,"color","#ffff"],["name","close-circle-outline",1,"close-icon",3,"click"],[1,"ion-text-center","col-titulo"],[1,"titulo"],[2,"--background","#fff",3,"ngSwitch"],["lines","none","style","background:#ffffff;",4,"ngSwitchCase"],["class","list-form","lines","none",4,"ngSwitchCase"],["lines","none",2,"background","#ffffff"],[3,"min","max","value","pin","snaps","ionChange"],["lines","none",1,"list-form"],[4,"ngIf"],["button","","class","list-form-item",3,"ngStyle","click",4,"ngFor","ngForOf"],["button","",1,"list-form-item",3,"ngStyle","click"],[1,"list-form-item-label",3,"ngStyle"],["button","clear","class","list-form-item",3,"ngStyle","click",4,"ngFor","ngForOf"],["button","clear",1,"list-form-item",3,"ngStyle","click"],[1,"list-form-item-label"],["slot","end",2,"width","35px","height","35px",3,"src"],[1,"slide-container",2,"padding-top","150px"],[1,"ion-text-center",2,"height","50%"],[1,"ion-text-center"],["src","../../assets/icon/text.svg",2,"width","300px","height","178px"],[1,"ion-text-center",2,"padding-top","20px"],[2,"display","contents"],["src","../../assets/icon/send.svg",2,"width","300px","height","250px"],["size","12",1,"ion-text-center"],[1,"btn-enviar",3,"click"],[1,"btn-enviar",3,"routerLink","click"],[1,"btn",3,"disabled","click"],["src","../../assets/icon/chevron-forward.svg",2,"width","35px","height","34px","position","absolute"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-content",0)(1,"ion-grid",1)(2,"ion-row",1)(3,"ion-col",2),e.YNc(4,J,4,2,"swiper",3),e.qZA()()()(),e.TgZ(5,"ion-footer",4)(6,"ion-grid",5)(7,"ion-row"),e.YNc(8,E,3,0,"ion-col",6),e.YNc(9,Q,3,2,"ion-col",6),e.YNc(10,I,3,1,"ion-col",6),e.qZA()()()),2&i&&(e.Udp("--background",t.background),e.xp6(4),e.Q6J("ngIf",t.dinamicForm),e.xp6(1),e.Udp("background",t.background),e.xp6(3),e.Q6J("ngIf",t.bandera),e.xp6(1),e.Q6J("ngIf",t.finalized),e.xp6(1),e.Q6J("ngIf",!t.bandera&&!t.finalized))},dependencies:[l.sg,l.O5,l.PC,l.RF,l.n9,s.YG,s.wI,s.W2,s.fr,s.jY,s.gu,s.Ie,s.Q$,s.q_,s.I_,s.Nd,s.Bs,s.QI,s.YI,d.rH,g.nF,g.YC],styles:[".swiper[_ngcontent-%COMP%]{width:100%;height:auto}.main-header[_ngcontent-%COMP%]{height:30vh;width:100%;background:#5A4BB2;box-shadow:0 1px 10px #5a4bb2;border-radius:0 0 25px 25px;padding-top:0}ion-content[_ngcontent-%COMP%]{--background:#fff}ion-footer[_ngcontent-%COMP%]{background:white;--border: #ffff}.list-form[_ngcontent-%COMP%]{background:white;margin-top:40px;margin-left:55px;margin-right:55px}.list-form-item[_ngcontent-%COMP%]{--background: #fff;--color: #000;margin-bottom:16px;margin-top:16px;--border-color: transparent;--border-width: 1px solid;box-shadow:0 4px 4px #00000040;--border-radius: 15px !important;border-radius:15px;white-space:unset!important}.list-form-item-label[_ngcontent-%COMP%]{--border-radius: 8px;padding-left:25px;padding-top:6px;padding-bottom:7px;white-space:unset!important}.close-icon[_ngcontent-%COMP%]{padding-top:15px;padding-right:15px;width:35px;height:35px}.swiper-slide[_ngcontent-%COMP%]{overflow:visible!important}.titulo[_ngcontent-%COMP%]{font-family:Open Sans;font-style:normal;font-weight:800;font-size:18px;line-height:120%;color:#fff}.btn[_ngcontent-%COMP%]{--background: #5A4BB2;width:60px;height:60px;--border-radius: 60% !important;font-size:17px}.btn-enviar[_ngcontent-%COMP%]{--background: #FE910E;font-size:17px;--border-radius: 15px;--color:#fff;width:100%;height:100%;--padding-bottom: .7rem;--padding-top: .7rem;font-size:16px}ion-range[_ngcontent-%COMP%]::part(tick){background:#C7793C}ion-range[_ngcontent-%COMP%]::part(tick-active){background:#C7793C}ion-range[_ngcontent-%COMP%]::part(pin){display:inline-flex;align-items:center;justify-content:center;background:#C7793C;color:#fff;border-radius:50%;transform:scale(1.01);top:-28px;min-width:38px;height:38px;transition:transform .12s ease,#C7793C .12s ease}ion-range[_ngcontent-%COMP%]::part(pin):before{content:none}ion-range[_ngcontent-%COMP%]::part(knob){background:#C7793C}ion-range[_ngcontent-%COMP%]::part(bar){background:#C7793C}ion-range[_ngcontent-%COMP%]::part(bar-active){background:#C7793C}"]}),n})()}];let Y=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(S),d.Bz]}),n})(),z=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,h.u5,s.Pc,Y,g.kz]}),n})()}}]);
//# sourceMappingURL=src_app_form-kid_form-kid_module_ts.ab31fae2156ab0d8.js.map