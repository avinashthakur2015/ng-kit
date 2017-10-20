import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiTemplate, UiBodyTemplate } from './directives/template.directive';

@NgModule({
    imports: [CommonModule],
    exports: [UiTemplate, UiBodyTemplate],
    declarations: [UiTemplate, UiBodyTemplate]
})
export class CommonSharedModule { }