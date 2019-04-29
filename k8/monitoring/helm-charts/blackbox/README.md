## Blackbox Exporter

This is a golang library written for prometheus to monitor network usage and verification for endpoints with http/tcp requests.


*Note*: This is not a helm chart.


To deploy blackbox please run the following commands, make sure that youre in the right namespace.


If you don't know what namespace you are in run `kubectl config current-context`


If you are going to deploy these files to a new namespace you will need to edit the yamls to point to the corrent namespace.


```
> kubectl create -f blackbox-config.yaml
> kubectl create -f blackbox-deployment.yaml
> kubectl create -f blackbox-service.yaml
```

To delete blackbox run the following commands.


```
> kubectl delete -f blackbox-config.yaml
> kubectl delete -f blackbox-deployment.yaml
> kubectl delete -f blackbox-service.yaml
```


TODO: Make these blackbox files into a helm chart to increase dynamicity.


