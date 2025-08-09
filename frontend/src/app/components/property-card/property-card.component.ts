import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Property {
  images?: string[];
  shortDescription?: string;
  description?: string;
  price: number;
  condoFee?: number;
  areaBuilt: number;
  areaTotal: number;
  bedrooms: number;
  address?: string;
  garage: number;
  neighborhood: string;
  type: string;
  pricePerSquareMeter: number;
}

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
})
export class PropertyCardComponent {
  @Input() property!: Property;
  @Output() onClick = new EventEmitter<Property>();

  // estado local
  activeIndex = 0;
  isFav = false;

  // imagem atual (com fallback)
  currentImage(p: Property): string {
    return (p.images && p.images[this.activeIndex]) || 'assets/images/carregando-casa.png';
  }

  handleImgError(p: Property) {
    if (p.images && p.images.length) {
      // remove a imagem quebrada e tenta a próxima
      p.images.splice(this.activeIndex, 1);
      if (this.activeIndex >= (p.images?.length || 0)) this.activeIndex = 0;
    }
  }

  setActiveIndex(i: number) {
    this.activeIndex = i;
  }

  toggleFavorite(p: Property, ev: MouseEvent) {
    ev.stopPropagation(); // não dispara o clique do card
    this.isFav = !this.isFav;
    // TODO: chame um serviço para persistir favorito se quiser
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
  
  
}
