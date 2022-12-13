import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Invoice } from '../models/Invoice.model';

@Injectable({
  providedIn: 'root',
})
export class DBService {
  constructor(private http: HttpClient) {}

  // ************************************************************
  // User-account

  getUserInfo(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/{{id}}');
  }

  getAllUsersInfo(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users/');
  }

  getCurrentUserInfo(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/user-logged/');
  }

  patchUserInfo(formData: any) {
    this.http.patch('http://localhost:3000/user-logged', formData).subscribe({
      error: (e: unknown) => {
        console.log('erreur', e);
      },
    });
    alert('Les modifications ont bien été prises en compte !');
  }

  // ************************************************************
  // Company-account

  getCompanyInfo(): Observable<Company> {
    return this.http.get<Company>('http://localhost:3000/current-company');
  }

  getInvoiceInfo(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('http://localhost:3000/invoices');
  }

  patchCompanyInfo(formData: { name: string }) {
    this.http.patch('http://localhost:3000/current-company/', { name: formData }).subscribe({
      error: (e: unknown) => {
        console.log('erreur', e);
      },
    });
    alert('Les modifications ont bien été prises en compte !');
    console.log('catch', formData);
  }
}
