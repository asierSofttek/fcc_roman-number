const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const symbols = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};

const decimalToRoman = (num) => {
    const result = [];
    const digits = num.split("").reverse();
    if (!num) {
        return "Please enter a valid number"
    }
    if (num < 1) {
        return "Please enter a number greater than or equal to 1"
    }
    if (num > 3999) {
        return "Please enter a number less than or equal to 3999"
    }

    digits.forEach((item, index) => {
        const digit = parseInt(item);
        const placeValue = Math.pow(10, index);

        if (digit === 0) return;

        let romanNumeral = "";
        const one = symbols[placeValue];
        const five = symbols[placeValue * 5];
        const ten = symbols[placeValue * 10];

        if (digit < 4) {
            romanNumeral = one.repeat(digit);
        } else if (digit === 4) {
            romanNumeral = one + five;
        } else if (digit < 9) {
            romanNumeral = five + one.repeat(digit - 5);
        } else {
            romanNumeral = one + ten;
        }

        result.unshift(romanNumeral);
    });

    return output.innerText = result.join("");
};

convertBtn.addEventListener("click", () => {
    const result = decimalToRoman(numberInput.value);
    output.innerText = result;
})