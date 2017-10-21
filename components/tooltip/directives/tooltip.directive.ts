import { Directive, Input, HostListener, OnInit, OnDestroy, ElementRef, EmbeddedViewRef, ViewContainerRef, TemplateRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[ui-tooltip]'
})
export class ToolTip implements OnInit {

    @Input() data: any;
    @Input('ui-tooltip') template: TemplateRef<any>;
    @Input() tooltipPosition: 'right' | 'left' | 'top' | 'bottom' = 'right';

    view: EmbeddedViewRef<any>;
    container: any;

    constructor(
        private viewContainer: ViewContainerRef) {
    }


    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: Event) {
        const self = this;
        self.create();
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(e: Event) {
        const self = this;
        self.destroy();
    }

    ngOnInit() {
        const self = this;
    }

    create() {
        const self = this;
        self.view = self.viewContainer.createEmbeddedView(self.template, {
            '\$implicit': this.data
        });
    }

    destroy() {
        const self = this;
        self.view.destroy();
    }
}

@Directive({
    selector: '[uiTooltipHost]'
})
export class ToolTipHost implements OnInit {

    constructor(private elementRef: ElementRef,
        private renderer: Renderer2) { }


    ngOnInit() {
        const self = this;
        self.renderer.addClass(self.elementRef.nativeElement, 'ui-tooltip');
        setTimeout(() => {
            self.renderer.addClass(self.elementRef.nativeElement, 'ui-tooltip-animate');
        }, 1);
    }
}