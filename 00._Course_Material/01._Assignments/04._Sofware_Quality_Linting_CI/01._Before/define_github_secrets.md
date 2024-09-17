# [Optional] Define GitHub Secrets

Learn various ways to define GitHub secrets and how to invoke them in your workflow file.

**Type**: Individual

---

## Prerequisites

This assumes that you have gh installed and configured from the lecture. 

Installation from here: https://cli.github.com/

Log in with:

```bash
$ gh auth login
```

---

## Create a test repository

For convenience `gh` will be used to create and later on delete the repository. 

```bash
$ gh repo create
```

Go through the steps and choose what makes sense to you. 

---

## Define secrets in the GitHub UI


1. **🖥️ Go to Your Repository**: First, navigate to your GitHub repository where you want to add the secret.

2. **⚙️ Settings**: Look for the "Settings" tab at the top of your repository page and click on it.

3. **🔐 Secrets**: On the left-hand side menu, you'll see a list of options. Find and click on "Secrets".

4. **➕ New Secret**: You will see a button labeled "New repository secret". Click on it to add a new secret.

5. **🏷️ Name Your Secret**: In the "Name" field, type **`MY_NOT_SO_SECRET`**. This will be the reference name for your secret.

6. **🔑 Add Secret Value**: In the "Value" field, enter the secret content you want to store. Usually this would be things to keep private, like API keys, tokens, etc. For this exercise just write a short message that isn't secret. 

7. **💾 Save**: After you've entered the secret, click the "Add secret" button to save it.

8. **🎉 Done!**: Your secret is now saved and can be used in your GitHub Actions workflows.

---

## Using the secret in the workflow

In `github/workflows` create a new file called `echo_secret.yml` and add the following content:


```yaml
name: Echo Secret

on: [push]

jobs:
  echo_secret:
    runs-on: ubuntu-latest
    steps:
      - name: Echo Secret
        run: echo "Secret is ${{ secrets.MY_NOT_SO_SECRET }}"
        env:
          YOUR_SECRET: ${{ secrets.MY_NOT_SO_SECRET }}
```

This accesses the secret `MY_NOT_SO_SECRET` and echos it. By echoing it, you can see the secret in the logs.

Once you define a secret you can never read them in the UI. If you forget, you will have to rotate them. 

And you should never expose the secret like the example above. This is a toy example to show how it works. 

---

# Define secrets with `gh`

Running `gh` in the relevant repository, you can always do the following:

```bash
$ gh secret list
```

And you can set a new secret. 

```bash
$ gh secret set <MY_NOT_SO_SECRET>
```

For automation, you could consider doing the following:

```bash
$ gh secret set <MY_SECRET_NAME> < <path_to_secret_file>
```

---

## Clean up

To delete the repository, run:

```bash
$ gh repo delete
```

That's it. You have now learned how to define GitHub secrets and use them in your workflow.

