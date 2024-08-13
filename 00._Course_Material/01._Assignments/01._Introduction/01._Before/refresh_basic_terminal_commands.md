# [Optional] Refresh basic terminal commands


**Type**: Individual


Windows users, use `Powershell`, or even better, `Windows subsystem for Linux`.

---


## Directories and moving

Output current directory (`pwd`):

```bash
$ pwd
```

Change into a directory (`cd`):

```bash
$ cd <directory>
```

Move one directory up (note: `..` is a special directory name that is the parent of the current directory):

```bash
$ cd ..
```

---

## Listing files and directories

List directory contents (`ls`):

```bash
$ ls
```

List directory contents with details (`ls -l`):

```bash
$ ls -l
```

List directory contents with details and hidden files (`ls -la`):

```bash
$ ls -la
```

---

## Listing files in a directory

List files in a directory (`ls <directory>`):

```bash
$ ls <directory>
```

List files in this directory (note: `.` is a special directory name that refers to the current directory):

```bash
$ ls .
```

---

<div class="exercise-card" style="color: green;">
    <h1>Exercise</h1>
</div>

How do you list the files in the parent directory?

---

## Creating and deleting directories

Create a new directory (`mkdir`):

```bash
$ mkdir <directory_name>
```

Delete a directory (`rmdir`):

```bash
$ rmdir <directory_name>
```

Delete a directory (`rm -rf`):

```bash
$ rm -rf <directory>
```

---

<div class="exercise-card" style="color: green;">
    <h1>Exercise</h1>
</div>

Create a directory called `test`, move into it and create a directory called `test2`.
Now move back into the parent directory and delete `test2` and `test`.

---

## File handling:

Copy a file (`cp`):

```bash
$ cp <source> <destination>
```

Move or rename a file (`mv`):

```bash
$ mv <source> <destination>
```

Delete a file (`rm`):

```bash
$ rm <filename>
```



