const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const moment = require('moment'); 

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  // Get query parameters from the request
  const slackName = req.query.slack_name || 'example_name';
  const track = req.query.track || 'backend';

  
  let current_day = moment().day();
   const weekDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
   current_day = weekDays[current_day] ;
  
   const utc_time = moment.utc().format() ; 

  // Construct GitHub URLs based on your repository and file names
  const githubRepoURL = 'https://github.com/OhiareYazid/MonsurahProject';
  const githubFileName = 'server.js';
  const githubFileURL = `${githubRepoURL}/blob/master/${githubFileName}`;

  // Response JSON object
  const response = {
    slack_name: slackName,
    current_day: current_day,
    utc_time: utc_time,
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