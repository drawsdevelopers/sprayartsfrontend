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
    this.initialTop =
      this.eleRef.nativeElement.getBoundingClientRect().top - 100;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    console.log(this.eleRef.nativeElement);

    document.getElementById(this.eleRef.nativeElement.id);

    this.eleRef.nativeElement.style.top =
      this.initialTop - window.scrollY * this.parallaxRatio + 'px';

    if (this.parallaxOpacity) {
      this.aplyOpacity(event);
    }

    // this.aplyDeslocationY(event);
  }

  aplyDeslocationY(event) {
    this.eleRef.nativeElement.style.backgroundPositionY =
      this.initialTop - window.scrollY / this.parallaxDeslocation + 'px';
  }

  aplyOpacity(event) {
    this.eleRef.nativeElement.style.opacity =
      1 - window.scrollY / window.scrollY > 600
        ? window.scrollY + 600
        : 600 + '';
    console.log(this.eleRef.nativeElement.style.opacity);
    console.log('this.initialTop', this.initialTop);
  }
}
