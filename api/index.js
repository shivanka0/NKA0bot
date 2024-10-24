const { twitterClient } = require("./twitterClient.js")
const CronJob = require("cron").CronJob;

const tweet = async (tweet) => {
	try {
		await twitterClient.v2.tweet(tweet);
	} catch (e) {
		console.log(e)
	}
}
tweet("hello")

// tweet();

// const cronTweet = new CronJob("30 * * * * *", async () => {
// 	tweet();
// });

// cronTweet.start();
