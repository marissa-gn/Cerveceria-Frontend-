import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoImagenesComponent } from './catalogo-imagenes.component';

describe('CatalogoImagenesComponent', () => {
  let component: CatalogoImagenesComponent;
  let fixture: ComponentFixture<CatalogoImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoImagenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
