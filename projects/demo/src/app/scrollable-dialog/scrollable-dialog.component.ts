import {Component} from '@angular/core';
import {
  AurDialogActionsDirective,
  AurDialogContentDirective,
  AurDialogModule,
  AurDialogTitleDirective
} from "ngx-aur-mat-dialog";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {DialogTitleDirective} from "../dialog/dialog-title.directive";

@Component({
  selector: 'app-scrollable-dialog',
  standalone: true,
  imports: [MatDialogModule, AurDialogModule, MatButton, AurDialogContentDirective, AurDialogActionsDirective, DialogTitleDirective, AurDialogTitleDirective],
  templateUrl: './scrollable-dialog.component.html',
  styleUrl: './scrollable-dialog.component.scss'
})
export class ScrollableDialogComponent {

}
