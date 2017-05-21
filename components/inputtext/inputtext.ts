
import { NgModule, Directive } from '@angular/core'
@Directive({
    selector: '[gInputText]',
    host: {
        '[class.ui-inputtext]': 'true'
    }
})
export class InputText {

}

@NgModule({
    imports: [],
    exports: [InputText],
    declarations: [InputText]
})
export class InputTextModule { }