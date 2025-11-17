import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../data/usuarios';
import { UsuariosService } from '../services/UsuariosService';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})


export class UsuariosComponent implements OnInit {

usuarios: Usuario[] = [];
constructor(private usuariosService: UsuariosService){

}
  ngOnInit(){
    this.usuarios=this.usuariosService.getUsuarios();
  }

}

