const express = require("express");
require('dotenv').config();
const app = express();
const path = require("path")
const router = require('express').Router();
const PORT = process.env.PORT || 8080;
const axios = require('axios');
const SpotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    redirectUri: 'http://localhost:8080'
});

app.get('/api/token', async function(req, res) {
    const token = getCredentials();
    res.send(await token);
});

function getCredentials() {
    spotifyApi.clientCredentialsGrant().then(
        function(data) {
          console.log('The access token expires in ' + data.body['expires_in']);
          console.log('The access token is ' + data.body['access_token']);
          return data.body['access_token'];
          // Save the access token so that it's used in future calls
          spotifyApi.setAccessToken(data.body['access_token']);
        },
        function(err) {
          console.log('Something went wrong when retrieving an access token', err);
        }
    );
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));