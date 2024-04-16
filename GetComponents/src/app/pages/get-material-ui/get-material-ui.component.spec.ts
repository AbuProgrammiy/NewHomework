import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMaterialUIComponent } from './get-material-ui.component';

describe('GetMaterialUIComponent', () => {
  let component: GetMaterialUIComponent;
  let fixture: ComponentFixture<GetMaterialUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetMaterialUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetMaterialUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
