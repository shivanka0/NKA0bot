require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const { twitterClient } = require("./twitterClient.js")
const CronJob = require("cron").CronJob;

const tweet = async (tweet) => {
	try {
		await twitterClient.v2.tweet(tweet);
	} catch (e) {
		console.log(e)
	}
}
export default async function handler(req, res) {
	if (req.method === 'POST') {
	  const { tweetText } = req.body;
	  
	  try {
		// Post the tweet
		await twitterClient.v2.tweet(tweetText);
		res.status(200).json({ success: true, message: 'Tweet posted!' });
	  } catch (error) {
		console.error('Error posting tweet:', error);
		res.status(500).json({ success: false, error: error.message });
	  }
	} else {
	  res.status(405).json({ message: 'Only POST requests allowed' });
	}
  }
tweet("tweet this in 30 seconds, again shivanka0");

// tweet();

// const cronTweet = new CronJob("30 * * * * *", async () => {
// 	tweet();
// });

// cronTweet.start();
