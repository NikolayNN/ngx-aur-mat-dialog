import {Component, Input} from '@angular/core';

@Component({
  template: ''
})
export class AurDialogBaseComponent {
  @Input() title = 'Example Title'
  @Input() closeIcon = 'close';
  @Input() closeIconClass: string | undefined;
  @Input() closeTooltip = '';
  @Input() closeTooltipShowDelay = 500;

  @Input() showSpinner = false;

  @Input() showActions = true;
  @Input() alignActions: 'start' | 'center' | 'end' = 'center'
}
