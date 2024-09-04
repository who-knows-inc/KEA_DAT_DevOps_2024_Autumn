# Create a PR to repositories.py

Add your group to [repositories.py](/repositories.py) which is in the root of the semester repository. 

**Type**: Group work

**Deadline**: 1 day before the next lecture

**Hard Deadline**: By week 2 lecture


## `repositories.py`

The file may look like this before other groups update it:

```python
GROUP_REPOS = [
        {
            "name": "Example Group",
            "gitLinks": ["https://<git_link>"],
            "backend": "http(s)://<IP_DOMAIN>/<APIURL>",
            "frontend": "http(s)://<IP_DOMAIN>/<FrontEndURL>",
            "monitoring": "http(s)://<IP_DOMAIN>/<MonitoringURL>",
            "stack": ["Flask", "Svelte", "CouchDB", "Redis"],
            "documentation": ["link to documentation", "another link if it applies", "et cetera"],
            "sla": "link to sla",
        }
]
``` 

1. Create a new `dict` and add the template:

`dict` is the data structure in Python which looks similar to JSON. 

Paste the following template in the `GROUP_REPOS` list variable:

```python
{
    "name": "",
    "gitLinks": [""],
    "backend": "",
    "frontend": "",
    "monitoring": "",
    "stack": [],
    "documentation": [],
    "sla": "",
}
```

2. By next week you must fill the values for the following keys: 

- `name`: The name of your group.

- `gitLinks`: The link(s) to your repositories.


3. Validate the syntax: 

Remember commas after the last dict when you add a new one.

To validate the file before making a PR, you can use the following command:

```bash
$ python -m py_compile repositories.py
```

4. **IMPORTANT** Get the latest changes. 

Just before you push your changes, make sure you have the latest changes from the repository. See [Pulling from the Original Repository into your fork](#pulling-from-the-original-repository-into-your-fork) for more information.


If you do not do this then merge conflicts will occur. 

5. Make a PR.

Here are some resources to help you get started:

[![How to make a PR](http://img.youtube.com/vi/8lGpZkjnkt4/0.jpg)](https://www.youtube.com/watch?v=8lGpZkjnkt4)

https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests

https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project


4. Make sure to update this file with the correct information throughout the course. Let me know if you've made a pull request later on and I miss it.


## Pulling from the original repository into your fork

It is **crucial** that you do this before you push changes and make a PR. Otherwise, you might encounter merge conflicts with other groups. 

1. Add the original repository as a remote:

```bash
$ git remote add upstream <original-repo-url>
```

2. Fetch the latest changes from the original repository:

```bash
$ git fetch upstream
```

3. Merge the changes into your local branch:

```bash
$ git merge upstream/main
```

4. Push the merged changes to your forked repository (Adding origin and branch name is optional):

```bash
$ git push <origin main>
```

