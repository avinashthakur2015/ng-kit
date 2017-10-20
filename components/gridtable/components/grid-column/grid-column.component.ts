import { Component, TemplateRef, QueryList, Input, ContentChildren, OnInit, AfterContentInit } from '@angular/core';

import { UiTemplate } from './../../../common/directives/template.directive';

import { GridTableComponent } from './../grid-table/grid-table.component';

@Component({
    selector: 'ui-grid-col',
    templateUrl: './grid-column.tpl.html',
    styleUrls: ['./grid-column.style.scss']
})
export class GridColumnComponent implements OnInit, AfterContentInit {
    @Input() header: string;
    @Input() value: string;

    @ContentChildren(UiTemplate) templates: QueryList<any>;

    public bodyTemplate: TemplateRef<any>;
    public headerTemplate: TemplateRef<any>;

    constructor(private gridTable: GridTableComponent) {

    }

    ngOnInit() {

    }

    ngAfterContentInit() {
        const self = this;
        self.templates.forEach((template) => {
            switch (template.getType()) {
                case 'body':
                    this.bodyTemplate = template;
                    break;
                default:
                    this.headerTemplate = template;
                    break;
            }
        });
        this.gridTable.addColumn(this);
    }

}