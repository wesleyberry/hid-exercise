# Squirrel Whisperers
- - -
## About This Application
This application is the website for a fictitious bluegrass band called Squirrel Whisperers. Users can connect to the Spotify API. Since Squirrel Whisperers is not real, there is not any music on Spotify pertaining to them. Instead, another bluegrass band is recommended. The user can see these song recommendation and click on them to preview.
The website has the front-end for a store. Users can view merchandise and add them to a cart. There is an opportunity for API requests, end points, a database, and a payment portal to be added to make this a complete full-stack application.

### Users can find the deployed application [here](https://pure-brook-92293.herokuapp.com/).
#### PLEASE NOTE THAT THE SPOTIFY FUNCTIONALITY IS NOT SETUP ON THE DEPLOYED APP.
- - -
## Technologies used:
* React.js
* Node.js and Express.js
* spotify-web-api-node
* spotify-web-api-js

Please see either of the package.jsons to see a detailed list of dependencies:
* [package.json for express](/package.json)
* [package.json for React](/client/package.json)

- - -
## How to set up the application on your machine
1. Clone the repository to your machine.
`git clone https://github.com/wesleyberry/hid-exercise.git`
2. Navigate into the root directory
`cd hid-exercise`
3. Install dependencies for Express server
`npm install`
4. Create .env file
`touch .env`
5. Retrieve a client id and secret for Spotify. Find out how to do this [here](https://developer.spotify.com/documentation/web-api/quick-start/).
6. Add these credentials to your .env like such:

`CLIENTID=YOUR_CLIENT_ID

CLIENTSECRET=YOUR_CLIENT_SECRET

NODE_ENV=development`

7. Navigate into the client directory 
`cd client`
8. Install dependencies for React server
`npm install`
9. Navigate to root directory
`cd ..`
10. Start the app, and it will open on localhost:3000
`npm run dev`

- - -
## Where Users can get help with this application:
* Wesley Berry: wesleyberry52@gmail.com

