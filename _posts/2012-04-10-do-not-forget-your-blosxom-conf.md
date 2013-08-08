---
layout: post
date: 2013-01-10 23:16:44
title: Don't forget Blosxom
subtitle: And keep in mind the config file
exc: Blosxom is a simple content management system written in Perl by Rael Dornfest. If you are new to this system, you might experience the same problem I had with the layout. This quick note should not be a how-to but rather a hint to setting up the blosxom.config correctly.
---

Blosxom is a simple content management system written in Perl by Rael Dornfest. It is lightweight yet feature rich and I certainly recommend to take it into consideration. This log is not a how-to install Blosxcom, but rather a quick note on a problem I ran into. To install [Blosxom][1] on Debian you start in SSH by updating your package-list and requesting the Blosxom package.

{% highlight bash %}
$ sudo apt-get update sudo 
{% endhighlight %}

Configuring is pretty straight forward and you will probably end up with the configuration file in your local `cgi-bin` folder. Now if you visit your website and it comes to your attention that just the default header and footer is shown, make sure to visit directory `/etc/blosxom/` and inspect the `blosxom.conf` file so that it points to the right `$data_dir`.

[1]:http://blosxom.sourceforge.net