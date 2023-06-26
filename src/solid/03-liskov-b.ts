export abstract class Vehicle {
  protected altura: number;
  protected peso: number;
  constructor(altura: number, peso: number) {
    this.altura = altura;
    this.peso = peso;
  }

  get getAltura() {
    return this.altura;
  }
  //  getNumberOfSeats(): number {
  //     throw Error("Method not implemented");
  //   }
  abstract getNumerOfSeats(): number;
}
// extender de una clase abstracta frente  ala ventaja de imple,entar interface
// es que podes aceder a variables de la clase asbtracta
//herrera lo hizo con extends entonces tenias que poner el
//super()
export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number, altura: number, peso: number) {
    super(altura, peso);
  }
  getNumerOfSeats(): number {
    this.getAltura;
    return this.numberOfSeats;
  }
}

export class Audi implements Vehicle {
  constructor(private numberOfSeats: number) {}
  getNumerOfSeats(): number {
    return this.numberOfSeats;
  }
  getNumberOfAudiSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota implements Vehicle {
  constructor(private numberOfSeats: number) {}
  getNumerOfSeats(): number {
    return this.numberOfSeats;
  }
  getNumberOfToyotaSeats() {
    return this.numberOfSeats;
  }
}

export class Honda implements Vehicle {
  constructor(private numberOfSeats: number) {}
  getNumerOfSeats(): number {
    return this.numberOfSeats;
  }
  getNumberOfHondaSeats() {
    return this.numberOfSeats;
  }
}

export class Ford implements Vehicle {
  constructor(private numberOfSeats: number) {}
  getNumerOfSeats(): number {
    return this.numberOfSeats;
  }
}
