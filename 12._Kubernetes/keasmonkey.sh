#!/bin/bash
while true
do
    echo "Choosing a pod to kill..."

    PODS=$(kubectl get pods | grep -v NAME | awk '{print $1}')
    POD_COUNT=$(kubectl get pods | grep -v NAME | wc -l)

    if [ "$POD_COUNT" -eq 0 ]; then
        echo "No pods found. Exiting loop."
        break
    fi

    K=$(( (RANDOM % POD_COUNT) + 1))
    TARGET_POD=$(kubectl get pods | grep -v NAME | awk '{print $1}' | head -n ${K} | tail -n 1)

    echo "Killing pod $TARGET_POD"
    kubectl delete pod $TARGET_POD

    sleep 0.4
done