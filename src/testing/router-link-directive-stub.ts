import { Input, Directive, HostListener } from '@angular/core';


@Directive({
    selector: '[routerLink]'
})
export class StubRouterLinkDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    @HostListener('click') onClick() {
        this.navigatedTo = this.linkParams;
    }
}
