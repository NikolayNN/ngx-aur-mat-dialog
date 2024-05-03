import {Component, Input} from '@angular/core';
import {NgxAurDialogActionsDirective, NgxAurMatDialogModule} from "ngx-aur-mat-dialog";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    NgxAurMatDialogModule,
    NgxAurDialogActionsDirective
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() title = 'Title Example';
  @Input() showDialogActions = true;
  @Input() actionsAlign: 'start' | 'end' | 'center' = 'center'
  @Input() showSpinner = false;

  @Input() closeIcon = 'clear';
  // @ts-ignore
  @Input() closeTooltip: string;
  @Input() closeTooltipShowDelay = 500;
}
