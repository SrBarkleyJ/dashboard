import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios';
import { ReportesComponent } from './reportes/reportes';
import { DashboardComponent } from './dashboard/dashboard';
import { Ventas } from './ventas/ventas';
import { Productos } from './productos/productos';


export const routes: Routes = [
  { path: '', redirectTo: 'reportes', pathMatch: 'full' }, // Ruta por defecto
  { path: 'dashboard', component: DashboardComponent},
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'productos', component: Productos},
  { path: 'ventas', component: Ventas},
  { path: '**', redirectTo: 'reportes' } // Ruta comodín para 404
];