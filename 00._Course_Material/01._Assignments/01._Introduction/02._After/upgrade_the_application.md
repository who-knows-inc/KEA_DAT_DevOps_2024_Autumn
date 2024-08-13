# Upgrade the application

Upgrade the server code from Python 2.0 to Python 3.x.x. Get a feel for the server. 

**Type**: Group work


**Motivation**: The goal is for everyone to study the code base and get familiar with the functionalities.


# The application

In case you missed it, the application can be found here:

https://github.com/who-knows-inc/whoknows_variations

The main branch is the same as what we copied from the server. 

## Converting from Python 2 -> 3.  

There are multiple ways to achieve this. One is to install and use the `2to3` tool.


#### Usage

Check installation and find some useful flags here.

```bash
$ 2to3 --help
```

You can run it on the server file like this:

```bash
$ 2to3 app.py
```

<!-- #### Check the result

In cause you use 2to3 to auto-fix it then save it to a different file and compare these two before you push the changes. 

For *nix systems, use the `diff` command to compare the files: 

```bash
$ diff app.py app.py3
```

For Windows use the FC (File Compare) command:

```powershell
$ FC app.py app.py3
``` -->



## Fix the shell script: `run_forever.sh`

In the `src` directory you can find `run_forever.sh` script. Use `shellcheck` to fix potential problems. 

#### Installation

MacOS:

```bash
$ brew install shellcheck
```

Windows:

```bash
$ choco install shellcheck
```

#### Usage

Assuming that you are in the `src` directory:

```bash
$ shellcheck run_forever.sh
```
