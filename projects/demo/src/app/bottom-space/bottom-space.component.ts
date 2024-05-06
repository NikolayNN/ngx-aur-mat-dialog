import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {AurDialogActionsDirective, AurDialogContentDirective, AurDialogModule} from "ngx-aur-mat-dialog";

@Component({
  selector: 'app-bottom-space',
  standalone: true,
    imports: [
        MatButton,
        MatDialogClose,
        AurDialogActionsDirective,
        AurDialogContentDirective,
        AurDialogModule
    ],
  templateUrl: './bottom-space.component.html',
  styleUrl: './bottom-space.component.scss'
})
export class BottomSpaceComponent {

}
