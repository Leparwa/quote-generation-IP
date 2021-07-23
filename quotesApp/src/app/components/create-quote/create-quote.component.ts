import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { quotes } from 'src/app/sharedResources/data/sampleData.data';
import { IQuote } from 'src/app/sharedResources/models/iquote';
import { createquoteFrom } from '../../sharedResources/forms/createQuoteForm';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})

export class CreateQuoteComponent implements OnInit {
form = new FormGroup({});
fields:FormlyFieldConfig[]=[]
model:{}={}
quotes:IQuote[]=[]
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {

    this.fields= createquoteFrom.fields
    this.quotes = quotes
  }
  createQuote(model:any){
    console.log(model)
    const defaultValues={
      ...model,
      likes:[
        {
          likeId:Math.random().toLocaleString,
          likedBy:'user'
        }
      ],
      dislikes:[
        {
          dislikeId:Math.random().toLocaleString,
          dislikedBy:'user'
        }
      ]
    }
    this.quotes.push(defaultValues)
    this.router.navigateByUrl('/')
  }
}
