import { TestBed } from '@angular/core/testing';

import { CathegoryProduitService } from './cathegory-produit.service';

describe('CathegoryProduitService', () => {
  let service: CathegoryProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CathegoryProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
