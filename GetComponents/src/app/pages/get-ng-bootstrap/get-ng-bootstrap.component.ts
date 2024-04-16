import { Component } from '@angular/core';
import { CarModel } from '../../models/car-model';
import { CRUDserviceService } from '../../services/crudservice.service';

@Component({
  selector: 'app-get-ng-bootstrap',
  templateUrl: './get-ng-bootstrap.component.html',
  styleUrl: './get-ng-bootstrap.component.scss',
})
export class GetNgBootstrapComponent {
  isCollapsed = true;
  cars!: CarModel[];

  constructor(private crudService: CRUDserviceService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.crudService.getAll().subscribe({
      next: (data) => {
        this.cars = data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
