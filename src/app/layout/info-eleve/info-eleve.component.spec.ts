import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEleveComponent } from './info-eleve.component';

describe('InfoEleveComponent', () => {
  let component: InfoEleveComponent;
  let fixture: ComponentFixture<InfoEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
