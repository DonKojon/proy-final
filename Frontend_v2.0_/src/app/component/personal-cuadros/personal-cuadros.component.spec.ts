import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCuadrosComponent } from './personal-cuadros.component';

describe('PersonalCuadrosComponent', () => {
  let component: PersonalCuadrosComponent;
  let fixture: ComponentFixture<PersonalCuadrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalCuadrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
