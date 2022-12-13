import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { Invoice } from 'src/app/models/Invoice.model';
import { User } from 'src/app/models/user.model';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-company-main',
  templateUrl: 'company-main.component.html',
  styleUrls: ['./company-main.component.css'],
})
export class CompanyMainComponent implements OnInit {
  protected companyData: Company | undefined;

  protected invoiceData: Invoice[] | undefined;

  protected userData: User[] | undefined;

  protected companyData$: Observable<Company> = this.DBService.getCompanyInfo();

  protected companyAccount: string | undefined;

  protected ENTERPRISE: boolean | undefined;

  constructor(protected DBService: DBService) {}

  ngOnInit(): void {
    this.DBService.getCompanyInfo().subscribe({
      next: (data) => {
        this.companyData = data;
      },
    });
    this.DBService.getInvoiceInfo().subscribe({
      next: (data) => {
        this.invoiceData = data;
      },
    });
    this.DBService.getAllUsersInfo().subscribe({
      next: (data) => {
        this.userData = data;
      },
    });

    // affiche le manage-user component si compte ENTERPRISE ou PRO-U
    this.companyData$.subscribe({
      next: (data) => {
        this.companyAccount = data.account_type;
        this.ENTERPRISE = this.companyAccount === 'ENTERPRISE' || this.companyAccount === 'PRO-U';
      },
    });
  }

  patchCompanyInfo(formData: { name: string }) {
    if (formData) {
      this.DBService.patchCompanyInfo(formData);
    }
  }
}