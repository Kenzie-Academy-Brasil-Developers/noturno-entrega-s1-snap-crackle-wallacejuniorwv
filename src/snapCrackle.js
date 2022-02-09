function snapCrackle(maxValue) {
    let output = "";

    for (let number = 1; number <= maxValue; number++) {

        if (number % 2 !== 0 && number % 5 === 0) {
            output = output + "SnapCrackle";
        } else if (number % 5 === 0) {
            output = output + "Crackle";
        } else if (number % 2 !== 0) {
            output = output + "Snap";
        } else {
            output = output + number;
        }

        if (maxValue != number) {
            output = output + ", ";
        };
    }
    return output;
}
console.log(snapCrackle(15));
