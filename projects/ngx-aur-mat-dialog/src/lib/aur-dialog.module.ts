import {NgModule} from '@angular/core';
import {AurDialogComponent} from './aur-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";
import {AurDialogBaseComponent} from "./scrollable/base/ngx-aur-mat-dialog-base/aur-dialog-base.component";
import {AurDialogContentDirective} from "./aur-dialog-content.directive";
import {AurDialogActionsDirective} from "./aur-dialog-actions.directive";
import {MatStepperModule} from "@angular/material/stepper";
import {AurDialogStickyFooterDirective} from "./aur-dialog-sticky-footer.directive";
import {AurDialogStickyHeaderDirective} from "./aur-dialog-sticky-header.directive";


@NgModule({
  declarations: [
    AurDialogBaseComponent,
    AurDialogComponent,
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatTooltip,
    MatIcon,
    MatProgressSpinner,
    NgIf,
    AurDialogContentDirective,
    AurDialogActionsDirective,
    AurDialogStickyFooterDirective,
    AurDialogStickyHeaderDirective,
    MatStepperModule
  ],
  exports: [
    AurDialogComponent,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {autoFocus: false}
    }
  ]
})
export class AurDialogModule {
}
