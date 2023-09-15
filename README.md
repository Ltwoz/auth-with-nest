# NestJS Authentication API

This is an example of a basic authentication with `NestJS` providing a REST
API to a `signup/signin`

## Clone this repository

    git clone https://github.com/Ltwoz/auth-with-nest.git

## Install packages

    npm install

## Run the app

    npm run start

# REST API

The REST API is described below.

## Sign Up

### `POST /api/user/signup`

### Request

    username: string
    password: string

###

    curl -i -H 'Accept: application/json' -d 'username=Ltwoz&password=pa$$word99' http://localhost:3000/api/user/signup

### Response

    username: Ltwoz
    password: $2y$10$7W51b35wynJ7IS4yduzAneNcvC/09w2cPn6ODV4OCCgPSK

## Sign In

### `POST /api/auth/signin`

### Request

    username: string
    password: string

###

    curl -i -H 'Accept: application/json' -d 'username=Ltwoz&password=pa$$word99' http://localhost:3000/api/auth/signin

### Response

    accessToken: eyJhbGciOiJIUzIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTQ3MTMsImV4cCI6MTY5NTM5NjQxM30.AlxsHcFrGIY0CTnQfXtGkfvVd8mCEpVj0bb-4dQ
