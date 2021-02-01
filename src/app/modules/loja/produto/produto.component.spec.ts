import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoComponent } from '../../produto/produto.component';

import { LojaProdutoComponent } from './produto.component';

describe('ProdutoComponent', () => {
  let component: LojaProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
