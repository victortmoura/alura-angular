import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    constructor(private el: ElementRef) {}
}