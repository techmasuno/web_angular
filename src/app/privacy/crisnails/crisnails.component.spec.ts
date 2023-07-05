import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisnailsComponent } from './crisnails.component';

describe('CrisnailsComponent', () => {
  let component: CrisnailsComponent;
  let fixture: ComponentFixture<CrisnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisnailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
