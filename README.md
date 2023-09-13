# 1 - Getting Started

## Setting up Node Project

1. Create a directory for your project.
2. Open Command Prompt inside the directory, and run `npm init -y`. This creates a package.json file.
3. Add `"start": "node app.js"` to `scripts`, this helps to easily deploy your server.

## Installing Dependencies

We will use npm to install packages.

```
npm install express
npm install cors
```

## Creating a simple REST API server

1. Create a file named `app.js`. It should contain the code as in the file in this repository.
2. Whenever ready, run the following command in the terminal: `npm start`.
3. Your server is now deployed on https://localhost:3000, or depending on where you are deploying the server, host and port would change.
