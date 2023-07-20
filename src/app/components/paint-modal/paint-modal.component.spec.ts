import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintModalComponent } from './paint-modal.component';

describe('PaintModalComponent', () => {
  let component: PaintModalComponent;
  let fixture: ComponentFixture<PaintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
