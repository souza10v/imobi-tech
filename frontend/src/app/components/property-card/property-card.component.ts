import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconBathroomComponent, IconBedroomComponent, IconSquareIntersectComponent } from '../../shared/icons';

export type PropertyStatus = 'FOR_SALE' | 'FOR_RENT' | 'SOLD' | 'RENTED' | 'NEW';

export interface Property {
  id?: string | number;
  images?: string[];
  title?: string;                 // novo (equiv. React)
  shortDescription?: string;
  description?: string;
  price: number;
  condoFee?: number;
  areaBuilt: number;              // usa como area
  areaTotal: number;
  bedrooms: number;
  bathrooms?: number;             // novo
  address?: string;
  garage: number;
  neighborhood: string;
  city?: string;                  // novo
  type: string;
  pricePerSquareMeter: number;
  status?: PropertyStatus;        // novo
  featured?: boolean;             // novo
  features?: string[];            // novo
}

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterModule, IconBedroomComponent, IconBathroomComponent, IconSquareIntersectComponent],
  templateUrl: './property-card.component.html',
})
export class PropertyCardComponent {
  @Input() property!: Property;
  @Input() isAuthenticated = false;
  @Input() isFavorite = false;
  @Output() onClick = new EventEmitter<Property>();
  @Output() favoriteToggle = new EventEmitter<boolean>();

  // estado local
  activeIndex = 0;

  currentImage(p: Property): string {
    return (p.images && p.images[this.activeIndex]) || 'assets/images/carregando-casa.png';
  }

  handleImgError(p: Property) {
    if (p.images && p.images.length) {
      p.images.splice(this.activeIndex, 1);
      if (this.activeIndex >= (p.images?.length || 0)) this.activeIndex = 0;
    }
  }

  setActiveIndex(i: number, ev?: MouseEvent) {
    ev?.stopPropagation();
    this.activeIndex = i;
  }

  toggleFavorite(ev: MouseEvent) {
    ev.stopPropagation();
    this.isFavorite = !this.isFavorite;
    this.favoriteToggle.emit(this.isFavorite);
  }

  propertyTypeToPt(type?: string): string {
    if (!type) return '';
    const map: Record<string, string> = {
      HOUSE: 'Casa',
      APARTMENT: 'Apartamento',
      STUDIO: 'Kitnet / Studio',
      FARM: 'Fazenda / Sítio / Chácara',
      LAND: 'Terreno',
      COMMERCIAL: 'Comercial',
      OTHER: 'Outro'
    };
    return map[type] || '';
  }

  getStatusColor(status?: PropertyStatus): string {
    switch (status) {
      case 'FOR_SALE': return 'bg-emerald-500/90 text-white';
      case 'FOR_RENT': return 'bg-blue-500/90 text-white';
      case 'SOLD': return 'bg-rose-500/90 text-white';
      case 'RENTED': return 'bg-amber-500/90 text-white';
      case 'NEW': return 'bg-purple-500/90 text-white';
      default: return 'bg-gray-500/90 text-white';
    }
  }

  getStatusText(status?: PropertyStatus): string {
    switch (status) {
      case 'FOR_SALE': return 'À venda';
      case 'FOR_RENT': return 'Para alugar';
      case 'SOLD': return 'Vendido';
      case 'RENTED': return 'Alugado';
      case 'NEW': return 'Novo';
      default: return 'Imóvel';
    }
  }
}
