# Security Breach!

A hacker has managed to breach the security of your application!

**Type**: Group

**Soft Deadline**: As soon as possible.

---

## Description

A hacker has managed to breach the security of your application and gained access to your database. To prove it he has hand-picked some users and sent them to you.  

Implement a feature that informs your users and forces them to change their password. 

There are many possible solutions. You could use email but informing is not enough. They must be forced to change password if they want to use your system. 

---

## Hacker message

Here is the message that the hacker sent to you:

```plaintext
To whom it may concern,

I have managed to breach your security. I have access to all your data. I will give yo a grace period to close the gap before I choose to act on your bad security. 

To prove that I am not making it up, here are some of your users and their corresponding passwords. 
```

<!-- todo     CREATE TABLE IF NOT EXISTS users (
        username TEXT NOT NULL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        group_name TEXT NOT NULL
    );-->
