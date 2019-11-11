# Squirrel Whisperers
- - -
## About This Application
This application is the website for a fictitious bluegrass band called Squirrel Whisperers. Users can connect to the Spotify API. Since Squirrel Whisperers is not real, there is not any music on Spotify pertaining to them. Instead, another bluegrass band is recommended. The user can see these song recommendation and click on them to preview.
The website has the front-end for a store. Users can view merchandise and add them to a cart. There is an opportunity for API requests, end points, a database, and a payment portal to be added to make this a complete full-stack application.

### Users can find the deployed application [here](https://pure-brook-92293.herokuapp.com/).
#### PLEASE NOTE THAT THE SPOTIFY FUNCTIONALITY IS NOT SETUP ON THE DEPLOYED APP.
- - -
## Technologies used
* React.js - JavaScript library and web framework
* Node.js and Express.js - JavaScript runtime environment and web application framework respectively
* spotify-web-api-node - Wrapper/client for Spotify Web API that runs on Node.js
* spotify-web-api-js - Wrapper that includes functions for Spotify's endpoints
* GIMP - graphics editor
* Canva - graphic design software

Please see either of the package.jsons to see a detailed list of dependencies:
* [package.json for express](/package.json)
* [package.json for React](/client/package.json)
- - -
## Screenshots of the application
### Pages on large screen
![Landing Page Desktop View](/screenshots/finalLanding.png)
![Discography Page Desktop View](/screenshots/finalLanding.png)
![Tour Page Desktop View](/screenshots/finalLanding.png)
![Merchandise Page Desktop View](/screenshots/finalLanding.png)
![Cart Page Desktop View](/screenshots/finalLanding.png)
![Discography Page Mobile View](/screenshots/finalLanding.png)
![Cart Page Mobile View](/screenshots/finalLanding.png)

- - -
## How to set up the application on your machine
1. Clone the repository to your machine.
`git clone https://github.com/wesleyberry/hid-exercise.git`
2. Navigate into the root directory
`cd hid-exercise`
3. Install dependencies
`npm install`
4. Create .env file
`touch .env`
5. Retrieve a client id and secret for Spotify. Find out how to do so [here](https://developer.spotify.com/documentation/web-api/quick-start/).
6. Add these credentials to your .env like such:

`CLIENTID=YOUR_CLIENT_ID

CLIENTSECRET=YOUR_CLIENT_SECRET

NODE_ENV=development`

7. Start the app, and it will open on localhost:3000 and localhost:8080
`npm run dev`

- - -
## Where Users can get help with this application
* Wesley Berry: wesleyberry52@gmail.com

