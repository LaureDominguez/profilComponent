import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopCompanyNameComponent } from 'src/app/company/pop-company-name/pop-company-name.component';
import { Company } from 'src/app/models/company.model';
import { CompanyMainComponent } from '../company-main/company-main.component';

@Component({
  selector: 'app-info-company',
  templateUrl: './info-company.component.html',
  styleUrls: ['./info-company.component.css'],
})
export class InfoCompanyComponent implements OnChanges {
  @Input() company: Company | undefined;

  @Output() companyName = new EventEmitter<{ name: 'string' }>();


  protected companyForm = this.fb.group({
    name: [''],
  });

  protected nameChangeLog: string[] = [];

  protected displayStorage: number = 0;

  protected totalStorage: number = 0;

  protected loadingColor: string = 'primary';

  constructor(
    protected fb: FormBuilder,
    protected dialog: MatDialog,
    protected compagnyPageComponent: CompanyMainComponent,
  ) {}

  ngOnChanges(): void {
    if (this.company) {
      this.companyForm.patchValue(this.company);

      const a = this.company.current_storage;
      const b = this.company.available_storage;
      this.displayStorage = Math.ceil((a * 100) / b);

      this.totalStorage = Math.round(b / 10000000);

      this.loadingColor = 'primary';
      if (this.displayStorage > 50 && this.displayStorage < 90) {
        this.loadingColor = 'accent';
      } else if (this.displayStorage >= 90) {
        this.loadingColor = 'warn';
      }

      this.companyForm.get('name')?.disable();
    }
  }

  openCompanyNameDialog(): void {
    const dialogRef = this.dialog.open<PopCompanyNameComponent>(
      PopCompanyNameComponent,
      {
        width: '50vh',
        data: { name: this.companyForm.value.name },
      },
    );

    dialogRef
    // la nouvelle valeur du formulaire n'est pas envoyée si validé par la touche entrée du clavier
      .afterClosed()
      // .pipe(filter((data) => !!data))
      .subscribe((data: { name: string }) => {
        if (data) {
          this.compagnyPageComponent.patchCompanyInfo(data);
          // this.companyForm.patchValue(data);
        }
      });
  }

}
