# Deploy!

Time to deploy your application. 

**Type**: Group work

---

## Requirement

You must deploy your application to the cloud. Feel free to use any cloud provider you like.

You must deploy to a Virtual Machine or similar. Services like Web Apps etc. are great and easy to use, but it removes your chance to learn and reach the course goals.

Since the simulator will expect a fixed IP address, you should deploy with static IP.

---

## PR to `repositories.py`

Once you have deployed, create a PR to [repositories.py](/repositories.py). The relevant part to replace is:

```python
            "backend": "http(s)://<IP_DOMAIN>/<APIURL>",
            "frontend": "http(s)://<IP_DOMAIN>/<FrontEndURL>",
            "stack": ["Flask", "Svelte", "CouchDB", "Redis"],
```

Backend and frontend could be the same IP address. 

The `<APIURL>` and `<FrontEndURL>` parts are optional. For instance, if you prepend all your API with `v1`. The endpoints should be accessible given the values + the endpoints as defined in the OpenAPI specification.

Updating the stack is a great idea, since it allows you to connect with other groups using the same technology if you are stuck. You are encouraged to do so. 

Remember to make sure that your forked repository's state is up to date with the original repository before making your pull request.

Next week, we will do a trial run before starting the simulation for real. 
