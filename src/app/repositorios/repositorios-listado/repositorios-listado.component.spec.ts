/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepositoriosListadoComponent } from './repositorios-listado.component';

describe('RepositoriosListadoComponent', () => {
  let component: RepositoriosListadoComponent;
  let fixture: ComponentFixture<RepositoriosListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
