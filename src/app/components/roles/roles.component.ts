import { Component } from '@angular/core';
import { FilterComponent } from '../common/filter/filter.component'
import { RoleCardComponent } from './role-card/role-card.component';
import { FilterService } from '../../services/filter.service';
import { ApiService } from '../../services/api.service';
import { EmployeeDto } from '../../models/employeeDto.interface';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FilterComponent,RoleCardComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

}
