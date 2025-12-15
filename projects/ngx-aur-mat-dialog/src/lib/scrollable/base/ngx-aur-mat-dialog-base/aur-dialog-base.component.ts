import {AfterContentInit, Component, ContentChild, Input} from '@angular/core';
import { AurDialogTitleDirective } from '../../../aur-dialog-title.directive';


@Component({
  template: '',
  standalone: false
})
export class AurDialogBaseComponent implements AfterContentInit {
  @Input() title = 'Example Title'
  @Input() closeIcon = 'close';
  @Input() closeIconClass: string | undefined;
  @Input() closeTooltip = '';
  @Input() closeTooltipShowDelay = 500;

  @Input() showSpinner = false;

  @Input() showActions = true;
  @Input() alignActions: 'start' | 'center' | 'end' = 'center'

  @ContentChild(AurDialogTitleDirective) aurDialogTitleContent?: AurDialogTitleDirective;
  hasAurDialogTitle = false;

  ngAfterContentInit() {
    this.hasAurDialogTitle = !!this.aurDialogTitleContent;
  }
}
