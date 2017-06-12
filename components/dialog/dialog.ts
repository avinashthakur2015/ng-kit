import { NgModule, Component } from '@angular/core';
import { DomHandler } from '../dom/domhandler';

@Component({
    selector: 'ui-dialog',
    template: `
        <div #container>
            <div #titlebar>
                <span class="ui-dialog-title"></span>
            </div>
            <div #content>
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./dialog.scss'],
    providers: [DomHandler]
})
export class Dialog {

}


@NgModule({
    imports: [],
    exports: [],
    declarations: []
})
export class DialogModule {

}