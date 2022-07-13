import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const projects: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Projects List', icon: 'person', class: '' },
  { path: '/table-list', title: 'Add New project', icon: 'content_paste', class: '' },
  { path: '/typography', title: 'Define Project Categories', icon: 'library_books', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

export const sensors: RouteInfo[] = [
  { path: '/dashboard', title: 'Sensors List',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Add New Sensor',  icon:'person', class: '' },
  { path: '/table-list', title: 'Strength Prediction',  icon:'content_paste', class: '' },
  { path: '/typography', title: 'Data Analysis',  icon:'library_books', class: '' },
  { path: '/icons', title: 'Define Mixes',  icon:'bubble_chart', class: '' },
  { path: '/maps', title: 'Define Threshholds',  icon:'location_on', class: '' },
  { path: '/notifications', title: 'o	Settings',  icon:'notifications', class: '' },

];




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  projects: any[];
  sensors: any[];

  constructor() { }

  ngOnInit() {
    this.projects = projects.filter(menuItem => menuItem);
    this.sensors = sensors.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
