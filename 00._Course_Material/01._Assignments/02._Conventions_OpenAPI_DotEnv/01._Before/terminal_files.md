# Terminal Files

Work with files through the terminal. 


**Type**: Individual

**Motivation**: This will help you when you want to work with files on the server. (You are welcome to skip the Windows sections if they do not apply to you). 


---

## File creation (*nix):

Output hello:

```bash
$ echo hello
```

Create an empty file (`touch`):

```bash
$ touch <filename>
```

Display file contents (`cat`):

```bash
$ cat <filename>
```

---

## File creation (Windows):

Create a new file (PowerShell):

```powershell
New-Item <filename> -ItemType "file"
```

Display file contents (PowerShell):

```powershell
Get-Content <filename>
```

---

## Tips regarding files

Avoid spaces in files and folders!

**Use Descriptive Names**: Choose file names that clearly indicate the content or purpose of the file.

**Avoid Special Characters**: Besides spaces, avoid using special characters like `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|`, etc.

**Cross-Platform Compatibility**: If files will be used across different operating systems, consider compatibility (e.g., case sensitivity in file names in \*NIX vs. Windows).

---

## Hidden files and folders

**In *nix**, a file or folder is made hidden by prefixing its name with a dot `.`. For example, `.example`.

**In Windows**, the 'hidden' attribute is set on the file or folder, which can be done through file properties or using the command `attrib +h`.

Finder / Explorer can be configured to either show or hide hidden folders / files. 


---

## Text Editors - Windows: 

No native text editors for the terminal. Alternatives (but will not work on servers):

```powershell
$ notepad <filename>
```

```powershell
$ code <filename>
```

---

## Text Editors in *nix Systems

#### **Nano**: Simple and User-Friendly.

#### **Vi/Vim**: Advanced and Powerful: Offers extensive functionality for complex editing tasks.

---

# Vim

**Multiple Modes**:

- **Normal Mode**: Default mode for navigation and command execution.

- **Insert Mode**: Allows typing and editing text, similar to standard text editors.

- **Visual Mode**: Enables text selection using arrow keys; supports standard clipboard operations.

- **Visual Block Mode**: Facilitates block-shaped text selection and manipulation.

---

# Using a different editor for Git

If you have ever typed `git commit` without the `-m`, you will be presented with the `vim` editor. 

If you prefer nano, you can change the default editor for `git` like this:

```bash
$ git config --global core.editor "nano"
```

---

# Install Nano and Vim on Windows:

Depending on your terminal you might already have them. 

You can test it by running `nano` or `vim`. Otherwise:

```bash
$ choco install nano
```

```bash
$ choco install vim
```
---

## Quitting

The last part is not only about files but it's generally useful how to quit any program in the terminal.

Different programs have different ways to terminate them. The most common are:

```
q
```

```
:q
```

```
:q!
```

```
CTRL-C
```

```
CTRL-D
```

---


