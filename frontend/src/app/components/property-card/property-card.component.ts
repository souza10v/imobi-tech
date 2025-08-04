import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-card.component.html',
})
export class PropertyCardComponent {
  @Input() property: any; // você pode tipar com interface Property depois
  @Output() onClick = new EventEmitter();

  formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }

  getStatusText(status: string) {
    switch (status) {
      case 'available': return 'Disponível';
      case 'sold': return 'Vendido';
      case 'rented': return 'Alugado';
      default: return status;
    }
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'available': return 'bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500/20';
      case 'sold': return 'bg-red-500/10 text-red-700 border-red-200 hover:bg-red-500/20';
      case 'rented': return 'bg-blue-500/10 text-blue-700 border-blue-200 hover:bg-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200 hover:bg-gray-500/20';
    }
  }
}
