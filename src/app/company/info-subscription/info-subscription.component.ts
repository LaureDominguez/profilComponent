import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Company } from 'src/app/models/company.model';
import { Invoice } from 'src/app/models/Invoice.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-info-subscription',
  templateUrl: './info-subscription.component.html',
  styleUrls: ['./info-subscription.component.css'],
})
export class InfoSubscriptionComponent implements AfterViewInit {
  @Input() company: Company | undefined;

  @Input() invoice: Invoice[] | undefined;

  protected dataSource: MatTableDataSource<Invoice> = new MatTableDataSource<Invoice>();

  protected columnsToDisplay: string[] = ['created', 'bimcoins_quantity', 'hosted_invoice_url'];

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnChanges(): void {
    if (this.invoice) {
      this.dataSource.data = this.invoice;
    }
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
