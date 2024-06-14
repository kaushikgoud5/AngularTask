import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/common/side-menu/side-menu.component';
import { NavBarComponent } from './components/common/navbar/navbar.component';
import { NgClass } from '@angular/common';
import { FilterComponent } from './components/common/filter/filter.component';
import { DataTableComponent } from './components/employee/home/data-table/data-table.component';
import { ToasterComponent } from './components/common/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideMenuComponent,NavBarComponent,NgClass,FilterComponent,DataTableComponent,ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management-system';
  isSideBarHidden:boolean=true;
  isNavHidden(event:boolean){
    this.isSideBarHidden=event;
  }



}

