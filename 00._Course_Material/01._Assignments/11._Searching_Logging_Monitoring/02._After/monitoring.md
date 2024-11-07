# Monitoring

**Type**: Group work

**Motivation**: Understand your system better in order to identify the pain points and improve it.

---

## Requirements

You must:

1. monitor the health of the system. 

2. gather telemetry.

With telemetry you must try to gain insight into your system. It's an impressive sign if it makes you realize something that helps you improve your system. Feel free to bring it up in the final presentation.

---

## Prometheus Client Libraries

Just like with everything else, the only requirement is that you must have monitoring. Not to do it specifically with Prometheus. But Prometheus is a good choice. It offers official client libraries for many languages: 

  * Go
  * Java or Scala
  * Python
  * Ruby
  * Rust

Unofficial third-party client libraries:

  * Bash
  * C and C++
  * Common Lisp
  * Dart
  * Elixir and Erlang
  * Haskell
  * Lua for Nginx and Tarantool
  * .NET / C#
  * Node.js
  * OCaml
  * Perl
  * PHP
  * R

For more information see: https://prometheus.io/docs/instrumenting/clientlibs/

Once Prometheus can extract metrics, Grafana or similar can use Prometheus as a data source and is agnostic to the programming language. 

---

# Docker Example + PR request

In the [Docker Docs](https://docs.docker.com/samples/prometheus/) own example, they have defined configuration in `datasource.yml` for Grafana and a `prometheus.yml` for Prometheus. It can be found [here](https://github.com/docker/awesome-compose/tree/master/prometheus-grafana)

If you have a breakthrough in your monitoring setup that you are proud of you can either:

1. Expand the `whoknows_variations` tutorial with a new section and make a PR.

2. Reach out to me and I will consider adding it to the tutorial.

---

## After thought

It is sufficient to setup only one dashboard for the course but beware that in companies the better practice is to create a dashboard per service.
