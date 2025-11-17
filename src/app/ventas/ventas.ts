import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar Bootstrap JavaScript
declare var bootstrap: any;

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

interface Cliente {
  nombre: string;
  email: string;
  imagen: string;
}

interface Venta {
  id: string;
  fecha: string;
  cliente: Cliente;
  productos: Producto[];
  pais: string;
  ciudad: string;
  importe: number;
  estado: string;
  metodoPago: string;
}

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas{
  @ViewChild('detallesVentaModal') modal!: ElementRef;

  ventaSeleccionada: Venta | null = null;
  private modalInstance: any;
  mostrarModal: boolean = false;

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.modal.nativeElement);
  }

  ventas: Venta[] = [
    {
      id: 'V-1001',
      fecha: '2024-01-15',
      cliente: {
        nombre: 'Ana García',
        email: 'ana@email.com',
        imagen: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Camisa Oxford Slim', cantidad: 2, precio: 45.99 },
        { nombre: 'Pantalón Chino', cantidad: 1, precio: 59.99 }
      ],
      pais: 'España',
      ciudad: 'Madrid',
      importe: 151.97,
      estado: 'Completado',
      metodoPago: 'Tarjeta'
    },
    {
      id: 'V-1002',
      fecha: '2024-01-14',
      cliente: {
        nombre: 'Carlos López',
        email: 'carlos@email.com',
        imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Zapatos Running Pro', cantidad: 1, precio: 129.99 }
      ],
      pais: 'México',
      ciudad: 'Ciudad de México',
      importe: 129.99,
      estado: 'Enviado',
      metodoPago: 'PayPal'
    },
    {
      id: 'V-1003',
      fecha: '2024-01-13',
      cliente: {
        nombre: 'María Rodríguez',
        email: 'maria@email.com',
        imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Vestido Midi Floral', cantidad: 1, precio: 65.99 },
        { nombre: 'Bolso Cuero Premium', cantidad: 1, precio: 89.99 }
      ],
      pais: 'Argentina',
      ciudad: 'Buenos Aires',
      importe: 155.98,
      estado: 'Pendiente',
      metodoPago: 'Transferencia'
    },
    {
      id: 'V-1004',
      fecha: '2024-01-12',
      cliente: {
        nombre: 'Roberto Silva',
        email: 'roberto@email.com',
        imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Chaqueta Denim', cantidad: 1, precio: 79.99 },
        { nombre: 'Gorra Baseball', cantidad: 2, precio: 24.99 }
      ],
      pais: 'Colombia',
      ciudad: 'Bogotá',
      importe: 129.97,
      estado: 'Completado',
      metodoPago: 'Tarjeta'
    },
    {
      id: 'V-1005',
      fecha: '2024-01-11',
      cliente: {
        nombre: 'Laura Martínez',
        email: 'laura@email.com',
        imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Falda Plisada', cantidad: 1, precio: 55.99 },
        { nombre: 'Blusa Seda', cantidad: 1, precio: 45.99 },
        { nombre: 'Cinturón Cuero', cantidad: 1, precio: 29.99 }
      ],
      pais: 'Chile',
      ciudad: 'Santiago',
      importe: 131.97,
      estado: 'Enviado',
      metodoPago: 'PayPal'
    },
    {
      id: 'V-1006',
      fecha: '2024-01-10',
      cliente: {
        nombre: 'David Fernández',
        email: 'david@email.com',
        imagen: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Zapatillas Urbanas', cantidad: 1, precio: 99.99 },
        { nombre: 'Calcetines Deportivos', cantidad: 3, precio: 12.99 }
      ],
      pais: 'Perú',
      ciudad: 'Lima',
      importe: 138.96,
      estado: 'Cancelado',
      metodoPago: 'Tarjeta'
    },
    {
      id: 'V-1007',
      fecha: '2024-01-09',
      cliente: {
        nombre: 'Elena Torres',
        email: 'elena@email.com',
        imagen: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Abrigo Invierno', cantidad: 1, precio: 149.99 },
        { nombre: 'Bufanda Lana', cantidad: 1, precio: 35.99 }
      ],
      pais: 'España',
      ciudad: 'Barcelona',
      importe: 185.98,
      estado: 'Completado',
      metodoPago: 'Tarjeta'
    },
    {
      id: 'V-1008',
      fecha: '2024-01-08',
      cliente: {
        nombre: 'Miguel Ángel Cruz',
        email: 'miguel@email.com',
        imagen: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Traje Formal', cantidad: 1, precio: 299.99 },
        { nombre: 'Corbata Seda', cantidad: 2, precio: 39.99 }
      ],
      pais: 'México',
      ciudad: 'Monterrey',
      importe: 379.97,
      estado: 'Pendiente',
      metodoPago: 'Transferencia'
    },
    {
      id: 'V-1009',
      fecha: '2024-01-07',
      cliente: {
        nombre: 'Sofía Ramírez',
        email: 'sofia@email.com',
        imagen: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Vestido Noche', cantidad: 1, precio: 89.99 },
        { nombre: 'Tacones Altos', cantidad: 1, precio: 79.99 },
        { nombre: 'Bolso Fiesta', cantidad: 1, precio: 65.99 }
      ],
      pais: 'Argentina',
      ciudad: 'Córdoba',
      importe: 235.97,
      estado: 'Enviado',
      metodoPago: 'PayPal'
    },
    {
      id: 'V-1010',
      fecha: '2024-01-06',
      cliente: {
        nombre: 'Jorge Mendoza',
        email: 'jorge@email.com',
        imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Sudadera Capucha', cantidad: 1, precio: 49.99 },
        { nombre: 'Pantalón Jogger', cantidad: 1, precio: 44.99 },
        { nombre: 'Gorra Snapback', cantidad: 1, precio: 29.99 }
      ],
      pais: 'Colombia',
      ciudad: 'Medellín',
      importe: 124.97,
      estado: 'Completado',
      metodoPago: 'Tarjeta'
    },
    {
      id: 'V-1011',
      fecha: '2024-01-05',
      cliente: {
        nombre: 'Patricia Herrera',
        email: 'patricia@email.com',
        imagen: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Blazer Oficina', cantidad: 1, precio: 89.99 },
        { nombre: 'Pantalón Taba', cantidad: 1, precio: 59.99 }
      ],
      pais: 'Chile',
      ciudad: 'Valparaíso',
      importe: 149.98,
      estado: 'Enviado',
      metodoPago: 'Tarjeta'
    },
    {
      id: 'V-1012',
      fecha: '2024-01-04',
      cliente: {
        nombre: 'Ricardo Vargas',
        email: 'ricardo@email.com',
        imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Chaqueta Cuero', cantidad: 1, precio: 199.99 },
        { nombre: 'Camiseta Básica', cantidad: 3, precio: 19.99 }
      ],
      pais: 'Perú',
      ciudad: 'Arequipa',
      importe: 259.96,
      estado: 'Completado',
      metodoPago: 'PayPal'
    },
    {
      id: 'V-1013',
      fecha: '2024-01-03',
      cliente: {
        nombre: 'Verónica Castro',
        email: 'veronica@email.com',
        imagen: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=150&h=150&fit=crop&crop=face'
      },
      productos: [
        { nombre: 'Bikini Playa', cantidad: 1, precio: 45.99 },
        { nombre: 'Pareo Verano', cantidad: 1, precio: 29.99 },
        { nombre: 'Sandalias Playa', cantidad: 1, precio: 35.99 }
      ],
      pais: 'España',
      ciudad: 'Valencia',
      importe: 111.97,
      estado: 'Pendiente',
      metodoPago: 'Tarjeta'
    }
  ];

verDetalles(venta: any) {
    this.ventaSeleccionada = venta;
    this.mostrarModal = true;
    console.log('Mostrando detalles de:', venta.id); // Para debug
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.ventaSeleccionada = null;
  }

  getEstadoClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Completado': 'bg-success',
      'Enviado': 'bg-info',
      'Pendiente': 'bg-warning',
      'Cancelado': 'bg-danger'
    };
    return classes[estado] || 'bg-secondary';
  }
}