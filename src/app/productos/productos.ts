import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  precioOriginal?: number; // Para mostrar descuentos
  imagen: string;
  categoria: string;
  stock: number;
  descripcion: string;
  rating: number;
  vendidos: number;
  estado: 'Disponible' | 'Agotado' | 'Bajo Stock';
  fechaAgregado: string;
  sku: string;
}
@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camisa Oxford Slim Fit',
      precio: 45.99,
      precioOriginal: 59.99,
      imagen: 'https://hussars.net/cdn/shop/files/camisaoxfordblanca2.jpg?v=1744302896&width=2048',
      categoria: 'Ropa Hombre',
      stock: 89,
      descripcion: 'Camisa de oxford 100% algodón, corte slim fit perfecta para oficina',
      rating: 4.5,
      vendidos: 234,
      estado: 'Disponible',
      fechaAgregado: '2024-01-10',
      sku: 'CAM-OXF-001'
    },
    {
      id: 2,
      nombre: 'Vestido Midi Floral',
      precio: 65.99,
      imagen: 'https://ylmamodas.com/wp-content/uploads/2025/04/YLMA_L148_1.webp',
      categoria: 'Ropa Mujer',
      stock: 45,
      descripcion: 'Vestido midi con estampado floral, tejido ligero y cómodo',
      rating: 4.8,
      vendidos: 189,
      estado: 'Disponible',
      fechaAgregado: '2024-01-08',
      sku: 'VES-MID-002'
    },
    {
      id: 3,
      nombre: 'Zapatos Running Pro',
      precio: 129.99,
      precioOriginal: 159.99,
      imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      categoria: 'Calzado',
      stock: 156,
      descripcion: 'Zapatillas running con tecnología de amortiguación avanzada',
      rating: 4.6,
      vendidos: 456,
      estado: 'Disponible',
      fechaAgregado: '2024-01-05',
      sku: 'ZAP-RUN-003'
    },
    {
      id: 4,
      nombre: 'Bolso de Cuero Premium',
      precio: 89.99,
      imagen: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
      categoria: 'Accesorios',
      stock: 23,
      descripcion: 'Bolso de cuero genuino, diseño elegante y espacioso',
      rating: 4.7,
      vendidos: 123,
      estado: 'Bajo Stock',
      fechaAgregado: '2024-01-12',
      sku: 'BOL-CUE-004'
    },
    {
      id: 5,
      nombre: 'Chaqueta Denim Clásica',
      precio: 79.99,
      imagen: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=400&h=400&fit=crop',
      categoria: 'Ropa Hombre',
      stock: 0,
      descripcion: 'Chaqueta denim de corte clásico, perfecta para looks casuales',
      rating: 4.4,
      vendidos: 78,
      estado: 'Agotado',
      fechaAgregado: '2024-01-03',
      sku: 'CHA-DEN-005'
    },
    {
      id: 6,
      nombre: 'Falda Plisada Elegante',
      precio: 55.99,
      imagen: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?w=400&h=400&fit=crop',
      categoria: 'Ropa Mujer',
      stock: 34,
      descripcion: 'Falda plisada de alta calidad, ideal para ocasiones formales',
      rating: 4.3,
      vendidos: 145,
      estado: 'Disponible',
      fechaAgregado: '2024-01-07',
      sku: 'FAL-PLI-006'
    },
    {
      id: 7,
      nombre: 'Reloj Deportivo Inteligente',
      precio: 159.99,
      precioOriginal: 199.99,
      imagen: 'https://es.amazfit.com/cdn/shop/files/Active_2-Black-1_98854113-545f-43f3-b4f3-a4b98588cb52.png?v=1740568454',
      categoria: 'Accesorios',
      stock: 67,
      descripcion: 'Reloj inteligente con monitor de actividad y notificaciones',
      rating: 4.9,
      vendidos: 89,
      estado: 'Disponible',
      fechaAgregado: '2024-01-15',
      sku: 'REL-DEP-007'
    },
    {
      id: 8,
      nombre: 'Zapatillas Urbanas Modernas',
      precio: 99.99,
      imagen: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
      categoria: 'Calzado',
      stock: 178,
      descripcion: 'Zapatillas urbanas con diseño moderno y máxima comodidad',
      rating: 4.5,
      vendidos: 567,
      estado: 'Disponible',
      fechaAgregado: '2024-01-02',
      sku: 'ZAP-URB-008'
    },
    {
      id: 9,
      nombre: 'Sudadera con Capucha',
      precio: 49.99,
      imagen: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      categoria: 'Ropa Hombre',
      stock: 12,
      descripcion: 'Sudadera cómoda con capucha, perfecta para el día a día',
      rating: 4.2,
      vendidos: 321,
      estado: 'Bajo Stock',
      fechaAgregado: '2024-01-09',
      sku: 'SUD-CAP-009'
    },
    {
      id: 10,
      nombre: 'Blazer Elegante para Oficina',
      precio: 89.99,
      imagen: 'https://media.revistagq.com/photos/5ca5fb50267a3218b17250a2/1:1/w_899,h_899,c_limit/cual_es_la_diferencia_entre_blazer_y_americana_221.jpg',
      categoria: 'Ropa Mujer',
      stock: 56,
      descripcion: 'Blazer profesional de corte perfecto para look de oficina',
      rating: 4.6,
      vendidos: 198,
      estado: 'Disponible',
      fechaAgregado: '2024-01-11',
      sku: 'BLA-ELE-010'
    }
  ];

  // Método para obtener la clase del estado del stock
  getEstadoClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Disponible': 'bg-success',
      'Bajo Stock': 'bg-warning',
      'Agotado': 'bg-danger'
    };
    return classes[estado] || 'bg-secondary';
  }

  // Método para calcular el porcentaje de descuento
  calcularDescuento(precio: number, precioOriginal?: number): number {
    if (!precioOriginal) return 0;
    return Math.round(((precioOriginal - precio) / precioOriginal) * 100);
  }
}