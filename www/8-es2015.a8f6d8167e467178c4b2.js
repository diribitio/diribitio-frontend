(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{z3fI:function(n,o,t){"use strict";t.r(o),t.d(o,"ImprintDataProtectionPageModule",(function(){return L}));var c=t("ofXK"),i=t("3Pt+"),b=t("TEn/"),e=t("tyNb"),a=t("fXoL"),r=t("wxHw");function s(n,o){if(1&n&&(a.Lb(0,"ion-label",4),a.oc(1),a.Jb(2,"br"),a.Kb()),2&n){const n=a.Vb().$implicit;a.xb(1),a.qc(" Adresse: ",n.adress,"")}}function l(n,o){if(1&n&&(a.Lb(0,"ion-label",4),a.oc(1," offizielle Webseite: "),a.Lb(2,"a",7),a.oc(3),a.Kb(),a.Jb(4,"br"),a.Kb()),2&n){const n=a.Vb().$implicit;a.xb(2),a.ac("href",n.link,a.lc),a.xb(1),a.pc(n.link)}}function d(n,o){if(1&n&&(a.Lb(0,"ion-label",4),a.oc(1),a.Jb(2,"br"),a.Kb()),2&n){const n=a.Vb().$implicit;a.xb(1),a.qc(" E-Mail: ",n.email,"")}}function f(n,o){if(1&n&&(a.Lb(0,"ion-label",4),a.oc(1),a.Jb(2,"br"),a.Kb()),2&n){const n=a.Vb().$implicit;a.xb(1),a.qc(" Telefonnummer: ",n.phone,"")}}function u(n,o){if(1&n&&(a.Lb(0,"div"),a.Lb(1,"ion-card-subtitle"),a.oc(2),a.Kb(),a.nc(3,s,3,1,"ion-label",6),a.nc(4,l,5,2,"ion-label",6),a.nc(5,d,3,1,"ion-label",6),a.nc(6,f,3,1,"ion-label",6),a.Jb(7,"br"),a.Kb()),2&n){const n=o.$implicit;a.xb(2),a.pc(n.name),a.xb(1),a.ac("ngIf",n.adress),a.xb(1),a.ac("ngIf",n.link),a.xb(1),a.ac("ngIf",n.email),a.xb(1),a.ac("ngIf",n.phone)}}function p(n,o){if(1&n&&(a.Lb(0,"ion-card",3),a.Lb(1,"ion-card-header"),a.Lb(2,"ion-card-title"),a.oc(3," Impressum "),a.Kb(),a.Kb(),a.Lb(4,"ion-card-content"),a.nc(5,u,8,5,"div",5),a.Kb(),a.Kb()),2&n){const n=a.Vb();a.xb(5),a.ac("ngForOf",n.contacts)}}const m=[{path:"",component:(()=>{class n{constructor(n){this.config=n,this.contacts=[],this.conditions="",this.dataProtection="",this.contents=[]}ngOnInit(){this.contacts=this.config.imprint.contacts,this.conditions=this.config.conditions.full_conditions,this.dataProtection=this.config.data_protection.data_protection}}return n.\u0275fac=function(o){return new(o||n)(a.Ib(r.a))},n.\u0275cmp=a.Cb({type:n,selectors:[["app-imprint-data-protection"]],decls:20,vars:3,consts:[["color","menu"],["color","background"],["color","background","class","content",4,"ngIf"],["color","background",1,"content"],["color","text"],[4,"ngFor","ngForOf"],["color","text",4,"ngIf"],[3,"href"]],template:function(n,o){1&n&&(a.Lb(0,"ion-header"),a.Lb(1,"ion-toolbar",0),a.Lb(2,"ion-title"),a.oc(3,"Impressum und Datenschutzerkl\xe4rung"),a.Kb(),a.Kb(),a.Kb(),a.Lb(4,"ion-content",1),a.nc(5,p,6,1,"ion-card",2),a.Lb(6,"ion-card",3),a.Lb(7,"ion-card-header"),a.Lb(8,"ion-card-title"),a.oc(9," Datenschutz "),a.Kb(),a.Kb(),a.Lb(10,"ion-card-content"),a.Lb(11,"ion-label",4),a.oc(12),a.Kb(),a.Kb(),a.Kb(),a.Lb(13,"ion-card",3),a.Lb(14,"ion-card-header"),a.Lb(15,"ion-card-title"),a.oc(16," AGBs "),a.Kb(),a.Kb(),a.Lb(17,"ion-card-content"),a.Lb(18,"ion-label",4),a.oc(19),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&n&&(a.xb(5),a.ac("ngIf",o.contacts.length),a.xb(7),a.qc(" ",o.dataProtection," "),a.xb(7),a.qc(" ",o.conditions," "))},directives:[b.t,b.R,b.P,b.p,c.j,b.j,b.l,b.n,b.k,b.A,c.i,b.m],styles:[""]}),n})()}];let K=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(o){return new(o||n)},imports:[[e.k.forChild(m)],e.k]}),n})(),L=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(o){return new(o||n)},imports:[[c.b,i.a,b.S,K]]}),n})()}}]);