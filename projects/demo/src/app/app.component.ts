import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ScrollableDialogComponent} from "./scrollable-dialog/scrollable-dialog.component";
import {ScrollableContentComponent} from "./scrollable-content/scrollable-content.component";
import {BottomSpaceComponent} from "./bottom-space/bottom-space.component";
import {StepperDialogComponent} from "./stepper-dialog/stepper-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {
  }

  openScrollableDialog() {
    this.dialog.open(ScrollableDialogComponent);
  }

  openScrollableContentDialog() {
    this.dialog.open(ScrollableContentComponent, {
      height: '600px',
      width: '450px'
    });
  }

  openBottomSpaceDialog() {
    this.dialog.open(BottomSpaceComponent, {
      height: '600px',
      width: '600px'
    });
  }

  openNarrowDialog() {
    this.dialog.open(BottomSpaceComponent, {
      height: '600px',
      width: '300px'
    });
  }

  openStepperDialog() {
    this.dialog.open(StepperDialogComponent, {
      height: '60vh',
      width: '600px'
    });
  }
}
