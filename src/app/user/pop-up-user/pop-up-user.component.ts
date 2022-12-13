import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-pop-up-user',
  templateUrl: './pop-up-user.component.html',
  styleUrls: ['./pop-up-user.component.css'],
})
export class PopUpUserComponent {
  protected userData: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: User,

    protected dialog: MatDialog,
    protected dialogRef: MatDialogRef<PopUpUserComponent>,
    protected http: HttpClient,
  ) {
    this.userData = data;
  }

  onSubmit(data: Partial<User>) {
    this.dialogRef.close(data);
  }
}
