(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{e7et:function(e,n,t){"use strict";t.r(n),t.d(n,"StudentProjectGenerationPageModule",function(){return M});var o=t("ofXK"),i=t("3Pt+"),r=t("tyNb"),b=t("TEn/"),c=t("fXoL"),a=t("CoJz"),l=t("3LUQ"),d=t("r4Kj");function s(e,n){if(1&e&&(c.Mb(0,"ion-card-content"),c.Mb(1,"ion-label",8),c.pc(2),c.Lb(),c.Lb()),2&e){const e=c.Wb();c.yb(2),c.rc(" ",e.text," ")}}const g=[{path:"",component:(()=>{class e{constructor(e,n,t,o,i){this.activatedRoute=e,this.router=n,this.projectsService=t,this.alert=o,this.config=i,this.subscriptions=[],this.messages=[],this.newProject={id:0,authorized:0,editable:0,title:"",image:null,descr:"",leader_name:"",leader_id:0,cost:0,first_day_begin:{hours:0,minutes:0},first_day_end:{hours:0,minutes:0},second_day_begin:{hours:0,minutes:0},second_day_end:{hours:0,minutes:0},min_grade:0,max_grade:0,min_participants:0,max_participants:0,messages:[],participants:[]},this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.text=this.config.get_content("user-project-generation"),this.activatedRoute.paramMap.subscribe(e=>{e.has("ParticipantName")?this.studentUrl=e.get("ParticipantName"):this.router.navigate([""])})}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}changeFile(e){const n=e.target.files[0];n&&(this.image=n)}create(){this.projectsService.createProject("students",this.newProject,this.image).subscribe(e=>{this.alert.alert(e.message),this.router.navigate([this.eventName+"/Sch\xfcler/"+this.studentUrl]),this.projectsService.update.emit()},e=>{this.alert.error("Erstellung des Projektes fehlgeschlagen!",e.error)})}}return e.\u0275fac=function(n){return new(n||e)(c.Jb(r.a),c.Jb(r.g),c.Jb(a.a),c.Jb(l.a),c.Jb(d.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-project-generation"]],decls:116,vars:24,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["color","background",1,"content"],[4,"ngIf"],["name","ProjectForm",3,"ngSubmit"],["form","ngForm"],["color","text"],["color","items"],["color","text","required","","name","ProjectLeader","type","text",3,"ngModel","ngModelChange"],["color","text","required","","name","ProjectName","required","","type","text",3,"ngModel","ngModelChange"],["required","","type","text","name","ProjectDescr","rows","7",3,"ngModel","ngModelChange"],["color","text","name","ProjectImage","accept",".png, .jpg","type","file",3,"change"],["color","text","required","","name","ProjectCost","required","","type","number",3,"ngModel","ngModelChange"],["color","text","required","","name","ProjectFirstTimeBeginn","type","time",3,"ngModel","ngModelChange"],["color","text","required","","name","ProjectFirstTimeEnd","type","time",3,"ngModel","ngModelChange"],["color","text","required","","name","ProjectSecondTimeBeginn","type","time",3,"ngModel","ngModelChange"],["color","text","required","","name","ProjectSecondTimeEnd","type","time",3,"ngModel","ngModelChange"],["color","items","lines","none"],["required","","name","ProjectMinClass","cancelText","Abbrechen","doneText","Ok",3,"selectedText","ngModel","ngModelChange"],["value","5"],["value","6"],["value","7"],["value","8"],["value","9"],["value","10"],["value","11"],["required","","name","ProjectMaxClass","cancelText","Abbrechen","doneText","Ok",3,"selectedText","ngModel","ngModelChange"],["color","text","required","","name","ProjectMinParticipants","required","","type","number",3,"ngModel","ngModelChange"],["color","text","required","","name","ProjectMaxParticipants","required","","type","number",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","expand","block","type","submit",1,"ion-no-margin",3,"disabled"]],template:function(e,n){if(1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",0),c.Mb(2,"ion-button",1),c.Kb(3,"ion-back-button",2),c.Lb(),c.Mb(4,"ion-title"),c.pc(5),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content",3),c.Mb(7,"ion-card",4),c.Mb(8,"ion-card-header",3),c.Mb(9,"ion-card-title"),c.pc(10),c.Lb(),c.Lb(),c.oc(11,s,3,1,"ion-card-content",5),c.Mb(12,"ion-card-content"),c.Mb(13,"form",6,7),c.Ub("ngSubmit",function(){return n.create()}),c.Mb(15,"ion-item-divider",3),c.Mb(16,"ion-label",8),c.pc(17),c.Lb(),c.Lb(),c.Mb(18,"ion-item",9),c.Mb(19,"ion-input",10),c.Ub("ngModelChange",function(e){return n.newProject.leader_name=e}),c.Lb(),c.Lb(),c.Mb(20,"ion-item-divider",3),c.Mb(21,"ion-label",8),c.pc(22),c.Lb(),c.Lb(),c.Mb(23,"ion-item",9),c.Mb(24,"ion-input",11),c.Ub("ngModelChange",function(e){return n.newProject.title=e}),c.Lb(),c.Lb(),c.Mb(25,"ion-item-divider",3),c.Mb(26,"ion-label",8),c.pc(27),c.Lb(),c.Lb(),c.Mb(28,"ion-item",9),c.Mb(29,"ion-textarea",12),c.Ub("ngModelChange",function(e){return n.newProject.descr=e}),c.Lb(),c.Lb(),c.Mb(30,"ion-item-divider",3),c.Mb(31,"ion-label",8),c.pc(32,"Titelbild"),c.Lb(),c.Lb(),c.Mb(33,"ion-item",9),c.Mb(34,"ion-input",13),c.Ub("change",function(e){return n.changeFile(e)}),c.Lb(),c.Lb(),c.Mb(35,"ion-item-divider",3),c.Mb(36,"ion-label",8),c.pc(37,"Kosten"),c.Lb(),c.Lb(),c.Mb(38,"ion-item",9),c.Mb(39,"ion-input",14),c.Ub("ngModelChange",function(e){return n.newProject.cost=e}),c.Lb(),c.pc(40,"\u20ac "),c.Lb(),c.Mb(41,"ion-item-divider",3),c.Mb(42,"ion-label",8),c.pc(43,"1.Tag"),c.Lb(),c.Lb(),c.Mb(44,"ion-item",9),c.Mb(45,"ion-label",8),c.pc(46,"von"),c.Lb(),c.Mb(47,"ion-input",15),c.Ub("ngModelChange",function(e){return n.newProject.first_day_begin=e}),c.Lb(),c.Lb(),c.Mb(48,"ion-item",9),c.Mb(49,"ion-label",8),c.pc(50,"bis"),c.Lb(),c.Mb(51,"ion-input",16),c.Ub("ngModelChange",function(e){return n.newProject.first_day_end=e}),c.Lb(),c.Lb(),c.Mb(52,"ion-item-divider",3),c.Mb(53,"ion-label",8),c.pc(54,"2.Tag"),c.Lb(),c.Lb(),c.Mb(55,"ion-item",9),c.Mb(56,"ion-label",8),c.pc(57,"von"),c.Lb(),c.Mb(58,"ion-input",17),c.Ub("ngModelChange",function(e){return n.newProject.second_day_begin=e}),c.Lb(),c.Lb(),c.Mb(59,"ion-item",9),c.Mb(60,"ion-label",8),c.pc(61,"bis"),c.Lb(),c.Mb(62,"ion-input",18),c.Ub("ngModelChange",function(e){return n.newProject.second_day_end=e}),c.Lb(),c.Lb(),c.Mb(63,"ion-item-divider",3),c.Mb(64,"ion-label",8),c.pc(65,"Klassenstufe"),c.Lb(),c.Lb(),c.Mb(66,"ion-item",19),c.Mb(67,"ion-label",8),c.pc(68,"von"),c.Lb(),c.Mb(69,"ion-select",20),c.Ub("ngModelChange",function(e){return n.newProject.min_grade=e}),c.Mb(70,"ion-select-option",21),c.pc(71,"5"),c.Lb(),c.Mb(72,"ion-select-option",22),c.pc(73,"6"),c.Lb(),c.Mb(74,"ion-select-option",23),c.pc(75,"7"),c.Lb(),c.Mb(76,"ion-select-option",24),c.pc(77,"8"),c.Lb(),c.Mb(78,"ion-select-option",25),c.pc(79,"9"),c.Lb(),c.Mb(80,"ion-select-option",26),c.pc(81,"10"),c.Lb(),c.Mb(82,"ion-select-option",27),c.pc(83,"11"),c.Lb(),c.Lb(),c.Lb(),c.Mb(84,"ion-item",19),c.Mb(85,"ion-label",8),c.pc(86,"bis"),c.Lb(),c.Mb(87,"ion-select",28),c.Ub("ngModelChange",function(e){return n.newProject.max_grade=e}),c.Mb(88,"ion-select-option",21),c.pc(89,"5"),c.Lb(),c.Mb(90,"ion-select-option",22),c.pc(91,"6"),c.Lb(),c.Mb(92,"ion-select-option",23),c.pc(93,"7"),c.Lb(),c.Mb(94,"ion-select-option",24),c.pc(95,"8"),c.Lb(),c.Mb(96,"ion-select-option",25),c.pc(97,"9"),c.Lb(),c.Mb(98,"ion-select-option",26),c.pc(99,"10"),c.Lb(),c.Mb(100,"ion-select-option",27),c.pc(101,"11"),c.Lb(),c.Lb(),c.Lb(),c.Mb(102,"ion-item-divider",3),c.Mb(103,"ion-label",8),c.pc(104,"Teinehmeranzahl"),c.Lb(),c.Lb(),c.Mb(105,"ion-item",9),c.Mb(106,"ion-label",8),c.pc(107,"von"),c.Lb(),c.Mb(108,"ion-input",29),c.Ub("ngModelChange",function(e){return n.newProject.min_participants=e}),c.Lb(),c.Lb(),c.Mb(109,"ion-item",9),c.Mb(110,"ion-label",8),c.pc(111,"bis"),c.Lb(),c.Mb(112,"ion-input",30),c.Ub("ngModelChange",function(e){return n.newProject.max_participants=e}),c.Lb(),c.Lb(),c.Mb(113,"div",31),c.Mb(114,"ion-button",32),c.pc(115),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e){const e=c.jc(14);c.yb(3),c.dc("defaultHref","",n.eventName,"/Sch\xfcler/",n.studentUrl,""),c.yb(2),c.rc("",n.projectNoun," erstellen"),c.yb(5),c.rc("",n.projectNoun," erstellen"),c.yb(1),c.bc("ngIf",n.text),c.yb(6),c.rc("",n.projectNoun,"leiter"),c.yb(2),c.bc("ngModel",n.newProject.leader_name),c.yb(3),c.rc("",n.projectNoun,"name"),c.yb(2),c.bc("ngModel",n.newProject.title),c.yb(3),c.rc("",n.projectNoun,"beschreibung"),c.yb(2),c.bc("ngModel",n.newProject.descr),c.yb(10),c.bc("ngModel",n.newProject.cost),c.yb(8),c.bc("ngModel",n.newProject.first_day_begin),c.yb(4),c.bc("ngModel",n.newProject.first_day_end),c.yb(7),c.bc("ngModel",n.newProject.second_day_begin),c.yb(4),c.bc("ngModel",n.newProject.second_day_end),c.yb(7),c.bc("selectedText",n.newProject.min_grade)("ngModel",n.newProject.min_grade),c.yb(18),c.bc("selectedText",n.newProject.max_grade)("ngModel",n.newProject.max_grade),c.yb(21),c.bc("ngModel",n.newProject.min_participants),c.yb(4),c.bc("ngModel",n.newProject.max_participants),c.yb(2),c.bc("disabled",e.invalid),c.yb(1),c.rc("",n.projectNoun," erstellen")}},directives:[b.t,b.R,b.h,b.e,b.f,b.P,b.p,b.j,b.l,b.n,o.j,b.k,i.k,i.g,i.h,b.y,b.A,b.x,b.w,b.ab,i.j,i.f,i.i,b.O,b.V,b.I,b.Z,b.J],styles:[""]}),e})()}];let M=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(n){return new(n||e)},imports:[[o.b,i.a,b.S,r.k.forChild(g)]]}),e})()}}]);