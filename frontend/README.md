# Working with frontend 
* ReactJS
* NGINX + reverse proxy
* [Docker multi-stages build](https://docs.docker.com/develop/develop-images/multistage-build/)

## Build image and run container
```
$docker image build -t frontend:1.0 .
$docker container run -d -p 80:80 frontend:1.0
```

Access to `http://localhost`