# Run hadolint locally and setup in CI pipeline

Lint your Dockerfile using `hadolint`.

**Type**: Group work

---

## Running it locally

All group members should try running `hadolint` locally.

Install hadolint with `brew`, `choco` or similiar. 

Then run the following:

```bash
$ hadolint Dockerfile
```

---

## Setup in CI pipeline

Hadolint comes with Super Linter if you have already set it up.

You can also get it seperately with the following action:

https://github.com/hadolint/hadolint-action
