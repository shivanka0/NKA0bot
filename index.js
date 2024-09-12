require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const { twitterClient } = require("./twitterClient.js")
const CronJob = require("cron").CronJob;

const tweet = async () => {
	try {
		await twitterClient.v2.tweet("tweet this in 30 seconds, again shivanka0");
	} catch (e) {
		console.log(e)
	}
}

tweet();

const cronTweet = new CronJob("30 * * * * *", async () => {
	tweet();
});

cronTweet.start();
