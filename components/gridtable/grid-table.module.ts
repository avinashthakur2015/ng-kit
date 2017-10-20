import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonSharedModule } from './../common/common.shared.module';

import { GridTableComponent } from './components/grid-table/grid-table.component';
import { GridColumnComponent } from './components/grid-column/grid-column.component';

@NgModule({
    imports: [
        CommonModule,
        CommonSharedModule
    ],
    exports: [GridTableComponent, GridColumnComponent],
    declarations: [GridTableComponent, GridColumnComponent]
})
export class GridTableModule {

}