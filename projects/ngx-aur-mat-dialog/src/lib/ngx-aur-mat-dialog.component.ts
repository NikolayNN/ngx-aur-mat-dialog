import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit} from '@angular/core';
import {NgxAurDialogContentDirective} from "./ngx-aur-dialog-content.directive";

@Component({
  selector: 'ngx-aur-mat-dialog',
  templateUrl: './ngx-aur-mat-dialog.component.html',
  styleUrls: ['./ngx-aur-mat-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAurMatDialogComponent implements OnInit {

  @Input() title = 'Example Title'
  @Input() closeIcon = 'close';
  @Input() closeIconClass: string | undefined;
  @Input() closeTooltip = '';
  @Input() closeTooltipShowDelay = 500;

  @Input() showSpinner = true;

  @ContentChild(NgxAurDialogContentDirective) dialogActions: NgxAurDialogContentDirective | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
