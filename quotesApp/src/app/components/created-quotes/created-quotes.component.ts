import { Component, OnInit } from '@angular/core';
import { quotes } from 'src/app/sharedResources/data/sampleData.data';
import { IQuote } from 'src/app/sharedResources/models/iquote';

@Component({
  selector: 'app-created-quotes',
  templateUrl: './created-quotes.component.html',
  styleUrls: ['./created-quotes.component.css']
})
export class CreatedQuotesComponent implements OnInit {
quotes:IQuote[]=[]
  constructor() { }

  ngOnInit(): void {
    this.quotes=quotes
  }
likeQuote(index:number){
  const like={
    likeId:Math.random().toLocaleString(),
    likedBy:'user'
  }
  this.quotes[index].likes?.push(like)
}
dislikeQuote(index:number){
  const dislike={
    dislikeId:Math.random().toLocaleString(),
    dislikedBy:'user'
  }
  this.quotes[index].dislikes?.push(dislike)
   
  
console.log(index)
}
}
