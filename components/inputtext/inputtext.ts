
import { NgModule, Directive } from '@angular/core'
@Directive({
    selector: '[gInputText]'
})
export class InputText {

}

@NgModule({
    imports: [],
    exports: [InputText],
    declarations: [InputText]
})
export class InputTextModule { }