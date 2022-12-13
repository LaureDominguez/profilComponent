import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from '../../models/company.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements AfterViewInit {
  @Input() user: User[] | undefined;

  @Input() company: Company | undefined;

  protected dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  protected columnsToDisplay: string[] = [
    'first_name',
    'last_name',
    'email',
    'isAdmin',
    'is_active',
    'edit',
    'password',
  ];

  protected numberUser: number = 0;

  protected displayUser: number = 0;

  protected totalUser: number = 0;

  protected account: string = 'STARTER';

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  hidePageSize = true;

  ngOnChanges(): void {
    if (this.user) {
      this.dataSource.data = this.user;
    }

    if (this.company) {
      const a = this.company.current_users;
      const b = this.company.max_user;
      this.displayUser = Math.round((a * 100) / b);
      this.numberUser = a;
      this.totalUser = b;

      this.account = this.company.account_type;
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
