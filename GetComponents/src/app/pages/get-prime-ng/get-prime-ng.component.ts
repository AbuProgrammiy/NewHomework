import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CarModel } from '../../models/car-model';
import { CRUDserviceService } from '../../services/crudservice.service';


@Component({
  selector: 'app-get-prime-ng',
  templateUrl: './get-prime-ng.component.html',
  styleUrl: './get-prime-ng.component.scss'
})
export class GetPrimeNGComponent {
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
