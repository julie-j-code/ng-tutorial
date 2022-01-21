import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideElements]'
})
export class HideElementsDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.color="green"
    // elem.nativeElement.style.display="none"
  }

}
