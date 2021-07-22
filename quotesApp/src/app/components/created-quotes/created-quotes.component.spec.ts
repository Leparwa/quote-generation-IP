import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedQuotesComponent } from './created-quotes.component';

describe('CreatedQuotesComponent', () => {
  let component: CreatedQuotesComponent;
  let fixture: ComponentFixture<CreatedQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
