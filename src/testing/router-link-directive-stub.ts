import { Input, Directive, HostListener } from '@angular/core';


@Directive({
    // FIXME: Find correct, specific rule name to disable, or alternative
    // it is complaining about lack of "app" prefix, but we are in fact
    // mocking the real routerLink, so this is to be ignored in this case.
    // tslint:disable-next-line
    selector: '[routerLink]'
})
export class StubRouterLinkDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    @HostListener('click') onClick() {
        this.navigatedTo = this.linkParams;
    }
}
