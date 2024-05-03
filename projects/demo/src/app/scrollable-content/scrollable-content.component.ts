import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {NgxAurDialogActionsDirective, NgxAurDialogContentDirective, NgxAurMatDialogModule} from "ngx-aur-mat-dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogActionsDirective} from "../dialog/dialog-actions.directive";

@Component({
  selector: 'app-scrollable-content',
  standalone: true,
  imports: [
    MatButton,
    MatDialogClose,
    NgxAurDialogActionsDirective,
    NgxAurDialogContentDirective,
    NgxAurMatDialogModule,
    DialogComponent,
    DialogActionsDirective
  ],
  templateUrl: './scrollable-content.component.html',
  styleUrl: './scrollable-content.component.scss'
})
export class ScrollableContentComponent {

}
