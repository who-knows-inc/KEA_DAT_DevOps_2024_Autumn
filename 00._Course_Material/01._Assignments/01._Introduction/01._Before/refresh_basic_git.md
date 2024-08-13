# [Optional] Refresh basic git

**Type**: Individual


## Learn how to push and pull code from a remote repository

### Create a repository

You can use the GitHub interface. Copy the URL and in your terminal:

```bash
$ git clone <url>
```

The rest assumes that you have `cd`'d into the repository. 


### Pushing, Step 1: Adding Files

Create some files to add. 

Add all files:

```bash
$ git add -A
```
Add everything here and nested foloders:

```bash
$ git add . 
```

```bash
$ git add <filename\folder>
```

---

### Pushing, Step 2: Commiting Files

Commit with a message:

```bash
$ git commit -m "<message>"
```

---

### Pushing, Step 3:  Pushing to remote

Push the code to remote:

```bash
$ git push
```

---

### Pulling

If others are working on the same repository, get the latest changes:

```bash
$ git pull
```

---