import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNgBootstrapComponent } from './get-ng-bootstrap.component';

describe('GetNgBootstrapComponent', () => {
  let component: GetNgBootstrapComponent;
  let fixture: ComponentFixture<GetNgBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetNgBootstrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetNgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
