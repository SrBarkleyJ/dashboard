import { Injectable } from '@angular/core';
import { Usuario, USUARIOS } from '../data/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios: Usuario[] = USUARIOS;

  constructor() {}

  // Obtener todos los usuarios
  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  // Obtener un usuario por nombre
  getUsuario(nombre: string): Usuario | undefined {
    return this.usuarios.find(u => u.nombre === nombre);
  }

  // Actualizar ventas de un usuario
  actualizarVentas(nombre: string, nuevasVentas: number) {
    const usuario = this.usuarios.find(u => u.nombre === nombre);
    if (usuario) usuario.ventas = nuevasVentas;
  }
}