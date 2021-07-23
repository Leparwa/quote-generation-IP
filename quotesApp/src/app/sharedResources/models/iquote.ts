import { FormlyFieldConfig } from "@ngx-formly/core";

export interface IQuote {
    quote:string,
    quoteBy:string,
    createdBy:string,
    aboutQuoteCreator:string
    quoteScore?:number,
    likes?:[
      {
        likeId:string,
        likedBy:string
      }
    ]
    dislikes?:[
        {
        dislikeId:string,
        dislikedBy:string
        }
    ]

}
export interface formFieldsConfig extends FormlyFieldConfig{
}
export interface Iform{
    fields:formFieldsConfig[]
}
