import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyCardComponent, Property } from '../../components/property-card/property-card.component';



@Component({
  selector: 'app-property-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, PropertyCardComponent],
  templateUrl: './property-filters.component.html',
})
export class PropertyFiltersComponent {
  cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte'];
  neighborhoods = ['Centro', 'Zona Sul', 'Zona Norte'];

  filters: any = {
    city: '',
    neighborhood: '',
    type: '',
    minPrice: 100000,
    maxPrice: 1000000,
    minBuiltArea: 100,
    maxBuiltArea: 500,
    minTotalArea: 150,
    maxTotalArea: 800,
    bedrooms: '',
    bathrooms: '',
    minArea: null,
    maxArea: null
  };
  
  resultsCount = 2; // baseado nos imóveis abaixo

  properties: Property[] = [
    {
      images: [],
      shortDescription: 'Apartamento de 57 m² com 1 quarto e 1 banheiro.',
      price: 245000,
      condoFee: 620,
      area: 57,
      bedrooms: 1,
      address: 'Av. Cásper Líbero, Centro Histórico de São Paulo'
    },
    {
      images: [],
      shortDescription: 'Casa térrea espaçosa com 3 quartos e quintal amplo.',
      price: 350000,
      condoFee: 0,
      area: 120,
      bedrooms: 3,
      address: 'Rua das Palmeiras, Vila Mariana, São Paulo'
    }
  ];

  updateFilter(key: string, value: any) {
    this.filters[key] = value;
  }
  

  clearFilters() {
    this.filters = {
      city: '',
      neighborhood: '',
      type: '',
      minPrice: 100000,
      maxPrice: 1000000,
      minBuiltArea: 100,
      maxBuiltArea: 500,
      minTotalArea: 150,
      maxTotalArea: 800,
      bedrooms: '',
      bathrooms: '',
      minArea: null,
      maxArea: null
    };
  }

  onSearch() {
    console.log('Buscar com filtros:', this.filters);
    // Aqui você pode aplicar a lógica de filtragem real
  }

  onPropertyClick(property: Property) {
    console.log('Clicou no imóvel:', property);
    // Aqui você pode navegar para os detalhes do imóvel, etc.
  }
}
