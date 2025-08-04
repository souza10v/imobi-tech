import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IconBarChartComponent, IconHeartComponent, IconHomeComponent, IconPlusComponent } from '../../shared/icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconHomeComponent, IconHeartComponent, IconBarChartComponent, IconPlusComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isAuthenticated = true;
  user: any = null;

  constructor(private router: Router) {
  }

  logout() {
    this.router.navigate(['/']);
  }

  navigation = [
    { name: 'Início', href: '/', icon: 'app-icon-home' },
    { name: 'Favoritos', href: '/favorites', icon: 'app-icon-heart' },
    { name: 'Dashboard', href: '/dashboard', icon: 'app-icon-bar-chart' },
    { name: 'Cadastrar Imóvel', href: '/add-property', icon: 'app-icon-plus' }
  ];
  
}
