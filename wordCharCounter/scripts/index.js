const countWords = () => {
	const str = document.getElementById("textfield").value;
	const words = str.toLowerCase().split(" ");
	const chars = str.toLowerCase().replace(/\s/g, "").split("");

	const wordCounts = {};
	const charCounts = {};

	let maxFrequency = 0;
	let mostFrequentWord = "";

	let maxFrequencyChar = 0;
	let mostFrequentChar = "";

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (wordCounts[word]) {
			wordCounts[word]++;
		} else {
			wordCounts[word] = 1;
		}
	}

	for (let i = 0; i < chars.length; i++) {
		const char = chars[i];
		if (charCounts[char]) {
			charCounts[char]++;
		} else {
			charCounts[char] = 1;
		}
	}

	for (const word in wordCounts) {
		console.log(`${word}: ${wordCounts[word]}`);
		if (wordCounts[word] > maxFrequency) {
			maxFrequency = wordCounts[word];
			mostFrequentWord = word;
		}
	}
	for (const char in charCounts) {
		console.log(`${char}: ${charCounts[char]}`);
		if (charCounts[char] > maxFrequency) {
			maxFrequencyChar = charCounts[char];
			mostFrequentChar = char;
		}
	}

	console.log(
		`Most frequent word: ${mostFrequentWord} (${maxFrequency} times)`
	);
	console.log(
		`Most frequent char: ${mostFrequentChar} (${maxFrequencyChar} times)`
	);
};
