# Gather telemetry about the server via the terminal

**Type**: Group work

**Motivation**: You might learn something critical about the server and its performance.

---

## Introduction

The goal of this assignment is not to create a monitoring setup but to try out different commands to gather information about the server.

---

## Monitoring CPU usage

```bash
$ top
top - 14:24:42 up 13 days, 23:42,  1 user,  load average: 0.00, 0.00, 0.00
Tasks:  85 total,   1 running,  46 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.3 us,  0.3 sy,  0.0 ni, 99.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :  1009172 total,   187524 free,    98916 used,   722732 buff/cache
KiB Swap:        0 total,        0 free,        0 used.   728164 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND
29200 root      20   0   44540   4112   3520 R  0.3  0.4   0:00.04 top
    1 root      20   0  159928   9500   7056 S  0.0  0.9   0:10.70 systemd
    2 root      20   0       0      0      0 S  0.0  0.0   0:00.01 kthreadd
    4 root       0 -20       0      0      0 I  0.0  0.0   0:00.00 kworker/0:0H
```

---

## Load

```bash
$ uptime
 15:50:34 up 14 days,  1:08,  1 user,  load average: 0.00, 0.00, 0.00
```

---

## Monitoring Memory

```bash
$ free -m
              total        used        free      shared  buff/cache   available
Mem:            985          96         183           0         705         711
Swap:             0           0           0
```

---

## Excessive memory consumption

Finding if a program was killed by `OOMKiller` (Out of memory) due to excessive memory consumption:

```bash
$ grep -i -r 'killed process' /var/log/
$ dmesg | grep -i 'killed process'
```

---

## Monitoring the Network

```bash
sudo apt-get install iftop
sudo apt-get install nethogs
```

```
$ iftop
                12.5Kb          25.0Kb          37.5Kb          50.0Kb    62.5Kb
└───────────────┴───────────────┴───────────────┴───────────────┴───────────────
webserver                  => nat-10.XXX.XX              4.34Kb  4.57Kb  4.55Kb
                           <=                            2.23Kb  2.23Kb  2.21Kb
webserver                  => 67.207.67.3                   0b      0b     48b
                           <=                               0b      0b     81b
webserver                  => static-28.108.248.49-tata     0b      0b     16b
                           <=                               0b      0b     21b
webserver                  => 185.156.73.54                 0b      0b      8b
                           <=                               0b      0b     16b





────────────────────────────────────────────────────────────────────────────────
TX:             cum:   49.2KB   peak:   6.25Kb  rates:   4.34Kb  4.57Kb  4.62Kb
RX:                    28.0KB           4.23Kb           2.23Kb  2.23Kb  2.33Kb
TOTAL:                 77.2KB           9.73Kb           6.58Kb  6.80Kb  6.95Kb
```

```
$ nethogs
NetHogs version 0.8.5-2

    PID USER     PROGRAM                    DEV        SENT      RECEIVED
  29948 root     sshd: root@pts/0           eth0        0.757       0.490 KB/sec
      ? root     ...225.103.230:21-104.206              0.000       0.000 KB/sec
      ? root     ...225.103.230:4071-45.13              0.000       0.000 KB/sec
      ? root     ...225.103.230:23-75.165.              0.000       0.000 KB/sec
  28239 do-age.. ..pt/digitalocean/bin/do-  eth0        0.000       0.000 KB/sec
      ? root     unknown TCP                            0.000       0.000 KB/sec

  TOTAL                                                 0.757       0.490 KB/sec
```

---

## Disk

```bash
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            481M     0  481M   0% /dev
tmpfs            99M  620K   98M   1% /run
/dev/vda1        29G  4.9G   25G  17% /
tmpfs           493M     0  493M   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           493M     0  493M   0% /sys/fs/cgroup
/dev/vda15      105M  3.6M  101M   4% /boot/efi
tmpfs            99M     0   99M   0% /run/user/0
$ du -h
```

