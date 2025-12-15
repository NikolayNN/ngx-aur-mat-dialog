import {Component} from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButton} from "@angular/material/button";
import {DialogActionsDirective} from "../dialog/dialog-actions.directive";
import {DialogContentDirective} from "../dialog/dialog-content.directive";
import {MatDialogClose} from "@angular/material/dialog";
import {AurDialogActionsDirective, AurDialogContentDirective, AurDialogModule} from "ngx-aur-mat-dialog";
import {
  AurDialogStickyHeaderDirective
} from "../../../../ngx-aur-mat-dialog/src/lib/aur-dialog-sticky-header.directive";
import {
  AurDialogStickyFooterDirective
} from "../../../../ngx-aur-mat-dialog/src/lib/aur-dialog-sticky-footer.directive";

@Component({
  selector: 'app-stepper-dialog',
  standalone: true,
  imports: [
    DialogComponent,
    MatButton,
    DialogActionsDirective,
    AurDialogStickyHeaderDirective,
    AurDialogStickyFooterDirective,
    DialogContentDirective,
    MatDialogClose,
    AurDialogModule,
    AurDialogContentDirective,
    AurDialogActionsDirective,
    MatStepperModule
  ],
  templateUrl: './stepper-dialog.component.html',
  styleUrl: './stepper-dialog.component.scss'
})
export class StepperDialogComponent {

}
