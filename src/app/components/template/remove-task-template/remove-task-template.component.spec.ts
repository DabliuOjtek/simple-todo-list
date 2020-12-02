import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTaskTemplateComponent } from './remove-task-template.component';

describe('RemoveTaskTemplateComponent', () => {
  let component: RemoveTaskTemplateComponent;
  let fixture: ComponentFixture<RemoveTaskTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTaskTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTaskTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
