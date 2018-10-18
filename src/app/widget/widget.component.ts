import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(public authService:AuthService, private router: Router) { }

  ngOnInit() {
  }
  

  dashboardPage() {
    this.router.navigate(['/dashboard']);
  }

  settingPage() {
    this.router.navigate(['/userSettings']);
  }

  widgetPage() {
    this.router.navigate(['/widget']);
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}