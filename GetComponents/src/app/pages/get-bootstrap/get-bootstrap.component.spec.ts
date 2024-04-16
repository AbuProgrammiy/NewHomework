import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBootstrapComponent } from './get-bootstrap.component';

describe('GetBootstrapComponent', () => {
  let component: GetBootstrapComponent;
  let fixture: ComponentFixture<GetBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetBootstrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
