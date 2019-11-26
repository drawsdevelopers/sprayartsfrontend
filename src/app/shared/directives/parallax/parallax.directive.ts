import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('ratio') parallaxRatio = 1;
  // tslint:disable-next-line: no-input-rename
  @Input('opacity') parallaxOpacity = false;
  // tslint:disable-next-line: no-input-rename
  @Input('deslocationY') parallaxDeslocation = 1;
  // tslint:disable-next-line: no-inferrable-types
  initialTop: number = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    document.getElementById(this.eleRef.nativeElement.id);

    this.eleRef.nativeElement.style.top =
      this.initialTop - window.scrollY * this.parallaxRatio + 'px';

    if (this.parallaxOpacity) {
      this.aplyOpacity(event);
    }

    // this.aplyDeslocationY(event);
  }

  aplyDeslocationY(event) {
    this.eleRef.nativeElement.style.top =
      this.initialTop - window.scrollY * this.parallaxRatio + 'px';
  }

  aplyOpacity(event) {
    this.eleRef.nativeElement.style.opacity =
      1 - window.scrollY / window.scrollY > 600
        ? window.scrollY + 600
        : 600 + '';
  }
}
