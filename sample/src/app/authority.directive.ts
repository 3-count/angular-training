import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Directive({
  selector: '[appAuthority]'
})
export class AuthorityDirective {

  constructor(
    private readonly _dialog: MatDialog
  ) { }

  @Output() execute = new EventEmitter();

  @HostListener('click') onClick() {
    console.log("aaa");
    const config = new MatDialogConfig();
    config.height = "300px";
    config.width = "300px";
    config.disableClose = true;
    
    this._dialog.open(DialogComponent, config).afterClosed().subscribe(() => {
      this.execute.emit();
    });
  }
}
