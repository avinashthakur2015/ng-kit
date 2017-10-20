
import { NgModule, Input, Directive } from '@angular/core'
@Directive({
    selector: '[ui-input]',
    host: {
        '[class.ui-inputtext]': 'true'
    }
})
export class InputText {
    @Input('ui-input') input: any;
}

@NgModule({
    imports: [],
    exports: [InputText],
    declarations: [InputText]
})
export class InputTextModule { }