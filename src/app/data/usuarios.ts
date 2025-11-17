export interface Usuario {
  imagen: string;
  nombre: string;
  ventas: number;
  clientesAtendidos?: number;
  promedioTicket?: number;
  ranking?: number;
}

export const USUARIOS: Usuario[] = [
  {
    imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    nombre: 'Carlos Reyes',
    ventas: 150,
    clientesAtendidos: 40,
    promedioTicket: 37.5,
    ranking: 2
  },
  {
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    nombre: 'Roberto Silva',
    ventas: 200,
    clientesAtendidos: 55,
    promedioTicket: 36.4,
    ranking: 1
  },
  {
    imagen: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
    nombre: 'David Fernández',
    ventas: 110,
    clientesAtendidos: 35,
    promedioTicket: 31.4,
    ranking: 6
  },
  {
    imagen: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=150&h=150&fit=crop&crop=face',
    nombre: 'Miguel Ángel Cruz',
    ventas: 75,
    clientesAtendidos: 20,
    promedioTicket: 30,
    ranking: 10
  },
  {
    imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    nombre: 'Jorge Mendoza',
    ventas: 95,
    clientesAtendidos: 25,
    promedioTicket: 30.5,
    ranking: 8
  },
  {
    imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    nombre: 'Ricardo Vargas',
    ventas: 125,
    clientesAtendidos: 38,
    promedioTicket: 32.9,
    ranking: 5
  },
  {
    imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    nombre: 'Fernando Ortega',
    ventas: 115,
    clientesAtendidos: 33,
    promedioTicket: 34.8,
    ranking: 7
  },
  {
    imagen: 'assets/juan.jpg',
    nombre: 'Óscar Ríos',
    ventas: 105,
    clientesAtendidos: 28,
    promedioTicket: 37.5,
    ranking: 9
  },
  {
    imagen: 'assets/maria.jpg',
    nombre: 'Ana López',
    ventas: 88,
    clientesAtendidos: 22,
    promedioTicket: 34,
    ranking: 11
  },
  {
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    nombre: 'Laura Martínez',
    ventas: 135,
    clientesAtendidos: 41,
    promedioTicket: 33,
    ranking: 4
  },
  {
    imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    nombre: 'Elena Torres',
    ventas: 165,
    clientesAtendidos: 50,
    promedioTicket: 33,
    ranking: 3
  },
  {
    imagen: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face',
    nombre: 'Sofía Ramírez',
    ventas: 180,
    clientesAtendidos: 52,
    promedioTicket: 34.6,
    ranking: 2
  },
  {
    imagen: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    nombre: 'Patricia Herrera',
    ventas: 140,
    clientesAtendidos: 42,
    promedioTicket: 33.3,
    ranking: 4
  },
  {
    imagen: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
    nombre: 'Verónica Castro',
    ventas: 155,
    clientesAtendidos: 48,
    promedioTicket: 32.3,
    ranking: 3
  },
  {
    imagen: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    nombre: 'Claudia Morales',
    ventas: 170,
    clientesAtendidos: 53,
    promedioTicket: 32.1,
    ranking: 1
  }
];
