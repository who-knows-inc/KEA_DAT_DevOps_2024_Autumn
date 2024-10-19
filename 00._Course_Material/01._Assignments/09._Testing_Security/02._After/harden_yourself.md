# Harden Yourself

**Assignment Type:** Group work

**Motivation** Make your system more secure. 

---

## Introduction

Here are a bunch of resources. It is up to your grouop to decide which ones make sense to use.

For the first category of tools, consider how you can make them part of your CI/CD pipeline.

---

## Scan the code / container

--

### snyk

[snyk](https://snyk.io/) has a a database full of exploits. They've created multiple tools to help you find and fix vulnerabilities in your code.

1. Install snyk (`brew install snyk-cli` / `choco install snyk` / `npm i -g snyk`). You will then have to autheticate with:

```bash
$ snyk auth
```

2. You can run snyk on your project:

```bash
$ snyk test
```

3. You can also run snyk on a Docker container but I recommend Docker Scout for that.


---

### Docker scout

Docker also provides a vulnerability scanner:

https://docs.docker.com/scout/quickstart/

You can access it through Docker Desktop or through the command line.

---

### Trivy

Trivy is a general purpose security scanner:

https://github.com/aquasecurity/trivy


---

## Scan the website

--

### Mozilla Observatory

You can perform a website security test by entering your website URL:

https://observatory.mozilla.org/


---

### Detectify

A popular website security scanner but it requires an account:

https://detectify.com/


## Scan the server

--

### Lynis

Lynis is a security auditing tool for Unix and Linux based systems. It performs an in-depth security scan.

It will analyze your server from within and treat it as a white box as opposed to a black box.

```bash
$ apt install -y lynis
$ sudo lynis audit system
```

