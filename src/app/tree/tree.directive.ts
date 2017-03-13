import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[changeColor]',
    host: {
        '(mouseenter)': 'onMouseEnter($event.target)',
        '(mouseleave)': 'onMouseLeave($event.target)'
    }
})
export class ChangeColorDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'red';
    }

    onMouseEnter() {
        this.el.nativeElement.querySelector('.span-name').style.display = 'none';
        this.el.nativeElement.querySelector('.span-input').style.display = 'block';
    }

    onMouseLeave() {
        this.el.nativeElement.querySelector('.span-name').style.display = 'block';
        this.el.nativeElement.querySelector('.span-input').style.display = 'none';
    }
}