# SurakshaSaathi

A platform to find rescue agencies near you and the support they can provide!

Working demo - 17.09.2023
https://github.com/MahendraDani/SurakshaSaathi-web/assets/116940083/000b0b16-98fb-4c51-b82f-64e6cecf3e56


# Getting Started

Are you stuck in the mess of so many files? Overwhelmed and confused? Don't worry we have got you covered! Follow the below steps to set up the project locally on your machine.

## Prerequisites

Before starting the development server, make sure that the following are installed in your machine.

1. Download and install [Git](https://git-scm.com/) on your machine for version control.
2. Download and install stable version of [Node](https://nodejs.org/en).
3. Install [Yarn](https://yarnpkg.com/) globally on your machine by running `npm install yarn -g` in the terminal.
4. Download and install [MongoDB Compass](https://www.mongodb.com/products/tools/compass) to query the database locally.

## Setting up the Project

The project has two major components

- Server
- Client

1. Fork the repository using the _Fork_ button.
2. Open the folder in which you want to save the project and then clone the project by running the following command in the terminal

```
git clone https://github.com/<your_github_username>/SurakshaSaathi-web.git
```

3. Run the command

```
cd SurakshaSaathi
```

4. Go into the server directory

```
cd server
```

5. Install dependencies using the following command

```
yarn
```

6. Create a .env file and initialize environment variables as given in .env.example file

7. Then start the server by running the following in two different terminals simultaneously.

```
yarn watch
```

and

```
yarn dev
```

Yay! The server is up and running at `http://localhost:3000`

9. Go to the client directory and install the dependencies

```
yarn
```

10. Run the development server for client using the following command

```
yarn dev
```

9. Go to `http://localhost:5173` and you will be able to see the frontend of the project.

Now you are good to go!
