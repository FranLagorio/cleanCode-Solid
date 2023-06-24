(() => {
  function isRedFruit(fruit: string): boolean {
    const redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruit);
  }

  type FruitColor = "red" | "yellow" | "purple";
  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColors: Record<FruitColor, string[]> = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(fruitsByColors).includes(color)) {
      throw Error("the color must be: red, yellow, purple");
    }

    return fruitsByColors[color];
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (isFirstStepWorking === false) return "First step broken.";
    if (isSecondStepWorking === false) return "Second step broken.";
    if (isThirdStepWorking === false) return "Third step broken.";
    if (isFourthStepWorking === false) return "Fourth step broken.";
    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor("pink") }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
