import { Component, Input, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'ui-overlay-pane',
    templateUrl: './overlay-pane.tpl.html',
    styleUrls: ['./overlay-pane.style.scss']
})
export class OverlayPane implements AfterViewInit {

    _visible: boolean;
    isOverlayClicked: boolean;
    documentClickListener: any;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    ngAfterViewInit() {

    }

    @Input() get visible(): boolean {
        return this._visible;
    }

    set visible(val: boolean) {
        this._visible = val;
    }

    show() {
        this._visible = true;
        this.isOverlayClicked = true;
        this.bindDocumentListener();
    }

    hide() {
        this._visible = false;
        this.unbindDocumentClickListener();
    }

    bindDocumentListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', (event) => {
                if (this.isOverlayClicked) {
                    this.isOverlayClicked = false;
                } else {
                    this.hide();
                }
            });
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }

    toggle() {
        this._visible = !this._visible;
        this.isOverlayClicked= true;
        if (this._visible) {
            this.bindDocumentListener();
        }
    }

    overlayClick(event) {
        this.isOverlayClicked = true;
    }

    close(event) {
        this.hide();
    }

}