import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTropaComponent } from './personal-tropa.component';

describe('PersonalTropaComponent', () => {
  let component: PersonalTropaComponent;
  let fixture: ComponentFixture<PersonalTropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalTropaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalTropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
