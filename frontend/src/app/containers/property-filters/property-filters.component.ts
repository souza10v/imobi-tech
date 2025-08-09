import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyCardComponent, Property } from '../../components/property-card/property-card.component';
import { FiltersService } from '../../services/filters/filters.service';

@Component({
  selector: 'app-property-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, PropertyCardComponent],
  templateUrl: './property-filters.component.html',
})
export class PropertyFiltersComponent {
  // Limites e steps
  readonly PRICE_MIN = 0;
  readonly PRICE_MAX = 2_000_000;
  readonly PRICE_STEP = 10_000;

  readonly BUILT_MIN = 0;
  readonly BUILT_MAX = 1_000;
  readonly BUILT_STEP = 10;

  readonly TOTAL_MIN = 0;
  readonly TOTAL_MAX = 2_000;
  readonly TOTAL_STEP = 10;

  cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte'];
  neighborhoods = ['Centro', 'Zona Sul', 'Zona Norte'];

  constructor(private filtersService: FiltersService) {}

  // Sempre números (evite null/'')
  filters: any = {
    city: '',
    neighborhood: '',
    type: '',
    minPrice: 100_000,
    maxPrice: 1_000_000,
    minBuiltArea: 100,
    maxBuiltArea: 500,
    minTotalArea: 150,
    maxTotalArea: 800,
    bedrooms: '',   // se for número, troque para 0
    bathrooms: '',  // idem
  };

  resultsCount = 0;

  properties: Property[] = [];

  // Normaliza um par min/max dentro de limites rígidos
  clampPair(
    minKey: keyof typeof this.filters,
    maxKey: keyof typeof this.filters,
    hardMin: number,
    hardMax: number
  ) {
    let min = Number(this.filters[minKey]);
    let max = Number(this.filters[maxKey]);

    if (isNaN(min)) min = hardMin;
    if (isNaN(max)) max = hardMax;

    if (min < hardMin) min = hardMin;
    if (max > hardMax) max = hardMax;

    if (min > max) {
      // regra: se min ultrapassar max, empurra o max
      max = min;
    }

    this.filters[minKey] = min;
    this.filters[maxKey] = max;
  }

  onMinChange(minKey: keyof typeof this.filters, maxKey: keyof typeof this.filters, val: any, hardMin: number, hardMax: number) {
    this.filters[minKey] = Number(val) || 0;
    this.clampPair(minKey, maxKey, hardMin, hardMax);
  }

  onMaxChange(minKey: keyof typeof this.filters, maxKey: keyof typeof this.filters, val: any, hardMin: number, hardMax: number) {
    this.filters[maxKey] = Number(val) || 0;
    this.clampPair(minKey, maxKey, hardMin, hardMax);
  }

  clearFilters() {
    this.filters = {
      city: '',
      neighborhood: '',
      type: '',
      minPrice: 100_000,
      maxPrice: 1_000_000,
      minBuiltArea: 100,
      maxBuiltArea: 500,
      minTotalArea: 150,
      maxTotalArea: 800,
      bedrooms: '',
      bathrooms: '',
    };

    // Garante ranges consistentes após reset
    this.clampPair('minPrice', 'maxPrice', this.PRICE_MIN, this.PRICE_MAX);
    this.clampPair('minBuiltArea', 'maxBuiltArea', this.BUILT_MIN, this.BUILT_MAX);
    this.clampPair('minTotalArea', 'maxTotalArea', this.TOTAL_MIN, this.TOTAL_MAX);

    // Opcional: buscar tudo “limpo”
    // this.onSearch();
  }

  onSearch() {
    // Antes de buscar, garante coerência dos três pares
    this.clampPair('minPrice', 'maxPrice', this.PRICE_MIN, this.PRICE_MAX);
    this.clampPair('minBuiltArea', 'maxBuiltArea', this.BUILT_MIN, this.BUILT_MAX);
    this.clampPair('minTotalArea', 'maxTotalArea', this.TOTAL_MIN, this.TOTAL_MAX);

    this.filtersService.getFilteredProperties(this.filters).subscribe({
      next: (data) => {
        this.properties = data || [];
        this.resultsCount = this.properties.length;
      },
      error: (err) => {
        console.error('Erro ao buscar imóveis', err);
      }
    });
  }

  onPropertyClick(property: Property) {
    console.log('Clicou no imóvel:', property);
  }
}
