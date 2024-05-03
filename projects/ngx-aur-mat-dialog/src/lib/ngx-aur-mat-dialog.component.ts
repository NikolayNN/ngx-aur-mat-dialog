import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';
import {NgxAurDialogContentDirective} from "./ngx-aur-dialog-content.directive";
import {NgxAurDialogActionsDirective} from "./ngx-aur-dialog-actions.directive";

@Component({
  selector: 'ngx-aur-mat-dialog',
  templateUrl: './ngx-aur-mat-dialog.component.html',
  styleUrls: ['./ngx-aur-mat-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAurMatDialogComponent {

  @Input() title = 'Example Title'
  @Input() closeIcon = 'close';
  @Input() closeIconClass: string | undefined;
  @Input() closeTooltip = '';
  @Input() closeTooltipShowDelay = 500;

  @Input() showSpinner = false;

  @Input() alignActions: 'start' | 'center' | 'end' = 'center'

  @ContentChild(NgxAurDialogActionsDirective) dialogActions: NgxAurDialogActionsDirective | undefined;
}
