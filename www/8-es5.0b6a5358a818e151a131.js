!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{z3fI:function(o,i,c){"use strict";c.r(i),c.d(i,"ImprintDataProtectionPageModule",(function(){return k}));var e=c("ofXK"),b=c("3Pt+"),a=c("TEn/"),r=c("tyNb"),l=c("fXoL"),s=c("wxHw");function f(n,t){if(1&n&&(l.Lb(0,"ion-label",4),l.mc(1),l.Jb(2,"br"),l.Kb()),2&n){var o=l.Vb().$implicit;l.xb(1),l.oc(" Adresse: ",o.adress,"")}}function d(n,t){if(1&n&&(l.Lb(0,"ion-label",4),l.mc(1," offizielle Webseite: "),l.Lb(2,"a",7),l.mc(3),l.Kb(),l.Jb(4,"br"),l.Kb()),2&n){var o=l.Vb().$implicit;l.xb(2),l.ac("href",o.link,l.jc),l.xb(1),l.nc(o.link)}}function u(n,t){if(1&n&&(l.Lb(0,"ion-label",4),l.mc(1),l.Jb(2,"br"),l.Kb()),2&n){var o=l.Vb().$implicit;l.xb(1),l.oc(" E-Mail: ",o.email,"")}}function m(n,t){if(1&n&&(l.Lb(0,"ion-label",4),l.mc(1),l.Jb(2,"br"),l.Kb()),2&n){var o=l.Vb().$implicit;l.xb(1),l.oc(" Telefonnummer: ",o.phone,"")}}function p(n,t){if(1&n&&(l.Lb(0,"div"),l.Lb(1,"ion-card-subtitle"),l.mc(2),l.Kb(),l.lc(3,f,3,1,"ion-label",6),l.lc(4,d,5,2,"ion-label",6),l.lc(5,u,3,1,"ion-label",6),l.lc(6,m,3,1,"ion-label",6),l.Jb(7,"br"),l.Kb()),2&n){var o=t.$implicit;l.xb(2),l.nc(o.name),l.xb(1),l.ac("ngIf",o.adress),l.xb(1),l.ac("ngIf",o.link),l.xb(1),l.ac("ngIf",o.email),l.xb(1),l.ac("ngIf",o.phone)}}function h(n,t){if(1&n&&(l.Lb(0,"ion-card",3),l.Lb(1,"ion-card-header"),l.Lb(2,"ion-card-title"),l.mc(3," Impressum "),l.Kb(),l.Kb(),l.Lb(4,"ion-card-content"),l.lc(5,p,8,5,"div",5),l.Kb(),l.Kb()),2&n){var o=l.Vb();l.xb(5),l.ac("ngForOf",o.contacts)}}var K,L,g,v=[{path:"",component:(K=function(){function o(t){n(this,o),this.config=t,this.contacts=[],this.conditions="",this.dataProtection="",this.contents=[]}var i,c,e;return i=o,(c=[{key:"ngOnInit",value:function(){this.contacts=this.config.imprint.contacts,this.conditions=this.config.conditions.full_conditions,this.dataProtection=this.config.data_protection.data_protection}}])&&t(i.prototype,c),e&&t(i,e),o}(),K.\u0275fac=function(n){return new(n||K)(l.Ib(s.a))},K.\u0275cmp=l.Cb({type:K,selectors:[["app-imprint-data-protection"]],decls:20,vars:3,consts:[["color","menu"],["color","background"],["color","background","class","content",4,"ngIf"],["color","background",1,"content"],["color","text"],[4,"ngFor","ngForOf"],["color","text",4,"ngIf"],[3,"href"]],template:function(n,t){1&n&&(l.Lb(0,"ion-header"),l.Lb(1,"ion-toolbar",0),l.Lb(2,"ion-title"),l.mc(3,"Impressum und Datenschutzerkl\xe4rung"),l.Kb(),l.Kb(),l.Kb(),l.Lb(4,"ion-content",1),l.lc(5,h,6,1,"ion-card",2),l.Lb(6,"ion-card",3),l.Lb(7,"ion-card-header"),l.Lb(8,"ion-card-title"),l.mc(9," Datenschutz "),l.Kb(),l.Kb(),l.Lb(10,"ion-card-content"),l.Lb(11,"ion-label",4),l.mc(12),l.Kb(),l.Kb(),l.Kb(),l.Lb(13,"ion-card",3),l.Lb(14,"ion-card-header"),l.Lb(15,"ion-card-title"),l.mc(16," AGBs "),l.Kb(),l.Kb(),l.Lb(17,"ion-card-content"),l.Lb(18,"ion-label",4),l.mc(19),l.Kb(),l.Kb(),l.Kb(),l.Kb()),2&n&&(l.xb(5),l.ac("ngIf",t.contacts.length),l.xb(7),l.oc(" ",t.dataProtection," "),l.xb(7),l.oc(" ",t.conditions," "))},directives:[a.t,a.R,a.P,a.p,e.j,a.j,a.l,a.n,a.k,a.A,e.i,a.m],styles:[""]}),K)}],x=((g=function t(){n(this,t)}).\u0275mod=l.Gb({type:g}),g.\u0275inj=l.Fb({factory:function(n){return new(n||g)},imports:[[r.k.forChild(v)],r.k]}),g),k=((L=function t(){n(this,t)}).\u0275mod=l.Gb({type:L}),L.\u0275inj=l.Fb({factory:function(n){return new(n||L)},imports:[[e.b,b.a,a.S,x]]}),L)}}])}();