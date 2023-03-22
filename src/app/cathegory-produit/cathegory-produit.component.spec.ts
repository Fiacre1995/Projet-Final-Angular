import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CathegoryProduitComponent } from './cathegory-produit.component';

describe('CathegoryProduitComponent', () => {
  let component: CathegoryProduitComponent;
  let fixture: ComponentFixture<CathegoryProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CathegoryProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CathegoryProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
