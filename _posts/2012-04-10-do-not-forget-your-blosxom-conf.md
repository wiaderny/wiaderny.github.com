---
layout: post
date: 2013-01-10 23:16:44
title: Don't forget your bloscom config
---

To install [Blosxom][1] on Debian you start in SSH by updating your package-list and requesting the Blosxom package.

{% highlight bash %}
$ sudo apt-get update sudo 
{% endhighlight %}

Configuring is pretty straight forward and you will probably end up with the configuration file in your local `cgi-bin` folder. Now if you visit your website and it comes to your attention that just the default header and footer is shown, make sure to visit directory `/etc/blosxom/` and inspect the `blosxom.conf` file so that it points to the right `$data_dir`.

[1]:http://www.blosxom.com/