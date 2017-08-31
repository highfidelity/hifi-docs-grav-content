---
title: Cheatsheet for Installing in Linux Server
taxonomy:
    category: docs
---

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Launch a new host/instance</a></li>
<li><a href="#sec-2">2. Create a Non-root User</a></li>
<li><a href="#sec-3">3. Install Build Requirements</a></li>
<li><a href="#sec-4">4. Checkout High Fidelity's Source and Build</a></li>
<li><a href="#sec-5">5. Set up Systemd Files</a></li>
<li><a href="#sec-6">6. Run the Servers</a></li>
<li><a href="#sec-7">7. Adjust Server Settings</a></li>
<li><a href="#sec-8">8. Building on Older Ubuntu</a></li>
<li><a href="#sec-9">9. Domain Content</a></li>
</ul>
</div>
</div>


## Launch a new host/instance<a id="sec-1" name="sec-1"></a>

Sign up with <https://www.digitalocean.com/>

[Upload an ssh key](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets).

Create a [droplet](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet-virtual-server).  "Ubuntu 17.04 x64, 2 GB Memory / 40 GB Disk"
works well.  The next size down can also work, though it will become
overloaded if a few people visit the domain at once.

Visit digitalocean's [droplets](https://cloud.digitalocean.com/droplets) page and discover the ip address of
your new host.  Whenever you see `x.x.x.x` below, use the ip address.

## Create a Non-root User<a id="sec-2" name="sec-2"></a>

Log into the new host.  Make a non-root account and copy root's ssh
public keys into it.  Give the new account sudo rights with [usermod](https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-ubuntu-quickstart).

    ssh root@x.x.x.x
    adduser hifi
    cp -r ~root/.ssh ~hifi/.ssh
    chown -R hifi:hifi ~hifi/.ssh
    usermod -aG sudo hifi
    exit

## Install Build Requirements<a id="sec-3" name="sec-3"></a>

Log into the new host as the non-root user.  Install the prerequisites
for building High Fidelity's servers.

    ssh hifi@x.x.x.x
    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install build-essential libssl-dev cmake
    sudo apt-get install qt*5-dev libqt5quick5 libqt5websockets5-dev

## Checkout High Fidelity's Source and Build<a id="sec-4" name="sec-4"></a>

    git clone https://github.com/highfidelity/hifi.git
    cd hifi
    mkdir build
    cd build
    cmake -DCMAKE_BUILD_TYPE=Release -DSERVER_ONLY=TRUE ..
    make -j2

## Set up Systemd Files<a id="sec-5" name="sec-5"></a>

    sudo su
    mkdir -p /var/log/hifi/

    cat > /etc/systemd/system/domain-server.service <<EOF
    [Unit]
    Description=Domain Server service for High Fidelity
    After=network.target
    [Service]
    Restart=on-failure
    WorkingDirectory=/home/hifi/hifi/build/domain-server
    ExecStart=/bin/bash -c 'ulimit -c unlimited; /home/hifi/hifi/build/domain-server/domain-server 2>&1 >>  /var/log/hifi/domain-server.log'
    [Install]
    WantedBy=multi-user.target
    EOF

    cat > /etc/systemd/system/assignment-client.service <<EOF
    [Unit]
    Description=Assignment client service for High Fidelity server
    After=network.target
    PartOf=assignment-clients.target
    [Service]
    Restart=always
    Environment="LD_LIBRARY_PATH=/home/hifi/hifi/build/ext/makefiles/nvtt/project/lib/"
    WorkingDirectory=/home/hifi/hifi/build/assignment-client
    ExecStart=/bin/bash -c 'ulimit -c unlimited; /home/hifi/hifi/build/assignment-client/assignment-client -n7 2>&1 >> /var/log/hifi/assignment-client.log'
    [Install]
    WantedBy=assignment-clients.target
    EOF

## Run the Servers<a id="sec-6" name="sec-6"></a>

    systemctl start domain-server
    systemctl start assignment-client

## Adjust Server Settings<a id="sec-7" name="sec-7"></a>

Visit the domain-server page: <http://x.x.x.x:40100/> and add a password
(don't use a password that's in use elsewhere).

See [domain-server settings documentation](https://docs.highfidelity.com/create-and-explore/start-working-in-your-sandbox/server-settings-for-your-domain).

## Building on Older Ubuntu<a id="sec-8" name="sec-8"></a>

The only reason for Ubuntu 17 is to get acceptable Qt packages.  Older
Ubuntu works fine if you can run [Qt's installer](http://download.qt.io/official_releases/qt/5.9/).  It's possible to run
Qt's installer on a local Linux machine and install to ~/Qt, and
then

    rsync -avP ~/Qt/ hifi@x.x.x.x:Qt/

Depending on your net connection, you might also be able to just run
the installer from the cloud host and have it display on your local X
server.

Before running cmake, do

    export QT_CMAKE_PREFIX_PATH=/home/hifi/Qt/5.9/gcc_64/lib/cmake/

you'll need to adjust the path to match the exact version of Qt you
install.  If this works, cmake will configure the build to use the Qt
libraries from ~/Qt rather than looking for system libraries.

## Domain Content<a id="sec-9" name="sec-9"></a>

Built this way, the entity data will be here:

    /home/hifi/.local/share/High Fidelity - dev/assignment-client/entities/models.json.gz

It would make sense to set up a recurring backup of this directory.

You may also want to give this server a [place name](https://docs.highfidelity.com/create-and-explore/start-working-in-your-sandbox/place-names).
