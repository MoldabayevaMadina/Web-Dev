import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
  }
}
