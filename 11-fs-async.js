const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, res)=>{
	if(err){
		console.log(err)
		return;
	}
	const first = res;

	readFile('./content/second.txt', 'utf-8', (err, res)=>{
		if(err){
			console.log(err)
			return;
		}
		const second = res;

		writeFile(
			'./content/result-async.txt',
			`The result is : ${first}, ${second}`,
			{flag:'a'},
			(err, res)=>{
				if(err){
					console.log(err);
					return;
				}
				console.log(res);
			}
			)
	})
});