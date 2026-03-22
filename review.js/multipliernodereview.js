// Multiplier: accepts variable number of arguments, multiplies them, and returns result
function Multiplier(...nums) {
	if (nums.length === 0) return 'No arguments provided. Please pass at least two numbers.';
	if (nums.length === 1) return 'Only one argument provided. Please pass at least two numbers to multiply.';

	let result = 1;
	for (const n of nums) {
		const num = Number(n);
		if (Number.isNaN(num)) return `Invalid number encountered: ${n}`;
		result *= num;
	}
	return result;
}

// Examples / quick tests
console.log('Multiplier() =>', Multiplier());
console.log('Multiplier(5) =>', Multiplier(5));
console.log('Multiplier(2, 3, 4) =>', Multiplier(2, 3, 4));
console.log("Multiplier('2', '3') =>", Multiplier('2','3'));

