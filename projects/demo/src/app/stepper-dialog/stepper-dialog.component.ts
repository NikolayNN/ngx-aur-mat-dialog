import { Component } from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {MatStep, MatStepper, MatStepperNext} from "@angular/material/stepper";
import {MatButton} from "@angular/material/button";
import {DialogActionsDirective} from "../dialog/dialog-actions.directive";
import {DialogContentDirective} from "../dialog/dialog-content.directive";
import {MatDialogClose} from "@angular/material/dialog";
import {AurDialogActionsDirective, AurDialogContentDirective, AurDialogModule} from "ngx-aur-mat-dialog";

@Component({
  selector: 'app-stepper-dialog',
  standalone: true,
  imports: [
    DialogComponent,
    MatStepper,
    MatStep,
    MatButton,
    MatStepperNext,
    DialogActionsDirective,
    DialogContentDirective,
    MatDialogClose,
    AurDialogModule,
    AurDialogContentDirective,
    AurDialogActionsDirective
  ],
  templateUrl: './stepper-dialog.component.html',
  styleUrl: './stepper-dialog.component.scss'
})
export class StepperDialogComponent {

}
