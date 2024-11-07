# Try ELK logging

Try out logging with the ELK stack.

**Type**: Individual

---

## Course requirement

To lighten the course load logging is **NOT** a requirement for this course. 

If your group implements logging, it will be seen as a bonus but you will not be punished for not implementing it.

Instead, try it out individually to get an idea. 

---

## Awesome Compose sample

Awesome compose has a sample for the ELK stack.

https://github.com/docker/awesome-compose/tree/master/elasticsearch-logstash-kibana


---

## Change ports if you are on a Mac

If you are on a Mac then port `5000` is in use by AirPlay.

You can change the exposed port to a different port. Change this part of the `docker-compose.yml` file:

```yaml
    ports:
      - "5000:5000/tcp"
      - "5000:5000/udp"
```

To port `6000` for instance:

```yaml
    ports:
      - "6000:5000/tcp"
      - "6000:5000/udp"
```

---

# Running it

Run it with:

```bash
$ docker compose up -d
```

And you can access and verify the status of each service in your browser with (as mentioned in the `README.md` file):

* Elasticsearch: [`http://localhost:9200`](http://localhost:9200)
* Logstash: [`http://localhost:9600`](http://localhost:9600)
* Kibana: [`http://localhost:5601/api/status`](http://localhost:5601/api/status)

Additionally, you can access Kibana in your browser with:

* Kibana: [`http://localhost:5601`](http://localhost:5601)
