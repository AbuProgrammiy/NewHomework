import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../models/car-model';
import { CRUDserviceService } from '../../services/crudservice.service';

@Component({
  selector: 'app-get-bootstrap',
  templateUrl: './get-bootstrap.component.html',
  styleUrl: './get-bootstrap.component.scss'
})
export class GetBootstrapComponent implements OnInit {
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
