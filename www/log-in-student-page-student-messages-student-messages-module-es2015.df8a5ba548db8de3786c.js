(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{V6Bk:function(e,t,s){"use strict";s.r(t),s.d(t,"StudentMessagesPageModule",function(){return L});var n=s("ofXK"),i=s("3Pt+"),o=s("tyNb"),c=s("TEn/"),a=s("fXoL"),r=s("3LUQ"),b=s("CoJz"),d=s("ZvwH"),l=s("Hzbo"),u=s("r4Kj");function g(e,t){if(1&e){const e=a.Nb();a.Mb(0,"ion-buttons",20),a.Ub("click",function(){a.lc(e);const t=a.Wb().$implicit;return a.Wb(2).delete(t)}),a.Kb(1,"ion-icon",21),a.Lb()}}function m(e,t){if(1&e&&(a.Mb(0,"ion-card",22),a.Mb(1,"ion-card-content"),a.Mb(2,"ion-text",23),a.pc(3),a.Lb(),a.Kb(4,"br"),a.Mb(5,"ion-text",24),a.pc(6),a.Lb(),a.Lb(),a.Lb()),2&e){const e=a.Wb().$implicit;a.yb(3),a.qc(e.sender_name),a.yb(3),a.qc(e.message)}}function h(e,t){if(1&e&&(a.Mb(0,"ion-card",25),a.Mb(1,"ion-card-content"),a.Mb(2,"ion-text",23),a.pc(3),a.Lb(),a.Kb(4,"br"),a.Mb(5,"ion-text",24),a.pc(6),a.Lb(),a.Lb(),a.Lb()),2&e){const e=a.Wb().$implicit;a.yb(3),a.qc(e.sender_name),a.yb(3),a.qc(e.message)}}function f(e,t){if(1&e){const e=a.Nb();a.Mb(0,"ion-buttons",26),a.Ub("click",function(){a.lc(e);const t=a.Wb().$implicit;return a.Wb(2).delete(t)}),a.Kb(1,"ion-icon",21),a.Lb()}}function p(e,t){if(1&e&&(a.Mb(0,"ion-item",15),a.oc(1,g,2,0,"ion-buttons",16),a.oc(2,m,7,2,"ion-card",17),a.oc(3,h,7,2,"ion-card",18),a.oc(4,f,2,0,"ion-buttons",19),a.Lb()),2&e){const e=t.$implicit,s=a.Wb(2);a.yb(1),a.bc("ngIf",e.sender_name==s.loadedStudent.user_name),a.yb(1),a.bc("ngIf",e.sender_name==s.loadedStudent.user_name),a.yb(1),a.bc("ngIf",e.sender_name!=s.loadedStudent.user_name),a.yb(1),a.bc("ngIf",e.sender_name!=s.loadedStudent.user_name)}}function _(e,t){if(1&e&&(a.Mb(0,"ion-list",13),a.oc(1,p,5,4,"ion-item",14),a.Lb()),2&e){const e=a.Wb();a.yb(1),a.bc("ngForOf",e.leadedProject.messages)}}const M=[{path:"",component:(()=>{class e{constructor(e,t,s,n,i,o,c){this.activatedRoute=e,this.router=t,this.alert=s,this.projectsService=n,this.studentsService=i,this.messagesService=o,this.config=c,this.subscriptions=[],this.leadedProject={id:0,authorized:0,editable:0,title:"",image:"",descr:"",leader_name:"",leader_id:0,cost:0,first_day_begin:{hours:0,minutes:0},first_day_end:{hours:0,minutes:0},second_day_begin:{hours:0,minutes:0},second_day_end:{hours:0,minutes:0},min_grade:0,max_grade:0,min_participants:0,max_participants:0,messages:[],participants:[]},this.loadedStudent={id:0,user_name:"",email:"",password:"",first_name:"",last_name:"",grade:0,letter:"",exchange_id:0,exchange_requests:[],first_friend:0,second_friend:0,third_friend:0,first_wish:0,second_wish:0,third_wish:0,project_id:0,role:2},this.newMessage={project_id:0,message:""},this.eventName=this.config.app_config.event_name}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{e.has("ParticipantName")?this.studentUrl=e.get("ParticipantName"):this.router.navigate([""])}),this.getProject(),this.getStudent(),this.subscriptions.push(this.messagesService.update.subscribe(()=>this.getProject()),this.messagesService.update.subscribe(()=>this.getStudent()))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}getStudent(){this.studentsService.getSelfStudent().subscribe(e=>{this.loadedStudent=e.data})}getProject(){this.projectsService.getSelfLeadedProject("students").subscribe(e=>{this.leadedProject=e.data})}send(e){!0===e.valid&&(this.messagesService.createMessage("students",this.newMessage).subscribe(e=>{this.messagesService.update.emit(),this.leadedProject.messages.push(e.data)},e=>{this.alert.error("Versandt der Nachricht fehlgeschlagen!",e.error)}),e.reset())}delete(e){this.leadedProject.messages=this.leadedProject.messages.filter(t=>e.id!==t.id),this.messagesService.deleteMessage("students",e.id)}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(o.a),a.Jb(o.g),a.Jb(r.a),a.Jb(b.a),a.Jb(d.a),a.Jb(l.a),a.Jb(u.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-messages"]],decls:18,vars:5,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["class","content",4,"ngIf"],["color","background","name","MessageBox",1,"content"],["id","Formular","name","MessageForm",3,"ngSubmit"],["form","ngForm"],["color","items"],["color","text","required","","name","MessageText","type","text",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","type","submit","expand","block",1,"ion-no-margin",3,"disabled"],["name","duplicate"],[1,"content"],["color","items","lines","none",4,"ngFor","ngForOf"],["color","items","lines","none"],["slot","end",3,"click",4,"ngIf"],["class","message sended_message","slot","end","color","background",4,"ngIf"],["class","message","slot","start","color","background",4,"ngIf"],["slot","start",3,"click",4,"ngIf"],["slot","end",3,"click"],["color","danger","name","close"],["slot","end","color","background",1,"message","sended_message"],["color","buttons"],["color","text"],["slot","start","color","background",1,"message"],["slot","start",3,"click"]],template:function(e,t){if(1&e){const e=a.Nb();a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar",0),a.Mb(2,"ion-button",1),a.Kb(3,"ion-back-button",2),a.Lb(),a.Mb(4,"ion-title"),a.pc(5,"Notizen"),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-content",3),a.oc(7,_,2,1,"ion-list",4),a.Mb(8,"ion-card",5),a.Mb(9,"form",6,7),a.Ub("ngSubmit",function(){a.lc(e);const s=a.jc(10);return t.send(s)}),a.Mb(11,"ion-item",8),a.Mb(12,"ion-input",9),a.Ub("ngModelChange",function(e){return t.newMessage.message=e}),a.Lb(),a.Lb(),a.Mb(13,"div",10),a.Mb(14,"ion-button",11),a.Mb(15,"ion-label"),a.Kb(16,"ion-icon",12),a.pc(17," Notiz an das Projekt anheften"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&e){const e=a.jc(10);a.yb(3),a.dc("defaultHref","",t.eventName,"/Sch\xfcler/",t.studentUrl,""),a.yb(4),a.bc("ngIf",t.leadedProject.messages.length),a.yb(5),a.bc("ngModel",t.newMessage.message),a.yb(2),a.bc("disabled",e.invalid)}},directives:[c.t,c.R,c.h,c.e,c.f,c.P,c.p,n.j,c.j,i.k,i.g,i.h,c.x,c.w,c.ab,i.j,i.f,i.i,c.A,c.u,c.B,n.i,c.i,c.k,c.N],styles:[""]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[n.b,i.a,c.S,o.k.forChild(M)]]}),e})()}}]);
//# sourceMappingURL=log-in-student-page-student-messages-student-messages-module-es2015.df8a5ba548db8de3786c.js.map