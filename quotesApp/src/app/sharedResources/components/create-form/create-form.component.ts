import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { createquoteFrom } from '../../forms/createQuoteForm';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
@Input() fields:any
@Output() model = new EventEmitter()
@Input() form:any
  constructor() { }

  ngOnInit(): void {
  }
submit(){
  
}
}
