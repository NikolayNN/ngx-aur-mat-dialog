import {Component, ViewChild} from '@angular/core';
import {
  AurDialogActionsDirective,
  AurDialogContentDirective,
  AurDialogModule,
  AurDialogStickyHeaderDirective
} from "ngx-aur-mat-dialog";
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-scrolable-list-with-sticky-header',
  standalone: true,
  imports: [
    AurDialogActionsDirective,
    AurDialogContentDirective,
    AurDialogModule,
    MatButton,
    MatDialogClose,
    MatSelectionList,
    MatListOption,
    MatCheckbox,
    AurDialogStickyHeaderDirective
  ],
  templateUrl: './scrolable-list-with-sticky-header.component.html',
  styleUrl: './scrolable-list-with-sticky-header.component.scss'
})
export class ScrolableListWithStickyHeaderComponent {

  @ViewChild('list') list: MatSelectionList | undefined;

  toggleAllSelections(checked: boolean) {
    if (checked) {
      this.list?.selectAll();
    } else {
      this.list?.deselectAll();
    }
  }
}
