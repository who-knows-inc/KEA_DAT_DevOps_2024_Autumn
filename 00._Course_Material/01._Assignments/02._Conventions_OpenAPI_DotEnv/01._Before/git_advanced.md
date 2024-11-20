# [Optional] Advanced git

Try out some fun git commands, but only if you have the time. This is very optional. 

**Type**: Individual

---

## Git log

See the commit history:

```bash
$ git log
```

This will show each commit. There is a SHA (unique identifier) associated with each commit. 

You can checkout a specific commit with:

```bash
$ git checkout <sha>
```

You can go back to the head of the branch (latest commit) with:

```bash
$ git checkout head
```

To see a graph of the commits:

```bash
$ git log --graph
```

You can quit by pressing `q`. 

The graph view is more interesting if you have multiple branches.

---

## Git stash

Stashing is helpful when you want to pull (requires uncommited file changes) but don't want to create a commit just yet. 

1. Try to create a new file with some content:

2. Stash (temprorarily shelve) changes:

```bash
$ git stash
```

3. Reapply the most recent stash:

```bash
$ git stash pop
```

It's also possible to stash by a name and apply a specific stash.

---

# When nothing else works...

"Just give me what is in the repository right now".
Warning: this throws away all your uncommited changes:

```bash
$ git reset --hard origin
```


