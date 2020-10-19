# Github Followers

<p align="center">
   <img src="https://user-images.githubusercontent.com/16763395/96498641-b2a0c200-1222-11eb-8a94-e05b23564971.png" width="500" />
</p>

This is an app to see who don't follow back, who you don't follow back and who you follow back on your [GitHub](https:/github.com) account.

See live *beta* version on [Github Followers site](https://github-followers-nkg3n2f7ka-ue.a.run.app/).

## Get started

- To run this application on development mode you need to have installed the [Docker](https://www.docker.com/get-started) end the [Docker Compose](https://docs.docker.com/compose/install/).

**Copy** the *.env.example* file model to another file *.env*, then set the env variables in this file.

In the root folder of this project with the docker-compose installed, run:

``` sh
$ docker-compose up
```

The React App and API server will be working with hot reload on development mode on ports set on *.env* file.

## Production mode

- To run this application on production mode you need to have installed the [Docker](https://www.docker.com/get-started) to run end build the Docker image. Install [Docker Compose](https://docs.docker.com/compose/install/) if you want to run with Docker Compose.

In production mode, the React app will be build with static files and the Express will provide it on default route.

### Width Docker Compose

Rename the *.env.example* to *.env* file and set the env variables.

Then, run docker-compose using the *docker-compose.prod.yml* file.

``` sh
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```

### Width Dockerfile

To build a Docker Image of this software, with the Docker installed, run:

``` sh
$ docker build -t github-following:latest .
```

Then run the generated image, passing the port that the application will use, and expose the port of the container:

``` sh
$ docker run --env PORT=8080 -p 8080:8080 github-following
```