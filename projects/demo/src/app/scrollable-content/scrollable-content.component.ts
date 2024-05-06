import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {AurDialogActionsDirective, AurDialogContentDirective, AurDialogModule} from "ngx-aur-mat-dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogActionsDirective} from "../dialog/dialog-actions.directive";
import {
  AurDialogStickyHeaderDirective
} from "../../../../ngx-aur-mat-dialog/src/lib/aur-dialog-sticky-header.directive";
import {
  AurDialogStickyFooterDirective
} from "../../../../ngx-aur-mat-dialog/src/lib/aur-dialog-sticky-footer.directive";

@Component({
  selector: 'app-scrollable-content',
  standalone: true,
  imports: [
    MatButton,
    MatDialogClose,
    AurDialogStickyHeaderDirective,
    AurDialogStickyFooterDirective,
    AurDialogActionsDirective,
    AurDialogContentDirective,
    AurDialogModule,
    DialogComponent,
    DialogActionsDirective
  ],
  templateUrl: './scrollable-content.component.html',
  styleUrl: './scrollable-content.component.scss'
})
export class ScrollableContentComponent {

}
