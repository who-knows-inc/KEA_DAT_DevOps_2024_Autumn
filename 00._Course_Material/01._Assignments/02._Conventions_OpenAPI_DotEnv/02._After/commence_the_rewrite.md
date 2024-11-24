# Commence the rewrite

Start converting the legacy code to your own stack. 

**Type**: Group

**Motivation**: [This is how dandy you will look if you do it with a structured way](https://www.oreilly.com/library/view/re-engineering-legacy-software/9781617292507/)

---

## How to get started

You should have agreed on a programming language and server framework by now. 

Agree with your group how to organize the code in folders and the overall structure of the new project. 

Consider if you want to have a monorepo or a multi-repo setup.

---

## Gradual rewrite

Keep the legacy code in your repository and slowly build up a new code base alongside with it. Consider, if this was a much larger project, how you would dismantle the legacy project and phase in the new.

The goal is not to have a ground up working version for the application. It’s to realize that a rewrite requires a different approach than when you build projects up from scratch in other courses. Solving this task linearly from top of the app.py file to the bottom is not a good approach. Instead, flesh out the server (in your language of choice) in stages. Deligate the tasks so that everyone can work on their own part independently. You are not definitely not expected to have all features by next week. Next week we will look into deployment and you should have something in a language that can be deployed.

---

### Gall's Law

Do not do the big rewrite! In real-world software development, follow Gall's Law. Here is an abridged version:

> "*if you want a complex system to work, build a simpler system first, then improve over time.*"

[Full version](http://principles-wiki.net/principles:gall_s_law)

I suggest that you keep the legacy code alongside with the new codebase as you slowly phase it out. 

---

## The OpenAPI specification

You must adhere to the provided [OpenAPI specification](./openapi.json) exactly.

As you can see the `/about` page is optional. 







