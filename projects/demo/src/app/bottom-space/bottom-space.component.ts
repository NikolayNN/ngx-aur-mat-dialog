import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {NgxAurDialogActionsDirective, NgxAurDialogContentDirective, NgxAurMatDialogModule} from "ngx-aur-mat-dialog";

@Component({
  selector: 'app-bottom-space',
  standalone: true,
    imports: [
        MatButton,
        MatDialogClose,
        NgxAurDialogActionsDirective,
        NgxAurDialogContentDirective,
        NgxAurMatDialogModule
    ],
  templateUrl: './bottom-space.component.html',
  styleUrl: './bottom-space.component.scss'
})
export class BottomSpaceComponent {

}
