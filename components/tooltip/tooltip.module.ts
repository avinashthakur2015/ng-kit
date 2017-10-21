import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonSharedModule } from './../common/common.shared.module';

import { DomHandler } from './../common/services/domHandler';

import { ToolTip, ToolTipHost } from './directives/tooltip.directive';

@NgModule({
    imports: [
        CommonModule,
        CommonSharedModule
    ],
    exports: [ToolTip, ToolTipHost],
    declarations: [ToolTip, ToolTipHost],
    providers: [DomHandler]
})
export class ToolTipModule {

}