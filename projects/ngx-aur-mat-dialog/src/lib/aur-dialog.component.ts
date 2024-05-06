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
import {AurDialogContentDirective} from "./aur-dialog-content.directive";
import {AurDialogActionsDirective} from "./aur-dialog-actions.directive";
import {
  AurDialogBaseComponent
} from "./scrollable/base/ngx-aur-mat-dialog-base/aur-dialog-base.component";
import {
  AurDialogStickyHeaderDirective
} from "./aur-dialog-sticky-header.directive";
import {
  AurDialogStickyFooterDirective
} from "./aur-dialog-sticky-footer.directive";

@Component({
  selector: 'aur-dialog',
  templateUrl: './aur-dialog.component.html',
  styleUrls: ['./aur-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AurDialogComponent extends AurDialogBaseComponent{

  @ContentChild(AurDialogActionsDirective) dialogActions: AurDialogActionsDirective | undefined;

  @ContentChild(AurDialogStickyHeaderDirective) stickyHeader: AurDialogStickyHeaderDirective | undefined;

  @ContentChild(AurDialogStickyFooterDirective) stickyFooter: AurDialogStickyFooterDirective | undefined;
}
