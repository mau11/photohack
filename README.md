# Image Finder

> A royalty free image search app using Pixabay's API.

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Pixabay API](#pixabay-api)
    1. [Build and Serve App](#build-and-serve-app)
1. [View Application](#run-application)

## Requirements

- Node 11.12.0^
- NPM 6.7.0^

## Development

#### Installing Dependencies

From within the root directory:

```sh
$ npm install
```

#### Pixabay API
For development, you will need to save your Pixabay API key to the environment variable: `PIXABAY_API_KEY`.

For deployment, be sure to add the `PIXABAY_API_KEY` to your hosting platform's environment variables.

Check out the [Pixabay API docs](https://pixabay.com/api/docs/) for more information.

#### Build and Serve App

From root directory
```
$ npm run-script dev
```

## View Application
For development, in your browser, navigate to
```sh
http://localhost:8080
```

View the latest deploy at: https://the-image-finder.herokuapp.com/
