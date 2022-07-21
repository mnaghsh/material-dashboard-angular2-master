import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const projects: RouteInfo[] = [
  { path: '/icons', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/project-list', title: 'Projects List', icon: 'person', class: '' },
  { path: '/table-list', title: 'Add New project', icon: 'content_paste', class: '' },
  { path: '/typography', title: 'Define Project Categories', icon: 'library_books', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

export const sensors: RouteInfo[] = [
  { path: '/icons', title: 'Sensors List',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Add New Sensor',  icon:'person', class: '' },
  { path: '/table-list', title: 'Strength Prediction',  icon:'content_paste', class: '' },
  { path: '/typography', title: 'Data Analysis',  icon:'library_books', class: '' },
  { path: '/icons', title: 'Define Mixes',  icon:'bubble_chart', class: '' },
  { path: '/maps', title: 'Define Threshholds',  icon:'location_on', class: '' },
  { path: '/notifications', title: 'o	Settings',  icon:'notifications', class: '' },

];
export const collabrations: RouteInfo[] = [
  { path: '/icons', title: '.',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: '.',  icon:'person', class: '' }
  

];
export const profile: RouteInfo[] = [
  { path: '/table-list', title: 'User Profile',  icon: 'dashboard', class: '' },
  { path: '/typography', title: 'Edit Profile',  icon:'person', class: '' },
  { path: '/maps', title: 'Define Company',  icon:'content_paste', class: '' },
  { path: '/notifications', title: 'List of Invoices',  icon:'library_books', class: '' },
  { path: '/icons', title: 'Activity Log',  icon:'bubble_chart', class: '' },

];
export const support: RouteInfo[] = [
  { path: '/icons', title: 'Tickets List',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'New Ticket',  icon:'person', class: '' },
 
];
export const apps: RouteInfo[] = [
  { path: '/icons', title: 'Calendar',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Strength Calculation ',  icon:'person', class: '' },


];




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  projects: any[];
  collabrations: any[];
  profile: any[];
  support: any[];
  apps: any[];
  sensors: any[];

  constructor() { }

  ngOnInit() {
    this.projects = projects.filter(menuItem => menuItem);
    this.sensors = sensors.filter(menuItem => menuItem);
    this.collabrations = collabrations.filter(menuItem => menuItem);
    this.profile = profile.filter(menuItem => menuItem);
    this.support = support.filter(menuItem => menuItem);
    this.apps = apps.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
