(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"0zAt":function(e,t,s){"use strict";s.r(t),s.d(t,"LeaderMessagesPageModule",function(){return _});var n=s("ofXK"),o=s("3Pt+"),i=s("tyNb"),a=s("TEn/"),r=s("fXoL"),c=s("3LUQ"),b=s("CoJz"),d=s("PO/Q"),l=s("Hzbo"),g=s("r4Kj");function u(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-buttons",20),r.Ub("click",function(){r.lc(e);const t=r.Wb().$implicit;return r.Wb(2).delete(t)}),r.Kb(1,"ion-icon",21),r.Lb()}}function m(e,t){if(1&e&&(r.Mb(0,"ion-card",22),r.Mb(1,"ion-card-content"),r.Mb(2,"ion-text",23),r.pc(3),r.Lb(),r.Kb(4,"br"),r.Mb(5,"ion-text",24),r.pc(6),r.Lb(),r.Lb(),r.Lb()),2&e){const e=r.Wb().$implicit;r.yb(3),r.qc(e.sender_name),r.yb(3),r.qc(e.message)}}function f(e,t){if(1&e&&(r.Mb(0,"ion-card",25),r.Mb(1,"ion-card-content"),r.Mb(2,"ion-text",23),r.pc(3),r.Lb(),r.Kb(4,"br"),r.Mb(5,"ion-text",24),r.pc(6),r.Lb(),r.Lb(),r.Lb()),2&e){const e=r.Wb().$implicit;r.yb(3),r.qc(e.sender_name),r.yb(3),r.qc(e.message)}}function h(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-buttons",26),r.Ub("click",function(){r.lc(e);const t=r.Wb().$implicit;return r.Wb(2).delete(t)}),r.Kb(1,"ion-icon",21),r.Lb()}}function p(e,t){if(1&e&&(r.Mb(0,"ion-item",15),r.oc(1,u,2,0,"ion-buttons",16),r.oc(2,m,7,2,"ion-card",17),r.oc(3,f,7,2,"ion-card",18),r.oc(4,h,2,0,"ion-buttons",19),r.Lb()),2&e){const e=t.$implicit,s=r.Wb(2);r.yb(1),r.bc("ngIf",e.sender_name==s.loadedLeader.user_name),r.yb(1),r.bc("ngIf",e.sender_name==s.loadedLeader.user_name),r.yb(1),r.bc("ngIf",e.sender_name!=s.loadedLeader.user_name),r.yb(1),r.bc("ngIf",e.sender_name!=s.loadedLeader.user_name)}}function L(e,t){if(1&e&&(r.Mb(0,"ion-list",13),r.oc(1,p,5,4,"ion-item",14),r.Lb()),2&e){const e=r.Wb();r.yb(1),r.bc("ngForOf",e.leadedProject.messages)}}const M=[{path:"",component:(()=>{class e{constructor(e,t,s,n,o,i,a){this.activatedRoute=e,this.router=t,this.alert=s,this.projectsService=n,this.leadersService=o,this.messagesService=i,this.config=a,this.subscriptions=[],this.loadedLeader={id:0,user_name:"",email:"",password:"",project_id:0},this.leadedProject={id:0,authorized:0,editable:0,title:"",image:"",descr:"",leader_name:"",leader_id:0,cost:0,first_day_begin:{hours:0,minutes:0},first_day_end:{hours:0,minutes:0},second_day_begin:{hours:0,minutes:0},second_day_end:{hours:0,minutes:0},min_grade:0,max_grade:0,min_participants:0,max_participants:0,messages:[],participants:[]},this.newMessage={message:""},this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{e.has("LeaderName")?this.leaderUrl=e.get("LeaderName"):this.router.navigate([""])}),this.getProject(),this.getLeader(),this.subscriptions.push(this.messagesService.update.subscribe(()=>this.getProject()),this.messagesService.update.subscribe(()=>this.getLeader()))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}getLeader(){this.leadersService.getSelfLeader().subscribe(e=>{this.loadedLeader=e.data})}getProject(){this.projectsService.getSelfLeadedProject("leaders").subscribe(e=>{this.leadedProject=e.data})}send(e){!0===e.valid&&(this.messagesService.createMessage("leaders",this.newMessage).subscribe(e=>{this.messagesService.update.emit(),this.leadedProject.messages.push(e.data)},e=>{this.alert.error("Versandt der Nachricht fehlgeschlagen!",e.error)}),e.reset())}delete(e){this.leadedProject.messages=this.leadedProject.messages.filter(t=>t.id!==e.id),this.messagesService.deleteMessage("leaders",e.id)}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(i.a),r.Jb(i.g),r.Jb(c.a),r.Jb(b.a),r.Jb(d.a),r.Jb(l.a),r.Jb(g.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-messages"]],decls:18,vars:6,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["class","content",4,"ngIf"],["color","background","name","MessageBox",1,"content"],["id","Formular","name","MessageForm",3,"ngSubmit"],["form","ngForm"],["color","items"],["color","text","required","","name","MessageText","type","text",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","type","submit","expand","block",1,"ion-no-margin",3,"disabled"],["name","duplicate"],[1,"content"],["color","items","lines","none",4,"ngFor","ngForOf"],["color","items","lines","none"],["slot","end",3,"click",4,"ngIf"],["class","message sended_message","slot","end","color","background",4,"ngIf"],["class","message","slot","start","color","background",4,"ngIf"],["slot","start",3,"click",4,"ngIf"],["slot","end",3,"click"],["color","danger","name","close"],["slot","end","color","background",1,"message","sended_message"],["color","buttons"],["color","text"],["slot","start","color","background",1,"message"],["slot","start",3,"click"]],template:function(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar",0),r.Mb(2,"ion-button",1),r.Kb(3,"ion-back-button",2),r.Lb(),r.Mb(4,"ion-title"),r.pc(5,"Notizen"),r.Lb(),r.Lb(),r.Lb(),r.Mb(6,"ion-content",3),r.oc(7,L,2,1,"ion-list",4),r.Mb(8,"ion-card",5),r.Mb(9,"form",6,7),r.Ub("ngSubmit",function(){r.lc(e);const s=r.jc(10);return t.send(s)}),r.Mb(11,"ion-item",8),r.Mb(12,"ion-input",9),r.Ub("ngModelChange",function(e){return t.newMessage.message=e}),r.Lb(),r.Lb(),r.Mb(13,"div",10),r.Mb(14,"ion-button",11),r.Mb(15,"ion-label"),r.Kb(16,"ion-icon",12),r.pc(17," Notiz an das Projekt anheften"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&e){const e=r.jc(10);r.yb(3),r.ec("defaultHref","",t.eventName,"/",t.projectNoun,"leiter/",t.leaderUrl,""),r.yb(4),r.bc("ngIf",t.leadedProject.messages.length),r.yb(5),r.bc("ngModel",t.newMessage.message),r.yb(2),r.bc("disabled",e.invalid)}},directives:[a.t,a.R,a.h,a.e,a.f,a.P,a.p,n.j,a.j,o.k,o.g,o.h,a.x,a.w,a.ab,o.j,o.f,o.i,a.A,a.u,a.B,n.i,a.i,a.k,a.N],styles:[""]}),e})()}];let _=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[n.b,o.a,a.S,i.k.forChild(M)]]}),e})()}}]);