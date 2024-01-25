import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPageContentComponent } from './layout-page-content.component';

describe('LayoutPageContentComponent', () => {
  let component: LayoutPageContentComponent;
  let fixture: ComponentFixture<LayoutPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPageContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
