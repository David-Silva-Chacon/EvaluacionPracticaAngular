/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuariosDetalleComponent } from './usuarios-detalle.component';

describe('UsuariosDetalleComponent', () => {
  let component: UsuariosDetalleComponent;
  let fixture: ComponentFixture<UsuariosDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
