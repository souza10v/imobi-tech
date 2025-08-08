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

  getFilteredProperties(
    city: string,
    type: string,
    minPrice: number,
    maxPrice: number,
    bedrooms: number,
    minArea: number,
    maxArea: number
  ): Observable<any> {
    const url = `${this.apiUrl}/property-data/filter-data`;

    const params = {
      city: city,
      type: type,
      minPrice: minPrice.toString(),
      maxPrice: maxPrice.toString(),
      bedrooms: bedrooms.toString(),
      minArea: minArea.toString(),
      maxArea: maxArea.toString()
    };

    return this.http.get(url, { params });
  }



}
