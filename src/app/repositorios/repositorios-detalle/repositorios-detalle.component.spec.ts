/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepositoriosDetalleComponent } from './repositorios-detalle.component';

describe('RepositoriosDetalleComponent', () => {
  let component: RepositoriosDetalleComponent;
  let fixture: ComponentFixture<RepositoriosDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
