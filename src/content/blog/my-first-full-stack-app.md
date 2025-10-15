---
title: "Building a Full Stack App: Choices, Trade-offs, and Lessons Learned"
pubDate: "2025-09-09"
description: "A reflection on developing a small full stack app under time pressure using the MERN stack. I explain why I chose MongoDB, Express, React, and Vite, how I handled deployment with Render and Vercel, and what I’d improve next time in terms of API integration, component reuse, and UI design."
draft: false
---

![React](/blog-images/React.jpg)

I recently had the opportunity to build a small full stack app under a time crunch, and now that I've had the chance to make it and carefully review what I did, I'd like to go over it again carefully to both explain my reasoning and where I could've taken alternative decisions.


## Requirements

First off, the requirements:

* It had to have a backend, a database, an external API, a frontend, and a clear commit history.
* The backend should have a server, with two endpoints: a GET that returns all items stored in the database, and a POST that lets you add a new element.
* Database had to be a NoSQL one, and the backend had to connect to it and be able to read and write data.
* The database model had no requirements, other than that it should have at least 3 values.
* External API: The app should connect to an external API and data should be shown on the frontend.
* Frontend: Framework had to be React or equivalent, and should contain a list showing the database elements, and an input field to add new elements to the database. There should be a specific component showing the external API info.
* Design had to be simple, advanced styles weren't necessary.
* Version control: The entire project had to be done with git and on GitHub with clear progressive commits.


## Stack Choice

For this I used the MERN stack: MongoDB, Express, React and Node. I was familiar with the last three, but I had not had a chance yet to use MongoDB, or any other NoSQL database for that matter. I will explain later on why I chose MongoDB over Firebase Firestore.


## Backend

I started the server side of the app with Express and a simple healthcheck endpoint. Then I added a database connection to MongoDB using Atlas. I had never worked with a NoSQL Database before this project, just with SQL and Sequelize, but since the requirement asked for a NoSQL, I was between Google's Firestore and MongoDB. I read up on both and it seemed like Firestore has more limitations on validation and restrictions, which are more focused on access than data, so I opted for MongoDB. I was already inclined to try it out because it is part of the popular MERN stack, of which I already had handled Express, React and Node. Might as well go all in.

Being able to connect with a URI to an external database through Atlas was extremely helpful. The connection was managed with an .env. It made handling the database so much easier because I could offload it from the project itself. Mongoose was also incredibly useful, which is a library that seems to go hand in hand with MongoDB. It enabled me to handle all data validation in one single file instead of having to handle it endpoint by endpoint. Both Atlas and Mongoose were hugely helpful in speeding up the process of setting up the backend, and since there was a time constraint, this was hugely beneficial to the project.

Next up was setting up the two endpoints required by the assignment. Since data validation was already handled, setting these up was relatively simple. Ideally without a time constraint I would set up all CRUD endpoints just for demonstration purposes, but I thought it would be important to stick to the requirements.

Once the backend was set up and before starting with the frontend I found it a good enough checkpoint to start documenting the app. I laid out the structure of the server, explained how it connected to the database and how to get it to run in the README.md.


## Frontend

Next up was the frontend framework. Preliminary choices were Vue, Svelte and React, but since React or React-like frameworks were specifically mentioned, plus having experience already with React, just going with React seemed like the obvious choice. I built the frontend with Vite instead of plain CRA because of the plug-and-play nature of the React template, the benefits of HMR, and being able to pass a .env with the API key to the backend (more on this later on).

Once set up I commenced with the main section of App.jsx, where I used the hooks useState to keep the database values in memory and useEffect to refresh the component each time it was required. In `App.jsx` I used two hooks: `useState` to keep values in memory (the list of items, error messages, and a simple counter to trigger refreshes), and `useEffect` to fetch the list of items when the app starts or after creating a new one. This ensured the UI always matched the backend without needing to refresh manually.

I then followed up with `NewItemForm` component, a basic form to input new data into the database through the POST endpoint.


## External API

Then came the moment to incorporate the API requirement. I made a few mistakes here, mostly in a matter of time cost. I wanted the API to be business relevant, so I opted to paint an API where you could enter a location and look up the air quality sensors of that location. That turned out to be more complicated than expected, and required reading up on documentation to be able to implement it correctly, which I optimistically tried not to do, which ended up costing me a lot more time without getting the end result I wanted. Turns out the older API routes were deprecated. I ended up having to hardcode the coordinates of a specific air station without being able to show specific measures, just what sensors were available. I really wanted to show something better here, but since jokeAPI was an example in the requirements, it still met the conditions of success.

On the backend, I created an `airquality.js` route that proxies requests to the OpenAQ v3 API, and on the frontend I built an `AirQualityWidget` component that fetched data from my backend and displayed it. For the sake of time I hardcoded coordinates instead of implementing a full location search, but the structure is already in place to extend it.


## Deployment

Once all conditions were met it was time to showcase the project. On the one hand was documentation, showing clearly how the product worked, and on the other bringing it to production. One feature that would be valued was having an online URL to showcase it. I have this personal website on Vercel and have published small projects on it before so that was exactly my plan. I did not have to incorporate .env parameters in Vercel before but the platform makes it incredibly easy. For the backend I had to look up online for resources and found Render, Railway and Fly.io. Render's free tier was perfect for my needs, and Railway seemed more restrictive, while Fly.io seemed to require more setup. This turned out to be a great decision, because setting up Render was blazingly fast, much like Vercel. `.env` parameters were also very easy to include.

I did run into a small snag where the app would show locally but not on Vercel, but that turned out to be because of an enforced CORS permission. Locally everything worked, but when deploying to Vercel the frontend was blocked by CORS when calling the backend on Render. I solved this by configuring the backend to explicitly allow requests from both `localhost:5173` and my Vercel domain.


## Testing

Lastly, when everything was set up and running I incorporated a small test suite with Jest and Supertest. The tests verified the healthcheck, the GET `/api/items` endpoint, and the POST `/api/items` endpoint. It’s minimal but shows how to set up automated checks for backend routes.


## Conclusion

Stepping back, what I take from this project is less about the code itself and more about the process. I confirmed for myself that I can set up a full stack app end to end, connect all the moving parts, and get it online under pressure. That alone felt like a win. But I also saw where I can push further next time: slowing down enough to read API docs properly, thinking more about reusability in the frontend, and not leaving visuals as an afterthought. I also want to get into the habit of adding clearer loading and error states, since those make such a difference in how an app feels. In the end, the project did what it needed to do, and it gave me a clear map of where I can level up next.

[You can check out the app here.](https://github.com/avanoldenbarneveld/inbiot-fullstack-test)
