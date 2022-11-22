import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProductComponent } from './c-product.component';

describe('CProductComponent', () => {
  let component: CProductComponent;
  let fixture: ComponentFixture<CProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
