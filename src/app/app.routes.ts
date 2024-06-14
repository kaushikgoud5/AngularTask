import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employee/add-update-view/add-employee.component';
import { HomeComponent } from './components/employee/home/home.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { RolesComponent } from './components/roles/roles.component';
import { RolesDetailsComponent } from './components/roles/roles-details/roles-details.component';
import { RouteEnum } from './enums/route.enum';
import { NotFoundComponent } from './components/common/not-found/not-found.component';

export const routes: Routes = [
    {path:'employee',component:HomeComponent},
    {path:'',redirectTo:'/employee',pathMatch:'full'},
    {path:'employee/addEmployee',component:AddEmployeeComponent,data:{'action':RouteEnum.AddEmployee},canDeactivate:[(comp:AddEmployeeComponent)=>{return comp.canExit()}]},
    {path:'employee/addEmployee/:id',component:AddEmployeeComponent,data:{'action':RouteEnum.EditEmployee},canDeactivate:[(comp:AddEmployeeComponent)=>{return comp.canExit()}]},
    {path:'employee/addEmployee/view/:id',component:AddEmployeeComponent,data:{'action':RouteEnum.ViewEmployee}},
    {path:'roles/addRole',component:AddRoleComponent,canDeactivate:[(comp:AddRoleComponent)=>{return comp.canExit()}]},
    {path:'roles',loadComponent:()=>import('./components/roles/roles.component').then((c)=>c.RolesComponent)},
    {path:'roles/roleDetails',component:RolesDetailsComponent},
    {path:'**',component:NotFoundComponent}
    ];
