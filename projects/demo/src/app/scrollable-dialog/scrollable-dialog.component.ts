import {Component} from '@angular/core';
import {AurDialogActionsDirective, AurDialogContentDirective, AurDialogModule} from "ngx-aur-mat-dialog";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-scrollable-dialog',
  standalone: true,
  imports: [MatDialogModule, AurDialogModule, MatButton, AurDialogContentDirective, AurDialogActionsDirective],
  templateUrl: './scrollable-dialog.component.html',
  styleUrl: './scrollable-dialog.component.scss'
})
export class ScrollableDialogComponent {

}
