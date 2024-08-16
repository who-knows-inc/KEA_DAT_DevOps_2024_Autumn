# [Optional] Advanced git

Try out some fun git commands, but only if you have the time. This is very optional. 

**Type**: Individual

---

## Git log

```bash
$ git log —graph,
```

Commit sha:

```bash
$ git checkout <sha>
```

```bash
$ git checkout head
```

```bash
$ git checkout main
```

---

## Git stash

Stashing is helpful when you want to pull (requires uncommited file changes) but don't want to create a commit just yet. 

Stash (temprorarily shelve) changes:

```bash
$ git stash
```

Reapply the most recent stash:

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


