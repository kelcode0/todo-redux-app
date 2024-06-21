export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.completado = false;
    this.id = Math.random();
    this.texto = texto;
  }
}
