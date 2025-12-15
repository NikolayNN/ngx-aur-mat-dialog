import {Component} from '@angular/core';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {AurDialogActionsDirective, AurDialogContentDirective, AurDialogModule} from "ngx-aur-mat-dialog";
import { AurDialogStickyHeaderDirective} from "ngx-aur-mat-dialog";

@Component({
  selector: 'app-stepper-dialog',
  standalone: true,
  imports: [
    MatButton,
    AurDialogStickyHeaderDirective,
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
