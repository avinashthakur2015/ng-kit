import { Component, Input } from '@angular/core';

import { GridColumnComponent } from './../grid-column/grid-column.component';

@Component({
    selector: 'ui-grid-table',
    templateUrl: './grid-table.tpl.html',
    styleUrls: ['./grid-table.style.scss']
})
export class GridTableComponent {
    @Input() dataset: any[] = [];

    columns: GridColumnComponent[] = [];

    addColumn(column: GridColumnComponent) {
        this.columns.push(column);
    }
}