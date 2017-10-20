import { Directive, Input, OnInit, OnDestroy, Component, EmbeddedViewRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ui-template]'
})
export class UiTemplate {

    @Input('ui-template') type: 'body' | 'header' = 'body';

    constructor(private templateRef: TemplateRef<any>) { }

    getType(): string {
        return this.type;
    }
}

@Component({
    selector: 'ui-body-template',
    template: ``
})
export class UiBodyTemplate implements OnInit, OnDestroy {

    @Input() data: any;
    @Input() template: TemplateRef<any>;

    view: EmbeddedViewRef<any>;

    constructor(private viewContainer: ViewContainerRef) { }

    ngOnInit() {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template['templateRef'], {
                '\$implicit': this.data
            });
        }
    }

    ngOnDestroy() {
        if (this.view) {
            this.view.destroy();
        }
    }
}