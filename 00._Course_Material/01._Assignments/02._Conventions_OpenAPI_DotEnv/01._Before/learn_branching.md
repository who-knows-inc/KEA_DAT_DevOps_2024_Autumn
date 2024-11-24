 # Learn branching

**Type**: Individual

**Deadline**: No fixed deadline but it might become useful this week already. 

**Motivation**: Branching should be second nature to you as should be used a lot in your group. 

---

## Setup

I recommend that you create a new repository for this task as a playground that can be deleted later.

---

## Let's get started

1. Consider where to create a branch.

A branch can be created:

- On GitHub
- Locally, using `git`

In this tutorial we will go with `git`. 


2. Create a new branch locally. 

```bash
$ git checkout -b <branch-name>
```

The `-b` flag creates a new branch.

In the future if you just want to switch to a branch you can simply do:

```bash
$ git checkout <branch-name>
```

3. Create a change. Add it. Commit it. 


4. Push the branch to GitHub.

```bash
$ git push -u origin <branch-name>
```

5. Create a pull request in the GitHub UI that someone else in the group accepts. 


6. You can always list all branches.

List all branches:

```bash 
$ git branch
```

List all branches (including remote branches):

```bash 
$ git branch -a
```

Note: You might need to press `q` to exit the list.