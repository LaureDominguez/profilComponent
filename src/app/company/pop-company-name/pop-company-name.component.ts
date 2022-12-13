import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-company-name',
  templateUrl: './pop-company-name.component.html',
  styleUrls: ['./pop-company-name.component.css'],
})
export class PopCompanyNameComponent {
  protected formData: { name: string };

  protected companyForm = this.fb.group({
    name: [''],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: { name: string },
    protected fb: FormBuilder,
    protected dialogRef: MatDialogRef<PopCompanyNameComponent>,
  ) {
    this.formData = data;    

    if (this.formData) {
      this.companyForm.patchValue(this.formData);
    }
  }
}
