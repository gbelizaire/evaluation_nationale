import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampsSaisieComponent } from './champs-saisie.component';

describe('ChampsSaisieComponent', () => {
  let component: ChampsSaisieComponent;
  let fixture: ComponentFixture<ChampsSaisieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampsSaisieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampsSaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
