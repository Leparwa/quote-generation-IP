import { FormlyFieldConfig } from "@ngx-formly/core";

export interface IQuote {
    quote:string,
    quoteBy:string,
    createdBy:string,
    aboutQuoteCreator:string
}
export interface formFieldsConfig extends FormlyFieldConfig{
}
export interface Iform{
    fields:formFieldsConfig[]
}
