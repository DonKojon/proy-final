export interface Usuario {
  id?: number;
  nombre: string;
  apellido: string;
  email: string;
  pass: string;
  role_id: number;  // nuevo campo
  role?: { nombre: string }; // opcional, para mostrar nombre del rol
}
