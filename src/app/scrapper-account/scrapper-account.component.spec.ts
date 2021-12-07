import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapperAccountComponent } from './scrapper-account.component';

describe('ScrapperAccountComponent', () => {
  let component: ScrapperAccountComponent;
  let fixture: ComponentFixture<ScrapperAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapperAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapperAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
