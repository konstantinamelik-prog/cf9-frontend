import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step10TemplateDriverForms } from './step10-template-driven-forms';

describe('Step10TemplateDriverForms', () => {
  let component: Step10TemplateDriverForms;
  let fixture: ComponentFixture<Step10TemplateDriverForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step10TemplateDriverForms],
    }).compileComponents();

    fixture = TestBed.createComponent(Step10TemplateDriverForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
