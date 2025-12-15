import {Component, ContentChild, Input} from '@angular/core';
import {AurDialogActionsDirective, AurDialogModule, AurDialogTitleDirective} from "ngx-aur-mat-dialog";
import {DialogTitleDirective} from "./dialog-title.directive";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    AurDialogModule,
    AurDialogActionsDirective
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
