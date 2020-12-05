import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadersService } from 'src/app/leaders.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { Projectleader } from 'src/models/Projectleader';
import { ConfigService } from 'src/app/config.service';
import { ScheduleService } from 'src/app/schedule.service';
import { AlertService } from 'src/app/alert.service';
import { ProjectsService } from 'src/app/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leader-page',
  templateUrl: './leader-page.page.html',
  styleUrls: ['./leader-page.page.scss'],
})
export class LeaderPagePage implements OnInit {
  private subscriptions: Subscription[] = [];

  loadedLeader: Projectleader = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    project_id: 0
  };

  schedule: Schedule = {
    id: 1,
    begin: null,
    control: null,
    registration: null,
    sort_students: null,
    exchange: null,
    projects: null,
    end: null
  };

  currentDate: any;

  text: string;

  buttonPressed = true;

  projectNoun = this.config.app_config.project_noun;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private leadersService: LeadersService,
              private projectsService: ProjectsService,
              private scheduleService: ScheduleService,
              private config: ConfigService,
              private alert: AlertService) { }

  ngOnInit() {
    this.text = this.config.get_content('leader-page');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('LeaderName')) {
        this.router.navigate(['']);
        return;
      }
    });

    this.getSchedule();
    this.getLeader();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.leadersService.update.subscribe(() => this.getLeader()),
      this.projectsService.update.subscribe(() => this.getLeader())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getSchedule() {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  getLeader() {
    this.leadersService.getSelfLeader().subscribe(data => {
      this.loadedLeader = data.data;

      if (this.loadedLeader.email_verified_at == null) {
        this.buttonPressed = false;
      }
    });
  }

  refresh() {
    this.getLeader();
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  sendVerificationEmail() {
    this.leadersService.sendAuthentificationEmailSubscribe().subscribe(data => {
      this.alert.alert(data.message);
      this.buttonPressed = true;
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

  logout() {
    this.leadersService.logOutLeader();
  }

  deleteAccount() {
    this.leadersService.destroySelfLeader();
  }

}
