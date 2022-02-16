const { readFileSync, writeFileSync } = require('fs');

//read from a file
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second);

//write to a file
writeFileSync(
	'./content/result-sync.txt',
	`Here is the result: ${first}, ${second}`,
	{flag: 'a'}
	);