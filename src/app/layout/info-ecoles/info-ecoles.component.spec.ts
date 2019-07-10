import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoElevesComponent } from './info-eleves.component';

describe('InfoElevesComponent', () => {
  let component: InfoElevesComponent;
  let fixture: ComponentFixture<InfoElevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoElevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
