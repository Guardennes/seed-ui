import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAppComponent } from './create-new-app.component';

describe('CreateNewAppComponent', () => {
  let component: CreateNewAppComponent;
  let fixture: ComponentFixture<CreateNewAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
