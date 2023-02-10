import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatDataComponent } from './creat-data.component';

describe('CreatDataComponent', () => {
  let component: CreatDataComponent;
  let fixture: ComponentFixture<CreatDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
