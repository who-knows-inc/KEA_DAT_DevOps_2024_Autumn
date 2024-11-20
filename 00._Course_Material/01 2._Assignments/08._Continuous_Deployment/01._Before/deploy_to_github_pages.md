# [Optional] Deploy to GitHub Pages

Github Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub. It's only for static content. You cannot run servers with Github Pages. 

**Type**: Individual

**Motivation**: This is a free way to host static content that is easily integrated with your workflows. 

---

## Prerequisites

Create a new repository.

```bash
$ gh repo create
```

---

## Prepare the page

In this assignment you will create an HTML file and it will be deployed via Github Pages. If you push a change to the HTML file the Github Page will eventually reflect that change. Do note that sometimes it can take a few minutes for a change to take place. 

Another method will be shown later on in [whoknows_variations](https://github.com/who-knows-inc/whoknows_variations/tree/end-to-end_testing) where an HTML file is generated in a workflow and then deployed. The HTML file is never checked into version control. In the later case, we deploy to a `gh-pages` branch which is a reserved name for Github Pages. Here we deploy directly from the `main` branch.


1. 📂 Create an `index.html` file in the root of your repository. You can put anything into it that you wish to display on the page. 

---

## Enable GitHub Pages

  - Go to your repository on GitHub.
  - Click on the "**Settings**" tab (⚙️) on the top right.
  - Scroll down to the "**Pages**" section.
  - In the "**Source**" dropdown, select the `main` branch.
  - Set the directory to `/root` in our case. Creating a `/docs` folder is also common.
  - Click "Save".

---

## Create a workflow

Create a file called `deploy_to_github_pages.yml` in `.github/workflows` and add the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Set this to your default branch

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          branch: gh-pages  # The branch the action should deploy to.
          folder: .         # The folder the action should deploy.
```

---

## Access the page

After the workflow has run successfully, you can access your page at `https://<username_or_organisation_name>.github.io/<repository_name>`.

---

## Adding images to the page

Images should be in a folder called /images in root for Github Pages to be able to serve them. Link to the image(s) in your HTML with `src="./images/your_image.png"`.

---

## 🧹 Clean up

Delete the repository with:

```bash
$ gh repo delete
```

