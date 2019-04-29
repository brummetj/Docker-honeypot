# K8 Infrastructure

Developed and maintained by Joshua Brummet & Jordan Vaughn

### How to set up and run a local Kubernetes cluster

The installation process for a Kubernetes cluster can be different depending on the OS system. I will provide with steps to create your own local cluster, and link the official Kubernetes documentation for any guidance further.

To run and see the Infrastructure you will need to install the following dependencies.

* Helm
* Kubectl
* Minikube
* VM driver
* Docker

## Helm

Helm is a nice package manager tool that allows you to easily deploy Kubernetes pods into the cluster. There are so many details that we can go into with helm be for the importance of the project its easiest to just install it and use Helm to deploy the charts into the minikube cluster.

## Kubernetes

It would be easiest to follow the guide here to install Minikube & kubectl onto your specific device. `https://kubernetes.io/docs/tasks/tools/install-minikube/`

The link will provide installation methods for each specific OS.

## VM Driver

For MacOS I prefer to use the `hyperkit` VM for its extra lightweight capabilities

Linux you can easily run Minikube as long as you have Docker installed. Which is a must if you want to be able to deploy the monitoring containers into the mini cluster.

Windows... I'm sorry.. Wish I could help!

### Setting up the cluster

Please follow the following steps... Make sure that you have the latest versions for each of the dependencies!

1. > kubectl config current-context
2. > kubectl create -f namespace-honeypot.yml
3. > kubectl config set-context $(kubectl config current-context) --cluster=minikube --namespace=honeypot
4. > kubectl config view

You should now see the namespace honeypot inside the minikube cluster. This
is where our Infrastructure for the honeypot will live. You should also be able to run the next steps to deploy the helm charts into the your local kubernetes cluster.

#### Deploying Helm Tiller pod.

1. helm init --tiller-namespace=honeypot

Verify that the tiller pod is in the namespace by `kubectl get pods`

#### Deploying blackbox exporter

1. > cd root/helm-charts/blackbox
2. > kubectl create -f blackbox-config.yml
3. > kubectl create -f blackbox-deployment.yml
4. > kubectl create -f blackbox-service.yml

Verify that the pod, service, and config was created.

```
> kubectl get pods
> kubectl get services
> kubectl get configmap
