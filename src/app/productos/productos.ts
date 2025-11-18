import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  precioOriginal?: number;
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
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camisa Oxford Slim Fit',
      precio: 45.99,
      precioOriginal: 59.99,
      imagen: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShaUBUu4plGlEIn6qbn69q-lG_OtnBcmGq0iYac6xou9p3G54dWC_crzcJaUysiaPH7ssyAls8pw0Gk9vAgc6bs2ydYgpVtGem-RnH9tQQYAYXyxQ0NJLWtA',
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
      imagen: 'https://m.media-amazon.com/images/I/71223QgUkqL.jpg',
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
      imagen: 'https://m.media-amazon.com/images/I/81VZ9uYnsNL._AC_UY1000_.jpg',
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

  // Variables para el modal
  mostrarModal: boolean = false;
  productoEditando: Producto | null = null;
  esEdicion: boolean = false;

  // Modelo para nuevo producto
  nuevoProducto: Partial<Producto> = {
    nombre: '',
    precio: 0,
    precioOriginal: 0,
    imagen: '',
    categoria: 'Ropa Hombre',
    stock: 0,
    descripcion: '',
    rating: 0,
    vendidos: 0,
    estado: 'Disponible',
    fechaAgregado: new Date().toISOString().split('T')[0],
    sku: ''
  };

  // Categorías disponibles
  categorias: string[] = [
    'Ropa Hombre',
    'Ropa Mujer', 
    'Calzado',
    'Accesorios',
    'Electrónicos',
    'Hogar'
  ];

  // Estados disponibles
  estados: string[] = ['Disponible', 'Bajo Stock', 'Agotado'];

  getEstadoClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'Disponible': 'bg-success',
      'Bajo Stock': 'bg-warning',
      'Agotado': 'bg-danger'
    };
    return classes[estado] || 'bg-secondary';
  }

  calcularDescuento(precio: number, precioOriginal?: number): number {
    if (!precioOriginal) return 0;
    return Math.round(((precioOriginal - precio) / precioOriginal) * 100);
  }

  // ABRIR MODAL PARA NUEVO PRODUCTO
  abrirModalNuevo(): void {
    this.esEdicion = false;
    this.productoEditando = null;
    this.nuevoProducto = {
      nombre: '',
      precio: 0,
      precioOriginal: 0,
      imagen: '',
      categoria: 'Ropa Hombre',
      stock: 0,
      descripcion: '',
      rating: 0,
      vendidos: 0,
      estado: 'Disponible',
      fechaAgregado: new Date().toISOString().split('T')[0],
      sku: this.generarSKU()
    };
    this.mostrarModal = true;
  }

  // ABRIR MODAL PARA EDITAR
  abrirModalEditar(producto: Producto): void {
    this.esEdicion = true;
    this.productoEditando = producto;
    this.nuevoProducto = { ...producto };
    this.mostrarModal = true;
  }

  // GENERAR SKU AUTOMÁTICO
  generarSKU(): string {
    const prefix = 'PROD';
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${random}`;
  }

  // GENERAR NUEVO ID - CORREGIDO
  generarNuevoId(): number {
    if (this.productos.length === 0) {
      return 1;
    }
    
    // Encontrar el ID máximo de manera segura
    const maxId = this.productos.reduce((max, producto) => {
      return producto.id > max ? producto.id : max;
    }, 0);
    
    return maxId + 1;
  }

  // GUARDAR PRODUCTO (Crear o Editar) - CORREGIDO
  guardarProducto(): void {
    if (this.validarProducto()) {
      if (this.esEdicion && this.productoEditando) {
        // EDITAR producto existente - mantener el ID original
        const index = this.productos.findIndex(p => p.id === this.productoEditando!.id);
        if (index !== -1) {
          this.productos[index] = {
            id: this.productoEditando.id, // Mantener ID original
            nombre: this.nuevoProducto.nombre!,
            precio: this.nuevoProducto.precio!,
            precioOriginal: this.nuevoProducto.precioOriginal,
            imagen: this.nuevoProducto.imagen!,
            categoria: this.nuevoProducto.categoria!,
            stock: this.nuevoProducto.stock!,
            descripcion: this.nuevoProducto.descripcion!,
            rating: this.nuevoProducto.rating!,
            vendidos: this.nuevoProducto.vendidos!,
            estado: this.nuevoProducto.estado!,
            fechaAgregado: this.nuevoProducto.fechaAgregado!,
            sku: this.nuevoProducto.sku!
          };
        }
      } else {
        // CREAR nuevo producto - generar nuevo ID
        const nuevoProductoCompleto: Producto = {
          id: this.generarNuevoId(),
          nombre: this.nuevoProducto.nombre!,
          precio: this.nuevoProducto.precio!,
          precioOriginal: this.nuevoProducto.precioOriginal,
          imagen: this.nuevoProducto.imagen!,
          categoria: this.nuevoProducto.categoria!,
          stock: this.nuevoProducto.stock!,
          descripcion: this.nuevoProducto.descripcion!,
          rating: this.nuevoProducto.rating!,
          vendidos: this.nuevoProducto.vendidos!,
          estado: this.nuevoProducto.estado!,
          fechaAgregado: this.nuevoProducto.fechaAgregado!,
          sku: this.nuevoProducto.sku!
        };
        this.productos.push(nuevoProductoCompleto);
      }
      this.cerrarModal();
    }
  }

  // VALIDAR PRODUCTO
  validarProducto(): boolean {
    if (!this.nuevoProducto.nombre?.trim()) {
      alert('El nombre del producto es obligatorio');
      return false;
    }
    if (!this.nuevoProducto.precio || this.nuevoProducto.precio <= 0) {
      alert('El precio debe ser mayor a 0');
      return false;
    }
    if (!this.nuevoProducto.imagen?.trim()) {
      alert('La URL de la imagen es obligatoria');
      return false;
    }
    return true;
  }

  // ELIMINAR PRODUCTO
  eliminarProducto(producto: Producto): void {
    if (confirm(`¿Estás seguro de que quieres eliminar "${producto.nombre}"?`)) {
      this.productos = this.productos.filter(p => p.id !== producto.id);
    }
  }

  // CERRAR MODAL
  cerrarModal(): void {
    this.mostrarModal = false;
    this.productoEditando = null;
    this.nuevoProducto = {
      nombre: '',
      precio: 0,
      precioOriginal: 0,
      imagen: '',
      categoria: 'Ropa Hombre',
      stock: 0,
      descripcion: '',
      rating: 0,
      vendidos: 0,
      estado: 'Disponible',
      fechaAgregado: new Date().toISOString().split('T')[0],
      sku: ''
    };
  }

  // GENERAR IMAGEN DE PRUEBA
  generarImagenAleatoria(): void {
    const categoriasImagenes: { [key: string]: string } = {
      'Ropa Hombre': 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop',
      'Ropa Mujer': 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=400&h=400&fit=crop',
      'Calzado': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      'Accesorios': 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
      'Electrónicos': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'Hogar': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop'
    };
    
    this.nuevoProducto.imagen = categoriasImagenes[this.nuevoProducto.categoria || 'Ropa Hombre'] || 
                               'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop';
  }
}