import { Component, OnInit } from '@angular/core';
import { quotes } from 'src/app/sharedResources/data/sampleData.data';
import { IQuote } from 'src/app/sharedResources/models/iquote';

@Component({
  selector: 'app-quotes-ranking',
  templateUrl: './quotes-ranking.component.html',
  styleUrls: ['./quotes-ranking.component.css']
})
export class QuotesRankingComponent implements OnInit {
quotes:IQuote[]=[]
  constructor() { }

  ngOnInit(): void {
    let unsoterdQuote= quotes
 this.sortAnArray(unsoterdQuote)

  }

  sortAnArray(unsortedQuote:IQuote[]){
   let final= unsortedQuote.sort((a:any, b:any) => {
      return a.quoteScore - b.quoteScore;
  });
  this.quotes= final
  }
}
