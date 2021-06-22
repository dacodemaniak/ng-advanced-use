import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutRowComponent } from './logout-row.component';

describe('LogoutRowComponent', () => {
  let component: LogoutRowComponent;
  let fixture: ComponentFixture<LogoutRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
