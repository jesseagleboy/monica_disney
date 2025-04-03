// Description: This file contains the code to index the website using the IndexNow API.

const searchEngine = "api.indexnow.org";
const key = process.env.INDEX_NOW_KEY;

const res = await fetch('https://api.indexnow.org/indexnow', {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		host: "www.magicaladventuresbymonica.com",
		key: key,
		keyLocation:`https://magicaladventuresbymonica.com/${key}.txt`,
		urlList: [
			"https://www.magicaladventuresbymonica.com/",
			"https://www.magicaladventuresbymonica.com/about-me/",
			"https://www.magicaladventuresbymonica.com/contact/",
		],
	}),
})
	.then((res) => res.json())
	.catch((err) => err);
console.log(res);
