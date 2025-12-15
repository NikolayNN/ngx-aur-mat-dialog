import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {
  AurDialogActionsDirective,
  AurDialogContentDirective,
  AurDialogModule,
  AurDialogStickyFooterDirective,
  AurDialogStickyHeaderDirective
} from "ngx-aur-mat-dialog";

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
  ],
  templateUrl: './scrollable-content.component.html',
  styleUrl: './scrollable-content.component.scss'
})
export class ScrollableContentComponent {

}
