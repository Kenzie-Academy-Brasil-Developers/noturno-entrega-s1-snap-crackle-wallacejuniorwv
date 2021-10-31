function snapCrackle(maxValue) {

  let numeroRetornado = " ";

  for (let number = 1; number <= maxValue; number++) {

    if (number % 2 !== 0 && number % 5 === 0) {

      numeroRetornado = numeroRetornado + "SnapCrackle," + "";
    } else if (number % 5 === 0) {

      numeroRetornado = numeroRetornado + "Crackle, " + "";
    } else if (number % 2 !== 0) {

      numeroRetornado = numeroRetornado + "Snap, " + "";

    } else {
      numeroRetornado = numeroRetornado + number + ", ";
    }
  }
  return numeroRetornado;
}
console.log(snapCrackle(12));