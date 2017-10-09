---
title: 'Command Line Guide'
taxonomy:
  category: docs
---

## Windows

- Assuming a successful build in a fresh repo...
- Click the start button and run cmd.exe (Command window):

```
cd <hifi_folder>/build/domain-server/Release
domain-server.exe

```

- In a second command window start the assignment-clients:

```
cd <hifi_folder>/build/assignment-client/Release
mkdir resources
assignment-client.exe -n 5

```

- In the Interface client: File --> Go To Domain... --> 127.0.0.1 (localhost)
- Please note that currently the assignment clients still take a lot of CPU.

*Note: Currently only Interface clients running on Windows seem to be able to connect to a domain-server running on Windows. Mac Interface clients will crash the moment they arrive.*

## Mac

- Assuming a successful build in a fresh repo...
- In a terminal start the domain-server:

```
=== navigate to the domain-server ===
directory cd ~/my-repo/build/domain-server/Debug/

=== run the executable ===
./domain-server

```

- In a second terminal start the assignment-clients:

```
cd ~/my-repo/build/assignment-client/Debug/
mkdir resources
./assignment-client -n 5

```

## Linux

- Assuming a successful build in a fresh repo...
- In a terminal start the domain-server:

```
cd ~/my-repo/build/domain-server/
./domain-server

```

- In a second terminal start the assignment-clients:

```
cd ~/my-repo/build/assignment-client/
mkdir resources
./assignment-client -n 6

```

- In the Interface client: File --> Go To Domain... --> 127.0.0.1

## General

To run your own domain-server make sure port 40102 is open and forwarded to the machine running the domain-server.
