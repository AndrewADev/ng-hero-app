import { Input, Directive } from '@angular/core';


@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onclick()'}
})
export class RouterLinkDirectiveStub {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}
