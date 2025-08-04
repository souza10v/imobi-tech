import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyCardComponent } from "../../components/property-card/property-card.component";

@Component({
  selector: 'app-property-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, PropertyCardComponent],
  templateUrl: './property-filters.component.html',
})
export class PropertyFiltersComponent {
  cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte'];
  neighborhoods = ['Centro', 'Zona Sul', 'Zona Norte'];

  filters = {
    city: '',
    neighborhood: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    minArea: '',
    maxArea: ''
  };

  resultsCount = 12; // valor fixo por enquanto

  updateFilter(key: 'city' | 'neighborhood' | 'type' | 'minPrice' | 'maxPrice' | 'bedrooms' | 'bathrooms' | 'minArea' | 'maxArea', value: string) {
    this.filters[key] = value;
  }

  clearFilters() {
    this.filters = {
      city: '',
      neighborhood: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      minArea: '',
      maxArea: ''
    };
  }

  onSearch() {
    console.log('Buscar com filtros:', this.filters);
  }
}
