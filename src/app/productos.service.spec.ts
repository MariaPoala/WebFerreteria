import { TestBed } from '@angular/core/testing';

import { ProductosService } from './productos.service';
import { beforeEach, describe, it } from 'node:test';

describe('ProductosService', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
