# 3 - DB

Now we will put the real juice inside the APIs, by connecting them to the Database.

## Installing Dependencies

We will use npm to install packages.

```
npm install mysql2
npm install dotenv
```

## Creating database config

First we create our database, either locally or cloud, we must have the config info liek DB hostname, username, password, etc. We store these sensitive info in `.env` file which allows us to store these in the environment. Create a `config.js` file inside utils that uses these ENV variables.

## Variables inside .env

Your .env file must look something like this

```
DB_HOST=XXXX
DB_USER=XXXXX
DB_PASS=XXXXXXXXX
```

## Creating DB connection and querying

`posts.js` file shows how we use `config.js` to establish a DB connection and query the data.

## Understanding the Project Structure

- `routes` directory, contains all the routes
- `routes/home.js` handles the home page
- `routes/api` handles all the apis, for now we only have `/api/posts`, as apis increases files increase in this directory.
- `utils` directory will store all the utility code. Currently it stores the configuration file required for the database.
