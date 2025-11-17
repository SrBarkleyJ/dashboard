import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/UsuariosService';
import { Usuario } from '../data/usuarios';

@Component({
  selector: 'app-reportes',
  standalone: true, // si usas imports aquí
  imports: [CommonModule],
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css'], // corregido de styleUrl a styleUrls
})
export class ReportesComponent implements OnInit {

  usuarios: Usuario[] = [];
  kpis: any[] = []; // inicializamos vacío

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();

    // Ahora sí podemos calcular los KPIs
    this.kpis = [
      { 
        titulo: 'Total Ventas', 
        valor: this.usuarios.reduce((sum, u) => sum + u.ventas, 0), 
        icon: 'bi bi-currency-dollar' 
      },
      { 
        titulo: 'Mejor Vendedor', 
        valor: this.usuarios.reduce((max, u) => u.ventas > max.ventas ? u : max, this.usuarios[0]).nombre, 
        icon: 'bi bi-person-fill' 
      },
      { 
        titulo: 'Promedio por Usuario', 
        valor: (this.usuarios.reduce((sum, u) => sum + u.ventas, 0) / this.usuarios.length).toFixed(1), 
        icon: 'bi bi-bar-chart-fill' 
      },
      { 
        titulo: 'Total Clientes', 
        valor: this.usuarios.reduce((sum, u) => sum + (u.clientesAtendidos || 0), 0), 
        icon: 'bi bi-people-fill' 
      }
    ];
  }
}

