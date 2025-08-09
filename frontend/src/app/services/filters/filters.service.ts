import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  getFilteredProperties(filters: any): Observable<any> {
    const url = `${this.apiUrl}/property-data/filter-data`;
  
    const params = {
      city: filters.city,
      neighborhood: filters.neighborhood,
      type: filters.type,
      minPrice: filters.minPrice?.toString(),
      maxPrice: filters.maxPrice?.toString(),
      bedrooms: filters.bedrooms?.toString(),
      bathrooms: filters.bathrooms?.toString(),
      minBuiltArea: filters.minBuiltArea?.toString(),
      maxBuiltArea: filters.maxBuiltArea?.toString(),
      minTotalArea: filters.minTotalArea?.toString(),
      maxTotalArea: filters.maxTotalArea?.toString()
    };
  
    return this.http.get(url, { params });
  }
  

}
