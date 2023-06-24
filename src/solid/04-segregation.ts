interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Humminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Ostrich implements Bird {
  //! para que va volar si no vuela!! esto violenta el principio de segregacion de interface
  // public fly() {
  //   throw new Error(" esta ave no vuela");
  // }
  public eat() {}
  public run() {}
}

class Penguin implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  //* que pasa si quiero poner swin a todos y no todos vuelan
  public swin() {}
}
