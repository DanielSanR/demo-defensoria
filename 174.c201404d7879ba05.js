"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[174],{5652:(y,h,o)=>{o.r(h),o.d(h,{TabsPageModule:()=>Z});var e=o(9250),c=o(6895),b=o(4719),g=o(8359),u=o(2654),t=o(6738),p=o(9048);const f=function(){return["/formulario"]},l=function(n){return{hidden:n}};function T(n,s){if(1&n&&(t.TgZ(0,"ion-tab-button",13),t._UZ(1,"ion-icon",14),t.TgZ(2,"ion-label",6),t._uU(3,"Formulario"),t.qZA()()),2&n){const i=t.oxw();t.Q6J("routerLink",t.DdM(2,f)),t.xp6(2),t.Q6J("ngClass",t.VKq(3,l,i.width<360))}}const m=function(){return["/formulario-kids"]};function P(n,s){if(1&n&&(t.TgZ(0,"ion-tab-button",13),t._UZ(1,"ion-icon",14),t.TgZ(2,"ion-label",6),t._uU(3,"Formulario"),t.qZA()()),2&n){const i=t.oxw();t.Q6J("routerLink",t.DdM(2,m)),t.xp6(2),t.Q6J("ngClass",t.VKq(3,l,i.width<360))}}let v=(()=>{class n{constructor(i,a){this.platform=i,this.formService=a,this.$obs=new u.w}ngOnInit(){if(this.formService.getSelected()){const a=this.formService.getSelectedData().subscribe(r=>{this.route=r});this.$obs.add(a)}this.width=this.platform.width()}tabChange(i){this.activeTab=i.outlet.activatedView.element}ionViewWillLeave(){this.propagateToActiveTab("ionViewWillLeave")}ionViewDidLeave(){this.$obs.unsubscribe(),this.propagateToActiveTab("ionViewDidLeave")}ionViewWillEnter(){this.propagateToActiveTab("ionViewWillEnter")}ionViewDidEnter(){this.propagateToActiveTab("ionViewDidEnter")}propagateToActiveTab(i){this.activeTab&&this.activeTab.dispatchEvent(new CustomEvent(i))}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(e.t4),t.Y36(p.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tabs"]],decls:21,vars:14,consts:[[3,"ionTabsDidChange"],["tabs",""],["slot","bottom","mode","ios"],["layout","icon-top",3,"routerLink",4,"ngIf"],["tab","mapa","layout","icon-top"],["src","../../assets/icon/mapa.svg"],[3,"ngClass"],["tab","inicio","layout","icon-top"],["src","../../assets/icon/inicio.svg"],["tab","numeros-utiles","layout","icon-top"],["src","../../assets/icon/telefono.svg"],["tab","perfil","layout","icon-top"],["src","../../assets/icon/perfil.svg"],["layout","icon-top",3,"routerLink"],["src","../../assets/icon/microfono.svg"]],template:function(i,a){if(1&i){const r=t.EpF();t.TgZ(0,"ion-tabs",0,1),t.NdJ("ionTabsDidChange",function(){t.CHM(r);const x=t.MAs(1);return t.KtG(a.tabChange(x))}),t.TgZ(2,"ion-tab-bar",2),t.YNc(3,T,4,5,"ion-tab-button",3),t.YNc(4,P,4,5,"ion-tab-button",3),t.TgZ(5,"ion-tab-button",4),t._UZ(6,"ion-icon",5),t.TgZ(7,"ion-label",6),t._uU(8,"Mapa"),t.qZA()(),t.TgZ(9,"ion-tab-button",7),t._UZ(10,"ion-icon",8),t.TgZ(11,"ion-label",6),t._uU(12,"Inicio"),t.qZA()(),t.TgZ(13,"ion-tab-button",9),t._UZ(14,"ion-icon",10),t.TgZ(15,"ion-label",6),t._uU(16,"Telefono"),t.qZA()(),t.TgZ(17,"ion-tab-button",11),t._UZ(18,"ion-icon",12),t.TgZ(19,"ion-label",6),t._uU(20,"Perfil"),t.qZA()()()()}2&i&&(t.xp6(3),t.Q6J("ngIf","teen"===a.route),t.xp6(1),t.Q6J("ngIf","kid"===a.route),t.xp6(3),t.Q6J("ngClass",t.VKq(6,l,a.width<360)),t.xp6(4),t.Q6J("ngClass",t.VKq(8,l,a.width<360)),t.xp6(4),t.Q6J("ngClass",t.VKq(10,l,a.width<360)),t.xp6(4),t.Q6J("ngClass",t.VKq(12,l,a.width<360)))},dependencies:[e.gu,e.Q$,e.yq,e.ZU,e.UN,e.YI,c.mk,c.O5,g.rH],styles:['[_nghost-%COMP%]{background:white}ion-tab-bar[_ngcontent-%COMP%]{position:relative;margin:0 auto;--background: #fff !important;border-top:7px solid #5A4BB2;border-radius:15px;width:100%;padding-bottom:5px}ion-tab-button[_ngcontent-%COMP%]{--color: #000;--color-selected: #5A4BB2}ion-tab-button[_ngcontent-%COMP%]:before{background-color:transparent;display:block;content:"";margin:0 auto;width:20px;height:2px}ion-tab-button.tab-selected[_ngcontent-%COMP%]:before{background-color:#5a4bb2}ion-label.hidden[_ngcontent-%COMP%]{display:none}ion-label[_ngcontent-%COMP%]{font-family:Open Sans;font-style:normal;font-weight:400;font-size:12px;min-width:max-content;line-height:120%;color:#000;opacity:.7}@media (max-width: 360px){ion-tab-bar[_ngcontent-%COMP%]{min-height:60px}ion-tab-button[_ngcontent-%COMP%]{width:56px;min-width:56px}}']}),n})();var d=o(4746);const C=[{path:"principal",component:v,children:[{path:"inicio",loadChildren:()=>Promise.all([o.e(8592),o.e(8338)]).then(o.bind(o,8338)).then(n=>n.Tab1PageModule),canLoad:[d.n]},{path:"search",loadChildren:()=>Promise.all([o.e(8592),o.e(2356)]).then(o.bind(o,2356)).then(n=>n.Tab2PageModule),canLoad:[d.n]},{path:"mapa",loadChildren:()=>o.e(881).then(o.bind(o,881)).then(n=>n.MapPageModule),canLoad:[d.n]},{path:"preguntas-frecuentes",loadChildren:()=>o.e(5614).then(o.bind(o,5614)).then(n=>n.FaqPageModule),canLoad:[d.n]},{path:"numeros-utiles",loadChildren:()=>o.e(2679).then(o.bind(o,2679)).then(n=>n.TelefonoPageModule),canLoad:[d.n]},{path:"perfil",loadChildren:()=>Promise.all([o.e(8592),o.e(2660)]).then(o.bind(o,2660)).then(n=>n.PerfilPageModule),canLoad:[d.n]},{path:"",redirectTo:"/principal/inicio",pathMatch:"full"}]},{path:"",redirectTo:"/principal/inicio",pathMatch:"full"}];let M=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(C)]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.Pc,c.ez,b.u5,M,g.Bz]}),n})()}}]);