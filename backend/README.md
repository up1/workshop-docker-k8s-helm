# Workshop :: Backend with NodeJS
* Express


## Build Docker Image => [Node](https://hub.docker.com/_/node/)
```
$cd backend
$docker image build -t backend:0.1 .
```

## Create and run the container
```
$docker container run -d -p 3000:3000 backend:0.1
```
Access to `http://localhost:3000/api/users`

## Upload the image to Docker registry (Docker Hub)
```
$docker login
$docker image tag backend:0.1 <username>/backend:0.1
$docker image push <username>/backend:0.1
```