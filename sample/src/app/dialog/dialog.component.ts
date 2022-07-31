import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private readonly _dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  click(): void {
    this._dialogRef.close();
  }
}
