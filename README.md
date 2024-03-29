<h1 align="center">
Planning Poker 🎲
</h1>

<p align="center">
  <strong>Plan your next Sprint by voting on tasks!</strong>
</p>

## Important

As Heroku announced to stop offering free plans (you can read more [here](https://blog.heroku.com/next-chapter)), the current deployment **DOES NOT WORK**. I will try to deploy it to somewhere else at my earliest convenience. Thank you for your patience.

> ***Disclaimer***: This project is a clone of [Planning Poker Online](https://planningpokeronline.com/) and is only built for learning purposes. It doesn't have any commercial use, and shouldn't be used for such purposes.

### What it looks like?

![Voting Session](https://user-images.githubusercontent.com/62121154/166455320-ff1159d0-7369-4c7b-9f06-0e6d8c557988.png)
![Cards Revealed](https://user-images.githubusercontent.com/62121154/166455328-ec64189f-641e-4be0-815c-e704ab1b753e.png)

### Structure

| Codebase         |                          Description                                       |
| :--------------- | :------------------------------------------------------------------------: |
| [api](api)       | API written with **Go**, uses **Redis** as in-memory database, and pub/sub |
| [webapp](webapp) |               **Nextjs** *Typescript* frontend                             |

### System Diagram

![diagram](https://user-images.githubusercontent.com/62121154/171638575-a2ffe342-b2be-4405-8dbd-33e1caea4271.png)

### Development

To run the API and Redis, we first have to build the necessary dependencies:

```sh
docker-compose build
```

Then, to run:

```sh
docker-compose up
```

To run the frontend, you need to install Node.js and then run the below commands in the `/webapp` directory:

```sh
# first install the libraries
npm install

# then run the webapp
npm run dev
```
