import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertyFiltersComponent } from './containers/property-filters/property-filters.component';


export const routes: Routes = [
    { path: '', component: PropertyFiltersComponent }
];