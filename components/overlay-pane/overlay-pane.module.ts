import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayPane } from './components/overlay-pane.component';

@NgModule({
    imports: [CommonModule],
    exports: [OverlayPane],
    declarations: [OverlayPane]
})
export class OverlayPaneModule {
   
}