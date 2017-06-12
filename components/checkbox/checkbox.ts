import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const CHECKBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
};

@Component({
    selector: 'g-checkbox',
    template: `
        <div class="ui-checkbox ui-widget">
        	<div class="ui-helper-hidden-accessible">
        		<input #cb type="checkbox" [name]="name" [value]="value" [checked]="checked" [disabled]="disabled" [ngClass]="{'ui-state-focus':focused}">
        		</div>
        		<div class="ui-checkbox-box"></div>
        		<label class="ui-checkbox-label"></label>
        	</div>`,
    providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class Checkbox implements ControlValueAccessor {

    @Input() value: any;
    @Input() name: string;
    @Input() disabled: boolean;
    @Input() label: string;
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    model: any;

    onModelChange: Function = () => { };

    onModelTouched: Function = () => { };

    checked: boolean = false;
    focused: boolean = false;

    writeValue(model: any): void {

    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

}


@NgModule({
    imports: [],
    exports: [],
    declarations: [Checkbox]
})
export class CheckboxModule {

}