import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface DialoggData {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-pop-up-password',
  templateUrl: './pop-up-password.component.html',
  styleUrls: ['./pop-up-password.component.css'],
})
export class PopUpPasswordComponent {
  passwordForm = this.fb.group({
    password: [null, Validators.required],
    newPassword: [null, Validators.required],
  });

  hide = true;

  constructor(
    private fb: FormBuilder,
    protected dialog: MatDialog,
    protected dialogRef: MatDialogRef<PopUpPasswordComponent>,
  ) {}

  onSubmit(): void {
    alert('Mot de passe changé');
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
