# [Optional] Create a GitHub Badge for your GitHub Actions

*DevOps principle: Show your work!*

**Type**: Group work

---

## What are badges?

Badges can be added to the repository's README to visualize various things.

In this assignment, you will create a shield for a workflow so that you can see the status of it when looking at the frontpage of your repository. This makes sense for the CI task of this week. 

---

## Get started

To help you get started, place this template in your `README.md` file to show the status of a GitHub Action:

```markdown
![<TEXT ON SHIELD>](https://github.com/<ORGANIZATION>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILENAME.yml>/badge.svg?branch=main)
```

Replace:

- `<TEXT ON SHIELD>` with the text you want to display on the shield (A good name would be the name of the workflow)
- `<ORGANIZATION>` with your organization's name
- `<REPOSITORY>` with the name of the repository that the GitHub Action is defined on
- `<WORKFLOW_FILENAME.yml>` with the **exact** name of the workflow file as it appears in the `.github/workflows` directory. 
- `?branch=main` is optional and can be removed to show the status across all branches. In this example only the status of the main branch will be shown. 

---

# Generate a workflow status badge through the Github UI

You can also select a specific workflow execution in the actions tab and click on the three dots and `Create status badge` to generate a badge.

<img src="./assets_readme_badges/generate_workflow_status_badge.png" alt="github actions workflow status badge">

---

# [Optional] SuperLinter badge

Here is how you can create a Superlinter badge for your repository.

https://github.com/marketplace/actions/super-linter#add-super-linter-badge-in-your-repository-readme

---

# [Optional] Shields.io for more badges

Shields.io is a service that lets you create advanced custom badges:

https://shields.io/

For instance, you could use it to showcase the stack you are using. Check out the repository if you are interested:

https://github.com/badges/shields
