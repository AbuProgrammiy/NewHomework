import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPrimeNGComponent } from './get-prime-ng.component';

describe('GetPrimeNGComponent', () => {
  let component: GetPrimeNGComponent;
  let fixture: ComponentFixture<GetPrimeNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetPrimeNGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPrimeNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
