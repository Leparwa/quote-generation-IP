import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { createquoteFrom } from '../sharedResources/forms/createQuoteForm';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
form = new FormGroup({});
fields:FormlyFieldConfig[]=[]
model:{}={}
  constructor() { }

  ngOnInit(): void {
    this.fields= createquoteFrom.fields
  }

}
