(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"7wo0":function(n,t,e){"use strict";e.r(t),e.d(t,"SettingsPageModule",function(){return u});var o=e("ofXK"),b=e("3Pt+"),i=e("tyNb"),c=e("TEn/"),r=e("fXoL"),s=e("6nr9"),l=e("r4Kj");const a=[{path:"",component:(()=>{class n{constructor(n,t){this.settings=n,this.config=t,this.subscriptions=[],this.background=this.config.ui.default_background,this.color=this.config.ui.default_color}ngOnInit(){this.text1=this.config.get_content_by_index("settings",0),this.text2=this.config.get_content_by_index("settings",1);const n=this.settings.theme.split("-",2);this.background=n[0],this.color=n[1]}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}change(){this.settings.change_theme(this.background,this.color)}}return n.\u0275fac=function(t){return new(t||n)(r.Jb(s.a),r.Jb(l.a))},n.\u0275cmp=r.Db({type:n,selectors:[["app-settings"]],decls:45,vars:4,consts:[["color","menu"],["color","background"],["color","background",1,"content"],["color","text"],["mode","md","color","buttons",3,"ngModel","ngModelChange","ionChange"],["value","dark"],["value","light"],["value","auto"],["value","blue"],["value","pink"],["value","yellow"],["value","green"]],template:function(n,t){1&n&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar",0),r.Mb(2,"ion-title"),r.pc(3,"Einstellungen"),r.Lb(),r.Lb(),r.Lb(),r.Mb(4,"ion-content",1),r.Mb(5,"ion-card",2),r.Mb(6,"ion-card-header"),r.Mb(7,"ion-card-title"),r.pc(8,"Theme \xe4ndern"),r.Lb(),r.Mb(9,"ion-card-subtitle"),r.pc(10,"Hintergrund"),r.Lb(),r.Lb(),r.Mb(11,"ion-card-content"),r.Mb(12,"ion-label",3),r.pc(13),r.Lb(),r.Lb(),r.Mb(14,"ion-card-content"),r.Mb(15,"ion-segment",4),r.Ub("ngModelChange",function(n){return t.background=n})("ionChange",function(){return t.change()}),r.Mb(16,"ion-segment-button",5),r.Mb(17,"ion-label",3),r.pc(18,"Dunkel"),r.Lb(),r.Lb(),r.Mb(19,"ion-segment-button",6),r.Mb(20,"ion-label",3),r.pc(21,"Hell"),r.Lb(),r.Lb(),r.Mb(22,"ion-segment-button",7),r.Mb(23,"ion-label",3),r.pc(24,"Automatisch"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(25,"ion-card-header"),r.Mb(26,"ion-card-subtitle"),r.pc(27,"Vordergrund"),r.Lb(),r.Lb(),r.Mb(28,"ion-card-content"),r.Mb(29,"ion-label",3),r.pc(30),r.Lb(),r.Lb(),r.Mb(31,"ion-card-content"),r.Mb(32,"ion-segment",4),r.Ub("ngModelChange",function(n){return t.color=n})("ionChange",function(){return t.change()}),r.Mb(33,"ion-segment-button",8),r.Mb(34,"ion-label",3),r.pc(35,"Blau"),r.Lb(),r.Lb(),r.Mb(36,"ion-segment-button",9),r.Mb(37,"ion-label",3),r.pc(38,"Pink"),r.Lb(),r.Lb(),r.Mb(39,"ion-segment-button",10),r.Mb(40,"ion-label",3),r.pc(41,"Gelb"),r.Lb(),r.Lb(),r.Mb(42,"ion-segment-button",11),r.Mb(43,"ion-label",3),r.pc(44,"Gr\xfcn"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&n&&(r.yb(13),r.rc(" ",t.text1," "),r.yb(2),r.bc("ngModel",t.background),r.yb(15),r.rc(" ",t.text2," "),r.yb(2),r.bc("ngModel",t.color))},directives:[c.t,c.R,c.P,c.p,c.j,c.l,c.n,c.m,c.k,c.A,c.G,c.Z,b.f,b.i,c.H],styles:[""]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(t){return new(t||n)},imports:[[o.b,b.a,c.S,i.k.forChild(a)]]}),n})()}}]);