const { readFile, writeFile } = require("fs");

// FOR ASYNC WE NEED TO PRIDE A CALLBACK
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
	if (err) {
		console.log(err);
		return null;
	}

	const first = result;

	readFile("./content/second.txt", "utf-8", (err, result) => {
		if (err) {
			console.log(err);
			return null;
		}
		const second = result;
		// console.log("second", second);
		writeFile(
			"./content/result-async.txt",
			`Here are the results:  ${first}, ${second}`,

			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				// console.log("from somehere", result);
				console.log("Done with this task");
			}
		);
	});
	// console.log("result 1st", result);
});

console.log("Done next task");
