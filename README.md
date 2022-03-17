# Secfi
Secfi front-end assignment.

## Project description

This is an interactive web application that allows users to convert currency and display exchange rates over the last 30 days.

This project was bootstrapped with ([Create React App](https://create-react-app.dev/docs/getting-started/)).

### Technologies used

ReactJS, MUI component library, Recharts chart library

## How to install and run the project

From the root of the directory, run:

`npm install` – installs all the dependencies.

`npm start` – runs the app in development mode.

### Other available scripts

`npm run build` – builds the app for production to the build folder.

`npm test` – runs tests in watcher mode.

`npm run eject` – removes the single build dependency from your project.

## API Reference 

Alpha Vantage Stock API ([documentation](https://www.alphavantage.co/))

## Tests

By running `npm test` all components are being tested for correct rendering.

## Evaluations

1. How much time did you end up spending on it?

About 5 and a half hours.

2. What are some of the design decisions you made?

I decided to bootstrap my project with Create React App, as it quickly sets up the needed environment, optimizes the app for production and includes a testing library (among other things, of course). I'm using functional components and hooks, as they have better performance, are easy to debug and reuse. I decided not use a state management library, because it is a small simple project. API calls are made by the built-in Fetch API. To speed up the styling process, I installed the MUI component library, as their components already have UX best practices and accessibility baked in. For the exchange rates I decided to use the Recharts chart library, because it is lightweight and fast to set up.

3. What do you like about your implementation?

- main functionality is implemented
- interface is simple and easy to understand
- app is mobile-first and responsive
- code is readable and easy to understand as well

4. What would you improve next time?

- use a state management library like Redux to avoid props drilling and have a global state (my app turned out to have quite a few props in the end)
- remove 1 API call on initial render to show a chart for the default currencies (e.g. hide the chart div at first and show/slide it after "Convert" click to minimize API calls; I just didn't want the space to be empty and didn't want to spend too much time on the interface)
- cache daily time series for a day (would also help minimizing API calls)
- add better API error handling and research API better (some pairs of currencies throw an error)
- write better unit tests (the ones I have are quite simple)
- improve interface and experience (add icons to currencies to find them faster, make dropdown list not as long as it is now etc.)


