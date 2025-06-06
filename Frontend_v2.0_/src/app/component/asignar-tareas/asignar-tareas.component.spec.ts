import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarTareasComponent } from './asignar-tareas.component';

describe('AsignarTareasComponent', () => {
  let component: AsignarTareasComponent;
  let fixture: ComponentFixture<AsignarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignarTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
