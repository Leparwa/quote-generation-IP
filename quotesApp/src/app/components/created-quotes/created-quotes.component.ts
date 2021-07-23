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
  let likes=this.quotes[index].likes?.length
  let dlikes=this.quotes[index].dislikes?.length

  this.calculateScore(likes, dlikes, index)
}

dislikeQuote(index:number){
  const dislike={
    dislikeId:Math.random().toLocaleString(),
    dislikedBy:'user'
  }
  this.quotes[index].dislikes?.push(dislike)
  let likes=this.quotes[index].likes?.length
  let dlikes=this.quotes[index].dislikes?.length
  this.calculateScore(likes, dlikes, index)
}

calculateScore(likes:any, dlikes:any, index:number){
let total = ((likes - dlikes)/(likes+dlikes))*100
console.log(total)
this.quotes[index].quoteScore= Math.round(total)
}
}
