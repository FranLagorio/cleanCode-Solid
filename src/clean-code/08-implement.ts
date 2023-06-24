interface HumanProps {
  name: string;
  dni: number;
  metodo(a: string): string;
}

class Human implements HumanProps {
  public lastname: string;
  public address: string;
  public name: string;
  public dni: number;
  public metodo: (b: string) => string;

  constructor(
    lastname: string,
    address: string,
    name: string,
    dni: number,
    metodo: (b: string) => string
  ) {
    this.lastname = lastname;
    this.address = address;
    this.name = name;
    this.dni = dni;
    this.metodo = metodo;
  }

  public probarMetodo() {
    console.log(this.metodo(this.name));
  }

  private otroMetodo() {
    console.log("Hola!!!");
  }

  protected tercerMetodo() {
    console.log("este metodo es protected y se extiende del padre");
  }
}

class Humanoide extends Human {
  constructor(
    public power: string,
    public lastname: string,
    public address: string,
    public name: string,
    public dni: number,
    public metodo: (b: string) => string
  ) {
    super(lastname, address, name, dni, metodo);
  }

  //* Podria sobreescribir probarMetodo como tercerMetodo al extender pero no los private

  metodoExtend() {
    this.tercerMetodo();
  }
}

const newHuman = new Human(
  "lagorio",
  "cordoba",
  "francisco",
  39071291,
  (b: string): string => {
    return `Hola ${b}`;
  }
);

newHuman.probarMetodo();
//! Property otroMetodo is private and only accessible within class 'Human'.
// !newHuman.otroMetodo()

//! Property tercerMetodo is protected and only accessible within class Human and its subclasses.
//! newHuman.tercerMetodo()

const newHumanoide = new Humanoide(
  "pelear",
  "lagorio",
  "cordoba",
  "humanoide",
  39071291,
  (b: string): string => {
    return `Hola ${b}`;
  }
);

newHumanoide.probarMetodo();
newHumanoide.metodoExtend();
