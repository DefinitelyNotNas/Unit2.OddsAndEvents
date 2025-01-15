// TODO: this file! :)
const numButton = document.getElementById("number");
const numBank = document.getElementById("numberBank");
const sort1 = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const sortedNums = document.getElementById("sortedNumbers");
const oddSection = document.getElementById("odds");
const evenSection = document.getElementById("evens");
const form = document.querySelector("form");
const bankOutput = numBank.querySelector("output");
const oddOutput = oddSection.querySelector("output");
const evenOutput = evenSection.querySelector("output");

let bankOfNumbers = [];
let evens = [];
let odds = [];

const sort = (arr, sortOne = false) => {
	evens = [];
	odds = [];
	const length = sortOne ? 1 : arr.length;
	for (let i = 0; i < length; i++) {
		if (arr[i] % 2 === 0) {
			evens.push(arr[i]);
		} else {
			odds.push(arr[i]);
		}
	}
	return { evens, odds };
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const number = Number(numButton.value);
	bankOfNumbers.push(number);
	bankOutput.textContent = bankOfNumbers.join(", ");
	numButton.value = "";
});

sort1.addEventListener("click", () => {
	const { even, odds } = sort(bankOfNumbers, true);
	evenOutput.textContent = evens.join(", ");
	oddOutput.textContent = odds.join(", ");
});

sortAll.addEventListener("click", () => {
	const { evens, odds } = sort(bankOfNumbers, false);
	evenOutput.textContent = evens.join(", ");
	oddOutput.textContent = odds.join(", ");
});

console.log(bankOfNumbers);
