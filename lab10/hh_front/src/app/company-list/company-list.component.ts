import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Vacancy } from '../vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyID?: number;
  vacanciesVisible = false;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  companySelected(company: Company) {
      this.selectedCompanyID = company.id;
      this.companyService.getVacanciesByCompany(this.selectedCompanyID).subscribe(vacancies => {
        this.vacancies = vacancies; 
      });
      this.vacanciesVisible = true;
      
  }
  
}



  
