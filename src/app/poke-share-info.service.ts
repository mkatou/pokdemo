import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  value: string | undefined;

  getValue(){
    return this.value;
  }

  setValue(value: string){
    this.value = value
  }
}
