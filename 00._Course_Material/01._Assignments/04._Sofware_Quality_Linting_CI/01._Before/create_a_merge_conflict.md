# [Optional] Create a merge conflict

Try to create a merge conflict on purpose and learn how to resolve it. 

**Type**: Individual

**Motivation**: By learning how to create a merge conflict, you will understand why they happen and what situation causes them.

---

# Create a merge conflict - Step 1

Create a new folder and initialize it as a repository:

```bash 
$ git init
```

Create a new file with content:

```bash 
$ echo "Hello world" > example.txt
```

Add and commit the file:

```bash 
$ git add example.txt
$ git commit -m "Initial commit"
```

---

# Create a merge conflict - Step 2

Create a new branch:

```bash 
$ git checkout -b merge-conflict-branch
```

The new branch will have the file and content of the main branch.

Make changes in the new branch to the same file, same line:

```bash 
$ echo "Hello from feature branch" > example.txt 
$ git commit -am "Update message in feature branch"
```

---

# Create a merge conflict - Step 3

Checkout the main branch:

```bash 
$ git checkout main
```

**Status check**: So we have a file with different content in the main branch and the feature branch.

We want to have different content in the same line of the same file.

This is what will cause a merge conflict because git does not have a strategy for resolving this.


```bash 
$ echo "Main is changing the first line of example.txt" > example.txt 
$ git commit -am "Changed first line of example.txt"
```

---

# Create a merge conflict - Step 4

We are now going to merge the feature branch into the main branch.
    
```bash 
$ git merge merge-conflict-branch
```

This is the message:

```
Auto-merging example.txt
CONFLICT (content): Merge conflict in example.txt
Automatic merge failed; fix conflicts and then commit the result.
```

---

# Create a merge conflict - Step 5

There are many smart graphical tools for resolving merge conflicts.

Doing it manually is also an option. This is what the file looks like:

```
<<<<<<< HEAD
Main is changing the first line of example.txt
=======
Hello from feature branch
>>>>>>> merge-conflict-branch
```

Delete everything until there is only one line left (the one you want to keep or the combination of the two you want).

That's it! Now you can commit the changes.

---
