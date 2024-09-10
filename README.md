# frankfurter.js
Web-API for [frankfurter.app](https://www.frankfurter.app/)  free and open-source exchange rates and conversion API for currency data published by the European Central Bank

## Example
```JavaScript
async function main() {
	const { FrankFurter } = require("./frankfurter.js");
	const frankFurter = new FrankFurter()
	const latestRates = await frankFurter.getLatestRates()
	console.log(latestRates)
}

main()
```
