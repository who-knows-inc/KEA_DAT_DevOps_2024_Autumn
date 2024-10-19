# fail2ban

Secure your server from bots trying to guess your password. 

**Type**: Group work

**Motivation**: Harden your server by preventing one-point brute-force attacks on your server.

---

## Why fail2ban exists

Check the amount of times bots on the internet have discovered your server and failed to guess your password.

```bash
$ sudo grep "Failed password" /var/log/auth.log
```

You should completely disable password authentication if you are using SSH. 

Fail2ban keeps track of IP addresses that try to gain access to your server and bans them for a certain amount of time.

---

## Installation

All you need to do is the following:

```bash
$ sudo apt install -y fail2ban
$ sudo systemctl enable fail2ban
$ sudo systemctl start fail2ban
```

`enable` will make sure that fail2ban starts on boot, and `start` will start it now.

---

## Configuration

This is not needed but if you are interested, you can learn how to configure fail2ban by reading the [official documentation](https://github.com/fail2ban/fail2ban/wiki), the section for [configuring fail2ban](https://github.com/fail2ban/fail2ban/wiki/Proper-fail2ban-configuration). For instance, you can set the number of failed login attempts before a ban is imposed, the duration of the ban, and the services to monitor.

