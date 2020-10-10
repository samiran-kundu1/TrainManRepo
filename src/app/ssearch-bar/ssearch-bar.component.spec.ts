import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsearchBarComponent } from './ssearch-bar.component';

describe('SsearchBarComponent', () => {
  let component: SsearchBarComponent;
  let fixture: ComponentFixture<SsearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
