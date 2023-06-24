export abstract class Vehicle {
  //  getNumberOfSeats(): number {
  //     throw Error("Method not implemented");
  //   }
  abstract getNumerOfSeats(): number;
}

//herrera lo hizo con extends entonces tenias que poner el
//super()
export class Tesla implements Vehicle {
  constructor(private numberOfSeats: number) {}
  getNumerOfSeats(): number {
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
