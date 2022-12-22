## Create A Simple CI/CD Pipeline For Nodejs Simple Hello World Application On Gitlab & Kubernetes Cluster

### Create CI/CD :

**Container Image:** [rizkypanz/hellonodejs:stable](https://hub.docker.com/r/rizkypanz/hellonodejs)

A pipeline contains three stages, and are executed in the following order:

- The build stage, with a task that aims to build the application into a Docker Image.
- Deploy stage, with the task that aims to deploy the Docker Image that has been made into the deployment on the Kubernetes cluster.
- Delete stage, with tasks aimed at deleting the Docker Image and deleting the deployment on the Kubernetes cluster.

