import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappliedjobsComponent } from './viewappliedjobs.component';

describe('ViewappliedjobsComponent', () => {
  let component: ViewappliedjobsComponent;
  let fixture: ComponentFixture<ViewappliedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewappliedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappliedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
