---
layout: post
date: 2012-11-09 11:30:00
title: Access local WordPress on iPad
exc: While developing web apps I use MAMP to run a server locally on my iMac. Usually I test my websites only locally and use Safari and Chrome, but this time I was curious if the infamous Internet Explorer would survive accessing my website and how well other devices like iPad and iPhone would handle it.
---

While developing web apps I use MAMP to run a server locally on my iMac. Usually I test my websites only locally and use Safari and Chrome, but this time I was curious if the infamous Internet Explorer would survive accessing my website and how well other devices like iPad and iPhone would handle it. So I would try to access my iMac with other devices which are connected to my local network.

The critical point here was the WordPress URL. I will describe briefly how to set it up properly, so that it can be viewed on other devices which are connected to the local network.

- Open up Terminal, enter `ipconfig getifaddr en0` and get your IP.
- In MAMPs settings find out your Apache port, which is usually 80 or 8888
- Access your wp-admin, navigate to your general settings and change `localhost` to `192.168.1.105:8888` if your IP is that arbitrary number I have chosen and 8888 is your Apache port

You are good to go.