(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-leader-page-leader-project-administration-leader-project-administration-module"],{

/***/ "2a+d":
/*!**********************************************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-project-administration/leader-project-administration.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LeaderProjectAdministrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderProjectAdministrationPageModule", function() { return LeaderProjectAdministrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leader_project_administration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leader-project-administration.page */ "YElX");







const routes = [
    {
        path: '',
        component: _leader_project_administration_page__WEBPACK_IMPORTED_MODULE_6__["LeaderProjectAdministrationPage"]
    }
];
let LeaderProjectAdministrationPageModule = class LeaderProjectAdministrationPageModule {
};
LeaderProjectAdministrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_leader_project_administration_page__WEBPACK_IMPORTED_MODULE_6__["LeaderProjectAdministrationPage"]]
    })
], LeaderProjectAdministrationPageModule);



/***/ }),

/***/ "YElX":
/*!********************************************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-project-administration/leader-project-administration.page.ts ***!
  \********************************************************************************************************/
/*! exports provided: LeaderProjectAdministrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderProjectAdministrationPage", function() { return LeaderProjectAdministrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leader_project_administration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leader-project-administration.page.html */ "rrjQ");
/* harmony import */ var _leader_project_administration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leader-project-administration.page.scss */ "lf5+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/schedule.service */ "OeS+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let LeaderProjectAdministrationPage = class LeaderProjectAdministrationPage {
    constructor(activatedRoute, router, scheduleService, projectsService, config) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.scheduleService = scheduleService;
        this.projectsService = projectsService;
        this.config = config;
        this.subscriptions = [];
        this.loadedLeader = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            project_id: 0,
        };
        this.leadedProject = {
            id: 0,
            authorized: 0,
            editable: 0,
            title: '',
            image: '',
            descr: '',
            leader_name: '',
            leader_id: 0,
            cost: 0,
            first_day_begin: {
                hours: 0,
                minutes: 0,
            },
            first_day_end: {
                hours: 0,
                minutes: 0,
            },
            second_day_begin: {
                hours: 0,
                minutes: 0,
            },
            second_day_end: {
                hours: 0,
                minutes: 0,
            },
            min_grade: 0,
            max_grade: 0,
            min_participants: 0,
            max_participants: 0,
            messages: [],
            participants: []
        };
        /**
         * Contains the time schedule of the application
         */
        this.schedule = {
            id: 1,
            begin: null,
            control: null,
            registration: null,
            sort_students: null,
            exchange: null,
            projects: null,
            end: null
        };
        this.imageUrl = this.config.backend_config.imageUrl;
        this.projectNoun = this.config.app_config.project_noun;
        /**
         * Conatins the name of the event that the application is used for
         */
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.leaderLoadingProject = this.config.get_error('leader-loading_project');
        this.leaderWrongTime = this.config.get_error('leader-wrong_time');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('LeaderName')) {
                this.router.navigate(['']);
                return;
            }
            this.leaderUrl = paramMap.get('LeaderName');
        });
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getProject();
        this.subscriptions.push(this.projectsService.update.subscribe(() => this.getProject()));
    }
    /**
     * Unsubscribes from all events when the page is unloaded
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getProject() {
        this.projectsService.getSelfLeadedProject('leaders').subscribe(data => {
            this.leadedProject = data.data;
        });
    }
};
LeaderProjectAdministrationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
LeaderProjectAdministrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-administration',
        template: _raw_loader_leader_project_administration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leader_project_administration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaderProjectAdministrationPage);



/***/ }),

/***/ "lf5+":
/*!**********************************************************************************************************!*\
  !*** ./src/app/log-in/leader-page/leader-project-administration/leader-project-administration.page.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: auto;\n  margin: 10px auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGVhZGVyLXByb2plY3QtYWRtaW5pc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoibGVhZGVyLXByb2plY3QtYWRtaW5pc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gYXV0byBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "rrjQ":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/leader-page/leader-project-administration/leader-project-administration.page.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/{{ projectNoun}}leiter/{{ leaderUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>{{ projectNoun }}</ion-title>\n    <ion-button *ngIf=\" !!+leadedProject.editable == false || currentDate <= this.schedule.control || currentDate > this.schedule.registration\" [disabled]=\"currentDate <= this.schedule.begin || currentDate > this.schedule.control\" color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"currentDate > this.schedule.control && currentDate <= this.schedule.registration && !!+leadedProject.editable == true\" color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\" *ngIf=\"leadedProject.leader_id == null && leadedProject.title == null && leadedProject.authorized == null\" class=\"content\">\n    <ion-card-content>\n      <ion-text color=\"danger\">{{ leaderLoadingProject }}</ion-text>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\" *ngIf=\"!!+loadedLeader.project_id != null\" class=\"content\">\n    <ion-img *ngIf=\"leadedProject.image != '' && leadedProject.image != null\" src='{{ imageUrl }}{{ leadedProject.image }}'></ion-img>\n    <ion-card-header>\n      <ion-card-title>{{ leadedProject.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-group>\n        <ion-item color=\"items\" lines=\"none\" class=\"descr\">\n          <ion-text color=\"text\">{{ leadedProject.descr }}</ion-text>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Leiter</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ leadedProject.leader_name }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Kosten</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ leadedProject.cost }}€</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Zeitraum</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">1.Tag:  {{ leadedProject.first_day_begin }} bis {{ leadedProject.first_day_end }}</ion-label>\n        </ion-item>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">2.Tag:  {{ leadedProject.second_day_begin }} bis {{ leadedProject.second_day_end }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Klassenstufe</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">{{ leadedProject.min_grade }}. bis {{ leadedProject.max_grade }}.Klasse</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teinehmeranzahl</ion-label>\n        </ion-item-divider>\n        <ion-item color=\"items\" lines=\"none\">\n          <ion-label color=\"text\">von {{ leadedProject.min_participants }} bis {{ leadedProject.max_participants }}</ion-label>\n        </ion-item>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Nachrichten</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"leadedProject.messages.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let message of leadedProject.messages\">\n            <ion-card class=\"message\" color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"buttons\">{{ message.sender_name }}</ion-text><br>\n                <ion-text color=\"text\">{{ message.message }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <ion-item-divider color=\"background\">\n          <ion-label color=\"text\">Teilnehmer</ion-label>\n        </ion-item-divider>\n        <div *ngIf=\"leadedProject.participants.length\">\n          <ion-item color=\"items\" lines=\"none\" *ngFor=\"let participant of leadedProject.participants\">\n            <ion-card color=\"background\">\n              <ion-card-content>\n                <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n        </div>\n        <div class=\"ion-padding\">\n          <ion-button color=\"buttons\" *ngIf=\" !!+leadedProject.editable == false || currentDate <= this.schedule.control || currentDate > this.schedule.registration\" [disabled]=\"currentDate <= this.schedule.begin || currentDate > this.schedule.control\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">{{ projectNoun }} bearbeiten</ion-button>\n          <ion-button color=\"buttons\" *ngIf=\"currentDate > this.schedule.control && currentDate <= this.schedule.registration && !!+leadedProject.editable == true\" expand=\"block\" class=\"ion-no-margin\"  color=\"buttons\" routerLink='./{{ projectNoun }} bearbeiten' slot=\"end\">{{ projectNoun }} nachbessern</ion-button>\n          <ion-text *ngIf=\"currentDate <= this.schedule.begin && !!+leadedProject.editable == false || currentDate > this.schedule.control && !!+leadedProject.editable == false\" color=\"text\">{{ leaderWrongTime }}</ion-text>\n        </div>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=log-in-leader-page-leader-project-administration-leader-project-administration-module-es2015.js.map