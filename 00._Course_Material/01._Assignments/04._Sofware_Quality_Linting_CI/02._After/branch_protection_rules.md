# Branch protection rules

**Type**: Group work

**Deadline**: No fixed deadline. 

---

## Introduction

This is an extension of the `research git branching strategies` assignment. With this assignment, you can enforce some rules regarding your chosen strategy. 

## What are branch protection rules?

Branch protection rules can, for instance, help secure the main branch so that it doesn't get accidentally broken.

Learn more about them here:

https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule


## How to setup a branch protection rule

In this example, the rule requires at least two people to review a pull request before being able to merge with main.

1. **⚙️ Settings**: Navigate to your repository on GitHub. Click on the "Settings" tab at the top.
2. **🌿 Branches**: In the settings menu, find and click on the "Branches" menu located on the left side.
3. **🔒 Branch Protection Rules**: Scroll down to the "Branch protection rules" section.
4. **✏️ Edit**: Find the branch you want to set rules for and click on "Edit" (or "Add rule" if you're setting this up for the first time).
5. **🔀 Require a Pull Request Before Merging**:
    - Check the option "Require a pull request before merging".
    - 🧑‍⚖️ **Required Number of Approvals**: Set the "Required number of approvals before merging" to **`2`**.
6. **✅ Require Status Checks**:
    - Check "Require status checks to pass before merging".
    - 🔍 **Search and Select Status Checks**: Search for the specific status checks you want to require and select them.
7. **💾 Save**: Once you're done setting up your rules, don't forget to save the changes.


## What other rules could be helpful?

Branch protection rules can help you enforce passing tests, limit who can push to a branch and more.