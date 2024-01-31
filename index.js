require('dotenv').config()

const express = require("express");
// import { Express } from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>twitter</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>login ho gaya h</h1>");
});

app.get("/youtube", (req, res) => {
  res.send('<h2>on your YouTube</h2>');
})

const githubDB = {
  "login": "sujal12344",
  "id": 111276041,
  "node_id": "U_kgDOBqHwCQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/111276041?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sujal12344",
  "html_url": "https://github.com/sujal12344",
  "followers_url": "https://api.github.com/users/sujal12344/followers",
  "following_url": "https://api.github.com/users/sujal12344/following{/other_user}",
  "gists_url": "https://api.github.com/users/sujal12344/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sujal12344/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sujal12344/subscriptions",
  "organizations_url": "https://api.github.com/users/sujal12344/orgs",
  "repos_url": "https://api.github.com/users/sujal12344/repos",
  "events_url": "https://api.github.com/users/sujal12344/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sujal12344/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sujal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 6,
  "created_at": "2022-08-15T09:01:26Z",
  "updated_at": "2024-01-26T19:05:12Z"
}

app.get('/github', (req, res) => {
  res.json(githubDB);
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
