class FrankFurter {
	constructor() {
		this.api = "https://api.frankfurter.app"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getLatestRates() {
		const response = await fetch(
			`${this.api}/latest`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getHistoricalRates(date = "1999-01-04") {
		const response = await fetch(
			`${this.api}/${date}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCurrencies() {
		const response = await fetch(
			`${this.api}/currencies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {FrankFurter}
