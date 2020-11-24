import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskTemplateComponent } from './new-task-template.component';

describe('NewTaskTemplateComponent', () => {
  let component: NewTaskTemplateComponent;
  let fixture: ComponentFixture<NewTaskTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
