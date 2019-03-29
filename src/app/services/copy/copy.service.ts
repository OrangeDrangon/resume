import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  public constructor() { }

  public copy(message: string) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', message);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
}
