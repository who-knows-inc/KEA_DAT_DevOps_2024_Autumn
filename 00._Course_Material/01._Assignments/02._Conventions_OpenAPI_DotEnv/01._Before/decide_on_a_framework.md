# Decide on a framework

**Type**: Group work

**Deadline**: Immediately after the lecture on week 2 so that you can coordinate and create a battle plan with your group. 


**Motivation**: Be quick in making a choice. If you postpone the decision making you will reduce your available developer time and the simulation is bound to start soon. (Your group needs users and start making money to stay afloat.)

---

## Excluded choices

You are not allowed to use `Flask`, `Express` or `Spring Boot`.


## Choose a micro-web-framework

Advice: Do not choose full-webframeworks like Django, Blazor, Spring MVC, Ruby on Rails. 

If I were in your position, I would consider one of the following:

| Language                                     | Framework                                             |
|----------------------------------------------|-------------------------------------------------------|
| [Crystal](https://crystal-lang.org)          | [Kemal](https://kemalcr.com)                          |
| [Elixir](https://elixir-lang.org)            | [Phoenix](https://www.phoenixframework.org)           |
| [Go](http://golang.org/)                     | Standard Library or [Gorilla](http://www.gorillatoolkit.org/) |
| [Nim](https://nim-lang.org)                  | [Jester](https://github.com/dom96/jester)             |
| [Ruby](https://www.ruby-lang.org)            | [Sinatra](http://sinatrarb.com/)                      |
| [Rust](https://www.rust-lang.org/)           | [Rocket](https://rocket.rs/)                          |

Choose a language and framework that you want to practice or one that you always wanted to learn but never had the time to do.

You have seen the Flask server which has a relatively small size and complexity. Choosing something wildly unfamiliar should not be daunting considering the size of the server.

---

## Client-side rendering vs. server-side rendering

There are two ways to render your frontend. 

### Server-side rendering: The client serves the frontend. Probably through a templating engine. 

Here are just some different pairings of templating engines:

| Language       | Framework               | Library                                         |
|----------------|---------------------------------------------------------------|--------------------------------------------------------------|
| C♯             | [ASP.Net minimal web application](https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api?view=aspnetcore-8.0)                               | [Razor Pages](https://learn.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-8.0&tabs=visual-studio) |
| C♯             | [ASP.Net minimal web application](https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api?view=aspnetcore-8.0)                               | [Scriban](https://www.nuget.org/packages/Scriban)            |
| Crystal        | [Kemal](https://kemalcr.com)                                  |                                                              |
| Elixir         | [Phoenix](https://www.phoenixframework.org)                   |                                                              |
| Go             | Standard Library                                              | [Gorilla](http://www.gorillatoolkit.org/)                    |
| Java           | [Spark](https://sparkjava.com/)                               | [jinjava](https://github.com/HubSpot/jinjava)                |
| Nim            | [Jester](https://github.com/dom96/jester)                     |                                                              |
| Python         | [Pyramid](https://trypyramid.com/)                           or  [Bottle](https://bottlepy.org/docs/dev/) | [Jinja2](https://jinja.palletsprojects.com/en) |
| Ruby           | [Sinatra](http://sinatrarb.com/)                              |                                                              |
| Rust           | [Rocket](https://rocket.rs/)                                  |                                                              |   


### Client-side rendering: The client is stand-alone and fetches data from the server. The server only sends data. 

Examples include: HTML, React, Svelte, Vue, Angular

My recommendation here is to not use this course to learn a heavy web framework. There are a lot of tasks to complete in this course already. And using a complicated web framework does not score extra points since it does not relate to DevOps. 

---

## Additional comments

If your group i still undecided then you should at least have picked a handful of possible frameworks and a method for your group to agree on one.

You don't have to decide on a database yet. Keep using the SQLite database for a couple of weeks until we cover the topic of databases.  

---

## Reminder: Part of Mandatory II

For your entire stack, make sure that you write down how you made choices and relevant considerations your group had. 

You should revise the document later on by reflecting on the pros and cons of your choice. 

---

## Resources to help sway your decision

It's always good to make a data-driven decision. Besides the obvious biases, beware that these sources paint a picture that sometimes differs from the reality in Denmark. 

https://survey.stackoverflow.co/2023/

https://github.blog/2023-11-08-the-state-of-open-source-and-ai/#the-most-popular-programming-languages


https://www.thoughtworks.com/radar














