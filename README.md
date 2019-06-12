# Express Routes -- Birds

![birds](https://media3.giphy.com/media/3o7Zen0xHZFjAFiQ1O/giphy.gif)

## Instructions:

FORK AND CLONE THIS REPO!

1. Create an Express server in the `server.js` file
2. Create a route handler for `GET /birds.json` that responds with a JSON representation of all birds in our application. A few hints here:
   - The information about birds exists in the file `db/birds.js` which you can access within your `server.js` file with require
   - Use [`response.json()`](https://expressjs.com/en/4x/api.html#res.json) to send a JSON formatted response
3. Create a route handler for `GET /birds/:id.json`, where `:id` can be any number like `/birds/1.json`
   - Hint: [Express route parameters](https://expressjs.com/en/guide/routing.html#route-parameters)
   
## Bonus:
- Create a `GET /` route that responds with HTML listing out the name for each bird.
- Create a `GET /cities/:name.json` route that responds with the birds in that city, e.g. `/cities/NYC.json`
- Create and PSQL database and Sequlize Models and connect them to you express server

## Completion looks like:

- You have an express app in your `bird-app` directory
- Your express app includes a `server.js`, with accurate routes


- When you are finished, make a pull request on this repo.
