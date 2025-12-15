import { Component } from '@angular/core';
import { AurDialogContentDirective, AurDialogModule} from "ngx-aur-mat-dialog";
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {MatStep, MatStepLabel, MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-stepper-dialog-class',
  standalone: true,
  imports: [
    AurDialogContentDirective,
    AurDialogModule,
    MatButton,
    MatDialogClose,
    MatStep,
    MatStepLabel,
    MatStepper
  ],
  templateUrl: './stepper-dialog-class.component.html',
  styleUrl: './stepper-dialog-class.component.scss'
})
export class StepperDialogClassComponent {

}
