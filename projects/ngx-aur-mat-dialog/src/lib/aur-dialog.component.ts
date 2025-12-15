import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {AurDialogBaseComponent} from "./scrollable/base/ngx-aur-mat-dialog-base/aur-dialog-base.component";

@Component({
  selector: 'aur-dialog',
  templateUrl: './aur-dialog.component.html',
  styleUrls: ['./aur-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class AurDialogComponent extends AurDialogBaseComponent {

}
