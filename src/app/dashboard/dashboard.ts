import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsuariosService } from '../services/UsuariosService';
import { Usuario } from '../data/usuarios';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports:[CommonModule]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
  }

  ngAfterViewInit(): void {
    this.crearGraficoVentas();
    this.crearGraficoRanking();
    this.crearGraficoVentas5Anios();
  }

crearGraficoVentas5Anios(): void {
  const ctx = (document.getElementById('ventas5AniosChart') as HTMLCanvasElement)?.getContext('2d');
  if (!ctx) return;

  // Total de ventas por usuario
  const totalVentas = this.usuarios.reduce((sum, u) => sum + u.ventas, 0);

  // Generamos valores progresivos de los últimos 5 años
  const años = ['2021', '2022', '2023', '2024', '2025'];
  const ventasPorAño = años.map((_, i) => Math.round(totalVentas * ((i + 1) / años.length)));

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: años,
      datasets: [{
        label: 'Ventas totales',
        data: ventasPorAño,
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3, // suaviza la línea
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Evolución de ventas últimos 5 años' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
  crearGraficoVentas(): void {
    const ctx = (document.getElementById('ventasChart') as HTMLCanvasElement)?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.usuarios.map(u => u.nombre),
        datasets: [{
          label: 'Ventas',
          data: this.usuarios.map(u => u.ventas),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Ventas por usuario' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  crearGraficoRanking(): void {
    const ctx = (document.getElementById('rankingChart') as HTMLCanvasElement)?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.usuarios.map(u => u.nombre),
        datasets: [{
          label: 'Ranking',
          data: this.usuarios.map(u => u.ventas),
          backgroundColor: this.usuarios.map(() => `hsl(${Math.random() * 360}, 70%, 60%)`),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right' },
          title: { display: true, text: 'Ranking de ventas' }
        }
      }
    });
  }
}