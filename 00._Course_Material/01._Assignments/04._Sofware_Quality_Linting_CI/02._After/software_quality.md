# Analyze software quality

Add maintainability and technical debt estimation tools to your projects and fix the most prominent issues.

**Type**: Group work

**Deadline**: Same as Mandatory II. Even though software quality is important, you can add this task to your kanban and do it later if you are swamped with higher priority tasks.

**Motivation**: Improve code quality and avoid technical debt.

---

## Task

These tools will analyze your code and provide you with a maintainability index and an estimation of the technical debt. 

They will also point out potential problems. You do not have to fix everything. But prominent issues that you agree on, should be fixed from now on.

They will also become part of your CI pipeline and you should try to keep the quality metrics high as you push new code. 

---

## SonarQube

The easiest way to get started with SonarQube is to use SonarCloud which is a readily available hosted version of SonarQube.

1. Navigate to https://sonarcloud.io/ and click the `Start Now -->` button. [Start Using SonarCloud](https://sonarcloud.io/) and login via GitHub.

2. Login via GitHub. 

3. Add a new project by clicking the `+` sign on the top right of the window followed by `Analyze new project`.

4. Select the repository or the repositories that you want to assess.

If you are interested, you can learn more about how SonarQube calculates metrics [here](https://docs.sonarqube.org/latest/user-guide/metric-definitions/#header-4).

---

## Code Climate

1. Navigate to https://codeclimate.com/quality and click the `Sign up with Github` button.

2. Choose `Sign up with Github` again. 

3. Select the repositories that you want to assess.


---

## Requirement for Mandatory II

After you have setup a these code quality tools and gone through the issues, your group should create a brief document that answers the following questions:

  - Do you agree with the findings?

  - Which ones did you fix?

  - Which ones did you ignore?

  - Why?

While only one can setup the integration with SonarQube, everyone should be able to answer the questions above for the exam. 

