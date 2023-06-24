(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log("caster ...");
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isRetired = false,
    isSeparated = true,
  }): number => {
    if (isDead) return 12500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
