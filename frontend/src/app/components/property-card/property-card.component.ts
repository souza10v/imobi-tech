import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Interface tipada para o imóvel
export interface Property {
  images: string[];
  shortDescription: string;
  price: number;
  condoFee?: number;
  area: number;
  bedrooms: number;
  address: string;
}

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-card.component.html',
})
export class PropertyCardComponent {
  @Input() property!: Property; // uso do operador ! para garantir que será inicializado
  @Output() onClick = new EventEmitter<Property>();

  constructor() {}
}
