import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuote } from '../../models/iquote';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {
@Input() quote:any
@Input() index:any
@Output() like= new EventEmitter()
@Output() dislike= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  likeQuote(){
    this.like.emit(this.index)
  }
  dislikeQuote(){
    this.dislike.emit(this.index)
  }
}
