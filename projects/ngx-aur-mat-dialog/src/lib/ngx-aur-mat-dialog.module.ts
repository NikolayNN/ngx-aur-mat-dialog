import { NgModule } from '@angular/core';
import { NgxAurMatDialogComponent } from './ngx-aur-mat-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";



@NgModule({
  declarations: [
    NgxAurMatDialogComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatTooltip,
    MatIcon,
    MatProgressSpinner,
    NgIf
  ],
  exports: [
    NgxAurMatDialogComponent
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { autoFocus: false }
    }
  ]
})
export class NgxAurMatDialogModule { }
