# Different ways to create virtual environments in Python

Focusing on pros and cons of each and with argumentation for why we use Poetry

---

### No virtual environments

Try to run this program

```python
import emoji

print(emoji.emojize("Python is not :ambulance:"))
```

We can install it with `pip` but:
- Globally but don't want to pollute the global package space. What if projects need conflicting versions?
- Locally installed packages won't carry over to deployed servers. 

---

## virtualenv

virtualenv is handy and comes pre-installed with Python.

Then run it in the folder:
```bash
$ virtualenv .
```
OR point it to a folder you would like to virtualize:
```bash
$ virtualenv <foldername>
```

This creates the bin (binary) folder. Run activate: 
```bash
$ source ./bin/activate
```

Notice how the terminal prompt changes to indicate that you are now in a virtual environment. 

To deactivate, simply type:

```bash
$ deactivate
```

You don't want to push the bin folder. Solution:
```bash
$ pip freeze > requirements.txt 
```

To read from requirements: 
```bash
$ pip install -r requirements.txt
```

Downside: You must remember to freeze the requirements every time before you deploy. 

---

## pipenv

Install pipenv with pip. 

Run this in the folder:
```bash
$ pipenv install
```

```bash
$ pipenv install emoji
```

```bash
$ pipenv shell
```

Downside: Has its own non-standard Pipfile. Wouldn't it be nice to have a project file that follows the Python standard (PEP 518) and allows for creating and deploying Python packages?

https://peps.python.org/pep-0518/

---

## poetry

Install with or without pip (as described in the documentation). Homebrew or Choco are good ways of doing it. 

```bash
$ poetry init
```

With non-interactive mode:

```bash
$ poetry init -n
```

```bash
$ poetry install
```
```bash
$ poetry shell
```

To install additional libraries:
```bash
$ poetry add <library>
```

To initialize a project with a structure that includes tests etc.
```bash
$ poetry new <project_name>
```

---

## Bonus Info

For MacOS and Linux the virtual environments can be found here: .local/share/virtualenvs

For Windows it's probably somewhere around: %USERPROFILE%\AppData\Local\\....?

This is useful cause virtual environments cannot be named the same and can be deleted here. 
