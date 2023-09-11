const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Get query parameters from the request
  const slackName = req.query.slack_name || 'example_name';
  const track = req.query.track || 'backend';

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Get the current UTC time with validation of +/-2 minutes
  const utcTime = new Date();
  utcTime.setMinutes(utcTime.getMinutes() - 2);
  const utcTimeString = utcTime.toISOString();

  // Construct GitHub URLs based on your repository and file names
  const githubRepoURL = 'https://github.com/OhiareYazid/MonsurahProject2';
  const githubFileName = 'https://github.com/OhiareYazid/MonsurahProject2/index.js';
  const githubFileURL = `${githubRepoURL}/blob/master/${githubFileName}`;

  // Response JSON object
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTimeString,
    track: track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});