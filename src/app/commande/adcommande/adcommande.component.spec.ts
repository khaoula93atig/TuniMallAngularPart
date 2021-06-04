import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcommandeComponent } from './adcommande.component';

describe('AdcommandeComponent', () => {
  let component: AdcommandeComponent;
  let fixture: ComponentFixture<AdcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
