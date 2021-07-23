import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesRankingComponent } from './quotes-ranking.component';

describe('QuotesRankingComponent', () => {
  let component: QuotesRankingComponent;
  let fixture: ComponentFixture<QuotesRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
